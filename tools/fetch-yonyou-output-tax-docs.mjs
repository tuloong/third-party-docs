import fs from "node:fs/promises";
import path from "node:path";

const ROOT_URL = "https://open.yonyoucloud.com";
const BASE_URL = `${ROOT_URL}/iuap-ipaas-base`;
const OUTPUT_DIR = path.resolve("providers/yonyoucloud/yonbip/tax/output-tax");
const API_DIR = path.join(OUTPUT_DIR, "apis");

const GROUP_PARAMS = {
  domainAppCode: "TAXOT",
  treeNodeType: "3",
  integrateSysId: "yonsuite",
  isOrigin: "0",
};

const CATEGORY_LABELS = {
  "Red Letter Application Form": "红字申请表",
  "Export declaration form": "出口报关单",
  "Invoicing Doc Pool": "开票单据池",
  "Invoice Request": "开票申请单",
  Invoicing: "开票",
  "Outbound Enterprise Invoice Folder": "销项企业票夹",
};

const SCENARIOS = [
  {
    name: "先生成开票申请，再驱动开票",
    steps: [
      "使用开票申请单新增或批量新增接口写入待开票数据。",
      "按来源单号或请求流水号查询申请单处理结果。",
      "调用驱动开票、合并/拆分驱动开票接口。",
      "使用发票状态查询或批量状态查询轮询开票结果。",
      "开票成功后进入销项企业票夹，可查询版式文件、重发短信/邮件、入账或归档。",
    ],
    keywords: ["Invoice Application", "drives invoicing", "Status Inquiry", "Layout File", "Sales Invoice"],
  },
  {
    name: "直接开具蓝票/红票",
    steps: [
      "蓝票优先使用 Issue Blue Invoice；需要自动拆分时使用 Open Blue Invoice - Automatic Split。",
      "全额红冲使用 Issue Red Invoice - Full Amount；部分红冲使用 Issue Red Invoice - Partial。",
      "开票请求提交后保存请求流水号，随后调用状态查询接口获取发票号码、代码、开票状态和失败原因。",
    ],
    keywords: ["Issue Blue", "Open Blue", "Issue Red", "Invoice Status"],
  },
  {
    name: "红字信息确认单",
    steps: [
      "新增或修改红字确认单。",
      "上传、新增并上传、确认或撤销确认单。",
      "按发起方/接收方查询并更新确认单状态。",
      "使用红字信息表编号查询接口同步信息表号。",
    ],
    keywords: ["Credit Confirmation", "Red Character", "Red Letter"],
  },
  {
    name: "票夹后处理",
    steps: [
      "使用销项发票批量查询接口获取已开票数据。",
      "按业务需要查询版式文件、二维码交付链接，或重发短信/邮件。",
      "入账、取消入账、更新核算主体和项目信息。",
      "需要归档时使用电子会计档案相关接口查询推送状态、测试数据源、查询附件。",
    ],
    keywords: ["Sales Invoice", "Layout File", "QR Code", "Resend", "Accounting", "Archive", "Attachment"],
  },
];

function asQuery(params) {
  const query = new URLSearchParams();
  for (const [key, value] of Object.entries(params)) {
    if (value !== undefined && value !== null && value !== "") {
      query.set(key, String(value));
    }
  }
  query.set("isAjax", "1");
  return query.toString();
}

async function getJson(pathname, params = {}) {
  const url = `${BASE_URL}${pathname}?${asQuery(params)}`;
  const response = await fetch(url, {
    headers: {
      "x-requested-with": "XMLHttpRequest",
      "accept-language": "zh-CN,zh;q=0.9,en;q=0.8",
    },
  });
  if (!response.ok) {
    throw new Error(`GET ${url} failed: ${response.status} ${response.statusText}`);
  }
  const json = await response.json();
  if (!json.success) {
    throw new Error(`GET ${url} returned failure: ${json.code || ""} ${json.message || ""}`);
  }
  return { url, data: json.data };
}

function slugify(value) {
  const slug = String(value || "")
    .normalize("NFKD")
    .replace(/[^\w\s-]/g, "")
    .trim()
    .replace(/[_\s]+/g, "-")
    .replace(/-+/g, "-")
    .toLowerCase();
  return slug || "api";
}

function md(value) {
  return String(value ?? "")
    .replace(/\r\n/g, "\n")
    .replace(/\|/g, "\\|")
    .replace(/\n/g, "<br>");
}

function required(value) {
  return value === true || value === 1 || value === "1" ? "是" : "否";
}

function bool(value) {
  return value === true || value === 1 || value === "1" ? "是" : "否";
}

function paramPath(node, parentPath = "") {
  if (node.fullName) return node.fullName;
  if (node.i18nPath) {
    return node.i18nPath.replace(/^(BodyParam|QueryParam|PathParam|ReturnParam)\./, "");
  }
  return parentPath ? `${parentPath}.${node.name}` : node.name;
}

function flattenParams(nodes = [], parentPath = "", rows = [], depth = 0) {
  for (const node of nodes || []) {
    const currentPath = paramPath(node, parentPath);
    rows.push({
      path: currentPath,
      name: node.name,
      type: node.paramType || "",
      array: bool(node.array),
      required: required(node.required),
      example: node.example ?? node.defaultValue ?? "",
      desc: node.paramDesc || node.paramDesc_i?.zh_CN || "",
      depth,
    });
    if (node.children?.length) {
      flattenParams(node.children, currentPath, rows, depth + 1);
    }
  }
  return rows;
}

function table(headers, rows) {
  if (!rows.length) return "无。\n";
  return [
    `| ${headers.join(" | ")} |`,
    `| ${headers.map(() => "---").join(" | ")} |`,
    ...rows.map((row) => `| ${row.map(md).join(" | ")} |`),
    "",
  ].join("\n");
}

function wrapText(value, width = 110) {
  const text = String(value ?? "")
    .replace(/\r\n/g, "\n")
    .replace(/<br\s*\/?>/gi, "\n")
    .replace(/\n{3,}/g, "\n\n");
  return text
    .split("\n")
    .flatMap((line) => {
      if (line.length <= width) return [line];
      const parts = [];
      let current = line;
      while (current.length > width) {
        let index = current.lastIndexOf(" ", width);
        if (index < 40) index = width;
        parts.push(current.slice(0, index).trimEnd());
        current = current.slice(index).trimStart();
      }
      if (current) parts.push(current);
      return parts;
    })
    .join("\n");
}

function paramList(title, rows) {
  if (!rows.length) return `### ${title}\n\n无。\n`;
  const body = rows.map((row, index) => {
    const lines = [
      `${index + 1}. \`${row.path}\``,
      `   - 类型：${row.type || "未标注"}`,
      `   - 数组：${row.array}`,
      `   - 必填：${row.required}`,
    ];
    if (row.example) {
      lines.push(`   - 示例/默认值：\`${String(row.example).replace(/`/g, "'")}\``);
    }
    if (row.desc) {
      lines.push(`   - 说明：${wrapText(row.desc).split("\n").join("\n     ")}`);
    }
    return lines.join("\n");
  }).join("\n\n");
  return `### ${title}\n\n${body}\n`;
}

function codeBlock(value, lang = "text") {
  if (!value) return "无。\n";
  return `\`\`\`${lang}\n${String(value).replace(/```/g, "'''")}\n\`\`\`\n`;
}

function gatewayUrl(detail) {
  return detail.address || `https://c2.yonyoucloud.com/iuap-api-gateway${detail.completeProxyUrl || detail.proxyUrl || ""}`;
}

function sampleCurl(detail) {
  const method = detail.httpRequestType || detail.serviceHttpMethod || "POST";
  const url = gatewayUrl(detail);
  const lines = [
    `curl -X ${method} '${url}?access_token=访问令牌'`,
    "  -H 'Content-Type: application/json'",
  ];
  if (method.toUpperCase() !== "GET") {
    lines.push("  -d '{\"data\": {}}'");
  }
  return lines.join(" \\\n");
}

function apiPage(api, sectionName, detail, detailUrl) {
  const requestRows = flattenParams(detail.paramDTOS);
  const queryRows = flattenParams(detail.queryParamDTOS);
  const returnRows = flattenParams(detail.paramReturnDTOS);
  const errorRows = (detail.errorCodeDTOS || []).map((item) => [
    item.errorCode || item.code || "",
    item.errorMsg || item.message || item.errorDesc || "",
    item.solution || "",
  ]);
  const sourcePage = `${ROOT_URL}/#/doc-center/docDes/api?apiId=${detail.id}&isOrigin=1&selectApiTab=open&from=&iframe=`;
  const method = detail.httpRequestType || detail.serviceHttpMethod || "";
  const pathValue = detail.completeProxyUrl || detail.proxyUrl || "";

  return `# ${detail.name || api.apiName}

来源页面：

- ${sourcePage}

机器可抓取的详情接口：

- ${detailUrl}

## 基本信息

- apiId：${detail.id}
- API 类目：${detail.apiClassifyName || sectionName || api.category || ""}
- 所属目录：${CATEGORY_LABELS[sectionName] || sectionName || api.category || ""}（${sectionName || api.category || ""}）
- 产品：${detail.productName || ""}
- 更新时间：${detail.gmtUpdate || ""}
- 请求方法：${method}
- Content-Type：${detail.contentType || ""}
- 接口路径：${pathValue}
- 完整调用地址：${gatewayUrl(detail)}
- 鉴权方式：access_token 作为 Query 参数传递（?access_token=）
- 当前状态：${detail.deprecated ? "即将废弃/历史接口" : "当前接口"}
- 请求字段数：Query ${queryRows.length} 个，Body ${requestRows.length} 个
- 返回字段数：${returnRows.length} 个

## 对接要点

- 调用 URL：\`${gatewayUrl(detail)}?access_token={access_token}\`
- 调用方必须保存业务来源单号、发票请求流水号、请求报文、响应报文和状态查询结果，便于重试和对账。
- 开票、红冲、作废、驱动开票等写操作建议用业务唯一号做幂等控制；同一业务单不要生成多个不同流水号反复提交。
- 返回成功只代表接口调用成功，不一定代表税局或开票终态成功；涉及开票结果时必须再调用状态查询类接口确认。
- 详情接口返回字段说明可能为英文，字段名以开放平台原始字段为准。

## 调用模板

${codeBlock(sampleCurl(detail), "bash")}
## 请求参数

${paramList("Query 参数", queryRows)}
> 注：开放平台网关调用时通常还需传递 \`access_token\`。

${paramList("Body 参数", requestRows)}
## 请求示例

${codeBlock(detail.requestParamsDemo)}
## 返回参数

${paramList("返回字段", returnRows)}
## 返回示例

### 成功示例

${codeBlock(detail.apiDemoReturnRightDemo || detail.apiDemoReturnDTO?.rightDemo || "")}
### 失败示例

${codeBlock(detail.apiDemoReturnErrorDemo || detail.apiDemoReturnDTOError?.errorDemo || "")}
## 错误码

${table(["错误码", "错误说明", "处理建议"], errorRows)}
`;
}

function integrationGuidePage(sections, details, generatedAt) {
  const allRows = [];
  for (const section of sections) {
    for (const api of section.apiList || []) {
      const detail = details.get(api.apiId);
      const data = detail.data;
      allRows.push({
        section: section.name,
        sectionCn: CATEGORY_LABELS[section.name] || section.name,
        name: api.apiName,
        fileName: detail.fileName,
        apiId: api.apiId,
        method: data.httpRequestType || data.serviceHttpMethod || "",
        path: data.completeProxyUrl || data.proxyUrl || "",
        requestCount: flattenParams(data.paramDTOS).length + flattenParams(data.queryParamDTOS).length,
        returnCount: flattenParams(data.paramReturnDTOS).length,
        updatedAt: data.gmtUpdate || "",
      });
    }
  }

  const scenarioBlocks = SCENARIOS.map((scenario) => {
    const matches = allRows.filter((row) =>
      scenario.keywords.some((keyword) => row.name.toLowerCase().includes(keyword.toLowerCase())),
    );
    return `### ${scenario.name}

${scenario.steps.map((step, index) => `${index + 1}. ${step}`).join("\n")}

相关接口：

${table(["接口", "方法", "路径"], matches.map((row) => [`[${row.name}](apis/${row.fileName})`, row.method, row.path]))}`;
  }).join("\n");

  const categoryBlocks = sections.map((section) => {
    const rows = allRows.filter((row) => row.section === section.name);
    return `### ${CATEGORY_LABELS[section.name] || section.name}（${section.name}）

${table(["接口", "apiId", "方法", "路径", "请求字段", "返回字段", "更新时间"], rows.map((row) => [
  `[${row.name}](apis/${row.fileName})`,
  row.apiId,
  row.method,
  row.path,
  row.requestCount,
  row.returnCount,
  row.updatedAt,
]))}`;
  }).join("\n");

  return `# 用友 YonBIP 销项接口详细对接指南

抓取时间：${generatedAt}

## 适用范围

本文档整理开放平台“税务服务 / 销项发票管理（TAXOT）”当前返回的 ${allRows.length} 个开放接口，面向本地系统对接开发、联调和排障使用。接口原始详情见同级 \`apis/\` 目录，每个接口包含请求字段、返回字段、请求示例、返回示例和错误码。

## 接入前提

- 已在用友开放平台完成应用创建、授权范围配置和调用方身份配置。
- 已按平台通用规则获取 \`access_token\`，调用时作为 Query 参数附加到网关 URL。
- 调用域名使用开放平台网关：\`https://c2.yonyoucloud.com/iuap-api-gateway\`。
- 生产联调前需要确认税号、开票点、票种、特殊票种、商品编码、税率、购买方信息等基础档案已在 YonBIP 税务服务侧配置完整。

## 统一调用规范

1. 拼接 URL：\`https://c2.yonyoucloud.com/iuap-api-gateway{接口路径}?access_token={access_token}\`。
2. 使用接口详情页标注的 HTTP 方法，多数接口为 \`POST\` + \`application/json\`。
3. 写操作必须记录本地业务单号、请求流水号、请求体、响应体、提交时间、重试次数和最终状态。
4. 不要只依据首次提交响应判断开票成功，必须使用状态查询接口或票夹查询接口确认终态。
5. 对状态类接口建议做有限次数轮询，失败后进入人工处理队列，避免无限重试。
6. 对废弃/历史接口，除非存量系统兼容需要，否则优先选择同目录中的新接口。

## 推荐落库字段

| 字段 | 说明 |
| --- | --- |
| source_bill_id | 本地来源单据主键或业务单号 |
| request_no | 本地生成的接口请求流水号，例如开票请求流水号 |
| api_id / api_path | 调用的开放平台接口标识和路径 |
| tax_no | 销售方税号 |
| invoice_type / special_type | 发票类型和特殊票种 |
| request_payload / response_payload | 原始请求和响应 JSON |
| platform_status | 平台返回状态 |
| invoice_code / invoice_no | 发票代码、发票号码 |
| fail_code / fail_message | 失败码和失败原因 |
| submitted_at / finished_at | 提交时间和终态时间 |

## 典型对接流程

${scenarioBlocks}
## 接口分组明细

${categoryBlocks}
## 联调检查清单

| 检查项 | 要点 |
| --- | --- |
| 鉴权 | \`access_token\` 是否有效，是否传在 Query 参数 |
| URL | 是否使用 \`/iuap-api-gateway\` 网关前缀加接口路径 |
| 幂等 | 同一业务单是否复用同一个业务唯一号/请求流水号 |
| 必填字段 | 详情页 Body 参数中“必填=是”的字段是否全部赋值 |
| 票种 | \`fplx\`、\`tspz\`、特殊票种扩展字段是否匹配业务场景 |
| 金额税额 | 含税/不含税金额、税率、税额、小数精度是否符合平台要求 |
| 状态同步 | 提交后是否调用状态查询接口，是否保存失败原因 |
| 交付 | 需要短信、邮箱、二维码或版式文件时，是否调用对应票夹接口 |
| 异常处理 | 超时、重复提交、平台业务失败是否进入可追踪的人工处理流程 |

## 本地文件说明

| 文件 | 说明 |
| --- | --- |
| \`README.md\` | 目录总览、分类统计、全部接口清单 |
| \`INTEGRATION-GUIDE.md\` | 面向开发对接的详细流程和接口选择指南 |
| \`apis/*.md\` | 每个接口的完整字段、示例、错误码 |
| \`source.json\` | 目录接口原始返回，便于排查接口数量差异 |
`;
}

function indexPage(sections, details, generatedAt) {
  const total = sections.reduce((sum, section) => sum + (section.apiList?.length || 0), 0);
  const rows = [];
  for (const section of sections) {
    for (const api of section.apiList || []) {
      const detail = details.get(api.apiId);
      rows.push([
        section.name,
        `[${api.apiName}](apis/${detail.fileName})`,
        api.apiId,
        detail.data.httpRequestType || detail.data.serviceHttpMethod || "",
        detail.data.completeProxyUrl || detail.data.proxyUrl || "",
        api.deprecated ? "是" : "否",
      ]);
    }
  }

  const sectionRows = sections.map((section) => [
    section.name,
    section.apiList?.length || 0,
  ]);

  return `# 用友 YonBIP 税务服务 - 销项接口本地对接文档

来源页面：

- https://open.yonyoucloud.com/#/doc-center/docDes/api?activeId=TAXOT&activeNodeType=3&isOrigin=0&selectApiTab=open&from=&iframe=

抓取时间：${generatedAt}

## 范围说明

- 当前开放平台目录接口返回 ${total} 个销项接口。
- 用户截图标注为“销项一共 63 个接口”，但本次通过页面渲染 DOM 和目录接口 \`/openPortal/api/groupApiByApiClassify\` 校验，当前返回为 ${total} 个接口。
- 当前详情接口返回的 API 名称、字段说明多为英文；中文类目名来自详情接口的 \`apiClassifyName\` 字段。
- 本目录下 \`apis/\` 每个接口一个 Markdown 详情页，字段表与示例来自开放平台详情接口 \`/openPortal/api/getByVersionForTest/{apiId}/running\`。

## 通用调用约定

- 网关地址前缀：\`https://c2.yonyoucloud.com/iuap-api-gateway\`
- 鉴权参数：\`access_token\` 作为 Query 参数传递。
- 请求体：多数接口为 \`application/json\`，以各接口详情页为准。

## 分类统计

${table(["分类", "接口数"], sectionRows)}
## 接口清单

${table(["分类", "API 名称", "apiId", "方法", "路径", "历史/废弃"], rows)}
`;
}

await fs.mkdir(API_DIR, { recursive: true });

const { url: groupUrl, data: sections } = await getJson("/openPortal/api/groupApiByApiClassify", GROUP_PARAMS);
const details = new Map();
const usedNames = new Map();

for (const section of sections) {
  for (const api of section.apiList || []) {
    const detailResult = await getJson(`/openPortal/api/getByVersionForTest/${api.apiId}/running`, {
      scene: "open",
      isOrigin: api.isOrigin ?? 1,
    });
    const detail = detailResult.data;
    const baseName = slugify(api.apiName);
    const count = (usedNames.get(baseName) || 0) + 1;
    usedNames.set(baseName, count);
    const fileName = count === 1 ? `${baseName}.md` : `${baseName}-${api.apiId}.md`;
    await fs.writeFile(path.join(API_DIR, fileName), apiPage(api, section.name, detail, detailResult.url), "utf8");
    details.set(api.apiId, { data: detail, fileName });
  }
}

await fs.writeFile(
  path.join(OUTPUT_DIR, "README.md"),
  indexPage(sections, details, new Date().toISOString()),
  "utf8",
);

await fs.writeFile(
  path.join(OUTPUT_DIR, "INTEGRATION-GUIDE.md"),
  integrationGuidePage(sections, details, new Date().toISOString()),
  "utf8",
);

await fs.writeFile(
  path.join(OUTPUT_DIR, "source.json"),
  JSON.stringify({ groupUrl, generatedAt: new Date().toISOString(), sections }, null, 2),
  "utf8",
);

console.log(`Generated ${details.size} API docs in ${OUTPUT_DIR}`);

# Issue Red Invoice - Partial (Partial Red Flush of Original Invoice)

来源页面：

- https://open.yonyoucloud.com/#/doc-center/docDes/api?apiId=2150786031362244612&isOrigin=1&selectApiTab=open&from=&iframe=

机器可抓取的详情接口：

- https://open.yonyoucloud.com/iuap-ipaas-base/openPortal/api/getByVersionForTest/2150786031362244612/running?scene=open&isOrigin=1&isAjax=1

## 基本信息

- apiId：2150786031362244612
- API 名称：Issue Red Invoice - Partial (Partial Red Flush of Original Invoice)
- 产品：税务服务
- 更新时间：2025-09-02 15:22:53.000
- 请求协议：HTTP
- 请求方法：POST
- Content-Type：application/json
- 接口路径：/yonbip/tax/invoiceclient-web/api/invoiceApply/part-red-withjson
- 完整调用地址：https://c2.yonyoucloud.com/iuap-api-gateway/yonbip/tax/invoiceclient-web/api/invoiceApply/part-red-withjson
- 认证要求：`auth=true`
- 鉴权方式：URL Query 中附带 `access_token`

## 请求参数

### Query 参数

| 字段名 | 类型 | 必填 | 说明 | 示例值 |
| --- | --- | --- | --- | --- |
| access_token | string | 是 | 平台访问令牌。线上参数表未单列该字段，但线上 URL 示例显式包含该参数 | `访问令牌` |

### Body 顶层字段

Body 为 JSON，对象根节点为 `data`。

| 字段名 | 类型 | 必填 | 说明 | 示例值 |
| --- | --- | --- | --- | --- |
| data | object | 否 | Data Body | `线上未提供` |
| data.autoAudit | boolean | 否 | 是否自动审核。`true` 表示自动审核并直接开票；`false` 表示不自动审核，需要人工确认；未传时默认 `true` | `false` |
| data.einvoiceApplyList | array<object> | 否 | 开票请求体 | `线上未提供` |
| data.emailConfigList | array<object> | 否 | 邮箱交付信息 | `线上未提供` |
| data.smsConfigList | array<object> | 否 | 短信交付信息 | `线上未提供` |
| data.urlConfigList | array<object> | 否 | URL 交付信息 | `线上未提供` |
| data.auditReturnConfigs | array<object> | 否 | 退回地址信息 | `线上未提供` |

### data.einvoiceApplyList[] 字段

| 字段名 | 类型 | 必填 | 说明 | 示例值 |
| --- | --- | --- | --- | --- |
| data.einvoiceApplyList[].orgcode | string | 否 | 开票税务组织编码。同一税号关联多个开票点时，用于确定唯一开票点 | `线上未提供` |
| data.einvoiceApplyList[].fpqqlsh | string | 否 | 发票请求流水号。线上说明明确指出：这里不是蓝字发票流水号，而是本次红冲请求的新流水号 | `线上未提供` |
| data.einvoiceApplyList[].fplx | string | 否 | 发票类型。线上说明：仅税控数电红冲时必填，默认值为 `1`。可选值：`1` 增值税电子普通发票，`2` 增值税电子专用发票，`3` 增值税普通发票，`4` 增值税专用发票，`5` 机动车销售统一发票，`8` 增值税电子普通发票(成品油)，`10` 成品油普通发票，`11` 成品油专用发票，`15` 二手车销售统一发票，`31` 数电专用发票，`32` 数电普通发票，`33` 数电纸质发票(增值税专用发票)，`34` 数电纸质发票(普通发票) | `线上未提供` |
| data.einvoiceApplyList[].fpDm | string | 否 | 被红冲蓝字发票的发票代码 | `线上未提供` |
| data.einvoiceApplyList[].fpHm | string | 是 | 被红冲蓝字发票的发票号码 | `线上未提供` |
| data.einvoiceApplyList[].hcyy | string | 否 | 红冲原因。可选值：`1` 销货退回，`2` 开票有误，`3` 开票中止，`4` 销售折让。线上说明：数电发票红冲时必填；当发票类型为增值税普通发票、增值税电子普通发票、增值税普通卷票、增值税电子普通发票(成品油)、成品油普通发票、增值税普通收购发票、电子收购发票、数电专票、数电普票时也需填写 | `线上未提供` |
| data.einvoiceApplyList[].hzxxbbh | string | 否 | 红字信息表编号。专票红冲时必填；数电专票红冲时当前不需要 | `线上未提供` |
| data.einvoiceApplyList[].xsfNsrsbh | string | 否 | 销售方纳税人识别号。若一个税号只对应一个税务组织，只传该字段即可；该字段与 `orgcode` 二者至少提供一个 | `线上未提供` |
| data.einvoiceApplyList[].gmfMc | string | 否 | 购买方 | `线上未提供` |
| data.einvoiceApplyList[].gmfNsrsbh | string | 否 | 购买方纳税人识别号 | `线上未提供` |
| data.einvoiceApplyList[].kpr | string | 否 | 开票人 | `线上未提供` |
| data.einvoiceApplyList[].skr | string | 否 | 收款人 | `线上未提供` |
| data.einvoiceApplyList[].fhr | string | 否 | 复核人 | `线上未提供` |
| data.einvoiceApplyList[].slsm | string | 否 | 税率说明。线上说明：`1` 小规模纳税人开具 3% 税率时填写；`2` 前期开票后发生销售折让、中止、退回或开票有误需重开时填写；`3` 因实际业务需要放弃享受 1% 减按征收率政策时填写 | `线上未提供` |
| data.einvoiceApplyList[].allElcUserName | string | 否 | 数电登录用户名 | `线上未提供` |
| data.einvoiceApplyList[].allElcPassWord | string | 否 | 数电登录密码 | `线上未提供` |
| data.einvoiceApplyList[].lydjh | string | 否 | 来源单据号 | `线上未提供` |
| data.einvoiceApplyList[].define | object | 否 | 自定义特征项 | `线上未提供` |
| data.einvoiceApplyList[].jshj | number | 是 | 价税合计 | `线上未提供` |
| data.einvoiceApplyList[].hjje | number | 否 | 合计金额 | `线上未提供` |
| data.einvoiceApplyList[].hjse | number | 否 | 合计税额 | `线上未提供` |
| data.einvoiceApplyList[].lyid | string | 否 | 请求来源唯一标识 | `线上未提供` |
| data.einvoiceApplyList[].bmbBbh | string | 否 | 编码表版本号 | `线上未提供` |
| data.einvoiceApplyList[].items | array<object> | 否 | 明细对象 | `线上未提供` |

### data.einvoiceApplyList[].items[] 字段

| 字段名 | 类型 | 必填 | 说明 | 示例值 |
| --- | --- | --- | --- | --- |
| data.einvoiceApplyList[].items[].hh | string | 否 | 行号。有折扣时必填 | `线上未提供` |
| data.einvoiceApplyList[].items[].xmmc | string | 是 | 项目名称 | `线上未提供` |
| data.einvoiceApplyList[].items[].xmbm | string | 否 | 项目编码 | `线上未提供` |
| data.einvoiceApplyList[].items[].ggxh | string | 否 | 规格型号 | `线上未提供` |
| data.einvoiceApplyList[].items[].dw | string | 否 | 单位 | `线上未提供` |
| data.einvoiceApplyList[].items[].xmsl | string | 否 | 项目数量 | `线上未提供` |
| data.einvoiceApplyList[].items[].xmdj | number | 否 | 项目单价 | `线上未提供` |
| data.einvoiceApplyList[].items[].xmje | number | 否 | 项目金额 | `线上未提供` |
| data.einvoiceApplyList[].items[].xmjshj | number | 否 | 项目价税合计 | `线上未提供` |
| data.einvoiceApplyList[].items[].sl | number | 否 | 税率 | `线上未提供` |
| data.einvoiceApplyList[].items[].se | number | 否 | 税额 | `线上未提供` |
| data.einvoiceApplyList[].items[].spbm | string | 是 | 商品编码 | `线上未提供` |
| data.einvoiceApplyList[].items[].define | object | 否 | 特征值 | `{"Characteristic key":"Example characteristic value Optional"}` |

### 交付与退回配置字段

#### data.emailConfigList[]

| 字段名 | 类型 | 必填 | 说明 | 示例值 |
| --- | --- | --- | --- | --- |
| data.emailConfigList[].fpqqlsh | string | 否 | 应与上方 `einvoiceApplyList` 中对应发票请求流水号保持一致 | `线上未提供` |
| data.emailConfigList[].address | string | 否 | 邮箱 | `线上未提供` |

#### data.smsConfigList[]

| 字段名 | 类型 | 必填 | 说明 | 示例值 |
| --- | --- | --- | --- | --- |
| data.smsConfigList[].fpqqlsh | string | 否 | 应与上方 `einvoiceApplyList` 中对应发票请求流水号保持一致 | `线上未提供` |
| data.smsConfigList[].address | string | 否 | 手机号 | `线上未提供` |

#### data.urlConfigList[]

| 字段名 | 类型 | 必填 | 说明 | 示例值 |
| --- | --- | --- | --- | --- |
| data.urlConfigList[].fpqqlsh | string | 否 | 应与上方 `einvoiceApplyList` 中对应发票请求流水号保持一致 | `线上未提供` |
| data.urlConfigList[].url | string | 否 | 回调地址 | `线上未提供` |

#### data.auditReturnConfigs[]

| 字段名 | 类型 | 必填 | 说明 | 示例值 |
| --- | --- | --- | --- | --- |
| data.auditReturnConfigs[].fpqqlsh | string | 否 | 应与上方 `einvoiceApplyList` 中对应发票请求流水号保持一致 | `线上未提供` |
| data.auditReturnConfigs[].url | string | 否 | 退回地址 | `线上未提供` |

## 请求示例

线上页面中的 URL 示例：

`/yonbip/tax/invoiceclient-web/api/invoiceApply/part-red-withjson?access_token=访问令牌`

线上页面中的请求示例保留了原始字段大小写。下面仅做 JSON 格式化修正，字段名和值保持与线上示例一致。

```json
{
  "data": {
    "einvoiceApplyList": [
      {
        "FPQQLSH": "发票请求流水号 注意不是蓝字的发票请求流水号，是本次发票红冲的请求流水号 必填",
        "fpHm": "发票号码 必填",
        "fpDm": "发票代码 必填",
        "KPR": "开票人 选填",
        "SKR": "收款人 选填",
        "FHR": "复核人 选填",
        "GMF_MC": " 购买方名称 选填",
        "GMF_DZDH": "购买方地址电话 选填",
        "GMF_YHZH": "购买方银行账号 选填",
        "GMF_NSRSBH": "购买方纳税人识别号 选填",
        "JSHJ": "117 double 价税合计 必填",
        "HJJE": "100 double 合计金额 选填",
        "HJSE": "17 double 合计税额 选填",
        "LYID": "请求来源唯一标识 选填",
        "BMB_BBH": "编码表版本号 选填",
        "ORGCODE": "开票点编码 如果一个税号对应多个开票点，此字段必输，用于确定唯一开票点",
        "SLSM": "税率说明 1：当小规模纳税人开具3%税率时需要填写税率说明；2：前期已开具发票，发生销售折让、中止或者退回等情形需要开具红字发票，或者开票有误需要重新开具； 3：因为实际经营业务需要，放弃享受减按1%征收率征收增值税政策。",
        "HCYY": "红冲原因说明 ：1 销货退回 2 开票有误 3 开票中止 4 销售折让;（数电发票红冲原因必填）",
        "hzxxbbh": "红字信息表编号 专票红冲时必传",
        "ALLELCUSERNAME": "数电发票用户名 如果发票类型是数电发票用户名必填 并且是国密四密文（数电专用字段）",
        "ALLELCPASSWORD": "数电发票密码 如果发票类型是数电发票密码必填 并且是国密四密文（数电专用字段）",
        "define": {
          "特征key": "特征值示例 选填"
        },
        "items": [
          {
            "XMMC": "项目名称 必填",
            "XMBM": "项目编码 选填",
            "GGXH": "规格型号 选填",
            "DW": "单位 选填",
            "XMSL": "项目数量 选填",
            "XMDJ": "项目单价 double 选填",
            "XMJE": "项目金额 double 选填",
            "XMJSHJ": "项目价税合计 double 必填",
            "SL": "税率 double 必填",
            "SE": "税额 double 选填",
            "HH": "行号 有折扣时必输",
            "SPBM": "商品编码 必填",
            "define": {
              "特征key": "特征值示例 选填"
            }
          }
        ]
      }
    ],
    "autoAudit": false,
    "emailConfigList": [
      {
        "fpqqlsh": "发票请求流水号和requestdatas保持一致 必填",
        "address": "邮箱地址 必填",
        "title": "电子发票 选填",
        "content": "订单XXX电子发票。 选填"
      }
    ],
    "smsConfigList": [
      {
        "fpqqlsh": "12345678901234567890 必填",
        "address": "手机号 必填"
      }
    ],
    "urlConfigList": [
      {
        "fpqqlsh": "发票请求流水号和requestdatas保持一致 必填",
        "url": "请求网址 必填"
      }
    ],
    "auditReturnConfigs": [
      {
        "fpqqlsh": "发票请求流水号",
        "url": "www.baidu.com"
      }
    ]
  }
}
```

## 返回参数

线上参数表中返回字段出现重复项，下面按字段名去重整理。

| 字段名 | 类型 | 说明 | 示例值 |
| --- | --- | --- | --- |
| code | string | Status Code | `0000` |
| message | string | Information | `Operation successful` |
| data | string | Response Information | `线上未提供` |

### 成功响应示例

```json
{
  "code": "0000",
  "msg": "操作成功",
  "data": ""
}
```

### 失败响应示例

```json
{
  "code": "1001",
  "msg": "价税合计必须小于0"
}
```

## 错误码

线上错误码列表包含两条完全相同的 `1001` 记录，下面去重后保留一条。

| 错误码 | 错误信息 | 说明 |
| --- | --- | --- |
| 1001 | The total amount including tax must be less than 0 | Please confirm the total amount including tax. |

## 线上内容中的差异点

- 线上参数表字段名以 `camelCase` 为主，例如 `fpqqlsh`、`xsfNsrsbh`。
- 线上请求示例同时出现了 `FPQQLSH`、`ORGCODE`、`GMF_MC` 这类大写字段名；本文按线上示例原样保留。
- 线上参数表中的 `emailConfigList` 只列出了 `fpqqlsh` 和 `address`，但线上请求示例还包含 `title`、`content`；本文同样按线上示例原样保留。
- 线上参数表返回字段写的是 `message`，但线上成功/失败响应示例用的是 `msg`；本文分别按线上参数表和线上示例记录，没有自行合并。

# YonBIP 发票入账查询接口对接文档

> 适用接口：`发票入账 / 入账查询`
>
> API 路径：`/yonbip/tax/api/invoice-entry/query-task`
>
> 本文档基于 YonBIP 开放平台页面与其后台 API 元数据整理，同时结合本仓库已有 `YonBIP` 认证、发票入账文档的写法补全为可直接落地的对接说明。

---

## 1. 接口用途

该接口用于查询“发票入账”异步任务的处理结果。

典型场景是：

1. 先调用发票入账提交接口  
   `POST /yonbip/tax/input-tax/api/invoice-entry/commit`
2. 提交成功后拿到一个或多个 `taskNo`
3. 再调用本文档接口，按 `taskNo` 查询任务状态和每张发票的执行结果

从业务上看，这个接口是“发票入账提交”的结果查询接口，不是独立发起入账的入口。

---

## 2. 官方来源

### 2.1 页面地址

- 文档页：<https://open.yonyoucloud.com/#/doc-center/docDes/api?apiId=2206389751612702728&isOrigin=1&selectApiTab=open&from=&iframe=>

### 2.2 本次整理采用的元数据接口

由于开放平台页面是前端动态渲染，直接读取页面 DOM 时拿不到完整正文，本次内容以开放平台后台元数据为准：

- 元数据接口：`https://open.yonyoucloud.com/iuap-ipaas-base/openPortal/api/getByVersionForTest/2206389751612702728/running?scene=open&isOrigin=1&isAjax=1`

### 2.3 关联文档

- [YonBIP 认证模块对接文档](../../../../../docs/yonbip-auth-integration.md)
- [用友开放平台企业自建应用开发流程验证文档](../../../../../docs/yonyou-open-platform-dev-flow-verification.md)
- [现有发票入账文档](./invoice-entry.md)

---

## 3. 接口基本信息

| 项目 | 内容 |
| --- | --- |
| 接口名称 | 发票入账 / 入账查询 |
| 英文名 | `Account Entry Inquiry` |
| 产品 | 税务服务 |
| API 类目 | 进项业务台账 |
| 请求方式 | `POST` |
| Content-Type | `application/json` |
| 接口路径 | `/yonbip/tax/api/invoice-entry/query-task` |
| 完整示例地址 | `https://c2.yonyoucloud.com/iuap-api-gateway/yonbip/tax/api/invoice-entry/query-task` |
| 鉴权方式 | `access_token` 作为 Query 参数传递 |
| 超时时间 | 平台元数据标记为 `15` 秒 |

说明：

- 文档示例地址中的域名是 `c2.yonyoucloud.com`。
- 实际对接时，网关域名更适合先通过“获取租户所在数据中心域名”接口拿到 `gatewayUrl`，再拼接本文接口路径，不建议把 `c2` 写死在代码里。

---

## 4. 调用前置条件

调用这个接口之前，通常会先具备这些条件：

1. 已在 YonBIP 开放平台创建应用，并拿到 `appKey`、`appSecret`
2. 应用已获得目标税务接口的调用授权
3. 已通过 `tenantId` 拿到当前租户所在数据中心的：
   - `gatewayUrl`
   - `tokenUrl`
4. 已成功获取 `access_token`
5. 已先调用“发票入账提交”接口，并保存返回的 `taskNo`

建议把这几个值统一缓存：

- `tenantId`
- `gatewayUrl`
- `tokenUrl`
- `access_token`
- 发票入账提交返回的 `taskNo`

如果没有 `taskNo`，本文接口没有业务意义。

---

## 5. 鉴权方式

### 5.1 鉴权规则

该接口本身不走签名参数，调用时携带开放平台 `access_token` 即可。

传递方式：

```text
POST {gatewayUrl}/yonbip/tax/api/invoice-entry/query-task?access_token={access_token}
```

### 5.2 token 获取链路

`access_token` 的获取与缓存策略，沿用本仓库现有认证文档即可：

- [YonBIP 认证模块对接文档](../../../../../docs/yonbip-auth-integration.md)

建议：

- `access_token` 缓存 TTL 比平台返回值少留一点余量
- 发生 token 失效时，刷新一次后重试当前请求

---

## 6. 请求地址、请求头与请求方式

### 6.1 请求地址

```text
POST {gatewayUrl}/yonbip/tax/api/invoice-entry/query-task?access_token={access_token}
```

示例：

```text
POST https://c2.yonyoucloud.com/iuap-api-gateway/yonbip/tax/api/invoice-entry/query-task?access_token=访问令牌
```

### 6.2 请求头

官方元数据明确了 `Content-Type=application/json`。实务上建议请求头至少带这些：

| Header | 值 | 说明 |
| --- | --- | --- |
| `Content-Type` | `application/json` | 请求体为 JSON |
| `Accept` | `application/json` | 建议显式声明 |

说明：

- 鉴权不放在 `Authorization` 头里，而是放在 Query 参数 `access_token`
- 如果集成方网关或 SDK 会自动补 `User-Agent`、`traceId`，可以保留

---

## 7. 请求参数说明

### 7.1 Query 参数

| 参数 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| `access_token` | string | 是 | YonBIP 开放平台访问令牌 |

### 7.2 Body 参数

请求体为 JSON 对象。

| 字段 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| `nsrsbh` | string | 是 | 纳税人识别号 |
| `taskNos` | array[string] | 是 | 任务编号列表，来自发票入账提交接口返回的 `taskNo` |
| `pagenum` | string | 否 | 页码，默认 `1` |
| `pagesize` | string | 否 | 每页大小，默认 `10` |

### 7.3 参数细节说明

#### `nsrsbh`

- 含义：纳税人识别号
- 示例：`123456`
- 建议与提交入账时使用的税号保持一致

#### `taskNos`

- 含义：任务编号列表
- 示例：`[1,2,4]`
- 这是查询的核心条件
- 官方元数据里示例是数字数组，但字段定义是 `string` 数组；对接时更稳妥的做法是按平台返回值原样传回

#### `pagenum`

- 含义：页码
- 默认值：`1`

#### `pagesize`

- 含义：每页大小
- 默认值：`10`

### 7.4 请求示例

```http
POST /yonbip/tax/api/invoice-entry/query-task?access_token=访问令牌 HTTP/1.1
Content-Type: application/json
Accept: application/json
```

```json
{
  "nsrsbh": "123456",
  "taskNos": [
    1,
    2,
    4
  ],
  "pagenum": "1",
  "pagesize": "10"
}
```

更贴近代码落地的写法：

```json
{
  "nsrsbh": "913xxxxxxxxxxxxx",
  "taskNos": [
    "12345",
    "12346"
  ],
  "pagenum": "1",
  "pagesize": "50"
}
```

---

## 8. 响应字段说明

### 8.1 顶层字段

| 字段 | 类型 | 说明 |
| --- | --- | --- |
| `code` | string | 状态码 |
| `message` | string | 返回信息 |
| `data` | array[object] | 入账任务结果列表 |

### 8.2 `data[]` 字段

| 字段 | 类型 | 说明 |
| --- | --- | --- |
| `taskNo` | string | 任务编号 |
| `status` | string | 任务状态 |
| `bills` | array[object] | 该任务下的发票执行结果明细 |

### 8.3 `data[].status` 任务状态

官方说明：

| 值 | 含义 |
| --- | --- |
| `1` | 未开始 |
| `2` | 进行中 |
| `3` | 已完成 |
| `4` | 部分完成 |
| `5` | 失败 |

说明：

- 官方字段示例里出现过 `00`，但字段说明给的是 `1` 到 `5`
- 代码里更适合同时兼容这两类值，不要只按单一枚举硬编码

### 8.4 `data[].bills[]` 字段

| 字段 | 类型 | 说明 |
| --- | --- | --- |
| `invoiceCode` | string | 发票代码 |
| `invoiceNum` | string | 发票号码 |
| `status` | string | 单张发票执行状态 |
| `errorMsg` | string | 错误信息，失败或异常时重点关注 |

### 8.5 响应字段理解建议

可以把返回结果理解成两层状态：

1. 任务层状态：`data[].status`
2. 发票层状态：`data[].bills[].status`

业务上更适合优先看任务层，再落到发票层逐张处理异常。

---

## 9. 成功 / 失败示例

### 9.1 成功示例

```json
{
  "code": "200",
  "message": "操作成功",
  "data": [
    {
      "taskNo": "12345",
      "status": "3",
      "bills": [
        {
          "invoiceCode": "1234",
          "invoiceNum": "1234",
          "status": "3",
          "errorMsg": ""
        }
      ]
    }
  ]
}
```

说明：

- 官方示例返回 `status` 为 `00`，但状态说明给的是 `1~5`
- 上面这个成功示例按“已完成”语义整理，代码里仍然建议兼容 `00`

### 9.2 部分成功示例

```json
{
  "code": "200",
  "message": "操作成功",
  "data": [
    {
      "taskNo": "12345",
      "status": "4",
      "bills": [
        {
          "invoiceCode": "011001900111",
          "invoiceNum": "12345678",
          "status": "3",
          "errorMsg": ""
        },
        {
          "invoiceCode": "011001900112",
          "invoiceNum": "12345679",
          "status": "5",
          "errorMsg": "税局异常"
        }
      ]
    }
  ]
}
```

### 9.3 失败示例

官方页面没有给出失败报文示例，只列出了错误码 `9999`。结合 YonBIP 通用返回结构，可按下面的失败形态做兼容处理：

```json
{
  "code": "9999",
  "message": "System exception",
  "data": []
}
```

如果是单张发票失败，也可能出现：

```json
{
  "code": "200",
  "message": "操作成功",
  "data": [
    {
      "taskNo": "12345",
      "status": "5",
      "bills": [
        {
          "invoiceCode": "1234",
          "invoiceNum": "1234",
          "status": "5",
          "errorMsg": "税局异常"
        }
      ]
    }
  ]
}
```

这里要区分两类失败：

- 平台接口调用失败：看顶层 `code` / `message`
- 业务执行失败：顶层成功，但任务或发票明细状态失败

---

## 10. 错误码

### 10.1 官方文档给出的错误码

| 错误码 | 错误信息 | 说明 |
| --- | --- | --- |
| `9999` | `System exception` | 平台系统异常 |

### 10.2 对接时建议额外处理的异常场景

这些场景没有在本接口元数据里单独列成错误码，但实际联调里经常会遇到：

| 场景 | 建议处理方式 |
| --- | --- |
| `access_token` 失效 | 刷新 token 后重试一次 |
| 请求参数格式不符 | 记录完整请求体和平台返回信息 |
| `taskNo` 不存在或不属于当前税号 | 记录业务参数并返回可读错误 |
| 平台超时 / 网络抖动 | 做幂等重试，重试次数保持克制 |
| 顶层成功但 `bills[].errorMsg` 非空 | 作为业务失败处理，不要按成功吞掉 |

---

## 11. 入账查询业务流程

```text
业务系统选择待入账发票
    ↓
调用“发票入账提交”接口
    ↓
拿到 taskNo
    ↓
按 taskNo 调用“入账查询”接口
    ↓
判断 data[].status
    ├─ 1 未开始 / 2 进行中：继续轮询
    ├─ 3 已完成：写回成功结果
    ├─ 4 部分完成：逐张分析 bills[]
    └─ 5 失败：记录失败原因并进入人工或补偿处理
```

### 11.1 推荐轮询策略

建议用“短轮询 + 超时兜底”的方式：

- 第一次查询：提交后 `2~5` 秒
- 后续查询：每隔 `3~10` 秒一次
- 单任务最长等待：例如 `2~5` 分钟，按业务 SLA 调整

如果超过最长等待时间仍未完成，比较适合把任务标记为“待人工复查”或“异步处理中”。

### 11.2 结果落库建议

建议至少落这些字段：

- `taskNo`
- `nsrsbh`
- `requestBody`
- `responseBody`
- `taskStatus`
- `invoiceCode`
- `invoiceNum`
- `billStatus`
- `errorMsg`
- `queryTime`

这样后续排查会轻很多。

---

## 12. 代码对接建议

### 12.1 接口封装建议

适合拆成这几个函数：

1. `getGatewayAddress(tenantId)`
2. `getAccessToken(tenantId)`
3. `commitInvoiceEntry(payload)`
4. `queryInvoiceEntryTask(nsrsbh, taskNos, pageNum, pageSize)`
5. `pollInvoiceEntryTaskUntilDone(taskNos)`

### 12.2 请求封装建议

- `gatewayUrl` 和 `tokenUrl` 分开缓存
- `access_token` 做集中缓存和刷新
- 查询接口统一从提交接口返回值里取 `taskNo`
- 不要由调用方手工拼字符串 URL，适合封成 SDK 或 service

### 12.3 结果判定建议

代码里建议分三层判断：

1. HTTP 是否成功
2. 顶层 `code` 是否成功
3. 任务状态、发票状态是否成功

伪代码：

```python
def query_invoice_entry_task(nsrsbh, task_nos):
    token = get_access_token()
    resp = http.post(
        url=f\"{gateway_url}/yonbip/tax/api/invoice-entry/query-task\",
        params={\"access_token\": token},
        json={
            \"nsrsbh\": nsrsbh,
            \"taskNos\": task_nos,
            \"pagenum\": \"1\",
            \"pagesize\": \"50\",
        },
    )

    body = resp.json()
    if body.get(\"code\") != \"200\":
        raise YonBipApiError(body.get(\"code\"), body.get(\"message\"))

    return body.get(\"data\", [])
```

### 12.4 状态兼容建议

因为官方字段定义和示例值存在轻微不一致，状态处理适合宽松一些：

- 同时兼容 `1~5`
- 同时兼容 `00` 这类示例值
- 对未知状态值保留原始值，不要直接丢弃

---

## 13. 日志与异常处理建议

### 13.1 日志建议

日志里建议至少带这些字段：

- `tenantId`
- `nsrsbh`
- `taskNo`
- `invoiceCode`
- `invoiceNum`
- `httpStatus`
- `platformCode`
- `platformMessage`
- `taskStatus`
- `billStatus`
- `errorMsg`
- `traceId` 或本地请求流水号

### 13.2 日志分层

比较实用的分层方式：

- `INFO`：正常提交、正常查询、任务完成
- `WARN`：任务超时、部分完成、单张发票失败
- `ERROR`：平台异常、token 刷新失败、HTTP 调用失败、返回体无法解析

### 13.3 异常处理建议

- token 失效：刷新后重试一次
- 平台 `9999`：记录全量上下文，交由重试或人工处理
- 顶层成功但 `bills[].errorMsg` 非空：按业务失败处理
- 查询超时：保留任务状态，后续补查
- 未知状态码：落日志并保留原始平台返回

---

## 14. 与当前项目文档的关系

当前仓库里已经有一份基础版发票入账文档：

- [invoice-entry.md](./invoice-entry.md)

两者关系可以这样理解：

- `invoice-entry.md`：偏“接口摘录”
- 本文档：偏“可落地对接说明”，补了前置条件、业务流程、轮询策略、代码建议、日志建议

如果后续要统一风格，比较适合把“提交接口”和“查询接口”整理成同目录的一组文档。

---

## 15. 待确认项

下面这些点，平台元数据里没有给出完全一致的说明，联调时适合顺手确认一下：

1. `taskNos` 最终是按数字数组还是字符串数组更稳
2. `status` 的真实返回值范围，是否固定为 `1~5`，还是会出现 `00`
3. `bills[].status` 的枚举是否与任务状态完全一致
4. 当 `taskNos` 很多时，分页字段是否真的生效
5. 平台是否存在额外业务错误码，但没有展示在开放文档页面

这些项不影响先开发，但值得在首次联调时记录下来。

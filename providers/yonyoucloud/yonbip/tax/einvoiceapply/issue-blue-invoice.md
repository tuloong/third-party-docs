# Issue Blue Invoice

来源页面：

- https://open.yonyoucloud.com/#/doc-center/docDes/api?apiId=2150785412886953993&isOrigin=1&selectApiTab=open&from=&iframe=

机器可抓取的详情接口：

- https://open.yonyoucloud.com/iuap-ipaas-base/openPortal/api/getByVersionForTest/2150785412886953993/running?scene=open&isOrigin=1&isAjax=1

## 基本信息

- API 名称：Issue Blue Invoice
- API 类目：开票申请（EinvoiceApply）
- 产品：税务服务（YonBIP）
- 更新时间：2026-01-08 15:34:18
- 请求方法：POST
- Content-Type：application/json
- 接口路径：/yonbip/tax/invoiceclient-web/api/invoiceApply/insertWithJsonArray

## 请求参数

### Query 参数

| 名称 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| access_token | string | 是 | 接口令牌；获取方式见“开放平台接入文档”中的 access_token |

### Body 参数（Top Level）

Body 为 JSON，顶层为 `data`。

| 字段 | 类型 | 数组 | 必填 | 说明 |
| --- | --- | --- | --- | --- |
| data.einvoiceApplyList | object | 是 | 否 | 开票请求体（重要：此请求体是增值税基础票种；特殊票种参考请求示例） |
| data.emailConfigList | object | 是 | 否 | 邮箱交付信息 |
| data.smsConfigList | object | 是 | 否 | 短信交付信息 |
| data.urlConfigList | object | 是 | 否 | URL 交付信息 |
| data.auditReturnConfigs | object | 是 | 否 | 退回地址信息 |
| data.autoAudit | boolean | 否 | 否 | 自动审核；false 表示不自动审核（需要人工确认），不传默认 true |

更完整的字段明细在接口详情接口的 `data.paramDTOS` 中（字段非常多，建议在本地脚本解析后落库）。

## 请求示例

请求示例（已做脱敏/占位，完整示例可见来源接口的 `requestParamsDemo` 字段）：

```http
POST /yonbip/tax/invoiceclient-web/api/invoiceApply/insertWithJsonArray?access_token=<ACCESS_TOKEN>
Content-Type: application/json
```

```json
{
  "data": {
    "einvoiceApplyList": [
      {
        "fplx": "32",
        "xsfDzdh": "Beijing XX 83869965",
        "xsfYh": "China Merchants Bank",
        "xsfZh": "9645555111254",
        "gmfDh": "01055587444",
        "allElcUserName": "<REDACTED>",
        "allElcPassWord": "<REDACTED>",
        "items": [
          {
            "xmmc": "",
            "xmje": 0,
            "xmjshj": 0
          }
        ]
      }
    ],
    "emailConfigList": [
      {
        "fpqqlsh": "",
        "address": ""
      }
    ],
    "smsConfigList": [
      {
        "fpqqlsh": "",
        "address": ""
      }
    ],
    "urlConfigList": [
      {
        "fpqqlsh": "",
        "url": ""
      }
    ],
    "auditReturnConfigs": [
      {
        "fpqqlsh": "",
        "url": ""
      }
    ],
    "autoAudit": true
  }
}
```

## 返回参数

页面展示的返回参数结构：

| 字段 | 类型 | 说明 |
| --- | --- | --- |
| code | string | 返回码（示例：200） |
| message | string | 返回信息（示例：success） |
| data | object | 响应数据 |

## 错误码（页面展示）

| 错误码 | 错误信息 | 说明 |
| --- | --- | --- |
| 1002 | Data does not exist | 数据不存在 |
| 9999 | Invalid data | 返回错误信息可能包含多个信息片段（例如：税号未开通某类发票等） |

## 变更记录（页面展示）

- 2026-01-09：New Request Parameter (37) / Update Request Parameter (17) / Delete Request Parameter (17)

# Invoice request deletion (original request for failed invoice deletion)

来源页面：

- https://open.yonyoucloud.com/#/doc-center/docDes/api?apiId=60325355d2d7472d963f9dc20e4a88e9&isOrigin=1&selectApiTab=open&from=&iframe=

机器可抓取的详情接口：

- https://open.yonyoucloud.com/iuap-ipaas-base/openPortal/api/getByVersionForTest/60325355d2d7472d963f9dc20e4a88e9/running?scene=open&isOrigin=1&isAjax=1

## 基本信息

- apiId：60325355d2d7472d963f9dc20e4a88e9
- API 类目：开票申请
- 产品：税务服务
- 更新时间：2025-07-01 17:06:39.000
- 请求方法：POST
- Content-Type：application/x-www-form-urlencoded
- 接口路径：/yonbip/tax/invoiceclient-web/api/invoiceApply/deleteInvoiceFailData

## 请求参数

### Query 参数

| 名称 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| access_token | string | 是 | 接口令牌 access_token |

### Body 参数

| 字段 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| fpqqlsh | string | 是 | 发票请求流水号，需为开票失败状态的流水号 |

## 请求示例

```text
Url: /yonbip/tax/invoiceclient-web/api/invoiceApply/deleteInvoiceFailData?access_token=<ACCESS_TOKEN>
fpqqlsh="123456788"
```

## 返回参数

### 返回字段

| 字段 | 类型 | 说明 |
| --- | --- | --- |
| code | string | 返回码。200/0000: 成功；其他: 失败 |
| message | string | 返回消息描述 |

### 正确返回

```json
{
    "code": "200",
    "message": "操作成功"
}
```

### 错误返回

```json
{
    "code": "9999",
    "message": "删除失败,要删除的数据不是开票失败状态,不允许删除."
}
```

## 错误码

| 错误码 | 错误信息 | 说明 |
| --- | --- | --- |
| 9999 | 删除失败，数据非开票失败状态 | 只能删除状态为"开票失败"的发票请求，请确认发票当前状态 |


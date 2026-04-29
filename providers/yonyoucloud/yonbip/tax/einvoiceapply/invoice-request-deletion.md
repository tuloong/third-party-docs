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

### Body 参数（Top Level）

Body 为 JSON，顶层为 `data`。

该接口在详情接口中未返回可解析的 Body 顶层字段（可参考页面展示与请求示例）。

更完整的字段明细在详情接口的 `data.paramDTOS` 中（字段较多，建议自动化解析后按需落库）。

## 请求示例

```text
Url: /yonbip/tax/invoiceclient-web/api/invoiceApply/deleteInvoiceFailData?access_token=<ACCESS_TOKEN>
fpqqlsh="123456788"
```

## 返回示例

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
| 9999 | Deletion failed, the data to be deleted is not in the invoicing failure status, deletion is not allowed. | Please confirm the accuracy of the data. |


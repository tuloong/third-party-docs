# Invoice Management - Invoice Status Inquiry (Deprecated)

来源页面：

- https://open.yonyoucloud.com/#/doc-center/docDes/api?apiId=1758508294350569479&isOrigin=1&selectApiTab=open&from=&iframe=

机器可抓取的详情接口：

- https://open.yonyoucloud.com/iuap-ipaas-base/openPortal/api/getByVersionForTest/1758508294350569479/running?scene=open&isOrigin=1&isAjax=1

## 基本信息

- apiId：1758508294350569479
- API 类目：开票管理
- 产品：税务服务
- 更新时间：2025-07-01 17:07:24.000
- 请求方法：POST
- Content-Type：application/x-www-form-urlencoded
- 接口路径：/yonbip/tax/api/invoiceApply/V4/queryInvoiceStatus

## 请求参数

### Query 参数

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| access_token | string | 是 | 接口令牌 access_token |
| fpqqlsh | string | 是 | Invoice request serial number |

## 请求示例

```text
Url: /yonbip/tax/api/invoiceApply/V4/queryInvoiceStatus?access_token=<ACCESS_TOKEN>
```

## 返回参数说明

| 字段路径 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| code | string | 否 | Return status code |
| message | string | 否 | Return Information |
| data | object | 否 | Return data |
| data.fpqqlsh | string | 否 | Invoice request serial number |
| data.statuscode | string | 否 | Invoice Status Code 1 - Pending Invoice (requires confirmation from the invoicing staff); 2 - Invoicing; 3 - Invoice Failed; 4 - Invoice Successful |
| data.status | string | 否 | Invoice Status: Pending Invoice; Invoicing; Invoice Failed; Invoice Successful |
| data.errmsg | string | 否 | Invoice failure details: When the invoice status is failed, this section contains detailed information. |
| data.bsstatus | string | 否 | Layout status: 0 - Layout redrawn successfully; 1 - Layout failed (Layout failed, no PDF in data) |

## 返回示例

### 正确返回

```json
{
	"code": "200",
	"message": "操作成功",
	"data": {
		"fpqqlsh": "1236655",
		"statuscode": "1",
		"status": "待开票",
		"bsstatus": "0"
	}
}
```

### 错误返回

```json
{
	"code": "1002",
	"message": "数据不存在"
}
```

## 错误码

| 错误码 | 错误信息 | 说明 |
| --- | --- | --- |
| 1002 | Data does not exist. | Return error code |


# Batch Invoice Status Inquiry

来源页面：

- https://open.yonyoucloud.com/#/doc-center/docDes/api?apiId=1874302330643415041&isOrigin=1&selectApiTab=open&from=&iframe=

机器可抓取的详情接口：

- https://open.yonyoucloud.com/iuap-ipaas-base/openPortal/api/getByVersionForTest/1874302330643415041/running?scene=open&isOrigin=1&isAjax=1

## 基本信息

- apiId：1874302330643415041
- API 类目：开票管理
- 产品：税务服务
- 更新时间：2025-07-01 17:07:33.000
- 请求方法：POST
- Content-Type：application/json
- 接口路径：/yonbip/tax/output-tax/api/invoiceApply/batchQueryInvoiceStatus

## 请求参数

### Query 参数

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| access_token | string | 是 | 接口令牌 access_token |
| fpqqlshs | string | 是 | JSON string of the invoice request serial number array, with a maximum of 20 queries at a time. |

## 请求示例

```text
Url: /yonbip/tax/output-tax/api/invoiceApply/batchQueryInvoiceStatus?access_token=<ACCESS_TOKEN>&fpqqlshs=["11223344","55667788"]
```

## 返回参数说明

| 字段路径 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| code | string | 否 | Status Code |
| message | string | 否 | Return message |
| data[] | object | 否 | Data List |
| data[].code | string | 否 | Status Code |
| data[].msg | string | 否 | Message |
| data[].fpqqlsh | string | 否 | Invoice request serial number |
| data[].statuscode | string | 否 | Invoice Status Code 1 - Pending Invoice (requires confirmation from the invoicing staff); 2 - Invoicing; 3 - Invoicing Failed; 4 - Invoicing Successful |
| data[].status | string | 否 | Invoice Status: Pending Invoice; Invoicing; Invoice Failed; Invoice Successful |
| data[].errmsg | string | 否 | Invoice failure details: When the invoice status is failed, this section contains detailed information. |
| data[].bsstatus | string | 否 | Layout status: 0 - Layout redrawn successfully; 1 - Layout failed (Layout failed, no PDF in data) |

## 返回示例

### 正确返回

```json
{
	"code": "200",
	"message": "操作成功",
	"data": [
		{
			"code": "0000",
			"msg": "操作成功",
			"fpqqlsh": "11223344",
			"statuscode": "1",
			"status": "待开票",
			"errmsg": "税控设备错误",
			"bsstatus": "0"
		}
	]
}
```

### 错误返回

```json
{
	"code": "9999",
	"message": "系统异常"
}
```

## 错误码

| 错误码 | 错误信息 | 说明 |
| --- | --- | --- |
| 9999 | System Exception | Process according to the returned information |


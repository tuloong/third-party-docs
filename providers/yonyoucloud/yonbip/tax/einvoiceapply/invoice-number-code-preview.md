# Invoice Number Code Preview

来源页面：

- https://open.yonyoucloud.com/#/doc-center/docDes/api?apiId=939cf9f08b4a482ab65c0a29d949a7f8&isOrigin=1&selectApiTab=open&from=&iframe=

机器可抓取的详情接口：

- https://open.yonyoucloud.com/iuap-ipaas-base/openPortal/api/getByVersionForTest/939cf9f08b4a482ab65c0a29d949a7f8/running?scene=open&isOrigin=1&isAjax=1

## 基本信息

- apiId：939cf9f08b4a482ab65c0a29d949a7f8
- API 类目：开票申请
- 产品：税务服务
- 更新时间：2025-07-01 17:06:54.000
- 请求方法：POST
- Content-Type：application/json
- 接口路径：/yonbip/tax/invoiceclient-web/api/invoiceApply/preview/hmdm

## 请求参数

### Query 参数

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| access_token | string | 是 | 接口令牌 access_token |

### Body 参数

| 字段路径 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| fplx | string | 是 | Invoice Type: 1: VAT Electronic Normal Invoice 3: VAT Normal Invoice 4: VAT Special Invoice 5: Unified Motor Vehicle Sales Invoice |
| orgCode | string | 是 | Invoicing Site Code, check in the Invoicing Site file; |
| forceRefresh | string | 否 | Refresh or not; Y: Refresh; N: Do not refresh |

## 请求示例

```text
Url: /yonbip/tax/invoiceclient-web/api/invoiceApply/preview/hmdm?access_token=<ACCESS_TOKEN>  
Body: {
	"fplx": "发票类型",
	"orgCode": "组织编码"
}
```

## 返回参数说明

| 字段路径 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| code | string | 否 | Status Code |
| message | string | 否 | Prompt Information |
| data | object | 否 | Data |
| data.fpHm | string | 否 | Invoice Number |
| data.fpDm | string | 否 | Invoice Code |

## 返回示例

### 正确返回

```json
{
	"code": "200",
	"message": "success",
	"data": {
		"fpHm": "发票号码",
		"fpDm": "发票代码"
	}
}
```

### 错误返回

```json
{
    "code": "9999",
    "message": "系统发生异常错误，请联系管理员查看日志[requestId:35897cc50c6921c4][yonbip-fi-taxreturn]"
}
```

## 错误码

| 错误码 | 错误信息 | 说明 |
| --- | --- | --- |
| 9999 | System encountered an unexpected error. | Modify and troubleshoot based on the returned error message. |


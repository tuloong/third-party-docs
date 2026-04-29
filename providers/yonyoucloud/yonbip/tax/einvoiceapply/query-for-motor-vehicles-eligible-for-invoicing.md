# Query for motor vehicles eligible for invoicing

来源页面：

- https://open.yonyoucloud.com/#/doc-center/docDes/api?apiId=2172812685121421312&isOrigin=1&selectApiTab=open&from=&iframe=

机器可抓取的详情接口：

- https://open.yonyoucloud.com/iuap-ipaas-base/openPortal/api/getByVersionForTest/2172812685121421312/running?scene=open&isOrigin=1&isAjax=1

## 基本信息

- apiId：2172812685121421312
- API 类目：开票申请
- 产品：税务服务
- 更新时间：2025-07-01 17:07:02.000
- 请求方法：POST
- Content-Type：application/json
- 接口路径：/yonbip/tax/api/etax/query/vehicle/list/avalible

## 请求参数

### Query 参数

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| access_token | string | 是 | 接口令牌 access_token |

### Body 参数

| 字段路径 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| xsfNsrsbh | string | 是 | Seller's Taxpayer Identification Number |
| allElcUserName | string | 否 | Electronic Tax Bureau Basic Channel Account |
| vehicleLshs[] | string | 否 | Vehicle Identification Code/Chassis Number |
| pageSize | number | 否 | Number of data per page |
| pageNumber | number | 否 | Current page number |

## 请求示例

```text
Url: /yonbip/tax/api/etax/query/vehicle/list/avalible?access_token=<ACCESS_TOKEN>
Body: {
	"xsfNsrsbh": "91310115090099AAAAAA",
	"allElcUserName": "<REDACTED>",
	"vehicleLshs": [
		"CLSBDH2310191209",
		"CLSBDH2310191314",
		"CLSBDH22310310910"
	],
	"pageSize": 100,
	"pageNumber": 1
}
```

## 返回参数说明

| 字段路径 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| code | string | 否 | Status Code |
| message | string | 否 | Operation Information |
| datas[] | object | 否 | Query Results |
| datas[].clsbdh | string | 否 | Vehicle Identification Code/Chassis Number |
| datas[].makeout | boolean | 否 | Can an invoice be issued? |
| datas[].remark | string | 否 | Reasons for not being able to issue an invoice |

## 返回示例

### 正确返回

```json
{
	"code": "200",
	"message": "查询成功",
	"datas": [
		{
			"clsbdh": "CLSBDH2310191209",
			"makeout": true,
			"remark": "null"
		}
	]
}
```

### 错误返回

```json

```


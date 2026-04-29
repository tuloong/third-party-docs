# Smart Coding

来源页面：

- https://open.yonyoucloud.com/#/doc-center/docDes/api?apiId=2096344486209650694&isOrigin=1&selectApiTab=open&from=&iframe=

机器可抓取的详情接口：

- https://open.yonyoucloud.com/iuap-ipaas-base/openPortal/api/getByVersionForTest/2096344486209650694/running?scene=open&isOrigin=1&isAjax=1

## 基本信息

- apiId：2096344486209650694
- API 类目：开票申请
- 产品：税务服务
- 更新时间：2025-07-01 17:06:49.000
- 请求方法：GET
- Content-Type：application/json
- 接口路径：/yonbip/tax/api/etax/aiMatchSpInfo

## 请求参数

### Query 参数

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| access_token | string | 是 | 接口令牌 access_token |
| xmmc | string | 是 | Product Name |

## 请求示例

```text
Url: /yonbip/tax/api/etax/aiMatchSpInfo?access_token=<ACCESS_TOKEN>&xmmc=水果
```

## 返回参数说明

| 字段路径 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| code | string | 否 | Status Code |
| message | string | 否 | Operation Information |
| datas[] | object | 否 | Matching Results |
| datas[].slvList[] | string | 否 | Tax Rate Set |
| datas[].spsjbm | string | 否 | Actual Product Code |
| datas[].zzscezsbj | string | 否 | VAT differential taxation mark |
| datas[].spfwjc | string | 否 | Product/Service Abbreviation |
| datas[].qyrq | string | 否 | Activation Date |
| datas[].sphfwssflhbbm | string | 否 | Product and Service Tax Classification Combined Code |
| datas[].sfhzx | string | 否 | Is it a summary item? |
| datas[].sfbzsbz | string | 否 | Non-taxable flag |
| datas[].zslList[] | string | 否 | Collection Rate Set |
| datas[].sm | string | 否 | Description |
| datas[].zt | string | 否 | Status |
| datas[].zzsslhzzsl | string | 否 | ??? |
| datas[].zzstsglList[] | string | 否 | Special Management Collection of VAT |
| datas[].zsljh | string | 否 | Collection Rate |
| datas[].hyjh | string | 否 | ??? |
| datas[].hwhlwmc | string | 否 | Name of goods or services |

## 返回示例

### 正确返回

```json
{
	"code": "200",
	"message": "智能赋码成功",
	"datas": [
		{
			"slvList": [
				"0.13"
			],
			"spsjbm": "1030206000000000000",
			"zzscezsbj": "N",
			"spfwjc": "调味品",
			"qyrq": "2019-04-01",
			"sphfwssflhbbm": "1030206030000000000",
			"sfhzx": "N",
			"sfbzsbz": "N",
			"zslList": [
				"0.03"
			],
			"sm": "",
			"zt": "Y",
			"zzsslhzzsl": "13%",
			"zzstsglList": [
				"简易征收"
			],
			"zsljh": "3%",
			"hyjh": "140603",
			"hwhlwmc": "醋及醋代用品"
		}
	]
}
```

### 错误返回

```json

```


# Issue Blue Invoice

来源页面：

- https://open.yonyoucloud.com/#/doc-center/docDes/api?apiId=2150785412886953993&isOrigin=1&selectApiTab=open&from=&iframe=

机器可抓取的详情接口：

- https://open.yonyoucloud.com/iuap-ipaas-base/openPortal/api/getByVersionForTest/2150785412886953993/running?scene=open&isOrigin=1&isAjax=1

## 基本信息

- apiId：2150785412886953993
- API 类目：开票申请
- 产品：税务服务
- 更新时间：2026-01-08 15:34:18.000
- 请求方法：POST
- Content-Type：application/json
- 接口路径：/yonbip/tax/invoiceclient-web/api/invoiceApply/insertWithJsonArray

## 请求参数

### Query 参数

| 名称 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| access_token | string | 是 | 接口令牌 access_token |

### Body 参数（Top Level）

Body 为 JSON，顶层为 `data`。

| 字段 | 类型 | 数组 | 必填 | 说明 |
| --- | --- | --- | --- | --- |
| data.einvoiceApplyList | object | 是 | 否 | 开票请求体(重要：：此请求体是增值税基础票种的请求体，特殊票种的请求体参考请求示例中的内容) |
| data.emailConfigList | object | 是 | 否 | 邮箱交付信息 |
| data.smsConfigList | object | 是 | 否 | 短信交付信息 |
| data.urlConfigList | object | 是 | 否 | url交付信息 |
| data.auditReturnConfigs | object | 是 | 否 | 退回地址信息 |
| data.autoAudit | boolean | 否 | 否 | 自动审核，即不需要人工在发票平台确认开票，直接进行开票 false:不自动审核，即需要人工确认如果不传，代表true |

更完整的字段明细在详情接口的 `data.paramDTOS` 中（字段较多，建议自动化解析后按需落库）。

## 请求示例

```text
Url: /<TENANT_PREFIX>/yonbip/tax/invoiceclient-web/api/invoiceApply/insertWithJsonArray?access_token=<ACCESS_TOKEN>
Body: {
	"data": {
		"einvoiceApplyList": [
			{
				"orgcode": "",
				"lyid": "",
				"fpqqlsh": "",
				"fplx": "",
				"sdLc": "",
				"tspz": "",
				"zsfs": "",
				"xsfNsrsbh": "",
				"xsfMc": "",
				"xsfDzdh": "北京市XX 83869965",
				"xsfDz": "北京市XX",
				"xsfDh": "83869965",
				"xsfYh": "招商银行",
				"xsfZh": "9645555111254",
				"gmfNsrsbh": "",
				"gmfMc": "",
				"gmfDzdh": "",
				"gmfYhzh": "",
				"gmfDz": "北京市XX",
				"gmfDh": "01055587444",
				"gmfYh": "招商银行",
				"gmfZh": "596874512",
				"zrrbs": "Y",
				"zjlx": "101",
				"zjhm": "123123123",
				"guoji": "004",
				"einvoiceShowGxfYhZh": "0",
				"einvoiceShowSkrShr": "0",
				"einvoiceShowGxfDzDh": "0",
				"dfgtgmbz": "Y",
				"kpr": "",
				"skr": "",
				"fhr": "",
				"hjje": 0,
				"hjse": 0,
				"jshj": 0,
				"bz": "",
				"allElcUserName": "<REDACTED>",
				"allElcPassWord": "<REDACTED>",
				"slsm": "",
				"zdybz": "",
				"projectCode": "",
				"acountOrgCode": "",
				"wbsCode": "",
				"lydjh": "",
				"bmbBbh": "",
				"wxorderid": "",
				"wxappid": "",
				"wxauthid": "",
				"sgbz": "",
				"cpyqylb": "",
				"tdzzsxmbh": "",
				"bdcdz": "",
				"zlqq": "",
				"zlqz": "",
				"kdsbz": "",
				"kqysssxbgglbm": "",
				"tspzs": {
					"ysmxxh": "",
					"ysgjzl": "",
					"ysgjph": "",
					"qyd": "",
					"ddd": "",
					"yshwmc": "",
					"cxrxh": "",
					"cxr": "",
					"chuxrq": "",
					"cxrzjlxDm": "",
					"sfzjhm": "",
					"cfd": "",
					"lkddd": "",
					"zwdj": "",
					"jtgjlxDm": ""
				},
				"bdcxsTspzs": {
					"ysmxxh": "",
					"ysgjzl": "",
					"ysgjph": "",
					"qyd": "",
					"ddd": "",
					"yshwmc": "",
					"cxrxh": "",
					"cxr": "",
					"chuxrq": "",
					"cxrzjlxDm": "",
					"sfzjhm": "",
					"cfd": "",
					"lkddd": "",
					"zwdj": "",
					"jtgjlxDm": ""
				},
				"cepzs": {
					"xh": "",
					"pzlx": "",
					"fphm": "",
					"fpdm": "",
					"zzfphm": "",
					"pzhm": "",
					"kjrq": "",
					"hjje": "",
					"kce": "",
					"bz": "",
					"ly": "",
					"bckcje": 0,
					"pzhjje": 0
				},
				"mqkfrl": "",
				"gjql": "",
				"gzwhjhff": "",
				"ticketNumber": "",
				"buyerType": "",
				"fareAmount": "",
				"orderNumber": "",
				"userName": "",
				"gpCode": "",
				"passengerName": "",
				"passengerIdnum": "",
				"endorsements": "",
				"office": "",
				"issuedBy": "",
				"iata": "",
				"pnr": "",
				"ticketInformation": "",
				"insurance": "",
				"electronicTicketType": "",
				"verifyCode": "",
				"overdueFlag": "",
				"lylx": "",
				"define": "{            \"特征key\":\"特征值示例 选填\"     },",
				"items": [
					{
						"hh": "",
						"zkhhh": "",
						"fphxz": "",
						"xmbm": "",
						"xmmc": "",
						"spbm": "",
						"ggxh": "",
						"dw": "",
						"xmsl": "",
						"xmdj": "",
						"xmhsdj": "",
						"xmje": 0,
						"xmjshj": 0,
						"sl": "",
						"se": "",
						"kce": "",
						"zxbm": "",
						"yhzcbs": "",
						"lslbs": "",
						"zzstsgl": "",
						"detailMotor": {
							"cqzsbh": "",
							"jzfwfsd": "",
							"jzxmmc": ""
						},
						"define": {
							"特征key": "特征值示例 选填"
						}
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

## 返回示例

### 正确返回

```json
{
	"code": "200",
	"data": {},
	"message": "success"
}
```

### 错误返回

```json
{

	"code": "9999",

	"message": "数据不合法"

}
```

## 错误码

| 错误码 | 错误信息 | 说明 |
| --- | --- | --- |
| 1002 | Data does not exist | Data does not exist |
| 9999 | Invalid data | The returned error code contains multiple pieces of information. For example: The taxpayer with taxpayer identification number 111222333456333 has not enabled VAT electronic normal invoices, this function is temporarily unavailable. |


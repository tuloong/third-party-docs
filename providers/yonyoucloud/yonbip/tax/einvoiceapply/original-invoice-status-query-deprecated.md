# Original Invoice Status Query (Deprecated)

来源页面：

- https://open.yonyoucloud.com/#/doc-center/docDes/api?apiId=1cc145c156664c0abac9c26faf0daccd&isOrigin=1&selectApiTab=open&from=&iframe=

机器可抓取的详情接口：

- https://open.yonyoucloud.com/iuap-ipaas-base/openPortal/api/getByVersionForTest/1cc145c156664c0abac9c26faf0daccd/running?scene=open&isOrigin=1&isAjax=1

## 基本信息

- apiId：1cc145c156664c0abac9c26faf0daccd
- API 类目：开票管理
- 产品：税务服务
- 更新时间：2025-09-01 18:03:36.000
- 请求方法：POST
- Content-Type：application/x-www-form-urlencoded
- 接口路径：/yonbip/tax/invoiceclient-web/api/invoiceApply/queryInvoiceStatus

## 请求参数

### Query 参数

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| access_token | string | 是 | 接口令牌 access_token |

## 请求示例

```text
Url: /yonbip/tax/invoiceclient-web/api/invoiceApply/queryInvoiceStatus?access_token=<ACCESS_TOKEN>
```

## 返回参数说明

| 字段路径 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| code | string | 否 | Status Code |
| data | object | 否 | Data |
| data.errmsg | string | 否 | Error Information |
| data.fpqqlsh | string | 否 | Invoice Request SN |
| data.invoiceDetail | object | 否 | Invoice |
| data.invoiceDetail.fpqqlsh | string | 否 | Invoice Request SN |
| data.invoiceDetail.pdf | string | 否 | Base64 encoded data, determined by fileType; pdf for PDF format, ofd for OFD format. |
| data.invoiceDetail.corpid | string | 否 | Tenant ID |
| data.invoiceDetail.data | object | 否 | Invoice Detailed Data |
| data.invoiceDetail.data.fpqqlsh | string | 否 | Invoice Request SN |
| data.invoiceDetail.data.fpzt | string | 否 | Invoice Status  1 - Pending Invoice (Invoice clerk confirmation required); 2 - Invoicing; 3 - Invoice Failed; 4 - Invoice Successful. |
| data.invoiceDetail.data.zdrq | string | 否 | Document Date  yyyy-MM-dd hh:mm:ss |
| data.invoiceDetail.data.kplx | string | 否 | Invoice Type  0: Blue Invoice; 1: Red Invoice |
| data.invoiceDetail.data.fplx | string | 否 | Invoice Type: 1: VAT Electronic Normal Invoice; 2: VAT Electronic Special Invoice; 3: VAT Normal Invoice; 4: VAT Special Invoice; 5: Motor Vehicle Sales Unified Invoice; 8: VAT Electronic Normal Invoice (Refined Oil); 10: Refined Oil Normal Invoice; 11: Refined Oil Special Invoice; 15: Used Car Sales Unified Invoice; 31: Digital Special Invoice; 32: Digital Normal Invoice; 33: Digital Paper Invoice (VAT Special Invoice); 34: Digital Paper Invoice (Normal Invoice); |
| data.invoiceDetail.data.zsfs | string | 否 | Taxation Method 0: Normal Taxation  2: Differential Taxation |
| data.invoiceDetail.data.fpDm | string | 否 | Invoice Code |
| data.invoiceDetail.data.fpHm | string | 否 | Invoice No. |
| data.invoiceDetail.data.yfpDm | string | 否 | Original Invoice Code |
| data.invoiceDetail.data.yfpHm | string | 否 | Original Invoice Number |
| data.invoiceDetail.data.kprq | string | 否 | Invoice Date  yyyyMMddhhmmss |
| data.invoiceDetail.data.xsfMc | string | 否 | Seller Name |
| data.invoiceDetail.data.xsfNsrsbh | string | 否 | Seller Taxpayer ID No. |
| data.invoiceDetail.data.xsfDzdh | string | 否 | Seller Address & Telephone |
| data.invoiceDetail.data.xsfYhzh | string | 否 | Seller Bank Account No. |
| data.invoiceDetail.data.gmfMc | string | 否 | Buyer |
| data.invoiceDetail.data.gmfNsrsbh | string | 否 | Buyer Taxpayer ID No. |
| data.invoiceDetail.data.gmfDzdh | string | 否 | Purchaser's Address and Phone Number |
| data.invoiceDetail.data.gmfYhzh | string | 否 | Buyer Bank Account No. |
| data.invoiceDetail.data.kpr | string | 否 | Billed By |
| data.invoiceDetail.data.fhr | string | 否 | Reviewed By |
| data.invoiceDetail.data.skr | string | 否 | Payee |
| data.invoiceDetail.data.hjje | string | 否 | Total Amount |
| data.invoiceDetail.data.hjse | string | 否 | Total Tax Amount |
| data.invoiceDetail.data.jshj | string | 否 | Amount Including Tax |
| data.invoiceDetail.data.bz | string | 否 | Remarks |
| data.invoiceDetail.data.zdybz | string | 否 | Custom Remark |
| data.invoiceDetail.data.items[] | object | 否 | Line Item Information |
| data.invoiceDetail.data.items[].hh | string | 否 | Line No. |
| data.invoiceDetail.data.items[].xmmc | string | 否 | Project Name |
| data.invoiceDetail.data.items[].spbm | string | 否 | Product Code |
| data.invoiceDetail.data.items[].ggxh | string | 否 | Specification |
| data.invoiceDetail.data.items[].dw | string | 否 | Unit |
| data.invoiceDetail.data.items[].xmsl | string | 否 | Item Quantity |
| data.invoiceDetail.data.items[].xmdj | string | 否 | Item Unit Price |
| data.invoiceDetail.data.items[].xmhsdj | string | 否 | Project Unit Price Including Tax |
| data.invoiceDetail.data.items[].xmje | string | 否 | Item Amount |
| data.invoiceDetail.data.items[].xmjshj | string | 否 | Item Amount Including Tax |
| data.invoiceDetail.data.items[].sl | string | 否 | Tax Rate |
| data.invoiceDetail.data.items[].se | string | 否 | Tax Amount |
| data.invoiceDetail.data.items[].yhzcbs | string | 否 | Sales Discount Flag; 0: Not Used, 1: Used |
| data.invoiceDetail.data.items[].zxbm | string | 否 | Product Self-Coding |
| data.invoiceDetail.data.items[].fphxz | string | 否 | Invoice Line Type: 0 Normal Line 1 Discount Line 2 Discounted Line |
| data.invoiceDetail.data.items[].kce | string | 否 | Deduction Amount |
| data.invoiceDetail.data.items[].lslbs | string | 否 | Zero Tax Rate Identifier: 0: Export Tax Rebate, 1: Tax Exempt, 2: Not Levied, 3: Normal Zero Tax Rate |
| data.invoiceDetail.data.items[].ysxmmc | string | 否 | Original Project Name |
| data.invoiceDetail.data.items[].zkhhh | string | 否 | Discount Line Number |
| data.invoiceDetail.data.items[].zzstsgl | string | 否 | Preferential Policy Description; Simple Taxation at 3%, Simple Taxation at 5% (When this field is not empty, the preferential treatment indicator YHZCBS field value must be 1) |
| data.invoiceDetail.data.bmbBbh | string | 否 | Code Table Number |
| data.invoiceDetail.data.fpjz | string | 否 | Invoice Medium: 0 Electronic Invoice 1 Paper Invoice |
| data.invoiceDetail.data.lylx | string | 否 | Source Type 1-Manual Issuance; 2-Interface Input; 3-File Import; 4-QR Code Scan; 5-WeChat Input; 6-Quick Invoicing; 7-Alipay Input; 8-Pinduoduo; 9-Mini Program; w-Pending Invoice Details; v-Invoice Application Document; n-NCC Input |
| data.invoiceDetail.data.lyid | string | 否 | Source ID |
| data.invoiceDetail.data.jqbh | string | 否 | Machine No. |
| data.invoiceDetail.data.fpMw | string | 否 | Invoice Ciphertext |
| data.invoiceDetail.data.jym | string | 否 | Verification Code |
| data.invoiceDetail.data.accountStatus | string | 否 | Accounting Status: 1 - Not Accounted; 2 - Accounted |
| data.invoiceDetail.data.aggregate | string | 否 | Whether it is data from the past two months; true indicates querying data within the last two months; leaving it blank means querying all data. |
| data.invoiceDetail.data.bred | string | 否 | Whether reversed by red flush: Y indicates reversed, N or null indicates not reversed |
| data.invoiceDetail.data.code | string | 否 | Organization Code Property |
| data.invoiceDetail.data.corpId | string | 否 | Tenant ID |
| data.invoiceDetail.data.creator | string | 否 | Created By |
| data.invoiceDetail.data.creatorName | string | 否 | Creator Name |
| data.invoiceDetail.data.email | string | 否 | Email |
| data.invoiceDetail.data.ewm | string | 否 | QR Code |
| data.invoiceDetail.data.hzxxbbh | string | 否 | Red Entry Information Table Number |
| data.invoiceDetail.data.orgId | string | 否 | Organization ID |
| data.invoiceDetail.data.orgName | string | 否 | Organization Name |
| data.invoiceDetail.data.projectCode | string | 否 | Project No. |
| data.invoiceDetail.data.projectId | string | 否 | Item ID |
| data.invoiceDetail.data.projectName | string | 否 | Project Name |
| data.invoiceDetail.data.qdbz | string | 否 | List Flag: 0 - Not Listed, 1 - Listed |
| data.invoiceDetail.data.sbbz | string | 否 | Failure Remarks |
| data.invoiceDetail.data.sgbz | string | 否 | Acquisition Flag: 2 = Agricultural Product Acquisition |
| data.invoiceDetail.data.tschbz | string | 否 | Special Red Flush Flag; Currently No Corresponding Enumeration |
| data.invoiceDetail.data.tspz | string | 否 | Special Invoice Types; 0-General 2-Fuel VAT Special Invoice 8-Agricultural Products Sales 9-Agricultural Products Purchase 11-Tobacco Invoice 12-Motor Vehicle Invoice 14-Refined Oil Invoice DK-Agent Issued Invoice 16-Mineral Products Invoice E01-Refined Oil Invoice E03-Construction Service Invoice E04-Goods Transportation E05-Real Estate Sales E06-Real Estate Leasing Service Invoice E07-Agent Collection of Vehicle and Vessel Tax E09-Passenger Transportation E12-Self-produced Agricultural Products Sales E16-Agricultural Products Purchase E17-Photovoltaic Purchase E18-Cigarette Invoice |
| data.invoiceDetail.data.zfbz | string | 否 | Void Flag: Y=Voided, N=Not Voided, I=Voiding in Progress, F=Void Failed |
| data.invoiceDetail.sharecode | string | 否 | Share Code |
| data.invoiceDetail.shareurl | string | 否 | Share Link |
| data.invoiceDetail.fileType | string | 否 | File Type: pdf is in pdf format ofd is in ofd format |
| data.invoiceDetail.pdfurl | string | 否 | Tax Bureau PDF Format File Download Address |
| data.invoiceDetail.ofdurl | string | 否 | Tax Bureau OFD Format File Download Address |
| data.invoiceDetail.xmlurl | string | 否 | Tax Bureau XML Format File Download Address |
| data.status | string | 否 | Pending Invoicing; Invoicing in Progress; Invoicing Failed; Invoicing Successful |
| data.statuscode | string | 否 | 1 - Pending Invoicing (Invoice Clerk Confirmation Required); 2 - Invoicing in Progress; 3 - Invoicing Failed; 4 - Invoicing Successful |
| message | string | 否 | Message |

## 返回示例

### 正确返回

```json
{
	"code": "200",
	"data": {
		"errmsg": "",
		"fpqqlsh": "1520063275914174464",
		"invoiceDetail": {
			"fpqqlsh": "1520063275914174464",
			"pdf": "JVBERi0xLjMKJcTl7gwoMSAwIG9iago8PAovVHlwZSAvUGFnZQovUGFyZW50IDIgMCBSCi9NZWRpYUJveCBbMCAwIDYzMiA3OTJdCi9Db250ZW50cyAzIDAgUgovRW5jb2RpbmcgL1dpbkFuc2lFbmNvZGluZwo+PgplbmRvYmoKMiAwIG9iago8PAovVHlwZSAvUGFnZXMKL0NvdW50IDEKL0tpZHMgWzMgMCBSXQo+PgplbmRvYmoKMyAwIG9",
			"corpid": "mdhpm1a4",
			"data": {
				"accountStatus": "1",
				"aggregate": "true",
				"bmbBbh": "34.0",
				"bred": "N",
				"bz": "N011",
				"code": "1265544111",
				"corpId": "mdhpm1a4",
				"creator": "cordkmkm",
				"creatorName": "李四",
				"email": "1464652552@.com",
				"ewm": "01,10,102897054716,23807539,2263.11,20200513,57644233870940613901,E7F0",
				"fhr": "李四",
				"fpDm": "011111111007",
				"fpHm": "03197858",
				"fpMw": "<-<>48938<4+<14>735+<2554*8-1-<+15<*026+848686/2/3//0>+*>>>356*<757/47>90+<25<<3575**934<+15<*026+848686--57",
				"fpjz": "1",
				"fplx": "3",
				"fpqqlsh": "1520063275914174464",
				"gmfDzdh": "海淀区西北旺 212121",
				"gmfMc": "429查看开差额",
				"gmfNsrsbh": "cd56111331231",
				"gmfYhzh": "北京央行",
				"hjje": 11.89,
				"hjse": 0.11,
				"hzxxbbh": "513266526526",
				"items": [
					{
						"dw": "千克",
						"fphxz": 0,
						"ggxh": "开规1开型2",
						"hh": "2492",
						"kce": 10,
						"lslbs": "1",
						"se": 0.11,
						"sl": 0.06,
						"spbm": "1010101010000000000",
						"xmdj": 11,
						"xmhsdj": 10,
						"xmje": 11.89,
						"xmjshj": 12,
						"xmmc": "*谷物*开名稻谷",
						"xmsl": 1,
						"yhzcbs": 0,
						"ysxmmc": "开名稻谷",
						"zkhhh": "0",
						"zxbm": "10",
						"zzstsgl": "按3%简易征收"
					}
				],
				"jqbh": "001",
				"jshj": 12,
				"jym": "2123545",
				"kplx": 0,
				"kpr": "玲娜贝儿",
				"kprq": "20220429233242",
				"lyid": "nh12135431",
				"lylx": "1",
				"orgId": 100006545,
				"orgName": "用友开票",
				"projectCode": "202",
				"projectId": "1",
				"projectName": "谷物",
				"qdbz": "0",
				"sbbz": "失败原因为税控盘没空票",
				"sgbz": "2",
				"skr": "李四",
				"tschbz": "1",
				"tspz": "0",
				"xsfDzdh": "测试地址1 13144445555",
				"xsfMc": "11134444",
				"xsfNsrsbh": "111222333456333",
				"xsfYhzh": "测试银行 978667866868",
				"yfpDm": "113134",
				"yfpHm": "42542453",
				"zdrq": "2022-04-29 00:00:00",
				"zdybz": "备注一些事项",
				"zfbz": "N",
				"zsfs": "2"
			},
			"sharecode": "f9d49a308143693bb2e7e8b2adaceffd",
			"shareurl": "https://dowrk2/fiel/323131.pdf",
			"fileType": "pdf"
		},
		"status": "开票成功",
		"statuscode": "4"
	},
	"message": "操作成功"
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
| 1002 | Data does not exist | Solve according to the prompt code |
| 1002 | Data does not exist | Solve according to the prompt code |


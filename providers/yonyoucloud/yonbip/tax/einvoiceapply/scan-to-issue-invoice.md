# Scan to issue invoice

来源页面：

- https://open.yonyoucloud.com/#/doc-center/docDes/api?apiId=59cdcff503064f818bdb722812e8debb&isOrigin=1&selectApiTab=open&from=&iframe=

机器可抓取的详情接口：

- https://open.yonyoucloud.com/iuap-ipaas-base/openPortal/api/getByVersionForTest/59cdcff503064f818bdb722812e8debb/running?scene=open&isOrigin=1&isAjax=1

## 基本信息

- apiId：59cdcff503064f818bdb722812e8debb
- API 类目：开票申请
- 产品：税务服务
- 更新时间：2025-07-01 17:05:45.000
- 请求方法：POST
- Content-Type：application/json
- 接口路径：/yonbip/tax/invoiceclient-web/api/invoiceApply/insertForQRInvoice

## 请求参数

### Query 参数

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| access_token | string | 是 | 接口令牌 access_token |

### Body 参数

| 字段路径 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| XSF_NSRSBH | string | 是 | Seller's Taxpayer Identification Number |
| FPQQLSH | string | 否 | Invoice request serial number |
| JSHJ | number | 是 | Total Price Including Tax |
| BZ | string | 否 | Remarks |
| LYID | string | 否 | Source ID |
| ORGCODE | string | 是 | Invoicing Site Code; View in the Invoicing Site File. |
| RQSJ | string | 否 | Date Time; yyyy-MM-dd |
| SHMC | string | 是 | Merchant Name |
| EMAIL | string | 否 | Invoice receipt email |
| URL | string | 否 | Callback URL |
| GMF_MC | string | 否 | Buyer Name |
| GMF_NSRSBH | string | 否 | Purchaser's Taxpayer Identification Number |
| GMF_DZDH | string | 否 | Buyer Address Phone |
| GMF_YHZH | string | 否 | Buyer's bank account number |
| FPLX | string | 否 | 1: VAT Electronic Normal Invoice;  <br>2: VAT Electronic Special Invoice;  <br>3: VAT Normal Invoice;  <br>4: VAT Special Invoice, VAT Special Invoice (Motor Vehicle);  <br>5: Unified Invoice for Motor Vehicle Sales;  <br>8: VAT Electronic Normal Invoice (Refined Oil);  <br>10: Normal Invoice for Refined Oil;  <br>11: Special Invoice for Refined Oil;  <br>15: Unified Invoice for Second-Hand Vehicle Sales;  <br>31: Fully Digitalized Special Invoice;  <br>32: Fully Digitalized Normal Invoice;  <br>33: Fully Digitalized Paper Invoice (VAT Special Invoice);  <br>34: Fully Digitalized Paper Invoice (Normal Invoice);  <br>35: Fully Digitalized Invoice (Airline Itinerary);  <br>36: Fully Digitalized Paper Invoice (Unified Invoice for Motor Vehicle Sales);   |
| KPR | string | 否 | Invoicer: Must be filled in when the invoicing site file has not set an invoicer. |
| TDZZSXMBH | string | 否 | Land VAT project number. Special electronic ticket type - construction service must be provided. |
| TSPZ | string | 否 | Special Invoice Types. 0 - General; 2 - Fuel VAT Special Invoice; 8 - Agricultural Products Sales; 9 - Agricultural Products Purchase; 11 - Tobacco Invoice; 12 - Motor Vehicle Invoice; 14 - Refined Oil Invoice; DK - Invoice Issued on Behalf; 16 - Mineral Products Invoice; E01 - Refined Oil Invoice; E03 - Construction Service Invoice; E04 - Goods Transportation; E05 - Real Estate Sales; E06 - Real Estate Leasing Service Invoice; E07 - Vehicle and Vessel Tax Collection; E09 - Passenger Transportation; E12 - Self-produced Agricultural Products Sales; E14 - Motor Vehicle; E16 - Agricultural Products Purchase; E17 - Photovoltaic Purchase; E18 - Cigarette Invoice; E22 - Electronic Itinerary. |
| KDSBZ | string | 否 | Cross-address flag. Real estate leasing service and construction service must be provided. Enumeration Y: Yes; N: No |
| items[] | object | 是 | Invoice Details |
| items[].FPHXZ | int | 否 | Invoice line nature: If this line is a discount line or a line subject to discount, it is a required field. 0 - Normal line, 1 - Discount line, 2 - Line subject to discount. |
| items[].XMMC | string | 是 | Project Name |
| items[].GGXH | string | 否 | Specification Model |
| items[].DW | string | 否 | Unit |
| items[].XMSL | number | 否 | Project Quantity |
| items[].XMDJ | number | 否 | Project unit price |
| items[].XMJSHJ | number | 是 | Project total including tax |
| items[].SL | number | 是 | Tax Rate |
| items[].HH | string | 否 | Line Number |
| items[].ZKHHH | string | 否 | Discount line number |
| items[].SPBM | string | 是 | Product Tax Category Code |
| items[].XMJE | number | 否 | Project Amount |
| items[].detailMotor | object | 否 | Detail special ticket type extended property. Motor vehicle and digital special ticket type - real estate leasing service and construction service must be transmitted. |
| items[].detailMotor.JZFWFSD | string | 否 | Location of construction service. Construction service must be transmitted. |
| items[].detailMotor.JZXMMC | string | 否 | Project name. Construction service is required. |
| items[].detailMotor.CQZSBH | string | 否 | Property certificate number. Real estate leasing service must be provided. Not provided None. |
| tspzs | object | 否 | Special Ticket Type Extended Properties |
| tspzs.JTGJLXDM | string | 否 | Transportation tool types. Building services and passenger transportation must be transmitted. 1- Airplane; 2- Train; 3- Long-distance bus; 4- Public transport; 5- Taxi; 6- Car; 7- Ship; 9- Other; |
| tspzs.YSMXXH | string | 否 | Transport detail serial number. Special ticket types for digital electronics - construction services and passenger transport must be transmitted; starting from 1. |
| tspzs.QYD | string | 否 | Place of Departure. Special electronic ticket types - Construction Services and Passenger Transportation, etc. must be transmitted. |
| tspzs.DDD | string | 否 | Destination. Special ticket types for digital services - construction services and passenger transportation must be transmitted. |
| tspzs.YSGJZL | string | 否 | Types of transportation tools. Special ticket types for digital services - construction services and passenger transportation must be transmitted. Values: railway transportation, road transportation, water transportation, air transportation, pipeline transportation, other transportation tools. |
| tspzs.YSGJPH | string | 否 | Transport tool model number. Special electronic ticket types - construction services and passenger transport must be transmitted. |
| tspzs.YSHWMC | string | 否 | Transportation Goods Name. Special Electronic Ticket Type - Construction Service and Passenger Transportation, etc. must be transmitted. |
| tspzs.CXRXH | string | 否 | Traveler serial number. Starts from 1. |
| tspzs.CXR | string | 否 | Carrier Name |
| tspzs.CHUXRQ | string | 否 | Travel Date. Format: yyyy-MM-dd HH:mm |
| tspzs.CFD | string | 否 | Place of Departure |
| tspzs.LKDDD | string | 否 | Destination |
| tspzs.ZWDJ | string | 否 | Seat Class |

## 请求示例

```text
Url: /yonbip/tax/invoiceclient-web/api/invoiceApply/insertForQRInvoice?access_token=<ACCESS_TOKEN>  
Body: {
	"XSF_NSRSBH": "111222333456333",
	"FPQQLSH": "121213123",
	"JSHJ": 117,
	"BZ": "备注",
	"LYID": "来源id",
	"ORGCODE": "10300002",
	"RQSJ": "2021-11-16",
	"SHMC": "asdasd",
	"EMAIL": "14525522@qq.com",
	"URL": "https://esgs.com/result/qie",
	"GMF_MC": "北京用友",
	"GMF_NSRSBH": "53513115",
	"GMF_DZDH": "海淀用友产业全 666232",
	"GMF_YHZH": "海淀银行 233232",
	"FPLX": "1",
	"KPR": "李四",
	"TDZZSXMBH": "10510304578",
	"TSPZ": "E22",
	"KDSBZ": "N",
	"items": [
		{
			"FPHXZ": 0,
			"XMMC": "（pp瓶）0.9%氯化钠注射液",
			"GGXH": "GG",
			"DW": "单位",
			"XMSL": 1,
			"XMDJ": 100,
			"XMJSHJ": 117,
			"SL": 0.17,
			"HH": "0",
			"ZKHHH": "1",
			"SPBM": "3010504020000000000",
			"XMJE": 100,
			"detailMotor": {
				"JZFWFSD": "XX省XX市XX县XX镇XXXX",
				"JZXMMC": "XX省XX市XX县XX镇XXXX",
				"CQZSBH": "无"
			}
		}
	],
	"tspzs": {
		"JTGJLXDM": "1",
		"YSMXXH": "1",
		"QYD": "XX省XX市XX县XX镇XXXX",
		"DDD": "XX省XX市XX县XX镇XXXX",
		"YSGJZL": "管道运输",
		"YSGJPH": "京A1234567",
		"YSHWMC": "钢材",
		"CXRXH": "1",
		"CXR": "王五",
		"CHUXRQ": "2023-10-25 08:30",
		"CFD": "北京",
		"LKDDD": "上海",
		"ZWDJ": "头等舱"
	}
}
```

## 返回参数说明

| 字段路径 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| code | string | 否 | Status Code |
| message | string | 否 | Processing status information |
| data | object | 否 | Return data |
| data.qrcode | string | 否 | QR code view URL |
| data.invoicecode | string | 否 | Invoice extraction code |

## 返回示例

### 正确返回

```json
{
	"code": "200",
	"message": "操作成功",
	"data": {
		"qrcode": "https://tax.diwork.com/mobileinvoice/index.html?fs=sm&lsh=agTuxnQcTRrVEwEqjd72Xg&corp=ry4qcaql&profile=daily-center&tenantId=0000LM68DHTC0MYSQV0000",
		"invoicecode": "123456789567"
	}
}
```

### 错误返回

```json
{
    "code": "9999",
    "message": "数据保存失败，输入的单据发票请求流水号已经存在，请您重新赋值流水号!"
}
```

## 错误码

| 错误码 | 错误信息 | 说明 |
| --- | --- | --- |
| 1001 | Data is invalid, the input parameter is incorrect. | Check incoming parameters |
| 9999 | Unknown error | Troubleshoot and modify according to the corresponding error message. |


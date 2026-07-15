# Scan to issue invoice

来源页面：

- https://open.yonyoucloud.com/#/doc-center/docDes/api?apiId=59cdcff503064f818bdb722812e8debb&isOrigin=1&selectApiTab=open&from=&iframe=

机器可抓取的详情接口：

- https://open.yonyoucloud.com/iuap-ipaas-base/openPortal/api/getByVersionForTest/59cdcff503064f818bdb722812e8debb/running?scene=open&isOrigin=1&isAjax=1

## 基本信息

- apiId：59cdcff503064f818bdb722812e8debb
- API 类目：开票申请
- 所属目录：开票（Invoicing）
- 产品：税务服务
- 更新时间：2025-07-01 17:05:45.000
- 请求方法：POST
- Content-Type：application/json
- 接口路径：/yonbip/tax/invoiceclient-web/api/invoiceApply/insertForQRInvoice
- 完整调用地址：https://c2.yonyoucloud.com/iuap-api-gateway/yonbip/tax/invoiceclient-web/api/invoiceApply/insertForQRInvoice
- 鉴权方式：access_token 作为 Query 参数传递（?access_token=）
- 当前状态：当前接口
- 请求字段数：Query 0 个，Body 50 个
- 返回字段数：5 个

## 对接要点

- 调用 URL：`https://c2.yonyoucloud.com/iuap-api-gateway/yonbip/tax/invoiceclient-web/api/invoiceApply/insertForQRInvoice?access_token={access_token}`
- 调用方必须保存业务来源单号、发票请求流水号、请求报文、响应报文和状态查询结果，便于重试和对账。
- 开票、红冲、作废、驱动开票等写操作建议用业务唯一号做幂等控制；同一业务单不要生成多个不同流水号反复提交。
- 返回成功只代表接口调用成功，不一定代表税局或开票终态成功；涉及开票结果时必须再调用状态查询类接口确认。
- 详情接口返回字段说明可能为英文，字段名以开放平台原始字段为准。

## 调用模板

```bash
curl -X POST 'https://c2.yonyoucloud.com/iuap-api-gateway/yonbip/tax/invoiceclient-web/api/invoiceApply/insertForQRInvoice?access_token=访问令牌' \
  -H 'Content-Type: application/json' \
  -d '{"data": {}}'
```

## 请求参数

### Query 参数

无。

> 注：开放平台网关调用时通常还需传递 `access_token`。

### Body 参数

1. `XSF_NSRSBH`
   - 类型：string
   - 数组：否
   - 必填：是
   - 示例/默认值：`111222333456333`
   - 说明：Seller's Taxpayer Identification Number

2. `FPQQLSH`
   - 类型：string
   - 数组：否
   - 必填：否
   - 示例/默认值：`121213123`
   - 说明：Invoice request serial number

3. `JSHJ`
   - 类型：number
   - 数组：否
   - 必填：是
   - 示例/默认值：`117`
   - 说明：Total Price Including Tax

4. `BZ`
   - 类型：string
   - 数组：否
   - 必填：否
   - 示例/默认值：`Remarks`
   - 说明：Remarks

5. `LYID`
   - 类型：string
   - 数组：否
   - 必填：否
   - 示例/默认值：`Source ID`
   - 说明：Source ID

6. `ORGCODE`
   - 类型：string
   - 数组：否
   - 必填：是
   - 示例/默认值：`10300002`
   - 说明：Invoicing Site Code; View in the Invoicing Site File.

7. `RQSJ`
   - 类型：string
   - 数组：否
   - 必填：否
   - 示例/默认值：`2021-11-16`
   - 说明：Date Time; yyyy-MM-dd

8. `SHMC`
   - 类型：string
   - 数组：否
   - 必填：是
   - 示例/默认值：`asdasd`
   - 说明：Merchant Name

9. `EMAIL`
   - 类型：string
   - 数组：否
   - 必填：否
   - 示例/默认值：`14525522@qq.com`
   - 说明：Invoice receipt email

10. `URL`
   - 类型：string
   - 数组：否
   - 必填：否
   - 示例/默认值：`https://esgs.com/result/qie`
   - 说明：Callback URL

11. `GMF_MC`
   - 类型：string
   - 数组：否
   - 必填：否
   - 示例/默认值：`Beijing Yonyou`
   - 说明：Buyer Name

12. `GMF_NSRSBH`
   - 类型：string
   - 数组：否
   - 必填：否
   - 示例/默认值：`53513115`
   - 说明：Purchaser's Taxpayer Identification Number

13. `GMF_DZDH`
   - 类型：string
   - 数组：否
   - 必填：否
   - 示例/默认值：`Haidian Yonyou Industry Full 666232`
   - 说明：Buyer Address Phone

14. `GMF_YHZH`
   - 类型：string
   - 数组：否
   - 必填：否
   - 示例/默认值：`Haidian Bank 233232`
   - 说明：Buyer's bank account number

15. `FPLX`
   - 类型：string
   - 数组：否
   - 必填：否
   - 示例/默认值：`1`
   - 说明：1: VAT Electronic Normal Invoice;  
     2: VAT Electronic Special Invoice;  
     3: VAT Normal Invoice;  
     4: VAT Special Invoice, VAT Special Invoice (Motor Vehicle);  
     5: Unified Invoice for Motor Vehicle Sales;  
     8: VAT Electronic Normal Invoice (Refined Oil);  
     10: Normal Invoice for Refined Oil;  
     11: Special Invoice for Refined Oil;  
     15: Unified Invoice for Second-Hand Vehicle Sales;  
     31: Fully Digitalized Special Invoice;  
     32: Fully Digitalized Normal Invoice;  
     33: Fully Digitalized Paper Invoice (VAT Special Invoice);  
     34: Fully Digitalized Paper Invoice (Normal Invoice);  
     35: Fully Digitalized Invoice (Airline Itinerary);  
     36: Fully Digitalized Paper Invoice (Unified Invoice for Motor Vehicle Sales);  

16. `KPR`
   - 类型：string
   - 数组：否
   - 必填：否
   - 示例/默认值：`Li Si`
   - 说明：Invoicer: Must be filled in when the invoicing site file has not set an invoicer.

17. `TDZZSXMBH`
   - 类型：string
   - 数组：否
   - 必填：否
   - 示例/默认值：`10510304578`
   - 说明：Land VAT project number. Special electronic ticket type - construction service must be provided.

18. `TSPZ`
   - 类型：string
   - 数组：否
   - 必填：否
   - 示例/默认值：`E22`
   - 说明：Special Invoice Types. 0 - General; 2 - Fuel VAT Special Invoice; 8 - Agricultural Products Sales; 9 -
     Agricultural Products Purchase; 11 - Tobacco Invoice; 12 - Motor Vehicle Invoice; 14 - Refined Oil Invoice; DK
     - Invoice Issued on Behalf; 16 - Mineral Products Invoice; E01 - Refined Oil Invoice; E03 - Construction
     Service Invoice; E04 - Goods Transportation; E05 - Real Estate Sales; E06 - Real Estate Leasing Service
     Invoice; E07 - Vehicle and Vessel Tax Collection; E09 - Passenger Transportation; E12 - Self-produced
     Agricultural Products Sales; E14 - Motor Vehicle; E16 - Agricultural Products Purchase; E17 - Photovoltaic
     Purchase; E18 - Cigarette Invoice; E22 - Electronic Itinerary.

19. `KDSBZ`
   - 类型：string
   - 数组：否
   - 必填：否
   - 示例/默认值：`N`
   - 说明：Cross-address flag. Real estate leasing service and construction service must be provided. Enumeration Y: Yes;
     N: No

20. `items`
   - 类型：object
   - 数组：是
   - 必填：是
   - 说明：Invoice Details

21. `items.FPHXZ`
   - 类型：int
   - 数组：否
   - 必填：否
   - 示例/默认值：`0`
   - 说明：Invoice line nature: If this line is a discount line or a line subject to discount, it is a required field. 0
     - Normal line, 1 - Discount line, 2 - Line subject to discount.

22. `items.XMMC`
   - 类型：string
   - 数组：否
   - 必填：是
   - 示例/默认值：`(pp bottle) 0.9% Sodium Chloride Injection`
   - 说明：Project Name

23. `items.GGXH`
   - 类型：string
   - 数组：否
   - 必填：否
   - 示例/默认值：`GG`
   - 说明：Specification Model

24. `items.DW`
   - 类型：string
   - 数组：否
   - 必填：否
   - 示例/默认值：`Unit`
   - 说明：Unit

25. `items.XMSL`
   - 类型：number
   - 数组：否
   - 必填：否
   - 示例/默认值：`1`
   - 说明：Project Quantity

26. `items.XMDJ`
   - 类型：number
   - 数组：否
   - 必填：否
   - 示例/默认值：`100`
   - 说明：Project unit price

27. `items.XMJSHJ`
   - 类型：number
   - 数组：否
   - 必填：是
   - 示例/默认值：`117`
   - 说明：Project total including tax

28. `items.SL`
   - 类型：number
   - 数组：否
   - 必填：是
   - 示例/默认值：`0.17`
   - 说明：Tax Rate

29. `items.HH`
   - 类型：string
   - 数组：否
   - 必填：否
   - 示例/默认值：`0`
   - 说明：Line Number

30. `items.ZKHHH`
   - 类型：string
   - 数组：否
   - 必填：否
   - 示例/默认值：`1`
   - 说明：Discount line number

31. `items.SPBM`
   - 类型：string
   - 数组：否
   - 必填：是
   - 示例/默认值：`3010504020000000000`
   - 说明：Product Tax Category Code

32. `items.XMJE`
   - 类型：number
   - 数组：否
   - 必填：否
   - 示例/默认值：`100`
   - 说明：Project Amount

33. `items.detailMotor`
   - 类型：object
   - 数组：否
   - 必填：否
   - 说明：Detail special ticket type extended property. Motor vehicle and digital special ticket type - real estate
     leasing service and construction service must be transmitted.

34. `items.detailMotor.JZFWFSD`
   - 类型：string
   - 数组：否
   - 必填：否
   - 示例/默认值：`XX Province, XX City, XX County, XX Town, XXXX`
   - 说明：Location of construction service. Construction service must be transmitted.

35. `items.detailMotor.JZXMMC`
   - 类型：string
   - 数组：否
   - 必填：否
   - 示例/默认值：`XX Province, XX City, XX County, XX Town, XXXX`
   - 说明：Project name. Construction service is required.

36. `items.detailMotor.CQZSBH`
   - 类型：string
   - 数组：否
   - 必填：否
   - 示例/默认值：`None`
   - 说明：Property certificate number. Real estate leasing service must be provided. Not provided None.

37. `tspzs`
   - 类型：object
   - 数组：否
   - 必填：否
   - 说明：Special Ticket Type Extended Properties

38. `tspzs.JTGJLXDM`
   - 类型：string
   - 数组：否
   - 必填：否
   - 示例/默认值：`1`
   - 说明：Transportation tool types. Building services and passenger transportation must be transmitted. 1- Airplane; 2-
     Train; 3- Long-distance bus; 4- Public transport; 5- Taxi; 6- Car; 7- Ship; 9- Other;

39. `tspzs.YSMXXH`
   - 类型：string
   - 数组：否
   - 必填：否
   - 示例/默认值：`1`
   - 说明：Transport detail serial number. Special ticket types for digital electronics - construction services and
     passenger transport must be transmitted; starting from 1.

40. `tspzs.QYD`
   - 类型：string
   - 数组：否
   - 必填：否
   - 示例/默认值：`XX Province, XX City, XX County, XX Town, XXXX`
   - 说明：Place of Departure. Special electronic ticket types - Construction Services and Passenger Transportation, etc.
     must be transmitted.

41. `tspzs.DDD`
   - 类型：string
   - 数组：否
   - 必填：否
   - 示例/默认值：`XX Province, XX City, XX County, XX Town, XXXX`
   - 说明：Destination. Special ticket types for digital services - construction services and passenger transportation
     must be transmitted.

42. `tspzs.YSGJZL`
   - 类型：string
   - 数组：否
   - 必填：否
   - 示例/默认值：`Pipeline Transportation`
   - 说明：Types of transportation tools. Special ticket types for digital services - construction services and passenger
     transportation must be transmitted. Values: railway transportation, road transportation, water transportation,
     air transportation, pipeline transportation, other transportation tools.

43. `tspzs.YSGJPH`
   - 类型：string
   - 数组：否
   - 必填：否
   - 示例/默认值：`Beijing A1234567`
   - 说明：Transport tool model number. Special electronic ticket types - construction services and passenger transport
     must be transmitted.

44. `tspzs.YSHWMC`
   - 类型：string
   - 数组：否
   - 必填：否
   - 示例/默认值：`Steel`
   - 说明：Transportation Goods Name. Special Electronic Ticket Type - Construction Service and Passenger Transportation,
     etc. must be transmitted.

45. `tspzs.CXRXH`
   - 类型：string
   - 数组：否
   - 必填：否
   - 示例/默认值：`1`
   - 说明：Traveler serial number. Starts from 1.

46. `tspzs.CXR`
   - 类型：string
   - 数组：否
   - 必填：否
   - 示例/默认值：`Wang Wu`
   - 说明：Carrier Name

47. `tspzs.CHUXRQ`
   - 类型：string
   - 数组：否
   - 必填：否
   - 示例/默认值：`2023-10-25 08:30`
   - 说明：Travel Date. Format: yyyy-MM-dd HH:mm

48. `tspzs.CFD`
   - 类型：string
   - 数组：否
   - 必填：否
   - 示例/默认值：`Beijing`
   - 说明：Place of Departure

49. `tspzs.LKDDD`
   - 类型：string
   - 数组：否
   - 必填：否
   - 示例/默认值：`Shanghai`
   - 说明：Destination

50. `tspzs.ZWDJ`
   - 类型：string
   - 数组：否
   - 必填：否
   - 示例/默认值：`First Class`
   - 说明：Seat Class

## 请求示例

```text
Url: /yonbip/tax/invoiceclient-web/api/invoiceApply/insertForQRInvoice?access_token=访问令牌  
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

## 返回参数

### 返回字段

1. `code`
   - 类型：string
   - 数组：否
   - 必填：否
   - 示例/默认值：`200`
   - 说明：Status Code

2. `message`
   - 类型：string
   - 数组：否
   - 必填：否
   - 示例/默认值：`Operation successful`
   - 说明：Processing status information

3. `data`
   - 类型：object
   - 数组：否
   - 必填：否
   - 说明：Return data

4. `data.qrcode`
   - 类型：string
   - 数组：否
   - 必填：否
   - 示例/默认值：`https://tax.diwork.com/mobileinvoice/index.html?fs=sm&lsh=agTuxnQcTRrVEwEqjd72Xg&corp=ry4qcaql&profile=daily-center&tenantId=0000LM68DHTC0MYSQV0000`
   - 说明：QR code view URL

5. `data.invoicecode`
   - 类型：string
   - 数组：否
   - 必填：否
   - 示例/默认值：`123456789567`
   - 说明：Invoice extraction code

## 返回示例

### 成功示例

无。

### 失败示例

无。

## 错误码

| 错误码 | 错误说明 | 处理建议 |
| --- | --- | --- |
| 1001 |  |  |
| 9999 |  |  |


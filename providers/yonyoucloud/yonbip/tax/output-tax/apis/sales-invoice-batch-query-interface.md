# Sales Invoice Batch Query Interface

来源页面：

- https://open.yonyoucloud.com/#/doc-center/docDes/api?apiId=1860933016558764033&isOrigin=1&selectApiTab=open&from=&iframe=

机器可抓取的详情接口：

- https://open.yonyoucloud.com/iuap-ipaas-base/openPortal/api/getByVersionForTest/1860933016558764033/running?scene=open&isOrigin=1&isAjax=1

## 基本信息

- apiId：1860933016558764033
- API 类目：已开票
- 所属目录：销项企业票夹（Outbound Enterprise Invoice Folder）
- 产品：税务服务
- 更新时间：2025-07-01 17:05:07.000
- 请求方法：POST
- Content-Type：application/json
- 接口路径：/yonbip/tax/invoiceclient-web/api/saleInvoiceCollection/query
- 完整调用地址：https://c2.yonyoucloud.com/iuap-api-gateway/yonbip/tax/invoiceclient-web/api/saleInvoiceCollection/query
- 鉴权方式：access_token 作为 Query 参数传递（?access_token=）
- 当前状态：当前接口
- 请求字段数：Query 0 个，Body 23 个
- 返回字段数：151 个

## 对接要点

- 调用 URL：`https://c2.yonyoucloud.com/iuap-api-gateway/yonbip/tax/invoiceclient-web/api/saleInvoiceCollection/query?access_token={access_token}`
- 调用方必须保存业务来源单号、发票请求流水号、请求报文、响应报文和状态查询结果，便于重试和对账。
- 开票、红冲、作废、驱动开票等写操作建议用业务唯一号做幂等控制；同一业务单不要生成多个不同流水号反复提交。
- 返回成功只代表接口调用成功，不一定代表税局或开票终态成功；涉及开票结果时必须再调用状态查询类接口确认。
- 详情接口返回字段说明可能为英文，字段名以开放平台原始字段为准。

## 调用模板

```bash
curl -X POST 'https://c2.yonyoucloud.com/iuap-api-gateway/yonbip/tax/invoiceclient-web/api/saleInvoiceCollection/query?access_token=访问令牌' \
  -H 'Content-Type: application/json' \
  -d '{"data": {}}'
```

## 请求参数

### Query 参数

无。

> 注：开放平台网关调用时通常还需传递 `access_token`。

### Body 参数

1. `orgCode`
   - 类型：string
   - 数组：否
   - 必填：否
   - 示例/默认值：`123xxx`
   - 说明：Invoicing Site Code, check in the Invoicing Site file.

2. `nsrsbh`
   - 类型：string
   - 数组：否
   - 必填：是
   - 示例/默认值：`321xxxxx`
   - 说明：Taxpayer Identification Number

3. `fpHm`
   - 类型：string
   - 数组：否
   - 必填：否
   - 示例/默认值：`12345678`
   - 说明：Tax Control Invoice and Digital Electronic Invoice Number

4. `fpDm`
   - 类型：string
   - 数组：否
   - 必填：否
   - 示例/默认值：`1234567812`
   - 说明：Tax Control Invoice or Digital Paper Invoice Code

5. `sdHm`
   - 类型：string
   - 数组：否
   - 必填：否
   - 示例/默认值：`23442000000087225540`
   - 说明：Due to the existence of electronic invoices, this field specifically indicates the electronic invoice number
     of the electronic paper invoice, including the invoice number and invoice code.

6. `fplx`
   - 类型：string
   - 数组：否
   - 必填：否
   - 示例/默认值：`1`
   - 说明：Invoice Type: Invoice Type: 1: VAT Electronic Normal Invoice; 2: VAT Electronic Special Invoice; 3: VAT Normal
     Invoice; 4: VAT Special Invoice; 5: Unified Invoice for Motor Vehicle Sales; 8: VAT Electronic Normal Invoice
     (Refined Oil); 10: Normal Invoice for Refined Oil; 11: Special Invoice for Refined Oil; 15: Unified Invoice
     for Second-Hand Vehicle Sales; 31: Special Invoice for Digital Products; 32: Normal Invoice for Digital
     Products; 33: Paper Invoice for Digital Products (VAT Special Invoice); 34: Paper Invoice for Digital Products
     (Normal Invoice); Optional; Default is 1.

7. `kplx`
   - 类型：string
   - 数组：否
   - 必填：否
   - 示例/默认值：`0`
   - 说明：Invoice Type; 0: Blue Invoice; 1: Red Invoice

8. `zfbz`
   - 类型：string
   - 数组：否
   - 必填：否
   - 示例/默认值：`N`
   - 说明：Cancellation Mark; N: Not Canceled; Y: Canceled

9. `bred`
   - 类型：string
   - 数组：否
   - 必填：否
   - 示例/默认值：`N`
   - 说明：Red invoice mark; Y: Red invoice issued; N: No red invoice issued

10. `gmfNsrsbh`
   - 类型：string
   - 数组：否
   - 必填：否
   - 示例/默认值：`1231315664`
   - 说明：Purchaser's Taxpayer Identification Number

11. `xsfNsrsbh`
   - 类型：string
   - 数组：否
   - 必填：否
   - 示例/默认值：`1212132313289`
   - 说明：Seller's Taxpayer Identification Number

12. `kprq_begin`
   - 类型：string
   - 数组：否
   - 必填：否
   - 示例/默认值：`2019-01-01`
   - 说明：Invoice Date - Start; yyyy-MM-dd

13. `kprq_end`
   - 类型：string
   - 数组：否
   - 必填：否
   - 示例/默认值：`2019-01-01`
   - 说明：Invoice Date - End; yyyy-MM-dd

14. `gather_begin`
   - 类型：string
   - 数组：否
   - 必填：否
   - 示例/默认值：`2019-01-01`
   - 说明：Collection Date - Start; yyyy-MM-dd

15. `gather_end`
   - 类型：string
   - 数组：否
   - 必填：否
   - 示例/默认值：`2019-01-01`
   - 说明：Collection Date - End; yyyy-MM-dd

16. `page`
   - 类型：int
   - 数组：否
   - 必填：是
   - 示例/默认值：`1`
   - 说明：Pagination data page number

17. `size`
   - 类型：int
   - 数组：否
   - 必填：是
   - 示例/默认值：`5`
   - 说明：Data per page

18. `srcType`
   - 类型：string
   - 数组：否
   - 必填：否
   - 示例/默认值：`10`
   - 说明：Data Source (Platform-10 Tax Disk-20 Excel Import-30 Tax Bureau-40)

19. `zsfs`
   - 类型：string
   - 数组：否
   - 必填：否
   - 说明：Taxation Method (Normal Taxation - 0, Differential Taxation/Differential Invoicing - 2, Full Invoicing - 3)

20. `tspz`
   - 类型：string
   - 数组：否
   - 必填：否
   - 说明：Special Business Type (0-General; 2-Fuel VAT Special Invoice; 8-Agricultural Product Sales; 9-Agricultural
     Product Purchase; 11-Tobacco Invoice; 12-Motor Vehicle Invoice; 14-Finished Oil Invoice; DK-Proxy Invoice;
     16-Mineral Product Invoice; E01-Finished Oil Invoice; E02-Rare Earth Invoice; E03-Construction Service
     Invoice; E04-Goods Transportation; E05-Real Estate Sales; E06-Real Estate Leasing Service Invoice; E07-Proxy
     Collection of Vehicle and Vessel Tax; E09-Passenger Transportation; E12-Self-produced Agricultural Product
     Sales; E14-Motor Vehicle; E16-Agricultural Product Purchase; E17-Photovoltaic Purchase; E18-Cigarette Invoice;
     E22-Electronic Itinerary; E32-E-Cigarette)

21. `projectCodes`
   - 类型：string
   - 数组：是
   - 必填：否
   - 说明：Project Code

22. `finOrgCodes`
   - 类型：string
   - 数组：是
   - 必填：否
   - 说明：Accounting Entity Code

23. `noDetail`
   - 类型：string
   - 数组：否
   - 必填：否
   - 示例/默认值：`Y`
   - 说明：Return details or not. Y: Do not return details. Not passing or other: Return details.

## 请求示例

```text
Url: /ytqe8jhl/yonbip/tax/invoiceclient-web/api/saleInvoiceCollection/query?access_token=访问令牌
Body: {
	"orgCode": "123xxx",
	"nsrsbh": "321xxxxx",
	"fpHm": "12345678",
	"fpDm": "1234567812",
	"sdHm": "23442000000087225540",
	"fplx": "1",
	"kplx": "0",
	"zfbz": "N",
	"bred": "N",
	"gmfNsrsbh": "1231315664",
	"xsfNsrsbh": "1212132313289",
	"kprq_begin": "2019-01-01",
	"kprq_end": "2019-01-01",
	"gather_begin": "2019-01-01",
	"gather_end": "2019-01-01",
	"page": 1,
	"size": 5,
	"srcType": "10",
	"zsfs": "",
	"tspz": "",
	"projectCodes": [
		""
	],
	"finOrgCodes": [
		""
	],
	"noDetail": "Y"
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
   - 说明：Information Description

3. `data`
   - 类型：object
   - 数组：是
   - 必填：否
   - 说明：Return data

4. `data.fpqqlsh`
   - 类型：string
   - 数组：否
   - 必填：否
   - 示例/默认值：`1235211020202`
   - 说明：Invoice request serial number

5. `data.orgId`
   - 类型：string
   - 数组：否
   - 必填：否
   - 示例/默认值：`21313521321231`
   - 说明：Organization ID, corresponding to the primary key ID of the invoicing site record.

6. `data.lydjh`
   - 类型：string
   - 数组：否
   - 必填：否
   - 示例/默认值：`4513545613132`
   - 说明：Source Document Number

7. `data.fpHm`
   - 类型：string
   - 数组：否
   - 必填：否
   - 示例/默认值：`04208969`
   - 说明：Tax Control Invoice and Digital Electronic Invoice Number

8. `data.fpDm`
   - 类型：string
   - 数组：否
   - 必填：否
   - 示例/默认值：`1100163130`
   - 说明：Tax Control Invoice or Digital Paper Invoice Code

9. `data.sdHm`
   - 类型：string
   - 数组：否
   - 必填：否
   - 示例/默认值：`23442000000087225540`
   - 说明：Digital electronic invoice number

10. `data.kprq`
   - 类型：string
   - 数组：否
   - 必填：否
   - 示例/默认值：`2017-07-31`
   - 说明：Invoice Date yyyy-MM-dd

11. `data.fpMw`
   - 类型：string
   - 数组：否
   - 必填：否
   - 示例/默认值：`15<*026+848686`
   - 说明：Invoice ciphertext

12. `data.jym`
   - 类型：string
   - 数组：否
   - 必填：否
   - 示例/默认值：`57644233870940613901`
   - 说明：Verification code

13. `data.fplx`
   - 类型：string
   - 数组：否
   - 必填：否
   - 示例/默认值：`4`
   - 说明：Invoice Type: 1: VAT Electronic Normal Invoice; 2: VAT Electronic Special Invoice; 3: VAT Normal Invoice; 4:
     VAT Special Invoice; 5: Unified Invoice for Motor Vehicle Sales; 8: VAT Electronic Normal Invoice (Refined
     Oil); 10: Normal Invoice for Refined Oil; 11: Special Invoice for Refined Oil; 15: Unified Invoice for
     Second-Hand Vehicle Sales; 31: Digital Special Invoice; 32: Digital Normal Invoice; 33: Digital Paper Invoice
     (VAT Special Invoice); 34: Digital Paper Invoice (Normal Invoice);

14. `data.kplx`
   - 类型：string
   - 数组：否
   - 必填：否
   - 示例/默认值：`0`
   - 说明：Invoice Type; 0: Blue Invoice, 1: Red Invoice

15. `data.xsfMc`
   - 类型：string
   - 数组：否
   - 必填：否
   - 示例/默认值：`Yonyou Energy Technology Co., Ltd.`
   - 说明：Seller Name

16. `data.xsfNsrsbh`
   - 类型：string
   - 数组：否
   - 必填：否
   - 示例/默认值：`9111010834431437XQ`
   - 说明：Seller's Taxpayer Identification Number

17. `data.xsfDzdh`
   - 类型：string
   - 数组：否
   - 必填：否
   - 示例/默认值：`Room 201, 2nd Floor, Building 20, No. 68 Beiqing Road, Haidian District, Beijing 82020955`
   - 说明：Seller's Address and Phone Number

18. `data.xsfYhzh`
   - 类型：string
   - 数组：否
   - 必填：否
   - 示例/默认值：`11001048600052502301`
   - 说明：Seller's bank account number

19. `data.gmfMc`
   - 类型：string
   - 数组：否
   - 必填：否
   - 示例/默认值：`Yonyou Network Technology Co., Ltd.`
   - 说明：Buyer Name

20. `data.gmfDzdh`
   - 类型：string
   - 数组：否
   - 必填：否
   - 示例/默认值：`No. 68 Beiqing Road, Haidian District, Beijing 62436688`
   - 说明：Buyer Address Phone

21. `data.gmfNsrsbh`
   - 类型：string
   - 数组：否
   - 必填：否
   - 示例/默认值：`91110000600001760P`
   - 说明：Purchaser's Taxpayer Identification Number

22. `data.gmfYhzh`
   - 类型：string
   - 数组：否
   - 必填：否
   - 示例/默认值：`Bank account of a company in Beijing`
   - 说明：Buyer's bank account number

23. `data.jshj`
   - 类型：BigDecimal
   - 数组：否
   - 必填：否
   - 示例/默认值：`100842`
   - 说明：Total Price Including Tax

24. `data.hjje`
   - 类型：BigDecimal
   - 数组：否
   - 必填：否
   - 示例/默认值：`95133.96`
   - 说明：Total Amount

25. `data.hjse`
   - 类型：BigDecimal
   - 数组：否
   - 必填：否
   - 示例/默认值：`5708.04`
   - 说明：Total Tax Amount

26. `data.bz`
   - 类型：string
   - 数组：否
   - 必填：否
   - 说明：Remarks

27. `data.kpr`
   - 类型：string
   - 数组：否
   - 必填：否
   - 示例/默认值：`Invoicer`
   - 说明：Invoicer

28. `data.skr`
   - 类型：string
   - 数组：否
   - 必填：否
   - 示例/默认值：`Payee`
   - 说明：Payee

29. `data.fhr`
   - 类型：string
   - 数组：否
   - 必填：否
   - 示例/默认值：`Reviewer`
   - 说明：Reviewer

30. `data.yfpDm`
   - 类型：string
   - 数组：否
   - 必填：否
   - 示例/默认值：`456456456`
   - 说明：Original invoice code

31. `data.yfpHm`
   - 类型：string
   - 数组：否
   - 必填：否
   - 示例/默认值：`2564566`
   - 说明：Original invoice number

32. `data.srcType`
   - 类型：string
   - 数组：否
   - 必填：否
   - 示例/默认值：`10`
   - 说明：Data Source (Platform-10 Tax Disk-20 Excel Import-30 Tax Bureau-40) Example: 10

33. `data.lyid`
   - 类型：string
   - 数组：否
   - 必填：否
   - 示例/默认值：`123123123123123`
   - 说明：Invoice Source ID

34. `data.projectCode`
   - 类型：string
   - 数组：否
   - 必填：否
   - 示例/默认值：`jhde3232`
   - 说明：Project Code

35. `data.finOrgCode`
   - 类型：string
   - 数组：否
   - 必填：否
   - 示例/默认值：`32323`
   - 说明：Accounting Entity Code

36. `data.zsfs`
   - 类型：string
   - 数组：否
   - 必填：否
   - 示例/默认值：`0`
   - 说明：Taxation method (Normal taxation - 0, Differential taxation/Differential invoicing - 2, Full invoicing - 3)

37. `data.bred`
   - 类型：string
   - 数组：否
   - 必填：否
   - 示例/默认值：`N`
   - 说明：Red reversal mark; Y: Reversed; N: Not reversed    Example: N

38. `data.tspz`
   - 类型：string
   - 数组：否
   - 必填：否
   - 示例/默认值：`E06`
   - 说明：Special Business Type (0-General; 2-Fuel VAT Special Invoice; 8-Agricultural Product Sales; 9-Agricultural
     Product Purchase; 11-Tobacco Invoice; 12-Motor Vehicle Invoice; 14-Finished Oil Invoice; DK-Substitute
     Invoice; 16-Mineral Product Invoice; E01-Finished Oil Invoice; E03-Construction Service Invoice; E04-Goods
     Transportation; E05-Real Estate Sales; E06-Real Estate Leasing Service Invoice; E07-Substitute Vehicle and
     Vessel Tax; E09-Passenger Transportation; E12-Self-produced Agricultural Product Sales; E14-Motor Vehicle;
     E16-Agricultural Product Purchase; E17-Photovoltaic Purchase; E18-Cigarette Invoice; E02-Rare Earth Invoice;
     E22-Electronic Itinerary; E32-Electronic Cigarette)

39. `data.bdcdz`
   - 类型：string
   - 数组：否
   - 必填：否
   - 示例/默认值：`5-4-1803, Binhai Park, Dongcheng District, Beijing, Beijing Municipality`
   - 说明：Real Estate Address

40. `data.zlqq`
   - 类型：string
   - 数组：否
   - 必填：否
   - 示例/默认值：`2023-03-22`
   - 说明：Start date of the lease term

41. `data.zlqz`
   - 类型：string
   - 数组：否
   - 必填：否
   - 示例/默认值：`2025-03-22`
   - 说明：Lease expiration date

42. `data.kdsbz`
   - 类型：string
   - 数组：否
   - 必填：否
   - 示例/默认值：`N`
   - 说明：Inter-city (district) sign Y: Yes N: No

43. `data.kqysssxbgglbm`
   - 类型：string
   - 数组：否
   - 必填：否
   - 示例/默认值：`Cheng Tax Cheng Tax Cross Report [2024] No. 341`
   - 说明：Cross-Region Tax-Related Matter Reporting Management Number

44. `data.bdcdwdm`
   - 类型：string
   - 数组：否
   - 必填：否
   - 示例/默认值：`2023023322342`
   - 说明：Real Estate Unit Code

45. `data.wqhtbabh`
   - 类型：string
   - 数组：否
   - 必填：否
   - 示例/默认值：`2023023322342`
   - 说明：Online Contract Filing Number

46. `data.tdzzsxmbh`
   - 类型：string
   - 数组：否
   - 必填：否
   - 示例/默认值：`2023023322342`
   - 说明：Land VAT Project Number

47. `data.hdjsjg`
   - 类型：string
   - 数组：否
   - 必填：否
   - 示例/默认值：`100023233.45`
   - 说明：Approved Tax Assessment Price

48. `data.sjcjhsje`
   - 类型：string
   - 数组：否
   - 必填：否
   - 示例/默认值：`100023233.45`
   - 说明：Actual transaction amount including tax

49. `data.fdckfxmbh`
   - 类型：string
   - 数组：否
   - 必填：否
   - 示例/默认值：`2023023322342`
   - 说明：Real Estate Development Project Number

50. `data.cpyqylb`
   - 类型：string
   - 数组：否
   - 必填：否
   - 示例/默认值：`Domestic Enterprise`
   - 说明：Finished Oil Enterprise Category

51. `data.bxdh`
   - 类型：string
   - 数组：否
   - 必填：否
   - 示例/默认值：`bd20240809232233`
   - 说明：Policy Number

52. `data.cphcbdjh`
   - 类型：string
   - 数组：否
   - 必填：否
   - 示例/默认值：`Beijing A888888`
   - 说明：License Plate Number / Vessel Registration Number

53. `data.skssq`
   - 类型：string
   - 数组：否
   - 必填：否
   - 示例/默认值：`202403`
   - 说明：Tax period

54. `data.dsccsje`
   - 类型：number
   - 数组：否
   - 必填：否
   - 示例/默认值：`100023233.45`
   - 说明：Amount of Vehicle and Vessel Tax Collected on Behalf of Others

55. `data.znj`
   - 类型：number
   - 数组：否
   - 必填：否
   - 示例/默认值：`100023233.45`
   - 说明：Late fee amount

56. `data.jehj`
   - 类型：number
   - 数组：否
   - 必填：否
   - 示例/默认值：`100023233.45`
   - 说明：Total Amount

57. `data.cjh`
   - 类型：string
   - 数组：否
   - 必填：否
   - 示例/默认值：`LFWADRJF011002346`
   - 说明：Vehicle Identification Code/Chassis Number

58. `data.ticketNumber`
   - 类型：string
   - 数组：否
   - 必填：否
   - 示例/默认值：`9992181190174`
   - 说明：Electronic ticket number

59. `data.fareAmount`
   - 类型：string
   - 数组：否
   - 必填：否
   - 示例/默认值：`10`
   - 说明：Price Adjustment

60. `data.orderNumber`
   - 类型：string
   - 数组：否
   - 必填：否
   - 示例/默认值：`tbdd23213123123`
   - 说明：Enterprise Ticket Purchase Order Number

61. `data.userName`
   - 类型：string
   - 数组：否
   - 必填：否
   - 示例/默认值：`zhangsan`
   - 说明：Username

62. `data.buyerType`
   - 类型：string
   - 数组：否
   - 必填：否
   - 示例/默认值：`0`
   - 说明：Ticket purchase type: 0: Enterprise 1: Government or public institution 2: Individual 3: Other

63. `data.gpCode`
   - 类型：string
   - 数组：否
   - 必填：否
   - 示例/默认值：`GP Order Number`
   - 说明：GP Order Number

64. `data.passengerName`
   - 类型：string
   - 数组：否
   - 必填：否
   - 示例/默认值：`Li Si`
   - 说明：Passenger Name

65. `data.passengerIdnum`
   - 类型：string
   - 数组：否
   - 必填：否
   - 示例/默认值：`10032333`
   - 说明：Passenger ID card number / Passport number

66. `data.endorsements`
   - 类型：string
   - 数组：否
   - 必填：否
   - 示例/默认值：`None`
   - 说明：Endorsement

67. `data.office`
   - 类型：string
   - 数组：否
   - 必填：否
   - 示例/默认值：`PEK112`
   - 说明：Ticket Office Number

68. `data.issuedBy`
   - 类型：string
   - 数组：否
   - 必填：否
   - 示例/默认值：`Air China Limited (Telephone Sales Management Center)`
   - 说明：Issuing Unit

69. `data.iata`
   - 类型：string
   - 数组：否
   - 必填：否
   - 示例/默认值：`08385252`
   - 说明：IATA Number

70. `data.pnr`
   - 类型：string
   - 数组：否
   - 必填：否
   - 示例/默认值：`08385252`
   - 说明：PNR number

71. `data.ticketInformation`
   - 类型：string
   - 数组：否
   - 必填：否
   - 示例/默认值：`CA1501T3 Take the opportunity`
   - 说明：Ticket face reminder information

72. `data.insurance`
   - 类型：string
   - 数组：否
   - 必填：否
   - 示例/默认值：`Insurance Information`
   - 说明：Insurance Information

73. `data.electronicTicketType`
   - 类型：string
   - 数组：否
   - 必填：否
   - 示例/默认值：`0`
   - 说明：Ticket Type 0: Domestic 1: International

74. `data.verifyCode`
   - 类型：string
   - 数组：否
   - 必填：否
   - 示例/默认值：`342342`
   - 说明：Verification code

75. `data.overdueFlag`
   - 类型：string
   - 数组：否
   - 必填：否
   - 示例/默认值：`false`
   - 说明：Overdue indicator true: Overdue false: Not overdue

76. `data.vehicleDatPath`
   - 类型：string
   - 数组：否
   - 必填：否
   - 示例/默认值：`Motor vehicle dat file path`
   - 说明：Motor vehicle dat file path

77. `data.dfgtgmbz`
   - 类型：string
   - 数组：否
   - 必填：否
   - 示例/默认值：`Y`
   - 说明：Multi-party joint purchase Y: Multi-party joint purchase N: Non multi-party joint purchase

78. `data.zrrbs`
   - 类型：string
   - 数组：否
   - 必填：否
   - 示例/默认值：`N`
   - 说明：Natural Person Identifier

79. `data.zfrq`
   - 类型：string
   - 数组：否
   - 必填：否
   - 示例/默认值：`2019-01-01`
   - 说明：Cancellation Date; yyyy-MM-dd

80. `data.gatherDate`
   - 类型：string
   - 数组：否
   - 必填：否
   - 示例/默认值：`2019-01-01 00:00:00`
   - 说明：Collection Date; yyyy-MM-dd HH-mm-ss

81. `data.totalCount`
   - 类型：number
   - 数组：否
   - 必填：否
   - 示例/默认值：`1999`
   - 说明：Query total quantity

82. `data.items`
   - 类型：object
   - 数组：是
   - 必填：否
   - 说明：Detail line

83. `data.items.cd`
   - 类型：string
   - 数组：否
   - 必填：否
   - 示例/默认值：`Wuhan City`
   - 说明：Place of origin

84. `data.items.cjhm`
   - 类型：string
   - 数组：否
   - 必填：否
   - 示例/默认值：`LVHTG5838K5010150`
   - 说明：Chassis number

85. `data.items.dunwei`
   - 类型：string
   - 数组：否
   - 必填：否
   - 示例/默认值：`1`
   - 说明：Tonnage

86. `data.items.dw`
   - 类型：string
   - 数组：否
   - 必填：否
   - 示例/默认值：`ton`
   - 说明：Unit

87. `data.items.fdjhm`
   - 类型：string
   - 数组：否
   - 必填：否
   - 示例/默认值：`2018112`
   - 说明：Engine number

88. `data.items.ggxh`
   - 类型：string
   - 数组：否
   - 必填：否
   - 示例/默认值：`Honda/HONDADHW6483T5ASE`
   - 说明：Specification Model

89. `data.items.hgzh`
   - 类型：string
   - 数组：否
   - 必填：否
   - 示例/默认值：`1613131`
   - 说明：Certificate Number

90. `data.items.jkzmsh`
   - 类型：string
   - 数组：否
   - 必填：否
   - 示例/默认值：`1231313`
   - 说明：Import Certificate Number

91. `data.items.se`
   - 类型：BigDecimal
   - 数组：否
   - 必填：否
   - 示例/默认值：`35006.9`
   - 说明：Tax amount

92. `data.items.sjdh`
   - 类型：string
   - 数组：否
   - 必填：否
   - 示例/默认值：`6223213`
   - 说明：Inspection Certificate Number

93. `data.items.sl`
   - 类型：BigDecimal
   - 数组：否
   - 必填：否
   - 示例/默认值：`0.16`
   - 说明：Tax Rate

94. `data.items.xcrs`
   - 类型：string
   - 数组：否
   - 必填：否
   - 示例/默认值：`5`
   - 说明：Maximum number of passengers

95. `data.items.xmdj`
   - 类型：BigDecimal
   - 数组：否
   - 必填：否
   - 示例/默认值：`218793.1`
   - 说明：Project Unit Price

96. `data.items.xmje`
   - 类型：BigDecimal
   - 数组：否
   - 必填：否
   - 示例/默认值：`218793.1`
   - 说明：Project Amount

97. `data.items.xmmc`
   - 类型：string
   - 数组：否
   - 必填：否
   - 示例/默认值：`Multi-purpose passenger vehicle`
   - 说明：Project Name

98. `data.items.xmsl`
   - 类型：BigDecimal
   - 数组：否
   - 必填：否
   - 示例/默认值：`1`
   - 说明：Project Quantity

99. `data.items.spbm`
   - 类型：string
   - 数组：否
   - 必填：否
   - 示例/默认值：`123123132165465456`
   - 说明：Product Category Code

100. `data.items.kce`
   - 类型：number
   - 数组：否
   - 必填：否
   - 示例/默认值：`1`
   - 说明：Deduction Amount

101. `data.items.lslbs`
   - 类型：string
   - 数组：否
   - 必填：否
   - 说明：Empty: Non-zero interest rate, 0: Export tax rebate, 1: Tax exemption, 2: Not levied, 3: Normal zero tax rate

102. `data.tspzs`
   - 类型：object
   - 数组：是
   - 必填：否
   - 说明：Special Ticket Type Details

103. `data.tspzs.cxrxh`
   - 类型：string
   - 数组：否
   - 必填：否
   - 示例/默认值：`1`
   - 说明：Traveler Serial Number

104. `data.tspzs.cxr`
   - 类型：string
   - 数组：否
   - 必填：否
   - 示例/默认值：`Zhang San`
   - 说明：Traveler

105. `data.tspzs.cxrzjlxDm`
   - 类型：string
   - 数组：否
   - 必填：否
   - 示例/默认值：`201`
   - 说明：Traveler's document type

106. `data.tspzs.sfzjhm`
   - 类型：string
   - 数组：否
   - 必填：否
   - 示例/默认值：`110120202108080808`
   - 说明：Valid ID number

107. `data.tspzs.chuxrq`
   - 类型：string
   - 数组：否
   - 必填：否
   - 示例/默认值：`2022-11-01`
   - 说明：Travel Date

108. `data.tspzs.cfd`
   - 类型：string
   - 数组：否
   - 必填：否
   - 示例/默认值：`Beijing`
   - 说明：Departure location of the traveler

109. `data.tspzs.lkddd`
   - 类型：string
   - 数组：否
   - 必填：否
   - 示例/默认值：`Shanghai`
   - 说明：Arrival Destination

110. `data.tspzs.zwdj`
   - 类型：string
   - 数组：否
   - 必填：否
   - 示例/默认值：`Second Class Seat`
   - 说明：Seat Class

111. `data.tspzs.jtgjlxDm`
   - 类型：string
   - 数组：否
   - 必填：否
   - 示例/默认值：`2`
   - 说明：Transportation Tool Type Codes (1: Airplane 2: Train 3: Long-distance Bus 4: Public Transport 5: Taxi 6: Car
     7: Ship 9: Other)

112. `data.tspzs.ysmxxh`
   - 类型：string
   - 数组：否
   - 必填：否
   - 示例/默认值：`1`
   - 说明：Transport Detail Serial Number

113. `data.tspzs.qyd`
   - 类型：string
   - 数组：否
   - 必填：否
   - 示例/默认值：`Zhengzhou`
   - 说明：Place of Departure

114. `data.tspzs.ddd`
   - 类型：string
   - 数组：否
   - 必填：否
   - 示例/默认值：`Jiangsu`
   - 说明：Destination

115. `data.tspzs.ysgjzl`
   - 类型：string
   - 数组：否
   - 必填：否
   - 示例/默认值：`Railway Transportation`
   - 说明：Types of Transportation Tools

116. `data.tspzs.ysgjph`
   - 类型：string
   - 数组：否
   - 必填：否
   - 示例/默认值：`G443`
   - 说明：Transport Tool Model Number

117. `data.tspzs.yshwmc`
   - 类型：string
   - 数组：否
   - 必填：否
   - 示例/默认值：`Coal mine`
   - 说明：Name of Transported Goods

118. `data.tspzs.fdjhm`
   - 类型：string
   - 数组：否
   - 必填：否
   - 示例/默认值：`Engine number`
   - 说明：Engine number

119. `data.tspzs.dphgzbh`
   - 类型：string
   - 数组：否
   - 必填：否
   - 示例/默认值：`Chassis Number/Frame Number`
   - 说明：Chassis Number/Frame Number

120. `data.tspzs.sfyytljdj`
   - 类型：string
   - 数组：否
   - 必填：否
   - 示例/默认值：`Y`
   - 说明：Is it used for tractor registration?

121. `data.tspzs.carrierCode`
   - 类型：string
   - 数组：否
   - 必填：否
   - 示例/默认值：`CA`
   - 说明：Carrier two-character code

122. `data.tspzs.fareBasis`
   - 类型：string
   - 数组：否
   - 必填：否
   - 示例/默认值：`Y`
   - 说明：Ticket Level / Ticket Category

123. `data.tspzs.notValidBefore`
   - 类型：string
   - 数组：否
   - 必填：否
   - 示例/默认值：`2024-05-17`
   - 说明：Ticket Effective Date

124. `data.tspzs.notValidAfter`
   - 类型：string
   - 数组：否
   - 必填：否
   - 示例/默认值：`2024-05-17`
   - 说明：Effective End Date

125. `data.tspzs.allow`
   - 类型：string
   - 数组：否
   - 必填：否
   - 示例/默认值：`20K`
   - 说明：Free luggage

126. `data.tspzs.itineraryType`
   - 类型：string
   - 数组：否
   - 必填：否
   - 示例/默认值：`0`
   - 说明：Trip Type 0: Normal Transport Segment 1: Ground Transport

127. `data.tspzs.gtgmf`
   - 类型：string
   - 数组：否
   - 必填：否
   - 示例/默认值：`Wang Wu`
   - 说明：Joint Purchaser

128. `data.bdcxsTspzs`
   - 类型：object
   - 数组：是
   - 必填：否
   - 说明：Real estate sales adapt to multiple lines of specific business information.

129. `data.bdcxsTspzs.bdcdz`
   - 类型：string
   - 数组：否
   - 必填：否
   - 示例/默认值：`5-4-1803, Binhai Park, Dongcheng District, Beijing, Beijing Municipality`
   - 说明：Real Estate Address

130. `data.bdcxsTspzs.kdsbz`
   - 类型：string
   - 数组：否
   - 必填：否
   - 示例/默认值：`N`
   - 说明：Cross-region (city) indicator Y: Yes N: No

131. `data.bdcxsTspzs.bdcdwdm`
   - 类型：string
   - 数组：否
   - 必填：否
   - 示例/默认值：`312312312123`
   - 说明：Real Estate Unit Code

132. `data.bdcxsTspzs.wqhtbabh`
   - 类型：string
   - 数组：否
   - 必填：否
   - 示例/默认值：`312312312123`
   - 说明：Online Contract Filing Number

133. `data.bdcxsTspzs.tdzzsxmbh`
   - 类型：string
   - 数组：否
   - 必填：否
   - 示例/默认值：`312312312123`
   - 说明：Land VAT Project Number

134. `data.bdcxsTspzs.hdjsjg`
   - 类型：string
   - 数组：否
   - 必填：否
   - 示例/默认值：`18888.34`
   - 说明：Approved Tax Assessment Price

135. `data.bdcxsTspzs.sjcjhsje`
   - 类型：string
   - 数组：否
   - 必填：否
   - 示例/默认值：`18888.34`
   - 说明：Actual transaction amount including tax

136. `data.bdcxsTspzs.mjdw`
   - 类型：string
   - 数组：否
   - 必填：否
   - 示例/默认值：`square meters`
   - 说明：Area unit

137. `data.bdcxsTspzs.cqzsbh`
   - 类型：string
   - 数组：否
   - 必填：否
   - 示例/默认值：`312312312123`
   - 说明：Property Certificate / Real Estate Certificate Number

138. `data.cepzs`
   - 类型：object
   - 数组：是
   - 必填：否
   - 说明：Difference Taxation - Voucher Information List for Difference Invoicing

139. `data.cepzs.xh`
   - 类型：string
   - 数组：否
   - 必填：否
   - 示例/默认值：`1`
   - 说明：Serial Number

140. `data.cepzs.pzlx`
   - 类型：string
   - 数组：否
   - 必填：否
   - 示例/默认值：`01`
   - 说明：Voucher Type, 01 Fully Digitalized E-invoice, 02 VAT Special Invoice, 03 VAT Normal Invoice, 04 Business Tax
     Invoice, 05 Financial Bill, 06 Court Ruling, 07 Deed Tax Payment Voucher, 08 Other Invoice Types, 09 Other
     Deduction Vouchers

141. `data.cepzs.fphm`
   - 类型：string
   - 数组：否
   - 必填：否
   - 示例/默认值：`05397370562202045069`
   - 说明：Fully Digitized Electronic Invoice Number

142. `data.cepzs.fpdm`
   - 类型：string
   - 数组：否
   - 必填：否
   - 示例/默认值：`9374504494`
   - 说明：Invoice Code

143. `data.cepzs.zzfphm`
   - 类型：string
   - 数组：否
   - 必填：否
   - 示例/默认值：`24737437`
   - 说明：Invoice Number

144. `data.cepzs.pzhm`
   - 类型：string
   - 数组：否
   - 必填：否
   - 示例/默认值：`05397370562202045069`
   - 说明：Voucher Number

145. `data.cepzs.kjrq`
   - 类型：string
   - 数组：否
   - 必填：否
   - 示例/默认值：`2023-01-04`
   - 说明：Invoice Date, format: yyyy-MM-dd

146. `data.cepzs.hjje`
   - 类型：number
   - 数组：否
   - 必填：否
   - 示例/默认值：`11.02`
   - 说明：Total Amount

147. `data.cepzs.kce`
   - 类型：number
   - 数组：否
   - 必填：否
   - 示例/默认值：`10.05`
   - 说明：Deduction

148. `data.cepzs.bckcje`
   - 类型：number
   - 数组：否
   - 必填：否
   - 示例/默认值：`10.05`
   - 说明：Deduction Amount for This Time

149. `data.cepzs.pzhjje`
   - 类型：number
   - 数组：否
   - 必填：否
   - 示例/默认值：`11.02`
   - 说明：Total amount of the voucher

150. `data.cepzs.bz`
   - 类型：string
   - 数组：否
   - 必填：否
   - 示例/默认值：`Remarks`
   - 说明：Remarks

151. `data.cepzs.ly`
   - 类型：string
   - 数组：否
   - 必填：否
   - 示例/默认值：`Manual entry`
   - 说明：Input methods, value range as follows: Manual entry, Checkbox entry, Template entry.

## 返回示例

### 成功示例

无。

### 失败示例

无。

## 错误码

| 错误码 | 错误说明 | 处理建议 |
| --- | --- | --- |
| 1001 |  |  |


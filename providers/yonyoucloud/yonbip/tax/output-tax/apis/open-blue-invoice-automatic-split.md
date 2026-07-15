# Open Blue Invoice - Automatic Split

来源页面：

- https://open.yonyoucloud.com/#/doc-center/docDes/api?apiId=2157981055053201413&isOrigin=1&selectApiTab=open&from=&iframe=

机器可抓取的详情接口：

- https://open.yonyoucloud.com/iuap-ipaas-base/openPortal/api/getByVersionForTest/2157981055053201413/running?scene=open&isOrigin=1&isAjax=1

## 基本信息

- apiId：2157981055053201413
- API 类目：开票申请
- 所属目录：开票（Invoicing）
- 产品：
- 更新时间：2026-05-19 19:20:29.000
- 请求方法：POST
- Content-Type：application/json
- 接口路径：/yonbip/tax/invoiceclient-web/api/invoiceApply/insertWithSplitJson
- 完整调用地址：https://c2.yonyoucloud.com/iuap-api-gateway/yonbip/tax/invoiceclient-web/api/invoiceApply/insertWithSplitJson
- 鉴权方式：access_token 作为 Query 参数传递（?access_token=）
- 当前状态：当前接口
- 请求字段数：Query 0 个，Body 110 个
- 返回字段数：3 个

## 对接要点

- 调用 URL：`https://c2.yonyoucloud.com/iuap-api-gateway/yonbip/tax/invoiceclient-web/api/invoiceApply/insertWithSplitJson?access_token={access_token}`
- 调用方必须保存业务来源单号、发票请求流水号、请求报文、响应报文和状态查询结果，便于重试和对账。
- 开票、红冲、作废、驱动开票等写操作建议用业务唯一号做幂等控制；同一业务单不要生成多个不同流水号反复提交。
- 返回成功只代表接口调用成功，不一定代表税局或开票终态成功；涉及开票结果时必须再调用状态查询类接口确认。
- 详情接口返回字段说明可能为英文，字段名以开放平台原始字段为准。

## 调用模板

```bash
curl -X POST 'https://c2.yonyoucloud.com/iuap-api-gateway/yonbip/tax/invoiceclient-web/api/invoiceApply/insertWithSplitJson?access_token=访问令牌' \
  -H 'Content-Type: application/json' \
  -d '{"data": {}}'
```

## 请求参数

### Query 参数

无。

> 注：开放平台网关调用时通常还需传递 `access_token`。

### Body 参数

1. `data`
   - 类型：object
   - 数组：否
   - 必填：是
   - 说明：Parameter Body

2. `data.einvoiceApplyList`
   - 类型：object
   - 数组：是
   - 必填：否
   - 说明：Invoice Request Body (Important: This request body is for the VAT basic invoice type. For special invoice
     types, refer to the content in the request examples.)

3. `data.einvoiceApplyList.fpqqlsh`
   - 类型：string
   - 数组：否
   - 必填：是
   - 说明：Invoice request serial number

4. `data.einvoiceApplyList.fplx`
   - 类型：string
   - 数组：否
   - 必填：否
   - 说明：Invoice Type: 1: VAT Electronic Normal Invoice; 2: VAT Electronic Special Invoice; 3: VAT Normal Invoice; 4:
     VAT Special Invoice; 5: Unified Invoice for Motor Vehicle Sales; 8: VAT Electronic Normal Invoice (Refined
     Oil); 10: Normal Invoice for Refined Oil; 11: Special Invoice for Refined Oil; 15: Unified Invoice for
     Second-Hand Vehicle Sales; 31: Special Invoice for Digital Products; 32: Normal Invoice for Digital Products;
     33: Paper Invoice for Digital Products (VAT Special Invoice); 34: Paper Invoice for Digital Products (Normal
     Invoice); Optional, default is 1.

5. `data.einvoiceApplyList.xsfNsrsbh`
   - 类型：string
   - 数组：否
   - 必填：是
   - 说明：Seller's Taxpayer Identification Number

6. `data.einvoiceApplyList.xsfMc`
   - 类型：string
   - 数组：否
   - 必填：否
   - 说明：Seller Name

7. `data.einvoiceApplyList.gmfDzdh`
   - 类型：string
   - 数组：否
   - 必填：否
   - 说明：Buyer Address Phone

8. `data.einvoiceApplyList.gmfYhzh`
   - 类型：string
   - 数组：否
   - 必填：否
   - 说明：Buyer's bank account number

9. `data.einvoiceApplyList.kpr`
   - 类型：string
   - 数组：否
   - 必填：否
   - 说明：Invoicer

10. `data.einvoiceApplyList.skr`
   - 类型：string
   - 数组：否
   - 必填：否
   - 说明：Payee

11. `data.einvoiceApplyList.fhr`
   - 类型：string
   - 数组：否
   - 必填：否
   - 说明：Reviewer

12. `data.einvoiceApplyList.jshj`
   - 类型：string
   - 数组：否
   - 必填：否
   - 说明：Total Price Including Tax

13. `data.einvoiceApplyList.hjje`
   - 类型：string
   - 数组：否
   - 必填：否
   - 说明：Total Amount

14. `data.einvoiceApplyList.hjse`
   - 类型：string
   - 数组：否
   - 必填：否
   - 说明：Total Tax Amount

15. `data.einvoiceApplyList.bz`
   - 类型：string
   - 数组：否
   - 必填：否
   - 说明：Remarks

16. `data.einvoiceApplyList.bmbBbh`
   - 类型：string
   - 数组：否
   - 必填：否
   - 说明：Product Code Table Version

17. `data.einvoiceApplyList.orgcode`
   - 类型：string
   - 数组：否
   - 必填：否
   - 说明：Invoicing Site Code: It can be left blank when the seller's taxpayer identification number has only one
     invoicing site; it is mandatory when there are multiple.

18. `data.einvoiceApplyList.wxorderid`
   - 类型：string
   - 数组：否
   - 必填：否
   - 说明：WeChat Order Number

19. `data.einvoiceApplyList.wxappid`
   - 类型：string
   - 数组：否
   - 必填：否
   - 说明：WeChat Merchant App ID

20. `data.einvoiceApplyList.wxauthid`
   - 类型：string
   - 数组：否
   - 必填：否
   - 说明：WeChat batch insertion

21. `data.einvoiceApplyList.zdybz`
   - 类型：string
   - 数组：否
   - 必填：否
   - 说明：Custom Notes

22. `data.einvoiceApplyList.define`
   - 类型：object
   - 数组：否
   - 必填：否
   - 示例/默认值：`{            "Characteristic key":"Example of characteristic value (optional)"     },`
   - 说明：Custom Characteristic Item

23. `data.einvoiceApplyList.xsfDz`
   - 类型：string
   - 数组：否
   - 必填：否
   - 说明：Seller's Address

24. `data.einvoiceApplyList.xsfDh`
   - 类型：string
   - 数组：否
   - 必填：否
   - 说明：Seller's phone number

25. `data.einvoiceApplyList.xsfYh`
   - 类型：string
   - 数组：否
   - 必填：否
   - 说明：Seller's Bank

26. `data.einvoiceApplyList.xsfZh`
   - 类型：string
   - 数组：否
   - 必填：否
   - 说明：Seller Account

27. `data.einvoiceApplyList.gmfNsrsbh`
   - 类型：string
   - 数组：否
   - 必填：否
   - 说明：Purchaser's Taxpayer Identification Number

28. `data.einvoiceApplyList.gmfDz`
   - 类型：string
   - 数组：否
   - 必填：否
   - 说明：Buyer Address

29. `data.einvoiceApplyList.gmfDh`
   - 类型：string
   - 数组：否
   - 必填：否
   - 说明：Buyer's phone number

30. `data.einvoiceApplyList.gmfYh`
   - 类型：string
   - 数组：否
   - 必填：否
   - 说明：Purchaser's Bank

31. `data.einvoiceApplyList.gmfZh`
   - 类型：string
   - 数组：否
   - 必填：否
   - 说明：Buyer Account

32. `data.einvoiceApplyList.gmfMc`
   - 类型：string
   - 数组：否
   - 必填：否
   - 说明：Buyer Name

33. `data.einvoiceApplyList.lyid`
   - 类型：string
   - 数组：否
   - 必填：是
   - 说明：Unique Identifier for Requesting Party

34. `data.einvoiceApplyList.lydjh`
   - 类型：string
   - 数组：否
   - 必填：否
   - 说明：Source Document Number

35. `data.einvoiceApplyList.tspz`
   - 类型：string
   - 数组：否
   - 必填：否
   - 说明：Special Invoice Types. 0-General, 2-Fuel VAT Special Invoice, 8-Agricultural Products Sales, 9-Agricultural
     Products Purchase, 11-Tobacco Invoice, 12-Motor Vehicle Invoice, 14-Refined Oil Invoice, DK-Agent Invoice,
     16-Mineral Products Invoice, E01-Refined Oil Invoice, E02-Rare Earth Invoice, E03-Construction Service
     Invoice, E04-Goods Transportation, E05-Real Estate Sales, E06-Real Estate Leasing Service Invoice, E07-Agent
     Collection of Vehicle and Vessel Tax, E09-Passenger Transportation, E12-Self-produced Agricultural Products
     Sales, E14-Motor Vehicle, E16-Agricultural Products Purchase, E17-Photovoltaic Purchase, E18-Cigarette
     Invoice, E22-Electronic Itinerary, E32-Electronic Cigarette, (Special invoice types starting with E correspond
     to Fully Digitalized E-invoices, others are Tax Control Invoices)

36. `data.einvoiceApplyList.administrativeDivisionCode`
   - 类型：string
   - 数组：否
   - 必填：否
   - 说明：Administrative Division Code

37. `data.einvoiceApplyList.subdistrictCode`
   - 类型：string
   - 数组：否
   - 必填：否
   - 说明：Subdistrict Code

38. `data.einvoiceApplyList.isTaxProfessionalServiceInvoiceItem`
   - 类型：string
   - 数组：否
   - 必填：否
   - 说明：Is TaxProfessional Service Invoice Item

39. `data.einvoiceApplyList.taxProServiceAgreementNo`
   - 类型：string
   - 数组：否
   - 必填：否
   - 说明：Tax Pro Service AgreementNo

40. `data.einvoiceApplyList.jazs`
   - 类型：string
   - 数组：否
   - 必填：否
   - 说明：Reduced Tax Levy Method Code

41. `data.einvoiceApplyList.lylx`
   - 类型：string
   - 数组：否
   - 必填：否
   - 说明：Source Type

42. `data.einvoiceApplyList.cepzs`
   - 类型：object
   - 数组：是
   - 必填：否
   - 说明：Difference Taxation - Voucher Information List for Difference Invoicing

43. `data.einvoiceApplyList.cepzs.xh`
   - 类型：string
   - 数组：否
   - 必填：否
   - 说明：Serial Number

44. `data.einvoiceApplyList.cepzs.pzlx`
   - 类型：string
   - 数组：否
   - 必填：否
   - 说明：Voucher Type, 01 Fully Digitalized E-invoice, 02 VAT Special Invoice, 03 VAT Normal Invoice, 04 Business Tax
     Invoice, 05 Financial Bill, 06 Court Ruling, 07 Deed Tax Payment Voucher, 08 Other Invoice Types, 09 Other
     Deduction Vouchers

45. `data.einvoiceApplyList.cepzs.fphm`
   - 类型：string
   - 数组：否
   - 必填：否
   - 说明：Fully Digitized Electronic Invoice Number

46. `data.einvoiceApplyList.cepzs.fpdm`
   - 类型：string
   - 数组：否
   - 必填：否
   - 说明：Non-Fully Digitized Electronic Invoice Code

47. `data.einvoiceApplyList.cepzs.zzfphm`
   - 类型：string
   - 数组：否
   - 必填：否
   - 说明：Non-Fully Digitized Electronic Invoice Number

48. `data.einvoiceApplyList.cepzs.pzhm`
   - 类型：string
   - 数组：否
   - 必填：否
   - 说明：Voucher Number

49. `data.einvoiceApplyList.cepzs.kjrq`
   - 类型：string
   - 数组：否
   - 必填：否
   - 说明：Invoice Date, format: yyyy-MM-dd

50. `data.einvoiceApplyList.cepzs.hjje`
   - 类型：string
   - 数组：否
   - 必填：否
   - 说明：Total Amount

51. `data.einvoiceApplyList.cepzs.kce`
   - 类型：string
   - 数组：否
   - 必填：否
   - 说明：Deduction

52. `data.einvoiceApplyList.cepzs.bz`
   - 类型：string
   - 数组：否
   - 必填：否
   - 说明：Remarks

53. `data.einvoiceApplyList.cepzs.ly`
   - 类型：string
   - 数组：否
   - 必填：否
   - 说明：Input methods, value range as follows: Manual entry, Checkbox entry, Template entry.

54. `data.einvoiceApplyList.cepzs.bckcje`
   - 类型：number
   - 数组：否
   - 必填：否
   - 说明：Deduction Amount

55. `data.einvoiceApplyList.cepzs.pzhjje`
   - 类型：number
   - 数组：否
   - 必填：否
   - 说明：Total amount of the voucher

56. `data.einvoiceApplyList.tspzs`
   - 类型：object
   - 数组：是
   - 必填：否
   - 说明：Special ticket types

57. `data.einvoiceApplyList.tspzs.ysmxxh`
   - 类型：string
   - 数组：否
   - 必填：否
   - 说明：Transport Detail Serial Number

58. `data.einvoiceApplyList.tspzs.ysgjzl`
   - 类型：string
   - 数组：否
   - 必填：否
   - 说明：Types of transportation tools

59. `data.einvoiceApplyList.tspzs.ysgjph`
   - 类型：string
   - 数组：否
   - 必填：否
   - 说明：Transport Tool Model Number

60. `data.einvoiceApplyList.tspzs.qyd`
   - 类型：string
   - 数组：否
   - 必填：否
   - 说明：Place of Departure

61. `data.einvoiceApplyList.tspzs.ddd`
   - 类型：string
   - 数组：否
   - 必填：否
   - 说明：Destination

62. `data.einvoiceApplyList.tspzs.yshwmc`
   - 类型：string
   - 数组：否
   - 必填：否
   - 说明：Name of Transported Goods

63. `data.einvoiceApplyList.tspzs.cxrxh`
   - 类型：string
   - 数组：否
   - 必填：否
   - 说明：Traveler Serial Number

64. `data.einvoiceApplyList.tspzs.cxr`
   - 类型：string
   - 数组：否
   - 必填：否
   - 说明：Traveler

65. `data.einvoiceApplyList.tspzs.chuxrq`
   - 类型：string
   - 数组：否
   - 必填：否
   - 说明：Travel Date

66. `data.einvoiceApplyList.tspzs.cxrzjlxDm`
   - 类型：string
   - 数组：否
   - 必填：否
   - 说明：Traveler Document Type Code

67. `data.einvoiceApplyList.tspzs.sfzjhm`
   - 类型：string
   - 数组：否
   - 必填：否
   - 说明：ID card number

68. `data.einvoiceApplyList.tspzs.cfd`
   - 类型：string
   - 数组：否
   - 必填：否
   - 说明：Place of Departure

69. `data.einvoiceApplyList.tspzs.lkddd`
   - 类型：string
   - 数组：否
   - 必填：否
   - 说明：Destination

70. `data.einvoiceApplyList.tspzs.zwdj`
   - 类型：string
   - 数组：否
   - 必填：否
   - 说明：Seat class is required if the mode of transportation is train, airplane, or ship; other options are optional;
     --- For train: first class, second class, soft seat (soft seat, soft sleeper), hard seat (hard seat, hard
     sleeper) --- For airplane: economy class, first class, business class --- For ship: first class, second class,
     third class

71. `data.einvoiceApplyList.tspzs.jtgjlxDm`
   - 类型：string
   - 数组：否
   - 必填：否
   - 说明：Transportation Tool Type Code (1: Airplane 2: Train 3: Long-distance Bus 4: Public Transport 5: Taxi 6: Car 7:
     Ship 9: Other)

72. `data.einvoiceApplyList.items`
   - 类型：object
   - 数组：是
   - 必填：否
   - 说明：Pending Invoice Details

73. `data.einvoiceApplyList.items.fphxz`
   - 类型：string
   - 数组：否
   - 必填：否
   - 说明：Invoice Line Nature 0 Normal Line 1 Discount Line 2 Discounted Line

74. `data.einvoiceApplyList.items.xmmc`
   - 类型：string
   - 数组：否
   - 必填：是
   - 说明：Project Name

75. `data.einvoiceApplyList.items.xmbm`
   - 类型：string
   - 数组：否
   - 必填：否
   - 说明：Project Code If the project name is empty, it will match the product file on the iuap based on the project
     code.

76. `data.einvoiceApplyList.items.ggxh`
   - 类型：string
   - 数组：否
   - 必填：否
   - 说明：Specification Model

77. `data.einvoiceApplyList.items.dw`
   - 类型：string
   - 数组：否
   - 必填：否
   - 说明：Unit

78. `data.einvoiceApplyList.items.xmsl`
   - 类型：string
   - 数组：否
   - 必填：否
   - 说明：Project Quantity

79. `data.einvoiceApplyList.items.xmhsdj`
   - 类型：string
   - 数组：否
   - 必填：否
   - 说明：Project tax-inclusive unit price

80. `data.einvoiceApplyList.items.xmdj`
   - 类型：string
   - 数组：否
   - 必填：否
   - 说明：Project Unit Price

81. `data.einvoiceApplyList.items.xmje`
   - 类型：string
   - 数组：否
   - 必填：否
   - 说明：Project Amount

82. `data.einvoiceApplyList.items.xmjshj`
   - 类型：string
   - 数组：否
   - 必填：否
   - 说明：Project total including tax

83. `data.einvoiceApplyList.items.sl`
   - 类型：string
   - 数组：否
   - 必填：否
   - 说明：Tax Rate

84. `data.einvoiceApplyList.items.se`
   - 类型：string
   - 数组：否
   - 必填：否
   - 说明：Tax amount

85. `data.einvoiceApplyList.items.hh`
   - 类型：string
   - 数组：否
   - 必填：否
   - 说明：Line number Optional Required when there is a discount

86. `data.einvoiceApplyList.items.zkhhh`
   - 类型：string
   - 数组：否
   - 必填：否
   - 说明：Discount line number (optional): Must be filled in when there is a discount.

87. `data.einvoiceApplyList.items.spbm`
   - 类型：string
   - 数组：否
   - 必填：否
   - 说明：Tax Category Code of the Product/Goods

88. `data.einvoiceApplyList.items.zxbm`
   - 类型：string
   - 数组：否
   - 必填：否
   - 说明：Self-coding

89. `data.einvoiceApplyList.items.yhzcbs`
   - 类型：string
   - 数组：否
   - 必填：否
   - 说明：Sales Discount Indicator: 0: Not Used, 1: Used

90. `data.einvoiceApplyList.items.lslbs`
   - 类型：string
   - 数组：否
   - 必填：否
   - 说明：Tax Rate Identifier: Empty: Non-zero interest rate, 0: Export tax rebate, 1: Exempt, 2: Not levied, 3: Normal
     zero tax rate

91. `data.einvoiceApplyList.items.zzstsgl`
   - 类型：string
   - 数组：否
   - 必填：否
   - 说明：Special Management of VAT

92. `data.einvoiceApplyList.items.kce`
   - 类型：string
   - 数组：否
   - 必填：否
   - 说明：Deduction Amount

93. `data.einvoiceApplyList.items.define`
   - 类型：object
   - 数组：否
   - 必填：否
   - 示例/默认值：`{                "Characteristic key":"Example of characteristic value (optional)"         	}`
   - 说明：Characteristic Value

94. `data.einvoiceApplyList.items.detailMotor`
   - 类型：object
   - 数组：否
   - 必填：否
   - 说明：Detail Identifier

95. `data.einvoiceApplyList.items.detailMotor.cqzsbh`
   - 类型：string
   - 数组：否
   - 必填：否
   - 说明：Property Certificate / Real Estate Certificate Number

96. `data.einvoiceApplyList.items.detailMotor.jzfwfsd`
   - 类型：string
   - 数组：否
   - 必填：否
   - 说明：Location of Construction Service

97. `data.einvoiceApplyList.items.detailMotor.jzxmmc`
   - 类型：string
   - 数组：否
   - 必填：否
   - 说明：Construction Project Name

98. `data.email`
   - 类型：object
   - 数组：否
   - 必填：否
   - 说明：Email delivery information

99. `data.email.fpqqlsh`
   - 类型：string
   - 数组：否
   - 必填：否
   - 说明：The invoice request serial number should be consistent with the einvoiceApplyList above.

100. `data.email.address`
   - 类型：string
   - 数组：否
   - 必填：否
   - 说明：Email Address

101. `data.sms`
   - 类型：object
   - 数组：否
   - 必填：否
   - 说明：SMS delivery information

102. `data.sms.fpqqlsh`
   - 类型：string
   - 数组：否
   - 必填：否
   - 说明：The invoice request serial number should be consistent with the einvoiceApplyList above.

103. `data.sms.address`
   - 类型：string
   - 数组：否
   - 必填：否
   - 说明：Mobile number

104. `data.url`
   - 类型：object
   - 数组：否
   - 必填：否
   - 说明：URL Delivery Information

105. `data.url.fpqqlsh`
   - 类型：string
   - 数组：否
   - 必填：否
   - 说明：The invoice request serial number should be consistent with the einvoiceApplyList above.

106. `data.url.url`
   - 类型：string
   - 数组：否
   - 必填：否
   - 说明：Callback Address

107. `data.delurl`
   - 类型：object
   - 数组：否
   - 必填：否
   - 说明：Return address information

108. `data.delurl.fpqqlsh`
   - 类型：string
   - 数组：否
   - 必填：否
   - 说明：The invoice request serial number should be consistent with the einvoiceApplyList above.

109. `data.delurl.url`
   - 类型：string
   - 数组：否
   - 必填：否
   - 说明：Return Address

110. `data.autoAudit`
   - 类型：boolean
   - 数组：否
   - 必填：否
   - 说明：Automatic review, meaning no manual confirmation is needed on the invoice platform for invoicing, directly
     proceeding with invoicing. false: Not automatic review, meaning manual confirmation is required. If not
     provided, it represents true.

## 请求示例

```text
Url: /yonbip/tax/invoiceclient-web/api/invoiceApply/insertWithSplitJson?access_token=访问令牌
Body: {
	"data": {
		"einvoiceApplyList": [ {
	"FPQQLSH" : "发票请求流水号  必填",
    "FPLX" : "发票类型：1：增值税电子普通发票；2：增值税电子专用发票；3：增值税普通发票；4：增值税专用发票 ；5：机动车销售统一发票；8：增值税电子普通发票（成品油）；10：成品油普通发票；11：成品油专用发票；15：二手车销售统一发票；31：数电专用发票；32：数电普通发票；33：数电纸质发票(增值税专用发票)；34：数电纸质发票(普通发票)；选填  默认为1",
	"XSF_NSRSBH" : "销售方纳税人识别号 必填",
	"XSF_MC" : "销售方名称 选填",
	"XSF_DZDH" : "销售方地址、电话 选填",
	"XSF_YHZH" : "销售方银行、账号 选填",
	"GMF_NSRSBH" : "购买方纳税人识别号 选填",
	"GMF_MC" : "购买方名称 必填",
	"GMF_DZDH" : "购买方地址、电话 选填",
	"GMF_YHZH" : "购买方银行、账号 选填",
	"KPR" : "开票人 选填",
	"SKR" : "收款人 选填",
	"FHR" : "复核人 选填",
	"JSHJ" : "价税合计 必填",
	"HJJE" : "合计金额 选填",
	"HJSE" : "合计税额  选填",
	"BZ" : "备注 选填",
	"BMB_BBH" : "编码版本号 选填",
       "ORGCODE" : "开票点编码 当销售方纳税人识别号只有一个开票点时可不填，有多个时必填",
        "WXORDERID" :"微信订单号 选填",
        "WXAPPID": "微信商户id 选填",
       "WXAUTHID" : "微信批量插入 选填",
       "ZDYBZ":"自定义备注",
		"define":{
           "特征key":"特征值示例 选填"
    },
	"items" : [{
            "FPHXZ" : "发票行性质 0正常行 1折扣行 2被折扣行 选填",
            "XMMC" : "项目名称 必填",
            "XMBM" : "项目编码  如果项目名称为空，会根据项目编码匹配云平台的商品档案",
            "GGXH" : "规格型号 选填（非数电发票规格型号最大长度为40个字符，数电发票长度为150个字符）",
            "DW" : "单位 选填",
            "XMSL" : "项目数量 选填",
            "XMHSDJ":"项目含税单价 选填",
            "XMDJ" : "项目单价 选填",
            "XMJE" : "项目金额 选填",
            "XMJSHJ" : "项目价税合计 必填",
            "SL" : "税率 必填",
            "SE" : "税额 选填",
            "HH":"行号 选填 有折扣时必输",
           "ZKHHH" :"折扣行行号 选填：有折扣时必输"
            "SPBM":"商品的税收分类编码",
            "ZXBM":"自行编码 选填",
            "YHZCBS" : "销售优惠标识：0：不使用，1：使用 选填",
           "LSLBS" :"零税率标识 ：空：非零利率，0：出口退税，1：免税，2：不征收，3普通零税率   选填",
           "ZZSTSGL" : "优惠政策说明  选填",
            "KCE":"扣除额 选填"，
            "define":{
               "特征key":"特征值示例 选填"
        	}
		}
	],
		"email": {
			 "fpqqlsh":"发票请求流水号和上方requestdatas保持一致 必填",
        "address": "邮箱地址 必填"
		},
		"sms": {
			"fpqqlsh":"发票请求流水号和上方requestdatas保持一致 必填",
        "address": "手机号 必填"
		},
		"url": {
			"fpqqlsh":"发票请求流水号和上方requestdatas保持一致 必填",
        "url": "回调地址 必填"
		},
		"delurl": {
			"fpqqlsh":"发票请求流水号和上方requestdatas保持一致 必填",
        "url": "回调地址 必填"
		},
		"autoAudit": true
	}
}
                              
                              
                              
                              特殊发票示例：
数电票特殊票种：不动产经营租赁服务；建筑服务；货物运输服务；不动产销售服务；自产农产品销售；农产品收购；成品油；旅客运输服务；代收车船
1.数电不动产租赁接口报文示例
[{
	"FPQQLSH": "202302171613262049",
	"FPLX": "31",
	"XSF_NSRSBH": "441234567AAAAAA",
	"XSF_MC": "htt灰度01AAAA",
	"TSPZ": "E06",//特殊票种-不动产租赁代码
"BDCDZ": "北京市/北京市辖区/东城区*滨河公园5-4-1803",//不动产租赁地址：省/市/区*详细地址
"ZLQQ": "2023-03-22",//租赁日期起
"ZLQZ": "2023-04-30",//租赁日期止
"KDSBZ": "N",//是否跨地址标志 Y：是；N:否
	"ORGCODE": "htt001",
	"GMF_NSRSBH": "913418025914242188",
	"GMF_MC": "labo1",
	"GMF_DZDH": "",
	"GMF_YHZH": "",
	"KPR": "hett",
	"SKR": "hett",
	"FHR": "hett",
	"JSHJ": 14837.170000000000000,
	"HJJE": 13130.240000000000000,
	"HJSE": 1706.930000000000000,
	"BZ": "",
	"BMB_BBH": "28.0",
	"XSF_DZ": "北京",
	"XSF_DH": "13141422555",
	"XSF_YH": "北京",
	"XSF_ZH": "65456787889",
	"GMF_DZ": "",
	"GMF_DH": null,
	"GMF_YH": "",
	"GMF_ZH": "",
	"define":{
           "apply_mot":"666",
           "apply_bz":"123"
    },
	"items": [{
		"FPHXZ": 0,
		"XMMC": "*经营租赁*小熊",
		"XMBM": "3040502020101000000",
		"GGXH": "",
		"XMJE": 13130.240000000000000,
		"XMJSHJ": 14837.17,
		"SL": 0.13,
		"SE": 1706.930000000000000,
		"HH": 1,
		"SPBM": "3040502020101000000",
		"DW": "公顷",//面积单位，取值为：平方千米、平方米、公顷、亩
		"XMSL": 870.000000000000000,
		"detailMotor": {
			"CQZSBH": "2324423231231231" //产权证书编号
		}
	}]
}]


2.数电建筑服务接口报文示例
[{
	"FPQQLSH": "202302171613262049",
	"FPLX": "31",
	"XSF_NSRSBH": "441234567AAAAAA",
	"XSF_MC": "htt灰度01AAAA",
	"TSPZ": "E03",//特殊票种-建筑服务代码
"TDZZSXMBH": "232342131",//土地增值税项目编号
"KDSBZ": "N",//是否跨地址标志 Y：是；N:否
	"ORGCODE": "htt001",
	"GMF_NSRSBH": "913418025914242188",
	"GMF_MC": "labo1",
	"GMF_DZDH": "",
	"GMF_YHZH": "",
	"KPR": "hett",
	"SKR": "hett",
	"FHR": "hett",
	"JSHJ": 14837.170000000000000,
	"HJJE": 13130.240000000000000,
	"HJSE": 1706.930000000000000,
	"BZ": "",
	"BMB_BBH": "28.0",
	"XSF_DZ": "北京",
	"XSF_DH": "13141422555",
	"XSF_YH": "北京",
	"XSF_ZH": "65456787889",
	"GMF_DZ": "",
	"GMF_DH": null,
	"GMF_YH": "",
	"GMF_ZH": "",
	"items": [{
		"FPHXZ": 0,
		"XMMC": "*经营租赁*小熊",
		"XMBM": "3040502020101000000",
		"GGXH": "",
		"XMJE": 13130.240000000000000,
		"XMJSHJ": 14837.17,
		"SL": 0.13,
		"SE": 1706.930000000000000,
		"HH": 1,
		"SPBM": "3040502020101000000",
		"DW": "公顷",
		"XMSL": 870.000000000000000,
		"detailMotor": {
			"JZFWFSD": "北京市/北京市辖区/东城区",//建筑服务发生地
			"JZXMMC": "地砖"//建筑项目名称
		}
	}]
}]


3.数电货物运输服务接口报文样例
[{
    "FPQQLSH": "202302171613262050",
    "FPLX": "31",
    "XSF_NSRSBH": "44123456789012AAAAAA",
    "XSF_MC": "AAAA广东全电",
    "TSPZ": "E04",
    "ORGCODE": "AAAA03",
    "GMF_NSRSBH": "913418025914242188",
    "GMF_MC": "labo1",
    "GMF_DZDH": "",
    "GMF_YHZH": "",
    "KPR": "hett",
    "SKR": "hett",
    "FHR": "hett",
    "JSHJ": 14837.170000000000000,
    "HJJE": 13130.240000000000000,
    "HJSE": 1706.930000000000000,
    "BZ": "",
    "BMB_BBH": "28.0",
    "XSF_DZ": "北京",
    "XSF_DH": "13141422555",
    "XSF_YH": "北京",
    "XSF_ZH": "65456787889",
    "GMF_DZ": "",
    "GMF_DH": null,
    "GMF_YH": "",
    "GMF_ZH": "",
    "items": [{
        "FPHXZ": 0,
        "XMMC": "*运输服务*国内道路货物运输服务",
        "XMBM": "3010102020100000000",
        "GGXH": "",
        "XMJE": 13130.240000000000000,
        "XMJSHJ": 14837.17,
        "SL": 0.13,
        "SE": 1706.930000000000000,
        "HH": 1,
        "SPBM": "3040502020101000000",
        "DW": "吨",
        "XMSL": 870.000000000000000
    }],
    "tspzs": [{
        "YSMXXH": "1",
        "YSGJZL": "铁路运输",
        "YSGJPH": "G443",
        "QYD": "北京市>北京市辖区>东城区",
        "DDD": "河北省>石家庄市>长安区",
        "YSHWMC": "煤矿"
    }, {
        "YSMXXH": "2",
        "YSGJZL": "铁路运输",
        "YSGJPH": "Z3232",
        "QYD": "河北省>石家庄市>桥西区",
        "DDD": "天津市>天津市辖区>和平区",
        "YSHWMC": "瓷器"
    }]
 }]


4.数电不动产销售接口报文示例
[{
	"FPQQLSH": "202302171613262049",
	"FPLX": "31",
	"XSF_NSRSBH": "441234567AAAAAA",
	"XSF_MC": "htt灰度01AAAA",
	"TSPZ": "E05",//特殊票种-不动产销售代码
"BDCDZ": "北京市/北京市辖区/东城区*滨河公园5-4-1803",//不动产地址：省/市/区*详细地址
"WQHTBABH": "312312312123",//网签合同备案编号
"TDZZSXMBH": "312312312123",//土地增值税项目编号
"BDCDWDM": "312312312123",//不动产单元代码
"HDJSJG": "312312312123",//核定计税价格。不属于核定计税不动产销售的可不填写
"SJCJHSJE": "312312312123",//实际成交含税金额。若按核定计税价格征税的，为必填
"KDSBZ": "N",//是否跨地址标志 Y：是；N:否
	"ORGCODE": "htt001",
	"GMF_NSRSBH": "913418025914242188",
	"GMF_MC": "labo1",
	"GMF_DZDH": "",
	"GMF_YHZH": "",
	"KPR": "hett",
	"SKR": "hett",
	"FHR": "hett",
	"JSHJ": 14837.170000000000000,
	"HJJE": 13130.240000000000000,
	"HJSE": 1706.930000000000000,
	"BZ": "",
	"BMB_BBH": "28.0",
	"XSF_DZ": "北京",
	"XSF_DH": "13141422555",
	"XSF_YH": "北京",
	"XSF_ZH": "65456787889",
	"GMF_DZ": "",
	"GMF_DH": null,
	"GMF_YH": "",
	"GMF_ZH": "",
	"items": [{
		"FPHXZ": 0,
		"XMMC": "*经营租赁*小熊",
		"XMBM": "3040502020101000000",
		"GGXH": "",
		"XMJE": 13130.240000000000000,
		"XMJSHJ": 14837.17,
		"SL": 0.13,
		"SE": 1706.930000000000000,
		"HH": 1,
		"SPBM": "3040502020101000000",
		"DW": "公顷",//面积单位，取值为：平方千米、平方米、公顷、亩
		"XMSL": 870.000000000000000,
		"detailMotor": {
			"CQZSBH": "2324423231231231" //产权证书编号
		}
	}]
}]
5.数电旅客运输接口报文示例
[{
	"FPQQLSH": "202302171613262049",
	"FPLX": "31",
	"XSF_NSRSBH": "441234567AAAAAA",
	"XSF_MC": "htt灰度01AAAA",
	"TSPZ": "E09",//特殊票种-旅客运输服务
	"ORGCODE": "htt001",
	"GMF_NSRSBH": "913418025914242188",
	"GMF_MC": "labo1",
	"GMF_DZDH": "",
	"GMF_YHZH": "",
	"KPR": "hett",
	"SKR": "hett",
	"FHR": "hett",
	"JSHJ": 14837.170000000000000,
	"HJJE": 13130.240000000000000,
	"HJSE": 1706.930000000000000,
	"BZ": "",
	"BMB_BBH": "28.0",
	"XSF_DZ": "北京",
	"XSF_DH": "13141422555",
	"XSF_YH": "北京",
	"XSF_ZH": "65456787889",
	"GMF_DZ": "",
	"GMF_DH": null,
	"GMF_YH": "",
	"GMF_ZH": "",
	"items": [{
		"FPHXZ": 0,
		"XMMC": "*运输服务*国际旅客运输",
		"XMBM": "3040502020101000000",
		"GGXH": "",
		"XMJE": 13130.240000000000000,
		"XMJSHJ": 14837.17,
		"SL": 0.13,
		"SE": 1706.930000000000000,
		"HH": 1,
		"SPBM": "3040502020101000000",
		"DW": "",
		"XMSL": 870.000000000000000
	}],
"tspzs": [{
	 "cxrxh": "1",//出行人序号
	 "cxr": "张三",//出行人
	 "chuxrq": "2022-11-01",//出行日期，格式yyyy-MM-dd
	 "cxrzjlxDm": "101",//出行人证件类型代码
	 "sfzjhm": "1233445",//身份证件号码
	 "cfd": "北京市怀柔区",//出发地
	 "lkddd": "北京市平谷区",//到达地
	 "zwdj": "二等座",//座位等级若交通工具为火车、飞机、船舶，则该要素为必填，其他选项选填；
---交通工具为火车：一等座、二等座、软席（软座、软卧）、硬席（硬座、硬卧） 
---交通工作为飞机： 经济舱、头等舱、公务舱
---交通工具为船舶： 一等舱、二等舱 、三等舱
	 "jtgjlxDm": "2"//交通工具类型代码（1：飞机 2：火车 3：长途汽车 4：公共交通 5：出租车 6：汽车 7：船舶 9：其他）
 }]
}]

出行人证件类型代码枚举：
101：组织机构代码证
102：营业执照
103：税务登记证
199：其他单位证件
201：居民身份证
202：军官证
203：武警警官证
204：士兵证
205：军队离退休干部证
206：残疾人证
207：残疾军人证（1-8级）
208：外国护照
210：港澳居民来往内地通行证
212：中华人民共和国往来港澳通行证
213：台湾居民来往大陆通行证
214：大陆居民往来台湾通行证
215：外国人居留证
216：外交官证
217：使（领事）馆证
218：海员证
219：香港永久性居民身份证
220：台湾身份证
221：澳门特别行政区永久性居民身份证
222：外国人身份证件
224：就业失业登记证
225：退休证
226：离休证
227：中国护照
228：城镇退役士兵自谋职业证
229：随军家属身份证明
230：中国人民解放军军官转业证书
231：中国人民解放军义务兵退出现役证
232：中国人民解放军士官退出现役证
233：外国人永久居留身份证（外国人永久居留证）
234：就业创业证
235：香港特别行政区护照
236：澳门特别行政区护照
237：中华人民共和国港澳居民居住证
238：中华人民共和国台湾居民居住证
239：《中华人民共和国外国人工作许可证》（A类）
240：《中华人民共和国外国人工作许可证》（B类）
241：《中华人民共和国外国人工作许可证》（C类）
291：出生医学证明
299：其他个人证件


6.数电代收车船税发票报文示例
[{
	"FPQQLSH": "202302171613262049",
	"FPLX": "31",
	"XSF_NSRSBH": "441234567AAAAAA",
	"XSF_MC": "htt灰度01AAAA",
	"TSPZ": "E07",//特殊票种-代收车船税代码
"BXDH": "89293943482432",//保险单号
"CPHCBDJH": "豫MUX555",//车牌号/船舶登记号
"SKSSQ": "2023-01 2023-03",//税款所属期yyyy-MM+空格+yyyy-MM
"DSCCSJE": "350000",//代收车船税金额
"ZNJ": "100",//滞纳金
"JEHJ": "350100",//金额合计
"CJH": "233134133384938",//车辆识别代码/车架号码
	"ORGCODE": "htt001",
	"GMF_NSRSBH": "913418025914242188",
	"GMF_MC": "labo1",
	"GMF_DZDH": "",
	"GMF_YHZH": "",
	"KPR": "hett",
	"SKR": "hett",
	"FHR": "hett",
	"JSHJ": 14837.170000000000000,
	"HJJE": 13130.240000000000000,
	"HJSE": 1706.930000000000000,
	"BZ": "",
	"BMB_BBH": "28.0",
	"XSF_DZ": "北京",
	"XSF_DH": "13141422555",
	"XSF_YH": "北京",
	"XSF_ZH": "65456787889",
	"GMF_DZ": "",
	"GMF_DH": null,
	"GMF_YH": "",
	"GMF_ZH": "",
	"items": [{
		"FPHXZ": 0,
		"XMMC": "*代收车船*宝马X6",
		"XMBM": "3040502020101000000",
		"GGXH": "",
		"XMJE": 13130.240000000000000,
		"XMJSHJ": 14837.17,
		"SL": 0.13,
		"SE": 1706.930000000000000,
		"HH": 1,
		"SPBM": "3040502020101000000",
		"DW": "辆",
		"XMSL": 870.000000000000000
	}]
}]
7.数电差额征收-差额开票报文示例
[{
    "FPQQLSH": "202302171613262050",
    "FPLX": "31",
    "XSF_NSRSBH": "44123456789012AAAAAA",
    "XSF_MC": "AAAA广东全电",
    "ZSFS": "2",//征收方式：差额征收-差额开票
    "ORGCODE": "AAAA03",
    "GMF_NSRSBH": "913418025914242188",
    "GMF_MC": "labo1",
    "GMF_DZDH": "",
    "GMF_YHZH": "",
    "KPR": "hett",
    "SKR": "hett",
    "FHR": "hett",
    "JSHJ": 14837.170000000000000,
    "HJJE": 13130.240000000000000,
    "HJSE": 1706.930000000000000,
    "BZ": "",
    "BMB_BBH": "28.0",
    "XSF_DZ": "北京",
    "XSF_DH": "13141422555",
    "XSF_YH": "北京",
    "XSF_ZH": "65456787889",
    "GMF_DZ": "",
    "GMF_DH": null,
    "GMF_YH": "",
    "GMF_ZH": "",
    "items": [{
        "FPHXZ": 0,
        "XMMC": "*运输服务*国内道路货物运输服务",
        "XMBM": "3010102020100000000",
        "GGXH": "",
        "XMJE": 13130.240000000000000,
        "XMJSHJ": 14837.17,
        "SL": 0.13,
        "SE": 1706.930000000000000,
        "HH": 1,
        "SPBM": "3040502020101000000",
        "DW": "吨",
        "XMSL": 870.000000000000000,
"KCE": 100.00//扣除总额
    }],
"cepzs": [{
        "XH": 1,//序号
      	"PZLX": "01",//凭证类型，01 数电票、02 增值税专用发票、03 增值税普通发票、04 营业税发票、05 财政票据、06 法院裁决书、07 契税完税凭证、08 其他发票类、09 其他扣除凭证
"FPHM": "23442000000000000293",//全电发票号码
      	"FPDM": "",//非全电发票代码
      	 "ZZFPHM": "",//非全电发票号码
      	"PZHM": "",//凭证号码
     	"KJRQ": "2023-01-04",//开票日期，格式形如：yyyy-MM-dd
     	"HJJE": 1000.00,//合计金额
     	"KCE": 100.00,//扣除额
      	"BZ": "",//备注
      	"LY": "手工录入",//录入方式，取值范围如下：手工录入 勾选录入 模板录入
      	"BCKCJE": 100.00,//本次扣除金额
      	"PZHJJE": 1000.00//凭证合计金额
	}]
 }]

8.数电差额征收-全额开票报文示例
[{
    "FPQQLSH": "202302171613262050",
    "FPLX": "31",
    "XSF_NSRSBH": "44123456789012AAAAAA",
    "XSF_MC": "AAAA广东全电",
    "ZSFS": "3",//征收方式：差额征收-全额开票
    "ORGCODE": "AAAA03",
    "GMF_NSRSBH": "913418025914242188",
    "GMF_MC": "labo1",
    "GMF_DZDH": "",
    "GMF_YHZH": "",
    "KPR": "hett",
    "SKR": "hett",
    "FHR": "hett",
    "JSHJ": 14837.170000000000000,
    "HJJE": 13130.240000000000000,
    "HJSE": 1706.930000000000000,
    "BZ": "",
    "BMB_BBH": "28.0",
    "XSF_DZ": "北京",
    "XSF_DH": "13141422555",
    "XSF_YH": "北京",
    "XSF_ZH": "65456787889",
    "GMF_DZ": "",
    "GMF_DH": null,
    "GMF_YH": "",
    "GMF_ZH": "",
    "items": [{
        "FPHXZ": 0,
        "XMMC": "*运输服务*国内道路货物运输服务",
        "XMBM": "3010102020100000000",
        "GGXH": "",
        "XMJE": 13130.240000000000000,
        "XMJSHJ": 14837.17,
        "SL": 0.13,
        "SE": 1706.930000000000000,
        "HH": 1,
        "SPBM": "3040502020101000000",
        "DW": "吨",
        "XMSL": 870.000000000000000,
"KCE": 0//扣除总额
}]
 }]
```

## 返回参数

### 返回字段

1. `code`
   - 类型：string
   - 数组：否
   - 必填：否
   - 示例/默认值：`200`
   - 说明：Return Value Encoding

2. `datas`
   - 类型：string
   - 数组：否
   - 必填：否
   - 示例/默认值：`Operation successful`
   - 说明：Response Information

3. `message`
   - 类型：string
   - 数组：否
   - 必填：否
   - 示例/默认值：`success`
   - 说明：Information Description

## 返回示例

### 成功示例

无。

### 失败示例

无。

## 错误码

| 错误码 | 错误说明 | 处理建议 |
| --- | --- | --- |
| 1002 |  |  |
| 9999 |  |  |


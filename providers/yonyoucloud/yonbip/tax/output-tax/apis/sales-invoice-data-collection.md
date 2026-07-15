# Sales Invoice Data Collection

来源页面：

- https://open.yonyoucloud.com/#/doc-center/docDes/api?apiId=2126167596661211139&isOrigin=1&selectApiTab=open&from=&iframe=

机器可抓取的详情接口：

- https://open.yonyoucloud.com/iuap-ipaas-base/openPortal/api/getByVersionForTest/2126167596661211139/running?scene=open&isOrigin=1&isAjax=1

## 基本信息

- apiId：2126167596661211139
- API 类目：已开票
- 所属目录：销项企业票夹（Outbound Enterprise Invoice Folder）
- 产品：
- 更新时间：2026-06-08 17:34:39.000
- 请求方法：POST
- Content-Type：application/json
- 接口路径：/yonbip/tax/api/gather/save-invoices
- 完整调用地址：https://c2.yonyoucloud.com/iuap-api-gateway/yonbip/tax/api/gather/save-invoices
- 鉴权方式：access_token 作为 Query 参数传递（?access_token=）
- 当前状态：当前接口
- 请求字段数：Query 0 个，Body 176 个
- 返回字段数：2 个

## 对接要点

- 调用 URL：`https://c2.yonyoucloud.com/iuap-api-gateway/yonbip/tax/api/gather/save-invoices?access_token={access_token}`
- 调用方必须保存业务来源单号、发票请求流水号、请求报文、响应报文和状态查询结果，便于重试和对账。
- 开票、红冲、作废、驱动开票等写操作建议用业务唯一号做幂等控制；同一业务单不要生成多个不同流水号反复提交。
- 返回成功只代表接口调用成功，不一定代表税局或开票终态成功；涉及开票结果时必须再调用状态查询类接口确认。
- 详情接口返回字段说明可能为英文，字段名以开放平台原始字段为准。

## 调用模板

```bash
curl -X POST 'https://c2.yonyoucloud.com/iuap-api-gateway/yonbip/tax/api/gather/save-invoices?access_token=访问令牌' \
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
   - 必填：是
   - 示例/默认值：`0001`
   - 说明：Invoicing Site Code

2. `nsrsbh`
   - 类型：string
   - 数组：否
   - 必填：是
   - 示例/默认值：`123456789`
   - 说明：Seller Taxpayer Identification Number

3. `datas`
   - 类型：object
   - 数组：是
   - 必填：否
   - 说明：Invoice data

4. `datas.invoiceExt`
   - 类型：object
   - 数组：否
   - 必填：否
   - 说明：Head info extends properties

5. `datas.invoiceExt.ticketNumber`
   - 类型：string
   - 数组：否
   - 必填：否
   - 说明：Ticket Number

6. `datas.invoiceExt.buyerType`
   - 类型：string
   - 数组：否
   - 必填：否
   - 说明：Ticket buyer type

7. `datas.invoiceExt.fareAmount`
   - 类型：string
   - 数组：否
   - 必填：否
   - 说明：Ticket fare amount

8. `datas.invoiceExt.orderNumber`
   - 类型：string
   - 数组：否
   - 必填：否
   - 说明：Ticket order number

9. `datas.invoiceExt.userName`
   - 类型：string
   - 数组：否
   - 必填：否
   - 说明：Ticket User Name

10. `datas.invoiceExt.gpCode`
   - 类型：string
   - 数组：否
   - 必填：否
   - 说明：Ticket GP Code

11. `datas.invoiceExt.passengerName`
   - 类型：string
   - 数组：否
   - 必填：否
   - 说明：Ticket passenger Name

12. `datas.invoiceExt.passengerIdnum`
   - 类型：string
   - 数组：否
   - 必填：否
   - 说明：Ticket passenger Idnum

13. `datas.invoiceExt.endorsements`
   - 类型：string
   - 数组：否
   - 必填：否
   - 说明：Ticket endorsements

14. `datas.invoiceExt.office`
   - 类型：string
   - 数组：否
   - 必填：否
   - 说明：Ticket office

15. `datas.invoiceExt.issuedBy`
   - 类型：string
   - 数组：否
   - 必填：否
   - 说明：Ticket issued by

16. `datas.invoiceExt.iata`
   - 类型：string
   - 数组：否
   - 必填：否
   - 说明：Ticket iata

17. `datas.invoiceExt.pnr`
   - 类型：string
   - 数组：否
   - 必填：否
   - 说明：Ticket pnr

18. `datas.invoiceExt.ticketInformation`
   - 类型：string
   - 数组：否
   - 必填：否
   - 说明：TicketInformation

19. `datas.invoiceExt.insurance`
   - 类型：string
   - 数组：否
   - 必填：否
   - 说明：Ticket insurance

20. `datas.invoiceExt.electronicTicketType`
   - 类型：string
   - 数组：否
   - 必填：否
   - 说明：Electronic Ticket Type

21. `datas.invoiceExt.verifyCode`
   - 类型：string
   - 数组：否
   - 必填：否
   - 说明：Ticket verify code

22. `datas.invoiceExt.overdueFlag`
   - 类型：string
   - 数组：否
   - 必填：否
   - 说明：Ticket overdue flag

23. `datas.lydjh`
   - 类型：string
   - 数组：否
   - 必填：否
   - 说明：Lydjh

24. `datas.bz`
   - 类型：string
   - 数组：否
   - 必填：否
   - 示例/默认值：`123`
   - 说明：Remarks

25. `datas.fpDm`
   - 类型：string
   - 数组：否
   - 必填：否
   - 示例/默认值：`123456789012`
   - 说明：Invoice code. Fully Digitalized E-invoice does not require the invoice code to be transmitted.

26. `datas.fpHm`
   - 类型：string
   - 数组：否
   - 必填：是
   - 示例/默认值：`1234567890`
   - 说明：Invoice Number

27. `datas.fplx`
   - 类型：string
   - 数组：否
   - 必填：是
   - 示例/默认值：`31`
   - 说明：Invoice Type. 1: VAT Electronic Normal Invoice; 2: VAT Electronic Special Invoice; 3: VAT Normal Invoice; 4:
     VAT Special Invoice, VAT Special Invoice (Motor Vehicle); 5: Unified Invoice for Motor Vehicle Sales; 8: VAT
     Electronic Normal Invoice (Refined Oil); 10: Normal Invoice for Refined Oil; 11: Special Invoice for Refined
     Oil; 15: Unified Invoice for Second-Hand Vehicle Sales; 31: Fully Digitalized Special Invoice; 32: Fully
     Digitalized Normal Invoice; 33: Fully Digitalized Paper Invoice (VAT Special Invoice); 34: Fully Digitalized
     Paper Invoice (Normal Invoice); 35: Fully Digitalized Invoice (Airline Itinerary); 36: Fully Digitalized Paper
     Invoice (Unified Invoice for Motor Vehicle Sales);

28. `datas.zsfs`
   - 类型：string
   - 数组：否
   - 必填：否
   - 示例/默认值：`0`
   - 说明：Tax collection method. 0 - Normal taxation 2 - Differential taxation/Differential invoicing 3 - Full invoicing

29. `datas.zfbz`
   - 类型：string
   - 数组：否
   - 必填：否
   - 示例/默认值：`N`
   - 说明：Cancellation Mark. Y - Canceled, N - Not Canceled

30. `datas.bred`
   - 类型：string
   - 数组：否
   - 必填：否
   - 示例/默认值：`N`
   - 说明：Red mark. Y- red flushed. N-not red flush

31. `datas.zfrq`
   - 类型：date
   - 数组：否
   - 必填：否
   - 示例/默认值：`2024-10-10 10:10:10`
   - 说明：Cancellation Date

32. `datas.gmfDzdh`
   - 类型：string
   - 数组：否
   - 必填：否
   - 示例/默认值：`Beijing 134`
   - 说明：Buyer Address and Phone Number. For tax control invoice use.

33. `datas.gmfMc`
   - 类型：string
   - 数组：否
   - 必填：是
   - 示例/默认值：`XXX`
   - 说明：Buyer Name

34. `datas.gmfYhzh`
   - 类型：string
   - 数组：否
   - 必填：否
   - 示例/默认值：`Beijing Bank 1234`
   - 说明：Buyer's bank account number

35. `datas.gmfNsrsbh`
   - 类型：string
   - 数组：否
   - 必填：否
   - 示例/默认值：`123AA`
   - 说明：Purchaser Taxpayer Identification Number

36. `datas.hjje`
   - 类型：number
   - 数组：否
   - 必填：是
   - 示例/默认值：`1.11`
   - 说明：Total Amount

37. `datas.hjse`
   - 类型：number
   - 数组：否
   - 必填：是
   - 示例/默认值：`1.11`
   - 说明：Total Tax Amount

38. `datas.jqbh`
   - 类型：string
   - 数组：否
   - 必填：否
   - 示例/默认值：`66123456`
   - 说明：Tax control disk number. Used for tax control invoices.

39. `datas.jshj`
   - 类型：number
   - 数组：否
   - 必填：是
   - 示例/默认值：`1.11`
   - 说明：Total Price Including Tax

40. `datas.jym`
   - 类型：string
   - 数组：否
   - 必填：否
   - 示例/默认值：`WQA`
   - 说明：Verification code. Used for tax control invoices.

41. `datas.kplx`
   - 类型：string
   - 数组：否
   - 必填：否
   - 示例/默认值：`0`
   - 说明：Invoice Type. 0. Blue Invoice 1. Red Invoice

42. `datas.fhr`
   - 类型：string
   - 数组：否
   - 必填：否
   - 示例/默认值：`Wang Wu`
   - 说明：Reviewer

43. `datas.kpr`
   - 类型：string
   - 数组：否
   - 必填：否
   - 示例/默认值：`Wang Wu`
   - 说明：Invoicer

44. `datas.skr`
   - 类型：string
   - 数组：否
   - 必填：否
   - 示例/默认值：`Wang Wu`
   - 说明：Payee

45. `datas.kprqDetail`
   - 类型：date
   - 数组：否
   - 必填：是
   - 示例/默认值：`2024-10-10 10:10:10`
   - 说明：Invoice Date

46. `datas.xsfDzdh`
   - 类型：string
   - 数组：否
   - 必填：否
   - 示例/默认值：`XX`
   - 说明：Seller's address and phone number. For tax control invoice.

47. `datas.xsfMc`
   - 类型：string
   - 数组：否
   - 必填：是
   - 示例/默认值：`XXX`
   - 说明：Seller Name

48. `datas.xsfNsrsbh`
   - 类型：string
   - 数组：否
   - 必填：是
   - 示例/默认值：`ABC`
   - 说明：Seller's Taxpayer Identification Number

49. `datas.xsfYhzh`
   - 类型：string
   - 数组：否
   - 必填：否
   - 示例/默认值：` `
   - 说明：Seller's bank account. For tax control invoice.

50. `datas.yfpDm`
   - 类型：string
   - 数组：否
   - 必填：否
   - 示例/默认值：`123456789012`
   - 说明：Original invoice code

51. `datas.yfpHm`
   - 类型：string
   - 数组：否
   - 必填：否
   - 示例/默认值：`1234567890`
   - 说明：Original invoice number

52. `datas.ewm`
   - 类型：string
   - 数组：否
   - 必填：否
   - 示例/默认值：` `
   - 说明：Tax control invoice QR code

53. `datas.sgbz`
   - 类型：string
   - 数组：否
   - 必填：否
   - 示例/默认值：`0`
   - 说明：Acquisition Mark. 2 - Agricultural Product Acquisition

54. `datas.tspz`
   - 类型：string
   - 数组：否
   - 必填：否
   - 示例/默认值：` `
   - 说明：Special Invoice Types. 0 - General 2 - Fuel VAT Special Invoice 8 - Agricultural Products Sales 9 -
     Agricultural Products Purchase 11 - Tobacco Invoice 12 - Motor Vehicle Invoice 14 - Refined Oil Invoice DK -
     Special Invoice for Agency Development 16 - Mineral Products Invoice E01 - Refined Oil Invoice E02 - Rare
     Earth Invoice E03 - Construction Service Invoice E04 - Goods Transportation E05 - Real Estate Sales E06 - Real
     Estate Leasing Service Invoice E07 - Collection of Vehicle and Vessel Tax E09 - Passenger Transportation E12 -
     Self-produced Agricultural Products Sales E14 - Motor Vehicle E16 - Agricultural Products Purchase E17 -
     Photovoltaic Purchase E18 - Cigarette Invoice E22 - Electronic Itinerary E32 - Electronic Cigarette (The
     special invoice types corresponding to fully digitalized e-invoices start with E, while others are special
     types of tax control invoices)

55. `datas.srcBillid`
   - 类型：string
   - 数组：否
   - 必填：否
   - 示例/默认值：`111`
   - 说明：Source Document ID

56. `datas.srcBillType`
   - 类型：string
   - 数组：否
   - 必填：否
   - 示例/默认值：`111`
   - 说明：Source Document Type ID

57. `datas.srcBillCode`
   - 类型：string
   - 数组：否
   - 必填：否
   - 示例/默认值：`AA`
   - 说明：Source Document Code

58. `datas.xsfDz`
   - 类型：string
   - 数组：否
   - 必填：否
   - 示例/默认值：`AAA`
   - 说明：Digital Electronics Seller Address

59. `datas.xsfDh`
   - 类型：string
   - 数组：否
   - 必填：否
   - 示例/默认值：`123`
   - 说明：Digital electronics sales contact number

60. `datas.xsfYh`
   - 类型：string
   - 数组：否
   - 必填：否
   - 示例/默认值：`Beijing Bank`
   - 说明：Digital Electronics Sales Bank

61. `datas.xsfZh`
   - 类型：string
   - 数组：否
   - 必填：否
   - 示例/默认值：`312233`
   - 说明：Number of seller accounts

62. `datas.gmfDz`
   - 类型：string
   - 数组：否
   - 必填：否
   - 示例/默认值：`AAX`
   - 说明：Digital Electronics Buyer Address

63. `datas.gmfDh`
   - 类型：string
   - 数组：否
   - 必填：否
   - 示例/默认值：`13723333233`
   - 说明：Buyer phone number for digital electronics

64. `datas.gmfYh`
   - 类型：string
   - 数组：否
   - 必填：否
   - 示例/默认值：`Beijing Bank`
   - 说明：Digital Electronics Buyer Bank

65. `datas.gmfZh`
   - 类型：string
   - 数组：否
   - 必填：否
   - 示例/默认值：`31233`
   - 说明：Digital Dog Buyer Account

66. `datas.sdHm`
   - 类型：string
   - 数组：否
   - 必填：否
   - 示例/默认值：`3333232323`
   - 说明：Digital ticket number of the electronic ticket.

67. `datas.hzxxbbh`
   - 类型：string
   - 数组：否
   - 必填：否
   - 示例/默认值：`123213`
   - 说明：Red Letter Information Form / Confirmation Document Number

68. `datas.items`
   - 类型：object
   - 数组：是
   - 必填：否
   - 说明：Invoice Details

69. `datas.items.dw`
   - 类型：string
   - 数组：否
   - 必填：否
   - 示例/默认值：`ton`
   - 说明：Unit

70. `datas.items.fphxz`
   - 类型：string
   - 数组：否
   - 必填：是
   - 示例/默认值：`0`
   - 说明：Invoice line nature. 0 - Normal line 1 - Discount line 2 - Discounted line

71. `datas.items.ggxh`
   - 类型：string
   - 数组：否
   - 必填：否
   - 示例/默认值：`5*5`
   - 说明：Specification Model

72. `datas.items.se`
   - 类型：number
   - 数组：否
   - 必填：否
   - 示例/默认值：`1.00`
   - 说明：Tax amount

73. `datas.items.sl`
   - 类型：number
   - 数组：否
   - 必填：否
   - 示例/默认值：`0.13`
   - 说明：Tax Rate

74. `datas.items.xmdj`
   - 类型：number
   - 数组：否
   - 必填：否
   - 示例/默认值：`0.1`
   - 说明：Project Unit Price

75. `datas.items.xmje`
   - 类型：number
   - 数组：否
   - 必填：否
   - 示例/默认值：`1`
   - 说明：Project Amount

76. `datas.items.xmmc`
   - 类型：string
   - 数组：否
   - 必填：否
   - 示例/默认值：`Diamond`
   - 说明：Project Name

77. `datas.items.xmsl`
   - 类型：number
   - 数组：否
   - 必填：否
   - 示例/默认值：`1`
   - 说明：Project Quantity

78. `datas.items.kce`
   - 类型：number
   - 数组：否
   - 必填：否
   - 示例/默认值：`1`
   - 说明：Deduction

79. `datas.items.lslbs`
   - 类型：string
   - 数组：否
   - 必填：否
   - 示例/默认值：`1`
   - 说明：Zero Tax Rate Indicator. Blank: Non-zero rate, 0: Export tax rebate, 1: Exempt, 2: Not levied, 3: Normal zero
     tax rate

80. `datas.items.spbm`
   - 类型：string
   - 数组：否
   - 必填：否
   - 示例/默认值：`1000001`
   - 说明：Tax Category Code

81. `datas.items.xmjshj`
   - 类型：number
   - 数组：否
   - 必填：否
   - 示例/默认值：`100`
   - 说明：Project total including tax

82. `datas.items.detailMotor`
   - 类型：object
   - 数组：否
   - 必填：否
   - 说明：Detailed Specific Business Expansion

83. `datas.items.detailMotor.cd`
   - 类型：string
   - 数组：否
   - 必填：否
   - 示例/默认值：`Zhejiang Province`
   - 说明：Place of origin

84. `datas.items.detailMotor.hgzh`
   - 类型：string
   - 数组：否
   - 必填：否
   - 示例/默认值：`A1111`
   - 说明：Certificate Number

85. `datas.items.detailMotor.jkzmsh`
   - 类型：string
   - 数组：否
   - 必填：否
   - 示例/默认值：`A11`
   - 说明：Import Certificate Number

86. `datas.items.detailMotor.sjdh`
   - 类型：string
   - 数组：否
   - 必填：否
   - 示例/默认值：`AOP`
   - 说明：Inspection Certificate Number

87. `datas.items.detailMotor.fdjhm`
   - 类型：string
   - 数组：否
   - 必填：否
   - 示例/默认值：`S1111`
   - 说明：Engine number

88. `datas.items.detailMotor.cjhm`
   - 类型：string
   - 数组：否
   - 必填：否
   - 示例/默认值：`A1111`
   - 说明：Chassis number

89. `datas.items.detailMotor.dunwei`
   - 类型：string
   - 数组：否
   - 必填：否
   - 示例/默认值：`15`
   - 说明：Tonnage

90. `datas.items.detailMotor.xcrs`
   - 类型：string
   - 数组：否
   - 必填：否
   - 示例/默认值：`5`
   - 说明：Maximum number of passengers

91. `datas.items.detailMotor.cllx`
   - 类型：string
   - 数组：否
   - 必填：否
   - 示例/默认值：`Compact car`
   - 说明：Vehicle Type

92. `datas.items.detailMotor.cpxh`
   - 类型：string
   - 数组：否
   - 必填：否
   - 示例/默认值：`SV1`
   - 说明：Brand and model

93. `datas.items.detailMotor.scqymc`
   - 类型：string
   - 数组：否
   - 必填：否
   - 示例/默认值：`Zhejiang Haoqing`
   - 说明：Production Enterprise Name

94. `datas.items.detailMotor.sfzhm`
   - 类型：string
   - 数组：否
   - 必填：否
   - 示例/默认值：`1323333`
   - 说明：ID number / Organization code

95. `datas.items.detailMotor.swjgdm`
   - 类型：string
   - 数组：否
   - 必填：否
   - 示例/默认值：`1113`
   - 说明：Tax Authority Code

96. `datas.items.detailMotor.swjgmc`
   - 类型：string
   - 数组：否
   - 必填：否
   - 示例/默认值：`Beijing Municipal Taxation Bureau`
   - 说明：Name of the Tax Authority (Motor Vehicle Use)

97. `datas.items.detailMotor.wspzh`
   - 类型：string
   - 数组：否
   - 必填：否
   - 示例/默认值：`11233`
   - 说明：Tax Payment Voucher Number

98. `datas.items.detailMotor.gfdz`
   - 类型：string
   - 数组：否
   - 必填：否
   - 示例/默认值：`Agricultural Trade Market`
   - 说明：Buyer Unit/Individual Address

99. `datas.items.detailMotor.gfdh`
   - 类型：string
   - 数组：否
   - 必填：否
   - 示例/默认值：`1322233313`
   - 说明：Buyer's phone number

100. `datas.items.detailMotor.cpzh`
   - 类型：string
   - 数组：否
   - 必填：否
   - 示例/默认值：`Beijing A1234`
   - 说明：License Plate Number

101. `datas.items.detailMotor.djzh`
   - 类型：string
   - 数组：否
   - 必填：否
   - 示例/默认值：`sss`
   - 说明：Registration Certificate Number

102. `datas.items.detailMotor.cgsmc`
   - 类型：string
   - 数组：否
   - 必填：否
   - 示例/默认值：`XXX`
   - 说明：Name of the Vehicle Management Office in the Transfer Location

103. `datas.items.detailMotor.xfdw`
   - 类型：string
   - 数组：否
   - 必填：否
   - 示例/默认值：`XXX`
   - 说明：Seller Unit/Individual

104. `datas.items.detailMotor.xfhm`
   - 类型：string
   - 数组：否
   - 必填：否
   - 示例/默认值：`323333333`
   - 说明：Seller Unit Code/ID Number

105. `datas.items.detailMotor.xfdz`
   - 类型：string
   - 数组：否
   - 必填：否
   - 示例/默认值：`XXXXX`
   - 说明：Seller's unit/personal address

106. `datas.items.detailMotor.xfdh`
   - 类型：string
   - 数组：否
   - 必填：否
   - 示例/默认值：`13233`
   - 说明：Seller's phone number

107. `datas.items.detailMotor.jydw`
   - 类型：string
   - 数组：否
   - 必填：否
   - 示例/默认值：`XXX`
   - 说明：Business, Auction Unit

108. `datas.items.detailMotor.jydz`
   - 类型：string
   - 数组：否
   - 必填：否
   - 示例/默认值：`XXX`
   - 说明：Business, Auction Unit Address

109. `datas.items.detailMotor.jysbh`
   - 类型：string
   - 数组：否
   - 必填：否
   - 示例/默认值：`XXXX`
   - 说明：Business and auction unit taxpayer identification number

110. `datas.items.detailMotor.jyyhzh`
   - 类型：string
   - 数组：否
   - 必填：否
   - 示例/默认值：`Beijing Bank AA`
   - 说明：Bank and Account Number

111. `datas.items.detailMotor.jydh`
   - 类型：string
   - 数组：否
   - 必填：否
   - 示例/默认值：`1333323`
   - 说明：Business, Auction Unit Phone Number

112. `datas.items.detailMotor.scmc`
   - 类型：string
   - 数组：否
   - 必填：否
   - 示例/默认值：`XXXX`
   - 说明：Used car market

113. `datas.items.detailMotor.scsbh`
   - 类型：string
   - 数组：否
   - 必填：否
   - 示例/默认值：`AAA`
   - 说明：Used Car Market Taxpayer Identification Number

114. `datas.items.detailMotor.scdz`
   - 类型：string
   - 数组：否
   - 必填：否
   - 示例/默认值：`XXXX`
   - 说明：Used Car Market Address

115. `datas.items.detailMotor.scyhzh`
   - 类型：string
   - 数组：否
   - 必填：否
   - 示例/默认值：`XXX`
   - 说明：Used Car Market Bank Account and Account Number

116. `datas.items.detailMotor.scdh`
   - 类型：string
   - 数组：否
   - 必填：否
   - 示例/默认值：`132333323`
   - 说明：Used car market phone number

117. `datas.items.detailMotor.vehicleVersion`
   - 类型：string
   - 数组：否
   - 必填：否
   - 示例/默认值：`0`
   - 说明：Unified Sales Invoice for Motor Vehicles Version. 0=2014 Version; 1=2021 Version

118. `datas.items.detailMotor.jzfwfsd`
   - 类型：string
   - 数组：否
   - 必填：否
   - 示例/默认值：`XXX`
   - 说明：Location of Construction Service

119. `datas.items.detailMotor.jzxmmc`
   - 类型：string
   - 数组：否
   - 必填：否
   - 示例/默认值：`XXX`
   - 说明：Construction Project Name

120. `datas.items.detailMotor.cqzsbh`
   - 类型：string
   - 数组：否
   - 必填：否
   - 示例/默认值：`12344`
   - 说明：Property Certificate / Real Estate Certificate Number

121. `datas.items.detailMotor.gmfsfzjlx`
   - 类型：string
   - 数组：否
   - 必填：否
   - 示例/默认值：`XXX`
   - 说明：Taxpayer Identification Number / Unified Social Credit Number / ID Card Number, Other Document Numbers

122. `datas.items.yhzcbs`
   - 类型：number
   - 数组：否
   - 必填：否
   - 示例/默认值：`0`
   - 说明：Discount Policy Indicator. 0: Not in use, 1: In use

123. `datas.items.zzstsgl`
   - 类型：string
   - 数组：否
   - 必填：否
   - 示例/默认值：`5% simplified tax collection`
   - 说明：Special Management of VAT

124. `datas.items.lymxid`
   - 类型：string
   - 数组：否
   - 必填：否
   - 示例/默认值：`1`
   - 说明：Source Detail ID

125. `datas.items.dzsjhh`
   - 类型：string
   - 数组：否
   - 必填：否
   - 示例/默认值：`1`
   - 说明：Electronic Tax Bureau Account Number

126. `datas.cepzs`
   - 类型：object
   - 数组：是
   - 必填：否
   - 说明：Difference Voucher Number

127. `datas.cepzs.xh`
   - 类型：string
   - 数组：否
   - 必填：否
   - 示例/默认值：`1`
   - 说明：Serial Number

128. `datas.cepzs.pzlx`
   - 类型：string
   - 数组：否
   - 必填：否
   - 示例/默认值：` `
   - 说明：Voucher Type

129. `datas.cepzs.fphm`
   - 类型：string
   - 数组：否
   - 必填：否
   - 示例/默认值：`1111`
   - 说明：Invoice Number

130. `datas.cepzs.fpdm`
   - 类型：string
   - 数组：否
   - 必填：否
   - 示例/默认值：`1111`
   - 说明：Invoice Code

131. `datas.cepzs.zzfphm`
   - 类型：string
   - 数组：否
   - 必填：否
   - 示例/默认值：`2222`
   - 说明：Paper Invoice Number

132. `datas.cepzs.pzhm`
   - 类型：string
   - 数组：否
   - 必填：否
   - 示例/默认值：`1111`
   - 说明：Voucher Number

133. `datas.cepzs.kjrq`
   - 类型：string
   - 数组：否
   - 必填：否
   - 示例/默认值：`2024-10-10`
   - 说明：Invoice Date. yyyy-MM-dd

134. `datas.cepzs.hjje`
   - 类型：number
   - 数组：否
   - 必填：否
   - 示例/默认值：`1`
   - 说明：Total Amount

135. `datas.cepzs.kce`
   - 类型：number
   - 数组：否
   - 必填：否
   - 示例/默认值：`1`
   - 说明：Deduction Amount

136. `datas.cepzs.bz`
   - 类型：string
   - 数组：否
   - 必填：否
   - 示例/默认值：`XXX`
   - 说明：Remarks

137. `datas.cepzs.ly`
   - 类型：string
   - 数组：否
   - 必填：否
   - 示例/默认值：`Manual entry`
   - 说明：Entry Methods. Manual Entry, Checkbox Entry, Template Entry

138. `datas.cepzs.bckcje`
   - 类型：number
   - 数组：否
   - 必填：否
   - 示例/默认值：`1`
   - 说明：Deduction Amount for This Time

139. `datas.cepzs.pzhjje`
   - 类型：number
   - 数组：否
   - 必填：否
   - 示例/默认值：`1`
   - 说明：Total amount of the voucher

140. `datas.tspzs`
   - 类型：object
   - 数组：是
   - 必填：否
   - 说明：Specific Business Expansion

141. `datas.tspzs.carrierCode`
   - 类型：string
   - 数组：否
   - 必填：否
   - 说明：Ticket Carrier Code

142. `datas.tspzs.fareBasis`
   - 类型：string
   - 数组：否
   - 必填：否
   - 说明：Ticket fare basis

143. `datas.tspzs.notValidBefore`
   - 类型：string
   - 数组：否
   - 必填：否
   - 说明：Ticket notValidBefore

144. `datas.tspzs.notValidAfter`
   - 类型：string
   - 数组：否
   - 必填：否
   - 说明：Ticket notValidAfter

145. `datas.tspzs.allow`
   - 类型：string
   - 数组：否
   - 必填：否
   - 说明：Ticket allow

146. `datas.tspzs.itineraryType`
   - 类型：string
   - 数组：否
   - 必填：否
   - 说明：Ticket itineraryType

147. `datas.tspzs.cxrxh`
   - 类型：string
   - 数组：否
   - 必填：否
   - 示例/默认值：`1`
   - 说明：Traveler Serial Number

148. `datas.tspzs.cxr`
   - 类型：string
   - 数组：否
   - 必填：否
   - 示例/默认值：`XXXX`
   - 说明：Traveler

149. `datas.tspzs.cxrzjlxDm`
   - 类型：string
   - 数组：否
   - 必填：否
   - 示例/默认值：`101`
   - 说明：Traveler's Document Code. 101: Organization Code Certificate; 102: Business License; 103: Tax Registration
     Certificate; 199: Other Unit Documents; 201: Resident Identity Card; 202: Officer Certificate; 203: Armed
     Police Officer Certificate; 204: Soldier Certificate; 205: Military Retired Cadre Certificate; 206: Disability
     Certificate; 207: Disabled Veteran Certificate (Level 1-8); 208: Foreign Passport; 210: Permit for Hong Kong
     and Macau Residents to Travel to Mainland; 212: Permit for Mainland Residents to Travel to Hong Kong and
     Macau; 213: Permit for Taiwan Residents to Travel to Mainland; 214: Permit for Mainland Residents to Travel to
     Taiwan; 215: Foreigner Residence Permit; 216: Diplomatic Certificate; 217: Embassy (Consulate) Certificate;
     218: Seaman Certificate; 219: Hong Kong Permanent Resident Identity Card;

150. `datas.tspzs.sfzjhm`
   - 类型：string
   - 数组：否
   - 必填：否
   - 示例/默认值：`1111`
   - 说明：Valid ID number

151. `datas.tspzs.chuxrq`
   - 类型：string
   - 数组：否
   - 必填：否
   - 示例/默认值：`yyyy-MM-dd`
   - 说明：Travel Date

152. `datas.tspzs.cfd`
   - 类型：string
   - 数组：否
   - 必填：否
   - 示例/默认值：`XXX`
   - 说明：Place of Departure

153. `datas.tspzs.lkddd`
   - 类型：string
   - 数组：否
   - 必填：否
   - 示例/默认值：`XXX`
   - 说明：Arrival Destination

154. `datas.tspzs.zwdj`
   - 类型：string
   - 数组：否
   - 必填：否
   - 示例/默认值：`Second Class Seat`
   - 说明：Seat Class. Transportation Tool: Train: First Class, Second Class, Soft Seat (Soft Seat, Soft Sleeper), Hard
     Seat (Hard Seat, Hard Sleeper); Transportation Tool: Airplane: Economy Class, First Class, Business Class;
     Transportation Tool: Ship: First Cabin, Second Cabin, Third Cabin.

155. `datas.tspzs.jtgjlxDm`
   - 类型：string
   - 数组：否
   - 必填：否
   - 示例/默认值：`1`
   - 说明：Transportation Tool Type Codes: 1: Airplane 2: Train 3: Long-distance Bus 4: Public Transport 5: Taxi 6: Car
     7: Ship 9: Other

156. `datas.tspzs.ysmxxh`
   - 类型：string
   - 数组：否
   - 必填：否
   - 示例/默认值：`1`
   - 说明：Transport Detail Serial Number. Starts with 1.

157. `datas.tspzs.qyd`
   - 类型：string
   - 数组：否
   - 必填：否
   - 示例/默认值：`XX`
   - 说明：Place of Departure

158. `datas.tspzs.ddd`
   - 类型：string
   - 数组：否
   - 必填：否
   - 示例/默认值：`XXX`
   - 说明：Destination

159. `datas.tspzs.ysgjzl`
   - 类型：string
   - 数组：否
   - 必填：否
   - 示例/默认值：`Railway Transportation`
   - 说明：Types of transportation tools. Railway transportation, road transportation, waterway transportation, air
     transportation, pipeline transportation, other transportation tools.

160. `datas.tspzs.ysgjph`
   - 类型：string
   - 数组：否
   - 必填：否
   - 示例/默认值：`Beijing A`
   - 说明：Transport Tool Model Number

161. `datas.tspzs.yshwmc`
   - 类型：string
   - 数组：否
   - 必填：否
   - 示例/默认值：`XXX`
   - 说明：Name of Transported Goods

162. `datas.tspzs.fdjhm`
   - 类型：string
   - 数组：否
   - 必填：否
   - 示例/默认值：`1231`
   - 说明：Engine number

163. `datas.tspzs.dphgzbh`
   - 类型：string
   - 数组：否
   - 必填：否
   - 示例/默认值：`123`
   - 说明：Chassis Number/Frame Number

164. `datas.tspzs.sfyytljdj`
   - 类型：string
   - 数组：否
   - 必填：否
   - 示例/默认值：`N`
   - 说明：Is it used for tractor registration? Y: Yes N: No

165. `datas.tspzs.gtgmf`
   - 类型：string
   - 数组：否
   - 必填：否
   - 示例/默认值：`XXX`
   - 说明：Joint Purchaser

166. `datas.bdcxsTspzs`
   - 类型：object
   - 数组：是
   - 必填：否
   - 说明：Real Estate Specific Business

167. `datas.bdcxsTspzs.cxrxh`
   - 类型：string
   - 数组：否
   - 必填：否
   - 示例/默认值：`1`
   - 说明：Invoice Detail Line Number

168. `datas.bdcxsTspzs.bdcdz`
   - 类型：string
   - 数组：否
   - 必填：否
   - 示例/默认值：`XX Province, XX City, XX County *****`
   - 说明：Real Estate Address

169. `datas.bdcxsTspzs.kdsbz`
   - 类型：string
   - 数组：否
   - 必填：否
   - 示例/默认值：`Y: Yes; N: No`
   - 说明：Inter-city Signage

170. `datas.bdcxsTspzs.bdcdwdm`
   - 类型：string
   - 数组：否
   - 必填：否
   - 示例/默认值：`AAA`
   - 说明：Real Estate Unit Code

171. `datas.bdcxsTspzs.wqhtbabh`
   - 类型：string
   - 数组：否
   - 必填：否
   - 示例/默认值：`Beijing A12345`
   - 说明：Online Contract Filing Number

172. `datas.bdcxsTspzs.tdzzsxmbh`
   - 类型：string
   - 数组：否
   - 必填：否
   - 示例/默认值：`Beijing A12345`
   - 说明：Land VAT Project Number

173. `datas.bdcxsTspzs.hdjsjg`
   - 类型：string
   - 数组：否
   - 必填：否
   - 示例/默认值：`"1.2"`
   - 说明：Approved Tax Assessment Price

174. `datas.bdcxsTspzs.sjcjhsje`
   - 类型：string
   - 数组：否
   - 必填：否
   - 示例/默认值：`"1.2"`
   - 说明：Actual transaction amount including tax

175. `datas.bdcxsTspzs.mjdw`
   - 类型：string
   - 数组：否
   - 必填：否
   - 示例/默认值：`hectare`
   - 说明：Area unit

176. `datas.bdcxsTspzs.cqzsbh`
   - 类型：string
   - 数组：否
   - 必填：否
   - 示例/默认值：`Beijing A12345`
   - 说明：Property Certificate Number

## 请求示例

```text
Url: /yonbip/tax/api/gather/save-invoices?access_token=访问令牌  
Body: {
    "orgCode": "0001",
    "nsrsbh": "123456789",
    "datas": [
        {
            "bz": "123",
            "fpDm": "123456789012",
            "fpHm": "1234567890",
            "fplx": "31",
            "zsfs": "0",
            "zfbz": "N",
            "bred": "N",
            "zfrq": "2024-10-10 10:10:10",
            "gmfDzdh": "北京市 134",
            "gmfMc": "XXX",
            "gmfYhzh": "北京银行 1234",
            "gmfNsrsbh": "123AA",
            "hjje": 1.11,
            "hjse": 1.11,
            "jqbh": "66123456",
            "jshj": 1.11,
            "jym": "WQA",
            "kplx": "0",
            "fhr": "王五",
            "kpr": "王五",
            "skr": "王五",
            "kprqDetail": "2024-10-10 10:10:10",
            "xsfDzdh": "XX",
            "xsfMc": "XXX",
            "xsfNsrsbh": "ABC",
            "xsfYhzh": " ",
            "yfpDm": "123456789012",
            "yfpHm": "1234567890",
            "ewm": " ",
            "sgbz": "0",
            "tspz": " ",
            "srcBillid": "111",
            "srcBillType": "111",
            "srcBillCode": "AA",
            "xsfDz": "AAA",
            "xsfDh": "123",
            "xsfYh": "北京银行",
            "xsfZh": "312233",
            "gmfDz": "AAX",
            "gmfDh": "13723333233",
            "gmfYh": "北京银行",
            "gmfZh": "31233",
            "sdHm": "3333232323",
            "hzxxbbh": "123213",
            "items": [
                {
                    "dw": "吨",
                    "fphxz": "0",
                    "ggxh": "5*5",
                    "se": 1,
                    "sl": 0.13,
                    "xmdj": 0.1,
                    "xmje": 1,
                    "xmmc": "钻石",
                    "xmsl": 1,
                    "kce": 1,
                    "lslbs": "1",
                    "spbm": "1000001",
                    "xmjshj": 100,
                    "detailMotor": {
                        "cd": "浙江省",
                        "hgzh": "A1111",
                        "jkzmsh": "A11",
                        "sjdh": "AOP",
                        "fdjhm": "S1111",
                        "cjhm": "A1111",
                        "dunwei": "15",
                        "xcrs": "5",
                        "cllx": "小型车",
                        "cpxh": "SV1",
                        "scqymc": "浙江豪情",
                        "sfzhm": "1323333",
                        "swjgdm": "1113",
                        "swjgmc": "北京市税务局",
                        "wspzh": "11233",
                        "gfdz": "农贸市场",
                        "gfdh": "1322233313",
                        "cpzh": "京A1234",
                        "djzh": "sss",
                        "cgsmc": "XXX",
                        "xfdw": "XXX",
                        "xfhm": "323333333",
                        "xfdz": "XXXXX",
                        "xfdh": "13233",
                        "jydw": "XXX",
                        "jydz": "XXX",
                        "jysbh": "XXXX",
                        "jyyhzh": "北京银行AA",
                        "jydh": "1333323",
                        "scmc": "XXXX",
                        "scsbh": "AAA",
                        "scdz": "XXXX",
                        "scyhzh": "XXX",
                        "scdh": "132333323",
                        "vehicleVersion": "0",
                        "jzfwfsd": "XXX",
                        "jzxmmc": "XXX",
                        "cqzsbh": "12344",
                        "gmfsfzjlx": "XXX"
                    },
                    "yhzcbs": 0,
                    "zzstsgl": "按5%简易征收",
                    "lymxid": "1",
                    "dzsjhh": "1"
                }
            ],
            "cepzs": [
                {
                    "xh": "1",
                    "pzlx": " ",
                    "fphm": "1111",
                    "fpdm": "1111",
                    "zzfphm": "2222",
                    "pzhm": "1111",
                    "kjrq": "2024-10-10",
                    "hjje": 1,
                    "kce": 1,
                    "bz": "XXX",
                    "ly": "手工录入",
                    "bckcje": 1,
                    "pzhjje": 1
                }
            ],
            "tspzs": [
                {
                    "cxrxh": "1",
                    "cxr": "XXXX",
                    "cxrzjlxDm": "101",
                    "sfzjhm": "1111",
                    "chuxrq": "yyyy-MM-dd",
                    "cfd": "XXX",
                    "lkddd": "XXX",
                    "zwdj": "二等座",
                    "jtgjlxDm": "1",
                    "ysmxxh": "1",
                    "qyd": "XX",
                    "ddd": "XXX",
                    "ysgjzl": "铁路运输",
                    "ysgjph": "京A",
                    "yshwmc": "XXX",
                    "fdjhm": "1231",
                    "dphgzbh": "123",
                    "sfyytljdj": "N",
                    "gtgmf": "XXX"
                }
            ],
            "bdcxsTspzs": [
                {
                    "cxrxh": "1",
                    "bdcdz": "XX省XX市XX县*****",
                    "kdsbz": "Y：是；N:否",
                    "bdcdwdm": "AAA",
                    "wqhtbabh": "京A12345",
                    "tdzzsxmbh": "京A12345",
                    "hdjsjg": "1.2",
                    "sjcjhsje": "1.2",
                    "mjdw": "公顷",
                    "cqzsbh": "京A12345"
                }
            ]
        }
    ]
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
   - 说明：Operation Information

## 返回示例

### 成功示例

无。

### 失败示例

无。

## 错误码

| 错误码 | 错误说明 | 处理建议 |
| --- | --- | --- |
| 9999 |  |  |


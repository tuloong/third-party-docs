# Invoice Application Document Query (Original Uninvoiced Query)

来源页面：

- https://open.yonyoucloud.com/#/doc-center/docDes/api?apiId=90dbf3a38c824d7c915a70c8dca96ad8&isOrigin=1&selectApiTab=open&from=&iframe=

机器可抓取的详情接口：

- https://open.yonyoucloud.com/iuap-ipaas-base/openPortal/api/getByVersionForTest/90dbf3a38c824d7c915a70c8dca96ad8/running?scene=open&isOrigin=1&isAjax=1

## 基本信息

- apiId：90dbf3a38c824d7c915a70c8dca96ad8
- API 类目：待开票明细
- 所属目录：开票申请单（Invoice Request）
- 产品：
- 更新时间：2026-04-14 15:52:52.000
- 请求方法：POST
- Content-Type：application/json
- 接口路径：/yonbip/tax/invoiceclient-web/api/invoice-will/result
- 完整调用地址：https://c2.yonyoucloud.com/iuap-api-gateway/yonbip/tax/invoiceclient-web/api/invoice-will/result
- 鉴权方式：access_token 作为 Query 参数传递（?access_token=）
- 当前状态：当前接口
- 请求字段数：Query 0 个，Body 6 个
- 返回字段数：114 个

## 对接要点

- 调用 URL：`https://c2.yonyoucloud.com/iuap-api-gateway/yonbip/tax/invoiceclient-web/api/invoice-will/result?access_token={access_token}`
- 调用方必须保存业务来源单号、发票请求流水号、请求报文、响应报文和状态查询结果，便于重试和对账。
- 开票、红冲、作废、驱动开票等写操作建议用业务唯一号做幂等控制；同一业务单不要生成多个不同流水号反复提交。
- 返回成功只代表接口调用成功，不一定代表税局或开票终态成功；涉及开票结果时必须再调用状态查询类接口确认。
- 详情接口返回字段说明可能为英文，字段名以开放平台原始字段为准。

## 调用模板

```bash
curl -X POST 'https://c2.yonyoucloud.com/iuap-api-gateway/yonbip/tax/invoiceclient-web/api/invoice-will/result?access_token=访问令牌' \
  -H 'Content-Type: application/json' \
  -d '{"data": {}}'
```

## 请求参数

### Query 参数

无。

> 注：开放平台网关调用时通常还需传递 `access_token`。

### Body 参数

1. `lyid`
   - 类型：string
   - 数组：否
   - 必填：否
   - 示例/默认值：`12215423`
   - 说明：Source Document No.

2. `djqqlsh`
   - 类型：string
   - 数组：否
   - 必填：否
   - 示例/默认值：`45345324524`
   - 说明：Document Request Serial Number; Document Request Serial Number and Source Document Number cannot both be empty

3. `orgCode`
   - 类型：string
   - 数组：否
   - 必填：是
   - 示例/默认值：`qd001`
   - 说明：Invoicing Site Code: Check in the Invoicing Site records;

4. `withInvoice`
   - 类型：string
   - 数组：否
   - 必填：否
   - 示例/默认值：`N`
   - 说明：Whether the query result includes invoice information. N - Not included; Y - Included.

5. `pageNum`
   - 类型：string
   - 数组：否
   - 必填：是
   - 示例/默认值：`1`
   - 说明：Page No.

6. `pageSize`
   - 类型：string
   - 数组：否
   - 必填：是
   - 示例/默认值：`15`
   - 说明：Number of records per page

## 请求示例

```text
Url: /ytqe8jhl/yonbip/tax/invoiceclient-web/api/invoice-will/result?access_token=访问令牌
Body: {
	"lyid": "12215423",
	"djqqlsh": "45345324524",
	"orgCode": "qd001",
	"withInvoice": "N",
	"pageNum": "1",
	"pageSize": "15"
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
   - 示例/默认值：`SUCCESS`
   - 说明：Operation Information

3. `data`
   - 类型：object
   - 数组：否
   - 必填：否
   - 说明：Data

4. `data.dtos`
   - 类型：object
   - 数组：是
   - 必填：否
   - 说明：Pending Invoice Detail Document Data

5. `data.dtos.accountNote`
   - 类型：string
   - 数组：否
   - 必填：否
   - 说明：Accounting Remarks

6. `data.dtos.accountStatus`
   - 类型：string
   - 数组：否
   - 必填：否
   - 说明：Accounting Status: 1 - Not Accounted 2 - Accounted

7. `data.dtos.accountTime`
   - 类型：string
   - 数组：否
   - 必填：否
   - 说明：Accounting Date yyyy-MM-dd

8. `data.dtos.accountUser`
   - 类型：string
   - 数组：否
   - 必填：否
   - 说明：Posted By

9. `data.dtos.accountVoucherNo`
   - 类型：string
   - 数组：否
   - 必填：否
   - 说明：Accounting Voucher Number

10. `data.dtos.bz`
   - 类型：string
   - 数组：否
   - 必填：否
   - 说明：Remarks

11. `data.dtos.djqqlsh`
   - 类型：string
   - 数组：否
   - 必填：否
   - 说明：Document Request Serial Number

12. `data.dtos.fhr`
   - 类型：string
   - 数组：否
   - 必填：否
   - 说明：Reviewed By

13. `data.dtos.zdzfbz`
   - 类型：string
   - 数组：否
   - 必填：否
   - 说明：Whole order cancellation flag, N: Not cancelled; Y: Cancelled; I: Cancelling; T: Terminated

14. `data.dtos.fplx`
   - 类型：string
   - 数组：否
   - 必填：否
   - 说明：1: VAT Electronic Normal Invoice;  
     2: VAT Electronic Special Invoice;  
     3: VAT Normal Invoice;  
     4: VAT Special Invoice, VAT Special Invoice (Motor Vehicle);  
     5: Unified Invoice for Motor Vehicle Sales;  
     8: VAT Electronic Normal Invoice (Refined Oil);  
     10: Refined Oil Normal Invoice;  
     11: Refined Oil Special Invoice;  
     15: Unified Invoice for Used Car Sales;  
     31: Fully Digitalized Special Invoice;  
     32: Fully Digitalized Normal Invoice;  
     33: Fully Digitalized Paper Invoice (VAT Special Invoice);  
     34: Fully Digitalized Paper Invoice (Normal Invoice);  
     35: Fully Digitalized Invoice (Airline Itinerary);  
     36: Fully Digitalized Paper Invoice (Unified Invoice for Motor Vehicle Sales);

15. `data.dtos.gmfDzdh`
   - 类型：string
   - 数组：否
   - 必填：否
   - 说明：Purchaser's Address and Phone Number

16. `data.dtos.gmfMc`
   - 类型：string
   - 数组：否
   - 必填：否
   - 说明：Buyer

17. `data.dtos.gmfNsrsbh`
   - 类型：string
   - 数组：否
   - 必填：否
   - 说明：Buyer Taxpayer ID No.

18. `data.dtos.gmfYhzh`
   - 类型：string
   - 数组：否
   - 必填：否
   - 说明：Purchaser's Bank Account

19. `data.dtos.hisJe`
   - 类型：BigDecimal
   - 数组：否
   - 必填：否
   - 说明：Invoiced Amount

20. `data.dtos.hisSe`
   - 类型：BigDecimal
   - 数组：否
   - 必填：否
   - 说明：Invoices Issued Tax Amount

21. `data.dtos.je`
   - 类型：BigDecimal
   - 数组：否
   - 必填：否
   - 说明：Document Amount

22. `data.dtos.jshj`
   - 类型：BigDecimal
   - 数组：否
   - 必填：否
   - 说明：Amount Including Tax

23. `data.dtos.kpr`
   - 类型：string
   - 数组：否
   - 必填：否
   - 说明：Billed By

24. `data.dtos.lyid`
   - 类型：string
   - 数组：否
   - 必填：否
   - 说明：Document No.

25. `data.dtos.orgName`
   - 类型：string
   - 数组：否
   - 必填：否
   - 说明：Invoicing Site Name

26. `data.dtos.se`
   - 类型：BigDecimal
   - 数组：否
   - 必填：否
   - 说明：Tax Amount

27. `data.dtos.lc`
   - 类型：int
   - 数组：否
   - 必填：否
   - 说明：Copy Number 2 - Duplicate 3 - Triplicate 5 - Quintuplicate

28. `data.dtos.skr`
   - 类型：string
   - 数组：否
   - 必填：否
   - 说明：Payee

29. `data.dtos.unJe`
   - 类型：BigDecimal
   - 数组：否
   - 必填：否
   - 说明：Pending Invoiced Amount

30. `data.dtos.xsfDzdh`
   - 类型：string
   - 数组：否
   - 必填：否
   - 说明：Seller Address & Telephone

31. `data.dtos.xsfNsrsbh`
   - 类型：string
   - 数组：否
   - 必填：否
   - 说明：Seller Taxpayer ID No.

32. `data.dtos.xsfYhzh`
   - 类型：string
   - 数组：否
   - 必填：否
   - 说明：Seller Bank Account No.

33. `data.dtos.zdrq`
   - 类型：string
   - 数组：否
   - 必填：否
   - 说明：Document Date; yyyy-MM-dd

34. `data.dtos.xsfMc`
   - 类型：string
   - 数组：否
   - 必填：否
   - 说明：Seller Name

35. `data.dtos.departmentId`
   - 类型：string
   - 数组：否
   - 必填：否
   - 说明：Application department ID

36. `data.dtos.invoiceWillBs`
   - 类型：object
   - 数组：是
   - 必填：否
   - 说明：Sub-table Data

37. `data.dtos.invoiceWillBs.dw`
   - 类型：string
   - 数组：否
   - 必填：否
   - 说明：Unit

38. `data.dtos.invoiceWillBs.hh`
   - 类型：string
   - 数组：否
   - 必填：否
   - 说明：Line No.

39. `data.dtos.invoiceWillBs.hisSe`
   - 类型：BigDecimal
   - 数组：否
   - 必填：否
   - 说明：Invoiced Amount

40. `data.dtos.invoiceWillBs.hisJshj`
   - 类型：BigDecimal
   - 数组：否
   - 必填：否
   - 说明：Total Amount Including Tax for Invoices Issued

41. `data.dtos.invoiceWillBs.se`
   - 类型：BigDecimal
   - 数组：否
   - 必填：否
   - 说明：Tax Amount

42. `data.dtos.invoiceWillBs.sl`
   - 类型：BigDecimal
   - 数组：否
   - 必填：否
   - 说明：Tax Rate

43. `data.dtos.invoiceWillBs.spbm`
   - 类型：string
   - 数组：否
   - 必填：否
   - 说明：Product Code

44. `data.dtos.invoiceWillBs.spssflbm`
   - 类型：string
   - 数组：否
   - 必填：否
   - 说明：Product Tax Category Code

45. `data.dtos.invoiceWillBs.xmje`
   - 类型：BigDecimal
   - 数组：否
   - 必填：否
   - 说明：Item Amount

46. `data.dtos.invoiceWillBs.xmjshj`
   - 类型：string
   - 数组：否
   - 必填：否
   - 说明：Item Amount Including Tax

47. `data.dtos.invoiceWillBs.xmmc`
   - 类型：string
   - 数组：否
   - 必填：否
   - 说明：Project Name

48. `data.dtos.invoiceWillBs.ggxh`
   - 类型：string
   - 数组：否
   - 必填：否
   - 说明：Specification

49. `data.dtos.invoiceWillBs.records`
   - 类型：object
   - 数组：否
   - 必填：否
   - 说明：Invoices Issued Detail Reversal Data

50. `data.dtos.invoiceWillBs.records.bred`
   - 类型：string
   - 数组：否
   - 必填：否
   - 示例/默认值：`N`
   - 说明：Red Flush Status Y-Red Flushed N-Normal

51. `data.dtos.invoiceWillBs.records.fpDm`
   - 类型：string
   - 数组：否
   - 必填：否
   - 说明：Invoice Code

52. `data.dtos.invoiceWillBs.records.fpHm`
   - 类型：string
   - 数组：否
   - 必填：否
   - 说明：Invoice No.

53. `data.dtos.invoiceWillBs.records.fplx`
   - 类型：string
   - 数组：否
   - 必填：否
   - 说明：Invoice Type; 1: VAT Electronic Normal Invoice; 2: VAT Electronic Special Invoice; 3: VAT Normal Invoice; 4:
     VAT Special Invoice; 8: VAT Electronic Normal Invoice (Refined Oil); 9: Refined Oil Normal Invoice (Roll); 10:
     Refined Oil Normal Invoice; 11: Refined Oil Special Invoice; 12: VAT Normal Invoice (Roll)

54. `data.dtos.invoiceWillBs.records.fpqqlsh`
   - 类型：string
   - 数组：否
   - 必填：否
   - 说明：Invoice Request SN

55. `data.dtos.invoiceWillBs.records.hh`
   - 类型：string
   - 数组：否
   - 必填：否
   - 说明：Line No.

56. `data.dtos.invoiceWillBs.records.se`
   - 类型：BigDecimal
   - 数组：否
   - 必填：否
   - 说明：Tax Amount

57. `data.dtos.invoiceWillBs.records.sl`
   - 类型：BigDecimal
   - 数组：否
   - 必填：否
   - 说明：Tax Rate

58. `data.dtos.invoiceWillBs.records.status`
   - 类型：string
   - 数组：否
   - 必填：否
   - 说明：Invoice Status 1-Pending Invoice 2-Invoicing 3-Invoicing Failed 4-Invoicing Successful

59. `data.dtos.invoiceWillBs.records.xmje`
   - 类型：number
   - 数组：否
   - 必填：否
   - 说明：Item Amount

60. `data.dtos.invoiceWillBs.records.xmjshj`
   - 类型：number
   - 数组：否
   - 必填：否
   - 说明：Item Amount Including Tax

61. `data.dtos.invoiceWillBs.records.zfbz`
   - 类型：string
   - 数组：否
   - 必填：否
   - 说明：Is it voided? Y = Voided, N = Not voided

62. `data.dtos.invoiceWillBs.records.kprq`
   - 类型：date
   - 数组：否
   - 必填：否
   - 说明：Invoice Date

63. `data.dtos.invoiceWillBs.records.sjkpje`
   - 类型：number
   - 数组：否
   - 必填：否
   - 说明：实际开票金额

64. `data.dtos.invoiceWillBs.records.sjkpse`
   - 类型：number
   - 数组：否
   - 必填：否
   - 说明：实际开票税额

65. `data.dtos.invoiceWillBs.xmhsdj`
   - 类型：BigDecimal
   - 数组：否
   - 必填：否
   - 说明：Project Unit Price Including Tax

66. `data.dtos.invoiceWillBs.hisSpsl`
   - 类型：int
   - 数组：否
   - 必填：否
   - 说明：Invoiced Quantity

67. `data.dtos.invoiceWillBs.defineTerm`
   - 类型：object
   - 数组：是
   - 必填：否
   - 说明：feature

68. `data.dtos.invoiceWillBs.defineTerm.code`
   - 类型：string
   - 数组：否
   - 必填：否
   - 说明：feature code

69. `data.dtos.sqbm`
   - 类型：string
   - 数组：否
   - 必填：否
   - 说明：Application Department

70. `data.dtos.applyUserId`
   - 类型：string
   - 数组：否
   - 必填：否
   - 说明：Applicant ID

71. `data.dtos.diworkOrgId`
   - 类型：string
   - 数组：否
   - 必填：否
   - 说明：Tax organization ID

72. `data.dtos.lydjh`
   - 类型：string
   - 数组：否
   - 必填：否
   - 说明：Business source document number

73. `data.dtos.lyBillTypeId`
   - 类型：string
   - 数组：否
   - 必填：否
   - 说明：Source Document Type ID

74. `data.dtos.tspz`
   - 类型：string
   - 数组：否
   - 必填：否
   - 说明：Special ticket types. 2. Special invoice for fuel value-added tax, 8. Sales of agricultural products, 9.
     Purchase of agricultural products, 11. Tobacco invoice, 12. Motor vehicle invoice, 14. Finished oil invoice,
     DK agent invoice, 16. Mineral product invoice, E01- Finished oil invoice, E02- Rare earth invoice, E03-
     Construction service invoice, E04- Freight transportation, E05- Real estate sales, E06- Real estate leasing
     service invoice, E07- Collection of vehicle and vessel tax, E09- Passenger transportation, E12- Sales of
     self-produced agricultural products, E14- Motor vehicles, E16- Purchase of agricultural products, E17-
     Photovoltaic acquisition, E18- Cigarette invoice, E22- Electronic itinerary, E32- Electronic cigarettes

75. `data.dtos.einvoiceShowSkrShr`
   - 类型：string
   - 数组：否
   - 必填：否
   - 说明：Does the electronic invoice (non paper invoice) display the payee and reviewer. 0: Do not display 1: Only
     display payee 2: Only display reviewer 3: Both payee and reviewer are displayed“

76. `data.dtos.zdybz`
   - 类型：string
   - 数组：否
   - 必填：否
   - 说明：Remarks on the application form

77. `data.dtos.revemail`
   - 类型：string
   - 数组：否
   - 必填：否
   - 说明：Ticket receiving email

78. `data.dtos.revphone`
   - 类型：string
   - 数组：否
   - 必填：否
   - 说明：Ticket receiving mobile phone

79. `data.dtos.gmfDz`
   - 类型：string
   - 数组：否
   - 必填：否
   - 说明：Buyer's address (digital invoice)

80. `data.dtos.gmfDh`
   - 类型：string
   - 数组：否
   - 必填：否
   - 说明：Buyer's phone number (digital invoice)

81. `data.dtos.einvoiceShowGxfDzDh`
   - 类型：string
   - 数组：否
   - 必填：否
   - 说明：Does the electronic invoice display the buyer's address and phone number? 0: Not displayed. 1: Only display
     the seller's address and phone number. 2: Only display the buyer's address and phone number. 3: Both the
     buyer's address and phone number are displayed

82. `data.dtos.gmfYh`
   - 类型：string
   - 数组：否
   - 必填：否
   - 说明：Buyer's bank name (digital invoice)

83. `data.dtos.gmfZh`
   - 类型：string
   - 数组：否
   - 必填：否
   - 说明：Buyer's account (digital invoice)

84. `data.dtos.einvoiceShowGxfYhZh`
   - 类型：string
   - 数组：否
   - 必填：否
   - 说明：Does the electronic invoice display the buyer's bank and account number? 0: Not displayed. 1: Only display the
     seller's bank and account number. 2: Only display the buyer's bank and account number. 3: Both the buyer's
     bank and account number are displayed

85. `data.dtos.zrrbs`
   - 类型：string
   - 数组：否
   - 必填：否
   - 说明：Whether to issue invoices to natural persons. Y: Yes, it is

86. `data.dtos.zjlx`
   - 类型：string
   - 数组：否
   - 必填：否
   - 说明：Types of natural person identification documents

87. `data.dtos.zjhm`
   - 类型：string
   - 数组：否
   - 必填：否
   - 说明：ID number

88. `data.dtos.guoji`
   - 类型：string
   - 数组：否
   - 必填：否
   - 说明：Nationality code

89. `data.dtos.xsfDz`
   - 类型：string
   - 数组：否
   - 必填：否
   - 说明：Seller's address

90. `data.dtos.xsfDh`
   - 类型：string
   - 数组：否
   - 必填：否
   - 说明：Sales phone number

91. `data.dtos.verifyState`
   - 类型：string
   - 数组：否
   - 必填：否
   - 说明：Approval status. 0-Open Status 1-Under Review 2-Approved 3-Terminated Status 4-Rejected to Document Creation

92. `data.dtos.invoiceState`
   - 类型：string
   - 数组：否
   - 必填：否
   - 说明：Invoice status. 1. Unlicensed 2. Partially invoiced 3. Fully invoiced

93. `data.dtos.applyType`
   - 类型：string
   - 数组：否
   - 必填：否
   - 说明：Application Form Type 1- Blue Ticket Application Form 2- Red Ticket Application Form

94. `data.dtos.lylx`
   - 类型：string
   - 数组：否
   - 必填：否
   - 说明：Source type. 1. Manual issuance 2. Interface input 3. File import

95. `data.dtos.defineTerm`
   - 类型：object
   - 数组：是
   - 必填：否
   - 说明：feature

96. `data.dtos.defineTerm.code`
   - 类型：string
   - 数组：否
   - 必填：否
   - 说明：feature code

97. `data.dtos.sqr`
   - 类型：string
   - 数组：否
   - 必填：否
   - 说明：applicant

98. `data.totalCount`
   - 类型：int
   - 数组：否
   - 必填：否
   - 说明：Total Record Count

99. `data.invoices`
   - 类型：object
   - 数组：是
   - 必填：否
   - 说明：invoice data

100. `data.invoices.bsstatus`
   - 类型：string
   - 数组：否
   - 必填：否
   - 示例/默认值：`0`
   - 说明：Invoice status: 1-Pending invoicing (requiring invoicing confirmation from the invoicing personnel);
     2-Invoicing in progress; 3-Invoicing failed; 4-Invoicing successful. 0-Layout successful; 1-Layout failed
     (Layout failed, no PDF in the data)

101. `data.invoices.smsState`
   - 类型：string
   - 数组：否
   - 必填：否
   - 示例/默认值：`0`
   - 说明：0-Not delivered 1-Delivery failed 2-Delivery successful. Delivery successful only indicates that the SMS
     content has been successfully pushed to the SMS operator and the sending action has been completed. It cannot
     identify whether the SMS has been successfully sent and received by the recipient

102. `data.invoices.emailState`
   - 类型：string
   - 数组：否
   - 必填：否
   - 示例/默认值：`0`
   - 说明：0-Not delivered 1-Delivery failed 2-Delivery successful Successful delivery only indicates that the email
     content has been successfully pushed to the email server and the sending action has been completed. It does
     not confirm that the email has been successfully sent and received by the recipient

103. `data.invoices.fpDm`
   - 类型：string
   - 数组：否
   - 必填：否
   - 示例/默认值：`123333`
   - 说明：Invoice Code

104. `data.invoices.fpHm`
   - 类型：string
   - 数组：否
   - 必填：否
   - 示例/默认值：`1234567890`
   - 说明：Invoice Number

105. `data.invoices.shareUrl`
   - 类型：string
   - 数组：否
   - 必填：否
   - 示例/默认值：`http://bip-pre.yonyoucloud.com/`
   - 说明：Invoice Sharing Address

106. `data.invoices.shareCode`
   - 类型：string
   - 数组：否
   - 必填：否
   - 示例/默认值：`1234`
   - 说明：Invoice sharing extraction code

107. `data.invoices.pdfurl`
   - 类型：string
   - 数组：否
   - 必填：否
   - 说明：PDF format file download link

108. `data.invoices.ofdurl`
   - 类型：string
   - 数组：否
   - 必填：否
   - 说明：OFD layout file download link

109. `data.invoices.xmlurl`
   - 类型：string
   - 数组：否
   - 必填：否
   - 说明：XML layout file download link

110. `data.invoices.hjje`
   - 类型：number
   - 数组：否
   - 必填：否
   - 示例/默认值：`1.23`
   - 说明：Total invoice amount

111. `data.invoices.hjse`
   - 类型：number
   - 数组：否
   - 必填：否
   - 示例/默认值：`1.23`
   - 说明：Invoice total tax amount

112. `data.invoices.jshj`
   - 类型：number
   - 数组：否
   - 必填：否
   - 示例/默认值：`1.23`
   - 说明：Total invoice price and tax

113. `data.bustype`
   - 类型：string
   - 数组：否
   - 必填：否
   - 说明：Transaction Type ID

114. `data.bustypeCode`
   - 类型：string
   - 数组：否
   - 必填：否
   - 说明：Transaction Type Code

## 返回示例

### 成功示例

无。

### 失败示例

无。

## 错误码

| 错误码 | 错误说明 | 处理建议 |
| --- | --- | --- |
| 1001 |  |  |


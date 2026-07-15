# Invoice Application Document Addition - Batch (Original Uninvoiced Management Add Document (Batch))

来源页面：

- https://open.yonyoucloud.com/#/doc-center/docDes/api?apiId=1847870792639971334&isOrigin=1&selectApiTab=open&from=&iframe=

机器可抓取的详情接口：

- https://open.yonyoucloud.com/iuap-ipaas-base/openPortal/api/getByVersionForTest/1847870792639971334/running?scene=open&isOrigin=1&isAjax=1

## 基本信息

- apiId：1847870792639971334
- API 类目：待开票明细
- 所属目录：开票申请单（Invoice Request）
- 产品：
- 更新时间：2026-06-10 18:35:46.000
- 请求方法：POST
- Content-Type：application/json
- 接口路径：/yonbip/tax/output-tax/api/invoice-will/batch-save
- 完整调用地址：https://c2.yonyoucloud.com/iuap-api-gateway/yonbip/tax/output-tax/api/invoice-will/batch-save
- 鉴权方式：access_token 作为 Query 参数传递（?access_token=）
- 当前状态：当前接口
- 请求字段数：Query 0 个，Body 193 个
- 返回字段数：2 个

## 对接要点

- 调用 URL：`https://c2.yonyoucloud.com/iuap-api-gateway/yonbip/tax/output-tax/api/invoice-will/batch-save?access_token={access_token}`
- 调用方必须保存业务来源单号、发票请求流水号、请求报文、响应报文和状态查询结果，便于重试和对账。
- 开票、红冲、作废、驱动开票等写操作建议用业务唯一号做幂等控制；同一业务单不要生成多个不同流水号反复提交。
- 返回成功只代表接口调用成功，不一定代表税局或开票终态成功；涉及开票结果时必须再调用状态查询类接口确认。
- 详情接口返回字段说明可能为英文，字段名以开放平台原始字段为准。

## 调用模板

```bash
curl -X POST 'https://c2.yonyoucloud.com/iuap-api-gateway/yonbip/tax/output-tax/api/invoice-will/batch-save?access_token=访问令牌' \
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
   - 示例/默认值：`13132`
   - 说明：Source ID

2. `lydjh`
   - 类型：string
   - 数组：否
   - 必填：否
   - 示例/默认值：`5232`
   - 说明：Source Document Number

3. `lyBillTypeId`
   - 类型：string
   - 数组：否
   - 必填：否
   - 示例/默认值：`121323`
   - 说明：Source Document Type ID

4. `lylx`
   - 类型：string
   - 数组：否
   - 必填：否
   - 示例/默认值：`1`
   - 说明：Source Type 1-Manual Issuance; 2-Interface Input; 3-File Import; 4-QR Code Scan; 5-WeChat Input; 6-Quick
     Invoicing; 7-Alipay Input; 8-Pinduoduo; 9-Mini Program; w-Pending Invoice Details; v-Invoice Application
     Document; n-NCC Input

5. `djqqlsh`
   - 类型：string
   - 数组：否
   - 必填：是
   - 示例/默认值：`51321513203`
   - 说明：Document Request Serial Number

6. `orgCode`
   - 类型：string
   - 数组：否
   - 必填：是
   - 示例/默认值：`2332`
   - 说明：Invoicing Site Code, check in the Invoicing Site records;

7. `gmfMc`
   - 类型：string
   - 数组：否
   - 必填：是
   - 示例/默认值：`Buyer Name`
   - 说明：Buyer

8. `gmfNsrsbh`
   - 类型：string
   - 数组：否
   - 必填：否
   - 示例/默认值：`1232132123`
   - 说明：Buyer Taxpayer ID No.

9. `gmfYhzh`
   - 类型：string
   - 数组：否
   - 必填：否
   - 示例/默认值：`Bank of Beijing 1231`
   - 说明：Buyer’s Bank Account

10. `gmfDzdh`
   - 类型：string
   - 数组：否
   - 必填：否
   - 示例/默认值：`Haidian 123`
   - 说明：Purchaser's Address and Phone Number

11. `gmfDz`
   - 类型：string
   - 数组：否
   - 必填：否
   - 示例/默认值：`Address`
   - 说明：Purchaser Address (For Digital Electronics Use Only)

12. `gmfDh`
   - 类型：string
   - 数组：否
   - 必填：否
   - 示例/默认值：`15532326588`
   - 说明：Buyer Phone (For Digital Electronics Only)

13. `gmfYh`
   - 类型：string
   - 数组：否
   - 必填：否
   - 示例/默认值：`Bank`
   - 说明：Purchaser's Bank (For Digital Transactions Only)

14. `gmfZh`
   - 类型：string
   - 数组：否
   - 必填：否
   - 示例/默认值：`4123123453`
   - 说明：Purchaser Account (For Digital Electronics Only)

15. `xsfNsrsbh`
   - 类型：string
   - 数组：否
   - 必填：否
   - 示例/默认值：`12315161323`
   - 说明：Seller Taxpayer ID No.

16. `xsfMc`
   - 类型：string
   - 数组：否
   - 必填：否
   - 示例/默认值：`Seller Name`
   - 说明：Seller Name

17. `xsfDzdh`
   - 类型：string
   - 数组：否
   - 必填：否
   - 示例/默认值：`Beijing 12232322020`
   - 说明：Seller Address & Telephone

18. `xsfYhzh`
   - 类型：string
   - 数组：否
   - 必填：否
   - 示例/默认值：`Bank of Beijing 1231`
   - 说明：Seller Bank Account No.

19. `xsfDz`
   - 类型：string
   - 数组：否
   - 必填：否
   - 示例/默认值：`Beijing`
   - 说明：Seller Address (For Digital and Electrical Use Only)

20. `xsfDh`
   - 类型：string
   - 数组：否
   - 必填：否
   - 示例/默认值：`15532320202`
   - 说明：Seller's Phone Number (For Digital Electricity Use)

21. `xsfYh`
   - 类型：string
   - 数组：否
   - 必填：否
   - 示例/默认值：`Bank of Beijing`
   - 说明：Seller's Bank (For Digital Transactions Only)

22. `xsfZh`
   - 类型：string
   - 数组：否
   - 必填：否
   - 示例/默认值：`232`
   - 说明：Seller Account (Digital Electronics Exclusive)

23. `lc`
   - 类型：string
   - 数组：否
   - 必填：否
   - 示例/默认值：`2`
   - 说明：Copy Number: 2 - Duplicate Copy 3 - Triplicate Copy 5 - Five Copies

24. `bz`
   - 类型：string
   - 数组：否
   - 必填：否
   - 示例/默认值：`123`
   - 说明：Remarks

25. `fplx`
   - 类型：string
   - 数组：否
   - 必填：否
   - 示例/默认值：`1`
   - 说明：Invoice Type:  
     1: VAT Electronic Normal Invoice;  
     2: VAT Electronic Special Invoice;  
     3: VAT Normal Invoice;  
     4: VAT Special Invoice;  
     5: Unified Invoice for Motor Vehicle Sales;  
     8: VAT Electronic Normal Invoice (Refined Oil);  
     10: Refined Oil Normal Invoice;  
     11: Refined Oil Special Invoice;  
     15: Unified Invoice for Second-hand Vehicle Sales;  
     31: Fully Digitalized E-invoice Special Invoice;  
     32: Fully Digitalized E-invoice Normal Invoice;  
     33: Fully Digitalized Paper Invoice (VAT Special Invoice);  
     34: Fully Digitalized Paper Invoice (Normal Invoice);  
     36: Fully Digitalized Paper Invoice (Unified Invoice for Motor Vehicle Sales);  
     83: Fully Digitalized E-invoice (Unified Invoice for Motor Vehicle Sales);  
     84: Fully Digitalized E-invoice (Unified Invoice for Second-hand Vehicle Sales);  
     88: Fully Digitalized Paper Invoice (Unified Invoice for Second-hand Vehicle Sales);  
     Optional, default is 1

26. `zdrq`
   - 类型：string
   - 数组：否
   - 必填：是
   - 示例/默认值：`2023-10-10`
   - 说明：Document Date: Format yyyy-MM-dd

27. `revurl1`
   - 类型：string
   - 数组：否
   - 必填：否
   - 示例/默认值：`https://www.baidu.com`
   - 说明：Pending Invoice Details Result Return Address

28. `revemail`
   - 类型：string
   - 数组：否
   - 必填：否
   - 示例/默认值：`1414xxx@qq.com`
   - 说明：Contact Email

29. `skr`
   - 类型：string
   - 数组：否
   - 必填：否
   - 示例/默认值：`Payee`
   - 说明：Payee

30. `fhr`
   - 类型：string
   - 数组：否
   - 必填：否
   - 示例/默认值：`Reviewed By`
   - 说明：Reviewed By

31. `kpr`
   - 类型：string
   - 数组：否
   - 必填：否
   - 示例/默认值：`Preface Author`
   - 说明：Billed By

32. `tsyw`
   - 类型：string
   - 数组：否
   - 必填：否
   - 示例/默认值：`0`
   - 说明：Special Business  
     0 - General  
     2 - Fuel VAT Special Invoice  
     8 - Agricultural Products Sales  
     9 - Agricultural Products Purchase  
     11 - Tobacco Invoice  
     12 - Motor Vehicle Invoice  
     14 - Refined Oil Invoice  
     DK - Invoice Issued on Behalf  
     16 - Mineral Products Invoice  
     E01 - Refined Oil Invoice  
     E02 - Rare Earth Invoice  
     E03 - Construction Service Invoice  
     E04 - Goods Transportation  
     E05 - Real Estate Sales  
     E06 - Real Estate Leasing Service Invoice  
     E07 - Collection of Vehicle and Vessel Tax  
     E09 - Passenger Transportation  
     E12 - Self-produced Agricultural Products Sales  
     E14 - Motor Vehicle  
     E16 - Agricultural Products Purchase  
     E17 - Photovoltaic Purchase  
     E18 - Cigarette Invoice  
     E24 - Scrap Product Purchase  
     E32 - Electronic Cigarette

33. `revphone`
   - 类型：string
   - 数组：否
   - 必填：否
   - 示例/默认值：`1553232555`
   - 说明：Contact Mobile

34. `secretLevelName`
   - 类型：string
   - 数组：否
   - 必填：否
   - 示例/默认值：`Public`
   - 说明：Security Level Name

35. `autoMake`
   - 类型：string
   - 数组：否
   - 必填：否
   - 示例/默认值：`true`
   - 说明：Auto Invoice Issuance  
     true: Auto issue  
     false: Do not auto issue

36. `einvoiceShowSkrShr`
   - 类型：string
   - 数组：否
   - 必填：否
   - 示例/默认值：`N`
   - 说明：Electronic Invoice (Non-paper Invoice) Whether to Display Payee and Reviewer. 0: Do not display 1: Display
     Payee only 2: Display Reviewer only 3: Display both Payee and Reviewer

37. `einvoiceShowGxfYhZh`
   - 类型：string
   - 数组：否
   - 必填：否
   - 示例/默认值：`N`
   - 说明：Whether the digital invoice displays the buyer's and seller's bank and account information: 0: Do not display
     1: Display only the seller's bank and account 2: Display only the buyer's bank and account 3: Display both
     buyer's and seller's bank and account

38. `einvoiceShowGxfDzDh`
   - 类型：string
   - 数组：否
   - 必填：否
   - 示例/默认值：`N`
   - 说明：Whether the electronic invoice displays the buyer's and seller's address and phone number: 0: Do not display
     1: Display only the seller's address and phone number 2: Display only the buyer's address and phone number 3:
     Display both buyer's and seller's address and phone number

39. `zrrbs`
   - 类型：string
   - 数组：否
   - 必填：否
   - 示例/默认值：`N`
   - 说明：Buyer natural person flag. Used only when issuing electronic general VAT invoices. If the invoice recipient
     (Invoice Header) is a natural person and requires the invoice to be collected and displayed in the personal
     invoice folder, the name and ID number (natural person taxpayer identification number) must be provided, and
     this parameter should be set to Y; if the invoice recipient (Invoice Header) is an individual business, the
     unified social credit code or taxpayer identification number must be provided, and this parameter should be
     set to N.

40. `zjlx`
   - 类型：string
   - 数组：否
   - 必填：否
   - 示例/默认值：`201`
   - 说明：Document Type Code. Applicable to supplementary information for natural persons when the natural person
     identifier is Y. Refer to the Traveler Document Type Code enumeration. Mandatory when acquisition invoice or
     the fields ZJHM or GUOJI have values.

41. `zjhm`
   - 类型：string
   - 数组：否
   - 必填：否
   - 示例/默认值：`120110202101111111`
   - 说明：Identification Number, applicable to natural person supplementary information when the natural person
     identifier is marked as Y. Mandatory when the acquisition invoice or the fields ZJLX and GUOJI have values.

42. `guoji`
   - 类型：string
   - 数组：否
   - 必填：否
   - 示例/默认值：`156`
   - 说明：Nationality Code, applicable to natural persons when the identifier is marked as Y, refer to the National
     Region Code enumeration. Mandatory when acquisition invoice or both ZJLX and ZJHM fields have values.

43. `dfgtgmbz`
   - 类型：string
   - 数组：否
   - 必填：否
   - 示例/默认值：`N`
   - 说明：Multi-party Joint Purchase Indicator  
     Y: Multi-party Joint Purchase  
     N: Non-Multi-party Joint Purchase

44. `mqkfrl`
   - 类型：string
   - 数组：否
   - 必填：否
   - 示例/默认值：`12`
   - 说明：Calorific value per kilogram of coal. Mandatory if the total tax-excluded amount of coal products exceeds ten
     million.

45. `gjql`
   - 类型：string
   - 数组：否
   - 必填：否
   - 示例/默认值：`12`
   - 说明：Total sulfur content on a dry basis. Mandatory if the total tax-exclusive amount of coal products exceeds ten
     million.

46. `gzwhjhff`
   - 类型：string
   - 数组：否
   - 必填：否
   - 示例/默认值：`12`
   - 说明：Dry ash-free volatile matter. For coal products, total tax-exclusive base exceeding ten million must be filled
     in.

47. `yfpDm`
   - 类型：string
   - 数组：否
   - 必填：否
   - 说明：Blue Invoice Number (Invoice Number Being Red-Flush Corrected)

48. `yfpHm`
   - 类型：string
   - 数组：否
   - 必填：否
   - 说明：Blue Invoice Number (Invoice Number Being Red-Voided)

49. `hzxxbbh`
   - 类型：string
   - 数组：否
   - 必填：否
   - 说明：Red Entry Information Table Number (Required for Special Invoice Red Reversal)

50. `hcyy`
   - 类型：string
   - 数组：否
   - 必填：否
   - 说明：Red Flush Reason (1 Sales Return 2 Invoice Error 3 Service Termination 4 Sales Allowance)

51. `zsfs`
   - 类型：string
   - 数组：否
   - 必填：否
   - 示例/默认值：`0`
   - 说明：Taxation Method. 0 - Normal Taxation 2 - Tax on Difference / Invoice on Difference 3 - Full Amount Invoicing

52. `kqysssxbgglbm`
   - 类型：string
   - 数组：否
   - 必填：否
   - 示例/默认值：`3333`
   - 说明：Cross-Region Tax-Related Matters Filing Management Number

53. `bxdh`
   - 类型：string
   - 数组：否
   - 必填：否
   - 示例/默认值：`33`
   - 说明：Insurance Policy Number

54. `cphcbdjh`
   - 类型：string
   - 数组：否
   - 必填：否
   - 示例/默认值：`Yu MUX555`
   - 说明：License Plate Number / Vessel Registration Number

55. `skssq`
   - 类型：string
   - 数组：否
   - 必填：否
   - 示例/默认值：`2023-01 2023-03`
   - 说明：Tax Period yyyy-MM + space + yyyy-MM

56. `dsccsje`
   - 类型：string
   - 数组：否
   - 必填：否
   - 示例/默认值：`3`
   - 说明：Amount of Vehicle and Vessel Tax Collected on Behalf

57. `znj`
   - 类型：string
   - 数组：否
   - 必填：否
   - 示例/默认值：`111`
   - 说明：Late fee

58. `jehj`
   - 类型：string
   - 数组：否
   - 必填：否
   - 示例/默认值：`1`
   - 说明：Total Amount

59. `cjh`
   - 类型：string
   - 数组：否
   - 必填：否
   - 示例/默认值：`233134133384938`
   - 说明：Vehicle Identification Number / Chassis Number

60. `scrapProdSaleType`
   - 类型：string
   - 数组：否
   - 必填：否
   - 示例/默认值：`01`
   - 说明：Scrap Product Sales Type  
     01 - Sale of self-used scrap products  
     02 - Sale of purchased scrap products

61. `cpyqylb`
   - 类型：string
   - 数组：否
   - 必填：否
   - 示例/默认值：`08`
   - 说明：Enterprise Category Code

62. `administrativeDivisionCode`
   - 类型：string
   - 数组：否
   - 必填：否
   - 示例/默认值：`440105`
   - 说明：Administrative Division Code

63. `subdistrictCode`
   - 类型：string
   - 数组：否
   - 必填：否
   - 示例/默认值：`440105001`
   - 说明：Subdistrict Code

64. `isTaxProfessionalServiceInvoiceItem`
   - 类型：string
   - 数组：否
   - 必填：否
   - 示例/默认值：`Y`
   - 说明：Is Tax Professional Service Invoice Item

65. `taxProServiceAgreementNo`
   - 类型：string
   - 数组：否
   - 必填：否
   - 说明：Tax Pro Service AgreementNo

66. `jazs`
   - 类型：string
   - 数组：否
   - 必填：否
   - 示例/默认值：`05`
   - 说明：Reduced Tax Levy Method Code

67. `ylywlsh`
   - 类型：string
   - 数组：否
   - 必填：否
   - 说明：Medical Service Serial Number

68. `hzxm`
   - 类型：string
   - 数组：否
   - 必填：否
   - 说明：Patient Name

69. `hzsfzjlxDm`
   - 类型：string
   - 数组：否
   - 必填：否
   - 说明：Patient Identity Document Type Code

70. `hzsfzjhm`
   - 类型：string
   - 数组：否
   - 必填：否
   - 说明：Patient Identity Document Number

71. `mzh`
   - 类型：string
   - 数组：否
   - 必填：否
   - 说明：Outpatient Number

72. `mzjzsj`
   - 类型：date
   - 数组：否
   - 必填：否
   - 说明：Outpatient Consultation Time

73. `blh`
   - 类型：string
   - 数组：否
   - 必填：否
   - 说明：Medical Record Number

74. `zyh`
   - 类型：string
   - 数组：否
   - 必填：否
   - 说明：Inpatient Number

75. `zykb`
   - 类型：string
   - 数组：否
   - 必填：否
   - 说明：Inpatient Department

76. `zysjq`
   - 类型：date
   - 数组：否
   - 必填：否
   - 说明：Admission Start Time

77. `zysjz`
   - 类型：date
   - 数组：否
   - 必填：否
   - 说明：Admission End Time

78. `yjje`
   - 类型：number
   - 数组：否
   - 必填：否
   - 说明：Prepaid Amount

79. `bjje`
   - 类型：number
   - 数组：否
   - 必填：否
   - 说明：Supplemental Payment Amount

80. `tfje`
   - 类型：number
   - 数组：否
   - 必填：否
   - 说明：Refund Amount

81. `yljglxDm`
   - 类型：string
   - 数组：否
   - 必填：否
   - 说明：Medical Institution Type Code

82. `qtyljglx`
   - 类型：string
   - 数组：否
   - 必填：否
   - 说明：Other Medical Institution Type

83. `yblxDm`
   - 类型：string
   - 数组：否
   - 必填：否
   - 说明：Medical Insurance Type Code

84. `qtyblx`
   - 类型：string
   - 数组：否
   - 必填：否
   - 说明：Other Medical Insurance Type

85. `ybbh`
   - 类型：string
   - 数组：否
   - 必填：否
   - 说明：Medical Insurance Number

86. `xbDm`
   - 类型：string
   - 数组：否
   - 必填：否
   - 说明：Sex

87. `ybtcjjzfje`
   - 类型：string
   - 数组：否
   - 必填：否
   - 说明：Medical Insurance Pool Fund Payment

88. `qtzfje`
   - 类型：string
   - 数组：否
   - 必填：否
   - 说明：Other Payment Amount

89. `grzhzfje`
   - 类型：string
   - 数组：否
   - 必填：否
   - 说明：Personal Account Payment Amount

90. `grxjzfje`
   - 类型：string
   - 数组：否
   - 必填：否
   - 说明：Cash Payment Amount

91. `grzfje`
   - 类型：string
   - 数组：否
   - 必填：否
   - 说明：Self-payment Amount

92. `grzfje1`
   - 类型：string
   - 数组：否
   - 必填：否
   - 说明：Self-funded Amount

93. `tspzs`
   - 类型：object
   - 数组：是
   - 必填：否
   - 说明：Special Electronic Invoice Types - Mandatory Transmission for Construction Services and Passenger
     Transportation, etc.

94. `tspzs.ysmxxh`
   - 类型：string
   - 数组：否
   - 必填：否
   - 示例/默认值：`1`
   - 说明：Shipping Detail Serial Number

95. `tspzs.ysgjzl`
   - 类型：string
   - 数组：否
   - 必填：否
   - 示例/默认值：`Rail Transportation`
   - 说明：Types of Transportation Tools. Railway Transportation Road Transportation Waterway Transportation Air
     Transportation Pipeline Transportation Other Transportation Tools

96. `tspzs.ysgjph`
   - 类型：string
   - 数组：否
   - 必填：否
   - 示例/默认值：`Jing A111111`
   - 说明：Transport Vehicle License Plate Number.

97. `tspzs.qyd`
   - 类型：string
   - 数组：否
   - 必填：否
   - 示例/默认值：`Beijing`
   - 说明：Place of Departure

98. `tspzs.ddd`
   - 类型：string
   - 数组：否
   - 必填：否
   - 示例/默认值：`Texas`
   - 说明：Destination

99. `tspzs.yshwmc`
   - 类型：string
   - 数组：否
   - 必填：否
   - 示例/默认值：`Apple`
   - 说明：Name of Transported Goods

100. `tspzs.cxr`
   - 类型：string
   - 数组：否
   - 必填：否
   - 示例/默认值：`Jack`
   - 说明：Traveler

101. `tspzs.chuxrq`
   - 类型：string
   - 数组：否
   - 必填：否
   - 示例/默认值：`2025-03-13`
   - 说明：Travel Date. Format yyyy-MM-dd

102. `tspzs.cxrzjlxDm`
   - 类型：string
   - 数组：否
   - 必填：否
   - 示例/默认值：`101`
   - 说明：Traveler Identification Document Type. Refer to FAQ Document: https://docs.qq.com/doc/DUG5MWWdUYnprZHRW?nlc=1

103. `tspzs.sfzjhm`
   - 类型：string
   - 数组：否
   - 必填：否
   - 示例/默认值：`371233333323333323`
   - 说明：ID Document Number

104. `tspzs.cfd`
   - 类型：string
   - 数组：否
   - 必填：否
   - 示例/默认值：`Beijing`
   - 说明：Passenger Departure Location

105. `tspzs.lkddd`
   - 类型：string
   - 数组：否
   - 必填：否
   - 示例/默认值：`Beijing`
   - 说明：Passenger Destination

106. `tspzs.zwdj`
   - 类型：string
   - 数组：否
   - 必填：否
   - 示例/默认值：`First Class Seat`
   - 说明：Seat Level. Refer to FAQ Document: https://docs.qq.com/doc/DUG5MWWdUYnprZHRW?nlc=1

107. `tspzs.jtgjlxDm`
   - 类型：string
   - 数组：否
   - 必填：否
   - 示例/默认值：`1`
   - 说明：Transportation Mode Type Code. 1: Airplane 2: Train 3: Long-distance Bus 4: Public Transit 5: Taxi 6: Car 7:
     Ship 9: Other

108. `tspzs.sszdyysxh`
   - 类型：string
   - 数组：否
   - 必填：否
   - 说明：Provincial & Municipal Custom Element Serial No

109. `tspzs.sszdyysmc`
   - 类型：string
   - 数组：否
   - 必填：否
   - 说明：Provincial & Municipal Custom Element Name

110. `tspzs.sszdyysnr`
   - 类型：string
   - 数组：否
   - 必填：否
   - 说明：Provincial & Municipal Custom Element Content

111. `bdcxsTspzs`
   - 类型：object
   - 数组：是
   - 必填：否
   - 说明：Special Digital Invoice Types - Mandatory for New Version Real Estate Sales and Real Estate Leasing.

112. `bdcxsTspzs.cxrxh`
   - 类型：string
   - 数组：否
   - 必填：否
   - 示例/默认值：`1`
   - 说明：Detail Serial Number, note that this number must have a one-to-one association with the positive line number
     in the detail rows.

113. `bdcxsTspzs.bdcdz`
   - 类型：string
   - 数组：否
   - 必填：否
   - 示例/默认值：`No. 5-4-1803, Binhe Park, Dongcheng District, Beijing Municipality`
   - 说明：Real Estate Address

114. `bdcxsTspzs.wqhtbabh`
   - 类型：string
   - 数组：否
   - 必填：否
   - 示例/默认值：`32333`
   - 说明：Online Contract Number

115. `bdcxsTspzs.tdzzsxmbh`
   - 类型：string
   - 数组：否
   - 必填：否
   - 示例/默认值：`123331`
   - 说明：Land VAT Project Number

116. `bdcxsTspzs.bdcdwdm`
   - 类型：string
   - 数组：否
   - 必填：否
   - 示例/默认值：`32333`
   - 说明：Real Estate Unit Code

117. `bdcxsTspzs.hdjsjg`
   - 类型：string
   - 数组：否
   - 必填：否
   - 示例/默认值：`3.2`
   - 说明：Approved Taxable Price. If it does not belong to the approved taxable real estate sales, it may be left blank.

118. `bdcxsTspzs.sjcjhsje`
   - 类型：string
   - 数组：否
   - 必填：否
   - 示例/默认值：`3.2`
   - 说明：Actual transaction amount including tax. Mandatory if taxed based on the approved taxable price.

119. `bdcxsTspzs.kdsbz`
   - 类型：string
   - 数组：否
   - 必填：否
   - 示例/默认值：`N`
   - 说明：Cross-region (City) Flag Y: Yes N: No

120. `bdcxsTspzs.cqzsbh`
   - 类型：string
   - 数组：否
   - 必填：否
   - 示例/默认值：`3233`
   - 说明：Property Certificate / Real Estate Ownership Certificate Number

121. `bdcxsTspzs.mjdw`
   - 类型：string
   - 数组：否
   - 必填：否
   - 示例/默认值：`square meters`
   - 说明：Area unit. Values: square kilometers, square meters, hectares, mu

122. `bdcxsTspzs.zlqq`
   - 类型：string
   - 数组：否
   - 必填：否
   - 示例/默认值：`2022-11-18`
   - 说明：Lease Start Date  e.g.: 2022-11-18

123. `bdcxsTspzs.zlqz`
   - 类型：string
   - 数组：否
   - 必填：否
   - 示例/默认值：`2023-11-18`
   - 说明：Lease End Date  e.g.: 2023-11-18

124. `bdcxsTspzs.cph`
   - 类型：string
   - 数组：否
   - 必填：否
   - 示例/默认值：`Jing A123456`
   - 说明：License Plate No.

125. `bdcxsTspzs.xh`
   - 类型：string
   - 数组：否
   - 必填：否
   - 说明：Detail Serial No.

126. `bdcxsTspzs.fymx`
   - 类型：string
   - 数组：否
   - 必填：否
   - 说明：Medical Expense Detail

127. `bdcxsTspzs.xmsl`
   - 类型：number
   - 数组：否
   - 必填：否
   - 说明：Quantity

128. `bdcxsTspzs.dw`
   - 类型：string
   - 数组：否
   - 必填：否
   - 说明：Unit

129. `bdcxsTspzs.je`
   - 类型：number
   - 数组：否
   - 必填：否
   - 说明：Amount

130. `bdcxsTspzs.se`
   - 类型：number
   - 数组：否
   - 必填：否
   - 说明：Tax Amount

131. `bdcxsTspzs.sl`
   - 类型：number
   - 数组：否
   - 必填：否
   - 说明：Tax Rate

132. `bdcxsTspzs.ylfwgbm`
   - 类型：string
   - 数组：否
   - 必填：否
   - 说明：Medical Service Standard Code

133. `bdcxsTspzs.bz`
   - 类型：string
   - 数组：否
   - 必填：否
   - 说明：Remark

134. `invoiceWillBs`
   - 类型：object
   - 数组：是
   - 必填：否
   - 说明：Project Detail Data

135. `invoiceWillBs.spbm`
   - 类型：string
   - 数组：否
   - 必填：否
   - 示例/默认值：`51153213`
   - 说明：Product Code: Matches the Product File, the product code in the file is unique

136. `invoiceWillBs.xmje`
   - 类型：number
   - 数组：否
   - 必填：否
   - 示例/默认值：`1.2`
   - 说明：Amount excluding tax. If empty, it is recalculated based on the project's total price including tax. If not
     empty, no calculation is performed.

137. `invoiceWillBs.xmjshj`
   - 类型：number
   - 数组：否
   - 必填：是
   - 示例/默认值：`50`
   - 说明：Item Amount Including Tax

138. `invoiceWillBs.hh`
   - 类型：string
   - 数组：否
   - 必填：是
   - 示例/默认值：`1`
   - 说明：Line No.

139. `invoiceWillBs.sl`
   - 类型：number
   - 数组：否
   - 必填：是
   - 示例/默认值：`0.13`
   - 说明：Tax Rate

140. `invoiceWillBs.xmmc`
   - 类型：string
   - 数组：否
   - 必填：是
   - 示例/默认值：`Project`
   - 说明：Project Name

141. `invoiceWillBs.xmdj`
   - 类型：number
   - 数组：否
   - 必填：否
   - 示例/默认值：`1.2`
   - 说明：Product unit price excluding tax. If empty, it is recalculated based on the project amount. If not empty, no
     calculation is performed.

142. `invoiceWillBs.xmhsdj`
   - 类型：number
   - 数组：否
   - 必填：否
   - 示例/默认值：`23`
   - 说明：Product Unit Price Including Tax

143. `invoiceWillBs.xmsl`
   - 类型：number
   - 数组：否
   - 必填：否
   - 示例/默认值：`23`
   - 说明：Number of Projects: Mandatory if the invoice is for refined oil, motor vehicles, or rare earth business types

144. `invoiceWillBs.se`
   - 类型：number
   - 数组：否
   - 必填：否
   - 示例/默认值：`20`
   - 说明：Tax Amount

145. `invoiceWillBs.spssflbm`
   - 类型：string
   - 数组：否
   - 必填：否
   - 示例/默认值：`213132`
   - 说明：Product Tax Category Code

146. `invoiceWillBs.dw`
   - 类型：string
   - 数组：否
   - 必填：否
   - 示例/默认值：`piece`
   - 说明：Unit: If it is a special invoice for rare earth, it is required and can only be "kilogram or ton"; if it is a
     special invoice for motor vehicles, it is required and can only be "vehicle".

147. `invoiceWillBs.ggxh`
   - 类型：string
   - 数组：否
   - 必填：否
   - 示例/默认值：`Specification`
   - 说明：Specification/Model: If it is a special invoice for motor vehicles and not a production enterprise, the
     Specification/Model field must be filled in. The data to be entered is the Vehicle Identification Number
     (VIN)/Chassis Number.

148. `invoiceWillBs.kce`
   - 类型：number
   - 数组：否
   - 必填：否
   - 示例/默认值：`0`
   - 说明：Deduction Amount

149. `invoiceWillBs.fphxz`
   - 类型：string
   - 数组：否
   - 必填：否
   - 示例/默认值：`0`
   - 说明：Invoice line nature. Discount line nature, 0 and blank: normal line; 1: discount line; 2: discounted line

150. `invoiceWillBs.zkhhh`
   - 类型：string
   - 数组：否
   - 必填：否
   - 示例/默认值：`1`
   - 说明：Discount Line Number

151. `invoiceWillBs.zkhbs`
   - 类型：string
   - 数组：否
   - 必填：否
   - 示例/默认值：`N`
   - 说明：Discount line indicator, Y includes discount lines when invoicing, N does not include discount lines when
     invoicing

152. `invoiceWillBs.zke`
   - 类型：number
   - 数组：否
   - 必填：否
   - 示例/默认值：`0`
   - 说明：Discount Amount

153. `invoiceWillBs.lslbs`
   - 类型：string
   - 数组：否
   - 必填：否
   - 示例/默认值：`0`
   - 说明：Zero Tax Rate Indicator. 0 - Export Tax Rebate 1 - Tax Exempt 2 - Non-Taxable 3 - Normal Zero Tax Rate

154. `invoiceWillBs.zzstsgl`
   - 类型：string
   - 数组：否
   - 必填：否
   - 示例/默认值：`Subject to 3% simplified tax collection`
   - 说明：Special VAT Management.

155. `invoiceWillBs.lymxid`
   - 类型：string
   - 数组：否
   - 必填：否
   - 示例/默认值：`12123213123`
   - 说明：Source Detail ID

156. `invoiceWillBs.lymxdjh`
   - 类型：string
   - 数组：否
   - 必填：否
   - 示例/默认值：`lymxdjh123`
   - 说明：Source Detail Document Number

157. `invoiceWillBs.defineTerm`
   - 类型：object
   - 数组：否
   - 必填：否
   - 示例/默认值：`{"invoice_bz":"123","invoice_remark":"Record"}`
   - 说明：Custom characteristics of the detail table (in key-value form, supports multiple entries, key is the
     characteristic code, value is the characteristic value)

158. `invoiceWillBs.detailMotor`
   - 类型：object
   - 数组：否
   - 必填：否
   - 说明：Detail Extended Property

159. `invoiceWillBs.detailMotor.mtzldm`
   - 类型：string
   - 数组：否
   - 必填：否
   - 示例/默认值：`0100`
   - 说明：Coal Type Code. For example, 0100: Government Guaranteed Coal; 0200: Long-term Contract Coal; 0300: Market
     Coal. Transfer the corresponding number only.

160. `invoiceWillBs.detailMotor.mtzldmxy`
   - 类型：string
   - 数组：否
   - 必填：否
   - 示例/默认值：`0201`
   - 说明：Coal Type Code Agreement. If it is 0200: Long-term Contract Coal, then transfer the subordinate agreement
     number, 0201: Agreement period less than half a year; 0202: Agreement period between half a year and one year;
     0203: Agreement period between one year and two years; 0204: Agreement period over two years

161. `invoiceWillBs.detailMotor.cllx`
   - 类型：string
   - 数组：否
   - 必填：否
   - 示例/默认值：`Vehicle Type`
   - 说明：Vehicle Type

162. `invoiceWillBs.detailMotor.cpxh`
   - 类型：string
   - 数组：否
   - 必填：否
   - 示例/默认值：`Brand/Model`
   - 说明：Brand/Model

163. `invoiceWillBs.detailMotor.cd`
   - 类型：string
   - 数组：否
   - 必填：否
   - 示例/默认值：`Place of Origin`
   - 说明：Place of Origin

164. `invoiceWillBs.detailMotor.hgzh`
   - 类型：string
   - 数组：否
   - 必填：否
   - 示例/默认值：`Certificate No.`
   - 说明：Certificate No.

165. `invoiceWillBs.detailMotor.jkzmsh`
   - 类型：string
   - 数组：否
   - 必填：否
   - 示例/默认值：`Import Certificate Number`
   - 说明：Import Certificate Number

166. `invoiceWillBs.detailMotor.sjdh`
   - 类型：string
   - 数组：否
   - 必填：否
   - 示例/默认值：`Inspection Certificate Number`
   - 说明：Inspection Certificate Number

167. `invoiceWillBs.detailMotor.fdjhm`
   - 类型：string
   - 数组：否
   - 必填：否
   - 示例/默认值：`Engine No.`
   - 说明：Engine No.

168. `invoiceWillBs.detailMotor.cjhm`
   - 类型：string
   - 数组：否
   - 必填：否
   - 示例/默认值：`Frame Number`
   - 说明：Frame Number

169. `invoiceWillBs.detailMotor.wspzh`
   - 类型：string
   - 数组：否
   - 必填：否
   - 示例/默认值：`Tax Payment Voucher Number`
   - 说明：Tax Payment Voucher Number

170. `invoiceWillBs.detailMotor.dunwei`
   - 类型：string
   - 数组：否
   - 必填：否
   - 示例/默认值：`Tonnage`
   - 说明：Tonnage

171. `invoiceWillBs.detailMotor.xcrs`
   - 类型：string
   - 数组：否
   - 必填：否
   - 示例/默认值：`Passenger Capacity Limit`
   - 说明：Passenger Capacity Limit

172. `invoiceWillBs.detailMotor.gmfsfzjlx`
   - 类型：string
   - 数组：否
   - 必填：否
   - 示例/默认值：`1`
   - 说明：Unified Motor Vehicle Sales Invoice Buyer Identification Document Type. 1 = Taxpayer Identification
     Number/Unified Social Credit Code/ID Number; 2 = Other Identification Number

173. `invoiceWillBs.detailMotor.xfdw`
   - 类型：string
   - 数组：否
   - 必填：否
   - 示例/默认值：`Seller Unit/Individual`
   - 说明：Seller Unit/Individual

174. `invoiceWillBs.detailMotor.xfhm`
   - 类型：string
   - 数组：否
   - 必填：否
   - 示例/默认值：`Used Car - Seller Unit Code/ID Number`
   - 说明：Used Car - Seller Unit Code/ID Number

175. `invoiceWillBs.detailMotor.xfdz`
   - 类型：string
   - 数组：否
   - 必填：否
   - 示例/默认值：`Seller's Unit/Individual Address`
   - 说明：Seller's Unit/Individual Address

176. `invoiceWillBs.detailMotor.xfdh`
   - 类型：string
   - 数组：否
   - 必填：否
   - 示例/默认值：`Seller Phone Number`
   - 说明：Seller Phone Number

177. `invoiceWillBs.detailMotor.cpzh`
   - 类型：string
   - 数组：否
   - 必填：否
   - 示例/默认值：`License Plate Number`
   - 说明：License Plate Number

178. `invoiceWillBs.detailMotor.djzh`
   - 类型：string
   - 数组：否
   - 必填：否
   - 示例/默认值：`Registration Certificate Number`
   - 说明：Registration Certificate Number

179. `invoiceWillBs.detailMotor.cgsmc`
   - 类型：string
   - 数组：否
   - 必填：否
   - 示例/默认值：`Name of Vehicle Management Office at Transfer Location`
   - 说明：Name of Vehicle Management Office at Transfer Location

180. `invoiceWillBs.detailMotor.saleNaturalPersonId`
   - 类型：string
   - 数组：否
   - 必填：否
   - 示例/默认值：`Y`
   - 说明：Seller (Vendor) Natural Person Identifier Y: N

181. `invoiceWillBs.detailMotor.saleNationalityCode`
   - 类型：string
   - 数组：否
   - 必填：否
   - 示例/默认值：`156`
   - 说明：Seller (Vendor) Nationality Code

182. `invoiceWillBs.detailMotor.saleIdType`
   - 类型：string
   - 数组：否
   - 必填：否
   - 示例/默认值：`201`
   - 说明：Seller (Vendor) Document Type

183. `invoiceWillBs.detailMotor.saleIdNumber`
   - 类型：string
   - 数组：否
   - 必填：否
   - 示例/默认值：`Seller (Vendor) Identification Number`
   - 说明：Seller (Vendor) Identification Number

184. `invoiceWillBs.detailMotor.fymx`
   - 类型：string
   - 数组：否
   - 必填：否
   - 说明：Expense Detail

185. `invoiceWillBs.detailMotor.ylfwgbm`
   - 类型：string
   - 数组：否
   - 必填：否
   - 说明：Medical Service Standard Code

186. `invoiceWillBs.detailMotor.qt`
   - 类型：string
   - 数组：否
   - 必填：否
   - 说明：Others

187. `invoiceWillBs.detailMotor.bz`
   - 类型：string
   - 数组：否
   - 必填：否
   - 说明：Inpatient Detail Remark

188. `zdybz`
   - 类型：string
   - 数组：否
   - 必填：否
   - 示例/默认值：`1`
   - 说明：Custom Remarks

189. `allElcUserName`
   - 类型：string
   - 数组：否
   - 必填：否
   - 说明：Digital Invoice Username

190. `bustype`
   - 类型：string
   - 数组：否
   - 必填：否
   - 说明：Transaction Type

191. `sqr`
   - 类型：string
   - 数组：否
   - 必填：否
   - 说明：applicant

192. `sqbm`
   - 类型：string
   - 数组：否
   - 必填：否
   - 说明：Application Department

193. `defineTerm`
   - 类型：object
   - 数组：否
   - 必填：否
   - 说明：Application Form Characteristic Fields

## 请求示例

```text
Url: /yonbip/tax/output-tax/api/invoice-will/batch-save?access_token=访问令牌
Body: [{
	"lyid": "13132",
	"lydjh": "5232",
	"lyBillTypeId": "121323",
	"lylx": "1",
	"djqqlsh": "51321513203",
	"orgCode": "2332",
	"gmfMc": "购方名称",
	"gmfNsrsbh": "1232132123",
	"gmfYhzh": "北京银行 1231",
	"gmfDzdh": "海淀 123",
	"gmfDz": "地址",
	"gmfDh": "15532326588",
	"gmfYh": "银行",
	"gmfZh": "4123123453",
	"xsfNsrsbh": "12315161323",
	"xsfMc": "销售方名称",
	"xsfDzdh": "北京 12232322020",
	"xsfYhzh": "北京银行 1231",
	"xsfDz": "北京",
	"xsfDh": "15532320202",
	"xsfYh": "北京银行",
	"xsfZh": "232",
	"lc": "2",
	"bz": "213",
	"fplx": "1",
	"zdrq": "2023-10-10",
	"revurl1": "https://www.baidu.com",
	"revemail": "1414xxx@qq.com",
	"skr": "收款人",
	"fhr": "复核人",
	"kpr": "开篇人",
	"tsyw": "0",
	"revphone": "1553232555",
	"secretLevelName": "公开",
	"autoMake": "true",
	"einvoiceShowSkrShr": "N",
	"einvoiceShowGxfYhZh": "N",
	"einvoiceShowGxfDzDh": "N",
	"zrrbs": "N",
	"zjlx": "201",
	"zjhm": "120110202101111111",
	"guoji": "156",
	"dfgtgmbz": "N",
	"mqkfrl": "12",
	"gjql": "12",
	"gzwhjhff": "12",
	"bdcdz": "北京海淀区",
	"zlqq": "2022-11-18",
	"zlqz": "2022-11-18",
	"kdsbz": "Y",
	"bdcdwdm": "11111",
	"yfpDm": "",
	"yfpHm": "",
	"hzxxbbh": "",
	"hcyy": "",
	"zsfs": "0",
	"tdzzsxmbh": "3333",
	"kqysssxbgglbm": "3333",
	"bxdh": "33",
	"cphcbdjh": "豫MUX555",
	"skssq": "2023-01 2023-03",
	"dsccsje": "3",
	"znj": "111",
	"jehj": "1",
	"cjh": "233134133384938",
	"tspzs": [
		{
			"ysmxxh": "1",
			"ysgjzl": "铁路运输",
			"ysgjph": "京A111111",
			"qyd": "北京",
			"ddd": "德州",
			"yshwmc": "苹果",
			"cxrxh": "1",
			"cxr": "张三",
			"chuxrq": "2025-03-13",
			"cxrzjlxDm": "101",
			"sfzjhm": "371233333323333323",
			"cfd": "北京",
			"lkddd": "北京",
			"zwdj": "一等座",
			"jtgjlxDm": "1"
		}
	],
	"bdcxsTspzs": [
		{
			"cxrxh": "1",
			"bdcdz": "北京市辖区东城区滨河公园5-4-1803",
			"wqhtbabh": "32333",
			"tdzzsxmbh": "123331",
			"bdcdwdm": "32333",
			"hdjsjg": "3.2",
			"sjcjhsje": "3.2",
			"kdsbz": "N",
			"cqzsbh": "3233",
			"mjdw": "平方米",
			"zlqq": "2022-11-18",
			"zlqz": "2023-11-18",
			"cph": "京A123456"
		}
	],
	"defineTerm": {
		"invoice_bz": "123",
		"invoice_remark": "记录"
	},
	"invoiceWillBs": [
		{
			"spbm": "51153213",
			"xmje": 1.2,
			"xmjshj": 50,
			"hh": "1",
			"sl": 0.13,
			"xmmc": "项目",
			"xmdj": 1.2,
			"xmhsdj": 23,
			"xmsl": 23,
			"se": 20,
			"spssflbm": "213132",
			"dw": "个",
			"ggxh": "规格",
			"kce": 0,
			"fphxz": "0",
			"zkhhh": "1",
			"zkhbs": "N",
			"zke": 0,
			"lslbs": "0",
			"zzstsgl": "按3%简易征收",
			"lymxid": "12123213123",
			"lymxdjh": "lymxdjh123",
			"defineTerm": {
				"invoice_bz": "123",
				"invoice_remark": "记录"
			},
			"mtzldm": "0100",
			"mtzldmxy": "0201",
			"detailMotor": {
				"mtzldm": "0100",
				"mtzldmxy": "0201"
			}
		}
	]
}]
```

## 返回参数

### 返回字段

1. `code`
   - 类型：string
   - 数组：否
   - 必填：否
   - 示例/默认值：`200`
   - 说明：Return Status Code

2. `message`
   - 类型：string
   - 数组：否
   - 必填：否
   - 示例/默认值：`Operation successful`
   - 说明：Return Information

## 返回示例

### 成功示例

无。

### 失败示例

无。

## 错误码

| 错误码 | 错误说明 | 处理建议 |
| --- | --- | --- |
| 1001 |  |  |


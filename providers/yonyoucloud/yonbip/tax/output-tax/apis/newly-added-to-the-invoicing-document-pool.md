# Newly Added to the Invoicing Document Pool

来源页面：

- https://open.yonyoucloud.com/#/doc-center/docDes/api?apiId=1821125593215270912&isOrigin=1&selectApiTab=open&from=&iframe=

机器可抓取的详情接口：

- https://open.yonyoucloud.com/iuap-ipaas-base/openPortal/api/getByVersionForTest/1821125593215270912/running?scene=open&isOrigin=1&isAjax=1

## 基本信息

- apiId：1821125593215270912
- API 类目：待开票单据池
- 所属目录：开票单据池（Invoicing Doc Pool）
- 产品：税务服务
- 更新时间：2025-07-01 17:07:13.000
- 请求方法：POST
- Content-Type：application/json
- 接口路径：/yonbip/tax/yonbip-fi-taxotypd/api/tax-bill-pool/add
- 完整调用地址：https://c2.yonyoucloud.com/iuap-api-gateway/yonbip/tax/yonbip-fi-taxotypd/api/tax-bill-pool/add
- 鉴权方式：access_token 作为 Query 参数传递（?access_token=）
- 当前状态：当前接口
- 请求字段数：Query 0 个，Body 138 个
- 返回字段数：2 个

## 对接要点

- 调用 URL：`https://c2.yonyoucloud.com/iuap-api-gateway/yonbip/tax/yonbip-fi-taxotypd/api/tax-bill-pool/add?access_token={access_token}`
- 调用方必须保存业务来源单号、发票请求流水号、请求报文、响应报文和状态查询结果，便于重试和对账。
- 开票、红冲、作废、驱动开票等写操作建议用业务唯一号做幂等控制；同一业务单不要生成多个不同流水号反复提交。
- 返回成功只代表接口调用成功，不一定代表税局或开票终态成功；涉及开票结果时必须再调用状态查询类接口确认。
- 详情接口返回字段说明可能为英文，字段名以开放平台原始字段为准。

## 调用模板

```bash
curl -X POST 'https://c2.yonyoucloud.com/iuap-api-gateway/yonbip/tax/yonbip-fi-taxotypd/api/tax-bill-pool/add?access_token=访问令牌' \
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
   - 说明：Document Information

2. `data.djId`
   - 类型：string
   - 数组：否
   - 必填：是
   - 示例/默认值：`2023092100001`
   - 说明：Business Document ID

3. `data.orgUnitId`
   - 类型：string
   - 数组：否
   - 必填：否
   - 示例/默认值：`21212`
   - 说明：Business Unit Organization ID

4. `data.orgUnitCode`
   - 类型：string
   - 数组：否
   - 必填：否
   - 示例/默认值：`1212123`
   - 说明：Business Unit Organization Code

5. `data.djName`
   - 类型：string
   - 数组：否
   - 必填：否
   - 示例/默认值：`Outsourced Purchase Order`
   - 说明：Business Document Name

6. `data.djNo`
   - 类型：string
   - 数组：否
   - 必填：否
   - 示例/默认值：`CGDD2023092100001`
   - 说明：Business Document Number

7. `data.djType`
   - 类型：string
   - 数组：否
   - 必填：否
   - 示例/默认值：`Purchase Order (PO)`
   - 说明：Document Type

8. `data.fplx`
   - 类型：string
   - 数组：否
   - 必填：否
   - 示例/默认值：`1`
   - 说明：Invoice Type 1: VAT Electronic Normal Invoice; 2: VAT Electronic Special Invoice; 3: VAT Normal Invoice; 4:
     VAT Special Invoice, VAT Special Invoice (Motor Vehicle); 5: Unified Invoice for Motor Vehicle Sales; 8: VAT
     Electronic Normal Invoice (Refined Oil); 9: Refined Oil Normal Invoice (Roll); 10: Refined Oil Normal Invoice;
     11: Refined Oil Special Invoice; 12: VAT Normal Invoice (Roll); 15: Unified Invoice for Second-Hand Vehicle
     Sales; 31: Digital Special Invoice; 32: Digital Normal Invoice; 33: Digital Paper Invoice (VAT Special
     Invoice); 34: Digital Paper Invoice (Normal Invoice); 36: Digital Paper Invoice (Unified Invoice for Motor
     Vehicle Sales)

9. `data.lyxt`
   - 类型：string
   - 数组：否
   - 必填：是
   - 示例/默认值：`lyxt001`
   - 说明：Source System

10. `data.ysjshj`
   - 类型：BigDecimal
   - 数组：否
   - 必填：是
   - 示例/默认值：`1.1`
   - 说明：Total Original Price Including Tax (15,2)

11. `data.jshj`
   - 类型：BigDecimal
   - 数组：否
   - 必填：是
   - 示例/默认值：`1.1`
   - 说明：Total Price and Tax (15,2)

12. `data.je`
   - 类型：BigDecimal
   - 数组：否
   - 必填：否
   - 示例/默认值：`1.1`
   - 说明：Amount (15,2)

13. `data.se`
   - 类型：BigDecimal
   - 数组：否
   - 必填：否
   - 示例/默认值：`1.1`
   - 说明：Tax Amount (15,2)

14. `data.zke`
   - 类型：BigDecimal
   - 数组：否
   - 必填：否
   - 示例/默认值：`1.1`
   - 说明：Discount Amount (15,2)

15. `data.djzt`
   - 类型：string
   - 数组：否
   - 必填：否
   - 示例/默认值：`Reviewed`
   - 说明：Document Status

16. `data.zdrId`
   - 类型：string
   - 数组：否
   - 必填：否
   - 示例/默认值：`zhaoyunliang`
   - 说明：Business Order Creator ID

17. `data.zdrName`
   - 类型：string
   - 数组：否
   - 必填：否
   - 示例/默认值：`zhaoyunliang`
   - 说明：Business Order Creator

18. `data.ywZdrq`
   - 类型：string
   - 数组：否
   - 必填：否
   - 示例/默认值：`2023-09-21 11:11:11`
   - 说明：Business Document Date yyyy-MM-dd HH:mm:ss

19. `data.orderNo`
   - 类型：string
   - 数组：否
   - 必填：否
   - 示例/默认值：`DD-2023092100001`
   - 说明：Order Number

20. `data.contractNo`
   - 类型：string
   - 数组：否
   - 必填：否
   - 示例/默认值：`HT-2023092100001`
   - 说明：Contract Number

21. `data.billVersion`
   - 类型：string
   - 数组：否
   - 必填：否
   - 示例/默认值：`V1.0`
   - 说明：Document Version

22. `data.deliveryNo`
   - 类型：string
   - 数组：否
   - 必填：否
   - 示例/默认值：`FH-2023092100001`
   - 说明：Shipping Document Number

23. `data.purchaseNo`
   - 类型：string
   - 数组：否
   - 必填：否
   - 示例/默认值：`CG-2023092100001`
   - 说明：Purchase Order Number

24. `data.ywyId`
   - 类型：string
   - 数组：否
   - 必填：否
   - 示例/默认值：`zhaoyunliang`
   - 说明：Salesperson ID

25. `data.ywyCode`
   - 类型：string
   - 数组：否
   - 必填：否
   - 示例/默认值：`123123`
   - 说明：Salesperson Code

26. `data.ywy`
   - 类型：string
   - 数组：否
   - 必填：否
   - 示例/默认值：`zhaoyunliang`
   - 说明：Salesperson

27. `data.departmentId`
   - 类型：string
   - 数组：否
   - 必填：否
   - 示例/默认值：`00001`
   - 说明：Business Department ID

28. `data.department`
   - 类型：string
   - 数组：否
   - 必填：否
   - 示例/默认值：`Purchasing Department`
   - 说明：Business Department

29. `data.djbz`
   - 类型：string
   - 数组：否
   - 必填：否
   - 示例/默认值：`Customer request for one-time invoicing.`
   - 说明：Business Document Remarks

30. `data.customerName`
   - 类型：string
   - 数组：否
   - 必填：否
   - 示例/默认值：`Yonyou Network Technology Co., Ltd.`
   - 说明：Customer Name

31. `data.customer_code`
   - 类型：string
   - 数组：否
   - 必填：否
   - 示例/默认值：`00001`
   - 说明：Customer Code

32. `data.customerId`
   - 类型：string
   - 数组：否
   - 必填：否
   - 示例/默认值：`00001`
   - 说明：Customer ID

33. `data.custNsrsbh`
   - 类型：string
   - 数组：否
   - 必填：否
   - 示例/默认值：`91110000600001760P`
   - 说明：Customer Taxpayer Identification Number

34. `data.custDz`
   - 类型：string
   - 数组：否
   - 必填：否
   - 示例/默认值：`No. 68 Beiqing Road, Haidian District, Beijing`
   - 说明：Customer Address

35. `data.custDh`
   - 类型：string
   - 数组：否
   - 必填：否
   - 示例/默认值：`010-86396688`
   - 说明：Customer Phone

36. `data.custYh`
   - 类型：string
   - 数组：否
   - 必填：否
   - 示例/默认值：`Agricultural Bank of China Beiqing Road Branch`
   - 说明：Customer Bank Account

37. `data.custZh`
   - 类型：string
   - 数组：否
   - 必填：否
   - 示例/默认值：`9998733321244`
   - 说明：Customer Bank Account Number

38. `data.custEmail`
   - 类型：string
   - 数组：否
   - 必填：否
   - 示例/默认值：`shili@yonyou.com`
   - 说明：Customer Email Address

39. `data.phoneNo`
   - 类型：string
   - 数组：否
   - 必填：否
   - 示例/默认值：`13821111111`
   - 说明：Recipient's mobile phone

40. `data.billStationId`
   - 类型：string
   - 数组：否
   - 必填：否
   - 示例/默认值：`000034`
   - 说明：Invoicing Site ID

41. `data.orgCode`
   - 类型：string
   - 数组：否
   - 必填：否
   - 示例/默认值：`000034`
   - 说明：Organization Code

42. `data.orgType`
   - 类型：string
   - 数组：否
   - 必填：否
   - 示例/默认值：`Group`
   - 说明：Organization Type

43. `data.xsfMc`
   - 类型：string
   - 数组：否
   - 必填：否
   - 示例/默认值：`Yonyou Network Technology Co., Ltd.`
   - 说明：Seller Name

44. `data.xsfNsrsbh`
   - 类型：string
   - 数组：否
   - 必填：否
   - 示例/默认值：`91110000600001760P`
   - 说明：Seller's Taxpayer Identification Number

45. `data.xsfDz`
   - 类型：string
   - 数组：否
   - 必填：否
   - 示例/默认值：`No. 68 Beiqing Road, Haidian District, Beijing`
   - 说明：Seller's Address

46. `data.xsfDh`
   - 类型：string
   - 数组：否
   - 必填：否
   - 示例/默认值：`010-86396688`
   - 说明：Seller's phone number

47. `data.xsfYh`
   - 类型：string
   - 数组：否
   - 必填：否
   - 示例/默认值：`Agricultural Bank of China Beiqing Road Branch`
   - 说明：Seller's Bank Account Bank

48. `data.xsfZh`
   - 类型：string
   - 数组：否
   - 必填：否
   - 示例/默认值：`9998733321244`
   - 说明：Seller's bank account number

49. `data.bz`
   - 类型：string
   - 数组：否
   - 必填：否
   - 示例/默认值：`Customer request for one-time invoicing.`
   - 说明：Invoice Remarks

50. `data.skrId`
   - 类型：string
   - 数组：否
   - 必填：否
   - 示例/默认值：`99982221`
   - 说明：Invoice recipient ID

51. `data.skr`
   - 类型：string
   - 数组：否
   - 必填：否
   - 示例/默认值：`Liu Ling`
   - 说明：Invoice Payee

52. `data.fhrId`
   - 类型：string
   - 数组：否
   - 必填：否
   - 示例/默认值：`99982221`
   - 说明：Invoice reviewer ID

53. `data.fhr`
   - 类型：string
   - 数组：否
   - 必填：否
   - 示例/默认值：`Liu Ling`
   - 说明：Invoice Reviewer

54. `data.kprId`
   - 类型：string
   - 数组：否
   - 必填：否
   - 示例/默认值：`99982221`
   - 说明：Invoice Issuer ID

55. `data.kpr`
   - 类型：string
   - 数组：否
   - 必填：否
   - 示例/默认值：`Liu Ling`
   - 说明：Invoice Issuer

56. `data.sjkprId`
   - 类型：string
   - 数组：否
   - 必填：否
   - 示例/默认值：`99982221`
   - 说明：Actual invoicing person ID

57. `data.sjfhrId`
   - 类型：string
   - 数组：否
   - 必填：否
   - 示例/默认值：`99982221`
   - 说明：Actual Reviewer ID

58. `data.sjdyrId`
   - 类型：string
   - 数组：否
   - 必填：否
   - 示例/默认值：`99982221`
   - 说明：Actual Printer ID

59. `data.sjkpr`
   - 类型：string
   - 数组：否
   - 必填：否
   - 示例/默认值：`Liu Ling`
   - 说明：Actual invoicer

60. `data.sjfhr`
   - 类型：string
   - 数组：否
   - 必填：否
   - 示例/默认值：`Liu Ling`
   - 说明：Actual Reviewer

61. `data.sjdyr`
   - 类型：string
   - 数组：否
   - 必填：否
   - 示例/默认值：`Liu Ling`
   - 说明：Actual Printer

62. `data.accountStatus`
   - 类型：string
   - 数组：否
   - 必填：否
   - 示例/默认值：`1`
   - 说明：Accounting Status 1 - Posted, 2 - Not Posted

63. `data.accountTime`
   - 类型：string
   - 数组：否
   - 必填：否
   - 示例/默认值：`2023-09-21 16:54:33`
   - 说明：Accounting period yyyy-MM-dd HH:mm:ss

64. `data.accountNo`
   - 类型：string
   - 数组：否
   - 必填：否
   - 示例/默认值：`098733333`
   - 说明：Voucher Number

65. `data.accountBz`
   - 类型：string
   - 数组：否
   - 必填：否
   - 示例/默认值：`This voucher requires a one-time invoice.`
   - 说明：Voucher Remarks

66. `data.zdybz`
   - 类型：string
   - 数组：否
   - 必填：否
   - 示例/默认值：`This voucher requires a one-time invoice.`
   - 说明：Custom Notes

67. `data.stampedCompany`
   - 类型：string
   - 数组：否
   - 必填：否
   - 示例/默认值：`Yonyou Co., Ltd.`
   - 说明：Stamping Unit

68. `data.stampedCompanyId`
   - 类型：string
   - 数组：否
   - 必填：否
   - 示例/默认值：`0000982`
   - 说明：Stamping unit ID

69. `data.billStationCode`
   - 类型：string
   - 数组：否
   - 必填：否
   - 示例/默认值：`001`
   - 说明：Invoicing Site Code

70. `data.ytenantId`
   - 类型：string
   - 数组：否
   - 必填：否
   - 示例/默认值：`sdfghot983ue64222234df`
   - 说明：Tenant ID

71. `data.bdcdz`
   - 类型：string
   - 数组：否
   - 必填：否
   - 说明：Real Estate Address

72. `data.kdsbz`
   - 类型：string
   - 数组：否
   - 必填：否
   - 说明：Cross-region (city) marker Y: Yes N: No */

73. `data.bdcdwdm`
   - 类型：string
   - 数组：否
   - 必填：否
   - 说明：Real Estate Unit Code

74. `data.wqhtbabh`
   - 类型：string
   - 数组：否
   - 必填：否
   - 说明：Online Contract Filing Number

75. `data.tdzzsxmbh`
   - 类型：string
   - 数组：否
   - 必填：否
   - 说明：Land VAT Project Number

76. `data.hdjsjg`
   - 类型：number
   - 数组：否
   - 必填：否
   - 说明：Approved tax assessment price. Not applicable for properties not subject to approved tax assessment sales.

77. `data.sjcjhsje`
   - 类型：number
   - 数组：否
   - 必填：否
   - 说明：Actual transaction amount including tax. If taxed based on the approved taxable price, it is mandatory to fill
     in.

78. `data.zlqq`
   - 类型：string
   - 数组：否
   - 必填：否
   - 说明：Lease Start Date

79. `data.zlqz`
   - 类型：string
   - 数组：否
   - 必填：否
   - 说明：Lease expiration date

80. `data.fdckfxmbh`
   - 类型：string
   - 数组：否
   - 必填：否
   - 说明：Real Estate Development Project Number

81. `data.zrrbs`
   - 类型：string
   - 数组：否
   - 必填：否
   - 说明：Natural Person Identifier Y: Yes, N: No

82. `data.yfpDm`
   - 类型：string
   - 数组：否
   - 必填：否
   - 说明：Original blue invoice code

83. `data.yfpHm`
   - 类型：string
   - 数组：否
   - 必填：否
   - 说明：Original blue invoice number

84. `data.hzxxbbh`
   - 类型：string
   - 数组：否
   - 必填：否
   - 说明：Credit Confirmation Document Number

85. `data.blueKprq`
   - 类型：string
   - 数组：否
   - 必填：否
   - 示例/默认值：`2025-02-11`
   - 说明：Blue invoice issuance date, format yyyy-MM-dd

86. `data.hcyy`
   - 类型：string
   - 数组：否
   - 必填：否
   - 说明：Reasons for Red Invoice: 1. Sales Return 2. Invoice Error 3. Service Termination 4. Sales Discount

87. `data.items`
   - 类型：object
   - 数组：是
   - 必填：否
   - 说明：Business Document Details

88. `data.items.djId`
   - 类型：string
   - 数组：否
   - 必填：是
   - 示例/默认值：`2023092100001`
   - 说明：Business Document ID

89. `data.items.djmxId`
   - 类型：string
   - 数组：否
   - 必填：是
   - 示例/默认值：`2023092100001`
   - 说明：Business Document Detail ID

90. `data.items.xmmc`
   - 类型：string
   - 数组：否
   - 必填：是
   - 示例/默认值：`Yibao`
   - 说明：Material Name

91. `data.items.spbm`
   - 类型：string
   - 数组：否
   - 必填：否
   - 示例/默认值：`111`
   - 说明：Material Code

92. `data.items.productId`
   - 类型：string
   - 数组：否
   - 必填：否
   - 示例/默认值：`111`
   - 说明：Material ID

93. `data.items.spssflbm`
   - 类型：string
   - 数组：否
   - 必填：否
   - 示例/默认值：`1010101010000000000`
   - 说明：Tax Category Code

94. `data.items.ggxh`
   - 类型：string
   - 数组：否
   - 必填：否
   - 示例/默认值：`111`
   - 说明：Specification Model

95. `data.items.dw`
   - 类型：string
   - 数组：否
   - 必填：否
   - 示例/默认值：`ton`
   - 说明：Unit

96. `data.items.xmsl`
   - 类型：BigDecimal
   - 数组：否
   - 必填：否
   - 示例/默认值：`1.1`
   - 说明：Quantity (15,10)

97. `data.items.xmhsdj`
   - 类型：BigDecimal
   - 数组：否
   - 必填：否
   - 示例/默认值：`1.1`
   - 说明：Tax-inclusive unit price (15,10)

98. `data.items.xmdj`
   - 类型：BigDecimal
   - 数组：否
   - 必填：否
   - 示例/默认值：`1.1`
   - 说明：Unit Price (15,10)

99. `data.items.jshj`
   - 类型：BigDecimal
   - 数组：否
   - 必填：是
   - 示例/默认值：`1.1`
   - 说明：Total Price and Tax (15,2)

100. `data.items.ysjshj`
   - 类型：BigDecimal
   - 数组：否
   - 必填：是
   - 示例/默认值：`1.1`
   - 说明：Total Original Price Including Tax (15,2)

101. `data.items.sl`
   - 类型：BigDecimal
   - 数组：否
   - 必填：否
   - 示例/默认值：`1.1`
   - 说明：Tax Rate (16,6)

102. `data.items.zke`
   - 类型：BigDecimal
   - 数组：否
   - 必填：否
   - 示例/默认值：`1.1`
   - 说明：Discount Amount (15,2)

103. `data.items.custXmmc`
   - 类型：string
   - 数组：否
   - 必填：否
   - 示例/默认值：`Yibao`
   - 说明：Customer Product Name

104. `data.items.custGgxh`
   - 类型：string
   - 数组：否
   - 必填：否
   - 示例/默认值：`123312`
   - 说明：Customer Product Specifications and Models

105. `data.items.bz`
   - 类型：string
   - 数组：否
   - 必填：否
   - 示例/默认值：`A little sweet`
   - 说明：Remarks

106. `data.items.ytenantId`
   - 类型：string
   - 数组：否
   - 必填：否
   - 示例/默认值：`sdfghot983ue64222234df`
   - 说明：Tenant ID

107. `data.items.productClassCode`
   - 类型：string
   - 数组：否
   - 必填：否
   - 示例/默认值：`001`
   - 说明：Material Classification Code

108. `data.items.productClassId`
   - 类型：string
   - 数组：否
   - 必填：否
   - 示例/默认值：`001`
   - 说明：Material Classification ID

109. `data.items.productClassName`
   - 类型：string
   - 数组：否
   - 必填：否
   - 示例/默认值：`001`
   - 说明：Material Classification Name

110. `data.items.je`
   - 类型：number
   - 数组：否
   - 必填：否
   - 示例/默认值：`10.1`
   - 说明：Amount excluding tax

111. `data.items.se`
   - 类型：number
   - 数组：否
   - 必填：否
   - 示例/默认值：`1.1`
   - 说明：Tax amount

112. `data.items.zzstsgl`
   - 类型：string
   - 数组：否
   - 必填：否
   - 示例/默认值：`Tax exemption`
   - 说明：Description of preferential policies, such as "If the preferential identification is 1, this field must be
     filled in, with content such as 'tax exemption', '50% advance collection and refund', 'immediate collection
     and refund 50%', etc."

113. `data.items.lslbs`
   - 类型：string
   - 数组：否
   - 必填：否
   - 示例/默认值：`3`
   - 说明：Zero Tax Rate Indicator, 1: Exempt, 2: Not Levied, 3 Normal Zero Tax Rate

114. `data.items.yhzcbs`
   - 类型：string
   - 数组：否
   - 必填：否
   - 示例/默认值：`0`
   - 说明：Discount Policy Indicator, 0: Not in use, 1: In use

115. `data.items.jzfwfsd`
   - 类型：string
   - 数组：否
   - 必填：否
   - 说明：Location of Construction Service

116. `data.items.jzxmmc`
   - 类型：string
   - 数组：否
   - 必填：否
   - 说明：Construction Project Name

117. `data.items.cqzsbh`
   - 类型：string
   - 数组：否
   - 必填：否
   - 说明：Property Certificate / Real Estate Certificate Number

118. `data.items.detailMotor`
   - 类型：object
   - 数组：否
   - 必填：否
   - 说明：Motor vehicles and special electronic ticket types

119. `data.items.detailMotor.cjhm`
   - 类型：string
   - 数组：否
   - 必填：否
   - 说明：Chassis number

120. `data.items.detailMotor.cllx`
   - 类型：string
   - 数组：否
   - 必填：否
   - 说明：Vehicle Type

121. `data.items.detailMotor.cpxh`
   - 类型：string
   - 数组：否
   - 必填：否
   - 说明：Brand and model

122. `data.items.detailMotor.cd`
   - 类型：string
   - 数组：否
   - 必填：否
   - 说明：Place of origin

123. `data.items.detailMotor.scqymc`
   - 类型：string
   - 数组：否
   - 必填：否
   - 说明：Production Enterprise Name

124. `data.items.detailMotor.sfzhm`
   - 类型：string
   - 数组：否
   - 必填：否
   - 说明：ID number / Organization code

125. `data.items.detailMotor.hgzh`
   - 类型：string
   - 数组：否
   - 必填：否
   - 说明：Certificate Number

126. `data.items.detailMotor.jkzmsh`
   - 类型：string
   - 数组：否
   - 必填：否
   - 说明：Import Certificate Number

127. `data.items.detailMotor.sjdh`
   - 类型：string
   - 数组：否
   - 必填：否
   - 说明：Inspection Certificate Number

128. `data.items.detailMotor.fdjhm`
   - 类型：string
   - 数组：否
   - 必填：否
   - 说明：Engine number

129. `data.items.detailMotor.dunwei`
   - 类型：string
   - 数组：否
   - 必填：否
   - 说明：Tonnage

130. `data.items.detailMotor.xcrs`
   - 类型：string
   - 数组：否
   - 必填：否
   - 说明：The maximum number of passengers is limited; the field only supports numeric input and cannot contain other
     characters. If the vehicle's certificate of conformity states a maximum number of passengers as "2+3" or
     "2+2+3", when issuing the invoice, enter "5" or "7", which does not affect vehicle registration or transfer
     registration.

131. `data.items.detailMotor.swjgdm`
   - 类型：string
   - 数组：否
   - 必填：否
   - 说明：Tax Authority Code

132. `data.items.detailMotor.swjgmc`
   - 类型：string
   - 数组：否
   - 必填：否
   - 说明：Name of the Tax Authority

133. `data.items.detailMotor.wspzh`
   - 类型：string
   - 数组：否
   - 必填：否
   - 说明：Tax Payment Voucher Number

134. `msgUrl`
   - 类型：object
   - 数组：是
   - 必填：否
   - 说明：Callback Address Information

135. `msgUrl.djId`
   - 类型：string
   - 数组：否
   - 必填：否
   - 示例/默认值：`CGDD2023092100001`
   - 说明：Business Document ID

136. `msgUrl.taxInvoiceWillUrl`
   - 类型：string
   - 数组：否
   - 必填：否
   - 示例/默认值：`https://fapiao.yonyoucloud.com/`
   - 说明：Callback URL after application submission

137. `msgUrl.invoiceUrl`
   - 类型：string
   - 数组：否
   - 必填：否
   - 示例/默认值：`https://fapiao.yonyoucloud.com/`
   - 说明：URL for the application to complete the invoicing callback.

138. `msgUrl.delUrl`
   - 类型：string
   - 数组：否
   - 必填：否
   - 示例/默认值：`https://fapiao.yonyoucloud.com/`
   - 说明：Document return URL. When a document is returned, it can call back to inform the Business System. If the
     Business System can successfully revert, the Tax Cloud will delete this document from the document pool upon
     receiving the successful revert notification.

## 请求示例

```text
Url: /yonbip/tax/yonbip-fi-taxotypd/api/tax-bill-pool/add?access_token=访问令牌  
Body: [{
	"data": {
		"djId": "2023092100001",
		"orgUnitId": "21212",
		"orgUnitCode": "1212123",
		"djName": "委外采购订单",
		"djNo": "CGDD2023092100001",
		"djType": "采购订单",
		"fplx": "1",
		"lyxt": "lyxt001",
		"ysjshj": 1.1,
		"jshj": 1.1,
		"je": 1.1,
		"se": 1.1,
		"zke": 1.1,
		"djzt": "已审核",
		"zdrId": "zhaoyunliang",
		"zdrName": "zhaoyunliang",
		"ywZdrq": "2023-09-21 11:11:11",
		"orderNo": "DD-2023092100001",
		"contractNo": "HT-2023092100001",
		"billVersion": "V1.0",
		"deliveryNo": "FH-2023092100001",
		"purchaseNo": "CG-2023092100001",
		"ywyId": "zhaoyunliang",
		"ywyCode": "123123",
		"ywy": "zhaoyunliang",
		"departmentId": "00001",
		"department": "采购部",
		"djbz": "客户需求一次性开票",
		"customerName": "用友网络科技股份有限公司",
		"customer_code": "00001",
		"customerId": "00001",
		"custNsrsbh": "91110000600001760P",
		"custDz": "北京市海淀区北清路68号",
		"custDh": "010-86396688",
		"custYh": "农业银行北清路支行",
		"custZh": "9998733321244",
		"custEmail": "shili@yonyou.com",
		"phoneNo": "13821111111",
		"billStationId": "000034",
		"orgCode": "000034",
		"orgType": "集团",
		"xsfMc": "用友网络科技股份有限公司",
		"xsfNsrsbh": "91110000600001760P",
		"xsfDz": "北京市海淀区北清路68号",
		"xsfDh": "010-86396688",
		"xsfYh": "农业银行北清路支行",
		"xsfZh": "9998733321244",
		"bz": "客户需求一次性开票",
		"skrId": "99982221",
		"skr": "刘玲",
		"fhrId": "99982221",
		"fhr": "刘玲",
		"kprId": "99982221",
		"kpr": "刘玲",
		"sjkprId": "99982221",
		"sjfhrId": "99982221",
		"sjdyrId": "99982221",
		"sjkpr": "刘玲",
		"sjfhr": "刘玲",
		"sjdyr": "刘玲",
		"accountStatus": "1",
		"accountTime": "2023-09-21 16:54:33",
		"accountNo": "098733333",
		"accountBz": "此凭证需要一次性开票",
		"zdybz": "此凭证需要一次性开票",
		"stampedCompany": "用友股份",
		"stampedCompanyId": "0000982",
		"billStationCode": "001",
		"define": {
			"key": "value"
		},
		"ytenantId": "sdfghot983ue64222234df",
		"items": [
			{
				"djId": "2023092100001",
				"djmxId": "2023092100001",
				"xmmc": "怡宝",
				"spbm": "111",
				"productId": "111",
				"spssflbm": "1010101010000000000",
				"ggxh": "111",
				"dw": "吨",
				"xmsl": 1.1,
				"xmhsdj": 1.1,
				"xmdj": 1.1,
				"jshj": 1.1,
				"ysjshj": 1.1,
				"sl": 1.1,
				"zke": 1.1,
				"custXmmc": "怡宝",
				"custGgxh": "123312",
				"bz": "有点甜",
				"ytenantId": "sdfghot983ue64222234df",
				"productClassCode": "001",
				"productClassId": "001",
				"productClassName": "001",
				"je": 10.1,
				"se": 1.1,
				"define": {
					"key": "value"
				}
			}
		]
	},
	"msgUrl": {
			"djId": "CGDD2023092100001",
			"taxInvoiceWillUrl": "https://fapiao.yonyoucloud.com/",
			"invoiceUrl": "https://fapiao.yonyoucloud.com/"
		}
}]
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
   - 示例/默认值：`success`
   - 说明：Message

## 返回示例

### 成功示例

无。

### 失败示例

无。

## 错误码

| 错误码 | 错误说明 | 处理建议 |
| --- | --- | --- |
| 9999 |  |  |


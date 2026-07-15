# Red Character Information Form Number Inquiry

来源页面：

- https://open.yonyoucloud.com/#/doc-center/docDes/api?apiId=9299d3d37cab49729f1e8ba9bd5ba676&isOrigin=1&selectApiTab=open&from=&iframe=

机器可抓取的详情接口：

- https://open.yonyoucloud.com/iuap-ipaas-base/openPortal/api/getByVersionForTest/9299d3d37cab49729f1e8ba9bd5ba676/running?scene=open&isOrigin=1&isAjax=1

## 基本信息

- apiId：9299d3d37cab49729f1e8ba9bd5ba676
- API 类目：红字信息表（专票）
- 所属目录：红字申请表（Red Letter Application Form）
- 产品：税务服务
- 更新时间：2025-07-01 17:06:26.000
- 请求方法：GET
- Content-Type：application/json
- 接口路径：/yonbip/tax/invoiceclient-web/api/redinfo-apply/queryRedInfoApply/{reqBillNo}
- 完整调用地址：https://c2.yonyoucloud.com/iuap-api-gateway/yonbip/tax/invoiceclient-web/api/redinfo-apply/queryRedInfoApply/{reqBillNo}
- 鉴权方式：access_token 作为 Query 参数传递（?access_token=）
- 当前状态：当前接口
- 请求字段数：Query 0 个，Body 1 个
- 返回字段数：90 个

## 对接要点

- 调用 URL：`https://c2.yonyoucloud.com/iuap-api-gateway/yonbip/tax/invoiceclient-web/api/redinfo-apply/queryRedInfoApply/{reqBillNo}?access_token={access_token}`
- 调用方必须保存业务来源单号、发票请求流水号、请求报文、响应报文和状态查询结果，便于重试和对账。
- 开票、红冲、作废、驱动开票等写操作建议用业务唯一号做幂等控制；同一业务单不要生成多个不同流水号反复提交。
- 返回成功只代表接口调用成功，不一定代表税局或开票终态成功；涉及开票结果时必须再调用状态查询类接口确认。
- 详情接口返回字段说明可能为英文，字段名以开放平台原始字段为准。

## 调用模板

```bash
curl -X GET 'https://c2.yonyoucloud.com/iuap-api-gateway/yonbip/tax/invoiceclient-web/api/redinfo-apply/queryRedInfoApply/{reqBillNo}?access_token=访问令牌' \
  -H 'Content-Type: application/json'
```

## 请求参数

### Query 参数

无。

> 注：开放平台网关调用时通常还需传递 `access_token`。

### Body 参数

1. `reqBillNo`
   - 类型：string
   - 数组：否
   - 必填：是
   - 示例/默认值：`513132132123`
   - 说明：Red character information application serial number

## 请求示例

```text
Url: /yonbip/tax/invoiceclient-web/api/redinfo-apply/queryRedInfoApply/{reqBillNo}?access_token=访问令牌
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
   - 数组：否
   - 必填：否
   - 示例/默认值：`Return parameters based on actual conditions; some parameters may not be displayed.`
   - 说明：Return data

4. `data.reqBillNo`
   - 类型：string
   - 数组：否
   - 必填：否
   - 示例/默认值：`1770053087623933952`
   - 说明：Red Character Information Form Number

5. `data.redApplyNo`
   - 类型：string
   - 数组：否
   - 必填：否
   - 示例/默认值：`2151202000001`
   - 说明：Red Application Number

6. `data.resBillNo`
   - 类型：string
   - 数组：否
   - 必填：否
   - 示例/默认值：`8545445420001`
   - 说明：Information Sheet Number

7. `data.statusDm`
   - 类型：string
   - 数组：否
   - 必填：否
   - 示例/默认值：`1`
   - 说明：Information Sheet Status Codes: 1 - Not Uploaded; 2 - Uploading; 3 - Upload Failed; 4 - Upload Successful; 5 -
     Retrieving; 6 - Retrieval Failed; 7 - Retrieval Successful

8. `data.statusMc`
   - 类型：string
   - 数组：否
   - 必填：否
   - 示例/默认值：`Upload successful`
   - 说明：Information Sheet Status Description

9. `data.reqMemo`
   - 类型：string
   - 数组：否
   - 必填：否
   - 示例/默认值：`1100000000`
   - 说明：Application Selection (Fixed 10 digits, Buyer's Application Deducted: 1100000000, Buyer's Application Not
     Deducted: 1010000000, Seller's Application: 0000000100)

10. `data.cpyMemo`
   - 类型：string
   - 数组：否
   - 必填：否
   - 示例/默认值：`1`
   - 说明：Finished oil (1: involves changes in sales quantity, 2: involves changes in sales amount)

11. `data.jdcMemo`
   - 类型：string
   - 数组：否
   - 必填：否
   - 示例/默认值：`1`
   - 说明：Red Letter Application Form Vehicle Involved Types: 1: Involves sales returns, invoicing errors, etc., return
     the corresponding certificate of conformity from the buyer's vehicle ledger to the seller. 2: Only involves
     sales discounts, does not involve adjustments to the vehicle purchase and sales ledgers of both parties.

12. `data.mineralsMemo`
   - 类型：string
   - 数组：否
   - 必填：否
   - 示例/默认值：`1`
   - 说明：Red Letter Application Form for Mineral Products Involved Types (1 involves changes in sales quantity and
     amount, 2 only involves changes in sales amount, without changes in sales quantity of the buyer and seller,
     careful operation required!)

13. `data.dzyMemo`
   - 类型：string
   - 数组：否
   - 必填：否
   - 示例/默认值：`1`
   - 说明：Red letter application form for electronic cigarettes involves types: 1 involves changes in sales quantity and
     amount, 2 only involves changes in sales amount, without changes in sales quantity of the buyer and seller,
     operation must be cautious!

14. `data.jqbh`
   - 类型：string
   - 数组：否
   - 必填：否
   - 示例/默认值：`JQ-001`
   - 说明：Machine Number

15. `data.yfpDm`
   - 类型：string
   - 数组：否
   - 必填：否
   - 示例/默认值：`12122100111`
   - 说明：Original invoice code

16. `data.yfpHm`
   - 类型：string
   - 数组：否
   - 必填：否
   - 示例/默认值：`1212121`
   - 说明：Original invoice number

17. `data.zdrq`
   - 类型：string
   - 数组：否
   - 必填：否
   - 示例/默认值：`2024-03-19`
   - 说明：Document Date; yyyy-MM-dd

18. `data.kprq`
   - 类型：string
   - 数组：否
   - 必填：否
   - 示例/默认值：`209912`
   - 说明：Invoice Date; yyyyMM

19. `data.gmfMc`
   - 类型：string
   - 数组：否
   - 必填：否
   - 示例/默认值：`sw0001`
   - 说明：Buyer Name

20. `data.gmfNsrsbh`
   - 类型：string
   - 数组：否
   - 必填：否
   - 示例/默认值：`YBSWY0187654321`
   - 说明：Purchaser's Taxpayer Identification Number

21. `data.gmfDzdh`
   - 类型：string
   - 数组：否
   - 必填：否
   - 示例/默认值：`Beijing Haidian District 88881111`
   - 说明：Buyer Address Account

22. `data.gmfYhzh`
   - 类型：string
   - 数组：否
   - 必填：否
   - 示例/默认值：`Beijing Bank 63119191919`
   - 说明：Buyer's bank account number

23. `data.xsfMc`
   - 类型：string
   - 数组：否
   - 必填：否
   - 示例/默认值：`Do not modify the pressure test preset data.`
   - 说明：Seller Name

24. `data.xsfNsrsbh`
   - 类型：string
   - 数组：否
   - 必填：否
   - 示例/默认值：`YBSWY0187654322`
   - 说明：Seller's Taxpayer Identification Number

25. `data.hjje`
   - 类型：number
   - 数组：否
   - 必填：否
   - 示例/默认值：`-10`
   - 说明：Total Amount

26. `data.hjse`
   - 类型：number
   - 数组：否
   - 必填：否
   - 示例/默认值：`-1.7`
   - 说明：Total Tax Amount

27. `data.jshj`
   - 类型：number
   - 数组：否
   - 必填：否
   - 示例/默认值：`-11.7`
   - 说明：Total Price Including Tax

28. `data.kpr`
   - 类型：string
   - 数组：否
   - 必填：否
   - 示例/默认值：`Zhang San`
   - 说明：Invoicer

29. `data.skr`
   - 类型：string
   - 数组：否
   - 必填：否
   - 示例/默认值：`Li Si`
   - 说明：Payee

30. `data.fhr`
   - 类型：string
   - 数组：否
   - 必填：否
   - 示例/默认值：`Wang Wu`
   - 说明：Reviewer

31. `data.bmbBbh`
   - 类型：string
   - 数组：否
   - 必填：否
   - 示例/默认值：`51.0`
   - 说明：Encoding Table Version Number

32. `data.fplx`
   - 类型：string
   - 数组：否
   - 必填：否
   - 示例/默认值：`4`
   - 说明：Invoice Type: 1: VAT Electronic Normal Invoice; 2: VAT Electronic Special Invoice; 3: VAT Normal Invoice; 4:
     VAT Special Invoice; 5: Unified Invoice for Motor Vehicle Sales; 8: VAT Electronic Normal Invoice (Refined
     Oil); 10: Normal Invoice for Refined Oil; 11: Special Invoice for Refined Oil; 15: Unified Invoice for
     Second-Hand Vehicle Sales; 31: Special Invoice for Digital Products; 32: Normal Invoice for Digital Products;
     33: Paper Invoice for Digital Products (VAT Special Invoice); 34: Paper Invoice for Digital Products (Normal
     Invoice); Optional; Default is 1.

33. `data.lylx`
   - 类型：string
   - 数组：否
   - 必填：否
   - 示例/默认值：`1`
   - 说明：Source Type 1 - Manual Issuance; 2 - Interface Input; 3 - File Import; 4 - QR Code Scan; 5 - WeChat Input; 6 -
     Quick Invoicing; 7 - Alipay Input; 8 - Pinduoduo; 9 - Mini Program; w - Pending Invoice Details; v - Invoice
     Application Document; n - NCC Input

34. `data.lyid`
   - 类型：string
   - 数组：否
   - 必填：否
   - 示例/默认值：`LY-001`
   - 说明：Source ID

35. `data.zdybz`
   - 类型：string
   - 数组：否
   - 必填：否
   - 示例/默认值：`Custom Notes`
   - 说明：Custom Notes

36. `data.fpqqlsh`
   - 类型：string
   - 数组：否
   - 必填：否
   - 示例/默认值：`1770053087623933953`
   - 说明：Invoice request serial number

37. `data.orgId`
   - 类型：number
   - 数组：否
   - 必填：否
   - 示例/默认值：`12124554544`
   - 说明：Organization ID

38. `data.source`
   - 类型：string
   - 数组：否
   - 必填：否
   - 示例/默认值：`0`
   - 说明：Invoice Source: 0: Red invoice through other means; 1: Red invoice through special invoice overall red invoice
     interface; 2: Obtained through UI page; 3: Obtained through API method, requires direct entry into the
     invoicing workflow, distinct from UI operations; 4: Successful application through interface requires callback
     assistant to return success processing; 5: Application from the pending invoicing details interface.

39. `data.gmfApplyPhone`
   - 类型：string
   - 数组：否
   - 必填：否
   - 示例/默认值：`15532323232`
   - 说明：Buyer application phone

40. `data.gmfApplyReason`
   - 类型：string
   - 数组：否
   - 必填：否
   - 示例/默认值：`Reason for application`
   - 说明：Reason for Buyer’s Application

41. `data.items`
   - 类型：object
   - 数组：是
   - 必填：否
   - 说明：Details

42. `data.items.fphxz`
   - 类型：number
   - 数组：否
   - 必填：否
   - 示例/默认值：`0`
   - 说明：Invoice line nature: 0 - Normal line; 1 - Discount line; 2 - Discounted line

43. `data.items.hh`
   - 类型：string
   - 数组：否
   - 必填：否
   - 示例/默认值：`0`
   - 说明：Line Number

44. `data.items.zkhhh`
   - 类型：string
   - 数组：否
   - 必填：否
   - 示例/默认值：`1`
   - 说明：Discount line number

45. `data.items.xmmc`
   - 类型：string
   - 数组：否
   - 必填：否
   - 示例/默认值：`*Grain* swwlmc001`
   - 说明：Project Name

46. `data.items.dw`
   - 类型：string
   - 数组：否
   - 必填：否
   - 示例/默认值：`ton`
   - 说明：Unit

47. `data.items.ggxh`
   - 类型：string
   - 数组：否
   - 必填：否
   - 示例/默认值：`piece/1`
   - 说明：Specification Model

48. `data.items.xmsl`
   - 类型：number
   - 数组：否
   - 必填：否
   - 示例/默认值：`1`
   - 说明：Project Quantity

49. `data.items.xmdj`
   - 类型：number
   - 数组：否
   - 必填：否
   - 示例/默认值：`-1`
   - 说明：Project Unit Price

50. `data.items.xmhsdj`
   - 类型：number
   - 数组：否
   - 必填：否
   - 示例/默认值：`1.17`
   - 说明：Project tax-inclusive unit price

51. `data.items.xmje`
   - 类型：number
   - 数组：否
   - 必填：否
   - 示例/默认值：`-1`
   - 说明：Project Amount

52. `data.items.sl`
   - 类型：number
   - 数组：否
   - 必填：否
   - 示例/默认值：`0.17`
   - 说明：Tax Rate

53. `data.items.se`
   - 类型：number
   - 数组：否
   - 必填：否
   - 示例/默认值：`-1.7`
   - 说明：Tax amount

54. `data.items.kce`
   - 类型：number
   - 数组：否
   - 必填：否
   - 示例/默认值：`0`
   - 说明：Discount Amount

55. `data.items.hsbz`
   - 类型：string
   - 数组：否
   - 必填：否
   - 示例/默认值：`N`
   - 说明：Tax Included Indicator: Y - Tax Included; N - Tax Excluded

56. `data.items.xmjshj`
   - 类型：number
   - 数组：否
   - 必填：否
   - 示例/默认值：`-1.17`
   - 说明：Project total including tax

57. `data.items.spbm`
   - 类型：string
   - 数组：否
   - 必填：否
   - 示例/默认值：`1010101010000000000`
   - 说明：Product Tax Category Code

58. `data.items.zxbm`
   - 类型：string
   - 数组：否
   - 必填：否
   - 示例/默认值：`ZX-003`
   - 说明：Product Self-Coding

59. `data.items.yhzcbs`
   - 类型：string
   - 数组：否
   - 必填：否
   - 示例/默认值：`0`
   - 说明：Discount Policy Indicator; 0: Not in use, 1: In use

60. `data.items.lslbs`
   - 类型：string
   - 数组：否
   - 必填：否
   - 示例/默认值：`1`
   - 说明：Zero Tax Rate Indicator; Blank: Non-zero Tax Rate, 0: Export Tax Refund, 1: Exempt, 2: Not Levied, 3: Normal
     Zero Tax Rate

61. `data.items.zzstsgl`
   - 类型：string
   - 数组：否
   - 必填：否
   - 示例/默认值：`Simplified tax collection at 3%`
   - 说明：Description of preferential policies; Simplified taxation at 3%, simplified taxation at 5% (When this field is
     not empty, the value of the preferential identification field YHZCBS must be 1)

62. `data.items.ysxmmc`
   - 类型：string
   - 数组：否
   - 必填：否
   - 示例/默认值：`swwlmc001`
   - 说明：Original Project Name

63. `data.items.lzmxxh`
   - 类型：string
   - 数组：否
   - 必填：否
   - 示例/默认值：`1`
   - 说明：Blue invoice line number

64. `data.slbz`
   - 类型：string
   - 数组：否
   - 必填：否
   - 示例/默认值：`0`
   - 说明：Tax Rate Indicator; 0 - Normal Taxation; 2 - Differential Taxation

65. `data.taxRate`
   - 类型：number
   - 数组：否
   - 必填：否
   - 示例/默认值：`0.1`
   - 说明：Tax Rate

66. `data.billType`
   - 类型：string
   - 数组：否
   - 必填：否
   - 示例/默认值：`0`
   - 说明：Information Form Type 0 Normal 1 Overdue

67. `data.szlb`
   - 类型：string
   - 数组：否
   - 必填：否
   - 示例/默认值：`1`
   - 说明：Tax category; default is 1 - VAT, currently there are no other types.

68. `data.isMutiRate`
   - 类型：boolean
   - 数组：否
   - 必填：否
   - 示例/默认值：`false`
   - 说明：Multiple Tax Rates; true - Yes, false - No

69. `data.yddk`
   - 类型：string
   - 数组：否
   - 必填：否
   - 示例/默认值：`YD-123456`
   - 说明：Remote Invoice Issuance

70. `data.dkbdbs`
   - 类型：string
   - 数组：否
   - 必填：否
   - 示例/默认值：`DKB-Database`
   - 说明：Substitute Opening Comparison Identifier

71. `data.invoiceStatus`
   - 类型：string
   - 数组：否
   - 必填：否
   - 示例/默认值：`1`
   - 说明：Red Character Information Table Invoice Status; 1 - Pending Invoice; 2 - Invoicing; 3 - Invoices Issued; 4 -
     Partially Invoiced; 5 - Invoice Failed

72. `data.sendOrReceive`
   - 类型：string
   - 数组：否
   - 必填：否
   - 示例/默认值：`0`
   - 说明：Initiator/Accession Party Identifier; 0: Accession Party 1: Initiator

73. `data.hcyy`
   - 类型：string
   - 数组：否
   - 必填：否
   - 示例/默认值：`1`
   - 说明：Reasons for Red Invoice: 1. Sales Return 2. Invoice Error 3. Invoice Cancellation 4. Sales Discount

74. `data.yxbz`
   - 类型：string
   - 数组：否
   - 必填：否
   - 示例/默认值：`Y`
   - 说明：Valid Identifier Y: Valid N: Invalid

75. `data.customerCode`
   - 类型：string
   - 数组：否
   - 必填：否
   - 示例/默认值：`CUST-0001`
   - 说明：Buyer Code

76. `data.psNo`
   - 类型：string
   - 数组：否
   - 必填：否
   - 示例/默认值：`PS-202304`
   - 说明：Project PS Number

77. `data.unUsedAndUnEntry`
   - 类型：boolean
   - 数组：否
   - 必填：否
   - 示例/默认值：`false`
   - 说明：Not yet recorded and not used; true - yes; false - no

78. `data.fphm`
   - 类型：string
   - 数组：否
   - 必填：否
   - 示例/默认值：`2023042500`
   - 说明：Issued red invoice number

79. `data.tspz`
   - 类型：string
   - 数组：否
   - 必填：否
   - 示例/默认值：`E04`
   - 说明：Special Invoice Types; 0: General; 2: Fuel VAT Special Invoice; 8: Agricultural Product Sales; 9: Agricultural
     Product Purchase; 11: Tobacco Invoice; 12: Motor Vehicle Invoice; 14: Refined Oil Invoice; DK: Invoice Issued
     on Behalf; 16: Mineral Product Invoice; E01: Refined Oil Invoice; E03: Construction Service Invoice; E04:
     Goods Transportation; E05: Real Estate Sales; E06: Real Estate Leasing Service Invoice; E07: Collection of
     Vehicle and Vessel Tax; E09: Passenger Transportation; E12: Self-produced Agricultural Product Sales; E16:
     Agricultural Product Purchase; E17: Photovoltaic Purchase; E18: Cigarette Invoice

80. `data.lpkprq`
   - 类型：string
   - 数组：否
   - 必填：否
   - 示例/默认值：`2024-01-01`
   - 说明：Blue invoice issuance date; yyyy-MM-dd

81. `data.fplyDm`
   - 类型：string
   - 数组：否
   - 必填：否
   - 示例/默认值：`12152513`
   - 说明：Invoice Source Code

82. `data.lzfpqdhm`
   - 类型：string
   - 数组：否
   - 必填：否
   - 示例/默认值：`45616235464135`
   - 说明：Blue Invoice Fully Digitized Electronic Invoice Number

83. `data.needSelfConfirm`
   - 类型：string
   - 数组：否
   - 必填：否
   - 示例/默认值：`Y`
   - 说明：Does the digital circuit basic channel need to be confirmed by oneself? Y for Yes, N for No.

84. `data.allElcUserName`
   - 类型：string
   - 数组：否
   - 必填：否
   - 示例/默认值：`User123`
   - 说明：Full Electric Login Username

85. `data.gmfApply`
   - 类型：boolean
   - 数组：否
   - 必填：否
   - 示例/默认值：`true`
   - 说明：Is the buyer's application; true - yes; false - no

86. `data.orgCode`
   - 类型：string
   - 数组：否
   - 必填：否
   - 示例/默认值：`ORG-0001`
   - 说明：Invoicing Site Code, query in the Invoicing Site file; if orgType is provided, then find the corresponding
     orgCode in the Business Unit using the type value.

87. `data.urls`
   - 类型：string
   - 数组：否
   - 必填：否
   - 示例/默认值：`https://example.com/urls`
   - 说明：Interface callback address (multiple)

88. `data.xsfDzdh`
   - 类型：string
   - 数组：否
   - 必填：否
   - 示例/默认值：`Haidian District, Beijing 155223235`
   - 说明：Seller's Address and Phone Number

89. `data.xsfYhzh`
   - 类型：string
   - 数组：否
   - 必填：否
   - 示例/默认值：`X Beijing Bank 23236`
   - 说明：Seller's bank account number

90. `data.callback`
   - 类型：string
   - 数组：否
   - 必填：否
   - 示例/默认值：`https://example.com/callback`
   - 说明：Return Address

## 返回示例

### 成功示例

无。

### 失败示例

无。

## 错误码

| 错误码 | 错误说明 | 处理建议 |
| --- | --- | --- |
| 1002 |  |  |


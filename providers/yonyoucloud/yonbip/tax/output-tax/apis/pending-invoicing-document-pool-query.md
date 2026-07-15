# Pending Invoicing Document Pool Query

来源页面：

- https://open.yonyoucloud.com/#/doc-center/docDes/api?apiId=1821609593067798537&isOrigin=1&selectApiTab=open&from=&iframe=

机器可抓取的详情接口：

- https://open.yonyoucloud.com/iuap-ipaas-base/openPortal/api/getByVersionForTest/1821609593067798537/running?scene=open&isOrigin=1&isAjax=1

## 基本信息

- apiId：1821609593067798537
- API 类目：待开票单据池
- 所属目录：开票单据池（Invoicing Doc Pool）
- 产品：税务服务
- 更新时间：2025-07-01 17:07:10.000
- 请求方法：POST
- Content-Type：application/json
- 接口路径：/yonbip/tax/yonbip-fi-taxotypd/api/tax-bill-pool/query
- 完整调用地址：https://c2.yonyoucloud.com/iuap-api-gateway/yonbip/tax/yonbip-fi-taxotypd/api/tax-bill-pool/query
- 鉴权方式：access_token 作为 Query 参数传递（?access_token=）
- 当前状态：当前接口
- 请求字段数：Query 0 个，Body 1 个
- 返回字段数：100 个

## 对接要点

- 调用 URL：`https://c2.yonyoucloud.com/iuap-api-gateway/yonbip/tax/yonbip-fi-taxotypd/api/tax-bill-pool/query?access_token={access_token}`
- 调用方必须保存业务来源单号、发票请求流水号、请求报文、响应报文和状态查询结果，便于重试和对账。
- 开票、红冲、作废、驱动开票等写操作建议用业务唯一号做幂等控制；同一业务单不要生成多个不同流水号反复提交。
- 返回成功只代表接口调用成功，不一定代表税局或开票终态成功；涉及开票结果时必须再调用状态查询类接口确认。
- 详情接口返回字段说明可能为英文，字段名以开放平台原始字段为准。

## 调用模板

```bash
curl -X POST 'https://c2.yonyoucloud.com/iuap-api-gateway/yonbip/tax/yonbip-fi-taxotypd/api/tax-bill-pool/query?access_token=访问令牌' \
  -H 'Content-Type: application/json' \
  -d '{"data": {}}'
```

## 请求参数

### Query 参数

无。

> 注：开放平台网关调用时通常还需传递 `access_token`。

### Body 参数

1. `djId`
   - 类型：string
   - 数组：否
   - 必填：是
   - 示例/默认值：`12345678901234567890`
   - 说明：Business Document Number

## 请求示例

```text
Url: /yonbip/tax/yonbip-fi-taxotypd/api/tax-bill-pool/query?access_token=访问令牌&djNo=12345678901234567890
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

3. `data`
   - 类型：object
   - 数组：否
   - 必填：否
   - 说明：Return data

4. `data.billPool`
   - 类型：object
   - 数组：否
   - 必填：否
   - 说明：Document Pool Data

5. `data.billPool.djId`
   - 类型：string
   - 数组：否
   - 必填：否
   - 示例/默认值：`10000000000000IS3X10`
   - 说明：Business Document ID

6. `data.billPool.djNo`
   - 类型：string
   - 数组：否
   - 必填：否
   - 示例/默认值：`BJ2304200001Q4`
   - 说明：Business Document Number

7. `data.billPool.define`
   - 类型：object
   - 数组：否
   - 必填：否
   - 示例/默认值：`{"key":"value"}`
   - 说明：User-defined Field

8. `data.billPool.billPoolBList`
   - 类型：object
   - 数组：是
   - 必填：否
   - 说明：Document Pool Data Details

9. `data.billPool.billPoolBList.djmxId`
   - 类型：string
   - 数组：否
   - 必填：否
   - 示例/默认值：`10000000000002IS3XQB`
   - 说明：Business Document Detail ID

10. `data.billPool.billPoolBList.hh`
   - 类型：string
   - 数组：否
   - 必填：否
   - 示例/默认值：`1`
   - 说明：Business Document Detail Line Number

11. `data.billPool.billPoolBList.hisJshj`
   - 类型：BigDecimal
   - 数组：否
   - 必填：否
   - 示例/默认值：`80`
   - 说明：Total Amount of Invoices Issued for Business Document Details (Including Tax)

12. `data.billPool.billPoolBList.willJshj`
   - 类型：BigDecimal
   - 数组：否
   - 必填：否
   - 示例/默认值：`20`
   - 说明：Total amount of price and tax for business document details pending invoicing

13. `data.billPool.billPoolBList.define`
   - 类型：object
   - 数组：否
   - 必填：否
   - 示例/默认值：`{"key":"value"}`
   - 说明：User-defined Field

14. `data.billPool.billPoolBList.fpmxList`
   - 类型：object
   - 数组：是
   - 必填：否
   - 说明：Invoice Details

15. `data.billPool.billPoolBList.fpmxList.fplx`
   - 类型：string
   - 数组：否
   - 必填：否
   - 示例/默认值：`1`
   - 说明：Invoice Type 1: VAT Electronic Normal Invoice; 2: VAT Electronic Special Invoice; 3: VAT Normal Invoice; 4:
     VAT Special Invoice, VAT Special Invoice (Motor Vehicle); 5: Unified Invoice for Motor Vehicle Sales; 8: VAT
     Electronic Normal Invoice (Refined Oil); 9: Refined Oil Normal Invoice (Roll); 10: Refined Oil Normal Invoice;
     11: Refined Oil Special Invoice; 12: VAT Normal Invoice (Roll); 15: Unified Invoice for Second-Hand Vehicle
     Sales; 31: Digital Special Invoice; 32: Digital Normal Invoice; 33: Digital Paper Invoice (VAT Special
     Invoice);

16. `data.billPool.billPoolBList.fpmxList.fpqqlsh`
   - 类型：string
   - 数组：否
   - 必填：否
   - 示例/默认值：`P1814304738528722949`
   - 说明：Invoice request serial number

17. `data.billPool.billPoolBList.fpmxList.fpDm`
   - 类型：string
   - 数组：否
   - 必填：否
   - 示例/默认值：`202311141553`
   - 说明：Invoice Code

18. `data.billPool.billPoolBList.fpmxList.fpHm`
   - 类型：string
   - 数组：否
   - 必填：否
   - 示例/默认值：`22927813`
   - 说明：Invoice Number

19. `data.billPool.billPoolBList.fpmxList.fpzt`
   - 类型：string
   - 数组：否
   - 必填：否
   - 示例/默认值：`3`
   - 说明：Invoice Status 1: Not Invoiced; 2: Invoicing; 3: Invoices Issued; 5: Invoicing Failed;

20. `data.billPool.billPoolBList.fpmxList.failReason`
   - 类型：string
   - 数组：否
   - 必填：否
   - 示例/默认值：`Network issues`
   - 说明：Reason for failure

21. `data.billPool.billPoolBList.fpmxList.gmfMc`
   - 类型：string
   - 数组：否
   - 必填：否
   - 示例/默认值：`Ya'an Xinhui Tea Industry Co., Ltd.`
   - 说明：Buyer Name

22. `data.billPool.billPoolBList.fpmxList.gmfNsrsbh`
   - 类型：string
   - 数组：否
   - 必填：否
   - 示例/默认值：`123123123123123`
   - 说明：Buyer Tax Number

23. `data.billPool.billPoolBList.fpmxList.je`
   - 类型：BigDecimal
   - 数组：否
   - 必填：否
   - 示例/默认值：`25.04`
   - 说明：Invoice Amount for Document Details

24. `data.billPool.billPoolBList.fpmxList.jshj`
   - 类型：BigDecimal
   - 数组：否
   - 必填：否
   - 示例/默认值：`28.29`
   - 说明：Invoice Price Tax Total for Document Details

25. `data.billPool.billPoolBList.fpmxList.se`
   - 类型：BigDecimal
   - 数组：否
   - 必填：否
   - 示例/默认值：`3.25`
   - 说明：Invoice Tax Amount for Document Details

26. `data.billPool.billPoolBList.fpmxList.sl`
   - 类型：BigDecimal
   - 数组：否
   - 必填：否
   - 示例/默认值：`0.13`
   - 说明：Invoice Tax Rate for Document Details

27. `data.billPool.invoiceList`
   - 类型：object
   - 数组：是
   - 必填：否
   - 说明：Invoice List

28. `data.billPool.invoiceList.ewm`
   - 类型：string
   - 数组：否
   - 必填：否
   - 示例/默认值：`01,10,202311141553,22927813,29.21,20230911,77432162363170653878,7036`
   - 说明：Invoice QR Code

29. `data.billPool.invoiceList.fhr`
   - 类型：string
   - 数组：否
   - 必填：否
   - 示例/默认值：`Reviewer`
   - 说明：Reviewer

30. `data.billPool.invoiceList.fpDm`
   - 类型：string
   - 数组：否
   - 必填：否
   - 示例/默认值：`202311141553`
   - 说明：Invoice Code

31. `data.billPool.invoiceList.fpHm`
   - 类型：string
   - 数组：否
   - 必填：否
   - 示例/默认值：`22927813`
   - 说明：Invoice Number

32. `data.billPool.invoiceList.fpMw`
   - 类型：string
   - 数组：否
   - 必填：否
   - 示例/默认值：`03-188574<*7-9*56458*81-9><>0-9>988*2<-188574<*7-9*5+08364**59*2171+84<6086-7/<11>4/9115>7-/*1011670065918/267*7`
   - 说明：Invoice ciphertext

33. `data.billPool.invoiceList.fplx`
   - 类型：string
   - 数组：否
   - 必填：否
   - 示例/默认值：`1`
   - 说明：Invoice Type 1: VAT Electronic Normal Invoice; 2: VAT Electronic Special Invoice; 3: VAT Normal Invoice; 4:
     VAT Special Invoice, VAT Special Invoice (Motor Vehicle); 5: Unified Invoice for Motor Vehicle Sales; 8: VAT
     Electronic Normal Invoice (Refined Oil); 9: Refined Oil Normal Invoice (Roll); 10: Refined Oil Normal Invoice;
     11: Refined Oil Special Invoice; 12: VAT Normal Invoice (Roll); 15: Unified Invoice for Second-Hand Vehicle
     Sales; 31: Digital Special Invoice; 32: Digital Normal Invoice; 33: Digital Paper Invoice (VAT Special
     Invoice);

34. `data.billPool.invoiceList.zsfs`
   - 类型：string
   - 数组：否
   - 必填：否
   - 示例/默认值：`0`
   - 说明：Collection Method 0. Taxation 2. Differential

35. `data.billPool.invoiceList.fpqqlsh`
   - 类型：string
   - 数组：否
   - 必填：否
   - 示例/默认值：`P1814304738528722949`
   - 说明：Invoice request serial number

36. `data.billPool.invoiceList.bmbBbh`
   - 类型：string
   - 数组：否
   - 必填：否
   - 示例/默认值：`48.34`
   - 说明：Encoding Table Version Number

37. `data.billPool.invoiceList.zfbz`
   - 类型：string
   - 数组：否
   - 必填：否
   - 示例/默认值：`N`
   - 说明：Cancellation Status Y - Canceled N - Not Canceled I - Canceled in Process

38. `data.billPool.invoiceList.gmfDz`
   - 类型：string
   - 数组：否
   - 必填：否
   - 示例/默认值：`Beijing`
   - 说明：Buyer Address

39. `data.billPool.invoiceList.gmfDh`
   - 类型：string
   - 数组：否
   - 必填：否
   - 示例/默认值：`1111111111`
   - 说明：Buyer's phone number

40. `data.billPool.invoiceList.gmfDzdh`
   - 类型：string
   - 数组：否
   - 必填：否
   - 示例/默认值：`Beijing 1111`
   - 说明：Buyer Address Phone

41. `data.billPool.invoiceList.gmfMc`
   - 类型：string
   - 数组：否
   - 必填：否
   - 示例/默认值：`Ya'an Xinhui Tea Industry Co., Ltd.`
   - 说明：Buyer Name

42. `data.billPool.invoiceList.gmfNsrsbh`
   - 类型：string
   - 数组：否
   - 必填：否
   - 示例/默认值：`1111111111`
   - 说明：Buyer Tax Number

43. `data.billPool.invoiceList.gmfYh`
   - 类型：string
   - 数组：否
   - 必填：否
   - 示例/默认值：`Beijing Bank`
   - 说明：Purchaser's Bank

44. `data.billPool.invoiceList.gmfZh`
   - 类型：string
   - 数组：否
   - 必填：否
   - 示例/默认值：`123123123123`
   - 说明：Buyer Account

45. `data.billPool.invoiceList.gmfYhzh`
   - 类型：string
   - 数组：否
   - 必填：否
   - 示例/默认值：`123123123123`
   - 说明：Buyer's bank account number

46. `data.billPool.invoiceList.hjje`
   - 类型：BigDecimal
   - 数组：否
   - 必填：否
   - 示例/默认值：`29.21`
   - 说明：Total Amount

47. `data.billPool.invoiceList.hjse`
   - 类型：BigDecimal
   - 数组：否
   - 必填：否
   - 示例/默认值：`3.79`
   - 说明：Total Tax Amount

48. `data.billPool.invoiceList.jqbh`
   - 类型：string
   - 数组：否
   - 必填：否
   - 示例/默认值：`661624294025`
   - 说明：Machine Number

49. `data.billPool.invoiceList.jshj`
   - 类型：BigDecimal
   - 数组：否
   - 必填：否
   - 示例/默认值：`33`
   - 说明：Invoice total including tax

50. `data.billPool.invoiceList.jym`
   - 类型：string
   - 数组：否
   - 必填：否
   - 示例/默认值：`77432162363170653878`
   - 说明：Verification code

51. `data.billPool.invoiceList.kplx`
   - 类型：long
   - 数组：否
   - 必填：否
   - 示例/默认值：`0`
   - 说明：Invoice Type 0. Blue Invoice 1. Red Invoice

52. `data.billPool.invoiceList.kpr`
   - 类型：string
   - 数组：否
   - 必填：否
   - 示例/默认值：`Liu Ling`
   - 说明：Invoicer

53. `data.billPool.invoiceList.kprq`
   - 类型：string
   - 数组：否
   - 必填：否
   - 示例/默认值：`20230911141553`
   - 说明：Invoice Date YYYYMMDDHHMMSS

54. `data.billPool.invoiceList.lyid`
   - 类型：string
   - 数组：否
   - 必填：否
   - 示例/默认值：`SWY1814295298190606345`
   - 说明：Source ID

55. `data.billPool.invoiceList.lylx`
   - 类型：string
   - 数组：否
   - 必填：否
   - 示例/默认值：`1`
   - 说明：Source Type; 1 - Manual Issuance; 2 - Interface Input; 3 - File Import; 4 - QR Code Scan; 5 - WeChat Input; 6
     - Quick Invoicing; 7 - Alipay Input; 8 - Pinduoduo; 9 - Mini Program; w - Pending Invoice Details; v - Invoice
     Application Document; n - NCC Input

56. `data.billPool.invoiceList.skr`
   - 类型：string
   - 数组：否
   - 必填：否
   - 示例/默认值：`Liu Ling`
   - 说明：Payee

57. `data.billPool.invoiceList.xsfDz`
   - 类型：string
   - 数组：否
   - 必填：否
   - 示例/默认值：`Haidian District, Beijing`
   - 说明：Seller's Address

58. `data.billPool.invoiceList.xsfDh`
   - 类型：string
   - 数组：否
   - 必填：否
   - 示例/默认值：`62881722`
   - 说明：Seller's phone number

59. `data.billPool.invoiceList.xsfDzdh`
   - 类型：string
   - 数组：否
   - 必填：否
   - 示例/默认值：`Haidian District, Beijing 62881722`
   - 说明：Seller's Address and Phone Number

60. `data.billPool.invoiceList.xsfMc`
   - 类型：string
   - 数组：否
   - 必填：否
   - 示例/默认值：`Yonyou Tax Cloud`
   - 说明：Seller Name

61. `data.billPool.invoiceList.xsfNsrsbh`
   - 类型：string
   - 数组：否
   - 必填：否
   - 示例/默认值：`111222333456777`
   - 说明：Seller's Tax Number

62. `data.billPool.invoiceList.xsfYh`
   - 类型：string
   - 数组：否
   - 必填：否
   - 示例/默认值：`Beijing Bank`
   - 说明：Seller's Bank Account Bank

63. `data.billPool.invoiceList.xsfZh`
   - 类型：string
   - 数组：否
   - 必填：否
   - 示例/默认值：`13123123`
   - 说明：Seller Account

64. `data.billPool.invoiceList.xsfYhzh`
   - 类型：string
   - 数组：否
   - 必填：否
   - 示例/默认值：`Beijing Bank 13123123`
   - 说明：Seller's bank account number

65. `data.billPool.invoiceList.bred`
   - 类型：string
   - 数组：否
   - 必填：否
   - 示例/默认值：`N`
   - 说明：Is it red-voided? Y: Yes; N: No

66. `data.billPool.invoiceList.bz`
   - 类型：string
   - 数组：否
   - 必填：否
   - 说明：Remarks

67. `data.billPool.invoiceList.items`
   - 类型：object
   - 数组：是
   - 必填：否
   - 说明：Detail line

68. `data.billPool.invoiceList.items.dw`
   - 类型：string
   - 数组：否
   - 必填：否
   - 示例/默认值：`Unit`
   - 说明：Unit

69. `data.billPool.invoiceList.items.fphxz`
   - 类型：string
   - 数组：否
   - 必填：否
   - 示例/默认值：`0`
   - 说明：Invoice Line Nature 0. Normal Line 1. Discount Line 2. Discounted Line

70. `data.billPool.invoiceList.items.ggxh`
   - 类型：string
   - 数组：否
   - 必填：否
   - 示例/默认值：`Specification Model`
   - 说明：Specification Model

71. `data.billPool.invoiceList.items.hh`
   - 类型：string
   - 数组：否
   - 必填：否
   - 示例/默认值：`1`
   - 说明：Invoice Detail Line Number

72. `data.billPool.invoiceList.items.kce`
   - 类型：BigDecimal
   - 数组：否
   - 必填：否
   - 示例/默认值：`0`
   - 说明：Deduction

73. `data.billPool.invoiceList.items.se`
   - 类型：BigDecimal
   - 数组：否
   - 必填：否
   - 示例/默认值：`3.25`
   - 说明：Tax amount

74. `data.billPool.invoiceList.items.sl`
   - 类型：BigDecimal
   - 数组：否
   - 必填：否
   - 示例/默认值：`0.13`
   - 说明：Tax Rate

75. `data.billPool.invoiceList.items.spbm`
   - 类型：string
   - 数组：否
   - 必填：否
   - 示例/默认值：`1040101010000000000`
   - 说明：Product Code

76. `data.billPool.invoiceList.items.xmdj`
   - 类型：BigDecimal
   - 数组：否
   - 必填：否
   - 示例/默认值：`25.04`
   - 说明：Project Unit Price

77. `data.billPool.invoiceList.items.xmhsdj`
   - 类型：BigDecimal
   - 数组：否
   - 必填：否
   - 示例/默认值：`28.29`
   - 说明：Project tax-inclusive unit price

78. `data.billPool.invoiceList.items.xmje`
   - 类型：BigDecimal
   - 数组：否
   - 必填：否
   - 示例/默认值：`25.04`
   - 说明：Project Amount

79. `data.billPool.invoiceList.items.xmjshj`
   - 类型：BigDecimal
   - 数组：否
   - 必填：否
   - 示例/默认值：`28.29`
   - 说明：Total Price and Tax of the Project

80. `data.billPool.invoiceList.items.xmmc`
   - 类型：string
   - 数组：否
   - 必填：否
   - 示例/默认值：`*Textile Products* NCCloud1909 (Online Registration) Dynamic Modeling Platform`
   - 说明：Project Name

81. `data.billPool.invoiceList.items.xmsl`
   - 类型：BigDecimal
   - 数组：否
   - 必填：否
   - 示例/默认值：`1`
   - 说明：Project Quantity

82. `data.billPool.invoiceList.items.yhzcbs`
   - 类型：string
   - 数组：否
   - 必填：否
   - 示例/默认值：`0`
   - 说明：Discount Policy Identifier Sales Discount Identifier; 0: Not in use, 1: In use

83. `data.billPool.invoiceList.items.zxbm`
   - 类型：string
   - 数组：否
   - 必填：否
   - 示例/默认值：`10`
   - 说明：Self-coding

84. `data.billPool.invoiceList.items.ysxmmc`
   - 类型：string
   - 数组：否
   - 必填：否
   - 示例/默认值：`NCCloud1909 (Online Registration) Dynamic Modeling Platform`
   - 说明：Original Project Name

85. `data.billPool.invoiceList.items.einvoiceHisBMotor`
   - 类型：object
   - 数组：否
   - 必填：否
   - 说明：Vehicle-related fields

86. `data.billPool.invoiceList.items.einvoiceHisBMotor.cllx`
   - 类型：string
   - 数组：否
   - 必填：否
   - 说明：Vehicle Type

87. `data.billPool.invoiceList.items.einvoiceHisBMotor.sfzhm`
   - 类型：string
   - 数组：否
   - 必填：否
   - 说明：ID number / Organization code

88. `data.billPool.invoiceList.items.einvoiceHisBMotor.hgzh`
   - 类型：string
   - 数组：否
   - 必填：否
   - 说明：Certificate Number

89. `data.billPool.invoiceList.items.einvoiceHisBMotor.jkzmsh`
   - 类型：string
   - 数组：否
   - 必填：否
   - 说明：Import Certificate Number

90. `data.billPool.invoiceList.items.einvoiceHisBMotor.sjdh`
   - 类型：string
   - 数组：否
   - 必填：否
   - 说明：Inspection Certificate Number,

91. `data.billPool.invoiceList.items.einvoiceHisBMotor.fdjhm`
   - 类型：string
   - 数组：否
   - 必填：否
   - 说明：Engine number

92. `data.billPool.invoiceList.items.einvoiceHisBMotor.dunwei`
   - 类型：string
   - 数组：否
   - 必填：否
   - 说明：Tonnage

93. `data.billPool.invoiceList.items.einvoiceHisBMotor.xcrs`
   - 类型：string
   - 数组：否
   - 必填：否
   - 说明：Maximum number of passengers

94. `data.billPool.invoiceList.items.einvoiceHisBMotor.cd`
   - 类型：string
   - 数组：否
   - 必填：否
   - 说明：Place of origin

95. `data.billPool.invoiceList.items.einvoiceHisBMotor.cjhm`
   - 类型：string
   - 数组：否
   - 必填：否
   - 说明：Chassis number

96. `data.billPool.invoiceList.items.einvoiceHisBMotor.cpxh`
   - 类型：string
   - 数组：否
   - 必填：否
   - 说明：Brand and model

97. `data.billPool.invoiceList.items.einvoiceHisBMotor.scqymc`
   - 类型：string
   - 数组：否
   - 必填：否
   - 说明：Production Enterprise Name

98. `data.billPool.invoiceList.items.einvoiceHisBMotor.swjgdm`
   - 类型：string
   - 数组：否
   - 必填：否
   - 说明：Tax Authority Code

99. `data.billPool.invoiceList.items.einvoiceHisBMotor.swjgmc`
   - 类型：string
   - 数组：否
   - 必填：否
   - 说明：Name of the Tax Authority

100. `data.billPool.invoiceList.items.einvoiceHisBMotor.wspzh`
   - 类型：string
   - 数组：否
   - 必填：否
   - 说明：Tax Payment Voucher Number

## 返回示例

### 成功示例

无。

### 失败示例

无。

## 错误码

| 错误码 | 错误说明 | 处理建议 |
| --- | --- | --- |
| 9999 |  |  |


# Invoice Status Inquiry

来源页面：

- https://open.yonyoucloud.com/#/doc-center/docDes/api?apiId=1969588327580958724&isOrigin=1&selectApiTab=open&from=&iframe=

机器可抓取的详情接口：

- https://open.yonyoucloud.com/iuap-ipaas-base/openPortal/api/getByVersionForTest/1969588327580958724/running?scene=open&isOrigin=1&isAjax=1

## 基本信息

- apiId：1969588327580958724
- API 类目：开票管理
- 所属目录：开票（Invoicing）
- 产品：
- 更新时间：2026-05-19 20:21:51.000
- 请求方法：POST
- Content-Type：application/json
- 接口路径：/yonbip/tax/invoiceclient-web/api/invoiceApply/queryInvoiceStatusWithJson
- 完整调用地址：https://c2.yonyoucloud.com/iuap-api-gateway/yonbip/tax/invoiceclient-web/api/invoiceApply/queryInvoiceStatusWithJson
- 鉴权方式：access_token 作为 Query 参数传递（?access_token=）
- 当前状态：当前接口
- 请求字段数：Query 0 个，Body 1 个
- 返回字段数：94 个

## 对接要点

- 调用 URL：`https://c2.yonyoucloud.com/iuap-api-gateway/yonbip/tax/invoiceclient-web/api/invoiceApply/queryInvoiceStatusWithJson?access_token={access_token}`
- 调用方必须保存业务来源单号、发票请求流水号、请求报文、响应报文和状态查询结果，便于重试和对账。
- 开票、红冲、作废、驱动开票等写操作建议用业务唯一号做幂等控制；同一业务单不要生成多个不同流水号反复提交。
- 返回成功只代表接口调用成功，不一定代表税局或开票终态成功；涉及开票结果时必须再调用状态查询类接口确认。
- 详情接口返回字段说明可能为英文，字段名以开放平台原始字段为准。

## 调用模板

```bash
curl -X POST 'https://c2.yonyoucloud.com/iuap-api-gateway/yonbip/tax/invoiceclient-web/api/invoiceApply/queryInvoiceStatusWithJson?access_token=访问令牌' \
  -H 'Content-Type: application/json' \
  -d '{"data": {}}'
```

## 请求参数

### Query 参数

无。

> 注：开放平台网关调用时通常还需传递 `access_token`。

### Body 参数

1. `fpqqlsh`
   - 类型：string
   - 数组：否
   - 必填：是
   - 示例/默认值：`1354466355222`
   - 说明：Invoice Request SN

## 请求示例

```text
Url: /yonbip/tax//api/invoiceApplyqueryInvoiceStatusWithJson?access_token=访问令牌  
Body: {
	"fpqqlsh": "1354466355222"
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

2. `data`
   - 类型：object
   - 数组：否
   - 必填：否
   - 说明：Data

3. `data.bsstatus`
   - 类型：string
   - 数组：否
   - 必填：否
   - 示例/默认值：`0`
   - 说明：Layout status.0-Layout success;1-Layout failure

4. `data.smsState`
   - 类型：string
   - 数组：否
   - 必填：否
   - 示例/默认值：`0`
   - 说明：SMS delivery status. 0 - Not delivered 1 - Delivery failed 2 - Delivery successful. Delivery successful only
     indicates that the SMS content has been successfully pushed to the SMS operator and the sending action has
     been completed. It cannot identify whether the SMS was successfully sent and received by the recipient

5. `data.emailState`
   - 类型：string
   - 数组：否
   - 必填：否
   - 示例/默认值：`0`
   - 说明：SMS delivery status. 0-Undelivered 1-Delivery failed 2-Delivery successful. Delivery successful only indicates
     that the SMS content has been successfully pushed to the SMS operator and the sending action has been
     completed. It does not indicate whether the SMS was successfully sent or received by the recipient

6. `data.errmsg`
   - 类型：string
   - 数组：否
   - 必填：否
   - 说明：Error Information

7. `data.fpqqlsh`
   - 类型：string
   - 数组：否
   - 必填：否
   - 示例/默认值：`1520063275914174464`
   - 说明：Invoice Request SN

8. `data.data`
   - 类型：object
   - 数组：否
   - 必填：否
   - 说明：Invoice

9. `data.data.fpqqlsh`
   - 类型：string
   - 数组：否
   - 必填：否
   - 示例/默认值：`1520063275914174464`
   - 说明：Invoice Request SN

10. `data.data.pdf`
   - 类型：string
   - 数组：否
   - 必填：否
   - 示例/默认值：`JVBERi0xLjMKJcTl7gwoMSAwIG9iago8PAovVHlwZSAvUGFnZQovUGFyZW50IDIgMCBSCi9NZWRpYUJveCBbMCAwIDYzMiA3OTJdCi9Db250ZW50cyAzIDAgUgovRW5jb2RpbmcgL1dpbkFuc2lFbmNvZGluZwo+PgplbmRvYmoKMiAwIG9iago8PAovVHlwZSAvUGFnZXMKL0NvdW50IDEKL0tpZHMgWzMgMCBSXQo+PgplbmRvYmoKMyAwIG9`
   - 说明：Base64 encoded data, determined by fileType; pdf for PDF format, ofd for OFD format.

11. `data.data.corpid`
   - 类型：string
   - 数组：否
   - 必填：否
   - 示例/默认值：`mdhpm1a4`
   - 说明：Tenant ID

12. `data.data.data`
   - 类型：object
   - 数组：否
   - 必填：否
   - 说明：Invoice Detailed Data

13. `data.data.data.fpzt`
   - 类型：string
   - 数组：否
   - 必填：否
   - 说明：Invoice status: 1-Pending invoicing (requires confirmation from the invoicing personnel); 2-Invoicing in
     progress; 3-Invoicing failed; 4-Invoicing successful.

14. `data.data.data.accountStatus`
   - 类型：string
   - 数组：否
   - 必填：否
   - 示例/默认值：`1`
   - 说明：Accounting Status: 1 - Not Accounted; 2 - Accounted

15. `data.data.data.aggregate`
   - 类型：string
   - 数组：否
   - 必填：否
   - 示例/默认值：`true`
   - 说明：Whether it is data from the past two months; true indicates querying data within the last two months; leaving
     it blank means querying all data.

16. `data.data.data.bmbBbh`
   - 类型：string
   - 数组：否
   - 必填：否
   - 示例/默认值：`34.0`
   - 说明：Code Table Number

17. `data.data.data.bred`
   - 类型：string
   - 数组：否
   - 必填：否
   - 示例/默认值：`N`
   - 说明：Whether reversed by red flush: Y indicates reversed by red flush, N or null indicates not reversed by red
     flush

18. `data.data.data.bz`
   - 类型：string
   - 数组：否
   - 必填：否
   - 示例/默认值：`N011`
   - 说明：Remarks

19. `data.data.data.code`
   - 类型：string
   - 数组：否
   - 必填：否
   - 示例/默认值：`1265544111`
   - 说明：Organization Code Property

20. `data.data.data.corpId`
   - 类型：string
   - 数组：否
   - 必填：否
   - 示例/默认值：`mdhpm1a4`
   - 说明：Tenant ID

21. `data.data.data.creator`
   - 类型：string
   - 数组：否
   - 必填：否
   - 示例/默认值：`cordkmkm`
   - 说明：Created By

22. `data.data.data.creatorName`
   - 类型：string
   - 数组：否
   - 必填：否
   - 示例/默认值：`John`
   - 说明：Creator Name

23. `data.data.data.email`
   - 类型：string
   - 数组：否
   - 必填：否
   - 示例/默认值：`1464652552@.com`
   - 说明：Email

24. `data.data.data.ewm`
   - 类型：string
   - 数组：否
   - 必填：否
   - 示例/默认值：`01,10,102897054716,23807539,2263.11,20200513,57644233870940613901,E7F0`
   - 说明：QR Code

25. `data.data.data.fhr`
   - 类型：string
   - 数组：否
   - 必填：否
   - 示例/默认值：`John`
   - 说明：Reviewed By

26. `data.data.data.fpDm`
   - 类型：string
   - 数组：否
   - 必填：否
   - 示例/默认值：`011111111007`
   - 说明：Invoice Code

27. `data.data.data.fpHm`
   - 类型：string
   - 数组：否
   - 必填：否
   - 示例/默认值：`03197858`
   - 说明：Invoice No.

28. `data.data.data.fpMw`
   - 类型：string
   - 数组：否
   - 必填：否
   - 示例/默认值：`<-<>48938<4+<14>735+<2554*8-1-<+15<*026+848686/2/3//0>+*>>>356*<757/47>90+<25<<3575**934<+15<*026+848686--57`
   - 说明：Invoice Ciphertext

29. `data.data.data.fpjz`
   - 类型：string
   - 数组：否
   - 必填：否
   - 示例/默认值：`1`
   - 说明：Invoice Medium: 0 Electronic Invoice 1 Paper Invoice

30. `data.data.data.fplx`
   - 类型：string
   - 数组：否
   - 必填：否
   - 示例/默认值：`3`
   - 说明：Invoice Type: 1: VAT Electronic Normal Invoice; 2: VAT Electronic Special Invoice; 3: VAT Normal Invoice; 4:
     VAT Special Invoice; 5: Motor Vehicle Sales Unified Invoice; 8: VAT Electronic Normal Invoice (Refined Oil);
     10: Refined Oil Normal Invoice; 11: Refined Oil Special Invoice; 15: Used Car Sales Unified Invoice; 31:
     Digital Special Invoice; 32: Digital Normal Invoice; 33: Digital Paper Invoice (VAT Special Invoice); 34:
     Digital Paper Invoice (Normal Invoice);

31. `data.data.data.fpqqlsh`
   - 类型：string
   - 数组：否
   - 必填：否
   - 示例/默认值：`1520063275914174464`
   - 说明：Invoice Request SN

32. `data.data.data.gmfDzdh`
   - 类型：string
   - 数组：否
   - 必填：否
   - 示例/默认值：`Haidian District, Xibeiwang 212121`
   - 说明：Purchaser's Address and Phone Number

33. `data.data.data.gmfMc`
   - 类型：string
   - 数组：否
   - 必填：否
   - 示例/默认值：`429 View Difference Amount`
   - 说明：Buyer

34. `data.data.data.gmfNsrsbh`
   - 类型：string
   - 数组：否
   - 必填：否
   - 示例/默认值：`cd56111331231`
   - 说明：Buyer Taxpayer ID No.

35. `data.data.data.gmfYhzh`
   - 类型：string
   - 数组：否
   - 必填：否
   - 示例/默认值：`Beijing Central Bank`
   - 说明：Buyer Bank Account No.

36. `data.data.data.hjje`
   - 类型：BigDecimal
   - 数组：否
   - 必填：否
   - 示例/默认值：`11.89`
   - 说明：Total Amount

37. `data.data.data.hjse`
   - 类型：BigDecimal
   - 数组：否
   - 必填：否
   - 示例/默认值：`0.11`
   - 说明：Total Tax Amount

38. `data.data.data.hzxxbbh`
   - 类型：string
   - 数组：否
   - 必填：否
   - 示例/默认值：`513266526526`
   - 说明：Red Entry Information Table Number

39. `data.data.data.items`
   - 类型：object
   - 数组：是
   - 必填：否
   - 说明：Line Item Information

40. `data.data.data.items.dw`
   - 类型：string
   - 数组：否
   - 必填：否
   - 示例/默认值：`Kg`
   - 说明：Unit

41. `data.data.data.items.fphxz`
   - 类型：long
   - 数组：否
   - 必填：否
   - 示例/默认值：`0`
   - 说明：Invoice Line Type: 0 Normal Line 1 Discount Line 2 Discounted Line

42. `data.data.data.items.ggxh`
   - 类型：string
   - 数组：否
   - 必填：否
   - 示例/默认值：`Open Spec 1 Open Type 2`
   - 说明：Specification

43. `data.data.data.items.hh`
   - 类型：string
   - 数组：否
   - 必填：否
   - 示例/默认值：`2492`
   - 说明：Line No.

44. `data.data.data.items.kce`
   - 类型：BigDecimal
   - 数组：否
   - 必填：否
   - 示例/默认值：`10`
   - 说明：Deduction Amount

45. `data.data.data.items.lslbs`
   - 类型：string
   - 数组：否
   - 必填：否
   - 示例/默认值：`1`
   - 说明：Zero Tax Rate Identifier: 0: Export Tax Rebate, 1: Tax Exempt, 2: Not Levied, 3: Normal Zero Tax Rate

46. `data.data.data.items.se`
   - 类型：BigDecimal
   - 数组：否
   - 必填：否
   - 示例/默认值：`0.11`
   - 说明：Tax Amount

47. `data.data.data.items.sl`
   - 类型：BigDecimal
   - 数组：否
   - 必填：否
   - 示例/默认值：`0.06`
   - 说明：Tax Rate

48. `data.data.data.items.spbm`
   - 类型：string
   - 数组：否
   - 必填：否
   - 示例/默认值：`1010101010000000000`
   - 说明：Product Code

49. `data.data.data.items.xmdj`
   - 类型：BigDecimal
   - 数组：否
   - 必填：否
   - 示例/默认值：`11`
   - 说明：Item Unit Price

50. `data.data.data.items.xmhsdj`
   - 类型：BigDecimal
   - 数组：否
   - 必填：否
   - 示例/默认值：`10`
   - 说明：Project Unit Price Including Tax

51. `data.data.data.items.xmje`
   - 类型：BigDecimal
   - 数组：否
   - 必填：否
   - 示例/默认值：`11.89`
   - 说明：Item Amount

52. `data.data.data.items.xmjshj`
   - 类型：BigDecimal
   - 数组：否
   - 必填：否
   - 示例/默认值：`12`
   - 说明：Item Amount Including Tax

53. `data.data.data.items.xmmc`
   - 类型：string
   - 数组：否
   - 必填：否
   - 示例/默认值：`*Grain* Open Name Paddy Rice`
   - 说明：Project Name

54. `data.data.data.items.xmsl`
   - 类型：BigDecimal
   - 数组：否
   - 必填：否
   - 示例/默认值：`1`
   - 说明：Item Quantity

55. `data.data.data.items.yhzcbs`
   - 类型：long
   - 数组：否
   - 必填：否
   - 示例/默认值：`0`
   - 说明：Sales Discount Flag; 0: Not Used, 1: Used

56. `data.data.data.items.ysxmmc`
   - 类型：string
   - 数组：否
   - 必填：否
   - 示例/默认值：`Open named rice grains`
   - 说明：Original Project Name

57. `data.data.data.items.zkhhh`
   - 类型：string
   - 数组：否
   - 必填：否
   - 示例/默认值：`0`
   - 说明：Discount Line Number

58. `data.data.data.items.zxbm`
   - 类型：string
   - 数组：否
   - 必填：否
   - 示例/默认值：`10`
   - 说明：Product Self-Coding

59. `data.data.data.items.zzstsgl`
   - 类型：string
   - 数组：否
   - 必填：否
   - 示例/默认值：`Subject to 3% simplified tax collection`
   - 说明：Preferential Policy Description; Simple Taxation at 3%, Simple Taxation at 5% (When this field is not empty,
     the preferential treatment indicator YHZCBS field value must be 1)

60. `data.data.data.jqbh`
   - 类型：string
   - 数组：否
   - 必填：否
   - 示例/默认值：`001`
   - 说明：Machine No.

61. `data.data.data.jshj`
   - 类型：BigDecimal
   - 数组：否
   - 必填：否
   - 示例/默认值：`12`
   - 说明：Amount Including Tax

62. `data.data.data.jym`
   - 类型：string
   - 数组：否
   - 必填：否
   - 示例/默认值：`2123545`
   - 说明：Verification Code

63. `data.data.data.kplx`
   - 类型：long
   - 数组：否
   - 必填：否
   - 示例/默认值：`0`
   - 说明：Invoice Type  0: Blue Invoice; 1: Red Invoice

64. `data.data.data.kpr`
   - 类型：string
   - 数组：否
   - 必填：否
   - 示例/默认值：`LinaBell`
   - 说明：Billed By

65. `data.data.data.kprq`
   - 类型：string
   - 数组：否
   - 必填：否
   - 示例/默认值：`20220429233242`
   - 说明：Invoice Date  yyyyMMddhhmmss

66. `data.data.data.lyid`
   - 类型：string
   - 数组：否
   - 必填：否
   - 示例/默认值：`nh12135431`
   - 说明：Source ID

67. `data.data.data.lylx`
   - 类型：string
   - 数组：否
   - 必填：否
   - 示例/默认值：`1`
   - 说明：Source Type 1-Manual Issuance; 2-Interface Input; 3-File Import; 4-QR Code Scan; 5-WeChat Input; 6-Quick
     Invoicing; 7-Alipay Input; 8-Pinduoduo; 9-Mini Program; w-Pending Invoice Details; v-Invoice Application
     Document; n-NCC Input

68. `data.data.data.orgId`
   - 类型：long
   - 数组：否
   - 必填：否
   - 示例/默认值：`100006545`
   - 说明：Organization ID

69. `data.data.data.orgName`
   - 类型：string
   - 数组：否
   - 必填：否
   - 示例/默认值：`Yonyou Invoicing`
   - 说明：Organization Name

70. `data.data.data.projectCode`
   - 类型：string
   - 数组：否
   - 必填：否
   - 示例/默认值：`202`
   - 说明：Project No.

71. `data.data.data.projectId`
   - 类型：string
   - 数组：否
   - 必填：否
   - 示例/默认值：`1`
   - 说明：Item ID

72. `data.data.data.projectName`
   - 类型：string
   - 数组：否
   - 必填：否
   - 示例/默认值：`Grain`
   - 说明：Project Name

73. `data.data.data.qdbz`
   - 类型：string
   - 数组：否
   - 必填：否
   - 示例/默认值：`0`
   - 说明：List Flag: 0 - Not Listed, 1 - Listed

74. `data.data.data.sbbz`
   - 类型：string
   - 数组：否
   - 必填：否
   - 示例/默认值：`Failure reason: No available tickets on the tax control disk`
   - 说明：Failure Remarks

75. `data.data.data.sgbz`
   - 类型：string
   - 数组：否
   - 必填：否
   - 示例/默认值：`2`
   - 说明：Acquisition Flag: 2 = Agricultural Product Acquisition

76. `data.data.data.skr`
   - 类型：string
   - 数组：否
   - 必填：否
   - 示例/默认值：`John`
   - 说明：Payee

77. `data.data.data.tschbz`
   - 类型：string
   - 数组：否
   - 必填：否
   - 示例/默认值：`1`
   - 说明：Special Red Flush Flag; Currently No Corresponding Enumeration

78. `data.data.data.tspz`
   - 类型：string
   - 数组：否
   - 必填：否
   - 示例/默认值：`0`
   - 说明：Special Invoice Types; 0-General 2-Fuel VAT Special Invoice 8-Agricultural Products Sales 9-Agricultural
     Products Purchase 11-Tobacco Invoice 12-Motor Vehicle Invoice 14-Refined Oil Invoice DK-Agent Issued Invoice
     16-Mineral Products Invoice E01-Refined Oil Invoice E03-Construction Service Invoice E04-Goods Transportation
     E05-Real Estate Sales E06-Real Estate Leasing Service Invoice E07-Agent Collection of Vehicle and Vessel Tax
     E09-Passenger Transportation E12-Self-produced Agricultural Products Sales E16-Agricultural Products Purchase
     E17-Photovoltaic Purchase E18-Cigarette Invoice

79. `data.data.data.xsfDzdh`
   - 类型：string
   - 数组：否
   - 必填：否
   - 示例/默认值：`Test Address 1 13144445555`
   - 说明：Seller Address & Telephone

80. `data.data.data.xsfMc`
   - 类型：string
   - 数组：否
   - 必填：否
   - 示例/默认值：`11134444`
   - 说明：Seller Name

81. `data.data.data.xsfNsrsbh`
   - 类型：string
   - 数组：否
   - 必填：否
   - 示例/默认值：`111222333456333`
   - 说明：Seller Taxpayer ID No.

82. `data.data.data.xsfYhzh`
   - 类型：string
   - 数组：否
   - 必填：否
   - 示例/默认值：`Test Bank 978667866868`
   - 说明：Seller Bank Account No.

83. `data.data.data.yfpDm`
   - 类型：string
   - 数组：否
   - 必填：否
   - 示例/默认值：`113134`
   - 说明：Original Invoice Code

84. `data.data.data.yfpHm`
   - 类型：string
   - 数组：否
   - 必填：否
   - 示例/默认值：`42542453`
   - 说明：Original Invoice Number

85. `data.data.data.zdrq`
   - 类型：string
   - 数组：否
   - 必填：否
   - 示例/默认值：`2022-04-29 00:00:00`
   - 说明：Document Date  yyyy-MM-dd hh:mm:ss

86. `data.data.data.zdybz`
   - 类型：string
   - 数组：否
   - 必填：否
   - 示例/默认值：`Remarks on some matters`
   - 说明：Custom Remark

87. `data.data.data.zfbz`
   - 类型：string
   - 数组：否
   - 必填：否
   - 示例/默认值：`N`
   - 说明：Void Flag: Y=Voided, N=Not Voided, I=Voiding in Progress, F=Void Failed

88. `data.data.data.zsfs`
   - 类型：string
   - 数组：否
   - 必填：否
   - 示例/默认值：`2`
   - 说明：Taxation Method 0: Normal Taxation  2: Differential Taxation

89. `data.data.sharecode`
   - 类型：string
   - 数组：否
   - 必填：否
   - 示例/默认值：`f9d49a308143693bb2e7e8b2adaceffd`
   - 说明：Share Code

90. `data.data.shareurl`
   - 类型：string
   - 数组：否
   - 必填：否
   - 示例/默认值：`https://dowrk2/fiel/323131.pdf`
   - 说明：Share Link

91. `data.data.fileType`
   - 类型：string
   - 数组：否
   - 必填：否
   - 示例/默认值：`pdf`
   - 说明：File Type: pdf is in pdf format, ofd is in ofd format

92. `data.status`
   - 类型：string
   - 数组：否
   - 必填：否
   - 示例/默认值：`Invoicing succeeded`
   - 说明：Pending Invoicing;Invoicing in Progress;Invoicing Failed;Invoicing Successful

93. `data.statuscode`
   - 类型：string
   - 数组：否
   - 必填：否
   - 示例/默认值：`4`
   - 说明：1 - Pending Invoicing (Invoice Clerk Confirmation Required); 2 - Invoicing in Progress; 3 - Invoicing Failed;
     4 - Invoicing Successful

94. `message`
   - 类型：string
   - 数组：否
   - 必填：否
   - 示例/默认值：`Operation successful`
   - 说明：Message

## 返回示例

### 成功示例

无。

### 失败示例

无。

## 错误码

| 错误码 | 错误说明 | 处理建议 |
| --- | --- | --- |
| 1002 |  |  |


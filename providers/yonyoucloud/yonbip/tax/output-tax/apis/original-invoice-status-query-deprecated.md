# Original Invoice Status Query (Deprecated)

来源页面：

- https://open.yonyoucloud.com/#/doc-center/docDes/api?apiId=1cc145c156664c0abac9c26faf0daccd&isOrigin=1&selectApiTab=open&from=&iframe=

机器可抓取的详情接口：

- https://open.yonyoucloud.com/iuap-ipaas-base/openPortal/api/getByVersionForTest/1cc145c156664c0abac9c26faf0daccd/running?scene=open&isOrigin=1&isAjax=1

## 基本信息

- apiId：1cc145c156664c0abac9c26faf0daccd
- API 类目：开票管理
- 所属目录：开票（Invoicing）
- 产品：税务服务
- 更新时间：2025-09-01 18:03:36.000
- 请求方法：POST
- Content-Type：application/x-www-form-urlencoded
- 接口路径：/yonbip/tax/invoiceclient-web/api/invoiceApply/queryInvoiceStatus
- 完整调用地址：https://c2.yonyoucloud.com/iuap-api-gateway/yonbip/tax/invoiceclient-web/api/invoiceApply/queryInvoiceStatus
- 鉴权方式：access_token 作为 Query 参数传递（?access_token=）
- 当前状态：当前接口
- 请求字段数：Query 0 个，Body 1 个
- 返回字段数：94 个

## 对接要点

- 调用 URL：`https://c2.yonyoucloud.com/iuap-api-gateway/yonbip/tax/invoiceclient-web/api/invoiceApply/queryInvoiceStatus?access_token={access_token}`
- 调用方必须保存业务来源单号、发票请求流水号、请求报文、响应报文和状态查询结果，便于重试和对账。
- 开票、红冲、作废、驱动开票等写操作建议用业务唯一号做幂等控制；同一业务单不要生成多个不同流水号反复提交。
- 返回成功只代表接口调用成功，不一定代表税局或开票终态成功；涉及开票结果时必须再调用状态查询类接口确认。
- 详情接口返回字段说明可能为英文，字段名以开放平台原始字段为准。

## 调用模板

```bash
curl -X POST 'https://c2.yonyoucloud.com/iuap-api-gateway/yonbip/tax/invoiceclient-web/api/invoiceApply/queryInvoiceStatus?access_token=访问令牌' \
  -H 'Content-Type: application/json' \
  -d '{"data": {}}'
```

## 请求参数

### Query 参数

无。

> 注：开放平台网关调用时通常还需传递 `access_token`。

### Body 参数

1. `FormParam.fpqqlsh`
   - 类型：string
   - 数组：否
   - 必填：是
   - 示例/默认值：`1102202109280012445`
   - 说明：Invoice Request SN

## 请求示例

```text
Url: /yonbip/tax/invoiceclient-web/api/invoiceApply/queryInvoiceStatus?access_token=访问令牌
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

3. `data.errmsg`
   - 类型：string
   - 数组：否
   - 必填：否
   - 说明：Error Information

4. `data.fpqqlsh`
   - 类型：string
   - 数组：否
   - 必填：否
   - 示例/默认值：`1520063275914174464`
   - 说明：Invoice Request SN

5. `data.invoiceDetail`
   - 类型：object
   - 数组：否
   - 必填：否
   - 说明：Invoice

6. `data.invoiceDetail.fpqqlsh`
   - 类型：string
   - 数组：否
   - 必填：否
   - 示例/默认值：`1520063275914174464`
   - 说明：Invoice Request SN

7. `data.invoiceDetail.pdf`
   - 类型：string
   - 数组：否
   - 必填：否
   - 示例/默认值：`JVBERi0xLjMKJcTl7gwoMSAwIG9iago8PAovVHlwZSAvUGFnZQovUGFyZW50IDIgMCBSCi9NZWRpYUJveCBbMCAwIDYzMiA3OTJdCi9Db250ZW50cyAzIDAgUgovRW5jb2RpbmcgL1dpbkFuc2lFbmNvZGluZwo+PgplbmRvYmoKMiAwIG9iago8PAovVHlwZSAvUGFnZXMKL0NvdW50IDEKL0tpZHMgWzMgMCBSXQo+PgplbmRvYmoKMyAwIG9`
   - 说明：Base64 encoded data, determined by fileType; pdf for PDF format, ofd for OFD format.

8. `data.invoiceDetail.corpid`
   - 类型：string
   - 数组：否
   - 必填：否
   - 示例/默认值：`mdhpm1a4`
   - 说明：Tenant ID

9. `data.invoiceDetail.data`
   - 类型：object
   - 数组：否
   - 必填：否
   - 说明：Invoice Detailed Data

10. `data.invoiceDetail.data.fpqqlsh`
   - 类型：string
   - 数组：否
   - 必填：否
   - 示例/默认值：`1520063275914174464`
   - 说明：Invoice Request SN

11. `data.invoiceDetail.data.fpzt`
   - 类型：string
   - 数组：否
   - 必填：否
   - 示例/默认值：`1`
   - 说明：Invoice Status  1 - Pending Invoice (Invoice clerk confirmation required); 2 - Invoicing; 3 - Invoice Failed;
     4 - Invoice Successful.

12. `data.invoiceDetail.data.zdrq`
   - 类型：string
   - 数组：否
   - 必填：否
   - 示例/默认值：`2022-04-29 00:00:00`
   - 说明：Document Date  yyyy-MM-dd hh:mm:ss

13. `data.invoiceDetail.data.kplx`
   - 类型：string
   - 数组：否
   - 必填：否
   - 示例/默认值：`0`
   - 说明：Invoice Type  0: Blue Invoice; 1: Red Invoice

14. `data.invoiceDetail.data.fplx`
   - 类型：string
   - 数组：否
   - 必填：否
   - 示例/默认值：`3`
   - 说明：Invoice Type: 1: VAT Electronic Normal Invoice; 2: VAT Electronic Special Invoice; 3: VAT Normal Invoice; 4:
     VAT Special Invoice; 5: Motor Vehicle Sales Unified Invoice; 8: VAT Electronic Normal Invoice (Refined Oil);
     10: Refined Oil Normal Invoice; 11: Refined Oil Special Invoice; 15: Used Car Sales Unified Invoice; 31:
     Digital Special Invoice; 32: Digital Normal Invoice; 33: Digital Paper Invoice (VAT Special Invoice); 34:
     Digital Paper Invoice (Normal Invoice);

15. `data.invoiceDetail.data.zsfs`
   - 类型：string
   - 数组：否
   - 必填：否
   - 示例/默认值：`2`
   - 说明：Taxation Method 0: Normal Taxation  2: Differential Taxation

16. `data.invoiceDetail.data.fpDm`
   - 类型：string
   - 数组：否
   - 必填：否
   - 示例/默认值：`011111111007`
   - 说明：Invoice Code

17. `data.invoiceDetail.data.fpHm`
   - 类型：string
   - 数组：否
   - 必填：否
   - 示例/默认值：`03197858`
   - 说明：Invoice No.

18. `data.invoiceDetail.data.yfpDm`
   - 类型：string
   - 数组：否
   - 必填：否
   - 示例/默认值：`113134`
   - 说明：Original Invoice Code

19. `data.invoiceDetail.data.yfpHm`
   - 类型：string
   - 数组：否
   - 必填：否
   - 示例/默认值：`42542453`
   - 说明：Original Invoice Number

20. `data.invoiceDetail.data.kprq`
   - 类型：string
   - 数组：否
   - 必填：否
   - 示例/默认值：`20220429233242`
   - 说明：Invoice Date  yyyyMMddhhmmss

21. `data.invoiceDetail.data.xsfMc`
   - 类型：string
   - 数组：否
   - 必填：否
   - 示例/默认值：`11134444`
   - 说明：Seller Name

22. `data.invoiceDetail.data.xsfNsrsbh`
   - 类型：string
   - 数组：否
   - 必填：否
   - 示例/默认值：`111222333456333`
   - 说明：Seller Taxpayer ID No.

23. `data.invoiceDetail.data.xsfDzdh`
   - 类型：string
   - 数组：否
   - 必填：否
   - 示例/默认值：`Test Address 1 13144445555`
   - 说明：Seller Address & Telephone

24. `data.invoiceDetail.data.xsfYhzh`
   - 类型：string
   - 数组：否
   - 必填：否
   - 示例/默认值：`Test Bank 978667866868`
   - 说明：Seller Bank Account No.

25. `data.invoiceDetail.data.gmfMc`
   - 类型：string
   - 数组：否
   - 必填：否
   - 示例/默认值：`429 View Opening Difference`
   - 说明：Buyer

26. `data.invoiceDetail.data.gmfNsrsbh`
   - 类型：string
   - 数组：否
   - 必填：否
   - 示例/默认值：`cd56111331231`
   - 说明：Buyer Taxpayer ID No.

27. `data.invoiceDetail.data.gmfDzdh`
   - 类型：string
   - 数组：否
   - 必填：否
   - 示例/默认值：`Haidian District, Xibeiwang 212121`
   - 说明：Purchaser's Address and Phone Number

28. `data.invoiceDetail.data.gmfYhzh`
   - 类型：string
   - 数组：否
   - 必填：否
   - 示例/默认值：`Beijing Central Bank`
   - 说明：Buyer Bank Account No.

29. `data.invoiceDetail.data.kpr`
   - 类型：string
   - 数组：否
   - 必填：否
   - 示例/默认值：`LinaBell`
   - 说明：Billed By

30. `data.invoiceDetail.data.fhr`
   - 类型：string
   - 数组：否
   - 必填：否
   - 示例/默认值：`John`
   - 说明：Reviewed By

31. `data.invoiceDetail.data.skr`
   - 类型：string
   - 数组：否
   - 必填：否
   - 示例/默认值：`John`
   - 说明：Payee

32. `data.invoiceDetail.data.hjje`
   - 类型：string
   - 数组：否
   - 必填：否
   - 示例/默认值：`11.89`
   - 说明：Total Amount

33. `data.invoiceDetail.data.hjse`
   - 类型：string
   - 数组：否
   - 必填：否
   - 示例/默认值：`0.11`
   - 说明：Total Tax Amount

34. `data.invoiceDetail.data.jshj`
   - 类型：string
   - 数组：否
   - 必填：否
   - 示例/默认值：`12`
   - 说明：Amount Including Tax

35. `data.invoiceDetail.data.bz`
   - 类型：string
   - 数组：否
   - 必填：否
   - 示例/默认值：`N011`
   - 说明：Remarks

36. `data.invoiceDetail.data.zdybz`
   - 类型：string
   - 数组：否
   - 必填：否
   - 示例/默认值：`Remarks on some matters`
   - 说明：Custom Remark

37. `data.invoiceDetail.data.items`
   - 类型：object
   - 数组：是
   - 必填：否
   - 说明：Line Item Information

38. `data.invoiceDetail.data.items.hh`
   - 类型：string
   - 数组：否
   - 必填：否
   - 示例/默认值：`2492`
   - 说明：Line No.

39. `data.invoiceDetail.data.items.xmmc`
   - 类型：string
   - 数组：否
   - 必填：否
   - 示例/默认值：`*Grain* Opening Named Paddy Rice`
   - 说明：Project Name

40. `data.invoiceDetail.data.items.spbm`
   - 类型：string
   - 数组：否
   - 必填：否
   - 示例/默认值：`1010101010000000000`
   - 说明：Product Code

41. `data.invoiceDetail.data.items.ggxh`
   - 类型：string
   - 数组：否
   - 必填：否
   - 示例/默认值：`Open Spec 1 Open Type 2`
   - 说明：Specification

42. `data.invoiceDetail.data.items.dw`
   - 类型：string
   - 数组：否
   - 必填：否
   - 示例/默认值：`Kg`
   - 说明：Unit

43. `data.invoiceDetail.data.items.xmsl`
   - 类型：string
   - 数组：否
   - 必填：否
   - 示例/默认值：`1`
   - 说明：Item Quantity

44. `data.invoiceDetail.data.items.xmdj`
   - 类型：string
   - 数组：否
   - 必填：否
   - 示例/默认值：`11`
   - 说明：Item Unit Price

45. `data.invoiceDetail.data.items.xmhsdj`
   - 类型：string
   - 数组：否
   - 必填：否
   - 示例/默认值：`10`
   - 说明：Project Unit Price Including Tax

46. `data.invoiceDetail.data.items.xmje`
   - 类型：string
   - 数组：否
   - 必填：否
   - 示例/默认值：`11.89`
   - 说明：Item Amount

47. `data.invoiceDetail.data.items.xmjshj`
   - 类型：string
   - 数组：否
   - 必填：否
   - 示例/默认值：`12`
   - 说明：Item Amount Including Tax

48. `data.invoiceDetail.data.items.sl`
   - 类型：string
   - 数组：否
   - 必填：否
   - 示例/默认值：`0.06`
   - 说明：Tax Rate

49. `data.invoiceDetail.data.items.se`
   - 类型：string
   - 数组：否
   - 必填：否
   - 示例/默认值：`0.11`
   - 说明：Tax Amount

50. `data.invoiceDetail.data.items.yhzcbs`
   - 类型：string
   - 数组：否
   - 必填：否
   - 示例/默认值：`0`
   - 说明：Sales Discount Flag; 0: Not Used, 1: Used

51. `data.invoiceDetail.data.items.zxbm`
   - 类型：string
   - 数组：否
   - 必填：否
   - 示例/默认值：`10`
   - 说明：Product Self-Coding

52. `data.invoiceDetail.data.items.fphxz`
   - 类型：string
   - 数组：否
   - 必填：否
   - 示例/默认值：`0`
   - 说明：Invoice Line Type: 0 Normal Line 1 Discount Line 2 Discounted Line

53. `data.invoiceDetail.data.items.kce`
   - 类型：string
   - 数组：否
   - 必填：否
   - 示例/默认值：`10`
   - 说明：Deduction Amount

54. `data.invoiceDetail.data.items.lslbs`
   - 类型：string
   - 数组：否
   - 必填：否
   - 示例/默认值：`1`
   - 说明：Zero Tax Rate Identifier: 0: Export Tax Rebate, 1: Tax Exempt, 2: Not Levied, 3: Normal Zero Tax Rate

55. `data.invoiceDetail.data.items.ysxmmc`
   - 类型：string
   - 数组：否
   - 必填：否
   - 示例/默认值：`Open named rice grains`
   - 说明：Original Project Name

56. `data.invoiceDetail.data.items.zkhhh`
   - 类型：string
   - 数组：否
   - 必填：否
   - 示例/默认值：`0`
   - 说明：Discount Line Number

57. `data.invoiceDetail.data.items.zzstsgl`
   - 类型：string
   - 数组：否
   - 必填：否
   - 示例/默认值：`Subject to 3% simplified tax collection`
   - 说明：Preferential Policy Description; Simple Taxation at 3%, Simple Taxation at 5% (When this field is not empty,
     the preferential treatment indicator YHZCBS field value must be 1)

58. `data.invoiceDetail.data.bmbBbh`
   - 类型：string
   - 数组：否
   - 必填：否
   - 示例/默认值：`34.0`
   - 说明：Code Table Number

59. `data.invoiceDetail.data.fpjz`
   - 类型：string
   - 数组：否
   - 必填：否
   - 示例/默认值：`1`
   - 说明：Invoice Medium: 0 Electronic Invoice 1 Paper Invoice

60. `data.invoiceDetail.data.lylx`
   - 类型：string
   - 数组：否
   - 必填：否
   - 示例/默认值：`1`
   - 说明：Source Type 1-Manual Issuance; 2-Interface Input; 3-File Import; 4-QR Code Scan; 5-WeChat Input; 6-Quick
     Invoicing; 7-Alipay Input; 8-Pinduoduo; 9-Mini Program; w-Pending Invoice Details; v-Invoice Application
     Document; n-NCC Input

61. `data.invoiceDetail.data.lyid`
   - 类型：string
   - 数组：否
   - 必填：否
   - 示例/默认值：`nh12135431`
   - 说明：Source ID

62. `data.invoiceDetail.data.jqbh`
   - 类型：string
   - 数组：否
   - 必填：否
   - 示例/默认值：`001`
   - 说明：Machine No.

63. `data.invoiceDetail.data.fpMw`
   - 类型：string
   - 数组：否
   - 必填：否
   - 示例/默认值：`<-<>48938<4+<14>735+<2554*8-1-<+15<*026+848686/2/3//0>+*>>>356*<757/47>90+<25<<3575**934<+15<*026+848686--57`
   - 说明：Invoice Ciphertext

64. `data.invoiceDetail.data.jym`
   - 类型：string
   - 数组：否
   - 必填：否
   - 示例/默认值：`2123545`
   - 说明：Verification Code

65. `data.invoiceDetail.data.accountStatus`
   - 类型：string
   - 数组：否
   - 必填：否
   - 示例/默认值：`1`
   - 说明：Accounting Status: 1 - Not Accounted; 2 - Accounted

66. `data.invoiceDetail.data.aggregate`
   - 类型：string
   - 数组：否
   - 必填：否
   - 示例/默认值：`true`
   - 说明：Whether it is data from the past two months; true indicates querying data within the last two months; leaving
     it blank means querying all data.

67. `data.invoiceDetail.data.bred`
   - 类型：string
   - 数组：否
   - 必填：否
   - 示例/默认值：`N`
   - 说明：Whether reversed by red flush: Y indicates reversed, N or null indicates not reversed

68. `data.invoiceDetail.data.code`
   - 类型：string
   - 数组：否
   - 必填：否
   - 示例/默认值：`1265544111`
   - 说明：Organization Code Property

69. `data.invoiceDetail.data.corpId`
   - 类型：string
   - 数组：否
   - 必填：否
   - 示例/默认值：`mdhpm1a4`
   - 说明：Tenant ID

70. `data.invoiceDetail.data.creator`
   - 类型：string
   - 数组：否
   - 必填：否
   - 示例/默认值：`cordkmkm`
   - 说明：Created By

71. `data.invoiceDetail.data.creatorName`
   - 类型：string
   - 数组：否
   - 必填：否
   - 示例/默认值：`John`
   - 说明：Creator Name

72. `data.invoiceDetail.data.email`
   - 类型：string
   - 数组：否
   - 必填：否
   - 示例/默认值：`1464652552@.com`
   - 说明：Email

73. `data.invoiceDetail.data.ewm`
   - 类型：string
   - 数组：否
   - 必填：否
   - 示例/默认值：`01,10,102897054716,23807539,2263.11,20200513,57644233870940613901,E7F0`
   - 说明：QR Code

74. `data.invoiceDetail.data.hzxxbbh`
   - 类型：string
   - 数组：否
   - 必填：否
   - 示例/默认值：`513266526526`
   - 说明：Red Entry Information Table Number

75. `data.invoiceDetail.data.orgId`
   - 类型：string
   - 数组：否
   - 必填：否
   - 示例/默认值：`100006545`
   - 说明：Organization ID

76. `data.invoiceDetail.data.orgName`
   - 类型：string
   - 数组：否
   - 必填：否
   - 示例/默认值：`Yonyou Invoicing`
   - 说明：Organization Name

77. `data.invoiceDetail.data.projectCode`
   - 类型：string
   - 数组：否
   - 必填：否
   - 示例/默认值：`202`
   - 说明：Project No.

78. `data.invoiceDetail.data.projectId`
   - 类型：string
   - 数组：否
   - 必填：否
   - 示例/默认值：`1`
   - 说明：Item ID

79. `data.invoiceDetail.data.projectName`
   - 类型：string
   - 数组：否
   - 必填：否
   - 示例/默认值：`Grain`
   - 说明：Project Name

80. `data.invoiceDetail.data.qdbz`
   - 类型：string
   - 数组：否
   - 必填：否
   - 示例/默认值：`0`
   - 说明：List Flag: 0 - Not Listed, 1 - Listed

81. `data.invoiceDetail.data.sbbz`
   - 类型：string
   - 数组：否
   - 必填：否
   - 示例/默认值：`Failure reason: No available tickets on the tax control disk`
   - 说明：Failure Remarks

82. `data.invoiceDetail.data.sgbz`
   - 类型：string
   - 数组：否
   - 必填：否
   - 示例/默认值：`2`
   - 说明：Acquisition Flag: 2 = Agricultural Product Acquisition

83. `data.invoiceDetail.data.tschbz`
   - 类型：string
   - 数组：否
   - 必填：否
   - 示例/默认值：`1`
   - 说明：Special Red Flush Flag; Currently No Corresponding Enumeration

84. `data.invoiceDetail.data.tspz`
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

85. `data.invoiceDetail.data.zfbz`
   - 类型：string
   - 数组：否
   - 必填：否
   - 示例/默认值：`N`
   - 说明：Void Flag: Y=Voided, N=Not Voided, I=Voiding in Progress, F=Void Failed

86. `data.invoiceDetail.sharecode`
   - 类型：string
   - 数组：否
   - 必填：否
   - 示例/默认值：`f9d49a308143693bb2e7e8b2adaceffd`
   - 说明：Share Code

87. `data.invoiceDetail.shareurl`
   - 类型：string
   - 数组：否
   - 必填：否
   - 示例/默认值：`https://dowrk2/fiel/323131.pdf`
   - 说明：Share Link

88. `data.invoiceDetail.fileType`
   - 类型：string
   - 数组：否
   - 必填：否
   - 示例/默认值：`pdf`
   - 说明：File Type: pdf is in pdf format ofd is in ofd format

89. `data.invoiceDetail.pdfurl`
   - 类型：string
   - 数组：否
   - 必填：否
   - 示例/默认值：`https://d.com/yonbip-fi-taxot/s/downloadPdf?pwd=HP4C&authCode=d6341b2707541db61c2c4ffefc6b01dd&tenantId=um86vloe&fileType=pdf`
   - 说明：Tax Bureau PDF Format File Download Address

90. `data.invoiceDetail.ofdurl`
   - 类型：string
   - 数组：否
   - 必填：否
   - 示例/默认值：`https://d.com/yonbip-fi-taxot/s/downloadPdf?pwd=HP4C&authCode=d6341b2707541db61c2c4ffefc6b01dd&tenantId=um86vloe&fileType=ofd`
   - 说明：Tax Bureau OFD Format File Download Address

91. `data.invoiceDetail.xmlurl`
   - 类型：string
   - 数组：否
   - 必填：否
   - 示例/默认值：`https://d.com/yonbip-fi-taxot/s/downloadPdf?pwd=HP4C&authCode=d6341b2707541db61c2c4ffefc6b01dd&tenantId=um86vloe&fileType=xml`
   - 说明：Tax Bureau XML Format File Download Address

92. `data.status`
   - 类型：string
   - 数组：否
   - 必填：否
   - 示例/默认值：`Invoicing succeeded`
   - 说明：Pending Invoicing; Invoicing in Progress; Invoicing Failed; Invoicing Successful

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
| 1002 |  |  |


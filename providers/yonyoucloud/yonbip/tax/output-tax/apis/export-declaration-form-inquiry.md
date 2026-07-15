# Export Declaration Form Inquiry

来源页面：

- https://open.yonyoucloud.com/#/doc-center/docDes/api?apiId=2086162750826872832&isOrigin=1&selectApiTab=open&from=&iframe=

机器可抓取的详情接口：

- https://open.yonyoucloud.com/iuap-ipaas-base/openPortal/api/getByVersionForTest/2086162750826872832/running?scene=open&isOrigin=1&isAjax=1

## 基本信息

- apiId：2086162750826872832
- API 类目：报关单管理
- 所属目录：出口报关单（Export declaration form）
- 产品：税务服务
- 更新时间：2025-06-20 19:18:27.000
- 请求方法：POST
- Content-Type：application/json
- 接口路径：/yonbip/tax/api/export-custorm-declare/query-list
- 完整调用地址：https://c2.yonyoucloud.com/iuap-api-gateway/yonbip/tax/api/export-custorm-declare/query-list
- 鉴权方式：access_token 作为 Query 参数传递（?access_token=）
- 当前状态：当前接口
- 请求字段数：Query 0 个，Body 10 个
- 返回字段数：54 个

## 对接要点

- 调用 URL：`https://c2.yonyoucloud.com/iuap-api-gateway/yonbip/tax/api/export-custorm-declare/query-list?access_token={access_token}`
- 调用方必须保存业务来源单号、发票请求流水号、请求报文、响应报文和状态查询结果，便于重试和对账。
- 开票、红冲、作废、驱动开票等写操作建议用业务唯一号做幂等控制；同一业务单不要生成多个不同流水号反复提交。
- 返回成功只代表接口调用成功，不一定代表税局或开票终态成功；涉及开票结果时必须再调用状态查询类接口确认。
- 详情接口返回字段说明可能为英文，字段名以开放平台原始字段为准。

## 调用模板

```bash
curl -X POST 'https://c2.yonyoucloud.com/iuap-api-gateway/yonbip/tax/api/export-custorm-declare/query-list?access_token=访问令牌' \
  -H 'Content-Type: application/json' \
  -d '{"data": {}}'
```

## 请求参数

### Query 参数

无。

> 注：开放平台网关调用时通常还需传递 `access_token`。

### Body 参数

1. `taxPayerCode`
   - 类型：string
   - 数组：否
   - 必填：否
   - 示例/默认值：`ABC`
   - 说明：Taxpayer Entity Code

2. `nsrsbh`
   - 类型：string
   - 数组：否
   - 必填：否
   - 示例/默认值：`12445100MB2D54880K`
   - 说明：Taxpayer Identification Number

3. `exportDateBegin`
   - 类型：string
   - 数组：否
   - 必填：否
   - 示例/默认值：`2024-09-13`
   - 说明：Export Date - Start

4. `exportDateEnd`
   - 类型：string
   - 数组：否
   - 必填：否
   - 示例/默认值：`2024-09-13`
   - 说明：Export Date - End

5. `declarationDateBegin`
   - 类型：string
   - 数组：否
   - 必填：否
   - 示例/默认值：`2024-09-13`
   - 说明：Declaration Date - Start

6. `declarationDateEnd`
   - 类型：string
   - 数组：否
   - 必填：否
   - 示例/默认值：`2024-09-13`
   - 说明：Declaration Date - End

7. `exportDeclarationNo`
   - 类型：string
   - 数组：否
   - 必填：否
   - 示例/默认值：`12345678`
   - 说明：Customs Declaration Number

8. `withDetail`
   - 类型：string
   - 数组：否
   - 必填：否
   - 示例/默认值：`N`
   - 说明：Includes sub-table details Y - Yes, otherwise No Includes sub-table details Y - Yes, otherwise No

9. `pageIndex`
   - 类型：number
   - 数组：否
   - 必填：是
   - 示例/默认值：`1`
   - 说明：Page number, starting from 1

10. `pageSize`
   - 类型：number
   - 数组：否
   - 必填：是
   - 示例/默认值：`1`
   - 说明：Page size

## 请求示例

```text
Url: /yonbip/tax/api/export-custorm-declare/query-list?access_token=访问令牌  
Body: {
	"taxPayerCode": "ABC",
	"nsrsbh": "12445100MB2D54880K",
	"exportDateBegin": "2024-09-13",
	"exportDateEnd": "2024-09-13",
	"declarationDateBegin": "2024-09-13",
	"declarationDateEnd": "2024-09-13",
	"exportDeclarationNo": "12345678",
	"withDetail": "N",
	"pageIndex": 1,
	"pageSize": 1
}
```

## 返回参数

### 返回字段

1. `totalCount`
   - 类型：number
   - 数组：否
   - 必填：否
   - 示例/默认值：`1`
   - 说明：totalCount

2. `bills`
   - 类型：object
   - 数组：是
   - 必填：否
   - 说明：bills

3. `bills.preentryNo`
   - 类型：string
   - 数组：否
   - 必填：否
   - 示例/默认值：`L001`
   - 说明：Pre-entry number

4. `bills.exportDeclarationNo`
   - 类型：string
   - 数组：否
   - 必填：否
   - 示例/默认值：`CK002`
   - 说明：Export Declaration Form Number

5. `bills.taxPayerCode`
   - 类型：string
   - 数组：否
   - 必填：否
   - 示例/默认值：`AABB`
   - 说明：Taxpayer Entity Code

6. `bills.registrationNo`
   - 类型：string
   - 数组：否
   - 必填：否
   - 示例/默认值：`B001`
   - 说明：Record Number

7. `bills.exportDate`
   - 类型：string
   - 数组：否
   - 必填：否
   - 示例/默认值：`2024-05-28`
   - 说明：Export Date

8. `bills.declarationDate`
   - 类型：string
   - 数组：否
   - 必填：否
   - 示例/默认值：`2024-05-28`
   - 说明：Declaration Date

9. `bills.domesticShipperReceiver`
   - 类型：string
   - 数组：否
   - 必填：否
   - 示例/默认值：`Tax Cloud Test Deletion Verification`
   - 说明：Domestic Consignor and Consignee

10. `bills.domesticShipperReceiverTaxNo`
   - 类型：string
   - 数组：否
   - 必填：否
   - 示例/默认值：`S001`
   - 说明：Domestic sender and receiver tax number

11. `bills.transportMode`
   - 类型：string
   - 数组：否
   - 必填：否
   - 示例/默认值：`Water Transportation`
   - 说明：Transportation Method

12. `bills.transportVehicleName`
   - 类型：string
   - 数组：否
   - 必填：否
   - 示例/默认值：`Truck`
   - 说明：Transportation Tools Name

13. `bills.transportVehicleCode`
   - 类型：string
   - 数组：否
   - 必填：否
   - 示例/默认值：`F78916`
   - 说明：Transport Tool Number

14. `bills.deliveryNo`
   - 类型：string
   - 数组：否
   - 必填：否
   - 示例/默认值：`Y001`
   - 说明：Delivery Order Number

15. `bills.productionSalesUnit`
   - 类型：string
   - 数组：否
   - 必填：否
   - 示例/默认值：`BAIC (Beijing Automotive Industry Holding Co., Ltd.)`
   - 说明：Production and Sales Unit

16. `bills.productionSalesUnitTaxNo`
   - 类型：string
   - 数组：否
   - 必填：否
   - 示例/默认值：`BQ001`
   - 说明：Tax number of the production and sales unit

17. `bills.taxExemptionNature`
   - 类型：string
   - 数组：否
   - 必填：否
   - 示例/默认值：`020`
   - 说明：Exemption nature

18. `bills.convertCurrencyMethod`
   - 类型：string
   - 数组：否
   - 必填：否
   - 示例/默认值：`1`
   - 说明：Settlement method

19. `bills.licenseNumber`
   - 类型：string
   - 数组：否
   - 必填：否
   - 示例/默认值：`X001`
   - 说明：License Number

20. `bills.approvalNumber`
   - 类型：string
   - 数组：否
   - 必填：否
   - 示例/默认值：`BZ001`
   - 说明：Approval Document Number

21. `bills.transactionMethod`
   - 类型：string
   - 数组：否
   - 必填：否
   - 示例/默认值：`1`
   - 说明：Transaction Method

22. `bills.exchangeRate`
   - 类型：number
   - 数组：否
   - 必填：否
   - 示例/默认值：`22.22`
   - 说明：Exchange Rate

23. `bills.freight`
   - 类型：number
   - 数组：否
   - 必填：否
   - 示例/默认值：`3333`
   - 说明：Freight charges

24. `bills.insurancePremium`
   - 类型：number
   - 数组：否
   - 必填：否
   - 示例/默认值：`1000`
   - 说明：Premium

25. `bills.incidentalExpenses`
   - 类型：number
   - 数组：否
   - 必填：否
   - 示例/默认值：`500`
   - 说明：Miscellaneous expenses

26. `bills.contractAgreementNo`
   - 类型：string
   - 数组：否
   - 必填：否
   - 示例/默认值：`KT001`
   - 说明：Contract Agreement Number

27. `bills.itemCount`
   - 类型：number
   - 数组：否
   - 必填：否
   - 示例/默认值：`1000`
   - 说明：Number of items

28. `bills.grossWeight`
   - 类型：number
   - 数组：否
   - 必填：否
   - 示例/默认值：`11000`
   - 说明：Gross weight

29. `bills.netWeight`
   - 类型：number
   - 数组：否
   - 必填：否
   - 示例/默认值：`10000`
   - 说明：Net Weight

30. `bills.containerNo`
   - 类型：string
   - 数组：否
   - 必填：否
   - 示例/默认值：`60`
   - 说明：Container Number

31. `bills.containerStandardQuantity`
   - 类型：number
   - 数组：否
   - 必填：否
   - 示例/默认值：`100`
   - 说明：Standard quantity of containers

32. `bills.remarks`
   - 类型：string
   - 数组：否
   - 必填：否
   - 示例/默认值：`Automotive product parts/components`
   - 说明：Remarks

33. `bills.tradeMode`
   - 类型：string
   - 数组：否
   - 必填：否
   - 示例/默认值：`General Trade`
   - 说明：Trade Method

34. `bills.declarationFormProductDetailsList`
   - 类型：object
   - 数组：是
   - 必填：否
   - 说明：Details

35. `bills.declarationFormProductDetailsList.taxClassificationCode`
   - 类型：string
   - 数组：否
   - 必填：否
   - 示例/默认值：`10001011111111111111`
   - 说明：Tax Category Code

36. `bills.declarationFormProductDetailsList.productName`
   - 类型：string
   - 数组：否
   - 必填：否
   - 示例/默认值：`BYD`
   - 说明：Product Name

37. `bills.declarationFormProductDetailsList.productCode`
   - 类型：string
   - 数组：否
   - 必填：否
   - 示例/默认值：`coee3423`
   - 说明：Product Code

38. `bills.declarationFormProductDetailsList.specModel`
   - 类型：string
   - 数组：否
   - 必填：否
   - 示例/默认值：`234234`
   - 说明：Specification Model

39. `bills.declarationFormProductDetailsList.legalQuantity`
   - 类型：number
   - 数组：否
   - 必填：否
   - 示例/默认值：`1`
   - 说明：Legal quantity

40. `bills.declarationFormProductDetailsList.legalUnit`
   - 类型：string
   - 数组：否
   - 必填：否
   - 示例/默认值：`BYD Factory`
   - 说明：Legal Entity

41. `bills.declarationFormProductDetailsList.secondQuantity`
   - 类型：number
   - 数组：否
   - 必填：否
   - 示例/默认值：`1148877`
   - 说明：Second Quantity

42. `bills.declarationFormProductDetailsList.secondUnit`
   - 类型：string
   - 数组：否
   - 必填：否
   - 示例/默认值：`Second Unit`
   - 说明：Second Unit

43. `bills.declarationFormProductDetailsList.declaredQuantity`
   - 类型：number
   - 数组：否
   - 必填：否
   - 示例/默认值：`999.889`
   - 说明：Declared Quantity

44. `bills.declarationFormProductDetailsList.declaredOrganization`
   - 类型：string
   - 数组：否
   - 必填：否
   - 示例/默认值：`Declaring Unit`
   - 说明：Declaring Unit

45. `bills.declarationFormProductDetailsList.unitPriceWithoutTax`
   - 类型：number
   - 数组：否
   - 必填：否
   - 示例/默认值：`12`
   - 说明：Unit Price (Excluding Tax)

46. `bills.declarationFormProductDetailsList.amountWithoutTax`
   - 类型：number
   - 数组：否
   - 必填：否
   - 说明：Amount (excluding tax)

47. `bills.declarationFormProductDetailsList.currencyType`
   - 类型：string
   - 数组：否
   - 必填：否
   - 示例/默认值：`1623643074168094746`
   - 说明：Currency system

48. `bills.declarationFormProductDetailsList.levyOrExempt`
   - 类型：string
   - 数组：否
   - 必填：否
   - 示例/默认值：`1`
   - 说明：Exemption

49. `bills.declarationFormProductDetailsList.taxRate`
   - 类型：number
   - 数组：否
   - 必填：否
   - 示例/默认值：`0.008`
   - 说明：Tax Rate

50. `bills.declarationFormProductDetailsList.taxRefundRate`
   - 类型：number
   - 数组：否
   - 必填：否
   - 示例/默认值：`0.005`
   - 说明：Refund Tax Rate

51. `bills.declarationFormProductDetailsList.zeroTaxRefundRateMark`
   - 类型：string
   - 数组：否
   - 必填：否
   - 示例/默认值：`1`
   - 说明：Zero Tax Rate Indicator

52. `bills.declarationFormProductDetailsList.availableTaxRefundAmount`
   - 类型：number
   - 数组：否
   - 必填：否
   - 示例/默认值：`1.0`
   - 说明：Available tax refund amount

53. `bills.declarationFormProductDetailsList.rmbunitPriceWithoutTax`
   - 类型：number
   - 数组：否
   - 必填：否
   - 示例/默认值：`12`
   - 说明：Unit price in RMB (excluding tax)

54. `bills.declarationFormProductDetailsList.rmbamountWithoutTax`
   - 类型：number
   - 数组：否
   - 必填：否
   - 示例/默认值：`1.00`
   - 说明：Amount in RMB (excluding tax)

## 返回示例

### 成功示例

无。

### 失败示例

无。

## 错误码

| 错误码 | 错误说明 | 处理建议 |
| --- | --- | --- |
| 9999 |  |  |


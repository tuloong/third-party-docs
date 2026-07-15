# Credit Confirmation Document List Inquiry

来源页面：

- https://open.yonyoucloud.com/#/doc-center/docDes/api?apiId=2120887415400300549&isOrigin=1&selectApiTab=open&from=&iframe=

机器可抓取的详情接口：

- https://open.yonyoucloud.com/iuap-ipaas-base/openPortal/api/getByVersionForTest/2120887415400300549/running?scene=open&isOrigin=1&isAjax=1

## 基本信息

- apiId：2120887415400300549
- API 类目：红字信息确认单
- 所属目录：红字申请表（Red Letter Application Form）
- 产品：税务服务
- 更新时间：2025-07-01 17:06:18.000
- 请求方法：POST
- Content-Type：application/json
- 接口路径：/yonbip/tax/yonbip-fi-taxot/api/redinfo/query
- 完整调用地址：https://c2.yonyoucloud.com/iuap-api-gateway/yonbip/tax/yonbip-fi-taxot/api/redinfo/query
- 鉴权方式：access_token 作为 Query 参数传递（?access_token=）
- 当前状态：当前接口
- 请求字段数：Query 0 个，Body 17 个
- 返回字段数：40 个

## 对接要点

- 调用 URL：`https://c2.yonyoucloud.com/iuap-api-gateway/yonbip/tax/yonbip-fi-taxot/api/redinfo/query?access_token={access_token}`
- 调用方必须保存业务来源单号、发票请求流水号、请求报文、响应报文和状态查询结果，便于重试和对账。
- 开票、红冲、作废、驱动开票等写操作建议用业务唯一号做幂等控制；同一业务单不要生成多个不同流水号反复提交。
- 返回成功只代表接口调用成功，不一定代表税局或开票终态成功；涉及开票结果时必须再调用状态查询类接口确认。
- 详情接口返回字段说明可能为英文，字段名以开放平台原始字段为准。

## 调用模板

```bash
curl -X POST 'https://c2.yonyoucloud.com/iuap-api-gateway/yonbip/tax/yonbip-fi-taxot/api/redinfo/query?access_token=访问令牌' \
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
   - 示例/默认值：`{     "gmfNsrsbh": "123456" }`
   - 说明：data

2. `data.searchParam`
   - 类型：object
   - 数组：否
   - 必填：是
   - 说明：Query business parameters

3. `data.searchParam.gmfNsrsbh`
   - 类型：string
   - 数组：否
   - 必填：否
   - 说明：Purchaser's Taxpayer Identification Number

4. `data.searchParam.xsfNsrsbh`
   - 类型：string
   - 数组：否
   - 必填：否
   - 说明：Seller's Taxpayer Identification Number

5. `data.searchParam.sendOrReceive`
   - 类型：string
   - 数组：否
   - 必填：否
   - 说明：Initiator/Accession; 0: Accession 1: Initiator

6. `data.searchParam.zdrqBegin`
   - 类型：string
   - 数组：否
   - 必填：否
   - 示例/默认值：`2024-10-28`
   - 说明：Start Date - yyyy-MM-dd

7. `data.searchParam.zdrqEnd`
   - 类型：string
   - 数组：否
   - 必填：否
   - 示例/默认值：`2024-10-28`
   - 说明：Fill-in date - Deadline yyyy-MM-dd

8. `data.searchParam.reqMemo`
   - 类型：string
   - 数组：否
   - 必填：否
   - 示例/默认值：`1100000001`
   - 说明：Entry party identity 1100000001 - Buyer, 0000000101 - Seller

9. `data.searchParam.statusDm`
   - 类型：string
   - 数组：否
   - 必填：否
   - 说明：Information Table Status (1: Not Uploaded; 2: Uploading; 3: Upload Failed; 4: Upload Successful; 5:
     Retrieving; 6: Retrieval Failed; 7: Retrieval Successful; 8: Revoking; 9: Revocation Failed; 10: Revoked; 01:
     No Confirmation Required; 02: Seller Entry Pending Buyer Confirmation; 03: Buyer Entry Pending Seller
     Confirmation; 04: Both Buyer and Seller Confirmed; 05: Invalid (Seller Entry Buyer Denied); 06: Invalid (Buyer
     Entry Seller Denied); 07: Invalid (No Confirmation After 72 Hours); 08: Invalid (Initiator Revoked); 09:
     Invalid (Revoked After Confirmation)

10. `data.searchParam.yfpHm`
   - 类型：string
   - 数组：否
   - 必填：否
   - 说明：Original blue invoice number

11. `data.searchParam.yfpDm`
   - 类型：string
   - 数组：否
   - 必填：否
   - 说明：Original blue invoice code

12. `data.searchParam.resBillNo`
   - 类型：string
   - 数组：否
   - 必填：否
   - 说明：Information Sheet Number

13. `data.searchParam.reqBillNo`
   - 类型：string
   - 数组：否
   - 必填：否
   - 说明：Information Sheet Serial Number

14. `data.searchParam.returnDetail`
   - 类型：string
   - 数组：否
   - 必填：是
   - 说明：Return details: Yes: Y No: N

15. `data.searchParam.orgCode`
   - 类型：string
   - 数组：否
   - 必填：否
   - 示例/默认值：`A0001`
   - 说明：Invoicing Site Code

16. `data.pagesize`
   - 类型：number
   - 数组：否
   - 必填：是
   - 说明：Page size

17. `data.pagenum`
   - 类型：number
   - 数组：否
   - 必填：是
   - 说明：Current page number

## 请求示例

```text
Url: /yonbip/tax/yonbip-fi-taxot/api/redinfo/query?access_token=访问令牌  
Body: {
    "data": {
        "gmfNsrsbh": "123456",
        "searchParam": {
            "gmfNsrsbh": "",
            "xsfNsrsbh": "",
            "sendOrReceive": "",
            "zdrqBegin": "2024-10-28",
            "zdrqEnd": "2024-10-28",
            "reqMemo": "1100000001",
            "statusDm": "",
            "yfpHm": "",
            "yfpDm": "",
            "resBillNo": "",
            "reqBillNo": "",
            "returnDetail": "",
            "orgCode": "A0001"
        },
        "pagesize": 0,
        "pagenum": 0
    }
}
```

## 返回参数

### 返回字段

1. `message`
   - 类型：string
   - 数组：否
   - 必填：否
   - 说明：Response Information

2. `code`
   - 类型：string
   - 数组：否
   - 必填：否
   - 说明：Response Code

3. `datas`
   - 类型：object
   - 数组：是
   - 必填：否
   - 说明：Response message body

4. `datas.bills`
   - 类型：object
   - 数组：是
   - 必填：否
   - 说明：Credit Confirmation Document Body

5. `datas.bills.reqBillNo`
   - 类型：string
   - 数组：否
   - 必填：否
   - 说明：Red Character Information Table Serial Number

6. `datas.bills.resBillNo`
   - 类型：string
   - 数组：否
   - 必填：否
   - 说明：Red Character Information Application Form Number

7. `datas.bills.statusDm`
   - 类型：string
   - 数组：否
   - 必填：否
   - 说明：Information Sheet Status

8. `datas.bills.orgName`
   - 类型：string
   - 数组：否
   - 必填：否
   - 说明：Invoicing Site

9. `datas.bills.reqMemo`
   - 类型：string
   - 数组：否
   - 必填：否
   - 说明：Input party identity (Purchaser's application for deduction: 1,100,000,000; Purchaser's application not
     deducted: 1,010,000,000; Seller's application: 1,000,000,100)

10. `datas.bills.fplx`
   - 类型：string
   - 数组：否
   - 必填：否
   - 说明：Invoice Type

11. `datas.bills.tspz`
   - 类型：string
   - 数组：否
   - 必填：否
   - 说明：Special Ticket Type Identifier

12. `datas.bills.yfpHm`
   - 类型：string
   - 数组：否
   - 必填：否
   - 说明：Original blue invoice number

13. `datas.bills.yfpDm`
   - 类型：string
   - 数组：否
   - 必填：否
   - 说明：Original blue invoice code

14. `datas.bills.hcyy`
   - 类型：string
   - 数组：否
   - 必填：否
   - 说明：Reason for Red Invoice

15. `datas.bills.zdrq`
   - 类型：date
   - 数组：否
   - 必填：否
   - 说明：Filling date

16. `datas.bills.gmfMc`
   - 类型：string
   - 数组：否
   - 必填：否
   - 说明：Buyer Name

17. `datas.bills.gmfNsrsbh`
   - 类型：string
   - 数组：否
   - 必填：否
   - 说明：Purchaser's Taxpayer Identification Number

18. `datas.bills.xsfMc`
   - 类型：string
   - 数组：否
   - 必填：否
   - 说明：Seller Name

19. `datas.bills.xsfNsrsbh`
   - 类型：string
   - 数组：否
   - 必填：否
   - 说明：Seller's Taxpayer Identification Number

20. `datas.bills.invoiceStatus`
   - 类型：string
   - 数组：否
   - 必填：否
   - 说明：Invoice Status

21. `datas.bills.fphm`
   - 类型：string
   - 数组：否
   - 必填：否
   - 说明：Red invoice number

22. `datas.bills.statusMc`
   - 类型：string
   - 数组：否
   - 必填：否
   - 说明：Reason for failure

23. `datas.bills.userName`
   - 类型：string
   - 数组：否
   - 必填：否
   - 说明：Handler

24. `datas.bills.hjje`
   - 类型：number
   - 数组：否
   - 必填：否
   - 说明：Total Amount

25. `datas.bills.hjse`
   - 类型：number
   - 数组：否
   - 必填：否
   - 说明：Total Tax Amount

26. `datas.bills.jshj`
   - 类型：number
   - 数组：否
   - 必填：否
   - 说明：Total Price Including Tax

27. `datas.bills.items`
   - 类型：object
   - 数组：是
   - 必填：否
   - 说明：Credit Confirmation Document Details

28. `datas.bills.items.fphxz`
   - 类型：number
   - 数组：否
   - 必填：否
   - 说明：Invoice line nature

29. `datas.bills.items.hh`
   - 类型：string
   - 数组：否
   - 必填：否
   - 说明：Line Number

30. `datas.bills.items.xmmc`
   - 类型：string
   - 数组：否
   - 必填：否
   - 说明：Project Name

31. `datas.bills.items.ggxh`
   - 类型：string
   - 数组：否
   - 必填：否
   - 说明：Specification Model

32. `datas.bills.items.dw`
   - 类型：string
   - 数组：否
   - 必填：否
   - 说明：Unit

33. `datas.bills.items.xmsl`
   - 类型：number
   - 数组：否
   - 必填：否
   - 说明：Quantity

34. `datas.bills.items.xmhsdj`
   - 类型：number
   - 数组：否
   - 必填：否
   - 说明：Project tax-inclusive unit price

35. `datas.bills.items.xmje`
   - 类型：number
   - 数组：否
   - 必填：否
   - 说明：Project Amount

36. `datas.bills.items.sl`
   - 类型：number
   - 数组：否
   - 必填：否
   - 说明：Tax Rate

37. `datas.bills.items.se`
   - 类型：number
   - 数组：否
   - 必填：否
   - 说明：Tax amount

38. `datas.bills.items.xmjshj`
   - 类型：number
   - 数组：否
   - 必填：否
   - 说明：Total Price and Tax of the Project

39. `datas.bills.items.spbm`
   - 类型：string
   - 数组：否
   - 必填：否
   - 说明：Tax Category Code

40. `datas.totalCount`
   - 类型：number
   - 数组：否
   - 必填：否
   - 说明：Total data count

## 返回示例

### 成功示例

无。

### 失败示例

无。

## 错误码

无。


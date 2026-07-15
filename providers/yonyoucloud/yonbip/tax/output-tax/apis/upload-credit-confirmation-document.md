# Upload Credit Confirmation Document

来源页面：

- https://open.yonyoucloud.com/#/doc-center/docDes/api?apiId=1758490298437599233&isOrigin=1&selectApiTab=open&from=&iframe=

机器可抓取的详情接口：

- https://open.yonyoucloud.com/iuap-ipaas-base/openPortal/api/getByVersionForTest/1758490298437599233/running?scene=open&isOrigin=1&isAjax=1

## 基本信息

- apiId：1758490298437599233
- API 类目：红字信息确认单
- 所属目录：红字申请表（Red Letter Application Form）
- 产品：税务服务
- 更新时间：2025-08-21 13:44:44.000
- 请求方法：POST
- Content-Type：application/json
- 接口路径：/yonbip/tax/api/etax/redinfo-apply/upload
- 完整调用地址：https://c2.yonyoucloud.com/iuap-api-gateway/yonbip/tax/api/etax/redinfo-apply/upload
- 鉴权方式：access_token 作为 Query 参数传递（?access_token=）
- 当前状态：当前接口
- 请求字段数：Query 0 个，Body 1 个
- 返回字段数：46 个

## 对接要点

- 调用 URL：`https://c2.yonyoucloud.com/iuap-api-gateway/yonbip/tax/api/etax/redinfo-apply/upload?access_token={access_token}`
- 调用方必须保存业务来源单号、发票请求流水号、请求报文、响应报文和状态查询结果，便于重试和对账。
- 开票、红冲、作废、驱动开票等写操作建议用业务唯一号做幂等控制；同一业务单不要生成多个不同流水号反复提交。
- 返回成功只代表接口调用成功，不一定代表税局或开票终态成功；涉及开票结果时必须再调用状态查询类接口确认。
- 详情接口返回字段说明可能为英文，字段名以开放平台原始字段为准。

## 调用模板

```bash
curl -X POST 'https://c2.yonyoucloud.com/iuap-api-gateway/yonbip/tax/api/etax/redinfo-apply/upload?access_token=访问令牌' \
  -H 'Content-Type: application/json' \
  -d '{"data": {}}'
```

## 请求参数

### Query 参数

无。

> 注：开放平台网关调用时通常还需传递 `access_token`。

### Body 参数

1. `reqBillNos`
   - 类型：string
   - 数组：否
   - 必填：是
   - 示例/默认值：`3123123`
   - 说明：Credit Confirmation Document Request Serial Number

## 请求示例

```text
Url: /ytqe8jhl/yonbip/tax/api/etax/redinfo-apply/upload?access_token=访问令牌
Body: [{
	"reqBillNos": "3123123"
}]
```

## 返回参数

### 返回字段

1. `code`
   - 类型：string
   - 数组：否
   - 必填：否
   - 示例/默认值：`200`
   - 说明：Return status code

2. `message`
   - 类型：string
   - 数组：否
   - 必填：否
   - 示例/默认值：`Upload successful`
   - 说明：Return Status Description

3. `data`
   - 类型：object
   - 数组：否
   - 必填：否
   - 说明：Return data

4. `data.reqBillNo`
   - 类型：string
   - 数组：否
   - 必填：否
   - 示例/默认值：`1762740142507728896`
   - 说明：Red Character Information Table Serial Number

5. `data.statusDm`
   - 类型：string
   - 数组：否
   - 必填：否
   - 示例/默认值：`2`
   - 说明：Information Sheet Status

6. `data.reqMemo`
   - 类型：string
   - 数组：否
   - 必填：否
   - 示例/默认值：`0000000101`
   - 说明：Application Selection (Fixed 10 digits, Buyer's Application Deducted: 1100000000, Buyer's Application Not
     Deducted: 1010000000, Seller's Application: 0000000100)

7. `data.yfpDm`
   - 类型：string
   - 数组：否
   - 必填：否
   - 示例/默认值：`11212541`
   - 说明：Original invoice code

8. `data.yfpHm`
   - 类型：string
   - 数组：否
   - 必填：否
   - 示例/默认值：`06319827426500627414`
   - 说明：Original invoice number

9. `data.zdrq`
   - 类型：string
   - 数组：否
   - 必填：否
   - 示例/默认值：`2024-02-28 00:00:00`
   - 说明：Document Date: yy-MM-dd HH:mm:ss

10. `data.kprq`
   - 类型：string
   - 数组：否
   - 必填：否
   - 示例/默认值：`20240228152103`
   - 说明：Invoice Date: yyMMddHHmmss

11. `data.gmfMc`
   - 类型：string
   - 数组：否
   - 必填：否
   - 示例/默认值：`trse001`
   - 说明：Buyer Name

12. `data.gmfNsrsbh`
   - 类型：string
   - 数组：否
   - 必填：否
   - 示例/默认值：`1216312`
   - 说明：Purchaser's Taxpayer Identification Number

13. `data.xsfMc`
   - 类型：string
   - 数组：否
   - 必填：否
   - 示例/默认值：`Fully Electric`
   - 说明：Seller Name

14. `data.xsfNsrsbh`
   - 类型：string
   - 数组：否
   - 必填：否
   - 示例/默认值：`441234867AAAAAA`
   - 说明：Seller's Taxpayer Identification Number

15. `data.hjje`
   - 类型：number
   - 数组：否
   - 必填：否
   - 示例/默认值：`-0.88`
   - 说明：Total Amount

16. `data.hjse`
   - 类型：number
   - 数组：否
   - 必填：否
   - 示例/默认值：`-0.12`
   - 说明：Total Tax Amount

17. `data.jshj`
   - 类型：number
   - 数组：否
   - 必填：否
   - 示例/默认值：`-1`
   - 说明：Total Price Including Tax

18. `data.kpr`
   - 类型：string
   - 数组：否
   - 必填：否
   - 示例/默认值：`Nickname - He Tingting`
   - 说明：Invoicer

19. `data.skr`
   - 类型：string
   - 数组：否
   - 必填：否
   - 示例/默认值：`I am the payee 1.`
   - 说明：Payee

20. `data.fhr`
   - 类型：string
   - 数组：否
   - 必填：否
   - 示例/默认值：`I am Reviewer 1.`
   - 说明：Reviewer

21. `data.bmbBbh`
   - 类型：string
   - 数组：否
   - 必填：否
   - 示例/默认值：`10.0`
   - 说明：Code Table Version Number

22. `data.fplx`
   - 类型：string
   - 数组：否
   - 必填：否
   - 示例/默认值：`32`
   - 说明：Invoice Type; 1: VAT Electronic Normal Invoice; 2: VAT Electronic Special Invoice; 3: VAT Normal Invoice; 4:
     VAT Special Invoice; 5: Motor Vehicle Sales Unified Invoice; 8: VAT Electronic Normal Invoice (Refined Oil);
     10: Refined Oil Normal Invoice; 11: Refined Oil Special Invoice; 15: Second-hand Vehicle Sales Unified
     Invoice; 31: Digital Special Invoice; 32: Digital Normal Invoice; 33: Digital Paper Invoice (VAT Special
     Invoice); 34: Digital Paper Invoice (Normal Invoice);

23. `data.lylx`
   - 类型：string
   - 数组：否
   - 必填：否
   - 示例/默认值：`1`
   - 说明：Source Type: 1 - Manual Issuance; 2 - Interface Input; 3 - File Import; 4 - QR Code Scan; 5 - WeChat Input; 6
     - Quick Invoicing; 7 - Alipay Input; 8 - Pinduoduo; 9 - Mini Program; w - Pending Invoice Details; v - Invoice
     Application Document; n - NCC Input

24. `data.fpqqlsh`
   - 类型：string
   - 数组：否
   - 必填：否
   - 示例/默认值：`1762740142507728897`
   - 说明：Invoice request serial number

25. `data.orgId`
   - 类型：string
   - 数组：否
   - 必填：否
   - 示例/默认值：`1684339912859975684`
   - 说明：Organization ID

26. `data.source`
   - 类型：string
   - 数组：否
   - 必填：否
   - 示例/默认值：`0`
   - 说明：Data Source; 0: Red invoice reversal through other means; 1: Red invoice reversal through special invoice
     overall reversal interface; 2: Obtained through UI page; 3: Obtained through API method, requires direct entry
     into the invoicing workflow, distinct from UI operations; 4: Successful application through the interface
     requires callback assistant to return success processing; 5: Application from the pending invoicing details
     interface.

27. `data.items`
   - 类型：object
   - 数组：是
   - 必填：否
   - 说明：Detailed Data

28. `data.items.fphxz`
   - 类型：string
   - 数组：否
   - 必填：否
   - 示例/默认值：`0`
   - 说明：Invoice Type; 0: Normal Item; 1: Discount Item; 2: Discounted Item

29. `data.items.hh`
   - 类型：string
   - 数组：否
   - 必填：否
   - 示例/默认值：`1`
   - 说明：Line Number

30. `data.items.xmmc`
   - 类型：string
   - 数组：否
   - 必填：否
   - 示例/默认值：`*Coal* washing coal`
   - 说明：Project Name

31. `data.items.dw`
   - 类型：string
   - 数组：否
   - 必填：否
   - 示例/默认值：`kg`
   - 说明：Unit

32. `data.items.ggxh`
   - 类型：string
   - 数组：否
   - 必填：否
   - 示例/默认值：`ton`
   - 说明：Specification Model

33. `data.items.xmje`
   - 类型：number
   - 数组：否
   - 必填：否
   - 示例/默认值：`-0.88`
   - 说明：Project Amount

34. `data.items.sl`
   - 类型：number
   - 数组：否
   - 必填：否
   - 示例/默认值：`0.13`
   - 说明：Tax Rate

35. `data.items.se`
   - 类型：number
   - 数组：否
   - 必填：否
   - 示例/默认值：`-0.12`
   - 说明：Tax amount

36. `data.items.hsbz`
   - 类型：string
   - 数组：否
   - 必填：否
   - 示例/默认值：`N`
   - 说明：Tax-inclusive flag; N: Excluding tax; Y: Including tax

37. `data.items.xmjshj`
   - 类型：number
   - 数组：否
   - 必填：否
   - 示例/默认值：`-1`
   - 说明：Project total including tax

38. `data.items.spbm`
   - 类型：string
   - 数组：否
   - 必填：否
   - 示例/默认值：`1020102000000000000`
   - 说明：Product Code

39. `data.items.yhzcbs`
   - 类型：string
   - 数组：否
   - 必填：否
   - 示例/默认值：`0`
   - 说明：Sales discount indicator; 0: not used, 1: used. Default 0 not used.

40. `data.items.ysxmmc`
   - 类型：string
   - 数组：否
   - 必填：否
   - 示例/默认值：`Coal washing`
   - 说明：Original Project Name

41. `data.items.lzmxxh`
   - 类型：string
   - 数组：否
   - 必填：否
   - 示例/默认值：`1`
   - 说明：Blue invoice detail serial number

42. `data.slbz`
   - 类型：string
   - 数组：否
   - 必填：否
   - 示例/默认值：`0`
   - 说明：Tax Rate Indicator; 0: Normal Taxation; 1: Differential Taxation

43. `data.sendOrReceive`
   - 类型：string
   - 数组：否
   - 必填：否
   - 示例/默认值：`1`
   - 说明：Initiator/Accession Party Identifier; 0: Accession Party; 1: Initiator

44. `data.hcyy`
   - 类型：string
   - 数组：否
   - 必填：否
   - 示例/默认值：`2`
   - 说明：Cause of red flush; 1: Sales return; 2: Incorrect invoicing; 3: Service suspension; 4: Sales allowance

45. `data.tspz`
   - 类型：string
   - 数组：否
   - 必填：否
   - 示例/默认值：`0`
   - 说明：Special Invoice Types; 0: General; 2: Fuel VAT Special Invoice; 8: Agricultural Product Sales; 9: Agricultural
     Product Purchase; 11: Tobacco Invoice; 12: Motor Vehicle Invoice; 14: Refined Oil Invoice; DK: Invoice Issued
     on Behalf; 16: Mineral Product Invoice; E01: Refined Oil Invoice; E03: Construction Service Invoice; E04:
     Goods Transportation; E05: Real Estate Sales; E06: Real Estate Leasing Service Invoice; E07: Collection of
     Vehicle and Vessel Tax; E09: Passenger Transportation; E12: Self-produced Agricultural Product Sales; E16:
     Agricultural Product Purchase; E17: Photovoltaic Purchase; E18: Cigarette Invoice

46. `data.fqfNsrshbh`
   - 类型：string
   - 数组：否
   - 必填：否
   - 示例/默认值：`441234867AAAAAA`
   - 说明：Initiator Taxpayer Identification Number

## 返回示例

### 成功示例

无。

### 失败示例

无。

## 错误码

| 错误码 | 错误说明 | 处理建议 |
| --- | --- | --- |
| 1002 |  |  |


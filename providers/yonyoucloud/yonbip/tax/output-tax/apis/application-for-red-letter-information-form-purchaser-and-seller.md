# Application for Red Letter Information Form (Purchaser and Seller)

来源页面：

- https://open.yonyoucloud.com/#/doc-center/docDes/api?apiId=4220660111b341678bfc930c21cd1540&isOrigin=1&selectApiTab=open&from=&iframe=

机器可抓取的详情接口：

- https://open.yonyoucloud.com/iuap-ipaas-base/openPortal/api/getByVersionForTest/4220660111b341678bfc930c21cd1540/running?scene=open&isOrigin=1&isAjax=1

## 基本信息

- apiId：4220660111b341678bfc930c21cd1540
- API 类目：红字信息表（专票）
- 所属目录：红字申请表（Red Letter Application Form）
- 产品：税务服务
- 更新时间：2025-07-01 17:05:45.000
- 请求方法：POST
- Content-Type：application/json
- 接口路径：/yonbip/tax/invoiceclient-web/api/redinfo-apply/insertWithRedApply
- 完整调用地址：https://c2.yonyoucloud.com/iuap-api-gateway/yonbip/tax/invoiceclient-web/api/redinfo-apply/insertWithRedApply
- 鉴权方式：access_token 作为 Query 参数传递（?access_token=）
- 当前状态：当前接口
- 请求字段数：Query 0 个，Body 28 个
- 返回字段数：2 个

## 对接要点

- 调用 URL：`https://c2.yonyoucloud.com/iuap-api-gateway/yonbip/tax/invoiceclient-web/api/redinfo-apply/insertWithRedApply?access_token={access_token}`
- 调用方必须保存业务来源单号、发票请求流水号、请求报文、响应报文和状态查询结果，便于重试和对账。
- 开票、红冲、作废、驱动开票等写操作建议用业务唯一号做幂等控制；同一业务单不要生成多个不同流水号反复提交。
- 返回成功只代表接口调用成功，不一定代表税局或开票终态成功；涉及开票结果时必须再调用状态查询类接口确认。
- 详情接口返回字段说明可能为英文，字段名以开放平台原始字段为准。

## 调用模板

```bash
curl -X POST 'https://c2.yonyoucloud.com/iuap-api-gateway/yonbip/tax/invoiceclient-web/api/redinfo-apply/insertWithRedApply?access_token=访问令牌' \
  -H 'Content-Type: application/json' \
  -d '{"data": {}}'
```

## 请求参数

### Query 参数

无。

> 注：开放平台网关调用时通常还需传递 `access_token`。

### Body 参数

1. `orgCode`
   - 类型：string
   - 数组：否
   - 必填：是
   - 示例/默认值：`0008test`
   - 说明：Invoicing Site Code; Query in Invoicing Site File

2. `reqMemo`
   - 类型：string
   - 数组：否
   - 必填：是
   - 示例/默认值：`1100000000`
   - 说明：Information Form Application Type: Buyer's Application Deducted: 1100000000; Buyer's Application Not Deducted:
     1010000000; Seller's Application: 0000000100

3. `yfpHm`
   - 类型：string
   - 数组：否
   - 必填：否
   - 示例/默认值：`121212121`
   - 说明：Original invoice number: Discount code number is required.

4. `yfpDm`
   - 类型：string
   - 数组：否
   - 必填：否
   - 示例/默认值：`511121513132`
   - 说明：Original invoice code: Deduction code number must be filled in.

5. `gmfMc`
   - 类型：string
   - 数组：否
   - 必填：是
   - 示例/默认值：`Yonyou Financial Information Technology Co., Ltd. 123`
   - 说明：Buyer Name

6. `gmfNsrsbh`
   - 类型：string
   - 数组：否
   - 必填：是
   - 示例/默认值：`111222333456333`
   - 说明：Purchaser's Taxpayer Identification Number

7. `xsfMc`
   - 类型：string
   - 数组：否
   - 必填：是
   - 示例/默认值：`Test 333`
   - 说明：Seller Name

8. `xsfNsrsbh`
   - 类型：string
   - 数组：否
   - 必填：是
   - 示例/默认值：`91110000600001760K`
   - 说明：Seller's Taxpayer Identification Number

9. `cpyMemo`
   - 类型：string
   - 数组：否
   - 必填：否
   - 示例/默认值：`1`
   - 说明：Red Letter Application Form for Finished Oil Involves Types: 1: Involves changes in sales quantity, 2:
     Involves changes in sales amount

10. `kprq`
   - 类型：string
   - 数组：否
   - 必填：否
   - 示例/默认值：`2023-02-01`
   - 说明：Invoice Date: Format is yyyy-MM-dd

11. `hjje`
   - 类型：BigDecimal
   - 数组：否
   - 必填：是
   - 示例/默认值：`-99.01`
   - 说明：Total Amount

12. `hjse`
   - 类型：BigDecimal
   - 数组：否
   - 必填：是
   - 示例/默认值：`-0.99`
   - 说明：Total Tax Amount

13. `jshj`
   - 类型：BigDecimal
   - 数组：否
   - 必填：是
   - 示例/默认值：`-100`
   - 说明：Total Price Including Tax

14. `kpr`
   - 类型：string
   - 数组：否
   - 必填：否
   - 示例/默认值：`Zhang San`
   - 说明：Invoicer: Must be provided when the invoicing site file has not set an invoicer.

15. `items`
   - 类型：object
   - 数组：是
   - 必填：否
   - 说明：Detailed Project Information

16. `items.xmmc`
   - 类型：string
   - 数组：否
   - 必填：是
   - 示例/默认值：`*Transportation Service* Rubber`
   - 说明：Project name with abbreviation

17. `items.ysxmmc`
   - 类型：string
   - 数组：否
   - 必填：否
   - 示例/默认值：`Eraser`
   - 说明：Project name without abbreviation

18. `items.xmje`
   - 类型：BigDecimal
   - 数组：否
   - 必填：是
   - 示例/默认值：`-99.01`
   - 说明：Project Amount

19. `items.se`
   - 类型：BigDecimal
   - 数组：否
   - 必填：是
   - 示例/默认值：`-0.99`
   - 说明：Tax amount

20. `items.xmjshj`
   - 类型：BigDecimal
   - 数组：否
   - 必填：是
   - 示例/默认值：`-100`
   - 说明：Project total including tax

21. `items.ggxh`
   - 类型：string
   - 数组：否
   - 必填：否
   - 示例/默认值：`Support`
   - 说明：Specification Model

22. `items.dw`
   - 类型：string
   - 数组：否
   - 必填：否
   - 示例/默认值：`One, two, three`
   - 说明：Unit

23. `items.xmdj`
   - 类型：BigDecimal
   - 数组：否
   - 必填：否
   - 示例/默认值：`23.0041942911`
   - 说明：Project Unit Price

24. `items.xmsl`
   - 类型：BigDecimal
   - 数组：否
   - 必填：否
   - 示例/默认值：`-4.3039977296`
   - 说明：Project Quantity

25. `items.sl`
   - 类型：BigDecimal
   - 数组：否
   - 必填：是
   - 示例/默认值：`0.01`
   - 说明：Tax Rate

26. `items.spbm`
   - 类型：string
   - 数组：否
   - 必填：是
   - 示例/默认值：`3213124314324322`
   - 说明：Product Code

27. `urls`
   - 类型：string
   - 数组：是
   - 必填：否
   - 示例/默认值：`[{ 		"fpqqlsh":"12345678901234567890",         "url": "http://url.com/msg"     }]`
   - 说明：Callback URL; For callback return parameters, see: https://fapiao.yonyoucloud.com/apidoc/appendix/ for
     additional descriptions of the open platform interface information.

28. `reqBillNo`
   - 类型：string
   - 数组：否
   - 必填：是
   - 示例/默认值：`84132123132`
   - 说明：Red Character Information Form Application Serial Number

## 请求示例

```text
Url: /yonbip/tax/invoiceclient-web/api/redinfo-apply/insertWithRedApply?access_token=访问令牌  
Body: {
	"orgCode": "0008test",
	"reqMemo": "1100000000",
	"yfpHm": "",
	"yfpDm": "",
	"gmfMc": "用友金融信息技术股份有限公司123",
	"gmfNsrsbh": "111222333456333",
	"xsfMc": "测试333",
	"xsfNsrsbh": "91110000600001760K",
	"cpyMemo": "",
	"kprq": "",
	"hjje": -99.01,
	"hjse": -0.99,
	"jshj": -100,
	"kpr": "",
	"items": [
		{
			"xmmc": "*运输服务*橡皮",
			"ysxmmc": "",
			"xmje": -99.01,
			"se": -0.99,
			"xmjshj": -100,
			"ggxh": "",
			"dw": "一二三",
			"xmdj": 23.0041942911,
			"xmsl": -4.3039977296,
			"sl": 0.01,
			"spbm": "3213124314324322"
		}
	],
	"urls": [
		""
	],
	"reqBillNo": ""
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
   - 示例/默认值：`Operation successful`
   - 说明：Operation Information

## 返回示例

### 成功示例

无。

### 失败示例

无。

## 错误码

| 错误码 | 错误说明 | 处理建议 |
| --- | --- | --- |
| 9999 |  |  |


# External application drives invoice merging or splitting.

来源页面：

- https://open.yonyoucloud.com/#/doc-center/docDes/api?apiId=2209779915343527936&isOrigin=1&selectApiTab=open&from=&iframe=

机器可抓取的详情接口：

- https://open.yonyoucloud.com/iuap-ipaas-base/openPortal/api/getByVersionForTest/2209779915343527936/running?scene=open&isOrigin=1&isAjax=1

## 基本信息

- apiId：2209779915343527936
- API 类目：待开票明细
- 所属目录：开票申请单（Invoice Request）
- 产品：税务服务
- 更新时间：2025-08-14 15:16:32.481
- 请求方法：POST
- Content-Type：application/json
- 接口路径：/yonbip/tax/output-tax/api/invoice-will/mergeOrSplit/invoicing
- 完整调用地址：https://c2.yonyoucloud.com/iuap-api-gateway/yonbip/tax/output-tax/api/invoice-will/mergeOrSplit/invoicing
- 鉴权方式：access_token 作为 Query 参数传递（?access_token=）
- 当前状态：当前接口
- 请求字段数：Query 0 个，Body 47 个
- 返回字段数：2 个

## 对接要点

- 调用 URL：`https://c2.yonyoucloud.com/iuap-api-gateway/yonbip/tax/output-tax/api/invoice-will/mergeOrSplit/invoicing?access_token={access_token}`
- 调用方必须保存业务来源单号、发票请求流水号、请求报文、响应报文和状态查询结果，便于重试和对账。
- 开票、红冲、作废、驱动开票等写操作建议用业务唯一号做幂等控制；同一业务单不要生成多个不同流水号反复提交。
- 返回成功只代表接口调用成功，不一定代表税局或开票终态成功；涉及开票结果时必须再调用状态查询类接口确认。
- 详情接口返回字段说明可能为英文，字段名以开放平台原始字段为准。

## 调用模板

```bash
curl -X POST 'https://c2.yonyoucloud.com/iuap-api-gateway/yonbip/tax/output-tax/api/invoice-will/mergeOrSplit/invoicing?access_token=访问令牌' \
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
   - 示例/默认值：`20250224002`
   - 说明：Invoice request serial number must be unique and cannot be duplicated.

2. `fpxz`
   - 类型：string
   - 数组：否
   - 必填：是
   - 示例/默认值：`01`
   - 说明：Invoice Type 01: Blue Invoice (only supports Fully Digitalized E-invoice) 02: Red Invoice (only supports Fully
     Digitalized E-invoice)

3. `blueVerifyType`
   - 类型：string
   - 数组：否
   - 必填：否
   - 示例/默认值：`Y`
   - 说明：Y: Strong Validation N: Non-Strong Validation When blue invoices are not transferred, the default is Y. When
     the invoice type is "red invoice," no value needs to be passed. This parameter is used to control whether the
     "Purchaser Name, Purchaser Tax Number, Tax Category Code for Detail Line, Invoicing Product Name, Product
     Specifications and Models, Quantity, Unit Price Fields" for blue invoice issuance are strictly validated
     against the original document. If N is selected, the content passed through the interface will prevail, and
     strong validation will not be performed, which may lead to discrepancies between the invoicing information and
     the original document. Please choose carefully.

4. `fplx`
   - 类型：string
   - 数组：否
   - 必填：是
   - 示例/默认值：`32`
   - 说明：Invoice Type 31: Digital Special Invoice; 32: Digital Normal Invoice; 33: Digital Paper Invoice (VAT Special
     Invoice); 34: Digital Paper Invoice (Normal Invoice); 36: Digital Paper Invoice (Unified Motor Vehicle Sales
     Invoice)

5. `tspz`
   - 类型：string
   - 数组：否
   - 必填：否
   - 示例/默认值：`E01`
   - 说明：Special Invoice Type E01: Finished Oil E12: Self-produced Agricultural Products Sales Invoice E16:
     Agricultural Products Purchase Invoice E17: Photovoltaic Purchase Invoice E24: Scrap Product Purchase

6. `gmfMc`
   - 类型：string
   - 数组：否
   - 必填：否
   - 示例/默认值：`Personal`
   - 说明：Buyer Name When the blue invoice verification type is "N", this field is required and will be included in the
     blue invoice; When the blue invoice verification type is "Y" or empty, this field does not need to be filled
     in and will be populated based on the original document.

7. `gmfNsrsbh`
   - 类型：string
   - 数组：否
   - 必填：否
   - 说明：Buyer Tax Number: When the blue invoice verification type is "N" and the [Invoice Type] is "31" or "33", this
     field is required and the entered value will be included in the blue invoice; when the blue invoice
     verification type is "Y" or empty, this field does not need to be filled in and will be carried over from the
     original document.

8. `gmfDz`
   - 类型：string
   - 数组：否
   - 必填：否
   - 说明：Buyer Address If transferred, the transfer shall prevail; if not transferred, the data in the application will
     be used. If the application data is inconsistent, an obtained address will be actively retrieved.

9. `gmfDh`
   - 类型：string
   - 数组：否
   - 必填：否
   - 说明：Buyer’s phone number If transferred, it shall be subject to the transfer; if not transferred, the data in the
     application will be used. If the application data is inconsistent, a retrieved phone number will be actively
     obtained.

10. `gmfYh`
   - 类型：string
   - 数组：否
   - 必填：否
   - 说明：Purchaser's bank If transferred, it shall be based on the transfer; if not transferred, the data in the
     application will be used. If the application data is inconsistent, an actively obtained bank will be
     retrieved.

11. `gmfZh`
   - 类型：string
   - 数组：否
   - 必填：否
   - 说明：Buyer account If transferred, it shall be subject to the transfer; if not transferred, the data in the
     application will be used. If the application data is inconsistent, an obtained account will be actively
     retrieved.

12. `allElcUserName`
   - 类型：string
   - 数组：否
   - 必填：否
   - 说明：Digital invoice username If a specific invoicing user needs to be designated, the username must be
     transferred. Invoicing will be based on the specified personnel. If no specific invoicing person is required,
     this field does not need to be filled in. This field must be encrypted according to the national secret 4
     encryption.

13. `allElcPassWord`
   - 类型：string
   - 数组：否
   - 必填：否
   - 说明：Digital invoice password: If it is a basic channel and uses account password login mode, if the account is not
     configured in the tax cloud, the invoice password can be transferred to facilitate automatic login for
     invoicing; This field must be encrypted according to the national secret 4 encryption standard.

14. `kpr`
   - 类型：string
   - 数组：否
   - 必填：否
   - 说明：Invoicer If empty, get the invoicer configured for the corresponding invoicing site.

15. `skr`
   - 类型：string
   - 数组：否
   - 必填：否
   - 说明：Payee If empty, get the payee configured for the corresponding invoicing site.

16. `fhr`
   - 类型：string
   - 数组：否
   - 必填：否
   - 说明：Reviewer If empty, get the corresponding invoicing site configuration's reviewer.

17. `bz`
   - 类型：string
   - 数组：否
   - 必填：否
   - 说明：Invoice Remarks  
     1. Red invoices do not need to be filled out; the system generates them automatically.  
     2. Blue invoice remark information needs to be assembled and transferred manually.

18. `zdybz`
   - 类型：string
   - 数组：否
   - 必填：否
   - 说明：Custom Note   User-defined note, not included in the invoice information, used to annotate some auxiliary
     remark information.

19. `einvoiceShowGxfDzDh`
   - 类型：string
   - 数组：否
   - 必填：否
   - 示例/默认值：`0`
   - 说明：Whether to display address and phone number: 0: Do not display 1: Only display seller's bank and account
     number 2: Only display buyer's bank and account number 3: Display both seller's and buyer's bank and account
     numbers

20. `einvoiceShowGxfYhZh`
   - 类型：string
   - 数组：否
   - 必填：否
   - 示例/默认值：`0`
   - 说明：Remarks on whether to display the buyer and seller's bank and account number: 0: Do not display 1: Only
     display seller's address and phone number 2: Only display buyer's address and phone number 3: Display both
     buyer and seller's address and phone number

21. `hcyy`
   - 类型：string
   - 数组：否
   - 必填：否
   - 说明：Reason for Credit Note: When the invoice type is a red invoice and the Credit Confirmation Document number is
     empty, this field must be filled in. Explanation of Credit Note Reasons: 1. Sales Return 2. Invoice Error 3.
     Invoice Cancellation 4. Sales Discount

22. `yfpDm`
   - 类型：string
   - 数组：否
   - 必填：否
   - 说明：When the original blue invoice code and the invoice type is a credit invoice, this field must be filled in
     when the credit confirmation document number is empty.

23. `yfpHm`
   - 类型：string
   - 数组：否
   - 必填：否
   - 说明：When the original blue invoice number is for a red invoice, and the Credit Confirmation Document number is
     empty, this field must be filled in.

24. `hzxxbbh`
   - 类型：string
   - 数组：否
   - 必填：否
   - 说明：Credit Confirmation Document Number Currently only supports Credit Confirmation Documents that have been
     confirmed by both the buyer and seller.

25. `revphone`
   - 类型：string
   - 数组：否
   - 必填：否
   - 说明：Receipt mobile phone, if there are multiple, can be separated by commas.

26. `revemail`
   - 类型：string
   - 数组：否
   - 必填：否
   - 说明：Invoice receipt email, if there are multiple, can be separated by commas.

27. `revurl`
   - 类型：string
   - 数组：否
   - 必填：否
   - 说明：Callback URL: The address information for the callback after the invoice issuance is completed. The callback
     interface needs to be created according to the system standard format.

28. `autoMake`
   - 类型：string
   - 数组：否
   - 必填：否
   - 示例/默认值：`false`
   - 说明：Automatic invoicing: true - automatic invoicing, meaning no manual confirmation is needed in the tax cloud;
     false - non-automatic invoicing, meaning manual confirmation is required in the tax cloud.

29. `items`
   - 类型：object
   - 数组：是
   - 必填：否
   - 说明：Invoice Details

30. `items.hh`
   - 类型：string
   - 数组：否
   - 必填：是
   - 示例/默认值：`1`
   - 说明：The line number corresponding to the invoice must be unique within a single invoice.

31. `items.xmsl`
   - 类型：number
   - 数组：否
   - 必填：否
   - 示例/默认值：`1`
   - 说明：The invoiced quantity must match the quantity in the detail list.

32. `items.xmdj`
   - 类型：number
   - 数组：否
   - 必填：否
   - 示例/默认值：`10`
   - 说明：Unit price If it is empty and the quantity is not empty, it will be recalculated based on the quantity; if you
     want the unit price not to be recalculated, a transfer is needed.

33. `items.xmje`
   - 类型：number
   - 数组：否
   - 必填：否
   - 示例/默认值：`10`
   - 说明：Invoice amount can have a maximum of two decimal places. If not filled in, it will be calculated based on the
     total taxable amount.

34. `items.se`
   - 类型：number
   - 数组：否
   - 必填：否
   - 示例/默认值：`0`
   - 说明：Invoice tax amount, up to two decimal places. If not filled in, it will be calculated based on the total
     taxable amount.

35. `items.xmjshj`
   - 类型：number
   - 数组：否
   - 必填：是
   - 示例/默认值：`10000`
   - 说明：Total price including tax, up to two decimal places.

36. `items.sl`
   - 类型：number
   - 数组：否
   - 必填：是
   - 示例/默认值：`0`
   - 说明：Tax Rate

37. `items.xmmc`
   - 类型：string
   - 数组：否
   - 必填：否
   - 说明：Product Name When the blue ticket verification type is "N", this field is required and will be included in the
     blue ticket; When the blue ticket verification type is "Y" or empty, this field does not need to be filled in
     and will be carried over from the original document.

38. `items.spssflbm`
   - 类型：string
   - 数组：否
   - 必填：否
   - 说明：Product Tax Category Code When the blue invoice verification type is "N", this field is required and will be
     included in the blue invoice; when the blue invoice verification type is "Y" or empty, this field does not
     need to be filled in and will be carried over from the original document.

39. `items.ggxh`
   - 类型：string
   - 数组：否
   - 必填：否
   - 说明：Specification Model When the blue ticket verification type is "N", entering a value in this field will be
     included in the blue ticket; when the blue ticket verification type is "Y" or empty, this field does not need
     to be filled in and will be populated based on the original document.

40. `items.dw`
   - 类型：string
   - 数组：否
   - 必填：否
   - 说明：Unit When the blue ticket verification type is "N", entering a value in this field will be included in the
     blue ticket; when the blue ticket verification type is "Y" or empty, this field does not need to be filled in
     and will be derived from the original document.

41. `items.invoiceWillBs`
   - 类型：object
   - 数组：是
   - 必填：否
   - 说明：Association Application Details

42. `items.invoiceWillBs.djqqlsh`
   - 类型：string
   - 数组：否
   - 必填：是
   - 示例/默认值：`djqqlshzdw0905001`
   - 说明：Corresponding application number

43. `items.invoiceWillBs.hh`
   - 类型：string
   - 数组：否
   - 必填：是
   - 示例/默认值：`1`
   - 说明：Line number of the detail row corresponding to the application.

44. `items.invoiceWillBs.xmsl`
   - 类型：number
   - 数组：否
   - 必填：否
   - 示例/默认值：`10`
   - 说明：The number of invoices issued by this bank: When the blue invoice verification type is "N", the value entered
     in this field will not be checked for compliance and will not be compared with the original document; When the
     blue invoice verification type is "Y", this field will be compared for compliance with the original document,
     and if it exceeds the allowable issuance quantity, an error will be returned.

45. `items.invoiceWillBs.xmje`
   - 类型：number
   - 数组：否
   - 必填：否
   - 说明：Invoice amount can have a maximum of two decimal places. If not filled in, it will be calculated based on the
     tax-inclusive total.

46. `items.invoiceWillBs.se`
   - 类型：number
   - 数组：否
   - 必填：否
   - 示例/默认值：`0`
   - 说明：Invoice tax amount, up to two decimal places. If not filled in, it will be calculated based on the total
     taxable amount.

47. `items.invoiceWillBs.xmjshj`
   - 类型：number
   - 数组：否
   - 必填：是
   - 示例/默认值：`10000`
   - 说明：Total price including tax, up to two decimal places.

## 请求示例

```text
Url: /ytqe8jhl/yonbip/tax/output-tax/api/invoice-will/mergeOrSplit/invoicing?access_token=访问令牌
Body: [{
	"fpqqlsh": "20250224002",
	"fpxz": "01",
	"blueVerifyType": "Y",
	"fplx": "32",
	"tspz": "E01",
	"gmfMc": "个人",
	"gmfNsrsbh": "",
	"gmfDz": "",
	"gmfDh": "",
	"gmfYh": "",
	"gmfZh": "",
	"allElcUserName": "",
	"allElcPassWord": "",
	"kpr": "",
	"skr": "",
	"fhr": "",
	"bz": "",
	"zdybz": "",
	"einvoiceShowGxfDzDh": "0",
	"einvoiceShowGxfYhZh": "0",
	"hcyy": "",
	"yfpDm": "",
	"yfpHm": "",
	"hzxxbbh": "",
	"revphone": "",
	"revemail": "",
	"revurl": "",
	"autoMake": "false",
	"items": [
		{
			"hh": "1",
			"xmsl": 1,
			"xmdj": 10,
			"xmje": 10,
			"se": 0,
			"xmjshj": 10000,
			"sl": 0,
			"xmmc": "",
			"spssflbm": "",
			"ggxh": "",
			"dw": "",
			"invoiceWillBs": [
				{
					"djqqlsh": "djqqlshzdw0905001",
					"hh": "1",
					"xmsl": 10,
					"xmje": 0,
					"se": 0,
					"xmjshj": 10000
				}
			]
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
   - 说明：Return status code

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

无。


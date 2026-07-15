# Issue Red Invoice - Partial (Partial Red Flush of Original Invoice)

来源页面：

- https://open.yonyoucloud.com/#/doc-center/docDes/api?apiId=2150786031362244612&isOrigin=1&selectApiTab=open&from=&iframe=

机器可抓取的详情接口：

- https://open.yonyoucloud.com/iuap-ipaas-base/openPortal/api/getByVersionForTest/2150786031362244612/running?scene=open&isOrigin=1&isAjax=1

## 基本信息

- apiId：2150786031362244612
- API 类目：开票申请
- 所属目录：开票（Invoicing）
- 产品：税务服务
- 更新时间：2025-09-02 15:22:52.000
- 请求方法：POST
- Content-Type：application/json
- 接口路径：/yonbip/tax/invoiceclient-web/api/invoiceApply/part-red-withjson
- 完整调用地址：https://c2.yonyoucloud.com/iuap-api-gateway/yonbip/tax/invoiceclient-web/api/invoiceApply/part-red-withjson
- 鉴权方式：access_token 作为 Query 参数传递（?access_token=）
- 当前状态：当前接口
- 请求字段数：Query 0 个，Body 52 个
- 返回字段数：6 个

## 对接要点

- 调用 URL：`https://c2.yonyoucloud.com/iuap-api-gateway/yonbip/tax/invoiceclient-web/api/invoiceApply/part-red-withjson?access_token={access_token}`
- 调用方必须保存业务来源单号、发票请求流水号、请求报文、响应报文和状态查询结果，便于重试和对账。
- 开票、红冲、作废、驱动开票等写操作建议用业务唯一号做幂等控制；同一业务单不要生成多个不同流水号反复提交。
- 返回成功只代表接口调用成功，不一定代表税局或开票终态成功；涉及开票结果时必须再调用状态查询类接口确认。
- 详情接口返回字段说明可能为英文，字段名以开放平台原始字段为准。

## 调用模板

```bash
curl -X POST 'https://c2.yonyoucloud.com/iuap-api-gateway/yonbip/tax/invoiceclient-web/api/invoiceApply/part-red-withjson?access_token=访问令牌' \
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
   - 必填：否
   - 说明：Data Body

2. `data.autoAudit`
   - 类型：boolean
   - 数组：否
   - 必填：否
   - 说明：Automatic review, meaning invoicing is done directly on the invoice platform without manual confirmation.
     false: no automatic review, manual confirmation is required. If not provided, it defaults to true.

3. `data.einvoiceApplyList`
   - 类型：object
   - 数组：是
   - 必填：否
   - 说明：Invoice Request Body

4. `data.einvoiceApplyList.orgcode`
   - 类型：string
   - 数组：否
   - 必填：否
   - 说明：Tax Organization Code  
     If one tax number corresponds to multiple tax organizations (associated invoicing site records), this field is
     mandatory to determine the unique tax organization (associated invoicing site record).

5. `data.einvoiceApplyList.fpqqlsh`
   - 类型：string
   - 数组：否
   - 必填：否
   - 说明：Invoice Request Serial Number  
     Note: This is not the invoice request serial number for blue invoices, but the request serial number for the
     current invoice red flush.

6. `data.einvoiceApplyList.fplx`
   - 类型：string
   - 数组：否
   - 必填：否
   - 说明：Invoice Type  
     Only for electronic invoice red flush tax control invoices is this mandatory, and the invoice type must be
     specified as an electronic invoice type;  
     1: VAT Electronic Normal Invoice;  
     2: VAT Electronic Special Invoice;  
     3: VAT Normal Invoice;  
     4: VAT Special Invoice;  
     5: Motor Vehicle Sales Unified Invoice;  
     8: VAT Electronic Normal Invoice (Refined Oil);  
     10: Refined Oil Normal Invoice;  
     11: Refined Oil Special Invoice;  
     15: Used Car Sales Unified Invoice;  
     31: Electronic Special Invoice;  
     32: Electronic Normal Invoice;  
     33: Electronic Paper Invoice (VAT Special Invoice);  
     34: Electronic Paper Invoice (Normal Invoice);  
     Optional, default is 1

7. `data.einvoiceApplyList.fpDm`
   - 类型：string
   - 数组：否
   - 必填：否
   - 说明：Invoice Code, Invoice Code of the Voided Invoice

8. `data.einvoiceApplyList.fpHm`
   - 类型：string
   - 数组：否
   - 必填：是
   - 说明：Invoice Number Invoice Number of the Voided Invoice

9. `data.einvoiceApplyList.hcyy`
   - 类型：string
   - 数组：否
   - 必填：否
   - 说明：Red Flush Reason Explanation: 1 Sales Return 2 Invoice Error 3 Invoice Cancellation 4 Sales Allowance; (Red
     flush reason is mandatory for digital invoices)  
     Red flush reason is mandatory for digital invoices. When the invoice type is (VAT Normal Invoice, VAT
     Electronic Normal Invoice, VAT Normal Invoice (Roll), VAT Electronic Normal Invoice (Refined Oil), VAT Normal
     Invoice (Refined Oil), VAT Normal Invoice (Purchase), Electronic Purchase Invoice, Digital Special Invoice,
     Digital Normal Invoice), the red flush reason must be filled in.

10. `data.einvoiceApplyList.hzxxbbh`
   - 类型：string
   - 数组：否
   - 必填：否
   - 说明：Red Letter Information Form Number: Mandatory for special invoice red flush; not required for digital special
     invoice red flush at present.

11. `data.einvoiceApplyList.xsfNsrsbh`
   - 类型：string
   - 数组：否
   - 必填：否
   - 说明：Seller Taxpayer Identification Number  
     If a tax number is associated with only one tax organization (associated invoicing site record), only the
     seller's tax number needs to be transmitted; either the seller's tax number or the tax organization code must
     be provided.

12. `data.einvoiceApplyList.gmfMc`
   - 类型：string
   - 数组：否
   - 必填：否
   - 说明：Buyer

13. `data.einvoiceApplyList.gmfNsrsbh`
   - 类型：string
   - 数组：否
   - 必填：否
   - 说明：Buyer Taxpayer ID No.

14. `data.einvoiceApplyList.kpr`
   - 类型：string
   - 数组：否
   - 必填：否
   - 说明：Billed By

15. `data.einvoiceApplyList.skr`
   - 类型：string
   - 数组：否
   - 必填：否
   - 说明：Payee

16. `data.einvoiceApplyList.fhr`
   - 类型：string
   - 数组：否
   - 必填：否
   - 说明：Reviewed By

17. `data.einvoiceApplyList.slsm`
   - 类型：string
   - 数组：否
   - 必填：否
   - 说明：1: When a Small-scale Taxpayer issues an invoice with a 3% tax rate, a tax rate explanation must be provided;
     2: If invoices have been issued previously and sales discounts, cancellations, or returns occur, a red-letter
     invoice must be issued, or if there is an error in invoicing, a re-issuance is required;  
     3: Due to actual business needs, the policy of enjoying the reduced VAT levy rate of 1% is waived.

18. `data.einvoiceApplyList.allElcUserName`
   - 类型：string
   - 数组：否
   - 必填：否
   - 说明：Full Electric Login Username

19. `data.einvoiceApplyList.allElcPassWord`
   - 类型：string
   - 数组：否
   - 必填：否
   - 说明：Full Electric Login Password

20. `data.einvoiceApplyList.lydjh`
   - 类型：string
   - 数组：否
   - 必填：否
   - 说明：Source Document Number

21. `data.einvoiceApplyList.define`
   - 类型：object
   - 数组：否
   - 必填：否
   - 说明：Custom Characteristic Item

22. `data.einvoiceApplyList.jshj`
   - 类型：number
   - 数组：否
   - 必填：是
   - 说明：Amount Including Tax

23. `data.einvoiceApplyList.hjje`
   - 类型：number
   - 数组：否
   - 必填：否
   - 说明：Total Amount

24. `data.einvoiceApplyList.hjse`
   - 类型：number
   - 数组：否
   - 必填：否
   - 说明：Total Tax Amount

25. `data.einvoiceApplyList.lyid`
   - 类型：string
   - 数组：否
   - 必填：否
   - 说明：Request Source Unique Identifier

26. `data.einvoiceApplyList.bmbBbh`
   - 类型：string
   - 数组：否
   - 必填：否
   - 说明：Code Table Version Number

27. `data.einvoiceApplyList.items`
   - 类型：object
   - 数组：是
   - 必填：否
   - 说明：Detail Object

28. `data.einvoiceApplyList.items.hh`
   - 类型：string
   - 数组：否
   - 必填：否
   - 说明：Line number Required when there is a discount

29. `data.einvoiceApplyList.items.xmmc`
   - 类型：string
   - 数组：否
   - 必填：是
   - 说明：Project Name

30. `data.einvoiceApplyList.items.xmbm`
   - 类型：string
   - 数组：否
   - 必填：否
   - 说明：Project Code

31. `data.einvoiceApplyList.items.ggxh`
   - 类型：string
   - 数组：否
   - 必填：否
   - 说明：Specification

32. `data.einvoiceApplyList.items.dw`
   - 类型：string
   - 数组：否
   - 必填：否
   - 说明：Unit

33. `data.einvoiceApplyList.items.xmsl`
   - 类型：string
   - 数组：否
   - 必填：否
   - 说明：Item Quantity

34. `data.einvoiceApplyList.items.xmdj`
   - 类型：number
   - 数组：否
   - 必填：否
   - 说明：Item Unit Price

35. `data.einvoiceApplyList.items.xmje`
   - 类型：number
   - 数组：否
   - 必填：否
   - 说明：Item Amount

36. `data.einvoiceApplyList.items.xmjshj`
   - 类型：number
   - 数组：否
   - 必填：否
   - 说明：Item Amount Including Tax

37. `data.einvoiceApplyList.items.sl`
   - 类型：number
   - 数组：否
   - 必填：否
   - 说明：Tax Rate

38. `data.einvoiceApplyList.items.se`
   - 类型：number
   - 数组：否
   - 必填：否
   - 说明：Tax Amount

39. `data.einvoiceApplyList.items.spbm`
   - 类型：string
   - 数组：否
   - 必填：是
   - 说明：Product Code

40. `data.einvoiceApplyList.items.define`
   - 类型：object
   - 数组：否
   - 必填：否
   - 示例/默认值：`{             "Characteristic key":"Example characteristic value Optional"         }`
   - 说明：Characteristic Value

41. `data.emailConfigList`
   - 类型：object
   - 数组：是
   - 必填：否
   - 说明：Email Delivery Information

42. `data.emailConfigList.fpqqlsh`
   - 类型：string
   - 数组：否
   - 必填：否
   - 说明：The invoice request serial number should be consistent with the one in the above einvoiceApplyList.

43. `data.emailConfigList.address`
   - 类型：string
   - 数组：否
   - 必填：否
   - 说明：Email

44. `data.smsConfigList`
   - 类型：object
   - 数组：是
   - 必填：否
   - 说明：SMS Delivery Information

45. `data.smsConfigList.fpqqlsh`
   - 类型：string
   - 数组：否
   - 必填：否
   - 说明：The invoice request serial number should be consistent with the one in the above einvoiceApplyList.

46. `data.smsConfigList.address`
   - 类型：string
   - 数组：否
   - 必填：否
   - 说明：Mobile No.

47. `data.urlConfigList`
   - 类型：object
   - 数组：是
   - 必填：否
   - 说明：URL Delivery Information

48. `data.urlConfigList.fpqqlsh`
   - 类型：string
   - 数组：否
   - 必填：否
   - 说明：The invoice request serial number should be consistent with the one in the above einvoiceApplyList.

49. `data.urlConfigList.url`
   - 类型：string
   - 数组：否
   - 必填：否
   - 说明：Callback Address

50. `data.auditReturnConfigs`
   - 类型：object
   - 数组：是
   - 必填：否
   - 说明：Return Address Information

51. `data.auditReturnConfigs.fpqqlsh`
   - 类型：string
   - 数组：否
   - 必填：否
   - 说明：The invoice request serial number should be consistent with the one in the above einvoiceApplyList.

52. `data.auditReturnConfigs.url`
   - 类型：string
   - 数组：否
   - 必填：否
   - 说明：Return Address

## 请求示例

```text
Url: /yonbip/tax/invoiceclient-web/api/invoiceApply/part-red-withjson?access_token=访问令牌
Body: {
	"data": {
		"einvoiceApplyList": [{
            "FPQQLSH": "发票请求流水号 注意不是蓝字的发票请求流水号，是本次发票红冲的请求流水号 必填",
            "fpHm": "发票号码 必填",
            "fpDm": "发票代码 必填",
            "KPR": "开票人 选填",
            "SKR": "收款人 选填",
            "FHR": "复核人 选填",
            "GMF_MC": " 购买方名称 选填",
            "GMF_DZDH": "购买方地址电话 选填",
            "GMF_YHZH": "购买方银行账号 选填",
            "GMF_NSRSBH": "购买方纳税人识别号 选填",
            "JSHJ": "117 double 价税合计 必填",
            "HJJE": "100 double 合计金额 选填",
            "HJSE": "17 double 合计税额 选填",
            "LYID": "请求来源唯一标识 选填",
            "BMB_BBH": "编码表版本号 选填",
            "ORGCODE": "开票点编码 如果一个税号对应多个开票点，此字段必输，用于确定唯一开票点",
            "SLSM": "税率说明 1：当小规模纳税人开具3%税率时需要填写税率说明；2：前期已开具发票，发生销售折让、中止或者退回等情形需要开具红字发票，或者开票有误需要重新开具； 3：因为实际经营业务需要，放弃享受减按1%征收率征收增值税政策。",
            "HCYY": "红冲原因说明 ：1 销货退回 2 开票有误 3 开票中止 4 销售折让;（数电发票红冲原因必填）",
            "hzxxbbh": "红字信息表编号 专票红冲时必传",
            "ALLELCUSERNAME": "数电发票用户名 如果发票类型是数电发票用户名必填 并且是国密四密文（数电专用字段）",
            "ALLELCPASSWORD": "数电发票密码	如果发票类型是数电发票密码必填 并且是国密四密文（数电专用字段"，
            "define":{
                   "特征key":"特征值示例 选填"
            },
            "items": [{
                "XMMC": "项目名称 必填",
                "XMBM": "项目编码 选填",
                "GGXH": "规格型号 选填",
                "DW": "单位 选填",
                "XMSL": "项目数量 选填",
                "XMDJ": "项目单价 double 选填",
                "XMJE": "项目金额 double 选填",
                "XMJSHJ": "项目价税合计 double 必填",
                "SL": "税率 double 必填",
                "SE": "税额 double 选填",
                "HH": "行号 有折扣时必输",
                "SPBM": "商品编码 必填"，
                "define":{
                    "特征key":"特征值示例 选填"
                }
            }]
        }],
        "autoAudit" : false,
		"emailConfigList": [
			{
                "fpqqlsh":"发票请求流水号和requestdatas保持一致 必填",
                "address": "邮箱地址 必填", 
                "title": "电子发票 选填", 
                "content": "订单XXX电子发票。 选填"
            }
		],
		"smsConfigList": [
			{
				"fpqqlsh":"12345678901234567890 必填",
        		"address": "手机号 必填"
			}
		],
		"urlConfigList": [
			{
				"fpqqlsh":"发票请求流水号和requestdatas保持一致 必填",
        		"url": "请求网址 必填"
			}
		],
		"auditReturnConfigs": [
			{
				"fpqqlsh":"发票请求流水号",
                "url":"www.baidu.com"
			}
		]
	}
}
```

## 返回参数

### 返回字段

1. `code`
   - 类型：string
   - 数组：否
   - 必填：否
   - 示例/默认值：`0000`
   - 说明：Status Code

2. `code`
   - 类型：string
   - 数组：否
   - 必填：否
   - 示例/默认值：`0000`
   - 说明：Status Code

3. `message`
   - 类型：string
   - 数组：否
   - 必填：否
   - 示例/默认值：`Operation successful`
   - 说明：Information

4. `message`
   - 类型：string
   - 数组：否
   - 必填：否
   - 示例/默认值：`Operation successful`
   - 说明：Information

5. `data`
   - 类型：string
   - 数组：否
   - 必填：否
   - 说明：Response Information

6. `data`
   - 类型：string
   - 数组：否
   - 必填：否
   - 说明：Response Information

## 返回示例

### 成功示例

无。

### 失败示例

无。

## 错误码

| 错误码 | 错误说明 | 处理建议 |
| --- | --- | --- |
| 1001 |  |  |
| 1001 |  |  |


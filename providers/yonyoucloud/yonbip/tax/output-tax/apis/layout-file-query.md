# Layout File Query

来源页面：

- https://open.yonyoucloud.com/#/doc-center/docDes/api?apiId=1847888797142876169&isOrigin=1&selectApiTab=open&from=&iframe=

机器可抓取的详情接口：

- https://open.yonyoucloud.com/iuap-ipaas-base/openPortal/api/getByVersionForTest/1847888797142876169/running?scene=open&isOrigin=1&isAjax=1

## 基本信息

- apiId：1847888797142876169
- API 类目：已开票
- 所属目录：销项企业票夹（Outbound Enterprise Invoice Folder）
- 产品：税务服务
- 更新时间：2025-10-13 14:23:52.000
- 请求方法：POST
- Content-Type：application/json
- 接口路径：/yonbip/tax/output-tax/api/einvoice/getbsfile
- 完整调用地址：https://c2.yonyoucloud.com/iuap-api-gateway/yonbip/tax/output-tax/api/einvoice/getbsfile
- 鉴权方式：access_token 作为 Query 参数传递（?access_token=）
- 当前状态：当前接口
- 请求字段数：Query 0 个，Body 10 个
- 返回字段数：11 个

## 对接要点

- 调用 URL：`https://c2.yonyoucloud.com/iuap-api-gateway/yonbip/tax/output-tax/api/einvoice/getbsfile?access_token={access_token}`
- 调用方必须保存业务来源单号、发票请求流水号、请求报文、响应报文和状态查询结果，便于重试和对账。
- 开票、红冲、作废、驱动开票等写操作建议用业务唯一号做幂等控制；同一业务单不要生成多个不同流水号反复提交。
- 返回成功只代表接口调用成功，不一定代表税局或开票终态成功；涉及开票结果时必须再调用状态查询类接口确认。
- 详情接口返回字段说明可能为英文，字段名以开放平台原始字段为准。

## 调用模板

```bash
curl -X POST 'https://c2.yonyoucloud.com/iuap-api-gateway/yonbip/tax/output-tax/api/einvoice/getbsfile?access_token=访问令牌' \
  -H 'Content-Type: application/json' \
  -d '{"data": {}}'
```

## 请求参数

### Query 参数

无。

> 注：开放平台网关调用时通常还需传递 `access_token`。

### Body 参数

1. `nsrsbh`
   - 类型：string
   - 数组：否
   - 必填：否
   - 示例/默认值：`213232`
   - 说明：Taxpayer ID No.

2. `fplx`
   - 类型：string
   - 数组：否
   - 必填：否
   - 示例/默认值：`1`
   - 说明：1: VAT Electronic Normal Invoice;  
     2: VAT Electronic Special Invoice;  
     3: VAT Normal Invoice;  
     4: VAT Special Invoice, VAT Special Invoice (Motor Vehicle);  
     5: Unified Invoice for Motor Vehicle Sales;  
     8: VAT Electronic Normal Invoice (Refined Oil);  
     10: Refined Oil Normal Invoice;  
     11: Refined Oil Special Invoice;  
     15: Unified Invoice for Used Car Sales;  
     31: Digital Electronic Special Invoice;  
     32: Digital Electronic Normal Invoice;  
     33: Digital Electronic Paper Invoice (VAT Special Invoice);  
     34: Digital Electronic Paper Invoice (Normal Invoice);

3. `slfphm`
   - 类型：string
   - 数组：否
   - 必填：否
   - 示例/默认值：`12212323`
   - 说明：Digital invoice number; digital invoice number and invoice number + invoice code cannot both be empty at the
     same time

4. `fpdm`
   - 类型：string
   - 数组：否
   - 必填：否
   - 示例/默认值：`12132302`
   - 说明：Invoice code; the electronic invoice number and the invoice number + invoice code cannot both be empty at the
     same time.

5. `fphm`
   - 类型：string
   - 数组：否
   - 必填：否
   - 示例/默认值：`12232`
   - 说明：Invoice Number; The electronic invoice number and the invoice number + invoice code cannot both be empty at
     the same time

6. `dataType`
   - 类型：string
   - 数组：否
   - 必填：否
   - 示例/默认值：`1`
   - 说明：File return type. 1. base64 file stream  2. download address  3. both returned. Default is 1.

7. `yypdf`
   - 类型：string
   - 数组：否
   - 必填：否
   - 示例/默认值：`1`
   - 说明：Yonyou Self-Draw PDF

8. `taxpdf`
   - 类型：string
   - 数组：否
   - 必填：否
   - 示例/默认值：`1`
   - 说明：Tax Bureau PDF

9. `taxofd`
   - 类型：string
   - 数组：否
   - 必填：否
   - 示例/默认值：`1`
   - 说明：Tax Bureau OFD

10. `taxxml`
   - 类型：string
   - 数组：否
   - 必填：否
   - 示例/默认值：`1`
   - 说明：Tax Bureau XML

## 请求示例

```text
Url: /ytqe8jhl/yonbip/tax/output-tax/api/einvoice/getbsfile?access_token=访问令牌
Body: {
	"nsrsbh": "213232",
	"fplx": "1",
	"slfphm": "12212323",
	"fpdm": "12132302",
	"fphm": "12232",
	"dataType": "1",
	"yypdf": "1",
	"taxpdf": "1",
	"taxofd": "1",
	"taxxml": "1"
}
```

## 返回参数

### 返回字段

1. `code`
   - 类型：string
   - 数组：否
   - 必填：否
   - 示例/默认值：`200`
   - 说明：Return Status Code

2. `message`
   - 类型：string
   - 数组：否
   - 必填：否
   - 示例/默认值：`Operation successful`
   - 说明：Return Message

3. `data`
   - 类型：object
   - 数组：否
   - 必填：否
   - 说明：Return Data

4. `data.yypdf`
   - 类型：string
   - 数组：否
   - 必填：否
   - 示例/默认值：`File stream base64 string`
   - 说明：Yonyou Self-Draw PDF

5. `data.taxpdf`
   - 类型：string
   - 数组：否
   - 必填：否
   - 示例/默认值：`File stream base64 string`
   - 说明：Tax PDF

6. `data.taxofd`
   - 类型：string
   - 数组：否
   - 必填：否
   - 示例/默认值：`File stream base64 string`
   - 说明：Tax Bureau OFD

7. `data.taxxml`
   - 类型：string
   - 数组：否
   - 必填：否
   - 示例/默认值：`File stream base64 string`
   - 说明：Tax Bureau XML

8. `data.yypdfUrl`
   - 类型：string
   - 数组：否
   - 必填：否
   - 示例/默认值：`http://yonbip-pre.yonyoucloud.com/111`
   - 说明：PDF (with invoice stamp) download address

9. `data.taxpdfUrl`
   - 类型：string
   - 数组：否
   - 必填：否
   - 示例/默认值：`http://yonbip-pre.yonyoucloud.com/111`
   - 说明：PDF (No Invoice Stamp) Download Address

10. `data.taxofdUrl`
   - 类型：string
   - 数组：否
   - 必填：否
   - 示例/默认值：`http://yonbip-pre.yonyoucloud.com/111`
   - 说明：OFD Download Address

11. `data.taxxmlUrl`
   - 类型：string
   - 数组：否
   - 必填：否
   - 示例/默认值：`http://yonbip-pre.yonyoucloud.com/111`
   - 说明：XML Download Address

## 返回示例

### 成功示例

无。

### 失败示例

无。

## 错误码

| 错误码 | 错误说明 | 处理建议 |
| --- | --- | --- |
| 9999 |  |  |


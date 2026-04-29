# Invoice Status Inquiry

来源页面：

- https://open.yonyoucloud.com/#/doc-center/docDes/api?apiId=1969588327580958724&isOrigin=1&selectApiTab=open&from=&iframe=

机器可抓取的详情接口：

- https://open.yonyoucloud.com/iuap-ipaas-base/openPortal/api/getByVersionForTest/1969588327580958724/running?scene=open&isOrigin=1&isAjax=1

## 基本信息

- apiId：1969588327580958724
- API 类目：开票管理
- 产品：税务服务
- 更新时间：2025-11-20 10:52:21.000
- 请求方法：POST
- Content-Type：application/json
- 接口路径：/yonbip/tax/invoiceclient-web/api/invoiceApply/queryInvoiceStatusWithJson

## 请求参数

### Query 参数

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| access_token | string | 是 | 接口令牌 access_token |

### Body 参数

| 字段路径 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| fpqqlsh | string | 是 | Invoice Request SN |

## 请求示例

```text
Url: /yonbip/tax//api/invoiceApplyqueryInvoiceStatusWithJson?access_token=<ACCESS_TOKEN>  
Body: {
	"fpqqlsh": "1354466355222"
}
```

## 返回参数说明

| 字段路径 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| code | string | 否 | Status Code |
| data | object | 否 | Data |
| data.bsstatus | string | 否 | Layout status.0-Layout success;1-Layout failure |
| data.smsState | string | 否 | SMS delivery status. 0 - Not delivered 1 - Delivery failed 2 - Delivery successful. Delivery successful only indicates that the SMS content has been successfully pushed to the SMS operator and the sending action has been completed. It cannot identify whether the SMS was successfully sent and received by the recipient |
| data.emailState | string | 否 | SMS delivery status. 0-Undelivered 1-Delivery failed 2-Delivery successful. Delivery successful only indicates that the SMS content has been successfully pushed to the SMS operator and the sending action has been completed. It does not indicate whether the SMS was successfully sent or received by the recipient |
| data.errmsg | string | 否 | Error Information |
| data.fpqqlsh | string | 否 | Invoice Request SN |
| data.invoiceDetail | object | 否 | Invoice |
| data.invoiceDetail.fpqqlsh | string | 否 | Invoice Request SN |
| data.invoiceDetail.pdf | string | 否 | Base64 encoded data, determined by fileType; pdf for PDF format, ofd for OFD format. |
| data.invoiceDetail.corpid | string | 否 | Tenant ID |
| data.invoiceDetail.data | object | 否 | Invoice Detailed Data |
| data.invoiceDetail.data.fpzt | string | 否 | Invoice Status  1 - Pending Invoice (Invoice clerk confirmation required); 2 - Invoicing; 3 - Invoice Failed; 4 - Invoice Successful. |
| data.invoiceDetail.data.accountStatus | string | 否 | Accounting Status: 1 - Not Accounted; 2 - Accounted |
| data.invoiceDetail.data.aggregate | string | 否 | Whether it is data from the past two months; true indicates querying data within the last two months; leaving it blank means querying all data. |
| data.invoiceDetail.data.bmbBbh | string | 否 | Code Table Number |
| data.invoiceDetail.data.bred | string | 否 | Whether reversed by red flush: Y indicates reversed by red flush, N or null indicates not reversed by red flush |
| data.invoiceDetail.data.bz | string | 否 | Remarks |
| data.invoiceDetail.data.code | string | 否 | Organization Code Property |
| data.invoiceDetail.data.corpId | string | 否 | Tenant ID |
| data.invoiceDetail.data.creator | string | 否 | Created By |
| data.invoiceDetail.data.creatorName | string | 否 | Creator Name |
| data.invoiceDetail.data.email | string | 否 | Email |
| data.invoiceDetail.data.ewm | string | 否 | QR Code |
| data.invoiceDetail.data.fhr | string | 否 | Reviewed By |
| data.invoiceDetail.data.fpDm | string | 否 | Invoice Code |
| data.invoiceDetail.data.fpHm | string | 否 | Invoice No. |
| data.invoiceDetail.data.fpMw | string | 否 | Invoice Ciphertext |
| data.invoiceDetail.data.fpjz | string | 否 | Invoice Medium: 0 Electronic Invoice 1 Paper Invoice |
| data.invoiceDetail.data.fplx | string | 否 | Invoice Type: 1: VAT Electronic Normal Invoice; 2: VAT Electronic Special Invoice; 3: VAT Normal Invoice; 4: VAT Special Invoice; 5: Motor Vehicle Sales Unified Invoice; 8: VAT Electronic Normal Invoice (Refined Oil); 10: Refined Oil Normal Invoice; 11: Refined Oil Special Invoice; 15: Used Car Sales Unified Invoice; 31: Digital Special Invoice; 32: Digital Normal Invoice; 33: Digital Paper Invoice (VAT Special Invoice); 34: Digital Paper Invoice (Normal Invoice); |
| data.invoiceDetail.data.fpqqlsh | string | 否 | Invoice Request SN |
| data.invoiceDetail.data.gmfDzdh | string | 否 | Purchaser's Address and Phone Number |
| data.invoiceDetail.data.gmfMc | string | 否 | Buyer |
| data.invoiceDetail.data.gmfNsrsbh | string | 否 | Buyer Taxpayer ID No. |
| data.invoiceDetail.data.gmfYhzh | string | 否 | Buyer Bank Account No. |
| data.invoiceDetail.data.hjje | BigDecimal | 否 | Total Amount |
| data.invoiceDetail.data.hjse | BigDecimal | 否 | Total Tax Amount |
| data.invoiceDetail.data.hzxxbbh | string | 否 | Red Entry Information Table Number |
| data.invoiceDetail.data.items[] | object | 否 | Line Item Information |
| data.invoiceDetail.data.items[].dw | string | 否 | Unit |
| data.invoiceDetail.data.items[].fphxz | long | 否 | Invoice Line Type: 0 Normal Line 1 Discount Line 2 Discounted Line |
| data.invoiceDetail.data.items[].ggxh | string | 否 | Specification |
| data.invoiceDetail.data.items[].hh | string | 否 | Line No. |
| data.invoiceDetail.data.items[].kce | BigDecimal | 否 | Deduction Amount |
| data.invoiceDetail.data.items[].lslbs | string | 否 | Zero Tax Rate Identifier: 0: Export Tax Rebate, 1: Tax Exempt, 2: Not Levied, 3: Normal Zero Tax Rate |
| data.invoiceDetail.data.items[].se | BigDecimal | 否 | Tax Amount |
| data.invoiceDetail.data.items[].sl | BigDecimal | 否 | Tax Rate |
| data.invoiceDetail.data.items[].spbm | string | 否 | Product Code |
| data.invoiceDetail.data.items[].xmdj | BigDecimal | 否 | Item Unit Price |
| data.invoiceDetail.data.items[].xmhsdj | BigDecimal | 否 | Project Unit Price Including Tax |
| data.invoiceDetail.data.items[].xmje | BigDecimal | 否 | Item Amount |
| data.invoiceDetail.data.items[].xmjshj | BigDecimal | 否 | Item Amount Including Tax |
| data.invoiceDetail.data.items[].xmmc | string | 否 | Project Name |
| data.invoiceDetail.data.items[].xmsl | BigDecimal | 否 | Item Quantity |
| data.invoiceDetail.data.items[].yhzcbs | long | 否 | Sales Discount Flag; 0: Not Used, 1: Used |
| data.invoiceDetail.data.items[].ysxmmc | string | 否 | Original Project Name |
| data.invoiceDetail.data.items[].zkhhh | string | 否 | Discount Line Number |
| data.invoiceDetail.data.items[].zxbm | string | 否 | Product Self-Coding |
| data.invoiceDetail.data.items[].zzstsgl | string | 否 | Preferential Policy Description; Simple Taxation at 3%, Simple Taxation at 5% (When this field is not empty, the preferential treatment indicator YHZCBS field value must be 1) |
| data.invoiceDetail.data.jqbh | string | 否 | Machine No. |
| data.invoiceDetail.data.jshj | BigDecimal | 否 | Amount Including Tax |
| data.invoiceDetail.data.jym | string | 否 | Verification Code |
| data.invoiceDetail.data.kplx | long | 否 | Invoice Type  0: Blue Invoice; 1: Red Invoice |
| data.invoiceDetail.data.kpr | string | 否 | Billed By |
| data.invoiceDetail.data.kprq | string | 否 | Invoice Date  yyyyMMddhhmmss |
| data.invoiceDetail.data.lyid | string | 否 | Source ID |
| data.invoiceDetail.data.lylx | string | 否 | Source Type 1-Manual Issuance; 2-Interface Input; 3-File Import; 4-QR Code Scan; 5-WeChat Input; 6-Quick Invoicing; 7-Alipay Input; 8-Pinduoduo; 9-Mini Program; w-Pending Invoice Details; v-Invoice Application Document; n-NCC Input |
| data.invoiceDetail.data.orgId | long | 否 | Organization ID |
| data.invoiceDetail.data.orgName | string | 否 | Organization Name |
| data.invoiceDetail.data.projectCode | string | 否 | Project No. |
| data.invoiceDetail.data.projectId | string | 否 | Item ID |
| data.invoiceDetail.data.projectName | string | 否 | Project Name |
| data.invoiceDetail.data.qdbz | string | 否 | List Flag: 0 - Not Listed, 1 - Listed |
| data.invoiceDetail.data.sbbz | string | 否 | Failure Remarks |
| data.invoiceDetail.data.sgbz | string | 否 | Acquisition Flag: 2 = Agricultural Product Acquisition |
| data.invoiceDetail.data.skr | string | 否 | Payee |
| data.invoiceDetail.data.tschbz | string | 否 | Special Red Flush Flag; Currently No Corresponding Enumeration |
| data.invoiceDetail.data.tspz | string | 否 | Special Invoice Types; 0-General 2-Fuel VAT Special Invoice 8-Agricultural Products Sales 9-Agricultural Products Purchase 11-Tobacco Invoice 12-Motor Vehicle Invoice 14-Refined Oil Invoice DK-Agent Issued Invoice 16-Mineral Products Invoice E01-Refined Oil Invoice E03-Construction Service Invoice E04-Goods Transportation E05-Real Estate Sales E06-Real Estate Leasing Service Invoice E07-Agent Collection of Vehicle and Vessel Tax E09-Passenger Transportation E12-Self-produced Agricultural Products Sales E16-Agricultural Products Purchase E17-Photovoltaic Purchase E18-Cigarette Invoice |
| data.invoiceDetail.data.xsfDzdh | string | 否 | Seller Address & Telephone |
| data.invoiceDetail.data.xsfMc | string | 否 | Seller Name |
| data.invoiceDetail.data.xsfNsrsbh | string | 否 | Seller Taxpayer ID No. |
| data.invoiceDetail.data.xsfYhzh | string | 否 | Seller Bank Account No. |
| data.invoiceDetail.data.yfpDm | string | 否 | Original Invoice Code |
| data.invoiceDetail.data.yfpHm | string | 否 | Original Invoice Number |
| data.invoiceDetail.data.zdrq | string | 否 | Document Date  yyyy-MM-dd hh:mm:ss |
| data.invoiceDetail.data.zdybz | string | 否 | Custom Remark |
| data.invoiceDetail.data.zfbz | string | 否 | Void Flag: Y=Voided, N=Not Voided, I=Voiding in Progress, F=Void Failed |
| data.invoiceDetail.data.zsfs | string | 否 | Taxation Method 0: Normal Taxation  2: Differential Taxation |
| data.invoiceDetail.sharecode | string | 否 | Share Code |
| data.invoiceDetail.shareurl | string | 否 | Share Link |
| data.invoiceDetail.fileType | string | 否 | File Type: pdf is in pdf format, ofd is in ofd format |
| data.status | string | 否 | Pending Invoicing;Invoicing in Progress;Invoicing Failed;Invoicing Successful |
| data.statuscode | string | 否 | 1 - Pending Invoicing (Invoice Clerk Confirmation Required); 2 - Invoicing in Progress; 3 - Invoicing Failed; 4 - Invoicing Successful |
| message | string | 否 | Message |

## 返回示例

### 正确返回

```json

```

### 错误返回

```json
{
 "code": "1002",
 "message": "数据不存在"
}
```

## 错误码

| 错误码 | 错误信息 | 说明 |
| --- | --- | --- |
| 1002 | Data does not exist | Modify according to the instructions |


# 用友 YonBIP 销项接口详细对接指南

抓取时间：2026-06-17T08:07:25.791Z

## 适用范围

本文档整理开放平台“税务服务 / 销项发票管理（TAXOT）”当前返回的 62 个开放接口，面向本地系统对接开发、联调和排障使用。接口原始详情见同级 `apis/` 目录，每个接口包含请求字段、返回字段、请求示例、返回示例和错误码。

## 接入前提

- 已在用友开放平台完成应用创建、授权范围配置和调用方身份配置。
- 已按平台通用规则获取 `access_token`，调用时作为 Query 参数附加到网关 URL。
- 调用域名使用开放平台网关：`https://c2.yonyoucloud.com/iuap-api-gateway`。
- 生产联调前需要确认税号、开票点、票种、特殊票种、商品编码、税率、购买方信息等基础档案已在 YonBIP 税务服务侧配置完整。

## 统一调用规范

1. 拼接 URL：`https://c2.yonyoucloud.com/iuap-api-gateway{接口路径}?access_token={access_token}`。
2. 使用接口详情页标注的 HTTP 方法，多数接口为 `POST` + `application/json`。
3. 写操作必须记录本地业务单号、请求流水号、请求体、响应体、提交时间、重试次数和最终状态。
4. 不要只依据首次提交响应判断开票成功，必须使用状态查询接口或票夹查询接口确认终态。
5. 对状态类接口建议做有限次数轮询，失败后进入人工处理队列，避免无限重试。
6. 对废弃/历史接口，除非存量系统兼容需要，否则优先选择同目录中的新接口。

## 推荐落库字段

| 字段 | 说明 |
| --- | --- |
| source_bill_id | 本地来源单据主键或业务单号 |
| request_no | 本地生成的接口请求流水号，例如开票请求流水号 |
| api_id / api_path | 调用的开放平台接口标识和路径 |
| tax_no | 销售方税号 |
| invoice_type / special_type | 发票类型和特殊票种 |
| request_payload / response_payload | 原始请求和响应 JSON |
| platform_status | 平台返回状态 |
| invoice_code / invoice_no | 发票代码、发票号码 |
| fail_code / fail_message | 失败码和失败原因 |
| submitted_at / finished_at | 提交时间和终态时间 |

## 典型对接流程

### 先生成开票申请，再驱动开票

1. 使用开票申请单新增或批量新增接口写入待开票数据。
2. 按来源单号或请求流水号查询申请单处理结果。
3. 调用驱动开票、合并/拆分驱动开票接口。
4. 使用发票状态查询或批量状态查询轮询开票结果。
5. 开票成功后进入销项企业票夹，可查询版式文件、重发短信/邮件、入账或归档。

相关接口：

| 接口 | 方法 | 路径 |
| --- | --- | --- |
| [Invoice Application Document Addition (Original Uninvoiced Management New Document)](apis/invoice-application-document-addition-original-uninvoiced-management-new-document.md) | POST | /yonbip/tax/invoiceclient-web/api/invoice-will/save |
| [Invoice Application Document Addition - Batch (Original Uninvoiced Management Add Document (Batch))](apis/invoice-application-document-addition-batch-original-uninvoiced-management-add-document-batch.md) | POST | /yonbip/tax/output-tax/api/invoice-will/batch-save |
| [Invoice Application Document Query (Original Uninvoiced Query)](apis/invoice-application-document-query-original-uninvoiced-query.md) | POST | /yonbip/tax/invoiceclient-web/api/invoice-will/result |
| [Delete Invoice Application Document (Original Uninvoiced Deletion)](apis/delete-invoice-application-document-original-uninvoiced-deletion.md) | POST | /yonbip/tax/output-tax/api/invoice-will/delete |
| [Invoice Application Document Accounting Status Update (Previously Uninvoiced Accounting Status Update)](apis/invoice-application-document-accounting-status-update-previously-uninvoiced-accounting-status-update.md) | POST | /yonbip/tax/output-tax/api/invoice-will/updateAccountStatus |
| [Invoice Application Document drives invoicing (originally un-invoiced drives invoicing)](apis/invoice-application-document-drives-invoicing-originally-un-invoiced-drives-invoicing.md) | POST | /yonbip/tax/output-tax/api/invoice-will/invoicing |
| [Invoice Status Inquiry](apis/invoice-status-inquiry.md) | POST | /yonbip/tax/invoiceclient-web/api/invoiceApply/queryInvoiceStatusWithJson |
| [Batch Invoice Status Inquiry](apis/batch-invoice-status-inquiry.md) | POST | /yonbip/tax/output-tax/api/invoiceApply/batchQueryInvoiceStatus |
| [Invoice Management - Invoice Status Inquiry (Deprecated)](apis/invoice-management-invoice-status-inquiry-deprecated.md) | POST | /yonbip/tax/api/invoiceApply/V4/queryInvoiceStatus |
| [Sales Invoice Accounting](apis/sales-invoice-accounting.md) | POST | /yonbip/tax/output-tax/api/invoice-his/account |
| [Cancellation of sales invoice accounting](apis/cancellation-of-sales-invoice-accounting.md) | POST | /yonbip/tax/output-tax/api/invoice-his/unaccount |
| [Layout File Query](apis/layout-file-query.md) | POST | /yonbip/tax/output-tax/api/einvoice/getbsfile |
| [Sales Invoice Batch Query Interface](apis/sales-invoice-batch-query-interface.md) | POST | /yonbip/tax/invoiceclient-web/api/saleInvoiceCollection/query |
| [Sales Invoice Data Collection](apis/sales-invoice-data-collection.md) | POST | /yonbip/tax/api/gather/save-invoices |
| [Invoice Status Inquiry - Split (Original Invoice Status Inquiry)](apis/invoice-status-inquiry-split-original-invoice-status-inquiry.md) | POST | /yonbip/tax/api/invoiceApply/queryInvoiceStatusByysfpqqlsh |
| [Sales Invoice Attachment Information (Electronic Accounting File)](apis/sales-invoice-attachment-information-electronic-accounting-file.md) | POST | /yonbip/tax/output-tax/api/billpusher/query-file |

### 直接开具蓝票/红票

1. 蓝票优先使用 Issue Blue Invoice；需要自动拆分时使用 Open Blue Invoice - Automatic Split。
2. 全额红冲使用 Issue Red Invoice - Full Amount；部分红冲使用 Issue Red Invoice - Partial。
3. 开票请求提交后保存请求流水号，随后调用状态查询接口获取发票号码、代码、开票状态和失败原因。

相关接口：

| 接口 | 方法 | 路径 |
| --- | --- | --- |
| [Issue Blue Invoice](apis/issue-blue-invoice.md) | POST | /yonbip/tax/invoiceclient-web/api/invoiceApply/insertWithJsonArray |
| [Open Blue Invoice - Automatic Split](apis/open-blue-invoice-automatic-split.md) | POST | /yonbip/tax/invoiceclient-web/api/invoiceApply/insertWithSplitJson |
| [Issue Red Invoice - Full Amount (Original Invoice Red Flush Request)](apis/issue-red-invoice-full-amount-original-invoice-red-flush-request.md) | POST | /yonbip/tax/invoiceclient-web/api/invoiceApply/red-withjson |
| [Issue Red Invoice - Partial (Partial Red Flush of Original Invoice)](apis/issue-red-invoice-partial-partial-red-flush-of-original-invoice.md) | POST | /yonbip/tax/invoiceclient-web/api/invoiceApply/part-red-withjson |
| [Invoice Status Inquiry](apis/invoice-status-inquiry.md) | POST | /yonbip/tax/invoiceclient-web/api/invoiceApply/queryInvoiceStatusWithJson |
| [Batch Invoice Status Inquiry](apis/batch-invoice-status-inquiry.md) | POST | /yonbip/tax/output-tax/api/invoiceApply/batchQueryInvoiceStatus |
| [Original blue invoice (deprecated - can use [issue blue invoice])](apis/original-blue-invoice-deprecated-can-use-issue-blue-invoice.md) | POST | /yonbip/tax/invoiceclient-web/api/invoiceApply/insertWithArray |
| [Issue Red Invoice - Full Amount (Original Invoice Red Cancellation Request) (Deprecated)](apis/issue-red-invoice-full-amount-original-invoice-red-cancellation-request-deprecated.md) | POST | /yonbip/tax/invoiceclient-web/api/invoiceApply/red |
| [Issue Red Invoice - Partial (Red Invoice for Original Invoice Portion) (Discarded)](apis/issue-red-invoice-partial-red-invoice-for-original-invoice-portion-discarded.md) | POST | /yonbip/tax/invoiceclient-web/api/invoiceApply/part-red |
| [Invoice Management - Invoice Status Inquiry (Deprecated)](apis/invoice-management-invoice-status-inquiry-deprecated.md) | POST | /yonbip/tax/api/invoiceApply/V4/queryInvoiceStatus |
| [Original Invoice Status Query (Deprecated)](apis/original-invoice-status-query-deprecated.md) | POST | /yonbip/tax/invoiceclient-web/api/invoiceApply/queryInvoiceStatus |
| [Invoice Status Inquiry - Split (Original Invoice Status Inquiry)](apis/invoice-status-inquiry-split-original-invoice-status-inquiry.md) | POST | /yonbip/tax/api/invoiceApply/queryInvoiceStatusByysfpqqlsh |

### 红字信息确认单

1. 新增或修改红字确认单。
2. 上传、新增并上传、确认或撤销确认单。
3. 按发起方/接收方查询并更新确认单状态。
4. 使用红字信息表编号查询接口同步信息表号。

相关接口：

| 接口 | 方法 | 路径 |
| --- | --- | --- |
| [Credit Confirmation Document List Inquiry](apis/credit-confirmation-document-list-inquiry.md) | POST | /yonbip/tax/yonbip-fi-taxot/api/redinfo/query |
| [Add or Modify Credit Confirmation Document](apis/add-or-modify-credit-confirmation-document.md) | POST | /yonbip/tax/api/etax/redinfo-apply/save |
| [Upload Credit Confirmation Document](apis/upload-credit-confirmation-document.md) | POST | /yonbip/tax/api/etax/redinfo-apply/upload |
| [Newly added and uploaded Credit Confirmation Document](apis/newly-added-and-uploaded-credit-confirmation-document.md) | POST | /yonbip/tax/api/etax/redinfo-apply/save-upload |
| [Credit Confirmation Document Confirmation](apis/credit-confirmation-document-confirmation.md) | POST | /yonbip/tax/api/etax/redinfo-apply/confirm |
| [Cancellation of Credit Confirmation Document](apis/cancellation-of-credit-confirmation-document.md) | POST | /yonbip/tax/api/etax/redinfo-apply/cancel |
| [Red Character Information Form Number Inquiry](apis/red-character-information-form-number-inquiry.md) | GET | /yonbip/tax/invoiceclient-web/api/redinfo-apply/queryRedInfoApply/{reqBillNo} |
| [Application for Red Letter Information Form (Purchaser and Seller)](apis/application-for-red-letter-information-form-purchaser-and-seller.md) | POST | /yonbip/tax/invoiceclient-web/api/redinfo-apply/insertWithRedApply |

### 票夹后处理

1. 使用销项发票批量查询接口获取已开票数据。
2. 按业务需要查询版式文件、二维码交付链接，或重发短信/邮件。
3. 入账、取消入账、更新核算主体和项目信息。
4. 需要归档时使用电子会计档案相关接口查询推送状态、测试数据源、查询附件。

相关接口：

| 接口 | 方法 | 路径 |
| --- | --- | --- |
| [Invoice Application Document Accounting Status Update (Previously Uninvoiced Accounting Status Update)](apis/invoice-application-document-accounting-status-update-previously-uninvoiced-accounting-status-update.md) | POST | /yonbip/tax/output-tax/api/invoice-will/updateAccountStatus |
| [Sales Invoice Accounting](apis/sales-invoice-accounting.md) | POST | /yonbip/tax/output-tax/api/invoice-his/account |
| [Cancellation of sales invoice accounting](apis/cancellation-of-sales-invoice-accounting.md) | POST | /yonbip/tax/output-tax/api/invoice-his/unaccount |
| [Layout File Query](apis/layout-file-query.md) | POST | /yonbip/tax/output-tax/api/einvoice/getbsfile |
| [Resend message](apis/resend-message.md) | POST | /yonbip/tax/output-tax/api/invoiceApply/callBackBySms |
| [Resend email](apis/resend-email.md) | POST | /yonbip/tax/invoiceclient-web/api/invoiceApply/callBackByEmail |
| [QR Code Delivery Inquiry](apis/qr-code-delivery-inquiry.md) | POST | /yonbip/tax/yonbip-fi-taxot/api/invoice-his/qrcode |
| [Sales Invoice Batch Query Interface](apis/sales-invoice-batch-query-interface.md) | POST | /yonbip/tax/invoiceclient-web/api/saleInvoiceCollection/query |
| [Update Accounting Entity and Project Information](apis/update-accounting-entity-and-project-information.md) | POST | /yonbip/tax/output-tax/api/invoice-his/updateProjectAndOrgCode |
| [Sales Invoice Data Collection](apis/sales-invoice-data-collection.md) | POST | /yonbip/tax/api/gather/save-invoices |
| [Sales Inquiry and Push Archiving Management (Electronic Accounting File)](apis/sales-inquiry-and-push-archiving-management-electronic-accounting-file.md) | POST | /yonbip/tax/output-tax/billpusher/query-billspush |
| [Sales File Test Data Source Connection (Electronic Accounting File)](apis/sales-file-test-data-source-connection-electronic-accounting-file.md) | POST | /yonbip/tax/output-tax/billpusher/healthy-test |
| [Sales Invoice Attachment Information (Electronic Accounting File)](apis/sales-invoice-attachment-information-electronic-accounting-file.md) | POST | /yonbip/tax/output-tax/api/billpusher/query-file |

## 接口分组明细

### 红字申请表（Red Letter Application Form）

| 接口 | apiId | 方法 | 路径 | 请求字段 | 返回字段 | 更新时间 |
| --- | --- | --- | --- | --- | --- | --- |
| [Credit Confirmation Document List Inquiry](apis/credit-confirmation-document-list-inquiry.md) | 2120887415400300549 | POST | /yonbip/tax/yonbip-fi-taxot/api/redinfo/query | 17 | 40 | 2025-07-01 17:06:18.000 |
| [Add or Modify Credit Confirmation Document](apis/add-or-modify-credit-confirmation-document.md) | 1758106165141045257 | POST | /yonbip/tax/api/etax/redinfo-apply/save | 33 | 46 | 2025-07-01 17:06:15.000 |
| [Upload Credit Confirmation Document](apis/upload-credit-confirmation-document.md) | 1758490298437599233 | POST | /yonbip/tax/api/etax/redinfo-apply/upload | 1 | 46 | 2025-08-21 13:44:44.000 |
| [Newly added and uploaded Credit Confirmation Document](apis/newly-added-and-uploaded-credit-confirmation-document.md) | 1758485840261545985 | POST | /yonbip/tax/api/etax/redinfo-apply/save-upload | 1 | 47 | 2025-07-01 17:06:08.000 |
| [Credit Confirmation Document Confirmation](apis/credit-confirmation-document-confirmation.md) | 1758093022548459526 | POST | /yonbip/tax/api/etax/redinfo-apply/confirm | 5 | 2 | 2025-12-09 20:18:01.000 |
| [Cancellation of Credit Confirmation Document](apis/cancellation-of-credit-confirmation-document.md) | 2207746282665541639 | POST | /yonbip/tax/api/etax/redinfo-apply/cancel | 1 | 2 | 2025-07-01 17:06:02.000 |
| [Initiator query and update](apis/initiator-query-and-update.md) | 1758487506708856832 | POST | /yonbip/tax/api/etax/redinfo-apply/sendF-refresh | 1 | 2 | 2025-07-01 17:05:55.000 |
| [Accession party inquiry and update](apis/accession-party-inquiry-and-update.md) | 1758098992553000964 | POST | /yonbip/tax/api/etax/redinfo-apply/receiveF-refresh | 4 | 2 | 2025-07-01 17:05:59.000 |
| [Red Character Information Form Number Inquiry](apis/red-character-information-form-number-inquiry.md) | 9299d3d37cab49729f1e8ba9bd5ba676 | GET | /yonbip/tax/invoiceclient-web/api/redinfo-apply/queryRedInfoApply/{reqBillNo} | 1 | 90 | 2025-07-01 17:06:26.000 |
| [Application for Red Letter Information Form (Purchaser and Seller)](apis/application-for-red-letter-information-form-purchaser-and-seller.md) | 4220660111b341678bfc930c21cd1540 | POST | /yonbip/tax/invoiceclient-web/api/redinfo-apply/insertWithRedApply | 28 | 2 | 2025-07-01 17:05:45.000 |
| [Verify Tax Number Channel Type](apis/verify-tax-number-channel-type.md) | 1758061145315344393 | GET | /yonbip/tax/api/etax/redinfo-apply/check | 3 | 2 | 2025-07-01 17:05:52.000 |

### 出口报关单（Export declaration form）

| 接口 | apiId | 方法 | 路径 | 请求字段 | 返回字段 | 更新时间 |
| --- | --- | --- | --- | --- | --- | --- |
| [Export Declaration Form Inquiry](apis/export-declaration-form-inquiry.md) | 2086162750826872832 | POST | /yonbip/tax/api/export-custorm-declare/query-list | 10 | 54 | 2025-06-20 19:18:27.000 |

### 开票单据池（Invoicing Doc Pool）

| 接口 | apiId | 方法 | 路径 | 请求字段 | 返回字段 | 更新时间 |
| --- | --- | --- | --- | --- | --- | --- |
| [Pending Invoicing Document Pool Query](apis/pending-invoicing-document-pool-query.md) | 1821609593067798537 | POST | /yonbip/tax/yonbip-fi-taxotypd/api/tax-bill-pool/query | 1 | 100 | 2025-07-01 17:07:10.000 |
| [Newly Added to the Invoicing Document Pool](apis/newly-added-to-the-invoicing-document-pool.md) | 1821125593215270912 | POST | /yonbip/tax/yonbip-fi-taxotypd/api/tax-bill-pool/add | 138 | 2 | 2025-07-01 17:07:13.000 |

### 开票申请单（Invoice Request）

| 接口 | apiId | 方法 | 路径 | 请求字段 | 返回字段 | 更新时间 |
| --- | --- | --- | --- | --- | --- | --- |
| [Invoice Application Document Addition (Original Uninvoiced Management New Document)](apis/invoice-application-document-addition-original-uninvoiced-management-new-document.md) | b19dc1e144e64abea75c9adb4ead6362 | POST | /yonbip/tax/invoiceclient-web/api/invoice-will/save | 210 | 2 | 2026-06-10 18:25:29.000 |
| [Invoice Application Document Addition - Batch (Original Uninvoiced Management Add Document (Batch))](apis/invoice-application-document-addition-batch-original-uninvoiced-management-add-document-batch.md) | 1847870792639971334 | POST | /yonbip/tax/output-tax/api/invoice-will/batch-save | 193 | 2 | 2026-06-10 18:35:46.000 |
| [Invoice Application Document Query (Original Uninvoiced Query)](apis/invoice-application-document-query-original-uninvoiced-query.md) | 90dbf3a38c824d7c915a70c8dca96ad8 | POST | /yonbip/tax/invoiceclient-web/api/invoice-will/result | 6 | 114 | 2026-04-14 15:52:52.000 |
| [Delete Invoice Application Document (Original Uninvoiced Deletion)](apis/delete-invoice-application-document-original-uninvoiced-deletion.md) | 1841870457067274242 | POST | /yonbip/tax/output-tax/api/invoice-will/delete | 2 | 2 | 2025-07-01 17:07:01.000 |
| [Invoice Application Document Accounting Status Update (Previously Uninvoiced Accounting Status Update)](apis/invoice-application-document-accounting-status-update-previously-uninvoiced-accounting-status-update.md) | 1847864144030597120 | POST | /yonbip/tax/output-tax/api/invoice-will/updateAccountStatus | 7 | 2 | 2025-07-01 17:06:59.000 |
| [Invoice Application Document drives invoicing (originally un-invoiced drives invoicing)](apis/invoice-application-document-drives-invoicing-originally-un-invoiced-drives-invoicing.md) | 1887836330939908104 | POST | /yonbip/tax/output-tax/api/invoice-will/invoicing | 1 | 2 | 2025-07-01 17:06:56.000 |
| [External application drives invoice merging or splitting.](apis/external-application-drives-invoice-merging-or-splitting.md) | 2209779915343527936 | POST | /yonbip/tax/output-tax/api/invoice-will/mergeOrSplit/invoicing | 47 | 2 | 2025-08-14 15:16:32.481 |
| [Uninvoiced Record Change Query (Deprecated)](apis/uninvoiced-record-change-query-deprecated.md) | c839ea68def44e12a03997a62c688c84 | POST | /yonbip/tax/invoiceclient-web/api/invoice-will/changes | 5 | 7 | 2025-07-01 17:06:48.000 |
| [Pending invoice details deleted (abandoned)](apis/pending-invoice-details-deleted-abandoned.md) | 1758502401655439361 | POST | /yonbip/tax/api/invoice-will/delete | 2 | 2 | 2025-07-01 17:07:04.000 |

### 开票（Invoicing）

| 接口 | apiId | 方法 | 路径 | 请求字段 | 返回字段 | 更新时间 |
| --- | --- | --- | --- | --- | --- | --- |
| [Issue Blue Invoice](apis/issue-blue-invoice.md) | 2150785412886953993 | POST | /yonbip/tax/invoiceclient-web/api/invoiceApply/insertWithJsonArray | 237 | 3 | 2026-06-10 18:12:29.000 |
| [Open Blue Invoice - Automatic Split](apis/open-blue-invoice-automatic-split.md) | 2157981055053201413 | POST | /yonbip/tax/invoiceclient-web/api/invoiceApply/insertWithSplitJson | 110 | 3 | 2026-05-19 19:20:29.000 |
| [Issue Red Invoice - Full Amount (Original Invoice Red Flush Request)](apis/issue-red-invoice-full-amount-original-invoice-red-flush-request.md) | 2158112146045009924 | POST | /yonbip/tax/invoiceclient-web/api/invoiceApply/red-withjson | 52 | 6 | 2025-09-02 15:23:50.000 |
| [Issue Red Invoice - Partial (Partial Red Flush of Original Invoice)](apis/issue-red-invoice-partial-partial-red-flush-of-original-invoice.md) | 2150786031362244612 | POST | /yonbip/tax/invoiceclient-web/api/invoiceApply/part-red-withjson | 52 | 6 | 2025-09-02 15:22:52.000 |
| [Scan to issue invoice](apis/scan-to-issue-invoice.md) | 59cdcff503064f818bdb722812e8debb | POST | /yonbip/tax/invoiceclient-web/api/invoiceApply/insertForQRInvoice | 50 | 5 | 2025-07-01 17:05:45.000 |
| [Scan to issue invoice - automatic split](apis/scan-to-issue-invoice-automatic-split.md) | 1758523069038067712 | POST | /yonbip/tax/api/invoiceApply/qr-with-split | 1 | 2 | 2025-07-01 17:07:06.000 |
| [Invoice Cancellation](apis/invoice-cancellation.md) | 1969592416389824521 | POST | /yonbip/tax/invoiceclient-web/api/invoiceApply/invalidWithJson | 2 | 2 | 2025-07-01 17:06:26.000 |
| [Invoicing Request Returned (Original Invoicing Application Deleted)](apis/invoicing-request-returned-original-invoicing-application-deleted.md) | 8f6eb69d808b46c3aee01da484bdd48e | POST | /yonbip/tax/invoiceclient-web/api/invoiceApply/del | 1 | 2 | 2025-07-01 17:05:52.000 |
| [Invoice request deletion (original request for failed invoice deletion)](apis/invoice-request-deletion-original-request-for-failed-invoice-deletion.md) | 60325355d2d7472d963f9dc20e4a88e9 | POST | /yonbip/tax/invoiceclient-web/api/invoiceApply/deleteInvoiceFailData | 1 | 2 | 2025-07-01 17:06:39.000 |
| [Invoicing Request Review (Original Invoicing Application Review Approved)](apis/invoicing-request-review-original-invoicing-application-review-approved.md) | 79d7cd074bdb4cf881c985083e0fa2f4 | POST | /yonbip/tax/invoiceclient-web/api/invoiceApply/issue | 1 | 2 | 2025-07-01 17:06:44.000 |
| [Invoice Status Inquiry](apis/invoice-status-inquiry.md) | 1969588327580958724 | POST | /yonbip/tax/invoiceclient-web/api/invoiceApply/queryInvoiceStatusWithJson | 1 | 94 | 2026-05-19 20:21:51.000 |
| [Batch Invoice Status Inquiry](apis/batch-invoice-status-inquiry.md) | 1874302330643415041 | POST | /yonbip/tax/output-tax/api/invoiceApply/batchQueryInvoiceStatus | 1 | 10 | 2025-07-01 17:07:33.000 |
| [Re-generate layout (originally redrawn layout)](apis/re-generate-layout-originally-redrawn-layout.md) | 1758510484783890435 | POST | /yonbip/tax/api/invoiceApply/bsRestartCreate | 2 | 2 | 2025-07-01 17:07:50.000 |
| [Smart Coding](apis/smart-coding.md) | 2096344486209650694 | GET | /yonbip/tax/api/etax/aiMatchSpInfo | 1 | 19 | 2025-07-01 17:06:49.000 |
| [Invoice Number Code Preview](apis/invoice-number-code-preview.md) | 939cf9f08b4a482ab65c0a29d949a7f8 | POST | /yonbip/tax/invoiceclient-web/api/invoiceApply/preview/hmdm | 3 | 5 | 2025-07-01 17:06:54.000 |
| [Digital Circuit Query Link](apis/digital-circuit-query-link.md) | 1758495272009728004 | GET | /yonbip/tax/api/etaxAuth/zp/lianci | 3 | 2 | 2025-07-01 17:06:58.000 |
| [Query for motor vehicles eligible for invoicing](apis/query-for-motor-vehicles-eligible-for-invoicing.md) | 2172812685121421312 | POST | /yonbip/tax/api/etax/query/vehicle/list/avalible | 5 | 6 | 2025-07-01 17:07:02.000 |
| [Original blue invoice (deprecated - can use [issue blue invoice])](apis/original-blue-invoice-deprecated-can-use-issue-blue-invoice.md) | b04a960f39e74f92985bf0fcdf6ad4c9 | POST | /yonbip/tax/invoiceclient-web/api/invoiceApply/insertWithArray | 7 | 2 | 2025-07-01 17:06:22.000 |
| [Original Blue Invoice - Automatic Split (Deprecated - Can use [Blue Invoice - Automatic Split])](apis/original-blue-invoice-automatic-split-deprecated-can-use-blue-invoice-automatic-split.md) | 6eece6fec3334d2e91e6d1448d07709b | POST | /yonbip/tax/invoiceclient-web/api/invoiceApply/insertWithSplit | 7 | 48 | 2025-07-01 17:06:18.000 |
| [Issue Red Invoice - Full Amount (Original Invoice Red Cancellation Request) (Deprecated)](apis/issue-red-invoice-full-amount-original-invoice-red-cancellation-request-deprecated.md) | adaa38b17fa84943becf9fe702bce674 | POST | /yonbip/tax/invoiceclient-web/api/invoiceApply/red | 7 | 2 | 2025-07-01 17:07:10.000 |
| [Issue Red Invoice - Partial (Red Invoice for Original Invoice Portion) (Discarded)](apis/issue-red-invoice-partial-red-invoice-for-original-invoice-portion-discarded.md) | df527e8644644abea482a4e9458e6cb4 | POST | /yonbip/tax/invoiceclient-web/api/invoiceApply/part-red | 7 | 2 | 2025-07-01 17:07:14.000 |
| [Invoice Management - Invoice Status Inquiry (Deprecated)](apis/invoice-management-invoice-status-inquiry-deprecated.md) | 1758508294350569479 | POST | /yonbip/tax/api/invoiceApply/V4/queryInvoiceStatus | 1 | 8 | 2025-07-01 17:07:24.000 |
| [Original Invoice Status Query (Deprecated)](apis/original-invoice-status-query-deprecated.md) | 1cc145c156664c0abac9c26faf0daccd | POST | /yonbip/tax/invoiceclient-web/api/invoiceApply/queryInvoiceStatus | 1 | 94 | 2025-09-01 18:03:36.000 |
| [Paper invoice voided (Discarded - can use [Invoice Void])](apis/paper-invoice-voided-discarded-can-use-invoice-void.md) | 8a6e4074fa984259bed6ee77118fda45 | POST | /yonbip/tax/invoiceclient-web/api/invoiceApply/invalid | 1 | 2 | 2025-07-01 17:06:13.000 |

### 销项企业票夹（Outbound Enterprise Invoice Folder）

| 接口 | apiId | 方法 | 路径 | 请求字段 | 返回字段 | 更新时间 |
| --- | --- | --- | --- | --- | --- | --- |
| [Sales Invoice Accounting](apis/sales-invoice-accounting.md) | 8b104e9ba3e5477498c9b077b48da51a | POST | /yonbip/tax/output-tax/api/invoice-his/account | 10 | 2 | 2025-07-01 17:07:39.000 |
| [Cancellation of sales invoice accounting](apis/cancellation-of-sales-invoice-accounting.md) | c374449c88da4d84842ea10d9c6ef452 | POST | /yonbip/tax/output-tax/api/invoice-his/unaccount | 5 | 2 | 2025-07-01 17:07:42.000 |
| [Invoice Printing](apis/invoice-printing.md) | db488a0ea95e45908918a4e60c859c45 | POST | /yonbip/tax/invoiceclient-web/api/invoice-his/print | 3 | 2 | 2025-07-01 17:07:45.000 |
| [Layout File Query](apis/layout-file-query.md) | 1847888797142876169 | POST | /yonbip/tax/output-tax/api/einvoice/getbsfile | 10 | 11 | 2025-10-13 14:23:52.000 |
| [Resend message](apis/resend-message.md) | 1881915572487716867 | POST | /yonbip/tax/output-tax/api/invoiceApply/callBackBySms | 3 | 2 | 2025-07-01 17:08:01.000 |
| [Resend email](apis/resend-email.md) | d03b63fcdd4e4e0fbbec2da82596f20c | POST | /yonbip/tax/invoiceclient-web/api/invoiceApply/callBackByEmail | 2 | 2 | 2025-07-01 17:07:57.000 |
| [QR Code Delivery Inquiry](apis/qr-code-delivery-inquiry.md) | 2117764853893955589 | POST | /yonbip/tax/yonbip-fi-taxot/api/invoice-his/qrcode | 4 | 3 | 2025-07-01 17:08:04.000 |
| [Sales Invoice Batch Query Interface](apis/sales-invoice-batch-query-interface.md) | 1860933016558764033 | POST | /yonbip/tax/invoiceclient-web/api/saleInvoiceCollection/query | 23 | 151 | 2025-07-01 17:05:07.000 |
| [Update Accounting Entity and Project Information](apis/update-accounting-entity-and-project-information.md) | 2165261316589617152 | POST | /yonbip/tax/output-tax/api/invoice-his/updateProjectAndOrgCode | 8 | 2 | 2025-07-01 17:08:07.000 |
| [Sales Invoice Data Collection](apis/sales-invoice-data-collection.md) | 2126167596661211139 | POST | /yonbip/tax/api/gather/save-invoices | 176 | 2 | 2026-06-08 17:34:39.000 |
| [Invoice Status Inquiry - Split (Original Invoice Status Inquiry)](apis/invoice-status-inquiry-split-original-invoice-status-inquiry.md) | 1758524924463939586 | POST | /yonbip/tax/api/invoiceApply/queryInvoiceStatusByysfpqqlsh | 1 | 8 | 2025-07-01 17:07:30.000 |
| [Sales Inquiry and Push Archiving Management (Electronic Accounting File)](apis/sales-inquiry-and-push-archiving-management-electronic-accounting-file.md) | 92e508816c6c40af8eaaca1703393588 | POST | /yonbip/tax/output-tax/billpusher/query-billspush | 14 | 2 | 2025-07-01 17:08:19.000 |
| [Sales File Test Data Source Connection (Electronic Accounting File)](apis/sales-file-test-data-source-connection-electronic-accounting-file.md) | c1fe4c666f1549bfbff53457d8125fac | POST | /yonbip/tax/output-tax/billpusher/healthy-test | 0 | 3 | 2025-07-01 17:08:15.000 |
| [Sales Invoice Attachment Information (Electronic Accounting File)](apis/sales-invoice-attachment-information-electronic-accounting-file.md) | 1853619030846865408 | POST | /yonbip/tax/output-tax/api/billpusher/query-file | 4 | 8 | 2025-07-01 17:08:12.000 |
| [Get authCode based on tax number](apis/get-authcode-based-on-tax-number.md) | 1758493176065687554 | GET | /yonbip/tax/api/etaxAuth/authCode | 1 | 1 | 2025-10-11 16:38:30.000 |

## 联调检查清单

| 检查项 | 要点 |
| --- | --- |
| 鉴权 | `access_token` 是否有效，是否传在 Query 参数 |
| URL | 是否使用 `/iuap-api-gateway` 网关前缀加接口路径 |
| 幂等 | 同一业务单是否复用同一个业务唯一号/请求流水号 |
| 必填字段 | 详情页 Body 参数中“必填=是”的字段是否全部赋值 |
| 票种 | `fplx`、`tspz`、特殊票种扩展字段是否匹配业务场景 |
| 金额税额 | 含税/不含税金额、税率、税额、小数精度是否符合平台要求 |
| 状态同步 | 提交后是否调用状态查询接口，是否保存失败原因 |
| 交付 | 需要短信、邮箱、二维码或版式文件时，是否调用对应票夹接口 |
| 异常处理 | 超时、重复提交、平台业务失败是否进入可追踪的人工处理流程 |

## 本地文件说明

| 文件 | 说明 |
| --- | --- |
| `README.md` | 目录总览、分类统计、全部接口清单 |
| `INTEGRATION-GUIDE.md` | 面向开发对接的详细流程和接口选择指南 |
| `apis/*.md` | 每个接口的完整字段、示例、错误码 |
| `source.json` | 目录接口原始返回，便于排查接口数量差异 |

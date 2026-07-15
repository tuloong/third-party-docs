# 用友 YonBIP 税务服务 - 销项接口本地对接文档

来源页面：

- https://open.yonyoucloud.com/#/doc-center/docDes/api?activeId=TAXOT&activeNodeType=3&isOrigin=0&selectApiTab=open&from=&iframe=

抓取时间：2026-06-17T08:07:25.788Z

## 范围说明

- 当前开放平台目录接口返回 62 个销项接口。
- 用户截图标注为“销项一共 63 个接口”，但本次通过页面渲染 DOM 和目录接口 `/openPortal/api/groupApiByApiClassify` 校验，当前返回为 62 个接口。
- 当前详情接口返回的 API 名称、字段说明多为英文；中文类目名来自详情接口的 `apiClassifyName` 字段。
- 本目录下 `apis/` 每个接口一个 Markdown 详情页，字段表与示例来自开放平台详情接口 `/openPortal/api/getByVersionForTest/{apiId}/running`。

## 通用调用约定

- 网关地址前缀：`https://c2.yonyoucloud.com/iuap-api-gateway`
- 鉴权参数：`access_token` 作为 Query 参数传递。
- 请求体：多数接口为 `application/json`，以各接口详情页为准。

## 分类统计

| 分类 | 接口数 |
| --- | --- |
| Red Letter Application Form | 11 |
| Export declaration form | 1 |
| Invoicing Doc Pool | 2 |
| Invoice Request | 9 |
| Invoicing | 24 |
| Outbound Enterprise Invoice Folder | 15 |

## 接口清单

| 分类 | API 名称 | apiId | 方法 | 路径 | 历史/废弃 |
| --- | --- | --- | --- | --- | --- |
| Red Letter Application Form | [Credit Confirmation Document List Inquiry](apis/credit-confirmation-document-list-inquiry.md) | 2120887415400300549 | POST | /yonbip/tax/yonbip-fi-taxot/api/redinfo/query | 否 |
| Red Letter Application Form | [Add or Modify Credit Confirmation Document](apis/add-or-modify-credit-confirmation-document.md) | 1758106165141045257 | POST | /yonbip/tax/api/etax/redinfo-apply/save | 否 |
| Red Letter Application Form | [Upload Credit Confirmation Document](apis/upload-credit-confirmation-document.md) | 1758490298437599233 | POST | /yonbip/tax/api/etax/redinfo-apply/upload | 否 |
| Red Letter Application Form | [Newly added and uploaded Credit Confirmation Document](apis/newly-added-and-uploaded-credit-confirmation-document.md) | 1758485840261545985 | POST | /yonbip/tax/api/etax/redinfo-apply/save-upload | 否 |
| Red Letter Application Form | [Credit Confirmation Document Confirmation](apis/credit-confirmation-document-confirmation.md) | 1758093022548459526 | POST | /yonbip/tax/api/etax/redinfo-apply/confirm | 否 |
| Red Letter Application Form | [Cancellation of Credit Confirmation Document](apis/cancellation-of-credit-confirmation-document.md) | 2207746282665541639 | POST | /yonbip/tax/api/etax/redinfo-apply/cancel | 否 |
| Red Letter Application Form | [Initiator query and update](apis/initiator-query-and-update.md) | 1758487506708856832 | POST | /yonbip/tax/api/etax/redinfo-apply/sendF-refresh | 否 |
| Red Letter Application Form | [Accession party inquiry and update](apis/accession-party-inquiry-and-update.md) | 1758098992553000964 | POST | /yonbip/tax/api/etax/redinfo-apply/receiveF-refresh | 否 |
| Red Letter Application Form | [Red Character Information Form Number Inquiry](apis/red-character-information-form-number-inquiry.md) | 9299d3d37cab49729f1e8ba9bd5ba676 | GET | /yonbip/tax/invoiceclient-web/api/redinfo-apply/queryRedInfoApply/{reqBillNo} | 否 |
| Red Letter Application Form | [Application for Red Letter Information Form (Purchaser and Seller)](apis/application-for-red-letter-information-form-purchaser-and-seller.md) | 4220660111b341678bfc930c21cd1540 | POST | /yonbip/tax/invoiceclient-web/api/redinfo-apply/insertWithRedApply | 否 |
| Red Letter Application Form | [Verify Tax Number Channel Type](apis/verify-tax-number-channel-type.md) | 1758061145315344393 | GET | /yonbip/tax/api/etax/redinfo-apply/check | 否 |
| Export declaration form | [Export Declaration Form Inquiry](apis/export-declaration-form-inquiry.md) | 2086162750826872832 | POST | /yonbip/tax/api/export-custorm-declare/query-list | 否 |
| Invoicing Doc Pool | [Pending Invoicing Document Pool Query](apis/pending-invoicing-document-pool-query.md) | 1821609593067798537 | POST | /yonbip/tax/yonbip-fi-taxotypd/api/tax-bill-pool/query | 否 |
| Invoicing Doc Pool | [Newly Added to the Invoicing Document Pool](apis/newly-added-to-the-invoicing-document-pool.md) | 1821125593215270912 | POST | /yonbip/tax/yonbip-fi-taxotypd/api/tax-bill-pool/add | 否 |
| Invoice Request | [Invoice Application Document Addition (Original Uninvoiced Management New Document)](apis/invoice-application-document-addition-original-uninvoiced-management-new-document.md) | b19dc1e144e64abea75c9adb4ead6362 | POST | /yonbip/tax/invoiceclient-web/api/invoice-will/save | 否 |
| Invoice Request | [Invoice Application Document Addition - Batch (Original Uninvoiced Management Add Document (Batch))](apis/invoice-application-document-addition-batch-original-uninvoiced-management-add-document-batch.md) | 1847870792639971334 | POST | /yonbip/tax/output-tax/api/invoice-will/batch-save | 否 |
| Invoice Request | [Invoice Application Document Query (Original Uninvoiced Query)](apis/invoice-application-document-query-original-uninvoiced-query.md) | 90dbf3a38c824d7c915a70c8dca96ad8 | POST | /yonbip/tax/invoiceclient-web/api/invoice-will/result | 否 |
| Invoice Request | [Delete Invoice Application Document (Original Uninvoiced Deletion)](apis/delete-invoice-application-document-original-uninvoiced-deletion.md) | 1841870457067274242 | POST | /yonbip/tax/output-tax/api/invoice-will/delete | 否 |
| Invoice Request | [Invoice Application Document Accounting Status Update (Previously Uninvoiced Accounting Status Update)](apis/invoice-application-document-accounting-status-update-previously-uninvoiced-accounting-status-update.md) | 1847864144030597120 | POST | /yonbip/tax/output-tax/api/invoice-will/updateAccountStatus | 否 |
| Invoice Request | [Invoice Application Document drives invoicing (originally un-invoiced drives invoicing)](apis/invoice-application-document-drives-invoicing-originally-un-invoiced-drives-invoicing.md) | 1887836330939908104 | POST | /yonbip/tax/output-tax/api/invoice-will/invoicing | 否 |
| Invoice Request | [External application drives invoice merging or splitting.](apis/external-application-drives-invoice-merging-or-splitting.md) | 2209779915343527936 | POST | /yonbip/tax/output-tax/api/invoice-will/mergeOrSplit/invoicing | 否 |
| Invoice Request | [Uninvoiced Record Change Query (Deprecated)](apis/uninvoiced-record-change-query-deprecated.md) | c839ea68def44e12a03997a62c688c84 | POST | /yonbip/tax/invoiceclient-web/api/invoice-will/changes | 否 |
| Invoice Request | [Pending invoice details deleted (abandoned)](apis/pending-invoice-details-deleted-abandoned.md) | 1758502401655439361 | POST | /yonbip/tax/api/invoice-will/delete | 否 |
| Invoicing | [Issue Blue Invoice](apis/issue-blue-invoice.md) | 2150785412886953993 | POST | /yonbip/tax/invoiceclient-web/api/invoiceApply/insertWithJsonArray | 否 |
| Invoicing | [Open Blue Invoice - Automatic Split](apis/open-blue-invoice-automatic-split.md) | 2157981055053201413 | POST | /yonbip/tax/invoiceclient-web/api/invoiceApply/insertWithSplitJson | 否 |
| Invoicing | [Issue Red Invoice - Full Amount (Original Invoice Red Flush Request)](apis/issue-red-invoice-full-amount-original-invoice-red-flush-request.md) | 2158112146045009924 | POST | /yonbip/tax/invoiceclient-web/api/invoiceApply/red-withjson | 否 |
| Invoicing | [Issue Red Invoice - Partial (Partial Red Flush of Original Invoice)](apis/issue-red-invoice-partial-partial-red-flush-of-original-invoice.md) | 2150786031362244612 | POST | /yonbip/tax/invoiceclient-web/api/invoiceApply/part-red-withjson | 否 |
| Invoicing | [Scan to issue invoice](apis/scan-to-issue-invoice.md) | 59cdcff503064f818bdb722812e8debb | POST | /yonbip/tax/invoiceclient-web/api/invoiceApply/insertForQRInvoice | 否 |
| Invoicing | [Scan to issue invoice - automatic split](apis/scan-to-issue-invoice-automatic-split.md) | 1758523069038067712 | POST | /yonbip/tax/api/invoiceApply/qr-with-split | 否 |
| Invoicing | [Invoice Cancellation](apis/invoice-cancellation.md) | 1969592416389824521 | POST | /yonbip/tax/invoiceclient-web/api/invoiceApply/invalidWithJson | 否 |
| Invoicing | [Invoicing Request Returned (Original Invoicing Application Deleted)](apis/invoicing-request-returned-original-invoicing-application-deleted.md) | 8f6eb69d808b46c3aee01da484bdd48e | POST | /yonbip/tax/invoiceclient-web/api/invoiceApply/del | 否 |
| Invoicing | [Invoice request deletion (original request for failed invoice deletion)](apis/invoice-request-deletion-original-request-for-failed-invoice-deletion.md) | 60325355d2d7472d963f9dc20e4a88e9 | POST | /yonbip/tax/invoiceclient-web/api/invoiceApply/deleteInvoiceFailData | 否 |
| Invoicing | [Invoicing Request Review (Original Invoicing Application Review Approved)](apis/invoicing-request-review-original-invoicing-application-review-approved.md) | 79d7cd074bdb4cf881c985083e0fa2f4 | POST | /yonbip/tax/invoiceclient-web/api/invoiceApply/issue | 否 |
| Invoicing | [Invoice Status Inquiry](apis/invoice-status-inquiry.md) | 1969588327580958724 | POST | /yonbip/tax/invoiceclient-web/api/invoiceApply/queryInvoiceStatusWithJson | 否 |
| Invoicing | [Batch Invoice Status Inquiry](apis/batch-invoice-status-inquiry.md) | 1874302330643415041 | POST | /yonbip/tax/output-tax/api/invoiceApply/batchQueryInvoiceStatus | 否 |
| Invoicing | [Re-generate layout (originally redrawn layout)](apis/re-generate-layout-originally-redrawn-layout.md) | 1758510484783890435 | POST | /yonbip/tax/api/invoiceApply/bsRestartCreate | 否 |
| Invoicing | [Smart Coding](apis/smart-coding.md) | 2096344486209650694 | GET | /yonbip/tax/api/etax/aiMatchSpInfo | 否 |
| Invoicing | [Invoice Number Code Preview](apis/invoice-number-code-preview.md) | 939cf9f08b4a482ab65c0a29d949a7f8 | POST | /yonbip/tax/invoiceclient-web/api/invoiceApply/preview/hmdm | 否 |
| Invoicing | [Digital Circuit Query Link](apis/digital-circuit-query-link.md) | 1758495272009728004 | GET | /yonbip/tax/api/etaxAuth/zp/lianci | 否 |
| Invoicing | [Query for motor vehicles eligible for invoicing](apis/query-for-motor-vehicles-eligible-for-invoicing.md) | 2172812685121421312 | POST | /yonbip/tax/api/etax/query/vehicle/list/avalible | 否 |
| Invoicing | [Original blue invoice (deprecated - can use [issue blue invoice])](apis/original-blue-invoice-deprecated-can-use-issue-blue-invoice.md) | b04a960f39e74f92985bf0fcdf6ad4c9 | POST | /yonbip/tax/invoiceclient-web/api/invoiceApply/insertWithArray | 否 |
| Invoicing | [Original Blue Invoice - Automatic Split (Deprecated - Can use [Blue Invoice - Automatic Split])](apis/original-blue-invoice-automatic-split-deprecated-can-use-blue-invoice-automatic-split.md) | 6eece6fec3334d2e91e6d1448d07709b | POST | /yonbip/tax/invoiceclient-web/api/invoiceApply/insertWithSplit | 否 |
| Invoicing | [Issue Red Invoice - Full Amount (Original Invoice Red Cancellation Request) (Deprecated)](apis/issue-red-invoice-full-amount-original-invoice-red-cancellation-request-deprecated.md) | adaa38b17fa84943becf9fe702bce674 | POST | /yonbip/tax/invoiceclient-web/api/invoiceApply/red | 否 |
| Invoicing | [Issue Red Invoice - Partial (Red Invoice for Original Invoice Portion) (Discarded)](apis/issue-red-invoice-partial-red-invoice-for-original-invoice-portion-discarded.md) | df527e8644644abea482a4e9458e6cb4 | POST | /yonbip/tax/invoiceclient-web/api/invoiceApply/part-red | 否 |
| Invoicing | [Invoice Management - Invoice Status Inquiry (Deprecated)](apis/invoice-management-invoice-status-inquiry-deprecated.md) | 1758508294350569479 | POST | /yonbip/tax/api/invoiceApply/V4/queryInvoiceStatus | 否 |
| Invoicing | [Original Invoice Status Query (Deprecated)](apis/original-invoice-status-query-deprecated.md) | 1cc145c156664c0abac9c26faf0daccd | POST | /yonbip/tax/invoiceclient-web/api/invoiceApply/queryInvoiceStatus | 否 |
| Invoicing | [Paper invoice voided (Discarded - can use [Invoice Void])](apis/paper-invoice-voided-discarded-can-use-invoice-void.md) | 8a6e4074fa984259bed6ee77118fda45 | POST | /yonbip/tax/invoiceclient-web/api/invoiceApply/invalid | 否 |
| Outbound Enterprise Invoice Folder | [Sales Invoice Accounting](apis/sales-invoice-accounting.md) | 8b104e9ba3e5477498c9b077b48da51a | POST | /yonbip/tax/output-tax/api/invoice-his/account | 否 |
| Outbound Enterprise Invoice Folder | [Cancellation of sales invoice accounting](apis/cancellation-of-sales-invoice-accounting.md) | c374449c88da4d84842ea10d9c6ef452 | POST | /yonbip/tax/output-tax/api/invoice-his/unaccount | 否 |
| Outbound Enterprise Invoice Folder | [Invoice Printing](apis/invoice-printing.md) | db488a0ea95e45908918a4e60c859c45 | POST | /yonbip/tax/invoiceclient-web/api/invoice-his/print | 否 |
| Outbound Enterprise Invoice Folder | [Layout File Query](apis/layout-file-query.md) | 1847888797142876169 | POST | /yonbip/tax/output-tax/api/einvoice/getbsfile | 否 |
| Outbound Enterprise Invoice Folder | [Resend message](apis/resend-message.md) | 1881915572487716867 | POST | /yonbip/tax/output-tax/api/invoiceApply/callBackBySms | 否 |
| Outbound Enterprise Invoice Folder | [Resend email](apis/resend-email.md) | d03b63fcdd4e4e0fbbec2da82596f20c | POST | /yonbip/tax/invoiceclient-web/api/invoiceApply/callBackByEmail | 否 |
| Outbound Enterprise Invoice Folder | [QR Code Delivery Inquiry](apis/qr-code-delivery-inquiry.md) | 2117764853893955589 | POST | /yonbip/tax/yonbip-fi-taxot/api/invoice-his/qrcode | 否 |
| Outbound Enterprise Invoice Folder | [Sales Invoice Batch Query Interface](apis/sales-invoice-batch-query-interface.md) | 1860933016558764033 | POST | /yonbip/tax/invoiceclient-web/api/saleInvoiceCollection/query | 否 |
| Outbound Enterprise Invoice Folder | [Update Accounting Entity and Project Information](apis/update-accounting-entity-and-project-information.md) | 2165261316589617152 | POST | /yonbip/tax/output-tax/api/invoice-his/updateProjectAndOrgCode | 否 |
| Outbound Enterprise Invoice Folder | [Sales Invoice Data Collection](apis/sales-invoice-data-collection.md) | 2126167596661211139 | POST | /yonbip/tax/api/gather/save-invoices | 否 |
| Outbound Enterprise Invoice Folder | [Invoice Status Inquiry - Split (Original Invoice Status Inquiry)](apis/invoice-status-inquiry-split-original-invoice-status-inquiry.md) | 1758524924463939586 | POST | /yonbip/tax/api/invoiceApply/queryInvoiceStatusByysfpqqlsh | 否 |
| Outbound Enterprise Invoice Folder | [Sales Inquiry and Push Archiving Management (Electronic Accounting File)](apis/sales-inquiry-and-push-archiving-management-electronic-accounting-file.md) | 92e508816c6c40af8eaaca1703393588 | POST | /yonbip/tax/output-tax/billpusher/query-billspush | 否 |
| Outbound Enterprise Invoice Folder | [Sales File Test Data Source Connection (Electronic Accounting File)](apis/sales-file-test-data-source-connection-electronic-accounting-file.md) | c1fe4c666f1549bfbff53457d8125fac | POST | /yonbip/tax/output-tax/billpusher/healthy-test | 否 |
| Outbound Enterprise Invoice Folder | [Sales Invoice Attachment Information (Electronic Accounting File)](apis/sales-invoice-attachment-information-electronic-accounting-file.md) | 1853619030846865408 | POST | /yonbip/tax/output-tax/api/billpusher/query-file | 否 |
| Outbound Enterprise Invoice Folder | [Get authCode based on tax number](apis/get-authcode-based-on-tax-number.md) | 1758493176065687554 | GET | /yonbip/tax/api/etaxAuth/authCode | 否 |


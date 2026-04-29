# yonyoucloud

来源：用友 iuap 开放平台（Open Platform）

## 文档索引

- 开放平台接入：获取调用接口令牌 access_token：[access_token.md](file:///workspace/providers/yonyoucloud/open-platform/access_token.md)
- YonBIP 税务服务 · 开票申请（EinvoiceApply）API 列表：见下方清单

## YonBIP · 税务服务 · 开票申请（EinvoiceApply）

来源页面：

- API 列表：https://open.yonyoucloud.com/#/doc-center/docDes/api?activeId=EinvoiceApply&activeNodeType=4&isOrigin=0&selectApiTab=open

机器可抓取的列表接口（XML）：

- https://open.yonyoucloud.com/iuap-ipaas-base/openPortal/api/groupApiByApiClassify?scene=open&domainAppCode=EinvoiceApply&treeNodeType=4&integrateSysId=yonsuite&isOrigin=0&isAjax=1

### API 清单

| apiId | apiName |
| --- | --- |
| 2150785412886953993 | Issue Blue Invoice |
| 2157981055053201413 | Open Blue Invoice - Automatic Split |
| 2158112146045009924 | Issue Red Invoice - Full Amount (Original Invoice Red Flush Request) |
| 2150786031362244612 | Issue Red Invoice - Partial (Partial Red Flush of Original Invoice) |
| 59cdcff503064f818bdb722812e8debb | Scan to issue invoice |
| 1758523069038067712 | Scan to issue invoice - automatic split |
| 1969592416389824521 | Invoice Cancellation |
| 8f6eb69d808b46c3aee01da484bdd48e | Invoicing Request Returned (Original Invoicing Application Deleted) |
| 60325355d2d7472d963f9dc20e4a88e9 | Invoice request deletion (original request for failed invoice deletion) |
| 79d7cd074bdb4cf881c985083e0fa2f4 | Invoicing Request Review (Original Invoicing Application Review Approved) |
| 1969588327580958724 | Invoice Status Inquiry |
| 1874302330643415041 | Batch Invoice Status Inquiry |
| 1758510484783890435 | Re-generate layout (originally redrawn layout) |
| 2096344486209650694 | Smart Coding |
| 939cf9f08b4a482ab65c0a29d949a7f8 | Invoice Number Code Preview |
| 1758495272009728004 | Digital Circuit Query Link |
| 2172812685121421312 | Query for motor vehicles eligible for invoicing |
| b04a960f39e74f92985bf0fcdf6ad4c9 | Original blue invoice (deprecated - can use [issue blue invoice]) |
| 6eece6fec3334d2e91e6d1448d07709b | Original Blue Invoice - Automatic Split (Deprecated - Can use [Blue Invoice - Automatic Split]) |
| adaa38b17fa84943becf9fe702bce674 | Issue Red Invoice - Full Amount (Original Invoice Red Cancellation Request) (Deprecated) |
| df527e8644644abea482a4e9458e6cb4 | Issue Red Invoice - Partial (Red Invoice for Original Invoice Portion) (Discarded) |
| 1758508294350569479 | Invoice Management - Invoice Status Inquiry (Deprecated) |
| 1cc145c156664c0abac9c26faf0daccd | Original Invoice Status Query (Deprecated) |
| 8a6e4074fa984259bed6ee77118fda45 | Paper invoice voided (Discarded - can use [Invoice Void]) |

### 已整理

- Issue Blue Invoice：[issue-blue-invoice.md](file:///workspace/providers/yonyoucloud/yonbip/tax/einvoiceapply/issue-blue-invoice.md)

# YonBIP 在线文档同步摘要

**核对日期**：2026-05-21  
**线上入口**：https://open.yonyoucloud.com/#/doc-center/docDes/api?activeId=EinvoiceApply&activeNodeType=4&isOrigin=0&selectApiTab=open&from=&iframe=  
**本次同步目录**：`providers/yonyoucloud/yonbip/tax/einvoiceapply/`

## 本次核对范围

- `Issue Red Invoice - Full Amount (Original Invoice Red Flush Request)`
- `Issue Red Invoice - Partial (Partial Red Flush of Original Invoice)`

## 目录定位结论

- `docs/` 下主要是总览和审计记录，不是接口明细正文。
- 实际对应的本地 API 文档目录是 `providers/yonyoucloud/yonbip/tax/einvoiceapply/`。
- `providers/yonyoucloud/yonbip/tax/einvoiceapply/README.md` 中的 API 列表与线上 `EinvoiceApply` 页面当前列表一致。

## 发现的主要差异

### 1. `issue-red-invoice-full-amount.md`

- 旧版本地文档混入了本地推断内容，例如“建议以实际接口行为为准”“建议以实际 API 测试结果为准”等说明。
- 旧版本地文档把请求示例改写成了本地自拟的 camelCase 示例，不再等同于线上页面示例。
- 旧版本地文档补入了线上错误码列表中没有的 `9999`。
- 旧版本地文档没有按当前要求给字段表补齐“示例值”列。

### 2. `issue-red-invoice-partial.md`

- 旧版本地文档仍保留了早期大写字段伪示例和旧的返回值整理方式。
- 旧版本地文档没有同步线上当前更新时间。
- 旧版本地文档没有按当前要求给字段表补齐“示例值”列。
- 旧版本地文档缺少对线上“参数表字段名”和“请求示例字段名”不一致现象的说明。

## 已完成更新

- 两篇红冲接口文档都已按线上当前详情页重新整理。
- 基本信息已同步到线上当前值：`apiId`、更新时间、请求方法、路径、完整地址、`auth=true`。
- 请求参数表补齐为“字段名 / 类型 / 必填 / 说明 / 示例值”五列。
- 请求示例统一改成可复制的完整 JSON 代码块。
- 返回参数、成功示例、失败示例、错误码均改为按线上页面记录。
- 对线上页面自身存在的不一致项做了显式标注，没有再用本地经验去替线上定规则。

## 线上页面自身仍存在的不一致

- 参数表多用 `camelCase`，请求示例里同时出现大写字段名。
- `emailConfigList` 参数表只列出 `fpqqlsh` 和 `address`，请求示例里还出现 `title`、`content`。
- `Issue Red Invoice - Partial` 的返回参数表写的是 `message`，但成功/失败示例使用的是 `msg`。
- `Issue Red Invoice - Full Amount` 的返回参数表中 `data` 标记为 `object`，成功示例里 `data` 实际是字符串。

## 本次变更文件

- `providers/yonyoucloud/yonbip/tax/einvoiceapply/issue-red-invoice-full-amount.md`
- `providers/yonyoucloud/yonbip/tax/einvoiceapply/issue-red-invoice-partial.md`
- `docs/audit/yonbip-doc-diff-2026-05-21.md`

## 待确认问题

- 无本地待确认项。
- 如果后续要继续扫 `EinvoiceApply` 目录中的其他接口，建议按线上详情页逐篇核对，不要仅凭同目录其他文档的写法外推。

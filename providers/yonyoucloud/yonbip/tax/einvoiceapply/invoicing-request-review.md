# Invoicing Request Review (Original Invoicing Application Review Approved)

来源页面：

- https://open.yonyoucloud.com/#/doc-center/docDes/api?apiId=79d7cd074bdb4cf881c985083e0fa2f4&isOrigin=1&selectApiTab=open&from=&iframe=

机器可抓取的详情接口：

- https://open.yonyoucloud.com/iuap-ipaas-base/openPortal/api/getByVersionForTest/79d7cd074bdb4cf881c985083e0fa2f4/running?scene=open&isOrigin=1&isAjax=1

## 基本信息

- apiId：79d7cd074bdb4cf881c985083e0fa2f4
- API 类目：开票申请
- 产品：税务服务
- 更新时间：2025-07-01 17:06:44.000
- 请求方法：POST
- Content-Type：application/x-www-form-urlencoded
- 接口路径：/yonbip/tax/invoiceclient-web/api/invoiceApply/issue

## 请求参数

### Query 参数

| 名称 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| access_token | string | 是 | 接口令牌 access_token |

### Body 参数（Top Level）

Body 为 JSON，顶层为 `data`。

该接口在详情接口中未返回可解析的 Body 顶层字段（可参考页面展示与请求示例）。

更完整的字段明细在详情接口的 `data.paramDTOS` 中（字段较多，建议自动化解析后按需落库）。

## 请求示例

```text
Url: /yonbip/tax/invoiceclient-web/api/invoiceApply/issue?access_token=<ACCESS_TOKEN>
requestdatas=[{
	"FPQQLSH" : "发票请求流水号  必填",
	"XSF_NSRSBH" : "销售方纳税人识别号 必填",
	"JSHJ":"价税合计  必填"
}]
```

## 返回示例

### 正确返回

```json
{
	"code": "200",
	"message": "success"
}
```

### 错误返回

```json
{
	"code": "1001",
	"message": "流水号为：07646104238312188144的确认审核的发票不是待开发票！"
}
```

## 错误码

| 错误码 | 错误信息 | 说明 |
| --- | --- | --- |
| 1001 | The invoice with serial number: 07646104238312188144 is not a pending invoice for confirmation review. | Please confirm whether the invoice is in a pending billing status. |


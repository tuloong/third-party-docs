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

### Body 参数

| 字段 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| requestdatas | string | 是 | JSON 数组字符串，包含以下字段： |

#### requestdatas[] 字段

| 字段 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| FPQQLSH | string | 是 | 发票请求流水号 |
| XSF_NSRSBH | string | 是 | 销售方纳税人识别号 |
| JSHJ | number | 是 | 价税合计金额 |

## 请求示例

```text
Url: /yonbip/tax/invoiceclient-web/api/invoiceApply/issue?access_token=<ACCESS_TOKEN>
requestdatas=[{
	"FPQQLSH" : "发票请求流水号  必填",
	"XSF_NSRSBH" : "销售方纳税人识别号 必填",
	"JSHJ":"价税合计  必填"
}]
```

## 返回参数

### 返回字段

| 字段 | 类型 | 说明 |
| --- | --- | --- |
| code | string | 返回码。200/0000: 成功；其他: 失败 |
| message | string | 返回消息描述 |

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
| 1001 | 该流水号的发票不是待开发票 | 只有状态为"待开票"的发票申请才能提交审核，请确认发票当前状态 |


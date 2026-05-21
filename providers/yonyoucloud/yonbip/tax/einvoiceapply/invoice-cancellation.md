# Invoice Cancellation

来源页面：

- https://open.yonyoucloud.com/#/doc-center/docDes/api?apiId=1969592416389824521&isOrigin=1&selectApiTab=open&from=&iframe=

机器可抓取的详情接口：

- https://open.yonyoucloud.com/iuap-ipaas-base/openPortal/api/getByVersionForTest/1969592416389824521/running?scene=open&isOrigin=1&isAjax=1

## 基本信息

- apiId：1969592416389824521
- API 类目：开票申请
- 产品：税务服务
- 更新时间：2025-07-01 17:06:26.000
- 请求方法：POST
- Content-Type：application/json
- 接口路径：/yonbip/tax/invoiceclient-web/api/invoiceApply/invalidWithJson
- 完整调用地址：https://c2.yonyoucloud.com/iuap-api-gateway/yonbip/tax/invoiceclient-web/api/invoiceApply/invalidWithJson
- 鉴权方式：access_token 作为 Query 参数传递（?access_token=）
- 功能说明：根据发票代码和发票号码作废纸质发票（增值税专用发票、普通发票、机动车销售统一发票）。数电纸质发票和税控纸质发票可作废；电子发票不可作废，只能红冲。

## 请求参数

### Query 参数

| 名称 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| access_token | string | 是 | 接口令牌 access_token |

### Body 参数

| 字段 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| fpDm | string | 是 | 发票代码 |
| fpHm | string | 是 | 发票号码 |

## 请求示例

```text
Url: /yonbip/tax/invoiceclient-web/api/invoiceApply/invalidWithJson?access_token=<ACCESS_TOKEN>  
Body: {
	"fpHm": "1222263555",
	"fpDm": "1225222"
}
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
    "message": "操作成功"
}
```

### 错误返回

```json
{
    "code": "1001",
    "message": "发票代码号码对应发票不存在"
}
```

## 错误码

| 错误码 | 错误信息 | 说明 |
| --- | --- | --- |
| 1001 | 发票代码号码对应发票不存在 | 请确认发票代码和发票号码是否正确，或该发票是否已作废/红冲 |


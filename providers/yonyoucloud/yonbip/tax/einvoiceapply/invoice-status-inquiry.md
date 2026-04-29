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

| 名称 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| access_token | string | 是 | 接口令牌 access_token |

### Body 参数（Top Level）

Body 为 JSON，顶层为 `data`。

该接口在详情接口中未返回可解析的 Body 顶层字段（可参考页面展示与请求示例）。

更完整的字段明细在详情接口的 `data.paramDTOS` 中（字段较多，建议自动化解析后按需落库）。

## 请求示例

```text
Url: /yonbip/tax//api/invoiceApplyqueryInvoiceStatusWithJson?access_token=<ACCESS_TOKEN>  
Body: {
	"fpqqlsh": "1354466355222"
}
```

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


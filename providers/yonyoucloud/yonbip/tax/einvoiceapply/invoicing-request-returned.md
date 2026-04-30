# Invoicing Request Returned (Original Invoicing Application Deleted)

来源页面：

- https://open.yonyoucloud.com/#/doc-center/docDes/api?apiId=8f6eb69d808b46c3aee01da484bdd48e&isOrigin=1&selectApiTab=open&from=&iframe=

机器可抓取的详情接口：

- https://open.yonyoucloud.com/iuap-ipaas-base/openPortal/api/getByVersionForTest/8f6eb69d808b46c3aee01da484bdd48e/running?scene=open&isOrigin=1&isAjax=1

## 基本信息

- apiId：8f6eb69d808b46c3aee01da484bdd48e
- API 类目：开票申请
- 产品：税务服务
- 更新时间：2025-07-01 17:05:52.000
- 请求方法：POST
- Content-Type：application/x-www-form-urlencoded
- 接口路径：/yonbip/tax/invoiceclient-web/api/invoiceApply/del

## 请求参数

### Query 参数

| 名称 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| access_token | string | 是 | 接口令牌 access_token |

### Body 参数

| 字段 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| requestdatas | string | 是 | JSON 字符串，包含 fpqqlsh（发票请求流水号），用于指定要退回的开票申请 |

## 请求示例

```text
Url: /yonbip/tax/invoiceclient-web/api/invoiceApply/del?access_token=<ACCESS_TOKEN>
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
    "code": "9999",
    "message": "开票状态不是待开票或者开票失败,对应的发票请求流水号:26671033302026544154"
}
```

## 错误码

| 错误码 | 错误信息 | 说明 |
| --- | --- | --- |
| 9999 | 开票状态不是待开票或开票失败 | 只能退回状态为"待开票"或"开票失败"的开票申请，请确认发票当前状态 |


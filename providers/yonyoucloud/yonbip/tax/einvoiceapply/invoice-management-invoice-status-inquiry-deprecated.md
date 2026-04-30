# Invoice Management - Invoice Status Inquiry (Deprecated)

来源页面：

- https://open.yonyoucloud.com/#/doc-center/docDes/api?apiId=1758508294350569479&isOrigin=1&selectApiTab=open&from=&iframe=

机器可抓取的详情接口：

- https://open.yonyoucloud.com/iuap-ipaas-base/openPortal/api/getByVersionForTest/1758508294350569479/running?scene=open&isOrigin=1&isAjax=1

## 基本信息

- apiId：1758508294350569479
- API 类目：开票管理
- 产品：税务服务
- 更新时间：2025-07-01 17:07:24.000
- 请求方法：POST
- Content-Type：application/x-www-form-urlencoded
- 接口路径：/yonbip/tax/api/invoiceApply/V4/queryInvoiceStatus

## 请求参数

### Query 参数

| 名称 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| fpqqlsh | string | 是 | 发票请求流水号 |

## 请求示例

```text
Url: /yonbip/tax/api/invoiceApply/V4/queryInvoiceStatus?access_token=<ACCESS_TOKEN>
```

## 返回参数

> 此接口已废弃，请使用 [Invoice Status Inquiry](invoice-status-inquiry.md)

### 返回字段

| 字段 | 类型 | 说明 |
| --- | --- | --- |
| code | string | 返回码。200: 成功 |
| message | string | 返回消息描述 |
| data.fpqqlsh | string | 发票请求流水号 |
| data.statuscode | string | 发票状态码。0: 未开票；1: 待开票；2: 开票中；3: 开票失败；4: 开票成功 |
| data.status | string | 发票状态中文描述 |
| data.bsstatus | string | 报税状态。0: 未报税；1: 已报税 |

### 正确返回

```json
{
    "code": "200",
    "message": "操作成功",
    "data": {
        "fpqqlsh": "1236655",
        "statuscode": "1",
        "status": "待开票",
        "bsstatus": "0"
    }
}
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
| 1002 | 数据不存在 / Data does not exist | 该流水号对应的开票数据不存在 |


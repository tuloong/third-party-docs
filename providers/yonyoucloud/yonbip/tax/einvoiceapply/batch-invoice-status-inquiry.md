# Batch Invoice Status Inquiry

来源页面：

- https://open.yonyoucloud.com/#/doc-center/docDes/api?apiId=1874302330643415041&isOrigin=1&selectApiTab=open&from=&iframe=

机器可抓取的详情接口：

- https://open.yonyoucloud.com/iuap-ipaas-base/openPortal/api/getByVersionForTest/1874302330643415041/running?scene=open&isOrigin=1&isAjax=1

## 基本信息

- apiId：1874302330643415041
- API 类目：开票管理
- 产品：税务服务
- 更新时间：2025-07-01 17:07:33.000
- 请求方法：POST
- Content-Type：application/json
- 接口路径：/yonbip/tax/output-tax/api/invoiceApply/batchQueryInvoiceStatus

## 请求参数

### Query 参数

| 名称 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| fpqqlshs | string | 是 | JSON string of the invoice request serial number array, with a maximum of 20 queries at a time. |

### Body 参数（Top Level）

| 字段 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| fpqqlshs | string | 是 | 发票请求流水号数组的 JSON 字符串，格式: `["流水号1","流水号2",...]`，单次最多查询 20 条 |

## 请求示例

```text
Url: /yonbip/tax/output-tax/api/invoiceApply/batchQueryInvoiceStatus?access_token=<ACCESS_TOKEN>&fpqqlshs=["11223344","55667788"]
```

## 返回参数

### 返回字段

| 字段 | 类型 | 说明 |
| --- | --- | --- |
| code | string | 返回码。200/0000: 成功 |
| message | string | 返回消息描述 |
| data[].code | string | 该条记录的返回码 |
| data[].msg | string | 该条记录的返回消息 |
| data[].fpqqlsh | string | 发票请求流水号 |
| data[].statuscode | string | 发票状态码。0: 未开票；1: 待开票；2: 开票中；3: 开票失败；4: 开票成功 |
| data[].status | string | 发票状态中文描述 |
| data[].errmsg | string | 错误信息（开票失败时返回） |
| data[].bsstatus | string | 报税状态。0: 未报税；1: 已报税 |

### 正确返回

```json
{
    "code": "200",
    "message": "操作成功",
    "data": [
        {
            "code": "0000",
            "msg": "操作成功",
            "fpqqlsh": "11223344",
            "statuscode": "1",
            "status": "待开票",
            "errmsg": "税控设备错误",
            "bsstatus": "0"
        }
    ]
}
```

### 错误返回

```json
{
    "code": "9999",
    "message": "系统异常"
}
```

## 错误码

| 错误码 | 错误信息 | 说明 |
| --- | --- | --- |
| 9999 | 系统异常 / System Exception | 根据返回的具体错误信息进行处理 |


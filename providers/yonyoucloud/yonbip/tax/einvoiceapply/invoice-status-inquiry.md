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

### Body 参数

| 字段 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| fpqqlsh | string | 是 | 发票请求流水号，由开票申请时传入的流水号 |

## 请求示例

```text
Url: /yonbip/tax//api/invoiceApplyqueryInvoiceStatusWithJson?access_token=<ACCESS_TOKEN>  
Body: {
	"fpqqlsh": "1354466355222"
}
```

## 返回参数

### 返回字段

| 字段 | 类型 | 说明 |
| --- | --- | --- |
| code | string | 返回码。200/0000: 成功；其他: 失败 |
| message | string | 返回消息描述 |
| data.fpqqlsh | string | 发票请求流水号 |
| data.statuscode | string | 发票状态码。0: 未开票；1: 待开票；2: 开票中；3: 开票失败；4: 开票成功 |
| data.status | string | 发票状态中文描述 |
| data.bsstatus | string | 报税状态。0: 未报税；1: 已报税 |
| data.errmsg | string | 错误信息（开票失败时返回失败原因） |
| data.fpDm | string | 发票代码（开票成功后返回） |
| data.fpHm | string | 发票号码（开票成功后返回） |
| data.pdf | string | 电子发票PDF下载URL（开票成功后返回） |
| data.kprq | string | 开票日期（开票成功后返回），格式 yyyyMMddHHmmss |

### 正确返回

```json
{
    "code": "200",
    "message": "操作成功",
    "data": {
        "fpqqlsh": "1354466355222",
        "statuscode": "4",
        "status": "开票成功",
        "bsstatus": "1",
        "fpDm": "011111111007",
        "fpHm": "03197858",
        "kprq": "20220429233242"
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
| 1002 | 数据不存在 / Data does not exist | 该发票请求流水号对应的开票数据不存在，请确认流水号是否正确 |


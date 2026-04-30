# Paper invoice voided (Discarded - can use [Invoice Void])

来源页面：

- https://open.yonyoucloud.com/#/doc-center/docDes/api?apiId=8a6e4074fa984259bed6ee77118fda45&isOrigin=1&selectApiTab=open&from=&iframe=

机器可抓取的详情接口：

- https://open.yonyoucloud.com/iuap-ipaas-base/openPortal/api/getByVersionForTest/8a6e4074fa984259bed6ee77118fda45/running?scene=open&isOrigin=1&isAjax=1

## 基本信息

- apiId：8a6e4074fa984259bed6ee77118fda45
- API 类目：开票申请
- 产品：税务服务
- 更新时间：2025-07-01 17:06:13.000
- 请求方法：POST
- Content-Type：application/x-www-form-urlencoded
- 接口路径：/yonbip/tax/invoiceclient-web/api/invoiceApply/invalid

## 请求参数

### Query 参数

| 名称 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| access_token | string | 是 | 接口令牌 access_token |

### Body 参数

| 字段 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| requestdatas | string | 是 | JSON 字符串，包含以下字段： |

#### requestdatas 字段

| 字段 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| fpHm | string | 是 | 发票号码 |
| fpDm | string | 是 | 发票代码 |

## 请求示例

```text
rl: /yonbip/tax/invoiceclient-web/api/invoiceApply/invalid?access_token=<ACCESS_TOKEN>
requestdatas={
    "fpHm" :"发票号码,必填",
    "fpDm" :"发票代码,必填"
}
```

## 返回参数

### 返回字段

| 字段 | 类型 | 说明 |
| --- | --- | --- |
| code | string | 返回码。200: 成功；其他: 失败 |
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
| 1001 | 发票代码号码对应发票不存在 | 请确认发票代码和号码是否正确，或该发票可能已被作废/红冲 |


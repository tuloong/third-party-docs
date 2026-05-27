# Invoice Entry

来源页面：

- https://open.yonyoucloud.com/#/doc-center/docDes/api?apiId=2206384915479527427&isOrigin=1&selectApiTab=open&from=&iframe=

## 基本信息

- apiId：2206384915479527427
- API 类目：发票入账
- 产品：税务服务
- 发布时间：2025-07-23 18:39:20
- 请求方法：POST
- Content-Type：application/json
- 接口路径：/yonbip/tax/input-tax/api/invoice-entry/commit
- 鉴权方式：access_token 作为 Query 参数传递（?access_token=）
- 应用场景：开放API
- 事务和幂等性：无
- 用户身份：支持传递普通用户身份

## 请求参数

### Query 参数

| 名称 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| access_token | string | 是 | 调用方应用 token |

### Body 参数

Body 为 JSON 对象。

#### 顶层字段

| 字段 | 类型 | 数组 | 必填 | 说明 |
| --- | --- | --- | --- | --- |
| nsrsbh | string | 否 | 是 | 税号。示例：`1234567` |
| bills | object | 是 | 是 | 发票明细列表 |

#### bills[] 发票明细字段

| 字段 | 类型 | 数组 | 必填 | 说明 |
| --- | --- | --- | --- | --- |
| invoiceCode | string | 否 | 否 | 发票代码。示例：`1234` |
| invoiceNum | string | 否 | 是 | 发票号码。示例：`1234` |
| billType | string | 否 | 是 | 发票类型。示例：`invoice` |
| sqrzsj | string | 否 | 否 | 入账属期。示例：`2025-02-20` |
| sqrzyt | string | 否 | 是 | 入账用途。详见下方枚举 |

#### sqrzyt 入账用途枚举

| 值 | 说明 |
| --- | --- |
| 01 | 未入账 |
| 02 | 已入账（企业所得税税前扣除） |
| 03 | 已入账（企业所得税不扣除） |
| 06 | 入账撤销 |

## 请求示例

```text
Url: /yonbip/tax/input-tax/api/invoice-entry/commit?access_token=访问令牌
Body: {
    "nsrsbh": "1234567",
    "bills": [
        {
            "invoiceCode": "1234",
            "invoiceNum": "1234",
            "billType": "invoice",
            "sqrzsj": "2025-02-20",
            "sqrzyt": "02"
        }
    ]
}
```

## 返回参数

### 返回字段

| 字段 | 类型 | 数组 | 说明 |
| --- | --- | --- | --- |
| code | string | 否 | 状态码。示例：`200` |
| message | string | 否 | 信息说明。示例：`操作成功` |
| data | object | 是 | 数据详情 |
| data[].taskNo | string | 否 | 任务编码。示例：`1234` |

### 正确返回

```json
{
    "code": "200",
    "message": "操作成功",
    "data": [
        {
            "taskNo": "1234"
        }
    ]
}
```

## 错误码

| 错误码 | 错误信息 | 说明 |
| --- | --- | --- |
| 9999 | 系统异常 | 系统内部错误 |

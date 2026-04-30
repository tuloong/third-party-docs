# Re-generate layout (originally redrawn layout)

来源页面：

- https://open.yonyoucloud.com/#/doc-center/docDes/api?apiId=1758510484783890435&isOrigin=1&selectApiTab=open&from=&iframe=

机器可抓取的详情接口：

- https://open.yonyoucloud.com/iuap-ipaas-base/openPortal/api/getByVersionForTest/1758510484783890435/running?scene=open&isOrigin=1&isAjax=1

## 基本信息

- apiId：1758510484783890435
- API 类目：已开票
- 产品：税务服务
- 更新时间：2025-07-01 17:07:50.000
- 请求方法：POST
- Content-Type：application/x-www-form-urlencoded
- 接口路径：/yonbip/tax/api/invoiceApply/bsRestartCreate

## 请求参数

### Query 参数

| 名称 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| fpDm | string | 否 | 发票代码 |
| fpHm | string | 是 | 发票号码 |

### Body 参数

| 字段 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| fpDm | string | 否 | 发票代码（可通过 Query 参数或 Body 传入） |
| fpHm | string | 是 | 发票号码（可通过 Query 参数或 Body 传入） |

## 请求示例

```text
Url: /yonbip/tax/api/invoiceApply/bsRestartCreate?access_token=<ACCESS_TOKEN>&fpDm=555251545&fpHm=621545
```

## 返回参数

### 返回字段

| 字段 | 类型 | 说明 |
| --- | --- | --- |
| code | string | 返回码。0000: 成功；其他: 失败 |
| message | string | 返回消息描述 |

### 正确返回

```json
{
    "code": "0000",
    "message": "操作成功"
}
```

### 错误返回

```json
{
    "code": "1001",
    "message": "发票号码不能为空"
}
```

## 错误码

| 错误码 | 错误信息 | 说明 |
| --- | --- | --- |
| 1001 | 发票号码不能为空 / Invoice number cannot be empty | 必填参数 fpHm 未传入 |
| 1002 | 该发票不存在 / This invoice does not exist | 对应的发票代码号码在系统中不存在 |


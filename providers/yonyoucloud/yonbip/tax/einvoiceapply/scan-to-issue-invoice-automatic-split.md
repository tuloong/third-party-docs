# Scan to issue invoice - automatic split

来源页面：

- https://open.yonyoucloud.com/#/doc-center/docDes/api?apiId=1758523069038067712&isOrigin=1&selectApiTab=open&from=&iframe=

机器可抓取的详情接口：

- https://open.yonyoucloud.com/iuap-ipaas-base/openPortal/api/getByVersionForTest/1758523069038067712/running?scene=open&isOrigin=1&isAjax=1

## 基本信息

- apiId：1758523069038067712
- API 类目：开票申请
- 产品：税务服务
- 更新时间：2025-07-01 17:07:06.000
- 请求方法：POST
- Content-Type：application/json
- 接口路径：/yonbip/tax/api/invoiceApply/qr-with-split
- 完整调用地址：https://c2.yonyoucloud.com/iuap-api-gateway/yonbip/tax/api/invoiceApply/qr-with-split
- 鉴权方式：access_token 作为 Query 参数传递（?access_token=）

## 请求参数

### Query 参数

| 名称 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| access_token | string | 是 | 接口令牌（平台鉴权机制，由网关统一附加） |
| xcx | string | 否 | 是否来自小程序。Y: 是；N: 否 |

### Body 参数

| 字段 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| requestdatas | string | 是 | JSON 字符串，字段结构与扫码开票（scan-to-issue-invoice）的 body 一致，支持自动拆分 |

## 请求示例

```text
Url: /yonbip/tax/api/invoiceApply/qr-with-split?access_token=<ACCESS_TOKEN>&xcx=N  
Body: {
	"requestdatas": ""
}
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
    "code": "0000",
    "message": "待开票信息为空"
}
```

## 错误码

| 错误码 | 错误信息 | 说明 |
| --- | --- | --- |
| 0000 | 待开票信息为空 / Invoicing Information is empty | 传入的 requestdatas 为空或格式错误 | 
| 9999 | 二维码生成异常 / Error occurred while generating the QR code | 根据返回的错误信息进行排查 |


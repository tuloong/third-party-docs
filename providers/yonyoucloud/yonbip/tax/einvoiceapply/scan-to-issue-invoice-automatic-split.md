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

## 请求参数

### Query 参数

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| access_token | string | 是 | 接口令牌 access_token |
| xcx | string | 否 | Is it from the Mini Program? Y: Yes; N: No |

## 请求示例

```text
Url: /yonbip/tax/api/invoiceApply/qr-with-split?access_token=<ACCESS_TOKEN>&xcx=N  
Body: {
	"requestdatas": ""
}
```

## 返回参数说明

| 字段路径 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| code | string | 否 | Status Code |
| message | string | 否 | Information Description |

## 返回示例

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
| 0000 | Invoicing Information is empty. | Return error code |
| 9999 | Error occurred while generating the QR code for invoicing. | Return error code |


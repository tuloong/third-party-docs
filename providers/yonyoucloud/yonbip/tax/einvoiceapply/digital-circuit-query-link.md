# Digital Circuit Query Link

来源页面：

- https://open.yonyoucloud.com/#/doc-center/docDes/api?apiId=1758495272009728004&isOrigin=1&selectApiTab=open&from=&iframe=

机器可抓取的详情接口：

- https://open.yonyoucloud.com/iuap-ipaas-base/openPortal/api/getByVersionForTest/1758495272009728004/running?scene=open&isOrigin=1&isAjax=1

## 基本信息

- apiId：1758495272009728004
- API 类目：开票申请
- 产品：税务服务
- 更新时间：2025-07-01 17:06:58.000
- 请求方法：GET
- Content-Type：application/json
- 接口路径：/yonbip/tax/api/etaxAuth/zp/lianci

## 请求参数

### Query 参数

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| access_token | string | 是 | 接口令牌 access_token |
| xsfNsrsbh | string | 是 | Seller Taxpayer Identification Number |
| allElcUserName | string | 是 | Digital Circuit Login Name |
| fplx | string | 是 | Invoice Type 33: Digital Paper Invoice (VAT Special Invoice)  <br>Invoice Type 34: Digital Paper Invoice (Normal Invoice) |

## 请求示例

```text
Url: /yonbip/tax/api/etaxAuth/zp/lianci?access_token=<ACCESS_TOKEN>&xsfNsrsbh=125453322&allElcUserName=username&fplx=33
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
	"code": "1001",
	"message": "税号、用户、发票类型不能为空"
}
```

## 错误码

| 错误码 | 错误信息 | 说明 |
| --- | --- | --- |
| 1001 | Tax number, User, Invoice Type cannot be empty. | Return error code |
| 9007 | Token acquisition exception | Return error code |
| 9999 | The agency has not yet approved the electronic paper invoice. Please contact the Tax Authority to apply. | Return error code |


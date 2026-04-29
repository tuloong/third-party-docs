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

| 名称 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| xsfNsrsbh | string | 是 | Seller Taxpayer Identification Number |
| allElcUserName | string | 是 | Digital Circuit Login Name |
| fplx | string | 是 | Invoice Type 33: Digital Paper Invoice (VAT Special Invoice) Invoice Type 34: Digital Paper Invoice (Normal Invoice) |

### Body 参数（Top Level）

Body 为 JSON，顶层为 `data`。

该接口在详情接口中未返回可解析的 Body 顶层字段（可参考页面展示与请求示例）。

更完整的字段明细在详情接口的 `data.paramDTOS` 中（字段较多，建议自动化解析后按需落库）。

## 请求示例

```text
Url: /yonbip/tax/api/etaxAuth/zp/lianci?access_token=<ACCESS_TOKEN>&xsfNsrsbh=125453322&allElcUserName=username&fplx=33
```

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


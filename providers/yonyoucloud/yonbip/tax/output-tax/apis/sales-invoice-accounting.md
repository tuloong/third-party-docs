# Sales Invoice Accounting

来源页面：

- https://open.yonyoucloud.com/#/doc-center/docDes/api?apiId=8b104e9ba3e5477498c9b077b48da51a&isOrigin=1&selectApiTab=open&from=&iframe=

机器可抓取的详情接口：

- https://open.yonyoucloud.com/iuap-ipaas-base/openPortal/api/getByVersionForTest/8b104e9ba3e5477498c9b077b48da51a/running?scene=open&isOrigin=1&isAjax=1

## 基本信息

- apiId：8b104e9ba3e5477498c9b077b48da51a
- API 类目：已开票
- 所属目录：销项企业票夹（Outbound Enterprise Invoice Folder）
- 产品：税务服务
- 更新时间：2025-07-01 17:07:39.000
- 请求方法：POST
- Content-Type：application/json
- 接口路径：/yonbip/tax/output-tax/api/invoice-his/account
- 完整调用地址：https://c2.yonyoucloud.com/iuap-api-gateway/yonbip/tax/output-tax/api/invoice-his/account
- 鉴权方式：access_token 作为 Query 参数传递（?access_token=）
- 当前状态：当前接口
- 请求字段数：Query 0 个，Body 10 个
- 返回字段数：2 个

## 对接要点

- 调用 URL：`https://c2.yonyoucloud.com/iuap-api-gateway/yonbip/tax/output-tax/api/invoice-his/account?access_token={access_token}`
- 调用方必须保存业务来源单号、发票请求流水号、请求报文、响应报文和状态查询结果，便于重试和对账。
- 开票、红冲、作废、驱动开票等写操作建议用业务唯一号做幂等控制；同一业务单不要生成多个不同流水号反复提交。
- 返回成功只代表接口调用成功，不一定代表税局或开票终态成功；涉及开票结果时必须再调用状态查询类接口确认。
- 详情接口返回字段说明可能为英文，字段名以开放平台原始字段为准。

## 调用模板

```bash
curl -X POST 'https://c2.yonyoucloud.com/iuap-api-gateway/yonbip/tax/output-tax/api/invoice-his/account?access_token=访问令牌' \
  -H 'Content-Type: application/json' \
  -d '{"data": {}}'
```

## 请求参数

### Query 参数

无。

> 注：开放平台网关调用时通常还需传递 `access_token`。

### Body 参数

1. `bills`
   - 类型：object
   - 数组：是
   - 必填：否
   - 说明：Invoice Details

2. `bills.fpDm`
   - 类型：string
   - 数组：否
   - 必填：否
   - 示例/默认值：`121321453513`
   - 说明：Invoice Code

3. `bills.fpHm`
   - 类型：string
   - 数组：否
   - 必填：是
   - 示例/默认值：`121313`
   - 说明：Invoice Number

4. `bills.accountVoucherNo`
   - 类型：string
   - 数组：否
   - 必填：否
   - 示例/默认值：`1231`
   - 说明：Voucher Number

5. `bills.srcVoucherId`
   - 类型：string
   - 数组：否
   - 必填：否
   - 示例/默认值：`123123`
   - 说明：Voucher primary key (length cannot exceed 300 characters)

6. `bills.accountTime`
   - 类型：date
   - 数组：否
   - 必填：否
   - 示例/默认值：`2024-01-01`
   - 说明：Accounting Date

7. `bills.accountUser`
   - 类型：string
   - 数组：否
   - 必填：否
   - 示例/默认值：`Zhang San`
   - 说明：Accountant

8. `bills.accountNote`
   - 类型：string
   - 数组：否
   - 必填：否
   - 示例/默认值：`Remarks`
   - 说明：Accounting notes

9. `nsrsbh`
   - 类型：string
   - 数组：否
   - 必填：否
   - 示例/默认值：`21312332`
   - 说明：Taxpayer Identification Number

10. `orgCode`
   - 类型：string
   - 数组：否
   - 必填：否
   - 示例/默认值：`1212`
   - 说明：Invoicing Site Code, check in the Invoicing Site file;

## 请求示例

```text
Url: /yonbip/tax/output-tax/api/invoice-his/account?access_token=访问令牌  
Body: {
	"bills": [
		{
			"fpDm": "121321453513",
			"fpHm": "121313",
			"accountVoucherNo": "1231",
			"srcVoucherId": "123123",
			"accountTime": "2024-01-01",
			"accountUser": "张三",
			"accountNote": "备注"
		}
	],
	"nsrsbh": "21312332",
	"orgCode": "1212"
}
```

## 返回参数

### 返回字段

1. `code`
   - 类型：string
   - 数组：否
   - 必填：否
   - 示例/默认值：`200`
   - 说明：Status Code

2. `message`
   - 类型：string
   - 数组：否
   - 必填：否
   - 示例/默认值：`Operation successful`
   - 说明：Prompt Information

## 返回示例

### 成功示例

无。

### 失败示例

无。

## 错误码

| 错误码 | 错误说明 | 处理建议 |
| --- | --- | --- |
| 9999 |  |  |


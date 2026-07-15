# Sales Inquiry and Push Archiving Management (Electronic Accounting File)

来源页面：

- https://open.yonyoucloud.com/#/doc-center/docDes/api?apiId=92e508816c6c40af8eaaca1703393588&isOrigin=1&selectApiTab=open&from=&iframe=

机器可抓取的详情接口：

- https://open.yonyoucloud.com/iuap-ipaas-base/openPortal/api/getByVersionForTest/92e508816c6c40af8eaaca1703393588/running?scene=open&isOrigin=1&isAjax=1

## 基本信息

- apiId：92e508816c6c40af8eaaca1703393588
- API 类目：已开票
- 所属目录：销项企业票夹（Outbound Enterprise Invoice Folder）
- 产品：税务服务
- 更新时间：2025-07-01 17:08:19.000
- 请求方法：POST
- Content-Type：application/json
- 接口路径：/yonbip/tax/output-tax/billpusher/query-billspush
- 完整调用地址：https://c2.yonyoucloud.com/iuap-api-gateway/yonbip/tax/output-tax/billpusher/query-billspush
- 鉴权方式：access_token 作为 Query 参数传递（?access_token=）
- 当前状态：当前接口
- 请求字段数：Query 0 个，Body 14 个
- 返回字段数：2 个

## 对接要点

- 调用 URL：`https://c2.yonyoucloud.com/iuap-api-gateway/yonbip/tax/output-tax/billpusher/query-billspush?access_token={access_token}`
- 调用方必须保存业务来源单号、发票请求流水号、请求报文、响应报文和状态查询结果，便于重试和对账。
- 开票、红冲、作废、驱动开票等写操作建议用业务唯一号做幂等控制；同一业务单不要生成多个不同流水号反复提交。
- 返回成功只代表接口调用成功，不一定代表税局或开票终态成功；涉及开票结果时必须再调用状态查询类接口确认。
- 详情接口返回字段说明可能为英文，字段名以开放平台原始字段为准。

## 调用模板

```bash
curl -X POST 'https://c2.yonyoucloud.com/iuap-api-gateway/yonbip/tax/output-tax/billpusher/query-billspush?access_token=访问令牌' \
  -H 'Content-Type: application/json' \
  -d '{"data": {}}'
```

## 请求参数

### Query 参数

无。

> 注：开放平台网关调用时通常还需传递 `access_token`。

### Body 参数

1. `callbackUrl`
   - 类型：string
   - 数组：否
   - 必填：是
   - 示例/默认值：`https://idoc.diwork.com//cloudrecord-imw/api/nc/v1/doc/push?corpId=1634`
   - 说明：Archiving Management Callback Address

2. `docPkList`
   - 类型：string
   - 数组：是
   - 必填：是
   - 示例/默认值：`["2444139785392640"]`
   - 说明：Bill Query Condition List

3. `fileServer`
   - 类型：object
   - 数组：否
   - 必填：是
   - 说明：File Services Server Address

4. `fileServer.accessKey`
   - 类型：string
   - 数组：否
   - 必填：是
   - 示例/默认值：`idocyonyoucloudcom`
   - 说明：File Services Authorization Key

5. `fileServer.bucketName`
   - 类型：string
   - 数组：否
   - 必填：是
   - 示例/默认值：`idoc`
   - 说明：File Services Bucket Name

6. `fileServer.endpoint`
   - 类型：string
   - 数组：否
   - 必填：是
   - 示例/默认值：`https://yonbip.diwork.com/yonbip-fi-eaffile/cloudrecord-file`
   - 说明：File Services Address

7. `fileServer.secretKey`
   - 类型：string
   - 数组：否
   - 必填：是
   - 示例/默认值：`idocyonyoucloudcom`
   - 说明：File Services Key

8. `fileServer.serverType`
   - 类型：string
   - 数组：否
   - 必填：是
   - 示例/默认值：`gateway`
   - 说明：File Service Types; gateway: Stream files to the archive core microservices module, upload to cloud storage
     via backend (field integration recommended); minio: Directly upload to minio server (commonly used for private
     cloud third-party system integration); tmp: First obtain OSS temporary upload address, upload files via
     temporary address (not recommended); minio_tmp: First obtain minio temporary upload address, upload files via
     temporary address (not recommended)

9. `orgInfo`
   - 类型：object
   - 数组：否
   - 必填：是
   - 说明：Organization Information

10. `orgInfo.code`
   - 类型：string
   - 数组：否
   - 必填：是
   - 示例/默认值：`001_0001`
   - 说明：Organization Code

11. `orgInfo.type`
   - 类型：string
   - 数组：否
   - 必填：是
   - 示例/默认值：`book`
   - 说明：Organization Type; unit Business Unit, book Accounting Book (default)

12. `showUpper`
   - 类型：long
   - 数组：否
   - 必填：否
   - 示例/默认值：`1`
   - 说明：Parent Document ID

13. `taskId`
   - 类型：string
   - 数组：否
   - 必填：是
   - 示例/默认值：`S202111-173490-a559dc1db5f2`
   - 说明：Task ID

14. `type`
   - 类型：string
   - 数组：否
   - 必填：是
   - 示例/默认值：`fa_fixedasset_FixedAssetsInfo`
   - 说明：Bill Type; Currently, this field does not have fixed enumeration values.

## 请求示例

```text
Url: /yonbip/tax/output-tax/billpusher/query-billspush?access_token=访问令牌  
Body: {
	"callbackUrl": "https://idoc.diwork.com//cloudrecord-imw/api/nc/v1/doc/push?corpId=1634",
	"docPkList": [
		"2444139785392640"
	],
	"fileServer": {
		"accessKey": "idocyonyoucloudcom",
		"bucketName": "idoc",
		"endpoint": "https://yonbip.diwork.com/yonbip-fi-eaffile/cloudrecord-file",
		"secretKey": "idocyonyoucloudcom",
		"serverType": "gateway"
	},
	"orgInfo": {
		"code": "001_0001",
		"type": "book"
	},
	"showUpper": 1,
	"taskId": "S202111-173490-a559dc1db5f2",
	"type": "fa_fixedasset_FixedAssetsInfo"
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
   - 示例/默认值：`success`
   - 说明：Prompt

## 返回示例

### 成功示例

无。

### 失败示例

无。

## 错误码

| 错误码 | 错误说明 | 处理建议 |
| --- | --- | --- |
| 9999 |  |  |


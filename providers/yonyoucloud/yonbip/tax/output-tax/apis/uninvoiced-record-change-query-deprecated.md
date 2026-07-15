# Uninvoiced Record Change Query (Deprecated)

来源页面：

- https://open.yonyoucloud.com/#/doc-center/docDes/api?apiId=c839ea68def44e12a03997a62c688c84&isOrigin=1&selectApiTab=open&from=&iframe=

机器可抓取的详情接口：

- https://open.yonyoucloud.com/iuap-ipaas-base/openPortal/api/getByVersionForTest/c839ea68def44e12a03997a62c688c84/running?scene=open&isOrigin=1&isAjax=1

## 基本信息

- apiId：c839ea68def44e12a03997a62c688c84
- API 类目：待开票明细
- 所属目录：开票申请单（Invoice Request）
- 产品：税务服务
- 更新时间：2025-07-01 17:06:48.000
- 请求方法：POST
- Content-Type：application/json
- 接口路径：/yonbip/tax/invoiceclient-web/api/invoice-will/changes
- 完整调用地址：https://c2.yonyoucloud.com/iuap-api-gateway/yonbip/tax/invoiceclient-web/api/invoice-will/changes
- 鉴权方式：access_token 作为 Query 参数传递（?access_token=）
- 当前状态：当前接口
- 请求字段数：Query 0 个，Body 5 个
- 返回字段数：7 个

## 对接要点

- 调用 URL：`https://c2.yonyoucloud.com/iuap-api-gateway/yonbip/tax/invoiceclient-web/api/invoice-will/changes?access_token={access_token}`
- 调用方必须保存业务来源单号、发票请求流水号、请求报文、响应报文和状态查询结果，便于重试和对账。
- 开票、红冲、作废、驱动开票等写操作建议用业务唯一号做幂等控制；同一业务单不要生成多个不同流水号反复提交。
- 返回成功只代表接口调用成功，不一定代表税局或开票终态成功；涉及开票结果时必须再调用状态查询类接口确认。
- 详情接口返回字段说明可能为英文，字段名以开放平台原始字段为准。

## 调用模板

```bash
curl -X POST 'https://c2.yonyoucloud.com/iuap-api-gateway/yonbip/tax/invoiceclient-web/api/invoice-will/changes?access_token=访问令牌' \
  -H 'Content-Type: application/json' \
  -d '{"data": {}}'
```

## 请求参数

### Query 参数

无。

> 注：开放平台网关调用时通常还需传递 `access_token`。

### Body 参数

1. `beginTime`
   - 类型：string
   - 数组：否
   - 必填：是
   - 示例/默认值：`2021-02-01 01:01:10`
   - 说明：Query unbilled change start time Time format yyyy-MM-dd hh:mm:ss

2. `orgCode`
   - 类型：string
   - 数组：否
   - 必填：否
   - 示例/默认值：`121231`
   - 说明：Invoicing Site Code: Query in the invoicing site file, not mandatory, if not filled in, it will default to
     query all change records of invoicing site codes within the time period.

3. `pageNum`
   - 类型：string
   - 数组：否
   - 必填：是
   - 示例/默认值：`1`
   - 说明：Page number

4. `pageSize`
   - 类型：string
   - 数组：否
   - 必填：是
   - 示例/默认值：`10`
   - 说明：Number of items per page

5. `endTime`
   - 类型：string
   - 数组：否
   - 必填：是
   - 示例/默认值：`2021-02-02 01:01:10`
   - 说明：Query unbilled change end time Time format yyyy-MM-dd hh:mm:ss

## 请求示例

```text
Url: /yonbip/tax/invoiceclient-web/api/invoice-will/changes?access_token=访问令牌  
Body: {
	"beginTime": "",
	"orgCode": "",
	"pageNum": "",
	"pageSize": "",
	"endTime": ""
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
   - 示例/默认值：`SUCCESS`
   - 说明：Operation Information

3. `data`
   - 类型：object
   - 数组：否
   - 必填：否
   - 说明：Return Content

4. `data.invoiceWillChangeList`
   - 类型：object
   - 数组：是
   - 必填：否
   - 说明：Return data

5. `data.invoiceWillChangeList.djqqlsh`
   - 类型：string
   - 数组：否
   - 必填：否
   - 示例/默认值：`12112122`
   - 说明：Document Request Serial Number

6. `data.invoiceWillChangeList.orgCode`
   - 类型：string
   - 数组：否
   - 必填：否
   - 示例/默认值：`1212121`
   - 说明：Invoicing Site Code

7. `data.totalCount`
   - 类型：string
   - 数组：否
   - 必填：否
   - 示例/默认值：`10`
   - 说明：Total Count: Total number of records for the query changes.

## 返回示例

### 成功示例

无。

### 失败示例

无。

## 错误码

| 错误码 | 错误说明 | 处理建议 |
| --- | --- | --- |
| 9999 |  |  |


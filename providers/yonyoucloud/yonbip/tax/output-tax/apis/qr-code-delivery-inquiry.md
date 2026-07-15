# QR Code Delivery Inquiry

来源页面：

- https://open.yonyoucloud.com/#/doc-center/docDes/api?apiId=2117764853893955589&isOrigin=1&selectApiTab=open&from=&iframe=

机器可抓取的详情接口：

- https://open.yonyoucloud.com/iuap-ipaas-base/openPortal/api/getByVersionForTest/2117764853893955589/running?scene=open&isOrigin=1&isAjax=1

## 基本信息

- apiId：2117764853893955589
- API 类目：已开票
- 所属目录：销项企业票夹（Outbound Enterprise Invoice Folder）
- 产品：税务服务
- 更新时间：2025-07-01 17:08:04.000
- 请求方法：POST
- Content-Type：application/json
- 接口路径：/yonbip/tax/yonbip-fi-taxot/api/invoice-his/qrcode
- 完整调用地址：https://c2.yonyoucloud.com/iuap-api-gateway/yonbip/tax/yonbip-fi-taxot/api/invoice-his/qrcode
- 鉴权方式：access_token 作为 Query 参数传递（?access_token=）
- 当前状态：当前接口
- 请求字段数：Query 0 个，Body 4 个
- 返回字段数：3 个

## 对接要点

- 调用 URL：`https://c2.yonyoucloud.com/iuap-api-gateway/yonbip/tax/yonbip-fi-taxot/api/invoice-his/qrcode?access_token={access_token}`
- 调用方必须保存业务来源单号、发票请求流水号、请求报文、响应报文和状态查询结果，便于重试和对账。
- 开票、红冲、作废、驱动开票等写操作建议用业务唯一号做幂等控制；同一业务单不要生成多个不同流水号反复提交。
- 返回成功只代表接口调用成功，不一定代表税局或开票终态成功；涉及开票结果时必须再调用状态查询类接口确认。
- 详情接口返回字段说明可能为英文，字段名以开放平台原始字段为准。

## 调用模板

```bash
curl -X POST 'https://c2.yonyoucloud.com/iuap-api-gateway/yonbip/tax/yonbip-fi-taxot/api/invoice-his/qrcode?access_token=访问令牌' \
  -H 'Content-Type: application/json' \
  -d '{"data": {}}'
```

## 请求参数

### Query 参数

无。

> 注：开放平台网关调用时通常还需传递 `access_token`。

### Body 参数

1. `data`
   - 类型：object
   - 数组：否
   - 必填：是
   - 说明：Data body

2. `data.fpqqlsh`
   - 类型：string
   - 数组：否
   - 必填：否
   - 示例/默认值：`123456`
   - 说明：Invoice request serial number

3. `data.fpHm`
   - 类型：string
   - 数组：否
   - 必填：否
   - 示例/默认值：`123456`
   - 说明：Invoice number. If there is an invoice request serial number, it will be queried through the invoice request
     serial number, and the invoice number does not need to be filled in. If there is no invoice request serial
     number, the invoice number is required.

4. `data.fpDm`
   - 类型：string
   - 数组：否
   - 必填：否
   - 示例/默认值：`123456`
   - 说明：Invoice Code

## 请求示例

```text
Url: /yonbip/tax/yonbip-fi-taxot/api/invoice-his/qrcode?access_token=访问令牌  
Body: {
    "data": {
        "fpHm": "123456",
        "fpDm": "123456"
    }
}
```

## 返回参数

### 返回字段

1. `code`
   - 类型：string
   - 数组：否
   - 必填：否
   - 示例/默认值：`0000`
   - 说明：Response Code

2. `msg`
   - 类型：string
   - 数组：否
   - 必填：否
   - 示例/默认值：`Operation successful`
   - 说明：Response Information

3. `datas`
   - 类型：string
   - 数组：否
   - 必填：否
   - 示例/默认值：`https://bip-daily.yonyoucloud.com/yonbip-fi-taxweb/ucf-wh/ent-views/fpExtract/share_qr.html?fpqqlsh=xxx&corp=xxx&date=xxx`
   - 说明：Response Data Body

## 返回示例

### 成功示例

无。

### 失败示例

无。

## 错误码

| 错误码 | 错误说明 | 处理建议 |
| --- | --- | --- |
| 1001 |  |  |
| 1002 |  |  |


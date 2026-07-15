# Smart Coding

来源页面：

- https://open.yonyoucloud.com/#/doc-center/docDes/api?apiId=2096344486209650694&isOrigin=1&selectApiTab=open&from=&iframe=

机器可抓取的详情接口：

- https://open.yonyoucloud.com/iuap-ipaas-base/openPortal/api/getByVersionForTest/2096344486209650694/running?scene=open&isOrigin=1&isAjax=1

## 基本信息

- apiId：2096344486209650694
- API 类目：开票申请
- 所属目录：开票（Invoicing）
- 产品：税务服务
- 更新时间：2025-07-01 17:06:49.000
- 请求方法：GET
- Content-Type：application/json
- 接口路径：/yonbip/tax/api/etax/aiMatchSpInfo
- 完整调用地址：https://c2.yonyoucloud.com/iuap-api-gateway/yonbip/tax/api/etax/aiMatchSpInfo
- 鉴权方式：access_token 作为 Query 参数传递（?access_token=）
- 当前状态：当前接口
- 请求字段数：Query 0 个，Body 1 个
- 返回字段数：19 个

## 对接要点

- 调用 URL：`https://c2.yonyoucloud.com/iuap-api-gateway/yonbip/tax/api/etax/aiMatchSpInfo?access_token={access_token}`
- 调用方必须保存业务来源单号、发票请求流水号、请求报文、响应报文和状态查询结果，便于重试和对账。
- 开票、红冲、作废、驱动开票等写操作建议用业务唯一号做幂等控制；同一业务单不要生成多个不同流水号反复提交。
- 返回成功只代表接口调用成功，不一定代表税局或开票终态成功；涉及开票结果时必须再调用状态查询类接口确认。
- 详情接口返回字段说明可能为英文，字段名以开放平台原始字段为准。

## 调用模板

```bash
curl -X GET 'https://c2.yonyoucloud.com/iuap-api-gateway/yonbip/tax/api/etax/aiMatchSpInfo?access_token=访问令牌' \
  -H 'Content-Type: application/json'
```

## 请求参数

### Query 参数

无。

> 注：开放平台网关调用时通常还需传递 `access_token`。

### Body 参数

1. `xmmc`
   - 类型：string
   - 数组：否
   - 必填：是
   - 示例/默认值：`Fruit`
   - 说明：Product Name

## 请求示例

```text
Url: /yonbip/tax/api/etax/aiMatchSpInfo?access_token=访问令牌&xmmc=水果
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
   - 示例/默认值：`Intelligent coding successful`
   - 说明：Operation Information

3. `datas`
   - 类型：object
   - 数组：是
   - 必填：否
   - 说明：Matching Results

4. `datas.slvList`
   - 类型：string
   - 数组：是
   - 必填：否
   - 示例/默认值：`["0.13"]`
   - 说明：Tax Rate Set

5. `datas.spsjbm`
   - 类型：string
   - 数组：否
   - 必填：否
   - 示例/默认值：`1030206000000000000`
   - 说明：Actual Product Code

6. `datas.zzscezsbj`
   - 类型：string
   - 数组：否
   - 必填：否
   - 示例/默认值：`N`
   - 说明：VAT differential taxation mark

7. `datas.spfwjc`
   - 类型：string
   - 数组：否
   - 必填：否
   - 示例/默认值：`Condiments`
   - 说明：Product/Service Abbreviation

8. `datas.qyrq`
   - 类型：string
   - 数组：否
   - 必填：否
   - 示例/默认值：`2019-04-01`
   - 说明：Activation Date

9. `datas.sphfwssflhbbm`
   - 类型：string
   - 数组：否
   - 必填：否
   - 示例/默认值：`1030206030000000000`
   - 说明：Product and Service Tax Classification Combined Code

10. `datas.sfhzx`
   - 类型：string
   - 数组：否
   - 必填：否
   - 示例/默认值：`N`
   - 说明：Is it a summary item?

11. `datas.sfbzsbz`
   - 类型：string
   - 数组：否
   - 必填：否
   - 示例/默认值：`N`
   - 说明：Non-taxable flag

12. `datas.zslList`
   - 类型：string
   - 数组：是
   - 必填：否
   - 示例/默认值：`["0.03"]`
   - 说明：Collection Rate Set

13. `datas.sm`
   - 类型：string
   - 数组：否
   - 必填：否
   - 说明：Description

14. `datas.zt`
   - 类型：string
   - 数组：否
   - 必填：否
   - 示例/默认值：`Y`
   - 说明：Status

15. `datas.zzsslhzzsl`
   - 类型：string
   - 数组：否
   - 必填：否
   - 示例/默认值：`13%`
   - 说明：???

16. `datas.zzstsglList`
   - 类型：string
   - 数组：是
   - 必填：否
   - 示例/默认值：`["Simplified Collection"]`
   - 说明：Special Management Collection of VAT

17. `datas.zsljh`
   - 类型：string
   - 数组：否
   - 必填：否
   - 示例/默认值：`3%`
   - 说明：Collection Rate

18. `datas.hyjh`
   - 类型：string
   - 数组：否
   - 必填：否
   - 示例/默认值：`140603`
   - 说明：???

19. `datas.hwhlwmc`
   - 类型：string
   - 数组：否
   - 必填：否
   - 示例/默认值：`Vinegar and vinegar substitutes`
   - 说明：Name of goods or services

## 返回示例

### 成功示例

无。

### 失败示例

无。

## 错误码

无。


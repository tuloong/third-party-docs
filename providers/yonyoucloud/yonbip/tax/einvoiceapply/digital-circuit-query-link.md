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
| xsfNsrsbh | string | 是 | 销售方纳税人识别号 |
| allElcUserName | string | 是 | 数电发票登录用户名（国密四密文） |
| fplx | string | 是 | 发票类型。33: 数电纸质发票(增值税专用发票)；34: 数电纸质发票(普通发票) |

## 请求示例

```text
Url: /yonbip/tax/api/etaxAuth/zp/lianci?access_token=<ACCESS_TOKEN>&xsfNsrsbh=125453322&allElcUserName=username&fplx=33
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
    "message": "税号、用户、发票类型不能为空"
}
```

## 错误码

| 错误码 | 错误信息 | 说明 |
| --- | --- | --- |
| 1001 | 税号/用户/发票类型不能为空 | 必填参数 xsfNsrsbh、allElcUserName、fplx 未传入 |
| 9007 | Token获取异常 / Token acquisition exception | 数电发票登录凭证获取失败，检查用户名密码 |
| 9999 | 机构尚未审批电子纸质发票 | 请联系主管税务机关申请开通电子纸质发票功能 |


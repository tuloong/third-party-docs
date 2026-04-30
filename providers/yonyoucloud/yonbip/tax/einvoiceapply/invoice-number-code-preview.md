# Invoice Number Code Preview

来源页面：

- https://open.yonyoucloud.com/#/doc-center/docDes/api?apiId=939cf9f08b4a482ab65c0a29d949a7f8&isOrigin=1&selectApiTab=open&from=&iframe=

机器可抓取的详情接口：

- https://open.yonyoucloud.com/iuap-ipaas-base/openPortal/api/getByVersionForTest/939cf9f08b4a482ab65c0a29d949a7f8/running?scene=open&isOrigin=1&isAjax=1

## 基本信息

- apiId：939cf9f08b4a482ab65c0a29d949a7f8
- API 类目：开票申请
- 产品：税务服务
- 更新时间：2025-07-01 17:06:54.000
- 请求方法：POST
- Content-Type：application/json
- 接口路径：/yonbip/tax/invoiceclient-web/api/invoiceApply/preview/hmdm

## 请求参数

### Query 参数

| 名称 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| access_token | string | 是 | 接口令牌 access_token |

### Body 参数

| 字段 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| fplx | string | 是 | 发票类型。1: 增值税电子普通发票；2: 增值税电子专用发票；3: 增值税普通发票；4: 增值税专用发票；5: 机动车销售统一发票；等等 |
| orgCode | string | 是 | 开票点编码（组织编码） |

## 请求示例

```text
Url: /yonbip/tax/invoiceclient-web/api/invoiceApply/preview/hmdm?access_token=<ACCESS_TOKEN>  
Body: {
	"fplx": "发票类型",
	"orgCode": "组织编码"
}
```

## 返回参数

### 返回字段

| 字段 | 类型 | 说明 |
| --- | --- | --- |
| code | string | 返回码。200: 成功；其他: 失败 |
| message | string | 返回消息描述 |
| data.fpHm | string | 预生成的发票号码 |
| data.fpDm | string | 预生成的发票代码 |

### 正确返回

```json
{
    "code": "200",
    "message": "success",
    "data": {
        "fpHm": "03197858",
        "fpDm": "011111111007"
    }
}
```

### 错误返回

```json
{
    "code": "9999",
    "message": "系统发生异常错误，请联系管理员查看日志[requestId:35897cc50c6921c4][yonbip-fi-taxreturn]"
}
```

## 错误码

| 错误码 | 错误信息 | 说明 |
| --- | --- | --- |
| 9999 | 系统异常 / System encountered an unexpected error | 根据返回的错误信息排查，或联系管理员查看日志 |


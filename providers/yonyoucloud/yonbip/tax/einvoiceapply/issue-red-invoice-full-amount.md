# Issue Red Invoice - Full Amount (Original Invoice Red Flush Request)

来源页面：

- https://open.yonyoucloud.com/#/doc-center/docDes/api?apiId=2158112146045009924&isOrigin=1&selectApiTab=open&from=&iframe=

机器可抓取的详情接口：

- https://open.yonyoucloud.com/iuap-ipaas-base/openPortal/api/getByVersionForTest/2158112146045009924/running?scene=open&isOrigin=1&isAjax=1

## 基本信息

- apiId：2158112146045009924
- API 类目：开票申请
- 产品：税务服务
- 更新时间：2025-09-02 15:23:50.000
- 请求方法：POST
- Content-Type：application/json
- 接口路径：/yonbip/tax/invoiceclient-web/api/invoiceApply/red-withjson

## 请求参数

### Query 参数

| 名称 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| access_token | string | 是 | 接口令牌 access_token |

### Body 参数（Top Level）

Body 为 JSON，顶层为 `data`。

| 字段 | 类型 | 数组 | 必填 | 说明 |
| --- | --- | --- | --- | --- |
| data.autoAudit | boolean | 否 | 否 | Automatic review, meaning invoicing is done directly on the invoice platform without manual confirmation. false: No automatic review, manual confirmation is required. If not provided, it defaults to true. |
| data.einvoiceApplyList | object | 是 | 否 | Invoice Request Body |
| data.emailConfigList | object | 是 | 否 | Email Delivery Information |
| data.smsConfigList | object | 是 | 否 | SMS Delivery Information |
| data.urlConfigList | object | 是 | 否 | URL Delivery Information |
| data.auditReturnConfigs | object | 是 | 否 | Return Address Information |

更完整的字段明细在详情接口的 `data.paramDTOS` 中（字段较多，建议自动化解析后按需落库）。

## 请求示例

```text
Url: /yonbip/tax/invoiceclient-web/api/invoiceApply/red-withjson?access_token=<ACCESS_TOKEN>
Body: {
	"data": {
		"einvoiceApplyList": [{
            "FPQQLSH": "发票请求流水号 注意不是蓝字的发票请求流水号，是本次发票红冲的请求流水号 必填",
            "fpHm": "发票号码 必填",
            "fpDm": "发票代码 必填",
            "KPR": "开票人 选填",
            "SKR": "收款人 选填",
            "FHR": "复核人 选填",
            "GMF_MC": " 购买方名称 选填",
            "GMF_DZDH": "购买方地址电话 选填",
            "GMF_YHZH": "购买方银行账号 选填",
            "GMF_NSRSBH": "购买方纳税人识别号 选填",
            "JSHJ": "117 double 价税合计 必填",
            "HJJE": "100 double 合计金额 选填",
            "HJSE": "17 double 合计税额 选填",
            "LYID": "请求来源唯一标识 选填",
            "BMB_BBH": "编码表版本号 选填",
            "ORGCODE": "开票点编码 如果一个税号对应多个开票点，此字段必输，用于确定唯一开票点",
            "SLSM": "税率说明 1：当小规模纳税人开具3%税率时需要填写税率说明；2：前期已开具发票，发生销售折让、中止或者退回等情形需要开具红字发票，或者开票有误需要重新开具； 3：因为实际经营业务需要，放弃享受减按1%征收率征收增值税政策。",
            "HCYY": "红冲原因说明 ：1 销货退回 2 开票有误 3 开票中止 4 销售折让;（数电发票红冲原因必填）",
            "hzxxbbh": "红字信息表编号 专票红冲时必传",
            "ALLELCUSERNAME": "数电发票用户名 如果发票类型是数电发票用户名必填 并且是国密四密文（数电专用字段）",
            "ALLELCPASSWORD": "数电发票密码	如果发票类型是数电发票密码必填 并且是国密四密文（数电专用字段"，
            "define":{
                   "特征key":"特征值示例 选填"
            },
            "items": [{
                "XMMC": "项目名称 必填",
                "XMBM": "项目编码 选填",
                "GGXH": "规格型号 选填",
                "DW": "单位 选填",
                "XMSL": "项目数量 选填",
                "XMDJ": "项目单价 double 选填",
                "XMJE": "项目金额 double 选填",
                "XMJSHJ": "项目价税合计 double 必填",
                "SL": "税率 double 必填",
                "SE": "税额 double 选填",
                "HH": "行号 有折扣时必输",
                "SPBM": "商品编码 必填"，
                "define":{
                    "特征key":"特征值示例 选填"
                }
            }]
        }],
        "autoAudit" : false,
		"emailConfigList": [
			{
                "fpqqlsh":"发票请求流水号和requestdatas保持一致 必填",
                "address": "邮箱地址 必填", 
                "title": "电子发票 选填", 
                "content": "订单XXX电子发票。 选填"
            }
		],
		"smsConfigList": [
			{
				"fpqqlsh":"12345678901234567890 必填",
        		"address": "手机号 必填"
			}
		],
		"urlConfigList": [
			{
				"fpqqlsh":"发票请求流水号和requestdatas保持一致 必填",
        		"url": "请求网址 必填"
			}
		],
		"auditReturnConfigs": [
			{
				"fpqqlsh":"发票请求流水号",
                "url":"www.baidu.com"
			}
		]
	}
}
```

## 返回参数

### 返回字段

| 字段 | 类型 | 说明 |
| --- | --- | --- |
| code | string | 返回码。200/0000: 成功；其他: 失败 |
| message | string | 返回消息描述 |
| data | string/object | 业务数据 |

### 正确返回

```json
{
    "code": "200",
    "message": "success",
    "data": "操作成功"
}
```

### 错误返回

```json
{
    "code": "1001",
    "message": "价税合计必须小于0"
}
```

## 错误码

| 错误码 | 错误信息 | 说明 |
| --- | --- | --- |
| 1001 | 价税合计必须小于0 / The total amount including tax must be less than 0 | 红字发票的价税合计应为负数，请确认金额是否正确 |
| 9999 | 数据保存失败，销售方纳税人识别号不匹配 | 传入的销售方纳税人识别号与税控组织不一致 |


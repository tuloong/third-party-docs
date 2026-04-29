# Issue Red Invoice - Full Amount (Original Invoice Red Cancellation Request) (Deprecated)

来源页面：

- https://open.yonyoucloud.com/#/doc-center/docDes/api?apiId=adaa38b17fa84943becf9fe702bce674&isOrigin=1&selectApiTab=open&from=&iframe=

机器可抓取的详情接口：

- https://open.yonyoucloud.com/iuap-ipaas-base/openPortal/api/getByVersionForTest/adaa38b17fa84943becf9fe702bce674/running?scene=open&isOrigin=1&isAjax=1

## 基本信息

- apiId：adaa38b17fa84943becf9fe702bce674
- API 类目：开票申请
- 产品：税务服务
- 更新时间：2025-07-01 17:07:10.000
- 请求方法：POST
- Content-Type：application/x-www-form-urlencoded
- 接口路径：/yonbip/tax/invoiceclient-web/api/invoiceApply/red

## 请求参数

### Query 参数

| 名称 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| access_token | string | 是 | 接口令牌 access_token |

### Body 参数（Top Level）

Body 为 JSON，顶层为 `data`。

该接口在详情接口中未返回可解析的 Body 顶层字段（可参考页面展示与请求示例）。

更完整的字段明细在详情接口的 `data.paramDTOS` 中（字段较多，建议自动化解析后按需落库）。

## 请求示例

```text
Url: /yonbip/tax/invoiceclient-web/api/invoiceApply/red?access_token=<ACCESS_TOKEN>
requestdatas=[{
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
}]
&email=[
    {
	    "fpqqlsh":"发票请求流水号和requestdatas保持一致 必填",
        "address": "邮箱地址 必填", 
        "title": "电子发票 选填", 
        "content": "订单XXX电子发票。 选填"
    }
]
&sms=[{
	"fpqqlsh":"12345678901234567890 必填",
        "address": "手机号 必填"
    }]
&url=[{
		"fpqqlsh":"发票请求流水号和requestdatas保持一致 必填",
        "url": "请求网址 必填"
    }]
&nc6x-ubl=[{
        "fpqqlsh":"发票请求流水号和requestdatas保持一致 必填",
        "method":"queryUserPermAppPksOrCodes 必填",
        "intf":"nccloud.pubitf.baseapp.apprbac.IAppAndOrgPermQueryPubService 必填"   
}]
&delurl=[{"fpqqlsh":"发票请求流水号","url":"www.baidu.com"}]
&autoAudit="自动审核，即不需要人工在发票平台确认开票，直接进行开票 false:不自动审核，即需要人工确认如果不传，代表true"
```

## 返回示例

### 正确返回

```json
{
	"code": "200",
	"message": "success"
}
```

### 错误返回

```json
{ "code":"9999",
   "message":"数据保存失败，销售方纳税人识别号与税控组织对应的纳税人识别号不匹配!"
}
```

## 错误码

| 错误码 | 错误信息 | 说明 |
| --- | --- | --- |
| 9999 | Unknown error | System error, contact administrator. |
| 1002 | Data does not exist. | The red-invoice does not exist in the tax cloud. |
| 1001 | Data is invalid. Input parameter. | The data input format is not valid and may not be in JSON format. |


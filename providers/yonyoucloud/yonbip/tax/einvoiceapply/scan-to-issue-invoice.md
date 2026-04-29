# Scan to issue invoice

来源页面：

- https://open.yonyoucloud.com/#/doc-center/docDes/api?apiId=59cdcff503064f818bdb722812e8debb&isOrigin=1&selectApiTab=open&from=&iframe=

机器可抓取的详情接口：

- https://open.yonyoucloud.com/iuap-ipaas-base/openPortal/api/getByVersionForTest/59cdcff503064f818bdb722812e8debb/running?scene=open&isOrigin=1&isAjax=1

## 基本信息

- apiId：59cdcff503064f818bdb722812e8debb
- API 类目：开票申请
- 产品：税务服务
- 更新时间：2025-07-01 17:05:45.000
- 请求方法：POST
- Content-Type：application/json
- 接口路径：/yonbip/tax/invoiceclient-web/api/invoiceApply/insertForQRInvoice

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
Url: /yonbip/tax/invoiceclient-web/api/invoiceApply/insertForQRInvoice?access_token=<ACCESS_TOKEN>  
Body: {
	"XSF_NSRSBH": "111222333456333",
	"FPQQLSH": "121213123",
	"JSHJ": 117,
	"BZ": "备注",
	"LYID": "来源id",
	"ORGCODE": "10300002",
	"RQSJ": "2021-11-16",
	"SHMC": "asdasd",
	"EMAIL": "14525522@qq.com",
	"URL": "https://esgs.com/result/qie",
	"GMF_MC": "北京用友",
	"GMF_NSRSBH": "53513115",
	"GMF_DZDH": "海淀用友产业全 666232",
	"GMF_YHZH": "海淀银行 233232",
	"FPLX": "1",
	"KPR": "李四",
	"TDZZSXMBH": "10510304578",
	"TSPZ": "E22",
	"KDSBZ": "N",
	"items": [
		{
			"FPHXZ": 0,
			"XMMC": "（pp瓶）0.9%氯化钠注射液",
			"GGXH": "GG",
			"DW": "单位",
			"XMSL": 1,
			"XMDJ": 100,
			"XMJSHJ": 117,
			"SL": 0.17,
			"HH": "0",
			"ZKHHH": "1",
			"SPBM": "3010504020000000000",
			"XMJE": 100,
			"detailMotor": {
				"JZFWFSD": "XX省XX市XX县XX镇XXXX",
				"JZXMMC": "XX省XX市XX县XX镇XXXX",
				"CQZSBH": "无"
			}
		}
	],
	"tspzs": {
		"JTGJLXDM": "1",
		"YSMXXH": "1",
		"QYD": "XX省XX市XX县XX镇XXXX",
		"DDD": "XX省XX市XX县XX镇XXXX",
		"YSGJZL": "管道运输",
		"YSGJPH": "京A1234567",
		"YSHWMC": "钢材",
		"CXRXH": "1",
		"CXR": "王五",
		"CHUXRQ": "2023-10-25 08:30",
		"CFD": "北京",
		"LKDDD": "上海",
		"ZWDJ": "头等舱"
	}
}
```

## 返回示例

### 正确返回

```json
{
	"code": "200",
	"message": "操作成功",
	"data": {
		"qrcode": "https://tax.diwork.com/mobileinvoice/index.html?fs=sm&lsh=agTuxnQcTRrVEwEqjd72Xg&corp=ry4qcaql&profile=daily-center&tenantId=0000LM68DHTC0MYSQV0000",
		"invoicecode": "123456789567"
	}
}
```

### 错误返回

```json
{
    "code": "9999",
    "message": "数据保存失败，输入的单据发票请求流水号已经存在，请您重新赋值流水号!"
}
```

## 错误码

| 错误码 | 错误信息 | 说明 |
| --- | --- | --- |
| 1001 | Data is invalid, the input parameter is incorrect. | Check incoming parameters |
| 9999 | Unknown error | Troubleshoot and modify according to the corresponding error message. |


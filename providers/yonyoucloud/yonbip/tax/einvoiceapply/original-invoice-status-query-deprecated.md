# Original Invoice Status Query (Deprecated)

来源页面：

- https://open.yonyoucloud.com/#/doc-center/docDes/api?apiId=1cc145c156664c0abac9c26faf0daccd&isOrigin=1&selectApiTab=open&from=&iframe=

机器可抓取的详情接口：

- https://open.yonyoucloud.com/iuap-ipaas-base/openPortal/api/getByVersionForTest/1cc145c156664c0abac9c26faf0daccd/running?scene=open&isOrigin=1&isAjax=1

## 基本信息

- apiId：1cc145c156664c0abac9c26faf0daccd
- API 类目：开票管理
- 产品：税务服务
- 更新时间：2025-09-01 18:03:36.000
- 请求方法：POST
- Content-Type：application/x-www-form-urlencoded
- 接口路径：/yonbip/tax/invoiceclient-web/api/invoiceApply/queryInvoiceStatus

## 请求参数

### Query 参数

| 名称 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| access_token | string | 是 | 接口令牌 access_token |

### Body 参数

| 字段 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| fpqqlsh | string | 是 | 发票请求流水号 |

## 请求示例

```text
Url: /yonbip/tax/invoiceclient-web/api/invoiceApply/queryInvoiceStatus?access_token=<ACCESS_TOKEN>
```

## 返回参数

> 此接口已废弃，请使用 [Invoice Status Inquiry](invoice-status-inquiry.md)

### 返回字段

| 字段 | 类型 | 说明 |
| --- | --- | --- |
| code | string | 返回码。200: 成功 |
| message | string | 返回消息描述 |
| data.fpqqlsh | string | 发票请求流水号 |
| data.statuscode | string | 发票状态码。0: 未开票；1: 待开票；2: 开票中；3: 开票失败；4: 开票成功 |
| data.status | string | 发票状态中文描述 |
| data.errmsg | string | 错误信息/失败原因 |
| data.invoiceDetail | object | 发票详情（开票成功后返回） |

#### data.invoiceDetail 主要字段

| 字段 | 类型 | 说明 |
| --- | --- | --- |
| fpqqlsh | string | 发票请求流水号 |
| fpDm | string | 发票代码 |
| fpHm | string | 发票号码 |
| fplx | string | 发票类型 |
| pdf | string | PDF文件Base64数据 |
| kprq | string | 开票日期，格式 yyyyMMddHHmmss |
| kpr | string | 开票人 |
| skr | string | 收款人 |
| fhr | string | 复核人 |
| jshj | number | 价税合计 |
| hjje | number | 合计金额 |
| hjse | number | 合计税额 |
| bz | string | 备注 |
| xsfNsrsbh | string | 销售方纳税人识别号 |
| xsfMc | string | 销售方名称 |
| gmfNsrsbh | string | 购买方纳税人识别号 |
| gmfMc | string | 购买方名称 |
| zsfs | string | 征收方式 |
| items | array | 发票明细行列表 |
| shareurl | string | 分享URL |
| fileType | string | 文件类型，如 pdf |

### 正确返回

```json
{
	"code": "200",
	"data": {
		"errmsg": "",
		"fpqqlsh": "1520063275914174464",
		"invoiceDetail": {
			"fpqqlsh": "1520063275914174464",
			"pdf": "JVBERi0xLjMKJcTl7gwoMSAwIG9iago8PAovVHlwZSAvUGFnZQovUGFyZW50IDIgMCBSCi9NZWRpYUJveCBbMCAwIDYzMiA3OTJdCi9Db250ZW50cyAzIDAgUgovRW5jb2RpbmcgL1dpbkFuc2lFbmNvZGluZwo+PgplbmRvYmoKMiAwIG9iago8PAovVHlwZSAvUGFnZXMKL0NvdW50IDEKL0tpZHMgWzMgMCBSXQo+PgplbmRvYmoKMyAwIG9",
			"corpid": "mdhpm1a4",
			"data": {
				"accountStatus": "1",
				"aggregate": "true",
				"bmbBbh": "34.0",
				"bred": "N",
				"bz": "N011",
				"code": "1265544111",
				"corpId": "mdhpm1a4",
				"creator": "cordkmkm",
				"creatorName": "李四",
				"email": "1464652552@.com",
				"ewm": "01,10,102897054716,23807539,2263.11,20200513,57644233870940613901,E7F0",
				"fhr": "李四",
				"fpDm": "011111111007",
				"fpHm": "03197858",
				"fpMw": "<-<>48938<4+<14>735+<2554*8-1-<+15<*026+848686/2/3//0>+*>>>356*<757/47>90+<25<<3575**934<+15<*026+848686--57",
				"fpjz": "1",
				"fplx": "3",
				"fpqqlsh": "1520063275914174464",
				"gmfDzdh": "海淀区西北旺 212121",
				"gmfMc": "429查看开差额",
				"gmfNsrsbh": "cd56111331231",
				"gmfYhzh": "北京央行",
				"hjje": 11.89,
				"hjse": 0.11,
				"hzxxbbh": "513266526526",
				"items": [
					{
						"dw": "千克",
						"fphxz": 0,
						"ggxh": "开规1开型2",
						"hh": "2492",
						"kce": 10,
						"lslbs": "1",
						"se": 0.11,
						"sl": 0.06,
						"spbm": "1010101010000000000",
						"xmdj": 11,
						"xmhsdj": 10,
						"xmje": 11.89,
						"xmjshj": 12,
						"xmmc": "*谷物*开名稻谷",
						"xmsl": 1,
						"yhzcbs": 0,
						"ysxmmc": "开名稻谷",
						"zkhhh": "0",
						"zxbm": "10",
						"zzstsgl": "按3%简易征收"
					}
				],
				"jqbh": "001",
				"jshj": 12,
				"jym": "2123545",
				"kplx": 0,
				"kpr": "玲娜贝儿",
				"kprq": "20220429233242",
				"lyid": "nh12135431",
				"lylx": "1",
				"orgId": 100006545,
				"orgName": "用友开票",
				"projectCode": "202",
				"projectId": "1",
				"projectName": "谷物",
				"qdbz": "0",
				"sbbz": "失败原因为税控盘没空票",
				"sgbz": "2",
				"skr": "李四",
				"tschbz": "1",
				"tspz": "0",
				"xsfDzdh": "测试地址1 13144445555",
				"xsfMc": "11134444",
				"xsfNsrsbh": "111222333456333",
				"xsfYhzh": "测试银行 978667866868",
				"yfpDm": "113134",
				"yfpHm": "42542453",
				"zdrq": "2022-04-29 00:00:00",
				"zdybz": "备注一些事项",
				"zfbz": "N",
				"zsfs": "2"
			},
			"sharecode": "f9d49a308143693bb2e7e8b2adaceffd",
			"shareurl": "https://dowrk2/fiel/323131.pdf",
			"fileType": "pdf"
		},
		"status": "开票成功",
		"statuscode": "4"
	},
	"message": "操作成功"
}
```

### 错误返回

```json
{

 "code": "1002",

 "message": "数据不存在"

}
```

## 错误码

| 错误码 | 错误信息 | 说明 |
| --- | --- | --- |
| 1002 | 数据不存在 / Data does not exist | 该流水号对应的发票数据在系统中不存在 |


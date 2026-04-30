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

### Body 参数

以下为扫码开票请求体字段，大部分与蓝字发票基础字段一致（大写命名），补充扫码特有字段。

#### 基础字段

| 字段 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| XSF_NSRSBH | string | 是 | 销售方纳税人识别号 |
| FPQQLSH | string | 是 | 发票请求流水号 |
| FPLX | string | 否 | 发票类型，参考蓝字发票 fplx 枚举 |
| JSHJ | number | 是 | 价税合计 |
| HJJE | number | 否 | 合计金额（不含税） |
| HJSE | number | 否 | 合计税额 |
| BZ | string | 否 | 备注 |
| LYID | string | 否 | 来源ID |
| ORGCODE | string | 条件必填 | 开票点编码 |
| RQSJ | string | 否 | 日期，格式 yyyy-MM-dd |
| SHMC | string | 否 | 商户名称 |
| TDZZSXMBH | string | 条件必填 | 土地增值税项目编号（建筑服务/不动产票种） |
| TSPZ | string | 条件必填 | 特殊票种代码 |
| KDSBZ | string | 条件必填 | 是否跨地市标志。Y: 是；N: 否 |

#### 购买方信息

| 字段 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| GMF_MC | string | 是 | 购买方名称 |
| GMF_NSRSBH | string | 否 | 购买方纳税人识别号 |
| GMF_DZDH | string | 否 | 购买方地址、电话 |
| GMF_YHZH | string | 否 | 购买方银行、账号 |

#### 交付配置

| 字段 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| EMAIL | string | 否 | 邮箱地址（邮箱交付） |
| URL | string | 否 | 回调地址URL（URL交付） |

#### 人员信息

| 字段 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| KPR | string | 否 | 开票人 |

#### items[] 明细行

| 字段 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| FPHXZ | number | 否 | 发票行性质。0: 正常行；1: 折扣行；2: 被折扣行 |
| XMMC | string | 是 | 项目名称 |
| GGXH | string | 否 | 规格型号 |
| DW | string | 否 | 单位 |
| XMSL | number | 否 | 项目数量 |
| XMDJ | number | 否 | 项目单价 |
| XMJE | number | 否 | 项目金额 |
| XMJSHJ | number | 是 | 项目价税合计 |
| SL | number | 是 | 税率 |
| HH | string | 条件必填 | 行号，有折扣时必填 |
| ZKHHH | string | 条件必填 | 折扣行行号，有折扣时必填 |
| SPBM | string | 是 | 商品税收分类编码 |
| detailMotor.cqzsbh | string | 否 | 产权证书编号（不动产票种） |
| detailMotor.jzfwfsd | string | 否 | 建筑服务发生地（建筑服务票种） |
| detailMotor.jzxmmc | string | 否 | 建筑项目名称（建筑服务票种） |

#### tspzs（特殊票种运输信息）

| 字段 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| JTGJLXDM | string | 否 | 交通工具类型代码 |
| YSMXXH | string | 否 | 运输明细序号 |
| QYD | string | 否 | 起运地 |
| DDD | string | 否 | 到达地 |
| YSGJZL | string | 否 | 运输工具种类 |
| YSGJPH | string | 否 | 运输工具牌号 |
| YSHWMC | string | 否 | 运输货物名称 |
| CXRXH | string | 否 | 出行人序号 |
| CXR | string | 否 | 出行人 |
| CHUXRQ | string | 否 | 出行日期 |
| CFD | string | 否 | 出发地 |
| LKDDD | string | 否 | 到达地 |
| ZWDJ | string | 否 | 座位等级 |

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

## 返回参数

### 返回字段

| 字段 | 类型 | 说明 |
| --- | --- | --- |
| code | string | 返回码。200/0000: 成功；其他: 失败 |
| message | string | 返回消息描述 |
| data.qrcode | string | 扫码开票二维码URL |
| data.invoicecode | string | 发票代码（预生成） |

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
| 1001 | 参数校验不通过 / Data is invalid | 检查传入参数格式和必填项 |
| 9999 | 数据保存失败 | 发票请求流水号已存在，请重新生成唯一的流水号 |
| 9999 | 未知错误 / Unknown error | 根据返回的错误信息进行排查和处理 |


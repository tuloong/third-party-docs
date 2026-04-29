# Open Blue Invoice - Automatic Split

来源页面：

- https://open.yonyoucloud.com/#/doc-center/docDes/api?apiId=2157981055053201413&isOrigin=1&selectApiTab=open&from=&iframe=

机器可抓取的详情接口：

- https://open.yonyoucloud.com/iuap-ipaas-base/openPortal/api/getByVersionForTest/2157981055053201413/running?scene=open&isOrigin=1&isAjax=1

## 基本信息

- apiId：2157981055053201413
- API 类目：开票申请
- 产品：税务服务
- 更新时间：2026-01-08 15:38:06.000
- 请求方法：POST
- Content-Type：application/json
- 接口路径：/yonbip/tax/invoiceclient-web/api/invoiceApply/insertWithSplitJson

## 请求参数

### Query 参数

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| access_token | string | 是 | 接口令牌 access_token |

### Body 参数

| 字段路径 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| data | object | 是 | 参数体 |
| data.einvoiceApplyList[] | object | 否 | 开票请求体(重要：：此请求体是增值税基础票种的请求体，特殊票种的请求体参考请求示例中的内容) |
| data.einvoiceApplyList[].fpqqlsh | string | 是 | 发票请求流水号 |
| data.einvoiceApplyList[].fplx | string | 否 | 发票类型：1：增值税电子普通发票；2：增值税电子专用发票；3：增值税普通发票；4：增值税专用发票 ；5：机动车销售统一发票；8：增值税电子普通发票（成品油）；10：成品油普通发票；11：成品油专用发票；15：二手车销售统一发票；31：数电专用发票；32：数电普通发票；33：数电纸质发票(增值税专用发票)；34：数电纸质发票(普通发票)；选填  默认为1 |
| data.einvoiceApplyList[].xsfNsrsbh | string | 是 | 销售方纳税人识别号 |
| data.einvoiceApplyList[].xsfMc | string | 否 | 销售方名称 |
| data.einvoiceApplyList[].gmfDzdh | string | 否 | 购买方地址电话 |
| data.einvoiceApplyList[].gmfYhzh | string | 否 | 购买方银行账号 |
| data.einvoiceApplyList[].kpr | string | 否 | 开票人 |
| data.einvoiceApplyList[].skr | string | 否 | 收款人 |
| data.einvoiceApplyList[].fhr | string | 否 | 复核人 |
| data.einvoiceApplyList[].jshj | string | 否 | 价税合计 |
| data.einvoiceApplyList[].hjje | string | 否 | 合计金额 |
| data.einvoiceApplyList[].hjse | string | 否 | 合计税额 |
| data.einvoiceApplyList[].bz | string | 否 | 备注 |
| data.einvoiceApplyList[].bmbBbh | string | 否 | 商品编码表版本 |
| data.einvoiceApplyList[].orgcode | string | 否 | 开票点编码 当销售方纳税人识别号只有一个开票点时可不填，有多个时必填 |
| data.einvoiceApplyList[].wxorderid | string | 否 | 微信订单号 |
| data.einvoiceApplyList[].wxappid | string | 否 | 微信商户appid |
| data.einvoiceApplyList[].wxauthid | string | 否 | 微信批量插入 |
| data.einvoiceApplyList[].zdybz | string | 否 | 自定义备注 |
| data.einvoiceApplyList[].define | object | 否 | 自定义特征项 |
| data.einvoiceApplyList[].xsfDz | string | 否 | 销售方地址 |
| data.einvoiceApplyList[].xsfDh | string | 否 | 销售方电话 |
| data.einvoiceApplyList[].xsfYh | string | 否 | 销售方银行 |
| data.einvoiceApplyList[].xsfZh | string | 否 | 销售方账号 |
| data.einvoiceApplyList[].gmfNsrsbh | string | 否 | 购买方纳税人识别号 |
| data.einvoiceApplyList[].gmfDz | string | 否 | 购买方地址 |
| data.einvoiceApplyList[].gmfDh | string | 否 | 购买方电话 |
| data.einvoiceApplyList[].gmfYh | string | 否 | 购买方银行 |
| data.einvoiceApplyList[].gmfZh | string | 否 | 购买方账号 |
| data.einvoiceApplyList[].gmfMc | string | 否 | 购买方名称 |
| data.einvoiceApplyList[].lyid | string | 是 | 请求方唯一识别号 |
| data.einvoiceApplyList[].lydjh | string | 否 | 来源单据号 |
| data.einvoiceApplyList[].lylx | string | 否 | 来源类型 |
| data.einvoiceApplyList[].cepzs | object | 否 | 差额征税-差额开票的凭证信息列表 |
| data.einvoiceApplyList[].cepzs.xh | string | 否 | 序号 |
| data.einvoiceApplyList[].cepzs.pzlx | string | 否 | 10-专用发票、11-普通发票、12-海关进口增值税专用缴款书、13-航空运输电子客票行程单、14-铁路电子客票、15-税收完税证明（契税）、16-中央非税收入统一票据（土地出让金）、05-财政票据、06-法院裁决书、09-其他扣除凭证； 原凭证类型：01-数电票、02-增值税专用发票、03-增值税普通发票、04-营业税发票、07-契税完税凭证、08-其他发票类，税局已经在20251230作废不再使用。 |
| data.einvoiceApplyList[].cepzs.fphm | string | 否 | 数电发票号码，当凭证类型为10-专用发票”、11-普通发票且为数电发票时，数电发票号码必填。当凭证类型为13-航空运输电子客票行程单、14-铁路电子客票时，数电发票号码必填。 |
| data.einvoiceApplyList[].cepzs.fpdm | string | 否 | 发票代码，当凭证类型为10-专用发票”、11-普通发票且为税控发票时，发票代码必填；当凭证类型为16-中央非税收入统一票据（土地出让金）时，发票代码必填。 |
| data.einvoiceApplyList[].cepzs.zzfphm | string | 否 | 发票号码，当凭证类型为10-专用发票”、11-普通发票且为税控发票时，发票号码必填。 |
| data.einvoiceApplyList[].cepzs.pzhm | string | 否 | 凭证号码，当凭证类型为 12-海关进口增值税专用缴款书、15-税收完税证明（契税）、16-中央非税收入统一票据（土地出让金）、05-财政票据、06-法院裁决书时，凭证号码必填。 |
| data.einvoiceApplyList[].cepzs.kjrq | string | 否 | 开具日期，当凭证类型为10-专用发票、11-普通发票、13-航空运输电子客票行程单、14-铁路电子客票时必填。格式要求示例：2025-12-23 |
| data.einvoiceApplyList[].cepzs.hjje | string | 否 | 合计金额 |
| data.einvoiceApplyList[].cepzs.kce | string | 否 | 扣除额 |
| data.einvoiceApplyList[].cepzs.bz | string | 否 | 凭证备注，当凭证类型为09-其他扣除凭证时，凭证备注可填写：劳务派遣员工工资、福利、为其办理社会保险及住房公积金。当开票方税号为乐企通道且凭证类型为“其他扣除凭证”时，备注必填。 |
| data.einvoiceApplyList[].cepzs.ly | string | 否 | 录入方式，取值范围如下：手工录入 勾选录入 模板录入 |
| data.einvoiceApplyList[].cepzs.bckcje | number | 否 | 本次扣除金额 |
| data.einvoiceApplyList[].cepzs.pzhjje | number | 否 | 凭证合计金额 |
| data.einvoiceApplyList[].tspzs | object | 否 | 特殊票种 |
| data.einvoiceApplyList[].tspzs.ysmxxh | string | 否 | 运输明细序号 |
| data.einvoiceApplyList[].tspzs.ysgjzl | string | 否 | 运输工具种类 |
| data.einvoiceApplyList[].tspzs.ysgjph | string | 否 | 运输工具牌号 |
| data.einvoiceApplyList[].tspzs.qyd | string | 否 | 起运地 |
| data.einvoiceApplyList[].tspzs.ddd | string | 否 | 到达地 |
| data.einvoiceApplyList[].tspzs.yshwmc | string | 否 | 运输货物名称 |
| data.einvoiceApplyList[].tspzs.cxrxh | string | 否 | 出行人序号 |
| data.einvoiceApplyList[].tspzs.cxr | string | 否 | 出行人 |
| data.einvoiceApplyList[].tspzs.chuxrq | string | 否 | 出行日期 |
| data.einvoiceApplyList[].tspzs.cxrzjlxDm | string | 否 | 出行人证件类型代码 |
| data.einvoiceApplyList[].tspzs.sfzjhm | string | 否 | 身份证件号码 |
| data.einvoiceApplyList[].tspzs.cfd | string | 否 | 出发地 |
| data.einvoiceApplyList[].tspzs.lkddd | string | 否 | 到达地 |
| data.einvoiceApplyList[].tspzs.zwdj | string | 否 | 座位等级若交通工具为火车、飞机、船舶，则该要素为必填，其他选项选填； ---交通工具为火车：一等座、二等座、软席（软座、软卧）、硬席（硬座、硬卧）  ---交通工作为飞机： 经济舱、头等舱、公务舱 ---交通工具为船舶： 一等舱、二等舱 、三等舱 |
| data.einvoiceApplyList[].tspzs.jtgjlxDm | string | 否 | 交通工具类型代码（1：飞机 2：火车 3：长途汽车 4：公共交通 5：出租车 6：汽车 7：船舶 9：其他） |
| data.einvoiceApplyList[].items[] | object | 否 | 待开票明细 |
| data.einvoiceApplyList[].items[].fphxz | string | 否 | 发票行性质 0正常行 1折扣行 2被折扣行 |
| data.einvoiceApplyList[].items[].xmmc | string | 是 | 项目名称 |
| data.einvoiceApplyList[].items[].xmbm | string | 否 | 项目编码 如果项目名称为空，会根据项目编码匹配云平台的商品档案 |
| data.einvoiceApplyList[].items[].ggxh | string | 否 | 规格型号 |
| data.einvoiceApplyList[].items[].dw | string | 否 | 单位 |
| data.einvoiceApplyList[].items[].xmsl | string | 否 | 项目数量 |
| data.einvoiceApplyList[].items[].xmhsdj | string | 否 | 项目含税单价 |
| data.einvoiceApplyList[].items[].xmdj | string | 否 | 项目单价 |
| data.einvoiceApplyList[].items[].xmje | string | 否 | 项目金额 |
| data.einvoiceApplyList[].items[].xmjshj | string | 否 | 项目价税合计 |
| data.einvoiceApplyList[].items[].sl | string | 否 | 税率 |
| data.einvoiceApplyList[].items[].se | string | 否 | 税额 |
| data.einvoiceApplyList[].items[].hh | string | 否 | 行号 选填 有折扣时必输 |
| data.einvoiceApplyList[].items[].zkhhh | string | 否 | 折扣行行号 选填：有折扣时必输 |
| data.einvoiceApplyList[].items[].spbm | string | 否 | 商品的税收分类编码 |
| data.einvoiceApplyList[].items[].zxbm | string | 否 | 自行编码 |
| data.einvoiceApplyList[].items[].yhzcbs | string | 否 | 销售优惠标识：0：不使用，1：使用 |
| data.einvoiceApplyList[].items[].lslbs | string | 否 | 税率标识 ：空：非零利率，0：出口退税，1：免税，2：不征收，3普通零税率 |
| data.einvoiceApplyList[].items[].zzstsgl | string | 否 | 增值税特殊管理 |
| data.einvoiceApplyList[].items[].kce | string | 否 | 扣除额 |
| data.einvoiceApplyList[].items[].define | object | 否 | 特征值 |
| data.einvoiceApplyList[].items[].detailMotor | object | 否 | 明细标识 |
| data.einvoiceApplyList[].items[].detailMotor.cqzsbh | string | 否 | 产权证书/不动产权证号 |
| data.einvoiceApplyList[].items[].detailMotor.jzfwfsd | string | 否 | 建筑服务发生地 |
| data.einvoiceApplyList[].items[].detailMotor.jzxmmc | string | 否 | 建筑项目名称 |
| data.email | object | 否 | 邮箱交付信息 |
| data.email.fpqqlsh | string | 否 | 发票请求流水号和上方einvoiceApplyList中的保持一致 |
| data.email.address | string | 否 | 邮箱地址 |
| data.sms | object | 否 | 短信交付信息 |
| data.sms.fpqqlsh | string | 否 | 发票请求流水号和上方einvoiceApplyList中的保持一致 |
| data.sms.address | string | 否 | 手机号 |
| data.url | object | 否 | url交付信息 |
| data.url.fpqqlsh | string | 否 | 发票请求流水号和上方einvoiceApplyList中的保持一致 |
| data.url.url | string | 否 | 回调地址 |
| data.delurl | object | 否 | 退回地址信息 |
| data.delurl.fpqqlsh | string | 否 | 发票请求流水号和上方einvoiceApplyList中的保持一致 |
| data.delurl.url | string | 否 | 退回地址 |
| data.autoAudit | boolean | 否 | 自动审核，即不需要人工在发票平台确认开票，直接进行开票 false:不自动审核，即需要人工确认如果不传，代表true |

## 请求示例

```text
Url: /yonbip/tax/invoiceclient-web/api/invoiceApply/insertWithSplitJson?access_token=<ACCESS_TOKEN>
Body: {
	"data": {
		"einvoiceApplyList": [ {
	"FPQQLSH" : "发票请求流水号  必填",
    "FPLX" : "发票类型：1：增值税电子普通发票；2：增值税电子专用发票；3：增值税普通发票；4：增值税专用发票 ；5：机动车销售统一发票；8：增值税电子普通发票（成品油）；10：成品油普通发票；11：成品油专用发票；15：二手车销售统一发票；31：数电专用发票；32：数电普通发票；33：数电纸质发票(增值税专用发票)；34：数电纸质发票(普通发票)；选填  默认为1",
	"XSF_NSRSBH" : "销售方纳税人识别号 必填",
	"XSF_MC" : "销售方名称 选填",
	"XSF_DZDH" : "销售方地址、电话 选填",
	"XSF_YHZH" : "销售方银行、账号 选填",
	"GMF_NSRSBH" : "购买方纳税人识别号 选填",
	"GMF_MC" : "购买方名称 必填",
	"GMF_DZDH" : "购买方地址、电话 选填",
	"GMF_YHZH" : "购买方银行、账号 选填",
	"KPR" : "开票人 选填",
	"SKR" : "收款人 选填",
	"FHR" : "复核人 选填",
	"JSHJ" : "价税合计 必填",
	"HJJE" : "合计金额 选填",
	"HJSE" : "合计税额  选填",
	"BZ" : "备注 选填",
	"BMB_BBH" : "编码版本号 选填",
       "ORGCODE" : "开票点编码 当销售方纳税人识别号只有一个开票点时可不填，有多个时必填",
        "WXORDERID" :"微信订单号 选填",
        "WXAPPID": "微信商户id 选填",
       "WXAUTHID" : "微信批量插入 选填",
       "ZDYBZ":"自定义备注",
		"define":{
           "特征key":"特征值示例 选填"
    },
	"items" : [{
            "FPHXZ" : "发票行性质 0正常行 1折扣行 2被折扣行 选填",
            "XMMC" : "项目名称 必填",
            "XMBM" : "项目编码  如果项目名称为空，会根据项目编码匹配云平台的商品档案",
            "GGXH" : "规格型号 选填（非数电发票规格型号最大长度为40个字符，数电发票长度为150个字符）",
            "DW" : "单位 选填",
            "XMSL" : "项目数量 选填",
            "XMHSDJ":"项目含税单价 选填",
            "XMDJ" : "项目单价 选填",
            "XMJE" : "项目金额 选填",
            "XMJSHJ" : "项目价税合计 必填",
            "SL" : "税率 必填",
            "SE" : "税额 选填",
            "HH":"行号 选填 有折扣时必输",
           "ZKHHH" :"折扣行行号 选填：有折扣时必输"
            "SPBM":"商品的税收分类编码",
            "ZXBM":"自行编码 选填",
            "YHZCBS" : "销售优惠标识：0：不使用，1：使用 选填",
           "LSLBS" :"零税率标识 ：空：非零利率，0：出口退税，1：免税，2：不征收，3普通零税率   选填",
           "ZZSTSGL" : "优惠政策说明  选填",
            "KCE":"扣除额 选填"，
            "define":{
               "特征key":"特征值示例 选填"
        	}
		}
	],
		"email": {
			 "fpqqlsh":"发票请求流水号和上方requestdatas保持一致 必填",
        "address": "邮箱地址 必填"
		},
		"sms": {
			"fpqqlsh":"发票请求流水号和上方requestdatas保持一致 必填",
        "address": "手机号 必填"
		},
		"url": {
			"fpqqlsh":"发票请求流水号和上方requestdatas保持一致 必填",
        "url": "回调地址 必填"
		},
		"delurl": {
			"fpqqlsh":"发票请求流水号和上方requestdatas保持一致 必填",
        "url": "回调地址 必填"
		},
		"autoAudit": true
	}
}
                              
                              
                              
                              特殊发票示例：
数电票特殊票种：不动产经营租赁服务；建筑服务；货物运输服务；不动产销售服务；自产农产品销售；农产品收购；成品油；旅客运输服务；代收车船
1.数电不动产租赁接口报文示例
[{
	"FPQQLSH": "202302171613262049",
	"FPLX": "31",
	"XSF_NSRSBH": "441234567AAAAAA",
	"XSF_MC": "htt灰度01AAAA",
	"TSPZ": "E06",//特殊票种-不动产租赁代码
"BDCDZ": "北京市/北京市辖区/东城区*滨河公园5-4-1803",//不动产租赁地址：省/市/区*详细地址
"ZLQQ": "2023-03-22",//租赁日期起
"ZLQZ": "2023-04-30",//租赁日期止
"KDSBZ": "N",//是否跨地址标志 Y：是；N:否
	"ORGCODE": "htt001",
	"GMF_NSRSBH": "913418025914242188",
	"GMF_MC": "labo1",
	"GMF_DZDH": "",
	"GMF_YHZH": "",
	"KPR": "hett",
	"SKR": "hett",
	"FHR": "hett",
	"JSHJ": 14837.170000000000000,
	"HJJE": 13130.240000000000000,
	"HJSE": 1706.930000000000000,
	"BZ": "",
	"BMB_BBH": "28.0",
	"XSF_DZ": "北京",
	"XSF_DH": "13141422555",
	"XSF_YH": "北京",
	"XSF_ZH": "65456787889",
	"GMF_DZ": "",
	"GMF_DH": null,
	"GMF_YH": "",
	"GMF_ZH": "",
	"define":{
           "apply_mot":"666",
           "apply_bz":"123"
    },
	"items": [{
		"FPHXZ": 0,
		"XMMC": "*经营租赁*小熊",
		"XMBM": "3040502020101000000",
		"GGXH": "",
		"XMJE": 13130.240000000000000,
		"XMJSHJ": 14837.17,
		"SL": 0.13,
		"SE": 1706.930000000000000,
		"HH": 1,
		"SPBM": "3040502020101000000",
		"DW": "公顷",//面积单位，取值为：平方千米、平方米、公顷、亩
		"XMSL": 870.000000000000000,
		"detailMotor": {
			"CQZSBH": "2324423231231231" //产权证书编号
		}
	}]
}]


2.数电建筑服务接口报文示例
[{
	"FPQQLSH": "202302171613262049",
	"FPLX": "31",
	"XSF_NSRSBH": "441234567AAAAAA",
	"XSF_MC": "htt灰度01AAAA",
	"TSPZ": "E03",//特殊票种-建筑服务代码
"TDZZSXMBH": "232342131",//土地增值税项目编号
"KDSBZ": "N",//是否跨地址标志 Y：是；N:否
	"ORGCODE": "htt001",
	"GMF_NSRSBH": "913418025914242188",
	"GMF_MC": "labo1",
	"GMF_DZDH": "",
	"GMF_YHZH": "",
	"KPR": "hett",
	"SKR": "hett",
	"FHR": "hett",
	"JSHJ": 14837.170000000000000,
	"HJJE": 13130.240000000000000,
	"HJSE": 1706.930000000000000,
	"BZ": "",
	"BMB_BBH": "28.0",
	"XSF_DZ": "北京",
	"XSF_DH": "13141422555",
	"XSF_YH": "北京",
	"XSF_ZH": "65456787889",
	"GMF_DZ": "",
	"GMF_DH": null,
	"GMF_YH": "",
	"GMF_ZH": "",
	"items": [{
		"FPHXZ": 0,
		"XMMC": "*经营租赁*小熊",
		"XMBM": "3040502020101000000",
		"GGXH": "",
		"XMJE": 13130.240000000000000,
		"XMJSHJ": 14837.17,
		"SL": 0.13,
		"SE": 1706.930000000000000,
		"HH": 1,
		"SPBM": "3040502020101000000",
		"DW": "公顷",
		"XMSL": 870.000000000000000,
		"detailMotor": {
			"JZFWFSD": "北京市/北京市辖区/东城区",//建筑服务发生地
			"JZXMMC": "地砖"//建筑项目名称
		}
	}]
}]


3.数电货物运输服务接口报文样例
[{
    "FPQQLSH": "202302171613262050",
    "FPLX": "31",
    "XSF_NSRSBH": "44123456789012AAAAAA",
    "XSF_MC": "AAAA广东全电",
    "TSPZ": "E04",
    "ORGCODE": "AAAA03",
    "GMF_NSRSBH": "913418025914242188",
    "GMF_MC": "labo1",
    "GMF_DZDH": "",
    "GMF_YHZH": "",
    "KPR": "hett",
    "SKR": "hett",
    "FHR": "hett",
    "JSHJ": 14837.170000000000000,
    "HJJE": 13130.240000000000000,
    "HJSE": 1706.930000000000000,
    "BZ": "",
    "BMB_BBH": "28.0",
    "XSF_DZ": "北京",
    "XSF_DH": "13141422555",
    "XSF_YH": "北京",
    "XSF_ZH": "65456787889",
    "GMF_DZ": "",
    "GMF_DH": null,
    "GMF_YH": "",
    "GMF_ZH": "",
    "items": [{
        "FPHXZ": 0,
        "XMMC": "*运输服务*国内道路货物运输服务",
        "XMBM": "3010102020100000000",
        "GGXH": "",
        "XMJE": 13130.240000000000000,
        "XMJSHJ": 14837.17,
        "SL": 0.13,
        "SE": 1706.930000000000000,
        "HH": 1,
        "SPBM": "3040502020101000000",
        "DW": "吨",
        "XMSL": 870.000000000000000
    }],
    "tspzs": [{
        "YSMXXH": "1",
        "YSGJZL": "铁路运输",
        "YSGJPH": "G443",
        "QYD": "北京市>北京市辖区>东城区",
        "DDD": "河北省>石家庄市>长安区",
        "YSHWMC": "煤矿"
    }, {
        "YSMXXH": "2",
        "YSGJZL": "铁路运输",
        "YSGJPH": "Z3232",
        "QYD": "河北省>石家庄市>桥西区",
        "DDD": "天津市>天津市辖区>和平区",
        "YSHWMC": "瓷器"
    }]
 }]


4.数电不动产销售接口报文示例
[{
	"FPQQLSH": "202302171613262049",
	"FPLX": "31",
	"XSF_NSRSBH": "441234567AAAAAA",
	"XSF_MC": "htt灰度01AAAA",
	"TSPZ": "E05",//特殊票种-不动产销售代码
"BDCDZ": "北京市/北京市辖区/东城区*滨河公园5-4-1803",//不动产地址：省/市/区*详细地址
"WQHTBABH": "312312312123",//网签合同备案编号
"TDZZSXMBH": "312312312123",//土地增值税项目编号
"BDCDWDM": "312312312123",//不动产单元代码
"HDJSJG": "312312312123",//核定计税价格。不属于核定计税不动产销售的可不填写
"SJCJHSJE": "312312312123",//实际成交含税金额。若按核定计税价格征税的，为必填
"KDSBZ": "N",//是否跨地址标志 Y：是；N:否
	"ORGCODE": "htt001",
	"GMF_NSRSBH": "913418025914242188",
	"GMF_MC": "labo1",
	"GMF_DZDH": "",
	"GMF_YHZH": "",
	"KPR": "hett",
	"SKR": "hett",
	"FHR": "hett",
	"JSHJ": 14837.170000000000000,
	"HJJE": 13130.240000000000000,
	"HJSE": 1706.930000000000000,
	"BZ": "",
	"BMB_BBH": "28.0",
	"XSF_DZ": "北京",
	"XSF_DH": "13141422555",
	"XSF_YH": "北京",
	"XSF_ZH": "65456787889",
	"GMF_DZ": "",
	"GMF_DH": null,
	"GMF_YH": "",
	"GMF_ZH": "",
	"items": [{
		"FPHXZ": 0,
		"XMMC": "*经营租赁*小熊",
		"XMBM": "3040502020101000000",
		"GGXH": "",
		"XMJE": 13130.240000000000000,
		"XMJSHJ": 14837.17,
		"SL": 0.13,
		"SE": 1706.930000000000000,
		"HH": 1,
		"SPBM": "3040502020101000000",
		"DW": "公顷",//面积单位，取值为：平方千米、平方米、公顷、亩
		"XMSL": 870.000000000000000,
		"detailMotor": {
			"CQZSBH": "2324423231231231" //产权证书编号
		}
	}]
}]
5.数电旅客运输接口报文示例
[{
	"FPQQLSH": "202302171613262049",
	"FPLX": "31",
	"XSF_NSRSBH": "441234567AAAAAA",
	"XSF_MC": "htt灰度01AAAA",
	"TSPZ": "E09",//特殊票种-旅客运输服务
	"ORGCODE": "htt001",
	"GMF_NSRSBH": "913418025914242188",
	"GMF_MC": "labo1",
	"GMF_DZDH": "",
	"GMF_YHZH": "",
	"KPR": "hett",
	"SKR": "hett",
	"FHR": "hett",
	"JSHJ": 14837.170000000000000,
	"HJJE": 13130.240000000000000,
	"HJSE": 1706.930000000000000,
	"BZ": "",
	"BMB_BBH": "28.0",
	"XSF_DZ": "北京",
	"XSF_DH": "13141422555",
	"XSF_YH": "北京",
	"XSF_ZH": "65456787889",
	"GMF_DZ": "",
	"GMF_DH": null,
	"GMF_YH": "",
	"GMF_ZH": "",
	"items": [{
		"FPHXZ": 0,
		"XMMC": "*运输服务*国际旅客运输",
		"XMBM": "3040502020101000000",
		"GGXH": "",
		"XMJE": 13130.240000000000000,
		"XMJSHJ": 14837.17,
		"SL": 0.13,
		"SE": 1706.930000000000000,
		"HH": 1,
		"SPBM": "3040502020101000000",
		"DW": "",
		"XMSL": 870.000000000000000
	}],
"tspzs": [{
	 "cxrxh": "1",//出行人序号
	 "cxr": "张三",//出行人
	 "chuxrq": "2022-11-01",//出行日期，格式yyyy-MM-dd
	 "cxrzjlxDm": "101",//出行人证件类型代码
	 "sfzjhm": "1233445",//身份证件号码
	 "cfd": "北京市怀柔区",//出发地
	 "lkddd": "北京市平谷区",//到达地
	 "zwdj": "二等座",//座位等级若交通工具为火车、飞机、船舶，则该要素为必填，其他选项选填；
---交通工具为火车：一等座、二等座、软席（软座、软卧）、硬席（硬座、硬卧） 
---交通工作为飞机： 经济舱、头等舱、公务舱
---交通工具为船舶： 一等舱、二等舱 、三等舱
	 "jtgjlxDm": "2"//交通工具类型代码（1：飞机 2：火车 3：长途汽车 4：公共交通 5：出租车 6：汽车 7：船舶 9：其他）
 }]
}]

出行人证件类型代码枚举：
101：组织机构代码证
102：营业执照
103：税务登记证
199：其他单位证件
201：居民身份证
202：军官证
203：武警警官证
204：士兵证
205：军队离退休干部证
206：残疾人证
207：残疾军人证（1-8级）
208：外国护照
210：港澳居民来往内地通行证
212：中华人民共和国往来港澳通行证
213：台湾居民来往大陆通行证
214：大陆居民往来台湾通行证
215：外国人居留证
216：外交官证
217：使（领事）馆证
218：海员证
219：香港永久性居民身份证
220：台湾身份证
221：澳门特别行政区永久性居民身份证
222：外国人身份证件
224：就业失业登记证
225：退休证
226：离休证
227：中国护照
228：城镇退役士兵自谋职业证
229：随军家属身份证明
230：中国人民解放军军官转业证书
231：中国人民解放军义务兵退出现役证
232：中国人民解放军士官退出现役证
233：外国人永久居留身份证（外国人永久居留证）
234：就业创业证
235：香港特别行政区护照
236：澳门特别行政区护照
237：中华人民共和国港澳居民居住证
238：中华人民共和国台湾居民居住证
239：《中华人民共和国外国人工作许可证》（A类）
240：《中华人民共和国外国人工作许可证》（B类）
241：《中华人民共和国外国人工作许可证》（C类）
291：出生医学证明
299：其他个人证件


6.数电代收车船税发票报文示例
[{
	"FPQQLSH": "202302171613262049",
	"FPLX": "31",
	"XSF_NSRSBH": "441234567AAAAAA",
	"XSF_MC": "htt灰度01AAAA",
	"TSPZ": "E07",//特殊票种-代收车船税代码
"BXDH": "89293943482432",//保险单号
"CPHCBDJH": "豫MUX555",//车牌号/船舶登记号
"SKSSQ": "2023-01 2023-03",//税款所属期yyyy-MM+空格+yyyy-MM
"DSCCSJE": "350000",//代收车船税金额
"ZNJ": "100",//滞纳金
"JEHJ": "350100",//金额合计
"CJH": "233134133384938",//车辆识别代码/车架号码
	"ORGCODE": "htt001",
	"GMF_NSRSBH": "913418025914242188",
	"GMF_MC": "labo1",
	"GMF_DZDH": "",
	"GMF_YHZH": "",
	"KPR": "hett",
	"SKR": "hett",
	"FHR": "hett",
	"JSHJ": 14837.170000000000000,
	"HJJE": 13130.240000000000000,
	"HJSE": 1706.930000000000000,
	"BZ": "",
	"BMB_BBH": "28.0",
	"XSF_DZ": "北京",
	"XSF_DH": "13141422555",
	"XSF_YH": "北京",
	"XSF_ZH": "65456787889",
	"GMF_DZ": "",
	"GMF_DH": null,
	"GMF_YH": "",
	"GMF_ZH": "",
	"items": [{
		"FPHXZ": 0,
		"XMMC": "*代收车船*宝马X6",
		"XMBM": "3040502020101000000",
		"GGXH": "",
		"XMJE": 13130.240000000000000,
		"XMJSHJ": 14837.17,
		"SL": 0.13,
		"SE": 1706.930000000000000,
		"HH": 1,
		"SPBM": "3040502020101000000",
		"DW": "辆",
		"XMSL": 870.000000000000000
	}]
}]
7.数电差额征收-差额开票报文示例
[{
    "FPQQLSH": "202302171613262050",
    "FPLX": "31",
    "XSF_NSRSBH": "44123456789012AAAAAA",
    "XSF_MC": "AAAA广东全电",
    "ZSFS": "2",//征收方式：差额征收-差额开票
    "ORGCODE": "AAAA03",
    "GMF_NSRSBH": "913418025914242188",
    "GMF_MC": "labo1",
    "GMF_DZDH": "",
    "GMF_YHZH": "",
    "KPR": "hett",
    "SKR": "hett",
    "FHR": "hett",
    "JSHJ": 14837.170000000000000,
    "HJJE": 13130.240000000000000,
    "HJSE": 1706.930000000000000,
    "BZ": "",
    "BMB_BBH": "28.0",
    "XSF_DZ": "北京",
    "XSF_DH": "13141422555",
    "XSF_YH": "北京",
    "XSF_ZH": "65456787889",
    "GMF_DZ": "",
    "GMF_DH": null,
    "GMF_YH": "",
    "GMF_ZH": "",
    "items": [{
        "FPHXZ": 0,
        "XMMC": "*运输服务*国内道路货物运输服务",
        "XMBM": "3010102020100000000",
        "GGXH": "",
        "XMJE": 13130.240000000000000,
        "XMJSHJ": 14837.17,
        "SL": 0.13,
        "SE": 1706.930000000000000,
        "HH": 1,
        "SPBM": "3040502020101000000",
        "DW": "吨",
        "XMSL": 870.000000000000000,
"KCE": 100.00//扣除总额
    }],
"cepzs": [{
        "XH": 1,//序号
      	"PZLX": "01",//凭证类型，01 数电票、02 增值税专用发票、03 增值税普通发票、04 营业税发票、05 财政票据、06 法院裁决书、07 契税完税凭证、08 其他发票类、09 其他扣除凭证
"FPHM": "23442000000000000293",//全电发票号码
      	"FPDM": "",//非全电发票代码
      	 "ZZFPHM": "",//非全电发票号码
      	"PZHM": "",//凭证号码
     	"KJRQ": "2023-01-04",//开票日期，格式形如：yyyy-MM-dd
     	"HJJE": 1000.00,//合计金额
     	"KCE": 100.00,//扣除额
      	"BZ": "",//备注
      	"LY": "手工录入",//录入方式，取值范围如下：手工录入 勾选录入 模板录入
      	"BCKCJE": 100.00,//本次扣除金额
      	"PZHJJE": 1000.00//凭证合计金额
	}]
 }]

8.数电差额征收-全额开票报文示例
[{
    "FPQQLSH": "202302171613262050",
    "FPLX": "31",
    "XSF_NSRSBH": "44123456789012AAAAAA",
    "XSF_MC": "AAAA广东全电",
    "ZSFS": "3",//征收方式：差额征收-全额开票
    "ORGCODE": "AAAA03",
    "GMF_NSRSBH": "913418025914242188",
    "GMF_MC": "labo1",
    "GMF_DZDH": "",
    "GMF_YHZH": "",
    "KPR": "hett",
    "SKR": "hett",
    "FHR": "hett",
    "JSHJ": 14837.170000000000000,
    "HJJE": 13130.240000000000000,
    "HJSE": 1706.930000000000000,
    "BZ": "",
    "BMB_BBH": "28.0",
    "XSF_DZ": "北京",
    "XSF_DH": "13141422555",
    "XSF_YH": "北京",
    "XSF_ZH": "65456787889",
    "GMF_DZ": "",
    "GMF_DH": null,
    "GMF_YH": "",
    "GMF_ZH": "",
    "items": [{
        "FPHXZ": 0,
        "XMMC": "*运输服务*国内道路货物运输服务",
        "XMBM": "3010102020100000000",
        "GGXH": "",
        "XMJE": 13130.240000000000000,
        "XMJSHJ": 14837.17,
        "SL": 0.13,
        "SE": 1706.930000000000000,
        "HH": 1,
        "SPBM": "3040502020101000000",
        "DW": "吨",
        "XMSL": 870.000000000000000,
"KCE": 0//扣除总额
}]
 }]
```

## 返回参数说明

| 字段路径 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| code | string | 否 | 返回值编码 |
| datas | string | 否 | 响应信息 |
| message | string | 否 | 信息说明 |

## 返回示例

### 正确返回

```json
{
	"code": "200",
	"datas": "操作成功",
	"message": "success"
}
```

### 错误返回

```json
{
	"code": "9999",
	"message": "数据不合法"
}
```

## 错误码

| 错误码 | 错误信息 | 说明 |
| --- | --- | --- |
| 1002 | Data does not exist. | Data does not exist. |
| 9999 | Data is not valid. | The return error code contains multiple messages. For example: The taxpayer with the identification number 111222333456333 has not enabled VAT electronic normal invoices, and this function is currently unavailable. |


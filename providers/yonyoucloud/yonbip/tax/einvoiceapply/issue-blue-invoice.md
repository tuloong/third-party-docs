# Issue Blue Invoice

来源页面：

- https://open.yonyoucloud.com/#/doc-center/docDes/api?apiId=2150785412886953993&isOrigin=1&selectApiTab=open&from=&iframe=

机器可抓取的详情接口：

- https://open.yonyoucloud.com/iuap-ipaas-base/openPortal/api/getByVersionForTest/2150785412886953993/running?scene=open&isOrigin=1&isAjax=1

## 基本信息

- apiId：2150785412886953993
- API 类目：开票申请
- 产品：税务服务
- 更新时间：2026-01-08 15:34:18.000
- 请求方法：POST
- Content-Type：application/json
- 接口路径：/yonbip/tax/invoiceclient-web/api/invoiceApply/insertWithJsonArray
- 完整调用地址：https://c2.yonyoucloud.com/iuap-api-gateway/yonbip/tax/invoiceclient-web/api/invoiceApply/insertWithJsonArray
- 鉴权方式：access_token 作为 Query 参数传递（?access_token=）

## 请求参数

### Query 参数

| 名称 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| access_token | string | 是 | 接口令牌 access_token |

### Body 参数

Body 为 JSON，顶层为 `data`。

#### 顶层字段

| 字段 | 类型 | 数组 | 必填 | 说明 |
| --- | --- | --- | --- | --- |
| data.einvoiceApplyList | object | 是 | 否 | 开票请求体列表 |
| data.emailConfigList | object | 是 | 否 | 邮箱交付信息列表 |
| data.smsConfigList | object | 是 | 否 | 短信交付信息列表 |
| data.urlConfigList | object | 是 | 否 | URL交付信息列表 |
| data.auditReturnConfigs | object | 是 | 否 | 退回地址信息列表 |
| data.autoAudit | boolean | 否 | 否 | 是否自动审核。true: 自动审核直接开票；false: 需人工确认。不传默认 true |

#### data.einvoiceApplyList[] 基础字段

以下为增值税基础票种通用字段，特殊票种（建筑服务、货物运输、不动产销售/租赁、旅客运输、代收车船税、成品油等）还需按票种补充 `tspz` 及相关专用字段。

| 字段 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| orgcode | string | 条件必填 | 开票点编码。当同一税号有多个开票点时必填，用于确定唯一开票点 |
| lyid | string | 是 | 请求来源唯一标识（来源单据主键ID），用于追踪请求 |
| fpqqlsh | string | 是 | 发票请求流水号，由调用方生成，需保证唯一性，唯一标识一张发票 |
| fplx | string | 否 | 发票类型。1: 增值税电子普通发票；2: 增值税电子专用发票；3: 增值税普通发票；4: 增值税专用发票；5: 机动车销售统一发票；8: 增值税电子普通发票(成品油)；10: 成品油普通发票；11: 成品油专用发票；15: 二手车销售统一发票；31: 数电专用发票；32: 数电普通发票；33: 数电纸质发票(增值税专用发票)；34: 数电纸质发票(普通发票)。默认为 1 |
| sdLc | string | 否 | 数电纸质发票联次信息。04: 2016版增值税普通发票(二联)；05: 2016版增值税普通发票(五联)；000008101500: 2008版增值税普通发票(五联无限制)；1130: 增值税专用发票(中文三联无限制) |
| tspz | string | 条件必填 | 特殊票种代码。0: 一般；2: 成品油增值税专用发票；8: 农产品销售；9: 农产品收购；11: 烟草；12: 机动车发票；14: 成品油发票；DK: 代办发票；16: 矿产品；E01: 成品油；E02: 稀土；E03: 建筑服务；E04: 货物运输服务；E05: 不动产销售；E06: 不动产经营租赁；E07: 代收车船税；E09: 旅客运输服务；E12: 自产农产品销售；E14: 机动车；E16: 农产品收购；E17: 光伏收购；E18: 卷烟；E22: 电子行程单；E32: 电子烟。E 前缀为全电化数电票特殊票种。特殊票种必填 |
| zsfs | string | 否 | 征收方式。0: 普通征收；2: 差额征收-差额开票；3: 差额征收-全额开票 |

#### data.einvoiceApplyList[] 销售方信息

| 字段 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| xsfNsrsbh | string | 是 | 销售方纳税人识别号 |
| xsfMc | string | 否 | 销售方名称 |
| xsfDzdh | string | 否 | 销售方地址、电话（合并字段）。为空则使用开票平台配置信息；电子行程单票种必填 |
| xsfDz | string | 否 | 销售方地址（拆分字段） |
| xsfDh | string | 否 | 销售方电话（拆分字段） |
| xsfYh | string | 否 | 销售方开户银行 |
| xsfZh | string | 否 | 销售方银行账号 |

#### data.einvoiceApplyList[] 购买方信息

| 字段 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| gmfNsrsbh | string | 否 | 购买方纳税人识别号 |
| gmfMc | string | 否 | 购买方名称 |
| gmfDzdh | string | 否 | 购买方地址、电话（合并字段，数电发票非必填） |
| gmfDz | string | 否 | 购买方地址（数电发票拆分字段） |
| gmfDh | string | 否 | 购买方电话（数电发票拆分字段） |
| gmfYhzh | string | 否 | 购买方银行、账号（合并字段，数电发票非必填） |
| gmfYh | string | 否 | 购买方开户银行（数电发票拆分字段） |
| gmfZh | string | 否 | 购买方银行账号（数电发票拆分字段） |

#### data.einvoiceApplyList[] 人员信息

| 字段 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| kpr | string | 否 | 开票人 |
| skr | string | 否 | 收款人 |
| fhr | string | 否 | 复核人 |

#### data.einvoiceApplyList[] 金额信息

| 字段 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| hjje | number | 否 | 合计金额（不含税），最大 15 位整数 + 2 位小数 |
| hjse | number | 否 | 合计税额，最大 15 位整数 + 2 位小数 |
| jshj | number | 是 | 价税合计，最大 15 位整数 + 2 位小数 |
| bz | string | 否 | 备注 |

#### data.einvoiceApplyList[] 扩展/标识字段

| 字段 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| slsm | string | 条件必填 | 税率说明。1: 小规模纳税人开具3%税率时填写；2: 前期已开发票发生销售折让/中止/退回等情形需开红字发票；3: 放弃享受减按1%征收率政策 |
| zdybz | string | 否 | 自定义备注 |
| bmbBbh | string | 否 | 编码表版本号 |
| projectCode | string | 否 | 项目编码 |
| acountOrgCode | string | 否 | 核算组织编码 |
| wbsCode | string | 否 | WBS编码 |
| lydjh | string | 否 | 来源单据号 |
| lylx | string | 否 | 来源类型 |
| zrrbs | string | 否 | 自然人标识。Y: 是 |
| zjlx | string | 否 | 证件类型代码 |
| zjhm | string | 否 | 证件号码 |
| guoji | string | 否 | 国籍代码（如 004: 中国） |
| dfgtgmbz | string | 否 | 多方联合代开标志。Y: 是；N: 否 |
| einvoiceShowGxfYhZh | string | 否 | 是否显示购销方银行账号。0: 均不显示；1: 仅显示销售方；2: 仅显示购买方；3: 均显示 |
| einvoiceShowSkrShr | string | 否 | 是否显示收款人/复核人。0: 均不显示；1: 仅显示收款人；2: 仅显示复核人；3: 均显示 |
| einvoiceShowGxfDzDh | string | 否 | 是否显示购销方地址电话。0: 均不显示；1: 仅显示销售方；2: 仅显示购买方；3: 均显示 |
| sgbz | string | 否 | 认领标志 |
| cpyqylb | string | 否 | 发票领用票量类别（成品油票种专用） |
| gjql | string | 否 | 国际区联 |
| gzwhjhff | string | 否 | 故障维护计划方法 |

#### data.einvoiceApplyList[] 数电发票专用字段

| 字段 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| allElcUserName | string | 条件必填 | 数电发票用户名（国密四密文）。数电发票类型时必填 |
| allElcPassWord | string | 条件必填 | 数电发票密码（国密四密文）。数电发票类型时必填 |

#### data.einvoiceApplyList[] 特殊票种专用字段

| 字段 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| tdzzsxmbh | string | 条件必填 | 土地增值税项目编号（建筑服务、不动产销售票种专用） |
| bdcdz | string | 条件必填 | 不动产地址，格式: 省/市/区*详细地址（不动产租赁/销售票种专用） |
| zlqq | string | 条件必填 | 租赁日期起，格式 yyyy-MM-dd（不动产租赁票种专用） |
| zlqz | string | 条件必填 | 租赁日期止，格式 yyyy-MM-dd（不动产租赁票种专用） |
| kdsbz | string | 条件必填 | 是否跨地市标志。Y: 是；N: 否（建筑服务、不动产票种专用） |
| kqysssxbgglbm | string | 否 | 跨区域涉税事项报验管理编码 |

#### data.einvoiceApplyList[] 机票电子客票专用字段

| 字段 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| mqkfrl | string | 否 | 门票开票人 |
| ticketNumber | string | 否 | 机票号 |
| buyerType | string | 否 | 购买方类型 |
| fareAmount | string | 否 | 票价金额 |
| orderNumber | string | 否 | 订单号 |
| userName | string | 否 | 用户名 |
| gpCode | string | 否 | 机票代码 |
| passengerName | string | 否 | 旅客姓名 |
| passengerIdnum | string | 否 | 旅客身份证号 |
| endorsements | string | 否 | 签注 |
| office | string | 否 | 售票处 |
| issuedBy | string | 否 | 出票方 |
| iata | string | 否 | IATA代码 |
| pnr | string | 否 | PNR编号 |
| ticketInformation | string | 否 | 票面信息 |
| insurance | string | 否 | 保险 |
| electronicTicketType | string | 否 | 电子客票类型 |
| verifyCode | string | 否 | 验证码 |
| overdueFlag | string | 否 | 逾期标志 |

#### data.einvoiceApplyList[] 微信相关字段

| 字段 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| wxorderid | string | 否 | 微信订单号 |
| wxappid | string | 否 | 微信商户ID |
| wxauthid | string | 否 | 微信批量插入标识 |

#### data.einvoiceApplyList[].define（自定义扩展对象）

| 字段 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| <特征key> | string | 否 | 自定义扩展字段，key-value 形式，选填 |

#### data.einvoiceApplyList[].items[] 明细行字段

| 字段 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| hh | string | 条件必填 | 行号。有折扣行时必填 |
| zkhhh | string | 条件必填 | 折扣行行号。有折扣行时必填，关联被折扣行的行号 |
| fphxz | string | 否 | 发票行性质。0: 正常行；1: 折扣行；2: 被折扣行 |
| xmmc | string | 是 | 项目名称 |
| xmbm | string | 否 | 项目编码。若项目名称为空，将根据项目编码匹配云平台商品档案 |
| spbm | string | 是 | 商品税收分类编码 |
| ggxh | string | 否 | 规格型号。非数电发票最大40字符，数电发票最大150字符 |
| dw | string | 否 | 单位（计量单位） |
| xmsl | string/number | 否 | 项目数量 |
| xmdj | number | 否 | 项目单价（不含税） |
| xmhsdj | number | 否 | 项目含税单价 |
| xmje | number | 否 | 项目金额（不含税） |
| xmjshj | number | 是 | 项目价税合计 |
| sl | string/number | 是 | 税率，如 0.13 表示 13% |
| se | string/number | 否 | 税额 |
| kce | number | 否 | 扣除额（差额征税时使用） |
| zxbm | string | 否 | 自行编码 |
| yhzcbs | string | 否 | 销售优惠标识。0: 不使用；1: 使用 |
| lslbs | string | 否 | 零税率标识。空: 非零税率；0: 出口退税；1: 免税；2: 不征收；3: 普通零税率 |
| zzstsgl | string | 否 | 优惠政策说明 |

#### data.einvoiceApplyList[].items[].detailMotor（机动车/不动产明细）

| 字段 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| cqzsbh | string | 否 | 产权证书编号（不动产票种专用） |
| jzfwfsd | string | 否 | 建筑服务发生地，格式: 省/市/区（建筑服务票种专用） |
| jzxmmc | string | 否 | 建筑项目名称（建筑服务票种专用） |

#### data.einvoiceApplyList[].items[].define（明细行自定义扩展）

| 字段 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| <特征key> | string | 否 | 自定义扩展字段，key-value 形式，选填 |

#### data.einvoiceApplyList[].tspzs（特殊票种运输信息，货物运输/旅客运输票种专用）

| 字段 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| ysmxxh | string | 是 | 运输明细序号 |
| ysgjzl | string | 否 | 运输工具种类 |
| ysgjph | string | 否 | 运输工具牌号 |
| qyd | string | 否 | 起运地，格式: 省>市>区 |
| ddd | string | 否 | 到达地，格式: 省>市>区 |
| yshwmc | string | 否 | 运输货物名称 |
| cxrxh | string | 否 | 出行人序号（旅客运输专用） |
| cxr | string | 否 | 出行人姓名（旅客运输专用） |
| chuxrq | string | 否 | 出行日期，格式 yyyy-MM-dd（旅客运输专用） |
| cxrzjlxDm | string | 否 | 出行人证件类型代码（旅客运输专用）。详见证件类型枚举表 |
| sfzjhm | string | 否 | 身份证件号码（旅客运输专用） |
| cfd | string | 否 | 出发地（旅客运输专用） |
| lkddd | string | 否 | 到达地（旅客运输专用） |
| zwdj | string | 条件必填 | 座位等级。交通工具为火车: 一等座/二等座/软席(软座、软卧)/硬席(硬座、硬卧)；飞机: 经济舱/头等舱/公务舱；船舶: 一等舱/二等舱/三等舱（旅客运输专用） |
| jtgjlxDm | string | 条件必填 | 交通工具类型代码。1: 飞机；2: 火车；3: 长途汽车；4: 公共交通；5: 出租车；6: 汽车；7: 船舶；9: 其他（旅客运输专用） |

#### data.einvoiceApplyList[].bdcxsTspzs（不动产销售特殊票种信息）

与 tspzs 字段结构相同，用于不动产销售场景。

#### data.einvoiceApplyList[].cepzs（差额征税扣除凭证列表，差额征收方式时专用）

| 字段 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| xh | number | 是 | 序号 |
| pzlx | string | 是 | 凭证类型。10: 增值税专用发票；11: 增值税普通发票；12: 海关进口增值税专用缴款书；13: 航空运输电子客票行程单；14: 铁路电子客票；15: 契税完税凭证；16: 中央非税收入统一票据(土地出让金)；05: 财政票据；06: 法院裁决书；09: 其他扣除凭证。注：旧编码 01-08 已于 2025-12-30 停用 |
| fphm | string | 条件必填 | 全电发票号码（凭证类型为01时填写） |
| fpdm | string | 条件必填 | 非全电发票代码 |
| zzfphm | string | 条件必填 | 非全电发票号码 |
| pzhm | string | 否 | 凭证号码 |
| kjrq | string | 否 | 开票日期，格式 yyyy-MM-dd |
| hjje | number | 否 | 合计金额 |
| kce | number | 否 | 扣除额 |
| bz | string | 否 | 备注 |
| ly | string | 否 | 录入方式。手工录入 / 勾选录入 / 模板录入 |
| bckcje | number | 否 | 本次扣除金额 |
| pzhjje | number | 否 | 凭证合计金额 |

#### data.emailConfigList[]（邮箱交付配置）

| 字段 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| fpqqlsh | string | 是 | 发票请求流水号，需与 einvoiceApplyList 中对应 |
| address | string | 是 | 邮箱地址 |

#### data.smsConfigList[]（短信交付配置）

| 字段 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| fpqqlsh | string | 是 | 发票请求流水号，需与 einvoiceApplyList 中对应 |
| address | string | 是 | 手机号 |

#### data.urlConfigList[]（URL交付配置）

| 字段 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| fpqqlsh | string | 是 | 发票请求流水号，需与 einvoiceApplyList 中对应 |
| url | string | 是 | 回调地址URL |

#### data.auditReturnConfigs[]（审核退回配置）

| 字段 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| fpqqlsh | string | 是 | 发票请求流水号，需与 einvoiceApplyList 中对应 |
| url | string | 是 | 退回通知URL |

> 更多完整字段明细可查阅详情接口 `data.paramDTOS`（字段较多，建议自动化解析后按需落库）。

## 请求示例

```text
Url: /<TENANT_PREFIX>/yonbip/tax/invoiceclient-web/api/invoiceApply/insertWithJsonArray?access_token=<ACCESS_TOKEN>
Body: {
	"data": {
		"einvoiceApplyList": [
			{
				"orgcode": "",
				"lyid": "",
				"fpqqlsh": "",
				"fplx": "",
				"sdLc": "",
				"tspz": "",
				"zsfs": "",
				"xsfNsrsbh": "",
				"xsfMc": "",
				"xsfDzdh": "北京市XX 83869965",
				"xsfDz": "北京市XX",
				"xsfDh": "83869965",
				"xsfYh": "招商银行",
				"xsfZh": "9645555111254",
				"gmfNsrsbh": "",
				"gmfMc": "",
				"gmfDzdh": "",
				"gmfYhzh": "",
				"gmfDz": "北京市XX",
				"gmfDh": "01055587444",
				"gmfYh": "招商银行",
				"gmfZh": "596874512",
				"zrrbs": "Y",
				"zjlx": "101",
				"zjhm": "123123123",
				"guoji": "004",
				"einvoiceShowGxfYhZh": "0",
				"einvoiceShowSkrShr": "0",
				"einvoiceShowGxfDzDh": "0",
				"dfgtgmbz": "Y",
				"kpr": "",
				"skr": "",
				"fhr": "",
				"hjje": 0,
				"hjse": 0,
				"jshj": 0,
				"bz": "",
				"allElcUserName": "<REDACTED>",
				"allElcPassWord": "<REDACTED>",
				"slsm": "",
				"zdybz": "",
				"projectCode": "",
				"acountOrgCode": "",
				"wbsCode": "",
				"lydjh": "",
				"bmbBbh": "",
				"wxorderid": "",
				"wxappid": "",
				"wxauthid": "",
				"sgbz": "",
				"cpyqylb": "",
				"tdzzsxmbh": "",
				"bdcdz": "",
				"zlqq": "",
				"zlqz": "",
				"kdsbz": "",
				"kqysssxbgglbm": "",
				"tspzs": {
					"ysmxxh": "",
					"ysgjzl": "",
					"ysgjph": "",
					"qyd": "",
					"ddd": "",
					"yshwmc": "",
					"cxrxh": "",
					"cxr": "",
					"chuxrq": "",
					"cxrzjlxDm": "",
					"sfzjhm": "",
					"cfd": "",
					"lkddd": "",
					"zwdj": "",
					"jtgjlxDm": ""
				},
				"bdcxsTspzs": {
					"ysmxxh": "",
					"ysgjzl": "",
					"ysgjph": "",
					"qyd": "",
					"ddd": "",
					"yshwmc": "",
					"cxrxh": "",
					"cxr": "",
					"chuxrq": "",
					"cxrzjlxDm": "",
					"sfzjhm": "",
					"cfd": "",
					"lkddd": "",
					"zwdj": "",
					"jtgjlxDm": ""
				},
				"cepzs": {
					"xh": "",
					"pzlx": "",
					"fphm": "",
					"fpdm": "",
					"zzfphm": "",
					"pzhm": "",
					"kjrq": "",
					"hjje": "",
					"kce": "",
					"bz": "",
					"ly": "",
					"bckcje": 0,
					"pzhjje": 0
				},
				"mqkfrl": "",
				"gjql": "",
				"gzwhjhff": "",
				"ticketNumber": "",
				"buyerType": "",
				"fareAmount": "",
				"orderNumber": "",
				"userName": "",
				"gpCode": "",
				"passengerName": "",
				"passengerIdnum": "",
				"endorsements": "",
				"office": "",
				"issuedBy": "",
				"iata": "",
				"pnr": "",
				"ticketInformation": "",
				"insurance": "",
				"electronicTicketType": "",
				"verifyCode": "",
				"overdueFlag": "",
				"lylx": "",
				"define": "{            \"特征key\":\"特征值示例 选填\"     },",
				"items": [
					{
						"hh": "",
						"zkhhh": "",
						"fphxz": "",
						"xmbm": "",
						"xmmc": "",
						"spbm": "",
						"ggxh": "",
						"dw": "",
						"xmsl": "",
						"xmdj": "",
						"xmhsdj": "",
						"xmje": 0,
						"xmjshj": 0,
						"sl": "",
						"se": "",
						"kce": "",
						"zxbm": "",
						"yhzcbs": "",
						"lslbs": "",
						"zzstsgl": "",
						"detailMotor": {
							"cqzsbh": "",
							"jzfwfsd": "",
							"jzxmmc": ""
						},
						"define": {
							"特征key": "特征值示例 选填"
						}
					}
				]
			}
		],
		"emailConfigList": [
			{
				"fpqqlsh": "",
				"address": ""
			}
		],
		"smsConfigList": [
			{
				"fpqqlsh": "",
				"address": ""
			}
		],
		"urlConfigList": [
			{
				"fpqqlsh": "",
				"url": ""
			}
		],
		"auditReturnConfigs": [
			{
				"fpqqlsh": "",
				"url": ""
			}
		],
		"autoAudit": true
	}
}
```

## 返回参数

### 返回字段

| 字段 | 类型 | 说明 |
| --- | --- | --- |
| code | string | 返回码。200/0000: 成功；其他: 失败 |
| message | string | 返回消息描述 |
| data | object | 业务数据，成功时返回具体数据 |

### 正确返回

```json
{
    "code": "200",
    "data": {},
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
| 1001 | 参数校验不通过 / Data is invalid | 检查传入参数是否正确，如必填项是否为空、字段格式是否正确 |
| 1002 | 数据不存在 / Data does not exist | 对应的开票数据不存在 |
| 9999 | 数据不合法 / 系统异常 | 错误信息包含具体详情，如：纳税人识别号 111222333456333 未启用增值税电子普通发票，暂不可用该功能 |
| 9999 | 发票请求流水号已存在 | 流水号重复，请重新生成唯一的发票请求流水号 |

## 特殊票种说明

### 数电发票特殊票种清单

| 票种代码(tspz) | 票种名称 | 典型应用场景 |
| --- | --- | --- |
| E03 | 建筑服务 | 工程建造、装修装饰 |
| E04 | 货物运输服务 | 物流运输、货物配送 |
| E05 | 不动产销售 | 房屋买卖、土地转让 |
| E06 | 不动产经营租赁 | 房屋租赁、场地租赁 |
| E07 | 代收车船税 | 保险代收车船税 |
| E09 | 旅客运输服务 | 航空、铁路、公路客运 |
| E22 | 成品油 | 成品油销售 |

### 出行人证件类型代码枚举

| 代码 | 证件类型 | 代码 | 证件类型 |
| --- | --- | --- | --- |
| 101 | 组织机构代码证 | 102 | 营业执照 |
| 103 | 税务登记证 | 199 | 其他单位证件 |
| 201 | 居民身份证 | 202 | 军官证 |
| 203 | 武警警官证 | 204 | 士兵证 |
| 205 | 军队离退休干部证 | 206 | 残疾人证 |
| 207 | 残疾军人证(1-8级) | 208 | 外国护照 |
| 210 | 港澳居民来往内地通行证 | 212 | 往来港澳通行证 |
| 213 | 台湾居民来往大陆通行证 | 214 | 大陆居民往来台湾通行证 |
| 215 | 外国人居留证 | 216 | 外交官证 |
| 217 | 使(领事)馆证 | 218 | 海员证 |
| 219 | 香港永久性居民身份证 | 220 | 台湾身份证 |
| 221 | 澳门永久性居民身份证 | 222 | 外国人身份证件 |
| 227 | 中国护照 | 233 | 外国人永久居留身份证 |
| 299 | 其他个人证件 | | |


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
| data.einvoiceApplyList[].orgcode | string | 否 | 税务组织编码 （如果一个税号对应多个税务组织（关联开票点档案），此字段必输，用于确定唯一税务组织（关联开票点档案)）） |
| data.einvoiceApplyList[].lyid | string | 是 | 来源ID。可按需传递，一般为来源单据主键ID |
| data.einvoiceApplyList[].fpqqlsh | string | 是 | 发票请求流水号。唯一标识一张发票。 |
| data.einvoiceApplyList[].fplx | string | 否 | 发票类型：1：增值税电子普通发票；2：增值税电子专用发票；3：增值税普通发票；4：增值税专用发票 ；5：机动车销售统一发票；8：增值税电子普通发票（成品油）；10：成品油普通发票；11：成品油专用发票；15：二手车销售统一发票；31：数电专用发票；32：数电普通发票；33：数电纸质发票(增值税专用发票)；34：数电纸质发票(普通发票)；选填  默认为1 |
| data.einvoiceApplyList[].sdLc | string | 否 | 数电纸质发票联次信息。枚举为： {"label":"2016版增值税普通发票（二联折叠票）","value":"04","type":"3"} {"label":"2016版增值税普通发票（五联折叠票）","value":"05","type":"3"} {"type":"3","label":"2008版增值税普通发票（五联无金额限制版）","value":"000008101500"} {"label":"增值税专用发票（中文三联无金额限制版）","value":"1130","type":"1"} |
| data.einvoiceApplyList[].tspz | string | 否 | 特殊票种。2-燃油增值税专用发票,8-农产品销售,9-农产品收购,11-烟草发票,12-机动车发票,14-成品油发票,DK-代开发票,16-矿产品发票,E01-成品油发票,E02-稀土发票,E03-建筑服务发票,E04-货物运输,E05-不动产销售,E06-不动产租赁服务发票,E07-代收车船税,E09-旅客运输,E12-自产农产品销售,E14-机动车,E16-农产品收购,E17-光伏收购,E18-卷烟发票,E22-电子行程单,E32-电子烟,(数电票对应的特殊票种为E开头，其他的为税控发票的特 |
| data.einvoiceApplyList[].zsfs | string | 否 | 征税方式 0-普通征税 2-差额征税/差额开票 3-全额开票 |
| data.einvoiceApplyList[].xsfNsrsbh | string | 是 | 销售方纳税人识别号 |
| data.einvoiceApplyList[].xsfMc | string | 否 | 销售方名称 如果为空，获取发票平台配置的销售方名称;开具特殊票种-电子行程单该字段必传。 |
| data.einvoiceApplyList[].xsfDzdh | string | 否 | 销售方地址、电话 如果为空，获取发票平台配置的销售方地址及电话 |
| data.einvoiceApplyList[].xsfDz | string | 否 | 销售方地址 如果为空，获取发票平台配置的销售方地址 数电专用字段 |
| data.einvoiceApplyList[].xsfDh | string | 否 | 销售方电话 如果为空，获取发票平台配置的销售方电话 数电专用字段 |
| data.einvoiceApplyList[].xsfYh | string | 否 | 销售方银行，数电专用字段 |
| data.einvoiceApplyList[].xsfZh | string | 否 | 销售方账号，数电专用字段 |
| data.einvoiceApplyList[].gmfNsrsbh | string | 否 | 购买方纳税人识别号 |
| data.einvoiceApplyList[].gmfMc | string | 否 | 购买方名称 |
| data.einvoiceApplyList[].gmfDzdh | string | 否 | 购买方地址电话 数电票此字段非必填 |
| data.einvoiceApplyList[].gmfYhzh | string | 否 | 购买方银行账号 数电票此字段非必填 |
| data.einvoiceApplyList[].gmfDz | string | 否 | 购买方地址，数电专用字段 |
| data.einvoiceApplyList[].gmfDh | string | 否 | 购买方电话，数电专用字段 |
| data.einvoiceApplyList[].gmfYh | string | 否 | 购买方银行，数电专用字段 |
| data.einvoiceApplyList[].gmfZh | string | 否 | 购买方账号，数电专用字段 |
| data.einvoiceApplyList[].zrrbs | string | 否 | 购买方自然人标志 仅在开具数电普票(电子)时使用，如受票方（发票抬头）为自然人，并要求能将发票归集在个人票夹中展示，需提供姓名及身份证号（自然人纳税人识别号），此参数传入Y；如受票方（发票抬头）为个体工商户，需提供社会统一信用代码或纳税人识别号，此参数传入N |
| data.einvoiceApplyList[].zjlx | string | 否 | 证件类型代码 适用于自然人标识为Y时的自然人补充信息，枚举参见出行人证件类型代码枚举。收购发票或者ZJHM、GUOJI两个字段有值时，必填  101: 组织机构代码证, 102: 营业执照, 103: 税务登记证, 199: 其他单位证件, 201: 居民身份证, 202: 军官证, 203: 武警警官证, 204: 士兵证, 205: 军队离退休干部证, 206: 残疾人证, 207: 残疾军人证（1-8级）, 208: 外国护照, 210: 港澳居民来往内地通行证, 212: 中华人民共和国往来港澳通行证, 213: 台湾居民来往大陆通行证, 214: 大陆居民往来台湾通行证, 215: 外国人居留证, 216: 外交官证, 217: 使（领事）馆证, 218: 海员证, 219: 香港永久性居民身份证, 220: 台湾身份证, 221: 澳门特别行政区永久性居民身份证, 222: 外国人身份证件, 224: 就业失业登记证, 225: 退休证, 226: 离休证, 227: 中国护照, 228: 城镇退役士兵自谋职业证, 229: 随军家属身份证明, 230: 中国人民解放军军官转业证书, 231: 中国人民解放军义务兵退出现役证, 232: 中国人民解放军士官退出现役证, 233: 外国人永久居留身份证（外国人永久居留证）, 234: 就业创业证, 235: 香港特别行政区护照, 236: 澳门特别行政区护照, 237: 中华人民共和国港澳居民居住证, 238: 中华人民共和国台湾居民居住证, 239: 《中华人民共和国外国人工作许可证》（A类）, 240: 《中华人民共和国外国人工作许可证》（B类）, 241: 《中华人民共和国外国人工作许可证》（C类）, 291: 出生医学证明, 299: 其他个人证件 |
| data.einvoiceApplyList[].zjhm | string | 否 | 证件号码 适用于自然人标识为Y时的自然人补充信息。收购发票或者ZJLX、GUOJI两个字段有值时，必填 |
| data.einvoiceApplyList[].guoji | string | 否 | 国籍代码 适用于自然人标识为Y时的自然人补充信息，枚举参见国家地区代码枚举。收购发票或者ZJLX、ZJHM两个字段有值时，必填 004: 阿富汗, 008: 阿尔巴尼亚共和国, 010: 南极洲, 012: 阿尔及利亚民主人民共和国, 016: 美属萨摩亚, 020: 安道尔公国, 024: 安哥拉共和国, 028: 安提瓜和巴布达, 031: 阿塞拜疆共和国, 032: 阿根廷共和国, 036: 澳大利亚联邦, 040: 奥地利共和国, 044: 巴哈马联邦, 048: 巴林国, 050: 孟加拉人民共和国, 051: 亚美尼亚共和国, 052: 巴巴多斯, 056: 比利时王国, 060: 百慕大, 064: 不丹王国, 068: 玻利维亚共和国, 070: 波斯尼亚和黑塞哥维那, 072: 博茨瓦纳共和国, 074: 布维岛, 076: 巴西联邦共和国, 084: 伯利兹, 086: 英属印度洋领地, 090: 所罗门群岛, 092: 英属维尔京群岛, 096: 文莱达鲁萨兰国, 100: 保加利亚共和国, 104: 缅甸联邦, 108: 布隆迪共和国, 112: 白俄罗斯共和国, 116: 柬埔寨王国, 120: 喀麦隆共和国, 124: 加拿大, 132: 佛得角共和国, 136: 开曼群岛, 140: 中非共和国, 144: 斯里兰卡民主社会主义共和国, 148: 乍得共和国, 152: 智利共和国, 156: 中华人民共和国, 158: 中国台湾, 162: 圣诞岛, 166: 科科斯（基林）群岛, 170: 哥伦比亚共和国, 174: 科摩罗伊斯兰联邦共和国, 175: 马约特, 178: 刚果共和国, 180: 刚果民主共和国, 184: 库克群岛, 188: 哥斯达黎加共和国, 191: 克罗地亚共和国, 192: 古巴共和国, 196: 塞浦路斯共和国, 203: 捷克共和国, 204: 贝宁共和国, 208: 丹麦王国, 212: 多米尼克国, 214: 多米尼加共和国, 218: 厄瓜多尔共和国, 222: 萨尔瓦多共和国, 226: 赤道几内亚共和国, 231: 埃塞俄比亚联邦民主共和国, 232: 厄立特里亚国, 233: 爱沙尼亚共和国, 234: 法罗群岛, 238: 福克兰群岛（马尔维纳斯）, 239: 南乔治亚岛和南桑德韦奇岛, 242: 斐济群岛共和国, 246: 芬兰共和国, 250: 法兰西共和国, 254: 法属圭亚那, 258: 法属波利尼西亚, 260: 法属南部领地, 262: 吉布提共和国, 266: 加蓬共和国, 268: 格鲁吉亚, 270: 冈比亚共和国, 275: 巴勒斯坦国, 276: 德意志联邦共和国, 288: 加纳共和国, 292: 直布罗陀, 296: 基里巴斯共和国, 300: 希腊共和国, 304: 格陵兰, 308: 格林纳达, 312: 瓜德罗普, 316: 关岛, 320: 危地马拉共和国, 324: 几内亚共和国, 328: 圭亚那合作共和国, 332: 海地共和国, 334: 赫德岛和麦克唐纳岛, 336: 梵蒂冈城国, 340: 洪都拉斯共和国, 344: 中国香港特别行政区, 348: 匈牙利共和国, 352: 冰岛共和国, 356: 印度共和国, 360: 印度尼西亚共和国, 364: 伊朗伊斯兰共和国, 368: 伊拉克共和国, 372: 爱尔兰, 376: 以色列国, 380: 意大利共和国, 384: 科特迪瓦共和国, 388: 牙买加, 392: 日本国, 398: 哈萨克斯坦共和国, 400: 约旦哈希姆王国, 404: 肯尼亚共和国, 408: 朝鲜民主主义人民共和国, 410: 大韩民国, 414: 科威特国, 417: 吉尔吉斯共和国, 418: 老挝人民民主共和国, 422: 黎巴嫩共和国, 426: 莱索托王国, 428: 拉脱维亚共和国, 430: 利比里亚共和国, 434: 大阿拉伯利比亚人民社会主义民众国, 438: 列支敦士登公国, 440: 立陶宛共和国, 442: 卢森堡大公国, 446: 中国澳门特别行政区, 450: 马达加斯加共和国, 454: 马拉维共和国, 458: 马来西亚, 462: 马尔代夫共和国, 466: 马里共和国, 470: 马耳他共和国, 474: 马提尼克, 478: 毛里塔尼亚伊斯兰共和国, 480: 毛里求斯共和国, 484: 墨西哥合众国, 492: 摩纳哥公国, 496: 蒙古国, 498: 摩尔多瓦共和国, 499: 黑山, 500: 蒙特塞拉特, 504: 摩洛哥王国, 508: 莫桑比克共和国, 512: 阿曼苏丹国, 516: 纳米比亚共和国, 520: 瑙鲁共和国, 524: 尼泊尔王国, 528: 荷兰王国, 530: 荷属安的列斯, 533: 阿鲁巴, 540: 新喀里多尼亚, 548: 瓦努阿图共和国, 554: 新西兰, 558: 尼加拉瓜共和国, 562: 尼日尔共和国, 566: 尼日利亚联邦共和国, 570: 纽埃, 574: 诺福克岛, 578: 挪威王国, 580: 北马里亚纳自由联邦, 581: 美国本土外小岛屿, 583: 密克罗尼西亚联邦, 584: 马绍尔群岛共和国, 585: 帕劳共和国, 586: 巴基斯坦伊斯兰共和国, 591: 巴拿马共和国, 598: 巴布亚新几内亚独立国, 600: 巴拉圭共和国, 604: 秘鲁共和国, 608: 菲律宾共和国, 612: 皮特凯恩, 616: 波兰共和国, 620: 葡萄牙共和国, 624: 几内亚比绍共和国, 626: 东帝汶, 630: 波多黎各, 634: 卡塔尔国, 638: 留尼汪, 642: 罗马尼亚, 643: 俄罗斯联邦, 646: 卢旺达共和国, 654: 圣赫勒拿, 659: 圣基茨和尼维斯联邦, 660: 安圭拉, 662: 圣卢西亚, 666: 圣皮埃尔和密克隆, 670: 圣文森特和格林纳丁斯, 674: 圣马力诺共和国, 678: 圣多美和普林西比民主共和国, 682: 沙特阿拉伯王国, 686: 塞内加尔共和国, 688: 塞尔维亚, 690: 塞舌尔共和国, 694: 塞拉利昂共和国, 702: 新加坡共和国, 703: 斯洛伐克共和国, 704: 越南社会主义共和国, 705: 斯洛文尼亚共和国, 706: 索马里共和国, 710: 南非共和国, 716: 津巴布韦共和国, 724: 西班牙王国, 728: 南苏丹, 732: 西撒哈拉, 736: 苏丹共和国, 740: 苏里南共和国, 744: 斯瓦尔巴岛和扬马延岛, 748: 斯威士兰王国, 752: 瑞典王国, 756: 瑞士联邦, 760: 阿拉伯叙利亚共和国, 762: 塔吉克斯坦共和国, 764: 泰王国, 768: 多哥共和国, 772: 托克劳, 776: 汤加王国, 780: 特立尼达和多巴哥共和国, 784: 阿拉伯联合酋长国, 788: 突尼斯共和国, 792: 土耳其共和国, 795: 土库曼斯坦, 796: 特克斯和凯科斯群岛, 798: 图瓦卢, 800: 乌干达共和国, 804: 乌克兰, 807: 前南斯拉夫马其顿共和国, 818: 阿拉伯埃及共和国, 826: 大不列颠及北爱尔兰联合王国, 831: 根西岛, 832: 泽西岛, 833: 马恩岛, 834: 坦桑尼亚联合共和国, 840: 美利坚合众国, 850: 美属维尔京群岛, 854: 布基纳法索, 858: 乌拉圭东岸共和国, 860: 乌兹别克斯坦共和国, 862: 委内瑞拉共和国, 876: 瓦利斯和富图纳, 882: 萨摩亚独立国, 887: 也门共和国, 891: 南斯拉夫联盟共和国, 894: 赞比亚共和国, A00: 科索沃 |
| data.einvoiceApplyList[].einvoiceShowGxfYhZh | string | 否 | 是否显示购销方银行、账号 0：不显示 1：仅显示销售方银行、账号 2：仅显示购买方银行、账号 3：购销方银行、账号都显示 |
| data.einvoiceApplyList[].einvoiceShowSkrShr | string | 否 | 是否显示收款人、复核人 0：不显示 1：仅显示收款人 2：仅显示复核人 3：收款人复核人都显示 |
| data.einvoiceApplyList[].einvoiceShowGxfDzDh | string | 否 | 是否显示地址、电话  0：不显示 1：仅显示销地址、电话 2：仅显示购买方地址、电话 3：购销方地址、电话都显示 |
| data.einvoiceApplyList[].dfgtgmbz | string | 否 | 多方共同购买标志  Y：多方共同购买N：非多方共同购买 |
| data.einvoiceApplyList[].kpr | string | 否 | 开票人 |
| data.einvoiceApplyList[].skr | string | 否 | 收款人 |
| data.einvoiceApplyList[].fhr | string | 否 | 复核人 |
| data.einvoiceApplyList[].hjje | number | 否 | 合计金额 |
| data.einvoiceApplyList[].hjse | number | 否 | 合计税额 |
| data.einvoiceApplyList[].jshj | number | 否 | 价税合计 |
| data.einvoiceApplyList[].bz | string | 否 | 数电发票，如为基础通道（电子税务局），最长为200字符，如为乐企通道，最长为450字符（汉字、数字、字母等只占用一个字符）；税控发票，最长为230个字符（汉字占两个字符，数字、字母等占一个字符） |
| data.einvoiceApplyList[].allElcUserName | string | 否 | 数电发票用户名，sm4加密 |
| data.einvoiceApplyList[].allElcPassWord | string | 否 | 数电发票密码，sm4加密 |
| data.einvoiceApplyList[].slsm | string | 否 | 红冲税率说明。1:当小规模纳税人开具3%税率时需要填写税率说明; 2:前期已开具发票，发生销售折让、中止或者退回等情形需要开具红字发票，或者开票有误需要重新开具; 3:因为实际经营业务需要，放弃享受减按1%征收率征收增值税政策。 |
| data.einvoiceApplyList[].zdybz | string | 否 | 自定义备注 |
| data.einvoiceApplyList[].projectCode | string | 否 | 项目编号 |
| data.einvoiceApplyList[].acountOrgCode | string | 否 | 会计主体编码 |
| data.einvoiceApplyList[].wbsCode | string | 否 | WBS编号 |
| data.einvoiceApplyList[].lydjh | string | 否 | 业务来源单据号 |
| data.einvoiceApplyList[].bmbBbh | string | 否 | 商品编码表版本 增加商品编码功能后，税局下载的商品编码表版本 |
| data.einvoiceApplyList[].wxorderid | string | 否 | 微信订单号 商户开票完成后，传入订单号和商户id将自动插入用户微信卡包(参考微信卡包指引)(opens new window) |
| data.einvoiceApplyList[].wxappid | string | 否 | 微信商户appid 商户开票完成后，传入订单号和商户id将自动插入用户微信卡包(参考微信卡包指引)(opens new window) |
| data.einvoiceApplyList[].wxauthid | string | 否 | 微信批量插入卡包的授权id 如果使用批量插入卡包的授权，需要传此参数，否则不需要 |
| data.einvoiceApplyList[].sgbz | string | 否 | 收购标志 2-农产品收购(二手车反向开票) |
| data.einvoiceApplyList[].cpyqylb | string | 否 | 企业类别代码 数电二手车发票必传 01: 成品油生产企业, 02: 成品油经销企业, 03: 国内机动车生产企业, 04: 进口机动车生产企业驻我国办事机构或总授权代理机构, 05: 机动车授权经销企业, 06: 其他机动车贸易商, 07: 二手车市场, 08: 二手车经销企业, 09: 二手车拍卖企业, 10: 稀土矿产企业, 11: 稀土冶炼分离企业, 12: 稀土其他企业, 13: 稀土矿产企业、稀土冶炼分离企业、稀土其他企业, 14: 稀土矿产企业、稀土冶炼分离企业, 15: 稀土矿产企业、稀土其他企业, 16: 稀土冶炼分离企业、稀土其他企业, 17: 卷烟生产企业, 18: 卷烟批发企业, 19: 卷烟出口企业, 20: 生产型出口企业, 21: 外贸型出口企业, 22: 外贸综合服务企业, 23: 自贸区试点企业, 24: 特殊监管区内企业, 25: 增值税一般纳税人资格试点, 26: 市场采购试点, 27: 退税商店, 28: 电子商务出口企业, 29: 享受出口退税政策的融资租赁企业, 30: 增值税零税率应税服务提供者, 31: 房地产开发企业, 32: 农产品深加工企业, 33: 外购石脑油、燃料油用于消费税退税企业, 34: 从事机动车进口的其他贸易商, 35: 自产农产品者, 36: 农产品收购企业, 37: 光伏收购企业, 38: 住房租赁企业, 39: 冬奥会退税企业, 40: 再生资源回收, 41: 超豪华汽车零售企业, 42: 电子烟生产企业, 43: 电子烟批发企业, 44: 保险行业企业, 45: 证券行业企业, 46: 信用卡行业企业, 47: 旅游行业企业, 48: 白酒生产企业, 49: 白酒关联销售单位, 50: 资源回收企业反向开票-一般计税, 51: 资源回收企业反向开票-简易计税 |
| data.einvoiceApplyList[].tdzzsxmbh | string | 否 | 土地增值税项目编号 数电特殊票种-建筑服务必传 |
| data.einvoiceApplyList[].kdsbz | string | 否 | 是否跨地址标志 数电特殊票种-不动产租赁服务及建筑服务必传。枚举Y：是；N:否 |
| data.einvoiceApplyList[].kqysssxbgglbm | string | 否 | 跨区域涉税事项报验管理编号 数电特殊票种-建筑服务专属属性。对于非乐企通道，当“跨地市标志”为“是”时，“跨区域涉税事项报验管理编号”为必填；当“跨地市标志”为“否”时，“跨区域涉税事项报验管理编号”不可填写。 |
| data.einvoiceApplyList[].tspzs | object | 否 | 数电特殊票种其他要素属性集合 数电特殊票种-建筑服务及旅客运输等必传。 |
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
| data.einvoiceApplyList[].bdcxsTspzs | object | 否 | 数电特殊票种不动产属性集合 数电特殊票种-新版本不动产销售及不动产租赁必传。 |
| data.einvoiceApplyList[].bdcxsTspzs.tdzzsxmbh | string | 否 | 土地增值税项目编号。数电特殊票种-不动产销售必传 |
| data.einvoiceApplyList[].bdcxsTspzs.bdcdz | string | 否 | 不动产地址。数电特殊票种-不动产租赁服务必传。格式：省市区详细地址 |
| data.einvoiceApplyList[].bdcxsTspzs.zlqq | string | 否 | 租赁日期起 数电特殊票种-不动产租赁服务必传。格式：yyyy-MM-dd HH:mm:ss 例：2023-03-22 12:12:12 |
| data.einvoiceApplyList[].bdcxsTspzs.zlqz | string | 否 | 租赁日期止 数电特殊票种-不动产租赁服务必传。格式：yyyy-MM-dd HH:mm:ss 例：2023-03-22 12:12:12。 |
| data.einvoiceApplyList[].bdcxsTspzs.kdsbz | string | 否 | 跨地市标志。数电特殊票种-不动产租赁服务及不动产销售必传。枚举Y：是；N:否 |
| data.einvoiceApplyList[].bdcxsTspzs.cxrxh | string | 否 | 出行人序号 |
| data.einvoiceApplyList[].bdcxsTspzs.cqzsbh | string | 否 | 产权证书编号。数电特殊票种不动产租赁和销售必填。 |
| data.einvoiceApplyList[].bdcxsTspzs.mjdw | string | 否 | 面积单位。数电特殊票种不动产租赁和销售必填。取值为：平方千米、平方米、公顷、亩、hm²、km²、m²、米（铁路线与管道等使用） |
| data.einvoiceApplyList[].bdcxsTspzs.cph | string | 否 | 车牌号。数电特殊票种不动产租赁。 |
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
| data.einvoiceApplyList[].mqkfrl | string | 否 | 每千克煤炭发热量 数电票煤炭类字段。不含税金额超过一千万时，该字段必填。 |
| data.einvoiceApplyList[].gjql | string | 否 | 干基全硫 数电票煤炭类字段。不含税金额超过一千万时，该字段必填。 |
| data.einvoiceApplyList[].gzwhjhff | string | 否 | 干燥无灰基挥发分 数电票煤炭类字段。不含税金额超过一千万时，该字段必填。 |
| data.einvoiceApplyList[].ticketNumber | string | 否 | 13位电子票号 开具特殊票种-电子行程单该字段必传 |
| data.einvoiceApplyList[].buyerType | string | 否 | 购买机票方类型 0:企业 1:机关或事业单位 2:个人3:其他；开具特殊票种-电子行程单该字段必传 |
| data.einvoiceApplyList[].fareAmount | string | 否 | 加减价 |
| data.einvoiceApplyList[].orderNumber | string | 否 | 企业购票订单号 |
| data.einvoiceApplyList[].userName | string | 否 | 用户名 |
| data.einvoiceApplyList[].gpCode | string | 否 | GP单号 |
| data.einvoiceApplyList[].passengerName | string | 否 | 乘客姓名 |
| data.einvoiceApplyList[].passengerIdnum | string | 否 | 乘客身份证号码/护照号码 |
| data.einvoiceApplyList[].endorsements | string | 否 | 签注 |
| data.einvoiceApplyList[].office | string | 否 | 出票Office号 |
| data.einvoiceApplyList[].issuedBy | string | 否 | 出票单位 |
| data.einvoiceApplyList[].iata | string | 否 | IATA号 |
| data.einvoiceApplyList[].pnr | string | 否 | PNR号 |
| data.einvoiceApplyList[].ticketInformation | string | 否 | 机票票面提示信息 |
| data.einvoiceApplyList[].insurance | string | 否 | 保险信息 |
| data.einvoiceApplyList[].electronicTicketType | string | 否 | 机票类型 0：国内 1：国际 |
| data.einvoiceApplyList[].verifyCode | string | 否 | 验证码 |
| data.einvoiceApplyList[].overdueFlag | string | 否 | 超期标识true: 超期 false: 未超期 |
| data.einvoiceApplyList[].lylx | string | 否 | 来源类型 |
| data.einvoiceApplyList[].define | object | 否 | 自定义特征项 |
| data.einvoiceApplyList[].items[] | object | 否 | 待开票明细 |
| data.einvoiceApplyList[].items[].hh | string | 否 | 行号 选填 有折扣时必输 |
| data.einvoiceApplyList[].items[].zkhhh | string | 否 | 折扣行行号 选填：有折扣时必输 |
| data.einvoiceApplyList[].items[].fphxz | string | 否 | 发票行性质 0正常行 1折扣行 2被折扣行 |
| data.einvoiceApplyList[].items[].xmbm | string | 否 | 项目编码 如果项目名称为空，会根据项目编码匹配云平台的商品档案（物料创建） |
| data.einvoiceApplyList[].items[].xmmc | string | 是 | 项目名称 数电票：300字节/150中文；税控票：80字节/40中文 |
| data.einvoiceApplyList[].items[].spbm | string | 否 | 商品编码 税收分类编码 |
| data.einvoiceApplyList[].items[].ggxh | string | 否 | 规格型号 |
| data.einvoiceApplyList[].items[].dw | string | 否 | 单位 |
| data.einvoiceApplyList[].items[].xmsl | string | 否 | 项目数量 |
| data.einvoiceApplyList[].items[].xmdj | string | 否 | 项目单价 为不含税单价，项目单价为空时，根据项目金额反算。不为空时不进行计算 |
| data.einvoiceApplyList[].items[].xmhsdj | string | 否 | 项目含税单价 项目单价为空时，根据项目金额反算。不为空时不进行计算 |
| data.einvoiceApplyList[].items[].xmje | number | 否 | 项目金额 为不含税金额，项目金额为空，根据项目价税合计反算。不为空时不进行计算 |
| data.einvoiceApplyList[].items[].xmjshj | number | 否 | 项目价税合计 |
| data.einvoiceApplyList[].items[].sl | string | 否 | 税率 |
| data.einvoiceApplyList[].items[].se | string | 否 | 税额 |
| data.einvoiceApplyList[].items[].kce | string | 否 | 扣除额 |
| data.einvoiceApplyList[].items[].zxbm | string | 否 | 自行编码 |
| data.einvoiceApplyList[].items[].yhzcbs | string | 否 | 销售优惠标识：0：不使用，1：使用 |
| data.einvoiceApplyList[].items[].lslbs | string | 否 | 税率标识 ：空：非零利率，0：出口退税，1：免税，2：不征收，3普通零税率 |
| data.einvoiceApplyList[].items[].zzstsgl | string | 否 | 增值税特殊管理 |
| data.einvoiceApplyList[].items[].detailMotor | object | 否 | 明细标识 |
| data.einvoiceApplyList[].items[].detailMotor.cqzsbh | string | 否 | 产权证书/不动产权证号 |
| data.einvoiceApplyList[].items[].detailMotor.jzfwfsd | string | 否 | 建筑服务发生地 |
| data.einvoiceApplyList[].items[].detailMotor.jzxmmc | string | 否 | 建筑项目名称 |
| data.einvoiceApplyList[].items[].detailMotor.cd | string | 否 | 产地。机动车统一发票必填。 |
| data.einvoiceApplyList[].items[].detailMotor.cjhm | string | 否 | 车架号吗。机动车统一发票必填。 |
| data.einvoiceApplyList[].items[].detailMotor.cllx | string | 否 | 车辆类型。机动车统一发票必填。 |
| data.einvoiceApplyList[].items[].detailMotor.cpxh | string | 否 | 厂牌型号。机动车统一发票必填。 |
| data.einvoiceApplyList[].items[].detailMotor.scqymc | string | 否 | 生产企业名称。机动车统一发票使用。 |
| data.einvoiceApplyList[].items[].detailMotor.sfzhm | string | 否 | 身份证号码。 |
| data.einvoiceApplyList[].items[].detailMotor.hgzh | string | 否 | 合格证号。机动车统一发票，进口车必须为空。 |
| data.einvoiceApplyList[].items[].detailMotor.jkzmsh | string | 否 | 进口证明书号。机动车统一发票用，国产车必须为空。 |
| data.einvoiceApplyList[].items[].detailMotor.sjdh | string | 否 | 商检单号。机动车统一发票用。 |
| data.einvoiceApplyList[].items[].detailMotor.fdjhm | string | 否 | 发动机号码。机动车统一发票用，必填。 |
| data.einvoiceApplyList[].items[].detailMotor.dunwei | string | 否 | 吨位。机动车统一发票用。 |
| data.einvoiceApplyList[].items[].detailMotor.xcrs | string | 否 | 限乘人数。机动车统一发票用。 |
| data.einvoiceApplyList[].items[].detailMotor.jdctzclsbdhuuid | string | 否 | 机动车车辆识别uuid。机动车统一发票用。 |
| data.einvoiceApplyList[].items[].detailMotor.wspzhm | string | 否 | 完税凭证号。机动车统一发票用。 |
| data.einvoiceApplyList[].items[].detailMotor.xfdw | string | 否 | 销方单位。二手车发票用。 |
| data.einvoiceApplyList[].items[].detailMotor.xfhm | string | 否 | 销方号码。二手车发票用。 |
| data.einvoiceApplyList[].items[].detailMotor.xfdz | string | 否 | 销方地址。二手车发票用。 |
| data.einvoiceApplyList[].items[].detailMotor.xfdh | string | 否 | 销方电话。二手车发票用。 |
| data.einvoiceApplyList[].items[].detailMotor.cpzh | string | 否 | 车牌照号。二手车发票用。 |
| data.einvoiceApplyList[].items[].detailMotor.djzh | string | 否 | 登记证号。二手车发票用 |
| data.einvoiceApplyList[].items[].detailMotor.cgsmc | string | 否 | 车管所名称。二手车发票用。 |
| data.einvoiceApplyList[].items[].detailMotor.gfdz | string | 否 | 购方地址。二手车发票用。 |
| data.einvoiceApplyList[].items[].detailMotor.gfdh | string | 否 | 购方电话。二手车发票用。 |
| data.einvoiceApplyList[].items[].detailMotor.saleNaturalPersonId | string | 否 | 销方(卖方)自然人标识。二手车用。枚举值：Y、N |
| data.einvoiceApplyList[].items[].detailMotor.saleNationalityCode | string | 否 | 销方(卖方)国籍编码。二手车用。 |
| data.einvoiceApplyList[].items[].detailMotor.saleIdType | string | 否 | 销方(卖方)证件类型。二手车发票用。 |
| data.einvoiceApplyList[].items[].detailMotor.saleIdNumber | string | 否 | 销方(卖方)证件号码。二手车发票用。 |
| data.einvoiceApplyList[].items[].detailMotor.mtzldm | string | 否 | 煤炭种类代码。0100：政府保供煤；0200：长协煤；0300：市场煤。传递对应的序号即可。 |
| data.einvoiceApplyList[].items[].detailMotor.mtzldmxy | string | 否 | 煤炭种类代码协议。如果mtzldm是0200，则必填。下级协议编号，0201：协议期不足半年；0202：协议期在半年至一年之间；0203：协议期在一年至两年之间；0204：协议期在两年以上。 |
| data.einvoiceApplyList[].items[].define | object | 否 | 特征值 |
| data.emailConfigList[] | object | 否 | 邮箱交付信息 |
| data.emailConfigList[].fpqqlsh | string | 否 | 发票请求流水号和上方einvoiceApplyList中的保持一致 |
| data.emailConfigList[].address | string | 否 | 邮箱地址 |
| data.smsConfigList[] | object | 否 | 短信交付信息 |
| data.smsConfigList[].fpqqlsh | string | 否 | 发票请求流水号和上方einvoiceApplyList中的保持一致 |
| data.smsConfigList[].address | string | 否 | 手机号 |
| data.urlConfigList[] | object | 否 | url交付信息 |
| data.urlConfigList[].fpqqlsh | string | 否 | 发票请求流水号和上方einvoiceApplyList中的保持一致 |
| data.urlConfigList[].url | string | 否 | 回调地址 |
| data.auditReturnConfigs[] | object | 否 | 退回地址信息 |
| data.auditReturnConfigs[].fpqqlsh | string | 否 | 发票请求流水号和上方einvoiceApplyList中的保持一致 |
| data.auditReturnConfigs[].url | string | 否 | 退回地址 |
| data.autoAudit | boolean | 否 | 自动审核，即不需要人工在发票平台确认开票，直接进行开票 false:不自动审核，即需要人工确认如果不传，代表true |

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

## 返回参数说明

| 字段路径 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| code | string | 否 | 返回值编码 |
| data | object | 否 | 响应信息 |
| message | string | 否 | 信息说明 |

## 返回示例

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
| 1002 | Data does not exist | Data does not exist |
| 9999 | Invalid data | The returned error code contains multiple pieces of information. For example: The taxpayer with taxpayer identification number 111222333456333 has not enabled VAT electronic normal invoices, this function is temporarily unavailable. |


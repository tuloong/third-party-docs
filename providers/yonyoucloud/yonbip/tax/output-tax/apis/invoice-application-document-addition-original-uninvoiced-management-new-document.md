# Invoice Application Document Addition (Original Uninvoiced Management New Document)

来源页面：

- https://open.yonyoucloud.com/#/doc-center/docDes/api?apiId=b19dc1e144e64abea75c9adb4ead6362&isOrigin=1&selectApiTab=open&from=&iframe=

机器可抓取的详情接口：

- https://open.yonyoucloud.com/iuap-ipaas-base/openPortal/api/getByVersionForTest/b19dc1e144e64abea75c9adb4ead6362/running?scene=open&isOrigin=1&isAjax=1

## 基本信息

- apiId：b19dc1e144e64abea75c9adb4ead6362
- API 类目：待开票明细
- 所属目录：开票申请单（Invoice Request）
- 产品：
- 更新时间：2026-06-10 18:25:29.000
- 请求方法：POST
- Content-Type：application/json
- 接口路径：/yonbip/tax/invoiceclient-web/api/invoice-will/save
- 完整调用地址：https://c2.yonyoucloud.com/iuap-api-gateway/yonbip/tax/invoiceclient-web/api/invoice-will/save
- 鉴权方式：access_token 作为 Query 参数传递（?access_token=）
- 当前状态：当前接口
- 请求字段数：Query 0 个，Body 210 个
- 返回字段数：2 个

## 对接要点

- 调用 URL：`https://c2.yonyoucloud.com/iuap-api-gateway/yonbip/tax/invoiceclient-web/api/invoice-will/save?access_token={access_token}`
- 调用方必须保存业务来源单号、发票请求流水号、请求报文、响应报文和状态查询结果，便于重试和对账。
- 开票、红冲、作废、驱动开票等写操作建议用业务唯一号做幂等控制；同一业务单不要生成多个不同流水号反复提交。
- 返回成功只代表接口调用成功，不一定代表税局或开票终态成功；涉及开票结果时必须再调用状态查询类接口确认。
- 详情接口返回字段说明可能为英文，字段名以开放平台原始字段为准。

## 调用模板

```bash
curl -X POST 'https://c2.yonyoucloud.com/iuap-api-gateway/yonbip/tax/invoiceclient-web/api/invoice-will/save?access_token=访问令牌' \
  -H 'Content-Type: application/json' \
  -d '{"data": {}}'
```

## 请求参数

### Query 参数

无。

> 注：开放平台网关调用时通常还需传递 `access_token`。

### Body 参数

1. `lyid`
   - 类型：string
   - 数组：否
   - 必填：否
   - 示例/默认值：`123123`
   - 说明：来源ID

2. `lydjh`
   - 类型：string
   - 数组：否
   - 必填：否
   - 示例/默认值：`45345312`
   - 说明：业务来源单据号

3. `lyBillTypeId`
   - 类型：string
   - 数组：否
   - 必填：否
   - 示例/默认值：`12312312`
   - 说明：来源单据类型id

4. `djqqlsh`
   - 类型：string
   - 数组：否
   - 必填：是
   - 示例/默认值：`4545343123`
   - 说明：单据请求流水号

5. `lylx`
   - 类型：string
   - 数组：否
   - 必填：否
   - 示例/默认值：`1`
   - 说明：来源类型 1-手工开具; 2-接口传入; 3-文件导入; 4-二维码扫描; 5-微信传入; 6-快速开票; 7-支付宝传入; 8-拼多多; 9-小程序; w-待开票明细; v-开票申请单; n-NCC传入

6. `orgCode`
   - 类型：string
   - 数组：否
   - 必填：是
   - 示例/默认值：`123`
   - 说明：开票点编码；在开票点档案中查询

7. `gmfMc`
   - 类型：string
   - 数组：否
   - 必填：是
   - 示例/默认值：`名称`
   - 说明：购买方名称

8. `gmfNsrsbh`
   - 类型：string
   - 数组：否
   - 必填：否
   - 示例/默认值：`231321242`
   - 说明：购买方纳税人识别号

9. `gmfYhzh`
   - 类型：string
   - 数组：否
   - 必填：否
   - 示例/默认值：`北京银行  12315`
   - 说明：购买方银行账户

10. `gmfDzdh`
   - 类型：string
   - 数组：否
   - 必填：否
   - 示例/默认值：`北京海淀 12312326566`
   - 说明：购买方地址电话

11. `gmfDz`
   - 类型：string
   - 数组：否
   - 必填：否
   - 示例/默认值：`北京海淀`
   - 说明：购买方地址（数电专用字段）

12. `gmfDh`
   - 类型：string
   - 数组：否
   - 必填：否
   - 示例/默认值：`155323265`
   - 说明：购买方电话(数电专用字段)

13. `gmfYh`
   - 类型：string
   - 数组：否
   - 必填：否
   - 示例/默认值：`北京银行`
   - 说明：购买方银行（数电专用）

14. `gmfZh`
   - 类型：string
   - 数组：否
   - 必填：否
   - 示例/默认值：`121323`
   - 说明：购买方账号（数电专用）

15. `xsfMc`
   - 类型：string
   - 数组：否
   - 必填：否
   - 示例/默认值：`销方名称`
   - 说明：销售方名称

16. `xsfNsrsbh`
   - 类型：string
   - 数组：否
   - 必填：否
   - 示例/默认值：`21313213`
   - 说明：销售方纳税人识别号

17. `xsfDzdh`
   - 类型：string
   - 数组：否
   - 必填：否
   - 示例/默认值：`北京海淀 1553232656`
   - 说明：销售方地址、电话

18. `xsfYhzh`
   - 类型：string
   - 数组：否
   - 必填：否
   - 示例/默认值：`销方银行 122323`
   - 说明：销售方银行账号

19. `xsfDz`
   - 类型：string
   - 数组：否
   - 必填：否
   - 示例/默认值：`地址 16665655566`
   - 说明：销售方地址（数电专用）

20. `xsfDh`
   - 类型：string
   - 数组：否
   - 必填：否
   - 示例/默认值：`15532329899`
   - 说明：销售方电话（数电专用）

21. `xsfYh`
   - 类型：string
   - 数组：否
   - 必填：否
   - 示例/默认值：`北京银行`
   - 说明：销售方银行（数电专用）

22. `xsfZh`
   - 类型：string
   - 数组：否
   - 必填：否
   - 示例/默认值：`12513163`
   - 说明：销售方账号（数电专用）

23. `lc`
   - 类型：string
   - 数组：否
   - 必填：否
   - 示例/默认值：`2`
   - 说明：联次：2-二联 3-三联 5-五联

24. `bz`
   - 类型：string
   - 数组：否
   - 必填：否
   - 示例/默认值：`123`
   - 说明：备注。数电发票，如为基础通道（电子税务局），最长为200字符，如为乐企通道，最长为450字符（汉字、数字、字母等只占用一个字符）；税控发票，最长为230个字符（汉字占两个字符，数字、字母等占一个字符）；

25. `fplx`
   - 类型：string
   - 数组：否
   - 必填：否
   - 示例/默认值：`1`
   - 说明：发票类型：1：增值税电子普通发票；2：增值税电子专用发票；3：增值税普通发票；4：增值税专用发票
     ；5：机动车销售统一发票；8：增值税电子普通发票（成品油）；10：成品油普通发票；11：成品油专用发票；15：二手车销售统一发票；31：数电专用发票；32：数电普通发票；33：数电纸质发票(增值税专用发票)；34：数电纸
     质发票(普通发票)； 36：数电纸质发票(机动车销售统一发票)；83：数电票（机动车销售统一发票）；84：数电票（二手车销售统一发票）；88：数电纸质发票（二手车销售统一发票）；选填 默认为1

26. `zdrq`
   - 类型：string
   - 数组：否
   - 必填：是
   - 示例/默认值：`2023-11-22`
   - 说明：制单日期：格式为yyyy-MM-dd

27. `revurl1`
   - 类型：string
   - 数组：否
   - 必填：否
   - 示例/默认值：`http:1231321.com`
   - 说明：待开票明细结果回传地址

28. `revemail`
   - 类型：string
   - 数组：否
   - 必填：否
   - 示例/默认值：`1464658255@qq.com`
   - 说明：联系人邮箱

29. `revphone`
   - 类型：string
   - 数组：否
   - 必填：否
   - 示例/默认值：`15532329878`
   - 说明：联系人手机号

30. `kpr`
   - 类型：string
   - 数组：否
   - 必填：否
   - 示例/默认值：`张三`
   - 说明：开票人

31. `skr`
   - 类型：string
   - 数组：否
   - 必填：否
   - 示例/默认值：`张三`
   - 说明：收款人

32. `fhr`
   - 类型：string
   - 数组：否
   - 必填：否
   - 示例/默认值：`张三`
   - 说明：复核人

33. `tsyw`
   - 类型：string
   - 数组：否
   - 必填：否
   - 示例/默认值：`0`
   - 说明：特殊业务 2-燃油增值税专用发票 8-农产品销售 9-农产品收购 11-烟草发票 12-机动车发票 14-成品油发票 DK-代开发票 16-矿产品发票 E01-成品油发票 E02-稀土发票 E03-建筑服务发票 E04
     货物运输 E05-不动产销售 E06-不动产租赁服务发票 E07-代收车船税 E09-旅客运输 E12-自产农产品销售 E14-机动车 E16-农产品收购 E17-光伏收购 E18-卷烟发票 E24-报废产品收购
     E26-金银首饰批发 E27-金银首饰零售 E32-电子烟

34. `secretLevelName`
   - 类型：string
   - 数组：否
   - 必填：否
   - 示例/默认值：`公开`
   - 说明：单据密级。

35. `autoMake`
   - 类型：string
   - 数组：否
   - 必填：否
   - 示例/默认值：`false`
   - 说明：是否自动开票  true：自动开  false：不自动开

36. `einvoiceShowGxfDzDh`
   - 类型：string
   - 数组：否
   - 必填：否
   - 示例/默认值：`N`
   - 说明：数电发票是否显示购销方地址、电话: 0：不显示 1：仅显示销地址、电话  2：仅显示购买方地址、电话  3：购销方地址、电话都显示

37. `einvoiceShowSkrShr`
   - 类型：string
   - 数组：否
   - 必填：否
   - 示例/默认值：`N`
   - 说明：数电发票(非纸质发票)是否显示收款人、复核人。0：不显示 1：仅显示收款人  2：仅显示复核人  3：收款人复核人都显示

38. `einvoiceShowGxfYhZh`
   - 类型：string
   - 数组：否
   - 必填：否
   - 说明：数电发票是否显示购销方银行、账号: 0：不显示 1：仅显示销售方银行、账号  2：仅显示购买方银行、账号  3：购销方银行、账号都显示

39. `dfgtgmbz`
   - 类型：string
   - 数组：否
   - 必填：否
   - 示例/默认值：`N`
   - 说明：多方共同购买标志 Y：多方共同购买N：非多方共同购买

40. `zrrbs`
   - 类型：string
   - 数组：否
   - 必填：否
   - 示例/默认值：`N`
   - 说明：购买方自然人标志。仅在开具数电普票(电子)时使用，如受票方（发票抬头）为自然人，并要求能将发票归集在个人票夹中展示，需提供姓名及身份证号（自然人纳税人识别号），此参数传入Y；如受票方（发票抬头）为个体工商户，需提供社会统
     一信用代码或纳税人识别号，此参数传入N

41. `zjlx`
   - 类型：string
   - 数组：否
   - 必填：否
   - 示例/默认值：`201`
   - 说明：证件类型代码.适用于自然人标识为Y时的自然人补充信息，枚举参见出行人证件类型代码枚举。收购发票或者ZJHM、GUOJI两个字段有值时，必填

42. `zjhm`
   - 类型：string
   - 数组：否
   - 必填：否
   - 示例/默认值：`120110202101111111`
   - 说明：证件号码,适用于自然人标识为Y时的自然人补充信息。收购发票或者ZJLX、GUOJI两个字段有值时，必填

43. `guoji`
   - 类型：string
   - 数组：否
   - 必填：否
   - 示例/默认值：`156`
   - 说明：国籍代码,适用于自然人标识为Y时的自然人补充信息，枚举参见国家地区代码枚举。收购发票或者ZJLX、ZJHM两个字段有值时，必填

44. `yfpDm`
   - 类型：string
   - 数组：否
   - 必填：否
   - 说明：蓝字发票代码(被红冲的发票代码)

45. `yfpHm`
   - 类型：string
   - 数组：否
   - 必填：否
   - 说明：蓝字发票号码(被红冲的发票号码)

46. `hzxxbbh`
   - 类型：string
   - 数组：否
   - 必填：否
   - 说明：红字信息表编号(专票红冲时必传)

47. `hcyy`
   - 类型：string
   - 数组：否
   - 必填：否
   - 说明：红冲原因(1 销货退回 2 开票有误  3 服务中止 4 销售折让)

48. `mqkfrl`
   - 类型：string
   - 数组：否
   - 必填：否
   - 示例/默认值：`12`
   - 说明：每千克煤炭发热量。煤炭类商品总不含税基恩超过一千万必填。

49. `gjql`
   - 类型：string
   - 数组：否
   - 必填：否
   - 示例/默认值：`12`
   - 说明：干基全硫量。煤炭类商品总不含税基恩超过一千万必填。

50. `gzwhjhff`
   - 类型：string
   - 数组：否
   - 必填：否
   - 示例/默认值：`21`
   - 说明：干燥无灰基挥发分量。煤炭类商品总不含税金额超过一千万必填。

51. `zsfs`
   - 类型：string
   - 数组：否
   - 必填：否
   - 示例/默认值：`0`
   - 说明：征税方式。0-普通征税 2-差额征税/差额开票 3-全额开票

52. `kqysssxbgglbm`
   - 类型：string
   - 数组：否
   - 必填：否
   - 示例/默认值：`3333`
   - 说明：跨区域涉税事项报验管理编号。数电特殊票种-建筑服务及不动产销售使用

53. `tdzzsxmbh`
   - 类型：string
   - 数组：否
   - 必填：否
   - 示例/默认值：`232342131`
   - 说明：土地增值税项目编号。数电特殊票种-建筑服务及不动产销售使用

54. `kdsbz`
   - 类型：string
   - 数组：否
   - 必填：否
   - 示例/默认值：`N`
   - 说明：跨地（市）标志 Y：是 N：否。数电特殊票种-不动产租赁、不动产销售、及建筑服务使用

55. `bxdh`
   - 类型：string
   - 数组：否
   - 必填：否
   - 示例/默认值：`33`
   - 说明：保险单号

56. `cphcbdjh`
   - 类型：string
   - 数组：否
   - 必填：否
   - 示例/默认值：`豫MUX555`
   - 说明：车牌号/船舶登记号

57. `skssq`
   - 类型：string
   - 数组：否
   - 必填：否
   - 示例/默认值：`2023-01 2023-03`
   - 说明：税款所属期yyyy-MM+空格+yyyy-MM

58. `dsccsje`
   - 类型：string
   - 数组：否
   - 必填：否
   - 示例/默认值：`3`
   - 说明：代收车船税金额

59. `znj`
   - 类型：string
   - 数组：否
   - 必填：否
   - 示例/默认值：`111`
   - 说明：滞纳金

60. `jehj`
   - 类型：string
   - 数组：否
   - 必填：否
   - 示例/默认值：`1`
   - 说明：金额合计

61. `cjh`
   - 类型：string
   - 数组：否
   - 必填：否
   - 示例/默认值：`233134133384938`
   - 说明：车辆识别代码/车架号码

62. `scrapProdSaleType`
   - 类型：string
   - 数组：否
   - 必填：否
   - 示例/默认值：`01`
   - 说明：报废产品销售类型 01-销售自己使用过的报废产品 02-销售收购的报废产品

63. `cpyqylb`
   - 类型：string
   - 数组：否
   - 必填：否
   - 示例/默认值：`08`
   - 说明：企业类别代码

64. `administrativeDivisionCode`
   - 类型：string
   - 数组：否
   - 必填：否
   - 示例/默认值：`440105`
   - 说明：行政区划数字代码。报废品收购发票必填

65. `subdistrictCode`
   - 类型：string
   - 数组：否
   - 必填：否
   - 示例/默认值：`440105001`
   - 说明：街道行政代码。报废品收购发票必填

66. `isTaxProfessionalServiceInvoiceItem`
   - 类型：string
   - 数组：否
   - 必填：否
   - 示例/默认值：`Y`
   - 说明：是否开具涉税专业服务发票    枚举：Y、N。说明：涉税专业服务机构企业（即税务师事务所、会计师事务所、律师事务所、代理记账机构、税务代理公司、财税类咨询公司及其他提供涉税专业服务的机构）开具涉税专业服务发票时，购买方纳
     税人识别号、是否开具涉税专业服务发票、涉税专业服务协议编号为必填项。此字段为局端认定的涉税专业服务机构开具非特定业务发票时使用，其他企业必须为空。

67. `taxProServiceAgreementNo`
   - 类型：string
   - 数组：否
   - 必填：否
   - 说明：涉税专业服务协议编号     是否开具涉税专业服务发票品目为“Y”时，此字段为必填项。此字段为局端认定的涉税专业服务机构开具非特定业务发票时使用，其他企业必须为空。

68. `jazs`
   - 类型：string
   - 数组：否
   - 必填：否
   - 示例/默认值：`05`
   - 说明：减按征税方式代码。不动产租赁特殊票种选填。枚举：01	个人出租住房  02	小规模复工复业 03	销售自己使用过的固定资产 04	销售收购的二手车 05	住房租赁 51	开具发票为2022年4月1日前发生纳税义务的业务
     52	前期已开具相应征收率发票 53	因实际经营业务需要，放弃享受免征增值税政策

69. `ylywlsh`
   - 类型：string
   - 数组：否
   - 必填：否
   - 说明：医疗业务流水号

70. `hzxm`
   - 类型：string
   - 数组：否
   - 必填：否
   - 说明：患者姓名

71. `hzsfzjlxDm`
   - 类型：string
   - 数组：否
   - 必填：否
   - 说明：患者身份证件类型代码

72. `hzsfzjhm`
   - 类型：string
   - 数组：否
   - 必填：否
   - 说明：患者身份证件号码

73. `mzh`
   - 类型：string
   - 数组：否
   - 必填：否
   - 说明：门诊号

74. `mzjzsj`
   - 类型：date
   - 数组：否
   - 必填：否
   - 说明：门诊就诊时间

75. `blh`
   - 类型：string
   - 数组：否
   - 必填：否
   - 说明：病历号

76. `zyh`
   - 类型：string
   - 数组：否
   - 必填：否
   - 说明：住院号

77. `zykb`
   - 类型：string
   - 数组：否
   - 必填：否
   - 说明：住院科别

78. `zysjq`
   - 类型：date
   - 数组：否
   - 必填：否
   - 说明：住院时间起

79. `zysjz`
   - 类型：date
   - 数组：否
   - 必填：否
   - 说明：住院时间止

80. `yjje`
   - 类型：number
   - 数组：否
   - 必填：否
   - 说明：预缴金额

81. `bjje`
   - 类型：number
   - 数组：否
   - 必填：否
   - 说明：补缴金额

82. `tfje`
   - 类型：number
   - 数组：否
   - 必填：否
   - 说明：退费金额

83. `yljglxDm`
   - 类型：string
   - 数组：否
   - 必填：否
   - 说明：医疗机构类型代码

84. `qtyljglx`
   - 类型：string
   - 数组：否
   - 必填：否
   - 说明：其他医疗机构类型

85. `yblxDm`
   - 类型：string
   - 数组：否
   - 必填：否
   - 说明：医保类型代码 01：职工基本医疗保险 02：城乡居民基本医疗保险 03：离休 04：其他医疗保险 05：自费

86. `qtyblx`
   - 类型：string
   - 数组：否
   - 必填：否
   - 说明：其他医保类型

87. `ybbh`
   - 类型：string
   - 数组：否
   - 必填：否
   - 说明：医保编号

88. `xbDm`
   - 类型：string
   - 数组：否
   - 必填：否
   - 说明：性别 1：男 2：女

89. `ybtcjjzfje`
   - 类型：string
   - 数组：否
   - 必填：否
   - 说明：医保统筹基金支付金额。小数位数:4,最大长度:18

90. `qtzfje`
   - 类型：string
   - 数组：否
   - 必填：否
   - 说明：其他支付金额。小数位数:4,最大长度:18

91. `grzhzfje`
   - 类型：string
   - 数组：否
   - 必填：否
   - 说明：个人账户支付金额。小数位数:4,最大长度:18

92. `grxjzfje`
   - 类型：string
   - 数组：否
   - 必填：否
   - 说明：个人现金支付金额。小数位数:4,最大长度:18

93. `grzfje`
   - 类型：string
   - 数组：否
   - 必填：否
   - 说明：个人自付金额。小数位数:4,最大长度:18

94. `grzfje1`
   - 类型：string
   - 数组：否
   - 必填：否
   - 说明：个人自费金额。小数位数:4,最大长度:18

95. `tspzs`
   - 类型：object
   - 数组：是
   - 必填：否
   - 说明：数电特殊票种

96. `tspzs.ysmxxh`
   - 类型：string
   - 数组：否
   - 必填：否
   - 示例/默认值：`1`
   - 说明：运输明细序号

97. `tspzs.ysgjzl`
   - 类型：string
   - 数组：否
   - 必填：否
   - 示例/默认值：`铁路运输`
   - 说明：运输工具种类。铁路运输 公路运输 水路运输 航空运输 管道运输 其他运输工具

98. `tspzs.ysgjph`
   - 类型：string
   - 数组：否
   - 必填：否
   - 示例/默认值：`京A111111`
   - 说明：运输工具牌号。

99. `tspzs.qyd`
   - 类型：string
   - 数组：否
   - 必填：否
   - 示例/默认值：`北京`
   - 说明：起运地

100. `tspzs.ddd`
   - 类型：string
   - 数组：否
   - 必填：否
   - 示例/默认值：`德州`
   - 说明：到达地

101. `tspzs.yshwmc`
   - 类型：string
   - 数组：否
   - 必填：否
   - 示例/默认值：`苹果`
   - 说明：运输货物名称

102. `tspzs.cxr`
   - 类型：string
   - 数组：否
   - 必填：否
   - 示例/默认值：`张三`
   - 说明：出行人

103. `tspzs.chuxrq`
   - 类型：string
   - 数组：否
   - 必填：否
   - 示例/默认值：`2025-03-13`
   - 说明：出行日期。格式yyyy-MM-dd

104. `tspzs.cxrzjlxDm`
   - 类型：string
   - 数组：否
   - 必填：否
   - 示例/默认值：`101`
   - 说明：出行人证件类型。参考FAQ文档：https://docs.qq.com/doc/DUG5MWWdUYnprZHRW?nlc=1

105. `tspzs.sfzjhm`
   - 类型：string
   - 数组：否
   - 必填：否
   - 示例/默认值：`371233333323333323`
   - 说明：身份证件号码

106. `tspzs.cfd`
   - 类型：string
   - 数组：否
   - 必填：否
   - 示例/默认值：`北京`
   - 说明：旅客出发地

107. `tspzs.lkddd`
   - 类型：string
   - 数组：否
   - 必填：否
   - 示例/默认值：`北京`
   - 说明：旅客到达地

108. `tspzs.zwdj`
   - 类型：string
   - 数组：否
   - 必填：否
   - 示例/默认值：`一等座`
   - 说明：座位等级。参考FAQ文档：https://docs.qq.com/doc/DUG5MWWdUYnprZHRW?nlc=1

109. `tspzs.jtgjlxDm`
   - 类型：string
   - 数组：否
   - 必填：否
   - 示例/默认值：`1`
   - 说明：交通工具类型代码。1：飞机 2：火车 3：长途汽车 4：公共交通 5：出租车 6：汽车 7：船舶 9：其他

110. `tspzs.sszdyysxh`
   - 类型：string
   - 数组：否
   - 必填：否
   - 说明：省市自定义要素序号

111. `tspzs.sszdyysmc`
   - 类型：string
   - 数组：否
   - 必填：否
   - 说明：省市自定义要素名称

112. `tspzs.sszdyysnr`
   - 类型：string
   - 数组：否
   - 必填：否
   - 说明：省市自定义要素内容

113. `bdcxsTspzs`
   - 类型：object
   - 数组：是
   - 必填：否
   - 说明：数电特殊票种-新版本不动产销售及不动产租赁必传。

114. `bdcxsTspzs.cxrxh`
   - 类型：string
   - 数组：否
   - 必填：否
   - 示例/默认值：`1`
   - 说明：明细序号，注意该序号要与明细行中正数行行号一对一关联

115. `bdcxsTspzs.bdcdz`
   - 类型：string
   - 数组：否
   - 必填：否
   - 示例/默认值：`北京市辖区东城区滨河公园5-4-1803`
   - 说明：不动产地址

116. `bdcxsTspzs.wqhtbabh`
   - 类型：string
   - 数组：否
   - 必填：否
   - 示例/默认值：`32333`
   - 说明：网签合同编号

117. `bdcxsTspzs.tdzzsxmbh`
   - 类型：string
   - 数组：否
   - 必填：否
   - 示例/默认值：`123331`
   - 说明：土地增值税项目编号

118. `bdcxsTspzs.bdcdwdm`
   - 类型：string
   - 数组：否
   - 必填：否
   - 示例/默认值：`32333`
   - 说明：不动产单元代码

119. `bdcxsTspzs.hdjsjg`
   - 类型：string
   - 数组：否
   - 必填：否
   - 示例/默认值：`3.2`
   - 说明：核定计税价格。不属于核定计税不动产销售的可不填写

120. `bdcxsTspzs.sjcjhsje`
   - 类型：string
   - 数组：否
   - 必填：否
   - 示例/默认值：`3.2`
   - 说明：实际成交含税金额。若按核定计税价格征税的，为必填

121. `bdcxsTspzs.kdsbz`
   - 类型：string
   - 数组：否
   - 必填：否
   - 示例/默认值：`N`
   - 说明：跨地（市）标志 Y：是 N：否

122. `bdcxsTspzs.cqzsbh`
   - 类型：string
   - 数组：否
   - 必填：否
   - 示例/默认值：`3233`
   - 说明：产权证书/不动产权证号

123. `bdcxsTspzs.mjdw`
   - 类型：string
   - 数组：否
   - 必填：否
   - 示例/默认值：`平方米`
   - 说明：面积单位。取值为：平方千米、平方米、公顷、亩、h㎡、k㎡、㎡、米（铁路线与管道等使用）

124. `bdcxsTspzs.zlqq`
   - 类型：string
   - 数组：否
   - 必填：否
   - 示例/默认值：`2022-11-18`
   - 说明：租赁期起日期 例：2022-11-18

125. `bdcxsTspzs.zlqz`
   - 类型：string
   - 数组：否
   - 必填：否
   - 示例/默认值：`2023-11-18`
   - 说明：租赁期止日期 例：2023-11-18

126. `bdcxsTspzs.cph`
   - 类型：string
   - 数组：否
   - 必填：否
   - 示例/默认值：`京A123456`
   - 说明：车牌号

127. `bdcxsTspzs.xh`
   - 类型：string
   - 数组：否
   - 必填：否
   - 说明：明细序号 相同明细序号CXRXH内从0开始自增 ，新明细序号对应新得一行明细正数行时需再从0起

128. `bdcxsTspzs.fymx`
   - 类型：string
   - 数组：否
   - 必填：否
   - 说明：医疗费用明细

129. `bdcxsTspzs.xmsl`
   - 类型：number
   - 数组：否
   - 必填：否
   - 说明：数量

130. `bdcxsTspzs.dw`
   - 类型：string
   - 数组：否
   - 必填：否
   - 说明：单位

131. `bdcxsTspzs.je`
   - 类型：number
   - 数组：否
   - 必填：否
   - 说明：金额

132. `bdcxsTspzs.se`
   - 类型：number
   - 数组：否
   - 必填：否
   - 说明：税额

133. `bdcxsTspzs.sl`
   - 类型：number
   - 数组：否
   - 必填：否
   - 说明：税率

134. `bdcxsTspzs.ylfwgbm`
   - 类型：string
   - 数组：否
   - 必填：否
   - 说明：医疗服务贯标码

135. `bdcxsTspzs.bz`
   - 类型：string
   - 数组：否
   - 必填：否
   - 说明：备注

136. `invoiceWillBs`
   - 类型：object
   - 数组：是
   - 必填：否
   - 说明：项目明细数据

137. `invoiceWillBs.spbm`
   - 类型：string
   - 数组：否
   - 必填：否
   - 示例/默认值：`11313213123`
   - 说明：商品编码：物料档案，档案中商品编码唯一

138. `invoiceWillBs.xmje`
   - 类型：number
   - 数组：否
   - 必填：否
   - 示例/默认值：`1.2`
   - 说明：不含税金额。不含税金额为空，根据项具价税合计反算。不为空时不进行计算。

139. `invoiceWillBs.xmjshj`
   - 类型：number
   - 数组：否
   - 必填：是
   - 示例/默认值：`50`
   - 说明：项目价税合计，最多2位小数

140. `invoiceWillBs.hh`
   - 类型：string
   - 数组：否
   - 必填：是
   - 示例/默认值：`1`
   - 说明：行号

141. `invoiceWillBs.sl`
   - 类型：number
   - 数组：否
   - 必填：是
   - 示例/默认值：`0.03`
   - 说明：税率

142. `invoiceWillBs.xmmc`
   - 类型：string
   - 数组：否
   - 必填：是
   - 示例/默认值：`222`
   - 说明：项目名称

143. `invoiceWillBs.xmdj`
   - 类型：number
   - 数组：否
   - 必填：否
   - 示例/默认值：`1.12`
   - 说明：商品不含税单价。商品不含税单价为空时，根据项目金额反算。不为空时不进行计算。

144. `invoiceWillBs.xmhsdj`
   - 类型：number
   - 数组：否
   - 必填：否
   - 示例/默认值：`5`
   - 说明：商品含税单价

145. `invoiceWillBs.xmsl`
   - 类型：number
   - 数组：否
   - 必填：否
   - 示例/默认值：`10`
   - 说明：项目数量：如果是成品油、机动车、稀土业务类型的发票，必填

146. `invoiceWillBs.se`
   - 类型：number
   - 数组：否
   - 必填：否
   - 示例/默认值：`5`
   - 说明：税额

147. `invoiceWillBs.spssflbm`
   - 类型：string
   - 数组：否
   - 必填：否
   - 示例/默认值：`43452343123`
   - 说明：商品税收分类编码

148. `invoiceWillBs.dw`
   - 类型：string
   - 数组：否
   - 必填：否
   - 示例/默认值：`个`
   - 说明：单位：如果是机动车专用发票，必填且只能是"辆"，如果是稀土专用发票，必填且只能是"公斤或吨"

149. `invoiceWillBs.ggxh`
   - 类型：string
   - 数组：否
   - 必填：否
   - 示例/默认值：`1/个`
   - 说明：规格型号：如果是机动车专用发票且非生产企业，则规格型号栏位必须填写，填写数据为车辆识别代号/车架号码

150. `invoiceWillBs.fphxz`
   - 类型：string
   - 数组：否
   - 必填：否
   - 示例/默认值：`2`
   - 说明：发票行性质。折扣行性质,0和空:正常行;1:折扣行;2:被折扣行

151. `invoiceWillBs.zkhhh`
   - 类型：string
   - 数组：否
   - 必填：否
   - 示例/默认值：`1`
   - 说明：折扣行行号

152. `invoiceWillBs.zkhbs`
   - 类型：string
   - 数组：否
   - 必填：否
   - 示例/默认值：`Y`
   - 说明：折扣行标识，Y开票时带折扣行，N开票时不带折扣行

153. `invoiceWillBs.zke`
   - 类型：number
   - 数组：否
   - 必填：否
   - 示例/默认值：`0`
   - 说明：折扣额

154. `invoiceWillBs.lslbs`
   - 类型：string
   - 数组：否
   - 必填：否
   - 示例/默认值：`0`
   - 说明：零税率标志。0-出口退税 1-免税 2-不征税 3-普通零税率

155. `invoiceWillBs.zzstsgl`
   - 类型：string
   - 数组：否
   - 必填：否
   - 示例/默认值：`按3%简易征收`
   - 说明：增值税特殊管理。

156. `invoiceWillBs.lymxid`
   - 类型：string
   - 数组：否
   - 必填：否
   - 示例/默认值：`11111`
   - 说明：来源明细id

157. `invoiceWillBs.lymxdjh`
   - 类型：string
   - 数组：否
   - 必填：否
   - 示例/默认值：`mxdj1111`
   - 说明：来源明细单据号

158. `invoiceWillBs.defineTerm`
   - 类型：object
   - 数组：否
   - 必填：否
   - 示例/默认值：`{"特征code":"特征value"}`
   - 说明：明细表的自定义特征项(key value的形式，支持多个，key是特征编码，value是特征值)

159. `invoiceWillBs.detailMotor`
   - 类型：object
   - 数组：否
   - 必填：否
   - 说明：明细扩展属性

160. `invoiceWillBs.detailMotor.mtzldm`
   - 类型：string
   - 数组：否
   - 必填：否
   - 示例/默认值：`0100`
   - 说明：煤炭种类代码。如为0100：政府保供煤；0200：长协煤；0300：市场煤。传递对应的序号即可

161. `invoiceWillBs.detailMotor.mtzldmxy`
   - 类型：string
   - 数组：否
   - 必填：否
   - 示例/默认值：`0201`
   - 说明：煤炭种类代码协议。如为0200：长协煤，则传递下级协议编号，0201：协议期不足半年；0202：协议期在半年至一年之间；0203：协议期在一年至两年之间；0204：协议期在两年以上

162. `invoiceWillBs.detailMotor.cllx`
   - 类型：string
   - 数组：否
   - 必填：否
   - 示例/默认值：`车辆类型`
   - 说明：车辆类型

163. `invoiceWillBs.detailMotor.cpxh`
   - 类型：string
   - 数组：否
   - 必填：否
   - 示例/默认值：`厂牌型号`
   - 说明：厂牌型号

164. `invoiceWillBs.detailMotor.cd`
   - 类型：string
   - 数组：否
   - 必填：否
   - 示例/默认值：`产地`
   - 说明：产地

165. `invoiceWillBs.detailMotor.hgzh`
   - 类型：string
   - 数组：否
   - 必填：否
   - 示例/默认值：`合格证号`
   - 说明：合格证号

166. `invoiceWillBs.detailMotor.jkzmsh`
   - 类型：string
   - 数组：否
   - 必填：否
   - 示例/默认值：`进口证明书号`
   - 说明：进口证明书号

167. `invoiceWillBs.detailMotor.sjdh`
   - 类型：string
   - 数组：否
   - 必填：否
   - 示例/默认值：`商检单号`
   - 说明：商检单号

168. `invoiceWillBs.detailMotor.fdjhm`
   - 类型：string
   - 数组：否
   - 必填：否
   - 示例/默认值：`发动机号码`
   - 说明：发动机号码

169. `invoiceWillBs.detailMotor.cjhm`
   - 类型：string
   - 数组：否
   - 必填：否
   - 示例/默认值：`车架号码`
   - 说明：车架号码

170. `invoiceWillBs.detailMotor.wspzh`
   - 类型：string
   - 数组：否
   - 必填：否
   - 示例/默认值：`完税凭证号`
   - 说明：完税凭证号

171. `invoiceWillBs.detailMotor.dunwei`
   - 类型：string
   - 数组：否
   - 必填：否
   - 示例/默认值：`吨位`
   - 说明：吨位

172. `invoiceWillBs.detailMotor.xcrs`
   - 类型：string
   - 数组：否
   - 必填：否
   - 示例/默认值：`限乘人数`
   - 说明：限乘人数

173. `invoiceWillBs.detailMotor.gmfsfzjlx`
   - 类型：string
   - 数组：否
   - 必填：否
   - 示例/默认值：`1`
   - 说明：机动车统一销售发票购买方身份证件类型。1=纳税人识别号/统一社会信用号/身份证号码；2=其他征件号码

174. `invoiceWillBs.detailMotor.xfdw`
   - 类型：string
   - 数组：否
   - 必填：否
   - 示例/默认值：`卖方单位/个人`
   - 说明：卖方单位/个人

175. `invoiceWillBs.detailMotor.xfhm`
   - 类型：string
   - 数组：否
   - 必填：否
   - 示例/默认值：`二手车-卖方单位代码/身份证号`
   - 说明：二手车-卖方单位代码/身份证号

176. `invoiceWillBs.detailMotor.xfdz`
   - 类型：string
   - 数组：否
   - 必填：否
   - 示例/默认值：`卖方单位/个人住址`
   - 说明：卖方单位/个人住址

177. `invoiceWillBs.detailMotor.xfdh`
   - 类型：string
   - 数组：否
   - 必填：否
   - 示例/默认值：`卖方电话`
   - 说明：卖方电话

178. `invoiceWillBs.detailMotor.cpzh`
   - 类型：string
   - 数组：否
   - 必填：否
   - 示例/默认值：`车牌照号`
   - 说明：车牌照号

179. `invoiceWillBs.detailMotor.djzh`
   - 类型：string
   - 数组：否
   - 必填：否
   - 示例/默认值：`登记证号`
   - 说明：登记证号

180. `invoiceWillBs.detailMotor.cgsmc`
   - 类型：string
   - 数组：否
   - 必填：否
   - 示例/默认值：`转入地车辆车管所名称`
   - 说明：转入地车辆车管所名称

181. `invoiceWillBs.detailMotor.saleNaturalPersonId`
   - 类型：string
   - 数组：否
   - 必填：否
   - 示例/默认值：`Y`
   - 说明：销方(卖方)自然人标识 Y：N

182. `invoiceWillBs.detailMotor.saleNationalityCode`
   - 类型：string
   - 数组：否
   - 必填：否
   - 示例/默认值：`156`
   - 说明：销方(卖方)国籍编码

183. `invoiceWillBs.detailMotor.saleIdType`
   - 类型：string
   - 数组：否
   - 必填：否
   - 示例/默认值：`201`
   - 说明：销方(卖方)证件类型

184. `invoiceWillBs.detailMotor.saleIdNumber`
   - 类型：string
   - 数组：否
   - 必填：否
   - 示例/默认值：`销方(卖方)证件号码`
   - 说明：销方(卖方)证件号码

185. `invoiceWillBs.detailMotor.jzfwfsd`
   - 类型：string
   - 数组：否
   - 必填：否
   - 示例/默认值：`北京市`
   - 说明：建筑服务发生地。数电特殊票种-建筑服务使用

186. `invoiceWillBs.detailMotor.jzxmmc`
   - 类型：string
   - 数组：否
   - 必填：否
   - 示例/默认值：`第九区`
   - 说明：建筑项目名称。数电特殊票种-建筑服务使用

187. `invoiceWillBs.detailMotor.fymx`
   - 类型：string
   - 数组：否
   - 必填：否
   - 说明：费用明细

188. `invoiceWillBs.detailMotor.ylfwgbm`
   - 类型：string
   - 数组：否
   - 必填：否
   - 说明：医疗服务贯标码

189. `invoiceWillBs.detailMotor.qt`
   - 类型：string
   - 数组：否
   - 必填：否
   - 说明：其他

190. `invoiceWillBs.detailMotor.bz`
   - 类型：string
   - 数组：否
   - 必填：否
   - 说明：医疗住院明细备注

191. `cepzs`
   - 类型：object
   - 数组：否
   - 必填：否
   - 说明：差额征收凭证

192. `cepzs.xh`
   - 类型：string
   - 数组：否
   - 必填：否
   - 示例/默认值：`1`
   - 说明：序号

193. `cepzs.pzlx`
   - 类型：string
   - 数组：否
   - 必填：否
   - 示例/默认值：`09`
   - 说明：10-专用发票、11-普通发票、12-海关进口增值税专用缴款书、13-航空运输电子客票行程单、14-铁路电子客票、15-税收完税证明（契税）、16-中央非税收入统一票据（土地出让金）、05-财政票据、06-法院裁决书、0
     9-其他扣除凭证； 原凭证类型：01-数电票、02-增值税专用发票、03-增值税普通发票、04-营业税发票、07-契税完税凭证、08-其他发票类，税局已经在20251230作废不再使用。

194. `cepzs.fphm`
   - 类型：string
   - 数组：否
   - 必填：否
   - 示例/默认值：`333`
   - 说明：数电发票号码，当凭证类型为10-专用发票”、11-普通发票且为数电发票时，数电发票号码必填。当凭证类型为13-航空运输电子客票行程单、14-铁路电子客票时，数电发票号码必填。

195. `cepzs.fpdm`
   - 类型：string
   - 数组：否
   - 必填：否
   - 示例/默认值：`323`
   - 说明：发票代码，当凭证类型为10-专用发票”、11-普通发票且为税控发票时，发票代码必填；当凭证类型为16-中央非税收入统一票据（土地出让金）时，发票代码必填。

196. `cepzs.zzfphm`
   - 类型：string
   - 数组：否
   - 必填：否
   - 示例/默认值：`3333`
   - 说明：发票号码，当凭证类型为10-专用发票”、11-普通发票且为税控发票时，发票号码必填。

197. `cepzs.pzhm`
   - 类型：string
   - 数组：否
   - 必填：否
   - 示例/默认值：`33`
   - 说明：凭证号码，当凭证类型为 12-海关进口增值税专用缴款书、15-税收完税证明（契税）、16-中央非税收入统一票据（土地出让金）、05-财政票据、06-法院裁决书时，凭证号码必填。

198. `cepzs.kjrq`
   - 类型：string
   - 数组：否
   - 必填：否
   - 示例/默认值：`2023-01-04`
   - 说明：开具日期，当凭证类型为10-专用发票、11-普通发票、13-航空运输电子客票行程单、14-铁路电子客票时必填。格式要求示例：2025-12-23

199. `cepzs.hjje`
   - 类型：string
   - 数组：否
   - 必填：否
   - 示例/默认值：`100`
   - 说明：合计金额

200. `cepzs.kce`
   - 类型：string
   - 数组：否
   - 必填：否
   - 示例/默认值：`3`
   - 说明：扣除额

201. `cepzs.bz`
   - 类型：string
   - 数组：否
   - 必填：否
   - 示例/默认值：`1`
   - 说明：凭证备注，当凭证类型为09-其他扣除凭证时，凭证备注可填写：劳务派遣员工工资、福利、为其办理社会保险及住房公积金。当开票方税号为乐企通道且凭证类型为“其他扣除凭证”时，备注必填

202. `cepzs.ly`
   - 类型：string
   - 数组：否
   - 必填：否
   - 示例/默认值：`手工录入`
   - 说明：录入方式，取值范围如下：手工录入 勾选录入 模板录入

203. `cepzs.bckcje`
   - 类型：string
   - 数组：否
   - 必填：否
   - 示例/默认值：`1`
   - 说明：本次扣除金额

204. `cepzs.pzhjje`
   - 类型：string
   - 数组：否
   - 必填：否
   - 示例/默认值：`1`
   - 说明：凭证合计金额

205. `zdybz`
   - 类型：string
   - 数组：否
   - 必填：否
   - 示例/默认值：`1`
   - 说明：自定义备注

206. `allElcUserName`
   - 类型：string
   - 数组：否
   - 必填：否
   - 说明：数电发票用户名

207. `bustype`
   - 类型：string
   - 数组：否
   - 必填：否
   - 说明：交易类型(支持id和code)     当交易类型为空时，程序自动去【交易类型】界面获取开票申请单设置的默认交易类型。 如获取到，则直接使用默认值，如未获取到，则报错。 示例: 2282959898611968

208. `sqr`
   - 类型：string
   - 数组：否
   - 必填：否
   - 说明：申请人

209. `sqbm`
   - 类型：string
   - 数组：否
   - 必填：否
   - 说明：申请部门

210. `defineTerm`
   - 类型：object
   - 数组：否
   - 必填：否
   - 示例/默认值：`{"特征code":"特征value"}`
   - 说明：申请单特征字段

## 请求示例

```text
Url: /0000L6YQ8AVLFUZPXD0000/yonbip/tax/invoiceclient-web/api/invoice-will/save?access_token=访问令牌
Body: {
	"lyid": "123123",
	"lydjh": "45345312",
	"lyBillTypeId": "12312312",
	"djqqlsh": "4545343123",
	"lylx": "1",
	"orgCode": "123",
	"gmfMc": "名称",
	"gmfNsrsbh": "231321242",
	"gmfYhzh": "北京银行  12315",
	"gmfDzdh": "北京海淀 12312326566",
	"gmfDz": "北京海淀",
	"gmfDh": "155323265",
	"gmfYh": "北京银行",
	"gmfZh": "121323",
	"xsfMc": "销方名称",
	"xsfNsrsbh": "21313213",
	"xsfDzdh": "北京海淀 1553232656",
	"xsfYhzh": "销方银行 122323",
	"xsfDz": "地址 16665655566",
	"xsfDh": "15532329899",
	"xsfYh": "北京银行",
	"xsfZh": "12513163",
	"lc": "2",
	"bz": "123",
	"fplx": "1",
	"zdrq": "2023-11-22",
	"revurl1": "http:1231321.com",
	"revemail": "1464658255@qq.com",
	"revphone": "15532329878",
	"kpr": "张三",
	"skr": "张三",
	"fhr": "张三",
	"tsyw": "0",
	"secretLevelName": "公开",
	"autoMake": "false",
	"einvoiceShowGxfDzDh": "N",
	"einvoiceShowSkrShr": "N",
	"einvoiceShowGxfYhZh": "",
	"dfgtgmbz": "N",
	"zrrbs": "N",
	"zjlx": "201",
	"zjhm": "120110202101111111",
	"guoji": "156",
	"yfpDm": "",
	"yfpHm": "",
	"hzxxbbh": "",
	"hcyy": "",
	"mqkfrl": "12",
	"gjql": "12",
	"gzwhjhff": "21",
	"zsfs": "0",
	"kqysssxbgglbm": "3333",
	"bxdh": "33",
	"cphcbdjh": "豫MUX555",
	"skssq": "2023-01 2023-03",
	"dsccsje": "3",
	"znj": "111",
	"jehj": "1",
	"cjh": "233134133384938",
	"scrapProdSaleType": "01",
	"cpyqylb": "08",
	"tspzs": [
		{
			"ysmxxh": "1",
			"ysgjzl": "铁路运输",
			"ysgjph": "京A111111",
			"qyd": "北京",
			"ddd": "德州",
			"yshwmc": "苹果",
			"cxr": "张三",
			"chuxrq": "2025-03-13",
			"cxrzjlxDm": "101",
			"sfzjhm": "371233333323333323",
			"cfd": "北京",
			"lkddd": "北京",
			"zwdj": "一等座",
			"jtgjlxDm": "1"
		}
	],
	"bdcxsTspzs": [
		{
			"cxrxh": "1",
			"bdcdz": "北京市辖区东城区滨河公园5-4-1803",
			"wqhtbabh": "32333",
			"tdzzsxmbh": "123331",
			"bdcdwdm": "32333",
			"hdjsjg": "3.2",
			"sjcjhsje": "3.2",
			"kdsbz": "N",
			"cqzsbh": "3233",
			"mjdw": "平方米",
			"zlqq": "2022-11-18",
			"zlqz": "2023-11-18",
			"cph": "京A123456"
		}
	],
	"invoiceWillBs": [
		{
			"spbm": "11313213123",
			"xmje": 1.2,
			"xmjshj": 50,
			"hh": "1",
			"sl": 0.03,
			"xmmc": "222",
			"xmdj": 1.12,
			"xmhsdj": 5,
			"xmsl": 10,
			"se": 5,
			"spssflbm": "43452343123",
			"dw": "个",
			"ggxh": "1/个",
			"fphxz": "2",
			"zkhhh": "1",
			"zkhbs": "Y",
			"zke": 0,
			"lslbs": "0",
			"zzstsgl": "按3%简易征收",
			"lymxid": "11111",
			"lymxdjh": "mxdj1111",
			"defineTerm": {
				"invoice_bz": "123",
				"invoice_remark": "记录"
			},
			"detailMotor": {
				"mtzldm": "0100",
				"mtzldmxy": "0201",
				"cllx": "车辆类型",
				"cpxh": "厂牌型号",
				"cd": "产地",
				"hgzh": "合格证号",
				"jkzmsh": "进口证明书号",
				"sjdh": "商检单号",
				"fdjhm": "发动机号码",
				"cjhm": "车架号码",
				"wspzh": "完税凭证号",
				"dunwei": "吨位",
				"xcrs": "限乘人数",
				"gmfsfzjlx": "1",
				"xfdw": "卖方单位/个人",
				"xfhm": "二手车-卖方单位代码/身份证号",
				"xfdz": "卖方单位/个人住址",
				"xfdh": "卖方电话",
				"cpzh": "车牌照号",
				"djzh": "登记证号",
				"cgsmc": "转入地车辆车管所名称",
				"saleNaturalPersonId": "Y",
				"saleNationalityCode": "156",
				"saleIdType": "201",
				"saleIdNumber": "销方(卖方)证件号码"
			}
		}
	],
	"cepzs": {
		"xh": "1",
		"pzlx": "09",
		"fphm": "333",
		"fpdm": "323",
		"zzfphm": "3333",
		"pzhm": "33",
		"kjrq": "2023-01-04",
		"hjje": "100",
		"kce": "3",
		"bz": "1",
		"ly": "手工录入",
		"bckcje": "1",
		"pzhjje": "1"
	},
	"zdybz": "1"
}
```

## 返回参数

### 返回字段

1. `code`
   - 类型：string
   - 数组：否
   - 必填：否
   - 示例/默认值：`200`
   - 说明：Status Code

2. `message`
   - 类型：string
   - 数组：否
   - 必填：否
   - 示例/默认值：`Operation successful`
   - 说明：Operation Information

## 返回示例

### 成功示例

无。

### 失败示例

无。

## 错误码

| 错误码 | 错误说明 | 处理建议 |
| --- | --- | --- |
| 1001 |  |  |


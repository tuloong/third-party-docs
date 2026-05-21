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
- 完整调用地址：https://c2.yonyoucloud.com/iuap-api-gateway/yonbip/tax/invoiceclient-web/api/invoiceApply/insertWithSplitJson
- 鉴权方式：access_token 作为 Query 参数传递（?access_token=）

## 功能说明

根据税控设备管理中预设的限额，自动将超过限额的开票申请拆分为多张发票。

## 请求参数

### Query 参数

| 名称 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| access_token | string | 是 | 接口令牌（平台鉴权机制，由网关统一附加） |

### Body 参数

Body 为 JSON，顶层为 `data`。

#### 顶层字段

| 字段 | 类型 | 数组 | 必填 | 说明 |
| --- | --- | --- | --- | --- |
| data.einvoiceApplyList | object | 是 | 是 | 开票请求体列表（增值税基础票种请求体，特殊票种参照特殊发票示例） |
| data.autoAudit | boolean | 否 | 否 | 是否自动审核。true: 自动审核直接开票；false: 需人工确认。不传默认 true |

#### data.einvoiceApplyList[] 基础字段

| 字段 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| fpqqlsh | string | 是 | 发票请求流水号，由调用方生成，需保证唯一性 |
| fplx | string | 否 | 发票类型。1: 增值税电子普通发票；2: 增值税电子专用发票；3: 增值税普通发票；4: 增值税专用发票；5: 机动车销售统一发票；8: 增值税电子普通发票(成品油)；10: 成品油普通发票；11: 成品油专用发票；15: 二手车销售统一发票；31: 数电专用发票；32: 数电普通发票；33: 数电纸质发票(增值税专用发票)；34: 数电纸质发票(普通发票)。默认为 1 |
| xsfNsrsbh | string | 是 | 销售方纳税人识别号 |
| xsfMc | string | 否 | 销售方名称 |
| xsfDz | string | 否 | 销售方地址（数电发票拆分字段） |
| xsfDh | string | 否 | 销售方电话（数电发票拆分字段） |
| xsfYh | string | 否 | 销售方开户银行（数电发票拆分字段） |
| xsfZh | string | 否 | 销售方银行账号（数电发票拆分字段） |
| gmfNsrsbh | string | 否 | 购买方纳税人识别号 |
| gmfMc | string | 是 | 购买方名称 |
| gmfDz | string | 否 | 购买方地址（数电发票拆分字段） |
| gmfDh | string | 否 | 购买方电话（数电发票拆分字段） |
| gmfYh | string | 否 | 购买方开户银行（数电发票拆分字段） |
| gmfZh | string | 否 | 购买方银行账号（数电发票拆分字段） |
| gmfDzdh | string | 否 | 购买方地址、电话（合并字段） |
| gmfYhzh | string | 否 | 购买方银行、账号（合并字段） |
| kpr | string | 否 | 开票人 |
| skr | string | 否 | 收款人 |
| fhr | string | 否 | 复核人 |
| jshj | number | 是 | 价税合计，最大 15 位整数 + 2 位小数 |
| hjje | number | 否 | 合计金额（不含税），最大 15 位整数 + 2 位小数 |
| hjse | number | 否 | 合计税额，最大 15 位整数 + 2 位小数 |
| bz | string | 否 | 备注 |
| bmbBbh | string | 否 | 编码表版本号 |
| orgcode | string | 条件必填 | 开票点编码。当同一税号有多个开票点时必填，用于确定唯一开票点 |
| lyid | string | 是 | 请求来源唯一标识（来源单据主键ID） |
| lydjh | string | 否 | 来源单据号 |
| lylx | string | 否 | 来源类型 |
| wxorderid | string | 否 | 微信订单号 |
| wxappid | string | 否 | 微信商户 AppID |
| wxauthid | string | 否 | 微信批量插入标识 |
| zdybz | string | 否 | 自定义备注 |
| zsfs | string | 否 | 征收方式。0: 普通征收；2: 差额征收-差额开票；3: 差额征收-全额开票 |
| tspz | string | 条件必填 | 特殊票种代码。E03: 建筑服务；E04: 货物运输服务；E05: 不动产销售；E06: 不动产经营租赁；E07: 代收车船税；E09: 旅客运输服务；E22: 成品油 |
| define | object | 否 | 自定义特征项，key-value 形式 |

#### data.einvoiceApplyList[] 特殊票种专用字段

| 字段 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| tdzzsxmbh | string | 条件必填 | 土地增值税项目编号（建筑服务 E03、不动产销售 E05 票种专用） |
| bdcdz | string | 条件必填 | 不动产地址，格式: 省/市/区*详细地址（不动产租赁 E06、不动产销售 E05 票种专用） |
| zlqq | string | 条件必填 | 租赁日期起，格式 yyyy-MM-dd（不动产租赁 E06 票种专用） |
| zlqz | string | 条件必填 | 租赁日期止，格式 yyyy-MM-dd（不动产租赁 E06 票种专用） |
| kdsbz | string | 条件必填 | 是否跨地市标志。Y: 是；N: 否（建筑服务 E03、不动产 E05/E06 票种专用） |
| wqhtbabh | string | 否 | 网签合同备案编号（不动产销售 E05 票种专用） |
| bdcdwdm | string | 否 | 不动产单元代码（不动产销售 E05 票种专用） |
| hdjsjg | string | 否 | 核定计税价格（不动产销售 E05 票种专用，非核定计税可不填） |
| sjcjhsje | string | 条件必填 | 实际成交含税金额（不动产销售 E05 票种专用，若按核定计税价格征税则为必填） |
| bxdh | string | 否 | 保险单号（代收车船税 E07 票种专用） |
| cphcbdjh | string | 否 | 车牌号/船舶登记号（代收车船税 E07 票种专用） |
| skssq | string | 否 | 税款所属期，格式 yyyy-MM+空格+yyyy-MM（代收车船税 E07 票种专用） |
| dsccsje | string | 否 | 代收车船税金额（代收车船税 E07 票种专用） |
| znj | string | 否 | 滞纳金（代收车船税 E07 票种专用） |
| jehj | string | 否 | 金额合计（代收车船税 E07 票种专用） |
| cjh | string | 否 | 车辆识别代码/车架号码（代收车船税 E07 票种专用） |

#### data.einvoiceApplyList[].items[] 明细行字段

| 字段 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| fphxz | int | 否 | 发票行性质。0: 正常行；1: 折扣行；2: 被折扣行 |
| xmmc | string | 是 | 项目名称 |
| xmbm | string | 否 | 项目编码。若项目名称为空，将根据项目编码匹配云平台商品档案 |
| spbm | string | 是 | 商品税收分类编码 |
| ggxh | string | 否 | 规格型号。非数电发票最大 40 字符，数电发票最大 150 字符 |
| dw | string | 否 | 单位 |
| xmsl | string/number | 否 | 项目数量 |
| xmdj | number | 否 | 项目单价（不含税） |
| xmhsdj | number | 否 | 项目含税单价 |
| xmje | number | 否 | 项目金额（不含税） |
| xmjshj | number | 是 | 项目价税合计 |
| sl | number | 是 | 税率，如 0.13 表示 13% |
| se | number | 否 | 税额 |
| hh | string | 条件必填 | 行号。有折扣行时必填 |
| zkhhh | string | 条件必填 | 折扣行行号。有折扣行时必填，关联被折扣行的行号 |
| zxbm | string | 否 | 自行编码 |
| yhzcbs | string | 否 | 销售优惠标识。0: 不使用；1: 使用 |
| lslbs | string | 否 | 零税率标识。空: 非零税率；0: 出口退税；1: 免税；2: 不征收；3: 普通零税率 |
| zzstsgl | string | 否 | 优惠政策说明 |
| kce | number | 否 | 扣除额（差额征税时使用，差额开票时填扣除总额，全额开票时填 0） |
| define | object | 否 | 自定义特征项，key-value 形式 |
| detailMotor | object | 否 | 机动车/不动产明细（见下方） |

#### data.einvoiceApplyList[].items[].detailMotor（机动车/不动产明细）

| 字段 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| cqzsbh | string | 条件必填 | 产权证书编号（不动产 E05/E06 票种专用，无则填"无"） |
| jzfwfsd | string | 条件必填 | 建筑服务发生地，格式: 省/市/区（建筑服务 E03 票种专用） |
| jzxmmc | string | 条件必填 | 建筑项目名称（建筑服务 E03 票种专用） |

#### data.einvoiceApplyList[].tspzs[]（特殊票种运输/旅客信息）

| 字段 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| ysmxxh | string | 是 | 运输明细序号，从 1 开始 |
| ysgjzl | string | 否 | 运输工具种类（铁路运输/公路运输/水路运输/航空运输/管道运输/其他） |
| ysgjph | string | 否 | 运输工具牌号/型号 |
| qyd | string | 否 | 起运地，格式: 省>市>区 |
| ddd | string | 否 | 到达地，格式: 省>市>区 |
| yshwmc | string | 否 | 运输货物名称 |
| cxrxh | string | 否 | 出行人序号（旅客运输 E09 专用，从 1 开始） |
| cxr | string | 否 | 出行人姓名（旅客运输 E09 专用） |
| chuxrq | string | 否 | 出行日期，格式 yyyy-MM-dd（旅客运输 E09 专用） |
| cxrzjlxDm | string | 否 | 出行人证件类型代码（旅客运输 E09 专用，详见证件类型枚举表） |
| sfzjhm | string | 否 | 身份证件号码（旅客运输 E09 专用） |
| cfd | string | 否 | 出发地（旅客运输 E09 专用） |
| lkddd | string | 否 | 到达地（旅客运输 E09 专用） |
| zwdj | string | 条件必填 | 座位等级（旅客运输 E09 专用，飞机/火车/船舶时必填） |
| jtgjlxDm | string | 条件必填 | 交通工具类型代码。1: 飞机；2: 火车；3: 长途汽车；4: 公共交通；5: 出租车；6: 汽车；7: 船舶；9: 其他（旅客运输 E09 专用） |

#### data.einvoiceApplyList[].cepzs[]（差额征税扣除凭证列表）

| 字段 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| xh | number | 是 | 序号 |
| pzlx | string | 是 | 凭证类型。10: 增值税专用发票；11: 增值税普通发票；12: 海关进口增值税专用缴款书；13: 航空运输电子客票行程单；14: 铁路电子客票；15: 契税完税凭证；16: 中央非税收入统一票据(土地出让金)；05: 财政票据；06: 法院裁决书；09: 其他扣除凭证。旧编码 01-08 已于 2025-12-30 停用 |
| fphm | string | 条件必填 | 全电发票号码（凭证类型为 10/11 数电票及 13/14 时填写） |
| fpdm | string | 条件必填 | 发票代码（凭证类型为 10/11 税控发票或 16 土地出让金票据时填写） |
| zzfphm | string | 条件必填 | 发票号码（凭证类型为 10/11 税控发票时填写） |
| pzhm | string | 条件必填 | 凭证号码（凭证类型为 12/15/16/05/06 时填写） |
| kjrq | string | 条件必填 | 开票日期，格式 yyyy-MM-dd（凭证类型为 10/11/13/14 时填写） |
| hjje | number | 否 | 合计金额 |
| kce | number | 否 | 扣除额 |
| bz | string | 条件必填 | 备注（凭证类型 09 且特定渠道时必填） |
| ly | string | 否 | 录入方式。手工录入 / 勾选录入 / 模板录入 |
| bckcje | number | 否 | 本次扣除金额，最大 15 位整数 + 2 位小数 |
| pzhjje | number | 否 | 凭证合计金额，最大 15 位整数 + 2 位小数 |

#### data.einvoiceApplyList[].email（邮箱交付，在 einvoiceApplyList 内部）

| 字段 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| fpqqlsh | string | 是 | 发票请求流水号，需与上级 einvoiceApplyList 条目一致 |
| address | string | 是 | 邮箱地址 |

#### data.einvoiceApplyList[].sms（短信交付，在 einvoiceApplyList 内部）

| 字段 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| fpqqlsh | string | 是 | 发票请求流水号，需与上级 einvoiceApplyList 条目一致 |
| address | string | 是 | 手机号 |

#### data.einvoiceApplyList[].url（URL 交付，在 einvoiceApplyList 内部）

| 字段 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| fpqqlsh | string | 是 | 发票请求流水号，需与上级 einvoiceApplyList 条目一致 |
| url | string | 是 | 回调地址 URL |

#### data.einvoiceApplyList[].delurl（退回地址，在 einvoiceApplyList 内部）

| 字段 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| fpqqlsh | string | 是 | 发票请求流水号，需与上级 einvoiceApplyList 条目一致 |
| url | string | 是 | 退回地址 URL |

## 请求示例

### 基础开票示例

```json
{
    "data": {
        "einvoiceApplyList": [{
            "fpqqlsh": "20250521001",
            "fplx": "32",
            "xsfNsrsbh": "111222333456333",
            "xsfMc": "测试销售方",
            "gmfNsrsbh": "53513115",
            "gmfMc": "北京用友",
            "gmfDzdh": "海淀用友产业园 666232",
            "gmfYhzh": "海淀银行 233232",
            "kpr": "张三",
            "skr": "李四",
            "fhr": "王五",
            "jshj": 11700.00,
            "hjje": 10000.00,
            "hjse": 1700.00,
            "bz": "备注内容",
            "bmbBbh": "28.0",
            "orgcode": "10300002",
            "lyid": "SOURCE001",
            "zdybz": "自定义备注",
            "define": {
                "特征key": "特征值示例"
            },
            "items": [{
                "fphxz": 0,
                "xmmc": "测试商品",
                "xmbm": "3010102020100000000",
                "spbm": "3010102020100000000",
                "ggxh": "XXL",
                "dw": "件",
                "xmsl": 100,
                "xmdj": 100.00,
                "xmje": 10000.00,
                "xmjshj": 11700.00,
                "sl": 0.17,
                "se": 1700.00,
                "hh": "1",
                "define": {
                    "特征key": "特征值示例"
                }
            }],
            "email": {
                "fpqqlsh": "20250521001",
                "address": "email@example.com"
            },
            "sms": {
                "fpqqlsh": "20250521001",
                "address": "13800138000"
            },
            "url": {
                "fpqqlsh": "20250521001",
                "url": "https://example.com/callback"
            },
            "delurl": {
                "fpqqlsh": "20250521001",
                "url": "https://example.com/audit-return"
            },
            "autoAudit": true
        }]
    }
}
```

### 特殊票种示例

#### 1. 数电不动产租赁（tspz=E06）

```json
[{
    "fpqqlsh": "202302171613262049",
    "fplx": "31",
    "xsfNsrsbh": "441234567AAAAAA",
    "xsfMc": "htt灰度01AAAA",
    "tspz": "E06",
    "bdcdz": "北京市/北京市辖区/东城区*滨河公园5-4-1803",
    "zlqq": "2023-03-22",
    "zlqz": "2023-04-30",
    "kdsbz": "N",
    "orgcode": "htt001",
    "gmfNsrsbh": "913418025914242188",
    "gmfMc": "labo1",
    "kpr": "hett",
    "skr": "hett",
    "fhr": "hett",
    "jshj": 14837.17,
    "hjje": 13130.24,
    "hjse": 1706.93,
    "bmbBbh": "28.0",
    "xsfDz": "北京",
    "xsfDh": "13141422555",
    "xsfYh": "北京银行",
    "xsfZh": "65456787889",
    "items": [{
        "fphxz": 0,
        "xmmc": "*经营租赁*小熊",
        "xmbm": "3040502020101000000",
        "spbm": "3040502020101000000",
        "xmje": 13130.24,
        "xmjshj": 14837.17,
        "sl": 0.13,
        "se": 1706.93,
        "hh": 1,
        "dw": "公顷",
        "xmsl": 870,
        "detailMotor": {
            "cqzsbh": "2324423231231231"
        }
    }]
}]
```

#### 2. 数电建筑服务（tspz=E03）

```json
[{
    "fpqqlsh": "202302171613262049",
    "fplx": "31",
    "xsfNsrsbh": "441234567AAAAAA",
    "xsfMc": "htt灰度01AAAA",
    "tspz": "E03",
    "tdzzsxmbh": "232342131",
    "kdsbz": "N",
    "orgcode": "htt001",
    "gmfNsrsbh": "913418025914242188",
    "gmfMc": "labo1",
    "kpr": "hett",
    "skr": "hett",
    "fhr": "hett",
    "jshj": 14837.17,
    "hjje": 13130.24,
    "hjse": 1706.93,
    "bmbBbh": "28.0",
    "items": [{
        "fphxz": 0,
        "xmmc": "*建筑服务*工程建造",
        "spbm": "3040502020101000000",
        "xmje": 13130.24,
        "xmjshj": 14837.17,
        "sl": 0.13,
        "se": 1706.93,
        "hh": 1,
        "dw": "平方米",
        "xmsl": 870,
        "detailMotor": {
            "jzfwfsd": "北京市/北京市辖区/东城区",
            "jzxmmc": "地砖铺设工程"
        }
    }]
}]
```

#### 3. 数电货物运输服务（tspz=E04）

```json
[{
    "fpqqlsh": "202302171613262050",
    "fplx": "31",
    "xsfNsrsbh": "44123456789012AAAAAA",
    "xsfMc": "AAAA广东全电",
    "tspz": "E04",
    "orgcode": "AAAA03",
    "gmfNsrsbh": "913418025914242188",
    "gmfMc": "labo1",
    "kpr": "hett",
    "skr": "hett",
    "fhr": "hett",
    "jshj": 14837.17,
    "hjje": 13130.24,
    "hjse": 1706.93,
    "bmbBbh": "28.0",
    "items": [{
        "fphxz": 0,
        "xmmc": "*运输服务*国内道路货物运输服务",
        "spbm": "3040502020101000000",
        "xmje": 13130.24,
        "xmjshj": 14837.17,
        "sl": 0.13,
        "se": 1706.93,
        "hh": 1,
        "dw": "吨",
        "xmsl": 870
    }],
    "tspzs": [{
        "ysmxxh": "1",
        "ysgjzl": "铁路运输",
        "ysgjph": "G443",
        "qyd": "北京市>北京市辖区>东城区",
        "ddd": "河北省>石家庄市>长安区",
        "yshwmc": "煤矿"
    }, {
        "ysmxxh": "2",
        "ysgjzl": "铁路运输",
        "ysgjph": "Z3232",
        "qyd": "河北省>石家庄市>桥西区",
        "ddd": "天津市>天津市辖区>和平区",
        "yshwmc": "瓷器"
    }]
}]
```

> 更多特殊票种示例（不动产销售 E05、旅客运输 E09、代收车船税 E07、差额征收等）见在线文档。

## 返回参数

### 返回字段

| 字段 | 类型 | 说明 |
| --- | --- | --- |
| code | string | 返回码。200: 成功；其他: 失败 |
| message | string | 返回消息描述 |
| datas | string/object | 业务数据（自动拆分后会返回拆分后的发票信息） |

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
| 1002 | 数据不存在 / Data does not exist | 对应数据不存在 |
| 9999 | 数据不合法 / Data is not valid | 错误信息包含具体详情，如：纳税人识别号 XXX 未启用对应票种 |

> 注：在线文档未包含完整错误码列表（抓取时被截断），以上为本地已有记录。

## 出行人证件类型代码枚举

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
| 224 | 就业失业登记证 | 225 | 退休证 |
| 226 | 离休证 | 227 | 中国护照 |
| 228 | 城镇退役士兵自谋职业证 | 229 | 随军家属身份证明 |
| 230 | 军官转业证书 | 231 | 义务兵退出现役证 |
| 232 | 士官退出现役证 | 233 | 外国人永久居留身份证 |
| 234 | 就业创业证 | 235 | 香港特别行政区护照 |
| 236 | 澳门特别行政区护照 | 237 | 港澳居民居住证 |
| 238 | 台湾居民居住证 | 239 | 外国人工作许可证(A类) |
| 240 | 外国人工作许可证(B类) | 241 | 外国人工作许可证(C类) |
| 291 | 出生医学证明 | 299 | 其他个人证件 |

## 字段命名说明

在线文档参数定义为 camelCase（如 `fpqqlsh`、`xsfNsrsbh`），但示例中常使用 ALL_CAPS（如 `FPQQLSH`、`XSF_NSRSBH`）。JSON key 区分大小写，调用时需确认服务端实际接受的格式。**本本地文档以 camelCase 为准**，具体以实际 API 测试结果为准。

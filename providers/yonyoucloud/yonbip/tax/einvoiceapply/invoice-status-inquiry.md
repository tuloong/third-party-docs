# Invoice Status Inquiry

来源页面：

- https://open.yonyoucloud.com/#/doc-center/docDes/api?apiId=1969588327580958724&isOrigin=1&selectApiTab=open&from=&iframe=

机器可抓取的详情接口：

- https://open.yonyoucloud.com/iuap-ipaas-base/openPortal/api/getByVersionForTest/1969588327580958724/running?scene=open&isOrigin=1&isAjax=1

## 基本信息

- apiId：1969588327580958724
- API 类目：开票管理
- 产品：税务服务
- 更新时间：2025-11-20 10:52:21.000
- 请求方法：POST
- Content-Type：application/json
- 接口路径：/yonbip/tax/invoiceclient-web/api/invoiceApply/queryInvoiceStatusWithJson
- 完整调用地址：https://c2.yonyoucloud.com/iuap-api-gateway/yonbip/tax/invoiceclient-web/api/invoiceApply/queryInvoiceStatusWithJson
- 鉴权方式：access_token 作为 Query 参数传递（?access_token=）

## 请求参数

### Query 参数

| 名称 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| access_token | string | 是 | 接口令牌（平台鉴权机制，由网关统一附加） |

### Body 参数

| 字段 | 类型 | 必填 | 说明 | 示例 |
| --- | --- | --- | --- | --- |
| fpqqlsh | string | 是 | 发票请求流水号，由开票申请时传入的流水号 | "1354466355222" |

## 请求示例

```json
{
    "fpqqlsh": "1354466355222"
}
```

## 返回参数

### 顶层返回字段

| 字段 | 类型 | 说明 |
| --- | --- | --- |
| code | string | 返回码。200/0000: 成功；其他: 失败 |
| message | string | 返回消息描述 |
| data | object | 业务数据容器 |

### data 对象

| 字段 | 类型 | 说明 |
| --- | --- | --- |
| data.fpqqlsh | string | 发票请求流水号 |
| data.bsstatus | string | 版式状态。0: 版式生成成功；1: 版式生成失败 |
| data.smsState | string | 短信交付状态。0: 未交付；1: 交付失败；2: 交付成功 |
| data.emailState | string | 邮件交付状态。0: 未交付；1: 交付失败；2: 交付成功 |
| data.errmsg | string | 错误信息（开票失败时返回失败原因） |
| data.invoiceDetail | object | 发票详细信息（开票成功后返回） |

### data.invoiceDetail 对象

| 字段 | 类型 | 说明 |
| --- | --- | --- |
| invoiceDetail.fpqqlsh | string | 发票请求流水号 |
| invoiceDetail.pdf | string | 电子发票 PDF/OFD 文件 Base64 编码 |
| invoiceDetail.corpid | string | 租户 ID |
| invoiceDetail.data | object | 发票核心数据 |

### data.invoiceDetail.data 核心发票数据

| 字段 | 类型 | 说明 |
| --- | --- | --- |
| data.fpzt | string | 发票状态。1: 待开票；2: 开票中；3: 开票失败；4: 开票成功 |
| data.fpDm | string | 发票代码 |
| data.fpHm | string | 发票号码 |
| data.fplx | string | 发票类型。1: 增值税电子普通发票；2: 增值税电子专用发票；3: 增值税普通发票；4: 增值税专用发票；5: 机动车销售统一发票；8: 增值税电子普通发票(成品油)；10: 成品油普通发票；11: 成品油专用发票；15: 二手车销售统一发票；31: 数电专用发票；32: 数电普通发票；33: 数电纸质发票(增值税专用发票)；34: 数电纸质发票(普通发票) |
| data.kplx | string | 开票类型。0: 蓝字发票；1: 红字发票 |
| data.kprq | string | 开票日期，格式 yyyyMMddHHmmss |
| data.jshj | number | 价税合计 |
| data.hjje | number | 合计金额（不含税） |
| data.hjse | number | 合计税额 |
| data.kpr | string | 开票人 |
| data.skr | string | 收款人 |
| data.fhr | string | 复核人 |
| data.gmfMc | string | 购买方名称 |
| data.gmfNsrsbh | string | 购买方纳税人识别号 |
| data.gmfDzdh | string | 购买方地址、电话 |
| data.gmfYhzh | string | 购买方银行、账号 |
| data.bz | string | 备注 |
| data.fpMw | string | 发票密文 |
| data.jym | string | 校验码 |
| data.ewm | string | 二维码数据 |
| data.fpjz | string | 发票介质。0: 电子发票；1: 纸质发票 |
| data.bred | string | 是否被红冲。Y: 是；N/null: 否 |
| data.hzxxbbh | string | 红字信息表编号 |
| data.jqbh | string | 机器编号 |
| data.bmbBbh | string | 编码表版本号 |
| data.orgId | string | 组织 ID |
| data.orgName | string | 组织名称 |
| data.corpId | string | 租户 ID |
| data.creator | string | 创建人 |
| data.creatorName | string | 创建人名称 |
| data.lyid | string | 来源 ID |
| data.lylx | string | 来源类型。1: 手工开具；2: 接口录入；3: 文件导入；4: 扫码开票；5: 微信录入；6: 快捷开票；7: 支付宝录入；8: 拼多多；9: 小程序；w: 待开发票明细；v: 开票申请单；n: NCC录入 |
| data.accountStatus | string | 入账状态。1: 未入账；2: 已入账 |
| data.aggregate | string | 是否为近两个月数据。true: 查询近两个月 |

### data.invoiceDetail.data.items[] 明细行

| 字段 | 类型 | 说明 |
| --- | --- | --- |
| hh | string | 行号 |
| xmmc | string | 项目名称 |
| xmdj | number | 项目单价 |
| xmje | number | 项目金额 |
| xmjshj | number | 项目价税合计 |
| xmsl | number | 项目数量 |
| sl | number | 税率 |
| se | number | 税额 |
| spbm | string | 商品税收分类编码 |
| dw | string | 单位 |
| ggxh | string | 规格型号 |
| fphxz | string | 发票行性质。0: 正常行；1: 折扣行；2: 被折扣行 |
| kce | number | 扣除额 |
| lslbs | string | 零税率标识。0: 出口退税；1: 免税；2: 不征收；3: 普通零税率 |
| yhzcbs | string | 销售优惠标识。0: 不使用；1: 使用 |
| zxbm | string | 自行编码 |
| zkhhh | string | 折扣行行号 |
| zzstsgl | string | 优惠政策说明 |

## 正确返回示例

```json
{
    "code": "200",
    "message": "操作成功",
    "data": {
        "fpqqlsh": "1354466355222",
        "bsstatus": "0",
        "smsState": "0",
        "emailState": "0",
        "errmsg": "",
        "invoiceDetail": {
            "fpqqlsh": "1520063275914174464",
            "pdf": "<BASE64_PDF>",
            "corpid": "mdhpm1a4",
            "data": {
                "fpzt": "4",
                "fpDm": "011111111007",
                "fpHm": "03197858",
                "fplx": "3",
                "kplx": "0",
                "kprq": "20220429233242",
                "jshj": "12",
                "hjje": "11.89",
                "hjse": "0.11",
                "kpr": "LinaBell",
                "skr": "John",
                "fhr": "John",
                "gmfMc": "Test Buyer",
                "gmfNsrsbh": "cd56111331231",
                "bz": "N011",
                "bred": "N",
                "jym": "2123545",
                "jqbh": "001",
                "bmbBbh": "34.0",
                "lyid": "nh12135431",
                "lylx": "1",
                "items": [{
                    "hh": "1",
                    "xmmc": "*粮食*大米",
                    "xmdj": "11",
                    "xmje": "11.89",
                    "xmjshj": "12",
                    "xmsl": "1",
                    "sl": "0.06",
                    "se": "0.11",
                    "spbm": "1010101010000000000",
                    "dw": "Kg",
                    "fphxz": "0",
                    "kce": "10",
                    "lslbs": "1",
                    "yhzcbs": "0",
                    "zxbm": "10"
                }]
            }
        }
    }
}
```

## 错误返回示例

```json
{
    "code": "1002",
    "message": "数据不存在"
}
```

## 错误码

| 错误码 | 错误信息 | 说明 |
| --- | --- | --- |
| 1002 | 数据不存在 / Data does not exist | 该发票请求流水号对应的开票数据不存在，请确认流水号是否正确 |
| 9999 | 系统异常 / System Exception | 请根据返回信息进行处理 |

## 发票状态码说明

| statuscode | 状态 | 说明 |
| --- | --- | --- |
| 1 | 待开票 | 已提交开票申请，等待处理 |
| 2 | 开票中 | 正在开具发票 |
| 3 | 开票失败 | 开票失败，查看 errmsg 了解失败原因 |
| 4 | 开票成功 | 开票成功，可获取发票代码/号码/PDF 等信息 |

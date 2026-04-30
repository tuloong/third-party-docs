# Smart Coding

来源页面：

- https://open.yonyoucloud.com/#/doc-center/docDes/api?apiId=2096344486209650694&isOrigin=1&selectApiTab=open&from=&iframe=

机器可抓取的详情接口：

- https://open.yonyoucloud.com/iuap-ipaas-base/openPortal/api/getByVersionForTest/2096344486209650694/running?scene=open&isOrigin=1&isAjax=1

## 基本信息

- apiId：2096344486209650694
- API 类目：开票申请
- 产品：税务服务
- 更新时间：2025-07-01 17:06:49.000
- 请求方法：GET
- Content-Type：application/json
- 接口路径：/yonbip/tax/api/etax/aiMatchSpInfo

## 请求参数

### Query 参数

| 名称 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| xmmc | string | 是 | 商品名称，用于 AI 智能匹配税收分类编码 |

## 请求示例

```text
Url: /yonbip/tax/api/etax/aiMatchSpInfo?access_token=<ACCESS_TOKEN>&xmmc=水果
```

## 返回参数

### 返回字段

| 字段 | 类型 | 说明 |
| --- | --- | --- |
| code | string | 返回码。200: 成功 |
| message | string | 返回消息描述 |
| datas | array | 匹配结果列表 |

#### datas[] 字段

| 字段 | 类型 | 说明 |
| --- | --- | --- |
| spsjbm | string | 商品税收分类编码 |
| spfwjc | string | 商品税收分类简称 |
| hwhlwmc | string | 货物或劳务名称 |
| zzsslhzzsl | string | 增值税税率/征收率，如 13% |
| slvList | array | 可选税率列表 |
| zslList | array | 可选征收率列表 |
| zzstsglList | array | 适用优惠政策列表 |
| zzsczezsbj | string | 是否增值税差额征税标记。Y: 是；N: 否 |
| sfhzx | string | 是否汇总项。Y: 是；N: 否 |
| sfbzsbz | string | 是否不征收标准编码。Y: 是；N: 否 |
| zt | string | 状态。Y: 有效 |
| qyrq | string | 启用日期 |
| hyjh | string | 行业聚合码 |
| sm | string | 说明 |

### 正确返回

```json
{
    "code": "200",
    "message": "智能赋码成功",
    "datas": [
        {
            "spsjbm": "1030206000000000000",
            "spfwjc": "调味品",
            "hwhlwmc": "醋及醋代用品",
            "zzsslhzzsl": "13%",
            "slvList": ["0.13"],
            "zslList": ["0.03"],
            "zzstsglList": ["简易征收"],
            "zzsczezsbj": "N",
            "sfhzx": "N",
            "sfbzsbz": "N",
            "zt": "Y",
            "qyrq": "2019-04-01",
            "hyjh": "140603",
            "sm": ""
        }
    ]
}
```

### 错误返回

```json
{}
```


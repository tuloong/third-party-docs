# Query for motor vehicles eligible for invoicing

来源页面：

- https://open.yonyoucloud.com/#/doc-center/docDes/api?apiId=2172812685121421312&isOrigin=1&selectApiTab=open&from=&iframe=

机器可抓取的详情接口：

- https://open.yonyoucloud.com/iuap-ipaas-base/openPortal/api/getByVersionForTest/2172812685121421312/running?scene=open&isOrigin=1&isAjax=1

## 基本信息

- apiId：2172812685121421312
- API 类目：开票申请
- 产品：税务服务
- 更新时间：2025-07-01 17:07:02.000
- 请求方法：POST
- Content-Type：application/json
- 接口路径：/yonbip/tax/api/etax/query/vehicle/list/avalible

## 请求参数

### Query 参数

| 名称 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| access_token | string | 是 | 接口令牌 access_token |

### Body 参数

| 字段 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| xsfNsrsbh | string | 是 | 销售方纳税人识别号 |
| allElcUserName | string | 是 | 数电发票登录用户名（国密四密文） |
| vehicleLshs | array | 否 | 车辆识别代码/车架号码列表，用于筛选特定车辆 |
| pageSize | number | 否 | 每页条数，默认 100 |
| pageNumber | number | 否 | 页码，从 1 开始 |

## 请求示例

```text
Url: /yonbip/tax/api/etax/query/vehicle/list/avalible?access_token=<ACCESS_TOKEN>
Body: {
	"xsfNsrsbh": "91310115090099AAAAAA",
	"allElcUserName": "<REDACTED>",
	"vehicleLshs": [
		"CLSBDH2310191209",
		"CLSBDH2310191314",
		"CLSBDH22310310910"
	],
	"pageSize": 100,
	"pageNumber": 1
}
```

## 返回参数

### 返回字段

| 字段 | 类型 | 说明 |
| --- | --- | --- |
| code | string | 返回码。200: 成功 |
| message | string | 返回消息描述 |
| datas | array | 车辆列表 |

#### datas[] 字段

| 字段 | 类型 | 说明 |
| --- | --- | --- |
| clsbdh | string | 车辆识别代码/车架号码 |
| makeout | boolean | 是否可开票。true: 可以开票；false: 不可开票 |
| remark | string | 备注信息（不可开票时说明原因） |

### 正确返回

```json
{
    "code": "200",
    "message": "查询成功",
    "datas": [
        {
            "clsbdh": "CLSBDH2310191209",
            "makeout": true,
            "remark": "null"
        }
    ]
}
```

### 错误返回

```json
{
    "code": "9999",
    "message": "查询失败"
}
```


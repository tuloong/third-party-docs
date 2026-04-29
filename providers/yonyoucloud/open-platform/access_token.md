# 获取调用接口令牌 access_token

来源页面：

- https://open.yonyoucloud.com/iuap-ipaas-base/ucf-wh/console-fe/open-home/index.html#/doc-center/docDes/doc?code=open_jrwd&section=90b8ad7a8bfd4f3e9e13011b6a0b6618&from=&iframe=

## 说明

调用接口令牌 access_token 是应用调用开放平台业务接口的凭证，有效期为 2 小时。获得方式为主动调用开放平台的令牌授权接口。

调用本接口需要先调用“获取租户所在数据中心域名”，将接口返回的 tokenURL 域名和本接口的请求地址拼接成完整的接口访问地址。

## 请求地址

- 请求域名：【获取租户所在数据中心域名】接口返回的 auth 域名
- 请求地址：/open-auth/suiteApp/getAccessToken
- 请求方法：GET

## 请求参数

| 字段 | 类型 | 说明 |
| --- | --- | --- |
| suiteKey | string | 应用 appKey |
| tenantId | string | 购买者租户的 tenantId |
| timestamp | string | 时间戳 |
| signature | string | 校验签名，HmacSHA256，加签方式看下文 |

## 加签方式

签名字段 signature 计算使用 HmacSHA256，具体计算方式如下：

```text
URLEncode( Base64( HmacSHA256( parameterMap ) ) )
```

其中，parameterMap 按照参数名称排序，参数名称与参数值依次拼接（signature 字段除外），形成待计算签名的字符串。之后对 parameterMap 使用 HmacSHA256 计算签名，Hmac 的 key 为 suiteSecret。计算出的二进制签名先进行 base64，之后进行 urlEncode，即得到 signature 字段的值。

## 返回参数说明

| 字段 | 类型 | 说明 |
| --- | --- | --- |
| code | String | 结果码，正确返回 "00000" |
| message | String | 结果信息，若有错误，该字段会返回具体错误信息 |
| data.access_token | String | 接口令牌 access_token |
| data.expire | number(int) | 有效期，单位秒 |

## 返回数据

```json
{
  "code": "00000",
  "message": "成功！",
  "data": {
    "access_token": "b8743244c5b44b8fb1e52a55be7e2f",
    "expire": 7200
  }
}
```

获得 access_token 后即可调用具体的业务接口，获取业务数据。

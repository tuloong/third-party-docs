# 用友开放平台企业自建应用开发流程验证文档

> 本文档依据用友 iuap 开放平台当前“企业自建应用接入 -> 开发流程”页面整理，用于联调、验收和问题排查时逐步核对接入链路。
>
> 线上来源：
> `https://open.yonyoucloud.com/#/doc-center/docDes/doc?code=open_jrwd&section=6bf5873913654ee5b438c7915a7c801a&from=&iframe=`

---

## 1. 适用范围

本文覆盖“企业自建应用接入”开发流程中的这些环节：

1. 创建应用
2. 接口授权
3. 获取租户所在数据中心域名
4. 获取 `access_token`
5. 调用接口
6. 应用免登
7. 事件推送
8. 下载客户端和配置连接信息

其中：

- `事件推送` 为可选能力
- `下载客户端和配置连接信息` 仅在调用 NCCloud、U8Cloud、NC、U8 四个产品线下 OpenAPI 时需要

---

## 2. 总体验证顺序

| 步骤 | 验证目标 | 通过标准 |
| --- | --- | --- |
| 创建应用 | 已创建自建应用，且服务菜单可正常配置 | 能在“我的应用”中看到应用与服务 |
| 接口授权 | 应用已获得需要的 API 分类授权 | “API授权”页面中能看到目标 API 分类 |
| 获取数据中心域名 | 能拿到 `gatewayUrl` 和 `tokenUrl` | 返回 `code = "00000"` |
| 获取 `access_token` | 能用 `appKey`、`appSecret` 换到访问令牌 | 返回 `data.access_token` 和 `data.expire` |
| 调用接口 | 业务接口能带 `access_token` 正常访问 | 接口返回成功结果 |
| 应用免登 | 应用能获取 `code`、换取用户标识并继续查用户信息 | 能得到 `yhtUserId`、`tenantId` 等字段 |
| 事件推送 | 平台能将测试事件或业务事件推送到订阅端 | 订阅保存成功，测试事件可达 |
| 网关客户端配置 | 线下产品 OpenAPI 访问链路可用 | 客户端启动成功，产品连接信息保存成功 |

---

## 3. 分步骤验证

### 3.1 创建应用

线上页面给出了两种方式。

#### 方式一：API 调用进行创建

验证路径：

1. 企业管理员登录用友云工作台 `https://c2.yonyoucloud.com`
2. 选择租户
3. 进入 `云平台 -> 连接集成服务 -> API管理 -> API调用`
4. 选择“添加授权key”
5. 新增授权 key，并填写授权 key 描述
6. 新增完成后，检查该授权 key 是否已经支持：
   - API 授权
   - 事件订阅

验证点：

- 能进入 `API调用` 页面
- 能新增授权 key
- 新增后的授权 key 可见
- 该授权 key 上能继续进行 API 授权和事件订阅

#### 方式二：我的应用进行创建

验证路径：

1. 企业管理员登录用友云工作台并选择租户
2. 进入 `数字化建模 -> 系统管理 -> 我的应用`
3. 点击 `添加自建应用 -> 集成开发`
4. 填写应用基本信息并保存
5. 回到应用列表，进入 `服务列表`
6. 点击 `添加自建服务`
7. 填写服务信息并保存

服务配置验证点：

| 字段 | 页面要求 | 验证点 |
| --- | --- | --- |
| 服务名称 | 不能多于 6 个汉字或 12 个字母 | 输入超限值时应能识别问题；合法值可保存 |
| 服务图标 | 支持默认图标或上传本地图标；本地图标需为 120x120 的 JPG/GIF/PNG，且不大于 5M | 上传合法文件能成功；非法尺寸或格式应被拦住 |
| 发布客户端 | Web端、PC Client端、友空间、微信、钉钉，至少选择一类 | 至少勾选一类后才能继续保存 |

Web 端额外核对：

| 字段 | 页面要求 | 验证点 |
| --- | --- | --- |
| web端主页 | 必填 | 地址为空时不能通过 |
| web端打开方式 | 当前页面打开 / 新页面打开 | 选项可见且可切换 |
| 集成免登策略 | 无 / 友空间 | 选项可见；若选友空间，后续应进入免登链路验证 |

PC Client 端额外核对：

| 字段 | 页面要求 | 验证点 |
| --- | --- | --- |
| PC客户端主页 | 友空间桌面端打开时跳转地址 | 地址可保存 |
| pcClient打开方式 | PC客户端内 / 浏览器新页 / 本地 | 三种方式均可选 |

友空间端额外核对：

| 字段 | 页面要求 | 验证点 |
| --- | --- | --- |
| app原生导航 | 是 / 否 | 选项可见 |
| 是否原生 | 原生应用 / H5 轻应用 | 选项切换正常 |
| 移动端主页 | 当“是否原生 = 否”时显示 | 条件显示是否正确 |
| summerId | 上传到 IUAP 平台的安装包 ID | 原生场景可填写 |
| 推荐到移动端首页 | 是否推荐及排序方式 | 选项可见 |

通过标准：

- 应用已创建成功
- 服务已创建成功
- 应用列表和服务列表中都能看到新增记录

---

### 3.2 接口授权

验证路径：

1. 登录用友云工作台
2. 进入 `数字化建模 -> 系统管理 -> 我的应用`
3. 在应用列表中找到目标应用，点击 `开放平台`
4. 点击 `API授权`
5. 点击 `新增`
6. 选择要授权的 API 分类并保存

页面给出的规则：

- 页面只显示当前服务商可访问的开放平台 API 分类
- 既包括无需申请的 API 分类，也包括已申请且审核通过的 API 分类
- 只支持选择末级 API 分类
- 不支持选择产品分类和产品

验证点：

- 能进入 `开放平台 -> API授权` 页面
- 能看到当前应用已经授权的 API 分类
- 点击 `新增` 后，只能选末级分类
- 保存后，新增的 API 分类出现在授权列表中

通过标准：

- 目标 API 分类已成功出现在授权列表中

---

### 3.3 获取租户所在数据中心域名

#### 说明

线上页面说明：开放平台已经支持多数据中心部署，因此调用业务接口前，需要先获取租户所在数据中心的：

- `auth` 域名，用于获取 `access_token`
- 核心网关域名，用于调用业务接口

#### 请求信息

| 项目 | 值 |
| --- | --- |
| 请求地址 | `https://apigateway.yonyoucloud.com/open-auth/dataCenter/getGatewayAddress?tenantId=xxxxxxxx` |
| 请求方法 | `GET` |

#### 请求参数

| 字段名 | 类型 | 说明 |
| --- | --- | --- |
| tenantId | string | 租户 ID |

#### 返回参数

| 字段名 | 类型 | 说明 |
| --- | --- | --- |
| code | String | 结果码，正确返回 `"00000"` |
| message | String | 结果信息，出错时返回具体错误信息 |
| data.gatewayUrl | String | 租户所在数据中心的核心网关域名，调用业务接口时要拼接这个域名 |
| data.tokenUrl | String | 租户所在数据中心的 auth 域名，调用获取 token 接口时要拼接这个域名 |

#### 返回示例

```json
{
  "code": "00000",
  "message": "成功！",
  "data": {
    "gatewayUrl": "https://yonbip.diwork.com/iuap-api-gateway",
    "tokenUrl": "https://yonbip.diwork.com/iuap-api-auth"
  }
}
```

验证点：

- 使用真实 `tenantId` 发起请求
- 返回 `code = "00000"`
- `data.gatewayUrl` 非空
- `data.tokenUrl` 非空
- 后续调用业务接口和获取 token 时，实际使用的域名和这里返回的值一致

通过标准：

- 能稳定拿到 `gatewayUrl` 和 `tokenUrl`

---

### 3.4 获取 `access_token`

#### 说明

线上页面说明：

- `access_token` 是调用开放平台业务接口的凭证
- 有效期为 2 小时
- 过期后需要重新获取
- 企业管理员可在 `API授权` 页面查看应用的 `appKey` 和 `appSecret`

#### 请求地址

页面正文当前给出的地址：

| 项目 | 值 |
| --- | --- |
| 请求地址 | `https://c2.yonyoucloud.com/iuap-api-auth/open-auth/selfAppAuth/getAccessToken` |
| 请求方法 | `GET` |

#### 请求参数

| 字段名 | 类型 | 说明 |
| --- | --- | --- |
| appKey | string | 应用 `appKey` |
| timestamp | number long | 毫秒时间戳 |
| signature | string | 校验签名，`HmacSHA256` |

#### 签名方式

页面给出的公式：

```text
URLEncode( Base64( HmacSHA256( parameterMap ) ) )
```

签名规则：

1. `parameterMap` 按参数名排序
2. 除 `signature` 外，按“参数名 + 参数值”依次拼接
3. `Hmac` 的 key 为自建应用的 `appSecret`
4. 对二进制签名结果先做 `base64`
5. 再做 `urlEncode`

页面给出的示例拼接串：

```text
appKey41832a3d2df94989b500da6a22268747timestamp1568098531823
```

#### 请求示例

```text
https://c2.yonyoucloud.com/iuap-api-auth/open-auth/selfAppAuth/getAccessToken?appKey=xxx&timestamp=xxx&signature=xxx
```

#### 返回参数

| 字段名 | 类型 | 说明 |
| --- | --- | --- |
| code | String | 结果码，正确返回 `"00000"` |
| message | String | 结果信息 |
| data.access_token | String | 接口令牌 |
| data.expire | number int | 有效期，单位秒 |

#### 返回示例

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

#### 2023-07-21 地址调整说明

同一页面还写了地址升级说明：

- 自建应用 token 路径从  
  `/iuap-api-auth/open-auth/selfAppAuth/getAccessToken`  
  调整为  
  `/iuap-api-auth/open-auth/selfAppAuth/base/v1/getAccessToken`

- 生态应用 token 路径从  
  `/iuap-api-auth/open-auth/suiteApp/getAccessToken`  
  调整为  
  `/iuap-api-auth/open-auth/suiteApp/base/v1/getAccessToken`

- 页面明确写明：**参数不变**

验证点：

- 已拿到应用的 `appKey` 和 `appSecret`
- 能正确生成 `signature`
- 请求返回 `code = "00000"`
- 返回结果中包含 `data.access_token`
- `data.expire = 7200`
- 所在环境若使用新版路径，升级后的 `/base/v1/getAccessToken` 也能正常返回

通过标准：

- 成功拿到 `access_token`
- 令牌可被后续业务接口实际使用

---

### 3.5 调用接口

线上页面给出的规则很直接：

- 先通过“获取 `access_token`”接口拿到令牌
- 调用业务接口时，把 `access_token` 加到 URL 参数中

页面给出的示例：

| 项目 | 值 |
| --- | --- |
| 业务接口地址 | `https://api.yonyoucloud.com/yonbip/uspace/users/user_page_list` |
| 追加参数后 | `https://api.yonyoucloud.com/yonbip/uspace/users/user_page_list?access_token=yourAccessToken` |

验证点：

- 业务接口 URL 已正确追加 `?access_token=...`
- 使用有效 token 时能返回正常结果
- token 过期后重新获取新 token，再次调用可恢复

通过标准：

- 至少一条业务接口调用成功

---

### 3.6 应用免登

#### 说明

页面说明：免登是指用户进入自建应用时，无需再次输入用户名密码，应用即可获取用户身份。

流程如下：

1. 获取免登授权码 `code`
2. 获取 `access_token`
3. 获取用户 `id`
4. 获取用户信息

#### 获取免登授权码

页面给出的规则：

- 用户在 diwork 或友空间打开应用时，系统会在应用 URL 后自动追加免登 `code`
- `code` 有效期较短
- 使用一次后失效
- 无法批量获取

示例形式：

```text
https://www.xxx.com?code=xxxxxxxxx
```

扫码、待办场景下，页面给出两种方式：

1. 在页面中引用空间提供的 `jsbridge`，通过空间提供的 JS 组件获取免登 `code`
2. 在地址中设置占位符 `${esncode}`，例如：

```text
http://www.baidu.com?code=${esncode}
```

#### 获取用户 id

请求地址：

| 项目 | 值 |
| --- | --- |
| 请求地址 | `https://api.yonyoucloud.com/open-auth/selfAppAuth/getBaseInfoByCode?access_token=xxx&code=xxx` |
| 请求方法 | `GET` |

请求参数：

| 字段名 | 是否必填 | 说明 |
| --- | --- | --- |
| access_token | Y | 访问令牌 |
| code | Y | 临时 code |

返回参数：

| 字段名 | 说明 |
| --- | --- |
| yhtUserId | 用户 id |
| tenantId | 租户 Id |
| memberId | 空间用户 id |
| qzId | 空间 Id |

返回示例：

```json
{
  "code": 0,
  "msg": "success",
  "data": {
    "yhtUserId": "bd4608a2-ee35-4839-91cc-4bfa60956bc9",
    "tenantId": "po3urz18",
    "memberId": "3646123",
    "qzId": "120987"
  }
}
```

#### 获取用户信息

页面说明：拿到用户 id 后，再调用“根据用户ID查询用户信息”接口获取用户信息。

验证点：

- 进入应用时 URL 中确实带有 `code`
- `code` 能换到用户基础信息
- 返回里包含 `yhtUserId`、`tenantId`
- 继续调用用户信息接口能查到对应用户

通过标准：

- 免登链路打通，应用侧能识别当前登录用户

---

### 3.7 事件推送

#### 3.7.1 事件推送场景

页面说明：

- 这是自建应用的可选能力
- 用户在用友工作台或其他平台更改企业数据后，开放平台会把变动数据的 ID 推送给自建应用
- 自建应用再根据 ID 调用业务接口拉取具体信息

验证点：

- 是否已经明确需要事件推送
- 已开启时，应用是否有接收推送并继续拉取业务明细的能力

#### 3.7.2 事件推送订阅

验证路径：

1. 登录工作台
2. 进入 `数字化建模 -> 系统管理 -> 我的应用`
3. 找到应用，点击 `开放平台`
4. 点击 `事件订阅`
5. 在 `REST接口` 和 `函数脚本` 两种回调方式中二选一
6. 保存回调配置
7. 点击 `新增订阅`，选择需要订阅的事件

页面给出的关键规则：

- `回调地址` 必须能被公网访问
- 保存订阅信息时，平台会推送测试事件，验证地址是否有效
- 开发人员可以主动点“测试”按钮推送测试事件
- `预警邮箱` 用于推送失败后的邮件通知
- `限流配置` 可限制多少秒内的推送次数，`0` 表示不限流
- `重试次数` 可配置失败重发次数

验证点：

- 回调配置能保存成功
- 测试事件能送达
- 订阅的业务事件能正常新增
- 预警邮箱、限流、重试参数可保存

#### 3.7.3 事件订阅脚本开发

页面说明：

- 开启事件订阅后，开放平台会把事件推送到函数脚本
- 接收到事件后，需要返回 `success`
- 若未正确返回，平台会重试推送
- 超过 24 小时仍推送失败的事件，平台不再继续推送

脚本方式事件格式：

| 字段 | 类型 | 说明 | 必填 |
| --- | --- | --- | --- |
| eventId | string | 事件 uuid | Y |
| content | string | 业务内容 | Y |
| tenantId | string | 租户 id | Y |
| timestamp | number | unix timestamp | Y |
| Type | string | 事件类型 | Y |

示例事件：

```json
{
  "params": {
    "eventId": "8db4e1ea-d41a-4fee-bca5-7473781977db",
    "content": "content",
    "tenantId": "977dslb",
    "timestamp": 1664180523414,
    "type": "CHECK_URL"
  }
}
```

其中 `CHECK_URL` 是平台在校验回调地址有效性时推送的事件。

验证点：

- 脚本能收到 `CHECK_URL`
- 脚本返回 `success`
- 真实业务事件进入后也能正常处理

#### 3.7.4 事件订阅开发（REST 接口方式）

页面说明：

- 平台会把事件加密、加签后，以 `json POST` 投递到应用的事件订阅回调地址
- 开发者需要自行实现验签、解密、处理和返回成功确认
- 推荐异步处理
- 推送超时为 5 秒
- 超过 24 小时推送失败的事件，平台不再继续推送

推送外层格式：

| 字段 | 类型 | 说明 | 必填 |
| --- | --- | --- | --- |
| signature | string | 签名 | Y |
| timestamp | number | unix timestamp | Y |
| nonce | string | 随机值 | Y |
| encrypt | string | 加密消息体 | Y |

示例请求：

```json
{
  "signature": "2ff5a94ca2dd9376c8dcebde690b1b8e94741ec5",
  "timestamp": 1530862251583,
  "nonce": "uM48M4qajlEtVCz4",
  "encrypt": "9Mo8oaTFKJAdK3wnM2gS9RJxt0febE/fFJF1vhKbcPmdljs44OwHlW96qj2hkOcHQ7gneqsyx8VN4HSdbwu5z/ibhZqTjY/RkjfE+lB1LjlPDTQNl1hh+VimCIl4W4m1RRySeRxSbLikvimfswkJ6fkBj97eRRjeS26079lK8oRke5vmMh5NjWY4Rq5iuvHwInfz8qCalcgJTT/2C37wJA=="
}
```

页面给出的说明：

- `encrypt` 解密后才是真实事件
- 加密方式：`encrypt = Base64 ( AES ( message ))`
- 签名方式：`msgSignature = SHA256( sort (appSecret, timestamp, nonce, encrypt))`

解密后的事件格式：

| 字段 | 类型 | 说明 | 必填 |
| --- | --- | --- | --- |
| type | string | 事件类型 | Y |
| eventId | string | 事件 uuid | Y |
| timestamp | number | unix timestamp | Y |
| tenantId | string | 租户 id | Y |
| staffId | string array | 事件变更的 staffId 列表 | N |
| deptId | string array | 事件变更的 deptId 列表 | N |
| userId | string array | 事件变更的 userId 列表 | N |

示例事件：

```json
{
  "type": "STAFF_ADD",
  "timestamp": 1529999656469,
  "tenantId": "abcde859",
  "eventId": "033af2b1-96c0-4cc2-8991-3abe42aa3d0b",
  "staffId": [
    "abcde859-d853-4f57-896c-6658c5920e25"
  ]
}
```

验证点：

- 回调地址能收到测试事件
- 服务端能完成验签
- 服务端能完成解密
- 收到事件后能在 5 秒内返回成功确认
- 推送失败时，重试行为符合预期

通过标准：

- 订阅配置成功
- 测试事件可达
- 至少一条事件已完成接收和确认

---

### 3.8 下载客户端和配置连接信息

适用条件：

- 只有在应用已经授权访问 NCCloud、U8Cloud、NC、U8 四个产品线下 OpenAPI 时，这个环节才需要做

验证路径：

1. 登录工作台
2. 进入 `数字化建模 -> 系统管理 -> 我的应用`
3. 找到应用，点击 `开放平台`
4. 检查页面是否出现网关配置按钮
5. 以 NCC 为例，点击 `NCC网关配置`
6. 下载网关客户端和秘钥，并启动客户端
7. 配置产品连接信息

页面给出的说明：

- 多个产品线使用同一个客户端
- 所以网关客户端和秘钥只需要下载一个
- 若已经下载并启动，可直接跳到产品连接信息配置
- 配置完成后，租户下应用访问对应产品接口时，会经由网关客户端调用实际产品地址

验证点：

- 已授权产品线后，页面出现网关配置按钮
- 网关客户端能下载成功
- 网关客户端能正常启动
- 产品连接信息可保存
- 保存后，目标产品线接口可被调用

通过标准：

- 客户端已启动
- 产品连接信息已保存
- 线下产品 OpenAPI 调用链路已通

---

## 4. 最终验收清单

- [ ] 自建应用和服务已创建完成
- [ ] 目标 API 分类已授权完成
- [ ] 已成功获取 `gatewayUrl` 和 `tokenUrl`
- [ ] 已成功获取 `access_token`
- [ ] 至少一条业务接口调用成功
- [ ] 免登场景下，已成功拿到用户标识并查到用户信息
- [ ] 如启用事件推送，测试事件已成功送达
- [ ] 如涉及 NCCloud/U8Cloud/NC/U8，客户端与连接信息已配置完成

---

## 5. 本地相关文档

- 认证与 token 链路说明：[yonbip-auth-integration.md](./yonbip-auth-integration.md)
- `access_token` 文档：[providers/yonyoucloud/open-platform/access_token.md](../providers/yonyoucloud/open-platform/access_token.md)
- 开票申请接口目录：[providers/yonyoucloud/yonbip/tax/einvoiceapply/README.md](../providers/yonyoucloud/yonbip/tax/einvoiceapply/README.md)

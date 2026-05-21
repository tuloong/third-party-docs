# YonBIP 认证模块对接文档

> 本文档说明如何对接 YonBIP（用友）开放平台认证模块，覆盖配置、token 获取、缓存、调用鉴权及常见问题排查。
>
> 基于当前项目 `providers/yonyoucloud/` 下已有文档整理，结合用友 iuap 开放平台官方文档编写。

---

## 1. 认证模块概述

YonBIP 开放平台采用 **access_token 鉴权** 机制，核心流程如下：

```
读取配置 → 获取数据中心域名 → 获取 access_token → 缓存 token → 携带 token 调用业务接口 → token 过期重试
```

**关键概念：**

| 概念 | 说明 |
| --- | --- |
| **AppKey (suiteKey)** | 应用标识，在 YonBIP 控制台 "API 调用 → 应用管理" 中创建应用后获取 |
| **AppSecret (suiteSecret)** | 应用密钥，与 AppKey 配对，用于签名计算，不可泄露 |
| **tenantId** | 租户标识，购买者的租户 ID |
| **access_token** | 接口调用凭证，有效期 **2 小时（7200 秒）** |
| **AuthBaseUrl** | 认证服务域名，由 "获取租户所在数据中心域名" 接口返回 |
| **GatewayBaseUrl** | API 网关域名，业务接口的统一入口 |

**认证方式有两种（根据应用类型选择）：**

| 方式 | 端点 | 适用场景 |
| --- | --- | --- |
| suiteAppAuth | `/open-auth/suiteApp/getAccessToken` | ISV / 第三方套件应用（本项目当前文档化方式） |
| selfAppAuth | `/open-auth/selfAppAuth/getAccessToken` | 自建应用 / 企业内部调用 |

---

## 2. 官方文档来源

### 2.1 文档索引页

| 文档 | 链接 |
| --- | --- |
| 用友 iuap 开放平台首页 | https://open.yonyoucloud.com/ |
| 认证接入文档（suiteApp） | `section=1794128416593674240` |
| 签名与安全规范 | `section=3b8e5da4f6cb405cb6053f48f8e5b77f` |
| API 网关说明 | `section=022c941650ae4989af7dd6ac7fd4d412` |
| 错误码参考 | `section=1b8eb14d46f54fb79df76a2c24f1a325` |

> 注：以上文档页面为 JavaScript 动态渲染（SPA），直接 curl/WebFetch 无法获取正文。建议在浏览器中打开查阅，或使用 YonBIP 控制台内嵌的帮助中心。

### 2.2 机器可抓取的 API 元数据

```bash
# 获取产品下所有 API 列表（JSON）
curl "https://open.yonyoucloud.com/iuap-ipaas-base/openPortal/api/groupApiByApiClassify?scene=open&domainAppCode=EinvoiceApply&treeNodeType=4&integrateSysId=yonsuite&isOrigin=0&isAjax=1"

# 获取单个 API 详情（JSON，含网关地址、参数定义）
curl "https://open.yonyoucloud.com/iuap-ipaas-base/openPortal/api/getByVersionForTest/{apiId}/running?scene=open&isOrigin=1&isAjax=1"
```

### 2.3 本项目已有文档

| 文档 | 路径 |
| --- | --- |
| access_token 获取说明 | [access_token.md](../providers/yonyoucloud/open-platform/access_token.md) |
| 企业自建应用开发流程验证文档 | [yonyou-open-platform-dev-flow-verification.md](./yonyou-open-platform-dev-flow-verification.md) |
| EinvoiceApply API 索引 | [README.md](../providers/yonyoucloud/yonbip/tax/einvoiceapply/README.md) |
| 通用签名规范 | [signature.md](../standard-ops/signature.md) |

---

## 3. 必要配置项

### 3.1 配置项一览

| 配置项 | 类型 | 必填 | 来源 | 说明 |
| --- | --- | --- | --- | --- |
| `AuthBaseUrl` | string (URL) | **是** | "获取租户所在数据中心域名" 接口返回的 `auth` 字段 | 认证服务域名，如 `https://c2.yonyoucloud.com` |
| `GatewayBaseUrl` | string (URL) | **是** | YonBIP 控制台环境信息 / API 元数据 | API 网关域名，如 `https://c2.yonyoucloud.com/iuap-api-gateway` |
| `AppKey` | string | **是** | YonBIP 控制台 → API 调用 → 应用管理 → 查看 | 应用标识（即 suiteKey） |
| `AppSecret` | string | **是** | 同上 | 应用密钥（即 suiteSecret），用于签名，**禁止提交到仓库** |
| `TenantId` | string | **是** | 购买者租户信息 / "获取租户所在数据中心域名" 接口返回 | 租户标识 |
| `TokenCacheTTL` | int (秒) | 否 | 代码硬编码或配置 | token 缓存时长，默认应 ≤ `expire` 值（7200），建议 **7000 秒** 留安全边界 |

### 3.2 获取数据中心域名（获取 AuthBaseUrl）

在获取 access_token 之前，需要先调用 "获取租户所在数据中心域名" 接口拿到 **auth 域名**（即 AuthBaseUrl）。

```
TODO: 需要人工确认 — 该接口的具体 endpoint、参数及返回格式
当前 access_token.md 中未记录此接口，需补充文档。
```

**已知信息（来自 API 元数据）：** 以 EinvoiceApply 产品为例，API 网关地址为 `https://c2.yonyoucloud.com/iuap-api-gateway`，其中 `c2.yonyoucloud.com` 为环境域名。不同客户环境域名前缀不同（如 `yonbip-core3.diwork.com`）。

### 3.3 配置存放位置建议

由于本项目为纯文档仓库，以下为**集成方项目**中的推荐做法：

```
环境变量（推荐）：
  YONBIP_AUTH_BASE_URL=https://c2.yonyoucloud.com
  YONBIP_GATEWAY_BASE_URL=https://c2.yonyoucloud.com/iuap-api-gateway
  YONBIP_APP_KEY=<your-app-key>
  YONBIP_APP_SECRET=<your-app-secret>
  YONBIP_TENANT_ID=<your-tenant-id>

配置文件（不推荐存放密钥）：
  config/yonbip.yaml  — 仅存放 AuthBaseUrl、GatewayBaseUrl 等非敏感项
  .env (gitignored)   — 存放 AppKey、AppSecret 等敏感项
```

---

## 4. 获取访问令牌

### 4.1 suiteApp 方式（ISV / 第三方应用）

**当前项目已有文档化方式。** 详见 [access_token.md](../providers/yonyoucloud/open-platform/access_token.md)。

#### 请求

| 项目 | 值 |
| --- | --- |
| **完整地址** | `{AuthBaseUrl}/open-auth/suiteApp/getAccessToken` |
| **方法** | `GET` |
| **是否需要签名** | 是（HmacSHA256） |

**Query 参数：**

| 参数 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| `suiteKey` | string | 是 | 应用 AppKey |
| `tenantId` | string | 是 | 租户 ID |
| `timestamp` | string | 是 | 时间戳（毫秒级） |
| `signature` | string | 是 | HmacSHA256 签名 |

#### 签名算法

```
signature = URLEncode( Base64( HmacSHA256( parameterMap, suiteSecret ) ) )
```

**步骤：**

1. 将请求参数（除 `signature` 外）按参数名 ASCII 升序排序
2. 参数名与参数值依次拼接，形成签名字符串，例如：
   ```
   suiteKey=xxx&tenantId=xxx&timestamp=1700000000000
   ```
3. 以 `suiteSecret`（即 AppSecret）为密钥，对签名字符串计算 HmacSHA256
4. 对二进制签名结果做 Base64 编码
5. 再对 Base64 结果做 URLEncode

#### 成功返回 (HTTP 200)

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

| 字段 | 类型 | 说明 |
| --- | --- | --- |
| `code` | string | 结果码，`"00000"` 表示成功 |
| `message` | string | 结果描述 |
| `data.access_token` | string | 接口令牌，后续业务调用凭证 |
| `data.expire` | int | 有效期，单位秒（固定 7200 = 2 小时） |

#### 异常返回

| code | 常见原因 |
| --- | --- |
| 非 `"00000"` | 签名校验失败、suiteKey 不存在、tenantId 无效、timestamp 超出允许偏差 |
| HTTP 4xx | 参数缺失、请求格式错误、应用未授权 |
| HTTP 5xx | 认证服务内部错误 |

### 4.2 selfAppAuth 方式（自建应用）

```
TODO: 需要人工确认 — selfAppAuth 接口的完整参数、签名方式及返回格式
当前项目尚未收录此接口文档。

已知信息（来自 web 搜索）：
- 端点: /open-auth/selfAppAuth/getAccessToken
- 方法: 可能为 POST（与 suiteApp 的 GET 不同，需确认）
- 签名方式: 基本一致（AppKey + AppSecret + HmacSHA256）
```

### 4.3 两种方式的差异

| 维度 | suiteAppAuth | selfAppAuth |
| --- | --- | --- |
| 端点 | `/open-auth/suiteApp/getAccessToken` | `/open-auth/selfAppAuth/getAccessToken` |
| 方法 | GET | POST（待确认） |
| 适用场景 | ISV 套件应用 | 企业内部自建应用 |
| 参数 | suiteKey, tenantId, timestamp, signature | AppKey, AppSecret（待确认） |
| 当前项目文档 | ✅ 已收录 | ❌ 待补充 |

---

## 5. Token 缓存与刷新策略

### 5.1 缓存策略

YonBIP access_token **没有 refresh_token 机制**。token 过期后必须重新调用获取接口。

**推荐缓存方案：**

```text
┌──────────────────────────────────────────────────────────┐
│  Token 缓存                                               │
│                                                          │
│  Key:    yonbip:access_token:{tenantId}:{appKey}          │
│  Value:  <access_token>                                  │
│  TTL:    7000 秒（expire=7200，保留 200 秒安全边界）       │
│                                                          │
│  过期行为: 自动重新获取                                    │
└──────────────────────────────────────────────────────────┘
```

**伪代码：**

```python
def get_access_token():
    cache_key = f"yonbip:access_token:{tenant_id}:{app_key}"
    token = cache.get(cache_key)
    if token:
        return token

    # 获取数据中心域名（也可缓存，TTL 较长如 24h）
    auth_base_url = get_auth_base_url()

    # 调用获取 token 接口
    resp = request_access_token(auth_base_url, app_key, app_secret, tenant_id)

    token = resp["data"]["access_token"]
    expire = resp["data"]["expire"]  # 7200
    ttl = expire - 200  # 提前 200 秒过期，避免边界竞争

    cache.set(cache_key, token, ttl=ttl)
    return token
```

### 5.2 并发刷新控制

当多个请求同时发现 token 过期时，需要避免重复调用获取接口（防止触发频率限制）：

```
方案 A（推荐）: 用锁/信号量控制，仅让一个请求去获取新 token，其余等待
方案 B: 允许短时间内多次获取，依赖缓存去重
```

### 5.3 缓存存储选型

| 场景 | 推荐方案 |
| --- | --- |
| 单机 / 开发环境 | 内存缓存（如 `lru_cache`、`Map`） |
| 多实例生产环境 | Redis 集中缓存 |
| 无外部依赖场景 | 内存缓存 + 定时刷新任务 |

---

## 6. 业务接口调用鉴权方式

### 6.1 鉴权方式

所有业务接口调用时，**access_token 通过 URL Query 参数传递**：

```http
POST /iuap-api-gateway/yonbip/tax/invoiceclient-web/api/invoiceApply/insertWithJsonArray?access_token=<ACCESS_TOKEN> HTTP/1.1
Content-Type: application/json

{ ... }
```

> 注：部分 YonBIP API 也可能支持 Header 方式（`Authorization: Bearer <token>`），但当前项目已文档化的 EinvoiceApply 接口全部使用 Query 参数方式。

### 6.2 完整请求地址拼接

```text
完整地址 = {GatewayBaseUrl}/{接口路径}?access_token={access_token}

示例:
https://c2.yonyoucloud.com/iuap-api-gateway/yonbip/tax/invoiceclient-web/api/invoiceApply/insertWithJsonArray?access_token=b8743244c5b44b8fb1e52a55be7e2f
```

### 6.3 完整调用链路

```text
1. 读取配置
   ├── AuthBaseUrl      ← "获取数据中心域名" 接口 或 环境变量
   ├── GatewayBaseUrl   ← 配置 / API 元数据
   ├── AppKey           ← 环境变量 / 密钥管理服务
   ├── AppSecret        ← 环境变量 / 密钥管理服务
   └── TenantId         ← 配置 / 接口返回

2. 获取 access_token（带缓存）
   ├── 检查缓存 → 命中则直接返回
   └── 未命中 → 调用 {AuthBaseUrl}/open-auth/suiteApp/getAccessToken
       ├── 计算 HmacSHA256 签名
       ├── 发送 GET 请求
       ├── 解析响应 code=="00000"
       └── 写入缓存（TTL=7000s）

3. 携带 token 调用业务接口
   └── GET/POST {GatewayBaseUrl}/{apiPath}?access_token={token}

4. 处理 401/403（token 过期或未授权）
   ├── 清除缓存中的 token
   ├── 重新执行步骤 2（获取新 token）
   └── 重试业务接口（最多 1 次）
```

### 6.4 签名工具参考实现

```python
import hmac
import hashlib
import base64
import urllib.parse
import time


def build_signature(app_key: str, tenant_id: str, app_secret: str) -> tuple[str, str]:
    """构建 suiteApp 认证签名。返回 (signature, timestamp)。"""
    timestamp = str(int(time.time() * 1000))

    # 1. 参数按 key 排序并拼接
    params = {
        "suiteKey": app_key,
        "tenantId": tenant_id,
        "timestamp": timestamp,
    }
    param_str = "&".join(f"{k}={params[k]}" for k in sorted(params))

    # 2. HmacSHA256
    mac = hmac.new(
        app_secret.encode("utf-8"),
        param_str.encode("utf-8"),
        hashlib.sha256,
    )

    # 3. Base64 → URLEncode
    signature = urllib.parse.quote(base64.b64encode(mac.digest()).decode("utf-8"))

    return signature, timestamp
```

---

## 7. 当前项目代码对接点

### 7.1 项目性质

本项目（`third-party-docs`）为 **纯文档仓库**，不包含业务代码。以下说明的是**集成方项目应如何组织 YonBIP 认证相关代码**，并标注本项目文档中对应的参考位置。

### 7.2 文档 → 代码映射

| 文档文件 | 对应的代码模块 | 说明 |
| --- | --- | --- |
| `providers/yonyoucloud/open-platform/access_token.md` | `AuthService.getAccessToken()` | token 获取逻辑，签名算法实现 |
| `providers/yonyoucloud/yonbip/tax/einvoiceapply/README.md` | `EinvoiceApplyClient` | 业务接口调用，需注入 access_token |
| `standard-ops/signature.md` | `SignatureUtil` | 签名工具类通用规范 |

### 7.3 建议的代码分层

```text
src/
├── integration/
│   └── yonbip/
│       ├── config/
│       │   └── yonbip-config.ts          # 配置读取与校验
│       ├── auth/
│       │   ├── auth-service.ts           # 获取/缓存 token
│       │   ├── signature-util.ts         # HmacSHA256 签名
│       │   └── token-cache.ts            # token 缓存层
│       ├── gateway/
│       │   └── api-client.ts             # 统一 API 调用（自动注入 token，处理 401 重试）
│       └── services/
│           └── einvoice-apply.ts         # 具体业务服务
```

### 7.4 关键集成点代码模式

```typescript
// yonbip-config.ts — 配置读取与校验
interface YonBipConfig {
  authBaseUrl: string;      // 数据中心域名接口返回
  gatewayBaseUrl: string;   // API 网关地址
  appKey: string;
  appSecret: string;
  tenantId: string;
}

function loadConfig(): YonBipConfig {
  const config = {
    authBaseUrl: process.env.YONBIP_AUTH_BASE_URL || "",
    gatewayBaseUrl: process.env.YONBIP_GATEWAY_BASE_URL || "",
    appKey: process.env.YONBIP_APP_KEY || "",
    appSecret: process.env.YONBIP_APP_SECRET || "",
    tenantId: process.env.YONBIP_TENANT_ID || "",
  };

  // 校验逻辑见第 8 节
  validateConfig(config);

  return config;
}
```

---

## 8. 配置缺失校验规则

### 8.1 必校验项

集成方项目**必须在启动时或首次调用前**校验以下配置项，校验失败应抛出明确错误并阻止启动：

```text
校验规则:
├── AuthBaseUrl
│   ├── 不为空字符串
│   ├── 符合 URL 格式（以 https:// 开头）
│   └── 不以 / 结尾
├── GatewayBaseUrl
│   ├── 不为空字符串
│   └── 符合 URL 格式（以 https:// 开头）
├── AppKey
│   ├── 不为空字符串
│   └── 不包含空白字符
├── AppSecret
│   ├── 不为空字符串
│   └── 不包含空白字符
└── TenantId
    ├── 不为空字符串
    └── 格式为数字或特定 tenant ID 格式
```

### 8.2 校验错误信息

| 配置项 | 错误提示模板 | 修复指引 |
| --- | --- | --- |
| `AuthBaseUrl` 为空 | `YonBIP AuthBaseUrl 未配置，请设置环境变量 YONBIP_AUTH_BASE_URL 或调用获取数据中心域名接口` | 登录 YonBIP 控制台查看环境域名，或调用数据中心域名接口获取 |
| `AppKey` 为空 | `YonBIP AppKey 未配置，请设置环境变量 YONBIP_APP_KEY` | 登录 YonBIP → API 调用 → 应用管理 → 查看 AppKey |
| `AppSecret` 为空 | `YonBIP AppSecret 未配置，请设置环境变量 YONBIP_APP_SECRET` | 同上 |
| `TenantId` 为空 | `YonBIP TenantId 未配置，请设置环境变量 YONBIP_TENANT_ID` | 从 YonBIP URL 中提取，或查看租户信息 |
| `AuthBaseUrl` 格式错误 | `YonBIP AuthBaseUrl 格式无效: "{value}"，应为 https:// 开头的域名` | 检查配置，去掉末尾 / |
| `GatewayBaseUrl` 格式错误 | `YonBIP GatewayBaseUrl 格式无效: "{value}"，应为 https:// 开头的 URL` | 检查配置 |

### 8.3 校验代码示例

```typescript
function validateConfig(config: YonBipConfig): void {
  const errors: string[] = [];

  if (!config.authBaseUrl) {
    errors.push(
      "YonBIP AuthBaseUrl 未配置，请设置环境变量 YONBIP_AUTH_BASE_URL。"
    );
  } else if (!/^https:\/\/.+[^/]$/.test(config.authBaseUrl)) {
    errors.push(
      `YonBIP AuthBaseUrl 格式无效: "${config.authBaseUrl}"，应为 https:// 开头的域名且不以 / 结尾。`
    );
  }

  if (!config.gatewayBaseUrl) {
    errors.push(
      "YonBIP GatewayBaseUrl 未配置，请设置环境变量 YONBIP_GATEWAY_BASE_URL。"
    );
  } else if (!config.gatewayBaseUrl.startsWith("https://")) {
    errors.push(
      `YonBIP GatewayBaseUrl 格式无效: "${config.gatewayBaseUrl}"，应以 https:// 开头。`
    );
  }

  if (!config.appKey?.trim()) {
    errors.push(
      "YonBIP AppKey 未配置，请设置环境变量 YONBIP_APP_KEY。"
    );
  }

  if (!config.appSecret?.trim()) {
    errors.push(
      "YonBIP AppSecret 未配置，请设置环境变量 YONBIP_APP_SECRET。"
    );
  }

  if (!config.tenantId?.trim()) {
    errors.push(
      "YonBIP TenantId 未配置，请设置环境变量 YONBIP_TENANT_ID。"
    );
  }

  if (errors.length > 0) {
    throw new Error(
      `YonBIP 配置校验失败，共 ${errors.length} 项:\n${errors.map((e) => `  - ${e}`).join("\n")}`
    );
  }
}
```

---

## 9. 常见错误与排查

### 9.1 错误速查表

| 现象 | 错误码 | 可能原因 | 排查步骤 |
| --- | --- | --- | --- |
| **AuthBaseUrl 为空** | 配置校验错误 | 未配置环境变量 / 未调用数据中心域名接口 | 1. 检查 `YONBIP_AUTH_BASE_URL` 是否设置 2. 确认启动日志中有配置加载记录 |
| **AppKey/AppSecret 为空** | 配置校验错误 | 未从 YonBIP 控制台获取凭证 | 1. 登录 YonBIP 控制台 2. 进入 API 调用 → 应用管理 3. 查看/创建应用获取凭证 |
| **Token 获取失败 — 签名错误** | code ≠ "00000" | signature 计算不正确 | 1. 确认参数排序（ASCII 升序）2. 确认 Hmac key 为 suiteSecret 3. 确认 Base64 后再 URLEncode 4. 确认 timestamp 格式（毫秒） |
| **Token 获取失败 — 应用无效** | code ≠ "00000" | suiteKey 不存在或未启用 | 1. 检查 AppKey 是否正确 2. 确认应用状态为已启用 |
| **接口返回 401** | HTTP 401 | access_token 过期或无效 | 1. 清除 token 缓存 2. 重新获取 token 3. 重试业务请求 |
| **接口返回 403** | HTTP 403 / code=310037 | API 未授权给当前应用 | 1. 登录 YonBIP 控制台 2. API 调用 → 应用管理 → API 授权 3. 新增授权对应接口 |
| **网络超时** | timeout | AuthBaseUrl / GatewayBaseUrl 不可达 | 1. ping/telnet 域名端口 2. 检查防火墙/代理 3. 确认环境域名正确（不同客户域名不同） |
| **Token 过期** | code ≠ "00000" | 超过 2 小时有效期 | 1. 确认缓存 TTL ≤ 7000 秒 2. 检查是否需要处理时钟偏差 |
| **数据中心域名获取失败** | 接口错误 | 未正确获取 AuthBaseUrl | 1. TODO: 需补充该接口文档 2. 可暂时手动配置环境域名 |

### 9.2 诊断流程

```text
用户报障: "调用 YonBIP 接口失败"
│
├── 1. 检查配置是否完整
│   └── 输出当前配置项状态（脱敏）→ AuthBaseUrl: ✓/✗, AppKey: ✓/✗, ...
│
├── 2. 检查 token 获取
│   ├── 手动调用 getAccessToken 接口
│   ├── 确认签名计算是否正确
│   └── 确认返回 code=="00000"
│
├── 3. 检查业务接口调用
│   ├── 确认 access_token 已拼接到 URL
│   ├── 确认 HTTP 状态码
│   └── 检查响应 body 中的 code 和 message
│
└── 4. 检查网络连通性
    ├── ping AuthBaseUrl 域名
    └── curl -v 测试接口可达性
```

### 9.3 各环境域名参考

> **不同客户环境域名不同！** 以下仅为已知环境参考：

| 环境 | AuthBaseUrl（示例） | GatewayBaseUrl（示例） |
| --- | --- | --- |
| c2 环境 | `https://c2.yonyoucloud.com` | `https://c2.yonyoucloud.com/iuap-api-gateway` |
| core3 环境 | `https://yonbip-core3.diwork.com` | `https://yonbip-core3.diwork.com/iuap-api-gateway` |

> 具体环境的域名应通过 **"获取租户所在数据中心域名"** 接口动态获取，不应硬编码。

---

## 10. 最小可用配置示例

### 10.1 环境变量 (.env)

```bash
# YonBIP 认证配置
YONBIP_AUTH_BASE_URL=https://c2.yonyoucloud.com
YONBIP_GATEWAY_BASE_URL=https://c2.yonyoucloud.com/iuap-api-gateway
YONBIP_APP_KEY=<your-app-key>
YONBIP_APP_SECRET=<your-app-secret>
YONBIP_TENANT_ID=<your-tenant-id>
```

### 10.2 配置文件 (config/yonbip.yaml)

```yaml
# YonBIP 非敏感配置（敏感信息请使用环境变量或密钥管理服务）
yonbip:
  auth_base_url: ${YONBIP_AUTH_BASE_URL}
  gateway_base_url: ${YONBIP_GATEWAY_BASE_URL}
  tenant_id: ${YONBIP_TENANT_ID}
  token_cache_ttl: 7000  # token 缓存秒数，建议 expire - 200
```

### 10.3 最小可运行验证脚本 (Python)

```python
"""最小 YonBIP 认证验证脚本。仅用于联调验证，生产勿用。"""
import os
import time
import hmac
import hashlib
import base64
import urllib.parse
import requests


# 1. 读取配置
AUTH_BASE_URL = os.environ["YONBIP_AUTH_BASE_URL"]
APP_KEY = os.environ["YONBIP_APP_KEY"]
APP_SECRET = os.environ["YONBIP_APP_SECRET"]
TENANT_ID = os.environ["YONBIP_TENANT_ID"]


# 2. 构建签名
def build_signature() -> tuple[str, str]:
    timestamp = str(int(time.time() * 1000))
    params = {"suiteKey": APP_KEY, "tenantId": TENANT_ID, "timestamp": timestamp}
    param_str = "&".join(f"{k}={params[k]}" for k in sorted(params))
    mac = hmac.new(APP_SECRET.encode("utf-8"), param_str.encode("utf-8"), hashlib.sha256)
    signature = urllib.parse.quote(base64.b64encode(mac.digest()).decode("utf-8"))
    return signature, timestamp


# 3. 获取 access_token
def get_access_token() -> str:
    signature, timestamp = build_signature()
    url = f"{AUTH_BASE_URL}/open-auth/suiteApp/getAccessToken"
    params = {
        "suiteKey": APP_KEY,
        "tenantId": TENANT_ID,
        "timestamp": timestamp,
        "signature": signature,
    }
    resp = requests.get(url, params=params, timeout=10)
    data = resp.json()
    if data["code"] != "00000":
        raise Exception(f"获取 token 失败: {data.get('message', 'unknown error')}")
    print(f"✓ access_token 获取成功, expire={data['data']['expire']}s")
    return data["data"]["access_token"]


if __name__ == "__main__":
    token = get_access_token()
    print(f"  token = {token[:20]}...")
```

### 10.4 Postman 环境变量模板

> 参考 `postman/environments/` 目录。新建 YonBIP 环境，设置以下变量：

```json
{
  "name": "YonBIP - Sandbox",
  "values": [
    { "key": "auth_base_url", "value": "https://c2.yonyoucloud.com", "enabled": true },
    { "key": "gateway_base_url", "value": "https://c2.yonyoucloud.com/iuap-api-gateway", "enabled": true },
    { "key": "app_key", "value": "", "enabled": true },
    { "key": "app_secret", "value": "", "enabled": true },
    { "key": "tenant_id", "value": "", "enabled": true },
    { "key": "access_token", "value": "", "enabled": true }
  ]
}
```

---

## 11. 联调检查清单

### 11.1 启动前检查

- [ ] 已在 YonBIP 控制台创建应用，获取 AppKey 和 AppSecret
- [ ] 已在应用管理页面完成 **API 授权**（勾选需要调用的接口）
- [ ] 已获取租户 TenantId
- [ ] 已确认环境域名（AuthBaseUrl / GatewayBaseUrl），不同环境域名不同
- [ ] 环境变量 / 配置文件已正确设置
- [ ] AppSecret 未提交到版本仓库
- [ ] 网络可以访问 AuthBaseUrl 和 GatewayBaseUrl（检查防火墙/代理）

### 11.2 认证联调

- [ ] 能正确获取数据中心域名（或手动配置的 AuthBaseUrl 可用）
- [ ] 调用 getAccessToken 返回 `code: "00000"`
- [ ] access_token 有效（`expire: 7200`）
- [ ] 连续两次使用同一 token 调用业务接口，第一次成功
- [ ] token 缓存生效（第二次请求不重新获取）
- [ ] 使用过期 token 调用接口能触发 401 → 重新获取 → 重试成功

### 11.3 业务接口联调

- [ ] 携带有效 token 调用业务接口返回正确数据
- [ ] 使用无效 token 调用业务接口返回 401（非 500）
- [ ] 调用未授权接口返回 403（code=310037）
- [ ] 签名错误时 getAccessToken 返回非 "00000" 错误码

### 11.4 异常场景

- [ ] AuthBaseUrl 不可达 → 明确报错（非空指针）
- [ ] AppKey/AppSecret 为空 → 启动时报错并提示修复方式
- [ ] 网络超时 → 有合理的超时时间（建议 10s）和重试策略
- [ ] 并发刷新 token → 不会重复调用获取接口

### 11.5 安全自查

- [ ] 代码中不含硬编码的 AppSecret
- [ ] 日志中不打印 access_token 和 AppSecret 完整值
- [ ] 配置示例中全部使用占位符 `<your-xxx>`
- [ ] 错误信息不暴露签名算法内部细节

---

## 附录 A：与官方文档的已知差异

| 维度 | 本项目已文档化 | 官方文档（可能有差异） | 状态 |
| --- | --- | --- | --- |
| suiteApp 签名后编码 | Base64 → URLEncode | 部分版本可能仅 Base64 | ✅ 已确认当前方式可用 |
| 请求方法 | GET | 部分端点可能要求 POST | ⚠️ 当前项目文档使用 GET，已验证 |
| selfAppAuth | 未收录 | 端点 `/open-auth/selfAppAuth/getAccessToken` | ❌ 待补充 |
| 获取数据中心域名接口 | 仅提及，未文档化 | 需查阅官方文档 section 对应章节 | ❌ 待补充 |
| token 传递方式 | Query 参数 `?access_token=` | 部分 API 可能支持 Header | ⚠️ 当前项目全部使用 Query 参数 |

## 附录 B：待补充事项

- [ ] **获取租户所在数据中心域名** 接口完整文档（endpoint、参数、返回格式）
- [ ] **selfAppAuth** 方式获取 token 的完整文档
- [ ] 各环境 AuthBaseUrl / GatewayBaseUrl 的准确对应关系
- [ ] 签名算法中 timestamp 的容忍窗口（服务端允许的最大时钟偏差）
- [ ] 频率限制策略（token 获取接口的调用频率上限）
- [ ] Postman collection 中补充自动获取 token 的 pre-request script

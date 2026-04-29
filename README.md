# third-party-docs

用于管理第三方对接文档与可执行测试集合（Postman/Insomnia/OpenAPI），并沉淀通用对接规范与变更历史。

## 目录结构

```text
.
├── providers/              # 按第三方服务商/合作方归档
├── standard-ops/           # 通用对接流程与规范（签名、回调、重试、幂等等）
├── schemas/                # JSON Schema / Protobuf 等结构定义
├── postman/                # 全局 Postman（或作为模板参考）
├── insomnia/               # 全局 Insomnia（或作为模板参考）
├── openapi/                # 全局 OpenAPI（或作为模板参考）
└── CHANGELOG.md            # 第三方接口变更历史（必须维护）
```

## 推荐约定

- Provider 命名：全小写 + 连字符（例如 `wechat-pay`、`stripe`）
- 文档入口：每个 provider 至少有一个 `providers/<provider>/README.md`
- 测试集合归档：优先放在对应 provider 目录下（需要时也可复用根目录模板）
- 禁止提交敏感信息：密钥、Token、证书私钥一律不要写入仓库；环境文件里可保留变量名但置空

## 对接流程（最小闭环）

- 需求与范围：明确能力清单、环境、回调、幂等、限流、SLA
- 认证与签名：按 `standard-ops/signature.md` 的口径描述实现细节
- 测试集合：提供 Postman/Insomnia/OpenAPI 至少一种可复现方式
- 上线与回归：变更必须更新 `CHANGELOG.md`，必要时附迁移说明

## 变更记录

变更请按“对外行为变化”记录，而不是按内部实现记录。

- 新增/下线接口、字段含义变化、校验变更、错误码变化、回调频率变化等都需要记录
- 每次变更至少补充：影响范围、发布时间、回滚/兼容策略

## 快速开始

- 新增一个第三方：复制 `providers/_template/` 为 `providers/<provider>/`
- 如果有可执行集合：优先放到 `providers/<provider>/{postman,insomnia,openapi}/`
- 补齐该 provider 的 README，并在需要时补充 `schemas/<provider>/`

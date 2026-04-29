# OpenAPI

OpenAPI 规范用于统一描述第三方 API（或我方对外适配层 API），便于：

- 自动生成客户端/Mock
- 校验请求响应结构
- 文档站点生成

建议按 provider 归档：

```text
openapi/
└── example.openapi.yaml
```

如果某 provider 需要独立维护，建议放在 `providers/<provider>/openapi/` 并在 provider 的 README 中引用。

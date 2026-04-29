# Schemas

存放可机器校验的接口结构定义，例如：

- JSON Schema（`.json`）
- Protobuf（`.proto`）
- Avro（`.avsc`）

如果某 provider 有独立 schema，建议仍放在 `schemas/<provider>/`，并在 `providers/<provider>/README.md` 中引用。

# Postman

推荐将 Postman Collection 与 Environment 按 provider 归档：

```text
postman/
├── collections/
│   └── example.collection.json
└── environments/
    └── staging.environment.json
```

如果某 provider 需要独立维护，建议放在 `providers/<provider>/postman/` 并在 provider 的 README 中引用。

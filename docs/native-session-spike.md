# 原生会话验证

2026-11-11，真实 npm 发布的 DSH `0.2.2-rc.1`，Windows Node `26.11.1`。不使用假的 Session、Agent registry 或持久化后端；只有普通子任务的模型响应为确定性脚本。

## 已验证

- `SessionPreparation` → 独占 JSONL write handle → Session enter/announce → setup → Agent enter/announce 的创建路径可以挂载独立 MOSS driver。
- 标准 user/message 与 assistant/message 在 flush、关闭、重新 open 后保留。恢复时需要持久化 Session.prepare 生成的额外事件，不能漏掉后续 seq。
- 用户语音 ID 与助手回复 ID 分开保存，MOSS driver 独立递增 DSH turn。重复终态不会重复写回复；跨 Socket epoch 可以重新使用供应商原始 ID。
- 通过正式 AgentLoop 子类覆盖 createAgent/resume，可以在原生 Registry 的调用者追踪下路由 MOSS；普通 Agent 继续使用官方实现，冷恢复仍进入正确 driver。
- 同一个真实 MOSS 父 Agent 能建立两个独立 spawn 子任务；显式传普通模型后，两任务各调用模型一次，父 Agent 不调用模型。最终采用 parent delivery：被动 inbox 保存原生任务通知，冷恢复保留上下文；activation.result 同时用于协议回传。
- model.select 对异值和同值均拒绝，防止原生 API 在选择 MOSS 后污染全局默认模型。所选 `moss-live-2.0` 和 `vendor/MOSS-Live-2.0-preview` 在创建、历史和恢复中原样保留。

命令：`node --test test/native-session.test.js`，7/7 通过，另包含失败 setup 释放独占写 handle、owner 在异步 setup 中卸载后不发布迟到 Agent。此技术验证本身不代表 MOSS 网络、真实麦克风、完整 Web UI 或设置页已验证；后续独立结果见 [验收记录](verification.md)。

## 实施决定

使用独立固定的基础 AgentLoop provider 行，语音功能另为可启停的插件行。按本插件自行新建的会话命名空间路由，不添加可让普通空白会话更换 driver 的 MOSS Agent 预设。无需更改 DSH 核心或采用实验性 best-effort PluginRecord 保存主历史。

Native JSONL backend 已在 session/event 上接收发布后的事件，驱动只持有和关闭 handle，不再重复 append。未发布 seed 与 resume 产生的 suffix 仍由工厂先写入。

## 仍需完成

- 迟到资源和并发卸载的进一步取消验证；基础 provider 与功能插件的生命周期隔离。
- 原生 API model selection 全路径、设置保存恢复与真实浏览器验收。
- MOSS Wire 初始化与媒体、委派去重、恢复上下文投影和转写修订的实际 Chat 展示。

## 环境

本机原有桌面 DSH 是 `0.2.1-rc.2`，旧 Web profile 为 `0.1.0-rc.6`。目标版本另装于 `.superpowers/runtime/`，通过独立 DSH_HOME 完整启动 Web 于 `127.0.0.1:59433`，未升级用户 profile。开发入口为 `npm run setup:dsh` 与 `npm run dev:dsh`。

系统 tmpdir 指向 `C:\PROGRA~3\Temp`，Node realpath 该目录得到 EISDIR；项目路径和用户 Local Temp 正常。集成用例把临时数据放在 `.superpowers/test-data/` 并在结束后清理，不为该环境问题修改产品文件系统行为。

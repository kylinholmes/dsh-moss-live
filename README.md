# DSH MOSS Live

MOSS 实时语音插件，目标版本为 DSH **0.2.2-rc.1**。会话、历史、凭据、设置和子 Agent 复用 DSH。收起语音或进入历史、子任务时继续连接；明确结束或插件卸载时释放媒体。不保存原始麦克风音频。

## 本机开发

需要 Node.js 22 或更新版本、npm 与新版 Edge/Chrome。

```sh
npm ci
npm run build
npm test
npm run setup:dsh
npm run dev:dsh
```

开发端口 59433，登录链接由终端输出。DSH 和独立 profile 位于 `.superpowers/runtime/`，不升级本机桌面 DSH。重复 setup 保留已存在的 profile 文件和凭据。修改源码后运行 `npm run build`。

独立、不使用真实 API 的验收环境：

```sh
npm run setup:acceptance
npm run dev:acceptance
```

端口 59443，模拟语音端点 59444，使用独立 `acceptance-home`。普通模型为本地确定性响应，子 Agent、Session 和持久化为真实 DSH。浏览器启动语音会申请麦克风，自动验收使用替代媒体流。模拟通过不代表真人语音质量已验证。

球体交互预览：`npm run preview:orb`，地址 `http://127.0.0.1:59435/`。预览不连接 API、不申请麦克风；生产设置页使用 DSH 原生组件和主题。

## 配置与使用

1. 在 DSH「设置 → 模型」按默认方式添加提供商、API URL 和 Key。
2. 在「设置 → MOSS 语音」分别选择提供商、模型，执行「测试连接」。测试验证鉴权、会话配置及音频格式，同时尝试申请麦克风；权限与检测状态单独显示。
3. 分别选择委派的 Agent 预设与执行模型，执行模型可跟随 DSH 默认聊天模型。子任务不能使用与主语音相同的 route。
4. 设置自动保存。球体支持交互与音量反馈；选择图片模式才显示上传入口。PNG/JPEG/WebP 图片最多 256 KiB，居中以圆形显示。
5. 从侧栏「MOSS 语音」或首页输入区进入唯一语音页面。通过「历史与子任务」查看原生记录和父子导航；历史页底部「返回语音」回到同一会话，不新建或自动重连。最小化条继续保持通话。

插件不按模型名、版本或提供商筛选，仅适配 MOSS 实时协议。配置缺失显示「未配置」，实际协议不支持显示「不兼容」。主聊天页固定语音模型；不显示文字输入，不会私自路由到另一个模型。

### 官方 MOSS-Live 示例

- DSH API base URL：`https://api.mosi.cn/v1`；模型 ID：`moss-live-1.0`。
- 插件将 base URL 映射为 `wss://api.mosi.cn/v1/realtime`；Key 只由宿主解析并放入 Authorization 请求头。
- 上下文窗口和最大输出 token 建议留空，关闭推理等级，图片不勾选。官方 Live 协议未定义这些通用 LLM 参数；表单的 `1M / 128K` 不是官方 Live 规格，本插件也不转发这些参数。
- 2026-11-11 实测：供应商 `/v1/models` 返回 15 个模型但漏列 Live，同一 Key 调用稳定 ID 已通过实时握手及 16 kHz 输入 / 48 kHz 输出协商。目录未列出时可在 DSH 原生目录手动登记官方 ID。`moss-vl-realtime-1.0` 使用另一协议，不能替代 Live。

依据：[实时协议](https://platform.moss.cn/docs/reference/moss-live/)、[模型说明](https://platform.moss.cn/docs/models/moss-live/)。权限以实际端点返回为准。

## 安装到已有 DSH

本机隔离版仍在验收，尚未部署设备。匹配 `0.2.2-rc.1` 的 Web profile 可使用官方安装流程：

```sh
npm run build
npm pack
dsh plugin --profile web add ./dsh-moss-live-0.2.0.tgz
```

bundle 放在 `dsh-base`、`dsh-web-app` 之后。它禁用原 `agent-loop` 行、插入 `moss-agent-loop`；普通会话调用原实现。若原 `agent-loop.config.agents` 有非空启动列表，安装前需在 profile patch 中把完整列表迁移到 `moss-agent-loop.config.agents`；不能同时启用两个 AgentLoop provider。

关闭语音功能只停用 `dsh-moss-live` 功能行，保留 `moss-agent-loop` 基础行，以便普通会话继续工作、语音历史仍能恢复。卸载整个 bundle 后不再有语音驱动，普通会话恢复原框架路径。

设计与验证：[Spec](docs/superpowers/specs/2026-11-11-moss-native-chat-design.md)、[Plan](docs/superpowers/plans/2026-11-11-moss-native-chat.md)、[验收记录](docs/verification.md)。

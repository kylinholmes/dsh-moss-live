# DSH MOSS Live

MOSS 实时语音插件，目标版本为 DSH **0.2.2-rc.1**。会话、历史、凭据、设置和子 Agent 复用 DSH。同一通话的语音页、历史与子任务切换继续连接；换到另一主会话时自动暂停，各自独立恢复。不保存原始麦克风音频。

## 下载安装

使用 **DSH 0.2.2-rc.1**，宿主需要 Node.js **24.9 或更新版本**。发布包已包含编译好的 `lib/`，安装时不需要克隆仓库或运行构建。

1. 用手机或电脑打开自己的 DSH，进入「插件 → 添加插件」。
2. 在「包名或地址」粘贴下面的安装包直链，点击「安装」，完成后选择「立即启用」。
3. 在「设置 → 模型」配置 API，再进入「设置 → MOSS 语音」选择语音模型并测试连接。

```text
https://github.com/kylinholmes/dsh-moss-live/releases/download/v0.2.1/dsh-moss-live-0.2.1.tgz
```

[下载 v0.2.1 安装包](https://github.com/kylinholmes/dsh-moss-live/releases/download/v0.2.1/dsh-moss-live-0.2.1.tgz) · [SHA256 校验和](https://github.com/kylinholmes/dsh-moss-live/releases/download/v0.2.1/SHA256SUMS) · [全部版本](https://github.com/kylinholmes/dsh-moss-live/releases) · [完整安装与升级说明](docs/install.md)

手机浏览器直接粘贴直链即可，由 DSH 宿主下载安装。GitHub 自动生成的 Source code 压缩包和 Actions artifact ZIP 不是可直接填入 DSH 的安装包。

## 配置与使用

1. 在 DSH「设置 → 模型」按默认方式添加提供商、API URL 和 Key。
2. 在「设置 → MOSS 语音」分别选择提供商、模型，执行「测试连接」。测试验证鉴权、会话配置及音频格式，同时尝试申请麦克风；权限与检测状态单独显示。
3. 分别选择委派的 Agent 预设与执行模型，执行模型可跟随 DSH 默认聊天模型。子任务不能使用与主语音相同的 route。
4. 设置自动保存。球体支持交互与音量反馈；选择图片模式才显示上传入口。PNG/JPEG/WebP 图片最多 256 KiB，居中以圆形显示。
5. 侧栏「MOSS 语音」或首页输入区打开新对话入口，按「开始语音」才创建新 Session。每个语音 Session 独立保存状态；切到另一主会话或新建页时自动暂停原通话，切回后点击恢复。同一通话的语音页、历史与子任务互切不重连。普通文本会话不显示语音控制条。
6. 连接错误旁的「前往设置」直接打开 DSH 原生弹窗，与侧栏 MOSS 设置共用组件、配置和自动保存。
7. 语音控制栏的「输出设备」按钮可选择当前浏览器可用的扬声器/耳机，偏好只保存在本浏览器。切换失败保留原输出，拔出设备回退到系统默认；浏览器不支持时按提示通过系统声音设置选择。

插件不按模型名、版本或提供商筛选，仅适配 MOSS 实时协议。配置缺失显示「未配置」，实际协议不支持显示「不兼容」。主聊天页固定语音模型；不显示文字输入，不会私自路由到另一个模型。

### 官方 MOSS-Live 示例

- DSH API base URL：`https://api.mosi.cn/v1`；模型 ID：`moss-live-1.0`。
- 插件将 base URL 映射为 `wss://api.mosi.cn/v1/realtime`；Key 只由宿主解析并放入 Authorization 请求头。
- 上下文窗口和最大输出 token 建议留空，关闭推理等级，图片不勾选。官方 Live 协议未定义这些通用 LLM 参数；表单的 `1M / 128K` 不是官方 Live 规格，本插件也不转发这些参数。
- 2026-11-11 实测：供应商 `/v1/models` 返回 15 个模型但漏列 Live，同一 Key 调用稳定 ID 已通过实时握手及 16 kHz 输入 / 48 kHz 输出协商。目录未列出时可在 DSH 原生目录手动登记官方 ID。`moss-vl-realtime-1.0` 使用另一协议，不能替代 Live。

依据：[实时协议](https://platform.moss.cn/docs/reference/moss-live/)、[模型说明](https://platform.moss.cn/docs/models/moss-live/)。权限以实际端点返回为准。

## CI 与发布

[GitHub Actions](https://github.com/kylinholmes/dsh-moss-live/actions) 对 PR 和 push 执行 `npm ci`、构建、测试及 `npm pack`，上传可下载的 `.tgz` 与 `SHA256SUMS`。推送与 `package.json` 版本一致的 `v*` tag 后，CI 将同一份通过验证的产物发布到 GitHub Release；不发布到 npm。

已通过原生 Session、子任务、自动保存和模拟语音端点的自动回归，以及真实端点鉴权与音频格式协商。**持续真人麦克风通话和手机设备上的真实语音质量仍待验收。**

## 本机开发

开发需要 Node.js 24.9 或更新版本、npm 与新版 Edge/Chrome。普通安装用户直接使用 Release 包即可。

```sh
npm ci
npm run build
npm test
npm run setup:dsh
npm run dev:dsh
```

登录链接由终端输出。开发用 DSH 和隔离 profile 位于 `.superpowers/runtime/`，不升级已有桌面 DSH。重复 setup 保留已存在的 profile 文件和凭据。修改源码后运行 `npm run build`。

独立验收环境使用 `npm run setup:acceptance`、`npm run dev:acceptance`，模型响应由本地确定性端点提供，子 Agent、Session 和持久化为真实 DSH。浏览器自动验收使用替代媒体流。`npm run preview:orb` 可查看不连接 API、不申请麦克风的球体预览。

原生 bundle 的 AgentLoop 组合与自定义启动列表迁移说明见[安装文档](docs/install.md#自定义-profile)。

设计与验证：[Spec](docs/superpowers/specs/2026-11-11-moss-native-chat-design.md)、[Plan](docs/superpowers/plans/2026-11-11-moss-native-chat.md)、[验收记录](docs/verification.md)。

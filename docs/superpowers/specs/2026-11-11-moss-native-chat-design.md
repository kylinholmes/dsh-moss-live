# MOSS 原生 DSH 语音会话设计

状态：用户于 2026-11-11 确认方向并授权编写 Spec、Plan 后直接实施。本文与 `docs/requirements.md` 取代旧独立 Chat 和三方群聊草案。视觉参考保存在 `.superpowers/brainstorm/74-1794385572/content/`。

## 目的

在 DSH 中提供一个轻量的 MOSS 语音聊天会话。用户始终与 MOSS 沟通，需要办事时由 MOSS 委托 DSH 子 Agent。历史、子任务、配置和凭据均由 DSH 管理，语音连接独立于当前展示的视图。

## 已决定的体验

- 同一会话有语音与文本历史视图。主会话固定使用插件设置中选定的 DSH 语音模型，首版仅支持 MOSS `moss-live-1.0`，聊天页无模型选择功能；普通 DSH Agent 会话不受影响。
- 语音视图提供流体圆球、聆听/思考/回复状态、字幕、静音、打断、结束和收起。支持云蓝和极夜主题，遵循减少动态效果偏好。
- 收起、进入历史、进入任意子任务或设置时，语音继续连接和播放；悬浮胶囊明确显示 MOSS 身份。只有明确结束、连接故障或插件卸载才释放媒体。
- 历史优先使用 DSH 原生 Chat。子任务保留原生目录、父子导航、多个任务切换及执行记录，任务卡仅作入口，不能取代任务视角。
- 委派是后台独立任务，不是第二个常驻聊天参与者。默认不朗读子 Agent 正文；只向 MOSS回传任务状态与必要结果，由用户决定是否继续讨论。
- 主会话输入区只保留文本输入、语音和发送动作。MOSS 尚未证实支持普通用户文字输入，确认前发送应明确不可用，不能调用另一个模型、用 TTS 伪造输入或假装发送成功。
- 移动端覆盖 320/390 像素窄屏、横屏和键盘压缩后的可视区域；触摸动作可达，悬浮条不遮挡输入和权限交互。

## 方案与取舍

1. 独立 Chat 数据库与侧栏覆盖层：实现容易，但重复会话、配置及任务系统，已按用户最新要求排除。
2. 自定义 Session 写入器与自定义 Agent 驱动：可处理实时协议，但目标 DSH 的 Web 冷恢复默认使用 ReactLoopAgent，需额外维护恢复和写入所有权，暂不采用。
3. 原生 Agent + MOSS 实时模型适配：优先验证此方案。原生循环独占 Session 写入；MOSS 连接产生用户转写和助手文本，适配层把同一轮响应交给原生 LLM 流，语音音频直接送浏览器播放。没有第二个模型生成回复。它复用持久化、恢复与子 Agent 的真实父级身份。

实施从方案 3 的真实 DSH 集成验证开始。验证不通过必须记录原因并调整计划，不能以直接附加日志、伪造子 Agent 元数据或隐藏恢复错误代替。

## 运行结构

- Host `MossRuntime` 管理每个 DSH Session 的实时连接、配置快照、待处理语音轮次和委派。浏览器从已鉴权的 DSH 路由连接；API Key 只在 Host 握手 Authorization 中出现。
- `MossAdapter` 注册 `moss-live` provider，仅接受 `moss-live-1.0`。它按 Session 与语音轮次交付原生 `StreamChunk`，支持取消、重复事件去重、先到的回复缓冲、断线终结与有界内存。
- 正式接口创建与恢复原生 Agent，保留独占写入。用户转写通过 Agent Inbox 进入原生循环；助手消息经适配层返回，不手写 `turn/start` 或 `assistant/message`。
- MOSS 会话用持久化的 Agent 预设身份识别，冷恢复仍固定语音模型。所有可能调用其他模型的请求在 Host 拒绝；UI 只是不提供该动作，不能充当唯一限制。
- 客户端每次 `apply` 创建独立控制器，媒体对象、Socket、定时器和订阅由 Cordis effect 释放。视图组件仅订阅状态。麦克风授权后的过期资源立即停止。
- 真实 React 组件分别挂到 `sidebar.footer.action`、`conversation.view`、`conversation.composer` 与 `shell.overlay`；使用正式 selector 与 owner props，不扫描或修改宿主 DOM。
- 不覆盖 DSH 的会话标题、子任务目录及权限确认。自定义 composer 仅匹配 MOSS 主会话，存在 pendingInteraction 时让框架交互继续处理。

## MOSS 协议

- 端点默认为 `wss://api.mosi.cn/v1/realtime`，模型为 `moss-live-1.0`，握手启用客户端委派。
- Host 自动组装当前 DSH 人设和适用指令，投影为 MOSS 支持的能力；剔除不存在的本地工具调用承诺。persona 最多 8000，instructions 最多 16000 个 Unicode 字符。
- 收到 `session_attached` 后配置音色、`session.update` 和音频格式；只在配置成功回执后开放音频上传。配置错误停止输入并给出可操作信息。
- 输入 PCM16 单声道 16 kHz；输出按端点实际协商格式播放，缺省 PCM16 24 kHz。捕获用 AudioWorklet，文本打包为 Blob 模块，由控制器回收 URL。
- 播放队列逐片段确认。打断先确认已结束的片段，`playback.stopped.played_audio_ms` 仅表示当前未完成队首片段的实际播放时间。
- 不重放带副作用的委派。以 MOSS delegation id 去重，原生任务记录保留关联关系。失败、取消和断线均清理在途状态；已被 DSH 接受的任务不因切换视图而取消。
- 每个委派使用 `ctx.subagents.startActivation`，真实 MOSS 父 Agent、配置选中的 Agent 预设和独立任务上下文；`delivery: 'caller'` 避免再次触发普通父模型回复。
- 完成用 `thinking.append` 发送必要事实、`commentary.append` 终结任务。MOSS 协议可能生成简短确认，不能保证绝对静默；不把完整报告作为自动朗读正文发送。
- 浏览器只发送允许的媒体和播放确认；敏感配置、初始化指令、委派完成由 Host 负责。消息大小、排队长度与 Socket bufferedAmount 都设上限。

## DSH 插件设置

所有可变字段通过导出的 Schemastery `Config`、DSH ConfigEditor 和原生插件详情页提供。可即时修改的字段使用 volatile 引用；连接参数在下一次通话取一致快照，外观可即时更新。用户最新修正：本插件只选择 DSH 语音模型，不再重复配置 API 接入。

| 字段 | 行为 |
| --- | --- |
| `appearance.kind` | `orb` / `image`；默认 orb |
| `appearance.color` | 默认 `#58a9ef`，验证 CSS 十六进制颜色 |
| `appearance.particles` | 0–128 的整数，默认 32；减少动态效果时静态呈现 |
| `appearance.diffusion` | 0–100，默认 35 |
| `appearance.image` | 经大小及格式校验的图片；圆形展示，不把临时 blob URL 写入配置 |
| `voiceModel.provider` / `voiceModel.model` | 从 DSH 模型目录选取可用的 MOSS 语音模型，引用既有 provider 配置；不复制 URL 或 Key |
| `voice` / `persona` / `instructions` | MOSS 音色及指令，遵循协议长度限制 |
| `delegation.agentPreset` | 从 DSH Agent 预设目录选择，不能递归选 MOSS 主会话预设 |
| `delegation.provider` | 默认 spawn，必须是可用 DSH provider，不复制任务执行器 |

MOSS 适配器向 DSH LLM 目录注册 provider 与模型，并通过正式 `settings.models.provider-card` 扩展 Models 页面。URL、API Key 凭据引用和端点类型由 Models 下的 MOSS provider 配置管理；默认 realtime URL 为 `wss://api.mosi.cn/v1/realtime`，仅测试可显式使用 loopback ws。API Key 的新增和替换通过 DSH 凭据入口完成。不存在的凭据、预设和 provider 在使用前明确报告，禁止静默替换为其他模型。

## 隔离与数据

目标 DSH `0.2.2-rc.1`。本机桌面安装版 `0.2.1-rc.2`，旧用户 Web profile 为 `0.1.0-rc.6`；创建隔离的目标版本测试 profile，不升级或污染既有用户配置。远端原版代码和备份保留，新版未验收前不部署设备。

只保存转写、助手文本、委派和必要的恢复信息；不保存原始麦克风音频。重开历史不自动打开麦克风。新通话基于同一个 DSH Session 的已保存上下文恢复业务状态，不承诺恢复已结束的供应商 Socket。

## 验收

1. 真实 DSH 中插件可安装、启停，入口由 React 槽位渲染，卸载清理路由、UI 与媒体。
2. HTTP 和 WebSocket 匿名访问均拒绝；凭据值不出现在客户端配置、URL、日志或持久化会话里。
3. mock MOSS 端点在收到并确认系统配置前收不到音频；转写和回复可从原生历史读取，重启后继续使用同一 Session，轮次不冲突。
4. 非 MOSS 会话继续正常使用原有模型/输入栏；MOSS 会话通过 UI 或 API 均不能触发普通模型请求。
5. 至少两个原生子任务并行、可在目录切换并返回主会话；不会额外触发父模型；主语音连接保持。
6. 播放确认、打断、授权晚返回、断线、卸载及积压上限有行为回归覆盖。
7. 三组设置通过 DSH 原生页面校验、保存并跨重启恢复；图片与圆球效果在桌面和手机可见。
8. Edge 桌面和移动视口无空白、框架错误覆盖、控制台错误、横向溢出或输入遮挡。真实麦克风/真实供应商验证与 mock 验证分别报告。

## 依据

- DSH 固定版本源码及包内正式接口：`C:/Users/kylin/dsh-tutor/work/deepseek-harness`。
- [MOSS 实时对话协议](https://platform.moss.cn/docs/reference/moss-live/)。
- 原版审计：`docs/audit-2026-11-11.md`。

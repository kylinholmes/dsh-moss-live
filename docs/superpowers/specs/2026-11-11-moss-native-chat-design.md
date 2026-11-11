# MOSS 原生 DSH 语音会话设计

状态：用户于 2026-11-11 确认方向并授权编写 Spec、Plan 后直接实施。本文与 `docs/requirements.md` 取代旧独立 Chat 和三方群聊草案。视觉参考保存在 `.superpowers/brainstorm/74-1794385572/content/`。

## 目的

在 DSH 中提供一个轻量的 MOSS 语音聊天会话。用户始终与 MOSS 沟通，需要办事时由 MOSS 委托 DSH 子 Agent。历史、子任务、配置和凭据均由 DSH 管理，语音连接独立于当前展示的视图。

## 已决定的体验

- 同一会话有语音与文本历史视图。主会话固定使用插件设置中选定的 DSH 语音模型，首版只实现 MOSS 协议适配，聊天页无模型选择功能；普通 DSH Agent 会话不受影响。不按模型名、版本或 provider 筛选，原始 ID 交给端点；缺失配置提示未配置，实际协议不支持提示不兼容。
- 语音视图提供 Three.js 实心弹性核心与被吸引的外围薄雾、聆听/思考/回复状态、字幕、静音、打断、结束和收起。球体采用有体积约束的表面动力学，抓取仅影响局部并在松手后回弹；雾气由三维速度场、平流、压力投影及粒子惯性驱动，触碰推散后再聚拢。不能以物理光照或纯噪声动画替代运动物理。页面跟随 DSH 默认主题，遵循减少动态效果偏好；浓度/扩散驱动雾量与流体参数，鼠标靠近、点击、触摸及真实输入/播放音量施加运动反馈，设置预览也可交互。早期三个纯外观方案已被用户否决，新版以运动行为验收。
- 收起、进入历史、进入任意子任务或设置时，语音继续连接和播放；悬浮胶囊明确显示 MOSS 身份。只有明确结束、连接故障或插件卸载才释放媒体。
- 历史优先使用 DSH 原生 Chat。子任务保留原生目录、父子导航、多个任务切换及执行记录，任务卡仅作入口，不能取代任务视角。
- 委派是后台独立任务，不是第二个常驻聊天参与者。默认不朗读子 Agent 正文；只向 MOSS回传任务状态与必要结果，由用户决定是否继续讨论。
- 原生历史页的主会话 composer 只保留简洁的「返回语音」控制条，无禁用输入框和重复错误。首版没有普通文字输入协议，不能调用另一个模型或用 TTS 伪造输入。唯一语音界面位于 main:moss，不再注册 conversation.view:moss；侧栏、历史控制条和最小化胶囊返回相同页面与 Session。
- 移动端覆盖 320/390 像素窄屏、横屏和键盘压缩后的可视区域；触摸动作可达，悬浮条不遮挡输入和权限交互。

## 方案与取舍

1. 独立 Chat 数据库与侧栏覆盖层：实现容易，但重复会话、配置及任务系统，已按用户最新要求排除。
2. 实现 DSH Agent 接口的 MOSS 驱动，使用官方 Session 和 SessionPersistence：采用此方案。继承正式导出的 AgentLoop provider，仅按本插件新建的 `moss-live-<uuid>` 会话命名空间分发 create/resume；普通 Agent 调用 super。真实服务测试已验证原生冷恢复、独占写入和子 Agent 父级身份，不需要修改 DSH 核心。
3. 原生文本循环 + MOSS 实时模型流适配：已排除。MOSS 的用户 input.turn 与助手 turn_id 是不同标识，且存在主动确认和打断；不能用普通请求 FIFO 推断关联，也不应伪造用户输入来保存助手主动回复。

方案 2 的 bundle 用原始 name guard 禁用 stock agent-loop 行，再插入唯一 id 的 moss-agent-loop 子类行，恰好一个 active factory。DSH patch name 是 guard，不能当作重命名；有自定义启动 agents 列表的 profile 需要将其显式迁移到新行。基础路由与可启停的语音功能分为独立 Loader 行；关闭语音功能不卸载普通 Agent 的基础 provider。不能以伪造子 Agent 元数据或隐藏恢复错误代替正式流程。

## 运行结构

- Host `MossRuntime` 管理每个 DSH Session 的实时连接、配置快照、待处理语音轮次和委派。浏览器从已鉴权的 DSH 路由连接；API Key 只在 Host 握手 Authorization 中出现。
- 所有原生 provider 和模型都可以选择，不提供名字白名单或插件专属接入表单。供应商返回的模型不支持或协议错误须明确呈现，不能宣称未来版本已经过真实供应商验证。
- 正式接口创建与恢复 MOSS Agent，由其驱动独占写入标准的 user/message、assistant/message 和 turn/step 事件。使用 SessionPreparation、interruptedTurnClosers 和独占持久化 handle；已发布事件由原生 backend 写入，不能另写同一批日志。用户输入和助手回复按各自原始标识保存，驱动自己递增 DSH 轮次，不关联 input.turn 与助手 turn_id。
- 会话身份在专用入口新建，不复用普通空白 Agent，不向原生预设目录添加可跨 driver 切换的 MOSS 预设。冷恢复按会话命名空间选择驱动，从原生 model/selection 恢复配置。MOSS Agent.model.select 拒绝所有公开选择（包括同值），阻止普通 API 把 MOSS 写成全局默认模型；只有语音控制器在开始新通话时应用插件选定的模型。
- 查看的 viewSessionId 与实际通话的 sessionId 分开；查看旧历史不会终止另一通话，只有明确开始才切换连接。客户端每次 `apply` 创建独立控制器，媒体对象、Socket、定时器和订阅由 Cordis effect 释放。视图组件仅订阅状态。麦克风授权后的过期资源立即停止。
- 真实 React 组件分别挂到 顶部 `sidebar.panellist` 与配对 `main`、首页 `conversation.input.right`、`conversation.composer`、`shell.bottom` 及 `settings.section`；使用正式 selector 与 owner props，不扫描或修改宿主 DOM。
- 不覆盖 DSH 的会话标题、子任务目录及权限确认。自定义 composer 仅匹配 MOSS 主会话，存在 pendingInteraction 时让框架交互继续处理。

## MOSS 协议

- 端点来自 DSH 默认 API 配置，HTTP(S) base URL 通过协议映射到 WS(S) /realtime 资源，模型使用 DSH 中选定的原始 ID；`wss://api.mosi.cn/v1/realtime` 和 `moss-live-1.0` 仅为供应商文档示例，握手启用客户端委派。
- Host 自动组装当前 DSH 人设和适用指令，投影为 MOSS 支持的能力；剔除不存在的本地工具调用承诺。persona 最多 8000，instructions 最多 16000 个 Unicode 字符。
- 收到 `session_attached` 后配置音色、`session.update` 和音频格式；只在配置成功回执后开放音频上传。配置错误停止输入并给出可操作信息。
- 输入 PCM16 单声道 16 kHz；输出按端点实际协商格式播放，官方当前缺省为 PCM16 48 kHz。捕获用 AudioWorklet，文本打包为 Blob 模块，由控制器回收 URL。
- 播放队列逐片段确认。打断先确认已结束的片段，`playback.stopped.played_audio_ms` 仅表示当前未完成队首片段的实际播放时间。
- 不重放带副作用的委派。以 MOSS delegation id 去重，原生任务记录保留关联关系。失败、取消和断线均清理在途状态；已被 DSH 接受的任务不因切换视图而取消。
- 每个委派使用 `ctx.subagents.startActivation`，真实 MOSS 父 Agent、配置选中的 Agent 预设和独立任务上下文；显式指定用户配置的委派 route，未配置则读取 `agentDefaultModel.currentSelection()`，防止原生 spawn 缺省继承语音 route；与父 route 完全相同时明确失败。使用 native parent delivery，MOSS 的被动 inbox 将结果通知作为原生上下文保存，不启动另一模型；冷恢复提示词包含有界 child facts，注明不要自动播报。
- 完成用 `thinking.append` 发送必要事实、`commentary.append` 终结任务。MOSS 协议可能生成简短确认，不能保证绝对静默；不把完整报告作为自动朗读正文发送。
- 浏览器只发送允许的媒体和播放确认；敏感配置、初始化指令、委派完成由 Host 负责。消息大小、排队长度与 Socket bufferedAmount 都设上限。

## DSH 插件设置

所有可变字段通过导出的 Schemastery `Config`、DSH ConfigEditor 和原生插件详情页提供。可即时修改的字段使用 volatile 引用；连接参数在下一次通话取一致快照，外观可即时更新。用户最新修正：本插件只选择 DSH 语音模型，不再重复配置 API 接入。

| 字段 | 行为 |
| --- | --- |
| `appearance.kind` | `orb` / `image`；默认 orb |
| `appearance.color` | 默认 `#58a9ef`，验证 CSS 十六进制颜色 |
| `appearance.particles` | 0–128 的整数，默认 32；表示雾体浓度而非亮点，减少动态效果时静态呈现 |
| `appearance.diffusion` | 0–100，默认 35；表示外雾扩散/湍流 |
| `appearance.image` | 经大小及格式校验的图片；圆形展示，不把临时 blob URL 写入配置 |
| `voiceModel.provider` / `voiceModel.model` | 从 DSH 原生目录按提供商/模型选择任意候选，引用既有 provider 配置；不复制 URL 或 Key |
| 系统人设与指令 | 自动从 DSH 系统提示词投影，遵循协议长度限制，不增加第二套编辑器 |
| `delegation.agentPreset` | 从 DSH Agent 预设目录选择，不能递归选 MOSS 主会话预设 |
| `delegation.model` | 显式选择原生执行模型或跟随 DSH 默认聊天模型；与预设分别设置 |
| `delegation.provider` | 默认 spawn，必须是可用 DSH provider，不复制任务执行器 |

API 完全复用 DSH 原生模型页的默认接入方式；插件不注册专属 provider，也不维护 URL、Key 或端点类型表单。模型选择没有未配置这一选项，未选择时显示占位提示；提供商和模型拆成两个官方 Menu。测试按钮执行同一实时协议握手，同时尝试浏览器麦克风授权；检测/停止按钮显示权限和输入活动，离开设置页释放检测流。设置通过 ConfigForm 自动保存，冲突不静默重试覆盖。连接失败显示原因、下一步及原生 settings.open 快捷入口。

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

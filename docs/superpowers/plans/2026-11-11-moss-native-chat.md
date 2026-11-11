# MOSS Native Chat Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [x]`) syntax for tracking.

**Goal:** 在真实 DSH 中交付可配置、持久化、可委派子任务的 MOSS 语音 Chat。

**Architecture:** MOSS 驱动实现 DSH Agent，独占原生 Session 写入；正式 AgentLoop provider 子类按本插件会话命名空间分发 create/resume，普通 Agent 走 super。直接读取原生 Models 配置及目录，不注册 MOSS 专属 provider；客户端媒体控制器独立于视图。

**Tech Stack:** Three.js, Node ESM, Cordis 4.1, DSH 0.2.2-rc.1, Schemastery, React 18, esbuild, ws, node:test, Edge / Playwright。

**Spec:** `docs/superpowers/specs/2026-11-11-moss-native-chat-design.md`

## Global Constraints

- 目标 DSH `0.2.2-rc.1`，不修改现有用户 profile，不向设备部署未验收版。
- 聊天页固定使用设置中选定的 DSH 语音模型；不按名称、版本或 provider 筛选；实际握手判定兼容性，缺失提示未配置，不支持提示不兼容。模型 ID 原样传递，不引入第二个主聊天模型或独立聊天数据库。
- 不扫描宿主 DOM；不覆盖原生子任务导航和 pendingInteraction。
- API Key 仅由 DSH Credentials 解析后送供应商 Authorization。
- 配置成功后才能发送麦克风音频；视图卸载不等于语音结束。
- 未确认的普通文字协议明确禁用，不能伪造发送或私自路由到文本模型。

## Review Focus

- 语音转写和回复事件重排：同一语音轮次只持久化一次且不串到下一轮（Task 3）。
- 冷恢复与仍在运行的子任务：真实父级恢复、结果不重复执行（Task 1、4）。
- 麦克风授权晚返回与插件卸载：旧代次资源被停止（Task 5）。
- 模型选择 API 绕过 UI：不调用普通模型且给出明确拒绝（Task 3）。
- 设置保存冲突和失效预设：不丢失配置，不静默选择替代模型（Task 2、6）。

### Task 1: 真实 DSH 会话适配验证与本地环境

**Files:** Create `src/host/native-agent.js`, `src/host/agent-loop.js`, `src/shared/models.js`, `scripts/dev-runtime.mjs`, `test/native-session.test.js`, `docs/native-session-spike.md`; test profile置于 `.superpowers/runtime/`。

**Interfaces:** Consumes DSH `agents.create/resume`、`SessionPreparation`、`interruptedTurnClosers`、`subagents.startActivation`。Produces `createMossAgent(runtimeCtx,ownerCtx,options)` / `resumeMossAgent(...)`，其 Agent.voice 提供 configure/user/reply/end，及 `npm run dev:dsh` 隔离启动命令。

- [x] 创建隔离 rc.1 profile，验证真实框架加载；检查安装版、源码版与测试版身份。
- [x] 先写原生持久化/恢复测试：一轮输入只产生一轮输出，重新装载后轮次递增，父级可委派真实任务。
- [x] 运行 `node --test test/native-session.test.js`，记录接线缺失的失败。
- [x] 用正式 AgentLoop 子类和原生 JSONL backend 验证持久化、冷恢复、两个真实 spawn 子任务与普通模型路径，记录可行性及无需修改核心的结论。
- [x] 同一测试通过后提交验证代码和结论；不可行时更新 Spec/Plan，不绕过 Session 所有权。

### Task 2: 配置、鉴权与宿主接线

**Files:** Create `src/config.js`, `src/host/dsh-models.js`, `src/host/probe.js`, `src/host/routes.js`, `src/host/runtime.js`; Modify `lib/index.js`（构建产物）、`package.json`、`cordis.patch.yml`; Test `test/config.test.js`, `test/security.test.js`。

**Interfaces:** 插件 Config 保存 `voiceModel: {provider,model}` 引用；API 由用户通过 DSH 默认模型接入方式配置，插件没有独立 API 表单。`publicSettings(config)` 返回无密钥快照；`registerRoutes(ctx, runtime)` 返回 disposer；runtime 从原生可配置 provider 描述取配置，通过 DSH Credentials 解析凭据；测试连接复用正式握手，不建立 Session 或发送麦克风数据。

- [x] 写配置校验与 HTTP/WS 匿名拒绝、跨源拒绝、凭据不泄漏的失败测试。
- [x] 运行 `node --test test/config.test.js test/security.test.js`，确认预期失败。
- [x] 导出正式 Config，声明服务与客户端包依赖，用原生 ConfigEditor 与凭据引用；删除诊断接口和环境隐式回退。
- [x] 测试非法 URL、超限图片、失效预设与积压连接，验证销毁路由后无遗留连接。
- [x] 运行 focused tests，通过后提交。

### Task 3: MOSS 实时协议与原生会话驱动

**Files:** Create `src/host/moss-session.js`, `src/host/prompt.js`; Test `test/moss-session.test.js`, `test/native-session.test.js`。

**Interfaces:** `MossRuntime.start(sessionId)` / `stop(sessionId)`；MossSession 把实际协议事件交给 Agent.voice；专用 driver 拒绝普通用户文字与模型切换，不能让其他请求消费实时回复。

- [x] 写 mock 端点测试：配置确认前无音频、重复/乱序转写不重复持久化、断线取消待流、错误可见。
- [x] 运行 focused tests，确认缺失行为失败。
- [x] 实现 attach→配置→确认→媒体、固定路由、事件队列、Unicode 提示词限额和能力投影。
- [x] 验证普通会话仍使用原 provider，MOSS 会话改模型 API 不得调用普通模型；若需正式宿主策略扩展，在此记录、测试并最小化实现。
- [x] 运行 native + protocol tests，通过后提交。

### Task 4: 委派与多子任务

**Files:** Create `src/host/delegation.js`; Test `test/delegation.test.js`、真实 DSH 集成场景。

**Interfaces:** `handleDelegation({id,objective,context,owner_turn_id})` 以真实父 Agent 调用 `startActivation`，使用原生 parent delivery 持久化结果通知，被动 inbox 不唤醒第二个主模型。

- [x] 先写同 id 去重、两任务并行隔离、缺失预设明确失败、完成不触发父模型的失败测试。
- [x] 实现预设选择、上下文传递、状态与结果回传；不用自建任务执行器或伪造 catalog。
- [x] 真实 DSH 中验证至少两个子任务导航、执行记录及返回主会话；重启不重复执行。
- [x] 运行 delegation + native tests，通过后提交。

### Task 5: 可跨视图保留的浏览器媒体

**Files:** Create `src/client/controller.js`, `src/client/capture-worklet.js`, `src/client/playback.js`; Test `test/controller.test.js`, `test/playback.test.js`。

**Interfaces:** 控制器 `getSnapshot/subscribe/start/stop/mute/interrupt/dispose`；视图不直接拥有 Socket/AudioContext。

- [x] 写授权晚返回、start/stop/start 竞态、view detach 保持、dispose 清理的失败测试。
- [x] 实现 AudioWorklet 捕获与线性重采样，Blob URL 释放、有界发送和播放队列。
- [x] 写并验证播放片段完成、部分队首打断和已完成片段去重回执；不得按整轮计时。
- [x] 运行 controller + playback tests，通过后提交。

### Task 6: React 视图、原生设置页和外观

**Files:** Create `src/client/index.jsx`, `VoiceView.jsx`, `Composer.jsx`, `Overlay.jsx`, `Orb.jsx`, `Settings.jsx`, `locales.ts`, `styles.module.css`, `settings-editor.js`, `microphone.js`, `media-access.js`, `Orb.module.css`, `orb-motion.js`, `orb-renderer.js`; Modify `scripts/build-client.mjs`; Test `test/ui.test.js`。

**Interfaces:** 正式槽位注册，selector 只匹配 MOSS 主会话；设置页消费 DSH `form.state/form.mutate`，Agent 选项来自原生 roster。

- [x] 写真实 React 挂载/卸载、主/普通/子任务会话区分和权限交互优先的失败测试。
- [x] 从视觉原型实现唯一 main:moss 语音球页面、字幕、控制与最小化条；不注册重复的语音 tab，历史 composer 只保留返回语音按钮；保留原生 Chat、会话标题、任务目录及父子导航。
- [x] 实现三组插件设置：实心弹性 3D 球及吸附外雾的颜色/浓度/扩散或图片、从 DSH 目录分提供商/模型选择语音模型、默认委派 Agent 预设及执行模型；聊天页不添加模型选择器。
- [x] 运动物理补充：局部抓取拉伸/松手回弹/体积约束，三维流体速度场/压力投影/粒子平流/触碰推雾；在设置与独立预览中验证，不将光照效果计作此项通过。
- [x] 使用官方 Button/Menu/Input/StateDot，所有页面跟随 DSH 主题；在设置左侧注册 MOSS section，顶部 sidebar.panellist/main 和首页 conversation.input.right 提供入口；不添加任何 MOSS provider 配置表单。
- [x] 通过原生 ConfigEditor 自动保存，校验修订冲突、错误值、重启恢复及动态外观；连接测试同时申请麦克风，检测/停止按钮显示权限和输入状态，离开释放；错误提供设置快捷入口。
- [x] 执行 `npm run build && node --test`，通过后提交。

### Task 7: 真实本机验收与独立复核

**Files:** Modify `README.md`, `docs/verification.md`，更新 Plan 复选框和执行记录。

**Interfaces:** `npm run build`、`npm test`、`npm run dev:dsh` 与 mock MOSS 验收入口。

- [ ] Edge 中验证真实插件启停、配置重启、语音/历史/多个任务互切、连接保留、显式结束。
- [ ] 检查 1280×900、390×844、320×568、手机横屏及键盘压缩场景；检查控制台与可访问性动作。
- [ ] 独立只读 reviewer 检查 Spec 覆盖、数据完整性、鉴权和释放；修复重要发现并运行对应回归。
- [ ] 记录真实供应商/麦克风未运行部分，不把 mock 通过当成真人语音通过。提交最终文档与验证结果，不自动部署设备。

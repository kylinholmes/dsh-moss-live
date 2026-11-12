# 独立通话和输出设备 Implementation Plan

> **For agentic workers:** Use superpowers:executing-plans to implement task-by-task; verify failures before fixes.

**Goal:** 输出可选、普通文本无语音条、每个语音 Session 独立暂停/恢复。

**Architecture:** VoiceSessions 注册表管理既有 VoiceController；原生 mainView 决定当前通话。AudioOutput 独立管理浏览器设备与媒体路由，官方 Modal/Menu 展示。

**Tech Stack:** DSH 0.2.2-rc.1, React, Web Audio, node:test, Edge.

**Spec:** `docs/superpowers/specs/2026-11-12-call-devices-design.md`

## Global Constraints

- 不修改用户配置/密钥；使用隔离 DSH profile。
- 不改变 MOSS 原生 Session 所有权、协议、模型与委派机制。
- 切换主会话自动暂停；同一父语音的历史/子任务保持通话。
- 不支持设备切换的浏览器明确显示系统输出说明。

## Review Focus

1. 快速切换及麦克风迟授权不能把旧资源接到新通话（任务 1）。
2. 暂停/结束按钮不能操作另一 Session（任务 1）。
3. 输出设备拒绝、拔出和重复选择不能留下虚假的成功状态（任务 2）。
4. 新增按钮后 320px 控制栏不能溢出或缩小点击目标（任务 3）。
5. 普通文本、新建页、原生授权交互不能重新显示上一通控制条（任务 3）。

### Task 1: 会话隔离

Files: `src/client/voice-sessions.js`, `controller.js`, `voice-target.js`, `test/voice-sessions.test.js`, `voice-target.test.js`。

Interfaces: VoiceSessions.get(id) → VoiceController; select(id|null), start(id), pause(id), mute(id), stop(id), stopAll(), dispose(); snapshot `{selectedId,calls,...UI}`。voiceCallState(snapshot,id) 返回该通话状态。原 VoiceController 继续只管理一通。

- [x] 写 A/B 独立字幕/静音/暂停恢复、普通会话清空选择、迟授权/失败隔离测试，先运行观察失败。
- [x] 实现注册表，恢复同一通话时保留字幕；原生选择不退回上一通。
- [x] `node --test test/controller.test.js test/voice-sessions.test.js test/voice-target.test.js` 全通过后提交。

### Task 2: 输出设备

Files: `src/client/audio-output.js`, `browser.js`, `test/audio-output.test.js`, `browser-media.test.js`。

Interfaces: AudioOutput 外部 store；open/close/refresh/authorize/select，attach(media) 返回解绑函数；媒体提供 `setOutputDevice(id)`。持有的媒体释放后解绑。

- [x] 写实际设备路由、未来媒体继承、拒绝/拔出回退和注销资源测试，运行确认缺失功能失败。
- [x] 实现本地偏好、能力检测、设备变更监听与媒体 setSinkId。
- [x] `node --test test/audio-output.test.js test/browser-media.test.js` 全通过后提交。

### Task 3: 原生 UI 与交付

Files: `index.jsx`, `VoiceView.jsx`, `VoiceControls.jsx`, `Composer.jsx`, `Overlay.jsx`, `AudioOutputDialog.jsx`, `styles.module.css`, `locales.ts`, `test/ui.test.js`, 文档及版本。

- [x] UI 回归先证明普通文本仍显示旧通话条、控制动作未携带 Session id。
- [x] 订阅原生 session/panel，按明确目标传递控制动作；新增官方设备弹窗与按钮。
- [x] 完整 build/test；隔离 Edge 验证 A/B/文本/子任务、迟授权、设备切换及 320px 布局。
- [ ] 独立最终审查已完成，两项 Important 已 RED→GREEN 修复；待 CI 发布并核对新版本，不覆盖 v0.2.0 资产。

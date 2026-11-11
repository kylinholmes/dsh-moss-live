# 验收记录

2026-11-11，DSH `0.2.2-rc.1`、Windows、Edge、Node.js `26.11.1`。远端原版未部署新代码。

## 已观察结果

| 范围 | 结果 |
| --- | --- |
| 自动回归 | `npm run build` 成功，`npm test` 最新 52/52 通过，包含原生 Session/JSONL 恢复、普通 Agent、配置/凭据引用、鉴权、协议、委派、提示词、媒体、设置、流体/软体和 UI。 |
| 原生 UI | 使用正式 sidebar.panellist/main、conversation.input.right/composer、shell.bottom、settings.section；官方 ui-primitives、CSS Modules 和主题 token。只有一个语音页面，原生历史保留父子任务导航。 |
| 返回语音 | 移除重复 tab；真实 Edge 检查：历史输入框 0、重复错误 0、重复 MOSS tab 0，返回按钮可见，返回不新建会话、不额外连接。320px 无横向溢出。另有回归证明查看其他旧会话不替换当前通话。 |
| 麦克风错误 | 语音和设置统一处理未找到、拒绝授权、无法读取等浏览器错误；NotFoundError 显示中文原因，不再透出 Requested device not found。 |
| 两个子任务 | keyless profile 中两个真实 spawn Agent 完成，可进入原生执行记录；主语音连接和麦克风上传在子任务视图继续。转写修订「十点」及助手文本各展示一次。 |
| 委派恢复 | parent delivery 将通知写入原生父 Session，冷恢复仍保留；父级不额外请求普通模型。提示词只加入有界任务事实，不自动朗读完整报告。 |
| 媒体 | 不含 moss 的 opaque ID `realtime-next-2` 完成协议配置；fixture earlyAudio=0。浏览器实际 AudioWorklet 上传及播放回执已观察到。 |
| 设置 | 原生 ConfigForm 自动保存和冲突回归通过。连接测试申请替代麦克风，停止检测后 track 停止。图片模式上传 PNG，原生配置保存成功；圆形 clip/cover 和手机上传按钮已检查。 |
| 移动布局 | 1280×900、390×844、320×568、844×390、390×350 均无横向溢出。错误区与底部按钮重叠已复现并修复；缩小视口后内容独立滚动、快捷按钮可达、底部控件无遮挡。键盘以缩小视口模拟，未声称真机键盘已验收。 |
| 最小化布局 | 原固定胶囊在 390px 下覆盖输入，已移动到原生 shell.bottom，由框架预留约 68px；桌面/手机/键盘高度三组视口重跑均无输入交叠。语音保持 active=1，earlyAudio=0，两个任务完成及回执继续正常。 |
| 运动与释放 | Three.js + XPBD 局部软体 + 三维 MAC 速度场。鼠标拖拽与手机触摸都能局部形变并松手回弹；触碰区域粒子 24→2，总数不变。默认浓度 32、560px 画布约 29.9 FPS；卸载删除 9 个 GPU buffer、3 个 program 并释放上下文。减少动态时持续绘制为零。原生设置 190px 预览交互与浅色主题雾可见性已观察。 |
| 安装辅助 | `npm run setup:acceptance` 成功。新 profile 首次生成，重复 seed 保留原配置与 credential sentinel；未更改用户全局安装脚本策略。 |
| 原生启停 | 通话中通过官方插件开关关闭 bundle：路由 404、语音入口 0、替代麦克风停止 1 次、上游 active=0；重新启用恢复先前模型、动态外观及浓度 32。测试 fixture 已隔离私有包声明，避免被识别为第二个产品 client 来源。 |

## 真实供应商核查

同一 DSH 凭据直接请求 `GET https://api.mosi.cn/v1/models`，在 `2026-11-11T11:01:22Z` 返回 HTTP 200、15 个模型，无任何 `moss-live-*` ID。脱敏原始 JSON 位于忽略的 `.superpowers/diagnostics/moss-models-raw.json`。Key 只在宿主内存解析，未打印或写入报告。

正式探测器调用 `moss-live-1.0` 实际通过 WebSocket、session.update、media.configure：PCM16 单声道，输入 16 kHz、输出 48 kHz。测试未创建聊天历史、发送麦克风音频或运行外部 Agent。快照 ID 当次返回不兼容；不能据此推断永久不可用。

结论仅限该时间、端点和 Key：目录漏列一个实际可调用的稳定 Live 模型。供应商内部原因未知，不能归因于 DSH/插件过滤，也不能承诺其他账号权限。

官方：[模型列表](https://platform.moss.cn/docs/reference/models/)、[实时协议](https://platform.moss.cn/docs/reference/moss-live/)。

## 仍在进行

- 最终浏览器收口。冷启动已保留原生设置、会话和目录，完整模拟通话重新通过。
- 最终独立整分支审查与重要问题修复。
- 真人麦克风、真实供应商持续双向对话和实际设备语音质量尚未验收。真实供应商结果仅为握手/协议协商；完整浏览器会话使用本地端点和替代媒体流。

球体预览仍供用户试用；物理采用有界实时近似：流场使用参考球形障碍，雾粒子按变形表面的径向包络碰撞，尚非完整双向流固耦合。大幅拉扯可见局部折痕。旧的全局缩放测试已移除，改用局部变形、体积、回弹、压力投影与粒子施力行为测试。

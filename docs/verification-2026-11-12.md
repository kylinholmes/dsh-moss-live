# v0.2.1 验收补充

DSH 0.2.2-rc.1、Windows、Edge。用户新增三项要求及「切走暂停」决定，见 [Spec](superpowers/specs/2026-11-12-call-devices-design.md) 与 [Plan](superpowers/plans/2026-11-12-call-devices.md)。

## 已验证

- 构建成功，完整回归 78/78。新增会话注册表、选择同步、输出路由与并发回归；缺失功能/错误行为均先观察到测试失败，再修复。
- 独立 A/B 两通实际在隔离 DSH 创建。A 静音后切到 B，再切回 A：A 保留字幕、静音和暂停状态，B 独立未静音；不自动恢复连接。明确点击恢复才重新连接同一 id，结束另一通不影响当前通话。
- 语音页与历史互切增加连接 0；属于同一语音的子任务页面保持 active=1，展开返回同一父 Session，增加连接 0。
- 从 B 切到普通文本时媒体停止、active=0，语音 group 与全局胶囊均为 0；普通文本输入栏正常。
- 1280×900、390×844、320×568、844×390、390×350：控制栏无横向溢出，四个通话按钮至少 44×44。输出 Modal 四组移动视口关闭按钮可达。已实际查看截图。
- Edge 中实际调用 AudioContext.setSinkId('') 成功；通过不存在的设备 id 触发浏览器真实拒绝，选择仍为系统默认，模型连接增量 0、active=1。设备枚举中的不存在设备为测试注入，未声称连接过实体耳机。
- 模拟缺少 setSinkId 的浏览器：显示系统声音设置说明，不显示虚假的设备选项；冷页面控制台 error=0。
- 输出设备拒绝、设备拔出回退、启动时失效偏好、未来媒体继承、已释放媒体解绑、临时授权流停止，均有边界单元回归。

## 独立审查与单次修复

gpt-6-astra high 只读审查 `dd2413a..4132c15`，无 Critical、两项 Important、无 Minor。两项均接受并补充失败回归后修复，完整 78/78；没有发起第二轮审查。

1. 嵌套孙任务误暂停父通话：沿原生 parentId 链找最近语音祖先，并加循环保护。回归从 target=null 失败到正确父 Session。
2. 设备刷新中的旧回退覆盖新选择：回退判断与输出切换放入同一串行队列，重新检查当时选中值；过期枚举按 revision 丢弃。回归从最终系统默认失败到保留 speaker。

## 实施决定与边界

同一语音 Session 的原生权限确认可在 shell.bottom 显示自己的控制条，使用户仍可静音/暂停；原生授权输入优先，不显示其他 Session 的控制条。代价是占用框架预留的一行垂直空间。普通文本仍无通话控制条。

README、产品要求和安装文档已更新为新的独立暂停行为，旧验收记录保留其日期语义。

输出偏好只存当前浏览器，不存共享 DSH 配置。实体耳机拔插、手机听筒/扬声器路由和持续真人通话没有硬件条件实测；取决于浏览器暴露的能力，不能由模拟测试推定通过。

## 正式发布

- [main CI](https://github.com/kylinholmes/dsh-moss-live/actions/runs/43142048877) 与 [v0.2.1 tag CI](https://github.com/kylinholmes/dsh-moss-live/actions/runs/43142068132) 均成功，tag 完成 Release 资产发布，78 项测试全部通过。
- 从 [v0.2.1 Release](https://github.com/kylinholmes/dsh-moss-live/releases/tag/v0.2.1) 实际下载包与 SHA256SUMS，字节哈希匹配：`a4f93ab2e809fabfa818f7cafb1ae4f392f4b45553761d013d167b4aeb897702`。
- 对上次隔离安装的 v0.2.0 profile 执行原生 CLI add 新 Release 直链，升级为 0.2.1 成功。实际启动 Web Host，Edge 显示新输出按钮和官方 Modal，冷页面控制台 error/warning 均为 0。该轮使用下载的安装包，不使用源码链接。
- 完整 Git 历史扫描无密钥泄漏；不改动 v0.2.0 tag 或其资产，不修改用户的 DSH profile。

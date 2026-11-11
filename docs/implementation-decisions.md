# 实施决定与成本

2026-11-11。记录实施者作出的取舍，用户明确选择的产品范围另见 requirements.md。

1. 使用正式 AgentLoop 子类与独占 MOSS driver，普通会话走 super。原因是全双工输入与回复 ID 独立；成本是插件需维护原生发布、持久化与释放契约。
2. 用 `moss-live-<uuid>` 命名空间路由插件新建会话，不提供可随意更换 driver 的预设。成本是普通 fork/import 不自动成为语音会话，未来需正式 admission。
3. 拒绝所有公开 model.select，包括同值，保护普通全局默认模型。成本是既有语音会话只能通过插件设置在下一次通话应用模型。
4. 耦合的 Host/runtime/protocol/delegation 先接好再生成 lib，避免发布半成品。成本是 Tasks 2–4 共用提交范围，追踪单项修改需结合测试。
5. 以 name guard 禁用 stock AgentLoop 行并插入唯一子类行，保持一个工厂。成本是原 profile 非空 startup agents 列表需显式迁移，不能同时启用两个工厂。
6. 子任务使用 native parent delivery，由被动 inbox 保存通知而不唤醒另一模型。成本是原生记录中包含结算上下文，框架投递契约变化需回归。
7. 其他页面的最小化条使用 shell.bottom 预留空间；历史页在 composer 显示同款条、二者互斥。成本是最小化占用约 68–78px 可视高度，换取不遮挡输入或权限交互。
8. 复核中保留 namespace 的 fork/import 限制：当前用户能恢复本插件正式创建的 Session。成本是任意复制来的普通会话不能自动获得语音驱动，与第 2 项一致。
9. 暂停或重启后恢复 DSH 业务上下文，再建立供应商连接；不恢复原 Socket。成本是供应商连接中的未保存内部状态无法完整恢复。
10. 物理采用有界实时近似：XPBD 弹性体、MAC 速度场与径向包络粒子碰撞。成本是未实现完整双向流固耦合，大幅拉扯可能有折痕，不用于科学模拟。
11. 本次只交付本地分支、隔离 DSH 和包，不自动部署远端。成本是原设备仍为旧版，需要独立安装验收。
12. 不将模拟验收视为真人麦克风或真实供应商长期通话通过。成本是真实设备、音质、延迟和长期稳定性仍可能发现问题，需要补充真人验收。
13. 快捷设置使用 DSH 官方 Modal，并复用同一 Settings、SettingsEditor 和 ConfigForm。公开 ShortcutsService 没有 invoke，未调用内部 registry、模拟按键或接管 AccountMenu。成本是弹窗只显示 MOSS 分区；新增 API 仍在 DSH 的模型设置中操作。

14. 本次不修改 DSH rc.1 的 HMR 与插件库存实现，保留原生启停协议。已定位热重载后的图残留时序及本次库存刷新滞后，重启验收 Host、刷新库存后完成真实启停验收。成本是开发中更改包元数据后可能需要重启，插件页开关显示偶尔需手动刷新；见 verification.md。

独立复核：无 Critical，五项 Important 已用 RED→GREEN 回归修复，无 Minor 或延期 Minor。详见 verification.md。

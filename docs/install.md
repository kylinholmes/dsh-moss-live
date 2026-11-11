# 安装与升级

本插件面向 **DSH 0.2.2-rc.1**。DSH 宿主需 Node.js **24.9 或更新版本**。Release 的 npm `.tgz` 包包含编译好的宿主入口、AgentLoop 入口和浏览器代码；用户不需要从源码构建。

## 手机或电脑上的 DSH 界面

1. 打开自己的 DSH，进入侧栏「插件」。
2. 点击「添加插件」主按钮，在「包名或地址」输入：

   ```text
   https://github.com/kylinholmes/dsh-moss-live/releases/download/v0.2.0/dsh-moss-live-0.2.0.tgz
   ```

3. 点击「安装」。安装完成后点击「立即启用」。如 DSH 提示需要重启，按该提示重启当前 profile。
4. 打开「设置 → 模型」，通过 DSH 默认流程配置 API 地址、Key 和模型。
5. 在「设置 → MOSS 语音」选择对应提供商和模型，点击「测试连接」。测试会验证鉴权、实时协议及音频格式，同时尝试申请当前浏览器的麦克风权限。允许权限后，可从检测状态及音量反馈确认设备可用。
6. 分别选择默认委派的 Agent 预设与执行模型。预设决定工具、权限与工作方式，模型决定谁执行子任务；执行模型可以跟随 DSH 默认聊天模型。修改自动保存。

无需先把文件下载到手机。直链由 **DSH 宿主** 下载；如果浏览器与 DSH 不在同一台设备，手机里的下载路径也不能作为宿主的本地路径使用。

应粘贴以 `.tgz` 结尾的资产直链，不是 GitHub Release 页面地址、GitHub 仓库地址、Source code ZIP 或 Actions artifact ZIP。Release 页面可通过 [全部版本](https://github.com/kylinholmes/dsh-moss-live/releases) 访问。

语音需要浏览器允许麦克风，浏览器还会检查当前页面是否为安全上下文。测试连接通过仅表示协议兼容；持续真人麦克风通话和手机设备上的实际语音质量仍待验收。

## 从 DSH CLI 安装

在运行 DSH 的宿主终端执行，`web` 应与自己正在使用的 profile 一致：

```sh
dsh plugin --profile web add https://github.com/kylinholmes/dsh-moss-live/releases/download/v0.2.0/dsh-moss-live-0.2.0.tgz
```

也可下载 Release 中的 `.tgz` 后，将其**宿主绝对路径**填入 DSH「添加插件」或作为 CLI `add` 参数。预编译包由 DSH 的原生包管理器安装运行依赖，不需要自行执行 `npm install` 或 `npm run build`。

## 配置与会话

API URL、API Key 和模型目录始终保存在 DSH 原生 Models/Credentials 中。MOSS 设置只引用选定 route，不另建 API 配置。插件不按提供商、模型名称或版本过滤；配置缺失提示「未配置」，实际协议不支持提示「不兼容」。目前只适配 MOSS Live 协议。

官方 Live 示例：原生 API base URL 为 `https://api.mosi.cn/v1`，模型 ID 为 `moss-live-1.0`。插件映射到对应实时 WebSocket 地址，凭据只由宿主解析。其他模型以测试连接结果为准。参考 [MOSS Live 协议](https://platform.moss.cn/docs/reference/moss-live/)。

侧栏「MOSS 语音」与首页入口用于开始新对话；打开入口不会结束现有通话，按「开始语音」才创建 Session。历史页控制栏和最小化条返回对应原会话。历史、子任务目录和权限确认由 DSH 保存和展示；媒体只在暂停、结束、失败或卸载时释放。

## 校验下载内容

每个 Release 同时提供安装包和 [SHA256SUMS](https://github.com/kylinholmes/dsh-moss-live/releases/download/v0.2.0/SHA256SUMS)。把两个文件放在同一目录，可在 Linux 或 Termux 中执行：

```sh
sha256sum --check SHA256SUMS
```

macOS 使用 `shasum -a 256 --check SHA256SUMS`。

Windows PowerShell 可查看文件哈希，并与 `SHA256SUMS` 对照：

```powershell
Get-FileHash .\dsh-moss-live-0.2.0.tgz -Algorithm SHA256
```

## 升级与停用

从 URL 安装的组合包不会显示 npm 注册表版本列表。升级时从新 Release 复制对应 `.tgz` 直链，按 DSH 原生插件管理页的卸载、安装流程操作，具体变更以该版 Release 说明为准。先结束语音通话再升级。

在 DSH 插件管理页停用整个 MOSS bundle 后，语音入口、媒体连接和 MOSS 设置贡献会移除，AgentLoop 恢复原框架组合。再次启用后可以继续使用语音功能。

## 自定义 profile

普通 Web profile 按上述流程安装即可。bundle 应位于 `dsh-base`、`dsh-web-app` 之后；它禁用原 `agent-loop` 行，插入唯一活动的 `moss-agent-loop`，普通会话仍委托给原生 AgentLoop 实现。

如果已有 `agent-loop.config.agents` 非空启动列表，需要在 profile patch 中将**完整列表**迁移到 `moss-agent-loop.config.agents`，不能同时启用两个 AgentLoop provider。配置层覆盖整个 `config`，不深度合并。可通过官方命令检查最终组合：

```sh
dsh --profile web --dump-config
```

## CI 与维护者发布

每个 PR 和 push 都执行 `npm ci`、`npm run build`、`npm test`，随后打包并核对预编译入口、导出、文件清单、版本及安装 hooks。CI 不运行真实付费模型，不表示真人语音质量通过。

Actions 中的 `dsh-moss-live-package` artifact 含 `.tgz` 和 `SHA256SUMS`，保留 14 天。下载到的是 artifact ZIP，解压后才能使用其中的 `.tgz`；公开 Release 的 `.tgz` 资产更适合手机直接安装。

维护者同步 `package.json` 版本和本文下载链接，提交并推送 `v<版本>` tag。仅 tag 的成功构建会进入具有 `contents:write` 权限的 Release job；普通 PR 和分支 push 只有只读仓库权限。Release job 验证校验和，通过 `gh release create --verify-tag --generate-notes` 创建版本，再上传同一份构建产物。重跑会补传/替换资产，不修改已存在 Release 的标题或人工说明；不会执行 `npm publish`。

可在本地构建完成后复现打包检查：

```sh
mkdir -p dist
npm pack --ignore-scripts --json --pack-destination dist > dist/pack.json
node scripts/release-package.mjs
```

安装方式依据 DSH 官方[打包与安装教程](https://github.com/deepseek-ai/deepseek-harness/blob/master/docs/user/develop/basic/publish.zh.md)、[插件管理 usage](https://github.com/deepseek-ai/deepseek-harness/blob/master/packages/client/ui-plugin-manager/README.zh.md) 及其 `parseInstallSpec`：支持 HTTP(S) `.tgz`/`.tar.gz` 直链和宿主绝对路径。

# Cursor 工程还原 + Cursor SDK Monorepo 计划（Bun + TypeScript + Electron）

## 0. 可行性结论

能还原，但要分层定义：

- 原始工程文件（注释、原始 TS 类型、测试、历史）无法逐字节恢复：app 内 0 个 .map，无 sourcesContent，Sentry sourcemap 在 Cursor 私有后端。
- 但可恢复的工程结构远高于预期，已有硬证据：
  1. 主 bundle 是 esbuild 产物，模块包装器保留原文件名：glass 8,708 个包装器 / 7,868 个唯一名，desktop 4,702 / 4,054，main 1,029 / 906；glass 比 desktop 多 3,825 个模块，其中 1,373 个是 .react.* 组件。
  2. app/out/nls.keys.json 给出 1,150 个原始源码路径；970 个命中 VS Code 1.128.0 公开源码，180 个是 Cursor 自有或改名模块。
  3. cursor-computer-use 随包发布 64 个真实 TS 文件（1.1 MB）+ webpack/tsconfig/vitest 配置，暴露真实 monorepo 布局：src/proto、src/external/bufbuild、packages/computer-use、packages/vs-base、extensions/tsconfig.base.json。
  4. @cursor/sdk@1.3.1 是公开 npm 包（428 文件）：190 个 .d.ts、178 个 .d.ts.map（89 个原始源码路径）；ESM/CJS 的 webpack 模块 key 保留原始路径 ./src/agent/...、../cursor-sdk-local-runtime/dist/...、../proto/...；导出名保留。没有 .js.map，但模块图、类型、包布局可精确恢复。

所以交付两类成果：

- A. Cursor SDK 真包（packages/cursor-sdk + 必要的 @anysphere/* 兄弟包）：结构/类型/导出面精确，实现反混淆后可构建、可测试、可加功能。优先级最高。
- B. Cursor 应用工程文件：100% 模块清单 + 拆分 + 溯源；VS Code 派生部分用公开源码精确还原；Cursor 自有部分（glass/composer/agent）分批可读化，明确置信度。

技术栈：Bun（包管理/脚本/构建）+ TypeScript（全部新代码）+ Electron 42.10.0（应用外壳保持不变）。不新增 .mjs 工具；SDK 与包源码均为 TS；测试沿用现有 vitest。

## 1. 证据基线

见 TRACE.md 第 1 节。核心数字：glass 55 MB / 8,708 包装器，desktop 46 MB / 4,702，main 3.3 MB / 1,029；sourcemap 0；nls 1,150 模块（180 不在 upstream）；VS Code 1.128.0 = fc3def6774c76082adf699d366f31a557ce5573f；@cursor/sdk 1.3.1 sha256 30d4aa44a1383cfb282f8f4747e2d54601c0a4a1250b9fb6606c799d1aff9fb6。

## 2. 目标 / 非目标 / 验收

目标：

1. @cursor/sdk 成为 monorepo 内可构建、可测试、可修改的 TS 包，含兄弟包，并建立模块级替换迭代机制。
2. 可重复的证据/trace/溯源体系：每个文件可指回 artifact + 字节区间 + 方法 + 置信度。
3. 应用工程结构 100% 清点（模块、依赖、导出、basename、候选路径）。
4. VS Code 派生部分精确还原，输出 upstream-exact / modified / added + Cursor 补丁报告。
5. Cursor 自有部分分批可读化：P0/P1 优先，其余机械拆分。
6. 扩展还原：computer-use 直接采用源码；agent-exec/host/local-runtime/resolver/mcp 优先。

非目标：逐字节重建原文；把运行中的 app/ 改成从还原源码构建；发布或分发私有代码；本阶段完整重编译应用。

验收：

- bun run recover:verify --split：3 个主 bundle + SDK chunk 拆分后拼回 sha256 一致。
- bun run sdk:verify：tsc 通过；公开导出与 1.3.1 的 .d.ts 对齐；单测 + smoke 通过。
- bun run recover:audit：P0 文件 100% provenance；rename 前后 AST 等价；抽样复核通过。
- 现有 typecheck/test 通过；app/ 零改动。

## 3. Monorepo 结构

根 package.json 增加 workspaces: ["packages/*"]，保留 bun。

    docs/recovery/      README/PLAN/TRACE/CONVENTIONS/STATUS/TASKS/runs/AUDIT
    scripts/recover/    lib/ fetch-artifacts.ts inventory/ split/ rename/ emit/ sdk/ vscode/ verify.ts audit.ts
    recovery/           inventory/*.json mappings/tree.json clusters/*.json manifest.json .cache/
    recovered/          app/{glass,desktop,main} vscode/ extensions/ sdk/ README.md
    packages/           cursor-sdk/ cursor-sdk-local-runtime/ cursor-sdk-shared/ proto/ utils/ context/ metrics/ shell-exec/ mcp-core/ mcp-agent-exec/ agent-kv/ cursor-canvas-sdk/
    .vendor/            cursor-sdk-1.3.1/ vscode-1.128.0/（gitignore）

提交策略：.vendor/、recovery/.cache/、recovered/app/** 默认 gitignore，可 bun run recover:all 再生；提交 docs/、scripts/recover/、recovery/inventory、recovery/mappings、packages/ 源码、recovered 的 README/manifest 与 P0 精选输出。最终按 review 定。

## 4. 恢复流水线（scripts/recover，全 TS）

数据模型：ModuleRecord（artifact、sha256、bundle、ordinal、basename、kind、byteRange、initSymbol、deps、exports、literalAnchors、looseDecls、notes）；MappingRecord（moduleId、sourcePath、basis、upstreamStatus、confidence、notes）。置信度：A = 发布源码/upstream 精确/随包 TS；B = 模块边界 + 可验证导出；C = 名称/聚类推断。

阶段：

1. fetch-artifacts：下载 pinned SDK tarball 与 VS Code tag，校验 sha256，写 inventory/artifacts.json。
2. inventory-esbuild：包装器切段 + 分段 Babel AST（禁止整文件 55 MB 建 AST）；提取依赖、顶层声明、导出、字符串锚点、外部 import。
3. inventory-webpack：解析 __webpack_modules__ / __webpack_esm_modules__ / ids；记录原路径 key、chunk 依赖、导出表。
4. split：输出 raw 模块文件；reassembly 校验（按原顺序拼回 sha256 一致）作为硬门禁。
5. mapping：nls 精确路径 → upstream 哈希；basename 唯一匹配；import 聚类；SDK d.ts map；输出 tree.json + confidence。
6. rename：确定性 pass（导出名、d.ts 名、React 组件名、displayName、类静态字段、命令/设置 id、useX/createX，scope-aware）+ LLM rename map（只改名/注释），apply-map 后做 AST 等价校验。
7. emit：生成 recovered/ 与 packages/ 文件，统一 provenance 头（artifact、sha、module、range、basis、confidence、method）。
8. verify/audit：见第 8 节。

内存策略：按模块切段解析（通常 < 1 MB），缓存到 recovery/.cache/；55 MB glass 只做一次 inventory；subagent 只读 inventory + 自己的切片，不直接解析整包。

## 5. SDK 还原（核心）

输入：.vendor/cursor-sdk-1.3.1/、package.json、190 .d.ts、178 .d.ts.map、52 JS、canvas d.ts（可选）。

模块图与树：

- 从 __webpack_esm_modules__ key 得到 ./src/agent/...（40 个显式）与 ../cursor-sdk-local-runtime/...、../proto/... 等兄弟包 key。
- 从 index.js 的 chunk/bind 引用得到 119 个源码模块，与 d.ts.map 的 89 个路径取并集。
- scope hoisting 模块按 __webpack_require__.d 导出表 + 符号引用聚类；无法定位区块保留父 chunk，标 C。
- 目录：src/agent/{auth,store,filesystem,types,utils,native,cloud-*} + src/sqlite.ts + src/index.ts；兄弟包按 key 前缀落到 packages/<name>/src。

类型/命名/实现：

- .d.ts 为唯一真值，导出的 types/functions/classes 直接迁移，签名不改。
- 实现从 JS body 提取；确定性反混淆 → 可选 LLM rename → AST 校验。
- 初始 tsconfig strict: false，但输出 src/**/*.d.ts 做 API 校验，后续按模块收紧。
- proto 标 generated/vendored，不手改；后续可从 descriptor 反推 .proto。

包与迭代：

    packages/cursor-sdk/
      package.json  (name @cursor/sdk, private, exports esm/cjs/bundled/sqlite)
      tsconfig.json
      src/agent/**  src/sqlite.ts  src/index.ts
      build.ts      (tsc + bun build -> dist)
      test/{parity,unit/*,smoke}.test.ts
      NOTICE

strangler：初始全还原/骨架；未完全还原的模块保留精确类型 + artifact 实现并标 TODO(recovered)；每批跑 sdk:verify；recovery/sdk/status.json 记录 raw|tokenized|renamed|typed|verified。兄弟包先做 local-runtime、shared、utils、context、metrics、shell-exec、mcp-*、agent-kv；proto 为 generated；名称保留 @anysphere/* 且 private。

验证：导出面 parity（动态 import 发布包与重建包，比较导出名/typeof/类原型方法/错误 name，含 ./sqlite）；类型 parity（ts-morph 生成期望 API + tsc）；单测（filesystem、Jsonl/SQLite store、messages、errors、notifier）；smoke（平台/存储 round-trip，默认无网络）；bun run sdk:build 产出四个入口。

回退：成本过高的模块保留 .vendor 发布 JS 作 vendored 实现 + 精确类型 shim，status 记录；不编造实现。

## 6. 应用工程文件还原

- 三个主 bundle 全量 inventory + split + reassembly 门禁；302 个已格式化 JS 文件同样纳入。
- VS Code 基线：拉 tag 1.128.0；nls 精确匹配（970）；其余 basename/目录/import/字符串锚点匹配；分类 upstream-exact（采用公开文件 + LICENSE）、upstream-modified（输出 patches）、cursor-added、third-party；产物 module-map.json + patch-report.md；完整 upstream 树按需 materialize。
- Cursor 自有部分：目录推断优先级 nls-exact > upstream > webpack-key/dts > basename+import cluster > inferred；每文件带 confidence。
  - P0 Composer/Transcript/Tool-call/Markdown；P1 Agent 平台（BackgroundComposer/Subagent/Canvas/Plan/MCP/BrowserAutomation）；P2 Auth/Billing/Usage/Model/Settings/Team；P3 其余。
  - 先输出 .js（JSX 已编译为 jsx() 调用，不强行还原 .tsx）；P0 可生成 .d.ts/JSDoc；rename map 可逆。
- 扩展：computer-use 采用 64 个 TS 源码 + 配置，缺的 workspace 包标 stub；其余 webpack 扩展用 webcrack 或自研模块解析，数字 id 无法还原路径则标 C；优先 agent-exec/host/local-runtime；webpack config、package.nls、schemas 等真实文件直接纳入。
- Canvas SDK（可选）：packages/cursor-canvas-sdk，25 个 .d.ts + canvas-runtime esbuild 拆分，类型 parity + jsdom smoke。

## 7. Subagent 编排（先落盘 trace/plan，再派活）

主线程先写上下文包（任何 agent 启动前）：

1. docs/recovery/PLAN.md（本计划原文）、TRACE.md（本次调查全部证据与复现命令）、CONVENTIONS.md、STATUS.md、TASKS/<id>.md。
2. recovery/inventory/*.json、recovery/clusters/*.json。
3. .vendor/ 固定 artifact，subagent 不联网。

subagent prompt 模板：

    你是 cursor-re 的还原 worker <id>，工作在 <repo>。
    实施前按顺序读：
    1) docs/recovery/PLAN.md（已批准，不可改变范围）
    2) docs/recovery/TRACE.md（主线程调查证据，含 artifact 路径/sha/限制）
    3) docs/recovery/CONVENTIONS.md
    4) docs/recovery/TASKS/<id>.md
    5) 相关的 recovery/inventory/*.json、recovery/clusters/<id>.json
    只写 <owned paths>；不改 app/、根 package.json/bun.lock、其他 agent 目录。
    技术栈 Bun + TypeScript + Electron；新增工具/源码一律 .ts，不新增 .mjs。
    不联网；只用 .vendor/ 与本地 artifact。不得编造代码：输出文件必须有 provenance 头，
    重命名只能通过 rename map + AST 等价校验。
    执行中把命令/结果追加到 docs/recovery/runs/<id>/TRACE.md；
    结束写 docs/recovery/runs/<id>/REPORT.md：完成项/未完成项、产出清单（含置信度）、
    验证命令与实际输出、未知风险、给下一波的交接说明；返回不超过 30 行摘要。

波次与所有权：

| 波次 | agent | 所有权 | 目标 |
|---|---|---|---|
| W1-1 | sdk-core | packages/cursor-sdk/**、scripts/recover/sdk/** | SDK 类型/模块图/实现/构建/parity/test |
| W1-2 | sdk-runtime | packages/{cursor-sdk-local-runtime,cursor-sdk-shared,proto,utils,context,metrics,shell-exec,mcp-core,mcp-agent-exec,agent-kv}/** | 兄弟包 + proto generated |
| W1-3 | vscode-baseline | recovery/vscode/**、scripts/recover/vscode/** | 基线对照、分类、patch report |
| W1-4 | ext-p0 | recovered/extensions/**、scripts/recover/extensions/** | computer-use 采用；agent-exec/host/local-runtime 拆分 |
| W2-1 | glass-composer | recovered/app/glass/composer/**、recovery/mappings/composer.json | P0 composer/transcript/markdown/toolcall |
| W2-2 | glass-agent | recovered/app/glass/agent/** | P1 agent 平台 |
| W2-3 | glass-platform | recovered/app/glass/platform/** | P2 账号/计费/设置/模型 |
| W2-4 | ext-agent | recovered/extensions/agent/** | 其余扩展 |
| W3-1 | audit | 只写 docs/recovery/runs/audit/**、AUDIT.md | 独立复核 |
| W3-2 | sdk-iterate | packages/cursor-sdk/src/**、test/** | 首批自定义功能 + 测试 |

并发上限 4；W2 在 W1 门禁后启动；主线程负责根配置/workspace/lockfile 集成。每个 agent ≤ 1,500 模块或 ≤ 5 MB 源码，超出拆 cluster。独立任务同 turn 并行启动；agent 卡住则读其 TRACE 缩范围重派。下一波必读上一波 STATUS 与 REPORT。主线程统一合并 manifest，避免并发写。

## 8. 里程碑与门禁

| 里程碑 | 通过条件 |
|---|---|
| M0 | recover:inventory 产出全部 JSON；app/ 无改动 |
| M1 | recover:verify --split 全绿（3 bundle + SDK chunks 拼回 sha256） |
| M2 | sdk:verify 全绿；导出 parity 100%；smoke 通过 |
| M3 | vscode module-map + patch report；computer-use 采用并通过其 vitest 子集 |
| M4 | P0 glass 文件 100% provenance；AST 等价；audit 抽样通过 |
| M5 | STATUS 覆盖全部模块状态；剩余项明确 |

每个门禁：recover:verify → recover:audit → 更新 STATUS → 向用户汇报指标（模块数/文件数/置信度分布/未决项）。

## 9. 风险、法律、未知

- 无 sourcemap：注释/TS 类型/测试不可恢复；所有推断标 confidence，不包装成原文。
- scope hoisting/合并模块：按导出表 + 符号聚类；无法定位标 C，不硬拆。
- 重复 basename（42 个 nls basename 重复）：用 import 图与目录锚点消歧。
- LLM 幻觉：rename 只改名/注释；AST 等价门禁拒绝语句变化；audit 抽样。
- 法律：Cursor 专有代码 + SDK License；仅本地研究/互操作，不发布/不再分发；packages/cursor-sdk 保留 LICENSE/NOTICE 且 private。
- 规模：glass 7.8k 模块，分批；默认只对 P0/P1 做 LLM 重命名。
- 原生/生成代码：proto、tree-sitter、sqlite 标 vendored/generated，不手写。
- 未知：若后续获得 sourcemap，流水线可直接接入。

## 10. 批准后第一批动作（按序）

1. 写 docs/recovery/{README,PLAN,TRACE,CONVENTIONS,STATUS}.md。
2. 根 package.json 加 workspaces + TS 脚本；安装 @babel/parser/traverse/generator、ts-morph、webcrack 等 devDeps；更新 bun.lock。
3. fetch-artifacts：.vendor/cursor-sdk-1.3.1、.vendor/vscode-1.128.0。
4. M1 垂直切片：先 main.js 的 inventory+split+拼回，再 desktop/glass；SDK extract 生成 inventory/sdk.json。
5. 生成 recovery/clusters/*.json（P0/P1 分组）。
6. 启动 W1 四个 subagent，使用第 7 节模板。
7. W1 回来跑门禁、更新 STATUS、汇报；决定 W2 批次。
8. 每个门禁后汇报，不自动 commit；提交由用户确认。

## 11. 假设与默认决策

- 技术栈 Bun + TypeScript + Electron 42.10.0；不新增 .mjs 工具。
- 包管理 bun；根 workspaces 为 packages/*。
- SDK 固定 1.3.1；VS Code 基线固定 1.128.0 / fc3def67。
- SDK 包名保留 @cursor/sdk 且 private；兄弟包保留 @anysphere/* 且 private。
- 运行中的 app 保持现有路径；还原树独立，不替换运行时。
- .vendor/ 与 raw split 不提交；提交清单见第 3 节。
- subagent 默认不联网；网络只由主线程 fetch-artifacts 使用。
- 不自动 commit、不发布任何还原物。

# Cursor 工程还原工作区

这是 Cursor RE 的"工程还原"工作区。目标、范围、阶段与验收见 [PLAN.md](PLAN.md)；本次调查的全部证据与复现命令见 [TRACE.md](TRACE.md)；所有 worker 的硬约束见 [CONVENTIONS.md](CONVENTIONS.md)。

当前成果与验收结果见 [RESULTS.md](RESULTS.md)，机器可读清点见 [INVENTORY.md](INVENTORY.md)，各 worker 的 trace/report 在 [runs](runs/) 下。

## 目录

| 路径 | 作用 |
|---|---|
| PLAN.md | 已批准的总体计划（范围/结构/流水线/subagent 编排/门禁） |
| TRACE.md | 主线程调查证据：artifact、sha256、模块统计、SDK 路径、VS Code 基线、限制 |
| CONVENTIONS.md | provenance 头、置信度、命名、AST 校验、目录所有权、禁止事项 |
| STATUS.md | 里程碑看板（主线程维护） |
| TASKS/ | 每个 subagent 的任务书 |
| runs/ | 每个 subagent 自己的 TRACE.md / REPORT.md |
| AUDIT.md | 独立审计报告 |

## 代码位置

| 路径 | 作用 |
|---|---|
| scripts/recover/ | 还原流水线（Bun + TypeScript） |
| recovery/ | 机器可读清单、映射、cluster、manifest、缓存 |
| recovered/ | 还原出的工程文件（可再生） |
| packages/ | 还原出的可构建包，核心是 packages/cursor-sdk |
| .vendor/ | 固定版本的 artifact 解包（gitignore） |

## 快速命令（随实现补齐）

    bun run recover:inventory
    bun run recover:verify --split
    bun run recover:audit
    bun run sdk:verify
    bun run sdk:build

技术栈固定为 Bun + TypeScript + Electron；新增工具和包源码一律 TypeScript。

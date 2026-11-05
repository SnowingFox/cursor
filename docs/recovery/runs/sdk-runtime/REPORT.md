# W1-2 sdk-runtime — report

Owner: subagent sdk-runtime. Runs: `w1-sdk-runtime`. Artifact: @cursor/sdk 1.3.1 (sha256 30d4aa44a1383cfb282f8f4747e2d54601c0a4a1250b9fb6606c799d1aff9fb6). No network, no git commit, no root/.vendor/app edits.

## 1. Completed

- 10 private @anysphere/* packages reconstructed from the webpack module keys of dist/esm (+cjs fallback), 98 unique source-path modules, one file per source path.
- Every module file carries a provenance header (artifact + sha256 + webpack module key + byte range + basis/confidence/method/run) and an artifact-exact body (minified identifiers preserved, no invented logic).
- proto is generated: 63 protoc-gen-es modules + runtime/compact.ts, all marked generated; descriptor data untouched; generated namespace barrel only.
- Cross-package imports wired to @anysphere/<pkg>/<sub> with per-package tsconfig paths; package manifests declare sibling deps as `workspace:*`.
- Ambient typed shims are the only non-recovered declarations (basis: typed-shim) for externals absent offline; runtime needs a real install.
- `bunx tsc -p packages/<name>/tsconfig.json --noEmit` exits 0 for all 10 packages. 81/98 module files carry a documented `@ts-nocheck - TODO(recovered)` (minified artifact erases type signatures); the remaining 17 are checked. No syntax/parse failures.
- 5 unit tests pass for recovered @anysphere/utils pure helpers.
- Reports: extract-report.json (full key→file map), packages-summary.json, typecheck.json, workspace-deps.json, proto-status.json.

## 2. Per-package status

| package | modules | generated | tsc | @ts-nocheck | deps |
|---|---|---|---|---|---|
| cursor-sdk-local-runtime | 14 | 0 | PASS | 9/14 | `@anysphere/agent-kv`, `@anysphere/context`, `@anysphere/utils` |
| cursor-sdk-shared | 2 | 0 | PASS | 0/2 | `zod` ^3.25.0 || ^4.0.0 |
| proto | 64 | 63 (+ runtime/compact marked generated) | PASS | 62/64 | `@bufbuild/protobuf` 1.10.0 |
| utils | 10 | 0 | PASS | 5/10 | `rxjs` 8.0.0-alpha.14 |
| context | 3 | 0 | PASS | 3/3 | `@opentelemetry/api` 1.9.0 |
| metrics | 1 | 0 | PASS | 0/1 | `@anysphere/context` |
| shell-exec | 1 | 0 | PASS | 1/1 | `@anysphere/context`, `@anysphere/utils`, `ignore` 7.0.5, `rxjs` 8.0.0-alpha.14 |
| mcp-core | 1 | 0 | PASS | 0/1 | — |
| mcp-agent-exec | 1 | 0 | PASS | 0/1 | `@anysphere/mcp-core`, `@anysphere/shell-exec` |
| agent-kv | 1 | 0 | PASS | 1/1 | `@anysphere/context`, `@anysphere/metrics`, `@anysphere/proto`, `@anysphere/utils`, `zod` ^3.25.0 || ^4.0.0 |

Package version 1.0.0-re, name @anysphere/<pkg>, private:true, type:module, exports `./*.js`→`src/*.ts`; every package has package.json + tsconfig.json + src tree; barrels are namespace re-exports (`export * as m_<path>`) so mangled export names cannot collide.

## 3. Verification (commands and observed results)

    $ bun scripts/recover/sdk-runtime/extract.ts
    modules: 98
    byPackage: {"cursor-sdk-local-runtime":14,"cursor-sdk-shared":2,"proto":64,"utils":10,"context":3,"metrics":1,"shell-exec":1,"mcp-core":1,"mcp-agent-exec":1,"agent-kv":1}
    warnings: 2 duplicates: 58

    $ bun scripts/recover/sdk-runtime/typecheck.ts
    cursor-sdk-local-runtime: PASS (rounds 0, remaining 0)
    cursor-sdk-shared: PASS (rounds 0, remaining 0)
    proto: PASS (rounds 0, remaining 0)
    utils: PASS (rounds 0, remaining 0)
    context: PASS (rounds 0, remaining 0)
    metrics: PASS (rounds 0, remaining 0)
    shell-exec: PASS (rounds 0, remaining 0)
    mcp-core: PASS (rounds 0, remaining 0)
    mcp-agent-exec: PASS (rounds 0, remaining 0)
    agent-kv: PASS (rounds 0, remaining 0)

    $ bunx vitest run --config packages/utils/vitest.config.ts
    Test Files 1 passed (1) / Tests 5 passed (5)

The two extractor warnings are the async-module wrappers that were flattened (bun-sqlite-driver.ts, node-sqlite-driver.ts); catch handlers were dropped because the ESM import itself must throw instead of calling webpack resolve/reject.

## 4. Duplicate definitions and export mangling

56 of 98 paths are compiled into two chunks (esm/index.js and esm/sqlite.js, i.e. the "." and "./sqlite" entries). webpack mangleExports produced different export/local names per chunk variant (example: `../proto/dist/generated/agent/v1/todo_tool_pb.js` → index.js exports AJ,Vj,bk,kW; sqlite.js exports AJ,bk,kW).
Rule applied: per path keep the variant with the largest export table (always esm/index.js in practice, except keys only present in a lazy chunk). All other variants' export names were compared: **0 names exist only in a non-canonical variant**, so no consumer chunk references an export the emitted file lacks. Full diff data is in extract-report.json → `duplicates`.

## 5. Key → package/file map (all 98 recovered modules)

| webpack module key | package | emitted file | source chunk | status |
|---|---|---|---|---|
| `../agent-kv/dist/index.js` | agent-kv | `packages/agent-kv/src/index.ts` | dist/esm/index.js | extracted |
| `../context/dist/core.js` | context | `packages/context/src/core.ts` | dist/esm/index.js | extracted |
| `../context/dist/logger.js` | context | `packages/context/src/logger.ts` | dist/esm/index.js | extracted |
| `../context/dist/otel.js` | context | `packages/context/src/otel.ts` | dist/esm/index.js | extracted |
| `../cursor-sdk-local-runtime/dist/run-store/agent-checkpoint-store.js` | cursor-sdk-local-runtime | `packages/cursor-sdk-local-runtime/src/run-store/agent-checkpoint-store.ts` | dist/esm/730.js | extracted |
| `../cursor-sdk-local-runtime/dist/run-store/default-local-agent-stores.js` | cursor-sdk-local-runtime | `packages/cursor-sdk-local-runtime/src/run-store/default-local-agent-stores.ts` | dist/esm/19.js | extracted |
| `../cursor-sdk-local-runtime/dist/run-store/id.js` | cursor-sdk-local-runtime | `packages/cursor-sdk-local-runtime/src/run-store/id.ts` | dist/esm/856.js | extracted |
| `../cursor-sdk-local-runtime/dist/run-store/in-memory-run-event-notifier.js` | cursor-sdk-local-runtime | `packages/cursor-sdk-local-runtime/src/run-store/in-memory-run-event-notifier.ts` | dist/esm/19.js | extracted |
| `../cursor-sdk-local-runtime/dist/run-store/index.js` | cursor-sdk-local-runtime | `packages/cursor-sdk-local-runtime/src/run-store/index.ts` | dist/esm/index.js | extracted |
| `../cursor-sdk-local-runtime/dist/run-store/private-directory.js` | cursor-sdk-local-runtime | `packages/cursor-sdk-local-runtime/src/run-store/private-directory.ts` | dist/esm/730.js | extracted |
| `../cursor-sdk-local-runtime/dist/run-store/sqlite-agent-run-store.js` | cursor-sdk-local-runtime | `packages/cursor-sdk-local-runtime/src/run-store/sqlite-agent-run-store.ts` | dist/esm/856.js | extracted |
| `../cursor-sdk-local-runtime/dist/run-store/sqlite-blob-store.js` | cursor-sdk-local-runtime | `packages/cursor-sdk-local-runtime/src/run-store/sqlite-blob-store.ts` | dist/esm/18.js | extracted |
| `../cursor-sdk-local-runtime/dist/run-store/sqlite-run-event-store.js` | cursor-sdk-local-runtime | `packages/cursor-sdk-local-runtime/src/run-store/sqlite-run-event-store.ts` | dist/esm/656.js | extracted |
| `../cursor-sdk-local-runtime/dist/run-store/sqlite/bun-sqlite-driver.js` | cursor-sdk-local-runtime | `packages/cursor-sdk-local-runtime/src/run-store/sqlite/bun-sqlite-driver.ts` | dist/esm/914.js | extracted |
| `../cursor-sdk-local-runtime/dist/run-store/sqlite/node-sqlite-driver.js` | cursor-sdk-local-runtime | `packages/cursor-sdk-local-runtime/src/run-store/sqlite/node-sqlite-driver.ts` | dist/esm/343.js | extracted |
| `../cursor-sdk-local-runtime/dist/run-store/sqlite/open-sqlite-driver.js` | cursor-sdk-local-runtime | `packages/cursor-sdk-local-runtime/src/run-store/sqlite/open-sqlite-driver.ts` | dist/esm/18.js | extracted |
| `../cursor-sdk-local-runtime/dist/run-store/status.js` | cursor-sdk-local-runtime | `packages/cursor-sdk-local-runtime/src/run-store/status.ts` | dist/esm/856.js | extracted |
| `../cursor-sdk-local-runtime/dist/utils/logger.js` | cursor-sdk-local-runtime | `packages/cursor-sdk-local-runtime/src/utils/logger.ts` | dist/esm/18.js | extracted |
| `../cursor-sdk-shared/dist/message-schemas.js` | cursor-sdk-shared | `packages/cursor-sdk-shared/src/message-schemas.ts` | dist/esm/index.js | extracted |
| `../cursor-sdk-shared/dist/tool-call-types.js` | cursor-sdk-shared | `packages/cursor-sdk-shared/src/tool-call-types.ts` | dist/esm/index.js | extracted |
| `../mcp-agent-exec/dist/mcp-sandbox-policy.js` | mcp-agent-exec | `packages/mcp-agent-exec/src/mcp-sandbox-policy.ts` | dist/esm/449.js | extracted |
| `../mcp-core/dist/transport/mcp-url-utils.js` | mcp-core | `packages/mcp-core/src/transport/mcp-url-utils.ts` | dist/esm/305.js | extracted |
| `../metrics/dist/index.js` | metrics | `packages/metrics/src/index.ts` | dist/esm/index.js | extracted |
| `../proto/dist/generated/agent/v1/agent_pb.js` | proto | `packages/proto/src/generated/agent/v1/agent_pb.ts` | dist/esm/index.js | generated |
| `../proto/dist/generated/agent/v1/agent_service_connect.js` | proto | `packages/proto/src/generated/agent/v1/agent_service_connect.ts` | dist/esm/index.js | generated |
| `../proto/dist/generated/agent/v1/agent_service_pb.js` | proto | `packages/proto/src/generated/agent/v1/agent_service_pb.ts` | dist/esm/index.js | generated |
| `../proto/dist/generated/agent/v1/agent_skills_pb.js` | proto | `packages/proto/src/generated/agent/v1/agent_skills_pb.ts` | dist/esm/index.js | generated |
| `../proto/dist/generated/agent/v1/agent_store_conflict_exec_pb.js` | proto | `packages/proto/src/generated/agent/v1/agent_store_conflict_exec_pb.ts` | dist/esm/index.js | generated |
| `../proto/dist/generated/agent/v1/ai_attribution_tool_pb.js` | proto | `packages/proto/src/generated/agent/v1/ai_attribution_tool_pb.ts` | dist/esm/index.js | generated |
| `../proto/dist/generated/agent/v1/apply_agent_diff_tool_pb.js` | proto | `packages/proto/src/generated/agent/v1/apply_agent_diff_tool_pb.ts` | dist/esm/index.js | generated |
| `../proto/dist/generated/agent/v1/ask_question_tool_pb.js` | proto | `packages/proto/src/generated/agent/v1/ask_question_tool_pb.ts` | dist/esm/index.js | generated |
| `../proto/dist/generated/agent/v1/background_shell_exec_pb.js` | proto | `packages/proto/src/generated/agent/v1/background_shell_exec_pb.ts` | dist/esm/index.js | generated |
| `../proto/dist/generated/agent/v1/canvas_diagnostics_exec_pb.js` | proto | `packages/proto/src/generated/agent/v1/canvas_diagnostics_exec_pb.ts` | dist/esm/index.js | generated |
| `../proto/dist/generated/agent/v1/computer_use_tool_pb.js` | proto | `packages/proto/src/generated/agent/v1/computer_use_tool_pb.ts` | dist/esm/index.js | generated |
| `../proto/dist/generated/agent/v1/connect_scm_tool_pb.js` | proto | `packages/proto/src/generated/agent/v1/connect_scm_tool_pb.ts` | dist/esm/index.js | generated |
| `../proto/dist/generated/agent/v1/conversation_search_exec_pb.js` | proto | `packages/proto/src/generated/agent/v1/conversation_search_exec_pb.ts` | dist/esm/index.js | generated |
| `../proto/dist/generated/agent/v1/create_plan_tool_pb.js` | proto | `packages/proto/src/generated/agent/v1/create_plan_tool_pb.ts` | dist/esm/index.js | generated |
| `../proto/dist/generated/agent/v1/cursor_rules_pb.js` | proto | `packages/proto/src/generated/agent/v1/cursor_rules_pb.ts` | dist/esm/index.js | generated |
| `../proto/dist/generated/agent/v1/delete_exec_pb.js` | proto | `packages/proto/src/generated/agent/v1/delete_exec_pb.ts` | dist/esm/index.js | generated |
| `../proto/dist/generated/agent/v1/diagnostics_exec_pb.js` | proto | `packages/proto/src/generated/agent/v1/diagnostics_exec_pb.ts` | dist/esm/index.js | generated |
| `../proto/dist/generated/agent/v1/exec_pb.js` | proto | `packages/proto/src/generated/agent/v1/exec_pb.ts` | dist/esm/index.js | generated |
| `../proto/dist/generated/agent/v1/fetch_exec_pb.js` | proto | `packages/proto/src/generated/agent/v1/fetch_exec_pb.ts` | dist/esm/index.js | generated |
| `../proto/dist/generated/agent/v1/generate_image_tool_pb.js` | proto | `packages/proto/src/generated/agent/v1/generate_image_tool_pb.ts` | dist/esm/index.js | generated |
| `../proto/dist/generated/agent/v1/grep_exec_pb.js` | proto | `packages/proto/src/generated/agent/v1/grep_exec_pb.ts` | dist/esm/index.js | generated |
| `../proto/dist/generated/agent/v1/hook_additional_context_pb.js` | proto | `packages/proto/src/generated/agent/v1/hook_additional_context_pb.ts` | dist/esm/index.js | generated |
| `../proto/dist/generated/agent/v1/hooks_pb.js` | proto | `packages/proto/src/generated/agent/v1/hooks_pb.ts` | dist/esm/index.js | generated |
| `../proto/dist/generated/agent/v1/kv_pb.js` | proto | `packages/proto/src/generated/agent/v1/kv_pb.ts` | dist/esm/index.js | generated |
| `../proto/dist/generated/agent/v1/ls_exec_pb.js` | proto | `packages/proto/src/generated/agent/v1/ls_exec_pb.ts` | dist/esm/index.js | generated |
| `../proto/dist/generated/agent/v1/mcp_allowlist_precheck_exec_pb.js` | proto | `packages/proto/src/generated/agent/v1/mcp_allowlist_precheck_exec_pb.ts` | dist/esm/index.js | generated |
| `../proto/dist/generated/agent/v1/mcp_auth_tool_pb.js` | proto | `packages/proto/src/generated/agent/v1/mcp_auth_tool_pb.ts` | dist/esm/index.js | generated |
| `../proto/dist/generated/agent/v1/mcp_exec_pb.js` | proto | `packages/proto/src/generated/agent/v1/mcp_exec_pb.ts` | dist/esm/index.js | generated |
| `../proto/dist/generated/agent/v1/mcp_pb.js` | proto | `packages/proto/src/generated/agent/v1/mcp_pb.ts` | dist/esm/index.js | generated |
| `../proto/dist/generated/agent/v1/pr_management_tool_pb.js` | proto | `packages/proto/src/generated/agent/v1/pr_management_tool_pb.ts` | dist/esm/index.js | generated |
| `../proto/dist/generated/agent/v1/read_exec_pb.js` | proto | `packages/proto/src/generated/agent/v1/read_exec_pb.ts` | dist/esm/index.js | generated |
| `../proto/dist/generated/agent/v1/record_screen_exec_pb.js` | proto | `packages/proto/src/generated/agent/v1/record_screen_exec_pb.ts` | dist/esm/index.js | generated |
| `../proto/dist/generated/agent/v1/replace_env_tool_pb.js` | proto | `packages/proto/src/generated/agent/v1/replace_env_tool_pb.ts` | dist/esm/index.js | generated |
| `../proto/dist/generated/agent/v1/report_bugfix_results_tool_pb.js` | proto | `packages/proto/src/generated/agent/v1/report_bugfix_results_tool_pb.ts` | dist/esm/index.js | generated |
| `../proto/dist/generated/agent/v1/request_context_exec_pb.js` | proto | `packages/proto/src/generated/agent/v1/request_context_exec_pb.ts` | dist/esm/index.js | generated |
| `../proto/dist/generated/agent/v1/requested_model_pb.js` | proto | `packages/proto/src/generated/agent/v1/requested_model_pb.ts` | dist/esm/index.js | generated |
| `../proto/dist/generated/agent/v1/sandbox_pb.js` | proto | `packages/proto/src/generated/agent/v1/sandbox_pb.ts` | dist/esm/index.js | generated |
| `../proto/dist/generated/agent/v1/selected_context_pb.js` | proto | `packages/proto/src/generated/agent/v1/selected_context_pb.ts` | dist/esm/index.js | generated |
| `../proto/dist/generated/agent/v1/setup_vm_environment_tool_pb.js` | proto | `packages/proto/src/generated/agent/v1/setup_vm_environment_tool_pb.ts` | dist/esm/index.js | generated |
| `../proto/dist/generated/agent/v1/shell_allowlist_precheck_exec_pb.js` | proto | `packages/proto/src/generated/agent/v1/shell_allowlist_precheck_exec_pb.ts` | dist/esm/index.js | generated |
| `../proto/dist/generated/agent/v1/shell_exec_pb.js` | proto | `packages/proto/src/generated/agent/v1/shell_exec_pb.ts` | dist/esm/index.js | generated |
| `../proto/dist/generated/agent/v1/smart_mode_classifier_exec_pb.js` | proto | `packages/proto/src/generated/agent/v1/smart_mode_classifier_exec_pb.ts` | dist/esm/index.js | generated |
| `../proto/dist/generated/agent/v1/subagent_exec_pb.js` | proto | `packages/proto/src/generated/agent/v1/subagent_exec_pb.ts` | dist/esm/index.js | generated |
| `../proto/dist/generated/agent/v1/subagents_pb.js` | proto | `packages/proto/src/generated/agent/v1/subagents_pb.ts` | dist/esm/index.js | generated |
| `../proto/dist/generated/agent/v1/switch_mode_tool_pb.js` | proto | `packages/proto/src/generated/agent/v1/switch_mode_tool_pb.ts` | dist/esm/index.js | generated |
| `../proto/dist/generated/agent/v1/system_prompt_pb.js` | proto | `packages/proto/src/generated/agent/v1/system_prompt_pb.ts` | dist/esm/index.js | generated |
| `../proto/dist/generated/agent/v1/todo_tool_pb.js` | proto | `packages/proto/src/generated/agent/v1/todo_tool_pb.ts` | dist/esm/index.js | generated |
| `../proto/dist/generated/agent/v1/utils_pb.js` | proto | `packages/proto/src/generated/agent/v1/utils_pb.ts` | dist/esm/index.js | generated |
| `../proto/dist/generated/agent/v1/web_fetch_allowlist_precheck_exec_pb.js` | proto | `packages/proto/src/generated/agent/v1/web_fetch_allowlist_precheck_exec_pb.ts` | dist/esm/index.js | generated |
| `../proto/dist/generated/agent/v1/web_fetch_tool_pb.js` | proto | `packages/proto/src/generated/agent/v1/web_fetch_tool_pb.ts` | dist/esm/index.js | generated |
| `../proto/dist/generated/agent/v1/web_search_tool_pb.js` | proto | `packages/proto/src/generated/agent/v1/web_search_tool_pb.ts` | dist/esm/index.js | generated |
| `../proto/dist/generated/agent/v1/write_exec_pb.js` | proto | `packages/proto/src/generated/agent/v1/write_exec_pb.ts` | dist/esm/index.js | generated |
| `../proto/dist/generated/aiserver/v1/bidi_pb.js` | proto | `packages/proto/src/generated/aiserver/v1/bidi_pb.ts` | dist/esm/index.js | generated |
| `../proto/dist/generated/aiserver/v1/chat_pb.js` | proto | `packages/proto/src/generated/aiserver/v1/chat_pb.ts` | dist/esm/index.js | generated |
| `../proto/dist/generated/aiserver/v1/dashboard_connect.js` | proto | `packages/proto/src/generated/aiserver/v1/dashboard_connect.ts` | dist/esm/index.js | generated |
| `../proto/dist/generated/aiserver/v1/dashboard_pb.js` | proto | `packages/proto/src/generated/aiserver/v1/dashboard_pb.ts` | dist/esm/index.js | generated |
| `../proto/dist/generated/aiserver/v1/docs_pb.js` | proto | `packages/proto/src/generated/aiserver/v1/docs_pb.ts` | dist/esm/index.js | generated |
| `../proto/dist/generated/aiserver/v1/privacy_mode_pb.js` | proto | `packages/proto/src/generated/aiserver/v1/privacy_mode_pb.ts` | dist/esm/index.js | generated |
| `../proto/dist/generated/aiserver/v1/repository_pb.js` | proto | `packages/proto/src/generated/aiserver/v1/repository_pb.ts` | dist/esm/index.js | generated |
| `../proto/dist/generated/aiserver/v1/tools_pb.js` | proto | `packages/proto/src/generated/aiserver/v1/tools_pb.ts` | dist/esm/index.js | generated |
| `../proto/dist/generated/aiserver/v1/unify_eligibility_pb.js` | proto | `packages/proto/src/generated/aiserver/v1/unify_eligibility_pb.ts` | dist/esm/index.js | generated |
| `../proto/dist/generated/aiserver/v1/usage_pb.js` | proto | `packages/proto/src/generated/aiserver/v1/usage_pb.ts` | dist/esm/index.js | generated |
| `../proto/dist/generated/aiserver/v1/utils_pb.js` | proto | `packages/proto/src/generated/aiserver/v1/utils_pb.ts` | dist/esm/index.js | generated |
| `../proto/dist/runtime/compact.js` | proto | `packages/proto/src/runtime/compact.ts` | dist/esm/index.js | generated |
| `../shell-exec/dist/api/index.js` | shell-exec | `packages/shell-exec/src/api/index.ts` | dist/esm/305.js | extracted |
| `../utils/dist/disposable.js` | utils | `packages/utils/src/disposable.ts` | dist/esm/index.js | extracted |
| `../utils/dist/fresh-uuid.js` | utils | `packages/utils/src/fresh-uuid.ts` | dist/esm/856.js | extracted |
| `../utils/dist/lru-cache.js` | utils | `packages/utils/src/lru-cache.ts` | dist/esm/305.js | extracted |
| `../utils/dist/path-utils.js` | utils | `packages/utils/src/path-utils.ts` | dist/esm/305.js | extracted |
| `../utils/dist/promise-extras.js` | utils | `packages/utils/src/promise-extras.ts` | dist/esm/index.js | extracted |
| `../utils/dist/safe-spawn-cwd.js` | utils | `packages/utils/src/safe-spawn-cwd.ts` | dist/esm/305.js | extracted |
| `../utils/dist/test-resets.js` | utils | `packages/utils/src/test-resets.ts` | dist/esm/305.js | extracted |
| `../utils/dist/workload-spawn.js` | utils | `packages/utils/src/workload-spawn.ts` | dist/esm/305.js | extracted |
| `../utils/dist/workspace-paths.js` | utils | `packages/utils/src/workspace-paths.ts` | dist/esm/index.js | extracted |
| `../utils/dist/writable-iterable.js` | utils | `packages/utils/src/writable-iterable.ts` | dist/esm/305.js | extracted |

Total rows: 98. Any key not listed here is third-party (`*.pnpm/*`) or `./src/**` (owned by sdk-core) and is not part of these packages.

## 6. Unresolved / risks

1. **Third-party packages are not installed** (no network in this run): @bufbuild/protobuf, zod, rxjs, ignore, @opentelemetry/api. All are covered by `packages/<pkg>/src/externals.d.ts` shorthand ambient modules so tsc is green, but **runtime execution of proto/agent-kv/utils.promise-extras/shell-exec is blocked until the main thread runs bun install** with the lines in workspace-deps.json. Versions evidenced: @bufbuild/protobuf 1.10.0, zod ^3.25.0||^4.0.0, rxjs 8.0.0-alpha.14, ignore 7.0.5, @opentelemetry/api 1.9.0. @connectrpc/connect 1.6.1 may be needed by generated *_connect modules once executed.
2. **Mangled export names**: sibling packages were published to the bundle with webpack-mangled export names (e.g. @anysphere/agent-kv exports aY,pH,aD,sh,nj). Real names are not recoverable from the artifact; cursor-sdk sources recovered by sdk-core must use the same mangled names (they do, since both come from the same bundle). This is a naming limitation, not a behavioral one.
3. **81/98 files @ts-nocheck**: the code bodies are artifact-exact, but TS inference over minified classes (e.g. static `$`/`$p` methods, private fields via mangled helpers) produces errors that would require inventing types. Each file states `TODO(recovered)` in its exception line. No runtime code was replaced by a shim.
4. **Cross-chunk consumer assumption**: canonical-variant export sets were verified to be supersets of every other variant (0 missing names). If a future chunk/lazy entry with a new export set is added, re-run extract.ts (it re-derives the union check) rather than hand-editing.
5. proto generated source uses @bufbuild/protobuf v1 API (proto3, protoInt64, Message) and proto/runtime/compact.ts helpers; compiled against the ambient any shim, so type parity with the real protobuf runtime is unverified offline.
6. `scripts/recover/sdk/extract.ts` (sdk-core) was not modified or depended on; the local parser lives in scripts/recover/sdk-runtime/.

## 7. Handoff for the main thread / sdk-core

- Apply workspace-deps.json: add the 10 `@anysphere/*`: `workspace:*` lines plus external versions to packages/cursor-sdk/package.json, and add the same `@anysphere/*` + `@anysphere/*/*` paths to packages/cursor-sdk/tsconfig.json. Root already has workspaces ["packages/*"] — no root manifest change required by this worker.
- After `bun install`, delete/keep externals.d.ts as appropriate; if the real packages install, tsc prefers them over shorthand declarations (ambient only fills missing modules).
- Runtime smoke is still pending on the sdk-core side: proto binary round-trip and local-run sqlite stores need @bufbuild/protobuf + node:sqlite/bun:sqlite.
- Re-run `bun scripts/recover/sdk-runtime/extract.ts && bun scripts/recover/sdk-runtime/emit-packages.ts && bun scripts/recover/sdk-runtime/typecheck.ts` if the extractor changes; it is deterministic and idempotent except for the run timestamp in headers.

# sdk-core REPORT (W1-1)

Status: **green for this run**. `tsc --noEmit` passes, build succeeds, 16/16 tests pass,
parity executes and reports 65/96 (67.7%) published runtime exports with zero shape
mismatches. No code was invented; unimplemented modules are absent and listed.

## Completed

1. **Package skeleton** `packages/cursor-sdk/`: package.json (name `@cursor/sdk`,
   private, 1.3.1-re, type module, published exports map incl. ./sqlite and ./bundled,
   pinned published deps + 10 `@anysphere/*` workspace:* deps), tsconfig.json,
   tsconfig.build.json, build.ts (tsc declaration emit + bun build esm/cjs/bundled),
   README.md, NOTICE.md.
2. **Recovered src tree**: 27 first-party modules split from the published ESM
   (errors, messages, team-id, usage-types, tool-call-utils, logger, analytics hashes,
   filesystem errors/merge/types/walk/trees/compose/local-fs, platform-package-locator,
   auth credential-store/login-flow/stored-credentials, store sdk-local-defaults/
   sdk-state-root/local-agent-record-conversion, run-interaction-accumulator,
   subagent-conversion, sdk-config, delta-types, vendored-tree-sitter).
3. **7 vendored sibling modules** under `src/vendor/` (proto utils_pb + compact runtime,
   cursor-sdk-shared message-schemas + tool-call-types, utils workspace-paths +
   fresh-uuid, brace-expansion).
4. **Exact type surface**: `src/api-types/**` = 94 verbatim published `.d.ts` files
   (80 unique original source paths), stored as TypeScript declaration modules.
5. **Generated public entry** `src/index.ts`: 18 type-export statements + 65 value
   exports, derived from index.d.ts and recovery/sdk/implemented.json.
6. **Tests** (5 files / 16 tests): parity vs vendored published ESM (names, typeof,
   class prototype methods, error names, ./sqlite), errors, messages, filesystem errors,
   no-network smoke.
7. **Scripts**: `scripts/recover/sdk/{extract,convert,gen-types,gen-index,verify}.ts`;
   `bun run sdk:verify` runs tsc -> build -> vitest -> dist import and prints commands.
8. **Manifests/docs**: `recovery/sdk/{modules,implemented,status}.json`,
   `docs/recovery/runs/sdk-core/{TRACE,REPORT}.md`, `parity-coverage.json`,
   `workspace-deps.json`.

## Module status counts

| Metric | Count |
|---|---|
| own-source module keys in published ESM | 40 |
| recovered first-party modules (verified) | 27 |
| vendored sibling modules | 7 |
| type-only published modules | 94 files / 80 source paths |
| recovered source files emitted | 34 (27 + 7) |
| published runtime exports | 96 |
| recovered runtime exports | 65 (67.7%) |
| missing runtime exports | 31 |
| parity shape mismatches (kind/proto/error-name) | 0 / 0 / 0 |
| ./sqlite exports recovered | 0 of 1 |

Unrecovered first-party modules (13): analytics.ts, cloud-agent.ts, cloud-api-client.ts,
executor-common.ts, filesystem/executors.ts, local-executor.ts, native/tree-sitter*.cjs,
safe-connect-transport.ts, store/local-agent-store.ts, store/sqlite-local-agent-store.ts,
tools-option.ts, transport.ts.

Unrecovered runtime exports (31): Agent, Cursor, CursorAgentPlatform, createAgentPlatform,
composeLocalAgentStore, paginateAgentDocuments, paginateCheckpointBlobIds,
paginateRunDocuments, JsonlLocalAgentStore, JSONL_LOCAL_AGENT_STORE_FILES,
InMemoryRunEventNotifier, LocalRunEventNotifier, LocalRunEventNotifierServer,
createInMemoryRunEventNotifier, createLocalRunEventNotifier,
startLocalRunEventNotifierServer, createFileSystemTools, UnsupportedRunOperationError,
DEFAULT_LOGIN_API_KEY_TTL_MS, getTurnType, and the conversation/delta/message zod schema
consts (AgentConversationTurnSchema, ConversationStepSchema, ConversationTurnSchema,
ShellCommandSchema, ShellConversationTurnSchema, ShellOutputSchema,
SdkAssistantMessageSchema, SdkThinkingMessageSchema, SdkUserMessageSchema,
AssistantMessageSchema, UserMessageSchema).

## Verification (exact commands / actual output)

```
$ bunx tsc -p packages/cursor-sdk/tsconfig.json --noEmit
  exit 0
$ bun packages/cursor-sdk/build.ts
  [sdk:build] tsc declaration emit -> dist/esm
  [sdk:build] bun build esm / cjs / bundled (minified esm)
  [sdk:build] ok
$ bunx vitest run --config packages/cursor-sdk/vitest.config.ts
  Test Files 5 passed (5) · Tests 16 passed (16)
  [parity] {"vendor":96,"rebuilt":65,"present":65,"coveragePct":67.7,
            "kindMismatch":0,"protoMismatch":0,"errorMismatch":0,"sqliteMissing":1}
$ bun -e 'import("./packages/cursor-sdk/dist/esm/index.js")'  (NODE_PATH=app/node_modules)
  dist esm exports: 65 sqlite exports: 0
$ bun run sdk:verify
  [recover] sdk:verify ok
```

## Unknowns / risks

- Recovered bodies keep minified identifiers and are `// @ts-nocheck`; declarations are
  emitted from api-types, not inferred from implementations. Deterministic rename pass
  and per-module typing are still TODO.
- api-types files are `// @ts-nocheck` copies; external and @anysphere types resolve to
  ambient `any` shims offline (shims are declaration-only, marked confidence C).
- The 85 KB entry-level inline block (Agent/Cursor/platform/notifier/store glue) was not
  split; those exports are missing rather than stubbed.
- ./sqlite has no runtime export yet (needs @anysphere/cursor-sdk-local-runtime wiring).
- `local-executor.ts` is genuinely ~1.13 MB (AST-verified boundary, no nested module
  keys); extracting it is a separate effort.
- Tests resolve published externals from app/node_modules; a real `bun install` is
  required for normal use. Workspace deps are declared but not yet imported by src.

## Handoff

- sdk-runtime: 10 sibling packages now exist. Replace `src/vendor/**` imports with
  `@anysphere/proto`, `@anysphere/cursor-sdk-shared`, `@anysphere/utils` and drop
  the vendored copies; this unblocks local-agent-store, delta-types purity, sqlite.
- Main thread: run `bun install` (workspace:* deps added), keep package private, do not
  publish. Root scripts `sdk:build`/`sdk:verify` work unchanged. `packages/cursor-sdk/.gitignore`
  ignores `dist/`; `recovery/sdk/.gitignore` ignores regenerable `raw/` (3.8 MB).
- Next SDK wave (highest value): entry-tail split (stubs.ts, public-api.ts, run.ts,
  platform.ts, notifiers, JSONL store), chunk 52 sqlite store, filesystem/executors,
  then deterministic rename + typed modules replacing @ts-nocheck.
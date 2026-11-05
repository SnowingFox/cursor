// @recovered-by cursor-re
// artifact: .vendor/cursor-sdk-1.3.1/dist/esm/index.js sha256:30d4aa44a1383cfb282f8f4747e2d54601c0a4a1250b9fb6606c799d1aff9fb6
// module: ./src/agent/filesystem/local-fs.ts range:263291..264475
// basis: webpack-key
// confidence: B
// method: split
// run: w1-sdk-core 2026-11-05T10:09:20.432Z
// @ts-nocheck -- body copied verbatim from the published artifact; typed public surface lives in src/api-types/**
// note: webpack wrapper converted to ESM; internal identifiers remain minified (no semantic edits)
import * as n from "node:path";
import * as s from "../errors.js";

const i="localFileSystem";function o(...t){if(t.some((t=>void 0!==t?.fs)))throw new s.j1("local.fs is only supported for local SDK agents. Omit cloud options, or omit local.fs.",{isRetryable:!1})}function a(t){if(void 0===t.fs)return;const r=[void 0!==t.subagentInherit?"local.subagentInherit":void 0,void 0!==t.resourceProviderOptions?"local.resourceProviderOptions":void 0].filter((t=>void 0!==t));if(r.length>0)throw new s.j1(`local.fs cannot be combined with ${r.join(", ")}: local.fs sets the session's executors and its Task children. Remove ${r.join(", ")}.`,{isRetryable:!1});void 0!==t.reportedWorkspacePath&&u(t.reportedWorkspacePath)}function u(t){const r=r=>{throw new s.j1(`local.reportedWorkspacePath ${JSON.stringify(t)} is not a workspace inside local.fs: ${r}.`,{isRetryable:!1})};t.startsWith("/")&&!t.includes("\\")||r('it must be an absolute posix path such as "/repo"');const e=n.posix.normalize(t),i=e.length>1&&e.endsWith("/")?e.slice(0,-1):e;return("/tmp"===i||i.startsWith("/tmp/"))&&r("/tmp is the SDK's scratch space and is empty at the start of every run"),i}
export { a as I2, o as VP, i as rK, u as xh };

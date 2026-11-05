// @recovered-by cursor-re
// artifact: .vendor/cursor-sdk-1.3.1/dist/esm/index.js sha256:30d4aa44a1383cfb282f8f4747e2d54601c0a4a1250b9fb6606c799d1aff9fb6
// module: ./src/agent/sdk-config.ts range:303235..303844
// basis: webpack-key
// confidence: B
// method: split
// run: w1-sdk-core 2026-11-05T10:09:21.236Z
// @ts-nocheck -- body copied verbatim from the published artifact; typed public surface lives in src/api-types/**
// note: webpack wrapper converted to ESM; internal identifiers remain minified (no semantic edits)
import * as n from "./errors.js";
import * as s from "./store/sdk-local-defaults.js";

let i,o;function a(t){if(void 0!==t.local&&"store"in t.local&&(0,s.Dt)(t.local.store??void 0),void 0!==t.local&&"useHttp1ForAgent"in t.local&&(i=t.local.useHttp1ForAgent??void 0),void 0!==t.local&&"workspaceScanCacheTtlMs"in t.local){const r=t.local.workspaceScanCacheTtlMs??void 0;if(void 0!==r&&(!Number.isFinite(r)||r<=0))throw new n.j1(`local.workspaceScanCacheTtlMs must be a positive number of milliseconds, got ${r}`,{isRetryable:!1});o=r}}function u(){return i}function c(){return o}
export { c as Mu, u as it, a as xP, a as configureCursorSdk };

// @recovered-by cursor-re
// artifact: .vendor/cursor-sdk-1.3.1/dist/esm/index.js sha256:30d4aa44a1383cfb282f8f4747e2d54601c0a4a1250b9fb6606c799d1aff9fb6
// module: ../utils/dist/workspace-paths.js range:2483558..2484190
// basis: webpack-key
// confidence: B
// method: vendored
// run: w1-sdk-core 2026-11-05T10:09:22.025Z
// @ts-nocheck -- body copied verbatim from the published artifact; typed public surface lives in src/api-types/**
// note: vendored sibling-package module; @anysphere workspace package is owned by sdk-runtime

const n="agent-transcripts";function s(t){return t.replace(/[^a-zA-Z0-9]/g,"-").replace(/-+/g,"-").replace(/^-+|-+$/g,"")}function i(t,r){return function(t,...r){if(!function(t){return/^[A-Za-z]:[\\/]/.test(t)||t.startsWith("\\\\")||t.startsWith("//")}(t))return[t.replace(/\/+$/,""),...r].join("/");const e=t.replace(/\//g,"\\").replace(/\\+$/,""),n=r.map((t=>t.replace(/\//g,"\\")));return 0===e.length?["","",...n].join("\\"):[e,...n].join("\\")}(t,".cursor","projects",s(r))}function o(t){let r=encodeURIComponent(t);return r=r.replace(/%/g,"_"),r.length>200&&(r=r.slice(0,200)),r}
export { n as O2, i as Rv, s as r_, o as sh };

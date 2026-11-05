// @recovered-by cursor-re
// artifact: .vendor/cursor-sdk-1.3.1/dist/esm/index.js sha256:30d4aa44a1383cfb282f8f4747e2d54601c0a4a1250b9fb6606c799d1aff9fb6
// module: ./src/agent/platform-package-locator.ts range:297823..299167
// basis: webpack-key
// confidence: B
// method: split
// run: w1-sdk-core 2026-11-05T10:09:20.499Z
// @ts-nocheck -- body copied verbatim from the published artifact; typed public surface lives in src/api-types/**
// note: webpack wrapper converted to ESM; internal identifiers remain minified (no semantic edits)
import * as n from "node:fs";
import * as s from "node:path";

function i(t){try{const r=(0,n.statSync)(t);return r.isFile()&&("win32"===process.platform||!!(73&r.mode))}catch{return!1}}function o(t){let r=(0,s.resolve)(t);const e=(0,s.parse)(r).root;for(;;){if((0,n.existsSync)((0,s.join)(r,".git")))return r;if(r===e)return;r=(0,s.dirname)(r)}}function a(t){const{relativePath:r,accept:e}=t,n=`${process.platform}-${process.arch}`,i=[`@cursor/sdk-${n}`,`@cursor/february-${n}`],a=[];for(const r of t.excludedWorkspaceDirs){a.push((0,s.resolve)(r));const t=o(r);void 0!==t&&a.push(t)}const u=[];process.argv[1]&&u.push({startDir:(0,s.dirname)((0,s.resolve)(process.argv[1])),excludeWorkspaceHelpers:!1}),u.push({startDir:(0,s.dirname)((0,s.resolve)(process.execPath)),excludeWorkspaceHelpers:!0});const c=t=>a.some((r=>function(t){const r=(0,s.relative)((0,s.resolve)(t.directory),(0,s.resolve)(t.candidatePath));return""===r||!r.startsWith("..")&&!(0,s.isAbsolute)(r)}({candidatePath:t,directory:r})));for(const{startDir:t,excludeWorkspaceHelpers:n}of u){let o=t;const a=(0,s.parse)(o).root;for(;o!==a;){for(const t of i){const i=(0,s.join)(o,"node_modules",t,r);if(e(i)&&(!n||!c(i)))return i}o=(0,s.dirname)(o)}}}function u(t){return a({relativePath:(0,s.join)("bin",t.binaryName),excludedWorkspaceDirs:[t.excludedWorkspaceDir],accept:i})}
export { u as hQ, a as nk };

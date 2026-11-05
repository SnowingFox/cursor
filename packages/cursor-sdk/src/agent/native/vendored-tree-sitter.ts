// @recovered-by cursor-re
// artifact: .vendor/cursor-sdk-1.3.1/dist/esm/index.js sha256:30d4aa44a1383cfb282f8f4747e2d54601c0a4a1250b9fb6606c799d1aff9fb6
// module: ./src/agent/native/vendored-tree-sitter.ts range:296822..297774
// basis: webpack-key
// confidence: B
// method: split
// run: w1-sdk-core 2026-11-05T10:09:21.565Z
// @ts-nocheck -- body copied verbatim from the published artifact; typed public surface lives in src/api-types/**
// note: webpack wrapper converted to ESM; internal identifiers remain minified (no semantic edits)
import * as n from "node:fs";
import * as s from "node:path";
import * as i from "../platform-package-locator.js";

e.r(r),e.d(r,{configureVendoredTreeSitterWorkspaceDir:()=>a,createUnavailableParserClass:()=>c,loadVendoredTreeSitterModule:()=>u});const o=new Set;function a(t){o.add((0,s.resolve)(t))}function u(t){const r=function(){const t=process.env.CURSOR_TREE_SITTER_VENDOR_DIR;return t&&(0,s.isAbsolute)(t)?t:(0,i.nk)({relativePath:"vendor",excludedWorkspaceDirs:o.size>0?[...o]:[process.cwd()],accept:t=>(0,n.existsSync)((0,s.join)(t,"tree-sitter","index.js"))})}();return void 0===r?{available:!1,reason:`the @cursor/sdk-${process.platform}-${process.arch} optional dependency (which vendors the tree-sitter natives) is not installed; shell command analysis is disabled`}:{available:!0,module:t.nativeRequire((0,s.join)(r,t.packageName,"index.js"))}}function c(t){return class{constructor(){const r=new Error(t);throw Object.assign(r,{code:"CURSOR_TREE_SITTER_STUBBED"})}}}


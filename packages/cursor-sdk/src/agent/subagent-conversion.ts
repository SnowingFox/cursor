// @recovered-by cursor-re
// artifact: .vendor/cursor-sdk-1.3.1/dist/esm/index.js sha256:30d4aa44a1383cfb282f8f4747e2d54601c0a4a1250b9fb6606c799d1aff9fb6
// module: ./src/agent/subagent-conversion.ts range:321161..321889
// basis: webpack-key
// confidence: B
// method: split
// run: w1-sdk-core 2026-11-05T10:09:21.159Z
// @ts-nocheck -- body copied verbatim from the published artifact; typed public surface lives in src/api-types/**
// note: webpack wrapper converted to ESM; internal identifiers remain minified (no semantic edits)
import * as n from "./errors.js";

function s(t){if(void 0===t)return;const r=Object.entries(t);if(0===r.length)return;const e=[];for(const[t,s]of r){if(void 0!==s.mcpServers)for(const r of s.mcpServers)if("string"!=typeof r)throw new n.j1(`Custom subagent "${t}" has an inline McpServerConfig in mcpServers; SDK custom subagents only support string references in v1.`);const r=void 0===s.model||"inherit"===s.model?"inherit":s.model;e.push({name:t,description:s.description,prompt:s.prompt,model:r})}return e}function i(t){return s(t)}function o(t){const r=s(t);if(void 0!==r)return r.map((t=>({name:t.name,description:t.description,prompt:t.prompt,model:"inherit"===t.model?"inherit":t.model.id})))}
export { o as DB, i as SB };

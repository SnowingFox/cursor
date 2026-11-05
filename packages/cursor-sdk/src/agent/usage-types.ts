// @recovered-by cursor-re
// artifact: .vendor/cursor-sdk-1.3.1/dist/esm/index.js sha256:30d4aa44a1383cfb282f8f4747e2d54601c0a4a1250b9fb6606c799d1aff9fb6
// module: ./src/agent/usage-types.ts range:326171..326956
// basis: webpack-key
// confidence: B
// method: split
// run: w1-sdk-core 2026-11-05T10:09:19.582Z
// @ts-nocheck -- body copied verbatim from the published artifact; typed public surface lives in src/api-types/**
// note: webpack wrapper converted to ESM; internal identifiers remain minified (no semantic edits)

function n(t){if(!t)return;const{inputTokens:r,outputTokens:e,cacheReadTokens:n,cacheWriteTokens:s,reasoningTokens:i}=t;return{inputTokens:r,outputTokens:e,cacheReadTokens:n,cacheWriteTokens:s,totalTokens:r+e,...void 0!==i?{reasoningTokens:i}:{}}}function s(t){let r=0,e=0,n=0,s=0,i=0,o=!1,a=!1;for(const u of t)u&&(o=!0,r+=u.inputTokens,e+=u.outputTokens,n+=u.cacheReadTokens,s+=u.cacheWriteTokens,void 0!==u.reasoningTokens&&(a=!0,i+=u.reasoningTokens));if(o)return{inputTokens:r,outputTokens:e,cacheReadTokens:n,cacheWriteTokens:s,totalTokens:r+e,...a?{reasoningTokens:i}:{}}}function i(t){if(t)return"number"==typeof t.inputTokens&&"number"==typeof t.outputTokens&&"number"==typeof t.cacheReadTokens&&"number"==typeof t.cacheWriteTokens?n(t):t}
export { i as g8, n as qI, s as wV };

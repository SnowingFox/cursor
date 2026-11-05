// @recovered-by cursor-re
// artifact: .vendor/cursor-sdk-1.3.1/dist/esm/index.js sha256:30d4aa44a1383cfb282f8f4747e2d54601c0a4a1250b9fb6606c799d1aff9fb6
// module: ./src/agent/auth/stored-credentials.ts range:177107..177681
// basis: webpack-key
// confidence: B
// method: split
// run: w1-sdk-core 2026-11-05T10:09:20.746Z
// @ts-nocheck -- body copied verbatim from the published artifact; typed public surface lives in src/api-types/**
// note: webpack wrapper converted to ESM; internal identifiers remain minified (no semantic edits)
import * as n from "node:fs";
import * as s from "./credential-store.js";
import * as i from "./login-flow.js";

let o;function a(){o=void 0}function u(t){return void 0!==t?t:process.env.CURSOR_API_KEY??function(){const t=function(){const t=Date.now();if(void 0!==o&&t-o.readAtMs<5e3)return o.value;let r;try{const t=(0,n.readFileSync)((0,s.rJ)(),"utf8");r=(0,s.Nw)(JSON.parse(t))}catch{r=void 0}return o={value:r,readAtMs:t},r}();if(void 0!==t&&!(void 0!==t.apiKeyExpiresAtMs&&t.apiKeyExpiresAtMs<=Date.now())&&t.backendUrl===(0,i.pi)())return t.apiKey}()}
export { u as Lc, a as s1 };

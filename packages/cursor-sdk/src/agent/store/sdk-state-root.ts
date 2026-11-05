// @recovered-by cursor-re
// artifact: .vendor/cursor-sdk-1.3.1/dist/esm/index.js sha256:30d4aa44a1383cfb282f8f4747e2d54601c0a4a1250b9fb6606c799d1aff9fb6
// module: ./src/agent/store/sdk-state-root.ts range:320408..321117
// basis: webpack-key
// confidence: B
// method: split
// run: w1-sdk-core 2026-11-05T10:09:20.905Z
// @ts-nocheck -- body copied verbatim from the published artifact; typed public surface lives in src/api-types/**
// note: webpack wrapper converted to ESM; internal identifiers remain minified (no semantic edits)
import * as n from "node:crypto";
import * as s from "node:fs";
import * as i from "node:os";
import * as o from "node:path";
import * as a from "../../vendor/utils/workspace-paths.js";

function u(t){const r=(0,o.join)((0,a.Rv)((0,i.homedir)(),t),"sdk-agent-store"),e=(0,o.join)(r,(0,n.createHash)("sha256").update(t).digest("hex"));if((0,s.existsSync)(e))return e;const u=function(t){try{return(0,n.createHash)("md5").update(t).digest("hex")}catch(t){if(function(t){if(!(t instanceof Error))return!1;return"ERR_OSSL_EVP_UNSUPPORTED"===t.code||"Digest method not supported"===t.message}(t))return;throw t}}(t);if(void 0===u)return e;const c=(0,o.join)(r,u);if(!(0,s.existsSync)(c))return e;try{return(0,s.renameSync)(c,e),e}catch{return(0,s.existsSync)(c)?c:e}}
export { u as V, u as getDefaultSdkStateRoot };

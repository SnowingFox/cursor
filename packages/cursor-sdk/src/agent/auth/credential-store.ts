// @recovered-by cursor-re
// artifact: .vendor/cursor-sdk-1.3.1/dist/esm/index.js sha256:30d4aa44a1383cfb282f8f4747e2d54601c0a4a1250b9fb6606c799d1aff9fb6
// module: ./src/agent/auth/credential-store.ts range:173347..174704
// basis: webpack-key
// confidence: B
// method: split
// run: w1-sdk-core 2026-11-05T10:09:20.591Z
// @ts-nocheck -- body copied verbatim from the published artifact; typed public surface lives in src/api-types/**
// note: webpack wrapper converted to ESM; internal identifiers remain minified (no semantic edits)
import * as n from "node:fs/promises";
import * as s from "node:os";
import * as i from "node:path";

function o(){return(0,i.join)((0,s.homedir)(),".cursor","sdk","auth.json")}function a(t){return function(t){return"object"==typeof t&&null!==t&&("version"in t&&1===t.version&&"backendUrl"in t&&"string"==typeof t.backendUrl&&"apiKey"in t&&"string"==typeof t.apiKey&&"createdAtMs"in t&&"number"==typeof t.createdAtMs&&(!("apiKeyExpiresAtMs"in t)||void 0===t.apiKeyExpiresAtMs||"number"==typeof t.apiKeyExpiresAtMs)&&(!("email"in t)||void 0===t.email||"string"==typeof t.email))}(t)?t:void 0}async function u(t,r){try{"string"==typeof t?await(0,n.chmod)(t,r):await t.chmod(r)}catch(t){if("win32"!==process.platform)throw t}}class c{constructor(t){this.filePath=t??o()}get path(){return this.filePath}async load(){let t;try{t=await(0,n.readFile)(this.filePath,"utf8")}catch{return}try{return a(JSON.parse(t))}catch{return}}async save(t){const r=(0,i.dirname)(this.filePath);await(0,n.mkdir)(r,{recursive:!0,mode:448}),await u(r,448);const e=await(0,n.open)(this.filePath,"w",384);try{await u(e,384),await e.writeFile(`${JSON.stringify(t,null,2)}\n`,"utf8")}finally{await e.close()}}async clear(){await(0,n.rm)(this.filePath,{force:!0})}}class l{async load(){return this.credentials}async save(t){this.credentials=t}async clear(){this.credentials=void 0}}
export { a as Nw, c as Tg, c as FileCredentialStore, l as fZ, l as InMemoryCredentialStore, o as rJ, o as getDefaultSdkAuthPath };

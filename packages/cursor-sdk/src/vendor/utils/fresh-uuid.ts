// @recovered-by cursor-re
// artifact: .vendor/cursor-sdk-1.3.1/dist/esm/index.js sha256:30d4aa44a1383cfb282f8f4747e2d54601c0a4a1250b9fb6606c799d1aff9fb6
// module: ../utils/dist/fresh-uuid.js range:2480622..2481226
// basis: webpack-key
// confidence: B
// method: vendored
// run: w1-sdk-core 2026-11-05T10:09:22.103Z
// @ts-nocheck -- body copied verbatim from the published artifact; typed public surface lives in src/api-types/**
// note: vendored sibling-package module; @anysphere workspace package is owned by sdk-runtime
import * as n from "node:crypto";
import * as s from "node:fs";

let i,o=!1;function a(){const t=function(){if(!o)try{void 0===i&&(i=(0,s.openSync)("/dev/urandom","r"));const t=Buffer.alloc(16);let r=0;for(;r<16;){const e=(0,s.readSync)(i,t,r,16-r,null);if(e<=0)return;r+=e}return t}catch{if(o=!0,void 0!==i){try{(0,s.closeSync)(i)}catch{}i=void 0}return}}();return void 0===t?(0,n.randomUUID)({disableEntropyCache:!0}):function(t){const r=t[6]??0,e=t[8]??0;t[6]=15&r|64,t[8]=63&e|128;const n=t.toString("hex");return`${n.slice(0,8)}-${n.slice(8,12)}-${n.slice(12,16)}-${n.slice(16,20)}-${n.slice(20)}`}(t)}
export { a as C };

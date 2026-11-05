// @recovered-by cursor-re
// artifact: .vendor/cursor-sdk-1.3.1/dist/esm/index.js sha256:30d4aa44a1383cfb282f8f4747e2d54601c0a4a1250b9fb6606c799d1aff9fb6
// module: ../cursor-sdk-shared/dist/message-schemas.js range:409426..409946
// basis: webpack-key
// confidence: B
// method: vendored
// run: w1-sdk-core 2026-11-05T10:09:21.825Z
// @ts-nocheck -- body copied verbatim from the published artifact; typed public surface lives in src/api-types/**
// note: vendored sibling-package module; @anysphere workspace package is owned by sdk-runtime
import * as n from "zod/v3";

const s=n.strictObject({type:n.literal("base64"),data:n.string()}),i=n.strictObject({type:n.literal("user_message"),session_id:n.string(),text:n.string(),images:n.array(s).optional()}),o=n.strictObject({type:n.literal("assistant_message"),session_id:n.string(),text:n.string()}),a=n.union([i,o]);function u(t){return i.safeParse(t).success}function c(t){return o.safeParse(t).success}function l(t){return a.safeParse(t).success}
export { s as JY, s as ImageSchema, l as K8, l as isMessage, i as Kx, a as RB, a as MessageSchema, u as d0, u as isUserMessage, o as lK, c as mj, c as isAssistantMessage };

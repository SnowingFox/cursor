// @recovered-by cursor-re
// artifact: .vendor/cursor-sdk-1.3.1/dist/esm/index.js sha256:86cacbdcba6cefe8315ceac7b60f0915500dbe94175aebe3d62f2abf4f716a87
// module: "../cursor-sdk-shared/dist/message-schemas.js" range:409426..409946
// basis: webpack-key
// confidence: B
// method: split+rewire
// run: w1-sdk-runtime 2026-11-05T10:06:18.348Z
// status: extracted from minified webpack module; identifiers mangled in artifact
import * as __dep0 from "zod/v3";
var n = __dep0;
const s = n.strictObject({
    type: n.literal("base64"),
    data: n.string()
  }),
  i = n.strictObject({
    type: n.literal("user_message"),
    session_id: n.string(),
    text: n.string(),
    images: n.array(s).optional()
  }),
  o = n.strictObject({
    type: n.literal("assistant_message"),
    session_id: n.string(),
    text: n.string()
  }),
  a = n.union([i, o]);
function u(t) {
  return i.safeParse(t).success;
}
function c(t) {
  return o.safeParse(t).success;
}
function l(t) {
  return a.safeParse(t).success;
}
export { s as JY, l as K8, i as Kx, a as RB, u as d0, o as lK, c as mj };

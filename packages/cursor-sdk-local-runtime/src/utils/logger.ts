// @ts-nocheck - TODO(recovered): recovered minified artifact; type-level signatures unavailable offline (documented exception, see REPORT.md)
// @recovered-by cursor-re
// artifact: .vendor/cursor-sdk-1.3.1/dist/esm/18.js sha256:86cee3320431e02f4c1bc3d7e72db7daffcef204b79bf1b91e78216d8f2f654e
// module: "../cursor-sdk-local-runtime/dist/utils/logger.js" range:7933..8231
// basis: webpack-key
// confidence: B
// method: split+rewire
// run: w1-sdk-runtime 2026-11-05T10:06:18.348Z
// status: extracted from minified webpack module; identifiers mangled in artifact
import * as __dep0 from "node:async_hooks";
var i = __dep0;
let r = {
  warn: console.warn.bind(console),
  error: console.error.bind(console)
};
const n = new i.AsyncLocalStorage();
function o(e, t) {
  return n.run(e, t);
}
function a() {
  return n.getStore() ?? r;
}
const d = {
  warn(...e) {
    a().warn(...e);
  },
  error(...e) {
    a().error(...e);
  }
};
export { d as Jz, o as ni };

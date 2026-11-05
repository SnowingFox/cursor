// @recovered-by cursor-re
// artifact: .vendor/cursor-sdk-1.3.1/dist/esm/305.js sha256:54d5fa4cf215825eafb00493b51c809c66436b8598c487bd6b63e2be18968ff2
// module: "../utils/dist/test-resets.js" range:1323214..1323369
// basis: webpack-key
// confidence: B
// method: split+rewire
// run: w1-sdk-runtime 2026-11-05T10:06:18.348Z
// status: extracted from minified webpack module; identifiers mangled in artifact
const n = "undefined" == typeof process || void 0 === process.env.VITEST ? void 0 : globalThis.__cursorTestResets ??= new Set();
function o(e) {
  n?.add(e);
}
export { o as J };

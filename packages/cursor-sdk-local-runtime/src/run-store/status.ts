// @recovered-by cursor-re
// artifact: .vendor/cursor-sdk-1.3.1/dist/esm/856.js sha256:4a6c73b759eb6a699b18b7e494fa9c2e6190ad828d01e708a56886d2a67055c2
// module: "../cursor-sdk-local-runtime/dist/run-store/status.js" range:16278..16388
// basis: webpack-key
// confidence: B
// method: split+rewire
// run: w1-sdk-runtime 2026-11-05T10:06:18.348Z
// status: extracted from minified webpack module; identifiers mangled in artifact
const r = new Set(["FINISHED", "ERROR", "CANCELLED", "EXPIRED"]);
function s(t) {
  return r.has(t);
}
export { s as Qb };

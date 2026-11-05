// @recovered-by cursor-re
// artifact: app/out/vs/workbench/workbench.glass.main.js sha256:6eb88cb60fce5bf5df2ee401f797d5e160b0bcb5d85c25e57d2576b467edce81
// module: UUID.js range:641603..642462
// basis: inferred
// confidence: C
// method: split
// run: main 2026-11-05T10:03:46.140Z
var lEo = L({ "UUID.js"() {
  "use strict";
  E();
} });
function uJu(t) {
  return `statsig.stable_id.${ogr(t)}`;
}
function cEo(t, e) {
  const n = uJu(e);
  try {
    pgr(n, t);
  } catch {
    QR.warn("Failed to save StableID to storage");
  }
}
function wyy(t) {
  const e = uJu(t);
  return RZn(e);
}
function Cyy(t) {
  if (!wgr[t] || cgr() == null) return null;
  const e = document.cookie.split(";");
  for (const n of e) {
    const [i, r] = n.trim().split("=");
    if (i === hJu(t)) return decodeURIComponent(r);
  }
  return null;
}
function dJu(t, e) {
  if (!wgr[e] || !document) return;
  const n = /* @__PURE__ */ new Date();
  n.setFullYear(n.getFullYear() + 1), document.cookie = `${hJu(e)}=${encodeURIComponent(t)}; expires=${n.toUTCString()}; path=/`;
}
function hJu(t) {
  return `statsig.stable_id.${ogr(t)}`;
}
var Jdn, wgr, uEo, h$e, 
// @recovered-by cursor-re
// artifact: app/out/vs/workbench/workbench.glass.main.js sha256:6eb88cb60fce5bf5df2ee401f797d5e160b0bcb5d85c25e57d2576b467edce81
// module: TrayHeaderTrailing.js range:16291193..16291979
// basis: inferred
// confidence: C
// method: split
// run: main 2026-11-05T10:03:46.113Z
var VWS = L({ "TrayHeaderTrailing.js"() {
  "use strict";
  E(), Art(), m2();
} });
function $rp() {
  return { "data-component": Bwa };
}
function Hrp() {
  return { "data-component": Uwa };
}
function NBr(t) {
  if (!t) return null;
  const e = t.querySelector(Wrp);
  return e instanceof HTMLElement ? e : null;
}
function KWS(t) {
  return t ? Array.from(t.querySelectorAll(jwa)) : [];
}
function Nwa(t) {
  return t ? Array.from(t.querySelectorAll($wa)) : [];
}
function Lwa(t) {
  const e = NBr(t);
  return e ? Nwa(e)[0] ?? null : null;
}
function Owa(t) {
  if (!(t instanceof Element)) return null;
  const e = t.closest($wa);
  return e instanceof HTMLElement ? e : null;
}
function Fwa(t) {
  return t.getAttribute("data-selected") === "true";
}
var Bwa, Uwa, jwa, $wa, Wrp, 
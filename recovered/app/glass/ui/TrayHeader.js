// @recovered-by cursor-re
// artifact: app/out/vs/workbench/workbench.glass.main.js sha256:6eb88cb60fce5bf5df2ee401f797d5e160b0bcb5d85c25e57d2576b467edce81
// module: TrayHeader.js range:16282187..16283042
// basis: inferred
// confidence: C
// method: split
// run: main 2026-11-05T10:03:46.097Z
var uWS = L({ "TrayHeader.js"() {
  "use strict";
  E(), Art(), ABr(), m2();
} });
import { jsx as Nrp } from "./react-runtime/react/esm-jsx-runtime-production.js";
import { c as Lrp } from "./react-runtime/react/esm-compiler-runtime-production.js";
function PBr(t) {
  const e = Lrp(8);
  let n, i, r;
  e[0] !== t ? ({ component: i, leading: r, ...n } = t, e[0] = t, e[1] = n, e[2] = i, e[3] = r) : (n = e[1], i = e[2], r = e[3]);
  const s = i === void 0 ? "tray-header-action-button" : i, o = r === void 0 ? false : r;
  p$t("Tray.HeaderActionButton");
  let a;
  return e[4] !== s || e[5] !== o || e[6] !== n ? (a = Nrp(vrp, { ...n, component: s, leading: o }), e[4] = s, e[5] = o, e[6] = n, e[7] = a) : a = e[7], a;
}
function dWS(t) {
  const e = Lrp(2);
  let n;
  return e[0] !== t ? (n = Nrp(PBr, { ...t }), e[0] = t, e[1] = n) : n = e[1], n;
}

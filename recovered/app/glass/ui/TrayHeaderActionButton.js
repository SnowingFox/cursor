// @recovered-by cursor-re
// artifact: app/out/vs/workbench/workbench.glass.main.js sha256:6eb88cb60fce5bf5df2ee401f797d5e160b0bcb5d85c25e57d2576b467edce81
// module: TrayHeaderActionButton.js range:16283042..16283695
// basis: inferred
// confidence: C
// method: split
// run: main 2026-11-05T10:03:46.098Z
var MBr = L({ "TrayHeaderActionButton.js"() {
  "use strict";
  E(), Art(), brp();
} });
import { jsx as hWS } from "./react-runtime/react/esm-jsx-runtime-production.js";
import { c as pWS } from "./react-runtime/react/esm-compiler-runtime-production.js";
function mWS(t) {
  const e = pWS(6);
  let n, i;
  e[0] !== t ? ({ "aria-label": i, ...n } = t, e[0] = t, e[1] = n, e[2] = i) : (n = e[1], i = e[2]);
  const r = i === void 0 ? "Back" : i;
  let s;
  return e[3] !== r || e[4] !== n ? (s = hWS(PBr, { ...n, "aria-label": r, component: "tray-header-back-button", icon: "arrow-left", leading: true }), e[3] = r, e[4] = n, e[5] = s) : s = e[5], s;
}

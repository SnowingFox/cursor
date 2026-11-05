// @recovered-by cursor-re
// artifact: app/out/vs/workbench/workbench.glass.main.js sha256:6eb88cb60fce5bf5df2ee401f797d5e160b0bcb5d85c25e57d2576b467edce81
// module: TrayHeaderBackButton.js range:16283695..16284317
// basis: inferred
// confidence: C
// method: split
// run: main 2026-11-05T10:03:46.100Z
var gWS = L({ "TrayHeaderBackButton.js"() {
  "use strict";
  E(), MBr();
} });
import { jsx as fWS } from "./react-runtime/react/esm-jsx-runtime-production.js";
import { c as vWS } from "./react-runtime/react/esm-compiler-runtime-production.js";
function _WS(t) {
  const e = vWS(6);
  let n, i;
  e[0] !== t ? ({ "aria-label": i, ...n } = t, e[0] = t, e[1] = n, e[2] = i) : (n = e[1], i = e[2]);
  const r = i === void 0 ? "Close" : i;
  let s;
  return e[3] !== r || e[4] !== n ? (s = fWS(PBr, { ...n, "aria-label": r, component: "tray-header-close-button", icon: "x" }), e[3] = r, e[4] = n, e[5] = s) : s = e[5], s;
}

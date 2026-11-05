// @recovered-by cursor-re
// artifact: app/out/vs/workbench/workbench.glass.main.js sha256:6eb88cb60fce5bf5df2ee401f797d5e160b0bcb5d85c25e57d2576b467edce81
// module: TrayHeaderDescription.js range:16285605..16286256
// basis: inferred
// confidence: C
// method: split
// run: main 2026-11-05T10:03:46.106Z
var IWS = L({ "TrayHeaderDescription.js"() {
  "use strict";
  E(), frp(), Art();
} });
import { jsx as xWS } from "./react-runtime/react/esm-jsx-runtime-production.js";
import { c as AWS } from "./react-runtime/react/esm-compiler-runtime-production.js";
function RWS(t) {
  const e = AWS(6);
  let n, i;
  e[0] !== t ? ({ "aria-label": i, ...n } = t, e[0] = t, e[1] = n, e[2] = i) : (n = e[1], i = e[2]);
  const r = i === void 0 ? "Expand" : i;
  let s;
  return e[3] !== r || e[4] !== n ? (s = xWS(PBr, { ...n, "aria-label": r, component: "tray-header-expand-button", icon: "arrows-expand-simple" }), e[3] = r, e[4] = n, e[5] = s) : s = e[5], s;
}

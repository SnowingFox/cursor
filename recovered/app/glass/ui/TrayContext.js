// @recovered-by cursor-re
// artifact: app/out/vs/workbench/workbench.glass.main.js sha256:6eb88cb60fce5bf5df2ee401f797d5e160b0bcb5d85c25e57d2576b467edce81
// module: TrayContext.js range:16266873..16267588
// basis: inferred
// confidence: C
// method: split
// run: main 2026-11-05T10:03:46.090Z
h$t = L({ "TrayContext.js"() {
  "use strict";
  E(), RBr = PHS(null);
} });
import { jsx as Crp } from "./react-runtime/react/esm-jsx-runtime-production.js";
import { c as DHS } from "./react-runtime/react/esm-compiler-runtime-production.js";
function NHS(t) {
  const e = DHS(8);
  let n, i, r;
  e[0] !== t ? ({ children: n, ref: r, ...i } = t, e[0] = t, e[1] = n, e[2] = i, e[3] = r) : (n = e[1], i = e[2], r = e[3]), hkn("Tray.Body");
  let s;
  return e[4] !== n || e[5] !== i || e[6] !== r ? (s = Crp(Twa.Provider, { value: true, children: Crp("div", { ...i, className: "ui-78zum5 ui-dt5ytf", ref: r, "data-component": "tray-body", children: n }) }), e[4] = n, e[5] = i, e[6] = r, e[7] = s) : s = e[7], s;
}

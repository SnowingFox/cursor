// @recovered-by cursor-re
// artifact: app/out/vs/workbench/workbench.glass.main.js sha256:6eb88cb60fce5bf5df2ee401f797d5e160b0bcb5d85c25e57d2576b467edce81
// module: TrayBody.js range:16267588..16269131
// basis: inferred
// confidence: C
// method: split
// run: main 2026-11-05T10:03:46.086Z
var LHS = L({ "TrayBody.js"() {
  "use strict";
  E(), _fi(), h$t();
} });
import { jsx as Ewa } from "./react-runtime/react/esm-jsx-runtime-production.js";
import { c as Iwa } from "./react-runtime/react/esm-compiler-runtime-production.js";
function OHS(t) {
  const e = Iwa(6);
  let n, i;
  e[0] !== t ? ({ children: n, ...i } = t, e[0] = t, e[1] = n, e[2] = i) : (n = e[1], i = e[2]), dkn("Tray.Content");
  let r;
  return e[3] !== n || e[4] !== i ? (r = Ewa("div", { ...i, className: "ui-78zum5 ui-dt5ytf ui-exx8yu ui-1xpa7k ui-1xlntvz ui-1uhho1l ui-1wm8ruf ui-1evy7pa ui-19aaqeu ui-1hx0egp", "data-component": "tray-content", children: n }), e[3] = n, e[4] = i, e[5] = r) : r = e[5], r;
}
function FHS(t) {
  const e = Iwa(6);
  let n, i;
  e[0] !== t ? ({ children: n, ...i } = t, e[0] = t, e[1] = n, e[2] = i) : (n = e[1], i = e[2]), dkn("Tray.ContentList");
  let r;
  return e[3] !== n || e[4] !== i ? (r = Ewa("ol", { ...i, className: "ui-dj266r ui-1yf7rl7 ui-at24cr ui-j3b58b ui-193t4r6 ui-78zum5 ui-dt5ytf ui-ehausa ui-11wthnw ui-19aaqeu ui-1evy7pa", "data-component": "tray-content-list", children: n }), e[3] = n, e[4] = i, e[5] = r) : r = e[5], r;
}
function BHS(t) {
  const e = Iwa(6);
  let n, i;
  e[0] !== t ? ({ children: n, ...i } = t, e[0] = t, e[1] = n, e[2] = i) : (n = e[1], i = e[2]), dkn("Tray.ContentListItem");
  let r;
  return e[3] !== n || e[4] !== i ? (r = Ewa("li", { ...i, className: "ui-1xnkbjl", "data-component": "tray-content-list-item", children: n }), e[3] = n, e[4] = i, e[5] = r) : r = e[5], r;
}

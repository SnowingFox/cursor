// @recovered-by cursor-re
// artifact: app/out/vs/workbench/workbench.glass.main.js sha256:6eb88cb60fce5bf5df2ee401f797d5e160b0bcb5d85c25e57d2576b467edce81
// module: TrayFooterCheckbox.js range:16277155..16277996
// basis: inferred
// confidence: C
// method: split
// run: main 2026-11-05T10:03:46.096Z
var nWS = L({ "TrayFooterCheckbox.js"() {
  "use strict";
  E(), dy(), s2e();
} });
import { jsx as iWS } from "./react-runtime/react/esm-jsx-runtime-production.js";
import { c as rWS } from "./react-runtime/react/esm-compiler-runtime-production.js";
function sWS(t) {
  const e = rWS(12);
  let n, i;
  e[0] !== t ? ({ children: n, ...i } = t, e[0] = t, e[1] = n, e[2] = i) : (n = e[1], i = e[2]);
  let r, s, o;
  e[3] !== i ? (r = { className: "ui-1ks1olk ui-vwhms9 ui-16eceif" }, s = i, o = ri("ui-tray-footer__shortcut", r.className), e[3] = i, e[4] = r, e[5] = s, e[6] = o) : (r = e[4], s = e[5], o = e[6]);
  let a;
  return e[7] !== r.style || e[8] !== n || e[9] !== s || e[10] !== o ? (a = iWS("span", { ...s, className: o, style: r.style, children: n }), e[7] = r.style, e[8] = n, e[9] = s, e[10] = o, e[11] = a) : a = e[11], a;
}

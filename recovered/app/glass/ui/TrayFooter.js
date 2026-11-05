// @recovered-by cursor-re
// artifact: app/out/vs/workbench/workbench.glass.main.js sha256:6eb88cb60fce5bf5df2ee401f797d5e160b0bcb5d85c25e57d2576b467edce81
// module: TrayFooter.js range:16276094..16277155
// basis: inferred
// confidence: C
// method: split
// run: main 2026-11-05T10:03:46.094Z
var QHS = L({ "TrayFooter.js"() {
  "use strict";
  E(), Va(), xrp(), mf(), Zkt(), qu(), m2(), BW(), Q3();
} });
import { jsx as Prp, jsxs as JHS } from "./react-runtime/react/esm-jsx-runtime-production.js";
import { c as eWS } from "./react-runtime/react/esm-compiler-runtime-production.js";
function tWS(t) {
  const e = eWS(9), { checked: n, children: i, onCheckedChange: r } = t;
  let s;
  e[0] === /* @__PURE__ */ Symbol.for("react.memo_cache_sentinel") ? (s = { className: "ui-3nfvp2 ui-6s0dn4 ui-pkkfsy ui-1ypdohk ui-87ps6o" }, e[0] = s) : s = e[0];
  const o = s;
  let a;
  e[1] !== n || e[2] !== r ? (a = Prp(G5, { checked: n, onCheckedChange: r, size: "sm" }), e[1] = n, e[2] = r, e[3] = a) : a = e[3];
  let l;
  e[4] !== i ? (l = Prp(nn, { as: "span", color: "secondary", size: "md", children: i }), e[4] = i, e[5] = l) : l = e[5];
  let c;
  return e[6] !== a || e[7] !== l ? (c = JHS("label", { className: o.className, "data-component": "tray-footer-checkbox", style: o.style, children: [a, l] }), e[6] = a, e[7] = l, e[8] = c) : c = e[8], c;
}

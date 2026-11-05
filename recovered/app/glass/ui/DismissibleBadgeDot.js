// @recovered-by cursor-re
// artifact: app/out/vs/workbench/workbench.glass.main.js sha256:6eb88cb60fce5bf5df2ee401f797d5e160b0bcb5d85c25e57d2576b467edce81
// module: DismissibleBadgeDot.js range:16633402..16634915
// basis: inferred
// confidence: C
// method: split
// run: main 2026-11-05T10:03:45.646Z
var ACa = L({ "DismissibleBadgeDot.js"() {
  "use strict";
  E();
} });
import { jsx as qfi, jsxs as Llp } from "./react-runtime/react/esm-jsx-runtime-production.js";
import { c as Olp } from "./react-runtime/react/esm-compiler-runtime-production.js";
function rXS(t) {
  const e = Olp(5), { showDismissibleBadgeDot: n, children: i } = t;
  let r;
  e[0] !== n ? (r = n ? qfi(xCa, { testId: "parameter-value-dismissible-dot" }) : null, e[0] = n, e[1] = r) : r = e[1];
  let s;
  return e[2] !== i || e[3] !== r ? (s = Llp("span", { className: "ui-78zum5 ui-6s0dn4 ui-11twubx", children: [r, i] }), e[2] = i, e[3] = r, e[4] = s) : s = e[4], s;
}
function sXS(t) {
  const e = Olp(9), { badges: n, markdown: i } = t;
  let r, s;
  if (e[0] !== n) {
    const l = Mfi(n);
    r = "ui-78zum5 ui-dt5ytf ui-1cy8zhl ui-11twubx", s = l.length > 0 ? qfi("span", { className: "ui-3nfvp2 ui-6s0dn4 ui-1ns6icm", children: l.map(oXS) }) : null, e[0] = n, e[1] = r, e[2] = s;
  } else r = e[1], s = e[2];
  let o;
  e[3] !== i ? (o = i !== void 0 ? qfi(N4, { children: i }) : null, e[3] = i, e[4] = o) : o = e[4];
  let a;
  return e[5] !== r || e[6] !== s || e[7] !== o ? (a = Llp("div", { className: r, children: [s, o] }), e[5] = r, e[6] = s, e[7] = o, e[8] = a) : a = e[8], a;
}
function oXS(t) {
  return qfi(e$, { "data-testid": iwt(t) ? "parameter-value-dismissible-badge" : "parameter-value-badge", size: "sm", variant: Pop(t.variant), children: qfi("span", { className: "ui-tvhhri", children: t.label }) }, C$t(t));
}

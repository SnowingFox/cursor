// @recovered-by cursor-re
// artifact: app/out/vs/workbench/workbench.glass.main.js sha256:6eb88cb60fce5bf5df2ee401f797d5e160b0bcb5d85c25e57d2576b467edce81
// module: DialogListHeader.js range:11525888..11528700
// basis: inferred
// confidence: C
// method: split
// run: main 2026-11-05T10:03:45.619Z
var Y3h = L({ "DialogListHeader.js"() {
  "use strict";
  E(), EFe(), qu();
} });
import { jsx as IUt, jsxs as _pS, Fragment as bpS } from "./react-runtime/react/esm-jsx-runtime-production.js";
import { c as ypS } from "./react-runtime/react/esm-compiler-runtime-production.js";
function X3h(t) {
  const e = ypS(33), { icon: n, label: i, trailing: r, selected: s, multiline: o, onClick: a, disabled: l } = t, c = s === void 0 ? false : s, u = o === void 0 ? false : o, { selectable: d } = mpS(), h = d && a !== void 0;
  let p;
  e[0] === /* @__PURE__ */ Symbol.for("react.memo_cache_sentinel") ? (p = gn(FhS()), e[0] = p) : p = e[0];
  const g = p;
  let f;
  e[1] !== l || e[2] !== u || e[3] !== a || e[4] !== c ? (f = ar({ rootClass: "ui-dialog-list-row", stylexStyles: BhS({ disabled: l === true, interactive: a !== void 0, multiline: u, selected: c }) }), e[1] = l, e[2] = u, e[3] = a, e[4] = c, e[5] = f) : f = e[5];
  const _ = f;
  let b;
  e[6] === /* @__PURE__ */ Symbol.for("react.memo_cache_sentinel") ? (b = gn(UhS()), e[6] = b) : b = e[6];
  const y = b;
  let S;
  e[7] !== u ? (S = gn(jhS({ multiline: u })), e[7] = u, e[8] = S) : S = e[8];
  const k = S;
  let C;
  e[9] === /* @__PURE__ */ Symbol.for("react.memo_cache_sentinel") ? (C = gn($hS()), e[9] = C) : C = e[9];
  const T = C;
  let I;
  e[10] !== n ? (I = n ? IUt("div", { className: y.className, style: y.style, children: n }) : null, e[10] = n, e[11] = I) : I = e[11];
  let A;
  e[12] !== i || e[13] !== k.className || e[14] !== k.style ? (A = IUt("div", { className: k.className, style: k.style, children: i }), e[12] = i, e[13] = k.className, e[14] = k.style, e[15] = A) : A = e[15];
  let P;
  e[16] !== r ? (P = r ? IUt("div", { className: T.className, style: T.style, children: r }) : null, e[16] = r, e[17] = P) : P = e[17];
  let M;
  e[18] !== P || e[19] !== I || e[20] !== A ? (M = _pS(bpS, { children: [I, A, P] }), e[18] = P, e[19] = I, e[20] = A, e[21] = M) : M = e[21];
  const O = M;
  let N;
  e[22] !== l || e[23] !== h || e[24] !== a || e[25] !== _.className || e[26] !== _.style || e[27] !== O || e[28] !== c ? (N = a !== void 0 ? h ? IUt("button", { "aria-selected": c, className: _.className, disabled: l, onClick: a, role: "option", style: _.style, type: "button", children: O }) : IUt("button", { className: _.className, disabled: l, onClick: a, style: _.style, type: "button", children: O }) : IUt("div", { className: _.className, style: _.style, children: O }), e[22] = l, e[23] = h, e[24] = a, e[25] = _.className, e[26] = _.style, e[27] = O, e[28] = c, e[29] = N) : N = e[29];
  const U = N, j = h ? "presentation" : void 0;
  let $;
  return e[30] !== U || e[31] !== j ? ($ = IUt("li", { className: g.className, role: j, style: g.style, children: U }), e[30] = U, e[31] = j, e[32] = $) : $ = e[32], $;
}

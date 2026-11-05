// @recovered-by cursor-re
// artifact: app/out/vs/workbench/workbench.glass.main.js sha256:6eb88cb60fce5bf5df2ee401f797d5e160b0bcb5d85c25e57d2576b467edce81
// module: CustomizeManageEmptyState.js range:22737225..22739937
// basis: inferred
// confidence: C
// method: split
// run: main 2026-11-05T10:03:45.591Z
var iCi = L({ "CustomizeManageEmptyState.js"() {
  "use strict";
  E(), Mt(), J7(), $ot();
} });
import { jsx as Hes, jsxs as rCi } from "./react-runtime/react/esm-jsx-runtime-production.js";
import { c as zX1 } from "./react-runtime/react/esm-compiler-runtime-production.js";
import { useState as VX1 } from "./react-runtime/react/esm-index-production.js";
function sCi(t) {
  const e = zX1(36), { title: n, items: i, renderRow: r, headerActions: s, visibleLimit: o } = t, a = o === void 0 ? jes : o, [l, c] = VX1(false), u = i.length, d = u > a;
  let h;
  e[0] !== d || e[1] !== l || e[2] !== i || e[3] !== a ? (h = l || !d ? i : i.slice(0, a), e[0] = d, e[1] = l, e[2] = i, e[3] = a, e[4] = h) : h = e[4];
  const p = h, g = u - a;
  let f, _, b;
  e[5] === /* @__PURE__ */ Symbol.for("react.memo_cache_sentinel") ? (f = Sc(Zh.group), _ = Sc(Zh.groupHeader), b = Sc(Zh.groupTitle), e[5] = f, e[6] = _, e[7] = b) : (f = e[5], _ = e[6], b = e[7]);
  let y;
  e[8] === /* @__PURE__ */ Symbol.for("react.memo_cache_sentinel") ? (y = Sc(Zh.groupTitleText), e[8] = y) : y = e[8];
  let S;
  e[9] !== n ? (S = Hes(nn, { size: "md", weight: "medium", color: "primary", className: y.className, children: n }), e[9] = n, e[10] = S) : S = e[10];
  let k;
  e[11] === /* @__PURE__ */ Symbol.for("react.memo_cache_sentinel") ? (k = Sc(Zh.groupTitleCount), e[11] = k) : k = e[11];
  let C;
  e[12] !== u ? (C = Hes(nn, { size: "md", color: "tertiary", className: k.className, children: u }), e[12] = u, e[13] = C) : C = e[13];
  let T;
  e[14] !== S || e[15] !== C ? (T = rCi("div", { ...b, children: [S, C] }), e[14] = S, e[15] = C, e[16] = T) : T = e[16];
  let I;
  e[17] !== s || e[18] !== T ? (I = rCi("div", { ..._, children: [T, s] }), e[17] = s, e[18] = T, e[19] = I) : I = e[19];
  let A;
  e[20] === /* @__PURE__ */ Symbol.for("react.memo_cache_sentinel") ? (A = Sc(Zh.card), e[20] = A) : A = e[20];
  let P;
  if (e[21] !== r || e[22] !== p) {
    let U;
    e[24] !== r ? (U = (j, $) => r(j, $), e[24] = r, e[25] = U) : U = e[25], P = p.map(U), e[21] = r, e[22] = p, e[23] = P;
  } else P = e[23];
  let M;
  e[26] !== P ? (M = Hes("div", { ...A, children: P }), e[26] = P, e[27] = M) : M = e[27];
  let O;
  e[28] !== d || e[29] !== l || e[30] !== g ? (O = d && !l && rCi("button", { type: "button", ...Sc(Zh.seeMore), onClick: () => c(true), children: [rCi("span", { children: ["Show ", g, " more"] }), Hes(zt, { name: "chevron-down", size: "xs", "aria-hidden": true })] }), e[28] = d, e[29] = l, e[30] = g, e[31] = O) : O = e[31];
  let N;
  return e[32] !== I || e[33] !== M || e[34] !== O ? (N = rCi("section", { ...f, children: [I, M, O] }), e[32] = I, e[33] = M, e[34] = O, e[35] = N) : N = e[35], N;
}

// @recovered-by cursor-re
// artifact: app/out/vs/workbench/workbench.glass.main.js sha256:6eb88cb60fce5bf5df2ee401f797d5e160b0bcb5d85c25e57d2576b467edce81
// module: DialogFooter.js range:11519170..11522566
// basis: inferred
// confidence: C
// method: split
// run: main 2026-11-05T10:03:45.606Z
var $3h = L({ "DialogFooter.js"() {
  "use strict";
  E(), EFe(), qu();
} });
import { jsx as _Lr, jsxs as Fda } from "./react-runtime/react/esm-jsx-runtime-production.js";
import { c as rpS } from "./react-runtime/react/esm-compiler-runtime-production.js";
import { useContext as spS, useId as opS } from "./react-runtime/react/esm-index-production.js";
function phi(t) {
  const e = rpS(36), { children: n, title: i, stepLabel: r, description: s, alignment: o, titleSize: a, titleWeight: l, descriptionColor: c, descriptionFontSize: u, rootStyle: d } = t, h = o === void 0 ? "start" : o, p = a === void 0 ? "lg" : a, g = l === void 0 ? "regular" : l, f = c === void 0 ? "tertiary" : c, _ = u === void 0 ? "lg" : u, b = spS(hhi), y = opS(), S = b?.titleId ?? `${y}-title`, k = b?.descriptionId ?? `${y}-description`, C = !!i, T = !!r, I = !!s, A = C || T || I;
  let P;
  e[0] !== h || e[1] !== b?.headerBeforeContent || e[2] !== d ? (P = ar({ rootClass: "ui-dialog-header", stylexStyles: [PhS({ alignment: h, beforeContent: b?.headerBeforeContent ?? false }), d] }), e[0] = h, e[1] = b?.headerBeforeContent, e[2] = d, e[3] = P) : P = e[3];
  const M = P;
  let O;
  e[4] !== h ? (O = ar({ rootClass: "ui-dialog-header-lead", stylexStyles: I3h({ alignment: h }) }), e[4] = h, e[5] = O) : O = e[5];
  const N = O;
  let U;
  e[6] !== h ? (U = ar({ rootClass: "ui-dialog-header-stepper-head", stylexStyles: MhS({ alignment: h }) }), e[6] = h, e[7] = U) : U = e[7];
  const j = U;
  let $;
  e[8] !== h ? ($ = ar({ rootClass: "ui-dialog-header-stepper", stylexStyles: DhS({ alignment: h }) }), e[8] = h, e[9] = $) : $ = e[9];
  const H = $;
  let G;
  e[10] === /* @__PURE__ */ Symbol.for("react.memo_cache_sentinel") ? (G = ar({ rootClass: "ui-dialog-title", stylexStyles: x3h() }), e[10] = G) : G = e[10];
  const q = G;
  let K;
  e[11] !== f || e[12] !== _ ? (K = ar({ rootClass: "ui-dialog-description", stylexStyles: A3h({ stepper: true, color: f, fontSize: _ }), className: "ui-dialog-header-stepper-description" }), e[11] = f, e[12] = _, e[13] = K) : K = e[13];
  const V = K;
  let Y;
  e[14] !== s || e[15] !== V || e[16] !== k || e[17] !== I || e[18] !== T || e[19] !== A || e[20] !== C || e[21] !== N || e[22] !== r || e[23] !== H || e[24] !== j || e[25] !== i || e[26] !== S || e[27] !== p || e[28] !== g ? (Y = A ? _Lr("div", { className: N.className, style: N.style, children: Fda("div", { className: j.className, style: j.style, children: [C || T ? Fda("div", { className: H.className, style: H.style, role: T ? "status" : void 0, children: [C ? _Lr(nn, { as: "h2", className: q.className, color: "primary", id: S, size: p, style: q.style, weight: g, children: i }) : null, T ? _Lr(nn, { as: "span", color: "quaternary", size: "lg", weight: "regular", children: r }) : null] }) : null, I ? _Lr("p", { className: V.className, id: k, style: V.style, children: s }) : null] }) }) : null, e[14] = s, e[15] = V, e[16] = k, e[17] = I, e[18] = T, e[19] = A, e[20] = C, e[21] = N, e[22] = r, e[23] = H, e[24] = j, e[25] = i, e[26] = S, e[27] = p, e[28] = g, e[29] = Y) : Y = e[29];
  let J;
  return e[30] !== h || e[31] !== n || e[32] !== M.className || e[33] !== M.style || e[34] !== Y ? (J = Fda("div", { className: M.className, "data-alignment": h, style: M.style, children: [Y, n] }), e[30] = h, e[31] = n, e[32] = M.className, e[33] = M.style, e[34] = Y, e[35] = J) : J = e[35], J;
}

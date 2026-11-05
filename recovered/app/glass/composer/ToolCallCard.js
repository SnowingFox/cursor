// @recovered-by cursor-re
// artifact: app/out/vs/workbench/workbench.glass.main.js sha256:6eb88cb60fce5bf5df2ee401f797d5e160b0bcb5d85c25e57d2576b467edce81
// module: ToolCallCard.js range:15099940..15104235
// basis: esbuild-wrapper + inferred
// confidence: C
// method: split
// run: glass-composer 2026-11-05T10:19:48.876Z
// deps: E, Va, HFe, qu, u0e, fd
// wrapper-init: nmi
// hoisted-owner: ToolCallLine.js (app-out-vs-workbench-workbench-glass-main-js:2326); trailing declarations ownership inferred from segment adjacency
// path: null (no unique nls candidate; inferred only)
// renamed: none

nmi = L({ "ToolCallCard.js"() {
  "use strict";
  E(), Va(), HFe(), qu(), u0e(), fd(), AHh = 80, Ova = 2, Fva = { "ui--default-marker": "ui--default-marker", $$css: true }, qSn = { body: { kWkggS: "ui-jbqb8w", $$css: true }, streamingFade: { kVAEAm: "ui-10l6tqk", krVfgx: "ui-1ey2m1c", kbCHJM: "ui-u96u03", kCIrl2: "ui-3m8u43", kZKoxP: "ui-1vatr1o", kKwaWg: "ui-u5sbjj", kfzvcC: "ui-47corl", $$css: true }, expandButton: { kVAEAm: "ui-10l6tqk", kbCHJM: "ui-u96u03", kCIrl2: "ui-3m8u43", krVfgx: "ui-1ey2m1c", kZKoxP: "ui-1a6rlst", kLKAdn: "ui-exx8yu", kpe85a: "ui-1xpa7k", kGO01o: "ui-1mmyrcj", kE3dHu: "ui-1uhho1l", kGNEyG: "ui-uk3077", kWkggS: "ui-jbqb8w", kKwaWg: "ui-u5sbjj", kEafiO: "ui-972fbf", kPef9Z: "ui-1ejq31n", kWqL5O: "ui-gfja2r", kSWEuD: "ui-11pwa6s", kt9PQ7: "ui-1qhh985", kfdmCh: "ui-1sy0etr", kZ1KPB: "ui-yj58a3", k4WBpm: "ui-1b16gh4", kkrTdU: "ui-1ypdohk", k1xSpc: "ui-78zum5", kjj79g: "ui-l56j7k", kMeerF: "ui-1k57tk5", k3XXqK: "ui-1t137rt", $$css: true }, expandIcon: { k1xSpc: "ui-78zum5", kGNEyG: "ui-6s0dn4", kjj79g: "ui-l56j7k", kzqmXN: "ui-16bvwqk", kZKoxP: "ui-1a6rlst", kMwMTN: "ui-19aaqeu ui-1xd8g3f", kSiTet: "ui-g01cxk ui-15aqy90", k1ekBW: "ui-1mz1wvm", kIyJzY: "ui-g3p6pi", kAMwcw: "ui-6ekqhr", $$css: true }, expandIconVisible: { kSiTet: "ui-1hc1fzr", $$css: true } };
} });
import { jsx as yFr, jsxs as VAS } from "./react-runtime/react/esm-jsx-runtime-production.js";
import { c as KAS } from "./react-runtime/react/esm-compiler-runtime-production.js";
function RHh(t) {
  return [_kt.root, t ? _kt.clickable : null, t ? MHh : null];
}
function Bva(t = "default") {
  return [_kt.action, t === "dimmed" ? _kt.actionDimmed : null];
}
function PHh(t = "default") {
  return [_kt.details, t === "dimmed" ? _kt.detailsDimmed : null];
}
function LC(t) {
  const e = KAS(35), { action: n, details: i, icon: r, tone: s, onClick: o, onContextMenu: a, rootStyle: l, detailsStyle: c } = t, u = s === void 0 ? "default" : s, d = t.loading === true;
  let h;
  e[0] !== o || e[1] !== l ? (h = ar({ rootClass: "ui-tool-call-line", stylexStyles: [RHh(o != null), l], className: ri(o && "ui-tool-call-line--clickable") }), e[0] = o, e[1] = l, e[2] = h) : h = e[2];
  const p = h;
  let g;
  e[3] === /* @__PURE__ */ Symbol.for("react.memo_cache_sentinel") ? (g = ar({ rootClass: "ui-tool-call-line-icon", stylexStyles: _kt.icon }), e[3] = g) : g = e[3];
  const f = g;
  let _;
  e[4] !== d || e[5] !== u ? (_ = ar({ rootClass: "ui-tool-call-line-action", stylexStyles: Bva(u), className: d ? "ui-tool-call-line-shimmer" : void 0 }), e[4] = d, e[5] = u, e[6] = _) : _ = e[6];
  const b = _;
  let y;
  e[7] !== c || e[8] !== u ? (y = ar({ rootClass: "ui-tool-call-line-details", stylexStyles: [PHh(u), c] }), e[7] = c, e[8] = u, e[9] = y) : y = e[9];
  const S = y, k = o ? "button" : void 0, C = o ? 0 : void 0, T = o ? "" : void 0;
  let I;
  e[10] !== o ? (I = o ? (N) => {
    (N.key === "Enter" || N.key === " ") && (N.preventDefault(), o());
  } : void 0, e[10] = o, e[11] = I) : I = e[11];
  let A;
  e[12] !== r ? (A = r && yFr("span", { className: f.className, style: f.style, children: r }), e[12] = r, e[13] = A) : A = e[13];
  let P;
  e[14] !== n || e[15] !== b || e[16] !== t.action || e[17] !== t.loading || e[18] !== u ? (P = n != null && yFr("span", { className: b.className, style: b.style, children: t.loading === true && t.action !== void 0 ? yFr(VWe, { color: u === "dimmed" ? "tertiary" : "secondary", children: t.action }) : n }), e[14] = n, e[15] = b, e[16] = t.action, e[17] = t.loading, e[18] = u, e[19] = P) : P = e[19];
  let M;
  e[20] !== i || e[21] !== S ? (M = i && yFr("span", { className: S.className, style: S.style, children: i }), e[20] = i, e[21] = S, e[22] = M) : M = e[22];
  let O;
  return e[23] !== o || e[24] !== a || e[25] !== p.className || e[26] !== p.style || e[27] !== P || e[28] !== M || e[29] !== k || e[30] !== C || e[31] !== T || e[32] !== I || e[33] !== A ? (O = VAS("div", { role: k, tabIndex: C, className: p.className, style: p.style, "data-tool-call-line-clickable": T, onClick: o, onContextMenu: a, onKeyDown: I, children: [A, P, M] }), e[23] = o, e[24] = a, e[25] = p.className, e[26] = p.style, e[27] = P, e[28] = M, e[29] = k, e[30] = C, e[31] = T, e[32] = I, e[33] = A, e[34] = O) : O = e[34], O;
}
var MHh, _kt, 
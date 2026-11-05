// @recovered-by cursor-re
// artifact: app/out/vs/workbench/workbench.glass.main.js sha256:6eb88cb60fce5bf5df2ee401f797d5e160b0bcb5d85c25e57d2576b467edce81
// module: ModelToggles.js range:16702351..16710412
// basis: esbuild-wrapper + inferred
// confidence: C
// method: split
// run: glass-platform 2026-11-05T10:20:42.140Z
// wrapper: ocp deps:7 [E, JY, Drt, Tkn, $he, fd, aJ]
// declarations: zCa, VCa, acp, ZXS, QXS, JXS, eZS, B8r (segment truncated)
// anchors: (none)
// group: model
// notes: path inferred (no nls/webpack-key evidence); wrapper boundary is esbuild-exact; confidence reflects the inferred path only
ocp = L({ "ModelToggles.js"() {
  "use strict";
  E(), JY(), Drt(), Tkn(), $he(), fd(), aJ(), scp = 150;
} });
import { jsx as z5, jsxs as GCa, Fragment as qCa } from "./react-runtime/react/esm-jsx-runtime-production.js";
import { c as F8r } from "./react-runtime/react/esm-compiler-runtime-production.js";
import { Fragment as XXS } from "./react-runtime/react/esm-index-production.js";
function zCa({ controls: t }) {
  return t.map((e) => z5(XXS, { children: e.element }, e.id));
}
function VCa({ displayConfiguration: t, searching: e, effortFirstSubmenu: n, hideAutoToggle: i, hideMaxToggle: r, hideMultiModelToggle: s }) {
  return { showAutoToggle: !i && vVS(t) && (!e || !Yop(t) && u8r(t)), showMaxToggle: !r, showMultiModelToggle: !s, useLegacyAutoRow: n && L0a(t) === true };
}
function acp(t) {
  const e = F8r(2), { useLegacyAutoRow: n } = t;
  if (!n) {
    let r;
    return e[0] === /* @__PURE__ */ Symbol.for("react.memo_cache_sentinel") ? (r = z5(WCa, {}), e[0] = r) : r = e[0], r;
  }
  let i;
  return e[1] === /* @__PURE__ */ Symbol.for("react.memo_cache_sentinel") ? (i = z5(cl.Section, { children: z5(WCa, { selectLikeNamedModel: true }) }), e[1] = i) : i = e[1], i;
}
function ZXS(t) {
  const e = F8r(53), { composedControls: n, hideAutoToggle: i, effortFirstSubmenu: r, hideMaxToggle: s, hideSearchBar: o, hideMultiModelToggle: a, onAddModels: l, rowMode: c } = t, u = n === void 0 ? B8r : n, d = r === void 0 ? false : r, { models: h, displayConfiguration: p, labels: g } = nw(), { searchValue: f } = r6e();
  let _;
  e[0] !== f ? (_ = fae(f), e[0] = f, e[1] = _) : _ = e[1];
  const b = _;
  let y;
  e[2] !== p || e[3] !== d || e[4] !== i || e[5] !== s || e[6] !== a ? (y = VCa({ displayConfiguration: p, searching: true, effortFirstSubmenu: d, hideAutoToggle: i, hideMaxToggle: s, hideMultiModelToggle: a }), e[2] = p, e[3] = d, e[4] = i, e[5] = s, e[6] = a, e[7] = y) : y = e[7];
  const { showAutoToggle: S, showMaxToggle: k, showMultiModelToggle: C, useLegacyAutoRow: T } = y;
  let I = 0;
  S && "auto".includes(b) && I++, k && "max mode".includes(b) && I++, C && "use multiple models".includes(b) && I++;
  const A = I;
  let P;
  if (e[8] !== u || e[9] !== b) {
    let te;
    e[11] !== b ? (te = (ee) => fae(ee.searchText).includes(b), e[11] = b, e[12] = te) : te = e[12], P = u.filter(te), e[8] = u, e[9] = b, e[10] = P;
  } else P = e[10];
  I = A + P.length;
  const M = I;
  let O;
  if (e[13] !== h || e[14] !== b) {
    let te;
    e[16] !== b ? (te = (ee) => sap(ee, b), e[16] = b, e[17] = te) : te = e[17], O = h.filter(te), e[13] = h, e[14] = b, e[15] = O;
  } else O = e[15];
  I = M + O.length;
  const N = I;
  let U;
  e[18] !== o || e[19] !== g ? (U = !o && z5(cl.SearchInput, { placeholder: g.searchPlaceholder }), e[18] = o, e[19] = g, e[20] = U) : U = e[20];
  let j;
  if (e[21] !== u || e[22] !== b) {
    let te;
    e[24] !== b ? (te = (ee) => fae(ee.searchText).includes(b), e[24] = b, e[25] = te) : te = e[25], j = u.filter(te), e[21] = u, e[22] = b, e[23] = j;
  } else j = e[23];
  let $;
  e[26] !== j ? ($ = z5(zCa, { controls: j }), e[26] = j, e[27] = $) : $ = e[27];
  let H;
  e[28] !== S || e[29] !== T ? (H = S && z5(acp, { useLegacyAutoRow: T }), e[28] = S, e[29] = T, e[30] = H) : H = e[30];
  let G;
  e[31] !== k ? (G = k && z5(ncp, {}), e[31] = k, e[32] = G) : G = e[32];
  let q;
  e[33] !== C ? (q = C && z5(rcp, {}), e[33] = C, e[34] = q) : q = e[34];
  let K;
  e[35] !== c || e[36] !== T ? (K = z5(Qlp, { rowMode: c, hideSyntheticAutoRow: T }), e[35] = c, e[36] = T, e[37] = K) : K = e[37];
  let V;
  e[38] === /* @__PURE__ */ Symbol.for("react.memo_cache_sentinel") ? (V = z5(OCa, {}), e[38] = V) : V = e[38];
  let Y;
  e[39] !== g || e[40] !== N ? (Y = N === 0 && z5(cl.EmptyState, { children: g.noModelsFound }), e[39] = g, e[40] = N, e[41] = Y) : Y = e[41];
  let J;
  e[42] !== l ? (J = z5(L8r, { onAddModels: l }), e[42] = l, e[43] = J) : J = e[43];
  let Q;
  return e[44] !== $ || e[45] !== H || e[46] !== G || e[47] !== q || e[48] !== K || e[49] !== Y || e[50] !== J || e[51] !== U ? (Q = GCa(qCa, { children: [U, $, H, G, q, K, V, Y, J] }), e[44] = $, e[45] = H, e[46] = G, e[47] = q, e[48] = K, e[49] = Y, e[50] = J, e[51] = U, e[52] = Q) : Q = e[52], Q;
}
function QXS(t) {
  const e = F8r(37), { composedControls: n, hideAutoToggle: i, effortFirstSubmenu: r, footer: s, hideMaxToggle: o, hideSearchBar: a, hideMultiModelToggle: l, onAddModels: c, rowMode: u } = t, d = n === void 0 ? B8r : n, h = r === void 0 ? false : r, { displayConfiguration: p, labels: g } = nw();
  let f;
  e[0] !== p || e[1] !== h || e[2] !== i || e[3] !== o || e[4] !== l ? (f = VCa({ displayConfiguration: p, searching: false, effortFirstSubmenu: h, hideAutoToggle: i, hideMaxToggle: o, hideMultiModelToggle: l }), e[0] = p, e[1] = h, e[2] = i, e[3] = o, e[4] = l, e[5] = f) : f = e[5];
  const { showAutoToggle: _, showMaxToggle: b, showMultiModelToggle: y, useLegacyAutoRow: S } = f;
  let k;
  e[6] !== p || e[7] !== i ? (k = Xop(p, i), e[6] = p, e[7] = i, e[8] = k) : k = e[8];
  const C = k;
  let T;
  e[9] !== a || e[10] !== g ? (T = !a && z5(cl.SearchInput, { placeholder: g.searchPlaceholder }), e[9] = a, e[10] = g, e[11] = T) : T = e[11];
  let I;
  e[12] !== d ? (I = z5(zCa, { controls: d }), e[12] = d, e[13] = I) : I = e[13];
  let A;
  e[14] !== _ || e[15] !== S ? (A = _ && z5(acp, { useLegacyAutoRow: S }), e[14] = _, e[15] = S, e[16] = A) : A = e[16];
  let P;
  e[17] !== b ? (P = b && z5(ncp, {}), e[17] = b, e[18] = P) : P = e[18];
  let M;
  e[19] !== y ? (M = y && z5(rcp, {}), e[19] = y, e[20] = M) : M = e[20];
  let O;
  e[21] !== C ? (O = C && z5(LXS, {}), e[21] = C, e[22] = O) : O = e[22];
  let N;
  e[23] !== c || e[24] !== u || e[25] !== S ? (N = z5(Qlp, { rowMode: u, onAddModels: c, hideSyntheticAutoRow: S }), e[23] = c, e[24] = u, e[25] = S, e[26] = N) : N = e[26];
  let U;
  e[27] === /* @__PURE__ */ Symbol.for("react.memo_cache_sentinel") ? (U = z5(OCa, {}), e[27] = U) : U = e[27];
  let j;
  return e[28] !== s || e[29] !== O || e[30] !== N || e[31] !== T || e[32] !== I || e[33] !== A || e[34] !== P || e[35] !== M ? (j = GCa(qCa, { children: [T, I, A, P, M, O, N, U, s] }), e[28] = s, e[29] = O, e[30] = N, e[31] = T, e[32] = I, e[33] = A, e[34] = P, e[35] = M, e[36] = j) : j = e[36], j;
}
function JXS(t) {
  const e = F8r(34), { composedControls: n, footer: i, hideAutoToggle: r, hideSearchBar: s, rowMode: o } = t, a = n === void 0 ? B8r : n, { models: l, displayConfiguration: c, labels: u } = nw();
  let d;
  e[0] !== c ? (d = pVS(c), e[0] = c, e[1] = d) : d = e[1];
  const h = d;
  let p;
  e[2] !== c || e[3] !== r ? (p = !r && u8r(c), e[2] = c, e[3] = r, e[4] = p) : p = e[4];
  const g = p;
  let f;
  e[5] !== l ? (f = l.some(eZS), e[5] = l, e[6] = f) : f = e[6];
  const _ = f;
  let b;
  e[7] !== c || e[8] !== r ? (b = !r && Vop(c), e[7] = c, e[8] = r, e[9] = b) : b = e[9];
  const y = b;
  let S;
  e[10] !== c ? (S = mVS(c), e[10] = c, e[11] = S) : S = e[11];
  const k = S;
  let C;
  e[12] !== s || e[13] !== k || e[14] !== u ? (C = !s && !k && z5(cl.SearchInput, { placeholder: u.searchPlaceholder }), e[12] = s, e[13] = k, e[14] = u, e[15] = C) : C = e[15];
  let T;
  e[16] !== a ? (T = z5(zCa, { controls: a }), e[16] = a, e[17] = T) : T = e[17];
  let I;
  e[18] !== g ? (I = g && z5(WCa, {}), e[18] = g, e[19] = I) : I = e[19];
  let A;
  e[20] !== h || e[21] !== o || e[22] !== _ ? (A = _ && z5(qXS, { title: h, rowMode: o }), e[20] = h, e[21] = o, e[22] = _, e[23] = A) : A = e[23];
  let P;
  e[24] === /* @__PURE__ */ Symbol.for("react.memo_cache_sentinel") ? (P = z5(OCa, {}), e[24] = P) : P = e[24];
  let M;
  e[25] !== y ? (M = y && z5(NXS, {}), e[25] = y, e[26] = M) : M = e[26];
  let O;
  return e[27] !== i || e[28] !== A || e[29] !== M || e[30] !== C || e[31] !== T || e[32] !== I ? (O = GCa(qCa, { children: [C, T, I, A, P, M, i] }), e[27] = i, e[28] = A, e[29] = M, e[30] = C, e[31] = T, e[32] = I, e[33] = O) : O = e[33], O;
}
function eZS(t) {
  return t.visibleInRoutedModelView === true;
}
var B8r,

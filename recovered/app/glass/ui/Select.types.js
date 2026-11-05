// @recovered-by cursor-re
// artifact: app/out/vs/workbench/workbench.glass.main.js sha256:6eb88cb60fce5bf5df2ee401f797d5e160b0bcb5d85c25e57d2576b467edce81
// module: Select.types.js range:6203535..6207370
// basis: inferred
// confidence: C
// method: split
// run: main 2026-11-05T10:03:45.972Z
qch = L({ "Select.types.js"() {
  "use strict";
  E(), Yea = "lg", Xea = "outline";
} });
import { jsx as ePr, jsxs as O$y } from "./react-runtime/react/esm-jsx-runtime-production.js";
import { c as F$y } from "./react-runtime/react/esm-compiler-runtime-production.js";
function Cne(t) {
  const e = F$y(55);
  let n, i, r, s, o, a, l, c, u, d, h, p, g, f, _, b, y, S, k, C;
  e[0] !== t ? ({ children: n, variant: g, frame: f, shape: _, size: b, hug: y, className: i, style: p, rootStyle: h, labelStyle: o, disabled: S, id: s, leading: a, trailing: C, open: l, placeholder: c, hideChevron: k, ref: d, "data-popup-open": r, ...u } = t, e[0] = t, e[1] = n, e[2] = i, e[3] = r, e[4] = s, e[5] = o, e[6] = a, e[7] = l, e[8] = c, e[9] = u, e[10] = d, e[11] = h, e[12] = p, e[13] = g, e[14] = f, e[15] = _, e[16] = b, e[17] = y, e[18] = S, e[19] = k, e[20] = C) : (n = e[1], i = e[2], r = e[3], s = e[4], o = e[5], a = e[6], l = e[7], c = e[8], u = e[9], d = e[10], h = e[11], p = e[12], g = e[13], f = e[14], _ = e[15], b = e[16], y = e[17], S = e[18], k = e[19], C = e[20]);
  const T = g === void 0 ? Xea : g, I = f === void 0 ? "container" : f, A = _ === void 0 ? "rounded" : _, P = b === void 0 ? Yea : b, M = y === void 0 ? true : y, O = S === void 0 ? false : S, N = k === void 0 ? false : k, U = n == null && c != null, j = l ?? (r !== void 0 && r !== false), $ = l === void 0 ? r : l || void 0;
  let H;
  if (e[21] !== n || e[22] !== i || e[23] !== O || e[24] !== I || e[25] !== N || e[26] !== M || e[27] !== s || e[28] !== j || e[29] !== o || e[30] !== a || e[31] !== c || e[32] !== $ || e[33] !== u || e[34] !== d || e[35] !== h || e[36] !== A || e[37] !== U || e[38] !== P || e[39] !== p || e[40] !== C || e[41] !== T) {
    const G = gKo(T, void 0), q = gn(ZIr.root, tFe.base, kz.root, kRe[P], Kch[P], yRe.appearance, G.applyControlTone && KIr.foreground, G.applyFilledColors && yRe.colors, G.applyNonFilledBackground && uSt.background, T === "outline" && uSt.outline, j && yRe.engaged, !M && tFe.hugFalse, A === "pill" ? tFe.shapePill : tFe.shapeRounded, I === "content" && Ych[P], I === "content" && !M && Xch[P], h, zch), K = gn(n8t.root, Ent.root, Zea.base, U && Zea.placeholder, o);
    let V;
    e[43] === /* @__PURE__ */ Symbol.for("react.memo_cache_sentinel") ? (V = { className: "ui-78zum5 ui-6s0dn4 ui-2lah0s ui-1mh7f6w ui-1s8h5yg" }, e[43] = V) : V = e[43];
    const Y = V, J = { 0: { className: "ui-2lah0s ui-1mh7f6w ui-1s8h5yg" }, 1: { className: "ui-2lah0s ui-7qsbfx" } }[!!j << 0], Q = ri("ui-select-trigger", q.className, i);
    let te;
    e[44] !== p || e[45] !== q ? (te = { ...q.style, ...p }, e[44] = p, e[45] = q, e[46] = te) : te = e[46];
    let ee;
    e[47] !== a ? (ee = a != null && ePr("span", { className: Y.className, style: Y.style, children: a }), e[47] = a, e[48] = ee) : ee = e[48];
    const re = ri("ui-select-label", K.className), ie = U ? c : n;
    let oe;
    e[49] !== K || e[50] !== re || e[51] !== ie ? (oe = ePr("span", { className: re, style: K.style, children: ie }), e[49] = K, e[50] = re, e[51] = ie, e[52] = oe) : oe = e[52];
    let se;
    e[53] !== C ? (se = C != null && ePr("span", { className: Y.className, style: Y.style, children: C }), e[53] = C, e[54] = se) : se = e[54], H = O$y(gai, { ...u, ref: d, id: s, className: Q, style: te, "data-popup-open": $, "data-variant": T, "data-size": P, disabled: O, children: [ee, oe, se, N ? null : ePr(zt, { name: "chevron-down", size: 10, className: ri("ui-select-icon", J.className), style: J.style })] }), e[21] = n, e[22] = i, e[23] = O, e[24] = I, e[25] = N, e[26] = M, e[27] = s, e[28] = j, e[29] = o, e[30] = a, e[31] = c, e[32] = $, e[33] = u, e[34] = d, e[35] = h, e[36] = A, e[37] = U, e[38] = P, e[39] = p, e[40] = C, e[41] = T, e[42] = H;
  } else H = e[42];
  return H;
}
var zch, tFe, Zea, Vch, Kch, Ych, Xch, 
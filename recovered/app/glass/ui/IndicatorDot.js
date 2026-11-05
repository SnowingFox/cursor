// @recovered-by cursor-re
// artifact: app/out/vs/workbench/workbench.glass.main.js sha256:6eb88cb60fce5bf5df2ee401f797d5e160b0bcb5d85c25e57d2576b467edce81
// module: IndicatorDot.js range:11541444..11544834
// basis: inferred
// confidence: C
// method: split
// run: main 2026-11-05T10:03:45.732Z
sNh = L({ "IndicatorDot.js"() {
  "use strict";
  E(), qu(), SLr = { base: { kVAEAm: "ui-10l6tqk", krVfgx: "ui-r0fw0u", kCIrl2: "ui-7zl9wm", kzqmXN: "ui-jwey39", kZKoxP: "ui-wbbb81", kaIpWk: "ui-16rqkct", kfzvcC: "ui-47corl", $$css: true }, colorBlue: { kWkggS: "ui-1b558e3", $$css: true }, colorGreen: { kWkggS: "ui-15xcjd2", $$css: true } };
} });
import { jsx as Gda, jsxs as NpS } from "./react-runtime/react/esm-jsx-runtime-production.js";
import { c as LpS } from "./react-runtime/react/esm-compiler-runtime-production.js";
function ho(t) {
  const e = LpS(60);
  let n, i, r, s, o, a, l, c, u, d, h, p, g, f, _, b, y, S;
  e[0] !== t ? ({ icon: a, iconVariant: g, variant: S, rounded: d, frame: f, size: h, iconSize: l, tone: y, className: s, style: p, rootStyle: u, iconStyle: c, disabled: o, indicatorDot: _, indicatorDotColor: b, "aria-label": n, "aria-labelledby": i, ...r } = t, e[0] = t, e[1] = n, e[2] = i, e[3] = r, e[4] = s, e[5] = o, e[6] = a, e[7] = l, e[8] = c, e[9] = u, e[10] = d, e[11] = h, e[12] = p, e[13] = g, e[14] = f, e[15] = _, e[16] = b, e[17] = y, e[18] = S) : (n = e[1], i = e[2], r = e[3], s = e[4], o = e[5], a = e[6], l = e[7], c = e[8], u = e[9], d = e[10], h = e[11], p = e[12], g = e[13], f = e[14], _ = e[15], b = e[16], y = e[17], S = e[18]);
  const k = g === void 0 ? "outline" : g, C = f === void 0 ? "container" : f, T = _ === void 0 ? false : _, I = b === void 0 ? "blue" : b, A = U5e();
  let P, M, O, N, U, j, $, H, G;
  if (e[19] !== n || e[20] !== i || e[21] !== r || e[22] !== s || e[23] !== o || e[24] !== A || e[25] !== C || e[26] !== a || e[27] !== l || e[28] !== c || e[29] !== k || e[30] !== T || e[31] !== u || e[32] !== d || e[33] !== h || e[34] !== p || e[35] !== y || e[36] !== S) {
    const { size: V, innerIconSize: Y, disabled: J, variant: Q, tone: te } = rwh({ disabled: o, enforced: A, iconSize: l, size: h, tone: y, variant: S });
    nwh("IconButton", a, Q, n, i);
    const ee = iwh({ enforcedRootStyle: A?.iconButtonRootStyle, frame: C, indicatorDot: T, rootStyle: u, rounded: d, size: V, tone: te, variant: Q });
    P = gai, U = r, j = ri("ui-icon-button", ee.rootAttrs.className, s), $ = { ...ee.rootAttrs.style, ...p }, H = ee.dataAttrs, G = J, M = n, O = i, N = typeof a == "string" ? Gda(zt, { name: a, rootStyle: [A?.iconButtonIconStyle, c], variant: k, size: Y, "aria-hidden": "true" }) : Gda("span", { ...twh(Y), "aria-hidden": "true", children: a }), e[19] = n, e[20] = i, e[21] = r, e[22] = s, e[23] = o, e[24] = A, e[25] = C, e[26] = a, e[27] = l, e[28] = c, e[29] = k, e[30] = T, e[31] = u, e[32] = d, e[33] = h, e[34] = p, e[35] = y, e[36] = S, e[37] = P, e[38] = M, e[39] = O, e[40] = N, e[41] = U, e[42] = j, e[43] = $, e[44] = H, e[45] = G;
  } else P = e[37], M = e[38], O = e[39], N = e[40], U = e[41], j = e[42], $ = e[43], H = e[44], G = e[45];
  let q;
  e[46] !== T || e[47] !== I ? (q = T ? Gda(rNh, { color: I }) : null, e[46] = T, e[47] = I, e[48] = q) : q = e[48];
  let K;
  return e[49] !== P || e[50] !== M || e[51] !== O || e[52] !== N || e[53] !== q || e[54] !== U || e[55] !== j || e[56] !== $ || e[57] !== H || e[58] !== G ? (K = NpS(P, { ...U, className: j, style: $, ...H, disabled: G, "aria-label": M, "aria-labelledby": O, children: [N, q] }), e[49] = P, e[50] = M, e[51] = O, e[52] = N, e[53] = q, e[54] = U, e[55] = j, e[56] = $, e[57] = H, e[58] = G, e[59] = K) : K = e[59], K;
}

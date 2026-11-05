// @recovered-by cursor-re
// artifact: app/out/vs/workbench/workbench.glass.main.js sha256:6eb88cb60fce5bf5df2ee401f797d5e160b0bcb5d85c25e57d2576b467edce81
// module: IconButton.chrome.js range:7056825..7061511
// basis: inferred
// confidence: C
// method: split
// run: main 2026-11-05T10:03:45.719Z
owh = L({ "IconButton.chrome.js"() {
  "use strict";
  E(), Va(), fKo(), _Ko(), bKo(), PnS(), XIr(), NZd(), Jvn(), fd(), ewh(), haa = /* @__PURE__ */ new Set(), swh = { root: { k1xSpc: "ui-3nfvp2", kGNEyG: "ui-6s0dn4", kjj79g: "ui-l56j7k", kzqmXN: "ui-1oai4fc", kZKoxP: "ui-higkf7", kGuDYH: "ui-1tachi3", kLWn49: "ui-o5v014", $$css: true } };
} });
import { jsx as Y7t, jsxs as DnS } from "./react-runtime/react/esm-jsx-runtime-production.js";
import { c as awh } from "./react-runtime/react/esm-compiler-runtime-production.js";
function lwh(t, e, n, i) {
  return typeof t == "string" ? Y7t(zt, { "aria-hidden": "true", name: t, rootStyle: i, size: n, variant: e }) : Y7t("span", { ...twh(n), "aria-hidden": "true", children: t });
}
function NnS(t) {
  const e = awh(19), { icon: n, pressedIcon: i, pressed: r, iconVariant: s, iconSize: o, iconStyle: a } = t, l = !r || void 0;
  let c;
  e[0] !== n || e[1] !== o || e[2] !== a || e[3] !== s ? (c = lwh(n, s, o, a), e[0] = n, e[1] = o, e[2] = a, e[3] = s, e[4] = c) : c = e[4];
  let u;
  e[5] !== l || e[6] !== c ? (u = Y7t("span", { className: "ui-1ms6mhf ui-gkxs2y ui-3nfvp2 ui-6s0dn4 ui-l56j7k ui-1g0ag68 ui-g01cxk ui-6rycqq ui-fimr68 ui-1owdx9d ui-tea3wc ui-1qzdkne ui-nejef0 ui-4wkmsb ui-7pq1vu ui-6ekqhr", "data-swap-active": l, children: c }), e[5] = l, e[6] = c, e[7] = u) : u = e[7];
  const d = r || void 0;
  let h;
  e[8] !== o || e[9] !== a || e[10] !== s || e[11] !== i ? (h = lwh(i, s, o, a), e[8] = o, e[9] = a, e[10] = s, e[11] = i, e[12] = h) : h = e[12];
  let p;
  e[13] !== d || e[14] !== h ? (p = Y7t("span", { className: "ui-1ms6mhf ui-gkxs2y ui-3nfvp2 ui-6s0dn4 ui-l56j7k ui-1g0ag68 ui-g01cxk ui-6rycqq ui-fimr68 ui-1owdx9d ui-tea3wc ui-1qzdkne ui-nejef0 ui-4wkmsb ui-7pq1vu ui-6ekqhr", "data-swap-active": d, children: h }), e[13] = d, e[14] = h, e[15] = p) : p = e[15];
  let g;
  return e[16] !== u || e[17] !== p ? (g = DnS("span", { className: "ui-rvj5dj ui-6s0dn4 ui-1o2pa38 ui-c8icb0 ui-47corl ui-1heor9g", "aria-hidden": "true", children: [u, p] }), e[16] = u, e[17] = p, e[18] = g) : g = e[18], g;
}
function YRe(t) {
  const e = awh(52);
  let n, i, r, s, o, a, l, c, u, d, h, p, g, f, _;
  e[0] !== t ? ({ icon: s, pressedIcon: d, iconVariant: h, variant: _, rounded: c, frame: p, size: u, iconSize: o, tone: f, rootStyle: l, iconStyle: a, disabled: r, "aria-label": n, "aria-labelledby": i, ...g } = t, e[0] = t, e[1] = n, e[2] = i, e[3] = r, e[4] = s, e[5] = o, e[6] = a, e[7] = l, e[8] = c, e[9] = u, e[10] = d, e[11] = h, e[12] = p, e[13] = g, e[14] = f, e[15] = _) : (n = e[1], i = e[2], r = e[3], s = e[4], o = e[5], a = e[6], l = e[7], c = e[8], u = e[9], d = e[10], h = e[11], p = e[12], g = e[13], f = e[14], _ = e[15]);
  const b = d === void 0 ? s : d, y = h === void 0 ? "outline" : h, S = p === void 0 ? "container" : p, k = U5e();
  let C, T, I, A, P, M;
  if (e[16] !== n || e[17] !== i || e[18] !== r || e[19] !== k || e[20] !== S || e[21] !== s || e[22] !== o || e[23] !== l || e[24] !== c || e[25] !== u || e[26] !== g || e[27] !== f || e[28] !== _) {
    const { size: U, innerIconSize: j, disabled: $, variant: H, tone: G } = rwh({ disabled: r, enforced: k, iconSize: o, size: u, tone: f, variant: _ });
    I = j, T = $, nwh("ToggleIconButton", s, H, n, i), A = iwh({ enforcedRootStyle: k?.iconButtonRootStyle, frame: S, rootStyle: l, rounded: c, size: U, tone: G, variant: H }), C = uaa, P = g, M = ri("ui-icon-button", A.rootAttrs.className), e[16] = n, e[17] = i, e[18] = r, e[19] = k, e[20] = S, e[21] = s, e[22] = o, e[23] = l, e[24] = c, e[25] = u, e[26] = g, e[27] = f, e[28] = _, e[29] = C, e[30] = T, e[31] = I, e[32] = A, e[33] = P, e[34] = M;
  } else C = e[29], T = e[30], I = e[31], A = e[32], P = e[33], M = e[34];
  let O;
  e[35] !== k?.iconButtonIconStyle || e[36] !== s || e[37] !== a || e[38] !== y || e[39] !== I || e[40] !== b ? (O = (U, j) => Y7t("button", { ...U, "data-pressed": void 0, children: Y7t(NnS, { icon: s, iconSize: I, iconStyle: [k?.iconButtonIconStyle, a], iconVariant: y, pressed: j.pressed, pressedIcon: b }) }), e[35] = k?.iconButtonIconStyle, e[36] = s, e[37] = a, e[38] = y, e[39] = I, e[40] = b, e[41] = O) : O = e[41];
  let N;
  return e[42] !== C || e[43] !== n || e[44] !== i || e[45] !== T || e[46] !== A.dataAttrs || e[47] !== A.rootAttrs.style || e[48] !== P || e[49] !== M || e[50] !== O ? (N = Y7t(C, { ...P, className: M, style: A.rootAttrs.style, ...A.dataAttrs, "aria-label": n, "aria-labelledby": i, "data-component": "toggle-icon-button", disabled: T, render: O }), e[42] = C, e[43] = n, e[44] = i, e[45] = T, e[46] = A.dataAttrs, e[47] = A.rootAttrs.style, e[48] = P, e[49] = M, e[50] = O, e[51] = N) : N = e[51], N;
}

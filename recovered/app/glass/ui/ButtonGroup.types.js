// @recovered-by cursor-re
// artifact: app/out/vs/workbench/workbench.glass.main.js sha256:6eb88cb60fce5bf5df2ee401f797d5e160b0bcb5d85c25e57d2576b467edce81
// module: ButtonGroup.types.js range:15328598..15332579
// basis: inferred
// confidence: C
// method: split
// run: main 2026-11-05T10:03:45.513Z
lzh = L({ "ButtonGroup.types.js"() {
  "use strict";
  E(), Sba = "md", kba = "outline";
} });
import { jsx as wba } from "./react-runtime/react/esm-jsx-runtime-production.js";
import { c as CDS } from "./react-runtime/react/esm-compiler-runtime-production.js";
import { Children as TDS, isValidElement as EDS } from "./react-runtime/react/esm-index-production.js";
function IDS(t, { disabled: e, rounded: n, size: i, tone: r, variant: s }) {
  const o = TDS.toArray(t), a = [], l = s === "outline", c = s, u = l ? "ghost" : s, d = s === "primary" ? r : void 0, h = s === "outline" ? "monochrome" : d, p = l && !e;
  for (const [g, f] of o.entries()) {
    const _ = g === 0, b = g > 0, y = g === o.length - 1;
    b && !l && a.push(wba("span", { "aria-hidden": true, "data-component": "button-group-divider", "data-variant": s, "data-tone": s === "primary" ? r : void 0, ...gn(Bz.divider, s === "secondary" && Bz.dividerSecondary, s === "primary" && Bz.dividerPrimaryOverlay, s === "primary" && (r === "monochrome" ? Bz.dividerMonochrome : Bz.dividerDefault), s === "media" && Bz.mediaDivider) }, `button-group-divider-${g}`));
    const S = [Bz.control, e && Bz.controlGroupDisabled, l && Bz.outlineSegment, l && _ && Bz.outlineSegmentFirst, l && y && Bz.outlineSegmentLast, p && Bz.outlineSegmentPartialDisabled, p && _ && Bz.outlineSegmentFirstPartialDisabled], k = EDS(f) && f.key !== null ? f.key : g;
    a.push(wba(NC, { buttonRootStyle: S, buttonSize: i, buttonVariant: c, buttonTone: d, buttonRounded: n, disabled: e, iconButtonRootStyle: S, iconButtonSize: i, iconButtonVariant: u, iconButtonTone: h, children: f }, `button-group-segment-${k}`));
  }
  return a;
}
function czh(t) {
  const e = CDS(48);
  let n, i, r, s, o, a, l, c, u, d, h;
  e[0] !== t ? ({ children: n, size: a, variant: l, tone: c, rounded: u, fullWidth: d, rootStyle: o, disabled: i, componentName: h, rootClassName: r, ...s } = t, e[0] = t, e[1] = n, e[2] = i, e[3] = r, e[4] = s, e[5] = o, e[6] = a, e[7] = l, e[8] = c, e[9] = u, e[10] = d, e[11] = h) : (n = e[1], i = e[2], r = e[3], s = e[4], o = e[5], a = e[6], l = e[7], c = e[8], u = e[9], d = e[10], h = e[11]);
  const p = a === void 0 ? Sba : a, g = l === void 0 ? kba : l, f = c === void 0 ? vai : c, _ = u === void 0 ? false : u, b = d === void 0 ? false : d, y = h === void 0 ? "button-group" : h, S = U5e(), k = i ?? S?.disabled;
  let C, T, I, A, P, M, O, N, U, j, $, H;
  if (e[12] !== n || e[13] !== y || e[14] !== b || e[15] !== k || e[16] !== r || e[17] !== s || e[18] !== o || e[19] !== _ || e[20] !== p || e[21] !== f || e[22] !== g) {
    const q = fai(f), K = g === "primary", V = gn(Bz.root, kRe[p], j5e[p], g === "outline" && Bz.outlineClip, g === "media" && Bz.media, _ && Bz.rounded, b && Bz.fullWidth, k && Bz.disabled, o);
    j = s, $ = "group", H = y, C = p, T = g, I = K ? q : void 0, A = _ || void 0, P = b || void 0, M = k || void 0, O = V, N = ri(r, V.className), U = IDS(n, { disabled: k, rounded: _, size: p, tone: q, variant: g }), e[12] = n, e[13] = y, e[14] = b, e[15] = k, e[16] = r, e[17] = s, e[18] = o, e[19] = _, e[20] = p, e[21] = f, e[22] = g, e[23] = C, e[24] = T, e[25] = I, e[26] = A, e[27] = P, e[28] = M, e[29] = O, e[30] = N, e[31] = U, e[32] = j, e[33] = $, e[34] = H;
  } else C = e[23], T = e[24], I = e[25], A = e[26], P = e[27], M = e[28], O = e[29], N = e[30], U = e[31], j = e[32], $ = e[33], H = e[34];
  let G;
  return e[35] !== C || e[36] !== T || e[37] !== I || e[38] !== A || e[39] !== P || e[40] !== M || e[41] !== O || e[42] !== N || e[43] !== U || e[44] !== j || e[45] !== $ || e[46] !== H ? (G = wba("div", { ...j, role: $, "data-component": H, "data-size": C, "data-variant": T, "data-tone": I, "data-rounded": A, "data-full-width": P, "data-disabled": M, ...O, className: N, children: U }), e[35] = C, e[36] = T, e[37] = I, e[38] = A, e[39] = P, e[40] = M, e[41] = O, e[42] = N, e[43] = U, e[44] = j, e[45] = $, e[46] = H, e[47] = G) : G = e[47], G;
}
var Bz, Cba, h6r, uzh, 
// @recovered-by cursor-re
// artifact: app/out/vs/workbench/workbench.glass.main.js sha256:6eb88cb60fce5bf5df2ee401f797d5e160b0bcb5d85c25e57d2576b467edce81
// module: SelectionActions.js range:18342663..18348369
// basis: inferred
// confidence: C
// method: split
// run: main 2026-11-05T10:03:45.974Z
uT1 = L({ "SelectionActions.js"() {
  "use strict";
  E(), Zci(), N1n(), RMa = { popupSurface: { kWkggS: "ui-jbqb8w", ks0D6T: "ui-1x1rfll", kLKAdn: "ui-exx8yu", kwRFfy: "ui-yri2b", kGO01o: "ui-18d9i69", kZCmMZ: "ui-1c1uobl", kfSwDN: "ui-87ps6o", "--ui-surface-hairline-width": "ui-ydv7qj", $$css: true }, popupPositioner: { kGVxlE: "ui-1gnnqk1", $$css: true } };
} });
import { jsx as w0n, jsxs as PAp } from "./react-runtime/react/esm-jsx-runtime-production.js";
import { c as dT1 } from "./react-runtime/react/esm-compiler-runtime-production.js";
function fbi(t) {
  const e = dT1(91);
  let n, i, r, s, o, a, l, c, u, d, h, p, g, f, _, b, y, S, k, C, T;
  e[0] !== t ? ({ children: n, tone: T, variant: k, size: S, rounded: y, dropdownLeadingIcon: l, kbs: d, disabled: o, dropdownDisabled: a, onDropdownClick: f, dropdownTriggerProps: u, renderDropdownTrigger: b, fullWidth: C, mainTooltip: g, dropdownTooltip: c, ref: _, containerRef: r, containerStyle: s, className: i, rootStyle: p, ...h } = t, e[0] = t, e[1] = n, e[2] = i, e[3] = r, e[4] = s, e[5] = o, e[6] = a, e[7] = l, e[8] = c, e[9] = u, e[10] = d, e[11] = h, e[12] = p, e[13] = g, e[14] = f, e[15] = _, e[16] = b, e[17] = y, e[18] = S, e[19] = k, e[20] = C, e[21] = T) : (n = e[1], i = e[2], r = e[3], s = e[4], o = e[5], a = e[6], l = e[7], c = e[8], u = e[9], d = e[10], h = e[11], p = e[12], g = e[13], f = e[14], _ = e[15], b = e[16], y = e[17], S = e[18], k = e[19], C = e[20], T = e[21]);
  const I = k === void 0 ? "primary" : k, A = C === void 0 ? false : C, P = U5e(), M = S ?? P?.buttonSize ?? JIr, O = P?.buttonRounded;
  let N;
  e[22] !== y || e[23] !== O ? (N = jZd({ enforcedRounded: O, rounded: y }), e[22] = y, e[23] = O, e[24] = N) : N = e[24];
  const U = N, j = o ?? P?.disabled;
  let $;
  if (e[25] !== P?.buttonPrimaryTone || e[26] !== P?.buttonTone || e[27] !== T) {
    const Ie = fai(P?.buttonPrimaryTone ?? P?.buttonTone);
    $ = T !== void 0 ? fai(T) : hKo(Ie) ? Ie : vai, e[25] = P?.buttonPrimaryTone, e[26] = P?.buttonTone, e[27] = T, e[28] = $;
  } else $ = e[28];
  const H = $;
  let G;
  e[29] !== u ? (G = u ?? {}, e[29] = u, e[30] = G) : G = e[30];
  let q, K, V, Y;
  e[31] !== G ? ({ className: K, onClick: Y, style: V, ...q } = G, e[31] = G, e[32] = q, e[33] = K, e[34] = V, e[35] = Y) : (q = e[32], K = e[33], V = e[34], Y = e[35]);
  const J = l !== void 0, Q = J && mst.dropdownWithLeadingIcon, te = U && mst.dropdownRounded, ee = U && J && mst.dropdownWithLeadingIconRounded;
  let re;
  e[36] !== Q || e[37] !== te || e[38] !== ee ? (re = [mst.dropdown, Q, te, ee], e[36] = Q, e[37] = te, e[38] = ee, e[39] = re) : re = e[39];
  const ie = re;
  let oe;
  e[40] !== f || e[41] !== Y ? (oe = (Ie) => {
    Ie.stopPropagation(), Y?.(Ie), f?.(Ie);
  }, e[40] = f, e[41] = Y, e[42] = oe) : oe = e[42];
  const se = oe, le = A && mst.mainFullWidth;
  let ce;
  e[43] !== p || e[44] !== le ? (ce = [le, p], e[43] = p, e[44] = le, e[45] = ce) : ce = e[45];
  let ae;
  e[46] !== n || e[47] !== j || e[48] !== d || e[49] !== h || e[50] !== _ || e[51] !== ce ? (ae = w0n(An, { ...h, ref: _, className: "ui-split-button__main", disabled: j, kbs: d, rootStyle: ce, children: n }), e[46] = n, e[47] = j, e[48] = d, e[49] = h, e[50] = _, e[51] = ce, e[52] = ae) : ae = e[52];
  const de = ae;
  let he;
  e[53] !== j || e[54] !== q || e[55] !== K || e[56] !== a || e[57] !== l || e[58] !== ie || e[59] !== V || e[60] !== se || e[61] !== J ? (he = J ? PAp(An, { ...q, className: ri("ui-split-button__dropdown", K), style: V, rootStyle: ie, disabled: j || a, "data-has-leading-icon": true, onClick: se, "aria-label": q["aria-label"] ?? "Open menu", "aria-haspopup": q["aria-haspopup"] ?? "menu", children: [w0n(zt, { name: l, size: "sm", "aria-hidden": "true", rootStyle: mst.dropdownIcon }), w0n(zt, { name: "chevron-down", size: "sm", "aria-hidden": "true", rootStyle: mst.dropdownIcon })] }) : w0n(ho, { ...q, className: ri("ui-split-button__dropdown", K), style: V, rootStyle: ie, icon: "chevron-down", iconSize: "sm", iconStyle: mst.dropdownIcon, disabled: j || a, onClick: se, "aria-label": q["aria-label"] ?? "Open menu", "aria-haspopup": q["aria-haspopup"] ?? "menu" }), e[53] = j, e[54] = q, e[55] = K, e[56] = a, e[57] = l, e[58] = ie, e[59] = V, e[60] = se, e[61] = J, e[62] = he) : he = e[62];
  const ge = he;
  let pe;
  e[63] !== j || e[64] !== ge || e[65] !== a || e[66] !== c ? (pe = c ? w0n(xs, { content: c, disabled: j || a, placement: "bottom", sameAxisOnly: true, children: ge }) : ge, e[63] = j, e[64] = ge, e[65] = a, e[66] = c, e[67] = pe) : pe = e[67];
  const ve = pe;
  let fe;
  e[68] !== ve || e[69] !== b ? (fe = b ? b(ve) : ve, e[68] = ve, e[69] = b, e[70] = fe) : fe = e[70];
  const Te = fe;
  let _e;
  e[71] !== H || e[72] !== I ? (_e = I === "primary" ? { variant: I, tone: H } : { variant: I }, e[71] = H, e[72] = I, e[73] = _e) : _e = e[73];
  const Ce = _e;
  let Se;
  e[74] !== i ? (Se = ri("ui-split-button", i), e[74] = i, e[75] = Se) : Se = e[75];
  let Pe;
  e[76] !== j || e[77] !== de || e[78] !== g ? (Pe = g ? w0n(xs, { content: g, disabled: j, placement: "bottom", sameAxisOnly: true, children: de }) : de, e[76] = j, e[77] = de, e[78] = g, e[79] = Pe) : Pe = e[79];
  let we;
  return e[80] !== r || e[81] !== s || e[82] !== j || e[83] !== A || e[84] !== Ce || e[85] !== Te || e[86] !== U || e[87] !== M || e[88] !== Se || e[89] !== Pe ? (we = PAp(uzh, { ...Ce, ref: r, componentName: "split-button", disabled: j, fullWidth: A, rootStyle: s, rootClassName: Se, rounded: U, size: M, children: [Pe, Te] }), e[80] = r, e[81] = s, e[82] = j, e[83] = A, e[84] = Ce, e[85] = Te, e[86] = U, e[87] = M, e[88] = Se, e[89] = Pe, e[90] = we) : we = e[90], we;
}
var mst, 
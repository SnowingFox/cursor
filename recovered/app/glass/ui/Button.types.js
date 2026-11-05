// @recovered-by cursor-re
// artifact: app/out/vs/workbench/workbench.glass.main.js sha256:6eb88cb60fce5bf5df2ee401f797d5e160b0bcb5d85c25e57d2576b467edce81
// module: Button.types.js range:5339281..5346007
// basis: inferred
// confidence: C
// method: split
// run: main 2026-11-05T10:03:45.508Z
IKo = L({ "Button.types.js"() {
  "use strict";
  E(), JIr = "md", $Zd = "secondary";
} });
import { jsx as exr, jsxs as HZd, Fragment as qFy } from "./react-runtime/react/esm-jsx-runtime-production.js";
import { c as zFy } from "./react-runtime/react/esm-compiler-runtime-production.js";
function WZd(t, e) {
  if (t == null) return null;
  const n = typeof t == "string" ? { name: t } : t;
  return exr(zt, { "aria-hidden": "true", modifier: n.modifier, name: n.name, size: e, variant: n.variant });
}
function An(t) {
  const e = zFy(118);
  let n, i, r, s, o, a, l, c, u, d, h, p, g, f, _, b, y, S, k, C;
  e[0] !== t ? ({ variant: C, tone: S, size: _, rounded: f, frame: y, align: n, fullWidth: u, disabled: c, children: a, leadingIcon: h, trailingIcon: k, kbs: d, pressed: p, className: l, style: b, rootStyle: g, "aria-expanded": r, "aria-pressed": s, "aria-busy": i, ...o } = t, e[0] = t, e[1] = n, e[2] = i, e[3] = r, e[4] = s, e[5] = o, e[6] = a, e[7] = l, e[8] = c, e[9] = u, e[10] = d, e[11] = h, e[12] = p, e[13] = g, e[14] = f, e[15] = _, e[16] = b, e[17] = y, e[18] = S, e[19] = k, e[20] = C) : (n = e[1], i = e[2], r = e[3], s = e[4], o = e[5], a = e[6], l = e[7], c = e[8], u = e[9], d = e[10], h = e[11], p = e[12], g = e[13], f = e[14], _ = e[15], b = e[16], y = e[17], S = e[18], k = e[19], C = e[20]);
  const T = y === void 0 ? "container" : y, I = U5e(), A = C ?? I?.buttonVariant ?? $Zd, P = _ ?? I?.buttonSize ?? JIr;
  let M, O, N, U, j, $, H, G, q, K, V, Y, J, Q;
  if (e[21] !== n || e[22] !== i || e[23] !== r || e[24] !== s || e[25] !== o || e[26] !== a || e[27] !== l || e[28] !== c || e[29] !== I?.buttonFullWidth || e[30] !== I?.buttonIconSize || e[31] !== I?.buttonPrimaryTone || e[32] !== I?.buttonRootStyle || e[33] !== I?.buttonRounded || e[34] !== I?.buttonTone || e[35] !== I?.disabled || e[36] !== T || e[37] !== u || e[38] !== d || e[39] !== h || e[40] !== p || e[41] !== g || e[42] !== f || e[43] !== P || e[44] !== S || e[45] !== k || e[46] !== A) {
    q = jZd({ enforcedRounded: I?.buttonRounded, rounded: f, variant: A }), j = u ?? I?.buttonFullWidth ?? false, N = c ?? I?.disabled;
    const he = S ?? (A === "primary" ? I?.buttonPrimaryTone ?? I?.buttonTone : A === "ghost" ? I?.buttonTone : void 0);
    U = fai(he ?? (A === "primary" ? vai : void 0)), $ = I?.buttonIconSize ?? kKo[P], H = o["data-pressed"];
    const ge = gKo(A, U);
    G = gn(wRe.root, wRe.fontSmoothing, yRe.appearance, ge.applyControlTone && KIr.foreground, ge.applyControlTone && U !== void 0 && vKo[U], ge.applyFilledColors && yRe.colors, ge.applyNonFilledBackground && uSt.background, (A === "outline" || A === "ghost") && YIr(U) && yKo[U], A === "outline" && uSt.outline, A === "outline" && YIr(U) && SKo[U], A === "media" && yRe.media, p === true && yRe.engaged, wRe.size[P], wRe.typography[P], wRe.align[n ?? "center"], j && wRe.fullWidth, q && wRe.shape.pill, q && wRe.pillSize[P], wRe.frame[T], I?.buttonRootStyle, g, GZd);
    let pe;
    e[61] !== $ || e[62] !== h ? (pe = WZd(h, $), e[61] = $, e[62] = h, e[63] = pe) : pe = e[63];
    const ve = pe;
    let fe;
    e[64] !== $ || e[65] !== k ? (fe = WZd(k, $), e[64] = $, e[65] = k, e[66] = fe) : fe = e[66];
    const Te = fe;
    if (O = a, d != null) {
      let _e, Ce, Se, Pe, we, Ie, Me;
      if (e[67] !== a || e[68] !== ve || e[69] !== Te) {
        const be = gn(wRe.labelGroup);
        _e = gn(wRe.kbs), Ce = ri("ui-button__label-group", be.className), Se = be.style, Pe = ve, we = a, Ie = Te, Me = ri("ui-button__kbs", _e.className), e[67] = a, e[68] = ve, e[69] = Te, e[70] = _e, e[71] = Ce, e[72] = Se, e[73] = Pe, e[74] = we, e[75] = Ie, e[76] = Me;
      } else _e = e[70], Ce = e[71], Se = e[72], Pe = e[73], we = e[74], Ie = e[75], Me = e[76];
      let De;
      e[77] !== d || e[78] !== _e.style || e[79] !== Me ? (De = exr("span", { className: Me, style: _e.style, children: d }), e[77] = d, e[78] = _e.style, e[79] = Me, e[80] = De) : De = e[80];
      let Ne;
      e[81] !== Ce || e[82] !== Se || e[83] !== Pe || e[84] !== we || e[85] !== Ie || e[86] !== De ? (Ne = HZd("span", { className: Ce, style: Se, children: [Pe, we, Ie, De] }), e[81] = Ce, e[82] = Se, e[83] = Pe, e[84] = we, e[85] = Ie, e[86] = De, e[87] = Ne) : Ne = e[87], O = Ne;
    } else if (ve != null || Te != null) {
      let _e;
      e[88] !== a || e[89] !== ve || e[90] !== Te ? (_e = HZd(qFy, { children: [ve, a, Te] }), e[88] = a, e[89] = ve, e[90] = Te, e[91] = _e) : _e = e[91], O = _e;
    }
    M = gai, K = o, V = i, Y = r, J = r === void 0 && p !== void 0 ? p : s, Q = ri("ui-button", G.className, l), e[21] = n, e[22] = i, e[23] = r, e[24] = s, e[25] = o, e[26] = a, e[27] = l, e[28] = c, e[29] = I?.buttonFullWidth, e[30] = I?.buttonIconSize, e[31] = I?.buttonPrimaryTone, e[32] = I?.buttonRootStyle, e[33] = I?.buttonRounded, e[34] = I?.buttonTone, e[35] = I?.disabled, e[36] = T, e[37] = u, e[38] = d, e[39] = h, e[40] = p, e[41] = g, e[42] = f, e[43] = P, e[44] = S, e[45] = k, e[46] = A, e[47] = M, e[48] = O, e[49] = N, e[50] = U, e[51] = j, e[52] = $, e[53] = H, e[54] = G, e[55] = q, e[56] = K, e[57] = V, e[58] = Y, e[59] = J, e[60] = Q;
  } else M = e[47], O = e[48], N = e[49], U = e[50], j = e[51], $ = e[52], H = e[53], G = e[54], q = e[55], K = e[56], V = e[57], Y = e[58], J = e[59], Q = e[60];
  let te;
  e[92] !== G.style || e[93] !== b ? (te = { ...G.style, ...b }, e[92] = G.style, e[93] = b, e[94] = te) : te = e[94];
  const ee = q || void 0, re = T !== "container" ? T : void 0, ie = n === "left" ? n : void 0, oe = j || void 0, se = p !== void 0 ? String(p) : H, le = i === true || i === "true" ? "" : void 0, ce = T === "container" ? "" : void 0;
  let ae;
  e[95] !== O || e[96] !== $ ? (ae = exr(NC, { iconSize: $, children: O }), e[95] = O, e[96] = $, e[97] = ae) : ae = e[97];
  let de;
  return e[98] !== M || e[99] !== N || e[100] !== U || e[101] !== P || e[102] !== ie || e[103] !== oe || e[104] !== se || e[105] !== le || e[106] !== ce || e[107] !== ae || e[108] !== K || e[109] !== V || e[110] !== Y || e[111] !== J || e[112] !== Q || e[113] !== te || e[114] !== ee || e[115] !== re || e[116] !== A ? (de = exr(M, { ...K, "aria-busy": V, "aria-expanded": Y, "aria-pressed": J, className: Q, style: te, "data-variant": A, "data-size": P, "data-rounded": ee, "data-frame": re, "data-tone": U, "data-align": ie, "data-full-width": oe, "data-pressed": se, "data-busy": le, "data-padded-label": ce, disabled: N, children: ae }), e[98] = M, e[99] = N, e[100] = U, e[101] = P, e[102] = ie, e[103] = oe, e[104] = se, e[105] = le, e[106] = ce, e[107] = ae, e[108] = K, e[109] = V, e[110] = Y, e[111] = J, e[112] = Q, e[113] = te, e[114] = ee, e[115] = re, e[116] = A, e[117] = de) : de = e[117], de;
}
var GZd, 
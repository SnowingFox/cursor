// @recovered-by cursor-re
// artifact: app/out/vs/workbench/workbench.glass.main.js sha256:6eb88cb60fce5bf5df2ee401f797d5e160b0bcb5d85c25e57d2576b467edce81
// module: Slider.js range:17918920..17936487
// basis: inferred
// confidence: C
// method: split
// run: main 2026-11-05T10:03:46.018Z
_0p = L({ "Slider.js"() {
  "use strict";
  E(), Va(), bb1(), Cb1(), Eb1(), Pb1(), f0p = { root: { kzqmXN: "ui-h8yej3 ui-35zhcf", kZKoxP: "ui-1feg4er ui-iqa3gj", kaIpWk: "ui-1bl94mz", kWkggS: "ui-1m4ooaa", $$css: true } }, v0p = { root: { kB7OPa: "ui-9f619", kY2c9j: "ui-1vjfegm", kzqmXN: "ui-ek66a6", kZKoxP: "ui-1q5geii", kMzoRj: "ui-mkeg23", ksu8eU: "ui-1y0btm7", kVAM5u: "ui-1tjqsyf", kaIpWk: "ui-1i4c3av", kMeerF: "ui-1k57tk5 ui-1yuyh71", k3XXqK: "ui-1t137rt ui-1ae5oaz", kjBf7l: "ui-1uczgqu ui-xf2pxw", kInvED: "ui-1wfwxd8 ui-12ilkhz", kWkggS: "ui-mak4db", k3aq6I: "ui-3oybdh ui-9m27dc", k1ekBW: "ui-11xpdln", kIyJzY: "ui-7pq1vu ui-sagj69", kAMwcw: "ui-6tor67", $$css: true } };
} });
import { jsx as Xhe, jsxs as n0n } from "./react-runtime/react/esm-jsx-runtime-production.js";
import { c as QRa } from "./react-runtime/react/esm-compiler-runtime-production.js";
import { useRef as Lb1, useState as b0p, useEffect as y0p } from "./react-runtime/react/esm-index-production.js";
function S0p({ disabled: t }) {
  return [e2a.base, t ? e2a.disabled : null];
}
function k0p() {
  return P0p.base;
}
function w0p() {
  return M0p.colorPreview;
}
function C0p() {
  return D0p.base;
}
function Ob1() {
  return N0p.base;
}
function Fb1() {
  return L0p.base;
}
function Bb1() {
  return O2e.root;
}
function Ub1() {
  return O2e.field;
}
function jb1() {
  return O2e.fieldInput;
}
function $b1() {
  return O2e.fieldSwatchSlot;
}
function Hb1() {
  return O2e.fieldSwatch;
}
function Wb1() {
  return O2e.popover;
}
function Gb1() {
  return O2e.surface;
}
function qb1() {
  return O2e.thumb;
}
function zb1() {
  return O2e.hue;
}
function i0n(t, e, n) {
  return t < e ? e : t > n ? n : t;
}
function Vb1(t, e) {
  const n = e === "hex8" ? 8 : 6;
  let i = false, r = "";
  for (const s of t.trim().toUpperCase()) {
    if (s === "#") {
      !i && r.length === 0 && (i = true);
      continue;
    }
    /[0-9A-F]/.test(s) && r.length < n && (r += s);
  }
  return i ? `#${r}` : r;
}
function T0p({ width: t, hue: e, saturation: n, lightness: i }) {
  return { width: t, "--ui-color-picker-hue": String(e), "--ui-color-picker-sat": `${n}%`, "--ui-color-picker-light": `${i}%` };
}
function x_i(t) {
  return t === "hex6" || t === "hex8";
}
function Qjr(t, e) {
  return x_i(e) ? Vb1(t, e) : t;
}
function E0p(t, e) {
  return x_i(e) ? _Aa(t, e) : h_i(t) === e ? t.trim() : null;
}
function I0p(t, e) {
  if (x_i(e)) return _Aa(t, e);
  try {
    return E0p(t, e) ?? YSp(s$(t), e);
  } catch {
    return null;
  }
}
function JRa(t) {
  const e = QRa(51), { hue: n, active: i, saturation: r, lightness: s, width: o, showSwatch: a, onChange: l, onCommit: c, disabled: u, "aria-label": d, "aria-labelledby": h, className: p } = t, g = i === void 0 ? true : i, f = r === void 0 ? F0p : r, _ = s === void 0 ? n2a : s, b = o === void 0 ? t2a : o, y = a === void 0 ? true : a, S = u === void 0 ? false : u;
  let k, C, T, I, A;
  if (e[0] !== g || e[1] !== p || e[2] !== S || e[3] !== n || e[4] !== _ || e[5] !== f || e[6] !== b) {
    k = i0n(Math.round(n), Jjr, e$r), T = g ? i0n(f, 0, 100) : 0, C = i0n(_, 0, 100);
    const oe = T0p({ width: b, hue: k, saturation: T, lightness: C });
    let se;
    e[12] !== p || e[13] !== S ? (se = ar({ rootClass: "ui-color-picker", stylexStyles: S0p({ disabled: S }), className: p }), e[12] = p, e[13] = S, e[14] = se) : se = e[14], I = se, A = ar({ rootClass: "ui-color-picker__slider-frame", stylexStyles: k0p(), style: oe }), e[0] = g, e[1] = p, e[2] = S, e[3] = n, e[4] = _, e[5] = f, e[6] = b, e[7] = k, e[8] = C, e[9] = T, e[10] = I, e[11] = A;
  } else k = e[7], C = e[8], T = e[9], I = e[10], A = e[11];
  const P = A;
  let M;
  e[15] === /* @__PURE__ */ Symbol.for("react.memo_cache_sentinel") ? (M = gn(C0p()), e[15] = M) : M = e[15];
  const O = M;
  let N;
  e[16] !== g || e[17] !== k || e[18] !== C || e[19] !== T ? (N = ar({ rootClass: "ui-color-picker__swatch", stylexStyles: Ob1(), style: g ? { backgroundColor: `hsl(${k} ${T}% ${C}%)` } : void 0 }), e[16] = g, e[17] = k, e[18] = C, e[19] = T, e[20] = N) : N = e[20];
  const U = N, j = I.className, $ = I.style, H = g || void 0, G = S || void 0, q = P.className, K = P.style;
  let V;
  e[21] !== k || e[22] !== c ? (V = () => {
    c?.(k);
  }, e[21] = k, e[22] = c, e[23] = V) : V = e[23];
  let Y;
  e[24] !== l ? (Y = (oe) => {
    l(oe);
  }, e[24] = l, e[25] = Y) : Y = e[25];
  let J;
  e[26] !== c ? (J = (oe) => {
    c?.(oe);
  }, e[26] = c, e[27] = J) : J = e[27];
  let Q;
  e[28] === /* @__PURE__ */ Symbol.for("react.memo_cache_sentinel") ? (Q = w0p(), e[28] = Q) : Q = e[28];
  let te;
  e[29] !== d || e[30] !== h || e[31] !== k || e[32] !== S || e[33] !== V || e[34] !== Y || e[35] !== J ? (te = Xhe(I_i, { "aria-label": d, "aria-labelledby": h, disabled: S, max: e$r, min: Jjr, onBlur: V, onValueChange: Y, onValueCommitted: J, thumbStyle: Q, value: k }), e[29] = d, e[30] = h, e[31] = k, e[32] = S, e[33] = V, e[34] = Y, e[35] = J, e[36] = te) : te = e[36];
  let ee;
  e[37] !== P.className || e[38] !== P.style || e[39] !== te ? (ee = Xhe("div", { className: q, style: K, children: te }), e[37] = P.className, e[38] = P.style, e[39] = te, e[40] = ee) : ee = e[40];
  let re;
  e[41] !== y || e[42] !== U ? (re = y && Xhe("div", { className: O.className, style: O.style, children: Xhe("div", { className: U.className, style: U.style }) }), e[41] = y, e[42] = U, e[43] = re) : re = e[43];
  let ie;
  return e[44] !== I.className || e[45] !== I.style || e[46] !== H || e[47] !== G || e[48] !== ee || e[49] !== re ? (ie = n0n("div", { className: j, style: $, "data-active": H, "data-disabled": G, children: [ee, re] }), e[44] = I.className, e[45] = I.style, e[46] = H, e[47] = G, e[48] = ee, e[49] = re, e[50] = ie) : ie = e[50], ie;
}
function x0p(t) {
  const e = QRa(43), { intensity: n, hue: i, lightness: r, width: s, showPercentage: o, onChange: a, onCommit: l, disabled: c, "aria-label": u, "aria-labelledby": d, className: h } = t, p = i === void 0 ? O0p : i, g = r === void 0 ? n2a : r, f = s === void 0 ? t2a : s, _ = o === void 0 ? true : o, b = c === void 0 ? false : c;
  let y, S, k;
  if (e[0] !== h || e[1] !== b || e[2] !== p || e[3] !== n || e[4] !== g || e[5] !== f) {
    y = i0n(Math.round(n), i2a, r2a);
    const Q = T0p({ width: f, hue: i0n(Math.round(p), Jjr, e$r), saturation: y, lightness: i0n(g, 0, 100) });
    let te;
    e[9] !== h || e[10] !== b ? (te = ar({ rootClass: "ui-color-picker", stylexStyles: S0p({ disabled: b }), className: h }), e[9] = h, e[10] = b, e[11] = te) : te = e[11], S = te, k = ar({ rootClass: "ui-color-picker__slider-frame", stylexStyles: k0p(), style: Q }), e[0] = h, e[1] = b, e[2] = p, e[3] = n, e[4] = g, e[5] = f, e[6] = y, e[7] = S, e[8] = k;
  } else y = e[6], S = e[7], k = e[8];
  const C = k;
  let T;
  e[12] === /* @__PURE__ */ Symbol.for("react.memo_cache_sentinel") ? (T = gn(C0p()), e[12] = T) : T = e[12];
  const I = T;
  let A;
  e[13] === /* @__PURE__ */ Symbol.for("react.memo_cache_sentinel") ? (A = gn(Fb1()), e[13] = A) : A = e[13];
  const P = A, M = S.className, O = S.style, N = b || void 0, U = C.className, j = C.style;
  let $;
  e[14] !== y || e[15] !== l ? ($ = () => {
    l?.(y);
  }, e[14] = y, e[15] = l, e[16] = $) : $ = e[16];
  let H;
  e[17] !== a ? (H = (Q) => {
    a(Q);
  }, e[17] = a, e[18] = H) : H = e[18];
  let G;
  e[19] !== l ? (G = (Q) => {
    l?.(Q);
  }, e[19] = l, e[20] = G) : G = e[20];
  let q;
  e[21] === /* @__PURE__ */ Symbol.for("react.memo_cache_sentinel") ? (q = w0p(), e[21] = q) : q = e[21];
  let K;
  e[22] !== u || e[23] !== d || e[24] !== y || e[25] !== b || e[26] !== $ || e[27] !== H || e[28] !== G ? (K = Xhe(I_i, { "aria-label": u, "aria-labelledby": d, disabled: b, max: r2a, min: i2a, onBlur: $, onValueChange: H, onValueCommitted: G, thumbStyle: q, value: y }), e[22] = u, e[23] = d, e[24] = y, e[25] = b, e[26] = $, e[27] = H, e[28] = G, e[29] = K) : K = e[29];
  let V;
  e[30] !== C.className || e[31] !== C.style || e[32] !== K ? (V = Xhe("div", { className: U, style: j, children: K }), e[30] = C.className, e[31] = C.style, e[32] = K, e[33] = V) : V = e[33];
  let Y;
  e[34] !== y || e[35] !== _ ? (Y = _ && Xhe("div", { className: I.className, style: I.style, children: n0n("div", { className: P.className, style: P.style, children: [y, "%"] }) }), e[34] = y, e[35] = _, e[36] = Y) : Y = e[36];
  let J;
  return e[37] !== S.className || e[38] !== S.style || e[39] !== N || e[40] !== V || e[41] !== Y ? (J = n0n("div", { className: M, style: O, "data-disabled": N, children: [V, Y] }), e[37] = S.className, e[38] = S.style, e[39] = N, e[40] = V, e[41] = Y, e[42] = J) : J = e[42], J;
}
function A0p(t) {
  const e = QRa(135), { value: n, format: i, size: r, variant: s, inputGroupRootStyle: o, rootStyle: a, placeholder: l, onChange: c, disabled: u, className: d, "aria-label": h, "aria-labelledby": p } = t, g = r === void 0 ? "md" : r, f = u === void 0 ? false : u, _ = Lb1(null), [b, y] = b0p(false), [S, k] = b0p(n);
  let C;
  e[0] !== i || e[1] !== n ? (C = n ? x_i(i) ? u_i(n) : s$(n) : R0p, e[0] = i, e[1] = n, e[2] = C) : C = e[2];
  const T = C;
  let I;
  e[3] !== T ? (I = ZSp(T), e[3] = T, e[4] = I) : I = e[4];
  const A = I;
  let P;
  e[5] !== A.h ? (P = Math.round(A.h), e[5] = A.h, e[6] = P) : P = e[6];
  const M = `${P}`;
  let O;
  e[7] !== M ? (O = { "--ui-color-picker-pad-input-hue": M }, e[7] = M, e[8] = O) : O = e[8];
  const N = O;
  let U;
  e[9] !== d ? (U = ar({ rootClass: "ui-color-picker-pad-input", stylexStyles: Bb1(), className: d }), e[9] = d, e[10] = U) : U = e[10];
  const j = U;
  let $;
  e[11] === /* @__PURE__ */ Symbol.for("react.memo_cache_sentinel") ? ($ = gn($b1()), e[11] = $) : $ = e[11];
  const H = $;
  let G;
  e[12] !== i || e[13] !== T || e[14] !== n ? (G = ar({ rootClass: "ui-color-picker-pad-input__field-swatch", stylexStyles: [Hb1(), !n && O2e.fieldSwatchNone], style: n ? { backgroundColor: i === "hex6" ? _6e(T) : jwn(T) } : void 0 }), e[12] = i, e[13] = T, e[14] = n, e[15] = G) : G = e[15];
  const q = G;
  let K;
  e[16] !== N ? (K = ar({ rootClass: "ui-color-picker-pad-input__surface", stylexStyles: Gb1(), style: N }), e[16] = N, e[17] = K) : K = e[17];
  const V = K;
  let Y;
  e[18] !== A.s || e[19] !== A.v || e[20] !== T ? (Y = ar({ rootClass: "ui-color-picker-pad-input__thumb", stylexStyles: qb1(), style: { left: `${A.s * 100}%`, top: `${(1 - A.v) * 100}%`, backgroundColor: _6e(T) } }), e[18] = A.s, e[19] = A.v, e[20] = T, e[21] = Y) : Y = e[21];
  const J = Y;
  let Q;
  e[22] === /* @__PURE__ */ Symbol.for("react.memo_cache_sentinel") ? (Q = gn(zb1()), e[22] = Q) : Q = e[22];
  const te = Q;
  let ee, re;
  e[23] !== i || e[24] !== n ? (ee = () => {
    k(Qjr(n, i));
  }, re = [n, i], e[23] = i, e[24] = n, e[25] = ee, e[26] = re) : (ee = e[25], re = e[26]), y0p(ee, re);
  let ie, oe;
  e[27] !== f ? (ie = () => {
    f && y(false);
  }, oe = [f], e[27] = f, e[28] = ie, e[29] = oe) : (ie = e[28], oe = e[29]), y0p(ie, oe);
  let se;
  e[30] !== i || e[31] !== c || e[32] !== n ? (se = (St) => {
    if (St === null) {
      k(Qjr(n, i));
      return;
    }
    k(St), St !== n && c(St);
  }, e[30] = i, e[31] = c, e[32] = n, e[33] = se) : se = e[33];
  const le = se;
  let ce;
  e[34] !== le || e[35] !== i ? (ce = (St) => le(YSp(St, i)), e[34] = le, e[35] = i, e[36] = ce) : ce = e[36];
  const ae = ce;
  let de;
  e[37] !== ae || e[38] !== T.a ? (de = (St, Et, kt) => {
    ae(QSp({ h: St, s: Et, v: kt }, T.a));
  }, e[37] = ae, e[38] = T.a, e[39] = de) : de = e[39];
  const he = de;
  let ge;
  e[40] !== he || e[41] !== A.h ? (ge = (St, Et) => {
    const kt = _.current;
    if (!kt) return;
    const xt = kt.getBoundingClientRect();
    if (xt.width === 0 || xt.height === 0) return;
    const Pt = Math.min(1, Math.max(0, (St - xt.left) / xt.width)), Dt = Math.min(1, Math.max(0, 1 - (Et - xt.top) / xt.height));
    he(A.h, Pt, Dt);
  }, e[40] = he, e[41] = A.h, e[42] = ge) : ge = e[42];
  const pe = ge;
  let ve;
  e[43] !== f || e[44] !== pe ? (ve = (St) => {
    f || (St.preventDefault(), St.currentTarget.setPointerCapture(St.pointerId), pe(St.clientX, St.clientY));
  }, e[43] = f, e[44] = pe, e[45] = ve) : ve = e[45];
  const fe = ve;
  let Te;
  e[46] !== f || e[47] !== pe ? (Te = (St) => {
    f || (St.buttons & 1) === 0 && !St.currentTarget.hasPointerCapture(St.pointerId) || pe(St.clientX, St.clientY);
  }, e[46] = f, e[47] = pe, e[48] = Te) : Te = e[48];
  const _e = Te, Ce = Kb1;
  let Se;
  e[49] !== i || e[50] !== n ? (Se = Qjr(n, i), e[49] = i, e[50] = n, e[51] = Se) : Se = e[51];
  const Pe = S !== Se, we = j.className, Ie = j.style, Me = f || void 0;
  let De;
  e[52] === /* @__PURE__ */ Symbol.for("react.memo_cache_sentinel") ? (De = Ub1(), e[52] = De) : De = e[52];
  let Ne;
  e[53] !== o ? (Ne = [De, o], e[53] = o, e[54] = Ne) : Ne = e[54];
  let be;
  e[55] !== q.className || e[56] !== q.style ? (be = Xhe(_d.Span, { className: H.className, children: Xhe("span", { "aria-hidden": "true", className: q.className, style: q.style }) }), e[55] = q.className, e[56] = q.style, e[57] = be) : be = e[57];
  let je;
  e[58] !== le || e[59] !== S || e[60] !== i || e[61] !== Pe ? (je = () => {
    Pe && le(I0p(S, i));
  }, e[58] = le, e[59] = S, e[60] = i, e[61] = Pe, e[62] = je) : je = e[62];
  let $e;
  e[63] !== i || e[64] !== c ? ($e = (St) => {
    const Et = Qjr(St.target.value, i);
    k(Et);
    const kt = E0p(Et, i);
    kt !== null && c(kt);
  }, e[63] = i, e[64] = c, e[65] = $e) : $e = e[65];
  let Je;
  e[66] !== le || e[67] !== S || e[68] !== i || e[69] !== Pe ? (Je = (St) => {
    St.key === "Enter" && (St.preventDefault(), Pe && le(I0p(S, i)));
  }, e[66] = le, e[67] = S, e[68] = i, e[69] = Pe, e[70] = Je) : Je = e[70];
  let Ge;
  e[71] === /* @__PURE__ */ Symbol.for("react.memo_cache_sentinel") ? (Ge = jb1(), e[71] = Ge) : Ge = e[71];
  let xe;
  e[72] !== i ? (xe = !x_i(i) && O2e.fieldInputAsTyped, e[72] = i, e[73] = xe) : xe = e[73];
  let Oe;
  e[74] !== a || e[75] !== xe ? (Oe = [Ge, xe, a], e[74] = a, e[75] = xe, e[76] = Oe) : Oe = e[76];
  let ct;
  e[77] !== h || e[78] !== p || e[79] !== f || e[80] !== S || e[81] !== l || e[82] !== je || e[83] !== $e || e[84] !== Je || e[85] !== Oe ? (ct = Xhe(_d.Input, { "aria-label": h, "aria-labelledby": p, disabled: f, onBlur: je, onChange: $e, onKeyDown: Je, placeholder: l, rootStyle: Oe, spellCheck: false, value: S }), e[77] = h, e[78] = p, e[79] = f, e[80] = S, e[81] = l, e[82] = je, e[83] = $e, e[84] = Je, e[85] = Oe, e[86] = ct) : ct = e[86];
  let Ye;
  e[87] !== f || e[88] !== g || e[89] !== Ne || e[90] !== be || e[91] !== ct || e[92] !== s ? (Ye = n0n(_d.Root, { disabled: f, rootStyle: Ne, size: g, variant: s, children: [be, ct] }), e[87] = f, e[88] = g, e[89] = Ne, e[90] = be, e[91] = ct, e[92] = s, e[93] = Ye) : Ye = e[93];
  let Ve;
  e[94] !== j.className || e[95] !== j.style || e[96] !== Me || e[97] !== Ye ? (Ve = Xhe("div", { className: we, style: Ie, "data-disabled": Me, role: "group", tabIndex: -1, children: Ye }), e[94] = j.className, e[95] = j.style, e[96] = Me, e[97] = Ye, e[98] = Ve) : Ve = e[98];
  const Xe = Ve;
  let lt;
  e[99] !== f ? (lt = (St) => {
    f || y(St);
  }, e[99] = f, e[100] = lt) : lt = e[100];
  const He = b && !f;
  let gt;
  e[101] !== f || e[102] !== Xe ? (gt = f ? Xe : Xhe(yA.Trigger, { nativeButton: false, render: Xe }), e[101] = f, e[102] = Xe, e[103] = gt) : gt = e[103];
  let ht;
  e[104] === /* @__PURE__ */ Symbol.for("react.memo_cache_sentinel") ? (ht = Wb1(), e[104] = ht) : ht = e[104];
  let Ae;
  e[105] !== J.className || e[106] !== J.style ? (Ae = Xhe("div", { className: J.className, style: J.style }), e[105] = J.className, e[106] = J.style, e[107] = Ae) : Ae = e[107];
  let ot;
  e[108] !== fe || e[109] !== _e || e[110] !== V.className || e[111] !== V.style || e[112] !== Ae ? (ot = Xhe("div", { ref: _, "aria-hidden": "true", className: V.className, style: V.style, onPointerDown: fe, onPointerMove: _e, onPointerUp: Ce, children: Ae }), e[108] = fe, e[109] = _e, e[110] = V.className, e[111] = V.style, e[112] = Ae, e[113] = ot) : ot = e[113];
  const Be = h ? `${h} hue` : void 0, Ue = h ? void 0 : p;
  let it, qe;
  e[114] !== he || e[115] !== A.s || e[116] !== A.v ? (it = (St) => {
    he(St, A.s, A.v);
  }, qe = (St) => {
    he(St, A.s, A.v);
  }, e[114] = he, e[115] = A.s, e[116] = A.v, e[117] = it, e[118] = qe) : (it = e[117], qe = e[118]);
  const pt = A.s * 100;
  let dt;
  e[119] !== f || e[120] !== A.h || e[121] !== Be || e[122] !== Ue || e[123] !== it || e[124] !== qe || e[125] !== pt ? (dt = Xhe(JRa, { "aria-label": Be, "aria-labelledby": Ue, className: te.className, disabled: f, hue: A.h, onChange: it, onCommit: qe, saturation: pt, showSwatch: false, width: "100%" }), e[119] = f, e[120] = A.h, e[121] = Be, e[122] = Ue, e[123] = it, e[124] = qe, e[125] = pt, e[126] = dt) : dt = e[126];
  let ft;
  e[127] !== ot || e[128] !== dt ? (ft = n0n(yA.Popup, { initialFocus: false, offset: 6, placement: "bottom-start", surfaceStyle: ht, children: [ot, dt] }), e[127] = ot, e[128] = dt, e[129] = ft) : ft = e[129];
  let bt;
  return e[130] !== lt || e[131] !== He || e[132] !== gt || e[133] !== ft ? (bt = n0n(yA.Root, { onOpenChange: lt, open: He, children: [gt, ft] }), e[130] = lt, e[131] = He, e[132] = gt, e[133] = ft, e[134] = bt) : bt = e[134], bt;
}
function Kb1(t) {
  t.currentTarget.hasPointerCapture(t.pointerId) && t.currentTarget.releasePointerCapture(t.pointerId);
}
var R0p, e2a, P0p, M0p, D0p, N0p, L0p, O2e, t2a, O0p, F0p, n2a, Jjr, e$r, i2a, r2a, r0n, 
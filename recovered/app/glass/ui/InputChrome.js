// @recovered-by cursor-re
// artifact: app/out/vs/workbench/workbench.glass.main.js sha256:6eb88cb60fce5bf5df2ee401f797d5e160b0bcb5d85c25e57d2576b467edce81
// module: InputChrome.js range:14643565..14655907
// basis: inferred
// confidence: C
// method: split
// run: main 2026-11-05T10:03:45.751Z
y4h = L({ "InputChrome.js"() {
  "use strict";
  E(), n5r(), qu(), mpi = { base: { kMeerF: "ui-1k57tk5", k3XXqK: "ui-1t137rt", kInvED: "ui-1wfwxd8", kjBf7l: "ui-1uczgqu", kUk6DE: "ui-98rzlu", k7Eaqz: "ui-euugli", kEafiO: "ui-972fbf", kPef9Z: "ui-1ejq31n", ke9TFa: "ui-10w94by", k8ry5P: "ui-18oe1m7", kt9PQ7: "ui-1qhh985", kfdmCh: "ui-1sy0etr", k2ei4v: "ui-14e42zd", kVhnKS: "ui-stzfhl", kWkggS: "ui-jbqb8w", kMwMTN: "ui-1wd3ewq", kMv6JI: "ui-jb2p0i", kGuDYH: "ui-11wthnw", kLWn49: "ui-1ja60sm", kb6lSQ: "ui-12oo3zp", k8Qsv1: "ui-19ovir5", $$css: true }, disabled: { kkrTdU: "ui-1h6gzvc", k8Qsv1: "ui-ompknl", $$css: true }, mono: { kMv6JI: "ui-ul7cyv", $$css: true }, monoInput: { kGuDYH: "ui-pr5cyi", $$css: true } };
} });
import { jsx as n0e } from "./react-runtime/react/esm-jsx-runtime-production.js";
import { c as VUt } from "./react-runtime/react/esm-compiler-runtime-production.js";
import { createContext as B1S, useContext as U1S, useRef as j1S, useState as $1S, useLayoutEffect as H1S } from "./react-runtime/react/esm-index-production.js";
function KUt(t) {
  const e = U1S(Vma);
  if (!e) throw new Error(`${t} must be used within InputGroup.Root`);
  return e;
}
function W1S() {
  return KUt("InputGroup.useContext");
}
function G1S() {
  return typeof CSS < "u" && typeof CSS.supports == "function" && CSS.supports("field-sizing", "content");
}
function S4h(t) {
  const e = VUt(35), { variant: n, frame: i, size: r, shape: s, layout: o, mono: a, disabled: l, rootStyle: c, className: u, children: d } = t, h = n === void 0 ? "default" : n, p = i === void 0 ? "container" : i, g = r === void 0 ? "lg" : r, f = s === void 0 ? "rounded" : s, _ = o === void 0 ? "default" : o, b = a === void 0 ? false : a, y = l === void 0 ? false : l, S = _4h(), k = y || S?.disabled === true, C = k4h[g], T = _ === "textarea" ? rae.layoutTextarea : null, I = _ === "textarea" ? w4h[g] : null, A = C4h[p], P = T4h[h], M = h === "unfilled" ? rae.variantUnfilledSize : null, O = E4h[f], N = k ? rae.disabled : null;
  let U;
  e[0] !== u || e[1] !== c || e[2] !== I || e[3] !== A || e[4] !== P || e[5] !== M || e[6] !== O || e[7] !== N || e[8] !== C || e[9] !== T ? (U = ar({ rootClass: "ui-input-group", stylexStyles: [rae.base, C, T, I, A, P, M, O, N, c], className: u }), e[0] = u, e[1] = c, e[2] = I, e[3] = A, e[4] = P, e[5] = M, e[6] = O, e[7] = N, e[8] = C, e[9] = T, e[10] = U) : U = e[10];
  const j = U;
  let $;
  e[11] !== k || e[12] !== _ || e[13] !== b ? ($ = { disabled: k, layout: _, mono: b }, e[11] = k, e[12] = _, e[13] = b, e[14] = $) : $ = e[14];
  const H = I4h[g], G = x4h[g], q = A4h[g], K = k || void 0, V = f !== "rounded" ? f : void 0, Y = _ === "textarea" ? "textarea" : void 0, J = b || void 0, Q = k || void 0;
  let te;
  e[15] !== d || e[16] !== p || e[17] !== j.className || e[18] !== j.style || e[19] !== g || e[20] !== V || e[21] !== Y || e[22] !== J || e[23] !== Q || e[24] !== h ? (te = n0e("div", { className: j.className, style: j.style, "data-variant": h, "data-frame": p, "data-size": g, "data-shape": V, "data-layout": Y, "data-mono": J, "data-disabled": Q, children: d }), e[15] = d, e[16] = p, e[17] = j.className, e[18] = j.style, e[19] = g, e[20] = V, e[21] = Y, e[22] = J, e[23] = Q, e[24] = h, e[25] = te) : te = e[25];
  let ee;
  e[26] !== H || e[27] !== G || e[28] !== q || e[29] !== K || e[30] !== te ? (ee = n0e(NC, { iconSize: H, iconButtonSize: G, buttonSize: q, disabled: K, children: te }), e[26] = H, e[27] = G, e[28] = q, e[29] = K, e[30] = te, e[31] = ee) : ee = e[31];
  let re;
  return e[32] !== $ || e[33] !== ee ? (re = n0e(Vma.Provider, { value: $, children: ee }), e[32] = $, e[33] = ee, e[34] = re) : re = e[34], re;
}
function q1S(t) {
  const e = VUt(17);
  let n, i, r, s, o, a;
  e[0] !== t ? ({ className: n, disabled: i, ref: s, rootStyle: o, style: a, ...r } = t, e[0] = t, e[1] = n, e[2] = i, e[3] = r, e[4] = s, e[5] = o, e[6] = a) : (n = e[1], i = e[2], r = e[3], s = e[4], o = e[5], a = e[6]);
  const l = KUt("InputGroup.Input"), c = l.disabled || i === true;
  let u;
  e[7] !== l.mono || e[8] !== o ? (u = n0e(b4h, { mono: l.mono, rootStyle: o }), e[7] = l.mono, e[8] = o, e[9] = u) : u = e[9];
  let d;
  return e[10] !== n || e[11] !== c || e[12] !== r || e[13] !== s || e[14] !== a || e[15] !== u ? (d = n0e(Wma, { ...r, className: n, disabled: c, ref: s, render: u, style: a }), e[10] = n, e[11] = c, e[12] = r, e[13] = s, e[14] = a, e[15] = u, e[16] = d) : d = e[16], d;
}
function z1S(t) {
  const e = VUt(67);
  let n, i, r, s, o, a, l, c, u, d, h, p, g, f, _, b, y, S;
  e[0] !== t ? ({ className: n, disabled: i, ref: h, rootStyle: p, style: f, onKeyDown: c, onInput: l, onFocus: a, onBlur: o, minRows: _, maxRows: s, autoResize: b, collapseToSingleLineWhenBlurred: y, rows: g, value: S, placeholder: u, focusedPlaceholder: r, ...d } = t, e[0] = t, e[1] = n, e[2] = i, e[3] = r, e[4] = s, e[5] = o, e[6] = a, e[7] = l, e[8] = c, e[9] = u, e[10] = d, e[11] = h, e[12] = p, e[13] = g, e[14] = f, e[15] = _, e[16] = b, e[17] = y, e[18] = S) : (n = e[1], i = e[2], r = e[3], s = e[4], o = e[5], a = e[6], l = e[7], c = e[8], u = e[9], d = e[10], h = e[11], p = e[12], g = e[13], f = e[14], _ = e[15], b = e[16], y = e[17], S = e[18]);
  const k = _ === void 0 ? 1 : _, C = b === void 0 ? true : b, T = y === void 0 ? false : y, I = KUt("InputGroup.Textarea"), A = I.disabled || i === true, P = k < 1 ? 1 : k, M = s === void 0 ? void 0 : s < P ? P : s, O = C && !T, N = Math.min(Math.max(g ?? P, P), M ?? Number.POSITIVE_INFINITY), U = A ? Z1t.disabled : null, j = I.mono ? Z1t.mono : null, $ = T ? Z1t.collapseBlur : null, H = O ? Z1t.autoSizeContent : null, G = O && M !== void 0 ? Z1t.autoSizeContentMaxRows : null;
  let q;
  e[19] !== n || e[20] !== N || e[21] !== M || e[22] !== p || e[23] !== O || e[24] !== f || e[25] !== U || e[26] !== j || e[27] !== $ || e[28] !== H || e[29] !== G ? (q = ar({ rootClass: "ui-input-group__textarea", stylexStyles: [Z1t.field, U, j, $, H, G, O ? Z1t.autoSizeRows(N, M ?? N) : null, p], className: n, style: f }), e[19] = n, e[20] = N, e[21] = M, e[22] = p, e[23] = O, e[24] = f, e[25] = U, e[26] = j, e[27] = $, e[28] = H, e[29] = G, e[30] = q) : q = e[30];
  const K = q, V = j1S(null);
  let Y;
  e[31] !== h ? (Y = [V, h], e[31] = h, e[32] = Y) : Y = e[32];
  const J = c6(Y), [Q, te] = $1S(false);
  let ee;
  e[33] !== C || e[34] !== M || e[35] !== P || e[36] !== g || e[37] !== O ? (ee = () => {
    if (!C) return;
    const Ce = V.current;
    if (!Ce || O && Ce.style.height === "" && G1S()) return;
    if (M === P && (g === void 0 || g === P)) {
      Ce.style.height = "", Ce.style.overflowY = "auto";
      return;
    }
    Ce.style.height = "auto";
    const Se = window.getComputedStyle(Ce), Pe = Number.parseFloat(Se.lineHeight), we = Number.parseFloat(Se.paddingTop) || 0, Ie = Number.parseFloat(Se.paddingBottom) || 0, Me = Number.parseFloat(Se.borderTopWidth) || 0, De = Number.parseFloat(Se.borderBottomWidth) || 0, Ne = we + Ie + Me + De, be = Number.isFinite(Pe) && Pe > 0 ? Ne + Pe * P : 0, je = M !== void 0 && Number.isFinite(Pe) && Pe > 0 ? Ne + Pe * M : void 0, $e = Math.max(Ce.scrollHeight, be), Je = je !== void 0 ? Math.min($e, je) : $e;
    Ce.style.height = `${Je}px`, Ce.style.overflowY = je !== void 0 && Ce.scrollHeight > je ? "auto" : "hidden";
  }, e[33] = C, e[34] = M, e[35] = P, e[36] = g, e[37] = O, e[38] = ee) : ee = e[38];
  const re = ee;
  let ie;
  e[39] !== re ? (ie = () => {
    re();
  }, e[39] = re, e[40] = ie) : ie = e[40];
  let oe;
  e[41] !== re || e[42] !== S ? (oe = [S, re], e[41] = re, e[42] = S, e[43] = oe) : oe = e[43], H1S(ie, oe);
  let se;
  e[44] !== c ? (se = (Ce) => {
    c?.(Ce), !Ce.defaultPrevented && t5r(Ce);
  }, e[44] = c, e[45] = se) : se = e[45];
  const le = se;
  let ce;
  e[46] !== l || e[47] !== re ? (ce = (Ce) => {
    l?.(Ce), Ce.defaultPrevented || re();
  }, e[46] = l, e[47] = re, e[48] = ce) : ce = e[48];
  const ae = ce;
  let de;
  e[49] !== a ? (de = (Ce) => {
    te(true), a?.(Ce);
  }, e[49] = a, e[50] = de) : de = e[50];
  const he = de;
  let ge;
  e[51] !== o ? (ge = (Ce) => {
    te(false), o?.(Ce);
  }, e[51] = o, e[52] = ge) : ge = e[52];
  const pe = ge, ve = g ?? P, fe = Q && r !== void 0 ? r : u, Te = T ? "" : void 0;
  let _e;
  return e[53] !== A || e[54] !== fe || e[55] !== pe || e[56] !== he || e[57] !== ae || e[58] !== le || e[59] !== J || e[60] !== d || e[61] !== ve || e[62] !== Te || e[63] !== K.className || e[64] !== K.style || e[65] !== S ? (_e = n0e("textarea", { ref: J, className: K.className, style: K.style, disabled: A, onKeyDown: le, rows: ve, value: S, placeholder: fe, ...d, "data-textarea-collapse-blur": Te, onInput: ae, onFocus: he, onBlur: pe }), e[53] = A, e[54] = fe, e[55] = pe, e[56] = he, e[57] = ae, e[58] = le, e[59] = J, e[60] = d, e[61] = ve, e[62] = Te, e[63] = K.className, e[64] = K.style, e[65] = S, e[66] = _e) : _e = e[66], _e;
}
function V1S(t) {
  const e = VUt(16);
  let n, i, r, s;
  e[0] !== t ? ({ addonStyle: n, className: i, ref: s, ...r } = t, e[0] = t, e[1] = n, e[2] = i, e[3] = r, e[4] = s) : (n = e[1], i = e[2], r = e[3], s = e[4]);
  const a = KUt("InputGroup.Icon").layout === "textarea" ? YUt.textareaLayout : null;
  let l;
  e[5] !== n || e[6] !== i || e[7] !== a ? (l = ar({ rootClass: "ui-input-group__addon", stylexStyles: [YUt.base, a, n], className: i }), e[5] = n, e[6] = i, e[7] = a, e[8] = l) : l = e[8];
  const c = l;
  let u;
  e[9] !== r || e[10] !== s ? (u = n0e(zt, { ref: s, ...r }), e[9] = r, e[10] = s, e[11] = u) : u = e[11];
  let d;
  return e[12] !== c.className || e[13] !== c.style || e[14] !== u ? (d = n0e("span", { className: c.className, style: c.style, children: u }), e[12] = c.className, e[13] = c.style, e[14] = u, e[15] = d) : d = e[15], d;
}
function K1S(t) {
  const e = VUt(18);
  let n, i, r, s, o;
  e[0] !== t ? ({ addonStyle: n, className: i, disabled: r, ref: o, ...s } = t, e[0] = t, e[1] = n, e[2] = i, e[3] = r, e[4] = s, e[5] = o) : (n = e[1], i = e[2], r = e[3], s = e[4], o = e[5]);
  const a = KUt("InputGroup.IconButton"), l = a.disabled ? true : r, c = a.layout === "textarea" ? YUt.textareaLayout : null;
  let u;
  e[6] !== n || e[7] !== i || e[8] !== c ? (u = ar({ rootClass: "ui-input-group__addon", stylexStyles: [YUt.base, c, n], className: i }), e[6] = n, e[7] = i, e[8] = c, e[9] = u) : u = e[9];
  const d = u;
  let h;
  e[10] !== l || e[11] !== s || e[12] !== o ? (h = n0e(ho, { ref: o, disabled: l, ...s }), e[10] = l, e[11] = s, e[12] = o, e[13] = h) : h = e[13];
  let p;
  return e[14] !== d.className || e[15] !== d.style || e[16] !== h ? (p = n0e("span", { className: d.className, style: d.style, children: h }), e[14] = d.className, e[15] = d.style, e[16] = h, e[17] = p) : p = e[17], p;
}
function Y1S(t) {
  const e = VUt(18);
  let n, i, r, s, o;
  e[0] !== t ? ({ addonStyle: n, className: i, disabled: r, ref: o, ...s } = t, e[0] = t, e[1] = n, e[2] = i, e[3] = r, e[4] = s, e[5] = o) : (n = e[1], i = e[2], r = e[3], s = e[4], o = e[5]);
  const a = KUt("InputGroup.Button"), l = a.disabled ? true : r, c = a.layout === "textarea" ? YUt.textareaLayout : null;
  let u;
  e[6] !== n || e[7] !== i || e[8] !== c ? (u = ar({ rootClass: "ui-input-group__addon", stylexStyles: [YUt.base, c, n], className: i }), e[6] = n, e[7] = i, e[8] = c, e[9] = u) : u = e[9];
  const d = u;
  let h;
  e[10] !== l || e[11] !== s || e[12] !== o ? (h = n0e(An, { ref: o, disabled: l, ...s }), e[10] = l, e[11] = s, e[12] = o, e[13] = h) : h = e[13];
  let p;
  return e[14] !== d.className || e[15] !== d.style || e[16] !== h ? (p = n0e("span", { className: d.className, style: d.style, children: h }), e[14] = d.className, e[15] = d.style, e[16] = h, e[17] = p) : p = e[17], p;
}
function X1S(t) {
  const e = VUt(7), { className: n, children: i } = t, s = KUt("InputGroup.Span").mono ? zma.mono : null;
  let o;
  e[0] !== n || e[1] !== s ? (o = ar({ rootClass: "ui-input-group__span", stylexStyles: [zma.base, s], className: n }), e[0] = n, e[1] = s, e[2] = o) : o = e[2];
  const a = o;
  let l;
  return e[3] !== i || e[4] !== a.className || e[5] !== a.style ? (l = n0e("span", { className: a.className, style: a.style, children: i }), e[3] = i, e[4] = a.className, e[5] = a.style, e[6] = l) : l = e[6], l;
}
var rae, Z1t, YUt, zma, k4h, w4h, C4h, T4h, E4h, Vma, I4h, x4h, A4h, _d, 
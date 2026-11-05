// @recovered-by cursor-re
// artifact: app/out/vs/workbench/workbench.glass.main.js sha256:6eb88cb60fce5bf5df2ee401f797d5e160b0bcb5d85c25e57d2576b467edce81
// module: PaletteContext.js range:18056250..18065534
// basis: inferred
// confidence: C
// method: split
// run: main 2026-11-05T10:03:45.851Z
mTp = L({ "PaletteContext.js"() {
  "use strict";
  E(), iPa(), dTp = 10, hTp = 32, pTp = 48, oPa = rPa(void 0), aPa = rPa(void 0), o11 = rPa({ isKeyboardNav: false, setIsKeyboardNav: () => {
  }, navigateByDelta: () => {
  } }), lPa = "data-value";
} });
import { jsx as f6, jsxs as O_i } from "./react-runtime/react/esm-jsx-runtime-production.js";
import { c as Nwt } from "./react-runtime/react/esm-compiler-runtime-production.js";
import { createContext as a11, forwardRef as S$r, useSyncExternalStore as l11, useLayoutEffect as p0n, useRef as cPa, useCallback as Lwt, useId as uPa, useContext as c11 } from "./react-runtime/react/esm-index-production.js";
function u11() {
  return gTp.base;
}
function d11() {
  return k$r.root;
}
function h11() {
  return k$r.viewport;
}
function p11() {
  return w$r.wrapper;
}
function m11() {
  return w$r.icon;
}
function g11() {
  return [Ent.root, OIr.root, w$r.input];
}
function f11() {
  return C$r.root;
}
function v11() {
  return C$r.viewport;
}
function _11() {
  return C$r.sizer;
}
function b11({ disabled: t, hoverEnabled: e, lines: n, selected: i }) {
  return [Ent.root, kHt.root, n === 1 ? kHt.lines1 : kHt.lines2, e ? kHt.hoverEnabled : null, i ? kHt.selected : null, t ? kHt.disabled : null];
}
function y11(t = false) {
  return [Ent.root, F_i.root, t ? F_i.rootHidden : null];
}
function S11() {
  return F_i.items;
}
function k11() {
  return F_i.heading;
}
function w11() {
  return vTp.root;
}
function C11() {
  return _Tp.root;
}
function T11() {
  return bTp.root;
}
function E11(t) {
  const e = Nwt(39), { children: n, filter: i, shouldFilter: r, title: s, value: o, onValueChange: a, search: l, onSearchChange: c, open: u, defaultOpen: d, onOpenChange: h, contentStyle: p, surfaceStyle: g, style: f, onKeyDown: _, onMouseMove: b, modal: y, onAnimationComplete: S, onOpenChangeComplete: k } = t, C = r === void 0 ? true : r, T = s === void 0 ? "Command palette" : s, I = y === void 0 ? true : y;
  let A;
  e[0] !== S || e[1] !== k ? (A = (Y) => {
    k?.(Y), S?.();
  }, e[0] = S, e[1] = k, e[2] = A) : A = e[2];
  const P = A;
  let M;
  e[3] !== I ? (M = I ? f6(obe.Backdrop, { render: f6("div", { className: "ui-dialog-backdrop ui-palette-backdrop" }) }) : null, e[3] = I, e[4] = M) : M = e[4];
  let O;
  e[5] === /* @__PURE__ */ Symbol.for("react.memo_cache_sentinel") ? (O = h11(), e[5] = O) : O = e[5];
  let N;
  e[6] === /* @__PURE__ */ Symbol.for("react.memo_cache_sentinel") ? (N = ri("ui-dialog", "ui-palette-dialog"), e[6] = N) : N = e[6];
  let U;
  e[7] !== f ? (U = f6("div", { className: N, style: f }), e[7] = f, e[8] = U) : U = e[8];
  let j;
  e[9] === /* @__PURE__ */ Symbol.for("react.memo_cache_sentinel") ? (j = d11(), e[9] = j) : j = e[9];
  const $ = !I && k$r.noBackdropHold;
  let H;
  e[10] !== g || e[11] !== $ ? (H = [j, $, g], e[10] = g, e[11] = $, e[12] = H) : H = e[12];
  let G;
  e[13] !== n || e[14] !== p || e[15] !== i || e[16] !== _ || e[17] !== b || e[18] !== c || e[19] !== a || e[20] !== l || e[21] !== C || e[22] !== o ? (G = f6(hPa, { filter: i, shouldFilter: C, value: o, onValueChange: a, search: l, onSearchChange: c, onKeyDown: _, onMouseMove: b, stylexStyles: p, children: n }), e[13] = n, e[14] = p, e[15] = i, e[16] = _, e[17] = b, e[18] = c, e[19] = a, e[20] = l, e[21] = C, e[22] = o, e[23] = G) : G = e[23];
  let q;
  e[24] !== H || e[25] !== G || e[26] !== U || e[27] !== T ? (q = f6(obe.Viewport, { stylexStyles: O, children: f6(obe.Popup, { "aria-label": T, "data-ui-dialog-root": "", render: U, size: "xxl", stylexStyles: H, children: G }) }), e[24] = H, e[25] = G, e[26] = U, e[27] = T, e[28] = q) : q = e[28];
  let K;
  e[29] !== q || e[30] !== M ? (K = O_i(obe.Portal, { children: [M, q] }), e[29] = q, e[30] = M, e[31] = K) : K = e[31];
  let V;
  return e[32] !== d || e[33] !== P || e[34] !== I || e[35] !== h || e[36] !== u || e[37] !== K ? (V = f6(obe.Root, { open: u, defaultOpen: d, onOpenChange: h, onOpenChangeComplete: P, modal: I, children: K }), e[32] = d, e[33] = P, e[34] = I, e[35] = h, e[36] = u, e[37] = K, e[38] = V) : V = e[38], V;
}
function I11(t) {
  const e = Nwt(4), { value: n } = t, { store: i } = SHt("Palette.Root");
  let r, s;
  return e[0] !== i || e[1] !== n ? (r = () => {
    i.setState("search", n);
  }, s = [n, i], e[0] = i, e[1] = n, e[2] = r, e[3] = s) : (r = e[2], s = e[3]), p0n(r, s), null;
}
function x11(t) {
  const e = Nwt(45), { heading: n, children: i, forceMount: r, disabled: s, isLoading: o } = t, a = s === void 0 ? false : s, l = o === void 0 ? false : o, c = uPa(), u = uPa(), { registerGroup: d, shouldFilter: h, notifyGroupLoading: p, notifyGroupForceMount: g } = SHt("Palette.Section"), f = !a && l, _ = !a && !!r;
  let b, y;
  e[0] !== c || e[1] !== d ? (b = () => d(c), y = [c, d], e[0] = c, e[1] = d, e[2] = b, e[3] = y) : (b = e[2], y = e[3]), p0n(b, y);
  let S, k;
  e[4] !== f || e[5] !== c || e[6] !== p ? (S = () => (p(c, f), () => p(c, false)), k = [c, f, p], e[4] = f, e[5] = c, e[6] = p, e[7] = S, e[8] = k) : (S = e[7], k = e[8]), p0n(S, k);
  let C, T;
  e[9] !== _ || e[10] !== c || e[11] !== g ? (C = () => (g(c, _), () => g(c, false)), T = [c, _, g], e[9] = _, e[10] = c, e[11] = g, e[12] = C, e[13] = T) : (C = e[12], T = e[13]), p0n(C, T);
  let I;
  e[14] !== a || e[15] !== _ || e[16] !== c || e[17] !== h ? (I = (ie) => a ? false : _ || !h() || !ie.search ? true : ie.filtered.groups.has(c), e[14] = a, e[15] = _, e[16] = c, e[17] = h, e[18] = I) : I = e[18];
  const A = cst(I, "Palette.Section"), P = f || A;
  let M;
  e[19] !== r || e[20] !== c ? (M = { id: c, forceMount: r }, e[19] = r, e[20] = c, e[21] = M) : M = e[21];
  const O = M;
  let N;
  e[22] !== P ? (N = ar({ rootClass: "ui-palette-section", stylexStyles: y11(!P) }), e[22] = P, e[23] = N) : N = e[23];
  const U = N;
  let j;
  e[24] === /* @__PURE__ */ Symbol.for("react.memo_cache_sentinel") ? (j = gn(k11()), e[24] = j) : j = e[24];
  const $ = j;
  let H;
  e[25] === /* @__PURE__ */ Symbol.for("react.memo_cache_sentinel") ? (H = gn(S11()), e[25] = H) : H = e[25];
  const G = H, q = f || void 0, K = !P, V = !P || void 0;
  let Y;
  e[26] !== f || e[27] !== n || e[28] !== u ? (Y = n && O_i("div", { id: u, "cmdk-group-heading": "", className: $.className, style: $.style, "aria-hidden": f ? void 0 : true, "aria-live": f ? "polite" : void 0, role: f ? "status" : void 0, children: [f6("span", { children: n }), f ? f6(Yg, { indeterminate: true, "aria-label": "Loading", size: "xs", variant: "ring" }) : null] }), e[26] = f, e[27] = n, e[28] = u, e[29] = Y) : Y = e[29];
  const J = n ? u : void 0, Q = a ? null : i;
  let te;
  e[30] !== J || e[31] !== Q ? (te = f6("div", { className: G.className, style: G.style, "cmdk-group-items": "", role: "group", "aria-labelledby": J, children: Q }), e[30] = J, e[31] = Q, e[32] = te) : te = e[32];
  let ee;
  e[33] !== U.className || e[34] !== U.style || e[35] !== n || e[36] !== q || e[37] !== K || e[38] !== V || e[39] !== Y || e[40] !== te ? (ee = O_i("div", { className: U.className, style: U.style, "cmdk-group": "", role: "presentation", "data-loading": q, "data-value": n, hidden: K, "aria-hidden": V, children: [Y, te] }), e[33] = U.className, e[34] = U.style, e[35] = n, e[36] = q, e[37] = K, e[38] = V, e[39] = Y, e[40] = te, e[41] = ee) : ee = e[41];
  let re;
  return e[42] !== O || e[43] !== ee ? (re = f6(aPa.Provider, { value: O, children: ee }), e[42] = O, e[43] = ee, e[44] = re) : re = e[44], re;
}
function A11(t) {
  const e = Nwt(3), { children: n } = t, i = cst(R11, "Palette.Empty");
  let r;
  e[0] === /* @__PURE__ */ Symbol.for("react.memo_cache_sentinel") ? (r = ar({ rootClass: "ui-palette-empty", stylexStyles: w11() }), e[0] = r) : r = e[0];
  const s = r;
  if (!i) return null;
  let o;
  return e[1] !== n ? (o = f6("div", { className: s.className, style: s.style, "cmdk-empty": "", role: "presentation", children: n }), e[1] = n, e[2] = o) : o = e[2], o;
}
function R11(t) {
  return t.orderedItemIds.length === 0;
}
function P11(t) {
  const e = Nwt(2), { alwaysRender: n } = t, i = cst(M11, "Palette.Separator");
  let r;
  e[0] === /* @__PURE__ */ Symbol.for("react.memo_cache_sentinel") ? (r = ar({ rootClass: "ui-palette-separator", stylexStyles: C11() }), e[0] = r) : r = e[0];
  const s = r;
  if (!n && i) return null;
  let o;
  return e[1] === /* @__PURE__ */ Symbol.for("react.memo_cache_sentinel") ? (o = f6("hr", { className: s.className, style: s.style, "cmdk-separator": "" }), e[1] = o) : o = e[1], o;
}
function M11(t) {
  return !!t.search;
}
function D11(t) {
  const e = Nwt(6), { children: n } = t, i = typeof n == "string" ? n : void 0;
  let r;
  e[0] === /* @__PURE__ */ Symbol.for("react.memo_cache_sentinel") ? (r = ar({ rootClass: "ui-palette-shortcut", stylexStyles: T11() }), e[0] = r) : r = e[0];
  const s = r;
  let o;
  e[1] !== n || e[2] !== i ? (o = i !== void 0 ? f6(pit, { shortcut: i, size: "sm" }) : n, e[1] = n, e[2] = i, e[3] = o) : o = e[3];
  let a;
  return e[4] !== o ? (a = f6("span", { className: s.className, style: s.style, children: o }), e[4] = o, e[5] = a) : a = e[5], a;
}
function N11() {
  return cst(L11, "usePaletteSelectedValue");
}
function L11(t) {
  return t.value;
}
var dPa, gTp, fTp, k$r, w$r, C$r, kHt, F_i, vTp, _Tp, bTp, hPa, yTp, STp, kTp, Xu, 
// @recovered-by cursor-re
// artifact: app/out/vs/workbench/workbench.glass.main.js sha256:6eb88cb60fce5bf5df2ee401f797d5e160b0bcb5d85c25e57d2576b467edce81
// module: SidebarNavigationContext.js range:14850258..14858673
// basis: inferred
// confidence: C
// method: split
// run: main 2026-11-05T10:03:46.007Z
t8h = L({ "SidebarNavigationContext.js"() {
  "use strict";
  E(), npa(), pfa = XBh(null), mfa = XBh(null);
} });
import { jsx as r0e, jsxs as H5r } from "./react-runtime/react/esm-jsx-runtime-production.js";
import { c as W5r } from "./react-runtime/react/esm-compiler-runtime-production.js";
import { createContext as mCS, useContext as gCS, useRef as fCS, useId as vCS, cloneElement as _CS } from "./react-runtime/react/esm-index-production.js";
function n8h(t) {
  const e = gCS(bfa);
  if (!e) throw new Error(`${t} must be used within Sidebar.Section`);
  return e;
}
function bCS(t) {
  return typeof t == "object" && "element" in t;
}
function gfa(t) {
  const e = W5r(22);
  let n, i, r, s, o, a;
  e[0] !== t ? ({ children: n, className: i, expanded: r, onExpandedChange: s, ref: o, ...a } = t, e[0] = t, e[1] = n, e[2] = i, e[3] = r, e[4] = s, e[5] = o, e[6] = a) : (n = e[1], i = e[2], r = e[3], s = e[4], o = e[5], a = e[6]);
  let l;
  e[7] !== r || e[8] !== s ? (l = { expanded: r, onExpandedChange: s }, e[7] = r, e[8] = s, e[9] = l) : l = e[9];
  const c = l;
  let u;
  e[10] !== i ? (u = ar({ rootClass: "ui-sidebar-section", stylexStyles: X0S(), className: i }), e[10] = i, e[11] = u) : u = e[11];
  const d = u, h = r || void 0;
  let p;
  e[12] !== n || e[13] !== c ? (p = r0e(bfa.Provider, { value: c, children: n }), e[12] = n, e[13] = c, e[14] = p) : p = e[14];
  let g;
  return e[15] !== o || e[16] !== d.className || e[17] !== d.style || e[18] !== a || e[19] !== h || e[20] !== p ? (g = r0e("section", { ref: o, className: d.className, style: d.style, "data-expanded": h, ...a, children: p }), e[15] = o, e[16] = d.className, e[17] = d.style, e[18] = a, e[19] = h, e[20] = p, e[21] = g) : g = e[21], g;
}
function ffa(t) {
  const e = W5r(53), { actions: n, actionsClassName: i, className: r, icon: s, onClick: o, onKeyDown: a, onMouseDown: l, ref: c, subtitle: u, title: d, trailingBand: h, ...p } = t, g = h === void 0 ? "default" : h, { expanded: f, onExpandedChange: _ } = n8h("Sidebar.SectionHead"), b = K3(), y = !!n;
  let S;
  e[0] !== u ? (S = u?.trim(), e[0] = u, e[1] = S) : S = e[1];
  const k = S, C = k !== void 0 && k.length > 0, T = fCS(null), I = vCS(), A = afa(p), M = p["aria-label"] !== void 0 || p["aria-labelledby"] !== void 0 ? void 0 : I;
  let O;
  e[2] !== f || e[3] !== o || e[4] !== _ ? (O = (V) => {
    _?.(!f), o?.(V);
  }, e[2] = f, e[3] = o, e[4] = _, e[5] = O) : O = e[5];
  const N = O;
  let U;
  e[6] !== f || e[7] !== _ || e[8] !== a ? (U = (V) => {
    !lfa(V, T) && (V.key === "Enter" || V.key === " ") && (V.preventDefault(), _?.(!f)), a?.(V);
  }, e[6] = f, e[7] = _, e[8] = a, e[9] = U) : U = e[9];
  const j = U;
  let $;
  e[10] !== l ? ($ = (V) => {
    l?.(V), qBh(V, T);
  }, e[10] = l, e[11] = $) : $ = e[11];
  const H = $;
  let G;
  e[12] !== c ? (G = [T, c], e[12] = c, e[13] = G) : G = e[13];
  const q = c6(G);
  let K;
  if (e[14] !== n || e[15] !== i || e[16] !== r || e[17] !== b || e[18] !== f || e[19] !== N || e[20] !== j || e[21] !== H || e[22] !== y || e[23] !== C || e[24] !== s || e[25] !== I || e[26] !== M || e[27] !== q || e[28] !== A.control || e[29] !== A.row || e[30] !== d || e[31] !== g || e[32] !== k) {
    const V = gn(U_e.marker, U_e.root, ckt.marker), Y = gn(i8h, U_e.trigger), J = gn(U_e.iconWrapper, ckt.iconWrapper), Q = gn(ckt.icon, ckt.iconSwapHidden), te = gn(ckt.leadingFoldIcon, b === "rtl" && RIr.root), ee = gn(U_e.content, ckt.content), re = gn(U_e.label, ujt.text, ckt.label), ie = gn(ujt.title), oe = gn(ujt.inlineSubtitle), se = gn(U_e.end, g === "collection" ? U_e.endCollection : null), le = gn(U_e.actions, g === "collection" ? U_e.actionsCollection : null), ce = A.row, ae = ri("ui-button ui-sidebar-menu-button ui-sidebar-section-head", V.className, r), de = V.style, he = ri("ui-sidebar-menu-button-trigger", Y.className), ge = Y.style, pe = A.control, ve = ri("ui-sidebar-menu-button-icon-wrapper", J.className), fe = J.style, Te = bCS(s) ? _CS(s.element, { "aria-hidden": true, className: ri("ui-sidebar-section-head-icon", Q.className, s.element.props.className) }) : r0e(zt, { name: typeof s == "string" ? s : f ? s.expanded : s.folded, "aria-hidden": "true", className: ri("ui-sidebar-section-head-icon", Q.className), style: Q.style }), _e = ri("ui-sidebar-section-head-leading-fold-icon", te.className);
    let Ce;
    e[34] !== te || e[35] !== _e ? (Ce = r0e(zt, { name: "chevron-down", "aria-hidden": "true", className: _e, style: te.style }), e[34] = te, e[35] = _e, e[36] = Ce) : Ce = e[36];
    let Se;
    e[37] !== Te || e[38] !== Ce ? (Se = H5r("div", { className: ve, style: fe, children: [Te, Ce] }), e[37] = Te, e[38] = Ce, e[39] = Se) : Se = e[39];
    let Pe;
    e[40] !== d ? (Pe = r0e("span", { className: ri("ui-sidebar-label-row-title", ie.className), style: ie.style, children: d }), e[40] = d, e[41] = Pe) : Pe = e[41];
    const we = C ? r0e("span", { className: ri("ui-sidebar-label-row-inline-subtitle", oe.className), style: oe.style, children: k }) : null;
    let Ie;
    e[42] !== I || e[43] !== Pe || e[44] !== we ? (Ie = r0e("div", { className: ri("ui-sidebar-menu-button-content", ee.className), style: ee.style, children: H5r(nn, { id: I, size: "md", className: ri("ui-sidebar-menu-button-label", "ui-sidebar-label-row-text", re.className), style: re.style, children: [Pe, we] }) }), e[42] = I, e[43] = Pe, e[44] = we, e[45] = Ie) : Ie = e[45];
    let Me;
    e[46] !== f || e[47] !== M || e[48] !== q || e[49] !== A.control || e[50] !== Se || e[51] !== Ie ? (Me = H5r("div", { ref: q, role: "button", tabIndex: 0, "aria-expanded": f, "aria-labelledby": M, className: he, style: ge, "data-sidebar-row-trigger": "", ...pe, children: [Se, Ie] }), e[46] = f, e[47] = M, e[48] = q, e[49] = A.control, e[50] = Se, e[51] = Ie, e[52] = Me) : Me = e[52], K = H5r("div", { ...ce, className: ae, style: de, "data-sidebar-menu-button": "", "data-variant": "ghost", "data-section-head": "", "data-section-expanded": f || void 0, "data-has-actions": y || void 0, "data-trailing-band": g === "default" ? void 0 : g, onClick: N, onKeyDown: j, onMouseDown: H, children: [Me, n ? r0e("div", { className: ri("ui-sidebar-menu-button-end", se.className), style: se.style, children: r0e("div", { className: ri("ui-sidebar-menu-button-actions", le.className, i), style: le.style, role: "presentation", onClick: SCS, onKeyDown: yCS, children: r0e(NC, { buttonRootStyle: U_e.actionsControl, iconButtonIconSize: O5r, iconButtonRootStyle: U_e.actionsControl, iconButtonSize: "sm", iconButtonVariant: "text", children: n }) }) }) : null] }), e[14] = n, e[15] = i, e[16] = r, e[17] = b, e[18] = f, e[19] = N, e[20] = j, e[21] = H, e[22] = y, e[23] = C, e[24] = s, e[25] = I, e[26] = M, e[27] = q, e[28] = A.control, e[29] = A.row, e[30] = d, e[31] = g, e[32] = k, e[33] = K;
  } else K = e[33];
  return K;
}
function yCS(t) {
  return t.stopPropagation();
}
function SCS(t) {
  return t.stopPropagation();
}
function vfa(t) {
  const e = W5r(29);
  let n, i, r, s;
  e[0] !== t ? ({ children: n, className: i, ref: s, ...r } = t, e[0] = t, e[1] = n, e[2] = i, e[3] = r, e[4] = s) : (n = e[1], i = e[2], r = e[3], s = e[4]);
  const { expanded: o } = n8h("Sidebar.SectionContent");
  let a, l, c, u, d, h, p;
  e[5] !== i || e[6] !== r || e[7] !== o || e[8] !== s ? (l = gn(Z0S()), a = ISn, u = r, d = s, e[16] !== i ? (h = ri("ui-sidebar-section-content-clip", i), e[16] = i, e[17] = h) : h = e[17], p = o, c = ri("ui-sidebar-section-content", l.className), e[5] = i, e[6] = r, e[7] = o, e[8] = s, e[9] = a, e[10] = l, e[11] = c, e[12] = u, e[13] = d, e[14] = h, e[15] = p) : (a = e[9], l = e[10], c = e[11], u = e[12], d = e[13], h = e[14], p = e[15]);
  let g;
  e[18] !== n || e[19] !== l.style || e[20] !== c ? (g = r0e("div", { className: c, style: l.style, children: n }), e[18] = n, e[19] = l.style, e[20] = c, e[21] = g) : g = e[21];
  let f;
  return e[22] !== a || e[23] !== u || e[24] !== d || e[25] !== h || e[26] !== p || e[27] !== g ? (f = r0e(a, { ...u, ref: d, className: h, expanded: p, children: g }), e[22] = a, e[23] = u, e[24] = d, e[25] = h, e[26] = p, e[27] = g, e[28] = f) : f = e[28], f;
}
function _fa(t) {
  const e = W5r(2), { children: n } = t;
  let i;
  return e[0] !== n ? (i = r0e("div", { className: "ui-78zum5 ui-dt5ytf ui-euugli ui-rbi8q3", "data-sidebar-nested-rows": "", children: n }), e[0] = n, e[1] = i) : i = e[1], i;
}
var i8h, bfa, 
// @recovered-by cursor-re
// artifact: app/out/vs/workbench/workbench.glass.main.js sha256:6eb88cb60fce5bf5df2ee401f797d5e160b0bcb5d85c25e57d2576b467edce81
// module: OverflowFade.js range:14860151..14863955
// basis: inferred
// confidence: C
// method: split
// run: main 2026-11-05T10:03:45.845Z
Sfa = L({ "OverflowFade.js"() {
  "use strict";
  E(), Va(), o8h = { root: { "--overflow-fade-direction": "ui-1af040w ui-sltljf", k1xSpc: "ui-1lliihq", k7Eaqz: "ui-euugli", kXHlph: "ui-6ikm8r", kORKVm: "ui-10wlt62", khDVqt: "ui-uxw1ft", kX1K2I: "ui-1lfn0t3", $$css: true } }, yfa = /* @__PURE__ */ new WeakMap();
} });
import { jsx as o0, jsxs as d2e } from "./react-runtime/react/esm-jsx-runtime-production.js";
import { c as sae } from "./react-runtime/react/esm-compiler-runtime-production.js";
import { createContext as TCS, useContext as ECS, forwardRef as s0e, useState as G5r, useRef as q5r, useEffect as ICS, useId as djt } from "./react-runtime/react/esm-index-production.js";
function a8h() {
  return ECS(wfa);
}
function kfa(t, e) {
  if (t === void 0) return e;
  if (typeof t == "number") return t;
  const n = parseFloat(t);
  return Number.isNaN(n) ? e : n;
}
function xCS(t) {
  const e = sae(8), { side: n, currentWidth: i, onMouseDown: r } = t;
  let s, o;
  e[0] !== n ? (s = gn(U5r.root, n === "left" ? U5r.sideLeft : U5r.sideRight), o = ri("ui-sidebar-resize-handle", s.className), e[0] = n, e[1] = s, e[2] = o) : (s = e[1], o = e[2]);
  let a;
  return e[3] !== i || e[4] !== s.style || e[5] !== r || e[6] !== o ? (a = o0("div", { className: o, style: s.style, onMouseDown: r, role: "separator", tabIndex: 0, "aria-orientation": "vertical", "aria-valuenow": i, "aria-label": "Resize sidebar" }), e[3] = i, e[4] = s.style, e[5] = r, e[6] = o, e[7] = a) : a = e[7], a;
}
function l8h(t) {
  const e = sae(26);
  let n, i, r, s, o, a;
  if (e[0] !== t) {
    const { envIcon: h, envLabel: p, isActive: g, variant: f, className: _, ref: b, ...y } = t;
    i = h, r = p, a = f, n = _, o = b, s = y, e[0] = t, e[1] = n, e[2] = i, e[3] = r, e[4] = s, e[5] = o, e[6] = a;
  } else n = e[1], i = e[2], r = e[3], s = e[4], o = e[5], a = e[6];
  if (!i) return null;
  const l = a === "inline" ? cjt.inlineInMenuButton : cjt.trailingInMenuButton;
  let c;
  e[7] !== n || e[8] !== l ? (c = ar({ rootClass: "ui-sidebar-environment-indicator", stylexStyles: [cjt.root, l], className: n }), e[7] = n, e[8] = l, e[9] = c) : c = e[9];
  const u = c;
  let d;
  if (e[10] !== i || e[11] !== r || e[12] !== s || e[13] !== o || e[14] !== u.className || e[15] !== u.style || e[16] !== a) {
    const h = gn(cjt.iconWrap), p = gn(cjt.icon), g = gn(cjt.label), f = u.className, _ = u.style, b = ri("ui-sidebar-environment-indicator__icon-wrap", h.className), y = h.style, S = ri("ui-sidebar-environment-indicator__icon", p.className);
    let k;
    e[18] !== i || e[19] !== p || e[20] !== S ? (k = o0(zt, { className: S, style: p.style, color: "tertiary", name: i }), e[18] = i, e[19] = p, e[20] = S, e[21] = k) : k = e[21];
    let C;
    e[22] !== h || e[23] !== b || e[24] !== k ? (C = o0("span", { className: b, style: y, children: k }), e[22] = h, e[23] = b, e[24] = k, e[25] = C) : C = e[25], d = d2e("span", { ref: o, className: f, style: _, "data-variant": a, ...s, children: [C, r ? o0("span", { className: ri("ui-sidebar-environment-indicator__label", g.className), style: g.style, children: r }) : null] }), e[10] = i, e[11] = r, e[12] = s, e[13] = o, e[14] = u.className, e[15] = u.style, e[16] = a, e[17] = d;
  } else d = e[17];
  return d;
}
function c8h() {
  const t = sae(1);
  let e;
  if (t[0] === /* @__PURE__ */ Symbol.for("react.memo_cache_sentinel")) {
    const n = gn(Q0S());
    e = o0(BFe, { className: ri("ui-sidebar-separator", n.className) }), t[0] = e;
  } else e = t[0];
  return e;
}
function ACS(t) {
  return t.stopPropagation();
}
function RCS(t) {
  return t.stopPropagation();
}
function PCS(t) {
  return t.stopPropagation();
}
function MCS(t) {
  return t.stopPropagation();
}
var u8h, wfa, z5r, Cfa, Tfa, Efa, Ifa, xfa, Dpi, ASn, Npi, ukt, qWe, Fhe, Afa, d8h, 
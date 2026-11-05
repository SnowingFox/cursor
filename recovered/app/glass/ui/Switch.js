// @recovered-by cursor-re
// artifact: app/out/vs/workbench/workbench.glass.main.js sha256:6eb88cb60fce5bf5df2ee401f797d5e160b0bcb5d85c25e57d2576b467edce81
// module: Switch.js range:14595483..14599923
// basis: inferred
// confidence: C
// method: split
// run: main 2026-11-05T10:03:46.035Z
qUt = L({ "Switch.js"() {
  "use strict";
  E(), Va(), VSS(), zSS(), GSS(), Sma = { root: { kVAEAm: "ui-1n2onr6", k1xSpc: "ui-3nfvp2", kGNEyG: "ui-6s0dn4", kB7OPa: "ui-9f619", kmuXW: "ui-2lah0s", kaIpWk: "ui-1i4c3av", kMeerF: "ui-1k57tk5 ui-x510wv", k3XXqK: "ui-1t137rt ui-15veape", kjBf7l: "ui-1uczgqu ui-1whe2fk", kInvED: "ui-1wfwxd8 ui-1edn9mt", kWkggS: "ui-59yu97 ui-fewc5l ui-dc3jbj", k1ekBW: "ui-15406qy", kIyJzY: "ui-7pq1vu", kAMwcw: "ui-6ekqhr", $$css: true }, sm: { kzqmXN: "ui-23j0i4", kZKoxP: "ui-1vatr1o", "--ui-switch-thumb-travel": "ui-sc32xf", $$css: true }, regular: { kzqmXN: "ui-1849jeq", kZKoxP: "ui-mix8c7", "--ui-switch-thumb-travel": "ui-9pb0k7", kWkggS: "ui-3dhcaw ui-fewc5l ui-dc3jbj", kGVxlE: "ui-1gnnqk1 ui-10yfhlr", $$css: true }, md: { kzqmXN: "ui-1td3qas", kZKoxP: "ui-1a6rlst", "--ui-switch-thumb-travel": "ui-9pb0k7", $$css: true }, lg: { kzqmXN: "ui-1guw455", kZKoxP: "ui-1e94bgo", "--ui-switch-thumb-travel": "ui-1c3f5sz", $$css: true } }, U6h = { primary: { "--ui-switch-active-bg": "ui-i0s8m6", $$css: true }, green: { "--ui-switch-active-bg": "ui-1g3p0vo", $$css: true }, neutral: { "--ui-switch-active-bg": "ui-742exl", $$css: true }, monochrome: { "--ui-switch-active-bg": "ui-1iuey4n", "--ui-switch-thumb-bg": "ui-1bbrhsv", $$css: true } };
} });
import { jsx as $Or, jsxs as j6h } from "./react-runtime/react/esm-jsx-runtime-production.js";
import { c as $6h } from "./react-runtime/react/esm-compiler-runtime-production.js";
import { isValidElement as KSS } from "./react-runtime/react/esm-index-production.js";
function YSS(t) {
  return KSS(t) && t.type === vSn;
}
function kma(t) {
  let e = false;
  return { preventDefault: () => {
    e = true;
  }, get defaultPrevented() {
    return e;
  }, nativeEvent: t };
}
function t0e(t) {
  const e = $6h(21), { children: n, leading: i, trailing: r, description: s } = t, o = s != null;
  let a;
  e[0] !== o || e[1] !== i ? (a = i != null ? $Or("span", { "data-component": "menu-item-left", ...gn(Mea, o && U2r), children: i }) : null, e[0] = o, e[1] = i, e[2] = a) : a = e[2];
  let l;
  e[3] !== o ? (l = gn(pch, o && lpi.rowTextWithDescription), e[3] = o, e[4] = l) : l = e[4];
  let c;
  e[5] !== n ? (c = $Or("span", { "data-component": "menu-item-label", className: "ui-1lliihq ui-193iq5w ui-b3r6kr ui-lyipyv ui-uxw1ft ui-1n2onr6 ui-1vjfegm ui-1ja60sm", children: n }), e[5] = n, e[6] = c) : c = e[6];
  let u;
  e[7] !== s || e[8] !== o ? (u = o ? $Or("span", { "data-component": "menu-item-description", ...gn(lpi.rowDescription, Gj.root), children: s }) : null, e[7] = s, e[8] = o, e[9] = u) : u = e[9];
  let d;
  e[10] !== l || e[11] !== c || e[12] !== u ? (d = j6h("div", { "data-component": "menu-item-content", ...l, children: [c, u] }), e[10] = l, e[11] = c, e[12] = u, e[13] = d) : d = e[13];
  let h;
  e[14] !== o || e[15] !== r ? (h = r != null ? $Or("span", { "data-component": "menu-item-right", ...gn(mch, B2r, lpi.itemRight, YSS(r) && lpi.itemRightSwitch, o && U2r), children: r }) : null, e[14] = o, e[15] = r, e[16] = h) : h = e[16];
  let p;
  return e[17] !== a || e[18] !== d || e[19] !== h ? (p = j6h(NC, { iconSize: "base", children: [a, d, h] }), e[17] = a, e[18] = d, e[19] = h, e[20] = p) : p = e[20], p;
}
function api(t, e) {
  const n = $6h(16);
  let i;
  n[0] !== e ? (i = e === void 0 ? {} : e, n[0] = e, n[1] = i) : i = n[1];
  const r = i, { onAuxClick: s, onAuxClickCapture: o, onMouseDown: a } = r, { allowActivation: l } = z1t(t);
  let c;
  n[2] !== l || n[3] !== a ? (c = (_) => {
    if (!l(_.currentTarget.ownerDocument)) {
      _.preventDefault(), _.stopPropagation();
      return;
    }
    a?.(_);
  }, n[2] = l, n[3] = a, n[4] = c) : c = n[4];
  const u = c;
  let d;
  n[5] !== l || n[6] !== s ? (d = (_) => {
    if (!l(_.currentTarget.ownerDocument)) {
      _.preventDefault(), _.stopPropagation();
      return;
    }
    s?.(_);
  }, n[5] = l, n[6] = s, n[7] = d) : d = n[7];
  const h = d;
  let p;
  n[8] !== l || n[9] !== o ? (p = (_) => {
    if (!l(_.currentTarget.ownerDocument)) {
      _.preventDefault(), _.stopPropagation();
      return;
    }
    o?.(_);
  }, n[8] = l, n[9] = o, n[10] = p) : p = n[10];
  const g = p;
  let f;
  return n[11] !== l || n[12] !== h || n[13] !== g || n[14] !== u ? (f = { allowActivation: l, handleAuxClick: h, handleAuxClickCapture: g, handleMouseDown: u }, n[11] = l, n[12] = h, n[13] = g, n[14] = u, n[15] = f) : f = n[15], f;
}
var lpi, K1t, 
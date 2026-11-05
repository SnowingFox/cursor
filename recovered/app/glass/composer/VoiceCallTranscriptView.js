// @recovered-by cursor-re
// artifact: app/out/vs/workbench/workbench.glass.main.js sha256:6eb88cb60fce5bf5df2ee401f797d5e160b0bcb5d85c25e57d2576b467edce81
// module: VoiceCallTranscriptView.js range:17758657..17763423
// basis: esbuild-wrapper + inferred
// confidence: C
// method: split
// run: glass-composer 2026-11-05T10:19:48.876Z
// deps: E, AO, ukp, MSp
// wrapper-init: Vg1
// hoisted-owner: empty-state.js (app-out-vs-workbench-workbench-glass-main-js:3027); trailing declarations ownership inferred from segment adjacency
// path: null (no unique nls candidate; inferred only)
// renamed: none

Vg1 = L({ "VoiceCallTranscriptView.js"() {
  "use strict";
  E(), AO(), ukp(), MSp(), mkp = new Intl.DateTimeFormat(void 0, { month: "short", day: "numeric", year: "numeric", hour: "numeric", minute: "2-digit", hour12: true }), iRa = Ug1(void 0), rRa = /* @__PURE__ */ new WeakMap();
} });
import { jsx as Gz, jsxs as sRa } from "./react-runtime/react/esm-jsx-runtime-production.js";
import { c as ist } from "./react-runtime/react/esm-compiler-runtime-production.js";
function gkp(t) {
  const e = ist(2), { children: n } = t;
  let i;
  return e[0] !== n ? (i = Gz("div", { "data-component": "empty-state-root", className: "ui-98rzlu ui-5yr21d ui-2lwn1j ui-euugli ui-78zum5 ui-dt5ytf ui-6s0dn4 ui-l56j7k ui-1rea2x4 ui-j2grvh ui-mw8u6f ui-9f619 ui-2b8uid ui-1oot3zn", children: n }), e[0] = n, e[1] = i) : i = e[1], i;
}
function fkp(t) {
  const e = ist(5), { children: n, variant: i } = t, r = i === void 0 ? "default" : i;
  let s;
  e[0] === /* @__PURE__ */ Symbol.for("react.memo_cache_sentinel") ? (s = { 0: { className: "ui-1pwdyn5 ui-1vatr1o ui-2lah0s ui-78zum5 ui-6s0dn4 ui-l56j7k ui-1lbmi28" }, 1: { className: "ui-2lah0s ui-78zum5 ui-6s0dn4 ui-l56j7k ui-1lbmi28 ui-1niwmkg ui-f2gx5w ui-9f619 ui-mkeg23 ui-1y0btm7 ui-qz0629 ui-1m7fhj7" } }, e[0] = s) : s = e[0];
  const o = s[(r === "tab") << 0];
  let a;
  return e[1] !== n || e[2] !== o || e[3] !== r ? (a = Gz("div", { "data-component": "empty-state-icon", "data-variant": r, ...o, children: n }), e[1] = n, e[2] = o, e[3] = r, e[4] = a) : a = e[4], a;
}
function vkp(t) {
  const e = ist(2), { children: n } = t;
  let i;
  return e[0] !== n ? (i = Gz("div", { "data-component": "empty-state-header", className: "ui-h8yej3 ui-euugli ui-78zum5 ui-dt5ytf ui-6s0dn4 ui-137clkk", children: n }), e[0] = n, e[1] = i) : i = e[1], i;
}
function _kp(t) {
  const e = ist(2), { children: n } = t;
  let i;
  return e[0] !== n ? (i = Gz(nn, { as: "p", color: "primary", "data-component": "empty-state-title", rootStyle: Pjr.text, size: "md", weight: "medium", children: n }), e[0] = n, e[1] = i) : i = e[1], i;
}
function bkp(t) {
  const e = ist(2), { children: n } = t;
  let i;
  return e[0] !== n ? (i = Gz(nn, { as: "p", color: "secondary", "data-component": "empty-state-description", rootStyle: Pjr.text, size: "md", weight: "regular", children: n }), e[0] = n, e[1] = i) : i = e[1], i;
}
function ykp(t) {
  const e = ist(2), { children: n } = t;
  let i;
  return e[0] !== n ? (i = Gz("div", { "data-component": "empty-state-content", className: "ui-78zum5 ui-6s0dn4 ui-l56j7k ui-1a02dak ui-ehausa", children: n }), e[0] = n, e[1] = i) : i = e[1], i;
}
function Kg1(t) {
  const e = ist(19), { body: n, cta: i, icon: r, iconVariant: s, title: o } = t, a = s === void 0 ? "default" : s, l = typeof r == "string" ? r : void 0;
  let c;
  e[0] !== r || e[1] !== l ? (c = l !== void 0 ? Gz(zt, { color: "tertiary", name: l, size: "lg" }) : r, e[0] = r, e[1] = l, e[2] = c) : c = e[2];
  const u = c;
  let d;
  e[3] !== a || e[4] !== u ? (d = u === void 0 ? null : Gz(fkp, { variant: a, children: u }), e[3] = a, e[4] = u, e[5] = d) : d = e[5];
  let h;
  e[6] !== o ? (h = o === void 0 ? null : Gz(_kp, { children: o }), e[6] = o, e[7] = h) : h = e[7];
  let p;
  e[8] !== n ? (p = Gz(bkp, { children: n }), e[8] = n, e[9] = p) : p = e[9];
  let g;
  e[10] !== h || e[11] !== p ? (g = sRa(vkp, { children: [h, p] }), e[10] = h, e[11] = p, e[12] = g) : g = e[12];
  let f;
  e[13] !== i ? (f = i === void 0 ? null : Gz(ykp, { children: Gz(An, { disabled: i.disabled, onClick: i.onClick, size: "md", variant: "outline", children: i.label }) }), e[13] = i, e[14] = f) : f = e[14];
  let _;
  return e[15] !== d || e[16] !== g || e[17] !== f ? (_ = sRa(gkp, { children: [d, g, f] }), e[15] = d, e[16] = g, e[17] = f, e[18] = _) : _ = e[18], _;
}
function Yg1(t) {
  const e = ist(2);
  let n;
  return e[0] !== t ? (n = Gz(UW.Root, { "data-component": "empty-state-card", rootStyle: Pjr.card, children: Gz(_p, { ...t }) }), e[0] = t, e[1] = n) : n = e[1], n;
}
function rX(t) {
  const e = ist(8), { ariaLabel: n, label: i } = t, r = n ?? i;
  let s;
  e[0] === /* @__PURE__ */ Symbol.for("react.memo_cache_sentinel") ? (s = Gz(Oz, { indeterminate: true, size: 16 }), e[0] = s) : s = e[0];
  let o;
  e[1] !== r ? (o = Gz(_p.Icon, { children: Gz("span", { "aria-label": r, "aria-live": "polite", role: "status", children: s }) }), e[1] = r, e[2] = o) : o = e[2];
  let a;
  e[3] !== i ? (a = i === void 0 ? null : Gz(_p.Header, { children: Gz(_p.Description, { children: Gz("span", { "aria-hidden": "true", children: i }) }) }), e[3] = i, e[4] = a) : a = e[4];
  let l;
  return e[5] !== o || e[6] !== a ? (l = sRa(_p.Root, { children: [o, a] }), e[5] = o, e[6] = a, e[7] = l) : l = e[7], l;
}
var Pjr, _p, 
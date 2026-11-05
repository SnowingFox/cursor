// @recovered-by cursor-re
// artifact: app/out/vs/workbench/workbench.glass.main.js sha256:6eb88cb60fce5bf5df2ee401f797d5e160b0bcb5d85c25e57d2576b467edce81
// module: UiStepGroupedSteps.js range:16100252..16104564
// basis: inferred
// confidence: C
// method: split
// run: main 2026-11-05T10:03:46.134Z
var ejS = L({ "UiStepGroupedSteps.js"() {
  "use strict";
  E(), AO(), M_a(), Fnp(), I_a();
} });
import { jsx as e6e } from "./react-runtime/react/esm-jsx-runtime-production.js";
import { c as t6e } from "./react-runtime/react/esm-compiler-runtime-production.js";
function tjS(t) {
  const e = t6e(2);
  let n;
  return e[0] !== t ? (n = e6e("div", { ...t, "data-component": "breadcrumb-hover-card-content", className: "ui-78zum5 ui-h8yej3 ui-euugli ui-dt5ytf" }), e[0] = t, e[1] = n) : n = e[1], n;
}
function njS(t) {
  const e = t6e(2);
  let n;
  return e[0] !== t ? (n = e6e("div", { ...t, "data-component": "breadcrumb-hover-card-header", className: "ui-78zum5 ui-6s0dn4 ui-6o92jg ui-m52zbw ui-nftvhb ui-5wifs ui-a2o6f3" }), e[0] = t, e[1] = n) : n = e[1], n;
}
function ijS(t) {
  const e = t6e(5), { active: n, children: i } = t, r = n === void 0 ? false : n, s = r ? "primary" : "secondary", o = r ? "medium" : "regular", a = r || void 0;
  let l;
  return e[0] !== i || e[1] !== s || e[2] !== o || e[3] !== a ? (l = e6e(nn, { color: s, weight: o, rootStyle: J9r.tab, "data-active": a, "data-component": "breadcrumb-hover-card-tab", children: i }), e[0] = i, e[1] = s, e[2] = o, e[3] = a, e[4] = l) : l = e[4], l;
}
function rjS(t) {
  const e = t6e(2);
  let n;
  return e[0] !== t ? (n = e6e("div", { ...t, "data-component": "breadcrumb-hover-card-actions", className: "ui-78zum5 ui-6s0dn4 ui-11twubx ui-8x9d4c" }), e[0] = t, e[1] = n) : n = e[1], n;
}
function sjS(t) {
  const e = t6e(8);
  let n, i;
  e[0] !== t ? ({ emphasized: i, ...n } = t, e[0] = t, e[1] = n, e[2] = i) : (n = e[1], i = e[2]);
  const r = i === void 0 ? false : i, s = r || void 0;
  let o;
  e[3] === /* @__PURE__ */ Symbol.for("react.memo_cache_sentinel") ? (o = { 0: { className: "ui-3nfvp2 ui-6s0dn4 ui-l56j7k ui-16bvwqk ui-1a6rlst ui-1i4c3av ui-19aaqeu" }, 1: { className: "ui-3nfvp2 ui-6s0dn4 ui-l56j7k ui-16bvwqk ui-1a6rlst ui-1i4c3av ui-19aaqeu ui-3xjy4b" } }, e[3] = o) : o = e[3];
  const a = o[!!r << 0];
  let l;
  return e[4] !== n || e[5] !== s || e[6] !== a ? (l = e6e("span", { ...n, "data-component": "breadcrumb-hover-card-action", "data-emphasized": s, ...a }), e[4] = n, e[5] = s, e[6] = a, e[7] = l) : l = e[7], l;
}
function ojS(t) {
  const e = t6e(2);
  let n;
  return e[0] !== t ? (n = e6e("div", { ...t, "data-component": "breadcrumb-hover-card-task-list", className: "ui-78zum5 ui-dt5ytf ui-5cdhqx ui-5wifs" }), e[0] = t, e[1] = n) : n = e[1], n;
}
function ajS(t) {
  const e = t6e(8);
  let n, i;
  e[0] !== t ? ({ state: i, ...n } = t, e[0] = t, e[1] = n, e[2] = i) : (n = e[1], i = e[2]);
  const r = i === "completed" || i === "pending";
  let s;
  e[3] === /* @__PURE__ */ Symbol.for("react.memo_cache_sentinel") ? (s = { 0: { className: "ui-78zum5 ui-6s0dn4 ui-pkkfsy ui-13ly8rp ui-1jkygx ui-1xlntvz ui-1o7kk3e ui-euugli" }, 1: { className: "ui-78zum5 ui-6s0dn4 ui-pkkfsy ui-13ly8rp ui-1jkygx ui-1xlntvz ui-1o7kk3e ui-euugli ui-ti2d7y" } }, e[3] = s) : s = e[3];
  const o = s[!!r << 0];
  let a;
  return e[4] !== n || e[5] !== i || e[6] !== o ? (a = e6e("div", { ...n, "data-component": "breadcrumb-hover-card-task-row", "data-state": i, ...o }), e[4] = n, e[5] = i, e[6] = o, e[7] = a) : a = e[7], a;
}
function ljS(t) {
  const e = t6e(2), { children: n } = t;
  let i;
  return e[0] !== n ? (i = e6e(nn, { color: "primary", truncate: true, rootStyle: J9r.taskLabel, "data-component": "breadcrumb-hover-card-task-label", children: n }), e[0] = n, e[1] = i) : i = e[1], i;
}
function cjS(t) {
  const e = t6e(2);
  let n;
  return e[0] !== t ? (n = e6e("div", { "aria-hidden": "true", ...t, "data-component": "breadcrumb-hover-card-separator", className: "ui-jyxbwm ui-h8yej3 ui-8897o3" }), e[0] = t, e[1] = n) : n = e[1], n;
}
function ujS(t) {
  const e = t6e(2);
  let n;
  return e[0] !== t ? (n = e6e("div", { ...t, "data-component": "breadcrumb-hover-card-footer", className: "ui-78zum5 ui-6s0dn4 ui-11twubx ui-oyc9vk ui-1fg0g13 ui-2lprc ui-1tajz9i" }), e[0] = t, e[1] = n) : n = e[1], n;
}
function djS(t) {
  const e = t6e(2), { children: n } = t;
  let i;
  return e[0] !== n ? (i = e6e(nn, { color: "secondary", truncate: true, rootStyle: J9r.footerText, "data-component": "breadcrumb-hover-card-footer-text", children: n }), e[0] = n, e[1] = i) : i = e[1], i;
}
var J9r, Unp, 
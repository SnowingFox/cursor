// @recovered-by cursor-re
// artifact: app/out/vs/workbench/workbench.glass.main.js sha256:6eb88cb60fce5bf5df2ee401f797d5e160b0bcb5d85c25e57d2576b467edce81
// module: TaskToolCallView.js range:15460025..15462347
// basis: esbuild-wrapper + inferred
// confidence: C
// method: split
// run: glass-composer 2026-11-05T10:19:48.876Z
// deps: E, f2, M_a, m2e, HFe, u0e, fd
// wrapper-init: dNS
// hoisted-owner: ToolCallHoverCard.js (app-out-vs-workbench-workbench-glass-main-js:2410); trailing declarations ownership inferred from segment adjacency
// path: null (no unique nls candidate; inferred only)
// renamed: none

dNS = L({ "TaskToolCallView.js"() {
  "use strict";
  E(), f2(), M_a(), m2e(), HFe(), u0e(), fd(), vya = { body: { kEafiO: "ui-178xt8z", kPef9Z: "ui-13fuv20", kLZC3w: "ui-u6elxy", kLKAdn: "ui-uve7l6", kGO01o: "ui-1rgtt3y", $$css: true }, error: { kMwMTN: "ui-1jh5svw", $$css: true } };
} });
import { jsx as jjt } from "./react-runtime/react/esm-jsx-runtime-production.js";
import { c as w6r } from "./react-runtime/react/esm-compiler-runtime-production.js";
function hNS() {
  return Imi.list;
}
function pNS() {
  return Imi.empty;
}
function mNS() {
  return Imi.preview;
}
function $jt(t) {
  const e = w6r(10), { action: n, details: i, loading: r, children: s } = t, o = s != null && !r;
  let a;
  e[0] !== s ? (a = (d) => jjt("div", { children: typeof s == "function" ? s(d) : s }), e[0] = s, e[1] = a) : a = e[1];
  const l = !o;
  let c;
  e[2] !== n || e[3] !== i || e[4] !== r ? (c = jjt("div", { children: jjt(LC, { action: n, details: i, loading: r }) }), e[2] = n, e[3] = i, e[4] = r, e[5] = c) : c = e[5];
  let u;
  return e[6] !== a || e[7] !== l || e[8] !== c ? (u = jjt(mB, { content: a, contentStyle: Imi.cardContent, disabled: l, width: 360, maxHeight: 280, placement: "bottom-start", className: "ui-tool-call-hover-card", children: c }), e[6] = a, e[7] = l, e[8] = c, e[9] = u) : u = e[9], u;
}
function Hjt(t) {
  const e = w6r(3), { children: n } = t;
  let i;
  e[0] === /* @__PURE__ */ Symbol.for("react.memo_cache_sentinel") ? (i = gn(hNS()), e[0] = i) : i = e[0];
  const r = i;
  let s;
  return e[1] !== n ? (s = jjt("div", { className: r.className, style: r.style, children: n }), e[1] = n, e[2] = s) : s = e[2], s;
}
function g0e(t) {
  const e = w6r(3), { children: n } = t;
  let i;
  e[0] === /* @__PURE__ */ Symbol.for("react.memo_cache_sentinel") ? (i = gn(pNS()), e[0] = i) : i = e[0];
  const r = i;
  let s;
  return e[1] !== n ? (s = jjt("div", { className: r.className, style: r.style, children: n }), e[1] = n, e[2] = s) : s = e[2], s;
}
function gNS(t) {
  const e = w6r(3), { children: n } = t;
  let i;
  e[0] === /* @__PURE__ */ Symbol.for("react.memo_cache_sentinel") ? (i = gn(mNS()), e[0] = i) : i = e[0];
  const r = i;
  let s;
  return e[1] !== n ? (s = jjt("div", { className: r.className, style: r.style, children: n }), e[1] = n, e[2] = s) : s = e[2], s;
}
var Imi, 
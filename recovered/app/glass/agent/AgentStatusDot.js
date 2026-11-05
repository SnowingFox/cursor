// @recovered-by cursor-re
// artifact: app/out/vs/workbench/workbench.glass.main.js sha256:6eb88cb60fce5bf5df2ee401f797d5e160b0bcb5d85c25e57d2576b467edce81
// module: AgentStatusDot.js range:15006787..15012778
// basis: inferred
// confidence: C
// method: split
// run: main 2026-11-05T10:03:45.134Z
// fragment: esbuild wrapper body + hoisted tail; may include adjacent declarations; not a standalone module
// deps: tslib.es6.js, attach.js
// path-candidate: none (no nls basename match; path inferred, confidence C)
// fragment: esbuild wrapper body + hoisted tail; may include adjacent declarations; not a standalone module
// deps: tslib.es6.js, attach.js
// path-candidate: none (no nls basename match; path inferred, confidence C)
k$h = L({ "AgentStatusDot.js"() {
  "use strict";
  E(), qu(), S$h = { base: { k1xSpc: "ui-3nfvp2", kGNEyG: "ui-6s0dn4", kjj79g: "ui-l56j7k", kzqmXN: "ui-ek66a6", kZKoxP: "ui-1q5geii", kmuXW: "ui-2lah0s", $$css: true } }, lae = { base: { kIxVMA: "ui-1xgkolo", ksF3WI: "ui-19887o6", kYm2EN: "ui-1qlrwul", kqGeR4: "ui-99hwvi", kmuXW: "ui-2lah0s", kB7OPa: "ui-9f619", $$css: true }, visibleSize: { kzqmXN: "ui-19j8p08", kZKoxP: "ui-1feg4er", $$css: true }, needsAttention: { kWkggS: "ui-1lrqy4w", $$css: true }, error: { kWkggS: "ui-1szgyur", $$css: true }, doneUnseen: { kWkggS: "ui-1nawb4t", $$css: true }, doneSeen: { kWkggS: "ui-101nw62", $$css: true }, draft: { kWkggS: "ui-jbqb8w", kEafiO: "ui-178xt8z", kWqL5O: "ui-s1s249", kt9PQ7: "ui-so031l", kZ1KPB: "ui-e0pwq", kPef9Z: "ui-13fuv20", kSWEuD: "ui-32b0ac", kfdmCh: "ui-1q0q8m5", k4WBpm: "ui-19ypqd9", kLZC3w: "ui-g070e0", k26BEO: "ui-2rjbhi", kL6WhQ: "ui-y5wzia", kaZRDh: "ui-m14zli", $$css: true } };
} });
import { jsx as cae } from "./react-runtime/react/esm-jsx-runtime-production.js";
import { c as BSn } from "./react-runtime/react/esm-compiler-runtime-production.js";
function $IS(t) {
  if (!t) return null;
  const e = t.match(/(\d+)\s*\/\s*(\d+)/);
  if (e) {
    const n = parseInt(e[1], 10), i = parseInt(e[2], 10);
    if (i > 0) return n / i;
  }
  return null;
}
function w$h(t) {
  const e = BSn(9), { size: n } = t, i = n === void 0 ? 14 : n;
  let r, s;
  e[0] === /* @__PURE__ */ Symbol.for("react.memo_cache_sentinel") ? (r = gn(c2e.icon, c2e.draft), s = ri("ui-agent-status-icon ui-agent-status-draft", r.className), e[0] = r, e[1] = s) : (r = e[0], s = e[1]);
  let o;
  e[2] !== i ? (o = { ...r.style, width: i, height: i }, e[2] = i, e[3] = o) : o = e[3];
  let a;
  e[4] !== i ? (a = cae(zt, { name: "circle-dashed", size: i, color: "quaternary" }), e[4] = i, e[5] = a) : a = e[5];
  let l;
  return e[6] !== o || e[7] !== a ? (l = cae("span", { className: s, style: o, role: "img", "aria-label": "Draft", children: a }), e[6] = o, e[7] = a, e[8] = l) : l = e[8], l;
}
function HIS(t) {
  const e = BSn(10), { progress: n, size: i } = t, r = i === void 0 ? 14 : i;
  let s, o;
  e[0] === /* @__PURE__ */ Symbol.for("react.memo_cache_sentinel") ? (s = gn(c2e.icon, c2e.inProgress), o = ri("ui-agent-status-icon ui-agent-status-in-progress", s.className), e[0] = s, e[1] = o) : (s = e[0], o = e[1]);
  const a = s.style;
  let l;
  e[2] !== n ? (l = Math.round(n * 100), e[2] = n, e[3] = l) : l = e[3];
  const c = `${l}% complete`;
  let u;
  e[4] !== n || e[5] !== r ? (u = cae(Oz, { fillStyle: c2e.progressFill, size: r, trackStyle: c2e.progressTrack, value: n }), e[4] = n, e[5] = r, e[6] = u) : u = e[6];
  let d;
  return e[7] !== c || e[8] !== u ? (d = cae("span", { className: o, style: a, role: "img", "aria-label": c, children: u }), e[7] = c, e[8] = u, e[9] = d) : d = e[9], d;
}
function WIS(t) {
  const e = BSn(9), { size: n } = t, i = n === void 0 ? 14 : n;
  let r, s;
  e[0] === /* @__PURE__ */ Symbol.for("react.memo_cache_sentinel") ? (r = gn(c2e.icon, c2e.needsAttention), s = ri("ui-agent-status-icon ui-agent-status-needs-attention", r.className), e[0] = r, e[1] = s) : (r = e[0], s = e[1]);
  let o;
  e[2] !== i ? (o = { ...r.style, width: i, height: i }, e[2] = i, e[3] = o) : o = e[3];
  let a;
  e[4] !== i ? (a = cae(zt, { name: "exclamation-circle", size: i, color: "yellow" }), e[4] = i, e[5] = a) : a = e[5];
  let l;
  return e[6] !== o || e[7] !== a ? (l = cae("span", { className: s, style: o, role: "img", "aria-label": "Needs attention", children: a }), e[6] = o, e[7] = a, e[8] = l) : l = e[8], l;
}
function GIS(t) {
  const e = BSn(7), { size: n } = t, i = n === void 0 ? 14 : n;
  let r, s;
  e[0] === /* @__PURE__ */ Symbol.for("react.memo_cache_sentinel") ? (r = gn(c2e.icon), s = ri("ui-agent-status-icon ui-agent-status-error", r.className), e[0] = r, e[1] = s) : (r = e[0], s = e[1]);
  let o;
  e[2] !== i ? (o = { ...r.style, width: i, height: i }, e[2] = i, e[3] = o) : o = e[3];
  let a;
  e[4] === /* @__PURE__ */ Symbol.for("react.memo_cache_sentinel") ? (a = cae(FSn, { variant: "error" }), e[4] = a) : a = e[4];
  let l;
  return e[5] !== o ? (l = cae("span", { className: s, style: o, role: "img", "aria-label": "Error", children: a }), e[5] = o, e[6] = l) : l = e[6], l;
}
function qIS(t) {
  const e = BSn(9), { size: n } = t, i = n === void 0 ? 14 : n;
  let r, s;
  e[0] === /* @__PURE__ */ Symbol.for("react.memo_cache_sentinel") ? (r = gn(c2e.icon, c2e.done), s = ri("ui-agent-status-icon ui-agent-status-done", r.className), e[0] = r, e[1] = s) : (r = e[0], s = e[1]);
  let o;
  e[2] !== i ? (o = { ...r.style, width: i, height: i }, e[2] = i, e[3] = o) : o = e[3];
  let a;
  e[4] !== i ? (a = cae(zt, { name: "check-circle", size: i, color: "quaternary" }), e[4] = i, e[5] = a) : a = e[5];
  let l;
  return e[6] !== o || e[7] !== a ? (l = cae("span", { className: s, style: o, role: "img", "aria-label": "Done", children: a }), e[6] = o, e[7] = a, e[8] = l) : l = e[8], l;
}
function zIS(t) {
  const e = BSn(13), { status: n, progress: i, size: r } = t, s = r === void 0 ? 14 : r;
  switch (n) {
    case "draft": {
      let o;
      return e[0] !== s ? (o = cae(w$h, { size: s }), e[0] = s, e[1] = o) : o = e[1], o;
    }
    case "in_progress": {
      const o = i ?? 0;
      let a;
      return e[2] !== s || e[3] !== o ? (a = cae(HIS, { progress: o, size: s }), e[2] = s, e[3] = o, e[4] = a) : a = e[4], a;
    }
    case "needs_attention": {
      let o;
      return e[5] !== s ? (o = cae(WIS, { size: s }), e[5] = s, e[6] = o) : o = e[6], o;
    }
    case "error": {
      let o;
      return e[7] !== s ? (o = cae(GIS, { size: s }), e[7] = s, e[8] = o) : o = e[8], o;
    }
    case "done": {
      let o;
      return e[9] !== s ? (o = cae(qIS, { size: s }), e[9] = s, e[10] = o) : o = e[10], o;
    }
    default: {
      let o;
      return e[11] !== s ? (o = cae(w$h, { size: s }), e[11] = s, e[12] = o) : o = e[12], o;
    }
  }
}

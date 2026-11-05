// @recovered-by cursor-re
// artifact: app/out/vs/workbench/workbench.glass.main.js sha256:6eb88cb60fce5bf5df2ee401f797d5e160b0bcb5d85c25e57d2576b467edce81
// module: AgentTranscriptUnreadDivider.js range:15982703..15997028
// basis: esbuild-wrapper + inferred
// confidence: C
// method: split
// run: glass-composer 2026-11-05T10:19:48.876Z
// deps: E, dy
// wrapper-init: pka
// hoisted-owner: AgentTranscriptWorkGroup.js (app-out-vs-workbench-workbench-glass-main-js:2565); trailing declarations ownership inferred from segment adjacency
// path: null (no unique nls candidate; inferred only)
// renamed: none

pka = L({ "AgentTranscriptUnreadDivider.js"() {
  "use strict";
  E(), dy(), hka = 28, ptp = { label: { kmuXW: "ui-2lah0s", $$css: true } };
} });
import { jsx as p6, jsxs as Crt, Fragment as mka } from "./react-runtime/react/esm-jsx-runtime-production.js";
import { c as Vkt } from "./react-runtime/react/esm-compiler-runtime-production.js";
import { useState as Kgi, useRef as mtp, Fragment as Y8S, useLayoutEffect as X8S, useEffect as gtp } from "./react-runtime/react/esm-index-production.js";
function ftp(t) {
  const e = Vkt(65), { row: n, renderRow: i, open: r, onOpenChange: s, loading: o, childrenVirtualized: a, hasRenderableChildren: l } = t, c = a === void 0 ? false : a, u = r !== void 0, [d, h] = Kgi(void 0), [p, g] = Kgi(false), f = mtp(0), _ = uR(), b = u ? r : d ?? n.defaultOpen === true, y = u ? o === true : p;
  let S;
  e[0] !== _ || e[1] !== u || e[2] !== s || e[3] !== n.sourceIds ? (S = (re) => {
    if (_.onBeforeTranscriptDisclosureChange?.(), u) {
      s?.(re);
      return;
    }
    f.current = f.current + 1;
    const ie = f.current;
    if (!re) {
      h(false), g(false);
      return;
    }
    const oe = _.onWorkGroupOpen?.(n.sourceIds);
    if (!oe) {
      h(true);
      return;
    }
    g(true), oe.then(() => {
      f.current === ie && (_.onBeforeTranscriptDisclosureChange?.(), g(false), h(true));
    }, () => {
      f.current === ie && g(false);
    });
  }, e[0] = _, e[1] = u, e[2] = s, e[3] = n.sourceIds, e[4] = S) : S = e[4];
  const k = S;
  let C;
  e[5] === /* @__PURE__ */ Symbol.for("react.memo_cache_sentinel") ? (C = ar({ rootClass: "agent-transcript-work-group", stylexStyles: KFe.root }), e[5] = C) : C = e[5];
  const T = C;
  let I;
  e[6] === /* @__PURE__ */ Symbol.for("react.memo_cache_sentinel") ? (I = ar({ rootClass: "agent-transcript-work-group-content", stylexStyles: KFe.content }), e[6] = I) : I = e[6];
  const A = I;
  let P, M, O, N, U, j, $, H, G, q, K, V, Y, J;
  if (e[7] !== c || e[8] !== k || e[9] !== l || e[10] !== b || e[11] !== y || e[12] !== i || e[13] !== n) {
    const re = n.rows.filter(Z8S), ie = c ? n.rows.length > 0 && (!b || l !== false) : re.length > 0, oe = n.runningTaskCount !== void 0 && n.runningTaskCount > 0, se = n.presentation === "project", le = se && n.state.kind === "active" && "tailStatus" in n ? n.tailStatus : void 0;
    let ce;
    e[28] !== le || e[29] !== oe || e[30] !== se || e[31] !== n.progressStatus || e[32] !== n.projectInitialization || e[33] !== n.runningTaskCount || e[34] !== n.runningTaskStatus || e[35] !== n.state.durationMs ? (ce = se ? p6(Q8S, { count: oe ? n.runningTaskCount : void 0, progressStatus: n.progressStatus, tailStatus: le, runningTaskStatus: n.runningTaskStatus, settledVerb: le !== void 0 || oe ? void 0 : n.projectInitialization === true ? "Initialized project" : "Worked", duration: _tp(n.state.durationMs) }) : void 0, e[28] = le, e[29] = oe, e[30] = se, e[31] = n.progressStatus, e[32] = n.projectInitialization, e[33] = n.runningTaskCount, e[34] = n.runningTaskStatus, e[35] = n.state.durationMs, e[36] = ce) : ce = e[36];
    const ae = ce, de = n.state.kind === "completed" && b && n.state.routedModelLabel !== void 0 && n.state.routedModelLabel.length > 0 ? n.state.routedModelLabel : void 0;
    let he;
    e[37] !== n.state.durationMs || e[38] !== n.state.kind ? (he = n.state.kind === "completed" ? s7S(n.state.durationMs) : void 0, e[37] = n.state.durationMs, e[38] = n.state.kind, e[39] = he) : he = e[39];
    const ge = he;
    let pe;
    e[40] !== ge || e[41] !== oe || e[42] !== de || e[43] !== n.runningTaskStatus || e[44] !== n.state.kind ? (pe = n.state.kind === "completed" && oe ? n.runningTaskStatus : n.state.kind === "completed" ? de === void 0 ? ge : Crt(mka, { children: [ge === void 0 ? "" : `${ge} · `, Crt("span", { className: "ui-j8fevo", children: ["Routed to ", de] })] }) : void 0, e[40] = ge, e[41] = oe, e[42] = de, e[43] = n.runningTaskStatus, e[44] = n.state.kind, e[45] = pe) : pe = e[45];
    const ve = pe, fe = n.state.kind === "active" ? oe ? `${n.runningTaskCount} Working` : "Working" : oe ? `${n.runningTaskCount} working` : "Worked", Te = se ? null : fe, _e = se ? ae : ve;
    H = T.className, G = T.style, $ = "ui-step-group-header", P = zY, q = Te, K = "ui-step-group-collapsible agent-transcript-work-group-collapsible", V = vl.localMode && !se ? __lcpView("TurnDetails", { turnKey: n.turnHumanRowId, active: n.state.kind === "active", durationMs: n.state.durationMs, fallback: _e }, _e) : _e, Y = ie, J = y, M = b, O = k, N = true, U = "tertiary", j = b && !c ? p6("div", { className: A.className, style: A.style, children: re.map((Ce) => p6(Y8S, { children: i(Ce) }, Ce.rowId)) }) : null, e[7] = c, e[8] = k, e[9] = l, e[10] = b, e[11] = y, e[12] = i, e[13] = n, e[14] = P, e[15] = M, e[16] = O, e[17] = N, e[18] = U, e[19] = j, e[20] = $, e[21] = H, e[22] = G, e[23] = q, e[24] = K, e[25] = V, e[26] = Y, e[27] = J;
  } else P = e[14], M = e[15], O = e[16], N = e[17], U = e[18], j = e[19], $ = e[20], H = e[21], G = e[22], q = e[23], K = e[24], V = e[25], Y = e[26], J = e[27];
  let Q;
  e[46] !== P || e[47] !== M || e[48] !== O || e[49] !== N || e[50] !== U || e[51] !== j || e[52] !== q || e[53] !== K || e[54] !== V || e[55] !== Y || e[56] !== J ? (Q = p6(P, { action: q, className: K, details: V, expandable: Y, loading: J, open: M, onOpenChange: O, tabularNums: N, tone: U, children: j }), e[46] = P, e[47] = M, e[48] = O, e[49] = N, e[50] = U, e[51] = j, e[52] = q, e[53] = K, e[54] = V, e[55] = Y, e[56] = J, e[57] = Q) : Q = e[57];
  let te;
  e[58] !== $ || e[59] !== Q ? (te = p6("div", { className: $, children: Q }), e[58] = $, e[59] = Q, e[60] = te) : te = e[60];
  let ee;
  return e[61] !== H || e[62] !== G || e[63] !== te ? (ee = p6("div", { className: H, style: G, children: te }), e[61] = H, e[62] = G, e[63] = te, e[64] = ee) : ee = e[64], ee;
}
function Z8S(t) {
  return t.kind !== "activityGroup" || $mi(t);
}
function Q8S(t) {
  const e = Vkt(24), { count: n, progressStatus: i, tailStatus: r, runningTaskStatus: s, settledVerb: o, duration: a } = t, l = uR().projectAgentToolRows === true;
  let c;
  e[0] !== s || e[1] !== r ? (c = r ?? { action: s ?? "", loading: true, priority: "running" }, e[0] = s, e[1] = r, e[2] = c) : c = e[2];
  const { statusText: u, updatesInPlace: d } = tYh(c), h = o === void 0, p = h && i !== void 0, g = h ? i ?? u : "", f = n === void 0 ? void 0 : "Working", _ = h ? g.length > 0 || n !== void 0 ? g : "Working" : o;
  let b;
  e[3] !== a || e[4] !== h ? (b = (M) => ytp.has(M) ? Crt(mka, { children: [M, " ", p6("span", { "data-slot": "project-work-group-duration-value", className: "ui-1e4uaio", children: p6(GFe, { clipping: "none", size: "inherit", text: a ?? "" }) })] }) : h && M.length > 0 ? p6(VWe, { color: "inherit", children: M }) : M, e[3] = a, e[4] = h, e[5] = b) : b = e[5];
  const y = b;
  let S;
  e[6] !== n || e[7] !== l || e[8] !== f ? (S = l ? p6(e7S, { count: n, verb: f }) : p6(J8S, { count: n, verb: f }), e[6] = n, e[7] = l, e[8] = f, e[9] = S) : S = e[9];
  const k = h ? "project-work-group-status" : "project-work-group-duration", C = h && !p && d;
  let T;
  e[10] !== _ || e[11] !== y || e[12] !== C ? (T = p6(GFe, { disabled: C, renderText: y, size: "inherit", text: _ }), e[10] = _, e[11] = y, e[12] = C, e[13] = T) : T = e[13];
  let I;
  e[14] !== a || e[15] !== h ? (I = h || a === void 0 ? null : p6("span", { "data-slot": "project-work-group-duration-label", className: "ui-10l6tqk ui-1i1rx1s ui-jm9jq1 ui-6ikm8r ui-10wlt62 ui-zpqnlu ui-jlip5", children: ` ${a}` }), e[14] = a, e[15] = h, e[16] = I) : I = e[16];
  let A;
  e[17] !== k || e[18] !== T || e[19] !== I ? (A = Crt("span", { "data-slot": k, className: "ui-euugli", children: [T, I] }), e[17] = k, e[18] = T, e[19] = I, e[20] = A) : A = e[20];
  let P;
  return e[21] !== S || e[22] !== A ? (P = Crt("span", { className: "ui-78zum5 ui-6s0dn4", children: [S, A] }), e[21] = S, e[22] = A, e[23] = P) : P = e[23], P;
}
function J8S(t) {
  const e = Vkt(20), { count: n, verb: i } = t, r = n7S(n), s = n !== void 0, o = i === void 0 ? "" : s ? `${n} ${i}` : i;
  let a;
  e[0] === /* @__PURE__ */ Symbol.for("react.memo_cache_sentinel") ? (a = { 0: { className: "ui-wz0xwf ui-131gcsw ui-7hfw76 ui-4wkmsb ui-me8ptd ui-ptf4uz" }, 1: { className: "ui-wz0xwf ui-7hfw76 ui-4wkmsb ui-me8ptd ui-ptf4uz ui-1y6fwsi" } }, e[0] = a) : a = e[0];
  const l = a[!!s << 0];
  let c;
  e[1] === /* @__PURE__ */ Symbol.for("react.memo_cache_sentinel") ? (c = { 0: { className: "ui-3nfvp2 ui-6s0dn4 ui-13a6bvl ui-euugli ui-g01cxk ui-19991ni ui-4wkmsb ui-me8ptd ui-ptf4uz" }, 1: { className: "ui-3nfvp2 ui-6s0dn4 ui-13a6bvl ui-euugli ui-19991ni ui-4wkmsb ui-me8ptd ui-ptf4uz ui-1hc1fzr" } }, e[1] = c) : c = e[1];
  const u = c[!!s << 0];
  let d;
  e[2] !== r ? (d = r === void 0 ? null : Crt("span", { className: "ui-3nfvp2 ui-2lah0s", children: [p6(GFe, { clipping: "none", size: "inherit", text: r }), " "] }), e[2] = r, e[3] = d) : d = e[3];
  let h;
  e[4] !== u || e[5] !== d ? (h = p6("span", { ...u, children: d }), e[4] = u, e[5] = d, e[6] = h) : h = e[6];
  let p;
  e[7] !== l || e[8] !== h ? (p = p6("span", { ...l, children: h }), e[7] = l, e[8] = h, e[9] = p) : p = e[9];
  let g;
  e[10] !== i ? (g = p6(t7S, { verb: i }), e[10] = i, e[11] = g) : g = e[11];
  let f;
  e[12] !== p || e[13] !== g ? (f = Crt("span", { "aria-hidden": true, "data-slot": "project-work-group-action", className: "ui-78zum5 ui-6s0dn4 ui-2lah0s ui-jlip5", children: [p, g] }), e[12] = p, e[13] = g, e[14] = f) : f = e[14];
  let _;
  e[15] !== o ? (_ = p6("span", { "data-slot": "project-work-group-action-label", className: "ui-10l6tqk ui-1i1rx1s ui-jm9jq1 ui-6ikm8r ui-10wlt62 ui-zpqnlu ui-jlip5", children: o }), e[15] = o, e[16] = _) : _ = e[16];
  let b;
  return e[17] !== _ || e[18] !== f ? (b = Crt(mka, { children: [f, _] }), e[17] = _, e[18] = f, e[19] = b) : b = e[19], b;
}
function e7S(t) {
  const e = Vkt(6), { count: n, verb: i } = t, r = i === void 0 ? "" : n === void 0 ? i : `${n} ${i}`;
  let s;
  e[0] === /* @__PURE__ */ Symbol.for("react.memo_cache_sentinel") ? (s = { 0: { className: "ui-78zum5 ui-6s0dn4 ui-2lah0s ui-jlip5" }, 1: { className: "ui-78zum5 ui-6s0dn4 ui-2lah0s ui-jlip5 ui-ob55sx" } }, e[0] = s) : s = e[0];
  const o = s[(r.length > 0) << 0];
  let a;
  e[1] !== r ? (a = p6(GFe, { clipping: "none", size: "inherit", text: r }), e[1] = r, e[2] = a) : a = e[2];
  let l;
  return e[3] !== o || e[4] !== a ? (l = p6("span", { "data-slot": "project-work-group-action", ...o, children: a }), e[3] = o, e[4] = a, e[5] = l) : l = e[5], l;
}
function t7S(t) {
  const e = Vkt(16), { verb: n } = t, i = mtp(null), [r, s] = Kgi(void 0);
  let o, a;
  e[0] !== n ? (o = () => {
    if (n === void 0) {
      s(0);
      return;
    }
    const f = i.current;
    if (f === null) return;
    const _ = () => {
      const y = f.getBoundingClientRect().width;
      s(y > 0 ? y : void 0);
    };
    if (_(), typeof ResizeObserver > "u") return;
    const b = new ResizeObserver(_);
    return b.observe(f), () => b.disconnect();
  }, a = [n], e[0] = n, e[1] = o, e[2] = a) : (o = e[1], a = e[2]), X8S(o, a);
  let l;
  e[3] === /* @__PURE__ */ Symbol.for("react.memo_cache_sentinel") ? (l = { 0: { className: "ui-wz0xwf ui-1eb9911 ui-2lah0s ui-ob55sx ui-2i4xyo ui-4wkmsb ui-me8ptd ui-ptf4uz" }, 1: { className: "ui-wz0xwf ui-1eb9911 ui-2lah0s ui-2i4xyo ui-4wkmsb ui-me8ptd ui-ptf4uz ui-14z9mp" } }, e[3] = l) : l = e[3];
  const c = l[(n === void 0) << 0];
  let u;
  e[4] !== c.style || e[5] !== r ? (u = r === void 0 ? c.style : { ...c.style, width: r }, e[4] = c.style, e[5] = r, e[6] = u) : u = e[6];
  let d;
  e[7] !== n ? (d = p6("span", { ref: i, className: "ui-1azrgbz ui-1lqcxt8 ui-ezivpi ui-lshs6z ui-jlip5", children: n }), e[7] = n, e[8] = d) : d = e[8];
  const h = n ?? "";
  let p;
  e[9] !== h ? (p = p6("span", { className: "ui-1azrgbz ui-3nfvp2 ui-euugli ui-6ikm8r ui-10wlt62", children: p6(GFe, { clipping: "none", size: "inherit", text: h }) }), e[9] = h, e[10] = p) : p = e[10];
  let g;
  return e[11] !== c.className || e[12] !== u || e[13] !== d || e[14] !== p ? (g = Crt("span", { className: c.className, "data-slot": "project-work-group-verb", style: u, children: [d, p] }), e[11] = c.className, e[12] = u, e[13] = d, e[14] = p, e[15] = g) : g = e[15], g;
}
function n7S(t) {
  const e = Vkt(3), [n, i] = Kgi(t);
  let r, s;
  return e[0] !== t ? (r = () => {
    if (t !== void 0) {
      i(t);
      return;
    }
    const o = window.setTimeout(() => i(void 0), bmi * 2);
    return () => window.clearTimeout(o);
  }, s = [t], e[0] = t, e[1] = r, e[2] = s) : (r = e[1], s = e[2]), gtp(r, s), t ?? n;
}
function vtp(t) {
  const e = Vkt(3), { row: n } = t, i = i7S(n.startMs);
  let r;
  e[0] === /* @__PURE__ */ Symbol.for("react.memo_cache_sentinel") ? (r = ar({ rootClass: "agent-transcript-work-group", stylexStyles: KFe.root }), e[0] = r) : r = e[0];
  const s = r;
  let o;
  return e[1] !== i ? (o = p6("div", { className: s.className, style: s.style, children: p6("div", { className: "ui-step-group-header", children: p6(zY, { action: "Working", className: "ui-step-group-collapsible agent-transcript-work-group-collapsible", details: i, expandable: false, open: false, tabularNums: true, tone: "tertiary" }) }) }), e[1] = i, e[2] = o) : o = e[2], o;
}
function i7S(t) {
  const e = Vkt(5), [n, i] = Kgi(r7S);
  let r, s;
  if (e[0] !== t ? (r = () => {
    if (t === void 0) return;
    const l = setInterval(() => i(Date.now()), 1e3);
    return () => clearInterval(l);
  }, s = [t], e[0] = t, e[1] = r, e[2] = s) : (r = e[1], s = e[2]), gtp(r, s), t === void 0) return;
  const o = Math.max(0, n - t);
  let a;
  return e[3] !== o ? (a = btp(o), e[3] = o, e[4] = a) : a = e[4], `for ${a}`;
}
function r7S() {
  return Date.now();
}
function s7S(t) {
  const e = _tp(t);
  return e === void 0 ? void 0 : `for ${e}`;
}
function _tp(t) {
  return t === void 0 ? void 0 : btp(t);
}
function btp(t) {
  const e = Math.ceil(t / 1e3);
  if (t < 1e3) return "1s";
  if (e < 60) return `${e}s`;
  if (e >= 3600) {
    const r = Math.floor(e / 3600), s = Math.floor(e % 3600 / 60);
    return s > 0 ? `${r}h ${s}m` : `${r}h`;
  }
  const n = Math.floor(e / 60), i = e % 60;
  return i > 0 ? `${n}m ${i}s` : `${n}m`;
}
var ytp, 
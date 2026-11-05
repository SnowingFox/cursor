// @recovered-by cursor-re
// artifact: app/out/vs/workbench/workbench.glass.main.js sha256:6eb88cb60fce5bf5df2ee401f797d5e160b0bcb5d85c25e57d2576b467edce81
// module: OrchestrationView.js range:17234193..17243292
// basis: inferred
// confidence: C
// method: split
// run: main 2026-11-05T10:03:45.841Z
ho1 = L({ "OrchestrationView.js"() {
  "use strict";
  E(), Va(), git(), Bs1(), qs1(), Xs1(), jgp(), eo1(), dy(), fd(), ofp = { kVAEAm: "ui-1n2onr6", km5ZXQ: "ui-ack27t", koQZXg: "ui-8x9d4c", $$css: true }, afp = { kVAEAm: "ui-10l6tqk", kB7OPa: "ui-9f619", kXHlph: "ui-1plvlek", kORKVm: "ui-ryxfnj", kY2c9j: "ui-1vjfegm", $$css: true }, lfp = { kVAEAm: "ui-10l6tqk", kB7OPa: "ui-9f619", kXHlph: "ui-1plvlek", kORKVm: "ui-ryxfnj", kY2c9j: "ui-1vjfegm", $$css: true }, xvi = { world: (t, e) => [ofp, { kzqmXN: t != null ? "ui-5lhr3w" : t, kZKoxP: e != null ? "ui-16ye13r" : e, kAzted: e != null ? "ui-82snj4" : e, $$css: true }, { "--x-width": ((n) => typeof n == "number" ? n + "px" : n ?? void 0)(t), "--x-height": ((n) => typeof n == "number" ? n + "px" : n ?? void 0)(e), "--x-minHeight": ((n) => typeof n == "number" ? n + "px" : n ?? void 0)(e) }], box: (t) => [afp, { kbCHJM: t.x != null ? "ui-gq9j65" : t.x, k87sOh: t.y != null ? "ui-jbys53" : t.y, kzqmXN: t.w != null ? "ui-5lhr3w" : t.w, kZKoxP: t.h != null ? "ui-16ye13r" : t.h, $$css: true }, { "--x-left": ((e) => typeof e == "number" ? e + "px" : e ?? void 0)(t.x), "--x-top": ((e) => typeof e == "number" ? e + "px" : e ?? void 0)(t.y), "--x-width": ((e) => typeof e == "number" ? e + "px" : e ?? void 0)(t.w), "--x-height": ((e) => typeof e == "number" ? e + "px" : e ?? void 0)(t.h) }], cardBox: (t) => [lfp, { kbCHJM: t.x != null ? "ui-gq9j65" : t.x, k87sOh: t.y != null ? "ui-jbys53" : t.y, kzqmXN: t.w != null ? "ui-5lhr3w" : t.w, $$css: true }, { "--x-left": ((e) => typeof e == "number" ? e + "px" : e ?? void 0)(t.x), "--x-top": ((e) => typeof e == "number" ? e + "px" : e ?? void 0)(t.y), "--x-width": ((e) => typeof e == "number" ? e + "px" : e ?? void 0)(t.w) }] };
} });
import { jsx as L4, jsxs as _wn } from "./react-runtime/react/esm-jsx-runtime-production.js";
import { c as dIa } from "./react-runtime/react/esm-compiler-runtime-production.js";
import { useState as hUr } from "./react-runtime/react/esm-index-production.js";
function po1(t) {
  const e = dIa(8), { board: n, contextItems: i, agents: r, tools: s, orchestration: o, onBoardAction: a, onLinkClick: l } = t;
  let c;
  return e[0] !== r || e[1] !== n || e[2] !== i || e[3] !== a || e[4] !== l || e[5] !== o || e[6] !== s ? (c = L4(mo1, { board: n, contextItems: i, agents: r, tools: s, orchestration: o, onBoardAction: a, onLinkClick: l }, n.config.id), e[0] = r, e[1] = n, e[2] = i, e[3] = a, e[4] = l, e[5] = o, e[6] = s, e[7] = c) : c = e[7], c;
}
function mo1(t) {
  const e = dIa(58), { board: n, contextItems: i, agents: r, tools: s, orchestration: o, onBoardAction: a, onLinkClick: l } = t, [c, u] = hUr("tasks"), [d, h] = hUr(n.config.defaultViewMode), [p, g] = hUr("all"), [f, _] = hUr();
  let b;
  e[0] !== n ? (b = eia(n), e[0] = n, e[1] = b) : b = e[1];
  const y = b;
  let S;
  e[2] !== p || e[3] !== n || e[4] !== y ? (S = Ls1(n, y, p), e[2] = p, e[3] = n, e[4] = y, e[5] = S) : S = e[5];
  const k = S;
  let C;
  e[6] === /* @__PURE__ */ Symbol.for("react.memo_cache_sentinel") ? (C = () => {
    g("all"), _({ key: globalThis.crypto.randomUUID(), draft: "" });
  }, e[6] = C) : C = e[6];
  const T = C;
  let I;
  e[7] === /* @__PURE__ */ Symbol.for("react.memo_cache_sentinel") ? (I = () => {
    _(void 0);
  }, e[7] = I) : I = e[7];
  const A = I;
  let P;
  e[8] === /* @__PURE__ */ Symbol.for("react.memo_cache_sentinel") ? (P = (ce) => {
    _((ae) => ae === void 0 ? ae : { ...ae, draft: ce });
  }, e[8] = P) : P = e[8];
  const M = P;
  let O;
  e[9] !== f ? (O = { activeEditor: f, onOpen: T, onClose: A, onDraftChange: M }, e[9] = f, e[10] = O) : O = e[10];
  const N = O;
  let U;
  e[11] === /* @__PURE__ */ Symbol.for("react.memo_cache_sentinel") ? (U = () => {
    u("tasks"), h("kanban"), T();
  }, e[11] = U) : U = e[11];
  const j = U;
  let $;
  e[12] !== r || e[13] !== n || e[14] !== y || e[15] !== N || e[16] !== a || e[17] !== l || e[18] !== o || e[19] !== d || e[20] !== k ? ($ = () => d === "list" ? L4(Y5r, { board: n, dependencyGraph: y, layout: "list", onLinkClick: l, visibleTaskIds: k }) : d === "grid" ? L4(Y5r, { board: n, dependencyGraph: y, layout: "grid", onLinkClick: l, visibleTaskIds: k }) : d === "graph" ? L4(ro1, { orchestration: o, agents: r, cardById: n.cards, onLinkClick: l }) : L4(Xga, { board: n, onAction: a, newTaskEditor: a === void 0 ? void 0 : N, dependencyGraph: y, onLinkClick: l, visibleTaskIds: k }), e[12] = r, e[13] = n, e[14] = y, e[15] = N, e[16] = a, e[17] = l, e[18] = o, e[19] = d, e[20] = k, e[21] = $) : $ = e[21];
  const H = $;
  let G;
  e[22] !== r || e[23] !== i || e[24] !== l || e[25] !== H || e[26] !== s ? (G = (ce) => ce === "context" ? L4(ps1, { items: i, onLinkClick: l }) : ce === "customize" ? L4(Ps1, { agents: r, tools: s }) : H(), e[22] = r, e[23] = i, e[24] = l, e[25] = H, e[26] = s, e[27] = G) : G = e[27];
  const q = G;
  let K;
  e[28] === /* @__PURE__ */ Symbol.for("react.memo_cache_sentinel") ? (K = L4("span", { className: "ui-19aaqeu", children: L4(zt, { name: "board-kanban", size: "base", "aria-hidden": true }) }), e[28] = K) : K = e[28];
  let V;
  e[29] !== n.config.title ? (V = _wn("div", { className: "ui-78zum5 ui-euugli ui-2lah0s ui-6s0dn4 ui-ehausa", children: [K, L4(nn, { as: "h2", size: "lg", weight: "medium", color: "primary", className: "ui-dj266r ui-14z9mp ui-at24cr ui-1lziwak ui-uxw1ft", children: n.config.title })] }), e[29] = n.config.title, e[30] = V) : V = e[30];
  let Y;
  e[31] === /* @__PURE__ */ Symbol.for("react.memo_cache_sentinel") ? (Y = L4("div", { className: "ui-78zum5 ui-euugli ui-6s0dn4 ui-w2csxc ui-10wlt62 ui-1rohswg", children: L4(Mx.List, { activateOnFocus: true, "aria-label": "Project sections", children: hIa.map(go1) }) }), e[31] = Y) : Y = e[31];
  let J;
  e[32] !== V ? (J = _wn("div", { className: "ui-78zum5 ui-euugli ui-12lumcd ui-6s0dn4 ui-1oot3zn ui-w2csxc ui-10wlt62 ui-1rohswg", children: [V, Y] }), e[32] = V, e[33] = J) : J = e[33];
  let Q;
  e[34] !== c || e[35] !== d ? (Q = c === "tasks" ? L4($na, { mode: d, onModeChange: h }) : null, e[34] = c, e[35] = d, e[36] = Q) : Q = e[36];
  let te;
  e[37] !== p || e[38] !== c || e[39] !== d ? (te = c === "tasks" && d !== "graph" ? L4(fo1, { activeFilter: p, onSelect: g }) : null, e[37] = p, e[38] = c, e[39] = d, e[40] = te) : te = e[40];
  let ee;
  e[41] !== a ? (ee = a === void 0 ? null : L4(An, { variant: "outline", size: "md", onClick: j, leadingIcon: "plus", children: "New" }), e[41] = a, e[42] = ee) : ee = e[42];
  let re;
  e[43] !== Q || e[44] !== te || e[45] !== ee ? (re = _wn("div", { className: "ui-78zum5 ui-2lah0s ui-6s0dn4 ui-ehausa", children: [Q, te, ee] }), e[43] = Q, e[44] = te, e[45] = ee, e[46] = re) : re = e[46];
  let ie;
  e[47] !== J || e[48] !== re ? (ie = _wn("header", { className: "ui-78zum5 ui-6s0dn4 ui-1qughib ui-1oot3zn ui-14q74kp ui-1xlntvz ui-so031l ui-1q0q8m5 ui-17fyfba", children: [J, re] }), e[47] = J, e[48] = re, e[49] = ie) : ie = e[49];
  let oe;
  e[50] !== q ? (oe = hIa.map((ce) => L4(Mx.Panel, { value: ce.id, fill: true, keepMounted: true, children: q(ce.id) }, ce.id)), e[50] = q, e[51] = oe) : oe = e[51];
  let se;
  e[52] !== oe ? (se = L4("div", { className: "ui-78zum5 ui-2lwn1j ui-euugli ui-12lumcd ui-dt5ytf", children: oe }), e[52] = oe, e[53] = se) : se = e[53];
  let le;
  return e[54] !== c || e[55] !== ie || e[56] !== se ? (le = L4("section", { "data-project-root": true, className: "ui-78zum5 ui-5yr21d ui-2lwn1j ui-euugli ui-dt5ytf ui-6ikm8r ui-10wlt62 ui-jbqb8w ui-1wd3ewq ui-1acoasx", children: _wn(Mx.Root, { value: c, onValueChange: u, size: "md", children: [ie, se] }) }), e[54] = c, e[55] = ie, e[56] = se, e[57] = le) : le = e[57], le;
}
function go1(t) {
  return L4(Mx.Item, { value: t.id, children: t.label }, t.id);
}
function fo1(t) {
  const e = dIa(6), { activeFilter: n, onSelect: i } = t;
  let r;
  e[0] === /* @__PURE__ */ Symbol.for("react.memo_cache_sentinel") ? (r = [{ id: "all", label: "All Tasks", description: "Everything on the board" }, { id: "working", label: "Working", description: "Ready with dependencies satisfied" }, { id: "blocked", label: "Blocked", description: "Waiting on a dependency or cycle" }], e[0] = r) : r = e[0];
  const s = r;
  let o;
  e[1] === /* @__PURE__ */ Symbol.for("react.memo_cache_sentinel") ? (o = L4(hn.Trigger, { children: L4(An, { variant: "ghost", size: "md", "aria-haspopup": "menu", "aria-label": "Filter tasks", leadingIcon: "funnel-simple", children: "Filter" }) }), e[1] = o) : o = e[1];
  let a;
  e[2] === /* @__PURE__ */ Symbol.for("react.memo_cache_sentinel") ? (a = s.map(vo1), e[2] = a) : a = e[2];
  let l;
  return e[3] !== n || e[4] !== i ? (l = _wn(hn, { children: [o, L4(hn.Content, { "aria-label": "Project filters", children: L4(hn.Section, { title: "Status", children: L4(hn.RadioGroup, { "aria-label": "Status", value: n, onValueChange: i, children: a }) }) })] }), e[3] = n, e[4] = i, e[5] = l) : l = e[5], l;
}
function vo1(t) {
  return L4(hn.RadioItem, { value: t.id, label: t.label, description: t.description, closeOnSelect: true, children: t.label }, t.id);
}
var hIa, 
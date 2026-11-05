// @recovered-by cursor-re
// artifact: app/out/vs/workbench/workbench.glass.main.js sha256:6eb88cb60fce5bf5df2ee401f797d5e160b0bcb5d85c25e57d2576b467edce81
// module: CustomizeManageGroups.js range:22761775..22772745
// basis: inferred
// confidence: C
// method: split
// run: main 2026-11-05T10:03:45.591Z
Ges = L({ "CustomizeManageGroups.js"() {
  "use strict";
  E(), Mt(), J7(), $ot(), Hot(), Wes(), UHm = /\/(skills|rules|subagents|commands|hooks)\//g, jHm = { publish: "Publishing", sync: "Syncing changes", unpublish: "Unpublishing" };
} });
import { jsx as L0, jsxs as nle, Fragment as qes } from "./react-runtime/react/esm-jsx-runtime-production.js";
import { c as bIn } from "./react-runtime/react/esm-compiler-runtime-production.js";
import { useState as iZ1 } from "./react-runtime/react/esm-index-production.js";
function rZ1(t) {
  const e = bIn(14), { hooks: n, isLoading: i, query: r, actions: s, log: o, logDetailsEnabled: a, onClearLog: l, onOpenConfig: c, onOpenDocsUrl: u } = t;
  let d;
  if (e[0] !== s || e[1] !== n || e[2] !== i || e[3] !== c || e[4] !== u || e[5] !== r) {
    const g = UX1(n), f = Oes(g.length);
    d = i ? L0(MZa, {}) : n.length === 0 && r ? L0(nCi, { message: `No hooks match "${r}".` }) : n.length === 0 ? L0($es, { title: S4e.hooks.title, description: S4e.hooks.description, docsUrl: S4e.hooks.docsUrl, onOpenConfig: c, onOpenDocsUrl: u }) : g.map((_) => L0(sZ1, { group: _, actions: s, visibleLimit: f }, _.key)), e[0] = s, e[1] = n, e[2] = i, e[3] = c, e[4] = u, e[5] = r, e[6] = d;
  } else d = e[6];
  let h;
  e[7] !== o || e[8] !== a || e[9] !== l ? (h = L0(oZ1, { log: o, detailsEnabled: a, onClearLog: l }), e[7] = o, e[8] = a, e[9] = l, e[10] = h) : h = e[10];
  let p;
  return e[11] !== d || e[12] !== h ? (p = nle(qes, { children: [d, h] }), e[11] = d, e[12] = h, e[13] = p) : p = e[13], p;
}
function sZ1(t) {
  const e = bIn(12), { group: n, actions: i, visibleLimit: r } = t, { onOpenHookConfig: s } = i, o = n.canOpenConfig && s !== void 0;
  let a;
  e[0] !== o || e[1] !== n.key || e[2] !== s ? (a = o ? L0("div", { ...Sc(Zh.groupActions), children: L0(An, { variant: "outline", tone: "secondary", size: "md", rounded: true, onClick: () => s(n.key), leadingIcon: "file-arrow-right-up", children: "Open config" }) }) : void 0, e[0] = o, e[1] = n.key, e[2] = s, e[3] = a) : a = e[3];
  const l = a;
  let c;
  e[4] !== i ? (c = (d, h) => L0($Hm, { hook: d, showDivider: h > 0, actions: i }, d.id), e[4] = i, e[5] = c) : c = e[5];
  let u;
  return e[6] !== n.hooks || e[7] !== n.title || e[8] !== l || e[9] !== c || e[10] !== r ? (u = L0(sCi, { title: n.title, items: n.hooks, visibleLimit: r, headerActions: l, renderRow: c }), e[6] = n.hooks, e[7] = n.title, e[8] = l, e[9] = c, e[10] = r, e[11] = u) : u = e[11], u;
}
function $Hm(t) {
  const e = bIn(27), { hook: n, showDivider: i, actions: r } = t, { onOpenHookConfig: s } = r, o = n.canOpenConfig && s !== void 0;
  let a;
  e[0] !== o || e[1] !== n.sourceKey || e[2] !== s ? (a = () => {
    o && s(n.sourceKey);
  }, e[0] = o, e[1] = n.sourceKey, e[2] = s, e[3] = a) : a = e[3];
  const l = a;
  let c, u;
  e[4] === /* @__PURE__ */ Symbol.for("react.memo_cache_sentinel") ? (c = L0("div", { ...Sc(Zh.rowIcon, Zh.rowIconPrimitive), children: L0(zt, { name: "file-code", size: "sm", "aria-hidden": true }) }), u = Sc(Zh.rowText), e[4] = c, e[5] = u) : (c = e[4], u = e[5]);
  let d;
  e[6] !== n.step ? (d = L0(nn, { size: "md", color: "primary", truncate: true, children: n.step }), e[6] = n.step, e[7] = d) : d = e[7];
  let h;
  e[8] !== n.label ? (h = n.label !== "" && L0(nn, { size: "sm", color: "tertiary", truncate: true, children: n.label }), e[8] = n.label, e[9] = h) : h = e[9];
  let p;
  e[10] !== d || e[11] !== h ? (p = nle(qes, { children: [c, nle("div", { ...u, children: [d, h] })] }), e[10] = d, e[11] = h, e[12] = p) : p = e[12];
  const g = p;
  let f;
  e[13] !== i ? (f = Sc(Zh.row, i && Zh.rowDivided), e[13] = i, e[14] = f) : f = e[14];
  let _;
  e[15] !== o || e[16] !== l || e[17] !== g ? (_ = o ? L0("button", { type: "button", ...Sc(Zh.rowBody), onClick: l, children: g }) : L0("div", { ...Sc(Zh.rowBody, Zh.rowBodyStatic), children: g }), e[15] = o, e[16] = l, e[17] = g, e[18] = _) : _ = e[18];
  let b;
  e[19] !== o || e[20] !== n.step || e[21] !== l ? (b = o && L0("div", { ...Sc(Zh.rowAction), children: nle(hn, { children: [L0(hn.Trigger, { children: L0(ho, { icon: "ellipsis", variant: "ghost", size: "sm", "aria-label": `${n.step} options` }) }), L0(hn.Content, { placement: "bottom-end", width: 180, "aria-label": `${n.step} options`, children: L0(hn.Item, { onSelect: l, children: "Open config" }) })] }) }), e[19] = o, e[20] = n.step, e[21] = l, e[22] = b) : b = e[22];
  let y;
  return e[23] !== f || e[24] !== _ || e[25] !== b ? (y = nle("div", { ...f, children: [_, b] }), e[23] = f, e[24] = _, e[25] = b, e[26] = y) : y = e[26], y;
}
function oZ1(t) {
  const e = bIn(20), { log: n, detailsEnabled: i, onClearLog: r } = t;
  let s;
  e[0] === /* @__PURE__ */ Symbol.for("react.memo_cache_sentinel") ? (s = Sc(Zh.groupActions), e[0] = s) : s = e[0];
  const o = n.length === 0 || r === void 0;
  let a;
  e[1] !== r ? (a = () => r?.(), e[1] = r, e[2] = a) : a = e[2];
  let l;
  e[3] !== o || e[4] !== a ? (l = L0("div", { ...s, children: L0(An, { variant: "outline", tone: "secondary", size: "md", rounded: true, disabled: o, onClick: a, leadingIcon: "trash", children: "Clear log" }) }), e[3] = o, e[4] = a, e[5] = l) : l = e[5];
  const c = l;
  if (n.length === 0) {
    let h, p, g;
    e[6] === /* @__PURE__ */ Symbol.for("react.memo_cache_sentinel") ? (h = Sc(Zh.group), p = Sc(Zh.groupHeader), g = nle("div", { ...Sc(Zh.groupTitle), children: [L0(nn, { size: "md", weight: "medium", color: "primary", children: "Execution Log" }), L0(nn, { size: "md", color: "tertiary", children: "0" })] }), e[6] = h, e[7] = p, e[8] = g) : (h = e[6], p = e[7], g = e[8]);
    let f;
    e[9] !== c ? (f = nle("div", { ...p, children: [g, c] }), e[9] = c, e[10] = f) : f = e[10];
    let _;
    e[11] === /* @__PURE__ */ Symbol.for("react.memo_cache_sentinel") ? (_ = nle("div", { ...Sc(Zh.empty), children: [L0(nn, { size: "md", weight: "medium", color: "primary", children: "No hook executions yet" }), L0(nn, { size: "sm", color: "secondary", children: "Hooks that run during the agent's loop will show up here." })] }), e[11] = _) : _ = e[11];
    let b;
    return e[12] !== f ? (b = nle("section", { ...h, children: [f, _] }), e[12] = f, e[13] = b) : b = e[13], b;
  }
  let u;
  e[14] !== i ? (u = (h, p) => L0(aZ1, { entry: h, showDivider: p > 0, detailsEnabled: i }, h.id), e[14] = i, e[15] = u) : u = e[15];
  let d;
  return e[16] !== c || e[17] !== n || e[18] !== u ? (d = L0(sCi, { title: "Execution Log", items: n, headerActions: c, renderRow: u }), e[16] = c, e[17] = n, e[18] = u, e[19] = d) : d = e[19], d;
}
function aZ1(t) {
  const e = bIn(37), { entry: n, showDivider: i, detailsEnabled: r } = t, [s, o] = iZ1(false);
  let a, l;
  e[0] === /* @__PURE__ */ Symbol.for("react.memo_cache_sentinel") ? (a = L0("div", { ...Sc(Zh.rowIcon, Zh.rowIconPrimitive), children: L0(zt, { name: "file-code", size: "sm", "aria-hidden": true }) }), l = Sc(Zh.rowText), e[0] = a, e[1] = l) : (a = e[0], l = e[1]);
  let c;
  e[2] !== n.step ? (c = L0(nn, { size: "md", color: "primary", truncate: true, children: n.step }), e[2] = n.step, e[3] = c) : c = e[3];
  let u;
  e[4] !== n.label ? (u = n.label !== "" && L0(nn, { size: "sm", color: "tertiary", truncate: true, children: n.label }), e[4] = n.label, e[5] = u) : u = e[5];
  let d;
  e[6] !== c || e[7] !== u ? (d = nle("div", { ...l, children: [c, u] }), e[6] = c, e[7] = u, e[8] = d) : d = e[8];
  let h;
  e[9] !== r || e[10] !== n || e[11] !== s ? (h = L0(uZ1, { entry: n, expanded: s, showChevron: r }), e[9] = r, e[10] = n, e[11] = s, e[12] = h) : h = e[12];
  let p;
  e[13] !== d || e[14] !== h ? (p = nle(qes, { children: [a, d, h] }), e[13] = d, e[14] = h, e[15] = p) : p = e[15];
  const g = p;
  let f;
  e[16] !== i ? (f = Sc(Zh.row, i && Zh.rowDivided), e[16] = i, e[17] = f) : f = e[17];
  let _;
  e[18] !== r || e[19] !== s || e[20] !== g ? (_ = r ? L0("button", { type: "button", ...Sc(Zh.rowBody), "aria-expanded": s, onClick: () => o(cZ1), children: g }) : L0("div", { ...Sc(Zh.rowBody, Zh.rowBodyStatic), children: g }), e[18] = r, e[19] = s, e[20] = g, e[21] = _) : _ = e[21];
  let b;
  e[22] !== f || e[23] !== _ ? (b = L0("div", { ...f, children: _ }), e[22] = f, e[23] = _, e[24] = b) : b = e[24];
  const y = !r || !s, S = !r || !s || void 0;
  let k;
  e[25] === /* @__PURE__ */ Symbol.for("react.memo_cache_sentinel") ? (k = Sc(Zh.logDetailPanel), e[25] = k) : k = e[25];
  let C;
  e[26] !== n.detailSections ? (C = n.detailSections.map(lZ1), e[26] = n.detailSections, e[27] = C) : C = e[27];
  let T;
  e[28] !== C ? (T = L0("div", { ...k, children: C }), e[28] = C, e[29] = T) : T = e[29];
  let I;
  e[30] !== y || e[31] !== S || e[32] !== T ? (I = L0(k1n, { collapsed: y, "aria-hidden": S, children: T }), e[30] = y, e[31] = S, e[32] = T, e[33] = I) : I = e[33];
  let A;
  return e[34] !== b || e[35] !== I ? (A = nle(qes, { children: [b, I] }), e[34] = b, e[35] = I, e[36] = A) : A = e[36], A;
}
function lZ1(t) {
  const e = t.title === "Error Output";
  return nle("div", { ...Sc(Zh.logDetailSection), children: [nle(nn, { size: "sm", weight: "medium", color: e ? "red" : "primary", children: [t.title, ":"] }), L0("pre", { ...Sc(Zh.logDetailBody, e && Zh.logDetailBodyError), children: t.body })] }, t.title);
}
function cZ1(t) {
  return !t;
}
function uZ1(t) {
  const e = bIn(21), { entry: n, expanded: i, showChevron: r } = t;
  let s;
  e[0] === /* @__PURE__ */ Symbol.for("react.memo_cache_sentinel") ? (s = Sc(Zh.logMeta), e[0] = s) : s = e[0];
  let o;
  e[1] !== n.errorMessage || e[2] !== n.hasError ? (o = n.hasError && n.errorMessage !== void 0 && L0(xs, { content: n.errorMessage, placement: "top", children: L0("span", { ...Sc(Zh.logError), role: "img", "aria-label": "Hook execution error", children: L0(zt, { name: "warning", size: "xs", "aria-hidden": true }) }) }), e[1] = n.errorMessage, e[2] = n.hasError, e[3] = o) : o = e[3];
  let a;
  e[4] !== n.transportMode ? (a = n.transportMode !== void 0 && n.transportMode !== "" && L0(nn, { size: "sm", color: "tertiary", children: n.transportMode }), e[4] = n.transportMode, e[5] = a) : a = e[5];
  let l;
  e[6] !== n.durationMs ? (l = nle(nn, { size: "sm", color: "tertiary", children: [n.durationMs, "ms"] }), e[6] = n.durationMs, e[7] = l) : l = e[7];
  let c;
  e[8] !== n.timestamp ? (c = dZ1(n.timestamp), e[8] = n.timestamp, e[9] = c) : c = e[9];
  let u;
  e[10] !== c ? (u = L0(nn, { size: "sm", color: "tertiary", children: c }), e[10] = c, e[11] = u) : u = e[11];
  let d;
  e[12] !== i || e[13] !== r ? (d = r && L0(zt, { name: i ? "chevron-up" : "chevron-down", size: "xs", "aria-hidden": true }), e[12] = i, e[13] = r, e[14] = d) : d = e[14];
  let h;
  return e[15] !== o || e[16] !== a || e[17] !== l || e[18] !== u || e[19] !== d ? (h = nle("div", { ...s, children: [o, a, l, u, d] }), e[15] = o, e[16] = a, e[17] = l, e[18] = u, e[19] = d, e[20] = h) : h = e[20], h;
}
function dZ1(t) {
  return new Date(t).toLocaleTimeString();
}

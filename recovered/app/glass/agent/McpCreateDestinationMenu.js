// @recovered-by cursor-re
// artifact: app/out/vs/workbench/workbench.glass.main.js sha256:6eb88cb60fce5bf5df2ee401f797d5e160b0bcb5d85c25e57d2576b467edce81
// module: McpCreateDestinationMenu.js range:22775346..22785747
// basis: inferred
// confidence: C
// method: split
// run: main 2026-11-05T10:03:45.216Z
// fragment: esbuild wrapper body + hoisted tail; may include adjacent declarations; not a standalone module
// deps: tslib.es6.js, index.js, CustomizeManage.utils.js
// path-candidate: none (no nls basename match; path inferred, confidence C)
// renamed: none (fragment not parseable as a program; rename map kept in scripts/recover/glass/p1-agent/maps)
// fragment: esbuild wrapper body + hoisted tail; may include adjacent declarations; not a standalone module
// deps: tslib.es6.js, index.js, CustomizeManage.utils.js
// path-candidate: none (no nls basename match; path inferred, confidence C)
// renamed: none (fragment not parseable as a program; rename map kept in scripts/recover/glass/p1-agent/maps)
var _Z1 = L({ "McpCreateDestinationMenu.js"() {
  "use strict";
  E(), Mt(), Hot();
} });
import { jsx as e3, jsxs as KCt, Fragment as VHm } from "./react-runtime/react/esm-jsx-runtime-production.js";
import { c as SIn } from "./react-runtime/react/esm-compiler-runtime-production.js";
import { useState as KHm, useRef as bZ1 } from "./react-runtime/react/esm-index-production.js";
function yZ1(t) {
  const e = SIn(4), { iconUrl: n } = t, [i, r] = KHm(null), [s, o] = KHm(n), a = bZ1(null);
  n !== s && (o(n), r(null));
  const l = n !== void 0 && n !== "" && i !== n;
  let c;
  e[0] === /* @__PURE__ */ Symbol.for("react.memo_cache_sentinel") ? (c = Sc(Zh.rowIcon, Zh.rowIconPrimitive), e[0] = c) : c = e[0];
  let u;
  return e[1] !== n || e[2] !== l ? (u = e3("div", { ...c, children: l ? e3("img", { ref: a, src: n, alt: "", draggable: false, className: "cursor-ui-h8yej3 cursor-ui-5yr21d cursor-ui-19kjcj4 cursor-ui-1lliihq", onError: (d) => {
    d.currentTarget === a.current && r(n ?? null);
  }, onLoad: (d) => {
    d.currentTarget === a.current && pZ1({ src: n, naturalWidth: d.currentTarget.naturalWidth, naturalHeight: d.currentTarget.naturalHeight }) && r(n ?? null);
  } }) : e3(zt, { name: "logo-mcp", size: "sm", "aria-hidden": true }) }), e[1] = n, e[2] = l, e[3] = u) : u = e[3], u;
}
function SZ1(t) {
  const e = SIn(32), { servers: n, isLoading: i, groupBy: r, sortBy: s, teamDisplayName: o, workspaceName: a, query: l, unfilteredServerCount: c, actions: u, createAction: d, onBrowse: h, onOpenDocsUrl: p } = t;
  if (i) {
    let b;
    return e[0] === /* @__PURE__ */ Symbol.for("react.memo_cache_sentinel") ? (b = e3(MZa, {}), e[0] = b) : b = e[0], b;
  }
  if (n.length === 0) {
    if (l !== "" && (c ?? 0) > 0) {
      const k = `No MCP servers match "${l}".`;
      let C;
      e[1] !== k ? (C = e3(nCi, { message: k }), e[1] = k, e[2] = C) : C = e[2];
      let T;
      e[3] !== d ? (T = d !== void 0 ? e3(YHm, { createAction: d }) : null, e[3] = d, e[4] = T) : T = e[4];
      let I;
      return e[5] !== C || e[6] !== T ? (I = KCt(VHm, { children: [C, T] }), e[5] = C, e[6] = T, e[7] = I) : I = e[7], I;
    }
    if (l !== "") {
      const k = `No MCP servers match "${l}".`;
      let C;
      return e[8] !== k ? (C = e3(nCi, { message: k }), e[8] = k, e[9] = C) : C = e[9], C;
    }
    const b = d?.type === "direct" ? d.onNew : void 0;
    let y;
    e[10] !== d ? (y = d?.type === "menu" ? e3(zHm, { onSelect: d.onSelect, targets: d.targets, children: e3(An, { size: "md", variant: "secondary", leadingIcon: "add", children: "New" }) }) : void 0, e[10] = d, e[11] = y) : y = e[11];
    let S;
    return e[12] !== h || e[13] !== p || e[14] !== b || e[15] !== y ? (S = e3($es, { title: S4e.mcps.title, description: S4e.mcps.description, docsUrl: S4e.mcps.docsUrl, onNew: b, onBrowse: h, onOpenDocsUrl: p, primaryAction: y }), e[12] = h, e[13] = p, e[14] = b, e[15] = y, e[16] = S) : S = e[16], S;
  }
  let g;
  if (e[17] !== u || e[18] !== r || e[19] !== l || e[20] !== n || e[21] !== s || e[22] !== o || e[23] !== a) {
    let b;
    e[25] !== l ? (b = l.trim(), e[25] = l, e[26] = b) : b = e[26];
    const y = jX1(n, r, s, o, a, "Team MCPs", b !== ""), S = Oes(y.length);
    g = y.map((k) => e3(XHm, { group: k, actions: u, visibleLimit: S, showSourceLabel: r === "status" }, k.key)), e[17] = u, e[18] = r, e[19] = l, e[20] = n, e[21] = s, e[22] = o, e[23] = a, e[24] = g;
  } else g = e[24];
  let f;
  e[27] !== d ? (f = d !== void 0 ? e3(YHm, { createAction: d }) : null, e[27] = d, e[28] = f) : f = e[28];
  let _;
  return e[29] !== g || e[30] !== f ? (_ = KCt(VHm, { children: [g, f] }), e[29] = g, e[30] = f, e[31] = _) : _ = e[31], _;
}
function kZ1(t) {
  const e = SIn(8), { servers: n, actions: i } = t;
  let r;
  e[0] === /* @__PURE__ */ Symbol.for("react.memo_cache_sentinel") ? (r = Sc(Zh.card), e[0] = r) : r = e[0];
  let s;
  if (e[1] !== i || e[2] !== n) {
    let a;
    e[4] !== i ? (a = (l, c) => e3(ZHm, { server: l, showDivider: c > 0, actions: i, showSourceLabel: false }, l.id), e[4] = i, e[5] = a) : a = e[5], s = n.map(a), e[1] = i, e[2] = n, e[3] = s;
  } else s = e[3];
  let o;
  return e[6] !== s ? (o = e3("div", { ...r, children: s }), e[6] = s, e[7] = o) : o = e[7], o;
}
function YHm(t) {
  const e = SIn(11), { createAction: n } = t;
  let i;
  e[0] === /* @__PURE__ */ Symbol.for("react.memo_cache_sentinel") ? (i = Sc(Zh.mcpNewRow), e[0] = i) : i = e[0];
  const r = n.type === "direct" ? n.onNew : void 0;
  let s, o;
  e[1] === /* @__PURE__ */ Symbol.for("react.memo_cache_sentinel") ? (s = e3("div", { ...Sc(Zh.rowIcon, Zh.rowIconPrimitive), children: e3(zt, { name: "add", size: "sm", "aria-hidden": true }) }), o = KCt("div", { ...Sc(Zh.rowText), children: [e3(nn, { size: "md", color: "primary", children: "New MCP Server" }), e3(nn, { size: "sm", color: "tertiary", children: "Add a Custom MCP Server" })] }), e[1] = s, e[2] = o) : (s = e[1], o = e[2]);
  let a;
  e[3] !== r ? (a = KCt("button", { type: "button", ...i, onClick: r, children: [s, o] }), e[3] = r, e[4] = a) : a = e[4];
  const l = a;
  let c;
  e[5] === /* @__PURE__ */ Symbol.for("react.memo_cache_sentinel") ? (c = Sc(Zh.card), e[5] = c) : c = e[5];
  let u;
  return e[6] !== n.onSelect || e[7] !== n.targets || e[8] !== n.type || e[9] !== l ? (u = e3("div", { ...c, children: n.type === "menu" ? e3(zHm, { onSelect: n.onSelect, targets: n.targets, children: l }) : l }), e[6] = n.onSelect, e[7] = n.targets, e[8] = n.type, e[9] = l, e[10] = u) : u = e[10], u;
}
function XHm(t) {
  const e = SIn(8), { group: n, actions: i, visibleLimit: r, showSourceLabel: s } = t;
  let o;
  e[0] !== i || e[1] !== s ? (o = (l, c) => e3(ZHm, { server: l, showDivider: c > 0, actions: i, showSourceLabel: s }, l.id), e[0] = i, e[1] = s, e[2] = o) : o = e[2];
  let a;
  return e[3] !== n.servers || e[4] !== n.title || e[5] !== o || e[6] !== r ? (a = e3(sCi, { title: n.title, items: n.servers, visibleLimit: r, renderRow: o }), e[3] = n.servers, e[4] = n.title, e[5] = o, e[6] = r, e[7] = a) : a = e[7], a;
}
function ZHm(t) {
  const e = SIn(61), { server: n, showDivider: i, actions: r, showSourceLabel: s } = t, { onAuthenticateMcp: o, onCancelMcpAuth: a, onConfigureServer: l } = r, c = !n.enabled, u = n.attentionAction === "authenticate", d = n.connectProgressLabel !== void 0;
  let h;
  e[0] !== l || e[1] !== n.id ? (h = () => l(n.id), e[0] = l, e[1] = n.id, e[2] = h) : h = e[2];
  const p = h;
  let g, f;
  e[3] !== n ? (g = NX1(n), f = LX1(g), e[3] = n, e[4] = g, e[5] = f) : (g = e[4], f = e[5]);
  const _ = f, b = n.name;
  let y;
  e[6] !== i ? (y = Sc(zes.outer, i && Zh.rowDivided), e[6] = i, e[7] = y) : y = e[7];
  let S;
  e[8] === /* @__PURE__ */ Symbol.for("react.memo_cache_sentinel") ? (S = Sc(Zh.row), e[8] = S) : S = e[8];
  let k;
  e[9] !== c ? (k = Sc(zes.iconButton, Zh.iconWrap, c && Zh.rowBodyMuted), e[9] = c, e[10] = k) : k = e[10];
  let C;
  e[11] !== n.iconUrl ? (C = e3(yZ1, { iconUrl: n.iconUrl }), e[11] = n.iconUrl, e[12] = C) : C = e[12];
  let T;
  e[13] !== _ || e[14] !== g ? (T = _ !== void 0 && e3("span", { "data-status": g, ...Sc(Zh.mcpDot, _ === "error" && Zh.mcpDotError, _ === "warning" && Zh.mcpDotWarning), "aria-hidden": true }), e[13] = _, e[14] = g, e[15] = T) : T = e[15];
  let I;
  e[16] !== p || e[17] !== k || e[18] !== C || e[19] !== T ? (I = KCt("button", { type: "button", ...k, onClick: p, tabIndex: -1, "aria-hidden": true, children: [C, T] }), e[16] = p, e[17] = k, e[18] = C, e[19] = T, e[20] = I) : I = e[20];
  const A = `Configure ${n.name}`;
  let P;
  e[21] !== c ? (P = Sc(zes.rowTextButton, Zh.rowText, c && Zh.rowBodyMuted), e[21] = c, e[22] = P) : P = e[22];
  let M;
  e[23] !== n.name ? (M = e3(nn, { size: "md", color: "primary", truncate: true, "data-mcp-name": "", children: n.name }), e[23] = n.name, e[24] = M) : M = e[24];
  let O;
  e[25] !== n || e[26] !== s ? (O = s && e3(dR, { variant: "filled", color: "secondary", size: "sm", children: FX1(n) }), e[25] = n, e[26] = s, e[27] = O) : O = e[27];
  let N;
  e[28] !== M || e[29] !== O ? (N = KCt("span", { className: "cursor-ui-78zum5 cursor-ui-6s0dn4 cursor-ui-pkkfsy cursor-ui-euugli cursor-ui-193iq5w cursor-ui-6ikm8r", children: [M, O] }), e[28] = M, e[29] = O, e[30] = N) : N = e[30];
  let U;
  e[31] === /* @__PURE__ */ Symbol.for("react.memo_cache_sentinel") ? (U = { className: "cursor-ui-euugli cursor-ui-193iq5w" }, e[31] = U) : U = e[31];
  const j = U.className;
  let $;
  e[32] === /* @__PURE__ */ Symbol.for("react.memo_cache_sentinel") ? ($ = { className: "cursor-ui-euugli cursor-ui-193iq5w" }, e[32] = $) : $ = e[32];
  const H = $.style;
  let G;
  e[33] !== n ? (G = OX1(n), e[33] = n, e[34] = G) : G = e[34];
  let q;
  e[35] !== G ? (q = e3(nn, { size: "sm", color: "tertiary", truncate: true, "data-mcp-byline": "", className: j, style: H, children: G }), e[35] = G, e[36] = q) : q = e[36];
  let K;
  e[37] !== p || e[38] !== A || e[39] !== P || e[40] !== N || e[41] !== q ? (K = KCt("button", { type: "button", "aria-label": A, ...P, onClick: p, children: [N, q] }), e[37] = p, e[38] = A, e[39] = P, e[40] = N, e[41] = q, e[42] = K) : K = e[42];
  let V;
  e[43] === /* @__PURE__ */ Symbol.for("react.memo_cache_sentinel") ? (V = Sc(Zh.rowAction), e[43] = V) : V = e[43];
  let Y;
  e[44] !== u || e[45] !== d || e[46] !== o || e[47] !== a || e[48] !== n.connectProgressLabel || e[49] !== n.id ? (Y = d ? e3(An, { variant: "text", tone: "accent", size: "sm", "data-mcp-auth-progress": "", className: Sc(Zh.mcpProgress).className, onClick: () => a(n.id), leadingIcon: { name: "circle-dashed", modifier: "spin" }, children: n.connectProgressLabel }) : u ? e3(An, { variant: "text", tone: "accent", size: "sm", "data-mcp-connect": "", onClick: () => o(n.id), children: "Authenticate" }) : null, e[44] = u, e[45] = d, e[46] = o, e[47] = a, e[48] = n.connectProgressLabel, e[49] = n.id, e[50] = Y) : Y = e[50];
  let J;
  e[51] !== Y ? (J = e3("div", { ...V, children: Y }), e[51] = Y, e[52] = J) : J = e[52];
  let Q;
  e[53] !== K || e[54] !== J || e[55] !== I ? (Q = KCt("div", { ...S, children: [I, K, J] }), e[53] = K, e[54] = J, e[55] = I, e[56] = Q) : Q = e[56];
  let te;
  return e[57] !== n.name || e[58] !== Q || e[59] !== y ? (te = e3("div", { "data-mcp-manage-server": b, ...y, children: Q }), e[57] = n.name, e[58] = Q, e[59] = y, e[60] = te) : te = e[60], te;
}
var zes, 
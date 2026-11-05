// @recovered-by cursor-re
// artifact: app/out/vs/workbench/workbench.glass.main.js sha256:6eb88cb60fce5bf5df2ee401f797d5e160b0bcb5d85c25e57d2576b467edce81
// module: MarkdownPromptButton.js range:15142360..15149328
// basis: esbuild-wrapper + inferred
// confidence: C
// method: split
// run: glass-composer 2026-11-05T10:19:48.876Z
// deps: E, P0, Lz, AO
// wrapper-init: Qva
// hoisted-owner: EndOfTurnSummary.js (app-out-vs-workbench-workbench-glass-main-js:2332); trailing declarations ownership inferred from segment adjacency
// path: null (no unique nls candidate; inferred only)
// renamed: none

Qva = L({ "MarkdownPromptButton.js"() {
  "use strict";
  E(), P0(), Lz(), AO(), bWh = { p: _Wh, promptbutton: Zva };
} });
import { jsxs as KSn, jsx as $_e } from "./react-runtime/react/esm-jsx-runtime-production.js";
import { c as Jva } from "./react-runtime/react/esm-compiler-runtime-production.js";
import { useState as yWh, useRef as vRS, useLayoutEffect as _RS } from "./react-runtime/react/esm-index-production.js";
function bRS(t) {
  const e = Jva(7), { linesAdded: n, linesRemoved: i } = t;
  if (n === 0 && i === 0) return null;
  let r;
  e[0] !== n ? (r = n > 0 ? KSn("span", { "data-kind": "additions", className: "ui-t1zr94", children: ["+", n] }) : null, e[0] = n, e[1] = r) : r = e[1];
  let s;
  e[2] !== i ? (s = i > 0 ? KSn("span", { "data-kind": "deletions", className: "ui-r243le", children: ["−", i] }) : null, e[2] = i, e[3] = s) : s = e[3];
  let o;
  return e[4] !== r || e[5] !== s ? (o = KSn("span", { className: "ui-3nfvp2 ui-2lah0s ui-ehausa ui-ss6m8b", children: [r, s] }), e[4] = r, e[5] = s, e[6] = o) : o = e[6], o;
}
function yRS(t) {
  const e = Jva(25), { file: n, onFileClick: i, onFileContextMenu: r } = t;
  let s;
  e[0] !== n.path ? (s = p2e(n.path), e[0] = n.path, e[1] = s) : s = e[1];
  const o = s;
  let a;
  e[2] !== n.path ? (a = $_e(ao, { title: n.path }), e[2] = n.path, e[3] = a) : a = e[3];
  let l;
  e[4] !== n.path ? (l = $_e(W5, { name: n.path, size: "base" }), e[4] = n.path, e[5] = l) : l = e[5];
  let c;
  e[6] !== n.linesAdded || e[7] !== n.linesRemoved ? (c = $_e(bRS, { linesAdded: n.linesAdded, linesRemoved: n.linesRemoved }), e[6] = n.linesAdded, e[7] = n.linesRemoved, e[8] = c) : c = e[8];
  let u;
  e[9] !== n.path || e[10] !== i ? (u = i ? () => i(n.path) : void 0, e[9] = n.path, e[10] = i, e[11] = u) : u = e[11];
  let d;
  e[12] !== n.path || e[13] !== r ? (d = r ? (f) => r(f, n.path) : void 0, e[12] = n.path, e[13] = r, e[14] = d) : d = e[14];
  const h = n.status ? `${o}, ${n.status}` : o;
  let p;
  e[15] !== o || e[16] !== l || e[17] !== c || e[18] !== u || e[19] !== d || e[20] !== h ? (p = $_e(uh.Row, { leading: l, trailing: c, onClick: u, onContextMenu: d, ariaLabel: h, children: o }), e[15] = o, e[16] = l, e[17] = c, e[18] = u, e[19] = d, e[20] = h, e[21] = p) : p = e[21];
  let g;
  return e[22] !== a || e[23] !== p ? (g = $_e(xs, { content: a, placement: "top", children: p }), e[22] = a, e[23] = p, e[24] = g) : g = e[24], g;
}
function SWh(t) {
  const e = Jva(43), { files: n, briefMarkdown: i, onReview: r, onFileClick: s, initialVisibleCount: o } = t, a = o === void 0 ? CWh : o, [l, c] = yWh(false), { onFileReferenceContextMenu: u, onBeforeTranscriptDisclosureChange: d, onPromptButtonSubmit: h } = uR();
  let p;
  e[0] !== h ? (p = h === void 0 ? void 0 : EFr(), e[0] = h, e[1] = p) : p = e[1];
  const g = p, [f, _] = yWh(false);
  let b;
  e[2] !== u ? (b = u ? (te, ee) => {
    u(te.nativeEvent, ee);
  } : void 0, e[2] = u, e[3] = b) : b = e[3];
  const y = b;
  let S;
  e[4] !== i ? (S = i?.trim(), e[4] = i, e[5] = S) : S = e[5];
  const k = S, C = vRS(null);
  let T, I;
  if (e[6] !== n.length || e[7] !== k ? (T = () => {
    const te = C.current;
    if (te === null || n.length > 0 || !k) {
      _(false);
      return;
    }
    const ee = () => {
      const ie = te.scrollHeight > te.clientHeight + 1;
      _((oe) => oe === ie ? oe : ie);
    };
    ee();
    const re = new ResizeObserver(ee);
    return re.observe(te), () => re.disconnect();
  }, I = [n.length, k], e[6] = n.length, e[7] = k, e[8] = T, e[9] = I) : (T = e[8], I = e[9]), _RS(T, I), n.length === 0 && !k) return null;
  const A = n.length > a, P = a - 1;
  let M;
  e[10] !== P || e[11] !== l || e[12] !== n || e[13] !== A ? (M = A && !l ? n.slice(0, P) : n, e[10] = P, e[11] = l, e[12] = n, e[13] = A, e[14] = M) : M = e[14];
  const O = M, N = n.length - P;
  let U;
  e[15] === /* @__PURE__ */ Symbol.for("react.memo_cache_sentinel") ? (U = { 0: { className: "ui-f6zju3 ui-1jkygx ui-cnij5n ui-1o7kk3e" }, 4: { className: "ui-f6zju3 ui-1jkygx ui-cnij5n ui-1o7kk3e ui-1hyak1l ui-1odjw0f ui-xqldzo" }, 2: { className: "ui-f6zju3 ui-1jkygx ui-cnij5n ui-1o7kk3e ui-kd0mra" }, 6: { className: "ui-f6zju3 ui-1jkygx ui-cnij5n ui-1o7kk3e ui-1hyak1l ui-1odjw0f ui-xqldzo ui-kd0mra" }, 1: { className: "ui-f6zju3 ui-1jkygx ui-cnij5n ui-1o7kk3e ui-178xt8z ui-13fuv20 ui-1aeic0j ui-1om1abp ui-1qaq26d" }, 5: { className: "ui-f6zju3 ui-1jkygx ui-cnij5n ui-1o7kk3e ui-1hyak1l ui-1odjw0f ui-xqldzo ui-178xt8z ui-13fuv20 ui-1aeic0j ui-1om1abp ui-1qaq26d" }, 3: { className: "ui-f6zju3 ui-1jkygx ui-cnij5n ui-1o7kk3e ui-kd0mra ui-178xt8z ui-13fuv20 ui-1aeic0j ui-1om1abp ui-1qaq26d" }, 7: { className: "ui-f6zju3 ui-1jkygx ui-cnij5n ui-1o7kk3e ui-1hyak1l ui-1odjw0f ui-xqldzo ui-kd0mra ui-178xt8z ui-13fuv20 ui-1aeic0j ui-1om1abp ui-1qaq26d" } }, e[15] = U) : U = e[15];
  const j = U[(n.length === 0) << 2 | !!(n.length === 0 && f) << 1 | (n.length > 0) << 0], $ = n.length > 0 ? `${n.length} ${n.length === 1 ? "File" : "Files"} Changed` : "Notes", H = n.length > 0 && !l && !k ? kWh.collapsedSafetyCap : void 0, G = n.length === 0;
  let q;
  e[16] !== $ ? (q = $_e(uh.HeaderContent, { children: $_e(uh.HeaderTitle, { children: $ }) }), e[16] = $, e[17] = q) : q = e[17];
  let K;
  e[18] !== n.length || e[19] !== r ? (K = r ? $_e(uh.HeaderTrailing, { children: $_e(An, { frame: "content", variant: "text", tone: "secondary", size: "sm", onClick: r, children: n.length > 0 ? "Review" : "Open" }) }) : null, e[18] = n.length, e[19] = r, e[20] = K) : K = e[20];
  let V;
  e[21] !== G || e[22] !== q || e[23] !== K ? (V = KSn(uh.Header, { variant: "flat", inset: 12, paddingBottom: G, children: [q, K] }), e[21] = G, e[22] = q, e[23] = K, e[24] = V) : V = e[24];
  let Y;
  e[25] !== l || e[26] !== n.length || e[27] !== y || e[28] !== A || e[29] !== N || e[30] !== d || e[31] !== s || e[32] !== O ? (Y = n.length > 0 ? KSn(uh.Rows, { children: [O.map((te) => $_e(yRS, { file: te, onFileClick: s, onFileContextMenu: y }, te.path)), A && !l ? $_e(uh.Row, { leading: $_e(zt, { name: "ellipsis", size: "base" }), ariaLabel: `Show ${N} more`, ariaExpanded: false, rootStyle: wWh.root, onClick: () => {
    d?.(), c(true);
  }, children: `Show ${N} more` }) : null] }) : null, e[25] = l, e[26] = n.length, e[27] = y, e[28] = A, e[29] = N, e[30] = d, e[31] = s, e[32] = O, e[33] = Y) : Y = e[33];
  let J;
  e[34] !== j || e[35] !== g || e[36] !== k ? (J = k ? $_e("div", { ref: C, "data-component": "end-of-turn-summary-brief", ...j, children: $_e(dT, { allowHtml: g !== void 0, customComponents: g, size: "sm", normalized: true, normalizedHeadingSpacing: "sectioned", children: k }) }) : null, e[34] = j, e[35] = g, e[36] = k, e[37] = J) : J = e[37];
  let Q;
  return e[38] !== V || e[39] !== Y || e[40] !== J || e[41] !== H ? (Q = KSn(uh.Root, { outdent: false, rootStyle: H, children: [V, Y, J] }), e[38] = V, e[39] = Y, e[40] = J, e[41] = H, e[42] = Q) : Q = e[42], Q;
}
var kWh, wWh, CWh, 
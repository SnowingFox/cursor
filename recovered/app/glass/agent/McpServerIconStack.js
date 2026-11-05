// @recovered-by cursor-re
// artifact: app/out/vs/workbench/workbench.glass.main.js sha256:6eb88cb60fce5bf5df2ee401f797d5e160b0bcb5d85c25e57d2576b467edce81
// module: McpServerIconStack.js range:15524863..15532014
// basis: inferred
// confidence: C
// method: split
// run: main 2026-11-05T10:03:45.231Z
// fragment: esbuild wrapper body + hoisted tail; may include adjacent declarations; not a standalone module
// deps: tslib.es6.js, McpServerIcon.js, McpServerIconChip.js
// path-candidate: none (no nls basename match; path inferred, confidence C)
// fragment: esbuild wrapper body + hoisted tail; may include adjacent declarations; not a standalone module
// deps: tslib.es6.js, McpServerIcon.js, McpServerIconChip.js
// path-candidate: none (no nls basename match; path inferred, confidence C)
$LS = L({ "McpServerIconStack.js"() {
  "use strict";
  E(), mKh(), fKh(), Iya = 3, qjt = 16, xya = hya, YKh = qjt - 2, XKh = 10, j6r = 5, y1n = 1;
} });
import { jsx as xkt, jsxs as S1n, Fragment as Aya } from "./react-runtime/react/esm-jsx-runtime-production.js";
import { c as HLS } from "./react-runtime/react/esm-compiler-runtime-production.js";
import { Fragment as WLS, useId as GLS, useRef as Rya, useState as qLS, useLayoutEffect as zLS } from "./react-runtime/react/esm-index-production.js";
function VLS(t) {
  if (!t || t.additions === 0 && t.deletions === 0) return;
  const e = [];
  return t.additions > 0 && e.push(`+${t.additions}`), t.deletions > 0 && e.push(`-${t.deletions}`), e.join(" ");
}
function KLS({ parts: t, fallbackDetails: e, pendingText: n, fileChangeStats: i }) {
  const r = t ? t.map((a) => a.text).join(", ") : e, s = n ? r ? `${r}, ${n}` : n : r, o = VLS(i);
  return o ? s ? `${s} ${o}` : o : s;
}
function YLS(t, e) {
  const n = e.length > 0 ? xkt(jLS, { servers: e }) : null, i = /* @__PURE__ */ new Map();
  return t.map((r, s) => {
    const o = i.get(r.kind) ?? 0;
    return i.set(r.kind, o + 1), S1n(WLS, { children: [s > 0 ? ", " : "", r.kind === "mcpTools" ? n : null, r.kind === "file" && r.compactText !== void 0 ? S1n(Aya, { children: [xkt("span", { className: "ui-t0psk2", "data-summary-variant": "expanded", children: r.text }), xkt("span", { className: "ui-1s85apg", "data-summary-variant": "compact", children: r.compactText })] }) : r.text] }, `${r.kind}:${o}`);
  });
}
function XLS({ line: t, header: e, chromeDetails: n, summaryDetails: i, chevron: r }) {
  const s = e.getBoundingClientRect(), o = n.getBoundingClientRect(), a = t.getBoundingClientRect(), l = i.getBoundingClientRect(), c = r.getBoundingClientRect(), u = t.lastElementChild, d = l.left - a.left + (u && u !== i ? u.getBoundingClientRect().right - l.right : 0), h = o.left - s.left, p = c.right - o.right;
  return i.scrollWidth + d + h + p + ZKh;
}
function ZLS(t) {
  const e = HLS(53), { action: n, parts: i, fallbackDetails: r, pendingText: s, mcpServers: o, fileChangeStats: a, chromeRefs: l, chromeReadyVersion: c } = t, u = GLS(), d = Rya(null), h = Rya(null), p = Rya(null), [g, f] = qLS(void 0);
  let _;
  e[0] !== r || e[1] !== a || e[2] !== i || e[3] !== s ? (_ = KLS({ parts: i, fallbackDetails: r, pendingText: s, fileChangeStats: a }), e[0] = r, e[1] = a, e[2] = i, e[3] = s, e[4] = _) : _ = e[4];
  const b = _;
  let y;
  e[5] !== i ? (y = i?.some(JLS), e[5] = i, e[6] = y) : y = e[6];
  const S = y === true;
  let k;
  e[7] !== n || e[8] !== a || e[9] !== S || e[10] !== o || e[11] !== i || e[12] !== s ? (k = S ? JSON.stringify({ action: n, parts: i, pendingText: s, fileChangeStats: a, mcpServerIds: o.map(QLS) }) : void 0, e[7] = n, e[8] = a, e[9] = S, e[10] = o, e[11] = i, e[12] = s, e[13] = k) : k = e[13];
  const C = k, T = C === void 0 ? void 0 : g;
  let I, A;
  if (e[14] !== c || e[15] !== l || e[16] !== C || e[17] !== u ? (I = () => {
    if (C === void 0 || c === 0) return;
    const ae = d.current, de = h.current, he = l.header.current, ge = l.details.current, pe = p.current, ve = l.chevron.current;
    if (!ae || !de || !he || !ge || !pe || !ve) return;
    ae.removeAttribute("data-activity-group-summary-id");
    const fe = XLS({ line: de, header: he, chromeDetails: ge, summaryDetails: pe, chevron: ve });
    ae.setAttribute("data-activity-group-summary-id", u), f(fe);
  }, A = [c, l, C, u], e[14] = c, e[15] = l, e[16] = C, e[17] = u, e[18] = I, e[19] = A) : (I = e[18], A = e[19]), zLS(I, A), !b) return;
  const P = T === void 0 ? void 0 : `[data-activity-group-summary-id="${u}"] [data-summary-variant="expanded"] { display: none; }
[data-activity-group-summary-id="${u}"] [data-summary-variant="compact"] { display: inline; }
@container (min-width: ${T}px) {
  [data-activity-group-summary-id="${u}"] [data-summary-variant="expanded"] { display: inline; }
  [data-activity-group-summary-id="${u}"] [data-summary-variant="compact"] { display: none; }
}`;
  let M;
  e[20] === /* @__PURE__ */ Symbol.for("react.memo_cache_sentinel") ? (M = { className: "ui-1lliihq ui-193iq5w ui-euugli ui-6ikm8r ui-10wlt62" }, e[20] = M) : M = e[20];
  const O = M;
  let N;
  e[21] === /* @__PURE__ */ Symbol.for("react.memo_cache_sentinel") ? (N = { className: "ui-1pha0wt ui-78zum5 ui-euugli ui-6ikm8r ui-10wlt62" }, e[21] = N) : N = e[21];
  const U = N;
  let j;
  e[22] === /* @__PURE__ */ Symbol.for("react.memo_cache_sentinel") ? (j = { className: "ui-1lliihq ui-s83m0k ui-euugli ui-6ikm8r ui-10wlt62 ui-lyipyv ui-jlip5 ui-kyw5k8" }, e[22] = j) : j = e[22];
  const $ = j;
  let H;
  e[23] === /* @__PURE__ */ Symbol.for("react.memo_cache_sentinel") ? (H = { className: "ui-3nfvp2 ui-2lah0s" }, e[23] = H) : H = e[23];
  const G = H;
  let q;
  e[24] === /* @__PURE__ */ Symbol.for("react.memo_cache_sentinel") ? (q = { className: "ui-10l6tqk ui-1i1rx1s ui-jm9jq1 ui-exx8yu ui-1xpa7k ui-18d9i69 ui-1uhho1l ui-6ikm8r ui-10wlt62 ui-1hyvwdk ui-1qty7v1 ui-jlip5" }, e[24] = q) : q = e[24];
  const K = q;
  let V;
  e[25] !== r || e[26] !== o || e[27] !== i ? (V = i ? YLS(i, o) : r, e[25] = r, e[26] = o, e[27] = i, e[28] = V) : V = e[28];
  const Y = V;
  let J;
  e[29] !== Y || e[30] !== s ? (J = s ? S1n(Aya, { children: [Y, Y ? `, ${s}` : s] }) : Y, e[29] = Y, e[30] = s, e[31] = J) : J = e[31];
  const Q = J, te = a !== void 0 && (a.additions > 0 || a.deletions > 0);
  let ee;
  e[32] !== P || e[33] !== u ? (ee = P ? xkt("style", { "data-activity-group-summary-style": u, children: P }) : null, e[32] = P, e[33] = u, e[34] = ee) : ee = e[34];
  let re;
  e[35] !== b ? (re = xkt("span", { className: K.className, style: K.style, "data-activity-group-summary-accessible": true, children: b }), e[35] = b, e[36] = re) : re = e[36];
  let ie;
  e[37] !== Q ? (ie = xkt("span", { ref: p, className: $.className, style: $.style, "data-activity-group-summary-details": true, children: Q }), e[37] = Q, e[38] = ie) : ie = e[38];
  let oe;
  e[39] !== a || e[40] !== te ? (oe = te ? xkt("span", { className: G.className, style: G.style, "data-activity-group-summary-file-change-stats": true, children: xkt(LGh, { additions: a.additions, deletions: a.deletions }) }) : null, e[39] = a, e[40] = te, e[41] = oe) : oe = e[41];
  let se;
  e[42] !== ie || e[43] !== oe ? (se = S1n("span", { ref: h, className: U.className, style: U.style, "aria-hidden": true, "data-activity-group-summary-line": true, children: [ie, oe] }), e[42] = ie, e[43] = oe, e[44] = se) : se = e[44];
  let le;
  e[45] !== T || e[46] !== u || e[47] !== re || e[48] !== se ? (le = S1n("span", { ref: d, className: O.className, style: O.style, "data-activity-group-summary": true, "data-activity-group-summary-id": u, "data-expanded-min-width": T, children: [re, se] }), e[45] = T, e[46] = u, e[47] = re, e[48] = se, e[49] = le) : le = e[49];
  let ce;
  return e[50] !== ee || e[51] !== le ? (ce = S1n(Aya, { children: [ee, le] }), e[50] = ee, e[51] = le, e[52] = ce) : ce = e[52], ce;
}
function QLS(t) {
  return t.id;
}
function JLS(t) {
  return t.kind === "file" && t.compactText !== void 0;
}
var ZKh, QKh, JKh, 
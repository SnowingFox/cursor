// @recovered-by cursor-re
// artifact: app/out/vs/workbench/workbench.glass.main.js sha256:6eb88cb60fce5bf5df2ee401f797d5e160b0bcb5d85c25e57d2576b467edce81
// module: AgentTranscriptMcpToolCallLine.js range:15577928..15581546
// basis: esbuild-wrapper + inferred
// confidence: C
// method: split
// run: glass-composer 2026-11-05T10:19:48.876Z
// deps: E, AO, nKh, rKh, gya, m2e, HFe, c0e, hL, Uya, BW, Q3
// wrapper-init: GOS
// hoisted-owner: AgentTranscriptPlanCard.js (app-out-vs-workbench-workbench-glass-main-js:2445); trailing declarations ownership inferred from segment adjacency
// path: null (no unique nls candidate; inferred only)
// renamed: none

GOS = L({ "AgentTranscriptMcpToolCallLine.js"() {
  "use strict";
  E(), AO(), nKh(), rKh(), gya(), m2e(), HFe(), c0e(), hL(), Uya(), BW(), Q3(), RYh = `

`;
} });
import { jsx as Vjt, jsxs as V6r } from "./react-runtime/react/esm-jsx-runtime-production.js";
import { c as qOS } from "./react-runtime/react/esm-compiler-runtime-production.js";
function $ya(t) {
  const e = qOS(31), { title: n, detail: i, overview: r, onOpen: s, buildControls: o } = t, l = (i === void 0 ? "ide" : i) === "glass", c = l && s !== void 0, u = !l && !!r, d = !l && s !== void 0, h = !l && o !== void 0, p = d || h, g = u || p;
  let f;
  e[0] === /* @__PURE__ */ Symbol.for("react.memo_cache_sentinel") ? (f = { className: "ui-2lah0s" }, e[0] = f) : f = e[0];
  const _ = f.className;
  let b;
  e[1] === /* @__PURE__ */ Symbol.for("react.memo_cache_sentinel") ? (b = { className: "ui-78zum5 ui-6s0dn4 ui-ehausa ui-euugli ui-98rzlu ui-f6zju3 ui-cnij5n" }, e[1] = b) : b = e[1];
  const y = b;
  let S;
  e[2] === /* @__PURE__ */ Symbol.for("react.memo_cache_sentinel") ? (S = { className: "ui-78zum5 ui-dt5ytf ui-ehausa ui-1meegvc ui-1xlntvz ui-4pf3lq" }, e[2] = S) : S = e[2];
  const k = S;
  let C;
  e[3] === /* @__PURE__ */ Symbol.for("react.memo_cache_sentinel") ? (C = { className: "ui-78zum5 ui-6s0dn4 ui-13a6bvl ui-pkkfsy ui-1a02dak" }, e[3] = C) : C = e[3];
  const T = C;
  let I;
  e[4] === /* @__PURE__ */ Symbol.for("react.memo_cache_sentinel") ? (I = { className: "ui-8kmwxx ui-4b2ntj ui-1qdabqz" }, e[4] = I) : I = e[4];
  const A = I;
  let P;
  e[5] === /* @__PURE__ */ Symbol.for("react.memo_cache_sentinel") ? (P = { className: "ui-78zum5 ui-dt5ytf ui-xhr3t ui-1iyjqo2 ui-s83m0k ui-dl72j9 ui-euugli" }, e[5] = P) : P = e[5];
  const M = P;
  let O;
  e[6] === /* @__PURE__ */ Symbol.for("react.memo_cache_sentinel") ? (O = { className: "ui-1ja60sm ui-19aaqeu" }, e[6] = O) : O = e[6];
  const N = O;
  let U;
  e[7] === /* @__PURE__ */ Symbol.for("react.memo_cache_sentinel") ? (U = Vjt(nn, { ...N, color: "secondary", children: "Created Plan" }), e[7] = U) : U = e[7];
  let j;
  e[8] !== n ? (j = V6r("div", { className: M.className, style: M.style, children: [U, Vjt(nn, { color: "primary", "data-testid": "composer-plan-filename", rootStyle: PYh.summaryTitle, size: "lg", truncate: true, weight: "medium", children: n })] }), e[8] = n, e[9] = j) : j = e[9];
  const $ = j, H = c ? "default" : "flat";
  let G;
  e[10] !== c ? (G = c ? Vjt(zt, { "aria-hidden": true, className: _, color: "tertiary", name: "chevron-right", size: "base" }) : null, e[10] = c, e[11] = G) : G = e[11];
  let q;
  e[12] !== $ || e[13] !== G ? (q = V6r("div", { ...y, children: [$, G] }), e[12] = $, e[13] = G, e[14] = q) : q = e[14];
  const K = c ? s : void 0;
  let V;
  e[15] !== o || e[16] !== g || e[17] !== p || e[18] !== s || e[19] !== r || e[20] !== h || e[21] !== u || e[22] !== d ? (V = g ? V6r("div", { ...k, children: [u && r ? Vjt("div", { ...A, children: Vjt(dT, { size: "sm", children: r }) }) : null, p ? V6r("div", { ...T, children: [d ? Vjt(An, { onClick: s, variant: "text", children: "View Plan" }) : null, h ? o : null] }) : null] }) : null, e[15] = o, e[16] = g, e[17] = p, e[18] = s, e[19] = r, e[20] = h, e[21] = u, e[22] = d, e[23] = V) : V = e[23];
  let Y;
  return e[24] !== g || e[25] !== H || e[26] !== q || e[27] !== K || e[28] !== V || e[29] !== n ? (Y = Vjt(GSn, { expanded: g, expandable: false, headerVariant: H, headerDivider: false, header: q, headerTitle: n, onHeaderClick: K, children: V }), e[24] = g, e[25] = H, e[26] = q, e[27] = K, e[28] = V, e[29] = n, e[30] = Y) : Y = e[30], Y;
}
var PYh, 
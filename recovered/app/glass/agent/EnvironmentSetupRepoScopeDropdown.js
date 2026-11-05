// @recovered-by cursor-re
// artifact: app/out/vs/workbench/workbench.glass.main.js sha256:6eb88cb60fce5bf5df2ee401f797d5e160b0bcb5d85c25e57d2576b467edce81
// module: EnvironmentSetupRepoScopeDropdown.js range:22974469..22978744
// basis: inferred
// confidence: C
// method: split
// run: main 2026-11-05T10:03:45.204Z
// fragment: esbuild wrapper body + hoisted tail; may include adjacent declarations; not a standalone module
// deps: tslib.es6.js, index.js, env-setup-secret.js
// path-candidate: none (no nls basename match; path inferred, confidence C)
// fragment: esbuild wrapper body + hoisted tail; may include adjacent declarations; not a standalone module
// deps: tslib.es6.js, index.js, env-setup-secret.js
// path-candidate: none (no nls basename match; path inferred, confidence C)
hGm = L({ "EnvironmentSetupRepoScopeDropdown.js"() {
  "use strict";
  E(), Mt(), sts(), ots = { type: "all" };
} });
import { jsx as DCe, jsxs as mQa } from "./react-runtime/react/esm-jsx-runtime-production.js";
import { c as pGm } from "./react-runtime/react/esm-compiler-runtime-production.js";
import { useState as cek, Fragment as uek } from "./react-runtime/react/esm-index-production.js";
function dek() {
  const t = pGm(1);
  let e;
  return t[0] === /* @__PURE__ */ Symbol.for("react.memo_cache_sentinel") ? (e = DCe("span", { "aria-hidden": "true", className: "cursor-ui-3nfvp2 cursor-ui-ek66a6 cursor-ui-1q5geii cursor-ui-2lah0s cursor-ui-6s0dn4 cursor-ui-l56j7k", children: DCe("span", { "data-component": "environment-setup-blocked-status-dot", className: "cursor-ui-19j8p08 cursor-ui-1feg4er cursor-ui-1i4c3av cursor-ui-1h2qwge" }) }), t[0] = e) : e = t[0], e;
}
function hek(t) {
  const e = pGm(40), { items: n, collapsed: i, isBusy: r, loadingItemKey: s, maxHeight: o, onCollapsedChange: a, onPrimary: l, onReviewEnvironment: c, onSecondary: u, role: d, size: h, wrapLabels: p } = t, g = r === void 0 ? false : r, f = s === void 0 ? null : s, _ = p === void 0 ? false : p, [b, y] = cek(false), S = i ?? b;
  if (n.length === 0) return null;
  let k;
  e[0] === /* @__PURE__ */ Symbol.for("react.memo_cache_sentinel") ? (k = { height: "auto" }, e[0] = k) : k = e[0];
  let C;
  e[1] === /* @__PURE__ */ Symbol.for("react.memo_cache_sentinel") ? (C = DCe(fi.HeaderContent, { children: DCe(fi.HeaderTitle, { tone: "muted", children: "Agent is blocked" }) }), e[1] = C) : C = e[1];
  let T;
  e[2] !== c ? (T = c ? DCe(An, { onClick: c, size: "sm", style: mGm, type: "button", variant: "text", children: "Review" }) : null, e[2] = c, e[3] = T) : T = e[3];
  const I = S ? "Expand blocked environment setup tasks" : "Collapse blocked environment setup tasks", A = S ? "chevron-up" : "chevron-down";
  let P;
  e[4] !== S || e[5] !== i || e[6] !== a ? (P = () => {
    i === void 0 && y(!S), a?.(!S);
  }, e[4] = S, e[5] = i, e[6] = a, e[7] = P) : P = e[7];
  let M;
  e[8] !== I || e[9] !== A || e[10] !== P ? (M = DCe(fi.HeaderActionButton, { "aria-label": I, icon: A, onClick: P }), e[8] = I, e[9] = A, e[10] = P, e[11] = M) : M = e[11];
  let O;
  e[12] !== M || e[13] !== T ? (O = mQa(fi.HeaderTrailing, { children: [T, M] }), e[12] = M, e[13] = T, e[14] = O) : O = e[14];
  let N;
  e[15] !== S || e[16] !== O ? (N = mQa(fi.Header, { paddingBottom: S, children: [C, O] }), e[15] = S, e[16] = O, e[17] = N) : N = e[17];
  let U;
  if (e[18] !== g || e[19] !== n || e[20] !== f || e[21] !== l || e[22] !== u || e[23] !== _) {
    let H;
    e[25] !== g || e[26] !== f || e[27] !== l || e[28] !== u || e[29] !== _ ? (H = (G) => {
      const q = f === G.key, K = g || q || G.primaryDisabledReason !== void 0 || !G.canActivatePrimary, V = G.secondaryLabel ? [{ label: G.secondaryLabel, onClick: () => u(G.key), variant: G.secondaryLabel === "Skip" ? "ghost" : "text", disabled: g || q }] : void 0, Y = DCe(fi.Row, { "aria-label": G.canActivatePrimary ? `${G.label}: ${G.primaryLabel}` : G.label, disabled: K, hoverActions: V, label: _ ? DCe("span", { "data-component": "environment-setup-blocked-wrapping-label", className: "cursor-ui-126k92a cursor-ui-j0a0fe", children: G.label }) : G.label, leading: DCe(dek, {}), onClick: G.canActivatePrimary ? () => {
        l(G.key);
      } : void 0 });
      return DCe(uek, { children: G.primaryDisabledReason ? DCe(xs, { content: DCe(ao, { title: G.primaryDisabledReason }), children: Y }) : Y }, G.key);
    }, e[25] = g, e[26] = f, e[27] = l, e[28] = u, e[29] = _, e[30] = H) : H = e[30], U = n.map(H), e[18] = g, e[19] = n, e[20] = f, e[21] = l, e[22] = u, e[23] = _, e[24] = U;
  } else U = e[24];
  let j;
  e[31] !== U ? (j = DCe(fi.Rows, { children: U }), e[31] = U, e[32] = j) : j = e[32];
  let $;
  return e[33] !== S || e[34] !== o || e[35] !== d || e[36] !== h || e[37] !== N || e[38] !== j ? ($ = mQa(fi.Root, { "data-component": "environment-setup-blocked-tray", enableKeyboardNavigation: false, maxHeight: o, role: d, scrollAreaCollapsed: S, size: h, style: k, visible: true, children: [N, j] }), e[33] = S, e[34] = o, e[35] = d, e[36] = h, e[37] = N, e[38] = j, e[39] = $) : $ = e[39], $;
}
var mGm, 
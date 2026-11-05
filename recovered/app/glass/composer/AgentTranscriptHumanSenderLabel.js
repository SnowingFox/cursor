// @recovered-by cursor-re
// artifact: app/out/vs/workbench/workbench.glass.main.js sha256:6eb88cb60fce5bf5df2ee401f797d5e160b0bcb5d85c25e57d2576b467edce81
// module: AgentTranscriptHumanSenderLabel.js range:15640632..15645165
// basis: esbuild-wrapper + inferred
// confidence: C
// method: split
// run: glass-composer 2026-11-05T10:19:48.876Z
// deps: E, fd
// wrapper-init: dXh
// hoisted-owner: AgentTranscriptMcpAuthCard.js (app-out-vs-workbench-workbench-glass-main-js:2458); trailing declarations ownership inferred from segment adjacency
// path: null (no unique nls candidate; inferred only)
// renamed: none

var dXh = L({ "AgentTranscriptHumanSenderLabel.js"() {
  "use strict";
  E(), fd();
} });
import { jsx as W_e, jsxs as I1n } from "./react-runtime/react/esm-jsx-runtime-production.js";
import { c as sSa } from "./react-runtime/react/esm-compiler-runtime-production.js";
function hXh(t, e) {
  t.stopPropagation(), e?.();
}
function iFS(t, e, n) {
  switch (t) {
    case "pending":
      return `Connect with ${e}`;
    case "authenticating":
      return `Authenticating ${e}...`;
    case "authenticated":
      return n ? `${e} is already authenticated` : `${e} is authenticated`;
    case "skipped":
      return `Skipped authentication for ${e}`;
    default:
      return t;
  }
}
function pXh(t) {
  const e = sSa(13), { errorMessage: n } = t, [i, r] = j_e(false), s = SFr("mcpAuthToolCall")?.error ?? "MCP authentication";
  let o;
  e[0] !== r ? (o = () => r(rFS), e[0] = r, e[1] = o) : o = e[1];
  let a, l;
  e[2] === /* @__PURE__ */ Symbol.for("react.memo_cache_sentinel") ? (a = W_e(nn, { as: "span", color: "secondary", size: "md", children: s }), l = W_e(nn, { as: "span", color: "tertiary", size: "md", truncate: true, children: vXh }), e[2] = a, e[3] = l) : (a = e[2], l = e[3]);
  let c;
  e[4] !== i || e[5] !== o ? (c = I1n("button", { "aria-expanded": i, "data-component": "mcp-auth-error", onClick: o, type: "button", className: "ui-78zum5 ui-6s0dn4 ui-11twubx ui-h8yej3 ui-1ghz6dp ui-1717udv ui-c342km ui-ng3xce ui-jbqb8w ui-uxw1ft ui-6ikm8r ui-10wlt62 ui-lyipyv ui-87ps6o ui-1ypdohk ui-dpxx8g ui-jb2p0i ui-11wthnw ui-1vwwtox ui-19aaqeu", children: [a, l] }), e[4] = i, e[5] = o, e[6] = c) : c = e[6];
  let u;
  e[7] !== n || e[8] !== i ? (u = i ? W_e(nn, { as: "div", color: "tertiary", "data-component": "mcp-auth-error-details", rootStyle: _Xh.errorDetails, size: "md", children: n }) : null, e[7] = n, e[8] = i, e[9] = u) : u = e[9];
  let d;
  return e[10] !== c || e[11] !== u ? (d = I1n("div", { className: "ui-198po50", children: [c, u] }), e[10] = c, e[11] = u, e[12] = d) : d = e[12], d;
}
function rFS(t) {
  return !t;
}
function sFS(t) {
  const e = sSa(3), { serverId: n, iconSrc: i } = t;
  let r;
  return e[0] !== i || e[1] !== n ? (r = W_e(uh.HeaderIcon, { color: "secondary", children: W_e(pya, { serverId: n, src: i }) }), e[0] = i, e[1] = n, e[2] = r) : r = e[2], r;
}
function mXh(t) {
  const e = sSa(33), { state: n, serverLabel: i, alreadyAuthenticated: r, serverIdentifier: s, iconSrc: o, showTimeout: a, timeoutStartedAtMs: l, timeoutMs: c, onSkip: u, onAuthenticate: d } = t, h = r === void 0 ? false : r, p = a === void 0 ? false : a, g = c === void 0 ? gXh : c, f = n === "pending", _ = n === "authenticating", b = (f || _) && d !== void 0, y = !b;
  let S;
  e[0] !== o || e[1] !== s ? (S = W_e(uh.HeaderLeading, { children: W_e(sFS, { iconSrc: o, serverId: s }) }), e[0] = o, e[1] = s, e[2] = S) : S = e[2];
  let k;
  e[3] !== h || e[4] !== i || e[5] !== n ? (k = iFS(n, i, h), e[3] = h, e[4] = i, e[5] = n, e[6] = k) : k = e[6];
  let C;
  e[7] !== k ? (C = W_e(uh.HeaderTitle, { children: k }), e[7] = k, e[8] = C) : C = e[8];
  let T;
  e[9] !== _ || e[10] !== f ? (T = f || _ ? W_e(uh.HeaderDescription, { lineClamp: 2, children: fXh }) : null, e[9] = _, e[10] = f, e[11] = T) : T = e[11];
  let I;
  e[12] !== C || e[13] !== T ? (I = I1n(uh.HeaderContent, { children: [C, T] }), e[12] = C, e[13] = T, e[14] = I) : I = e[14];
  let A;
  e[15] !== y || e[16] !== S || e[17] !== I ? (A = I1n(uh.Header, { variant: "flat", paddingBottom: y, children: [S, I] }), e[15] = y, e[16] = S, e[17] = I, e[18] = A) : A = e[18];
  let P;
  e[19] !== _ || e[20] !== d || e[21] !== u || e[22] !== b ? (P = b ? W_e(uh.Footer, { secondaryAction: u ? W_e(An, { onClick: (N) => hXh(N, u), children: "Skip" }) : void 0, primaryAction: W_e(An, { variant: "primary", onClick: (N) => hXh(N, d), children: _ ? I1n("span", { className: "ui-3nfvp2 ui-6s0dn4 ui-11twubx", children: [W_e(Yg, { variant: "ring", indeterminate: true, size: "sm" }), "Authenticating..."] }) : "Authenticate" }) }) : null, e[19] = _, e[20] = d, e[21] = u, e[22] = b, e[23] = P) : P = e[23];
  let M;
  e[24] !== f || e[25] !== p || e[26] !== g || e[27] !== l ? (M = p ? W_e(uh.Timeout, { durationMs: g, fill: f ? "visible" : "hidden", startedAtMs: l }) : null, e[24] = f, e[25] = p, e[26] = g, e[27] = l, e[28] = M) : M = e[28];
  let O;
  return e[29] !== A || e[30] !== P || e[31] !== M ? (O = I1n(uh.Root, { children: [A, P, M] }), e[29] = A, e[30] = P, e[31] = M, e[32] = O) : O = e[32], O;
}
var gXh, fXh, vXh, _Xh, 
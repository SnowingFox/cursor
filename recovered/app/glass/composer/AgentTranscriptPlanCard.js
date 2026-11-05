// @recovered-by cursor-re
// artifact: app/out/vs/workbench/workbench.glass.main.js sha256:6eb88cb60fce5bf5df2ee401f797d5e160b0bcb5d85c25e57d2576b467edce81
// module: AgentTranscriptPlanCard.js range:15581546..15587878
// basis: esbuild-wrapper + inferred
// confidence: C
// method: split
// run: glass-composer 2026-11-05T10:19:48.876Z
// deps: E, Lz, dy, nmi, fd, P0
// wrapper-init: MYh
// hoisted-owner: AgentTranscriptSwitchModeCard.js (app-out-vs-workbench-workbench-glass-main-js:2446); trailing declarations ownership inferred from segment adjacency
// path: null (no unique nls candidate; inferred only)
// renamed: none

MYh = L({ "AgentTranscriptPlanCard.js"() {
  "use strict";
  E(), Lz(), dy(), nmi(), fd(), P0(), PYh = { summaryTitle: { kb6lSQ: "ui-1i21sxh", kHjlTd: "ui-j0a0fe", $$css: true } };
} });
import { jsx as KY, jsxs as Kjt } from "./react-runtime/react/esm-jsx-runtime-production.js";
import { c as zOS } from "./react-runtime/react/esm-compiler-runtime-production.js";
import { useState as VOS } from "./react-runtime/react/esm-index-production.js";
function DYh(t, e) {
  t.stopPropagation(), e?.();
}
function NYh(t) {
  return OYh[t.toLowerCase()] ?? t;
}
function KOS(t) {
  return FYh[t.toLowerCase()] ?? "var(--cursor-text-secondary, var(--vscode-descriptionForeground))";
}
function YOS(t) {
  switch (t) {
    case "alwaysAsk":
      return "Always ask";
    case "alwaysRun":
      return "Always run";
    default:
      return t;
  }
}
function XOS(t) {
  switch (t) {
    case "skipped":
      return "Skipped switch to ";
    case "switched":
      return "Switched to ";
    case "pending":
      return "Switch to ";
    default:
      return t;
  }
}
function ZOS(t, e) {
  return e === "timeout" ? `The agent's request to switch to ${t} Mode timed out without a response` : `The agent requested to switch to ${t} Mode, but it was skipped by the user`;
}
function Hya(t) {
  const e = zOS(70), { state: n, toModeId: i, explanation: r, skipReason: s, decisionStartTimeMs: o, acceptKeybindingLabel: a, onSkip: l, onSwitch: c } = t, u = n === "pending", d = n === "skipped", h = NYh(i);
  let p;
  e[0] !== i ? (p = KOS(i), e[0] = i, e[1] = p) : p = e[1];
  const g = p, f = u && (l !== void 0 || c !== void 0);
  let _;
  e[2] !== r || e[3] !== n ? (_ = !!r?.trim() && n !== "skipped", e[2] = r, e[3] = n, e[4] = _) : _ = e[4];
  const b = _, [y, S] = VOS("alwaysAsk"), k = f && o !== void 0, C = d ? "debug-step-over" : "arrow-swap";
  let T;
  e[5] !== y ? (T = YOS(y), e[5] = y, e[6] = T) : T = e[6];
  let I;
  e[7] === /* @__PURE__ */ Symbol.for("react.memo_cache_sentinel") ? (I = KY(zt, { "aria-hidden": true, name: "chevron-down", size: "sm" }), e[7] = I) : I = e[7];
  let A;
  e[8] !== T ? (A = KY(hn.Trigger, { children: KY(An, { frame: "content", variant: "text", children: Kjt("span", { className: "ui-3nfvp2 ui-6s0dn4 ui-11twubx", children: [T, I] }) }) }), e[8] = T, e[9] = A) : A = e[9];
  let P, M, O;
  e[10] === /* @__PURE__ */ Symbol.for("react.memo_cache_sentinel") ? (P = (pe) => {
    (pe === "alwaysAsk" || pe === "alwaysRun") && S(pe);
  }, M = KY(hn.RadioItem, { value: "alwaysAsk", children: "Always ask" }), O = KY(hn.RadioItem, { value: "alwaysRun", children: "Always run" }), e[10] = P, e[11] = M, e[12] = O) : (P = e[10], M = e[11], O = e[12]);
  let N;
  e[13] !== y ? (N = KY(hn.Content, { "aria-label": "Mode switch preference", width: 180, placement: "bottom-start", offset: 4, children: Kjt(hn.RadioGroup, { "aria-label": "Mode switch preference", value: y, onValueChange: P, children: [M, O] }) }), e[13] = y, e[14] = N) : N = e[14];
  let U;
  e[15] !== A || e[16] !== N ? (U = Kjt(hn, { children: [A, N] }), e[15] = A, e[16] = N, e[17] = U) : U = e[17];
  const j = U, $ = !f, H = d ? void 0 : "icon";
  let G;
  e[18] !== g || e[19] !== d ? (G = d ? void 0 : { color: g }, e[18] = g, e[19] = d, e[20] = G) : G = e[20];
  let q;
  e[21] === /* @__PURE__ */ Symbol.for("react.memo_cache_sentinel") ? (q = { 0: { className: "ui-78zum5 ui-6s0dn4 ui-l56j7k ui-1heor9g" }, 1: { className: "ui-78zum5 ui-6s0dn4 ui-l56j7k ui-1heor9g ui-1ks1olk" } }, e[21] = q) : q = e[21];
  const K = q[!!u << 0];
  let V;
  e[22] !== C ? (V = KY(One, { "aria-hidden": true, name: C, size: "sm", glyphSize: 13 }), e[22] = C, e[23] = V) : V = e[23];
  let Y;
  e[24] !== K || e[25] !== V ? (Y = KY("span", { ...K, children: V }), e[24] = K, e[25] = V, e[26] = Y) : Y = e[26];
  let J;
  e[27] !== H || e[28] !== G || e[29] !== Y ? (J = KY(uh.HeaderLeading, { children: KY(uh.HeaderIcon, { color: "secondary", children: KY("span", { "data-switch-mode-accent": H, style: G, children: Y }) }) }), e[27] = H, e[28] = G, e[29] = Y, e[30] = J) : J = e[30];
  let Q;
  e[31] !== n ? (Q = XOS(n), e[31] = n, e[32] = Q) : Q = e[32];
  let te;
  e[33] !== g ? (te = { color: g }, e[33] = g, e[34] = te) : te = e[34];
  const ee = h ? `${h} Mode` : "Mode";
  let re;
  e[35] !== te || e[36] !== ee ? (re = KY("span", { "data-switch-mode-accent": "label", style: te, children: ee }), e[35] = te, e[36] = ee, e[37] = re) : re = e[37];
  const ie = u ? "?" : null;
  let oe;
  e[38] !== Q || e[39] !== re || e[40] !== ie ? (oe = Kjt(uh.HeaderTitle, { children: [Q, re, ie] }), e[38] = Q, e[39] = re, e[40] = ie, e[41] = oe) : oe = e[41];
  let se;
  e[42] !== r || e[43] !== b ? (se = b ? KY(uh.HeaderDescription, { lineClamp: 2, children: r }) : null, e[42] = r, e[43] = b, e[44] = se) : se = e[44];
  let le;
  e[45] !== oe || e[46] !== se ? (le = Kjt(uh.HeaderContent, { children: [oe, se] }), e[45] = oe, e[46] = se, e[47] = le) : le = e[47];
  let ce;
  e[48] !== $ || e[49] !== J || e[50] !== le ? (ce = Kjt(uh.Header, { variant: "flat", paddingBottom: $, children: [J, le] }), e[48] = $, e[49] = J, e[50] = le, e[51] = ce) : ce = e[51];
  let ae;
  e[52] !== g || e[53] !== a || e[54] !== l || e[55] !== c || e[56] !== y || e[57] !== j || e[58] !== f ? (ae = f && c ? KY(uh.Footer, { insetLeading: true, tertiaryAction: j, secondaryAction: l ? KY(An, { variant: "text", onClick: (pe) => DYh(pe, l), children: "Skip" }) : void 0, primaryAction: KY(An, { variant: "primary", style: { backgroundColor: g }, kbs: a, onClick: (pe) => DYh(pe, () => c(y === "alwaysRun")), children: "Switch" }) }) : null, e[52] = g, e[53] = a, e[54] = l, e[55] = c, e[56] = y, e[57] = j, e[58] = f, e[59] = ae) : ae = e[59];
  let de;
  e[60] !== g || e[61] !== o || e[62] !== k ? (de = k ? KY(uh.Timeout, { durationMs: LYh, fillColor: g, startedAtMs: o }) : null, e[60] = g, e[61] = o, e[62] = k, e[63] = de) : de = e[63];
  let he;
  e[64] !== ce || e[65] !== ae || e[66] !== de ? (he = Kjt(uh.Root, { children: [ce, ae, de] }), e[64] = ce, e[65] = ae, e[66] = de, e[67] = he) : he = e[67];
  const ge = he;
  if (d) {
    let pe;
    return e[68] !== ge ? (pe = KY("div", { children: ge }), e[68] = ge, e[69] = pe) : pe = e[69], KY(xs, { content: ZOS(h || "the requested", s), children: pe });
  }
  return ge;
}
var LYh, OYh, FYh, 
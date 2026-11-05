// @recovered-by cursor-re
// artifact: app/out/vs/workbench/workbench.glass.main.js sha256:6eb88cb60fce5bf5df2ee401f797d5e160b0bcb5d85c25e57d2576b467edce81
// module: AgentTranscriptTurnActions.js range:15955500..15961625
// basis: esbuild-wrapper + inferred
// confidence: C
// method: split
// run: glass-composer 2026-11-05T10:19:48.876Z
// deps: E, jep, AO, tka, qu, dy, R7t, m2, hL, BW, Q3, I9r, fd, Gep, X7t, wpi, Rkt
// wrapper-init: oka
// hoisted-owner: AgentTranscriptSentMessageActions.js (app-out-vs-workbench-workbench-glass-main-js:2557); trailing declarations ownership inferred from segment adjacency
// path: null (no unique nls candidate; inferred only)
// renamed: none

oka = L({ "AgentTranscriptTurnActions.js"() {
  "use strict";
  E(), jep(), AO(), tka(), qu(), dy(), R7t(), m2(), hL(), BW(), Q3(), I9r(), fd(), Gep(), X7t(), wpi(), Rkt(), Z1n = 450, Xep = 6e4, Zep = { includeAgo: true, nowLabel: "Just now" }, zkt = { bar: { k1xSpc: "ui-78zum5", kGNEyG: "ui-6s0dn4", k7Eaqz: "ui-euugli", kOIVth: "ui-11twubx", "--turn-actions-timestamp-opacity": "ui-11y6kxe", $$css: true }, feedbackAskLabel: { khDVqt: "ui-uxw1ft", kVQacm: "ui-b3r6kr", kg5iWk: "ui-lyipyv", kfSwDN: "ui-87ps6o", kwRFfy: "ui-1tlft3r", k7Eaqz: "ui-euugli", kLWn49: "ui-o5v014", $$css: true }, feedbackAskButtons: { k1xSpc: "ui-78zum5", kXwgrk: "ui-1q0g3np", kGNEyG: "ui-6s0dn4", kmuXW: "ui-2lah0s", kOIVth: "ui-11twubx", $$css: true }, feedbackAskDivider: { kSGwAc: "ui-kh2ocl", kmuXW: "ui-2lah0s", kzqmXN: "ui-1i1rx1s", kUOVxO: "ui-a46pd", kqGvvJ: "ui-3kytfb", kWkggS: "ui-1m4ooaa", $$css: true }, trailingActions: { k1xSpc: "ui-78zum5", kXwgrk: "ui-1q0g3np", kGNEyG: "ui-6s0dn4", k7Eaqz: "ui-euugli", kOIVth: "ui-137clkk", $$css: true }, timestamp: { kZCmMZ: "ui-v853mj", kLWn49: "ui-o5v014", kkrTdU: "ui-1ypdohk", k7Eaqz: "ui-euugli", kVQacm: "ui-b3r6kr", kg5iWk: "ui-lyipyv", khDVqt: "ui-uxw1ft", $$css: true }, timestampReveal: { kSiTet: "ui-11zwm6h", $$css: true } };
} });
import { jsx as $ne, jsxs as R9r } from "./react-runtime/react/esm-jsx-runtime-production.js";
import { c as v8S } from "./react-runtime/react/esm-compiler-runtime-production.js";
import { useState as _8S, Fragment as b8S } from "./react-runtime/react/esm-index-production.js";
function y8S(t) {
  const e = v8S(52), { context: n } = t, { getTurnActions: i } = uR(), r = J1a(), [s, o] = _8S(false);
  let a, l;
  e[0] !== n || e[1] !== i ? (a = i?.(n), l = a?.moreSections.filter(E8S) ?? [], e[0] = n, e[1] = i, e[2] = a, e[3] = l) : (a = e[2], l = e[3]);
  const c = l, u = a !== void 0 && a.timestampTitle !== void 0 && (a.timestampMs !== void 0 || a.timestampLabel !== void 0);
  let d;
  if (e[4] !== a || e[5] !== c) {
    if (d = [], a?.copyMessage) {
      const N = a.copyMessage;
      let U;
      e[7] !== N || e[8] !== c ? (U = $ne(rka, { moreSections: c, onCopyMessage: N }), e[7] = N, e[8] = c, e[9] = U) : U = e[9];
      let j;
      e[10] === /* @__PURE__ */ Symbol.for("react.memo_cache_sentinel") ? (j = $ne(zt, { name: "copy" }), e[10] = j) : j = e[10];
      let $;
      e[11] !== N ? ($ = $ne(hn.Item, { leading: j, onSelect: N, children: "Copy Message" }), e[11] = N, e[12] = $) : $ = e[12];
      let H;
      e[13] !== U || e[14] !== $ ? (H = { id: "copy", inline: U, menuItems: $ }, e[13] = U, e[14] = $, e[15] = H) : H = e[15], d.push(H);
    }
    if (a?.replyToMessage) {
      const N = a.replyToMessage;
      let U;
      e[16] !== N ? (U = $ne(ska, { icon: "arrow-u-up-left", onReply: N, size: "sm" }), e[16] = N, e[17] = U) : U = e[17];
      let j;
      e[18] === /* @__PURE__ */ Symbol.for("react.memo_cache_sentinel") ? (j = $ne(zt, { name: "arrow-u-up-left" }), e[18] = j) : j = e[18];
      let $;
      e[19] !== N ? ($ = $ne(hn.Item, { leading: j, onSelect: N, children: "Reply" }), e[19] = N, e[20] = $) : $ = e[20];
      let H;
      e[21] !== U || e[22] !== $ ? (H = { id: "reply", inline: U, menuItems: $ }, e[21] = U, e[22] = $, e[23] = H) : H = e[23], d.push(H);
    }
    e[4] = a, e[5] = c, e[6] = d;
  } else d = e[6];
  const h = a?.forkChat !== void 0 || r !== void 0 || c.length > 0 || u;
  let p;
  e[24] !== d ? (p = d.map(T8S), e[24] = d, e[25] = p) : p = e[25];
  const g = p.join("|");
  let f;
  e[26] !== h || e[27] !== g ? (f = { itemsKey: g, triggerWidth: Qep, alwaysReserveTrigger: h }, e[26] = h, e[27] = g, e[28] = f) : f = e[28];
  const { containerRef: _, visibleCount: b } = Bep(f);
  if (d.length === 0 && !h) return null;
  let y;
  e[29] !== d || e[30] !== b ? (y = d.slice(0, b), e[29] = d, e[30] = b, e[31] = y) : y = e[31];
  const S = y;
  let k;
  e[32] !== S.length || e[33] !== d ? (k = d.slice(S.length), e[32] = S.length, e[33] = d, e[34] = k) : k = e[34];
  const C = k;
  let T;
  e[35] === /* @__PURE__ */ Symbol.for("react.memo_cache_sentinel") ? (T = { 0: { className: "ui-78zum5 ui-6s0dn4 ui-137clkk ui-euugli ui-eq5yr9 ui-193iq5w ui-b3r6kr ui-x9f8cm" }, 1: { className: "ui-78zum5 ui-6s0dn4 ui-137clkk ui-euugli ui-eq5yr9 ui-193iq5w ui-b3r6kr ui-1hc1fzr" } }, e[35] = T) : T = e[35];
  const I = T[!!s << 0];
  let A;
  e[36] !== S ? (A = S.map(C8S), e[36] = S, e[37] = A) : A = e[37];
  let P;
  e[38] !== a || e[39] !== r || e[40] !== C || e[41] !== h || e[42] !== u || e[43] !== c ? (P = C.length > 0 || h ? R9r(hn, { onOpenChange: o, children: [$ne(hn.Trigger, { children: $ne(ho, { "aria-label": "More message actions", tone: "tertiary", icon: "ellipsis", size: "sm" }) }), R9r(hn.Content, { "aria-label": "Message actions", width: "max-content", children: [R9r(hn.Section, { title: u ? a?.timestampTitle : void 0, children: [C.map(w8S), a?.forkChat ? $ne(hn.Item, { leading: $ne(zt, { name: "split" }), onSelect: a.forkChat, children: "Fork Chat" }) : null, r !== void 0 ? $ne(ika, { feedback: r }) : null] }), c.map(S8S)] })] }) : null, e[38] = a, e[39] = r, e[40] = C, e[41] = h, e[42] = u, e[43] = c, e[44] = P) : P = e[44];
  let M;
  e[45] !== P || e[46] !== A ? (M = R9r($oe, { delay: Z1n, children: [A, P] }), e[45] = P, e[46] = A, e[47] = M) : M = e[47];
  let O;
  return e[48] !== _ || e[49] !== M || e[50] !== I ? (O = $ne("div", { ref: _, ...I, "data-sent-message-actions": "", children: M }), e[48] = _, e[49] = M, e[50] = I, e[51] = O) : O = e[51], O;
}
function S8S(t) {
  return $ne(hn.Section, { title: t.title, children: t.items.map(k8S) }, t.id);
}
function k8S(t) {
  return $ne(hn.Item, { disabled: t.disabled, leading: t.icon ? $ne(zt, { name: t.icon }) : void 0, onSelect: t.onSelect, children: t.label }, t.id);
}
function w8S(t) {
  return $ne(b8S, { children: t.menuItems }, t.id);
}
function C8S(t) {
  return $ne("div", { "data-measure": "", className: "ui-78zum5 ui-6s0dn4 ui-2lah0s ui-137clkk", children: t.inline }, t.id);
}
function T8S(t) {
  return t.id;
}
function E8S(t) {
  return t.items.length > 0;
}
var Qep, 
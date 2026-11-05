// @recovered-by cursor-re
// artifact: app/out/vs/workbench/workbench.glass.main.js sha256:6eb88cb60fce5bf5df2ee401f797d5e160b0bcb5d85c25e57d2576b467edce81
// module: ReadMcpResourceToolCallLine.js range:15455766..15460025
// basis: esbuild-wrapper + inferred
// confidence: C
// method: split
// run: glass-composer 2026-11-05T10:19:48.876Z
// deps: E, uae, m2e
// wrapper-init: CKh
// hoisted-owner: TaskToolCallView.js (app-out-vs-workbench-workbench-glass-main-js:2409); trailing declarations ownership inferred from segment adjacency
// path: null (no unique nls candidate; inferred only)
// renamed: none

var CKh = L({ "ReadMcpResourceToolCallLine.js"() {
  "use strict";
  E(), uae(), m2e();
} });
import { jsx as Bne, jsxs as k6r } from "./react-runtime/react/esm-jsx-runtime-production.js";
import { c as TKh } from "./react-runtime/react/esm-compiler-runtime-production.js";
function iNS(t) {
  return t.description || "Task";
}
function EKh(t) {
  return t.outcome.resultCase === "error";
}
function rNS(t) {
  for (let e = t.length - 1; e >= 0; e--) {
    const n = t[e];
    if (n.type === "tool-call") {
      const i = umi({ loading: n.status === "generating", startedAtMs: n.startedAtMs, vm: n.toolCallVm });
      if (i) return i;
    }
  }
}
function fya(t) {
  return t.steps.filter((e) => !(e.type === "assistant-message" && e.message.trim().length === 0));
}
function sNS(t, e, n) {
  if (n) {
    const i = n.turns.flatMap((s) => fya(s)), r = rNS(i);
    if (r) return r;
  }
  return e ? "Generating" : EKh(t) ? "Error" : "Completed";
}
function oNS(t) {
  const e = TKh(5), { turn: n, renderStep: i } = t;
  let r;
  e[0] !== n ? (r = fya(n), e[0] = n, e[1] = r) : r = e[1];
  const s = r;
  if (s.length === 0) return null;
  let o;
  return e[2] !== s || e[3] !== i ? (o = Bne("div", { className: "ui-turn-view", children: Bne("div", { className: "ui-turn-view__steps", children: Bne(P_a, { steps: s, renderStep: i }) }) }), e[2] = s, e[3] = i, e[4] = o) : o = e[4], o;
}
function aNS(t) {
  const e = TKh(45), { vm: n, loading: i, subagentConversation: r, renderStep: s } = t, [o, a] = j_e(false);
  let l;
  e[0] !== n ? (l = iNS(n), e[0] = n, e[1] = l) : l = e[1];
  const c = l;
  let u;
  e[2] !== n ? (u = EKh(n), e[2] = n, e[3] = u) : u = e[3];
  const d = u;
  let h;
  e[4] !== i || e[5] !== r || e[6] !== n ? (h = sNS(n, i, r), e[4] = i, e[5] = r, e[6] = n, e[7] = h) : h = e[7];
  const p = h;
  let g;
  e[8] !== r?.turns ? (g = r?.turns ?? [], e[8] = r?.turns, e[9] = g) : g = e[9];
  const f = g;
  let _;
  e[10] !== d || e[11] !== f ? (_ = f.some(uNS) || d, e[10] = d, e[11] = f, e[12] = _) : _ = e[12];
  const b = _;
  let y;
  e[13] !== b || e[14] !== a ? (y = b ? () => a(cNS) : void 0, e[13] = b, e[14] = a, e[15] = y) : y = e[15];
  let S;
  e[16] !== d || e[17] !== i ? (S = Bne(uh.HeaderLeading, { children: Bne(uh.HeaderIcon, { children: i ? Bne(zt, { name: "loading", size: "base", modifier: "spin" }) : d ? Bne(zt, { name: "error", size: "base", color: "red" }) : Bne(zt, { name: "check-circle", size: "base", color: "secondary" }) }) }), e[16] = d, e[17] = i, e[18] = S) : S = e[18];
  let k;
  e[19] !== i || e[20] !== c ? (k = Bne(uh.HeaderTitle, { shimmer: i, children: c }), e[19] = i, e[20] = c, e[21] = k) : k = e[21];
  let C;
  e[22] !== p ? (C = Bne(uh.HeaderDescription, { children: p }), e[22] = p, e[23] = C) : C = e[23];
  let T;
  e[24] !== k || e[25] !== C ? (T = k6r(uh.HeaderContent, { children: [k, C] }), e[24] = k, e[25] = C, e[26] = T) : T = e[26];
  let I;
  e[27] !== o || e[28] !== b || e[29] !== a ? (I = b ? Bne(uh.HeaderTrailing, { children: Bne(uh.HeaderExpand, { expanded: o, label: o ? "Collapse task" : "Expand task", onClick: () => a(lNS) }) }) : null, e[27] = o, e[28] = b, e[29] = a, e[30] = I) : I = e[30];
  let A;
  e[31] !== T || e[32] !== I || e[33] !== y || e[34] !== S ? (A = k6r(uh.Header, { inset: 12, onClick: y, variant: "flat", children: [S, T, I] }), e[31] = T, e[32] = I, e[33] = y, e[34] = S, e[35] = A) : A = e[35];
  let P;
  e[36] !== d || e[37] !== o || e[38] !== b || e[39] !== s || e[40] !== f ? (P = o && b ? Bne(uh.Content, { inset: "none", rootStyle: vya.body, children: k6r(xg, { allowScrollChaining: true, maxHeight: 300, scrollbarVisibility: "hover", children: [d ? Bne(uh.Rows, { children: Bne(uh.Row, { leading: Bne(zt, { name: "error", size: "base", color: "red" }), rootStyle: vya.error, children: "Error" }) }) : null, s ? f.map((O) => Bne(oNS, { renderStep: s, turn: O }, O.turnIndex)) : null] }) }) : null, e[36] = d, e[37] = o, e[38] = b, e[39] = s, e[40] = f, e[41] = P) : P = e[41];
  let M;
  return e[42] !== A || e[43] !== P ? (M = k6r(uh.Root, { children: [A, P] }), e[42] = A, e[43] = P, e[44] = M) : M = e[44], M;
}
function lNS(t) {
  return !t;
}
function cNS(t) {
  return !t;
}
function uNS(t) {
  return fya(t).length > 0;
}
var vya, 
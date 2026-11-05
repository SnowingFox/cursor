// @recovered-by cursor-re
// artifact: app/out/vs/workbench/workbench.glass.main.js sha256:6eb88cb60fce5bf5df2ee401f797d5e160b0bcb5d85c25e57d2576b467edce81
// module: AgentTranscriptSwitchModeCard.js range:15587878..15592541
// basis: esbuild-wrapper + inferred
// confidence: C
// method: split
// run: glass-composer 2026-11-05T10:19:48.876Z
// deps: E, fd, BW, P0, H1t, u0e, hL
// wrapper-init: BYh
// hoisted-owner: AgentTranscriptTaskRow.js (app-out-vs-workbench-workbench-glass-main-js:2447); trailing declarations ownership inferred from segment adjacency
// path: null (no unique nls candidate; inferred only)
// renamed: none

BYh = L({ "AgentTranscriptSwitchModeCard.js"() {
  "use strict";
  E(), fd(), BW(), P0(), H1t(), u0e(), hL(), LYh = 15e3, OYh = { agent: "Agent", chat: "Chat", background: "Cloud", plan: "Plan", spec: "Spec", debug: "Debug", triage: "Triage" }, FYh = { agent: "var(--vscode-input-foreground, var(--cursor-text-secondary))", chat: "var(--composer-mode-chat-text, var(--cursor-text-secondary))", background: "var(--composer-mode-background-text, var(--cursor-text-secondary))", plan: "var(--composer-mode-plan-text, var(--cursor-text-secondary))", spec: "var(--composer-mode-spec-text, var(--cursor-text-secondary))", debug: "var(--composer-mode-debug-text, var(--cursor-text-secondary))", triage: "var(--composer-mode-triage-text, var(--cursor-text-secondary))" };
} });
import { jsx as w1n } from "./react-runtime/react/esm-jsx-runtime-production.js";
import { c as UYh } from "./react-runtime/react/esm-compiler-runtime-production.js";
function QOS(t, e) {
  switch (t) {
    case "needs-attention":
      return C1n.needsAttention;
    case "error":
      return C1n.error;
    case "finished":
      return e ? C1n.doneUnread : C1n.done;
  }
}
function Wya(t) {
  const e = UYh(11), { mode: n, hasUnread: i } = t, r = i === void 0 ? false : i;
  if (n === "running") {
    let l;
    e[0] === /* @__PURE__ */ Symbol.for("react.memo_cache_sentinel") ? (l = w1n(i0e, { shape: "sine_3x3", size: "xs", variant: "default" }), e[0] = l) : l = e[0];
    let c;
    return e[1] !== n ? (c = w1n("span", { "data-subagent-task-status": n, className: "ui-3nfvp2 ui-6s0dn4 ui-l56j7k ui-1uubs1q ui-vipqoc ui-2lah0s ui-1lbmi28", children: l }), e[1] = n, e[2] = c) : c = e[2], c;
  }
  let s;
  e[3] !== r || e[4] !== n ? (s = gn(C1n.dot, QOS(n, r)), e[3] = r, e[4] = n, e[5] = s) : s = e[5];
  let o;
  e[6] !== s ? (o = w1n("span", { "aria-hidden": true, ...s }), e[6] = s, e[7] = o) : o = e[7];
  let a;
  return e[8] !== n || e[9] !== o ? (a = w1n("span", { "data-subagent-task-status": n, className: "ui-3nfvp2 ui-6s0dn4 ui-l56j7k ui-1uubs1q ui-vipqoc ui-2lah0s", children: o }), e[8] = n, e[9] = o, e[10] = a) : a = e[10], a;
}
function jYh({ vm: t, loading: e, hasError: n }) {
  const i = t.description?.trim() || "New subagent", r = t.runStatus === "success" || t.runStatus === "error" || t.runStatus === "aborted", s = t.runStatus === "running" || !r && (e || t.isBackgroundStart === true && t.outcome.status === "settled" && t.outcome.resultCase !== "error"), o = !s && (t.runStatus === "aborted" || t.runStatus === void 0 && t.outcome.status === "pending"), a = !o && (n || t.runStatus === "error" || t.runStatus === void 0 && t.outcome.resultCase === "error"), l = tya({ subagentType: t.subagentType, subagentName: t.subagentName });
  let c, u;
  s ? (c = { text: rya({ subagentTypeName: l }), shimmer: true }, u = "running") : o ? (c = { text: "Stopped" }, u = "finished") : a ? (c = { text: "Stopped with error" }, u = "error") : (c = { text: "Completed" }, u = "finished");
  const d = nya({ modelLabel: t.modelLabel?.trim() ?? "", subagentTypeName: l, isCustomSubagentType: t.subagentType === void 0 ? void 0 : t.subagentType === "custom" || t.subagentType.startsWith("custom:") }), h = d.label.length > 0 ? { label: d.label, hoverModelName: d.hoverText, disableHover: d.hoverText.length === 0 } : void 0;
  return { title: i, status: c, indicatorMode: u, indicatorDimmed: o, model: h };
}
function $Yh(t) {
  const e = UYh(20), { vm: n, sourceIds: i, loading: r, hasError: s } = t, { onOpenSubagent: o } = uR();
  let a;
  e[0] !== s || e[1] !== r || e[2] !== n ? (a = jYh({ vm: n, loading: r, hasError: s }), e[0] = s, e[1] = r, e[2] = n, e[3] = a) : a = e[3];
  const l = a, c = n.subagentId === void 0 ? void 0 : o, u = c !== void 0;
  let d;
  e[4] !== l.indicatorMode ? (d = w1n(Wya, { mode: l.indicatorMode }), e[4] = l.indicatorMode, e[5] = d) : d = e[5];
  let h;
  e[6] !== l.indicatorDimmed || e[7] !== d ? (h = { node: d, dimmed: l.indicatorDimmed }, e[6] = l.indicatorDimmed, e[7] = d, e[8] = h) : h = e[8];
  let p;
  e[9] !== c || e[10] !== i || e[11] !== n ? (p = c === void 0 ? void 0 : (f) => c({ sourceIds: i, callId: n.callId, vm: n }, { button: f.button ?? 0, altKey: f.altKey, ctrlKey: f.ctrlKey, metaKey: f.metaKey }), e[9] = c, e[10] = i, e[11] = n, e[12] = p) : p = e[12];
  let g;
  return e[13] !== l.model || e[14] !== l.status || e[15] !== l.title || e[16] !== u || e[17] !== h || e[18] !== p ? (g = w1n(Uba, { clickable: u, indicator: h, model: l.model, onClick: p, status: l.status, title: l.title }), e[13] = l.model, e[14] = l.status, e[15] = l.title, e[16] = u, e[17] = h, e[18] = p, e[19] = g) : g = e[19], g;
}
var C1n, 
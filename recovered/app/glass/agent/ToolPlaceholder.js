// @recovered-by cursor-re
// artifact: app/out/vs/workbench/workbench.glass.main.js sha256:6eb88cb60fce5bf5df2ee401f797d5e160b0bcb5d85c25e57d2576b467edce81
// module: ToolPlaceholder.js range:15609998..15616062
// basis: inferred
// confidence: C
// method: split
// run: main 2026-11-05T10:03:45.277Z
// fragment: esbuild wrapper body + hoisted tail; may include adjacent declarations; not a standalone module
// deps: tslib.es6.js, ToolCallLine.js, transcript-types.js
// path-candidate: none (no nls basename match; path inferred, confidence C)
// fragment: esbuild wrapper body + hoisted tail; may include adjacent declarations; not a standalone module
// deps: tslib.es6.js, ToolCallLine.js, transcript-types.js
// path-candidate: none (no nls basename match; path inferred, confidence C)
Vya = L({ "ToolPlaceholder.js"() {
  "use strict";
  E(), uae(), T1n(), GYh = { "converted-placeholder": "Renderer not migrated yet", "not-converted": "Tool data not converted yet", "unsupported-interactive": "Interactive renderer required", "pending-approval": "" };
} });
function v0e(t) {
  const e = /* @__PURE__ */ new Set();
  for (const n of t) for (const i of n.sourceIds) e.add(i);
  return [...e];
}
function X6r(t) {
  return t.kind === "assistantMarkdown" || t.kind === "activity" || t.kind === "activityGroup" || t.kind === "toolPlaceholder" || t.kind === "hostRow" || t.kind === "statusLine" || t.kind === "notification" || t.kind === "unreadDivider";
}
function Hhe(t) {
  return t.kind === "human" && t.entry.hidden === true;
}
function _0e(t) {
  return t.kind === "human" && t.entry.steer === true;
}
function Umi(t) {
  return t?.kind === "human" && t.entry.message.eventNotification !== true;
}
function d5S(t) {
  return t.map((e, n) => {
    if (!Umi(e)) return e;
    const i = Umi(t[n - 1]), r = Umi(t[n + 1]);
    return !i && !r ? e : { ...e, humanBubbleConnections: { above: i, below: r } };
  });
}
function Z6r(t) {
  return t?.kind === "assistantMarkdown" && t.entry.loadFailed !== true;
}
function h5S(t) {
  return t.map((e, n) => {
    if (!Z6r(e)) return e;
    const i = Z6r(t[n - 1]), r = Z6r(t[n + 1]);
    return !i && !r ? e : { ...e, sentBubbleConnections: { above: i, below: r } };
  });
}
function jmi(t) {
  return t.kind === "human" || t.kind === "subscriptionEvents";
}
function Q6r(t) {
  switch (t.kind) {
    case "activity":
      return t.entry.isStreaming === true || t.entry.step.status === "generating";
    case "activityGroup":
      return t.isStreaming === true;
    case "assistantMarkdown":
      return t.entry.isStreaming === true;
    case "toolPlaceholder":
      return t.entry.isStreaming === true;
    case "statusLine":
      return t.entry.isStreaming === true;
    case "tailStatus":
      return t.status.loading;
    case "hostRow":
    case "human":
    case "subscriptionEvents":
    case "workInProgressHeader":
    case "workGroup":
    case "timeBoundary":
    case "unreadDivider":
    case "turnActions":
    case "endOfTurnSummary":
    case "notification":
      return false;
    default: {
      const e = t;
      throw new Error(`Unhandled transcript row kind: ${e}`);
    }
  }
}
function Kya(t) {
  return t.kind === "toolPlaceholder" ? t.label === "Task" : t.step.type === "tool-call" && t.step.toolCallVm.case === "taskToolCall";
}
function p5S(t) {
  if (t.kind === "toolPlaceholder") return t.summaryToolCase === "communicateUpdateToolCall" ? t.summaryProgressStep : void 0;
  const e = t.step.type === "tool-call" ? t.step.toolCallVm : void 0;
  return e?.case === "unrendered" && e.toolCase === "communicateUpdateToolCall" ? e.detail : void 0;
}
function qYh(t, e) {
  let n;
  const i = (r) => {
    r.sourceIds.some((s) => e?.has(s) === true) || (n = p5S(r) ?? n);
  };
  for (const r of t) switch (r.kind) {
    case "activity":
    case "toolPlaceholder":
      i(r.entry);
      break;
    case "activityGroup":
      r.items.forEach(i);
      break;
    case "human":
    case "subscriptionEvents":
      n = void 0;
      break;
    case "notification":
      n = qYh(r.collapsedRows, e);
      break;
    default:
      break;
  }
  return n;
}
function m5S(t) {
  return t.kind === "toolPlaceholder" ? t.summaryToolCase === "createPlanToolCall" || t.label === "Create plan" : t.step.type === "tool-call" && t.step.toolCallVm.case === "createPlanToolCall";
}
function Yya(t) {
  return t.kind === "toolPlaceholder" ? t.summaryToolCase === "askQuestionToolCall" || t.label === "Ask question" : t.step.type === "tool-call" && t.step.toolCallVm.case === "askQuestionToolCall";
}
function Xya(t) {
  return t.kind === "toolPlaceholder" ? t.summaryToolCase === "mcpAuthToolCall" || t.label === "Authenticate MCP" : t.step.type === "tool-call" && t.step.toolCallVm.case === "mcpAuthToolCall";
}
function E1n(t, e) {
  return t.kind === "assistantMarkdown" && (t.entry.standaloneInTurn === true || t.sourceIds.some((n) => e?.has(n) === true));
}
function J6r(t) {
  return t.kind === "human" && t.entry.message.eventNotification === true;
}
function zYh(t) {
  return t.kind === "subscriptionEvents" || X6r(t) || J6r(t);
}
function g5S(t, e) {
  return E1n(t, e) ? { kind: "standaloneAssistantMessage", row: t } : (t.kind === "activity" || t.kind === "toolPlaceholder") && (Yya(t.entry) || Xya(t.entry) || Zya(t.entry)) ? { kind: "keepVisibleAndBreakEpisode", row: t } : zYh(t) ? { kind: "foldIntoWorkGroup", row: t } : { kind: "keepVisibleAndBreakEpisode", row: t };
}
function VYh(t) {
  return t.kind === "toolPlaceholder" ? t.summaryToolCase === "computerUseToolCall" || t.label === "Computer use" : t.step.type === "tool-call" && t.step.toolCallVm.case === "computerUseToolCall";
}
function KYh(t) {
  return t.kind === "toolPlaceholder" ? t.summaryToolCase === "connectScmToolCall" || t.label === "Connect GitHub" : t.step.type === "tool-call" && t.step.toolCallVm.case === "connectScmToolCall";
}
function Zya(t) {
  if (t.kind === "toolPlaceholder") return t.summaryToolCase === "prManagementToolCall" || t.toolName === "pr_management" || t.label === "Manage PR";
  const e = t.step.type === "tool-call" ? t.step.toolCallVm : void 0;
  return e?.case === "unrendered" && e.toolCase === "prManagementToolCall";
}
function YYh(t) {
  const e = t.filter((n) => !prt(n));
  return e.length === 1 ? e[0] : void 0;
}
function Qya(t) {
  if (t.kind !== "activityGroup") return false;
  const e = YYh(t.items);
  return e?.kind === "activity" && e.step.type === "thinking";
}
function XYh(t) {
  return t.kind === "activityGroup" && !t.isStreaming && t.items.length > 0 && t.items.every(f5S);
}
function f5S(t) {
  return t.kind === "activity" && t.step.type === "thinking" && t.step.status !== "generating" && t.step.parseHeaders !== true;
}
function e4r(t) {
  for (let e = t.length - 1; e >= 0; e -= 1) if (t[e]?.kind === "assistantMarkdown") return e;
  return -1;
}

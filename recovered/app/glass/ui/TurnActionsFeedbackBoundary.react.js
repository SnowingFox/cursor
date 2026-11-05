// @recovered-by cursor-re
// artifact: app/out/vs/workbench/workbench.glass.main.js sha256:6eb88cb60fce5bf5df2ee401f797d5e160b0bcb5d85c25e57d2576b467edce81
// module: TurnActionsFeedbackBoundary.react.js range:30685291..30687116
// basis: inferred
// confidence: C
// method: split
// run: main 2026-11-05T10:03:46.128Z
var Rew = L({ "TurnActionsFeedbackBoundary.react.js"() {
  "use strict";
  E(), Mt();
} });
import { useMemo as Hbf, useSyncExternalStore as Pew } from "./react-runtime/react/esm-index-production.js";
import { jsx as gxt } from "./react-runtime/react/esm-jsx-runtime-production.js";
function Mew({ row: t, displayOrder: e, session: n, scrollRoot: i, onSelected: r, onPresented: s, onOutcome: o, markdownServices: a, copyText: l, withConversationInset: c = false, commentPromptEnabled: u, onCommentSubmitted: d, onCommentFlowDone: h }) {
  const { parentResponse: p, alternateResponse: g, phase: f } = Pew(n.subscribe, n.getSnapshot, n.getSnapshot), _ = Hbf(() => t === void 0 ? void 0 : { ...t, rowId: `${t.rowId}:response-parent`, entry: { ...t.entry, id: `${t.entry.id}:response-parent`, markdown: p, isStreaming: f !== "complete" } }, [f, p, t]), b = Hbf(() => t === void 0 ? void 0 : { ...t, rowId: `${t.rowId}:response-alternate`, entry: { ...t.entry, id: `${t.entry.id}:response-alternate`, markdown: g, isStreaming: f !== "complete" } }, [g, f, t]), k = gxt(ZGh, { alternateResponse: b === void 0 ? gxt(_Me, { codeBlockWordWrap: true, copyText: l, finished: f === "complete", rawText: g, services: a }) : gxt(jSn, { codeBlockWordWrap: true, children: gxt(Trt, { insetRow: false, row: b }) }), commentPromptEnabled: u, displayOrder: e, onCommentFlowDone: h, onCommentSubmitted: d, onOutcome: o, onPresented: s, onSelected: r, parentResponse: _ === void 0 ? gxt(_Me, { codeBlockWordWrap: true, copyText: l, finished: f === "complete", rawText: p, services: a }) : gxt(jSn, { codeBlockWordWrap: true, children: gxt(Trt, { insetRow: false, row: _ }) }), scrollRoot: i, session: n });
  return c ? gxt("div", { style: { paddingInline: "var(--conversation-text-inset, 0px)", boxSizing: "border-box" }, children: k }) : k;
}

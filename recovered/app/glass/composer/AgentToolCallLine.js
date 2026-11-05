// @recovered-by cursor-re
// artifact: app/out/vs/workbench/workbench.glass.main.js sha256:6eb88cb60fce5bf5df2ee401f797d5e160b0bcb5d85c25e57d2576b467edce81
// module: AgentToolCallLine.js range:15046415..15047361
// basis: esbuild-wrapper + inferred
// confidence: C
// method: split
// run: glass-composer 2026-11-05T10:19:48.876Z
// deps: E, Ldi, HFe, fd, c0e
// wrapper-init: CxS
// hoisted-owner: ask-question-display.js (app-out-vs-workbench-workbench-glass-main-js:2300); trailing declarations ownership inferred from segment adjacency
// path: null (no unique nls candidate; inferred only)
// renamed: none

CxS = L({ "AgentToolCallLine.js"() {
  "use strict";
  E(), Ldi(), HFe(), fd(), c0e(), K$h = { createAgentToolCall: { loading: "Creating", done: "Created", error: "Failed to create" }, sendToAgentToolCall: { loading: "Messaging", done: "Messaged", error: "Failed to message" }, stopAgentToolCall: { loading: "Stopping", done: "Stopped", error: "Failed to stop" }, agentUpdateNotification: { loading: "Update from", done: "Update from", error: "Update from" } };
} });
function Y$h(t, e) {
  if (!e) return [];
  const n = new Map(t.map((r) => [r.id, r])), i = [];
  for (const r of e) {
    const s = n.get(r.questionId);
    if (!s) continue;
    const o = [];
    for (const l of r.selectedOptionIds ?? []) {
      const c = s.options.find((u) => u.id === l);
      c && o.push(c.label);
    }
    const a = r.freeformText?.trim();
    a && o.push(a), o.length > 0 && i.push({ questionPrompt: s.prompt, selectedAnswers: o });
  }
  return i;
}

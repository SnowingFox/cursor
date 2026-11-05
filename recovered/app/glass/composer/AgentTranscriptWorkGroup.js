// @recovered-by cursor-re
// artifact: app/out/vs/workbench/workbench.glass.main.js sha256:6eb88cb60fce5bf5df2ee401f797d5e160b0bcb5d85c25e57d2576b467edce81
// module: AgentTranscriptWorkGroup.js range:15997028..15997522
// basis: esbuild-wrapper + inferred
// confidence: C
// method: split
// run: glass-composer 2026-11-05T10:19:48.876Z
// deps: E, irt, dSa, AO, Hmi, $6r, qu, c0e, ymi
// wrapper-init: Stp
// hoisted-owner: turn-footer-reservation.js (app-out-vs-workbench-workbench-glass-main-js:2566); trailing declarations ownership inferred from segment adjacency
// path: null (no unique nls candidate; inferred only)
// renamed: none

Stp = L({ "AgentTranscriptWorkGroup.js"() {
  "use strict";
  E(), irt(), dSa(), AO(), Hmi(), $6r(), qu(), c0e(), ymi(), ytp = /* @__PURE__ */ new Set(["Worked", "Initialized project"]);
} });
function J1n(t) {
  return (t.kind === "turnActions" || t.kind === "endOfTurnSummary") && t.isPending === true;
}
function gka(t, e) {
  if (e.length === 0) return [...t];
  let n = t.length;
  for (; n > 0 && J1n(t[n - 1]); ) n -= 1;
  return [...t.slice(0, n), ...e, ...t.slice(n)];
}
var B9r, U9r, 
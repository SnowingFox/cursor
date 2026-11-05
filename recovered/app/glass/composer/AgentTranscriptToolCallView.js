// @recovered-by cursor-re
// artifact: app/out/vs/workbench/workbench.glass.main.js sha256:6eb88cb60fce5bf5df2ee401f797d5e160b0bcb5d85c25e57d2576b467edce81
// module: AgentTranscriptToolCallView.js range:15608361..15608871
// basis: esbuild-wrapper + inferred
// confidence: C
// method: split+rename
// run: glass-composer 2026-11-05T10:19:48.876Z
// deps: E, AO, X$h, CKh, Cjt, aya, uae, Eya, XSn, YSn, m2e, oOS, VKh, yOS, Cya, bYh, xYh, GOS, MYh, BYh, HYh
// wrapper-init: qya -> agentTranscriptToolCallViewModuleInit
// hoisted-owner: transcript-types.js (app-out-vs-workbench-workbench-glass-main-js:2449); trailing declarations ownership inferred from segment adjacency
// path: null (no unique nls candidate; inferred only)
// renamed: qya -> agentTranscriptToolCallViewModuleInit (apply-map AST equivalent)

var agentTranscriptToolCallViewModuleInit = L({
  "AgentTranscriptToolCallView.js"() {
    "use strict";

    E(), AO(), X$h(), CKh(), Cjt(), aya(), uae(), Eya(), XSn(), YSn(), m2e(), oOS(), VKh(), yOS(), Cya(), bYh(), xYh(), GOS(), MYh(), BYh(), HYh();
  }
});
function prt(t) {
  return t.kind === "toolPlaceholder" && t.label === "UNSPECIFIED" && t.reason === "converted-placeholder" && t.shouldRenderStandalone !== true && t.summaryToolCase === void 0;
}
function WYh(t) {
  return t.kind === "toolPlaceholder" && t.reason === "pending-approval";
}

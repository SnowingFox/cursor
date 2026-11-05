// @recovered-by cursor-re
// artifact: app/out/vs/workbench/workbench.glass.main.js sha256:6eb88cb60fce5bf5df2ee401f797d5e160b0bcb5d85c25e57d2576b467edce81
// module: ComposerAssistantResponseComparison.react.js range:30687116..30687539
// basis: esbuild-wrapper + inferred
// confidence: C
// method: split+rename
// run: glass-composer 2026-11-05T10:19:48.876Z
// deps: E, Mt, S9e
// wrapper-init: Dew -> composerAssistantResponseComparisonModuleInit
// hoisted-owner: composerApprovalGuardSetting.js (app-out-vs-workbench-workbench-glass-main-js:5529); trailing declarations ownership inferred from segment adjacency
// path: null (no unique nls candidate; inferred only)
// renamed: Dew -> composerAssistantResponseComparisonModuleInit (apply-map AST equivalent)

var composerAssistantResponseComparisonModuleInit = L({
  "ComposerAssistantResponseComparison.react.js"() {
    "use strict";

    E(), Mt(), S9e();
  }
});
function New(t) {
  return "composerApprovalGuardSetting" in t && t.composerApprovalGuardSetting === "externalFileProtection" ? "externalFileProtection" : void 0;
}
function Lew(t, e) {
  return Eol(t) && e !== tw.RUN_EVERYTHING;
}
function Oew(t) {
  t.executeCommand(vP, {
    openTab: "chat",
    idToScrollTo: vrl
  });
}

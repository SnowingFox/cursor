// @recovered-by cursor-re
// artifact: app/out/vs/workbench/workbench.glass.main.js sha256:6eb88cb60fce5bf5df2ee401f797d5e160b0bcb5d85c25e57d2576b467edce81
// module: ComposerMcpElicitationForm.react.js range:32132416..32132984
// basis: esbuild-wrapper + inferred
// confidence: C
// method: split+rename
// run: glass-composer 2026-11-05T10:19:48.876Z
// deps: E, Mt, ZB
// wrapper-init: dIw -> composerMcpElicitationFormModuleInit
// hoisted-owner: composerPlacementDecisionCardModel.js (app-out-vs-workbench-workbench-glass-main-js:6043); trailing declarations ownership inferred from segment adjacency
// path: null (no unique nls candidate; inferred only)
// renamed: dIw -> composerMcpElicitationFormModuleInit (apply-map AST equivalent)

var composerMcpElicitationFormModuleInit = L({
  "ComposerMcpElicitationForm.react.js"() {
    "use strict";

    E(), Mt(), ZB();
  }
});
function D6f(t) {
  const {
      request: e,
      vm: n
    } = t,
    i = e.machineLabel;
  if (i === void 0) return;
  if (!n.isSettled) return {
    state: "pending",
    machineLabel: i
  };
  const r = n.answers?.find(a => a.questionId === e.questionId),
    s = r?.selectedOptionIds ?? [];
  return s.length > 0 || (r?.freeformText?.trim().length ?? 0) > 0 ? {
    state: s.includes(zgr) ? "allowed" : "denied",
    machineLabel: i
  } : {
    state: n.isSkipped ? "expired" : "pending",
    machineLabel: i
  };
}

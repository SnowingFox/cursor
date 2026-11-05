// @recovered-by cursor-re
// artifact: app/out/vs/workbench/workbench.glass.main.js sha256:6eb88cb60fce5bf5df2ee401f797d5e160b0bcb5d85c25e57d2576b467edce81
// module: ComposerLocalWorktreeSetupRow.react.js range:30961880..30962253
// basis: esbuild-wrapper + inferred
// confidence: C
// method: split+rename
// run: glass-composer 2026-11-05T10:19:48.876Z
// deps: E, WMl
// wrapper-init: Caw -> composerLocalWorktreeSetupRowModuleInit
// hoisted-owner: ComposerOptimisticPlanningRow.react.js (app-out-vs-workbench-workbench-glass-main-js:5611); trailing declarations ownership inferred from segment adjacency
// path: null (no unique nls candidate; inferred only)
// renamed: Caw -> composerLocalWorktreeSetupRowModuleInit; Eaw -> ComposerOptimisticPlanningRow (apply-map AST equivalent)

var composerLocalWorktreeSetupRowModuleInit = L({
  "ComposerLocalWorktreeSetupRow.react.js"() {
    "use strict";

    E(), WMl();
  }
});
import { jsx as Taw } from "./react-runtime/react/esm-jsx-runtime-production.js";
function ComposerOptimisticPlanningRow({
  copyToClipboard: t,
  message: e,
  stopShellCommand: n,
  waitSeconds: i
}) {
  return Taw(VK1, {
    copyToClipboard: t,
    message: e,
    stepGap: teg,
    stopShellCommand: n,
    waitSeconds: i
  });
}

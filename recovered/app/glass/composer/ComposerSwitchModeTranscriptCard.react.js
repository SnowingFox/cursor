// @recovered-by cursor-re
// artifact: app/out/vs/workbench/workbench.glass.main.js sha256:6eb88cb60fce5bf5df2ee401f797d5e160b0bcb5d85c25e57d2576b467edce81
// module: ComposerSwitchModeTranscriptCard.react.js range:32137214..32137802
// basis: esbuild-wrapper + inferred
// confidence: C
// method: split+rename
// run: glass-composer 2026-11-05T10:19:48.876Z
// deps: E, Mt, Di, ZB, Pu, el, Ss, tU, Tos, Pl, xE
// wrapper-init: yIw -> composerSwitchModeTranscriptCardModuleInit
// hoisted-owner: AgentEnvironmentIcon.react.js (app-out-vs-workbench-workbench-glass-main-js:6045); trailing declarations ownership inferred from segment adjacency
// path: null (no unique nls candidate; inferred only)
// renamed: yIw -> composerSwitchModeTranscriptCardModuleInit; f4l -> AgentEnvironmentIcon (apply-map AST equivalent)

var composerSwitchModeTranscriptCardModuleInit = L({
  "ComposerSwitchModeTranscriptCard.react.js"() {
    "use strict";

    E(), Mt(), Di(), ZB(), Pu(), el(), Ss(), tU(), Tos(), Pl(), xE();
  }
});
import { jsx as g4l } from "./react-runtime/react/esm-jsx-runtime-production.js";
function AgentEnvironmentIcon({
  environment: t,
  icon: e,
  size: n = "sm"
}) {
  return e !== void 0 ? g4l(zt, {
    "aria-hidden": true,
    color: "tertiary",
    name: e,
    size: n
  }) : t === "cloud" ? g4l(zt, {
    "aria-hidden": true,
    color: "tertiary",
    name: "cloud",
    size: n
  }) : t === "worktree" ? g4l(zt, {
    "aria-hidden": true,
    color: "tertiary",
    name: "fork",
    size: n
  }) : null;
}

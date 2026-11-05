// @recovered-by cursor-re
// artifact: app/out/vs/workbench/workbench.glass.main.js sha256:6eb88cb60fce5bf5df2ee401f797d5e160b0bcb5d85c25e57d2576b467edce81
// module: PromptSelectionOverlayExtension.js range:17254740..17255246
// basis: esbuild-wrapper + inferred
// confidence: C
// method: split
// run: glass-composer 2026-11-05T10:19:48.876Z
// deps: E, Fy, gE, Mo1, Aw
// wrapper-init: vfp
// hoisted-owner: promptInputListMarkers.js (app-out-vs-workbench-workbench-glass-main-js:2910); trailing declarations ownership inferred from segment adjacency
// path: null (no unique nls candidate; inferred only)
// renamed: none

vfp = L({ "PromptSelectionOverlayExtension.js"() {
  "use strict";
  E(), Fy(), gE(), Mo1(), Aw(), mUr = "ui-prompt-input-editor__content", gUr = "ui-prompt-input-selection-overlay", gfp = "ui-prompt-input-selection-band", ffp = new j1("promptSelectionOverlay");
} });
function Fo1(t) {
  return t === void 0 ? "- " : `${t}. `;
}
function Bo1(t) {
  return " ".repeat(t.length);
}
function Uo1(t) {
  const e = t?.start;
  return typeof e == "number" && Number.isFinite(e) && e >= 1 ? Math.floor(e) : 1;
}

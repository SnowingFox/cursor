// @recovered-by cursor-re
// artifact: app/out/vs/workbench/workbench.glass.main.js sha256:6eb88cb60fce5bf5df2ee401f797d5e160b0bcb5d85c25e57d2576b467edce81
// module: ComposerDropdownMaxTooltip.js range:29284274..29285315
// basis: esbuild-wrapper + inferred
// confidence: C
// method: split
// run: glass-composer 2026-11-05T10:19:48.876Z
// deps: E, at, at, at, at, at, gs, ta, j6k
// wrapper-init: W6k
// hoisted-owner: ComposerDropdownItems.js (app-out-vs-workbench-workbench-glass-main-js:5126); trailing declarations ownership inferred from segment adjacency
// path: null (no unique nls candidate; inferred only)
// renamed: none

W6k = L({ "ComposerDropdownMaxTooltip.js"() {
  "use strict";
  E(), at(), at(), at(), at(), at(), gs(), ta(), j6k(), GJg = wt("<div class=max-tooltip-container><span class=max-tooltip-badge>MAX MODE</span><div class=max-tooltip-primary-text>Enables maximum context windows. For advanced users that are cost insensitive.</div><div class=max-tooltip-divider></div><div class=max-tooltip-link>View Pricing<span>");
} });
function G6k(t) {
  return (e) => {
    const { isMaxOnly: n, isMaxModeActive: i, modelName: r, vsContext: s, displayMode: o, setPendingMaxOnlyModel: a, setShowConfirmation: l, onSelectModel: c, onSelectMaxMode: u, close: d } = t, h = o();
    if (h) {
      if (n && !i) {
        if (!s.reactiveStorageService.applicationUserPersistentStorage.oneTimeSettings.hasAcceptedMaxModeConfirmation) {
          a(r), l(true);
          return;
        }
        c(r), u?.(true), h.type === "models" && d();
        return;
      }
      c(r), h.type === "models" && d();
    }
  };
}
var qJg, zJg, VJg, KJg, YJg, ggs, XJg, ZJg, 
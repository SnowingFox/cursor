// @recovered-by cursor-re
// artifact: app/out/vs/workbench/workbench.glass.main.js sha256:6eb88cb60fce5bf5df2ee401f797d5e160b0bcb5d85c25e57d2576b467edce81
// module: ComposerFindWidgetHost.js range:32924368..32924806
// basis: esbuild-wrapper + inferred
// confidence: C
// method: split+rename
// run: glass-composer 2026-11-05T10:19:48.876Z
// deps: E, pi, Qe, vo, w7f, zus, UPw, jPw
// wrapper-init: HPw -> composerFindWidgetHostModuleInit
// hoisted-owner: composerPaneLoadState.js (app-out-vs-workbench-workbench-glass-main-js:6154); trailing declarations ownership inferred from segment adjacency
// path: null (no unique nls candidate; inferred only)
// renamed: HPw -> composerFindWidgetHostModuleInit (apply-map AST equivalent)

var composerFindWidgetHostModuleInit = L({
  "ComposerFindWidgetHost.js"() {
    "use strict";

    E(), pi(), Qe(), vo(), w7f(), zus(), UPw(), jPw();
  }
});
function WPw(t) {
  return t ? t.data.hasLoaded ? "loaded" : "loading" : "missing";
}
function GPw(t) {
  if (t.handle) return false;
  switch (t.lookupState) {
    case "pending":
    case "loaded":
      return false;
    case "missing":
      return true;
    case "loading":
      return !t.isReferenced();
  }
}

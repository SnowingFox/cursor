// @recovered-by cursor-re
// artifact: app/out/vs/workbench/workbench.glass.main.js sha256:6eb88cb60fce5bf5df2ee401f797d5e160b0bcb5d85c25e57d2576b467edce81
// module: VirtualizedComposerMessages.js range:32697859..32698652
// basis: esbuild-wrapper + inferred
// confidence: C
// method: split+rename
// run: glass-composer 2026-11-05T10:19:48.876Z
// deps: E, at, at, pi, yme, Qlt, g2w, Sxt, O9f
// wrapper-init: _2w -> virtualizedComposerMessagesModuleInit
// hoisted-owner: useBackgroundComposerEmptyState.js (app-out-vs-workbench-workbench-glass-main-js:6109); trailing declarations ownership inferred from segment adjacency
// path: null (no unique nls candidate; inferred only)
// renamed: _2w -> virtualizedComposerMessagesModuleInit (apply-map AST equivalent)

var virtualizedComposerMessagesModuleInit = L({
    "VirtualizedComposerMessages.js"() {
      "use strict";

      E(), at(), at(), pi(), yme(), Qlt(), g2w(), Sxt(), O9f();
    }
  }),
  b2w = L({
    "legacyAiChat.css"() {}
  });
function y2w(t) {
  const e = () => {
      const r = t.backgroundComposerData();
      return !!(r && (r.status === Po.CREATING || !r.status || !r.isLoaded));
    },
    n = dwf({
      bcId: () => t.bcId?.() ?? t.backgroundComposerData()?.bcId,
      enabled: e
    });
  return vt(() => {
    const r = t.backgroundComposerData();
    if (r) {
      if (e()) {
        const s = n()?.currentSetupPhase;
        return s ? u5a(s) : "Setting up environment";
      }
      switch (r.status) {
        case Po.RUNNING:
          return "Running";
        case Po.ERROR:
      }
      if (r.status === Po.FINISHED) return "Finished";
    }
  });
}

// @recovered-by cursor-re
// artifact: app/out/vs/workbench/workbench.glass.main.js sha256:6eb88cb60fce5bf5df2ee401f797d5e160b0bcb5d85c25e57d2576b467edce81
// module: VirtualizedComposerProviders.js range:30926153..30926727
// basis: esbuild-wrapper + inferred
// confidence: C
// method: split+rename
// run: glass-composer 2026-11-05T10:19:48.876Z
// deps: E, at, DMl
// wrapper-init: Bow -> virtualizedComposerProvidersModuleInit
// hoisted-owner: useComposerTurnInProgress.js (app-out-vs-workbench-workbench-glass-main-js:5596); trailing declarations ownership inferred from segment adjacency
// path: null (no unique nls candidate; inferred only)
// renamed: Bow -> virtualizedComposerProvidersModuleInit (apply-map AST equivalent)

var virtualizedComposerProvidersModuleInit = L({
  "VirtualizedComposerProviders.js"() {
    "use strict";

    E(), at(), DMl();
  }
});
function HDn(t, e) {
  const [n, i] = Wt(ks(() => {
    const r = t();
    return r ? r.value : e;
  }));
  return Cn(() => {
    const r = t();
    if (!r) {
      i(() => e);
      return;
    }
    i(() => r.value);
    const s = r.onChange(o => i(() => o));
    On(() => s.dispose());
  }), n;
}
function owf() {
  const t = AC($Ve),
    e = HDn(() => t()?.header.status, "done"),
    n = vt(() => t()?.header.source === "cloud");
  return vt(() => n() && e() === "in_progress");
}

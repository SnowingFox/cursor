// @recovered-by cursor-re
// artifact: app/out/vs/workbench/workbench.glass.main.js sha256:6eb88cb60fce5bf5df2ee401f797d5e160b0bcb5d85c25e57d2576b467edce81
// module: LexicalOnChangePlugin.js range:27248971..27249348
// basis: esbuild-wrapper + inferred
// confidence: C
// method: split+rename
// run: glass-composer 2026-11-05T10:19:48.876Z
// deps: E, pi, cI
// wrapper-init: NTg -> lexicalOnChangePluginModuleInit
// hoisted-owner: useLexicalSubscription.js (app-out-vs-workbench-workbench-glass-main-js:4704); trailing declarations ownership inferred from segment adjacency
// path: null (no unique nls candidate; inferred only)
// renamed: NTg -> lexicalOnChangePluginModuleInit (apply-map AST equivalent)

var lexicalOnChangePluginModuleInit = L({
  "LexicalOnChangePlugin.js"() {
    "use strict";

    E(), pi(), cI();
  }
});
function lAk(t) {
  const [e] = t1(),
    n = vt(() => t(e));
  let i = n().initialValueFn();
  const [r, s] = Wt(i);
  return Cn(() => {
    const {
        initialValueFn: o,
        subscribe: a
      } = n(),
      l = o();
    i !== l && (i = l, s(() => l)), On(a(c => {
      i = c, s(() => c);
    }));
  }), r;
}

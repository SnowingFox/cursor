// @recovered-by cursor-re
// artifact: app/out/vs/workbench/workbench.glass.main.js sha256:6eb88cb60fce5bf5df2ee401f797d5e160b0bcb5d85c25e57d2576b467edce81
// module: AgentContextTabDirtyIndicator.js range:31668012..31668644
// basis: inferred
// confidence: C
// method: split
// run: main 2026-11-05T10:03:45.121Z
// fragment: esbuild wrapper body + hoisted tail; may include adjacent declarations; not a standalone module
// deps: tslib.es6.js, web.js
// path-candidate: none (no nls basename match; path inferred, confidence C)
// fragment: esbuild wrapper body + hoisted tail; may include adjacent declarations; not a standalone module
// deps: tslib.es6.js, web.js
// path-candidate: none (no nls basename match; path inferred, confidence C)
q1w = L({ "AgentContextTabDirtyIndicator.js"() {
  "use strict";
  E(), at(), at(), at(), uLf = wt("<div>");
} });
function z1w(t) {
  const n = Gr().textFileService, i = jp();
  i.set(G1s, false);
  const r = Ca(i, G1s), s = (o) => {
    i.set(G1s, o);
  };
  return Cn(() => {
    const o = t();
    if (!o) {
      s(false);
      return;
    }
    const a = () => {
      const c = n.isDirty(o);
      s(c);
    };
    a();
    const l = n.files.onDidChangeDirty((c) => {
      c.resource.toString() === o.toString() && a();
    });
    On(() => {
      l.dispose();
    });
  }), { isDirty: r, uri: ks(() => t()) };
}
var G1s, 
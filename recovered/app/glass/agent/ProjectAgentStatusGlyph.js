// @recovered-by cursor-re
// artifact: app/out/vs/workbench/workbench.glass.main.js sha256:6eb88cb60fce5bf5df2ee401f797d5e160b0bcb5d85c25e57d2576b467edce81
// module: ProjectAgentStatusGlyph.js range:17205364..17205797
// basis: inferred
// confidence: C
// method: split
// run: main 2026-11-05T10:03:45.259Z
// fragment: esbuild wrapper body + hoisted tail; may include adjacent declarations; not a standalone module
// deps: tslib.es6.js, stylex.js, icon.js
// path-candidate: none (no nls basename match; path inferred, confidence C)
// fragment: esbuild wrapper body + hoisted tail; may include adjacent declarations; not a standalone module
// deps: tslib.es6.js, stylex.js, icon.js
// path-candidate: none (no nls basename match; path inferred, confidence C)
Tgp = L({ "ProjectAgentStatusGlyph.js"() {
  "use strict";
  E(), Va(), fd(), Cgp = { working: { kMwMTN: "ui-p6nzhx", $$css: true }, done: { kMwMTN: "ui-1lbmi28", $$css: true }, attention: { kMwMTN: "ui-1hn9r2r", $$css: true } };
} });
function Egp(t) {
  const e = t.roleId;
  return e !== void 0 ? { roleId: e, tone: xgp[e], label: Igp[e] } : { tone: "default", label: t.role?.trim() || t.name.trim() || "Agent" };
}
var Igp, xgp, 
// @recovered-by cursor-re
// artifact: app/out/vs/workbench/workbench.glass.main.js sha256:6eb88cb60fce5bf5df2ee401f797d5e160b0bcb5d85c25e57d2576b467edce81
// module: AgentHostStreamErrorRow.js range:22633960..22634241
// basis: inferred
// confidence: C
// method: split
// run: main 2026-11-05T10:03:45.126Z
// fragment: esbuild wrapper body + hoisted tail; may include adjacent declarations; not a standalone module
// deps: tslib.es6.js, index.js
// path-candidate: none (no nls basename match; path inferred, confidence C)
// renamed: none (fragment not parseable as a program; rename map kept in scripts/recover/glass/p1-agent/maps)
// fragment: esbuild wrapper body + hoisted tail; may include adjacent declarations; not a standalone module
// deps: tslib.es6.js, index.js
// path-candidate: none (no nls basename match; path inferred, confidence C)
// renamed: none (fragment not parseable as a program; rename map kept in scripts/recover/glass/p1-agent/maps)
var QK1 = L({ "AgentHostStreamErrorRow.js"() {
  "use strict";
  E(), Mt();
} });
function qXa(t) {
  return typeof t == "object" && t !== null && t._tag === zXa;
}
function Ces(t) {
  return !t || t.type !== "mention" || !qXa(t.payload) ? null : t.payload.mentionItem;
}
var zXa, 
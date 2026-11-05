// @recovered-by cursor-re
// artifact: app/out/vs/workbench/workbench.glass.main.js sha256:6eb88cb60fce5bf5df2ee401f797d5e160b0bcb5d85c25e57d2576b467edce81
// module: MarkdownFileReference.js range:11126602..11127041
// basis: esbuild-wrapper + inferred
// confidence: C
// method: split
// run: glass-composer 2026-11-05T10:19:48.876Z
// deps: E, Va, Mdi, Oca, Ldi, k1t, edi, Z7t, GDr, SWe, hL, qu
// wrapper-init: CuS
// hoisted-owner: MarkdownPluginRegistry.js (app-out-vs-workbench-workbench-glass-main-js:1960); trailing declarations ownership inferred from segment adjacency
// path: null (no unique nls candidate; inferred only)
// renamed: none

CuS = L({ "MarkdownFileReference.js"() {
  "use strict";
  E(), Va(), Mdi(), Oca(), Ldi(), k1t(), edi(), Z7t(), GDr(), SWe(), hL(), qu(), fPh = typeof document < "u", vPh = /(?::\d+(?:-\d+)?|#L\d+(?:-L?\d+)?)$/i, _Ph = /^https?:\/\//i;
} });
function Bca(t) {
  if (t.id.trim().length === 0) throw new Error("Markdown plugins must have a non-empty id");
  Uca.set(t.id, t);
}
function TuS() {
  return Array.from(Uca.values());
}
var Uca, 
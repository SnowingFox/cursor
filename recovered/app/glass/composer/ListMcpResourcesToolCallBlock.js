// @recovered-by cursor-re
// artifact: app/out/vs/workbench/workbench.glass.main.js sha256:6eb88cb60fce5bf5df2ee401f797d5e160b0bcb5d85c25e57d2576b467edce81
// module: ListMcpResourcesToolCallBlock.js range:15220662..15220941
// basis: esbuild-wrapper + inferred
// confidence: C
// method: split
// run: glass-composer 2026-11-05T10:19:48.876Z
// deps: E, AO, c0e
// wrapper-init: aPS
// hoisted-owner: ls-command-detection.js (app-out-vs-workbench-workbench-glass-main-js:2353); trailing declarations ownership inferred from segment adjacency
// path: null (no unique nls candidate; inferred only)
// renamed: none

var aPS = L({ "ListMcpResourcesToolCallBlock.js"() {
  "use strict";
  E(), AO(), c0e();
} });
function D_a(t) {
  if (!t) return false;
  const e = t.trim();
  return !(e.length === 0 || !/^\s*ls(\s|$)/i.test(e) || zGh.test(e) || /\$\(|`/.test(e) || /[><]/.test(e));
}
var zGh, 
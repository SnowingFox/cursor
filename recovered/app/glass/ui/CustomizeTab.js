// @recovered-by cursor-re
// artifact: app/out/vs/workbench/workbench.glass.main.js sha256:6eb88cb60fce5bf5df2ee401f797d5e160b0bcb5d85c25e57d2576b467edce81
// module: CustomizeTab.js range:17214266..17214550
// basis: inferred
// confidence: C
// method: split
// run: main 2026-11-05T10:03:45.596Z
var Ns1 = L({ "CustomizeTab.js"() {
  "use strict";
  E(), Ts1(), Rs1(), dy();
} });
function Ls1(t, e, n) {
  const i = ZSt(t);
  if (n === "all") return new Set(i);
  const r = n === "working" ? "ready" : "blocked";
  return new Set(i.filter((s) => e.byTaskId[s]?.status === r));
}

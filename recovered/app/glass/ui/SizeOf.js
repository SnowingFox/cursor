// @recovered-by cursor-re
// artifact: app/out/vs/workbench/workbench.glass.main.js sha256:6eb88cb60fce5bf5df2ee401f797d5e160b0bcb5d85c25e57d2576b467edce81
// module: SizeOf.js range:666644..667063
// basis: inferred
// confidence: C
// method: split
// run: main 2026-11-05T10:03:46.015Z
nSy = L({ "SizeOf.js"() {
  "use strict";
  E();
} });
function iSy(t, e) {
  if (xZn()) return;
  const n = i_t(), i = n.instances ?? {}, r = e;
  i[t] != null && QR.warn("Creating multiple Statsig clients with the same SDK key can lead to unexpected behavior. Multi-instance support requires different SDK keys."), i[t] = r, n.firstInstance || (n.firstInstance = r), n.instances = i, __STATSIG__ = n;
}
var KJu, YJu, 
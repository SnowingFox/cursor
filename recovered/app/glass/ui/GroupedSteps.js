// @recovered-by cursor-re
// artifact: app/out/vs/workbench/workbench.glass.main.js sha256:6eb88cb60fce5bf5df2ee401f797d5e160b0bcb5d85c25e57d2576b467edce81
// module: GroupedSteps.js range:15218747..15219108
// basis: inferred
// confidence: C
// method: split
// run: main 2026-11-05T10:03:45.711Z
var M_a = L({ "GroupedSteps.js"() {
  "use strict";
  E(), AO(), e_a(), HGh(), Cjt(), CGh();
} });
function nPS(t) {
  return t.prompt?.trim() ?? "";
}
function iPS(t) {
  return { imageData: t.imageData?.trim() || void 0, filePath: t.filePath?.trim() || void 0 };
}
function WGh(t) {
  if (t) return t.startsWith("data:") ? t : `data:image/png;base64,${t}`;
}

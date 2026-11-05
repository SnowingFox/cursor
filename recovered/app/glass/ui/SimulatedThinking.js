// @recovered-by cursor-re
// artifact: app/out/vs/workbench/workbench.glass.main.js sha256:6eb88cb60fce5bf5df2ee401f797d5e160b0bcb5d85c25e57d2576b467edce81
// module: SimulatedThinking.js range:15150051..15150405
// basis: inferred
// confidence: C
// method: split
// run: main 2026-11-05T10:03:46.013Z
var e_a = L({ "SimulatedThinking.js"() {
  "use strict";
  E(), c0e();
} });
function t_a({ kind: t, loading: e, hasError: n }) {
  const i = t === "delete" ? ["Deleting canvas", "Delete canvas", "Deleted canvas"] : ["Updating canvas", "Update canvas", "Updated canvas"];
  return { action: e ? i[0] : n ? i[1] : i[2], details: n ? "attempted" : "" };
}

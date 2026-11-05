// @recovered-by cursor-re
// artifact: app/out/vs/workbench/workbench.glass.main.js sha256:6eb88cb60fce5bf5df2ee401f797d5e160b0bcb5d85c25e57d2576b467edce81
// module: SimulatedAction.js range:23143783..23144126
// basis: inferred
// confidence: C
// method: split
// run: main 2026-11-05T10:03:46.013Z
var Gtk = L({ "SimulatedAction.js"() {
  "use strict";
  E(), Mt();
} });
function qtk({ feedbackRequest: t, latestChatGenerationUUID: e, status: n, isDraft: i = false, forcedFeedbackRequest: r }) {
  if (!i) {
    if (r !== void 0) return r;
    if (n !== "generating" && !(t === void 0 || e === void 0 || t.requestId !== e)) return t;
  }
}

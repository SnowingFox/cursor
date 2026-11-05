// @recovered-by cursor-re
// artifact: app/out/vs/workbench/workbench.glass.main.js sha256:6eb88cb60fce5bf5df2ee401f797d5e160b0bcb5d85c25e57d2576b467edce81
// module: AutoRoutingResultDisplay.react.js range:30956177..30956849
// basis: inferred
// confidence: C
// method: split
// run: main 2026-11-05T10:03:45.492Z
var daw = L({ "AutoRoutingResultDisplay.react.js"() {
  "use strict";
  E(), d_();
} });
import { useCallback as haw, useState as paw } from "./react-runtime/react/esm-index-production.js";
import { jsx as maw } from "./react-runtime/react/esm-jsx-runtime-production.js";
function gaw(t, e) {
  e.requestId !== void 0 && t.reportAutoRoutingResultFeedback({ requestId: e.requestId, rating: e.rating, source: e.source, displayedModelLabel: e.displayedModelLabel });
}
function faw({ bubbleId: t, label: e, onReport: n }) {
  const [i, r] = paw(void 0), s = haw((o) => {
    r(o), n(t, e, o);
  }, [t, e, n]);
  return maw(uaw, { label: e, onRatingChange: s, rating: i });
}

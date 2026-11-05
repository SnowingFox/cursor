// @recovered-by cursor-re
// artifact: app/out/vs/workbench/workbench.glass.main.js sha256:6eb88cb60fce5bf5df2ee401f797d5e160b0bcb5d85c25e57d2576b467edce81
// module: PopoverViewportCssVars.mjs range:31342324..31342724
// basis: inferred
// confidence: C
// method: split
// run: main 2026-11-05T10:03:45.885Z
Xgw = L({ "PopoverViewportCssVars.mjs"() {
  E(), oMf = (function(t) {
    return t.popupWidth = "--popup-width", t.popupHeight = "--popup-height", t;
  })({});
} });
import * as Zgw from "./react-runtime/react/esm-index-production.js";
function Qgw(t) {
  const [e, n] = Zgw.useState({ current: t, previous: null });
  return t !== e.current && n({ current: t, previous: e.current }), e.previous;
}

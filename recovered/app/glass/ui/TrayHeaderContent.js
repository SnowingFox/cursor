// @recovered-by cursor-re
// artifact: app/out/vs/workbench/workbench.glass.main.js sha256:6eb88cb60fce5bf5df2ee401f797d5e160b0bcb5d85c25e57d2576b467edce81
// module: TrayHeaderContent.js range:16284902..16285605
// basis: inferred
// confidence: C
// method: split
// run: main 2026-11-05T10:03:46.105Z
var wWS = L({ "TrayHeaderContent.js"() {
  "use strict";
  E(), Art();
} });
import { jsx as CWS } from "./react-runtime/react/esm-jsx-runtime-production.js";
import { c as TWS } from "./react-runtime/react/esm-compiler-runtime-production.js";
function EWS(t) {
  const e = TWS(8);
  let n, i, r;
  e[0] !== t ? ({ children: n, truncate: r, ...i } = t, e[0] = t, e[1] = n, e[2] = i, e[3] = r) : (n = e[1], i = e[2], r = e[3]);
  const s = r === void 0 ? false : r;
  p$t("Tray.HeaderDescription");
  let o;
  return e[4] !== n || e[5] !== i || e[6] !== s ? (o = CWS(mrp, { ...i, component: "tray-header-description", truncate: s, children: n }), e[4] = n, e[5] = i, e[6] = s, e[7] = o) : o = e[7], o;
}

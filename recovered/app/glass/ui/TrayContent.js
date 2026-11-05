// @recovered-by cursor-re
// artifact: app/out/vs/workbench/workbench.glass.main.js sha256:6eb88cb60fce5bf5df2ee401f797d5e160b0bcb5d85c25e57d2576b467edce81
// module: TrayContent.js range:16269131..16269869
// basis: inferred
// confidence: C
// method: split
// run: main 2026-11-05T10:03:46.089Z
var UHS = L({ "TrayContent.js"() {
  "use strict";
  E(), _fi();
} });
import { jsx as jHS } from "./react-runtime/react/esm-jsx-runtime-production.js";
import { c as $HS } from "./react-runtime/react/esm-compiler-runtime-production.js";
function HHS(t) {
  const e = $HS(8);
  let n, i, r;
  e[0] !== t ? ({ children: n, ref: r, ...i } = t, e[0] = t, e[1] = n, e[2] = i, e[3] = r) : (n = e[1], i = e[2], r = e[3]), dkn("Tray.Empty");
  let s;
  return e[4] !== n || e[5] !== i || e[6] !== r ? (s = jHS("div", { ...i, className: "ui-9f619 ui-f6zju3 ui-1xpa7k ui-cnij5n ui-1uhho1l ui-11wthnw ui-1yxxptd ui-20ajya ui-19aaqeu", ref: r, "data-component": "tray-empty", children: n }), e[4] = n, e[5] = i, e[6] = r, e[7] = s) : s = e[7], s;
}

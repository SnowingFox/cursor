// @recovered-by cursor-re
// artifact: app/out/vs/workbench/workbench.glass.main.js sha256:6eb88cb60fce5bf5df2ee401f797d5e160b0bcb5d85c25e57d2576b467edce81
// module: TrayHeaderTitle.js range:16290509..16291193
// basis: inferred
// confidence: C
// method: split
// run: main 2026-11-05T10:03:46.113Z
var GWS = L({ "TrayHeaderTitle.js"() {
  "use strict";
  E(), Art(), hrp(), Srp();
} });
import { jsx as jrp } from "./react-runtime/react/esm-jsx-runtime-production.js";
import { c as qWS } from "./react-runtime/react/esm-compiler-runtime-production.js";
function zWS(t) {
  const e = qWS(2), { children: n } = t;
  Mrp("Tray.HeaderTrailing", "trailing");
  let i;
  return e[0] !== n ? (i = jrp(NC, { buttonRounded: true, buttonSize: "md", buttonVariant: "text", iconButtonSize: "sm", children: jrp("div", { className: "ui-78zum5 ui-6s0dn4 ui-13a6bvl ui-ehausa ui-2lah0s ui-1a6rlst", "data-component": "tray-header-trailing", children: n }) }), e[0] = n, e[1] = i) : i = e[1], i;
}

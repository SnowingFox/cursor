// @recovered-by cursor-re
// artifact: app/out/vs/workbench/workbench.glass.main.js sha256:6eb88cb60fce5bf5df2ee401f797d5e160b0bcb5d85c25e57d2576b467edce81
// module: DialogHeader.js range:11522566..11523232
// basis: inferred
// confidence: C
// method: split
// run: main 2026-11-05T10:03:45.614Z
var H3h = L({ "DialogHeader.js"() {
  "use strict";
  E(), dy(), EFe(), EUt(), qu();
} });
import { jsx as apS } from "./react-runtime/react/esm-jsx-runtime-production.js";
import { c as lpS } from "./react-runtime/react/esm-compiler-runtime-production.js";
function W3h(t) {
  const e = lpS(3), { children: n } = t;
  let i;
  e[0] === /* @__PURE__ */ Symbol.for("react.memo_cache_sentinel") ? (i = ar({ rootClass: "ui-dialog-header-lead", stylexStyles: I3h({ alignment: "start" }) }), e[0] = i) : i = e[0];
  const r = i;
  let s;
  return e[1] !== n ? (s = apS("div", { className: r.className, style: r.style, children: n }), e[1] = n, e[2] = s) : s = e[2], s;
}

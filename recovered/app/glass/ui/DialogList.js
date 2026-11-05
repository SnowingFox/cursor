// @recovered-by cursor-re
// artifact: app/out/vs/workbench/workbench.glass.main.js sha256:6eb88cb60fce5bf5df2ee401f797d5e160b0bcb5d85c25e57d2576b467edce81
// module: DialogList.js range:11525247..11525888
// basis: inferred
// confidence: C
// method: split
// run: main 2026-11-05T10:03:45.618Z
var V3h = L({ "DialogList.js"() {
  "use strict";
  E(), Va(), EFe(), q3h(), f2();
} });
import { jsx as fpS } from "./react-runtime/react/esm-jsx-runtime-production.js";
import { c as vpS } from "./react-runtime/react/esm-compiler-runtime-production.js";
function K3h(t) {
  const e = vpS(3), { children: n } = t;
  let i;
  e[0] === /* @__PURE__ */ Symbol.for("react.memo_cache_sentinel") ? (i = ar({ rootClass: "ui-dialog-list-header", stylexStyles: OhS() }), e[0] = i) : i = e[0];
  const r = i;
  let s;
  return e[1] !== n ? (s = fpS("li", { className: r.className, style: r.style, children: n }), e[1] = n, e[2] = s) : s = e[2], s;
}

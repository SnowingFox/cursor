// @recovered-by cursor-re
// artifact: app/out/vs/workbench/workbench.glass.main.js sha256:6eb88cb60fce5bf5df2ee401f797d5e160b0bcb5d85c25e57d2576b467edce81
// module: SubagentIcon.js range:17829078..17829973
// basis: inferred
// confidence: C
// method: split
// run: main 2026-11-05T10:03:45.268Z
// fragment: esbuild wrapper body + hoisted tail; may include adjacent declarations; not a standalone module
// deps: tslib.es6.js
// path-candidate: none (no nls basename match; path inferred, confidence C)
// fragment: esbuild wrapper body + hoisted tail; may include adjacent declarations; not a standalone module
// deps: tslib.es6.js
// path-candidate: none (no nls basename match; path inferred, confidence C)

var SubagentIconModule = L({
  "SubagentIcon.js"() {
    "use strict";

    E();
  }
});
import { jsx as uwp, jsxs as Mv1 } from "./react-runtime/react/esm-jsx-runtime-production.js";
import { c as Dv1 } from "./react-runtime/react/esm-compiler-runtime-production.js";
function SubagentIcon(t) {
  const e = Dv1(4);
  let n, i;
  e[0] === /* @__PURE__ */Symbol.for("react.memo_cache_sentinel") ? (n = uwp("path", {
    d: "M4.75 2.25v5.5a3.25 3.25 0 0 0 6.5 0v-5.5",
    stroke: "currentColor",
    strokeWidth: "1.2",
    strokeLinecap: "round"
  }), i = uwp("path", {
    d: "M3.75 13.25h8.5",
    stroke: "currentColor",
    strokeWidth: "1.2",
    strokeLinecap: "round"
  }), e[0] = n, e[1] = i) : (n = e[0], i = e[1]);
  let r;
  return e[2] !== t ? (r = Mv1("svg", {
    width: "1em",
    height: "1em",
    viewBox: "0 0 16 16",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    "aria-hidden": "true",
    ...t,
    children: [n, i]
  }), e[2] = t, e[3] = r) : r = e[3], r;
}

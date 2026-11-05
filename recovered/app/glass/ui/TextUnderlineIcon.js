// @recovered-by cursor-re
// artifact: app/out/vs/workbench/workbench.glass.main.js sha256:6eb88cb60fce5bf5df2ee401f797d5e160b0bcb5d85c25e57d2576b467edce81
// module: TextUnderlineIcon.js range:17829973..17830939
// basis: inferred
// confidence: C
// method: split
// run: main 2026-11-05T10:03:46.068Z
var hwp = L({ "TextUnderlineIcon.js"() {
  "use strict";
  E();
} });
import { jsx as pwp } from "./react-runtime/react/esm-jsx-runtime-production.js";
import { c as Nv1 } from "./react-runtime/react/esm-compiler-runtime-production.js";
function mwp(t) {
  const e = Nv1(9);
  let n, i, r;
  e[0] !== t ? ({ size: i, title: r, ...n } = t, e[0] = t, e[1] = n, e[2] = i, e[3] = r) : (n = e[1], i = e[2], r = e[3]);
  const s = i === void 0 ? 24 : i, o = r === void 0 ? "xAI" : r;
  let a;
  e[4] === /* @__PURE__ */ Symbol.for("react.memo_cache_sentinel") ? (a = pwp("path", { d: "M3 3l7.5 9L3 21h2.25l6-7.2L17.25 21H21l-7.5-9L21 3h-2.25l-6 7.2L6.75 3z" }), e[4] = a) : a = e[4];
  let l;
  return e[5] !== n || e[6] !== s || e[7] !== o ? (l = pwp("svg", { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 24 24", width: s, height: s, role: "img", "aria-label": o, fill: "currentColor", ...n, children: a }), e[5] = n, e[6] = s, e[7] = o, e[8] = l) : l = e[8], l;
}

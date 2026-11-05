// @recovered-by cursor-re
// artifact: app/out/vs/workbench/workbench.glass.main.js sha256:6eb88cb60fce5bf5df2ee401f797d5e160b0bcb5d85c25e57d2576b467edce81
// module: AtlassianIcon.js range:17778915..17780050
// basis: inferred
// confidence: C
// method: split
// run: main 2026-11-05T10:03:45.489Z
var Pf1 = L({ "AtlassianIcon.js"() {
  "use strict";
  E();
} });
import { jsx as jkp } from "./react-runtime/react/esm-jsx-runtime-production.js";
import { c as Mf1 } from "./react-runtime/react/esm-compiler-runtime-production.js";
function Df1(t) {
  const e = Mf1(12);
  let n, i, r, s;
  e[0] !== t ? ({ size: i, title: r, variant: s, ...n } = t, e[0] = t, e[1] = n, e[2] = i, e[3] = r, e[4] = s) : (n = e[1], i = e[2], r = e[3], s = e[4]);
  const o = i === void 0 ? 24 : i, a = r === void 0 ? "Azure DevOps" : r, c = (s === void 0 ? "monochrome" : s) === "brand" ? "#0078D4" : "currentColor";
  let u;
  e[5] !== c ? (u = jkp("path", { fill: c, d: "M0 8.877L2.247 5.91l8.405-3.416V.022l7.37 5.393L2.966 8.338v8.225L0 15.707zm24-4.45v14.651l-5.753 4.9-9.303-3.39V25l-5.978-7.318 15.057 1.762V5.087z" }), e[5] = c, e[6] = u) : u = e[6];
  let d;
  return e[7] !== n || e[8] !== o || e[9] !== u || e[10] !== a ? (d = jkp("svg", { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 24 24", width: o, height: o, role: "img", "aria-label": a, ...n, children: u }), e[7] = n, e[8] = o, e[9] = u, e[10] = a, e[11] = d) : d = e[11], d;
}

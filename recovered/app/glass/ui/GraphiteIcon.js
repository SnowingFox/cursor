// @recovered-by cursor-re
// artifact: app/out/vs/workbench/workbench.glass.main.js sha256:6eb88cb60fce5bf5df2ee401f797d5e160b0bcb5d85c25e57d2576b467edce81
// module: GraphiteIcon.js range:17808844..17810592
// basis: inferred
// confidence: C
// method: split
// run: main 2026-11-05T10:03:45.708Z
var ov1 = L({ "GraphiteIcon.js"() {
  "use strict";
  E();
} });
import { jsx as twp, jsxs as av1 } from "./react-runtime/react/esm-jsx-runtime-production.js";
import { c as lv1 } from "./react-runtime/react/esm-compiler-runtime-production.js";
function cv1(t) {
  const e = lv1(16);
  let n, i, r, s;
  e[0] !== t ? ({ size: i, title: r, variant: s, ...n } = t, e[0] = t, e[1] = n, e[2] = i, e[3] = r, e[4] = s) : (n = e[1], i = e[2], r = e[3], s = e[4]);
  const o = i === void 0 ? 24 : i, a = r === void 0 ? "Microsoft Teams" : r, c = (s === void 0 ? "monochrome" : s) === "brand", u = c ? void 0 : "currentColor", d = c ? "#5059C9" : void 0;
  let h;
  e[5] !== d ? (h = twp("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M15.5 5A3 3 0 0 1 14 7.599V7.5a2 2 0 0 0-2-2H9.541A3 3 0 1 1 15.5 5Zm6.25 1a2 2 0 1 1-4 0 2 2 0 0 1 4 0Zm-3.294 11.732A3.25 3.25 0 0 0 23 14.75v-4.361a.889.889 0 0 0-.889-.889h-3.879c.17.294.268.636.268 1V17c0 .248-.015.492-.044.732ZM8.169 19.5A5 5 0 0 0 17.5 17v-6.5a1 1 0 0 0-1-1H14v8a2 2 0 0 1-2 2H8.169Z", fill: d }), e[5] = d, e[6] = h) : h = e[6];
  const p = c ? "#7B83EB" : void 0;
  let g;
  e[7] !== p ? (g = twp("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M1 17.5v-10a1 1 0 0 1 1-1h10a1 1 0 0 1 1 1v10a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1Zm6.75-6.75H9.5v-1.5h-5v1.5h1.75v4.75h1.5v-4.75Z", fill: p }), e[7] = p, e[8] = g) : g = e[8];
  let f;
  return e[9] !== n || e[10] !== o || e[11] !== u || e[12] !== h || e[13] !== g || e[14] !== a ? (f = av1("svg", { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 24 24", width: o, height: o, fill: u, role: "img", "aria-label": a, ...n, children: [h, g] }), e[9] = n, e[10] = o, e[11] = u, e[12] = h, e[13] = g, e[14] = a, e[15] = f) : f = e[15], f;
}

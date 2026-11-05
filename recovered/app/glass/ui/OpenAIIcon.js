// @recovered-by cursor-re
// artifact: app/out/vs/workbench/workbench.glass.main.js sha256:6eb88cb60fce5bf5df2ee401f797d5e160b0bcb5d85c25e57d2576b467edce81
// module: OpenAIIcon.js range:17815132..17816418
// basis: inferred
// confidence: C
// method: split
// run: main 2026-11-05T10:03:45.839Z
var gv1 = L({ "OpenAIIcon.js"() {
  "use strict";
  E();
} });
import { jsx as mRa } from "./react-runtime/react/esm-jsx-runtime-production.js";
import { c as fv1 } from "./react-runtime/react/esm-compiler-runtime-production.js";
function vv1(t) {
  const e = fv1(13);
  let n, i, r, s;
  e[0] !== t ? ({ size: i, title: r, variant: s, ...n } = t, e[0] = t, e[1] = n, e[2] = i, e[3] = r, e[4] = s) : (n = e[1], i = e[2], r = e[3], s = e[4]);
  const o = i === void 0 ? 24 : i, a = r === void 0 ? "PagerDuty" : r, c = (s === void 0 ? "monochrome" : s) === "brand", u = c ? void 0 : "currentColor", d = c ? "#06AC38" : void 0;
  let h;
  e[5] !== d ? (h = mRa("g", { transform: "translate(-2.23 0)", children: mRa("path", { d: "M15.59 0H5.65v16.08h3.56V3.39h6.12c2.37 0 4.23 1.28 4.23 3.86 0 2.47-1.67 3.97-4.23 3.97H12.1v3.21h3.56c4.49 0 7.15-2.93 7.15-7.1C22.81 2.97 20.28 0 15.59 0zM5.65 20.4h3.56V24H5.65z", fill: d }) }), e[5] = d, e[6] = h) : h = e[6];
  let p;
  return e[7] !== n || e[8] !== o || e[9] !== u || e[10] !== h || e[11] !== a ? (p = mRa("svg", { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 24 24", width: o, height: o, fill: u, role: "img", "aria-label": a, ...n, children: h }), e[7] = n, e[8] = o, e[9] = u, e[10] = h, e[11] = a, e[12] = p) : p = e[12], p;
}

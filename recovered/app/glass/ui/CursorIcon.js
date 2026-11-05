// @recovered-by cursor-re
// artifact: app/out/vs/workbench/workbench.glass.main.js sha256:6eb88cb60fce5bf5df2ee401f797d5e160b0bcb5d85c25e57d2576b467edce81
// module: CursorIcon.js range:15963233..15964621
// basis: inferred
// confidence: C
// method: split
// run: main 2026-11-05T10:03:45.580Z
var etp = L({ "CursorIcon.js"() {
  "use strict";
  E();
} });
import { jsx as ttp } from "./react-runtime/react/esm-jsx-runtime-production.js";
import { c as A8S } from "./react-runtime/react/esm-compiler-runtime-production.js";
function M9r(t) {
  const e = A8S(13);
  let n, i, r, s;
  e[0] !== t ? ({ size: i, title: r, variant: s, ...n } = t, e[0] = t, e[1] = n, e[2] = i, e[3] = r, e[4] = s) : (n = e[1], i = e[2], r = e[3], s = e[4]);
  const o = i === void 0 ? 24 : i, a = r === void 0 ? "Linear" : r, c = (s === void 0 ? "monochrome" : s) === "brand", u = c ? void 0 : "currentColor", d = c ? "#5E6AD2" : void 0;
  let h;
  e[5] !== d ? (h = ttp("path", { d: "M2.886 4.18A11.982 11.982 0 0 1 11.99 0C18.624 0 24 5.376 24 12.009c0 3.64-1.62 6.903-4.18 9.105L2.887 4.18ZM1.817 5.626l16.556 16.556c-.524.33-1.075.62-1.65.866L.951 7.277c.247-.575.537-1.126.866-1.65ZM.322 9.163l14.515 14.515c-.71.172-1.443.282-2.195.322L0 11.358a12 12 0 0 1 .322-2.195Zm-.17 4.862 9.823 9.824a12.02 12.02 0 0 1-9.824-9.824Z", fill: d }), e[5] = d, e[6] = h) : h = e[6];
  let p;
  return e[7] !== n || e[8] !== o || e[9] !== u || e[10] !== h || e[11] !== a ? (p = ttp("svg", { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 24 24", width: o, height: o, fill: u, role: "img", "aria-label": a, ...n, children: h }), e[7] = n, e[8] = o, e[9] = u, e[10] = h, e[11] = a, e[12] = p) : p = e[12], p;
}

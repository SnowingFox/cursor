// @recovered-by cursor-re
// artifact: app/out/vs/workbench/workbench.glass.main.js sha256:6eb88cb60fce5bf5df2ee401f797d5e160b0bcb5d85c25e57d2576b467edce81
// module: PagerDutyIcon.js range:17816418..17818299
// basis: inferred
// confidence: C
// method: split
// run: main 2026-11-05T10:03:45.848Z
var _v1 = L({ "PagerDutyIcon.js"() {
  "use strict";
  E();
} });
import { jsx as owp } from "./react-runtime/react/esm-jsx-runtime-production.js";
import { c as bv1 } from "./react-runtime/react/esm-compiler-runtime-production.js";
function yv1(t) {
  const e = bv1(12);
  let n, i, r, s;
  e[0] !== t ? ({ size: i, title: r, variant: s, ...n } = t, e[0] = t, e[1] = n, e[2] = i, e[3] = r, e[4] = s) : (n = e[1], i = e[2], r = e[3], s = e[4]);
  const o = i === void 0 ? 24 : i, a = r === void 0 ? "Sentry" : r, c = (s === void 0 ? "monochrome" : s) === "brand" ? "#6E47AE" : "currentColor";
  let u;
  e[5] !== c ? (u = owp("path", { fill: c, d: "m23.663 19.246-9.72-16.71C13.497 1.798 12.749 1.5 12 1.5s-1.495.444-1.943 1.036l-3.14 5.471.748.444a14.735 14.735 0 0 1 5.682 5.619c1.197 2.071 1.944 4.288 2.094 6.656h-2.243a13.066 13.066 0 0 0-1.794-5.621c-1.047-2.07-2.692-3.697-4.785-4.88l-.749-.443-2.99 5.028.747.444c1.944 1.182 3.29 3.104 3.589 5.323H2.281c-.149 0-.3-.148-.3-.148s-.148-.148 0-.296l1.348-2.367c-.449-.442-1.048-.74-1.646-.886L.337 19.247c-.449.74-.449 1.479 0 2.219.448.738 1.046 1.034 1.943 1.034h6.879v-.886c0-1.627-.449-3.106-1.196-4.586-.599-1.182-1.496-2.07-2.542-2.808l1.047-1.924c1.347 1.034 2.543 2.218 3.439 3.698 1.047 1.773 1.496 3.697 1.496 5.619v.886h5.831v-.886c0-2.957-.747-5.916-2.392-8.577-1.197-2.368-3.141-4.289-5.385-5.768L11.7 3.424c.152-.149.3-.149.3-.149.15 0 .15 0 .299.148l9.721 16.709c.148.146 0 .296 0 .296s-.15.148-.3.148h-2.243v1.775h2.243c.896.147 1.495-.148 1.943-.886.449-.739.449-1.479 0-2.219z" }), e[5] = c, e[6] = u) : u = e[6];
  let d;
  return e[7] !== n || e[8] !== o || e[9] !== u || e[10] !== a ? (d = owp("svg", { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 24 24", width: o, height: o, role: "img", "aria-label": a, ...n, children: u }), e[7] = n, e[8] = o, e[9] = u, e[10] = a, e[11] = d) : d = e[11], d;
}

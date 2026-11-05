// @recovered-by cursor-re
// artifact: app/out/vs/workbench/workbench.glass.main.js sha256:6eb88cb60fce5bf5df2ee401f797d5e160b0bcb5d85c25e57d2576b467edce81
// module: GoogleIcon.js range:17807433..17808844
// basis: inferred
// confidence: C
// method: split
// run: main 2026-11-05T10:03:45.707Z
var rv1 = L({ "GoogleIcon.js"() {
  "use strict";
  E();
} });
import { jsx as Jkp } from "./react-runtime/react/esm-jsx-runtime-production.js";
import { c as sv1 } from "./react-runtime/react/esm-compiler-runtime-production.js";
function ewp(t) {
  const e = sv1(11);
  let n, i, r, s;
  e[0] !== t ? ({ size: i, title: r, variant: s, ...n } = t, e[0] = t, e[1] = n, e[2] = i, e[3] = r, e[4] = s) : (n = e[1], i = e[2], r = e[3], s = e[4]);
  const o = i === void 0 ? 24 : i, a = r === void 0 ? "Graphite" : r, c = (s === void 0 ? "monochrome" : s) === "brand" ? "var(--cursor-icon-primary)" : "currentColor";
  let u;
  e[5] === /* @__PURE__ */ Symbol.for("react.memo_cache_sentinel") ? (u = Jkp("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M3.10115 3.1009L9.79325 1.3078L14.6923 6.2068L12.8991 12.8989L6.20695 14.692L1.30795 9.793L3.10115 3.1009ZM5.11335 12.9999L10.8869 12.9999L13.7736 7.9999L10.8869 2.9999L5.11335 2.9999L2.22665 7.9999L5.11335 12.9999ZM6.77378 3.42319L11.3505 4.64959L12.5769 9.22629L9.22638 12.5768L4.64968 11.3504L3.42328 6.77369L6.77378 3.42319Z" }), e[5] = u) : u = e[5];
  let d;
  return e[6] !== n || e[7] !== o || e[8] !== c || e[9] !== a ? (d = Jkp("svg", { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 16 16", width: o, height: o, fill: c, role: "img", "aria-label": a, ...n, children: u }), e[6] = n, e[7] = o, e[8] = c, e[9] = a, e[10] = d) : d = e[10], d;
}

// @recovered-by cursor-re
// artifact: app/out/vs/workbench/workbench.glass.main.js sha256:6eb88cb60fce5bf5df2ee401f797d5e160b0bcb5d85c25e57d2576b467edce81
// module: BitbucketIcon.js range:17782127..17783601
// basis: inferred
// confidence: C
// method: split
// run: main 2026-11-05T10:03:45.502Z
var Bf1 = L({ "BitbucketIcon.js"() {
  "use strict";
  E();
} });
import { jsx as dRa } from "./react-runtime/react/esm-jsx-runtime-production.js";
import { c as Uf1 } from "./react-runtime/react/esm-compiler-runtime-production.js";
import { useRef as jf1 } from "./react-runtime/react/esm-index-production.js";
function $f1(t) {
  const e = Uf1(17);
  let n, i, r, s, o;
  e[0] !== t ? ({ size: i, themeTypeMapping: o, title: r, variant: s, ...n } = t, e[0] = t, e[1] = n, e[2] = i, e[3] = r, e[4] = s, e[5] = o) : (n = e[1], i = e[2], r = e[3], s = e[4], o = e[5]);
  const a = i === void 0 ? 24 : i, l = r === void 0 ? "Datadog" : r, c = s === void 0 ? "monochrome" : s, u = jf1(null);
  let d;
  e[6] !== o ? (d = { elementRef: u, mapping: o }, e[6] = o, e[7] = d) : d = e[7];
  const p = Lkp(d) === "dark", g = c === "brand" ? p ? "var(--cursor-icon-primary)" : "#632CA6" : "currentColor", f = p ? Hkp : $kp;
  let _;
  e[8] !== g || e[9] !== p || e[10] !== f ? (_ = p ? dRa("path", { d: f, fill: g }) : dRa("path", { fillRule: "evenodd", clipRule: "evenodd", d: f, fill: g }), e[8] = g, e[9] = p, e[10] = f, e[11] = _) : _ = e[11];
  let b;
  return e[12] !== n || e[13] !== a || e[14] !== _ || e[15] !== l ? (b = dRa("svg", { ref: u, xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 24 24", width: a, height: a, fill: "none", role: "img", "aria-label": l, ...n, children: _ }), e[12] = n, e[13] = a, e[14] = _, e[15] = l, e[16] = b) : b = e[16], b;
}
var $kp, Hkp, 
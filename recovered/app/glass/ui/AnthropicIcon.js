// @recovered-by cursor-re
// artifact: app/out/vs/workbench/workbench.glass.main.js sha256:6eb88cb60fce5bf5df2ee401f797d5e160b0bcb5d85c25e57d2576b467edce81
// module: AnthropicIcon.js range:17777630..17778915
// basis: inferred
// confidence: C
// method: split
// run: main 2026-11-05T10:03:45.485Z
var If1 = L({ "AnthropicIcon.js"() {
  "use strict";
  E();
} });
import { jsx as Ukp, jsxs as xf1 } from "./react-runtime/react/esm-jsx-runtime-production.js";
import { c as Af1 } from "./react-runtime/react/esm-compiler-runtime-production.js";
function Rf1(t) {
  const e = Af1(10);
  let n, i, r;
  e[0] !== t ? ({ size: i, title: r, ...n } = t, e[0] = t, e[1] = n, e[2] = i, e[3] = r) : (n = e[1], i = e[2], r = e[3]);
  const s = i === void 0 ? 24 : i, o = r === void 0 ? "Atlassian" : r;
  let a, l;
  e[4] === /* @__PURE__ */ Symbol.for("react.memo_cache_sentinel") ? (a = Ukp("path", { fill: "#0052CC", d: "M15.13 24h8.166a.702.702 0 0 0 .628-1.017S12.932.924 12.655.375c-.248-.497-.881-.506-1.2.005V.379c-5.733 9.066-.398 16.341 3.047 23.227a.702.702 0 0 0 .628.394z" }), l = Ukp("path", { fill: "#0052CC", d: "M5.972 11.211.075 22.977a.704.704 0 0 0 .628 1.017h8.203a.675.675 0 0 0 .628-.394c1.777-3.647.708-9.202-2.4-12.52-.362-.384-.924-.361-1.162.131z" }), e[4] = a, e[5] = l) : (a = e[4], l = e[5]);
  let c;
  return e[6] !== n || e[7] !== s || e[8] !== o ? (c = xf1("svg", { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 24 24", width: s, height: s, role: "img", "aria-label": o, ...n, children: [a, l] }), e[6] = n, e[7] = s, e[8] = o, e[9] = c) : c = e[9], c;
}

// @recovered-by cursor-re
// artifact: app/out/vs/workbench/workbench.glass.main.js sha256:6eb88cb60fce5bf5df2ee401f797d5e160b0bcb5d85c25e57d2576b467edce81
// module: DiscordIcon.js range:17795868..17797340
// basis: inferred
// confidence: C
// method: split
// run: main 2026-11-05T10:03:45.643Z
var qf1 = L({ "DiscordIcon.js"() {
  "use strict";
  E();
} });
import { jsx as S_i, jsxs as zf1 } from "./react-runtime/react/esm-jsx-runtime-production.js";
import { c as Vf1 } from "./react-runtime/react/esm-compiler-runtime-production.js";
function Gkp(t) {
  const e = Vf1(13);
  let n, i, r;
  e[0] !== t ? ({ size: i, title: r, ...n } = t, e[0] = t, e[1] = n, e[2] = i, e[3] = r) : (n = e[1], i = e[2], r = e[3]);
  const s = i === void 0 ? 24 : i, o = r === void 0 ? "Figma" : r;
  let a, l, c, u, d;
  e[4] === /* @__PURE__ */ Symbol.for("react.memo_cache_sentinel") ? (a = S_i("path", { fill: "#0ACF83", d: "M8 24c2.208 0 4-1.792 4-4v-4H8c-2.208 0-4 1.792-4 4s1.792 4 4 4z" }), l = S_i("path", { fill: "#A259FF", d: "M4 12c0-2.208 1.792-4 4-4h4v8H8c-2.208 0-4-1.792-4-4z" }), c = S_i("path", { fill: "#F24E1E", d: "M4 4c0-2.208 1.792-4 4-4h4v8H8C5.792 8 4 6.208 4 4z" }), u = S_i("path", { fill: "#FF7262", d: "M12 0h4c2.208 0 4 1.792 4 4s-1.792 4-4 4h-4V0z" }), d = S_i("path", { fill: "#1ABCFE", d: "M20 12c0 2.208-1.792 4-4 4s-4-1.792-4-4 1.792-4 4-4 4 1.792 4 4z" }), e[4] = a, e[5] = l, e[6] = c, e[7] = u, e[8] = d) : (a = e[4], l = e[5], c = e[6], u = e[7], d = e[8]);
  let h;
  return e[9] !== n || e[10] !== s || e[11] !== o ? (h = zf1("svg", { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 24 24", width: s, height: s, role: "img", "aria-label": o, ...n, children: [a, l, c, u, d] }), e[9] = n, e[10] = s, e[11] = o, e[12] = h) : h = e[12], h;
}

// @recovered-by cursor-re
// artifact: app/out/vs/workbench/workbench.glass.main.js sha256:6eb88cb60fce5bf5df2ee401f797d5e160b0bcb5d85c25e57d2576b467edce81
// module: ContextTab.js range:17204306..17205364
// basis: inferred
// confidence: C
// method: split
// run: main 2026-11-05T10:03:45.571Z
var _s1 = L({ "ContextTab.js"() {
  "use strict";
  E(), as1(), ds1(), ngp(), dy(), fd();
} });
import { jsx as kgp } from "./react-runtime/react/esm-jsx-runtime-production.js";
import { c as bs1 } from "./react-runtime/react/esm-compiler-runtime-production.js";
function wgp(t) {
  const e = bs1(12), { status: n, size: i, iconSet: r } = t, s = r === void 0 ? "badge" : r;
  let o;
  e[0] !== n ? (o = gn(Cgp[n]), e[0] = n, e[1] = o) : o = e[1];
  let a;
  e[2] !== s || e[3] !== n ? (a = ys1(n, s), e[2] = s, e[3] = n, e[4] = a) : a = e[4];
  const l = n === "working" ? "spin" : void 0;
  let c;
  e[5] !== i || e[6] !== a || e[7] !== l ? (c = kgp(zt, { name: a, size: i, modifier: l, "aria-hidden": true }), e[5] = i, e[6] = a, e[7] = l, e[8] = c) : c = e[8];
  let u;
  return e[9] !== o || e[10] !== c ? (u = kgp("span", { ...o, children: c }), e[9] = o, e[10] = c, e[11] = u) : u = e[11], u;
}
function ys1(t, e) {
  return t === "done" ? e === "checklist" ? "check" : "check-circle" : t === "attention" ? "exclamation-circle" : "loading";
}
var Cgp, 
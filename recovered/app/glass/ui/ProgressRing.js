// @recovered-by cursor-re
// artifact: app/out/vs/workbench/workbench.glass.main.js sha256:6eb88cb60fce5bf5df2ee401f797d5e160b0bcb5d85c25e57d2576b467edce81
// module: ProgressRing.js range:14721505..14723417
// basis: inferred
// confidence: C
// method: split
// run: main 2026-11-05T10:03:45.913Z
ypi = L({ "ProgressRing.js"() {
  "use strict";
  E(), Va(), _ga(), bga(), mf(), T9h(), fga(), Sga = { track: { kSiTet: "ui-z5rk10", $$css: true }, fill: { kSiTet: "ui-197sbye", k1ekBW: "ui-1ib35zr ui-4wkmsb", kIyJzY: "ui-1bqoo3p", kAMwcw: "ui-6tor67", k3aq6I: "ui-9tu13d", k3nNDw: "ui-1g0ag68", $$css: true } }, x9h = 0.16, bpi = 1e3, _5r = 6, kga = 2 * Math.PI * _5r, wga = 1.5, Cga = 2, Tga = { xs: 11, sm: 14, md: 18, lg: 24 };
} });
import { jsx as Spi } from "./react-runtime/react/esm-jsx-runtime-production.js";
import { c as A9h } from "./react-runtime/react/esm-compiler-runtime-production.js";
function twS(t) {
  const e = A9h(8), { children: n, description: i, ref: r } = t, s = i != null || void 0;
  let o;
  e[0] === /* @__PURE__ */ Symbol.for("react.memo_cache_sentinel") ? (o = gn(K1t, Ega.status), e[0] = o) : o = e[0];
  let a;
  e[1] !== n || e[2] !== i ? (a = Spi(t0e, { description: i, children: n }), e[1] = n, e[2] = i, e[3] = a) : a = e[3];
  let l;
  return e[4] !== r || e[5] !== s || e[6] !== a ? (l = Spi("div", { ref: r, "data-component": "menu-empty", "data-has-description": s, ...o, children: a }), e[4] = r, e[5] = s, e[6] = a, e[7] = l) : l = e[7], l;
}
function nwS(t) {
  const e = A9h(7), { children: n, ref: i } = t, r = n === void 0 ? "Loading…" : n;
  let s;
  e[0] === /* @__PURE__ */ Symbol.for("react.memo_cache_sentinel") ? (s = gn(K1t, Ega.status), e[0] = s) : s = e[0];
  let o;
  e[1] === /* @__PURE__ */ Symbol.for("react.memo_cache_sentinel") ? (o = Spi(Oz, { indeterminate: true, size: "sm" }), e[1] = o) : o = e[1];
  let a;
  e[2] !== r ? (a = Spi(t0e, { leading: o, children: r }), e[2] = r, e[3] = a) : a = e[3];
  let l;
  return e[4] !== i || e[5] !== a ? (l = Spi("div", { ref: i, "aria-busy": "true", "aria-live": "polite", "data-component": "menu-loading", role: "status", ...s, children: a }), e[4] = i, e[5] = a, e[6] = l) : l = e[6], l;
}
var Ega, 
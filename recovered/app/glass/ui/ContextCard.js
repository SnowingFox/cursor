// @recovered-by cursor-re
// artifact: app/out/vs/workbench/workbench.glass.main.js sha256:6eb88cb60fce5bf5df2ee401f797d5e160b0bcb5d85c25e57d2576b467edce81
// module: ContextCard.js range:17194431..17195401
// basis: inferred
// confidence: C
// method: split
// run: main 2026-11-05T10:03:45.566Z
var as1 = L({ "ContextCard.js"() {
  "use strict";
  E(), ngp(), Jr1(), k1t(), dy(), fd();
} });
import { jsx as bgp } from "./react-runtime/react/esm-jsx-runtime-production.js";
import { c as ls1 } from "./react-runtime/react/esm-compiler-runtime-production.js";
function cs1(t) {
  const e = ls1(6), { mode: n, onModeChange: i } = t;
  let r;
  e[0] !== i ? (r = (a) => {
    a !== null && i(a);
  }, e[0] = i, e[1] = r) : r = e[1];
  let s;
  e[2] === /* @__PURE__ */ Symbol.for("react.memo_cache_sentinel") ? (s = ygp.map(us1), e[2] = s) : s = e[2];
  let o;
  return e[3] !== n || e[4] !== r ? (o = bgp(b1, { value: n, onValueChange: r, variant: "ghost", size: "md", menuSize: "md", contentWidth: 160, placement: "bottom-end", "aria-label": "Context view", options: s }), e[3] = n, e[4] = r, e[5] = o) : o = e[5], o;
}
function us1(t) {
  return { value: t.id, label: t.label, leading: bgp(zt, { name: t.iconName, size: "base", "aria-hidden": true }) };
}
var ygp, 
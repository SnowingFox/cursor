// @recovered-by cursor-re
// artifact: app/out/vs/workbench/workbench.glass.main.js sha256:6eb88cb60fce5bf5df2ee401f797d5e160b0bcb5d85c25e57d2576b467edce81
// module: ResponseComparison.js range:15249586..15250841
// basis: inferred
// confidence: C
// method: split
// run: main 2026-11-05T10:03:45.954Z
yPS = L({ "ResponseComparison.js"() {
  "use strict";
  E(), joe(), pPS(), H1t(), hL(), QGh = 6, JGh = 'a, button, input, select, textarea, [role="button"]', L_a = "The alternate response is not billed", O_a = 0.5, eqh = 0.25, tqh = [0, 0.25, 0.5, 0.75, 1];
} });
import { c as SPS } from "./react-runtime/react/esm-compiler-runtime-production.js";
import { useState as nqh, useLayoutEffect as kPS } from "./react-runtime/react/esm-index-production.js";
function Ajt(t) {
  const e = SPS(7), n = t?.enabled ?? true, [i, r] = nqh(null), [s, o] = nqh(0);
  let a;
  e[0] === /* @__PURE__ */ Symbol.for("react.memo_cache_sentinel") ? (a = (h) => {
    r(h);
  }, e[0] = a) : a = e[0];
  const l = a;
  let c, u;
  e[1] !== n || e[2] !== i ? (c = () => {
    if (!n || !i) return;
    const h = (g) => {
      o((f) => f === g ? f : g);
    };
    o((g) => {
      const f = i.offsetWidth;
      return g === f ? g : f;
    });
    const p = new ResizeObserver(() => {
      h(i.offsetWidth);
    });
    return p.observe(i), () => {
      p.disconnect();
    };
  }, u = [n, i], e[1] = n, e[2] = i, e[3] = c, e[4] = u) : (c = e[3], u = e[4]), kPS(c, u);
  let d;
  return e[5] !== s ? (d = { ref: l, width: s }, e[5] = s, e[6] = d) : d = e[6], d;
}
var F_a, 
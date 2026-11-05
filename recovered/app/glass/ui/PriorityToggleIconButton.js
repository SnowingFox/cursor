// @recovered-by cursor-re
// artifact: app/out/vs/workbench/workbench.glass.main.js sha256:6eb88cb60fce5bf5df2ee401f797d5e160b0bcb5d85c25e57d2576b467edce81
// module: PriorityToggleIconButton.js range:15940831..15941969
// basis: inferred
// confidence: C
// method: split
// run: main 2026-11-05T10:03:45.908Z
var I9r = L({ "PriorityToggleIconButton.js"() {
  "use strict";
  E(), X7t();
} });
import { c as s8S } from "./react-runtime/react/esm-compiler-runtime-production.js";
import { useRef as Hep, useEffect as o8S } from "./react-runtime/react/esm-index-production.js";
function jz() {
  const t = s8S(5), e = Hep(true), n = Hep(void 0);
  let i;
  t[0] === /* @__PURE__ */ Symbol.for("react.memo_cache_sentinel") ? (i = () => {
    n.current !== void 0 && (clearTimeout(n.current), n.current = void 0);
  }, t[0] = i) : i = t[0];
  const r = i;
  let s;
  t[1] === /* @__PURE__ */ Symbol.for("react.memo_cache_sentinel") ? (s = (u, d) => {
    e.current && (r(), n.current = setTimeout(() => {
      n.current = void 0, u();
    }, d));
  }, t[1] = s) : s = t[1];
  const o = s;
  let a, l;
  t[2] === /* @__PURE__ */ Symbol.for("react.memo_cache_sentinel") ? (a = () => (e.current = true, () => {
    e.current = false, r();
  }), l = [r], t[2] = a, t[3] = l) : (a = t[2], l = t[3]), o8S(a, l);
  let c;
  return t[4] === /* @__PURE__ */ Symbol.for("react.memo_cache_sentinel") ? (c = { cancel: r, schedule: o }, t[4] = c) : c = t[4], c;
}

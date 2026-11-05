// @recovered-by cursor-re
// artifact: app/out/vs/workbench/workbench.glass.main.js sha256:6eb88cb60fce5bf5df2ee401f797d5e160b0bcb5d85c25e57d2576b467edce81
// module: TabEmptyStateOverlay.js range:17522163..17523556
// basis: inferred
// confidence: C
// method: split
// run: main 2026-11-05T10:03:46.046Z
var kd1 = L({ "TabEmptyStateOverlay.js"() {
  "use strict";
  E(), Fbp();
} });
import { jsx as Axa, jsxs as wd1 } from "./react-runtime/react/esm-jsx-runtime-production.js";
import { c as Cd1 } from "./react-runtime/react/esm-compiler-runtime-production.js";
function Td1(t) {
  const e = Cd1(12), { value: n, onValueChange: i, onSubmit: r, placeholder: s, "aria-label": o } = t;
  let a;
  e[0] !== i ? (a = (p) => {
    i(p.target.value);
  }, e[0] = i, e[1] = a) : a = e[1];
  const l = a;
  let c;
  e[2] !== r || e[3] !== n ? (c = (p) => {
    p.nativeEvent.isComposing || p.nativeEvent.keyCode === 229 || p.key !== "Enter" || r === void 0 || (p.preventDefault(), r(n));
  }, e[2] = r, e[3] = n, e[4] = c) : c = e[4];
  const u = c;
  let d;
  e[5] === /* @__PURE__ */ Symbol.for("react.memo_cache_sentinel") ? (d = Axa(_d.Icon, { name: "search" }), e[5] = d) : d = e[5];
  let h;
  return e[6] !== o || e[7] !== l || e[8] !== u || e[9] !== s || e[10] !== n ? (h = Axa("div", { "data-component": "tab-empty-state-search", className: "ui-kh2ocl ui-14atkfc ui-euugli ui-4so5ww ui-1uokl23", children: wd1(_d.Root, { rootStyle: Bbp.searchInput, shape: "pill", size: "lg", variant: "default", children: [d, Axa(_d.Input, { "aria-label": o, onChange: l, onKeyDown: u, placeholder: s, value: n })] }) }), e[6] = o, e[7] = l, e[8] = u, e[9] = s, e[10] = n, e[11] = h) : h = e[11], h;
}
var Bbp, 
// @recovered-by cursor-re
// artifact: app/out/vs/workbench/workbench.glass.main.js sha256:6eb88cb60fce5bf5df2ee401f797d5e160b0bcb5d85c25e57d2576b467edce81
// module: DialogListContext.js range:11523930..11525247
// basis: inferred
// confidence: C
// method: split
// run: main 2026-11-05T10:03:45.619Z
q3h = L({ "DialogListContext.js"() {
  "use strict";
  E(), Bda = dpS({ selectable: false });
} });
import { jsx as Uda } from "./react-runtime/react/esm-jsx-runtime-production.js";
import { c as gpS } from "./react-runtime/react/esm-compiler-runtime-production.js";
function z3h(t) {
  const e = gpS(15), { children: n, rootStyle: i, selectable: r, "aria-label": s, "aria-labelledby": o } = t, a = r === void 0 ? false : r;
  let l;
  e[0] === /* @__PURE__ */ Symbol.for("react.memo_cache_sentinel") ? (l = gn(LhS()), e[0] = l) : l = e[0];
  const c = l, u = a ? "listbox" : void 0;
  let d;
  e[1] === /* @__PURE__ */ Symbol.for("react.memo_cache_sentinel") ? (d = NhS(), e[1] = d) : d = e[1];
  let h;
  e[2] !== i ? (h = [d, i], e[2] = i, e[3] = h) : h = e[3];
  let p;
  e[4] !== n ? (p = Uda("ul", { className: c.className, style: c.style, children: n }), e[4] = n, e[5] = p) : p = e[5];
  let g;
  e[6] !== s || e[7] !== o || e[8] !== u || e[9] !== h || e[10] !== p ? (g = Uda(xg, { "aria-label": s, "aria-labelledby": o, className: "ui-dialog-list", role: u, rootStyle: h, children: p }), e[6] = s, e[7] = o, e[8] = u, e[9] = h, e[10] = p, e[11] = g) : g = e[11];
  let f;
  return e[12] !== a || e[13] !== g ? (f = Uda(ppS, { selectable: a, children: g }), e[12] = a, e[13] = g, e[14] = f) : f = e[14], f;
}

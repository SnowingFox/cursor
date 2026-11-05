// @recovered-by cursor-re
// artifact: app/out/vs/workbench/workbench.glass.main.js sha256:6eb88cb60fce5bf5df2ee401f797d5e160b0bcb5d85c25e57d2576b467edce81
// module: SidebarSection.js range:14858673..14860151
// basis: inferred
// confidence: C
// method: split
// run: main 2026-11-05T10:03:46.010Z
r8h = L({ "SidebarSection.js"() {
  "use strict";
  E(), U5(), Va(), dy(), eKo(), mf(), zBh(), j5r(), sfa(), qu(), Wj(), fd(), m2(), i8h = { "ui--default-marker": "ui--default-marker", $$css: true }, bfa = mCS(null);
} });
import { jsx as s8h } from "./react-runtime/react/esm-jsx-runtime-production.js";
import { c as kCS } from "./react-runtime/react/esm-compiler-runtime-production.js";
function wCS(t) {
  const e = /* @__PURE__ */ new Set();
  for (const { target: i } of t) {
    const r = i.closest("[data-overflow-fade]");
    r && e.add(r);
  }
  const n = [...e].map((i) => [i, i.scrollWidth > i.clientWidth]);
  for (const [i, r] of n) i.toggleAttribute("data-overflowing", r);
}
function CCS(t) {
  const e = t?.firstElementChild, n = t?.ownerDocument.defaultView?.ResizeObserver;
  if (!t || !e || !n) return;
  let i = yfa.get(n);
  return i || (i = new n(wCS), yfa.set(n, i)), i.observe(t), i.observe(e), () => {
    i.unobserve(t), i.unobserve(e);
  };
}
function Mpi(t) {
  const e = kCS(8), { as: n, children: i, rootStyle: r } = t, s = n === void 0 ? "span" : n;
  let o;
  e[0] !== r ? (o = gn(o8h.root, r), e[0] = r, e[1] = o) : o = e[1];
  let a;
  e[2] !== i ? (a = s8h("span", { className: "ui-1rg5ohu", children: i }), e[2] = i, e[3] = a) : a = e[3];
  let l;
  return e[4] !== s || e[5] !== o || e[6] !== a ? (l = s8h(s, { ref: CCS, "data-overflow-fade": "", ...o, children: a }), e[4] = s, e[5] = o, e[6] = a, e[7] = l) : l = e[7], l;
}
var o8h, yfa, 
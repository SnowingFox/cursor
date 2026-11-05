// @recovered-by cursor-re
// artifact: app/out/vs/workbench/workbench.glass.main.js sha256:6eb88cb60fce5bf5df2ee401f797d5e160b0bcb5d85c25e57d2576b467edce81
// module: Select.js range:6395073..6396899
// basis: inferred
// confidence: C
// method: split
// run: main 2026-11-05T10:03:45.972Z
Obn = L({ "Select.js"() {
  "use strict";
  E(), Va(), oWe(), E_e(), $ea(), P7(), mf(), yhe(), She(), kci(), qch(), Zch(), xjy(), Ejy(), pB(), Ooe(), Njy(), r$y(), m2(), n$y(), Xjy(), Mjy(), c$y(), l$y(), fd(), o$y(), D7t(), bjy(), Bna = { backdrop: { kVAEAm: "ui-ixxii4", kpwlN0: "ui-10a8y8t", kWkggS: "ui-jbqb8w", $$css: true }, backdropZIndex: (t) => [{ kY2c9j: t != null ? "ui-r3buco" : t, $$css: true }, { "--x-zIndex": t ?? void 0 }] }, Una = JGy(null);
} });
import { jsx as jna } from "./react-runtime/react/esm-jsx-runtime-production.js";
import { c as oqy } from "./react-runtime/react/esm-compiler-runtime-production.js";
function $na(t) {
  const e = oqy(17), { mode: n, onModeChange: i, modes: r } = t, s = r === void 0 ? eMr : r;
  let o;
  if (e[0] !== n || e[1] !== s) {
    let p;
    e[3] !== n ? (p = (g) => g.id === n, e[3] = n, e[4] = p) : p = e[4], o = s.find(p), e[0] = n, e[1] = s, e[2] = o;
  } else o = e[2];
  const a = o;
  let l;
  e[5] !== i ? (l = (p) => {
    p !== null && i(p);
  }, e[5] = i, e[6] = l) : l = e[6];
  const c = `${a?.label ?? "Project"} view`;
  let u;
  e[7] !== a ? (u = a === void 0 ? void 0 : jna(zt, { name: a.iconName, size: "base", "aria-hidden": true }), e[7] = a, e[8] = u) : u = e[8];
  let d;
  e[9] !== s ? (d = s.map(aqy), e[9] = s, e[10] = d) : d = e[10];
  let h;
  return e[11] !== n || e[12] !== l || e[13] !== c || e[14] !== u || e[15] !== d ? (h = jna(b1, { value: n, onValueChange: l, variant: "ghost", size: "md", menuSize: "md", contentWidth: 176, placement: "bottom-start", "aria-label": c, leading: u, options: d }), e[11] = n, e[12] = l, e[13] = c, e[14] = u, e[15] = d, e[16] = h) : h = e[16], h;
}
function aqy(t) {
  return { value: t.id, label: t.label, leading: jna(zt, { name: t.iconName, size: "base", "aria-hidden": true }) };
}
var eMr, Hna, 
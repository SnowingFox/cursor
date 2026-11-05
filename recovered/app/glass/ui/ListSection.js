// @recovered-by cursor-re
// artifact: app/out/vs/workbench/workbench.glass.main.js sha256:6eb88cb60fce5bf5df2ee401f797d5e160b0bcb5d85c25e57d2576b467edce81
// module: ListSection.js range:16470710..16473755
// basis: inferred
// confidence: C
// method: split
// run: main 2026-11-05T10:03:45.779Z
ZzS = L({ "ListSection.js"() {
  "use strict";
  E(), dy(), Wne = Object.assign(XzS, { Row: YzS });
} });
import { jsx as fGe, jsxs as T0a } from "./react-runtime/react/esm-jsx-runtime-production.js";
import { c as Aop } from "./react-runtime/react/esm-compiler-runtime-production.js";
function E0a(t) {
  const e = Aop(17), { label: n, ariaLabel: i, options: r, selectedValue: s, setSelectedValue: o } = t;
  let a;
  e[0] !== n ? (a = fGe(hn.SubMenuTrigger, { children: n }), e[0] = n, e[1] = a) : a = e[1];
  let l;
  e[2] !== o ? (l = (p) => {
    o(p);
  }, e[2] = o, e[3] = l) : l = e[3];
  let c;
  e[4] !== r ? (c = r.map(QzS), e[4] = r, e[5] = c) : c = e[5];
  let u;
  e[6] !== i || e[7] !== s || e[8] !== l || e[9] !== c ? (u = fGe(hn.RadioGroup, { "aria-label": i, onValueChange: l, value: s, children: c }), e[6] = i, e[7] = s, e[8] = l, e[9] = c, e[10] = u) : u = e[10];
  let d;
  e[11] !== i || e[12] !== u ? (d = fGe(hn.SubMenuContent, { "aria-label": i, children: u }), e[11] = i, e[12] = u, e[13] = d) : d = e[13];
  let h;
  return e[14] !== a || e[15] !== d ? (h = T0a(hn.SubMenu, { children: [a, d] }), e[14] = a, e[15] = d, e[16] = h) : h = e[16], h;
}
function QzS(t) {
  return fGe(hn.RadioItem, { closeOnSelect: true, disabled: t.disabled, label: t.label, leading: t.icon !== void 0 ? fGe(zt, { name: t.icon }) : void 0, value: t.value, children: t.label }, t.value);
}
function I0a(t) {
  const e = Aop(22), { groupBy: n, sortBy: i, filterBy: r, trigger: s } = t, o = n.options.length > 0;
  let a;
  e[0] !== s ? (a = s ?? fGe(An, { variant: "outline", size: "sm", children: "Manage View" }), e[0] = s, e[1] = a) : a = e[1];
  let l;
  e[2] !== a ? (l = fGe(hn.Trigger, { children: a }), e[2] = a, e[3] = l) : l = e[3];
  let c;
  e[4] !== n.options || e[5] !== n.selectedValue || e[6] !== n.setSelectedValue || e[7] !== o ? (c = o ? fGe(E0a, { label: "Group By", ariaLabel: "Group by options", options: n.options, selectedValue: n.selectedValue, setSelectedValue: n.setSelectedValue }) : void 0, e[4] = n.options, e[5] = n.selectedValue, e[6] = n.setSelectedValue, e[7] = o, e[8] = c) : c = e[8];
  let u;
  e[9] !== r ? (u = r !== void 0 ? fGe(E0a, { label: "Filter By", ariaLabel: "Filter by options", options: r.options, selectedValue: r.selectedValue, setSelectedValue: r.setSelectedValue }) : void 0, e[9] = r, e[10] = u) : u = e[10];
  let d;
  e[11] !== i.options || e[12] !== i.selectedValue || e[13] !== i.setSelectedValue ? (d = fGe(E0a, { label: "Sort By", ariaLabel: "Sort by options", options: i.options, selectedValue: i.selectedValue, setSelectedValue: i.setSelectedValue }), e[11] = i.options, e[12] = i.selectedValue, e[13] = i.setSelectedValue, e[14] = d) : d = e[14];
  let h;
  e[15] !== c || e[16] !== u || e[17] !== d ? (h = T0a(hn.Content, { "aria-label": "Tools view options", children: [c, u, d] }), e[15] = c, e[16] = u, e[17] = d, e[18] = h) : h = e[18];
  let p;
  return e[19] !== l || e[20] !== h ? (p = T0a(hn, { children: [l, h] }), e[19] = l, e[20] = h, e[21] = p) : p = e[21], p;
}

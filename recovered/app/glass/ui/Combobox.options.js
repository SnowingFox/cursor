// @recovered-by cursor-re
// artifact: app/out/vs/workbench/workbench.glass.main.js sha256:6eb88cb60fce5bf5df2ee401f797d5e160b0bcb5d85c25e57d2576b467edce81
// module: Combobox.options.js range:17941199..17946234
// basis: inferred
// confidence: C
// method: split
// run: main 2026-11-05T10:03:45.539Z
U0p = L({ "Combobox.options.js"() {
  "use strict";
  E(), B0p = /* @__PURE__ */ Symbol("negative zero");
} });
import { jsx as Zhe, jsxs as t$r, Fragment as Jb1 } from "./react-runtime/react/esm-jsx-runtime-production.js";
import { c as n$r } from "./react-runtime/react/esm-compiler-runtime-production.js";
function a2a(t) {
  const e = n$r(29), { option: n } = t, i = n.description !== void 0;
  let r;
  e[0] === /* @__PURE__ */ Symbol.for("react.memo_cache_sentinel") ? (r = gn(Lea), e[0] = r) : r = e[0];
  const s = r;
  let o;
  e[1] === /* @__PURE__ */ Symbol.for("react.memo_cache_sentinel") ? (o = { style: s.style }, e[1] = o) : o = e[1];
  const a = pup(o);
  let l;
  e[2] !== i || e[3] !== n.leading ? (l = n.leading != null ? Zhe("span", { ...gn(b7t, Uea, i && y7t), children: n.leading }) : null, e[2] = i, e[3] = n.leading, e[4] = l) : l = e[4];
  let c;
  e[5] !== i ? (c = gn(Oea, i && Fea), e[5] = i, e[6] = c) : c = e[6];
  let u;
  e[7] !== n.label ? (u = Zhe("span", { className: "ui-1lliihq ui-193iq5w ui-b3r6kr ui-lyipyv ui-uxw1ft", children: n.label }), e[7] = n.label, e[8] = u) : u = e[8];
  let d;
  e[9] !== i || e[10] !== n.description ? (d = i ? Zhe("span", { ...gn(Bea, Gj.root), children: n.description }) : null, e[9] = i, e[10] = n.description, e[11] = d) : d = e[11];
  let h;
  e[12] !== c || e[13] !== u || e[14] !== d ? (h = t$r("span", { ...c, children: [u, d] }), e[12] = c, e[13] = u, e[14] = d, e[15] = h) : h = e[15];
  let p;
  e[16] !== i || e[17] !== n.trailing ? (p = n.trailing != null ? t$r("span", { "data-component": "combobox-item-end", ...gn(b7t, _ci, jea, i && y7t), children: [n.trailing, Zhe(Kkn, { "data-component": "combobox-item-indicator", children: Zhe(zt, { color: "primary", name: "check", "aria-hidden": true }) })] }) : Zhe(Kkn, { "data-component": "combobox-item-indicator", ...gn(b7t, _ci, i && y7t), children: Zhe(zt, { color: "primary", name: "check", "aria-hidden": true }) }), e[16] = i, e[17] = n.trailing, e[18] = p) : p = e[18];
  let g;
  e[19] !== l || e[20] !== h || e[21] !== p ? (g = t$r(Jb1, { children: [l, h, p] }), e[19] = l, e[20] = h, e[21] = p, e[22] = g) : g = e[22];
  const f = g, _ = i || void 0;
  let b;
  return e[23] !== n.disabled || e[24] !== n.value || e[25] !== f || e[26] !== _ || e[27] !== a ? (b = Zhe(o7r, { ...a, "data-component": "combobox-item", "data-has-description": _, disabled: n.disabled, value: n.value, className: s.className, children: f }), e[23] = n.disabled, e[24] = n.value, e[25] = f, e[26] = _, e[27] = a, e[28] = b) : b = e[28], b;
}
function ey1(t) {
  const e = n$r(5), { findOption: n } = t, i = O$t();
  let r;
  if (e[0] !== i || e[1] !== n) {
    let s;
    e[3] !== n ? (s = (o) => {
      const a = n(o);
      return a ? Zhe(a2a, { option: a }, o2a({ value: o, explicitKey: a.key })) : null;
    }, e[3] = n, e[4] = s) : s = e[4], r = i.map(s), e[0] = i, e[1] = n, e[2] = r;
  } else r = e[2];
  return r;
}
function ty1(t) {
  const e = n$r(14), { estimateSize: n, findOption: i, virtualizerRef: r } = t, s = O$t();
  let o;
  e[0] !== n || e[1] !== i ? (o = (f, _) => {
    const b = i(f);
    return typeof n == "number" ? n : b === void 0 ? Zkn : n?.(b, _) ?? Zkn;
  }, e[0] = n, e[1] = i, e[2] = o) : o = e[2];
  const a = o;
  let l;
  e[3] !== i ? (l = (f) => {
    const _ = i(f);
    return o2a({ value: f, explicitKey: _?.key });
  }, e[3] = i, e[4] = l) : l = e[4];
  const c = l;
  let u;
  e[5] !== i ? (u = (f) => {
    const _ = i(f);
    return _ ? Zhe(a2a, { option: _ }) : null;
  }, e[5] = i, e[6] = u) : u = e[6];
  const d = u;
  let h;
  e[7] === /* @__PURE__ */ Symbol.for("react.memo_cache_sentinel") ? (h = gn(G2r), e[7] = h) : h = e[7];
  const p = h;
  let g;
  return e[8] !== a || e[9] !== s || e[10] !== c || e[11] !== d || e[12] !== r ? (g = Zhe(gup, { contentClassName: p.className, contentStyle: p.style, estimateSize: a, getItemKey: c, items: s, virtualizerRef: r, children: d }), e[8] = a, e[9] = s, e[10] = c, e[11] = d, e[12] = r, e[13] = g) : g = e[13], g;
}
function ny1(t) {
  const e = n$r(5), { findOption: n } = t, i = O$t();
  let r;
  if (e[0] !== n || e[1] !== i) {
    let s;
    e[3] !== n ? (s = (o, a) => t$r(L$t, { items: o.items, ...o.ungrouped ? { role: "presentation" } : {}, className: "ui-78zum5 ui-dt5ytf ui-ihas45", children: [a > 0 ? Zhe("div", { "aria-hidden": "true", "data-component": "combobox-group-divider", className: "ui-9f619 ui-kh2ocl ui-2lah0s ui-jm9jq1 ui-4zw9a1 ui-1m4ooaa ui-972fbf ui-gfja2r ui-1qhh985 ui-yj58a3 ui-1ejq31n ui-11pwa6s ui-1sy0etr ui-1b16gh4 ui-1mdx765 ui-1oqmpjk ui-8kmwxx ui-1vez39j ui-exx8yu ui-1xpa7k ui-18d9i69 ui-1uhho1l ui-47corl" }) : null, o.ungrouped ? null : Zhe(Zfi, { ...gn(j0p.groupLabel, Gj.root), children: o.label }), Zhe(zkn, { children: (l) => {
      const c = n(l);
      return c ? Zhe(a2a, { option: c }, o2a({ value: l, explicitKey: c.key })) : null;
    } })] }, o.key), e[3] = n, e[4] = s) : s = e[4], r = i.map(s), e[0] = n, e[1] = i, e[2] = r;
  } else r = e[2];
  return r;
}
var j0p, 
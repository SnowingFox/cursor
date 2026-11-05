// @recovered-by cursor-re
// artifact: app/out/vs/workbench/workbench.glass.main.js sha256:6eb88cb60fce5bf5df2ee401f797d5e160b0bcb5d85c25e57d2576b467edce81
// module: RadioGroup.js range:14697473..14700566
// basis: inferred
// confidence: C
// method: split
// run: main 2026-11-05T10:03:45.943Z
d5r = L({ "RadioGroup.js"() {
  "use strict";
  E(), Va(), CkS(), _kS(), wkS(), vkS(), uga = { root: { k1xSpc: "ui-3nfvp2", kGNEyG: "ui-6s0dn4", kjj79g: "ui-l56j7k", kB7OPa: "ui-9f619", kMzoRj: "ui-mkeg23", ksu8eU: "ui-1y0btm7", kaIpWk: "ui-1i4c3av", k3aq6I: "ui-3oybdh ui-11zig7n", k3nNDw: "ui-1g0ag68", kMwMTN: "ui-fwc2to ui-14tn52h", kWkggS: "ui-i07v4r ui-x6ypal ui-1mizfm3", kVAM5u: "ui-1tjqsyf ui-z2j15m ui-vs86tt", kMeerF: "ui-1k57tk5 ui-1n5d35r", k3XXqK: "ui-1t137rt ui-efm31z", kjBf7l: "ui-1uczgqu ui-pnmdb5", kInvED: "ui-1wfwxd8 ui-2q59yr", k1ekBW: "ui-1lxufdw", kIyJzY: "ui-2krxs4 ui-sagj69", kAMwcw: "ui-6ekqhr", $$css: true }, sm: { kzqmXN: "ui-2s4hoy", kZKoxP: "ui-px1j5t", $$css: true }, md: { kzqmXN: "ui-ek66a6", kZKoxP: "ui-1q5geii", $$css: true }, lg: { kzqmXN: "ui-1xx3ewh", kZKoxP: "ui-14dyci", $$css: true } }, a9h = { primary: { "--ui-radio-bg": "ui-v2vq6c", "--ui-radio-border": "ui-e8dqoc", "--ui-radio-glyph": "ui-1oxf3b0", $$css: true }, green: { "--ui-radio-bg": "ui-11d4trf", "--ui-radio-border": "ui-m2uqpi", "--ui-radio-glyph": "ui-1oxf3b0", $$css: true }, neutral: { "--ui-radio-bg": "ui-c0r646", "--ui-radio-border": "ui-pbpdc", "--ui-radio-glyph": "ui-1p2oalb", $$css: true } }, dga = { root: { k1xSpc: "ui-3nfvp2", kaIpWk: "ui-1i4c3av", kWkggS: "ui-twfq29", kSiTet: "ui-g01cxk ui-1bzr6jr", ku685b: "ui-nyzrob ui-ddwmk9", k3aq6I: "ui-1nrvvgt ui-1lga8l", k3nNDw: "ui-1g0ag68", k1ekBW: "ui-n9if97", kIyJzY: "ui-7pq1vu ui-sagj69", kAMwcw: "ui-6ekqhr", $$css: true }, sm: { kzqmXN: "ui-nythym", kZKoxP: "ui-1gc0yls", $$css: true }, md: { kzqmXN: "ui-19j8p08", kZKoxP: "ui-1feg4er", $$css: true }, lg: { kzqmXN: "ui-17vdgzb", kZKoxP: "ui-1e4kded", $$css: true } };
} });
import { jsx as ZUt } from "./react-runtime/react/esm-jsx-runtime-production.js";
import { c as xkS } from "./react-runtime/react/esm-compiler-runtime-production.js";
function l9h(t) {
  const e = xkS(6), { checked: n, disabled: i } = t, r = n || void 0, s = i || void 0;
  let o;
  e[0] !== n ? (o = n ? ZUt(zt, { color: "primary", name: "check" }) : null, e[0] = n, e[1] = o) : o = e[1];
  let a;
  return e[2] !== r || e[3] !== s || e[4] !== o ? (a = ZUt("span", { "aria-hidden": "true", "data-checked": r, "data-component": "menu-check-indicator", "data-disabled": s, className: "ui-3nfvp2 ui-6s0dn4 ui-l56j7k ui-1hc1fzr ui-1szrgyu", children: o }), e[2] = r, e[3] = s, e[4] = o, e[5] = a) : a = e[5], a;
}
function AkS(t, e, n) {
  switch (t) {
    case "checkbox":
      return ZUt(r2e, { checked: e, disabled: n });
    case "check":
      return ZUt(l9h, { checked: e, disabled: n });
    case "switch":
      return ZUt(vSn, { checked: e, disabled: n, size: "sm" });
    default:
      return t;
  }
}
function RkS(t, e, n) {
  switch (t) {
    case "radio":
      return ZUt(fpi, { checked: e, disabled: n });
    case "check":
      return ZUt(l9h, { checked: e, disabled: n });
    default:
      return t;
  }
}
function c9h({ indicatorPosition: t, indicator: e, leading: n, trailing: i }) {
  return t === "trailing" ? { leading: n, trailing: e } : { leading: e, trailing: i };
}

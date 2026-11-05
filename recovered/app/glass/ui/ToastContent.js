// @recovered-by cursor-re
// artifact: app/out/vs/workbench/workbench.glass.main.js sha256:6eb88cb60fce5bf5df2ee401f797d5e160b0bcb5d85c25e57d2576b467edce81
// module: ToastContent.js range:18398116..18400542
// basis: inferred
// confidence: C
// method: split
// run: main 2026-11-05T10:03:46.073Z
TT1 = L({ "ToastContent.js"() {
  "use strict";
  E(), Va(), P7(), P0(), fd(), Q3(), dy(), qu(), T0n = { base: { k1xSpc: "ui-78zum5", kGNEyG: "ui-6s0dn4", kjj79g: "ui-l56j7k", kmuXW: "ui-2lah0s", kzqmXN: "ui-16bvwqk", kZKoxP: "ui-1a6rlst", kLWn49: "ui-o5v014", k3aq6I: "ui-avs3du", kMwMTN: "ui-1mh7f6w", $$css: true }, success: { kMwMTN: "ui-1w5rjie", $$css: true }, error: { kMwMTN: "ui-1jh5svw", $$css: true }, warning: { kMwMTN: "ui-1izesbo", $$css: true }, info: { kMwMTN: "ui-1d0l12", $$css: true } }, iRp = { base: { kmuXW: "ui-2lah0s", $$css: true } }, fHr = { title: { kMwMTN: "ui-1wd3ewq", kogj98: "ui-1ghz6dp", $$css: true }, source: { kMwMTN: "ui-4b2ntj", kogj98: "ui-1ghz6dp", $$css: true }, description: { kMwMTN: "ui-19aaqeu", kogj98: "ui-1ghz6dp", $$css: true } };
} });
import { jsx as rRp } from "./react-runtime/react/esm-jsx-runtime-production.js";
import { c as ET1 } from "./react-runtime/react/esm-compiler-runtime-production.js";
function sRp(t) {
  const e = ET1(9), { position: n, visibleToasts: i, expand: r, gap: s, offset: o, theme: a, duration: l } = t, c = n === void 0 ? "bottom-right" : n, u = i === void 0 ? 4 : i, d = r === void 0 ? true : r, h = s === void 0 ? 12 : s, p = o === void 0 ? 16 : o, g = a === void 0 ? "dark" : a, f = l === void 0 ? 5e3 : l;
  let _;
  e[0] === /* @__PURE__ */ Symbol.for("react.memo_cache_sentinel") ? (_ = { className: "ui-1acoasx ui-1699vnq ui-hz121h ui-1ett6ip" }, e[0] = _) : _ = e[0];
  const b = _;
  let y;
  return e[1] !== f || e[2] !== d || e[3] !== h || e[4] !== p || e[5] !== c || e[6] !== g || e[7] !== u ? (y = rRp(nRp, { position: c, visibleToasts: u, expand: d, gap: h, offset: p, className: b.className, style: b.style, theme: g, duration: f }), e[1] = f, e[2] = d, e[3] = h, e[4] = p, e[5] = c, e[6] = g, e[7] = u, e[8] = y) : y = e[8], y;
}
function IT1(t) {
  return typeof t == "string" ? { title: t } : t;
}
function xT1(t) {
  return typeof t == "string" ? { title: t } : t;
}
function oRp(t, e) {
  const { duration: n, id: i, onDismiss: r } = t, s = ar({ rootClass: "ui-toast-wrapper", stylexStyles: aRp.base });
  return _bi.custom((o) => rRp(CT1, { ...t, variant: e ?? t.variant, toastId: o, onDismiss: () => {
    r?.(), _bi.dismiss(o);
  } }), { ...i !== void 0 ? { id: i } : {}, duration: n, unstyled: true, className: s.className, style: s.style });
}
function vHr(t, e) {
  const n = xT1(e);
  return oRp(n, t);
}
var aRp, Hwt, 
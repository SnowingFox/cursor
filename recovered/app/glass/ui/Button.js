// @recovered-by cursor-re
// artifact: app/out/vs/workbench/workbench.glass.main.js sha256:6eb88cb60fce5bf5df2ee401f797d5e160b0bcb5d85c25e57d2576b467edce81
// module: Button.js range:5329472..5330386
// basis: inferred
// confidence: C
// method: split
// run: main 2026-11-05T10:03:45.506Z
dKo = L({ "Button.js"() {
  E(), Cz(), Om(), gai = BFy.forwardRef(function(e, n) {
    const { render: i, className: r, disabled: s = false, focusableWhenDisabled: o = false, nativeButton: a = true, style: l, ...c } = e, { getButtonProps: u, buttonRef: d } = wz({ disabled: s, focusableWhenDisabled: o, native: a });
    return Lm("button", e, { state: { disabled: s }, ref: [n, d], props: [c, u] });
  }), process.env.NODE_ENV !== "production" && (gai.displayName = "Button");
} });
function bZd(t) {
  return t !== void 0 && Object.hasOwn(mKo, t);
}
function yZd(t) {
  return UFy(t) && t !== "tertiary";
}
function UFy(t) {
  return t !== void 0 && (CZd.has(t) || bZd(t));
}
function hKo(t) {
  return t !== void 0 && TZd.has(t);
}
function jFy(t) {
  return t !== void 0 && EZd.has(t);
}
function fai(t) {
  if (t !== void 0) return bZd(t) ? mKo[t] : t;
}
var pKo, SZd, mKo, kZd, $Fy, wZd, CZd, TZd, EZd, vai, 
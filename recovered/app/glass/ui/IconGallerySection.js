// @recovered-by cursor-re
// artifact: app/out/vs/workbench/workbench.glass.main.js sha256:6eb88cb60fce5bf5df2ee401f797d5e160b0bcb5d85c25e57d2576b467edce81
// module: IconGallerySection.js range:39169864..39170669
// basis: inferred
// confidence: C
// method: split
// run: main 2026-11-05T10:03:45.727Z
ylC = L({ "IconGallerySection.js"() {
  "use strict";
  E(), at(), at(), at(), at(), at(), at(), Am(), pi(), gs(), ta(), vo(), O6(), eD(), mk(), BKv = wt("<div>"), UKv = wt('<div><input type=text placeholder="Search Codicons"><div>'), jKv = wt("<div><i></i><span>"), iBi = cs("");
} });
function y8e(t) {
  const { showHover: e, hideHover: n } = L6(0);
  let i;
  const r = () => {
    i && e({ content: t.text, target: i, appearance: { compact: true }, persistence: { hideOnHover: true } });
  };
  return Ee(Ut, { get when() {
    return t.hidden !== true;
  }, get children() {
    var s = $Kv(), o = i;
    return typeof o == "function" ? zu(o, s) : i = s, BM(s, "mouseleave", n), s.addEventListener("mouseenter", r), Le(s, () => t.children), xn((a) => Ea(s, t.parentStyle, a)), s;
  } });
}
var $Kv, 
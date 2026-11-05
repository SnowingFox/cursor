// @recovered-by cursor-re
// artifact: app/out/vs/workbench/workbench.glass.main.js sha256:6eb88cb60fce5bf5df2ee401f797d5e160b0bcb5d85c25e57d2576b467edce81
// module: ModelButtons.js range:16673314..16673802
// basis: esbuild-wrapper + inferred
// confidence: C
// method: split
// run: glass-platform 2026-11-05T10:20:42.123Z
// wrapper: qlp deps:8 [E, JY, Drt, Tkn, $he, aJ, awt, fd]
// declarations: FXS, qlp, zlp (segment truncated)
// anchors: (none)
// group: model
// notes: path inferred (no nls/webpack-key evidence); wrapper boundary is esbuild-exact; confidence reflects the inferred path only
var qlp = L({ "ModelButtons.js"() {
  "use strict";
  E(), JY(), Drt(), Tkn(), $he(), aJ(), awt(), fd();
} });
function FXS(t) {
  const e = t.closest(zlp);
  if (e === null) {
    typeof t.scrollIntoView == "function" && t.scrollIntoView({ block: "nearest", inline: "nearest" });
    return;
  }
  const n = t.getBoundingClientRect(), i = e.getBoundingClientRect();
  n.bottom > i.bottom ? e.scrollTop += n.bottom - i.bottom : n.top < i.top && (e.scrollTop -= i.top - n.top);
}
var zlp,

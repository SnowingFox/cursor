// @recovered-by cursor-re
// artifact: app/out/vs/workbench/workbench.glass.main.js sha256:6eb88cb60fce5bf5df2ee401f797d5e160b0bcb5d85c25e57d2576b467edce81
// module: ModelParameterControls.js range:16641888..16642158
// basis: esbuild-wrapper + inferred
// confidence: C
// method: split+rename
// run: glass-platform 2026-11-05T10:20:42.132Z
// wrapper: ModelParameterControlsModule deps:11 [E, JY, R0a, Dfi, Nlp, ACa, $he, aXS, fd, aJ, BW]
// declarations: ModelParameterControlsModule, dXS
// anchors: (none)
// group: model
// notes: path inferred (no nls/webpack-key evidence); wrapper boundary is esbuild-exact; confidence reflects the inferred path only
var ModelParameterControlsModule = L({
  "ModelParameterControls.js"() {
    "use strict";

    E(), JY(), R0a(), Dfi(), Nlp(), ACa(), $he(), aXS(), fd(), aJ(), BW();
  }
});
function dXS(t, e) {
  return t.length !== e.length ? false : t.every(n => e.find(r => r.id === n.id)?.value === n.value);
}

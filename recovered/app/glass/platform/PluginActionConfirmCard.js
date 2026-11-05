// @recovered-by cursor-re
// artifact: app/out/vs/workbench/workbench.glass.main.js sha256:6eb88cb60fce5bf5df2ee401f797d5e160b0bcb5d85c25e57d2576b467edce81
// module: PluginActionConfirmCard.js range:17146463..17147016
// basis: esbuild-wrapper + inferred
// confidence: C
// method: split+rename
// run: glass-platform 2026-11-05T10:20:42.144Z
// wrapper: PluginActionConfirmCardModule deps:2 [E, Wi1]
// declarations: PluginActionConfirmCardModule, Q7r, J7r, Gmp
// anchors: (none)
// group: marketplace-plugins
// notes: path inferred (no nls/webpack-key evidence); wrapper boundary is esbuild-exact; confidence reflects the inferred path only
var PluginActionConfirmCardModule = L({
  "PluginActionConfirmCard.js"() {
    "use strict";

    E(), Wi1();
  }
});
function Q7r(t, e, n) {
  return n && t.ctrlKey === true && t.altKey !== true && t.metaKey !== true && t.shiftKey !== true && t.key.toLowerCase() === e;
}
function J7r(t, e = YQ()) {
  return t.key === "ArrowDown" ? "down" : t.key === "ArrowUp" ? "up" : Q7r(t, "n", e) || Q7r(t, "j", e) ? "down" : Q7r(t, "p", e) || Q7r(t, "k", e) ? "up" : null;
}
function Gmp(t, e, n) {
  return n <= 0 ? 0 : (((t ?? (e === "down" ? -1 : 0)) + (e === "down" ? 1 : -1)) % n + n) % n;
}

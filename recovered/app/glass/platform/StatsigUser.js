// @recovered-by cursor-re
// artifact: app/out/vs/workbench/workbench.glass.main.js sha256:6eb88cb60fce5bf5df2ee401f797d5e160b0bcb5d85c25e57d2576b467edce81
// module: StatsigUser.js range:643439..643700
// basis: esbuild-wrapper + inferred
// confidence: C
// method: split+rename
// run: glass-platform 2026-11-05T10:20:42.180Z
// wrapper: StatsigUserModule deps:3 [E, Ydn, Nde]
// declarations: StatsigUserModule, x6t
// anchors: (none)
// group: third-party-statsig
// notes: path inferred (no nls/webpack-key evidence); wrapper boundary is esbuild-exact; confidence reflects the inferred path only
var StatsigUserModule = L({
  "StatsigUser.js"() {
    "use strict";

    E(), Ydn(), Nde();
  }
});
function x6t(t, e, n) {
  try {
    const i = JSON.parse(t);
    if (i && typeof i == "object" && e in i) return i;
  } catch {}
  return QR.error(`Failed to parse ${n}`), null;
}

// @recovered-by cursor-re
// artifact: app/out/vs/workbench/workbench.glass.main.js sha256:6eb88cb60fce5bf5df2ee401f797d5e160b0bcb5d85c25e57d2576b467edce81
// module: StatsigOptionsCommon.js range:630667..631415
// basis: esbuild-wrapper + inferred
// confidence: C
// method: split
// run: glass-platform 2026-11-05T10:20:42.177Z
// wrapper: AZn deps:1 [E]
// declarations: QQu, RZn, pgr, Xdn (segment truncated)
// anchors: (none)
// group: third-party-statsig
// notes: path inferred (no nls/webpack-key evidence); wrapper boundary is esbuild-exact; confidence reflects the inferred path only
AZn = L({ "StatsigOptionsCommon.js"() {
  "use strict";
  E(), o_t = { Disabled: "d", Enabled: "e", Forced: "f" }, eEo = { disabled: "disabled", browserOnly: "browser-only", always: "always" };
} });
function QQu(t) {
  try {
    return t();
  } catch (e) {
    if (e instanceof Error && e.name === "SecurityError") return u7._setProvider(mgr), null;
    if (e instanceof Error && e.name === "QuotaExceededError") {
      const i = u7.getAllKeys().filter((r) => r.startsWith("statsig."));
      e.message = `${e.message}. Statsig Keys: ${i.length}`;
    }
    throw e;
  }
}
function RZn(t) {
  const e = u7.getItem(t);
  return JSON.parse(e ?? "null");
}
function pgr(t, e) {
  u7.setItem(t, JSON.stringify(e));
}
var Xdn, mgr, tEo, ggr, $Oe, u7,

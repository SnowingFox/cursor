// @recovered-by cursor-re
// artifact: app/out/vs/workbench/workbench.glass.main.js sha256:6eb88cb60fce5bf5df2ee401f797d5e160b0bcb5d85c25e57d2576b467edce81
// module: StatsigClientEventEmitter.js range:658521..659904
// basis: esbuild-wrapper + inferred
// confidence: C
// method: split
// run: glass-platform 2026-11-05T10:20:42.171Z
// wrapper: BJu deps:1 [E]
// declarations: Kyy, Yyy, Xyy, Zyy, UJu, Qyy, jJu (segment truncated)
// anchors: (none)
// group: third-party-statsig
// notes: path inferred (no nls/webpack-key evidence); wrapper boundary is esbuild-exact; confidence reflects the inferred path only
BJu = L({ "StatsigClientEventEmitter.js"() {
  "use strict";
  E(), FJu = { NetworkError: "NetworkError" };
} });
function Kyy(t, e) {
  if (!t.isCompressable || $To("no-compress") != null || typeof CompressionStream > "u" || typeof TextEncoder > "u") return false;
  const n = t.urlConfig.customUrl != null || t.urlConfig.fallbackUrls != null, i = bEo.get(t.sdkKey, "enable_log_event_compression") === true;
  switch (e.logEventCompressionMode) {
    case o_t.Disabled:
      return false;
    case o_t.Enabled:
      return !(n && !i);
    case o_t.Forced:
      return true;
    default:
      return false;
  }
}
function Yyy(t, e) {
  return t?.signal.aborted && typeof t.signal.reason == "string" ? t.signal.reason : typeof e == "string" ? e : e instanceof Error ? `${e.name}: ${e.message}` : "Unknown Error";
}
function Xyy(t) {
  return t?.signal.aborted && typeof t.signal.reason == "string" && t.signal.reason.includes("Timeout") || false;
}
function Zyy(t, e) {
  t.urlConfig.endpoint === Dke._initialize && aAe._markInitNetworkReqStart(t.sdkKey, { attempt: e });
}
function UJu(t, e, n, i, r) {
  t.urlConfig.endpoint === Dke._initialize && aAe._markInitNetworkReqEnd(t.sdkKey, aAe._getDiagnosticsData(e, n, i, r));
}
async function Qyy(t) {
  await new Promise((e) => setTimeout(e, Math.min($Ju * (t * t), HJu)));
}
var jJu, $Ju, HJu, WJu, CEo, GJu, qJu, zJu, TEo, VJu,

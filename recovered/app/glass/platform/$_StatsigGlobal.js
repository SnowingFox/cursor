// @recovered-by cursor-re
// artifact: app/out/vs/workbench/workbench.glass.main.js sha256:6eb88cb60fce5bf5df2ee401f797d5e160b0bcb5d85c25e57d2576b467edce81
// module: $_StatsigGlobal.js range:623404..624585
// basis: esbuild-wrapper + inferred
// confidence: C
// method: split
// run: glass-platform 2026-11-05T10:20:42.048Z
// wrapper: r_t deps:3 [E, Nde, i_t]
// declarations: Vdn, Syy, Kdn, qTo, IZn (segment truncated)
// anchors: (none)
// group: third-party-statsig
// notes: path inferred (no nls/webpack-key evidence); wrapper boundary is esbuild-exact; confidence reflects the inferred path only
r_t = L({ "$_StatsigGlobal.js"() {
  "use strict";
  E(), Nde(), i_t = () => {
    try {
      return typeof __STATSIG__ < "u" ? __STATSIG__ : zdn;
    } catch {
      return zdn;
    }
  }, $To = (t) => i_t()[t], BQu = (t) => {
    const e = i_t();
    return t ? e.instances && e.instances[t] : (e.instances && Object.keys(e.instances).length > 1 && QR.warn("Call made to Statsig global instance without an SDK key but there is more than one client instance. If you are using mulitple clients, please specify the SDK key."), e.firstInstance);
  }, T6t = "__STATSIG__", HTo = typeof window < "u" ? window : {}, WTo = typeof global < "u" ? global : {}, GTo = typeof globalThis < "u" ? globalThis : {}, zdn = HTo[T6t] ?? WTo[T6t] ?? GTo[T6t] ?? { instance: BQu }, HTo[T6t] = zdn, WTo[T6t] = zdn, GTo[T6t] = zdn;
} });
function Vdn(t, e, n, i) {
  return { key: n, action: e, step: i, timestamp: Date.now(), ...t };
}
function Syy(t, e) {
  return { eventName: UQu, user: t, value: null, metadata: e, time: Date.now() };
}
function Kdn(t, e) {
  const n = IZn.get(t) ?? [];
  n.push(e), IZn.set(t, n);
}
function qTo(t, e) {
  if (e in t) return t[e];
}
var IZn, rgr, sgr, UQu, aAe,

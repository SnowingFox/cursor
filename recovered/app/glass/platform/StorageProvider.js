// @recovered-by cursor-re
// artifact: app/out/vs/workbench/workbench.glass.main.js sha256:6eb88cb60fce5bf5df2ee401f797d5e160b0bcb5d85c25e57d2576b467edce81
// module: StorageProvider.js range:631415..632682
// basis: esbuild-wrapper + inferred
// confidence: C
// method: split
// run: glass-platform 2026-11-05T10:20:42.181Z
// wrapper: a_t deps:8 [E, Nde, I6t, E6t, isReady, isReadyResolver, getProviderName, getAllKeys]
// declarations: (none in segment) (segment truncated)
// anchors: (none)
// group: third-party-statsig
// notes: path inferred (no nls/webpack-key evidence); wrapper boundary is esbuild-exact; confidence reflects the inferred path only
a_t = L({ "StorageProvider.js"() {
  "use strict";
  E(), Nde(), I6t(), Xdn = {}, mgr = { isReady: () => true, isReadyResolver: () => null, getProviderName: () => "InMemory", getItem: (t) => Xdn[t] ? Xdn[t] : null, setItem: (t, e) => {
    Xdn[t] = e;
  }, removeItem: (t) => {
    delete Xdn[t];
  }, getAllKeys: () => Object.keys(Xdn) }, tEo = null;
  try {
    const t = E6t();
    t && t.localStorage && typeof t.localStorage.getItem == "function" && (tEo = { isReady: () => true, isReadyResolver: () => null, getProviderName: () => "LocalStorage", getItem: (e) => t.localStorage.getItem(e), setItem: (e, n) => t.localStorage.setItem(e, n), removeItem: (e) => t.localStorage.removeItem(e), getAllKeys: () => Object.keys(t.localStorage) });
  } catch {
    QR.warn("Failed to setup localStorageProvider.");
  }
  ggr = tEo ?? mgr, $Oe = ggr, u7 = { isReady: () => $Oe.isReady(), isReadyResolver: () => $Oe.isReadyResolver(), getProviderName: () => $Oe.getProviderName(), getItem: (t) => QQu(() => $Oe.getItem(t)), setItem: (t, e) => QQu(() => $Oe.setItem(t, e)), removeItem: (t) => $Oe.removeItem(t), getAllKeys: () => $Oe.getAllKeys(), _setProvider: (t) => {
    ggr = t, $Oe = t;
  }, _setDisabled: (t) => {
    t ? $Oe = mgr : $Oe = ggr;
  } };
} }), JQu, nEo,

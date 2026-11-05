// @recovered-by cursor-re
// artifact: app/out/vs/workbench/workbench.glass.main.js sha256:6eb88cb60fce5bf5df2ee401f797d5e160b0bcb5d85c25e57d2576b467edce81
// module: SafeJs.js range:627983..628943
// basis: inferred
// confidence: C
// method: split
// run: main 2026-11-05T10:03:45.961Z
I6t = L({ "SafeJs.js"() {
  "use strict";
  E(), E6t = () => typeof window < "u" ? window : null, cgr = () => E6t()?.document ?? null, xZn = () => {
    if (cgr() !== null) return false;
    const t = typeof process < "u" && process.versions != null && process.versions.node != null;
    return typeof EdgeRuntime == "string" || t;
  }, ugr = (t, e) => {
    const n = E6t();
    typeof n?.addEventListener == "function" && n.addEventListener(t, e);
  }, GQu = (t, e) => {
    const n = cgr();
    typeof n?.addEventListener == "function" && n.addEventListener(t, e);
  }, qQu = () => {
    try {
      return E6t()?.location.href.split(/[?#]/)[0];
    } catch {
      return;
    }
  }, zQu = () => {
    const t = E6t();
    return t && "onpagehide" in t ? "pagehide" : "beforeunload";
  };
} });
function dgr(t, e) {
  return t.map((n) => typeof n == "string" ? (e ?? {})[n] : n).filter((n) => n != null);
}
var XTo, ZTo, QTo, hgr, VQu, KQu, JTo, YQu, XQu, 
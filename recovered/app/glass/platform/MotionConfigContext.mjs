// @recovered-by cursor-re
// artifact: app/out/vs/workbench/workbench.glass.main.js sha256:6eb88cb60fce5bf5df2ee401f797d5e160b0bcb5d85c25e57d2576b467edce81
// module: MotionConfigContext.mjs range:35398735..35399474
// basis: esbuild-wrapper + inferred
// confidence: C
// method: split
// run: glass-platform 2026-11-05T10:20:42.141Z
// wrapper: vFi deps:1 [E]
// declarations: _1v, Nv0, Lv0
// anchors: esm-index-production
// group: third-party-build-mjs
// notes: path inferred (no nls/webpack-key evidence); wrapper boundary is esbuild-exact; confidence reflects the inferred path only
vFi = L({ "MotionConfigContext.mjs"() {
  "use client";
  E(), GQt = Mv0({ transformPagePoint: (t) => t, isStatic: false, reducedMotion: "never" });
} });
import * as Dv0 from "./react-runtime/react/esm-index-production.js";
function _1v(t, e) {
  if (typeof t == "function") return t(e);
  t != null && (t.current = e);
}
function Nv0(...t) {
  return (e) => {
    let n = false;
    const i = t.map((r) => {
      const s = _1v(r, e);
      return !n && typeof s == "function" && (n = true), s;
    });
    if (n) return () => {
      for (let r = 0; r < i.length; r++) {
        const s = i[r];
        typeof s == "function" ? s() : _1v(t[r], null);
      }
    };
  };
}
function Lv0(...t) {
  return Dv0.useCallback(Nv0(...t), t);
}

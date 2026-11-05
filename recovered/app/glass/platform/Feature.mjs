// @recovered-by cursor-re
// artifact: app/out/vs/workbench/workbench.glass.main.js sha256:6eb88cb60fce5bf5df2ee401f797d5e160b0bcb5d85c25e57d2576b467edce81
// module: Feature.mjs range:35385320..35385769
// basis: esbuild-wrapper + inferred
// confidence: C
// method: split
// run: glass-platform 2026-11-05T10:20:42.086Z
// wrapper: sv0 deps:1 [E]
// declarations: ov0, av0
// anchors: (none)
// group: third-party-build-mjs
// notes: path inferred (no nls/webpack-key evidence); wrapper boundary is esbuild-exact; confidence reflects the inferred path only
sv0 = L({ "Feature.mjs"() {
  E(), HQt = class {
    constructor(t) {
      this.isMounted = false, this.node = t;
    }
    update() {
    }
  };
} });
function ov0({ top: t, left: e, right: n, bottom: i }) {
  return { x: { min: e, max: n }, y: { min: t, max: i } };
}
function av0(t, e) {
  if (!e) return t;
  const n = e({ x: t.left, y: t.top }), i = e({ x: t.right, y: t.bottom });
  return { top: n.y, left: n.x, bottom: i.y, right: i.x };
}

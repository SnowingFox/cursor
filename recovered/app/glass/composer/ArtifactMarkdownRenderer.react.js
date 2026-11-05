// @recovered-by cursor-re
// artifact: app/out/vs/workbench/workbench.glass.main.js sha256:6eb88cb60fce5bf5df2ee401f797d5e160b0bcb5d85c25e57d2576b467edce81
// module: ArtifactMarkdownRenderer.react.js range:38869883..38870931
// basis: esbuild-wrapper + inferred
// confidence: C
// method: split
// run: glass-composer 2026-11-05T10:19:48.876Z
// deps: E, d_, Mt, M2l, R_f
// wrapper-init: ToC
// hoisted-owner: ArtifactMarkdownRenderer.js (app-out-vs-workbench-workbench-glass-main-js:7716); trailing declarations ownership inferred from segment adjacency
// path: null (no unique nls candidate; inferred only)
// renamed: none

var ToC = L({ "ArtifactMarkdownRenderer.react.js"() {
  "use strict";
  E(), d_(), Mt(), M2l(), R_f();
} });
function EoC(t) {
  const e = Gr(), n = vt(() => _7m(t.markdown)), i = vt(() => {
    const l = t.textSizeScale;
    if (l !== void 0) return { fontSize: `${l}em`, lineHeight: "1.5" };
  }), r = { resolveArtifactUrl: (l, c) => e.artifactCacheService.resolveArtifactUrl(l, c), ...FOf(e) }, { resolveUrlReactive: s, fetchBytesReactive: o, getBytesReactive: a } = BOf(e, () => t.bcId);
  return Ee(sqv, { get bcId() {
    return t.bcId;
  }, get class() {
    return t.class;
  }, get codeBlockWordWrap() {
    return t.codeBlockWordWrap;
  }, get composerServices() {
    return t.composerServices;
  }, get finished() {
    return t.finished;
  }, fetchBytesReactive: o, getBytesReactive: a, get rawText() {
    return n();
  }, resolveUrlReactive: s, get rootStyle() {
    return i();
  }, services: r, get showLinkFavicons() {
    return t.showLinkFavicons;
  }, get videoAnnotations() {
    return t.videoAnnotations;
  } });
}
var sqv, 
// @recovered-by cursor-re
// artifact: app/out/vs/workbench/workbench.glass.main.js sha256:6eb88cb60fce5bf5df2ee401f797d5e160b0bcb5d85c25e57d2576b467edce81
// module: TokenRing.js range:29280341..29280890
// basis: esbuild-wrapper + inferred
// confidence: C
// method: split
// run: glass-platform 2026-11-05T10:20:42.187Z
// wrapper: N6k deps:3 [E, at, M6k]
// declarations: L6k
// anchors: token-ring-background, token-ring-progress
// group: settings
// notes: path inferred (no nls/webpack-key evidence); wrapper boundary is esbuild-exact; confidence reflects the inferred path only
N6k = L({ "TokenRing.js"() {
  "use strict";
  E(), at(), at(), at(), at(), M6k(), HJg = wt('<div class="inline-flex items-center justify-center"><svg class=absolute><circle class=token-ring-background fill=none></circle><circle class=token-ring-progress fill=none stroke-linecap=round>');
} });
function L6k(t) {
  const e = Gr(), { composerDataHandle: n } = tBe(t);
  return { mode: vt(() => e.composerModesService.getComposerUnifiedMode(n().composerId)), onSelectMode: (s) => {
    e.composerModesService.setComposerUnifiedMode(n(), s);
  } };
}

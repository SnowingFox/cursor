// @recovered-by cursor-re
// artifact: app/out/vs/workbench/workbench.glass.main.js sha256:6eb88cb60fce5bf5df2ee401f797d5e160b0bcb5d85c25e57d2576b467edce81
// module: CodeTokenizerProvider.js range:11057241..11058158
// basis: esbuild-wrapper + inferred
// confidence: C
// method: split
// run: glass-platform 2026-11-05T10:20:42.070Z
// wrapper: Qla deps:3 [E, MlS, Eit]
// declarations: BlS, nNr, UlS, Mit (segment truncated)
// anchors: (none)
// group: editor-plugins-third-party
// notes: path inferred (no nls/webpack-key evidence); wrapper boundary is esbuild-exact; confidence reflects the inferred path only
Qla = L({ "CodeTokenizerProvider.js"() {
  "use strict";
  E(), MlS(), Eit(), Zla = NlS(FRh);
} });
function BlS({ tokenization: t, sync: e, asyncDebounceMs: n }) {
  return t || (e === false ? { kind: "worker", debounceMs: n ?? 0, onRefusal: "plain" } : Mit);
}
function nNr(t, e) {
  return t !== null && t.code === e.code && t.language === e.language;
}
function UlS({ requested: t, support: e, rejected: n, coldRequest: i, tokenizerWarm: r, cached: s, request: o }) {
  if (t.kind === "inline") return Mit;
  if (t.kind === "inline-when-warm") {
    const a = t.scheduleWarmup === null;
    return s !== void 0 ? { kind: "cached", tokens: s } : eca(n, o) ? Mit : nNr(i, o) ? Jla : e.kind === "unsupported" || r && !a ? Mit : Jla;
  }
  return e.kind === "unsupported" && e.reason === "worker-unavailable" ? Mit : t.onRefusal === "plain" ? t : e.kind === "unsupported" || eca(n, o) ? Mit : t;
}
var Mit, Jla, eca,

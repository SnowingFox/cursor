// @recovered-by cursor-re
// artifact: app/out/vs/workbench/workbench.glass.main.js sha256:6eb88cb60fce5bf5df2ee401f797d5e160b0bcb5d85c25e57d2576b467edce81
// module: ModelPickerWrapper.react.js range:29355619..29356077
// basis: esbuild-wrapper + inferred
// confidence: C
// method: split
// run: glass-platform 2026-11-05T10:20:42.139Z
// wrapper: Tgs deps:6 [E, Mt, BVe, Hle, tPi, nPi]
// declarations: P4k, Tgs, Egs (segment truncated)
// anchors: (none)
// group: model
// notes: path inferred (no nls/webpack-key evidence); wrapper boundary is esbuild-exact; confidence reflects the inferred path only
var Tgs = L({ "ModelPickerWrapper.react.js"() {
  "use strict";
  E(), Mt(), BVe(), Hle(), tPi(), nPi();
} });
function P4k(t, e, n, i) {
  for (const r of e) {
    const s = t.find((a) => a.name === r.modelId);
    if (s === void 0) continue;
    const o = d1n(s, r.parameters)?.confirmationDialogue;
    if (!(o?.presentation !== Crl.POST_PICKER_WARNING || n.has(o.key) || i.has(o.key))) return { title: o.title, body: o.body, key: o.key };
  }
}
var Egs,

// @recovered-by cursor-re
// artifact: app/out/vs/workbench/workbench.glass.main.js sha256:6eb88cb60fce5bf5df2ee401f797d5e160b0bcb5d85c25e57d2576b467edce81
// module: UnifiedUsageBanner.js range:29696449..29697141
// basis: esbuild-wrapper + inferred
// confidence: C
// method: split
// run: glass-platform 2026-11-05T10:20:42.188Z
// wrapper: x7k deps:15 [E, at, pi, _fs, RA, aS, vo, lMn, tof, oof, yfs, lof]
// declarations: R7k, P7k, kof (segment truncated)
// anchors: (none)
// group: usage-billing
// notes: path inferred (no nls/webpack-key evidence); wrapper boundary is esbuild-exact; confidence reflects the inferred path only
x7k = L({ "UnifiedUsageBanner.js"() {
  "use strict";
  E(), at(), at(), pi(), _fs(), RA(), aS(), vo(), lMn(), tof(), oof(), yfs(), lof(), fJg(), m7k(), E7k(), yof = Ok(mJg), Sof = "cursor.dismissedCreditGrantIds";
} }), A7k = L({ "keycaps.css"() {
} });
function R7k(t) {
  return Cof[t] ?? t;
}
function P7k(t) {
  const e = vt(() => t.combo.split("+").map((n) => n.trim()).filter((n) => n.length > 0));
  return (() => {
    var n = kof();
    return Le(n, Ee(Whn, { get each() {
      return e();
    }, children: (i) => (() => {
      var r = wof();
      return Le(r, () => R7k(i())), r;
    })() })), xn(() => Er(n, `keycaps ${t.class ?? ""}`.trim())), n;
  })();
}
var kof, wof, Cof,

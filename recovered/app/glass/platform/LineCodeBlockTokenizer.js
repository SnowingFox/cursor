// @recovered-by cursor-re
// artifact: app/out/vs/workbench/workbench.glass.main.js sha256:6eb88cb60fce5bf5df2ee401f797d5e160b0bcb5d85c25e57d2576b467edce81
// module: LineCodeBlockTokenizer.js range:18320810..18321644
// basis: esbuild-wrapper + inferred
// confidence: C
// method: split
// run: glass-platform 2026-11-05T10:20:42.102Z
// wrapper: cAp deps:2 [E, yca]
// declarations: CMa, OC1, FC1
// anchors: (none)
// group: editor-plugins-third-party
// notes: path inferred (no nls/webpack-key evidence); wrapper boundary is esbuild-exact; confidence reflects the inferred path only
cAp = L({ "LineCodeBlockTokenizer.js"() {
  "use strict";
  E(), yca(), lAp = /\s+|:|,|(?!^)\{|\?/, wMa = /\r\n|\r|\n/;
} });
function CMa(t) {
  return t.map((e) => ({ tokens: e.map(oAp) }));
}
function OC1() {
  return { async tokenize(t, e) {
    const n = kMa(e);
    return n ? (await eUt(n), CMa(cUt(t, n))) : pbi(t);
  } };
}
function FC1() {
  const t = hUt(), e = async (n, i) => {
    try {
      return await eUt(i), CMa(cUt(n, i));
    } catch {
      return pbi(n);
    }
  };
  return { async tokenize(n, i, r) {
    const s = kMa(i);
    if (!s) return pbi(n);
    if (!t.available) return e(n, s);
    try {
      const o = await t.tokenizeStructured(n, s);
      if (r?.signal?.aborted) throw new Error("aborted");
      return CMa(o);
    } catch {
      return r?.signal?.aborted ? pbi(n) : e(n, s);
    }
  } };
}

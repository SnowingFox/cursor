// @recovered-by cursor-re
// artifact: app/out/vs/workbench/workbench.glass.main.js sha256:6eb88cb60fce5bf5df2ee401f797d5e160b0bcb5d85c25e57d2576b467edce81
// module: TablePlugin.js range:18319914..18320810
// basis: esbuild-wrapper + inferred
// confidence: C
// method: split
// run: glass-platform 2026-11-05T10:20:42.184Z
// wrapper: LC1 deps:6 [E, oHr, AC1, RC1, PC1, NC1]
// declarations: pbi, kMa, oAp, aAp, LC1, lAp (segment truncated)
// anchors: (none)
// group: editor-plugins-third-party
// notes: path inferred (no nls/webpack-key evidence); wrapper boundary is esbuild-exact; confidence reflects the inferred path only
var LC1 = L({ "TablePlugin.js"() {
  "use strict";
  E(), oHr(), AC1(), RC1(), PC1(), NC1();
} });
function pbi(t) {
  return t.split(wMa).map((e) => ({ tokens: e.length > 0 ? [{ text: e }] : [] }));
}
function kMa(t) {
  if (!t) return null;
  const i = (bca(t).language.split(lAp, 1)[0] ?? "").trim();
  return i.length > 0 ? i : null;
}
function oAp(t) {
  return { text: t.content, color: t.color, fontStyle: t.fontStyle, tokenClass: t.className };
}
function aAp(t, e) {
  return { async tokenize(n, i) {
    const r = kMa(i);
    if (!r) return pbi(n);
    const s = n.split(wMa), o = await t({ language: r, text: n, lineNumbers: s.map((a, l) => l + 1) });
    return s.map((a, l) => {
      const c = o.get(l + 1);
      return c === void 0 ? { tokens: a.length > 0 ? [{ text: a }] : [] } : { tokens: c.map(oAp) };
    });
  }, ...e === void 0 ? {} : { onDidChange: e } };
}
var lAp, wMa,

// @recovered-by cursor-re
// artifact: app/out/vs/workbench/workbench.glass.main.js sha256:6eb88cb60fce5bf5df2ee401f797d5e160b0bcb5d85c25e57d2576b467edce81
// module: TableNumericColumns.js range:18318912..18319914
// basis: inferred
// confidence: C
// method: split
// run: main 2026-11-05T10:03:46.056Z
NC1 = L({ "TableNumericColumns.js"() {
  "use strict";
  E(), Fy(), gE(), LIa(), Doe(), EUr(), HQ(), Aw(), nAp = "data-rte-numeric", bMa = String.raw`[+\-\u2212\u00b1~\u2248<>\u2264\u2265]?[$\u20ac\u00a3\u00a5\u20b9]?\d(?:[\d,.\s]*\d)?\s?(?:%|pp|pts?|bps|[kmbt]|bn|x|\u00d7|ms|s|h|[kmgt]b)?`, yMa = String.raw`${bMa}(?:(?:\s/\s|\s?[\u2013\u2014]\s?|-|\sto\s)${bMa})?`, iAp = new RegExp(String.raw`^(?:${yMa}|\(${yMa}\))$`, "i"), rAp = /^(?:|[-\u2013\u2014]|n\/?a)$/i, SMa = new j1("tableNumericColumns"), sAp = Rw.create({ name: "tableNumericColumns", addProseMirrorPlugins() {
    return [new MS({ key: SMa, state: { init: (t, e) => tAp(e.doc), apply: (t, e) => t.docChanged ? tAp(t.doc) : e }, props: { decorations: (t) => SMa.getState(t) } })];
  } });
} });
function aHr(t = {}) {
  const { resizable: e = true, cellMinWidth: n = 50, renderWrapper: i = false } = t;
  return { name: "table", extensions: [_Ma.configure({ resizable: e, cellMinWidth: n, renderWrapper: i }), vMa, gMa, fMa, sAp] };
}

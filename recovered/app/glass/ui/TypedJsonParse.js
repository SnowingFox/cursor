// @recovered-by cursor-re
// artifact: app/out/vs/workbench/workbench.glass.main.js sha256:6eb88cb60fce5bf5df2ee401f797d5e160b0bcb5d85c25e57d2576b467edce81
// module: TypedJsonParse.js range:643700..644165
// basis: inferred
// confidence: C
// method: split
// run: main 2026-11-05T10:03:46.132Z
var gJu = L({ "TypedJsonParse.js"() {
  "use strict";
  E(), Nde();
} });
function dEo(t, e, n, i) {
  return { source: t, data: e, receivedAt: Date.now(), stableID: n, fullUserHash: pJu(i) };
}
function fJu(t, e) {
  const n = Object.keys(t);
  return n.length <= e ? null : n.reduce((i, r) => {
    const s = t[i], o = t[r];
    return typeof s == "object" && typeof o == "object" ? o.receivedAt < s.receivedAt ? r : i : o < s ? r : i;
  });
}
var hEo, vJu, _Ju, 
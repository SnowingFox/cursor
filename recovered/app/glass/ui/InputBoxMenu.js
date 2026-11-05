// @recovered-by cursor-re
// artifact: app/out/vs/workbench/workbench.glass.main.js sha256:6eb88cb60fce5bf5df2ee401f797d5e160b0bcb5d85c25e57d2576b467edce81
// module: InputBoxMenu.js range:28003786..28004576
// basis: inferred
// confidence: C
// method: split
// run: main 2026-11-05T10:03:45.750Z
var FDk = L({ "InputBoxMenu.js"() {
  "use strict";
  E(), at(), at(), pi(), pi(), xRn();
} });
function BDk(t, e) {
  let n = wPg.exec(t);
  if (n === null && (n = TPg.exec(t)), n !== null) {
    const i = n[1], r = n[3];
    if (r.length >= e) return { leadOffset: n.index + i.length, matchingString: r, replaceableString: n[2] };
  }
  return null;
}
function $vl(t) {
  return BDk(t, 0);
}
function vPg(t, e) {
  const i = "[^/" + _Pg.replace("\\-", "") + "\\s]", r = 30, o = new RegExp("(^|\\s)([/]((?:" + i + "){0," + r + "}))$").exec(t);
  if (o !== null) {
    const a = o[1], l = o[3];
    if (l.length >= 0) return { leadOffset: o.index + a.length, matchingString: l, replaceableString: o[2] };
  }
  return null;
}
var mhs, _Pg, bPg, yPg, Hvl, ghs, Wvl, SPg, kPg, wPg, CPg, TPg, 
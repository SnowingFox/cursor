// @recovered-by cursor-re
// artifact: app/out/vs/workbench/workbench.glass.main.js sha256:6eb88cb60fce5bf5df2ee401f797d5e160b0bcb5d85c25e57d2576b467edce81
// module: CustomizeManageHooks.js range:22772745..22773393
// basis: inferred
// confidence: C
// method: split
// run: main 2026-11-05T10:03:45.592Z
var HHm = L({ "CustomizeManageHooks.js"() {
  "use strict";
  E(), Mt(), J7(), $ot(), Hot(), iCi(), Wes(), Ges();
} });
function hZ1(t) {
  if (t.startsWith("https://www.google.com/s2/favicons?")) try {
    const e = new URL(t);
    if (e.hostname !== "www.google.com" || e.pathname !== "/s2/favicons") return;
    const n = e.searchParams.get("sz");
    if (!n) return;
    const i = Number(n);
    return Number.isFinite(i) ? i : void 0;
  } catch {
    return;
  }
}
function pZ1(t) {
  if (!t.src) return false;
  const e = hZ1(t.src);
  return e === void 0 || e < WHm ? false : t.naturalWidth <= DZa && t.naturalHeight <= DZa;
}
var WHm, DZa, 
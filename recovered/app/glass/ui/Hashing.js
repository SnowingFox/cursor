// @recovered-by cursor-re
// artifact: app/out/vs/workbench/workbench.glass.main.js sha256:6eb88cb60fce5bf5df2ee401f797d5e160b0bcb5d85c25e57d2576b467edce81
// module: Hashing.js range:626465..627387
// basis: inferred
// confidence: C
// method: split
// run: main 2026-11-05T10:03:45.713Z
Ydn = L({ "Hashing.js"() {
  "use strict";
  E(), VTo(), s_t = (t) => {
    let e = 0;
    for (let n = 0; n < t.length; n++) {
      const i = t.charCodeAt(n);
      e = (e << 5) - e + i, e = e & e;
    }
    return String(e >>> 0);
  }, KTo = (t, e) => s_t(JSON.stringify(YTo(t, e))), YTo = (t, e) => {
    if (t == null) return null;
    const n = Object.keys(t).sort(), i = {};
    return n.forEach((r) => {
      const s = t[r];
      if (e === 0 || jQu(s) !== "object") {
        i[r] = s;
        return;
      }
      i[r] = YTo(s, e != null ? e - 1 : e);
    }), i;
  };
} });
function HQu(t, e, n) {
  if (n) return n(t, e);
  const i = e && e.customIDs ? e.customIDs : {}, r = [`uid:${e?.userID ?? ""}`, `cids:${Object.keys(i).sort((s, o) => s.localeCompare(o)).map((s) => `${s}-${i[s]}`).join(",")}`, `k:${t}`];
  return s_t(r.join("|"));
}
function ogr(t, e, n) {
  return e ? HQu(t, e, n) : s_t(`k:${t}`);
}

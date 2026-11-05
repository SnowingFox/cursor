// @recovered-by cursor-re
// artifact: app/out/vs/workbench/workbench.glass.main.js sha256:6eb88cb60fce5bf5df2ee401f797d5e160b0bcb5d85c25e57d2576b467edce81
// module: GeneralErrorSection.js range:39151444..39152754
// basis: inferred
// confidence: C
// method: split
// run: main 2026-11-05T10:03:45.700Z
QaC = L({ "GeneralErrorSection.js"() {
  "use strict";
  E(), at(), at(), at(), at(), pi(), Hu(), Vis(), Qrv(), vo(), eD(), IL(), XaC(), wKv = wt("<div><div>"), CKv = wt("<div>"), TKv = wt("<div><div class=gallery-error-popup-wrapper>");
} });
function JaC(t, e, n = {}) {
  const { renderFolder: i = (a) => a } = n, r = t.map((a) => e(a).fsPath), s = /* @__PURE__ */ new Map(), o = n.rootFolder ? nL(n.rootFolder.trim()) : void 0;
  return r.forEach((a) => {
    const l = nL(a), c = Ku(l);
    s.has(c) || s.set(c, []), s.get(c).push(l);
  }), r.map((a) => {
    const l = nL(a), c = Ku(l), u = s.get(c);
    if (u.length === 1) return { fileName: c };
    if (new Set(u).size === 1) return { fileName: c };
    let d;
    if (o) {
      const h = u.map((f) => Qxe(o, f)), p = EKv(h), g = Qxe(p, Qxe(o, g4(l)));
      d = g ? i(g) : void 0;
    } else {
      const h = EKv(u), p = Qxe(h, g4(l));
      d = p ? i(p) : void 0;
    }
    return { fileName: c, folderPath: d || void 0 };
  });
}
function EKv(t) {
  if (t.length === 0) return "";
  if (t.length === 1) return g4(t[0]);
  let e = t[0].split(g1);
  for (let n = 1; n < t.length; n++) {
    const i = t[n].split(g1);
    let r = 0;
    for (; r < e.length && r < i.length && e[r] === i[r]; ) r++;
    e = e.slice(0, r);
  }
  return e.join(g1);
}

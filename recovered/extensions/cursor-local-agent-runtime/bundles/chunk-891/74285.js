// @recovered-by cursor-re
// artifact: app/extensions/cursor-local-agent-runtime/dist/891.js sha256:a9b28a653e0c9a848b5a9ecea390f2667111709ef94d64381394a9ca46de63e8
// module: 74285 range:2607..3763
// basis: webpack-id confidence: C
// method: split
// run: ext-p0 2026-11-05T10:07:22.069Z
74285: (t, e, s) => {
  s.d(e, { A: () => c });
  var o = s(65835), r = s(21945);
  const n = /^([\w-]+)\s(["'])?([\w-@\+\.%:/]+)\2$/, i = ["__proto__", "profile __proto__"], c = (t2) => {
    const e2 = {};
    let s2, c2;
    for (const a of t2.split(/\r?\n/)) {
      const t3 = a.split(/(^|\s)[;#]/)[0].trim();
      if ("[" === t3[0] && "]" === t3[t3.length - 1]) {
        s2 = void 0, c2 = void 0;
        const e3 = t3.substring(1, t3.length - 1), a2 = n.exec(e3);
        if (a2) {
          const [, t4, , e4] = a2;
          Object.values(o.I).includes(t4) && (s2 = [t4, e4].join(r.Q));
        } else s2 = e3;
        if (i.includes(e3)) throw new Error(`Found invalid profile name "${e3}"`);
      } else if (s2) {
        const o2 = t3.indexOf("=");
        if (![0, -1].includes(o2)) {
          const [n2, i2] = [t3.substring(0, o2).trim(), t3.substring(o2 + 1).trim()];
          if ("" === i2) c2 = n2;
          else {
            c2 && a.trimStart() === a && (c2 = void 0), e2[s2] = e2[s2] || {};
            const t4 = c2 ? [c2, n2].join(r.Q) : n2;
            e2[s2][t4] = i2;
          }
        }
      }
    }
    return e2;
  };
}
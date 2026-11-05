// @recovered-by cursor-re
// artifact: app/extensions/cursor-local-agent-runtime/dist/516.js sha256:00b9230f6f51b75f192bcd1f5c76b0742f88cd64f2190cc62284529e10083705
// module: 74285 range:12870..14026
// basis: webpack-id confidence: C
// method: split
// run: ext-p0 2026-11-05T10:07:22.069Z
74285: (e, t, n) => {
  n.d(t, { A: () => i });
  var r = n(65835), o = n(21945);
  const a = /^([\w-]+)\s(["'])?([\w-@\+\.%:/]+)\2$/, s = ["__proto__", "profile __proto__"], i = (e2) => {
    const t2 = {};
    let n2, i2;
    for (const c of e2.split(/\r?\n/)) {
      const e3 = c.split(/(^|\s)[;#]/)[0].trim();
      if ("[" === e3[0] && "]" === e3[e3.length - 1]) {
        n2 = void 0, i2 = void 0;
        const t3 = e3.substring(1, e3.length - 1), c2 = a.exec(t3);
        if (c2) {
          const [, e4, , t4] = c2;
          Object.values(r.I).includes(e4) && (n2 = [e4, t4].join(o.Q));
        } else n2 = t3;
        if (s.includes(t3)) throw new Error(`Found invalid profile name "${t3}"`);
      } else if (n2) {
        const r2 = e3.indexOf("=");
        if (![0, -1].includes(r2)) {
          const [a2, s2] = [e3.substring(0, r2).trim(), e3.substring(r2 + 1).trim()];
          if ("" === s2) i2 = a2;
          else {
            i2 && c.trimStart() === c && (i2 = void 0), t2[n2] = t2[n2] || {};
            const e4 = i2 ? [i2, a2].join(o.Q) : a2;
            t2[n2][e4] = s2;
          }
        }
      }
    }
    return t2;
  };
}
// @recovered-by cursor-re
// artifact: app/extensions/cursor-local-agent-runtime/dist/198.js sha256:4b6f4cfb39692a9202b5f51c935f2244226e902a83a7f8b9d177196a6ef4a291
// module: 74285 range:18562..19718
// basis: webpack-id confidence: C
// method: split
// run: ext-p0 2026-11-05T10:07:22.069Z
74285: (e, t, r) => {
  r.d(t, { A: () => a });
  var n = r(65835), o = r(21945);
  const s = /^([\w-]+)\s(["'])?([\w-@\+\.%:/]+)\2$/, i = ["__proto__", "profile __proto__"], a = (e2) => {
    const t2 = {};
    let r2, a2;
    for (const c of e2.split(/\r?\n/)) {
      const e3 = c.split(/(^|\s)[;#]/)[0].trim();
      if ("[" === e3[0] && "]" === e3[e3.length - 1]) {
        r2 = void 0, a2 = void 0;
        const t3 = e3.substring(1, e3.length - 1), c2 = s.exec(t3);
        if (c2) {
          const [, e4, , t4] = c2;
          Object.values(n.I).includes(e4) && (r2 = [e4, t4].join(o.Q));
        } else r2 = t3;
        if (i.includes(t3)) throw new Error(`Found invalid profile name "${t3}"`);
      } else if (r2) {
        const n2 = e3.indexOf("=");
        if (![0, -1].includes(n2)) {
          const [s2, i2] = [e3.substring(0, n2).trim(), e3.substring(n2 + 1).trim()];
          if ("" === i2) a2 = s2;
          else {
            a2 && c.trimStart() === c && (a2 = void 0), t2[r2] = t2[r2] || {};
            const e4 = a2 ? [a2, s2].join(o.Q) : s2;
            t2[r2][e4] = i2;
          }
        }
      }
    }
    return t2;
  };
}
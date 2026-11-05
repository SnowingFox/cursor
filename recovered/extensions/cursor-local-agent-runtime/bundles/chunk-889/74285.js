// @recovered-by cursor-re
// artifact: app/extensions/cursor-local-agent-runtime/dist/889.js sha256:19cd32adff4d21d05c23a1e2045d9ddbdb1402b191e97af899be72f3c3efc763
// module: 74285 range:11556..12712
// basis: webpack-id confidence: C
// method: split
// run: ext-p0 2026-11-05T10:07:22.069Z
74285: (e, s, o) => {
  o.d(s, { A: () => a });
  var t = o(65835), n = o(21945);
  const i = /^([\w-]+)\s(["'])?([\w-@\+\.%:/]+)\2$/, r = ["__proto__", "profile __proto__"], a = (e2) => {
    const s2 = {};
    let o2, a2;
    for (const c of e2.split(/\r?\n/)) {
      const e3 = c.split(/(^|\s)[;#]/)[0].trim();
      if ("[" === e3[0] && "]" === e3[e3.length - 1]) {
        o2 = void 0, a2 = void 0;
        const s3 = e3.substring(1, e3.length - 1), c2 = i.exec(s3);
        if (c2) {
          const [, e4, , s4] = c2;
          Object.values(t.I).includes(e4) && (o2 = [e4, s4].join(n.Q));
        } else o2 = s3;
        if (r.includes(s3)) throw new Error(`Found invalid profile name "${s3}"`);
      } else if (o2) {
        const t2 = e3.indexOf("=");
        if (![0, -1].includes(t2)) {
          const [i2, r2] = [e3.substring(0, t2).trim(), e3.substring(t2 + 1).trim()];
          if ("" === r2) a2 = i2;
          else {
            a2 && c.trimStart() === c && (a2 = void 0), s2[o2] = s2[o2] || {};
            const e4 = a2 ? [a2, i2].join(n.Q) : i2;
            s2[o2][e4] = r2;
          }
        }
      }
    }
    return s2;
  };
}
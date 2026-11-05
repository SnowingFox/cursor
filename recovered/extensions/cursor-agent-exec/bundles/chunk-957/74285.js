// @recovered-by cursor-re
// artifact: app/extensions/cursor-agent-exec/dist/957.js sha256:58b9f372ec2212df30a5c8faa446d192311d776723a37913f302c09d950e1a12
// module: 74285 range:5182..6338
// basis: webpack-id confidence: C
// method: split
// run: ext-p0 2026-11-05T10:07:22.069Z
74285: (e, r, t) => {
  t.d(r, { A: () => c });
  var s = t(65835), n = t(21945);
  const o = /^([\w-]+)\s(["'])?([\w-@\+\.%:/]+)\2$/, i = ["__proto__", "profile __proto__"], c = (e2) => {
    const r2 = {};
    let t2, c2;
    for (const a of e2.split(/\r?\n/)) {
      const e3 = a.split(/(^|\s)[;#]/)[0].trim();
      if ("[" === e3[0] && "]" === e3[e3.length - 1]) {
        t2 = void 0, c2 = void 0;
        const r3 = e3.substring(1, e3.length - 1), a2 = o.exec(r3);
        if (a2) {
          const [, e4, , r4] = a2;
          Object.values(s.I).includes(e4) && (t2 = [e4, r4].join(n.Q));
        } else t2 = r3;
        if (i.includes(r3)) throw new Error(`Found invalid profile name "${r3}"`);
      } else if (t2) {
        const s2 = e3.indexOf("=");
        if (![0, -1].includes(s2)) {
          const [o2, i2] = [e3.substring(0, s2).trim(), e3.substring(s2 + 1).trim()];
          if ("" === i2) c2 = o2;
          else {
            c2 && a.trimStart() === a && (c2 = void 0), r2[t2] = r2[t2] || {};
            const e4 = c2 ? [c2, o2].join(n.Q) : o2;
            r2[t2][e4] = i2;
          }
        }
      }
    }
    return r2;
  };
}
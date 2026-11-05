// @recovered-by cursor-re
// artifact: app/extensions/cursor-agent-exec/dist/957.js sha256:58b9f372ec2212df30a5c8faa446d192311d776723a37913f302c09d950e1a12
// module: 29359 range:146..520
// basis: webpack-id confidence: C
// method: split
// run: ext-p0 2026-11-05T10:07:22.069Z
29359: (e, r, t) => {
  t.d(r, { Y: () => n });
  var s = t(61247);
  const n = async (e2) => {
    const r2 = await (0, s.p)(e2);
    return ((...e3) => {
      const r3 = {};
      for (const t2 of e3) for (const [e4, s2] of Object.entries(t2)) void 0 !== r3[e4] ? Object.assign(r3[e4], s2) : r3[e4] = s2;
      return r3;
    })(r2.configFile, r2.credentialsFile);
  };
}
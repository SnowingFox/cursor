// @recovered-by cursor-re
// artifact: app/extensions/cursor-local-agent-runtime/dist/198.js sha256:4b6f4cfb39692a9202b5f51c935f2244226e902a83a7f8b9d177196a6ef4a291
// module: 29359 range:146..520
// basis: webpack-id confidence: C
// method: split
// run: ext-p0 2026-11-05T10:07:22.069Z
29359: (e, t, r) => {
  r.d(t, { Y: () => o });
  var n = r(61247);
  const o = async (e2) => {
    const t2 = await (0, n.p)(e2);
    return ((...e3) => {
      const t3 = {};
      for (const r2 of e3) for (const [e4, n2] of Object.entries(r2)) void 0 !== t3[e4] ? Object.assign(t3[e4], n2) : t3[e4] = n2;
      return t3;
    })(t2.configFile, t2.credentialsFile);
  };
}
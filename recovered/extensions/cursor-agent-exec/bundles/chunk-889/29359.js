// @recovered-by cursor-re
// artifact: app/extensions/cursor-agent-exec/dist/889.js sha256:19cd32adff4d21d05c23a1e2045d9ddbdb1402b191e97af899be72f3c3efc763
// module: 29359 range:146..520
// basis: webpack-id confidence: C
// method: split
// run: ext-p0 2026-11-05T10:07:22.069Z
29359: (e, s, o) => {
  o.d(s, { Y: () => n });
  var t = o(61247);
  const n = async (e2) => {
    const s2 = await (0, t.p)(e2);
    return ((...e3) => {
      const s3 = {};
      for (const o2 of e3) for (const [e4, t2] of Object.entries(o2)) void 0 !== s3[e4] ? Object.assign(s3[e4], t2) : s3[e4] = t2;
      return s3;
    })(s2.configFile, s2.credentialsFile);
  };
}
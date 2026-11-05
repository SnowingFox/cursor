// @recovered-by cursor-re
// artifact: app/extensions/cursor-agent-exec/dist/957.js sha256:58b9f372ec2212df30a5c8faa446d192311d776723a37913f302c09d950e1a12
// module: 47646 range:1217..1478
// basis: webpack-id confidence: C
// method: split
// run: ext-p0 2026-11-05T10:07:22.069Z
47646: (e, r, t) => {
  t.d(r, { a: () => o, v: () => i });
  var s = t(91943), n = t(56589);
  const o = {}, i = async (e2) => {
    if (o[e2]) return o[e2];
    const r2 = (0, n.C)(e2), t2 = await (0, s.readFile)(r2, "utf8");
    return JSON.parse(t2);
  };
}
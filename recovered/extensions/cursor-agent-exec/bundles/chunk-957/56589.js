// @recovered-by cursor-re
// artifact: app/extensions/cursor-agent-exec/dist/957.js sha256:58b9f372ec2212df30a5c8faa446d192311d776723a37913f302c09d950e1a12
// module: 56589 range:1480..1745
// basis: webpack-id confidence: C
// method: split
// run: ext-p0 2026-11-05T10:07:22.069Z
56589: (e, r, t) => {
  t.d(r, { C: () => i });
  var s = t(76982), n = t(16928), o = t(44988);
  const i = (e2) => {
    const r2 = (0, s.createHash)("sha1").update(e2).digest("hex");
    return (0, n.join)((0, o.R)(), ".aws", "sso", "cache", `${r2}.json`);
  };
}
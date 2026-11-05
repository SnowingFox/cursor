// @recovered-by cursor-re
// artifact: app/extensions/cursor-local-agent-runtime/dist/889.js sha256:19cd32adff4d21d05c23a1e2045d9ddbdb1402b191e97af899be72f3c3efc763
// module: 56589 range:1212..1477
// basis: webpack-id confidence: C
// method: split
// run: ext-p0 2026-11-05T10:07:22.069Z
56589: (e, s, o) => {
  o.d(s, { C: () => r });
  var t = o(76982), n = o(16928), i = o(44988);
  const r = (e2) => {
    const s2 = (0, t.createHash)("sha1").update(e2).digest("hex");
    return (0, n.join)((0, i.R)(), ".aws", "sso", "cache", `${s2}.json`);
  };
}
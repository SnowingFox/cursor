// @recovered-by cursor-re
// artifact: app/extensions/cursor-local-agent-runtime/dist/122.js sha256:703201f24e7e10b12495f20ea806c082ce52f8b559d5bc3017dcb3ec6b93012c
// module: 56589 range:2718..2983
// basis: webpack-id confidence: C
// method: split
// run: ext-p0 2026-11-05T10:07:22.069Z
56589: (e, r, n) => {
  n.d(r, { C: () => s });
  var o = n(76982), t = n(16928), i = n(44988);
  const s = (e2) => {
    const r2 = (0, o.createHash)("sha1").update(e2).digest("hex");
    return (0, t.join)((0, i.R)(), ".aws", "sso", "cache", `${r2}.json`);
  };
}
// @recovered-by cursor-re
// artifact: app/extensions/cursor-agent-exec/dist/122.js sha256:703201f24e7e10b12495f20ea806c082ce52f8b559d5bc3017dcb3ec6b93012c
// module: 47646 range:2455..2716
// basis: webpack-id confidence: C
// method: split
// run: ext-p0 2026-11-05T10:07:22.069Z
47646: (e, r, n) => {
  n.d(r, { a: () => i, v: () => s });
  var o = n(91943), t = n(56589);
  const i = {}, s = async (e2) => {
    if (i[e2]) return i[e2];
    const r2 = (0, t.C)(e2), n2 = await (0, o.readFile)(r2, "utf8");
    return JSON.parse(n2);
  };
}
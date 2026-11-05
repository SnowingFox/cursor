// @recovered-by cursor-re
// artifact: app/extensions/cursor-agent-exec/dist/889.js sha256:19cd32adff4d21d05c23a1e2045d9ddbdb1402b191e97af899be72f3c3efc763
// module: 47646 range:949..1210
// basis: webpack-id confidence: C
// method: split
// run: ext-p0 2026-11-05T10:07:22.069Z
47646: (e, s, o) => {
  o.d(s, { a: () => i, v: () => r });
  var t = o(91943), n = o(56589);
  const i = {}, r = async (e2) => {
    if (i[e2]) return i[e2];
    const s2 = (0, n.C)(e2), o2 = await (0, t.readFile)(s2, "utf8");
    return JSON.parse(o2);
  };
}
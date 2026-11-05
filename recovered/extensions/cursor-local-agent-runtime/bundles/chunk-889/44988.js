// @recovered-by cursor-re
// artifact: app/extensions/cursor-local-agent-runtime/dist/889.js sha256:19cd32adff4d21d05c23a1e2045d9ddbdb1402b191e97af899be72f3c3efc763
// module: 44988 range:522..947
// basis: webpack-id confidence: C
// method: split
// run: ext-p0 2026-11-05T10:07:22.069Z
44988: (e, s, o) => {
  o.d(s, { R: () => r });
  var t = o(70857), n = o(16928);
  const i = {}, r = () => {
    const { HOME: e2, USERPROFILE: s2, HOMEPATH: o2, HOMEDRIVE: r2 = `C:${n.sep}` } = process.env;
    if (e2) return e2;
    if (s2) return s2;
    if (o2) return `${r2}${o2}`;
    const a = process && process.geteuid ? `${process.geteuid()}` : "DEFAULT";
    return i[a] || (i[a] = (0, t.homedir)()), i[a];
  };
}
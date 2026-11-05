// @recovered-by cursor-re
// artifact: app/extensions/cursor-local-agent-runtime/dist/198.js sha256:4b6f4cfb39692a9202b5f51c935f2244226e902a83a7f8b9d177196a6ef4a291
// module: 44988 range:522..947
// basis: webpack-id confidence: C
// method: split
// run: ext-p0 2026-11-05T10:07:22.069Z
44988: (e, t, r) => {
  r.d(t, { R: () => i });
  var n = r(70857), o = r(16928);
  const s = {}, i = () => {
    const { HOME: e2, USERPROFILE: t2, HOMEPATH: r2, HOMEDRIVE: i2 = `C:${o.sep}` } = process.env;
    if (e2) return e2;
    if (t2) return t2;
    if (r2) return `${i2}${r2}`;
    const a = process && process.geteuid ? `${process.geteuid()}` : "DEFAULT";
    return s[a] || (s[a] = (0, n.homedir)()), s[a];
  };
}
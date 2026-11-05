// @recovered-by cursor-re
// artifact: app/extensions/cursor-local-agent-runtime/dist/122.js sha256:703201f24e7e10b12495f20ea806c082ce52f8b559d5bc3017dcb3ec6b93012c
// module: 44988 range:2028..2453
// basis: webpack-id confidence: C
// method: split
// run: ext-p0 2026-11-05T10:07:22.069Z
44988: (e, r, n) => {
  n.d(r, { R: () => s });
  var o = n(70857), t = n(16928);
  const i = {}, s = () => {
    const { HOME: e2, USERPROFILE: r2, HOMEPATH: n2, HOMEDRIVE: s2 = `C:${t.sep}` } = process.env;
    if (e2) return e2;
    if (r2) return r2;
    if (n2) return `${s2}${n2}`;
    const c = process && process.geteuid ? `${process.geteuid()}` : "DEFAULT";
    return i[c] || (i[c] = (0, o.homedir)()), i[c];
  };
}
// @recovered-by cursor-re
// artifact: app/extensions/cursor-agent-exec/dist/516.js sha256:00b9230f6f51b75f192bcd1f5c76b0742f88cd64f2190cc62284529e10083705
// module: 44988 range:8957..9382
// basis: webpack-id confidence: C
// method: split
// run: ext-p0 2026-11-05T10:07:22.069Z
44988: (e, t, n) => {
  n.d(t, { R: () => s });
  var r = n(70857), o = n(16928);
  const a = {}, s = () => {
    const { HOME: e2, USERPROFILE: t2, HOMEPATH: n2, HOMEDRIVE: s2 = `C:${o.sep}` } = process.env;
    if (e2) return e2;
    if (t2) return t2;
    if (n2) return `${s2}${n2}`;
    const i = process && process.geteuid ? `${process.geteuid()}` : "DEFAULT";
    return a[i] || (a[i] = (0, r.homedir)()), a[i];
  };
}
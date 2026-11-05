// @recovered-by cursor-re
// artifact: app/extensions/cursor-agent-exec/dist/957.js sha256:58b9f372ec2212df30a5c8faa446d192311d776723a37913f302c09d950e1a12
// module: 44988 range:790..1215
// basis: webpack-id confidence: C
// method: split
// run: ext-p0 2026-11-05T10:07:22.069Z
44988: (e, r, t) => {
  t.d(r, { R: () => i });
  var s = t(70857), n = t(16928);
  const o = {}, i = () => {
    const { HOME: e2, USERPROFILE: r2, HOMEPATH: t2, HOMEDRIVE: i2 = `C:${n.sep}` } = process.env;
    if (e2) return e2;
    if (r2) return r2;
    if (t2) return `${i2}${t2}`;
    const c = process && process.geteuid ? `${process.geteuid()}` : "DEFAULT";
    return o[c] || (o[c] = (0, s.homedir)()), o[c];
  };
}
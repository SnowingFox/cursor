// @recovered-by cursor-re
// artifact: app/extensions/cursor-local-agent-runtime/dist/957.js sha256:58b9f372ec2212df30a5c8faa446d192311d776723a37913f302c09d950e1a12
// module: 44698 range:522..788
// basis: webpack-id confidence: C
// method: split
// run: ext-p0 2026-11-05T10:07:22.069Z
44698: (e, r, t) => {
  t.d(r, { Z: () => o });
  var s = t(47646), n = t(85004);
  const o = { getFileRecord: () => n.Jj, interceptFile(e2, r2) {
    n.Jj[e2] = Promise.resolve(r2);
  }, getTokenRecord: () => s.a, interceptToken(e2, r2) {
    s.a[e2] = r2;
  } };
}
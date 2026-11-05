// @recovered-by cursor-re
// artifact: app/extensions/cursor-local-agent-runtime/dist/122.js sha256:703201f24e7e10b12495f20ea806c082ce52f8b559d5bc3017dcb3ec6b93012c
// module: 44698 range:1760..2026
// basis: webpack-id confidence: C
// method: split
// run: ext-p0 2026-11-05T10:07:22.069Z
44698: (e, r, n) => {
  n.d(r, { Z: () => i });
  var o = n(47646), t = n(85004);
  const i = { getFileRecord: () => t.Jj, interceptFile(e2, r2) {
    t.Jj[e2] = Promise.resolve(r2);
  }, getTokenRecord: () => o.a, interceptToken(e2, r2) {
    o.a[e2] = r2;
  } };
}
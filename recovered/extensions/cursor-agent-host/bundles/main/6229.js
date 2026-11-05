// @recovered-by cursor-re
// artifact: app/extensions/cursor-agent-host/dist/main.js sha256:9d478dff35f72f6b3ed85b33f2c4a15c12b41b4e3d42247ecc8ce4981e9308bb
// module: 6229 range:451913..452626
// basis: webpack-id confidence: C
// method: split
// run: ext-p0 2026-11-05T10:07:22.069Z
6229: (e, t, r) => {
    "use strict";
    r.d(t, { B: () => c, Xg: () => a, hi: () => l });
    var n = r(21187), s = r(20216), o = r(40328), i = r(8032);
    const a = "1";
    function c(e2) {
      const t2 = e2.get(n._U);
      if (null === t2) throw new o.T(`missing required header: set ${n._U} to "${a}"`, i.C.InvalidArgument);
      if (t2 !== a) throw new o.T(`${n._U} must be "${a}": got "${t2}"`, i.C.InvalidArgument);
    }
    function l(e2) {
      const t2 = e2.get(s.qE);
      if (null === t2) throw new o.T(`missing required parameter: set ${s.qE} to "v${a}"`, i.C.InvalidArgument);
      if (t2 !== `v${a}`) throw new o.T(`${s.qE} must be "v${a}": got "${t2}"`, i.C.InvalidArgument);
    }
  }
// @recovered-by cursor-re
// artifact: app/extensions/cursor-always-local/dist/main.js sha256:14fb2d0e360d81a024b4ec605f417e030e19b30b2df99bc45648aa227060534e
// module: 6229 range:2841057..2841792
// basis: webpack-id confidence: C
// method: split
// run: ext-agent 2026-11-05T10:20:08.356Z
6229: (t2, e2, r2) => {
    "use strict";
    r2.d(e2, { B: () => u, Xg: () => a, hi: () => c });
    var n2 = r2(1187), s2 = r2(216), i2 = r2(328), o2 = r2(8032);
    const a = "1";
    function u(t3) {
      const e3 = t3.get(n2._U);
      if (null === e3) throw new i2.T(`missing required header: set ${n2._U} to "${a}"`, o2.C.InvalidArgument);
      if (e3 !== a) throw new i2.T(`${n2._U} must be "${a}": got "${e3}"`, o2.C.InvalidArgument);
    }
    function c(t3) {
      const e3 = t3.get(s2.qE);
      if (null === e3) throw new i2.T(`missing required parameter: set ${s2.qE} to "v${a}"`, o2.C.InvalidArgument);
      if (e3 !== `v${a}`) throw new i2.T(`${s2.qE} must be "v${a}": got "${e3}"`, o2.C.InvalidArgument);
    }
  }
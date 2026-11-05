// @recovered-by cursor-re
// artifact: app/extensions/cursor-agent-host/dist/main.js sha256:9d478dff35f72f6b3ed85b33f2c4a15c12b41b4e3d42247ecc8ce4981e9308bb
// module: 36781 range:7320332..7320653
// basis: webpack-id confidence: C
// method: split
// run: ext-p0 2026-11-05T10:07:22.069Z
36781: (e, t, r) => {
    "use strict";
    r.d(t, { d: () => o });
    var n = r(81958);
    const s = n.g1(n.L5());
    function o(e2) {
      let t2;
      try {
        t2 = JSON.parse(e2);
      } catch {
        return;
      }
      const r2 = s.safeParse(t2);
      return r2.success ? r2.data : void 0;
    }
  }
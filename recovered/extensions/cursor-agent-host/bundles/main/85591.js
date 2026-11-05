// @recovered-by cursor-re
// artifact: app/extensions/cursor-agent-host/dist/main.js sha256:9d478dff35f72f6b3ed85b33f2c4a15c12b41b4e3d42247ecc8ce4981e9308bb
// module: 85591 range:12049235..12049567
// basis: webpack-id confidence: C
// method: split
// run: ext-p0 2026-11-05T10:07:22.069Z
85591: (e, t, r) => {
    "use strict";
    function n(e2, t2) {
      const r2 = {};
      for (const [n2, s] of Object.entries(e2.methods)) {
        const o = t2(Object.assign(Object.assign({}, s), { localName: n2, service: e2 }));
        null != o && (r2[n2] = o);
      }
      return r2;
    }
    r.d(t, { w: () => n });
  }
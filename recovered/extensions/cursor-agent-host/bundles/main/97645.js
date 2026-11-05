// @recovered-by cursor-re
// artifact: app/extensions/cursor-agent-host/dist/main.js sha256:9d478dff35f72f6b3ed85b33f2c4a15c12b41b4e3d42247ecc8ce4981e9308bb
// module: 97645 range:15044086..15044565
// basis: webpack-id confidence: C
// method: split
// run: ext-p0 2026-11-05T10:07:22.069Z
97645: (e, t, r) => {
    "use strict";
    function n(e2) {
      const t2 = new Headers(), r2 = new Headers();
      return e2.forEach((e3, n2) => {
        n2.toLowerCase().startsWith("trailer-") ? r2.append(n2.substring(8), e3) : t2.append(n2, e3);
      }), [t2, r2];
    }
    function s(e2, t2) {
      const r2 = new Headers(e2);
      return t2.forEach((e3, t3) => {
        r2.append(`trailer-${t3}`, e3);
      }), r2;
    }
    r.d(t, { E: () => s, z: () => n });
  }
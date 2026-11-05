// @recovered-by cursor-re
// artifact: app/extensions/cursor-agent-host/dist/main.js sha256:9d478dff35f72f6b3ed85b33f2c4a15c12b41b4e3d42247ecc8ce4981e9308bb
// module: 67572 range:10503787..10504053
// basis: webpack-id confidence: C
// method: split
// run: ext-p0 2026-11-05T10:07:22.069Z
67572: (e, t, r) => {
    "use strict";
    function n(e2, t2, r2) {
      const n2 = "string" == typeof t2 ? t2 : t2.typeName, s = "string" == typeof r2 ? r2 : r2.name;
      return e2.toString().replace(/\/?$/, `/${n2}/${s}`);
    }
    r.d(t, { j: () => n });
  }
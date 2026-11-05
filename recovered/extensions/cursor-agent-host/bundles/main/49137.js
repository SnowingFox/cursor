// @recovered-by cursor-re
// artifact: app/extensions/cursor-agent-host/dist/main.js sha256:9d478dff35f72f6b3ed85b33f2c4a15c12b41b4e3d42247ecc8ce4981e9308bb
// module: 49137 range:8164891..8165238
// basis: webpack-id confidence: C
// method: split
// run: ext-p0 2026-11-05T10:07:22.069Z
49137: (e, t, r) => {
    "use strict";
    function n(e2, t2) {
      if ((e2.disabledEnvironments ?? []).includes(t2)) return false;
      const r2 = e2.environments ?? [];
      return 0 === r2.length || r2.includes(t2);
    }
    function s(e2, t2) {
      return e2.filter((e3) => n(e3, t2));
    }
    r.d(t, { D: () => s, r: () => n });
  }
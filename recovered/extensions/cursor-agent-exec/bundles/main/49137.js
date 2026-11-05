// @recovered-by cursor-re
// artifact: app/extensions/cursor-agent-exec/dist/main.js sha256:8d20326bd54948353115113c2d4716cf781d593610fd4d8acebcc37a3170da8e
// module: 49137 range:3557164..3557511
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
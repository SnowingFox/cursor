// @recovered-by cursor-re
// artifact: app/extensions/cursor-agent-exec/dist/main.js sha256:8d20326bd54948353115113c2d4716cf781d593610fd4d8acebcc37a3170da8e
// module: 50793 range:3802060..3802361
// basis: webpack-id confidence: C
// method: split
// run: ext-p0 2026-11-05T10:07:22.069Z
50793: (e, t, r) => {
    "use strict";
    Object.defineProperty(t, "__esModule", { value: true }), t.timestamp = void 0;
    const n = r(86256), s = r(38143);
    t.timestamp = function(e2 = n.dateTimestampProvider) {
      return (0, s.map)((t2) => ({ value: t2, timestamp: e2.now() }));
    };
  }
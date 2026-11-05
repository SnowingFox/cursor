// @recovered-by cursor-re
// artifact: app/extensions/cursor-agent-host/dist/main.js sha256:9d478dff35f72f6b3ed85b33f2c4a15c12b41b4e3d42247ecc8ce4981e9308bb
// module: 50793 range:8462490..8462791
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
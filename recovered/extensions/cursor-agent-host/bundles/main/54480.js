// @recovered-by cursor-re
// artifact: app/extensions/cursor-agent-host/dist/main.js sha256:9d478dff35f72f6b3ed85b33f2c4a15c12b41b4e3d42247ecc8ce4981e9308bb
// module: 54480 range:8664647..8664985
// basis: webpack-id confidence: C
// method: split
// run: ext-p0 2026-11-05T10:07:22.069Z
54480: (e, t, r) => {
    "use strict";
    Object.defineProperty(t, "__esModule", { value: true }), t.scan = void 0;
    const n = r(51078), s = r(19904);
    t.scan = function(e2, t2) {
      const r2 = arguments.length >= 2;
      return (o) => new n.Observable((n2) => (0, s.scanInternals)(e2, t2, r2, true, false, o, n2));
    };
  }
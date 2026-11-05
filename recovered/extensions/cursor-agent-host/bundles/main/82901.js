// @recovered-by cursor-re
// artifact: app/extensions/cursor-agent-host/dist/main.js sha256:9d478dff35f72f6b3ed85b33f2c4a15c12b41b4e3d42247ecc8ce4981e9308bb
// module: 82901 range:11878038..11878283
// basis: webpack-id confidence: C
// method: split
// run: ext-p0 2026-11-05T10:07:22.069Z
82901: (e, t, r) => {
    "use strict";
    Object.defineProperty(t, "__esModule", { value: true }), t.isScheduler = void 0;
    const n = r(51078);
    t.isScheduler = function(e2) {
      return e2 && (0, n.isFunction)(e2.schedule);
    };
  }
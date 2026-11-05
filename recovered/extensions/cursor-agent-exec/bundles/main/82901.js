// @recovered-by cursor-re
// artifact: app/extensions/cursor-agent-exec/dist/main.js sha256:8d20326bd54948353115113c2d4716cf781d593610fd4d8acebcc37a3170da8e
// module: 82901 range:10859698..10859943
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
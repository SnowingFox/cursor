// @recovered-by cursor-re
// artifact: app/extensions/cursor-agent-host/dist/main.js sha256:9d478dff35f72f6b3ed85b33f2c4a15c12b41b4e3d42247ecc8ce4981e9308bb
// module: 85320 range:12048902..12049233
// basis: webpack-id confidence: C
// method: split
// run: ext-p0 2026-11-05T10:07:22.069Z
85320: (e, t, r) => {
    "use strict";
    Object.defineProperty(t, "__esModule", { value: true }), t.throttleTime = void 0;
    const n = r(2665), s = r(28733), o = r(80444);
    t.throttleTime = function(e2, t2 = n.asyncScheduler, r2) {
      const i = (0, o.timer)(e2, t2);
      return (0, s.throttle)(() => i, r2);
    };
  }
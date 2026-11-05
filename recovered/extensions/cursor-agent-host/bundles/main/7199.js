// @recovered-by cursor-re
// artifact: app/extensions/cursor-agent-host/dist/main.js sha256:9d478dff35f72f6b3ed85b33f2c4a15c12b41b4e3d42247ecc8ce4981e9308bb
// module: 7199 range:3199683..3199977
// basis: webpack-id confidence: C
// method: split
// run: ext-p0 2026-11-05T10:07:22.069Z
7199: (e, t, r) => {
    "use strict";
    Object.defineProperty(t, "__esModule", { value: true }), t.auditTime = void 0;
    const n = r(2665), s = r(72698), o = r(80444);
    t.auditTime = function(e2, t2 = n.asyncScheduler) {
      return (0, s.audit)(() => (0, o.timer)(e2, t2));
    };
  }
// @recovered-by cursor-re
// artifact: app/extensions/cursor-local-agent-runtime/dist/main.js sha256:be87ea0ed3ac86375ab8e5f92c4261df0ccfc61ff24b07420f9c88a78ae2cfd0
// module: 7199 range:62974..63268
// basis: webpack-id confidence: C
// method: split
// run: ext-p0 2026-11-05T10:07:22.069Z
7199: (e, t, r) => {
    "use strict";
    Object.defineProperty(t, "__esModule", { value: true }), t.auditTime = void 0;
    const n = r(2665), o = r(72698), s = r(80444);
    t.auditTime = function(e2, t2 = n.asyncScheduler) {
      return (0, o.audit)(() => (0, s.timer)(e2, t2));
    };
  }
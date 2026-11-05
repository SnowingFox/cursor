// @recovered-by cursor-re
// artifact: app/extensions/cursor-local-agent-runtime/dist/main.js sha256:be87ea0ed3ac86375ab8e5f92c4261df0ccfc61ff24b07420f9c88a78ae2cfd0
// module: 14952 range:499164..499451
// basis: webpack-id confidence: C
// method: split
// run: ext-p0 2026-11-05T10:07:22.069Z
14952: (e, t, r) => {
    "use strict";
    Object.defineProperty(t, "__esModule", { value: true }), t.interval = void 0;
    const n = r(2665), o = r(80444);
    t.interval = function(e2 = 0, t2 = n.asyncScheduler) {
      return e2 < 0 && (e2 = 0), (0, o.timer)(e2, e2, t2);
    };
  }
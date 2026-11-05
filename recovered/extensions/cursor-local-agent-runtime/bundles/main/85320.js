// @recovered-by cursor-re
// artifact: app/extensions/cursor-local-agent-runtime/dist/main.js sha256:be87ea0ed3ac86375ab8e5f92c4261df0ccfc61ff24b07420f9c88a78ae2cfd0
// module: 85320 range:7505258..7505589
// basis: webpack-id confidence: C
// method: split
// run: ext-p0 2026-11-05T10:07:22.069Z
85320: (e, t, r) => {
    "use strict";
    Object.defineProperty(t, "__esModule", { value: true }), t.throttleTime = void 0;
    const n = r(2665), o = r(28733), s = r(80444);
    t.throttleTime = function(e2, t2 = n.asyncScheduler, r2) {
      const i = (0, s.timer)(e2, t2);
      return (0, o.throttle)(() => i, r2);
    };
  }
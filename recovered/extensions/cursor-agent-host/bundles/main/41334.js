// @recovered-by cursor-re
// artifact: app/extensions/cursor-agent-host/dist/main.js sha256:9d478dff35f72f6b3ed85b33f2c4a15c12b41b4e3d42247ecc8ce4981e9308bb
// module: 41334 range:7661648..7661943
// basis: webpack-id confidence: C
// method: split
// run: ext-p0 2026-11-05T10:07:22.069Z
41334: (e, t, r) => {
    "use strict";
    Object.defineProperty(t, "__esModule", { value: true }), t.sampleTime = void 0;
    const n = r(2665), s = r(22227), o = r(14952);
    t.sampleTime = function(e2, t2 = n.asyncScheduler) {
      return (0, s.sample)((0, o.interval)(e2, t2));
    };
  }
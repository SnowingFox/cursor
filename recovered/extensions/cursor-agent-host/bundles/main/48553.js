// @recovered-by cursor-re
// artifact: app/extensions/cursor-agent-host/dist/main.js sha256:9d478dff35f72f6b3ed85b33f2c4a15c12b41b4e3d42247ecc8ce4981e9308bb
// module: 48553 range:8102063..8102537
// basis: webpack-id confidence: C
// method: split
// run: ext-p0 2026-11-05T10:07:22.069Z
48553: (e, t, r) => {
    "use strict";
    Object.defineProperty(t, "__esModule", { value: true }), t.scheduleArray = void 0;
    const n = r(51078), s = r(55830);
    t.scheduleArray = function(e2, t2) {
      return new n.Observable((r2) => {
        let n2 = 0;
        const o = () => {
          n2 === e2.length ? r2.complete() : (r2.next(e2[n2++]), (0, s.executeSchedule)(r2, t2, o));
        };
        return (0, s.executeSchedule)(r2, t2, o);
      });
    };
  }
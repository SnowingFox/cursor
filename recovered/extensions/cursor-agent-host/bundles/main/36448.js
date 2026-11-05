// @recovered-by cursor-re
// artifact: app/extensions/cursor-agent-host/dist/main.js sha256:9d478dff35f72f6b3ed85b33f2c4a15c12b41b4e3d42247ecc8ce4981e9308bb
// module: 36448 range:7310228..7310762
// basis: webpack-id confidence: C
// method: split
// run: ext-p0 2026-11-05T10:07:22.069Z
36448: (e, t, r) => {
    "use strict";
    Object.defineProperty(t, "__esModule", { value: true }), t.observeOn = void 0;
    const n = r(55830), s = r(51078);
    t.observeOn = function(e2, t2 = 0) {
      return (r2) => new s.Observable((o) => {
        r2.subscribe((0, s.operate)({ destination: o, next: (r3) => (0, n.executeSchedule)(o, e2, () => o.next(r3), t2), error: (r3) => (0, n.executeSchedule)(o, e2, () => o.error(r3), t2), complete: () => (0, n.executeSchedule)(o, e2, () => o.complete(), t2) }));
      });
    };
  }
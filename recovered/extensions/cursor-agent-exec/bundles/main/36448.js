// @recovered-by cursor-re
// artifact: app/extensions/cursor-agent-exec/dist/main.js sha256:8d20326bd54948353115113c2d4716cf781d593610fd4d8acebcc37a3170da8e
// module: 36448 range:2956710..2957244
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
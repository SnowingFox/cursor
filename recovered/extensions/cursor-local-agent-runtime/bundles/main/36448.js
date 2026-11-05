// @recovered-by cursor-re
// artifact: app/extensions/cursor-local-agent-runtime/dist/main.js sha256:be87ea0ed3ac86375ab8e5f92c4261df0ccfc61ff24b07420f9c88a78ae2cfd0
// module: 36448 range:1062678..1063212
// basis: webpack-id confidence: C
// method: split
// run: ext-p0 2026-11-05T10:07:22.069Z
36448: (e, t, r) => {
    "use strict";
    Object.defineProperty(t, "__esModule", { value: true }), t.observeOn = void 0;
    const n = r(55830), o = r(51078);
    t.observeOn = function(e2, t2 = 0) {
      return (r2) => new o.Observable((s) => {
        r2.subscribe((0, o.operate)({ destination: s, next: (r3) => (0, n.executeSchedule)(s, e2, () => s.next(r3), t2), error: (r3) => (0, n.executeSchedule)(s, e2, () => s.error(r3), t2), complete: () => (0, n.executeSchedule)(s, e2, () => s.complete(), t2) }));
      });
    };
  }
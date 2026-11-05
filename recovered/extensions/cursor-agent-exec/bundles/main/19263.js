// @recovered-by cursor-re
// artifact: app/extensions/cursor-agent-exec/dist/main.js sha256:8d20326bd54948353115113c2d4716cf781d593610fd4d8acebcc37a3170da8e
// module: 19263 range:993280..993994
// basis: webpack-id confidence: C
// method: split
// run: ext-p0 2026-11-05T10:07:22.069Z
19263: (e, t, r) => {
    "use strict";
    Object.defineProperty(t, "__esModule", { value: true }), t.debounceTime = void 0;
    const n = r(2665), s = r(51078), o = r(55830);
    t.debounceTime = function(e2, t2 = n.asyncScheduler) {
      return (r2) => new s.Observable((n2) => {
        let i, a;
        r2.subscribe((0, s.operate)({ destination: n2, next: (r3) => {
          i = r3, a?.unsubscribe(), a = (0, o.executeSchedule)(n2, t2, () => {
            a = void 0;
            const e3 = i;
            i = null, n2.next(e3);
          }, e2);
        }, complete: () => {
          a && n2.next(i), n2.complete();
        }, finalize: () => {
          i = a = null;
        } }));
      });
    };
  }
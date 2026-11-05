// @recovered-by cursor-re
// artifact: app/extensions/cursor-agent-host/dist/main.js sha256:9d478dff35f72f6b3ed85b33f2c4a15c12b41b4e3d42247ecc8ce4981e9308bb
// module: 19263 range:4369102..4369816
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
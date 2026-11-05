// @recovered-by cursor-re
// artifact: app/extensions/cursor-local-agent-runtime/dist/main.js sha256:be87ea0ed3ac86375ab8e5f92c4261df0ccfc61ff24b07420f9c88a78ae2cfd0
// module: 19263 range:582266..582980
// basis: webpack-id confidence: C
// method: split
// run: ext-p0 2026-11-05T10:07:22.069Z
19263: (e, t, r) => {
    "use strict";
    Object.defineProperty(t, "__esModule", { value: true }), t.debounceTime = void 0;
    const n = r(2665), o = r(51078), s = r(55830);
    t.debounceTime = function(e2, t2 = n.asyncScheduler) {
      return (r2) => new o.Observable((n2) => {
        let i, a;
        r2.subscribe((0, o.operate)({ destination: n2, next: (r3) => {
          i = r3, a?.unsubscribe(), a = (0, s.executeSchedule)(n2, t2, () => {
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
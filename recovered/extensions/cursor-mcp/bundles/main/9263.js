// @recovered-by cursor-re
// artifact: app/extensions/cursor-mcp/dist/main.js sha256:097aeef3cf1f927e9bc6c0d23972c432bbcae8dc0ea353a5b6308dd59620fb49
// module: 9263 range:883425..884164
// basis: webpack-id confidence: C
// method: split
// run: ext-p0 2026-11-05T10:07:22.069Z
9263: (e2, t2, r2) => {
    "use strict";
    Object.defineProperty(t2, "__esModule", { value: true }), t2.debounceTime = void 0;
    const n2 = r2(2665), o2 = r2(1078), s2 = r2(5830);
    t2.debounceTime = function(e3, t3 = n2.asyncScheduler) {
      return (r3) => new o2.Observable((n3) => {
        let i2, a2;
        r3.subscribe((0, o2.operate)({ destination: n3, next: (r4) => {
          i2 = r4, a2?.unsubscribe(), a2 = (0, s2.executeSchedule)(n3, t3, () => {
            a2 = void 0;
            const e4 = i2;
            i2 = null, n3.next(e4);
          }, e3);
        }, complete: () => {
          a2 && n3.next(i2), n3.complete();
        }, finalize: () => {
          i2 = a2 = null;
        } }));
      });
    };
  }
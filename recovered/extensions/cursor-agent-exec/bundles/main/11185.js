// @recovered-by cursor-re
// artifact: app/extensions/cursor-agent-exec/dist/main.js sha256:8d20326bd54948353115113c2d4716cf781d593610fd4d8acebcc37a3170da8e
// module: 11185 range:727188..727660
// basis: webpack-id confidence: C
// method: split
// run: ext-p0 2026-11-05T10:07:22.069Z
11185: (e, t, r) => {
    "use strict";
    Object.defineProperty(t, "__esModule", { value: true }), t.takeWhile = void 0;
    const n = r(51078);
    t.takeWhile = function(e2, t2 = false) {
      return (r2) => new n.Observable((s) => {
        let o = 0;
        const i = (0, n.operate)({ destination: s, next: (r3) => {
          e2(r3, o++) ? s.next(r3) : (i.unsubscribe(), t2 && s.next(r3), s.complete());
        } });
        r2.subscribe(i);
      });
    };
  }
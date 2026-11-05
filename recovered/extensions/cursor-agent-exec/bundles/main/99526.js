// @recovered-by cursor-re
// artifact: app/extensions/cursor-agent-exec/dist/main.js sha256:8d20326bd54948353115113c2d4716cf781d593610fd4d8acebcc37a3170da8e
// module: 99526 range:11756026..11756509
// basis: webpack-id confidence: C
// method: split
// run: ext-p0 2026-11-05T10:07:22.069Z
99526: (e, t, r) => {
    "use strict";
    Object.defineProperty(t, "__esModule", { value: true }), t.every = void 0;
    const n = r(51078);
    t.every = function(e2, t2) {
      return (r2) => new n.Observable((s) => {
        let o = 0;
        r2.subscribe((0, n.operate)({ destination: s, next: (n2) => {
          e2.call(t2, n2, o++, r2) || (s.next(false), s.complete());
        }, complete: () => {
          s.next(true), s.complete();
        } }));
      });
    };
  }
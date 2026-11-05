// @recovered-by cursor-re
// artifact: app/extensions/cursor-agent-exec/dist/main.js sha256:8d20326bd54948353115113c2d4716cf781d593610fd4d8acebcc37a3170da8e
// module: 59084 range:4687254..4687690
// basis: webpack-id confidence: C
// method: split
// run: ext-p0 2026-11-05T10:07:22.069Z
59084: (e, t, r) => {
    "use strict";
    Object.defineProperty(t, "__esModule", { value: true }), t.isEmpty = void 0;
    const n = r(51078);
    t.isEmpty = function() {
      return (e2) => new n.Observable((t2) => {
        e2.subscribe((0, n.operate)({ destination: t2, next: () => {
          t2.next(false), t2.complete();
        }, complete: () => {
          t2.next(true), t2.complete();
        } }));
      });
    };
  }
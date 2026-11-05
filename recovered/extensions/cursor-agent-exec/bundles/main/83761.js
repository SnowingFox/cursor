// @recovered-by cursor-re
// artifact: app/extensions/cursor-agent-exec/dist/main.js sha256:8d20326bd54948353115113c2d4716cf781d593610fd4d8acebcc37a3170da8e
// module: 83761 range:10931071..10931448
// basis: webpack-id confidence: C
// method: split
// run: ext-p0 2026-11-05T10:07:22.069Z
83761: (e, t, r) => {
    "use strict";
    Object.defineProperty(t, "__esModule", { value: true }), t.dematerialize = void 0;
    const n = r(98216), s = r(51078);
    t.dematerialize = function() {
      return (e2) => new s.Observable((t2) => {
        e2.subscribe((0, s.operate)({ destination: t2, next: (e3) => (0, n.observeNotification)(e3, t2) }));
      });
    };
  }
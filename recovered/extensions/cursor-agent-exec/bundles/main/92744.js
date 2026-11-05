// @recovered-by cursor-re
// artifact: app/extensions/cursor-agent-exec/dist/main.js sha256:8d20326bd54948353115113c2d4716cf781d593610fd4d8acebcc37a3170da8e
// module: 92744 range:11246307..11246871
// basis: webpack-id confidence: C
// method: split
// run: ext-p0 2026-11-05T10:07:22.069Z
92744: (e, t, r) => {
    "use strict";
    Object.defineProperty(t, "__esModule", { value: true }), t.materialize = void 0;
    const n = r(51078);
    t.materialize = function() {
      return (e2) => new n.Observable((t2) => {
        e2.subscribe((0, n.operate)({ destination: t2, next: (e3) => {
          t2.next((0, n.nextNotification)(e3));
        }, error: (e3) => {
          t2.next((0, n.errorNotification)(e3)), t2.complete();
        }, complete: () => {
          t2.next(n.COMPLETE_NOTIFICATION), t2.complete();
        } }));
      });
    };
  }
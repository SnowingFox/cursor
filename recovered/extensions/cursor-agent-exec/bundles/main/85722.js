// @recovered-by cursor-re
// artifact: app/extensions/cursor-agent-exec/dist/main.js sha256:8d20326bd54948353115113c2d4716cf781d593610fd4d8acebcc37a3170da8e
// module: 85722 range:10938108..10938937
// basis: webpack-id confidence: C
// method: split
// run: ext-p0 2026-11-05T10:07:22.069Z
85722: (e, t, r) => {
    "use strict";
    Object.defineProperty(t, "__esModule", { value: true }), t.debounce = void 0;
    const n = r(51078), s = r(64462);
    t.debounce = function(e2) {
      return (t2) => new n.Observable((r2) => {
        let o = false, i = null, a = null;
        const c = () => {
          if (a?.unsubscribe(), a = null, o) {
            o = false;
            const e3 = i;
            i = null, r2.next(e3);
          }
        };
        t2.subscribe((0, n.operate)({ destination: r2, next: (t3) => {
          a?.unsubscribe(), o = true, i = t3, a = (0, n.operate)({ destination: r2, next: c, complete: s.noop }), (0, n.from)(e2(t3)).subscribe(a);
        }, complete: () => {
          c(), r2.complete();
        }, finalize: () => {
          i = a = null;
        } }));
      });
    };
  }
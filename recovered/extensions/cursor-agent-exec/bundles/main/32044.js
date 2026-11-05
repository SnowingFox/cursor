// @recovered-by cursor-re
// artifact: app/extensions/cursor-agent-exec/dist/main.js sha256:8d20326bd54948353115113c2d4716cf781d593610fd4d8acebcc37a3170da8e
// module: 32044 range:2904422..2905168
// basis: webpack-id confidence: C
// method: split
// run: ext-p0 2026-11-05T10:07:22.069Z
32044: (e, t, r) => {
    "use strict";
    Object.defineProperty(t, "__esModule", { value: true }), t.tap = void 0;
    const n = r(51078), s = r(44896);
    t.tap = function(e2) {
      const t2 = (0, n.isFunction)(e2) ? { next: e2 } : e2;
      return t2 ? (e3) => new n.Observable((r2) => {
        t2.subscribe?.();
        let s2 = true;
        e3.subscribe((0, n.operate)({ destination: r2, next: (e4) => {
          t2.next?.(e4), r2.next(e4);
        }, error: (e4) => {
          s2 = false, t2.error?.(e4), r2.error(e4);
        }, complete: () => {
          s2 = false, t2.complete?.(), r2.complete();
        }, finalize: () => {
          s2 && t2.unsubscribe?.(), t2.finalize?.();
        } }));
      }) : s.identity;
    };
  }
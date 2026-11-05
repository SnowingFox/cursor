// @recovered-by cursor-re
// artifact: app/extensions/cursor-mcp/dist/main.js sha256:097aeef3cf1f927e9bc6c0d23972c432bbcae8dc0ea353a5b6308dd59620fb49
// module: 2044 range:195760..196517
// basis: webpack-id confidence: C
// method: split
// run: ext-p0 2026-11-05T10:07:22.069Z
2044: (e2, t2, r2) => {
    "use strict";
    Object.defineProperty(t2, "__esModule", { value: true }), t2.tap = void 0;
    const n2 = r2(1078), o2 = r2(4896);
    t2.tap = function(e3) {
      const t3 = (0, n2.isFunction)(e3) ? { next: e3 } : e3;
      return t3 ? (e4) => new n2.Observable((r3) => {
        t3.subscribe?.();
        let o3 = true;
        e4.subscribe((0, n2.operate)({ destination: r3, next: (e5) => {
          t3.next?.(e5), r3.next(e5);
        }, error: (e5) => {
          o3 = false, t3.error?.(e5), r3.error(e5);
        }, complete: () => {
          o3 = false, t3.complete?.(), r3.complete();
        }, finalize: () => {
          o3 && t3.unsubscribe?.(), t3.finalize?.();
        } }));
      }) : o2.identity;
    };
  }
// @recovered-by cursor-re
// artifact: app/extensions/cursor-mcp/dist/main.js sha256:097aeef3cf1f927e9bc6c0d23972c432bbcae8dc0ea353a5b6308dd59620fb49
// module: 707 range:49148..49816
// basis: webpack-id confidence: C
// method: split
// run: ext-p0 2026-11-05T10:07:22.069Z
707: (e2, t2, r2) => {
    "use strict";
    Object.defineProperty(t2, "__esModule", { value: true }), t2.retryWhen = void 0;
    const n2 = r2(1078), o2 = r2(3043);
    t2.retryWhen = function(e3) {
      return (t3) => new n2.Observable((r3) => {
        let s2, i2, a2 = false;
        const c = () => {
          s2 = t3.subscribe((0, n2.operate)({ destination: r3, error: (t4) => {
            i2 || (i2 = new o2.Subject(), (0, n2.from)(e3(i2)).subscribe((0, n2.operate)({ destination: r3, next: () => s2 ? c() : a2 = true }))), i2 && i2.next(t4);
          } })), a2 && (s2.unsubscribe(), s2 = null, a2 = false, c());
        };
        c();
      });
    };
  }
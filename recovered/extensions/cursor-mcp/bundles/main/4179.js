// @recovered-by cursor-re
// artifact: app/extensions/cursor-mcp/dist/main.js sha256:097aeef3cf1f927e9bc6c0d23972c432bbcae8dc0ea353a5b6308dd59620fb49
// module: 4179 range:302308..302933
// basis: webpack-id confidence: C
// method: split
// run: ext-p0 2026-11-05T10:07:22.069Z
4179: (e2, t2, r2) => {
    "use strict";
    Object.defineProperty(t2, "__esModule", { value: true }), t2.first = void 0;
    const n2 = r2(1078), o2 = r2(231);
    t2.first = function(e3, t3) {
      const r3 = arguments.length >= 2;
      return (s2) => new n2.Observable((i2) => {
        let a2 = 0;
        const c = (0, n2.operate)({ destination: i2, next: (t4) => {
          (!e3 || e3(t4, a2++, s2)) && (c.unsubscribe(), i2.next(t4), i2.complete());
        }, complete: () => {
          r3 ? (i2.next(t3), i2.complete()) : i2.error(new o2.EmptyError());
        } });
        s2.subscribe(c);
      });
    };
  }
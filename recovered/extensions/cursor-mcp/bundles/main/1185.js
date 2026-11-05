// @recovered-by cursor-re
// artifact: app/extensions/cursor-mcp/dist/main.js sha256:097aeef3cf1f927e9bc6c0d23972c432bbcae8dc0ea353a5b6308dd59620fb49
// module: 1185 range:130603..131093
// basis: webpack-id confidence: C
// method: split
// run: ext-p0 2026-11-05T10:07:22.069Z
1185: (e2, t2, r2) => {
    "use strict";
    Object.defineProperty(t2, "__esModule", { value: true }), t2.takeWhile = void 0;
    const n2 = r2(1078);
    t2.takeWhile = function(e3, t3 = false) {
      return (r3) => new n2.Observable((o2) => {
        let s2 = 0;
        const i2 = (0, n2.operate)({ destination: o2, next: (r4) => {
          e3(r4, s2++) ? o2.next(r4) : (i2.unsubscribe(), t3 && o2.next(r4), o2.complete());
        } });
        r3.subscribe(i2);
      });
    };
  }
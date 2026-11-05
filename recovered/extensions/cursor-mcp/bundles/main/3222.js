// @recovered-by cursor-re
// artifact: app/extensions/cursor-mcp/dist/main.js sha256:097aeef3cf1f927e9bc6c0d23972c432bbcae8dc0ea353a5b6308dd59620fb49
// module: 3222 range:247271..247831
// basis: webpack-id confidence: C
// method: split
// run: ext-p0 2026-11-05T10:07:22.069Z
3222: (e2, t2, r2) => {
    "use strict";
    Object.defineProperty(t2, "__esModule", { value: true }), t2.catchError = void 0;
    const n2 = r2(1078);
    t2.catchError = function e3(t3) {
      return (r3) => new n2.Observable((o2) => {
        let s2, i2 = null, a2 = false;
        i2 = r3.subscribe((0, n2.operate)({ destination: o2, error: (c) => {
          s2 = (0, n2.from)(t3(c, e3(t3)(r3))), i2 ? (i2.unsubscribe(), i2 = null, s2.subscribe(o2)) : a2 = true;
        } })), a2 && (i2.unsubscribe(), i2 = null, s2.subscribe(o2));
      });
    };
  }
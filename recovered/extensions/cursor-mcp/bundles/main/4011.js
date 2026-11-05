// @recovered-by cursor-re
// artifact: app/extensions/cursor-mcp/dist/main.js sha256:097aeef3cf1f927e9bc6c0d23972c432bbcae8dc0ea353a5b6308dd59620fb49
// module: 4011 range:300586..301070
// basis: webpack-id confidence: C
// method: split
// run: ext-p0 2026-11-05T10:07:22.069Z
4011: (e2, t2, r2) => {
    "use strict";
    Object.defineProperty(t2, "__esModule", { value: true }), t2.fromEventPattern = void 0;
    const n2 = r2(1078), o2 = r2(5683);
    t2.fromEventPattern = function e3(t3, r3, s2) {
      return s2 ? (0, o2.mapOneOrManyArgs)(s2)(e3(t3, r3)) : new n2.Observable((e4) => {
        const o3 = (...t4) => e4.next(1 === t4.length ? t4[0] : t4), s3 = t3(o3);
        return (0, n2.isFunction)(r3) ? () => r3(o3, s3) : void 0;
      });
    };
  }
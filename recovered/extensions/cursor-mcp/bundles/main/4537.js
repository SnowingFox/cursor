// @recovered-by cursor-re
// artifact: app/extensions/cursor-mcp/dist/main.js sha256:097aeef3cf1f927e9bc6c0d23972c432bbcae8dc0ea353a5b6308dd59620fb49
// module: 4537 range:314790..316259
// basis: webpack-id confidence: C
// method: split
// run: ext-p0 2026-11-05T10:07:22.069Z
4537: (e2, t2, r2) => {
    "use strict";
    Object.defineProperty(t2, "__esModule", { value: true }), t2.fromEvent = void 0;
    const n2 = r2(1078), o2 = r2(5683), s2 = ["addListener", "removeListener"], i2 = ["addEventListener", "removeEventListener"], a2 = ["on", "off"];
    function c(e3, t3, r3, n3, o3) {
      const [c2, p] = d(f = r3) ? i2 : u(f) ? s2 : l(f) ? a2 : [];
      var f;
      if (!c2 || !p) throw new TypeError("Invalid event target");
      r3[c2](n3, e3, o3), t3.add(() => r3[p](n3, e3, o3));
    }
    function u(e3) {
      return (0, n2.isFunction)(e3.addListener) && (0, n2.isFunction)(e3.removeListener);
    }
    function l(e3) {
      return (0, n2.isFunction)(e3.on) && (0, n2.isFunction)(e3.off);
    }
    function d(e3) {
      return (0, n2.isFunction)(e3.addEventListener) && (0, n2.isFunction)(e3.removeEventListener);
    }
    t2.fromEvent = function e3(t3, r3, s3, i3) {
      if ((0, n2.isFunction)(s3) && (i3 = s3, s3 = void 0), i3) return (0, o2.mapOneOrManyArgs)(i3)(e3(t3, r3, s3));
      const a3 = u(t3) || l(t3) || d(t3);
      if (!a3 && !(0, n2.isArrayLike)(t3)) throw new TypeError("Invalid event target");
      return new n2.Observable((e4) => {
        const n3 = (...t4) => e4.next(1 < t4.length ? t4 : t4[0]);
        if (a3) c(n3, e4, t3, r3, s3);
        else for (let o3 = 0; o3 < t3.length && !e4.closed; o3++) {
          const i4 = t3[o3];
          c(n3, e4, i4, r3, s3);
        }
      });
    };
  }
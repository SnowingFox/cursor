// @recovered-by cursor-re
// artifact: app/extensions/cursor-mcp/dist/main.js sha256:097aeef3cf1f927e9bc6c0d23972c432bbcae8dc0ea353a5b6308dd59620fb49
// module: 1343 range:163569..164780
// basis: webpack-id confidence: C
// method: split
// run: ext-p0 2026-11-05T10:07:22.069Z
1343: (e2, t2, r2) => {
    "use strict";
    Object.defineProperty(t2, "__esModule", { value: true }), t2.bindCallbackInternals = void 0;
    const n2 = r2(2901), o2 = r2(1078), s2 = r2(5683), i2 = r2(6895), a2 = r2(9880);
    t2.bindCallbackInternals = function e3(t3, r3, c, u) {
      if (c) {
        if (!(0, n2.isScheduler)(c)) return function(...n3) {
          return (0, s2.mapOneOrManyArgs)(c)(e3(t3, r3, u).apply(this, n3));
        };
        u = c;
      }
      return u ? function(...n3) {
        return (0, a2.scheduled)(e3(t3, r3).apply(this, n3), u);
      } : function(...e4) {
        const n3 = new i2.AsyncSubject();
        let s3 = true;
        return new o2.Observable((o3) => {
          const i3 = n3.subscribe(o3);
          if (s3) {
            s3 = false;
            let o4 = false, i4 = false;
            r3.apply(this, [...e4, (...e5) => {
              if (t3) {
                const t4 = e5.shift();
                if (null != t4) return void n3.error(t4);
              }
              n3.next(1 < e5.length ? e5 : e5[0]), i4 = true, o4 && n3.complete();
            }]), i4 && n3.complete(), o4 = true;
          }
          return i3;
        });
      };
    };
  }
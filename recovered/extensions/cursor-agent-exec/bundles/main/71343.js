// @recovered-by cursor-re
// artifact: app/extensions/cursor-agent-exec/dist/main.js sha256:8d20326bd54948353115113c2d4716cf781d593610fd4d8acebcc37a3170da8e
// module: 71343 range:6338057..6339253
// basis: webpack-id confidence: C
// method: split
// run: ext-p0 2026-11-05T10:07:22.069Z
71343: (e, t, r) => {
    "use strict";
    Object.defineProperty(t, "__esModule", { value: true }), t.bindCallbackInternals = void 0;
    const n = r(82901), s = r(51078), o = r(65683), i = r(76895), a = r(69880);
    t.bindCallbackInternals = function e2(t2, r2, c, l) {
      if (c) {
        if (!(0, n.isScheduler)(c)) return function(...n2) {
          return (0, o.mapOneOrManyArgs)(c)(e2(t2, r2, l).apply(this, n2));
        };
        l = c;
      }
      return l ? function(...n2) {
        return (0, a.scheduled)(e2(t2, r2).apply(this, n2), l);
      } : function(...e3) {
        const n2 = new i.AsyncSubject();
        let o2 = true;
        return new s.Observable((s2) => {
          const i2 = n2.subscribe(s2);
          if (o2) {
            o2 = false;
            let s3 = false, i3 = false;
            r2.apply(this, [...e3, (...e4) => {
              if (t2) {
                const t3 = e4.shift();
                if (null != t3) return void n2.error(t3);
              }
              n2.next(1 < e4.length ? e4 : e4[0]), i3 = true, s3 && n2.complete();
            }]), i3 && n2.complete(), s3 = true;
          }
          return i2;
        });
      };
    };
  }
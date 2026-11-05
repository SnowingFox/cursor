// @recovered-by cursor-re
// artifact: app/extensions/cursor-local-agent-runtime/dist/main.js sha256:be87ea0ed3ac86375ab8e5f92c4261df0ccfc61ff24b07420f9c88a78ae2cfd0
// module: 71343 range:2288489..2289685
// basis: webpack-id confidence: C
// method: split
// run: ext-p0 2026-11-05T10:07:22.069Z
71343: (e, t, r) => {
    "use strict";
    Object.defineProperty(t, "__esModule", { value: true }), t.bindCallbackInternals = void 0;
    const n = r(82901), o = r(51078), s = r(65683), i = r(76895), a = r(69880);
    t.bindCallbackInternals = function e2(t2, r2, l, c) {
      if (l) {
        if (!(0, n.isScheduler)(l)) return function(...n2) {
          return (0, s.mapOneOrManyArgs)(l)(e2(t2, r2, c).apply(this, n2));
        };
        c = l;
      }
      return c ? function(...n2) {
        return (0, a.scheduled)(e2(t2, r2).apply(this, n2), c);
      } : function(...e3) {
        const n2 = new i.AsyncSubject();
        let s2 = true;
        return new o.Observable((o2) => {
          const i2 = n2.subscribe(o2);
          if (s2) {
            s2 = false;
            let o3 = false, i3 = false;
            r2.apply(this, [...e3, (...e4) => {
              if (t2) {
                const t3 = e4.shift();
                if (null != t3) return void n2.error(t3);
              }
              n2.next(1 < e4.length ? e4 : e4[0]), i3 = true, o3 && n2.complete();
            }]), i3 && n2.complete(), o3 = true;
          }
          return i2;
        });
      };
    };
  }
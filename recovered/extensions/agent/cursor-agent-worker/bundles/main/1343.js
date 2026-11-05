// @recovered-by cursor-re
// artifact: app/extensions/cursor-agent-worker/dist/main.js sha256:d5af94b4e40f694b81a675a0fb00fa8d060306ca064a011e953218d005b613d5
// module: 1343 range:73058..74336
// basis: webpack-id confidence: C
// method: split
// run: ext-agent 2026-11-05T10:20:08.356Z
1343: (e10, a10, n10) => {
    Object.defineProperty(a10, "__esModule", { value: true }), a10.bindCallbackInternals = void 0;
    const s10 = n10(2901), o10 = n10(1078), r10 = n10(5683), t10 = n10(6895), i10 = n10(9880);
    a10.bindCallbackInternals = function e11(a11, n11, m10, l10) {
      if (m10) {
        if (!(0, s10.isScheduler)(m10)) return function(...s11) {
          return (0, r10.mapOneOrManyArgs)(m10)(e11(a11, n11, l10).apply(this, s11));
        };
        l10 = m10;
      }
      return l10 ? function(...s11) {
        return (0, i10.scheduled)(e11(a11, n11).apply(this, s11), l10);
      } : function(...e12) {
        const s11 = new t10.AsyncSubject();
        let r11 = true;
        return new o10.Observable((o11) => {
          const t11 = s11.subscribe(o11);
          if (r11) {
            r11 = false;
            let o12 = false, t12 = false;
            n11.apply(this, [...e12, (...e13) => {
              if (a11) {
                const a12 = e13.shift();
                if (null != a12) return void s11.error(a12);
              }
              s11.next(1 < e13.length ? e13 : e13[0]), t12 = true, o12 && s11.complete();
            }]), t12 && s11.complete(), o12 = true;
          }
          return t11;
        });
      };
    };
  }
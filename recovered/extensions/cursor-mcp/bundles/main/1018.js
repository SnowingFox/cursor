// @recovered-by cursor-re
// artifact: app/extensions/cursor-mcp/dist/main.js sha256:097aeef3cf1f927e9bc6c0d23972c432bbcae8dc0ea353a5b6308dd59620fb49
// module: 1018 range:72588..73609
// basis: webpack-id confidence: C
// method: split
// run: ext-p0 2026-11-05T10:07:22.069Z
1018: (e2, t2, r2) => {
    "use strict";
    Object.defineProperty(t2, "__esModule", { value: true }), t2.repeat = void 0;
    const n2 = r2(1078), o2 = r2(744), s2 = r2(444);
    t2.repeat = function(e3) {
      let t3, r3 = 1 / 0;
      return null != e3 && ("object" == typeof e3 ? { count: r3 = 1 / 0, delay: t3 } = e3 : r3 = e3), r3 <= 0 ? () => o2.EMPTY : (e4) => new n2.Observable((o3) => {
        let i2, a2 = 0;
        const c = () => {
          if (i2?.unsubscribe(), i2 = null, null != t3) {
            const e5 = "number" == typeof t3 ? (0, s2.timer)(t3) : (0, n2.from)(t3(a2)), r4 = (0, n2.operate)({ destination: o3, next: () => {
              r4.unsubscribe(), u();
            } });
            e5.subscribe(r4);
          } else u();
        }, u = () => {
          let t4 = false;
          i2 = e4.subscribe((0, n2.operate)({ destination: o3, complete: () => {
            ++a2 < r3 ? i2 ? c() : t4 = true : o3.complete();
          } })), t4 && c();
        };
        u();
      });
    };
  }
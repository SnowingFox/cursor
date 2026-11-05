// @recovered-by cursor-re
// artifact: app/extensions/cursor-mcp/dist/main.js sha256:097aeef3cf1f927e9bc6c0d23972c432bbcae8dc0ea353a5b6308dd59620fb49
// module: 283 range:23095..24417
// basis: webpack-id confidence: C
// method: split
// run: ext-p0 2026-11-05T10:07:22.069Z
283: (e2, t2, r2) => {
    "use strict";
    Object.defineProperty(t2, "__esModule", { value: true }), t2.retry = void 0;
    const n2 = r2(1078), o2 = r2(4896), s2 = r2(444);
    t2.retry = function(e3 = 1 / 0) {
      let t3;
      t3 = e3 && "object" == typeof e3 ? e3 : { count: e3 };
      const { count: r3 = 1 / 0, delay: i2, resetOnSuccess: a2 = false } = t3;
      return r3 <= 0 ? o2.identity : (e4) => new n2.Observable((t4) => {
        let o3, c = 0;
        const u = () => {
          let l = false;
          o3 = e4.subscribe((0, n2.operate)({ destination: t4, next: (e5) => {
            a2 && (c = 0), t4.next(e5);
          }, error: (e5) => {
            if (c++ < r3) {
              const r4 = () => {
                o3 ? (o3.unsubscribe(), o3 = null, u()) : l = true;
              };
              if (null != i2) {
                const o4 = "number" == typeof i2 ? (0, s2.timer)(i2) : (0, n2.from)(i2(e5, c)), a3 = (0, n2.operate)({ destination: t4, next: () => {
                  a3.unsubscribe(), r4();
                }, complete: () => {
                  t4.complete();
                } });
                o4.subscribe(a3);
              } else r4();
            } else t4.error(e5);
          } })), l && (o3.unsubscribe(), o3 = null, u());
        };
        u();
      });
    };
  }
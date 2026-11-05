// @recovered-by cursor-re
// artifact: app/extensions/cursor-agent-exec/dist/main.js sha256:8d20326bd54948353115113c2d4716cf781d593610fd4d8acebcc37a3170da8e
// module: 91018 range:11220241..11221240
// basis: webpack-id confidence: C
// method: split
// run: ext-p0 2026-11-05T10:07:22.069Z
91018: (e, t, r) => {
    "use strict";
    Object.defineProperty(t, "__esModule", { value: true }), t.repeat = void 0;
    const n = r(51078), s = r(744), o = r(80444);
    t.repeat = function(e2) {
      let t2, r2 = 1 / 0;
      return null != e2 && ("object" == typeof e2 ? { count: r2 = 1 / 0, delay: t2 } = e2 : r2 = e2), r2 <= 0 ? () => s.EMPTY : (e3) => new n.Observable((s2) => {
        let i, a = 0;
        const c = () => {
          if (i?.unsubscribe(), i = null, null != t2) {
            const e4 = "number" == typeof t2 ? (0, o.timer)(t2) : (0, n.from)(t2(a)), r3 = (0, n.operate)({ destination: s2, next: () => {
              r3.unsubscribe(), l();
            } });
            e4.subscribe(r3);
          } else l();
        }, l = () => {
          let t3 = false;
          i = e3.subscribe((0, n.operate)({ destination: s2, complete: () => {
            ++a < r2 ? i ? c() : t3 = true : s2.complete();
          } })), t3 && c();
        };
        l();
      });
    };
  }
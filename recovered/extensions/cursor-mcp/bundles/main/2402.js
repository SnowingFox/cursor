// @recovered-by cursor-re
// artifact: app/extensions/cursor-mcp/dist/main.js sha256:097aeef3cf1f927e9bc6c0d23972c432bbcae8dc0ea353a5b6308dd59620fb49
// module: 2402 range:202598..204068
// basis: webpack-id confidence: C
// method: split
// run: ext-p0 2026-11-05T10:07:22.069Z
2402: (e2, t2, r2) => {
    "use strict";
    Object.defineProperty(t2, "__esModule", { value: true }), t2.timeout = t2.TimeoutError = void 0;
    const n2 = r2(2665), o2 = r2(7842), s2 = r2(1078), i2 = r2(5830);
    class a2 extends Error {
      info;
      constructor(e3 = null) {
        super("Timeout has occurred"), this.info = e3, this.name = "TimeoutError";
      }
    }
    function c(e3) {
      throw new a2(e3);
    }
    t2.TimeoutError = a2, t2.timeout = function(e3, t3) {
      const { first: r3, each: a3, with: u = c, scheduler: l = t3 ?? n2.asyncScheduler, meta: d = null } = (0, o2.isValidDate)(e3) ? { first: e3 } : "number" == typeof e3 ? { each: e3 } : e3;
      if (null == r3 && null == a3) throw new TypeError("No timeout provided.");
      return (e4) => new s2.Observable((t4) => {
        let n3, o3, c2 = null, p = 0;
        const f = (e5) => {
          o3 = (0, i2.executeSchedule)(t4, l, () => {
            try {
              n3.unsubscribe(), (0, s2.from)(u({ meta: d, lastValue: c2, seen: p })).subscribe(t4);
            } catch (e6) {
              t4.error(e6);
            }
          }, e5);
        };
        n3 = e4.subscribe((0, s2.operate)({ destination: t4, next: (e5) => {
          o3?.unsubscribe(), p++, t4.next(c2 = e5), a3 > 0 && f(a3);
        }, finalize: () => {
          o3?.unsubscribe(), c2 = null;
        } })), !p && f(null != r3 ? "number" == typeof r3 ? r3 : +r3 - l.now() : a3);
      });
    };
  }
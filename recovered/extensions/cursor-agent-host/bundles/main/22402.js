// @recovered-by cursor-re
// artifact: app/extensions/cursor-agent-host/dist/main.js sha256:9d478dff35f72f6b3ed85b33f2c4a15c12b41b4e3d42247ecc8ce4981e9308bb
// module: 22402 range:4447863..4449312
// basis: webpack-id confidence: C
// method: split
// run: ext-p0 2026-11-05T10:07:22.069Z
22402: (e, t, r) => {
    "use strict";
    Object.defineProperty(t, "__esModule", { value: true }), t.timeout = t.TimeoutError = void 0;
    const n = r(2665), s = r(97842), o = r(51078), i = r(55830);
    class a extends Error {
      info;
      constructor(e2 = null) {
        super("Timeout has occurred"), this.info = e2, this.name = "TimeoutError";
      }
    }
    function c(e2) {
      throw new a(e2);
    }
    t.TimeoutError = a, t.timeout = function(e2, t2) {
      const { first: r2, each: a2, with: l = c, scheduler: u = t2 ?? n.asyncScheduler, meta: d = null } = (0, s.isValidDate)(e2) ? { first: e2 } : "number" == typeof e2 ? { each: e2 } : e2;
      if (null == r2 && null == a2) throw new TypeError("No timeout provided.");
      return (e3) => new o.Observable((t3) => {
        let n2, s2, c2 = null, p = 0;
        const m = (e4) => {
          s2 = (0, i.executeSchedule)(t3, u, () => {
            try {
              n2.unsubscribe(), (0, o.from)(l({ meta: d, lastValue: c2, seen: p })).subscribe(t3);
            } catch (e5) {
              t3.error(e5);
            }
          }, e4);
        };
        n2 = e3.subscribe((0, o.operate)({ destination: t3, next: (e4) => {
          s2?.unsubscribe(), p++, t3.next(c2 = e4), a2 > 0 && m(a2);
        }, finalize: () => {
          s2?.unsubscribe(), c2 = null;
        } })), !p && m(null != r2 ? "number" == typeof r2 ? r2 : +r2 - u.now() : a2);
      });
    };
  }
// @recovered-by cursor-re
// artifact: app/extensions/cursor-local-agent-runtime/dist/main.js sha256:be87ea0ed3ac86375ab8e5f92c4261df0ccfc61ff24b07420f9c88a78ae2cfd0
// module: 22402 range:641620..643069
// basis: webpack-id confidence: C
// method: split
// run: ext-p0 2026-11-05T10:07:22.069Z
22402: (e, t, r) => {
    "use strict";
    Object.defineProperty(t, "__esModule", { value: true }), t.timeout = t.TimeoutError = void 0;
    const n = r(2665), o = r(97842), s = r(51078), i = r(55830);
    class a extends Error {
      info;
      constructor(e2 = null) {
        super("Timeout has occurred"), this.info = e2, this.name = "TimeoutError";
      }
    }
    function l(e2) {
      throw new a(e2);
    }
    t.TimeoutError = a, t.timeout = function(e2, t2) {
      const { first: r2, each: a2, with: c = l, scheduler: u = t2 ?? n.asyncScheduler, meta: d = null } = (0, o.isValidDate)(e2) ? { first: e2 } : "number" == typeof e2 ? { each: e2 } : e2;
      if (null == r2 && null == a2) throw new TypeError("No timeout provided.");
      return (e3) => new s.Observable((t3) => {
        let n2, o2, l2 = null, p = 0;
        const h = (e4) => {
          o2 = (0, i.executeSchedule)(t3, u, () => {
            try {
              n2.unsubscribe(), (0, s.from)(c({ meta: d, lastValue: l2, seen: p })).subscribe(t3);
            } catch (e5) {
              t3.error(e5);
            }
          }, e4);
        };
        n2 = e3.subscribe((0, s.operate)({ destination: t3, next: (e4) => {
          o2?.unsubscribe(), p++, t3.next(l2 = e4), a2 > 0 && h(a2);
        }, finalize: () => {
          o2?.unsubscribe(), l2 = null;
        } })), !p && h(null != r2 ? "number" == typeof r2 ? r2 : +r2 - u.now() : a2);
      });
    };
  }
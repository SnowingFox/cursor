// @recovered-by cursor-re
// artifact: app/extensions/cursor-agent-worker/dist/main.js sha256:d5af94b4e40f694b81a675a0fb00fa8d060306ca064a011e953218d005b613d5
// module: 2402 range:95633..97190
// basis: webpack-id confidence: C
// method: split
// run: ext-agent 2026-11-05T10:20:08.356Z
2402: (e10, a10, n10) => {
    Object.defineProperty(a10, "__esModule", { value: true }), a10.timeout = a10.TimeoutError = void 0;
    const s10 = n10(2665), o10 = n10(7842), r10 = n10(1078), t10 = n10(5830);
    class i10 extends Error {
      info;
      constructor(e11 = null) {
        super("Timeout has occurred"), this.info = e11, this.name = "TimeoutError";
      }
    }
    function m10(e11) {
      throw new i10(e11);
    }
    a10.TimeoutError = i10, a10.timeout = function(e11, a11) {
      const { first: n11, each: i11, with: l10 = m10, scheduler: d10 = a11 ?? s10.asyncScheduler, meta: c10 = null } = (0, o10.isValidDate)(e11) ? { first: e11 } : "number" == typeof e11 ? { each: e11 } : e11;
      if (null == n11 && null == i11) throw new TypeError("No timeout provided.");
      return (e12) => new r10.Observable((a12) => {
        let s11, o11, m11 = null, T10 = 0;
        const p10 = (e13) => {
          o11 = (0, t10.executeSchedule)(a12, d10, () => {
            try {
              s11.unsubscribe(), (0, r10.from)(l10({ meta: c10, lastValue: m11, seen: T10 })).subscribe(a12);
            } catch (e14) {
              a12.error(e14);
            }
          }, e13);
        };
        s11 = e12.subscribe((0, r10.operate)({ destination: a12, next: (e13) => {
          o11?.unsubscribe(), T10++, a12.next(m11 = e13), i11 > 0 && p10(i11);
        }, finalize: () => {
          o11?.unsubscribe(), m11 = null;
        } })), !T10 && p10(null != n11 ? "number" == typeof n11 ? n11 : +n11 - d10.now() : i11);
      });
    };
  }
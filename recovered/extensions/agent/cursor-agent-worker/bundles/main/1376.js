// @recovered-by cursor-re
// artifact: app/extensions/cursor-agent-worker/dist/main.js sha256:d5af94b4e40f694b81a675a0fb00fa8d060306ca064a011e953218d005b613d5
// module: 1376 range:74338..75943
// basis: webpack-id confidence: C
// method: split
// run: ext-agent 2026-11-05T10:20:08.356Z
1376: (e10, a10, n10) => {
    Object.defineProperty(a10, "__esModule", { value: true }), a10.windowTime = void 0;
    const s10 = n10(3043), o10 = n10(2665), r10 = n10(1078), t10 = n10(5143), i10 = n10(5619), m10 = n10(5830);
    a10.windowTime = function(e11, ...a11) {
      const n11 = (0, i10.popScheduler)(a11) ?? o10.asyncScheduler, l10 = a11[0] ?? null, d10 = a11[1] || 1 / 0;
      return (a12) => new r10.Observable((o11) => {
        let i11 = [], c10 = false;
        const T10 = (e12) => {
          const { window: a13, subs: n12 } = e12;
          a13.complete(), n12.unsubscribe(), (0, t10.arrRemove)(i11, e12), c10 && p10();
        }, p10 = () => {
          if (i11) {
            const a13 = new r10.Subscription();
            o11.add(a13);
            const t11 = new s10.Subject(), l11 = { window: t11, subs: a13, seen: 0 };
            i11.push(l11), o11.next(t11.asObservable()), (0, m10.executeSchedule)(a13, n11, () => T10(l11), e11);
          }
        };
        null !== l10 && l10 >= 0 ? (0, m10.executeSchedule)(o11, n11, p10, l10, true) : c10 = true, p10();
        const _10 = (e12) => i11.slice().forEach(e12), k10 = (e12) => {
          _10(({ window: a13 }) => e12(a13)), e12(o11), o11.unsubscribe();
        };
        return a12.subscribe((0, r10.operate)({ destination: o11, next: (e12) => {
          _10((a13) => {
            a13.window.next(e12), d10 <= ++a13.seen && T10(a13);
          });
        }, error: (e12) => k10((a13) => a13.error(e12)), complete: () => k10((e12) => e12.complete()) })), () => {
          i11 = null;
        };
      });
    };
  }
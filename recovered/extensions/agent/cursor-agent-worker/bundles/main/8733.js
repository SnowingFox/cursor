// @recovered-by cursor-re
// artifact: app/extensions/cursor-agent-worker/dist/main.js sha256:d5af94b4e40f694b81a675a0fb00fa8d060306ca064a011e953218d005b613d5
// module: 8733 range:330652..331802
// basis: webpack-id confidence: C
// method: split
// run: ext-agent 2026-11-05T10:20:08.356Z
8733: (e10, a10, n10) => {
    Object.defineProperty(a10, "__esModule", { value: true }), a10.throttle = void 0;
    const s10 = n10(1078);
    a10.throttle = function(e11, a11) {
      return (n11) => new s10.Observable((o10) => {
        const { leading: r10 = true, trailing: t10 = false } = a11 ?? {};
        let i10 = false, m10 = null, l10 = null, d10 = false;
        const c10 = () => {
          l10?.unsubscribe(), l10 = null, t10 && (_10(), d10 && o10.complete());
        }, T10 = () => {
          l10 = null, d10 && o10.complete();
        }, p10 = (a12) => l10 = (0, s10.from)(e11(a12)).subscribe((0, s10.operate)({ destination: o10, next: c10, complete: T10 })), _10 = () => {
          if (i10) {
            i10 = false;
            const e12 = m10;
            m10 = null, o10.next(e12), !d10 && p10(e12);
          }
        };
        n11.subscribe((0, s10.operate)({ destination: o10, next: (e12) => {
          i10 = true, m10 = e12, (!l10 || l10.closed) && (r10 ? _10() : p10(e12));
        }, complete: () => {
          d10 = true, (!(t10 && i10 && l10) || l10.closed) && o10.complete();
        } }));
      });
    };
  }
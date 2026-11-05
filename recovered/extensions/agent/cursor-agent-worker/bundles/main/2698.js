// @recovered-by cursor-re
// artifact: app/extensions/cursor-agent-worker/dist/main.js sha256:d5af94b4e40f694b81a675a0fb00fa8d060306ca064a011e953218d005b613d5
// module: 2698 range:105572..106512
// basis: webpack-id confidence: C
// method: split
// run: ext-agent 2026-11-05T10:20:08.356Z
2698: (e10, a10, n10) => {
    Object.defineProperty(a10, "__esModule", { value: true }), a10.audit = void 0;
    const s10 = n10(1078);
    a10.audit = function(e11) {
      return (a11) => new s10.Observable((n11) => {
        let o10 = false, r10 = null, t10 = null, i10 = false;
        const m10 = () => {
          if (t10?.unsubscribe(), t10 = null, o10) {
            o10 = false;
            const e12 = r10;
            r10 = null, n11.next(e12);
          }
          i10 && n11.complete();
        }, l10 = () => {
          t10 = null, i10 && n11.complete();
        };
        a11.subscribe((0, s10.operate)({ destination: n11, next: (a12) => {
          o10 = true, r10 = a12, t10 || (0, s10.from)(e11(a12)).subscribe(t10 = (0, s10.operate)({ destination: n11, next: m10, complete: l10 }));
        }, complete: () => {
          i10 = true, (!o10 || !t10 || t10.closed) && n11.complete();
        } }));
      });
    };
  }
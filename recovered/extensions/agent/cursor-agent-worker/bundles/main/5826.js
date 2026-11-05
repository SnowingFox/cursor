// @recovered-by cursor-re
// artifact: app/extensions/cursor-agent-worker/dist/main.js sha256:d5af94b4e40f694b81a675a0fb00fa8d060306ca064a011e953218d005b613d5
// module: 5826 range:174823..175784
// basis: webpack-id confidence: C
// method: split
// run: ext-agent 2026-11-05T10:20:08.356Z
5826: (e10, a10, n10) => {
    Object.defineProperty(a10, "__esModule", { value: true }), a10.withLatestFrom = void 0;
    const s10 = n10(1078), o10 = n10(4896), r10 = n10(4462), t10 = n10(5619);
    a10.withLatestFrom = function(...e11) {
      const a11 = (0, t10.popResultSelector)(e11);
      return (n11) => new s10.Observable((t11) => {
        const i10 = e11.length, m10 = new Array(i10);
        let l10 = e11.map(() => false), d10 = false;
        for (let a12 = 0; a12 < i10; a12++) (0, s10.from)(e11[a12]).subscribe((0, s10.operate)({ destination: t11, next: (e12) => {
          m10[a12] = e12, d10 || l10[a12] || (l10[a12] = true, (d10 = l10.every(o10.identity)) && (l10 = null));
        }, complete: r10.noop }));
        n11.subscribe((0, s10.operate)({ destination: t11, next: (e12) => {
          if (d10) {
            const n12 = [e12, ...m10];
            t11.next(a11 ? a11(...n12) : n12);
          }
        } }));
      });
    };
  }
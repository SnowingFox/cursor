// @recovered-by cursor-re
// artifact: app/extensions/cursor-agent-worker/dist/main.js sha256:d5af94b4e40f694b81a675a0fb00fa8d060306ca064a011e953218d005b613d5
// module: 9904 range:364753..365303
// basis: webpack-id confidence: C
// method: split
// run: ext-agent 2026-11-05T10:20:08.356Z
9904: (e10, a10, n10) => {
    Object.defineProperty(a10, "__esModule", { value: true }), a10.scanInternals = void 0;
    const s10 = n10(1078);
    a10.scanInternals = function(e11, a11, n11, o10, r10, t10, i10) {
      let m10 = n11, l10 = a11, d10 = 0;
      t10.subscribe((0, s10.operate)({ destination: i10, next: (a12) => {
        const n12 = d10++;
        l10 = m10 ? e11(l10, a12, n12) : (m10 = true, a12), o10 && i10.next(l10);
      }, complete: r10 ? () => {
        m10 && i10.next(l10), i10.complete();
      } : void 0 }));
    };
  }
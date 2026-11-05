// @recovered-by cursor-re
// artifact: app/extensions/cursor-agent-worker/dist/main.js sha256:d5af94b4e40f694b81a675a0fb00fa8d060306ca064a011e953218d005b613d5
// module: 4801 range:148127..148581
// basis: webpack-id confidence: C
// method: split
// run: ext-agent 2026-11-05T10:20:08.356Z
4801: (e10, a10, n10) => {
    Object.defineProperty(a10, "__esModule", { value: true }), a10.pairwise = void 0;
    const s10 = n10(1078);
    a10.pairwise = function() {
      return (e11) => new s10.Observable((a11) => {
        let n11, o10 = false;
        e11.subscribe((0, s10.operate)({ destination: a11, next: (e12) => {
          const s11 = n11;
          n11 = e12, o10 && a11.next([s11, e12]), o10 = true;
        } }));
      });
    };
  }
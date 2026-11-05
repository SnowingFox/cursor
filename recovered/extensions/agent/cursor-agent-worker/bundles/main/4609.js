// @recovered-by cursor-re
// artifact: app/extensions/cursor-agent-worker/dist/main.js sha256:d5af94b4e40f694b81a675a0fb00fa8d060306ca064a011e953218d005b613d5
// module: 4609 range:147712..148125
// basis: webpack-id confidence: C
// method: split
// run: ext-agent 2026-11-05T10:20:08.356Z
4609: (e10, a10, n10) => {
    Object.defineProperty(a10, "__esModule", { value: true }), a10.skipWhile = void 0;
    const s10 = n10(1078);
    a10.skipWhile = function(e11) {
      return (a11) => new s10.Observable((n11) => {
        let o10 = false, r10 = 0;
        a11.subscribe((0, s10.operate)({ destination: n11, next: (a12) => (o10 || (o10 = !e11(a12, r10++))) && n11.next(a12) }));
      });
    };
  }
// @recovered-by cursor-re
// artifact: app/extensions/cursor-agent-worker/dist/main.js sha256:d5af94b4e40f694b81a675a0fb00fa8d060306ca064a011e953218d005b613d5
// module: 8634 range:330335..330650
// basis: webpack-id confidence: C
// method: split
// run: ext-agent 2026-11-05T10:20:08.356Z
8634: (e10, a10, n10) => {
    Object.defineProperty(a10, "__esModule", { value: true }), a10.zipWith = void 0;
    const s10 = n10(1078), o10 = n10(9190);
    a10.zipWith = function(...e11) {
      return (a11) => new s10.Observable((n11) => {
        (0, o10.zip)(a11, ...e11).subscribe(n11);
      });
    };
  }
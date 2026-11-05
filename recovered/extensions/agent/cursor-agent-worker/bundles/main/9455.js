// @recovered-by cursor-re
// artifact: app/extensions/cursor-agent-worker/dist/main.js sha256:d5af94b4e40f694b81a675a0fb00fa8d060306ca064a011e953218d005b613d5
// module: 9455 range:355666..355988
// basis: webpack-id confidence: C
// method: split
// run: ext-agent 2026-11-05T10:20:08.356Z
9455: (e10, a10, n10) => {
    Object.defineProperty(a10, "__esModule", { value: true }), a10.combineLatestWith = void 0;
    const s10 = n10(1503), o10 = n10(1078);
    a10.combineLatestWith = function(...e11) {
      return (a11) => new o10.Observable((n11) => (0, s10.combineLatestInit)([a11, ...e11])(n11));
    };
  }
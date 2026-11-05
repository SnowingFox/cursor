// @recovered-by cursor-re
// artifact: app/extensions/cursor-agent-worker/dist/main.js sha256:d5af94b4e40f694b81a675a0fb00fa8d060306ca064a011e953218d005b613d5
// module: 3398 range:119180..119593
// basis: webpack-id confidence: C
// method: split
// run: ext-agent 2026-11-05T10:20:08.356Z
3398: (e10, a10, n10) => {
    Object.defineProperty(a10, "__esModule", { value: true }), a10.joinAllInternals = void 0;
    const s10 = n10(4896), o10 = n10(5683), r10 = n10(7410), t10 = n10(1207), i10 = n10(2471);
    a10.joinAllInternals = function(e11, a11) {
      return (0, r10.pipe)((0, i10.toArray)(), (0, t10.mergeMap)((a12) => e11(a12)), a11 ? (0, o10.mapOneOrManyArgs)(a11) : s10.identity);
    };
  }
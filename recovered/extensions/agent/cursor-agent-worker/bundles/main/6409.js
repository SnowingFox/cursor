// @recovered-by cursor-re
// artifact: app/extensions/cursor-agent-worker/dist/main.js sha256:d5af94b4e40f694b81a675a0fb00fa8d060306ca064a011e953218d005b613d5
// module: 6409 range:187143..187516
// basis: webpack-id confidence: C
// method: split
// run: ext-agent 2026-11-05T10:20:08.356Z
6409: (e10, a10, n10) => {
    Object.defineProperty(a10, "__esModule", { value: true }), a10.concat = void 0;
    const s10 = n10(1078), o10 = n10(3006), r10 = n10(5619), t10 = n10(9880);
    a10.concat = function(...e11) {
      const a11 = (0, r10.popScheduler)(e11);
      return (0, o10.concatAll)()(a11 ? (0, t10.scheduled)(e11, a11) : (0, s10.from)(e11));
    };
  }
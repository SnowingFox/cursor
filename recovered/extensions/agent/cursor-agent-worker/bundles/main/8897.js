// @recovered-by cursor-re
// artifact: app/extensions/cursor-agent-worker/dist/main.js sha256:d5af94b4e40f694b81a675a0fb00fa8d060306ca064a011e953218d005b613d5
// module: 8897 range:347276..347782
// basis: webpack-id confidence: C
// method: split
// run: ext-agent 2026-11-05T10:20:08.356Z
8897: (e10, a10, n10) => {
    Object.defineProperty(a10, "__esModule", { value: true }), a10.merge = void 0;
    const s10 = n10(1078), o10 = n10(6102), r10 = n10(744), t10 = n10(5619), i10 = n10(9880);
    a10.merge = function(...e11) {
      const a11 = (0, t10.popScheduler)(e11), n11 = (0, t10.popNumber)(e11, 1 / 0), m10 = e11;
      return m10.length ? 1 === m10.length ? (0, s10.from)(m10[0]) : (0, o10.mergeAll)(n11)(a11 ? (0, i10.scheduled)(m10, a11) : (0, s10.from)(m10)) : r10.EMPTY;
    };
  }
// @recovered-by cursor-re
// artifact: app/extensions/cursor-agent-worker/dist/main.js sha256:d5af94b4e40f694b81a675a0fb00fa8d060306ca064a011e953218d005b613d5
// module: 2279 range:94760..95092
// basis: webpack-id confidence: C
// method: split
// run: ext-agent 2026-11-05T10:20:08.356Z
2279: (e10, a10, n10) => {
    Object.defineProperty(a10, "__esModule", { value: true }), a10.max = void 0;
    const s10 = n10(8339), o10 = n10(1078);
    a10.max = function(e11) {
      return (0, s10.reduce)((0, o10.isFunction)(e11) ? (a11, n11) => e11(a11, n11) > 0 ? a11 : n11 : (e12, a11) => e12 > a11 ? e12 : a11);
    };
  }
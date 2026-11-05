// @recovered-by cursor-re
// artifact: app/extensions/cursor-agent-worker/dist/main.js sha256:d5af94b4e40f694b81a675a0fb00fa8d060306ca064a011e953218d005b613d5
// module: 4480 range:144716..145069
// basis: webpack-id confidence: C
// method: split
// run: ext-agent 2026-11-05T10:20:08.356Z
4480: (e10, a10, n10) => {
    Object.defineProperty(a10, "__esModule", { value: true }), a10.scan = void 0;
    const s10 = n10(1078), o10 = n10(9904);
    a10.scan = function(e11, a11) {
      const n11 = arguments.length >= 2;
      return (r10) => new s10.Observable((s11) => (0, o10.scanInternals)(e11, a11, n11, true, false, r10, s11));
    };
  }
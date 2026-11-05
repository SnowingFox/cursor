// @recovered-by cursor-re
// artifact: app/extensions/cursor-agent-worker/dist/main.js sha256:d5af94b4e40f694b81a675a0fb00fa8d060306ca064a011e953218d005b613d5
// module: 8254 range:321494..321764
// basis: webpack-id confidence: C
// method: split
// run: ext-agent 2026-11-05T10:20:08.356Z
8254: (e10, a10, n10) => {
    Object.defineProperty(a10, "__esModule", { value: true }), a10.count = void 0;
    const s10 = n10(8339);
    a10.count = function(e11) {
      return (0, s10.reduce)((a11, n11, s11) => !e11 || e11(n11, s11) ? a11 + 1 : a11, 0);
    };
  }
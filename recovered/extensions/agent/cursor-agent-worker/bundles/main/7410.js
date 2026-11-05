// @recovered-by cursor-re
// artifact: app/extensions/cursor-agent-worker/dist/main.js sha256:d5af94b4e40f694b81a675a0fb00fa8d060306ca064a011e953218d005b613d5
// module: 7410 range:290057..290331
// basis: webpack-id confidence: C
// method: split
// run: ext-agent 2026-11-05T10:20:08.356Z
7410: (e10, a10) => {
    function n10(e11, a11) {
      return a11(e11);
    }
    Object.defineProperty(a10, "__esModule", { value: true }), a10.pipe = void 0, a10.pipe = function(...e11) {
      return 1 === e11.length ? e11[0] : (a11) => e11.reduce(n10, a11);
    };
  }
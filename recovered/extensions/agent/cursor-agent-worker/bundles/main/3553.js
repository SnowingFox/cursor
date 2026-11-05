// @recovered-by cursor-re
// artifact: app/extensions/cursor-agent-worker/dist/main.js sha256:d5af94b4e40f694b81a675a0fb00fa8d060306ca064a011e953218d005b613d5
// module: 3553 range:129318..129813
// basis: webpack-id confidence: C
// method: split
// run: ext-agent 2026-11-05T10:20:08.356Z
3553: (e10, a10) => {
    Object.defineProperty(a10, "__esModule", { value: true }), a10.intervalProvider = void 0, a10.intervalProvider = { setInterval(e11, n10, ...s10) {
      const { delegate: o10 } = a10.intervalProvider;
      return o10?.setInterval ? o10.setInterval(e11, n10, ...s10) : setInterval(e11, n10, ...s10);
    }, clearInterval(e11) {
      const { delegate: n10 } = a10.intervalProvider;
      return (n10?.clearInterval || clearInterval)(e11);
    }, delegate: void 0 };
  }
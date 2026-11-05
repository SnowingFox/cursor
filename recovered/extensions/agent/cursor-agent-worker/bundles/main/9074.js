// @recovered-by cursor-re
// artifact: app/extensions/cursor-agent-worker/dist/main.js sha256:d5af94b4e40f694b81a675a0fb00fa8d060306ca064a011e953218d005b613d5
// module: 9074 range:349080..349406
// basis: webpack-id confidence: C
// method: split
// run: ext-agent 2026-11-05T10:20:08.356Z
9074: (e10, a10, n10) => {
    Object.defineProperty(a10, "__esModule", { value: true }), a10.delay = void 0;
    const s10 = n10(2665), o10 = n10(7662), r10 = n10(444);
    a10.delay = function(e11, a11 = s10.asyncScheduler) {
      const n11 = (0, r10.timer)(e11, a11);
      return (0, o10.delayWhen)(() => n11);
    };
  }
// @recovered-by cursor-re
// artifact: app/extensions/cursor-agent-worker/dist/main.js sha256:d5af94b4e40f694b81a675a0fb00fa8d060306ca064a011e953218d005b613d5
// module: 7199 range:216311..216618
// basis: webpack-id confidence: C
// method: split
// run: ext-agent 2026-11-05T10:20:08.356Z
7199: (e10, a10, n10) => {
    Object.defineProperty(a10, "__esModule", { value: true }), a10.auditTime = void 0;
    const s10 = n10(2665), o10 = n10(2698), r10 = n10(444);
    a10.auditTime = function(e11, a11 = s10.asyncScheduler) {
      return (0, o10.audit)(() => (0, r10.timer)(e11, a11));
    };
  }
// @recovered-by cursor-re
// artifact: app/extensions/cursor-agent-worker/dist/main.js sha256:d5af94b4e40f694b81a675a0fb00fa8d060306ca064a011e953218d005b613d5
// module: 8019 range:302176..303093
// basis: webpack-id confidence: C
// method: split
// run: ext-agent 2026-11-05T10:20:08.356Z
8019: (e10, a10, n10) => {
    Object.defineProperty(a10, "__esModule", { value: true }), a10.animationFrameProvider = void 0;
    const s10 = n10(1078);
    a10.animationFrameProvider = { schedule(e11) {
      let n11 = requestAnimationFrame, o10 = cancelAnimationFrame;
      const { delegate: r10 } = a10.animationFrameProvider;
      r10 && (n11 = r10.requestAnimationFrame, o10 = r10.cancelAnimationFrame);
      const t10 = n11((a11) => {
        o10 = void 0, e11(a11);
      });
      return new s10.Subscription(() => o10?.(t10));
    }, requestAnimationFrame(...e11) {
      const { delegate: n11 } = a10.animationFrameProvider;
      return (n11?.requestAnimationFrame || requestAnimationFrame)(...e11);
    }, cancelAnimationFrame(...e11) {
      const { delegate: n11 } = a10.animationFrameProvider;
      return (n11?.cancelAnimationFrame || cancelAnimationFrame)(...e11);
    }, delegate: void 0 };
  }
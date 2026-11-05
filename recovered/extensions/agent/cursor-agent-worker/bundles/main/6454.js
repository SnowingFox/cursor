// @recovered-by cursor-re
// artifact: app/extensions/cursor-agent-worker/dist/main.js sha256:d5af94b4e40f694b81a675a0fb00fa8d060306ca064a011e953218d005b613d5
// module: 6454 range:189152..190019
// basis: webpack-id confidence: C
// method: split
// run: ext-agent 2026-11-05T10:20:08.356Z
6454: (e10, a10, n10) => {
    Object.defineProperty(a10, "__esModule", { value: true }), a10.animationFrames = void 0;
    const s10 = n10(1078), o10 = n10(9034), r10 = n10(8019);
    function t10(e11) {
      return new s10.Observable((a11) => {
        const n11 = e11 || o10.performanceTimestampProvider, s11 = n11.now();
        let t11 = 0;
        const i11 = () => {
          a11.closed || (t11 = r10.animationFrameProvider.requestAnimationFrame((o11) => {
            t11 = 0;
            const r11 = n11.now();
            a11.next({ timestamp: e11 ? r11 : o11, elapsed: r11 - s11 }), i11();
          }));
        };
        return i11(), () => {
          t11 && r10.animationFrameProvider.cancelAnimationFrame(t11);
        };
      });
    }
    a10.animationFrames = function(e11) {
      return e11 ? t10(e11) : i10;
    };
    const i10 = t10();
  }
// @recovered-by cursor-re
// artifact: app/extensions/cursor-agent-worker/dist/main.js sha256:d5af94b4e40f694b81a675a0fb00fa8d060306ca064a011e953218d005b613d5
// module: 8440 range:327078..327550
// basis: webpack-id confidence: C
// method: split
// run: ext-agent 2026-11-05T10:20:08.356Z
8440: (e10, a10, n10) => {
    Object.defineProperty(a10, "__esModule", { value: true }), a10.mergeScan = void 0;
    const s10 = n10(1078), o10 = n10(9935);
    a10.mergeScan = function(e11, a11, n11 = 1 / 0) {
      return (r10) => new s10.Observable((s11) => {
        let t10 = a11;
        return (0, o10.mergeInternals)(r10, s11, (a12, n12) => e11(t10, a12, n12), n11, (e12) => {
          t10 = e12;
        }, false, void 0, () => t10 = null);
      });
    };
  }
// @recovered-by cursor-re
// artifact: app/extensions/cursor-agent-worker/dist/main.js sha256:d5af94b4e40f694b81a675a0fb00fa8d060306ca064a011e953218d005b613d5
// module: 109 range:43..598
// basis: webpack-id confidence: C
// method: split
// run: ext-agent 2026-11-05T10:20:08.356Z
109: (e10, a10, n10) => {
    Object.defineProperty(a10, "__esModule", { value: true }), a10.shareReplay = void 0;
    const s10 = n10(9482), o10 = n10(3054);
    a10.shareReplay = function(e11, a11, n11) {
      let r10, t10 = false;
      return e11 && "object" == typeof e11 ? { bufferSize: r10 = 1 / 0, windowTime: a11 = 1 / 0, refCount: t10 = false, scheduler: n11 } = e11 : r10 = e11 ?? 1 / 0, (0, o10.share)({ connector: () => new s10.ReplaySubject(r10, a11, n11), resetOnError: true, resetOnComplete: false, resetOnRefCountZero: t10 });
    };
  }
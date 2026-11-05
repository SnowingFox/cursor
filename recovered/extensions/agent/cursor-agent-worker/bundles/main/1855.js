// @recovered-by cursor-re
// artifact: app/extensions/cursor-agent-worker/dist/main.js sha256:d5af94b4e40f694b81a675a0fb00fa8d060306ca064a011e953218d005b613d5
// module: 1855 range:91456..91790
// basis: webpack-id confidence: C
// method: split
// run: ext-agent 2026-11-05T10:20:08.356Z
1855: (e10, a10, n10) => {
    Object.defineProperty(a10, "__esModule", { value: true }), a10.scheduleObservable = void 0;
    const s10 = n10(1078), o10 = n10(6448), r10 = n10(4464);
    a10.scheduleObservable = function(e11, a11) {
      return (0, s10.from)(e11).pipe((0, r10.subscribeOn)(a11), (0, o10.observeOn)(a11));
    };
  }
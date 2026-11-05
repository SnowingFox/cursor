// @recovered-by cursor-re
// artifact: app/extensions/cursor-agent-worker/dist/main.js sha256:d5af94b4e40f694b81a675a0fb00fa8d060306ca064a011e953218d005b613d5
// module: 6448 range:188577..189150
// basis: webpack-id confidence: C
// method: split
// run: ext-agent 2026-11-05T10:20:08.356Z
6448: (e10, a10, n10) => {
    Object.defineProperty(a10, "__esModule", { value: true }), a10.observeOn = void 0;
    const s10 = n10(5830), o10 = n10(1078);
    a10.observeOn = function(e11, a11 = 0) {
      return (n11) => new o10.Observable((r10) => {
        n11.subscribe((0, o10.operate)({ destination: r10, next: (n12) => (0, s10.executeSchedule)(r10, e11, () => r10.next(n12), a11), error: (n12) => (0, s10.executeSchedule)(r10, e11, () => r10.error(n12), a11), complete: () => (0, s10.executeSchedule)(r10, e11, () => r10.complete(), a11) }));
      });
    };
  }
// @recovered-by cursor-re
// artifact: app/extensions/cursor-agent-worker/dist/main.js sha256:d5af94b4e40f694b81a675a0fb00fa8d060306ca064a011e953218d005b613d5
// module: 2534 range:98109..98763
// basis: webpack-id confidence: C
// method: split
// run: ext-agent 2026-11-05T10:20:08.356Z
2534: (e10, a10, n10) => {
    Object.defineProperty(a10, "__esModule", { value: true }), a10.scheduleAsyncIterable = void 0;
    const s10 = n10(1078), o10 = n10(5830);
    a10.scheduleAsyncIterable = function(e11, a11) {
      if (!e11) throw new Error("Iterable cannot be null");
      return new s10.Observable((n11) => {
        (0, o10.executeSchedule)(n11, a11, () => {
          const s11 = e11[Symbol.asyncIterator]();
          (0, o10.executeSchedule)(n11, a11, () => {
            s11.next().then((e12) => {
              e12.done ? n11.complete() : n11.next(e12.value);
            });
          }, 0, true);
        });
      });
    };
  }
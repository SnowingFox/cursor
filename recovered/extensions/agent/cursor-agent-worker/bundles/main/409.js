// @recovered-by cursor-re
// artifact: app/extensions/cursor-agent-worker/dist/main.js sha256:d5af94b4e40f694b81a675a0fb00fa8d060306ca064a011e953218d005b613d5
// module: 409 range:4729..5424
// basis: webpack-id confidence: C
// method: split
// run: ext-agent 2026-11-05T10:20:08.356Z
409: (e10, a10, n10) => {
    Object.defineProperty(a10, "__esModule", { value: true }), a10.TimeInterval = a10.timeInterval = void 0;
    const s10 = n10(2665), o10 = n10(1078);
    a10.timeInterval = function(e11 = s10.asyncScheduler) {
      return (a11) => new o10.Observable((n11) => {
        let s11 = e11.now();
        a11.subscribe((0, o10.operate)({ destination: n11, next: (a12) => {
          const o11 = e11.now(), t10 = o11 - s11;
          s11 = o11, n11.next(new r10(a12, t10));
        } }));
      });
    };
    class r10 {
      value;
      interval;
      constructor(e11, a11) {
        this.value = e11, this.interval = a11;
      }
    }
    a10.TimeInterval = r10;
  }
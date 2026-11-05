// @recovered-by cursor-re
// artifact: app/extensions/cursor-agent-worker/dist/main.js sha256:d5af94b4e40f694b81a675a0fb00fa8d060306ca064a011e953218d005b613d5
// module: 444 range:5932..6702
// basis: webpack-id confidence: C
// method: split
// run: ext-agent 2026-11-05T10:20:08.356Z
444: (e10, a10, n10) => {
    Object.defineProperty(a10, "__esModule", { value: true }), a10.timer = void 0;
    const s10 = n10(1078), o10 = n10(2665), r10 = n10(2901), t10 = n10(7842), i10 = n10(5830);
    a10.timer = function(e11 = 0, a11, n11 = o10.asyncScheduler) {
      let m10 = -1;
      return null != a11 && ((0, r10.isScheduler)(a11) ? n11 = a11 : m10 = a11), new s10.Observable((a12) => {
        let s11 = (0, t10.isValidDate)(e11) ? +e11 - n11.now() : e11;
        s11 < 0 && (s11 = 0);
        let o11 = 0;
        return (0, i10.executeSchedule)(a12, n11, () => {
          a12.next(o11++), 0 <= m10 ? (0, i10.executeSchedule)(a12, n11, () => {
            a12.next(o11++);
          }, m10, true) : a12.complete();
        }, s11);
      });
    };
  }
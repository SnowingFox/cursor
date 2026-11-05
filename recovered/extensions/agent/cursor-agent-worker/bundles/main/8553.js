// @recovered-by cursor-re
// artifact: app/extensions/cursor-agent-worker/dist/main.js sha256:d5af94b4e40f694b81a675a0fb00fa8d060306ca064a011e953218d005b613d5
// module: 8553 range:328611..329110
// basis: webpack-id confidence: C
// method: split
// run: ext-agent 2026-11-05T10:20:08.356Z
8553: (e10, a10, n10) => {
    Object.defineProperty(a10, "__esModule", { value: true }), a10.scheduleArray = void 0;
    const s10 = n10(1078), o10 = n10(5830);
    a10.scheduleArray = function(e11, a11) {
      return new s10.Observable((n11) => {
        let s11 = 0;
        const r10 = () => {
          s11 === e11.length ? n11.complete() : (n11.next(e11[s11++]), (0, o10.executeSchedule)(n11, a11, r10));
        };
        return (0, o10.executeSchedule)(n11, a11, r10);
      });
    };
  }
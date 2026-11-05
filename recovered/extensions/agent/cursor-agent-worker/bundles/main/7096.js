// @recovered-by cursor-re
// artifact: app/extensions/cursor-agent-worker/dist/main.js sha256:d5af94b4e40f694b81a675a0fb00fa8d060306ca064a011e953218d005b613d5
// module: 7096 range:205326..206099
// basis: webpack-id confidence: C
// method: split
// run: ext-agent 2026-11-05T10:20:08.356Z
7096: (e10, a10, n10) => {
    Object.defineProperty(a10, "__esModule", { value: true }), a10.scheduleIterable = void 0;
    const s10 = n10(1078), o10 = n10(5292), r10 = n10(5830);
    a10.scheduleIterable = function(e11, a11) {
      return new s10.Observable((n11) => {
        let t10;
        return (0, r10.executeSchedule)(n11, a11, () => {
          t10 = e11[o10.iterator](), (0, r10.executeSchedule)(n11, a11, () => {
            let e12, a12;
            try {
              ({ value: e12, done: a12 } = t10.next());
            } catch (e13) {
              return void n11.error(e13);
            }
            a12 ? n11.complete() : n11.next(e12);
          }, 0, true);
        }), () => (0, s10.isFunction)(t10?.return) && t10.return();
      });
    };
  }
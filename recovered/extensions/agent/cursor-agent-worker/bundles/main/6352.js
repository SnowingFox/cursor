// @recovered-by cursor-re
// artifact: app/extensions/cursor-agent-worker/dist/main.js sha256:d5af94b4e40f694b81a675a0fb00fa8d060306ca064a011e953218d005b613d5
// module: 6352 range:186404..187141
// basis: webpack-id confidence: C
// method: split
// run: ext-agent 2026-11-05T10:20:08.356Z
6352: (e10, a10, n10) => {
    Object.defineProperty(a10, "__esModule", { value: true }), a10.range = void 0;
    const s10 = n10(1078), o10 = n10(744), r10 = n10(5830);
    a10.range = function(e11, a11, n11) {
      if (null == a11 && (a11 = e11, e11 = 0), a11 <= 0) return o10.EMPTY;
      const t10 = a11 + e11;
      return new s10.Observable(n11 ? (a12) => {
        let s11 = e11;
        const o11 = () => {
          s11 < t10 ? (a12.next(s11++), a12.closed || (0, r10.executeSchedule)(a12, n11, o11)) : a12.complete();
        };
        (0, r10.executeSchedule)(a12, n11, o11);
      } : (a12) => {
        let n12 = e11;
        for (; n12 < t10 && !a12.closed; ) a12.next(n12++);
        a12.complete();
      });
    };
  }
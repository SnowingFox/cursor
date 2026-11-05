// @recovered-by cursor-re
// artifact: app/extensions/cursor-agent-worker/dist/main.js sha256:d5af94b4e40f694b81a675a0fb00fa8d060306ca064a011e953218d005b613d5
// module: 4179 range:136561..137209
// basis: webpack-id confidence: C
// method: split
// run: ext-agent 2026-11-05T10:20:08.356Z
4179: (e10, a10, n10) => {
    Object.defineProperty(a10, "__esModule", { value: true }), a10.first = void 0;
    const s10 = n10(1078), o10 = n10(231);
    a10.first = function(e11, a11) {
      const n11 = arguments.length >= 2;
      return (r10) => new s10.Observable((t10) => {
        let i10 = 0;
        const m10 = (0, s10.operate)({ destination: t10, next: (a12) => {
          (!e11 || e11(a12, i10++, r10)) && (m10.unsubscribe(), t10.next(a12), t10.complete());
        }, complete: () => {
          n11 ? (t10.next(a11), t10.complete()) : t10.error(new o10.EmptyError());
        } });
        r10.subscribe(m10);
      });
    };
  }
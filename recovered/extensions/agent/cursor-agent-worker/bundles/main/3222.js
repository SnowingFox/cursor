// @recovered-by cursor-re
// artifact: app/extensions/cursor-agent-worker/dist/main.js sha256:d5af94b4e40f694b81a675a0fb00fa8d060306ca064a011e953218d005b613d5
// module: 3222 range:117994..118577
// basis: webpack-id confidence: C
// method: split
// run: ext-agent 2026-11-05T10:20:08.356Z
3222: (e10, a10, n10) => {
    Object.defineProperty(a10, "__esModule", { value: true }), a10.catchError = void 0;
    const s10 = n10(1078);
    a10.catchError = function e11(a11) {
      return (n11) => new s10.Observable((o10) => {
        let r10, t10 = null, i10 = false;
        t10 = n11.subscribe((0, s10.operate)({ destination: o10, error: (m10) => {
          r10 = (0, s10.from)(a11(m10, e11(a11)(n11))), t10 ? (t10.unsubscribe(), t10 = null, r10.subscribe(o10)) : i10 = true;
        } })), i10 && (t10.unsubscribe(), t10 = null, r10.subscribe(o10));
      });
    };
  }
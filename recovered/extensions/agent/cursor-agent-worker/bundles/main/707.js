// @recovered-by cursor-re
// artifact: app/extensions/cursor-agent-worker/dist/main.js sha256:d5af94b4e40f694b81a675a0fb00fa8d060306ca064a011e953218d005b613d5
// module: 707 range:23254..23951
// basis: webpack-id confidence: C
// method: split
// run: ext-agent 2026-11-05T10:20:08.356Z
707: (e10, a10, n10) => {
    Object.defineProperty(a10, "__esModule", { value: true }), a10.retryWhen = void 0;
    const s10 = n10(1078), o10 = n10(3043);
    a10.retryWhen = function(e11) {
      return (a11) => new s10.Observable((n11) => {
        let r10, t10, i10 = false;
        const m10 = () => {
          r10 = a11.subscribe((0, s10.operate)({ destination: n11, error: (a12) => {
            t10 || (t10 = new o10.Subject(), (0, s10.from)(e11(t10)).subscribe((0, s10.operate)({ destination: n11, next: () => r10 ? m10() : i10 = true }))), t10 && t10.next(a12);
          } })), i10 && (r10.unsubscribe(), r10 = null, i10 = false, m10());
        };
        m10();
      });
    };
  }
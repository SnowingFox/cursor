// @recovered-by cursor-re
// artifact: app/extensions/cursor-agent-worker/dist/main.js sha256:d5af94b4e40f694b81a675a0fb00fa8d060306ca064a011e953218d005b613d5
// module: 3190 range:117092..117992
// basis: webpack-id confidence: C
// method: split
// run: ext-agent 2026-11-05T10:20:08.356Z
3190: (e10, a10, n10) => {
    Object.defineProperty(a10, "__esModule", { value: true }), a10.repeatWhen = void 0;
    const s10 = n10(1078), o10 = n10(3043);
    a10.repeatWhen = function(e11) {
      return (a11) => new s10.Observable((n11) => {
        let r10, t10, i10 = false, m10 = false, l10 = false;
        const d10 = () => l10 && m10 && (n11.complete(), true), c10 = () => {
          l10 = false, r10 = a11.subscribe((0, s10.operate)({ destination: n11, complete: () => {
            l10 = true, !d10() && (t10 || (t10 = new o10.Subject(), (0, s10.from)(e11(t10)).subscribe((0, s10.operate)({ destination: n11, next: () => {
              r10 ? c10() : i10 = true;
            }, complete: () => {
              m10 = true, d10();
            } }))), t10).next();
          } })), i10 && (r10.unsubscribe(), r10 = null, i10 = false, c10());
        };
        c10();
      });
    };
  }
// @recovered-by cursor-re
// artifact: app/extensions/cursor-agent-worker/dist/main.js sha256:d5af94b4e40f694b81a675a0fb00fa8d060306ca064a011e953218d005b613d5
// module: 8809 range:333121..333869
// basis: webpack-id confidence: C
// method: split
// run: ext-agent 2026-11-05T10:20:08.356Z
8809: (e10, a10, n10) => {
    Object.defineProperty(a10, "__esModule", { value: true }), a10.single = void 0;
    const s10 = n10(1078), o10 = n10(231), r10 = n10(5841), t10 = n10(5007);
    a10.single = function(e11) {
      return (a11) => new s10.Observable((n11) => {
        let i10, m10 = false, l10 = false, d10 = 0;
        a11.subscribe((0, s10.operate)({ destination: n11, next: (s11) => {
          l10 = true, e11 && !e11(s11, d10++, a11) || (m10 && n11.error(new r10.SequenceError("Too many matching values")), m10 = true, i10 = s11);
        }, complete: () => {
          m10 ? (n11.next(i10), n11.complete()) : n11.error(l10 ? new t10.NotFoundError("No matching values") : new o10.EmptyError());
        } }));
      });
    };
  }
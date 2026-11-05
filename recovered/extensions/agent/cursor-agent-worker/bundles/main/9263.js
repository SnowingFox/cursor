// @recovered-by cursor-re
// artifact: app/extensions/cursor-agent-worker/dist/main.js sha256:d5af94b4e40f694b81a675a0fb00fa8d060306ca064a011e953218d005b613d5
// module: 9263 range:351709..352474
// basis: webpack-id confidence: C
// method: split
// run: ext-agent 2026-11-05T10:20:08.356Z
9263: (e10, a10, n10) => {
    Object.defineProperty(a10, "__esModule", { value: true }), a10.debounceTime = void 0;
    const s10 = n10(2665), o10 = n10(1078), r10 = n10(5830);
    a10.debounceTime = function(e11, a11 = s10.asyncScheduler) {
      return (n11) => new o10.Observable((s11) => {
        let t10, i10;
        n11.subscribe((0, o10.operate)({ destination: s11, next: (n12) => {
          t10 = n12, i10?.unsubscribe(), i10 = (0, r10.executeSchedule)(s11, a11, () => {
            i10 = void 0;
            const e12 = t10;
            t10 = null, s11.next(e12);
          }, e11);
        }, complete: () => {
          i10 && s11.next(t10), s11.complete();
        }, finalize: () => {
          t10 = i10 = null;
        } }));
      });
    };
  }
// @recovered-by cursor-re
// artifact: app/extensions/cursor-agent-worker/dist/main.js sha256:d5af94b4e40f694b81a675a0fb00fa8d060306ca064a011e953218d005b613d5
// module: 6661 range:193631..194500
// basis: webpack-id confidence: C
// method: split
// run: ext-agent 2026-11-05T10:20:08.356Z
6661: (e10, a10, n10) => {
    Object.defineProperty(a10, "__esModule", { value: true }), a10.window = void 0;
    const s10 = n10(1078), o10 = n10(3043), r10 = n10(4462);
    a10.window = function(e11) {
      return (a11) => new s10.Observable((n11) => {
        let t10 = new o10.Subject();
        n11.next(t10.asObservable());
        const i10 = (e12) => {
          t10.error(e12), n11.error(e12);
        };
        return a11.subscribe((0, s10.operate)({ destination: n11, next: (e12) => t10?.next(e12), complete: () => {
          t10.complete(), n11.complete();
        }, error: i10 })), (0, s10.from)(e11).subscribe((0, s10.operate)({ destination: n11, next: () => {
          t10.complete(), n11.next(t10 = new o10.Subject());
        }, complete: r10.noop, error: i10 })), () => {
          t10?.unsubscribe(), t10 = null;
        };
      });
    };
  }
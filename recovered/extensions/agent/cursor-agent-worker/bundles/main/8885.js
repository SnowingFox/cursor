// @recovered-by cursor-re
// artifact: app/extensions/cursor-agent-worker/dist/main.js sha256:d5af94b4e40f694b81a675a0fb00fa8d060306ca064a011e953218d005b613d5
// module: 8885 range:346241..347274
// basis: webpack-id confidence: C
// method: split
// run: ext-agent 2026-11-05T10:20:08.356Z
8885: (e10, a10, n10) => {
    Object.defineProperty(a10, "__esModule", { value: true }), a10.windowWhen = void 0;
    const s10 = n10(1078), o10 = n10(3043), r10 = n10(4462);
    a10.windowWhen = function(e11) {
      return (a11) => new s10.Observable((n11) => {
        let t10, i10;
        const m10 = (e12) => {
          t10.error(e12), n11.error(e12);
        }, l10 = () => {
          let a12;
          i10?.unsubscribe(), t10?.complete(), t10 = new o10.Subject(), n11.next(t10.asObservable());
          try {
            a12 = (0, s10.from)(e11());
          } catch (e12) {
            return void m10(e12);
          }
          a12.subscribe(i10 = (0, s10.operate)({ destination: n11, next: l10, error: m10, complete: r10.noop }));
        };
        l10(), a11.subscribe((0, s10.operate)({ destination: n11, next: (e12) => t10.next(e12), error: m10, complete: () => {
          t10.complete(), n11.complete();
        }, finalize: () => {
          i10?.unsubscribe(), t10 = null;
        } }));
      });
    };
  }
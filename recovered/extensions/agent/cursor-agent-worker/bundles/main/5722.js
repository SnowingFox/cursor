// @recovered-by cursor-re
// artifact: app/extensions/cursor-agent-worker/dist/main.js sha256:d5af94b4e40f694b81a675a0fb00fa8d060306ca064a011e953218d005b613d5
// module: 5722 range:170398..171288
// basis: webpack-id confidence: C
// method: split
// run: ext-agent 2026-11-05T10:20:08.356Z
5722: (e10, a10, n10) => {
    Object.defineProperty(a10, "__esModule", { value: true }), a10.debounce = void 0;
    const s10 = n10(1078), o10 = n10(4462);
    a10.debounce = function(e11) {
      return (a11) => new s10.Observable((n11) => {
        let r10 = false, t10 = null, i10 = null;
        const m10 = () => {
          if (i10?.unsubscribe(), i10 = null, r10) {
            r10 = false;
            const e12 = t10;
            t10 = null, n11.next(e12);
          }
        };
        a11.subscribe((0, s10.operate)({ destination: n11, next: (a12) => {
          i10?.unsubscribe(), r10 = true, t10 = a12, i10 = (0, s10.operate)({ destination: n11, next: m10, complete: o10.noop }), (0, s10.from)(e11(a12)).subscribe(i10);
        }, complete: () => {
          m10(), n11.complete();
        }, finalize: () => {
          t10 = i10 = null;
        } }));
      });
    };
  }
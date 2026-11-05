// @recovered-by cursor-re
// artifact: app/extensions/cursor-agent-worker/dist/main.js sha256:d5af94b4e40f694b81a675a0fb00fa8d060306ca064a011e953218d005b613d5
// module: 6842 range:197861..198939
// basis: webpack-id confidence: C
// method: split
// run: ext-agent 2026-11-05T10:20:08.356Z
6842: (e10, a10, n10) => {
    Object.defineProperty(a10, "__esModule", { value: true }), a10.windowCount = void 0;
    const s10 = n10(1078), o10 = n10(3043);
    a10.windowCount = function(e11, a11 = 0) {
      const n11 = a11 > 0 ? a11 : e11;
      return (a12) => new s10.Observable((r10) => {
        let t10 = [new o10.Subject()], i10 = [], m10 = 0;
        r10.next(t10[0].asObservable()), a12.subscribe((0, s10.operate)({ destination: r10, next: (a13) => {
          for (const e12 of t10) e12.next(a13);
          const s11 = m10 - e11 + 1;
          if (s11 >= 0 && s11 % n11 === 0 && t10.shift().complete(), ++m10 % n11 === 0) {
            const e12 = new o10.Subject();
            t10.push(e12), r10.next(e12.asObservable());
          }
        }, error: (e12) => {
          for (; t10.length > 0; ) t10.shift().error(e12);
          r10.error(e12);
        }, complete: () => {
          for (; t10.length > 0; ) t10.shift().complete();
          r10.complete();
        }, finalize: () => {
          i10 = null, t10 = null;
        } }));
      });
    };
  }
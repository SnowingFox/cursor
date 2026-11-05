// @recovered-by cursor-re
// artifact: app/extensions/cursor-agent-worker/dist/main.js sha256:d5af94b4e40f694b81a675a0fb00fa8d060306ca064a011e953218d005b613d5
// module: 8520 range:327896..328609
// basis: webpack-id confidence: C
// method: split
// run: ext-agent 2026-11-05T10:20:08.356Z
8520: (e10, a10, n10) => {
    Object.defineProperty(a10, "__esModule", { value: true }), a10.elementAt = void 0;
    const s10 = n10(6129), o10 = n10(1078);
    a10.elementAt = function(e11, a11) {
      if (e11 < 0) throw new s10.ArgumentOutOfRangeError();
      const n11 = arguments.length >= 2;
      return (r10) => new o10.Observable((t10) => {
        let i10 = 0;
        const m10 = (0, o10.operate)({ destination: t10, next: (a12) => {
          i10++ === e11 && (m10.unsubscribe(), t10.next(a12), t10.complete());
        }, complete: () => {
          n11 ? (t10.next(a11), t10.complete()) : t10.error(new s10.ArgumentOutOfRangeError());
        } });
        r10.subscribe(m10);
      });
    };
  }
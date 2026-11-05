// @recovered-by cursor-re
// artifact: app/extensions/cursor-agent-worker/dist/main.js sha256:d5af94b4e40f694b81a675a0fb00fa8d060306ca064a011e953218d005b613d5
// module: 2572 range:98765..99338
// basis: webpack-id confidence: C
// method: split
// run: ext-agent 2026-11-05T10:20:08.356Z
2572: (e10, a10, n10) => {
    Object.defineProperty(a10, "__esModule", { value: true }), a10.skipUntil = void 0;
    const s10 = n10(1078), o10 = n10(4462);
    a10.skipUntil = function(e11) {
      return (a11) => new s10.Observable((n11) => {
        let r10 = false;
        const t10 = (0, s10.operate)({ destination: n11, next: () => {
          t10?.unsubscribe(), r10 = true;
        }, complete: o10.noop });
        (0, s10.from)(e11).subscribe(t10), a11.subscribe((0, s10.operate)({ destination: n11, next: (e12) => r10 && n11.next(e12) }));
      });
    };
  }
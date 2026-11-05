// @recovered-by cursor-re
// artifact: app/extensions/cursor-agent-worker/dist/main.js sha256:d5af94b4e40f694b81a675a0fb00fa8d060306ca064a011e953218d005b613d5
// module: 2227 range:94096..94758
// basis: webpack-id confidence: C
// method: split
// run: ext-agent 2026-11-05T10:20:08.356Z
2227: (e10, a10, n10) => {
    Object.defineProperty(a10, "__esModule", { value: true }), a10.sample = void 0;
    const s10 = n10(1078), o10 = n10(4462);
    a10.sample = function(e11) {
      return (a11) => new s10.Observable((n11) => {
        let r10 = false, t10 = null;
        a11.subscribe((0, s10.operate)({ destination: n11, next: (e12) => {
          r10 = true, t10 = e12;
        } })), (0, s10.from)(e11).subscribe((0, s10.operate)({ destination: n11, next: () => {
          if (r10) {
            r10 = false;
            const e12 = t10;
            t10 = null, n11.next(e12);
          }
        }, complete: o10.noop }));
      });
    };
  }
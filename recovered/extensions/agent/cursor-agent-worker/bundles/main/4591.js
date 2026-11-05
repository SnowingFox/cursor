// @recovered-by cursor-re
// artifact: app/extensions/cursor-agent-worker/dist/main.js sha256:d5af94b4e40f694b81a675a0fb00fa8d060306ca064a011e953218d005b613d5
// module: 4591 range:147319..147710
// basis: webpack-id confidence: C
// method: split
// run: ext-agent 2026-11-05T10:20:08.356Z
4591: (e10, a10, n10) => {
    Object.defineProperty(a10, "__esModule", { value: true }), a10.filter = void 0;
    const s10 = n10(1078);
    a10.filter = function(e11, a11) {
      return (n11) => new s10.Observable((o10) => {
        let r10 = 0;
        n11.subscribe((0, s10.operate)({ destination: o10, next: (n12) => e11.call(a11, n12, r10++) && o10.next(n12) }));
      });
    };
  }
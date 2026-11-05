// @recovered-by cursor-re
// artifact: app/extensions/cursor-agent-worker/dist/main.js sha256:d5af94b4e40f694b81a675a0fb00fa8d060306ca064a011e953218d005b613d5
// module: 2120 range:92576..93100
// basis: webpack-id confidence: C
// method: split
// run: ext-agent 2026-11-05T10:20:08.356Z
2120: (e10, a10, n10) => {
    Object.defineProperty(a10, "__esModule", { value: true }), a10.switchScan = void 0;
    const s10 = n10(711), o10 = n10(1078);
    a10.switchScan = function(e11, a11) {
      return (n11) => new o10.Observable((r10) => {
        let t10 = a11;
        return (0, s10.switchMap)((a12, n12) => e11(t10, a12, n12))(n11).subscribe((0, o10.operate)({ destination: r10, next: (e12) => {
          t10 = e12, r10.next(e12);
        } })), () => {
          t10 = null;
        };
      });
    };
  }
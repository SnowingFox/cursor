// @recovered-by cursor-re
// artifact: app/extensions/cursor-agent-worker/dist/main.js sha256:d5af94b4e40f694b81a675a0fb00fa8d060306ca064a011e953218d005b613d5
// module: 778 range:24874..25362
// basis: webpack-id confidence: C
// method: split
// run: ext-agent 2026-11-05T10:20:08.356Z
778: (e10, a10, n10) => {
    Object.defineProperty(a10, "__esModule", { value: true }), a10.defaultIfEmpty = void 0;
    const s10 = n10(1078);
    a10.defaultIfEmpty = function(e11) {
      return (a11) => new s10.Observable((n11) => {
        let o10 = false;
        a11.subscribe((0, s10.operate)({ destination: n11, next: (e12) => {
          o10 = true, n11.next(e12);
        }, complete: () => {
          o10 || n11.next(e11), n11.complete();
        } }));
      });
    };
  }
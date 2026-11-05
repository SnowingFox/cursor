// @recovered-by cursor-re
// artifact: app/extensions/cursor-agent-worker/dist/main.js sha256:d5af94b4e40f694b81a675a0fb00fa8d060306ca064a011e953218d005b613d5
// module: 8613 range:329784..330333
// basis: webpack-id confidence: C
// method: split
// run: ext-agent 2026-11-05T10:20:08.356Z
8613: (e10, a10, n10) => {
    Object.defineProperty(a10, "__esModule", { value: true }), a10.throwIfEmpty = void 0;
    const s10 = n10(231), o10 = n10(1078);
    function r10() {
      return new s10.EmptyError();
    }
    a10.throwIfEmpty = function(e11 = r10) {
      return (a11) => new o10.Observable((n11) => {
        let s11 = false;
        a11.subscribe((0, o10.operate)({ destination: n11, next: (e12) => {
          s11 = true, n11.next(e12);
        }, complete: () => s11 ? n11.complete() : n11.error(e11()) }));
      });
    };
  }
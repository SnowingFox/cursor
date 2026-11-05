// @recovered-by cursor-re
// artifact: app/extensions/cursor-agent-worker/dist/main.js sha256:d5af94b4e40f694b81a675a0fb00fa8d060306ca064a011e953218d005b613d5
// module: 7529 range:290333..290948
// basis: webpack-id confidence: C
// method: split
// run: ext-agent 2026-11-05T10:20:08.356Z
7529: (e10, a10, n10) => {
    Object.defineProperty(a10, "__esModule", { value: true }), a10.distinctUntilChanged = void 0;
    const s10 = n10(4896), o10 = n10(1078);
    function r10(e11, a11) {
      return e11 === a11;
    }
    a10.distinctUntilChanged = function(e11, a11 = s10.identity) {
      return e11 = e11 ?? r10, (n11) => new o10.Observable((s11) => {
        let r11, t10 = true;
        n11.subscribe((0, o10.operate)({ destination: s11, next: (n12) => {
          const o11 = a11(n12);
          !t10 && e11(r11, o11) || (t10 = false, r11 = o11, s11.next(n12));
        } }));
      });
    };
  }
// @recovered-by cursor-re
// artifact: app/extensions/cursor-agent-worker/dist/main.js sha256:d5af94b4e40f694b81a675a0fb00fa8d060306ca064a011e953218d005b613d5
// module: 3882 range:133946..134611
// basis: webpack-id confidence: C
// method: split
// run: ext-agent 2026-11-05T10:20:08.356Z
3882: (e10, a10, n10) => {
    Object.defineProperty(a10, "__esModule", { value: true }), a10.skipLast = void 0;
    const s10 = n10(4896), o10 = n10(1078);
    a10.skipLast = function(e11) {
      return e11 <= 0 ? s10.identity : (a11) => new o10.Observable((n11) => {
        let s11 = new Array(e11), r10 = 0;
        return a11.subscribe((0, o10.operate)({ destination: n11, next: (a12) => {
          const o11 = r10++;
          if (o11 < e11) s11[o11] = a12;
          else {
            const r11 = o11 % e11, t10 = s11[r11];
            s11[r11] = a12, n11.next(t10);
          }
        } })), () => {
          s11 = null;
        };
      });
    };
  }
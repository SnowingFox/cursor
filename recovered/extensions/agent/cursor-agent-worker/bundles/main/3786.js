// @recovered-by cursor-re
// artifact: app/extensions/cursor-agent-worker/dist/main.js sha256:d5af94b4e40f694b81a675a0fb00fa8d060306ca064a011e953218d005b613d5
// module: 3786 range:133228..133944
// basis: webpack-id confidence: C
// method: split
// run: ext-agent 2026-11-05T10:20:08.356Z
3786: (e10, a10, n10) => {
    Object.defineProperty(a10, "__esModule", { value: true }), a10.takeLast = void 0;
    const s10 = n10(744), o10 = n10(1078);
    a10.takeLast = function(e11) {
      return e11 <= 0 ? () => s10.EMPTY : (a11) => new o10.Observable((n11) => {
        let s11 = new Array(e11), r10 = 0;
        a11.subscribe((0, o10.operate)({ destination: n11, next: (a12) => {
          s11[r10++ % e11] = a12;
        }, complete: () => {
          const a12 = e11 <= r10 ? r10 : 0, o11 = Math.min(e11, r10);
          for (let r11 = 0; r11 < o11; r11++) n11.next(s11[(a12 + r11) % e11]);
          n11.complete();
        }, finalize: () => {
          s11 = null;
        } }));
      });
    };
  }
// @recovered-by cursor-re
// artifact: app/extensions/cursor-agent-worker/dist/main.js sha256:d5af94b4e40f694b81a675a0fb00fa8d060306ca064a011e953218d005b613d5
// module: 7742 range:293169..293682
// basis: webpack-id confidence: C
// method: split
// run: ext-agent 2026-11-05T10:20:08.356Z
7742: (e10, a10, n10) => {
    Object.defineProperty(a10, "__esModule", { value: true }), a10.take = void 0;
    const s10 = n10(744), o10 = n10(1078);
    a10.take = function(e11) {
      return e11 <= 0 ? () => s10.EMPTY : (a11) => new o10.Observable((n11) => {
        let s11 = 0;
        const r10 = (0, o10.operate)({ destination: n11, next: (a12) => {
          ++s11 < e11 ? n11.next(a12) : (r10.unsubscribe(), n11.next(a12), n11.complete());
        } });
        a11.subscribe(r10);
      });
    };
  }
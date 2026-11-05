// @recovered-by cursor-re
// artifact: app/extensions/cursor-agent-worker/dist/main.js sha256:d5af94b4e40f694b81a675a0fb00fa8d060306ca064a011e953218d005b613d5
// module: 711 range:23953..24670
// basis: webpack-id confidence: C
// method: split
// run: ext-agent 2026-11-05T10:20:08.356Z
711: (e10, a10, n10) => {
    Object.defineProperty(a10, "__esModule", { value: true }), a10.switchMap = void 0;
    const s10 = n10(1078);
    a10.switchMap = function(e11) {
      return (a11) => new s10.Observable((n11) => {
        let o10 = null, r10 = 0, t10 = false;
        const i10 = () => t10 && !o10 && n11.complete();
        a11.subscribe((0, s10.operate)({ destination: n11, next: (a12) => {
          o10?.unsubscribe();
          const t11 = r10++;
          (0, s10.from)(e11(a12, t11)).subscribe(o10 = (0, s10.operate)({ destination: n11, complete: () => {
            o10 = null, i10();
          } }));
        }, complete: () => {
          t10 = true, i10();
        } }));
      });
    };
  }
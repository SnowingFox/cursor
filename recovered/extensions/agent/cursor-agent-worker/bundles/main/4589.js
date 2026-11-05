// @recovered-by cursor-re
// artifact: app/extensions/cursor-agent-worker/dist/main.js sha256:d5af94b4e40f694b81a675a0fb00fa8d060306ca064a011e953218d005b613d5
// module: 4589 range:146896..147317
// basis: webpack-id confidence: C
// method: split
// run: ext-agent 2026-11-05T10:20:08.356Z
4589: (e10, a10, n10) => {
    Object.defineProperty(a10, "__esModule", { value: true }), a10.using = void 0;
    const s10 = n10(1078), o10 = n10(744);
    a10.using = function(e11, a11) {
      return new s10.Observable((n11) => {
        const r10 = e11(), t10 = a11(r10);
        return (t10 ? (0, s10.from)(t10) : o10.EMPTY).subscribe(n11), () => {
          r10 && r10.unsubscribe();
        };
      });
    };
  }
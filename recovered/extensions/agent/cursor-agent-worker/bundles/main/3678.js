// @recovered-by cursor-re
// artifact: app/extensions/cursor-agent-worker/dist/main.js sha256:d5af94b4e40f694b81a675a0fb00fa8d060306ca064a011e953218d005b613d5
// module: 3678 range:131198..131733
// basis: webpack-id confidence: C
// method: split
// run: ext-agent 2026-11-05T10:20:08.356Z
3678: (e10, a10, n10) => {
    Object.defineProperty(a10, "__esModule", { value: true }), a10.lastValueFrom = void 0;
    const s10 = n10(231);
    a10.lastValueFrom = function(e11, a11) {
      const n11 = "object" == typeof a11;
      return new Promise((o10, r10) => {
        let t10, i10 = false;
        e11.subscribe({ next: (e12) => {
          t10 = e12, i10 = true;
        }, error: r10, complete: () => {
          i10 ? o10(t10) : n11 ? o10(a11.defaultValue) : r10(new s10.EmptyError());
        } });
      });
    };
  }
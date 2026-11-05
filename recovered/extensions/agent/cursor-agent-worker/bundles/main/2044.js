// @recovered-by cursor-re
// artifact: app/extensions/cursor-agent-worker/dist/main.js sha256:d5af94b4e40f694b81a675a0fb00fa8d060306ca064a011e953218d005b613d5
// module: 2044 range:91792..92574
// basis: webpack-id confidence: C
// method: split
// run: ext-agent 2026-11-05T10:20:08.356Z
2044: (e10, a10, n10) => {
    Object.defineProperty(a10, "__esModule", { value: true }), a10.tap = void 0;
    const s10 = n10(1078), o10 = n10(4896);
    a10.tap = function(e11) {
      const a11 = (0, s10.isFunction)(e11) ? { next: e11 } : e11;
      return a11 ? (e12) => new s10.Observable((n11) => {
        a11.subscribe?.();
        let o11 = true;
        e12.subscribe((0, s10.operate)({ destination: n11, next: (e13) => {
          a11.next?.(e13), n11.next(e13);
        }, error: (e13) => {
          o11 = false, a11.error?.(e13), n11.error(e13);
        }, complete: () => {
          o11 = false, a11.complete?.(), n11.complete();
        }, finalize: () => {
          o11 && a11.unsubscribe?.(), a11.finalize?.();
        } }));
      }) : o10.identity;
    };
  }
// @recovered-by cursor-re
// artifact: app/extensions/cursor-agent-worker/dist/main.js sha256:d5af94b4e40f694b81a675a0fb00fa8d060306ca064a011e953218d005b613d5
// module: 283 range:3337..4727
// basis: webpack-id confidence: C
// method: split
// run: ext-agent 2026-11-05T10:20:08.356Z
283: (e10, a10, n10) => {
    Object.defineProperty(a10, "__esModule", { value: true }), a10.retry = void 0;
    const s10 = n10(1078), o10 = n10(4896), r10 = n10(444);
    a10.retry = function(e11 = 1 / 0) {
      let a11;
      a11 = e11 && "object" == typeof e11 ? e11 : { count: e11 };
      const { count: n11 = 1 / 0, delay: t10, resetOnSuccess: i10 = false } = a11;
      return n11 <= 0 ? o10.identity : (e12) => new s10.Observable((a12) => {
        let o11, m10 = 0;
        const l10 = () => {
          let d10 = false;
          o11 = e12.subscribe((0, s10.operate)({ destination: a12, next: (e13) => {
            i10 && (m10 = 0), a12.next(e13);
          }, error: (e13) => {
            if (m10++ < n11) {
              const n12 = () => {
                o11 ? (o11.unsubscribe(), o11 = null, l10()) : d10 = true;
              };
              if (null != t10) {
                const o12 = "number" == typeof t10 ? (0, r10.timer)(t10) : (0, s10.from)(t10(e13, m10)), i11 = (0, s10.operate)({ destination: a12, next: () => {
                  i11.unsubscribe(), n12();
                }, complete: () => {
                  a12.complete();
                } });
                o12.subscribe(i11);
              } else n12();
            } else a12.error(e13);
          } })), d10 && (o11.unsubscribe(), o11 = null, l10());
        };
        l10();
      });
    };
  }
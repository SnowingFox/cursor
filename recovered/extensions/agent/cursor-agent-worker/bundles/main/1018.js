// @recovered-by cursor-re
// artifact: app/extensions/cursor-agent-worker/dist/main.js sha256:d5af94b4e40f694b81a675a0fb00fa8d060306ca064a011e953218d005b613d5
// module: 1018 range:29024..30097
// basis: webpack-id confidence: C
// method: split
// run: ext-agent 2026-11-05T10:20:08.356Z
1018: (e10, a10, n10) => {
    Object.defineProperty(a10, "__esModule", { value: true }), a10.repeat = void 0;
    const s10 = n10(1078), o10 = n10(744), r10 = n10(444);
    a10.repeat = function(e11) {
      let a11, n11 = 1 / 0;
      return null != e11 && ("object" == typeof e11 ? { count: n11 = 1 / 0, delay: a11 } = e11 : n11 = e11), n11 <= 0 ? () => o10.EMPTY : (e12) => new s10.Observable((o11) => {
        let t10, i10 = 0;
        const m10 = () => {
          if (t10?.unsubscribe(), t10 = null, null != a11) {
            const e13 = "number" == typeof a11 ? (0, r10.timer)(a11) : (0, s10.from)(a11(i10)), n12 = (0, s10.operate)({ destination: o11, next: () => {
              n12.unsubscribe(), l10();
            } });
            e13.subscribe(n12);
          } else l10();
        }, l10 = () => {
          let a12 = false;
          t10 = e12.subscribe((0, s10.operate)({ destination: o11, complete: () => {
            ++i10 < n11 ? t10 ? m10() : a12 = true : o11.complete();
          } })), a12 && m10();
        };
        l10();
      });
    };
  }
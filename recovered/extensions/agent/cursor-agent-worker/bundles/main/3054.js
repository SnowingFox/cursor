// @recovered-by cursor-re
// artifact: app/extensions/cursor-agent-worker/dist/main.js sha256:d5af94b4e40f694b81a675a0fb00fa8d060306ca064a011e953218d005b613d5
// module: 3054 range:113390..114950
// basis: webpack-id confidence: C
// method: split
// run: ext-agent 2026-11-05T10:20:08.356Z
3054: (e10, a10, n10) => {
    Object.defineProperty(a10, "__esModule", { value: true }), a10.share = void 0;
    const s10 = n10(1078), o10 = n10(3043);
    function r10(e11, a11, ...n11) {
      if (true === a11) return void e11();
      if (false === a11) return;
      const o11 = new s10.Subscriber({ next: () => {
        o11.unsubscribe(), e11();
      } });
      return (0, s10.from)(a11(...n11)).subscribe(o11);
    }
    a10.share = function(e11 = {}) {
      const { connector: a11 = () => new o10.Subject(), resetOnError: n11 = true, resetOnComplete: t10 = true, resetOnRefCountZero: i10 = true } = e11;
      return (e12) => {
        let o11, m10, l10, d10 = 0, c10 = false, T10 = false;
        const p10 = () => {
          m10?.unsubscribe(), m10 = void 0;
        }, _10 = () => {
          p10(), o11 = l10 = void 0, c10 = T10 = false;
        }, k10 = () => {
          const e13 = o11;
          _10(), e13?.unsubscribe();
        };
        return new s10.Observable((u10) => {
          d10++, T10 || c10 || p10();
          const g10 = l10 = l10 ?? a11();
          u10.add(() => {
            d10--, 0 !== d10 || T10 || c10 || (m10 = r10(k10, i10));
          }), g10.subscribe(u10), !o11 && d10 > 0 && (o11 = new s10.Subscriber({ next: (e13) => g10.next(e13), error: (e13) => {
            T10 = true, p10(), m10 = r10(_10, n11, e13), g10.error(e13);
          }, complete: () => {
            c10 = true, p10(), m10 = r10(_10, t10), g10.complete();
          } }), (0, s10.from)(e12).subscribe(o11));
        });
      };
    };
  }
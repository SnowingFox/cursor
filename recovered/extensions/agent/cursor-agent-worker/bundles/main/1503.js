// @recovered-by cursor-re
// artifact: app/extensions/cursor-agent-worker/dist/main.js sha256:d5af94b4e40f694b81a675a0fb00fa8d060306ca064a011e953218d005b613d5
// module: 1503 range:81188..82403
// basis: webpack-id confidence: C
// method: split
// run: ext-agent 2026-11-05T10:20:08.356Z
1503: (e10, a10, n10) => {
    Object.defineProperty(a10, "__esModule", { value: true }), a10.combineLatestInit = a10.combineLatest = void 0;
    const s10 = n10(1078), o10 = n10(6800), r10 = n10(4896), t10 = n10(845), i10 = n10(744);
    function m10(e11, a11 = r10.identity) {
      return (n11) => {
        const { length: o11 } = e11, r11 = new Array(o11);
        let t11 = o11, i11 = o11;
        for (let m11 = 0; m11 < o11; m11++) {
          const o12 = (0, s10.from)(e11[m11]);
          let l10 = false;
          o12.subscribe((0, s10.operate)({ destination: n11, next: (e12) => {
            r11[m11] = e12, l10 || (l10 = true, i11--), i11 || n11.next(a11(Array.from(r11)));
          }, complete: () => {
            --t11 || n11.complete();
          } }));
        }
      };
    }
    a10.combineLatest = function(e11, a11) {
      const n11 = (0, o10.arrayOrObject)(e11);
      if (!n11) throw new TypeError("sources must be an array or object");
      const { args: l10, keys: d10 } = n11;
      return 0 === l10.length ? i10.EMPTY : new s10.Observable(m10(l10, d10 ? (e12) => (0, t10.createObject)(d10, e12) : a11 ? (e12) => a11(...e12) : r10.identity));
    }, a10.combineLatestInit = m10;
  }
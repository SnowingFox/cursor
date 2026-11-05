// @recovered-by cursor-re
// artifact: app/extensions/cursor-agent-worker/dist/main.js sha256:d5af94b4e40f694b81a675a0fb00fa8d060306ca064a011e953218d005b613d5
// module: 5665 range:168057..169158
// basis: webpack-id confidence: C
// method: split
// run: ext-agent 2026-11-05T10:20:08.356Z
5665: (e10, a10, n10) => {
    Object.defineProperty(a10, "__esModule", { value: true }), a10.forkJoin = void 0;
    const s10 = n10(1078), o10 = n10(6800), r10 = n10(5619), t10 = n10(5683), i10 = n10(845), m10 = n10(231);
    a10.forkJoin = function(...e11) {
      const a11 = (0, r10.popResultSelector)(e11), { args: n11, keys: l10 } = (0, o10.argsArgArrayOrObject)(e11), d10 = new s10.Observable((e12) => {
        const { length: a12 } = n11;
        if (!a12) return void e12.complete();
        const o11 = new Array(a12);
        let r11 = a12, t11 = a12;
        for (let d11 = 0; d11 < a12; d11++) {
          let a13 = false;
          (0, s10.from)(n11[d11]).subscribe((0, s10.operate)({ destination: e12, next: (e13) => {
            a13 || (a13 = true, t11--), o11[d11] = e13;
          }, complete: () => r11--, finalize: () => {
            r11 && a13 || (0 === t11 ? (e12.next(l10 ? (0, i10.createObject)(l10, o11) : o11), e12.complete()) : e12.error(new m10.EmptyError()));
          } }));
        }
      });
      return a11 ? (0, t10.mapOneOrManyArgs)(a11)(d10) : d10;
    };
  }
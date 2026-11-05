// @recovered-by cursor-re
// artifact: app/extensions/cursor-agent-worker/dist/main.js sha256:d5af94b4e40f694b81a675a0fb00fa8d060306ca064a011e953218d005b613d5
// module: 9782 range:362408..363438
// basis: webpack-id confidence: C
// method: split
// run: ext-agent 2026-11-05T10:20:08.356Z
9782: (e10, a10, n10) => {
    Object.defineProperty(a10, "__esModule", { value: true }), a10.sequenceEqual = void 0;
    const s10 = n10(1078);
    a10.sequenceEqual = function(e11, a11 = (e12, a12) => e12 === a12) {
      return (n11) => new s10.Observable((o10) => {
        const r10 = { buffer: [], complete: false }, t10 = { buffer: [], complete: false }, i10 = (e12) => {
          o10.next(e12), o10.complete();
        }, m10 = (e12, n12) => {
          const r11 = (0, s10.operate)({ destination: o10, next: (s11) => {
            const { buffer: o11, complete: r12 } = n12;
            0 === o11.length ? r12 ? i10(false) : e12.buffer.push(s11) : !a11(s11, o11.shift()) && i10(false);
          }, complete: () => {
            e12.complete = true;
            const { complete: a12, buffer: s11 } = n12;
            a12 && i10(0 === s11.length), r11?.unsubscribe();
          } });
          return r11;
        };
        n11.subscribe(m10(r10, t10)), (0, s10.from)(e11).subscribe(m10(t10, r10));
      });
    };
  }
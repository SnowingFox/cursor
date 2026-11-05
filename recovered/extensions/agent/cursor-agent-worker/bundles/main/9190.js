// @recovered-by cursor-re
// artifact: app/extensions/cursor-agent-worker/dist/main.js sha256:d5af94b4e40f694b81a675a0fb00fa8d060306ca064a011e953218d005b613d5
// module: 9190 range:350283..351377
// basis: webpack-id confidence: C
// method: split
// run: ext-agent 2026-11-05T10:20:08.356Z
9190: (e10, a10, n10) => {
    Object.defineProperty(a10, "__esModule", { value: true }), a10.zip = void 0;
    const s10 = n10(1078), o10 = n10(9031), r10 = n10(744), t10 = n10(5619);
    a10.zip = function(...e11) {
      const a11 = (0, t10.popResultSelector)(e11), n11 = (0, o10.argsOrArgArray)(e11);
      return n11.length ? new s10.Observable((e12) => {
        let o11 = n11.map(() => []), r11 = n11.map(() => false);
        e12.add(() => {
          o11 = r11 = null;
        });
        for (let t11 = 0; !e12.closed && t11 < n11.length; t11++) (0, s10.from)(n11[t11]).subscribe((0, s10.operate)({ destination: e12, next: (n12) => {
          if (o11[t11].push(n12), o11.every((e13) => e13.length)) {
            const n13 = o11.map((e13) => e13.shift());
            e12.next(a11 ? a11(...n13) : n13), o11.some((e13, a12) => !e13.length && r11[a12]) && e12.complete();
          }
        }, complete: () => {
          r11[t11] = true, !o11[t11].length && e12.complete();
        } }));
        return () => {
          o11 = r11 = null;
        };
      }) : r10.EMPTY;
    };
  }
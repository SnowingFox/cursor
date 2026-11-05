// @recovered-by cursor-re
// artifact: app/extensions/cursor-agent-worker/dist/main.js sha256:d5af94b4e40f694b81a675a0fb00fa8d060306ca064a011e953218d005b613d5
// module: 427 range:5426..5930
// basis: webpack-id confidence: C
// method: split
// run: ext-agent 2026-11-05T10:20:08.356Z
427: (e10, a10, n10) => {
    Object.defineProperty(a10, "__esModule", { value: true }), a10.connect = void 0;
    const s10 = n10(1078), o10 = n10(3043), r10 = n10(6824), t10 = { connector: () => new o10.Subject() };
    a10.connect = function(e11, a11 = t10) {
      const { connector: n11 } = a11;
      return (a12) => new s10.Observable((o11) => {
        const t11 = n11();
        (0, s10.from)(e11((0, r10.fromSubscribable)(t11))).subscribe(o11), o11.add(a12.subscribe(t11));
      });
    };
  }
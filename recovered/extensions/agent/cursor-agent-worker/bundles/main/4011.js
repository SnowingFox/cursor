// @recovered-by cursor-re
// artifact: app/extensions/cursor-agent-worker/dist/main.js sha256:d5af94b4e40f694b81a675a0fb00fa8d060306ca064a011e953218d005b613d5
// module: 4011 range:135852..136354
// basis: webpack-id confidence: C
// method: split
// run: ext-agent 2026-11-05T10:20:08.356Z
4011: (e10, a10, n10) => {
    Object.defineProperty(a10, "__esModule", { value: true }), a10.fromEventPattern = void 0;
    const s10 = n10(1078), o10 = n10(5683);
    a10.fromEventPattern = function e11(a11, n11, r10) {
      return r10 ? (0, o10.mapOneOrManyArgs)(r10)(e11(a11, n11)) : new s10.Observable((e12) => {
        const o11 = (...a12) => e12.next(1 === a12.length ? a12[0] : a12), r11 = a11(o11);
        return (0, s10.isFunction)(n11) ? () => n11(o11, r11) : void 0;
      });
    };
  }
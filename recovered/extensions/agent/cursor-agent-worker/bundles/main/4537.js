// @recovered-by cursor-re
// artifact: app/extensions/cursor-agent-worker/dist/main.js sha256:d5af94b4e40f694b81a675a0fb00fa8d060306ca064a011e953218d005b613d5
// module: 4537 range:145305..146894
// basis: webpack-id confidence: C
// method: split
// run: ext-agent 2026-11-05T10:20:08.356Z
4537: (e10, a10, n10) => {
    Object.defineProperty(a10, "__esModule", { value: true }), a10.fromEvent = void 0;
    const s10 = n10(1078), o10 = n10(5683), r10 = ["addListener", "removeListener"], t10 = ["addEventListener", "removeEventListener"], i10 = ["on", "off"];
    function m10(e11, a11, n11, s11, o11) {
      const [m11, T10] = c10(p10 = n11) ? t10 : l10(p10) ? r10 : d10(p10) ? i10 : [];
      var p10;
      if (!m11 || !T10) throw new TypeError("Invalid event target");
      n11[m11](s11, e11, o11), a11.add(() => n11[T10](s11, e11, o11));
    }
    function l10(e11) {
      return (0, s10.isFunction)(e11.addListener) && (0, s10.isFunction)(e11.removeListener);
    }
    function d10(e11) {
      return (0, s10.isFunction)(e11.on) && (0, s10.isFunction)(e11.off);
    }
    function c10(e11) {
      return (0, s10.isFunction)(e11.addEventListener) && (0, s10.isFunction)(e11.removeEventListener);
    }
    a10.fromEvent = function e11(a11, n11, r11, t11) {
      if ((0, s10.isFunction)(r11) && (t11 = r11, r11 = void 0), t11) return (0, o10.mapOneOrManyArgs)(t11)(e11(a11, n11, r11));
      const i11 = l10(a11) || d10(a11) || c10(a11);
      if (!i11 && !(0, s10.isArrayLike)(a11)) throw new TypeError("Invalid event target");
      return new s10.Observable((e12) => {
        const s11 = (...a12) => e12.next(1 < a12.length ? a12 : a12[0]);
        if (i11) m10(s11, e12, a11, n11, r11);
        else for (let o11 = 0; o11 < a11.length && !e12.closed; o11++) {
          const t12 = a11[o11];
          m10(s11, e12, t12, n11, r11);
        }
      });
    };
  }
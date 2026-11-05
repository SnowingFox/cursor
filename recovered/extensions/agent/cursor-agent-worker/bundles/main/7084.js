// @recovered-by cursor-re
// artifact: app/extensions/cursor-agent-worker/dist/main.js sha256:d5af94b4e40f694b81a675a0fb00fa8d060306ca064a011e953218d005b613d5
// module: 7084 range:201190..205324
// basis: webpack-id confidence: C
// method: split
// run: ext-agent 2026-11-05T10:20:08.356Z
7084: (e10, a10) => {
    Object.defineProperty(a10, "__esModule", { value: true }), a10.varint32read = a10.varint32write = a10.uInt64ToString = a10.int64ToString = a10.int64FromString = a10.varint64write = a10.varint64read = void 0, a10.varint64read = function() {
      let e11 = 0, a11 = 0;
      for (let n12 = 0; n12 < 28; n12 += 7) {
        let s11 = this.buf[this.pos++];
        if (e11 |= (127 & s11) << n12, !(128 & s11)) return this.assertBounds(), [e11, a11];
      }
      let n11 = this.buf[this.pos++];
      if (e11 |= (15 & n11) << 28, a11 = (112 & n11) >> 4, !(128 & n11)) return this.assertBounds(), [e11, a11];
      for (let n12 = 3; n12 <= 31; n12 += 7) {
        let s11 = this.buf[this.pos++];
        if (a11 |= (127 & s11) << n12, !(128 & s11)) return this.assertBounds(), [e11, a11];
      }
      throw new Error("invalid varint");
    }, a10.varint64write = function(e11, a11, n11) {
      for (let s12 = 0; s12 < 28; s12 += 7) {
        const o12 = e11 >>> s12, r11 = !(o12 >>> 7 == 0 && 0 == a11), t11 = 255 & (r11 ? 128 | o12 : o12);
        if (n11.push(t11), !r11) return;
      }
      const s11 = e11 >>> 28 & 15 | (7 & a11) << 4, o11 = !!(a11 >> 3);
      if (n11.push(255 & (o11 ? 128 | s11 : s11)), o11) {
        for (let e12 = 3; e12 < 31; e12 += 7) {
          const s12 = a11 >>> e12, o12 = !(s12 >>> 7 == 0), r11 = 255 & (o12 ? 128 | s12 : s12);
          if (n11.push(r11), !o12) return;
        }
        n11.push(a11 >>> 31 & 1);
      }
    };
    const n10 = 4294967296;
    function s10(e11, a11) {
      if ({ lo: e11, hi: a11 } = (function(e12, a12) {
        return { lo: e12 >>> 0, hi: a12 >>> 0 };
      })(e11, a11), a11 <= 2097151) return String(n10 * a11 + e11);
      const s11 = 16777215 & (e11 >>> 24 | a11 << 8), o11 = a11 >> 16 & 65535;
      let r11 = (16777215 & e11) + 6777216 * s11 + 6710656 * o11, i10 = s11 + 8147497 * o11, m10 = 2 * o11;
      const l10 = 1e7;
      return r11 >= l10 && (i10 += Math.floor(r11 / l10), r11 %= l10), i10 >= l10 && (m10 += Math.floor(i10 / l10), i10 %= l10), m10.toString() + t10(i10) + t10(r11);
    }
    function o10(e11, a11) {
      return { lo: 0 | e11, hi: 0 | a11 };
    }
    function r10(e11, a11) {
      return a11 = ~a11, e11 ? e11 = 1 + ~e11 : a11 += 1, o10(e11, a11);
    }
    a10.int64FromString = function(e11) {
      const a11 = "-" === e11[0];
      a11 && (e11 = e11.slice(1));
      const s11 = 1e6;
      let t11 = 0, i10 = 0;
      function m10(a12, o11) {
        const r11 = Number(e11.slice(a12, o11));
        i10 *= s11, t11 = t11 * s11 + r11, t11 >= n10 && (i10 += t11 / n10 | 0, t11 %= n10);
      }
      return m10(-24, -18), m10(-18, -12), m10(-12, -6), m10(-6), a11 ? r10(t11, i10) : o10(t11, i10);
    }, a10.int64ToString = function(e11, a11) {
      let n11 = o10(e11, a11);
      const t11 = 2147483648 & n11.hi;
      t11 && (n11 = r10(n11.lo, n11.hi));
      const i10 = s10(n11.lo, n11.hi);
      return t11 ? "-" + i10 : i10;
    }, a10.uInt64ToString = s10;
    const t10 = (e11) => {
      const a11 = String(e11);
      return "0000000".slice(a11.length) + a11;
    };
    a10.varint32write = function(e11, a11) {
      if (e11 >= 0) {
        for (; e11 > 127; ) a11.push(127 & e11 | 128), e11 >>>= 7;
        a11.push(e11);
      } else {
        for (let n11 = 0; n11 < 9; n11++) a11.push(127 & e11 | 128), e11 >>= 7;
        a11.push(1);
      }
    }, a10.varint32read = function() {
      let e11 = this.buf[this.pos++], a11 = 127 & e11;
      if (!(128 & e11)) return this.assertBounds(), a11;
      if (e11 = this.buf[this.pos++], a11 |= (127 & e11) << 7, !(128 & e11)) return this.assertBounds(), a11;
      if (e11 = this.buf[this.pos++], a11 |= (127 & e11) << 14, !(128 & e11)) return this.assertBounds(), a11;
      if (e11 = this.buf[this.pos++], a11 |= (127 & e11) << 21, !(128 & e11)) return this.assertBounds(), a11;
      e11 = this.buf[this.pos++], a11 |= (15 & e11) << 28;
      for (let a12 = 5; 128 & e11 && a12 < 10; a12++) e11 = this.buf[this.pos++];
      if (128 & e11) throw new Error("invalid varint");
      return this.assertBounds(), a11 >>> 0;
    };
  }
// @recovered-by cursor-re
// artifact: app/extensions/cursor-deeplink/dist/main.js sha256:2b0091d260814e411af8319789fee5fe8b4b75d7c27c85b905f80c4d53d995f3
// module: 7084 range:634856..638703
// basis: webpack-id confidence: C
// method: split
// run: ext-agent 2026-11-05T10:20:08.356Z
7084: (e2, t2) => {
    "use strict";
    Object.defineProperty(t2, "__esModule", { value: true }), t2.varint32read = t2.varint32write = t2.uInt64ToString = t2.int64ToString = t2.int64FromString = t2.varint64write = t2.varint64read = void 0, t2.varint64read = function() {
      let e3 = 0, t3 = 0;
      for (let A4 = 0; A4 < 28; A4 += 7) {
        let n3 = this.buf[this.pos++];
        if (e3 |= (127 & n3) << A4, !(128 & n3)) return this.assertBounds(), [e3, t3];
      }
      let A3 = this.buf[this.pos++];
      if (e3 |= (15 & A3) << 28, t3 = (112 & A3) >> 4, !(128 & A3)) return this.assertBounds(), [e3, t3];
      for (let A4 = 3; A4 <= 31; A4 += 7) {
        let n3 = this.buf[this.pos++];
        if (t3 |= (127 & n3) << A4, !(128 & n3)) return this.assertBounds(), [e3, t3];
      }
      throw new Error("invalid varint");
    }, t2.varint64write = function(e3, t3, A3) {
      for (let n4 = 0; n4 < 28; n4 += 7) {
        const r4 = e3 >>> n4, o3 = !(r4 >>> 7 == 0 && 0 == t3), s2 = 255 & (o3 ? 128 | r4 : r4);
        if (A3.push(s2), !o3) return;
      }
      const n3 = e3 >>> 28 & 15 | (7 & t3) << 4, r3 = !!(t3 >> 3);
      if (A3.push(255 & (r3 ? 128 | n3 : n3)), r3) {
        for (let e4 = 3; e4 < 31; e4 += 7) {
          const n4 = t3 >>> e4, r4 = !(n4 >>> 7 == 0), o3 = 255 & (r4 ? 128 | n4 : n4);
          if (A3.push(o3), !r4) return;
        }
        A3.push(t3 >>> 31 & 1);
      }
    };
    const A2 = 4294967296;
    function n2(e3, t3) {
      if ({ lo: e3, hi: t3 } = (function(e4, t4) {
        return { lo: e4 >>> 0, hi: t4 >>> 0 };
      })(e3, t3), t3 <= 2097151) return String(A2 * t3 + e3);
      const n3 = 16777215 & (e3 >>> 24 | t3 << 8), r3 = t3 >> 16 & 65535;
      let o3 = (16777215 & e3) + 6777216 * n3 + 6710656 * r3, i = n3 + 8147497 * r3, a = 2 * r3;
      const c = 1e7;
      return o3 >= c && (i += Math.floor(o3 / c), o3 %= c), i >= c && (a += Math.floor(i / c), i %= c), a.toString() + s(i) + s(o3);
    }
    function r2(e3, t3) {
      return { lo: 0 | e3, hi: 0 | t3 };
    }
    function o2(e3, t3) {
      return t3 = ~t3, e3 ? e3 = 1 + ~e3 : t3 += 1, r2(e3, t3);
    }
    t2.int64FromString = function(e3) {
      const t3 = "-" === e3[0];
      t3 && (e3 = e3.slice(1));
      const n3 = 1e6;
      let s2 = 0, i = 0;
      function a(t4, r3) {
        const o3 = Number(e3.slice(t4, r3));
        i *= n3, s2 = s2 * n3 + o3, s2 >= A2 && (i += s2 / A2 | 0, s2 %= A2);
      }
      return a(-24, -18), a(-18, -12), a(-12, -6), a(-6), t3 ? o2(s2, i) : r2(s2, i);
    }, t2.int64ToString = function(e3, t3) {
      let A3 = r2(e3, t3);
      const s2 = 2147483648 & A3.hi;
      s2 && (A3 = o2(A3.lo, A3.hi));
      const i = n2(A3.lo, A3.hi);
      return s2 ? "-" + i : i;
    }, t2.uInt64ToString = n2;
    const s = (e3) => {
      const t3 = String(e3);
      return "0000000".slice(t3.length) + t3;
    };
    t2.varint32write = function(e3, t3) {
      if (e3 >= 0) {
        for (; e3 > 127; ) t3.push(127 & e3 | 128), e3 >>>= 7;
        t3.push(e3);
      } else {
        for (let A3 = 0; A3 < 9; A3++) t3.push(127 & e3 | 128), e3 >>= 7;
        t3.push(1);
      }
    }, t2.varint32read = function() {
      let e3 = this.buf[this.pos++], t3 = 127 & e3;
      if (!(128 & e3)) return this.assertBounds(), t3;
      if (e3 = this.buf[this.pos++], t3 |= (127 & e3) << 7, !(128 & e3)) return this.assertBounds(), t3;
      if (e3 = this.buf[this.pos++], t3 |= (127 & e3) << 14, !(128 & e3)) return this.assertBounds(), t3;
      if (e3 = this.buf[this.pos++], t3 |= (127 & e3) << 21, !(128 & e3)) return this.assertBounds(), t3;
      e3 = this.buf[this.pos++], t3 |= (15 & e3) << 28;
      for (let t4 = 5; 128 & e3 && t4 < 10; t4++) e3 = this.buf[this.pos++];
      if (128 & e3) throw new Error("invalid varint");
      return this.assertBounds(), t3 >>> 0;
    };
  }
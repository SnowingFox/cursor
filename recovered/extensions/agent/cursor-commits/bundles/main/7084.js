// @recovered-by cursor-re
// artifact: app/extensions/cursor-commits/dist/main.js sha256:093f8518d2bba92ce25a152b40a9e7490ef35d5b45f1477f49078295148101b9
// module: 7084 range:524007..527871
// basis: webpack-id confidence: C
// method: split
// run: ext-agent 2026-11-05T10:20:08.356Z
7084: (e2, n2) => {
    "use strict";
    Object.defineProperty(n2, "__esModule", { value: true }), n2.varint32read = n2.varint32write = n2.uInt64ToString = n2.int64ToString = n2.int64FromString = n2.varint64write = n2.varint64read = void 0, n2.varint64read = function() {
      let e3 = 0, n3 = 0;
      for (let a4 = 0; a4 < 28; a4 += 7) {
        let t3 = this.buf[this.pos++];
        if (e3 |= (127 & t3) << a4, !(128 & t3)) return this.assertBounds(), [e3, n3];
      }
      let a3 = this.buf[this.pos++];
      if (e3 |= (15 & a3) << 28, n3 = (112 & a3) >> 4, !(128 & a3)) return this.assertBounds(), [e3, n3];
      for (let a4 = 3; a4 <= 31; a4 += 7) {
        let t3 = this.buf[this.pos++];
        if (n3 |= (127 & t3) << a4, !(128 & t3)) return this.assertBounds(), [e3, n3];
      }
      throw new Error("invalid varint");
    }, n2.varint64write = function(e3, n3, a3) {
      for (let t4 = 0; t4 < 28; t4 += 7) {
        const s4 = e3 >>> t4, o3 = !(s4 >>> 7 == 0 && 0 == n3), r3 = 255 & (o3 ? 128 | s4 : s4);
        if (a3.push(r3), !o3) return;
      }
      const t3 = e3 >>> 28 & 15 | (7 & n3) << 4, s3 = !!(n3 >> 3);
      if (a3.push(255 & (s3 ? 128 | t3 : t3)), s3) {
        for (let e4 = 3; e4 < 31; e4 += 7) {
          const t4 = n3 >>> e4, s4 = !(t4 >>> 7 == 0), o3 = 255 & (s4 ? 128 | t4 : t4);
          if (a3.push(o3), !s4) return;
        }
        a3.push(n3 >>> 31 & 1);
      }
    };
    const a2 = 4294967296;
    function t2(e3, n3) {
      if ({ lo: e3, hi: n3 } = (function(e4, n4) {
        return { lo: e4 >>> 0, hi: n4 >>> 0 };
      })(e3, n3), n3 <= 2097151) return String(a2 * n3 + e3);
      const t3 = 16777215 & (e3 >>> 24 | n3 << 8), s3 = n3 >> 16 & 65535;
      let o3 = (16777215 & e3) + 6777216 * t3 + 6710656 * s3, i2 = t3 + 8147497 * s3, A = 2 * s3;
      const l = 1e7;
      return o3 >= l && (i2 += Math.floor(o3 / l), o3 %= l), i2 >= l && (A += Math.floor(i2 / l), i2 %= l), A.toString() + r2(i2) + r2(o3);
    }
    function s2(e3, n3) {
      return { lo: 0 | e3, hi: 0 | n3 };
    }
    function o2(e3, n3) {
      return n3 = ~n3, e3 ? e3 = 1 + ~e3 : n3 += 1, s2(e3, n3);
    }
    n2.int64FromString = function(e3) {
      const n3 = "-" === e3[0];
      n3 && (e3 = e3.slice(1));
      const t3 = 1e6;
      let r3 = 0, i2 = 0;
      function A(n4, s3) {
        const o3 = Number(e3.slice(n4, s3));
        i2 *= t3, r3 = r3 * t3 + o3, r3 >= a2 && (i2 += r3 / a2 | 0, r3 %= a2);
      }
      return A(-24, -18), A(-18, -12), A(-12, -6), A(-6), n3 ? o2(r3, i2) : s2(r3, i2);
    }, n2.int64ToString = function(e3, n3) {
      let a3 = s2(e3, n3);
      const r3 = 2147483648 & a3.hi;
      r3 && (a3 = o2(a3.lo, a3.hi));
      const i2 = t2(a3.lo, a3.hi);
      return r3 ? "-" + i2 : i2;
    }, n2.uInt64ToString = t2;
    const r2 = (e3) => {
      const n3 = String(e3);
      return "0000000".slice(n3.length) + n3;
    };
    n2.varint32write = function(e3, n3) {
      if (e3 >= 0) {
        for (; e3 > 127; ) n3.push(127 & e3 | 128), e3 >>>= 7;
        n3.push(e3);
      } else {
        for (let a3 = 0; a3 < 9; a3++) n3.push(127 & e3 | 128), e3 >>= 7;
        n3.push(1);
      }
    }, n2.varint32read = function() {
      let e3 = this.buf[this.pos++], n3 = 127 & e3;
      if (!(128 & e3)) return this.assertBounds(), n3;
      if (e3 = this.buf[this.pos++], n3 |= (127 & e3) << 7, !(128 & e3)) return this.assertBounds(), n3;
      if (e3 = this.buf[this.pos++], n3 |= (127 & e3) << 14, !(128 & e3)) return this.assertBounds(), n3;
      if (e3 = this.buf[this.pos++], n3 |= (127 & e3) << 21, !(128 & e3)) return this.assertBounds(), n3;
      e3 = this.buf[this.pos++], n3 |= (15 & e3) << 28;
      for (let n4 = 5; 128 & e3 && n4 < 10; n4++) e3 = this.buf[this.pos++];
      if (128 & e3) throw new Error("invalid varint");
      return this.assertBounds(), n3 >>> 0;
    };
  }
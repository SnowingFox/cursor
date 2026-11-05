// @recovered-by cursor-re
// artifact: app/extensions/cursor-resolver/dist/main.js sha256:677b774c75dfff0de56084737d26169857daed3731cb62a6702840900f439aed
// module: 84 range:16364..20223
// basis: webpack-id confidence: C
// method: split
// run: ext-p0 2026-11-05T10:07:22.069Z
84: (e2, t2) => {
    Object.defineProperty(t2, "__esModule", { value: true }), t2.varint32read = t2.varint32write = t2.uInt64ToString = t2.int64ToString = t2.int64FromString = t2.varint64write = t2.varint64read = void 0, t2.varint64read = function() {
      let e3 = 0, t3 = 0;
      for (let n4 = 0; n4 < 28; n4 += 7) {
        let r3 = this.buf[this.pos++];
        if (e3 |= (127 & r3) << n4, !(128 & r3)) return this.assertBounds(), [e3, t3];
      }
      let n3 = this.buf[this.pos++];
      if (e3 |= (15 & n3) << 28, t3 = (112 & n3) >> 4, !(128 & n3)) return this.assertBounds(), [e3, t3];
      for (let n4 = 3; n4 <= 31; n4 += 7) {
        let r3 = this.buf[this.pos++];
        if (t3 |= (127 & r3) << n4, !(128 & r3)) return this.assertBounds(), [e3, t3];
      }
      throw new Error("invalid varint");
    }, t2.varint64write = function(e3, t3, n3) {
      for (let r4 = 0; r4 < 28; r4 += 7) {
        const o4 = e3 >>> r4, a3 = !(o4 >>> 7 == 0 && 0 == t3), s3 = 255 & (a3 ? 128 | o4 : o4);
        if (n3.push(s3), !a3) return;
      }
      const r3 = e3 >>> 28 & 15 | (7 & t3) << 4, o3 = !!(t3 >> 3);
      if (n3.push(255 & (o3 ? 128 | r3 : r3)), o3) {
        for (let e4 = 3; e4 < 31; e4 += 7) {
          const r4 = t3 >>> e4, o4 = !(r4 >>> 7 == 0), a3 = 255 & (o4 ? 128 | r4 : r4);
          if (n3.push(a3), !o4) return;
        }
        n3.push(t3 >>> 31 & 1);
      }
    };
    const n2 = 4294967296;
    function r2(e3, t3) {
      if ({ lo: e3, hi: t3 } = (function(e4, t4) {
        return { lo: e4 >>> 0, hi: t4 >>> 0 };
      })(e3, t3), t3 <= 2097151) return String(n2 * t3 + e3);
      const r3 = 16777215 & (e3 >>> 24 | t3 << 8), o3 = t3 >> 16 & 65535;
      let a3 = (16777215 & e3) + 6777216 * r3 + 6710656 * o3, i2 = r3 + 8147497 * o3, l2 = 2 * o3;
      const u2 = 1e7;
      return a3 >= u2 && (i2 += Math.floor(a3 / u2), a3 %= u2), i2 >= u2 && (l2 += Math.floor(i2 / u2), i2 %= u2), l2.toString() + s2(i2) + s2(a3);
    }
    function o2(e3, t3) {
      return { lo: 0 | e3, hi: 0 | t3 };
    }
    function a2(e3, t3) {
      return t3 = ~t3, e3 ? e3 = 1 + ~e3 : t3 += 1, o2(e3, t3);
    }
    t2.int64FromString = function(e3) {
      const t3 = "-" === e3[0];
      t3 && (e3 = e3.slice(1));
      const r3 = 1e6;
      let s3 = 0, i2 = 0;
      function l2(t4, o3) {
        const a3 = Number(e3.slice(t4, o3));
        i2 *= r3, s3 = s3 * r3 + a3, s3 >= n2 && (i2 += s3 / n2 | 0, s3 %= n2);
      }
      return l2(-24, -18), l2(-18, -12), l2(-12, -6), l2(-6), t3 ? a2(s3, i2) : o2(s3, i2);
    }, t2.int64ToString = function(e3, t3) {
      let n3 = o2(e3, t3);
      const s3 = 2147483648 & n3.hi;
      s3 && (n3 = a2(n3.lo, n3.hi));
      const i2 = r2(n3.lo, n3.hi);
      return s3 ? "-" + i2 : i2;
    }, t2.uInt64ToString = r2;
    const s2 = (e3) => {
      const t3 = String(e3);
      return "0000000".slice(t3.length) + t3;
    };
    t2.varint32write = function(e3, t3) {
      if (e3 >= 0) {
        for (; e3 > 127; ) t3.push(127 & e3 | 128), e3 >>>= 7;
        t3.push(e3);
      } else {
        for (let n3 = 0; n3 < 9; n3++) t3.push(127 & e3 | 128), e3 >>= 7;
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
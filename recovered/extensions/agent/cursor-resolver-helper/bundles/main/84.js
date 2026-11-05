// @recovered-by cursor-re
// artifact: app/extensions/cursor-resolver-helper/dist/main.js sha256:0eb6078f0829c93d9374e39385fef22eabf7657a05c3cdf5bf316d9dbcf5ad0e
// module: 84 range:16364..20223
// basis: webpack-id confidence: C
// method: split
// run: ext-agent 2026-11-05T10:20:08.356Z
84: (e2, a2) => {
    Object.defineProperty(a2, "__esModule", { value: true }), a2.varint32read = a2.varint32write = a2.uInt64ToString = a2.int64ToString = a2.int64FromString = a2.varint64write = a2.varint64read = void 0, a2.varint64read = function() {
      let e3 = 0, a3 = 0;
      for (let n4 = 0; n4 < 28; n4 += 7) {
        let o3 = this.buf[this.pos++];
        if (e3 |= (127 & o3) << n4, !(128 & o3)) return this.assertBounds(), [e3, a3];
      }
      let n3 = this.buf[this.pos++];
      if (e3 |= (15 & n3) << 28, a3 = (112 & n3) >> 4, !(128 & n3)) return this.assertBounds(), [e3, a3];
      for (let n4 = 3; n4 <= 31; n4 += 7) {
        let o3 = this.buf[this.pos++];
        if (a3 |= (127 & o3) << n4, !(128 & o3)) return this.assertBounds(), [e3, a3];
      }
      throw new Error("invalid varint");
    }, a2.varint64write = function(e3, a3, n3) {
      for (let o4 = 0; o4 < 28; o4 += 7) {
        const s4 = e3 >>> o4, t3 = !(s4 >>> 7 == 0 && 0 == a3), r3 = 255 & (t3 ? 128 | s4 : s4);
        if (n3.push(r3), !t3) return;
      }
      const o3 = e3 >>> 28 & 15 | (7 & a3) << 4, s3 = !!(a3 >> 3);
      if (n3.push(255 & (s3 ? 128 | o3 : o3)), s3) {
        for (let e4 = 3; e4 < 31; e4 += 7) {
          const o4 = a3 >>> e4, s4 = !(o4 >>> 7 == 0), t3 = 255 & (s4 ? 128 | o4 : o4);
          if (n3.push(t3), !s4) return;
        }
        n3.push(a3 >>> 31 & 1);
      }
    };
    const n2 = 4294967296;
    function o2(e3, a3) {
      if ({ lo: e3, hi: a3 } = (function(e4, a4) {
        return { lo: e4 >>> 0, hi: a4 >>> 0 };
      })(e3, a3), a3 <= 2097151) return String(n2 * a3 + e3);
      const o3 = 16777215 & (e3 >>> 24 | a3 << 8), s3 = a3 >> 16 & 65535;
      let t3 = (16777215 & e3) + 6777216 * o3 + 6710656 * s3, i2 = o3 + 8147497 * s3, m2 = 2 * s3;
      const l2 = 1e7;
      return t3 >= l2 && (i2 += Math.floor(t3 / l2), t3 %= l2), i2 >= l2 && (m2 += Math.floor(i2 / l2), i2 %= l2), m2.toString() + r2(i2) + r2(t3);
    }
    function s2(e3, a3) {
      return { lo: 0 | e3, hi: 0 | a3 };
    }
    function t2(e3, a3) {
      return a3 = ~a3, e3 ? e3 = 1 + ~e3 : a3 += 1, s2(e3, a3);
    }
    a2.int64FromString = function(e3) {
      const a3 = "-" === e3[0];
      a3 && (e3 = e3.slice(1));
      const o3 = 1e6;
      let r3 = 0, i2 = 0;
      function m2(a4, s3) {
        const t3 = Number(e3.slice(a4, s3));
        i2 *= o3, r3 = r3 * o3 + t3, r3 >= n2 && (i2 += r3 / n2 | 0, r3 %= n2);
      }
      return m2(-24, -18), m2(-18, -12), m2(-12, -6), m2(-6), a3 ? t2(r3, i2) : s2(r3, i2);
    }, a2.int64ToString = function(e3, a3) {
      let n3 = s2(e3, a3);
      const r3 = 2147483648 & n3.hi;
      r3 && (n3 = t2(n3.lo, n3.hi));
      const i2 = o2(n3.lo, n3.hi);
      return r3 ? "-" + i2 : i2;
    }, a2.uInt64ToString = o2;
    const r2 = (e3) => {
      const a3 = String(e3);
      return "0000000".slice(a3.length) + a3;
    };
    a2.varint32write = function(e3, a3) {
      if (e3 >= 0) {
        for (; e3 > 127; ) a3.push(127 & e3 | 128), e3 >>>= 7;
        a3.push(e3);
      } else {
        for (let n3 = 0; n3 < 9; n3++) a3.push(127 & e3 | 128), e3 >>= 7;
        a3.push(1);
      }
    }, a2.varint32read = function() {
      let e3 = this.buf[this.pos++], a3 = 127 & e3;
      if (!(128 & e3)) return this.assertBounds(), a3;
      if (e3 = this.buf[this.pos++], a3 |= (127 & e3) << 7, !(128 & e3)) return this.assertBounds(), a3;
      if (e3 = this.buf[this.pos++], a3 |= (127 & e3) << 14, !(128 & e3)) return this.assertBounds(), a3;
      if (e3 = this.buf[this.pos++], a3 |= (127 & e3) << 21, !(128 & e3)) return this.assertBounds(), a3;
      e3 = this.buf[this.pos++], a3 |= (15 & e3) << 28;
      for (let a4 = 5; 128 & e3 && a4 < 10; a4++) e3 = this.buf[this.pos++];
      if (128 & e3) throw new Error("invalid varint");
      return this.assertBounds(), a3 >>> 0;
    };
  }
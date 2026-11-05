// @recovered-by cursor-re
// artifact: app/extensions/cursor-computer-use/dist/extension.js sha256:2e37990c917916e7e5b3d1524e03cf61b1cf38ddc56b1e51014a1275aa4568a6
// module: 7084 range:554660..558507
// basis: webpack-id confidence: C
// method: split
// run: ext-p0 2026-11-05T10:07:22.069Z
7084: (e2, n2) => {
    "use strict";
    Object.defineProperty(n2, "__esModule", { value: true }), n2.varint32read = n2.varint32write = n2.uInt64ToString = n2.int64ToString = n2.int64FromString = n2.varint64write = n2.varint64read = void 0, n2.varint64read = function() {
      let e3 = 0, n3 = 0;
      for (let t4 = 0; t4 < 28; t4 += 7) {
        let a3 = this.buf[this.pos++];
        if (e3 |= (127 & a3) << t4, !(128 & a3)) return this.assertBounds(), [e3, n3];
      }
      let t3 = this.buf[this.pos++];
      if (e3 |= (15 & t3) << 28, n3 = (112 & t3) >> 4, !(128 & t3)) return this.assertBounds(), [e3, n3];
      for (let t4 = 3; t4 <= 31; t4 += 7) {
        let a3 = this.buf[this.pos++];
        if (n3 |= (127 & a3) << t4, !(128 & a3)) return this.assertBounds(), [e3, n3];
      }
      throw new Error("invalid varint");
    }, n2.varint64write = function(e3, n3, t3) {
      for (let a4 = 0; a4 < 28; a4 += 7) {
        const s4 = e3 >>> a4, o3 = !(s4 >>> 7 == 0 && 0 == n3), r2 = 255 & (o3 ? 128 | s4 : s4);
        if (t3.push(r2), !o3) return;
      }
      const a3 = e3 >>> 28 & 15 | (7 & n3) << 4, s3 = !!(n3 >> 3);
      if (t3.push(255 & (s3 ? 128 | a3 : a3)), s3) {
        for (let e4 = 3; e4 < 31; e4 += 7) {
          const a4 = n3 >>> e4, s4 = !(a4 >>> 7 == 0), o3 = 255 & (s4 ? 128 | a4 : a4);
          if (t3.push(o3), !s4) return;
        }
        t3.push(n3 >>> 31 & 1);
      }
    };
    const t2 = 4294967296;
    function a2(e3, n3) {
      if ({ lo: e3, hi: n3 } = (function(e4, n4) {
        return { lo: e4 >>> 0, hi: n4 >>> 0 };
      })(e3, n3), n3 <= 2097151) return String(t2 * n3 + e3);
      const a3 = 16777215 & (e3 >>> 24 | n3 << 8), s3 = n3 >> 16 & 65535;
      let o3 = (16777215 & e3) + 6777216 * a3 + 6710656 * s3, i = a3 + 8147497 * s3, A = 2 * s3;
      const c = 1e7;
      return o3 >= c && (i += Math.floor(o3 / c), o3 %= c), i >= c && (A += Math.floor(i / c), i %= c), A.toString() + r(i) + r(o3);
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
      const a3 = 1e6;
      let r2 = 0, i = 0;
      function A(n4, s3) {
        const o3 = Number(e3.slice(n4, s3));
        i *= a3, r2 = r2 * a3 + o3, r2 >= t2 && (i += r2 / t2 | 0, r2 %= t2);
      }
      return A(-24, -18), A(-18, -12), A(-12, -6), A(-6), n3 ? o2(r2, i) : s2(r2, i);
    }, n2.int64ToString = function(e3, n3) {
      let t3 = s2(e3, n3);
      const r2 = 2147483648 & t3.hi;
      r2 && (t3 = o2(t3.lo, t3.hi));
      const i = a2(t3.lo, t3.hi);
      return r2 ? "-" + i : i;
    }, n2.uInt64ToString = a2;
    const r = (e3) => {
      const n3 = String(e3);
      return "0000000".slice(n3.length) + n3;
    };
    n2.varint32write = function(e3, n3) {
      if (e3 >= 0) {
        for (; e3 > 127; ) n3.push(127 & e3 | 128), e3 >>>= 7;
        n3.push(e3);
      } else {
        for (let t3 = 0; t3 < 9; t3++) n3.push(127 & e3 | 128), e3 >>= 7;
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
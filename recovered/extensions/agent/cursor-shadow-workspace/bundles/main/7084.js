// @recovered-by cursor-re
// artifact: app/extensions/cursor-shadow-workspace/dist/extension.js sha256:19218949e5ecc64e4c1b41e194ba40abfd54a9aeb034a14f90c71485b7f84585
// module: 7084 range:523334..527181
// basis: webpack-id confidence: C
// method: split
// run: ext-agent 2026-11-05T10:20:08.356Z
7084: (e2, A2) => {
    "use strict";
    Object.defineProperty(A2, "__esModule", { value: true }), A2.varint32read = A2.varint32write = A2.uInt64ToString = A2.int64ToString = A2.int64FromString = A2.varint64write = A2.varint64read = void 0, A2.varint64read = function() {
      let e3 = 0, A3 = 0;
      for (let t4 = 0; t4 < 28; t4 += 7) {
        let n3 = this.buf[this.pos++];
        if (e3 |= (127 & n3) << t4, !(128 & n3)) return this.assertBounds(), [e3, A3];
      }
      let t3 = this.buf[this.pos++];
      if (e3 |= (15 & t3) << 28, A3 = (112 & t3) >> 4, !(128 & t3)) return this.assertBounds(), [e3, A3];
      for (let t4 = 3; t4 <= 31; t4 += 7) {
        let n3 = this.buf[this.pos++];
        if (A3 |= (127 & n3) << t4, !(128 & n3)) return this.assertBounds(), [e3, A3];
      }
      throw new Error("invalid varint");
    }, A2.varint64write = function(e3, A3, t3) {
      for (let n4 = 0; n4 < 28; n4 += 7) {
        const r4 = e3 >>> n4, o3 = !(r4 >>> 7 == 0 && 0 == A3), s2 = 255 & (o3 ? 128 | r4 : r4);
        if (t3.push(s2), !o3) return;
      }
      const n3 = e3 >>> 28 & 15 | (7 & A3) << 4, r3 = !!(A3 >> 3);
      if (t3.push(255 & (r3 ? 128 | n3 : n3)), r3) {
        for (let e4 = 3; e4 < 31; e4 += 7) {
          const n4 = A3 >>> e4, r4 = !(n4 >>> 7 == 0), o3 = 255 & (r4 ? 128 | n4 : n4);
          if (t3.push(o3), !r4) return;
        }
        t3.push(A3 >>> 31 & 1);
      }
    };
    const t2 = 4294967296;
    function n2(e3, A3) {
      if ({ lo: e3, hi: A3 } = (function(e4, A4) {
        return { lo: e4 >>> 0, hi: A4 >>> 0 };
      })(e3, A3), A3 <= 2097151) return String(t2 * A3 + e3);
      const n3 = 16777215 & (e3 >>> 24 | A3 << 8), r3 = A3 >> 16 & 65535;
      let o3 = (16777215 & e3) + 6777216 * n3 + 6710656 * r3, a = n3 + 8147497 * r3, i = 2 * r3;
      const c = 1e7;
      return o3 >= c && (a += Math.floor(o3 / c), o3 %= c), a >= c && (i += Math.floor(a / c), a %= c), i.toString() + s(a) + s(o3);
    }
    function r2(e3, A3) {
      return { lo: 0 | e3, hi: 0 | A3 };
    }
    function o2(e3, A3) {
      return A3 = ~A3, e3 ? e3 = 1 + ~e3 : A3 += 1, r2(e3, A3);
    }
    A2.int64FromString = function(e3) {
      const A3 = "-" === e3[0];
      A3 && (e3 = e3.slice(1));
      const n3 = 1e6;
      let s2 = 0, a = 0;
      function i(A4, r3) {
        const o3 = Number(e3.slice(A4, r3));
        a *= n3, s2 = s2 * n3 + o3, s2 >= t2 && (a += s2 / t2 | 0, s2 %= t2);
      }
      return i(-24, -18), i(-18, -12), i(-12, -6), i(-6), A3 ? o2(s2, a) : r2(s2, a);
    }, A2.int64ToString = function(e3, A3) {
      let t3 = r2(e3, A3);
      const s2 = 2147483648 & t3.hi;
      s2 && (t3 = o2(t3.lo, t3.hi));
      const a = n2(t3.lo, t3.hi);
      return s2 ? "-" + a : a;
    }, A2.uInt64ToString = n2;
    const s = (e3) => {
      const A3 = String(e3);
      return "0000000".slice(A3.length) + A3;
    };
    A2.varint32write = function(e3, A3) {
      if (e3 >= 0) {
        for (; e3 > 127; ) A3.push(127 & e3 | 128), e3 >>>= 7;
        A3.push(e3);
      } else {
        for (let t3 = 0; t3 < 9; t3++) A3.push(127 & e3 | 128), e3 >>= 7;
        A3.push(1);
      }
    }, A2.varint32read = function() {
      let e3 = this.buf[this.pos++], A3 = 127 & e3;
      if (!(128 & e3)) return this.assertBounds(), A3;
      if (e3 = this.buf[this.pos++], A3 |= (127 & e3) << 7, !(128 & e3)) return this.assertBounds(), A3;
      if (e3 = this.buf[this.pos++], A3 |= (127 & e3) << 14, !(128 & e3)) return this.assertBounds(), A3;
      if (e3 = this.buf[this.pos++], A3 |= (127 & e3) << 21, !(128 & e3)) return this.assertBounds(), A3;
      e3 = this.buf[this.pos++], A3 |= (15 & e3) << 28;
      for (let A4 = 5; 128 & e3 && A4 < 10; A4++) e3 = this.buf[this.pos++];
      if (128 & e3) throw new Error("invalid varint");
      return this.assertBounds(), A3 >>> 0;
    };
  }
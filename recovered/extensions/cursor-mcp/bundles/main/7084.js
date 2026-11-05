// @recovered-by cursor-re
// artifact: app/extensions/cursor-mcp/dist/main.js sha256:097aeef3cf1f927e9bc6c0d23972c432bbcae8dc0ea353a5b6308dd59620fb49
// module: 7084 range:589896..593760
// basis: webpack-id confidence: C
// method: split
// run: ext-p0 2026-11-05T10:07:22.069Z
7084: (e2, t2) => {
    "use strict";
    Object.defineProperty(t2, "__esModule", { value: true }), t2.varint32read = t2.varint32write = t2.uInt64ToString = t2.int64ToString = t2.int64FromString = t2.varint64write = t2.varint64read = void 0, t2.varint64read = function() {
      let e3 = 0, t3 = 0;
      for (let r4 = 0; r4 < 28; r4 += 7) {
        let n3 = this.buf[this.pos++];
        if (e3 |= (127 & n3) << r4, !(128 & n3)) return this.assertBounds(), [e3, t3];
      }
      let r3 = this.buf[this.pos++];
      if (e3 |= (15 & r3) << 28, t3 = (112 & r3) >> 4, !(128 & r3)) return this.assertBounds(), [e3, t3];
      for (let r4 = 3; r4 <= 31; r4 += 7) {
        let n3 = this.buf[this.pos++];
        if (t3 |= (127 & n3) << r4, !(128 & n3)) return this.assertBounds(), [e3, t3];
      }
      throw new Error("invalid varint");
    }, t2.varint64write = function(e3, t3, r3) {
      for (let n4 = 0; n4 < 28; n4 += 7) {
        const o4 = e3 >>> n4, s3 = !(o4 >>> 7 == 0 && 0 == t3), i3 = 255 & (s3 ? 128 | o4 : o4);
        if (r3.push(i3), !s3) return;
      }
      const n3 = e3 >>> 28 & 15 | (7 & t3) << 4, o3 = !!(t3 >> 3);
      if (r3.push(255 & (o3 ? 128 | n3 : n3)), o3) {
        for (let e4 = 3; e4 < 31; e4 += 7) {
          const n4 = t3 >>> e4, o4 = !(n4 >>> 7 == 0), s3 = 255 & (o4 ? 128 | n4 : n4);
          if (r3.push(s3), !o4) return;
        }
        r3.push(t3 >>> 31 & 1);
      }
    };
    const r2 = 4294967296;
    function n2(e3, t3) {
      if ({ lo: e3, hi: t3 } = (function(e4, t4) {
        return { lo: e4 >>> 0, hi: t4 >>> 0 };
      })(e3, t3), t3 <= 2097151) return String(r2 * t3 + e3);
      const n3 = 16777215 & (e3 >>> 24 | t3 << 8), o3 = t3 >> 16 & 65535;
      let s3 = (16777215 & e3) + 6777216 * n3 + 6710656 * o3, a2 = n3 + 8147497 * o3, c = 2 * o3;
      const u = 1e7;
      return s3 >= u && (a2 += Math.floor(s3 / u), s3 %= u), a2 >= u && (c += Math.floor(a2 / u), a2 %= u), c.toString() + i2(a2) + i2(s3);
    }
    function o2(e3, t3) {
      return { lo: 0 | e3, hi: 0 | t3 };
    }
    function s2(e3, t3) {
      return t3 = ~t3, e3 ? e3 = 1 + ~e3 : t3 += 1, o2(e3, t3);
    }
    t2.int64FromString = function(e3) {
      const t3 = "-" === e3[0];
      t3 && (e3 = e3.slice(1));
      const n3 = 1e6;
      let i3 = 0, a2 = 0;
      function c(t4, o3) {
        const s3 = Number(e3.slice(t4, o3));
        a2 *= n3, i3 = i3 * n3 + s3, i3 >= r2 && (a2 += i3 / r2 | 0, i3 %= r2);
      }
      return c(-24, -18), c(-18, -12), c(-12, -6), c(-6), t3 ? s2(i3, a2) : o2(i3, a2);
    }, t2.int64ToString = function(e3, t3) {
      let r3 = o2(e3, t3);
      const i3 = 2147483648 & r3.hi;
      i3 && (r3 = s2(r3.lo, r3.hi));
      const a2 = n2(r3.lo, r3.hi);
      return i3 ? "-" + a2 : a2;
    }, t2.uInt64ToString = n2;
    const i2 = (e3) => {
      const t3 = String(e3);
      return "0000000".slice(t3.length) + t3;
    };
    t2.varint32write = function(e3, t3) {
      if (e3 >= 0) {
        for (; e3 > 127; ) t3.push(127 & e3 | 128), e3 >>>= 7;
        t3.push(e3);
      } else {
        for (let r3 = 0; r3 < 9; r3++) t3.push(127 & e3 | 128), e3 >>= 7;
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
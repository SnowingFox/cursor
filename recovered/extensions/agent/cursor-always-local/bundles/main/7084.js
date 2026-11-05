// @recovered-by cursor-re
// artifact: app/extensions/cursor-always-local/dist/main.js sha256:14fb2d0e360d81a024b4ec605f417e030e19b30b2df99bc45648aa227060534e
// module: 7084 range:4174779..4178629
// basis: webpack-id confidence: C
// method: split
// run: ext-agent 2026-11-05T10:20:08.356Z
7084: (t2, e2) => {
    "use strict";
    Object.defineProperty(e2, "__esModule", { value: true }), e2.varint32read = e2.varint32write = e2.uInt64ToString = e2.int64ToString = e2.int64FromString = e2.varint64write = e2.varint64read = void 0, e2.varint64read = function() {
      let t3 = 0, e3 = 0;
      for (let r4 = 0; r4 < 28; r4 += 7) {
        let n3 = this.buf[this.pos++];
        if (t3 |= (127 & n3) << r4, !(128 & n3)) return this.assertBounds(), [t3, e3];
      }
      let r3 = this.buf[this.pos++];
      if (t3 |= (15 & r3) << 28, e3 = (112 & r3) >> 4, !(128 & r3)) return this.assertBounds(), [t3, e3];
      for (let r4 = 3; r4 <= 31; r4 += 7) {
        let n3 = this.buf[this.pos++];
        if (e3 |= (127 & n3) << r4, !(128 & n3)) return this.assertBounds(), [t3, e3];
      }
      throw new Error("invalid varint");
    }, e2.varint64write = function(t3, e3, r3) {
      for (let n4 = 0; n4 < 28; n4 += 7) {
        const s4 = t3 >>> n4, i3 = !(s4 >>> 7 == 0 && 0 == e3), o3 = 255 & (i3 ? 128 | s4 : s4);
        if (r3.push(o3), !i3) return;
      }
      const n3 = t3 >>> 28 & 15 | (7 & e3) << 4, s3 = !!(e3 >> 3);
      if (r3.push(255 & (s3 ? 128 | n3 : n3)), s3) {
        for (let t4 = 3; t4 < 31; t4 += 7) {
          const n4 = e3 >>> t4, s4 = !(n4 >>> 7 == 0), i3 = 255 & (s4 ? 128 | n4 : n4);
          if (r3.push(i3), !s4) return;
        }
        r3.push(e3 >>> 31 & 1);
      }
    };
    const r2 = 4294967296;
    function n2(t3, e3) {
      if ({ lo: t3, hi: e3 } = (function(t4, e4) {
        return { lo: t4 >>> 0, hi: e4 >>> 0 };
      })(t3, e3), e3 <= 2097151) return String(r2 * e3 + t3);
      const n3 = 16777215 & (t3 >>> 24 | e3 << 8), s3 = e3 >> 16 & 65535;
      let i3 = (16777215 & t3) + 6777216 * n3 + 6710656 * s3, a = n3 + 8147497 * s3, u = 2 * s3;
      const c = 1e7;
      return i3 >= c && (a += Math.floor(i3 / c), i3 %= c), a >= c && (u += Math.floor(a / c), a %= c), u.toString() + o2(a) + o2(i3);
    }
    function s2(t3, e3) {
      return { lo: 0 | t3, hi: 0 | e3 };
    }
    function i2(t3, e3) {
      return e3 = ~e3, t3 ? t3 = 1 + ~t3 : e3 += 1, s2(t3, e3);
    }
    e2.int64FromString = function(t3) {
      const e3 = "-" === t3[0];
      e3 && (t3 = t3.slice(1));
      const n3 = 1e6;
      let o3 = 0, a = 0;
      function u(e4, s3) {
        const i3 = Number(t3.slice(e4, s3));
        a *= n3, o3 = o3 * n3 + i3, o3 >= r2 && (a += o3 / r2 | 0, o3 %= r2);
      }
      return u(-24, -18), u(-18, -12), u(-12, -6), u(-6), e3 ? i2(o3, a) : s2(o3, a);
    }, e2.int64ToString = function(t3, e3) {
      let r3 = s2(t3, e3);
      const o3 = 2147483648 & r3.hi;
      o3 && (r3 = i2(r3.lo, r3.hi));
      const a = n2(r3.lo, r3.hi);
      return o3 ? "-" + a : a;
    }, e2.uInt64ToString = n2;
    const o2 = (t3) => {
      const e3 = String(t3);
      return "0000000".slice(e3.length) + e3;
    };
    e2.varint32write = function(t3, e3) {
      if (t3 >= 0) {
        for (; t3 > 127; ) e3.push(127 & t3 | 128), t3 >>>= 7;
        e3.push(t3);
      } else {
        for (let r3 = 0; r3 < 9; r3++) e3.push(127 & t3 | 128), t3 >>= 7;
        e3.push(1);
      }
    }, e2.varint32read = function() {
      let t3 = this.buf[this.pos++], e3 = 127 & t3;
      if (!(128 & t3)) return this.assertBounds(), e3;
      if (t3 = this.buf[this.pos++], e3 |= (127 & t3) << 7, !(128 & t3)) return this.assertBounds(), e3;
      if (t3 = this.buf[this.pos++], e3 |= (127 & t3) << 14, !(128 & t3)) return this.assertBounds(), e3;
      if (t3 = this.buf[this.pos++], e3 |= (127 & t3) << 21, !(128 & t3)) return this.assertBounds(), e3;
      t3 = this.buf[this.pos++], e3 |= (15 & t3) << 28;
      for (let e4 = 5; 128 & t3 && e4 < 10; e4++) t3 = this.buf[this.pos++];
      if (128 & t3) throw new Error("invalid varint");
      return this.assertBounds(), e3 >>> 0;
    };
  }
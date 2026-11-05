// @recovered-by cursor-re
// artifact: app/extensions/cursor-local-agent-runtime/dist/main.js sha256:be87ea0ed3ac86375ab8e5f92c4261df0ccfc61ff24b07420f9c88a78ae2cfd0
// module: 37084 range:1111258..1115074
// basis: webpack-id confidence: C
// method: split
// run: ext-p0 2026-11-05T10:07:22.069Z
37084: (e, t) => {
    "use strict";
    Object.defineProperty(t, "__esModule", { value: true }), t.varint32read = t.varint32write = t.uInt64ToString = t.int64ToString = t.int64FromString = t.varint64write = t.varint64read = void 0, t.varint64read = function() {
      let e2 = 0, t2 = 0;
      for (let r3 = 0; r3 < 28; r3 += 7) {
        let n2 = this.buf[this.pos++];
        if (e2 |= (127 & n2) << r3, !(128 & n2)) return this.assertBounds(), [e2, t2];
      }
      let r2 = this.buf[this.pos++];
      if (e2 |= (15 & r2) << 28, t2 = (112 & r2) >> 4, !(128 & r2)) return this.assertBounds(), [e2, t2];
      for (let r3 = 3; r3 <= 31; r3 += 7) {
        let n2 = this.buf[this.pos++];
        if (t2 |= (127 & n2) << r3, !(128 & n2)) return this.assertBounds(), [e2, t2];
      }
      throw new Error("invalid varint");
    }, t.varint64write = function(e2, t2, r2) {
      for (let n3 = 0; n3 < 28; n3 += 7) {
        const o3 = e2 >>> n3, s2 = !(o3 >>> 7 == 0 && 0 == t2), i2 = 255 & (s2 ? 128 | o3 : o3);
        if (r2.push(i2), !s2) return;
      }
      const n2 = e2 >>> 28 & 15 | (7 & t2) << 4, o2 = !!(t2 >> 3);
      if (r2.push(255 & (o2 ? 128 | n2 : n2)), o2) {
        for (let e3 = 3; e3 < 31; e3 += 7) {
          const n3 = t2 >>> e3, o3 = !(n3 >>> 7 == 0), s2 = 255 & (o3 ? 128 | n3 : n3);
          if (r2.push(s2), !o3) return;
        }
        r2.push(t2 >>> 31 & 1);
      }
    };
    const r = 4294967296;
    function n(e2, t2) {
      if ({ lo: e2, hi: t2 } = (function(e3, t3) {
        return { lo: e3 >>> 0, hi: t3 >>> 0 };
      })(e2, t2), t2 <= 2097151) return String(r * t2 + e2);
      const n2 = 16777215 & (e2 >>> 24 | t2 << 8), o2 = t2 >> 16 & 65535;
      let s2 = (16777215 & e2) + 6777216 * n2 + 6710656 * o2, a = n2 + 8147497 * o2, l = 2 * o2;
      const c = 1e7;
      return s2 >= c && (a += Math.floor(s2 / c), s2 %= c), a >= c && (l += Math.floor(a / c), a %= c), l.toString() + i(a) + i(s2);
    }
    function o(e2, t2) {
      return { lo: 0 | e2, hi: 0 | t2 };
    }
    function s(e2, t2) {
      return t2 = ~t2, e2 ? e2 = 1 + ~e2 : t2 += 1, o(e2, t2);
    }
    t.int64FromString = function(e2) {
      const t2 = "-" === e2[0];
      t2 && (e2 = e2.slice(1));
      const n2 = 1e6;
      let i2 = 0, a = 0;
      function l(t3, o2) {
        const s2 = Number(e2.slice(t3, o2));
        a *= n2, i2 = i2 * n2 + s2, i2 >= r && (a += i2 / r | 0, i2 %= r);
      }
      return l(-24, -18), l(-18, -12), l(-12, -6), l(-6), t2 ? s(i2, a) : o(i2, a);
    }, t.int64ToString = function(e2, t2) {
      let r2 = o(e2, t2);
      const i2 = 2147483648 & r2.hi;
      i2 && (r2 = s(r2.lo, r2.hi));
      const a = n(r2.lo, r2.hi);
      return i2 ? "-" + a : a;
    }, t.uInt64ToString = n;
    const i = (e2) => {
      const t2 = String(e2);
      return "0000000".slice(t2.length) + t2;
    };
    t.varint32write = function(e2, t2) {
      if (e2 >= 0) {
        for (; e2 > 127; ) t2.push(127 & e2 | 128), e2 >>>= 7;
        t2.push(e2);
      } else {
        for (let r2 = 0; r2 < 9; r2++) t2.push(127 & e2 | 128), e2 >>= 7;
        t2.push(1);
      }
    }, t.varint32read = function() {
      let e2 = this.buf[this.pos++], t2 = 127 & e2;
      if (!(128 & e2)) return this.assertBounds(), t2;
      if (e2 = this.buf[this.pos++], t2 |= (127 & e2) << 7, !(128 & e2)) return this.assertBounds(), t2;
      if (e2 = this.buf[this.pos++], t2 |= (127 & e2) << 14, !(128 & e2)) return this.assertBounds(), t2;
      if (e2 = this.buf[this.pos++], t2 |= (127 & e2) << 21, !(128 & e2)) return this.assertBounds(), t2;
      e2 = this.buf[this.pos++], t2 |= (15 & e2) << 28;
      for (let t3 = 5; 128 & e2 && t3 < 10; t3++) e2 = this.buf[this.pos++];
      if (128 & e2) throw new Error("invalid varint");
      return this.assertBounds(), t2 >>> 0;
    };
  }
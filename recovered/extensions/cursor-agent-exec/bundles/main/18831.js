// @recovered-by cursor-re
// artifact: app/extensions/cursor-agent-exec/dist/main.js sha256:8d20326bd54948353115113c2d4716cf781d593610fd4d8acebcc37a3170da8e
// module: 18831 range:974915..981720
// basis: webpack-id confidence: C
// method: split
// run: ext-p0 2026-11-05T10:07:22.069Z
18831: (e, t, r) => {
    "use strict";
    Object.defineProperty(t, "__esModule", { value: true }), t.BinaryReader = t.BinaryWriter = t.WireType = void 0;
    const n = r(37084), s = r(43098), o = r(11498);
    var i;
    !(function(e2) {
      e2[e2.Varint = 0] = "Varint", e2[e2.Bit64 = 1] = "Bit64", e2[e2.LengthDelimited = 2] = "LengthDelimited", e2[e2.StartGroup = 3] = "StartGroup", e2[e2.EndGroup = 4] = "EndGroup", e2[e2.Bit32 = 5] = "Bit32";
    })(i || (t.WireType = i = {}));
    t.BinaryWriter = class {
      constructor(e2) {
        this.stack = [], this.textEncoder = null != e2 ? e2 : new TextEncoder(), this.chunks = [], this.buf = [];
      }
      finish() {
        this.chunks.push(new Uint8Array(this.buf));
        let e2 = 0;
        for (let t3 = 0; t3 < this.chunks.length; t3++) e2 += this.chunks[t3].length;
        let t2 = new Uint8Array(e2), r2 = 0;
        for (let e3 = 0; e3 < this.chunks.length; e3++) t2.set(this.chunks[e3], r2), r2 += this.chunks[e3].length;
        return this.chunks = [], t2;
      }
      fork() {
        return this.stack.push({ chunks: this.chunks, buf: this.buf }), this.chunks = [], this.buf = [], this;
      }
      join() {
        let e2 = this.finish(), t2 = this.stack.pop();
        if (!t2) throw new Error("invalid state, fork stack empty");
        return this.chunks = t2.chunks, this.buf = t2.buf, this.uint32(e2.byteLength), this.raw(e2);
      }
      tag(e2, t2) {
        return this.uint32((e2 << 3 | t2) >>> 0);
      }
      raw(e2) {
        return this.buf.length && (this.chunks.push(new Uint8Array(this.buf)), this.buf = []), this.chunks.push(e2), this;
      }
      uint32(e2) {
        for ((0, s.assertUInt32)(e2); e2 > 127; ) this.buf.push(127 & e2 | 128), e2 >>>= 7;
        return this.buf.push(e2), this;
      }
      int32(e2) {
        return (0, s.assertInt32)(e2), (0, n.varint32write)(e2, this.buf), this;
      }
      bool(e2) {
        return this.buf.push(e2 ? 1 : 0), this;
      }
      bytes(e2) {
        return this.uint32(e2.byteLength), this.raw(e2);
      }
      string(e2) {
        let t2 = this.textEncoder.encode(e2);
        return this.uint32(t2.byteLength), this.raw(t2);
      }
      float(e2) {
        (0, s.assertFloat32)(e2);
        let t2 = new Uint8Array(4);
        return new DataView(t2.buffer).setFloat32(0, e2, true), this.raw(t2);
      }
      double(e2) {
        let t2 = new Uint8Array(8);
        return new DataView(t2.buffer).setFloat64(0, e2, true), this.raw(t2);
      }
      fixed32(e2) {
        (0, s.assertUInt32)(e2);
        let t2 = new Uint8Array(4);
        return new DataView(t2.buffer).setUint32(0, e2, true), this.raw(t2);
      }
      sfixed32(e2) {
        (0, s.assertInt32)(e2);
        let t2 = new Uint8Array(4);
        return new DataView(t2.buffer).setInt32(0, e2, true), this.raw(t2);
      }
      sint32(e2) {
        return (0, s.assertInt32)(e2), e2 = (e2 << 1 ^ e2 >> 31) >>> 0, (0, n.varint32write)(e2, this.buf), this;
      }
      sfixed64(e2) {
        let t2 = new Uint8Array(8), r2 = new DataView(t2.buffer), n2 = o.protoInt64.enc(e2);
        return r2.setInt32(0, n2.lo, true), r2.setInt32(4, n2.hi, true), this.raw(t2);
      }
      fixed64(e2) {
        let t2 = new Uint8Array(8), r2 = new DataView(t2.buffer), n2 = o.protoInt64.uEnc(e2);
        return r2.setInt32(0, n2.lo, true), r2.setInt32(4, n2.hi, true), this.raw(t2);
      }
      int64(e2) {
        let t2 = o.protoInt64.enc(e2);
        return (0, n.varint64write)(t2.lo, t2.hi, this.buf), this;
      }
      sint64(e2) {
        let t2 = o.protoInt64.enc(e2), r2 = t2.hi >> 31, s2 = t2.lo << 1 ^ r2, i2 = (t2.hi << 1 | t2.lo >>> 31) ^ r2;
        return (0, n.varint64write)(s2, i2, this.buf), this;
      }
      uint64(e2) {
        let t2 = o.protoInt64.uEnc(e2);
        return (0, n.varint64write)(t2.lo, t2.hi, this.buf), this;
      }
    };
    t.BinaryReader = class {
      constructor(e2, t2) {
        this.varint64 = n.varint64read, this.uint32 = n.varint32read, this.buf = e2, this.len = e2.length, this.pos = 0, this.view = new DataView(e2.buffer, e2.byteOffset, e2.byteLength), this.textDecoder = null != t2 ? t2 : new TextDecoder();
      }
      tag() {
        let e2 = this.uint32(), t2 = e2 >>> 3, r2 = 7 & e2;
        if (t2 <= 0 || r2 < 0 || r2 > 5) throw new Error("illegal tag: field no " + t2 + " wire type " + r2);
        return [t2, r2];
      }
      skip(e2, t2) {
        let r2 = this.pos;
        switch (e2) {
          case i.Varint:
            for (; 128 & this.buf[this.pos++]; ) ;
            break;
          case i.Bit64:
            this.pos += 4;
          case i.Bit32:
            this.pos += 4;
            break;
          case i.LengthDelimited:
            let r3 = this.uint32();
            this.pos += r3;
            break;
          case i.StartGroup:
            for (; ; ) {
              const [e3, r4] = this.tag();
              if (r4 === i.EndGroup) {
                if (void 0 !== t2 && e3 !== t2) throw new Error("invalid end group tag");
                break;
              }
              this.skip(r4, e3);
            }
            break;
          default:
            throw new Error("cant skip wire type " + e2);
        }
        return this.assertBounds(), this.buf.subarray(r2, this.pos);
      }
      assertBounds() {
        if (this.pos > this.len) throw new RangeError("premature EOF");
      }
      int32() {
        return 0 | this.uint32();
      }
      sint32() {
        let e2 = this.uint32();
        return e2 >>> 1 ^ -(1 & e2);
      }
      int64() {
        return o.protoInt64.dec(...this.varint64());
      }
      uint64() {
        return o.protoInt64.uDec(...this.varint64());
      }
      sint64() {
        let [e2, t2] = this.varint64(), r2 = -(1 & e2);
        return e2 = (e2 >>> 1 | (1 & t2) << 31) ^ r2, t2 = t2 >>> 1 ^ r2, o.protoInt64.dec(e2, t2);
      }
      bool() {
        let [e2, t2] = this.varint64();
        return 0 !== e2 || 0 !== t2;
      }
      fixed32() {
        return this.view.getUint32((this.pos += 4) - 4, true);
      }
      sfixed32() {
        return this.view.getInt32((this.pos += 4) - 4, true);
      }
      fixed64() {
        return o.protoInt64.uDec(this.sfixed32(), this.sfixed32());
      }
      sfixed64() {
        return o.protoInt64.dec(this.sfixed32(), this.sfixed32());
      }
      float() {
        return this.view.getFloat32((this.pos += 4) - 4, true);
      }
      double() {
        return this.view.getFloat64((this.pos += 8) - 8, true);
      }
      bytes() {
        let e2 = this.uint32(), t2 = this.pos;
        return this.pos += e2, this.assertBounds(), this.buf.subarray(t2, t2 + e2);
      }
      string() {
        return this.textDecoder.decode(this.bytes());
      }
    };
  }
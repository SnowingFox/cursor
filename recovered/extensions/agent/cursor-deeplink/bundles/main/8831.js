// @recovered-by cursor-re
// artifact: app/extensions/cursor-deeplink/dist/main.js sha256:2b0091d260814e411af8319789fee5fe8b4b75d7c27c85b905f80c4d53d995f3
// module: 8831 range:799987..806827
// basis: webpack-id confidence: C
// method: split
// run: ext-agent 2026-11-05T10:20:08.356Z
8831: (e2, t2, A2) => {
    "use strict";
    Object.defineProperty(t2, "__esModule", { value: true }), t2.BinaryReader = t2.BinaryWriter = t2.WireType = void 0;
    const n2 = A2(7084), r2 = A2(3098), o2 = A2(1498);
    var s;
    !(function(e3) {
      e3[e3.Varint = 0] = "Varint", e3[e3.Bit64 = 1] = "Bit64", e3[e3.LengthDelimited = 2] = "LengthDelimited", e3[e3.StartGroup = 3] = "StartGroup", e3[e3.EndGroup = 4] = "EndGroup", e3[e3.Bit32 = 5] = "Bit32";
    })(s || (t2.WireType = s = {}));
    t2.BinaryWriter = class {
      constructor(e3) {
        this.stack = [], this.textEncoder = null != e3 ? e3 : new TextEncoder(), this.chunks = [], this.buf = [];
      }
      finish() {
        this.chunks.push(new Uint8Array(this.buf));
        let e3 = 0;
        for (let t4 = 0; t4 < this.chunks.length; t4++) e3 += this.chunks[t4].length;
        let t3 = new Uint8Array(e3), A3 = 0;
        for (let e4 = 0; e4 < this.chunks.length; e4++) t3.set(this.chunks[e4], A3), A3 += this.chunks[e4].length;
        return this.chunks = [], t3;
      }
      fork() {
        return this.stack.push({ chunks: this.chunks, buf: this.buf }), this.chunks = [], this.buf = [], this;
      }
      join() {
        let e3 = this.finish(), t3 = this.stack.pop();
        if (!t3) throw new Error("invalid state, fork stack empty");
        return this.chunks = t3.chunks, this.buf = t3.buf, this.uint32(e3.byteLength), this.raw(e3);
      }
      tag(e3, t3) {
        return this.uint32((e3 << 3 | t3) >>> 0);
      }
      raw(e3) {
        return this.buf.length && (this.chunks.push(new Uint8Array(this.buf)), this.buf = []), this.chunks.push(e3), this;
      }
      uint32(e3) {
        for ((0, r2.assertUInt32)(e3); e3 > 127; ) this.buf.push(127 & e3 | 128), e3 >>>= 7;
        return this.buf.push(e3), this;
      }
      int32(e3) {
        return (0, r2.assertInt32)(e3), (0, n2.varint32write)(e3, this.buf), this;
      }
      bool(e3) {
        return this.buf.push(e3 ? 1 : 0), this;
      }
      bytes(e3) {
        return this.uint32(e3.byteLength), this.raw(e3);
      }
      string(e3) {
        let t3 = this.textEncoder.encode(e3);
        return this.uint32(t3.byteLength), this.raw(t3);
      }
      float(e3) {
        (0, r2.assertFloat32)(e3);
        let t3 = new Uint8Array(4);
        return new DataView(t3.buffer).setFloat32(0, e3, true), this.raw(t3);
      }
      double(e3) {
        let t3 = new Uint8Array(8);
        return new DataView(t3.buffer).setFloat64(0, e3, true), this.raw(t3);
      }
      fixed32(e3) {
        (0, r2.assertUInt32)(e3);
        let t3 = new Uint8Array(4);
        return new DataView(t3.buffer).setUint32(0, e3, true), this.raw(t3);
      }
      sfixed32(e3) {
        (0, r2.assertInt32)(e3);
        let t3 = new Uint8Array(4);
        return new DataView(t3.buffer).setInt32(0, e3, true), this.raw(t3);
      }
      sint32(e3) {
        return (0, r2.assertInt32)(e3), e3 = (e3 << 1 ^ e3 >> 31) >>> 0, (0, n2.varint32write)(e3, this.buf), this;
      }
      sfixed64(e3) {
        let t3 = new Uint8Array(8), A3 = new DataView(t3.buffer), n3 = o2.protoInt64.enc(e3);
        return A3.setInt32(0, n3.lo, true), A3.setInt32(4, n3.hi, true), this.raw(t3);
      }
      fixed64(e3) {
        let t3 = new Uint8Array(8), A3 = new DataView(t3.buffer), n3 = o2.protoInt64.uEnc(e3);
        return A3.setInt32(0, n3.lo, true), A3.setInt32(4, n3.hi, true), this.raw(t3);
      }
      int64(e3) {
        let t3 = o2.protoInt64.enc(e3);
        return (0, n2.varint64write)(t3.lo, t3.hi, this.buf), this;
      }
      sint64(e3) {
        let t3 = o2.protoInt64.enc(e3), A3 = t3.hi >> 31, r3 = t3.lo << 1 ^ A3, s2 = (t3.hi << 1 | t3.lo >>> 31) ^ A3;
        return (0, n2.varint64write)(r3, s2, this.buf), this;
      }
      uint64(e3) {
        let t3 = o2.protoInt64.uEnc(e3);
        return (0, n2.varint64write)(t3.lo, t3.hi, this.buf), this;
      }
    };
    t2.BinaryReader = class {
      constructor(e3, t3) {
        this.varint64 = n2.varint64read, this.uint32 = n2.varint32read, this.buf = e3, this.len = e3.length, this.pos = 0, this.view = new DataView(e3.buffer, e3.byteOffset, e3.byteLength), this.textDecoder = null != t3 ? t3 : new TextDecoder();
      }
      tag() {
        let e3 = this.uint32(), t3 = e3 >>> 3, A3 = 7 & e3;
        if (t3 <= 0 || A3 < 0 || A3 > 5) throw new Error("illegal tag: field no " + t3 + " wire type " + A3);
        return [t3, A3];
      }
      skip(e3, t3) {
        let A3 = this.pos;
        switch (e3) {
          case s.Varint:
            for (; 128 & this.buf[this.pos++]; ) ;
            break;
          case s.Bit64:
            this.pos += 4;
          case s.Bit32:
            this.pos += 4;
            break;
          case s.LengthDelimited:
            let A4 = this.uint32();
            this.pos += A4;
            break;
          case s.StartGroup:
            for (; ; ) {
              const [e4, A5] = this.tag();
              if (A5 === s.EndGroup) {
                if (void 0 !== t3 && e4 !== t3) throw new Error("invalid end group tag");
                break;
              }
              this.skip(A5, e4);
            }
            break;
          default:
            throw new Error("cant skip wire type " + e3);
        }
        return this.assertBounds(), this.buf.subarray(A3, this.pos);
      }
      assertBounds() {
        if (this.pos > this.len) throw new RangeError("premature EOF");
      }
      int32() {
        return 0 | this.uint32();
      }
      sint32() {
        let e3 = this.uint32();
        return e3 >>> 1 ^ -(1 & e3);
      }
      int64() {
        return o2.protoInt64.dec(...this.varint64());
      }
      uint64() {
        return o2.protoInt64.uDec(...this.varint64());
      }
      sint64() {
        let [e3, t3] = this.varint64(), A3 = -(1 & e3);
        return e3 = (e3 >>> 1 | (1 & t3) << 31) ^ A3, t3 = t3 >>> 1 ^ A3, o2.protoInt64.dec(e3, t3);
      }
      bool() {
        let [e3, t3] = this.varint64();
        return 0 !== e3 || 0 !== t3;
      }
      fixed32() {
        return this.view.getUint32((this.pos += 4) - 4, true);
      }
      sfixed32() {
        return this.view.getInt32((this.pos += 4) - 4, true);
      }
      fixed64() {
        return o2.protoInt64.uDec(this.sfixed32(), this.sfixed32());
      }
      sfixed64() {
        return o2.protoInt64.dec(this.sfixed32(), this.sfixed32());
      }
      float() {
        return this.view.getFloat32((this.pos += 4) - 4, true);
      }
      double() {
        return this.view.getFloat64((this.pos += 8) - 8, true);
      }
      bytes() {
        let e3 = this.uint32(), t3 = this.pos;
        return this.pos += e3, this.assertBounds(), this.buf.subarray(t3, t3 + e3);
      }
      string() {
        return this.textDecoder.decode(this.bytes());
      }
    };
  }
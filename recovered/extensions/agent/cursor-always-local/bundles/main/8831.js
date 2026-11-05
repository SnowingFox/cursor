// @recovered-by cursor-re
// artifact: app/extensions/cursor-always-local/dist/main.js sha256:14fb2d0e360d81a024b4ec605f417e030e19b30b2df99bc45648aa227060534e
// module: 8831 range:5345586..5352435
// basis: webpack-id confidence: C
// method: split
// run: ext-agent 2026-11-05T10:20:08.356Z
8831: (t2, e2, r2) => {
    "use strict";
    Object.defineProperty(e2, "__esModule", { value: true }), e2.BinaryReader = e2.BinaryWriter = e2.WireType = void 0;
    const n2 = r2(7084), s2 = r2(3098), i2 = r2(1498);
    var o2;
    !(function(t3) {
      t3[t3.Varint = 0] = "Varint", t3[t3.Bit64 = 1] = "Bit64", t3[t3.LengthDelimited = 2] = "LengthDelimited", t3[t3.StartGroup = 3] = "StartGroup", t3[t3.EndGroup = 4] = "EndGroup", t3[t3.Bit32 = 5] = "Bit32";
    })(o2 || (e2.WireType = o2 = {}));
    e2.BinaryWriter = class {
      constructor(t3) {
        this.stack = [], this.textEncoder = null != t3 ? t3 : new TextEncoder(), this.chunks = [], this.buf = [];
      }
      finish() {
        this.chunks.push(new Uint8Array(this.buf));
        let t3 = 0;
        for (let e4 = 0; e4 < this.chunks.length; e4++) t3 += this.chunks[e4].length;
        let e3 = new Uint8Array(t3), r3 = 0;
        for (let t4 = 0; t4 < this.chunks.length; t4++) e3.set(this.chunks[t4], r3), r3 += this.chunks[t4].length;
        return this.chunks = [], e3;
      }
      fork() {
        return this.stack.push({ chunks: this.chunks, buf: this.buf }), this.chunks = [], this.buf = [], this;
      }
      join() {
        let t3 = this.finish(), e3 = this.stack.pop();
        if (!e3) throw new Error("invalid state, fork stack empty");
        return this.chunks = e3.chunks, this.buf = e3.buf, this.uint32(t3.byteLength), this.raw(t3);
      }
      tag(t3, e3) {
        return this.uint32((t3 << 3 | e3) >>> 0);
      }
      raw(t3) {
        return this.buf.length && (this.chunks.push(new Uint8Array(this.buf)), this.buf = []), this.chunks.push(t3), this;
      }
      uint32(t3) {
        for ((0, s2.assertUInt32)(t3); t3 > 127; ) this.buf.push(127 & t3 | 128), t3 >>>= 7;
        return this.buf.push(t3), this;
      }
      int32(t3) {
        return (0, s2.assertInt32)(t3), (0, n2.varint32write)(t3, this.buf), this;
      }
      bool(t3) {
        return this.buf.push(t3 ? 1 : 0), this;
      }
      bytes(t3) {
        return this.uint32(t3.byteLength), this.raw(t3);
      }
      string(t3) {
        let e3 = this.textEncoder.encode(t3);
        return this.uint32(e3.byteLength), this.raw(e3);
      }
      float(t3) {
        (0, s2.assertFloat32)(t3);
        let e3 = new Uint8Array(4);
        return new DataView(e3.buffer).setFloat32(0, t3, true), this.raw(e3);
      }
      double(t3) {
        let e3 = new Uint8Array(8);
        return new DataView(e3.buffer).setFloat64(0, t3, true), this.raw(e3);
      }
      fixed32(t3) {
        (0, s2.assertUInt32)(t3);
        let e3 = new Uint8Array(4);
        return new DataView(e3.buffer).setUint32(0, t3, true), this.raw(e3);
      }
      sfixed32(t3) {
        (0, s2.assertInt32)(t3);
        let e3 = new Uint8Array(4);
        return new DataView(e3.buffer).setInt32(0, t3, true), this.raw(e3);
      }
      sint32(t3) {
        return (0, s2.assertInt32)(t3), t3 = (t3 << 1 ^ t3 >> 31) >>> 0, (0, n2.varint32write)(t3, this.buf), this;
      }
      sfixed64(t3) {
        let e3 = new Uint8Array(8), r3 = new DataView(e3.buffer), n3 = i2.protoInt64.enc(t3);
        return r3.setInt32(0, n3.lo, true), r3.setInt32(4, n3.hi, true), this.raw(e3);
      }
      fixed64(t3) {
        let e3 = new Uint8Array(8), r3 = new DataView(e3.buffer), n3 = i2.protoInt64.uEnc(t3);
        return r3.setInt32(0, n3.lo, true), r3.setInt32(4, n3.hi, true), this.raw(e3);
      }
      int64(t3) {
        let e3 = i2.protoInt64.enc(t3);
        return (0, n2.varint64write)(e3.lo, e3.hi, this.buf), this;
      }
      sint64(t3) {
        let e3 = i2.protoInt64.enc(t3), r3 = e3.hi >> 31, s3 = e3.lo << 1 ^ r3, o3 = (e3.hi << 1 | e3.lo >>> 31) ^ r3;
        return (0, n2.varint64write)(s3, o3, this.buf), this;
      }
      uint64(t3) {
        let e3 = i2.protoInt64.uEnc(t3);
        return (0, n2.varint64write)(e3.lo, e3.hi, this.buf), this;
      }
    };
    e2.BinaryReader = class {
      constructor(t3, e3) {
        this.varint64 = n2.varint64read, this.uint32 = n2.varint32read, this.buf = t3, this.len = t3.length, this.pos = 0, this.view = new DataView(t3.buffer, t3.byteOffset, t3.byteLength), this.textDecoder = null != e3 ? e3 : new TextDecoder();
      }
      tag() {
        let t3 = this.uint32(), e3 = t3 >>> 3, r3 = 7 & t3;
        if (e3 <= 0 || r3 < 0 || r3 > 5) throw new Error("illegal tag: field no " + e3 + " wire type " + r3);
        return [e3, r3];
      }
      skip(t3, e3) {
        let r3 = this.pos;
        switch (t3) {
          case o2.Varint:
            for (; 128 & this.buf[this.pos++]; ) ;
            break;
          case o2.Bit64:
            this.pos += 4;
          case o2.Bit32:
            this.pos += 4;
            break;
          case o2.LengthDelimited:
            let r4 = this.uint32();
            this.pos += r4;
            break;
          case o2.StartGroup:
            for (; ; ) {
              const [t4, r5] = this.tag();
              if (r5 === o2.EndGroup) {
                if (void 0 !== e3 && t4 !== e3) throw new Error("invalid end group tag");
                break;
              }
              this.skip(r5, t4);
            }
            break;
          default:
            throw new Error("cant skip wire type " + t3);
        }
        return this.assertBounds(), this.buf.subarray(r3, this.pos);
      }
      assertBounds() {
        if (this.pos > this.len) throw new RangeError("premature EOF");
      }
      int32() {
        return 0 | this.uint32();
      }
      sint32() {
        let t3 = this.uint32();
        return t3 >>> 1 ^ -(1 & t3);
      }
      int64() {
        return i2.protoInt64.dec(...this.varint64());
      }
      uint64() {
        return i2.protoInt64.uDec(...this.varint64());
      }
      sint64() {
        let [t3, e3] = this.varint64(), r3 = -(1 & t3);
        return t3 = (t3 >>> 1 | (1 & e3) << 31) ^ r3, e3 = e3 >>> 1 ^ r3, i2.protoInt64.dec(t3, e3);
      }
      bool() {
        let [t3, e3] = this.varint64();
        return 0 !== t3 || 0 !== e3;
      }
      fixed32() {
        return this.view.getUint32((this.pos += 4) - 4, true);
      }
      sfixed32() {
        return this.view.getInt32((this.pos += 4) - 4, true);
      }
      fixed64() {
        return i2.protoInt64.uDec(this.sfixed32(), this.sfixed32());
      }
      sfixed64() {
        return i2.protoInt64.dec(this.sfixed32(), this.sfixed32());
      }
      float() {
        return this.view.getFloat32((this.pos += 4) - 4, true);
      }
      double() {
        return this.view.getFloat64((this.pos += 8) - 8, true);
      }
      bytes() {
        let t3 = this.uint32(), e3 = this.pos;
        return this.pos += t3, this.assertBounds(), this.buf.subarray(e3, e3 + t3);
      }
      string() {
        return this.textDecoder.decode(this.bytes());
      }
    };
  }
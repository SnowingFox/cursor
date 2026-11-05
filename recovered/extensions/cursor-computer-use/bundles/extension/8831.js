// @recovered-by cursor-re
// artifact: app/extensions/cursor-computer-use/dist/extension.js sha256:2e37990c917916e7e5b3d1524e03cf61b1cf38ddc56b1e51014a1275aa4568a6
// module: 8831 range:697213..704053
// basis: webpack-id confidence: C
// method: split
// run: ext-p0 2026-11-05T10:07:22.069Z
8831: (e2, n2, t2) => {
    "use strict";
    Object.defineProperty(n2, "__esModule", { value: true }), n2.BinaryReader = n2.BinaryWriter = n2.WireType = void 0;
    const a2 = t2(7084), s2 = t2(3098), o2 = t2(1498);
    var r;
    !(function(e3) {
      e3[e3.Varint = 0] = "Varint", e3[e3.Bit64 = 1] = "Bit64", e3[e3.LengthDelimited = 2] = "LengthDelimited", e3[e3.StartGroup = 3] = "StartGroup", e3[e3.EndGroup = 4] = "EndGroup", e3[e3.Bit32 = 5] = "Bit32";
    })(r || (n2.WireType = r = {}));
    n2.BinaryWriter = class {
      constructor(e3) {
        this.stack = [], this.textEncoder = null != e3 ? e3 : new TextEncoder(), this.chunks = [], this.buf = [];
      }
      finish() {
        this.chunks.push(new Uint8Array(this.buf));
        let e3 = 0;
        for (let n4 = 0; n4 < this.chunks.length; n4++) e3 += this.chunks[n4].length;
        let n3 = new Uint8Array(e3), t3 = 0;
        for (let e4 = 0; e4 < this.chunks.length; e4++) n3.set(this.chunks[e4], t3), t3 += this.chunks[e4].length;
        return this.chunks = [], n3;
      }
      fork() {
        return this.stack.push({ chunks: this.chunks, buf: this.buf }), this.chunks = [], this.buf = [], this;
      }
      join() {
        let e3 = this.finish(), n3 = this.stack.pop();
        if (!n3) throw new Error("invalid state, fork stack empty");
        return this.chunks = n3.chunks, this.buf = n3.buf, this.uint32(e3.byteLength), this.raw(e3);
      }
      tag(e3, n3) {
        return this.uint32((e3 << 3 | n3) >>> 0);
      }
      raw(e3) {
        return this.buf.length && (this.chunks.push(new Uint8Array(this.buf)), this.buf = []), this.chunks.push(e3), this;
      }
      uint32(e3) {
        for ((0, s2.assertUInt32)(e3); e3 > 127; ) this.buf.push(127 & e3 | 128), e3 >>>= 7;
        return this.buf.push(e3), this;
      }
      int32(e3) {
        return (0, s2.assertInt32)(e3), (0, a2.varint32write)(e3, this.buf), this;
      }
      bool(e3) {
        return this.buf.push(e3 ? 1 : 0), this;
      }
      bytes(e3) {
        return this.uint32(e3.byteLength), this.raw(e3);
      }
      string(e3) {
        let n3 = this.textEncoder.encode(e3);
        return this.uint32(n3.byteLength), this.raw(n3);
      }
      float(e3) {
        (0, s2.assertFloat32)(e3);
        let n3 = new Uint8Array(4);
        return new DataView(n3.buffer).setFloat32(0, e3, true), this.raw(n3);
      }
      double(e3) {
        let n3 = new Uint8Array(8);
        return new DataView(n3.buffer).setFloat64(0, e3, true), this.raw(n3);
      }
      fixed32(e3) {
        (0, s2.assertUInt32)(e3);
        let n3 = new Uint8Array(4);
        return new DataView(n3.buffer).setUint32(0, e3, true), this.raw(n3);
      }
      sfixed32(e3) {
        (0, s2.assertInt32)(e3);
        let n3 = new Uint8Array(4);
        return new DataView(n3.buffer).setInt32(0, e3, true), this.raw(n3);
      }
      sint32(e3) {
        return (0, s2.assertInt32)(e3), e3 = (e3 << 1 ^ e3 >> 31) >>> 0, (0, a2.varint32write)(e3, this.buf), this;
      }
      sfixed64(e3) {
        let n3 = new Uint8Array(8), t3 = new DataView(n3.buffer), a3 = o2.protoInt64.enc(e3);
        return t3.setInt32(0, a3.lo, true), t3.setInt32(4, a3.hi, true), this.raw(n3);
      }
      fixed64(e3) {
        let n3 = new Uint8Array(8), t3 = new DataView(n3.buffer), a3 = o2.protoInt64.uEnc(e3);
        return t3.setInt32(0, a3.lo, true), t3.setInt32(4, a3.hi, true), this.raw(n3);
      }
      int64(e3) {
        let n3 = o2.protoInt64.enc(e3);
        return (0, a2.varint64write)(n3.lo, n3.hi, this.buf), this;
      }
      sint64(e3) {
        let n3 = o2.protoInt64.enc(e3), t3 = n3.hi >> 31, s3 = n3.lo << 1 ^ t3, r2 = (n3.hi << 1 | n3.lo >>> 31) ^ t3;
        return (0, a2.varint64write)(s3, r2, this.buf), this;
      }
      uint64(e3) {
        let n3 = o2.protoInt64.uEnc(e3);
        return (0, a2.varint64write)(n3.lo, n3.hi, this.buf), this;
      }
    };
    n2.BinaryReader = class {
      constructor(e3, n3) {
        this.varint64 = a2.varint64read, this.uint32 = a2.varint32read, this.buf = e3, this.len = e3.length, this.pos = 0, this.view = new DataView(e3.buffer, e3.byteOffset, e3.byteLength), this.textDecoder = null != n3 ? n3 : new TextDecoder();
      }
      tag() {
        let e3 = this.uint32(), n3 = e3 >>> 3, t3 = 7 & e3;
        if (n3 <= 0 || t3 < 0 || t3 > 5) throw new Error("illegal tag: field no " + n3 + " wire type " + t3);
        return [n3, t3];
      }
      skip(e3, n3) {
        let t3 = this.pos;
        switch (e3) {
          case r.Varint:
            for (; 128 & this.buf[this.pos++]; ) ;
            break;
          case r.Bit64:
            this.pos += 4;
          case r.Bit32:
            this.pos += 4;
            break;
          case r.LengthDelimited:
            let t4 = this.uint32();
            this.pos += t4;
            break;
          case r.StartGroup:
            for (; ; ) {
              const [e4, t5] = this.tag();
              if (t5 === r.EndGroup) {
                if (void 0 !== n3 && e4 !== n3) throw new Error("invalid end group tag");
                break;
              }
              this.skip(t5, e4);
            }
            break;
          default:
            throw new Error("cant skip wire type " + e3);
        }
        return this.assertBounds(), this.buf.subarray(t3, this.pos);
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
        let [e3, n3] = this.varint64(), t3 = -(1 & e3);
        return e3 = (e3 >>> 1 | (1 & n3) << 31) ^ t3, n3 = n3 >>> 1 ^ t3, o2.protoInt64.dec(e3, n3);
      }
      bool() {
        let [e3, n3] = this.varint64();
        return 0 !== e3 || 0 !== n3;
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
        let e3 = this.uint32(), n3 = this.pos;
        return this.pos += e3, this.assertBounds(), this.buf.subarray(n3, n3 + e3);
      }
      string() {
        return this.textDecoder.decode(this.bytes());
      }
    };
  }
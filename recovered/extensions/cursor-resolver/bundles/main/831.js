// @recovered-by cursor-re
// artifact: app/extensions/cursor-resolver/dist/main.js sha256:677b774c75dfff0de56084737d26169857daed3731cb62a6702840900f439aed
// module: 831 range:194596..201421
// basis: webpack-id confidence: C
// method: split
// run: ext-p0 2026-11-05T10:07:22.069Z
831: (e2, t2, n2) => {
    Object.defineProperty(t2, "__esModule", { value: true }), t2.BinaryReader = t2.BinaryWriter = t2.WireType = void 0;
    const r2 = n2(84), o2 = n2(98), a2 = n2(498);
    var s2;
    !(function(e3) {
      e3[e3.Varint = 0] = "Varint", e3[e3.Bit64 = 1] = "Bit64", e3[e3.LengthDelimited = 2] = "LengthDelimited", e3[e3.StartGroup = 3] = "StartGroup", e3[e3.EndGroup = 4] = "EndGroup", e3[e3.Bit32 = 5] = "Bit32";
    })(s2 || (t2.WireType = s2 = {}));
    t2.BinaryWriter = class {
      constructor(e3) {
        this.stack = [], this.textEncoder = null != e3 ? e3 : new TextEncoder(), this.chunks = [], this.buf = [];
      }
      finish() {
        this.chunks.push(new Uint8Array(this.buf));
        let e3 = 0;
        for (let t4 = 0; t4 < this.chunks.length; t4++) e3 += this.chunks[t4].length;
        let t3 = new Uint8Array(e3), n3 = 0;
        for (let e4 = 0; e4 < this.chunks.length; e4++) t3.set(this.chunks[e4], n3), n3 += this.chunks[e4].length;
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
        for ((0, o2.assertUInt32)(e3); e3 > 127; ) this.buf.push(127 & e3 | 128), e3 >>>= 7;
        return this.buf.push(e3), this;
      }
      int32(e3) {
        return (0, o2.assertInt32)(e3), (0, r2.varint32write)(e3, this.buf), this;
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
        (0, o2.assertFloat32)(e3);
        let t3 = new Uint8Array(4);
        return new DataView(t3.buffer).setFloat32(0, e3, true), this.raw(t3);
      }
      double(e3) {
        let t3 = new Uint8Array(8);
        return new DataView(t3.buffer).setFloat64(0, e3, true), this.raw(t3);
      }
      fixed32(e3) {
        (0, o2.assertUInt32)(e3);
        let t3 = new Uint8Array(4);
        return new DataView(t3.buffer).setUint32(0, e3, true), this.raw(t3);
      }
      sfixed32(e3) {
        (0, o2.assertInt32)(e3);
        let t3 = new Uint8Array(4);
        return new DataView(t3.buffer).setInt32(0, e3, true), this.raw(t3);
      }
      sint32(e3) {
        return (0, o2.assertInt32)(e3), e3 = (e3 << 1 ^ e3 >> 31) >>> 0, (0, r2.varint32write)(e3, this.buf), this;
      }
      sfixed64(e3) {
        let t3 = new Uint8Array(8), n3 = new DataView(t3.buffer), r3 = a2.protoInt64.enc(e3);
        return n3.setInt32(0, r3.lo, true), n3.setInt32(4, r3.hi, true), this.raw(t3);
      }
      fixed64(e3) {
        let t3 = new Uint8Array(8), n3 = new DataView(t3.buffer), r3 = a2.protoInt64.uEnc(e3);
        return n3.setInt32(0, r3.lo, true), n3.setInt32(4, r3.hi, true), this.raw(t3);
      }
      int64(e3) {
        let t3 = a2.protoInt64.enc(e3);
        return (0, r2.varint64write)(t3.lo, t3.hi, this.buf), this;
      }
      sint64(e3) {
        let t3 = a2.protoInt64.enc(e3), n3 = t3.hi >> 31, o3 = t3.lo << 1 ^ n3, s3 = (t3.hi << 1 | t3.lo >>> 31) ^ n3;
        return (0, r2.varint64write)(o3, s3, this.buf), this;
      }
      uint64(e3) {
        let t3 = a2.protoInt64.uEnc(e3);
        return (0, r2.varint64write)(t3.lo, t3.hi, this.buf), this;
      }
    };
    t2.BinaryReader = class {
      constructor(e3, t3) {
        this.varint64 = r2.varint64read, this.uint32 = r2.varint32read, this.buf = e3, this.len = e3.length, this.pos = 0, this.view = new DataView(e3.buffer, e3.byteOffset, e3.byteLength), this.textDecoder = null != t3 ? t3 : new TextDecoder();
      }
      tag() {
        let e3 = this.uint32(), t3 = e3 >>> 3, n3 = 7 & e3;
        if (t3 <= 0 || n3 < 0 || n3 > 5) throw new Error("illegal tag: field no " + t3 + " wire type " + n3);
        return [t3, n3];
      }
      skip(e3, t3) {
        let n3 = this.pos;
        switch (e3) {
          case s2.Varint:
            for (; 128 & this.buf[this.pos++]; ) ;
            break;
          case s2.Bit64:
            this.pos += 4;
          case s2.Bit32:
            this.pos += 4;
            break;
          case s2.LengthDelimited:
            let n4 = this.uint32();
            this.pos += n4;
            break;
          case s2.StartGroup:
            for (; ; ) {
              const [e4, n5] = this.tag();
              if (n5 === s2.EndGroup) {
                if (void 0 !== t3 && e4 !== t3) throw new Error("invalid end group tag");
                break;
              }
              this.skip(n5, e4);
            }
            break;
          default:
            throw new Error("cant skip wire type " + e3);
        }
        return this.assertBounds(), this.buf.subarray(n3, this.pos);
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
        return a2.protoInt64.dec(...this.varint64());
      }
      uint64() {
        return a2.protoInt64.uDec(...this.varint64());
      }
      sint64() {
        let [e3, t3] = this.varint64(), n3 = -(1 & e3);
        return e3 = (e3 >>> 1 | (1 & t3) << 31) ^ n3, t3 = t3 >>> 1 ^ n3, a2.protoInt64.dec(e3, t3);
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
        return a2.protoInt64.uDec(this.sfixed32(), this.sfixed32());
      }
      sfixed64() {
        return a2.protoInt64.dec(this.sfixed32(), this.sfixed32());
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
// @recovered-by cursor-re
// artifact: app/extensions/cursor-agent-worker/dist/main.js sha256:d5af94b4e40f694b81a675a0fb00fa8d060306ca064a011e953218d005b613d5
// module: 8831 range:339156..346239
// basis: webpack-id confidence: C
// method: split
// run: ext-agent 2026-11-05T10:20:08.356Z
8831: (e10, a10, n10) => {
    Object.defineProperty(a10, "__esModule", { value: true }), a10.BinaryReader = a10.BinaryWriter = a10.WireType = void 0;
    const s10 = n10(7084), o10 = n10(3098), r10 = n10(1498);
    var t10;
    !(function(e11) {
      e11[e11.Varint = 0] = "Varint", e11[e11.Bit64 = 1] = "Bit64", e11[e11.LengthDelimited = 2] = "LengthDelimited", e11[e11.StartGroup = 3] = "StartGroup", e11[e11.EndGroup = 4] = "EndGroup", e11[e11.Bit32 = 5] = "Bit32";
    })(t10 || (a10.WireType = t10 = {}));
    a10.BinaryWriter = class {
      constructor(e11) {
        this.stack = [], this.textEncoder = null != e11 ? e11 : new TextEncoder(), this.chunks = [], this.buf = [];
      }
      finish() {
        this.chunks.push(new Uint8Array(this.buf));
        let e11 = 0;
        for (let a12 = 0; a12 < this.chunks.length; a12++) e11 += this.chunks[a12].length;
        let a11 = new Uint8Array(e11), n11 = 0;
        for (let e12 = 0; e12 < this.chunks.length; e12++) a11.set(this.chunks[e12], n11), n11 += this.chunks[e12].length;
        return this.chunks = [], a11;
      }
      fork() {
        return this.stack.push({ chunks: this.chunks, buf: this.buf }), this.chunks = [], this.buf = [], this;
      }
      join() {
        let e11 = this.finish(), a11 = this.stack.pop();
        if (!a11) throw new Error("invalid state, fork stack empty");
        return this.chunks = a11.chunks, this.buf = a11.buf, this.uint32(e11.byteLength), this.raw(e11);
      }
      tag(e11, a11) {
        return this.uint32((e11 << 3 | a11) >>> 0);
      }
      raw(e11) {
        return this.buf.length && (this.chunks.push(new Uint8Array(this.buf)), this.buf = []), this.chunks.push(e11), this;
      }
      uint32(e11) {
        for ((0, o10.assertUInt32)(e11); e11 > 127; ) this.buf.push(127 & e11 | 128), e11 >>>= 7;
        return this.buf.push(e11), this;
      }
      int32(e11) {
        return (0, o10.assertInt32)(e11), (0, s10.varint32write)(e11, this.buf), this;
      }
      bool(e11) {
        return this.buf.push(e11 ? 1 : 0), this;
      }
      bytes(e11) {
        return this.uint32(e11.byteLength), this.raw(e11);
      }
      string(e11) {
        let a11 = this.textEncoder.encode(e11);
        return this.uint32(a11.byteLength), this.raw(a11);
      }
      float(e11) {
        (0, o10.assertFloat32)(e11);
        let a11 = new Uint8Array(4);
        return new DataView(a11.buffer).setFloat32(0, e11, true), this.raw(a11);
      }
      double(e11) {
        let a11 = new Uint8Array(8);
        return new DataView(a11.buffer).setFloat64(0, e11, true), this.raw(a11);
      }
      fixed32(e11) {
        (0, o10.assertUInt32)(e11);
        let a11 = new Uint8Array(4);
        return new DataView(a11.buffer).setUint32(0, e11, true), this.raw(a11);
      }
      sfixed32(e11) {
        (0, o10.assertInt32)(e11);
        let a11 = new Uint8Array(4);
        return new DataView(a11.buffer).setInt32(0, e11, true), this.raw(a11);
      }
      sint32(e11) {
        return (0, o10.assertInt32)(e11), e11 = (e11 << 1 ^ e11 >> 31) >>> 0, (0, s10.varint32write)(e11, this.buf), this;
      }
      sfixed64(e11) {
        let a11 = new Uint8Array(8), n11 = new DataView(a11.buffer), s11 = r10.protoInt64.enc(e11);
        return n11.setInt32(0, s11.lo, true), n11.setInt32(4, s11.hi, true), this.raw(a11);
      }
      fixed64(e11) {
        let a11 = new Uint8Array(8), n11 = new DataView(a11.buffer), s11 = r10.protoInt64.uEnc(e11);
        return n11.setInt32(0, s11.lo, true), n11.setInt32(4, s11.hi, true), this.raw(a11);
      }
      int64(e11) {
        let a11 = r10.protoInt64.enc(e11);
        return (0, s10.varint64write)(a11.lo, a11.hi, this.buf), this;
      }
      sint64(e11) {
        let a11 = r10.protoInt64.enc(e11), n11 = a11.hi >> 31, o11 = a11.lo << 1 ^ n11, t11 = (a11.hi << 1 | a11.lo >>> 31) ^ n11;
        return (0, s10.varint64write)(o11, t11, this.buf), this;
      }
      uint64(e11) {
        let a11 = r10.protoInt64.uEnc(e11);
        return (0, s10.varint64write)(a11.lo, a11.hi, this.buf), this;
      }
    };
    a10.BinaryReader = class {
      constructor(e11, a11) {
        this.varint64 = s10.varint64read, this.uint32 = s10.varint32read, this.buf = e11, this.len = e11.length, this.pos = 0, this.view = new DataView(e11.buffer, e11.byteOffset, e11.byteLength), this.textDecoder = null != a11 ? a11 : new TextDecoder();
      }
      tag() {
        let e11 = this.uint32(), a11 = e11 >>> 3, n11 = 7 & e11;
        if (a11 <= 0 || n11 < 0 || n11 > 5) throw new Error("illegal tag: field no " + a11 + " wire type " + n11);
        return [a11, n11];
      }
      skip(e11, a11) {
        let n11 = this.pos;
        switch (e11) {
          case t10.Varint:
            for (; 128 & this.buf[this.pos++]; ) ;
            break;
          case t10.Bit64:
            this.pos += 4;
          case t10.Bit32:
            this.pos += 4;
            break;
          case t10.LengthDelimited:
            let n12 = this.uint32();
            this.pos += n12;
            break;
          case t10.StartGroup:
            for (; ; ) {
              const [e12, n13] = this.tag();
              if (n13 === t10.EndGroup) {
                if (void 0 !== a11 && e12 !== a11) throw new Error("invalid end group tag");
                break;
              }
              this.skip(n13, e12);
            }
            break;
          default:
            throw new Error("cant skip wire type " + e11);
        }
        return this.assertBounds(), this.buf.subarray(n11, this.pos);
      }
      assertBounds() {
        if (this.pos > this.len) throw new RangeError("premature EOF");
      }
      int32() {
        return 0 | this.uint32();
      }
      sint32() {
        let e11 = this.uint32();
        return e11 >>> 1 ^ -(1 & e11);
      }
      int64() {
        return r10.protoInt64.dec(...this.varint64());
      }
      uint64() {
        return r10.protoInt64.uDec(...this.varint64());
      }
      sint64() {
        let [e11, a11] = this.varint64(), n11 = -(1 & e11);
        return e11 = (e11 >>> 1 | (1 & a11) << 31) ^ n11, a11 = a11 >>> 1 ^ n11, r10.protoInt64.dec(e11, a11);
      }
      bool() {
        let [e11, a11] = this.varint64();
        return 0 !== e11 || 0 !== a11;
      }
      fixed32() {
        return this.view.getUint32((this.pos += 4) - 4, true);
      }
      sfixed32() {
        return this.view.getInt32((this.pos += 4) - 4, true);
      }
      fixed64() {
        return r10.protoInt64.uDec(this.sfixed32(), this.sfixed32());
      }
      sfixed64() {
        return r10.protoInt64.dec(this.sfixed32(), this.sfixed32());
      }
      float() {
        return this.view.getFloat32((this.pos += 4) - 4, true);
      }
      double() {
        return this.view.getFloat64((this.pos += 8) - 8, true);
      }
      bytes() {
        let e11 = this.uint32(), a11 = this.pos;
        return this.pos += e11, this.assertBounds(), this.buf.subarray(a11, a11 + e11);
      }
      string() {
        return this.textDecoder.decode(this.bytes());
      }
    };
  }
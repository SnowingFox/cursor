// @recovered-by cursor-re
// artifact: app/extensions/cursor-agent-exec/dist/273.js sha256:918321c092763b0f5509b45d1560ac236164a596e0ab5a603460d95abe18903b
// module: 28742 range:28955..35681
// basis: webpack-id confidence: C
// method: split
// run: ext-p0 2026-11-05T10:07:22.069Z
28742: (e, t, i) => {
  "use strict";
  Object.defineProperty(t, "__esModule", { value: true }), t.AnsiStringType = t.StringType = t.BufferType = t.Uint8ArrayType = t.IgnoreType = t.Float80_LE = t.Float80_BE = t.Float64_LE = t.Float64_BE = t.Float32_LE = t.Float32_BE = t.Float16_LE = t.Float16_BE = t.INT64_BE = t.UINT64_BE = t.INT64_LE = t.UINT64_LE = t.INT32_LE = t.INT32_BE = t.INT24_BE = t.INT24_LE = t.INT16_LE = t.INT16_BE = t.INT8 = t.UINT32_BE = t.UINT32_LE = t.UINT24_BE = t.UINT24_LE = t.UINT16_BE = t.UINT16_LE = t.UINT8 = void 0;
  const a = i(48821);
  function n(e2) {
    return new DataView(e2.buffer, e2.byteOffset);
  }
  t.UINT8 = { len: 1, get: (e2, t2) => n(e2).getUint8(t2), put: (e2, t2, i2) => (n(e2).setUint8(t2, i2), t2 + 1) }, t.UINT16_LE = { len: 2, get: (e2, t2) => n(e2).getUint16(t2, true), put: (e2, t2, i2) => (n(e2).setUint16(t2, i2, true), t2 + 2) }, t.UINT16_BE = { len: 2, get: (e2, t2) => n(e2).getUint16(t2), put: (e2, t2, i2) => (n(e2).setUint16(t2, i2), t2 + 2) }, t.UINT24_LE = { len: 3, get(e2, t2) {
    const i2 = n(e2);
    return i2.getUint8(t2) + (i2.getUint16(t2 + 1, true) << 8);
  }, put(e2, t2, i2) {
    const a2 = n(e2);
    return a2.setUint8(t2, 255 & i2), a2.setUint16(t2 + 1, i2 >> 8, true), t2 + 3;
  } }, t.UINT24_BE = { len: 3, get(e2, t2) {
    const i2 = n(e2);
    return (i2.getUint16(t2) << 8) + i2.getUint8(t2 + 2);
  }, put(e2, t2, i2) {
    const a2 = n(e2);
    return a2.setUint16(t2, i2 >> 8), a2.setUint8(t2 + 2, 255 & i2), t2 + 3;
  } }, t.UINT32_LE = { len: 4, get: (e2, t2) => n(e2).getUint32(t2, true), put: (e2, t2, i2) => (n(e2).setUint32(t2, i2, true), t2 + 4) }, t.UINT32_BE = { len: 4, get: (e2, t2) => n(e2).getUint32(t2), put: (e2, t2, i2) => (n(e2).setUint32(t2, i2), t2 + 4) }, t.INT8 = { len: 1, get: (e2, t2) => n(e2).getInt8(t2), put: (e2, t2, i2) => (n(e2).setInt8(t2, i2), t2 + 1) }, t.INT16_BE = { len: 2, get: (e2, t2) => n(e2).getInt16(t2), put: (e2, t2, i2) => (n(e2).setInt16(t2, i2), t2 + 2) }, t.INT16_LE = { len: 2, get: (e2, t2) => n(e2).getInt16(t2, true), put: (e2, t2, i2) => (n(e2).setInt16(t2, i2, true), t2 + 2) }, t.INT24_LE = { len: 3, get(e2, i2) {
    const a2 = t.UINT24_LE.get(e2, i2);
    return a2 > 8388607 ? a2 - 16777216 : a2;
  }, put(e2, t2, i2) {
    const a2 = n(e2);
    return a2.setUint8(t2, 255 & i2), a2.setUint16(t2 + 1, i2 >> 8, true), t2 + 3;
  } }, t.INT24_BE = { len: 3, get(e2, i2) {
    const a2 = t.UINT24_BE.get(e2, i2);
    return a2 > 8388607 ? a2 - 16777216 : a2;
  }, put(e2, t2, i2) {
    const a2 = n(e2);
    return a2.setUint16(t2, i2 >> 8), a2.setUint8(t2 + 2, 255 & i2), t2 + 3;
  } }, t.INT32_BE = { len: 4, get: (e2, t2) => n(e2).getInt32(t2), put: (e2, t2, i2) => (n(e2).setInt32(t2, i2), t2 + 4) }, t.INT32_LE = { len: 4, get: (e2, t2) => n(e2).getInt32(t2, true), put: (e2, t2, i2) => (n(e2).setInt32(t2, i2, true), t2 + 4) }, t.UINT64_LE = { len: 8, get: (e2, t2) => n(e2).getBigUint64(t2, true), put: (e2, t2, i2) => (n(e2).setBigUint64(t2, i2, true), t2 + 8) }, t.INT64_LE = { len: 8, get: (e2, t2) => n(e2).getBigInt64(t2, true), put: (e2, t2, i2) => (n(e2).setBigInt64(t2, i2, true), t2 + 8) }, t.UINT64_BE = { len: 8, get: (e2, t2) => n(e2).getBigUint64(t2), put: (e2, t2, i2) => (n(e2).setBigUint64(t2, i2), t2 + 8) }, t.INT64_BE = { len: 8, get: (e2, t2) => n(e2).getBigInt64(t2), put: (e2, t2, i2) => (n(e2).setBigInt64(t2, i2), t2 + 8) }, t.Float16_BE = { len: 2, get(e2, t2) {
    return a.read(e2, t2, false, 10, this.len);
  }, put(e2, t2, i2) {
    return a.write(e2, i2, t2, false, 10, this.len), t2 + this.len;
  } }, t.Float16_LE = { len: 2, get(e2, t2) {
    return a.read(e2, t2, true, 10, this.len);
  }, put(e2, t2, i2) {
    return a.write(e2, i2, t2, true, 10, this.len), t2 + this.len;
  } }, t.Float32_BE = { len: 4, get: (e2, t2) => n(e2).getFloat32(t2), put: (e2, t2, i2) => (n(e2).setFloat32(t2, i2), t2 + 4) }, t.Float32_LE = { len: 4, get: (e2, t2) => n(e2).getFloat32(t2, true), put: (e2, t2, i2) => (n(e2).setFloat32(t2, i2, true), t2 + 4) }, t.Float64_BE = { len: 8, get: (e2, t2) => n(e2).getFloat64(t2), put: (e2, t2, i2) => (n(e2).setFloat64(t2, i2), t2 + 8) }, t.Float64_LE = { len: 8, get: (e2, t2) => n(e2).getFloat64(t2, true), put: (e2, t2, i2) => (n(e2).setFloat64(t2, i2, true), t2 + 8) }, t.Float80_BE = { len: 10, get(e2, t2) {
    return a.read(e2, t2, false, 63, this.len);
  }, put(e2, t2, i2) {
    return a.write(e2, i2, t2, false, 63, this.len), t2 + this.len;
  } }, t.Float80_LE = { len: 10, get(e2, t2) {
    return a.read(e2, t2, true, 63, this.len);
  }, put(e2, t2, i2) {
    return a.write(e2, i2, t2, true, 63, this.len), t2 + this.len;
  } };
  t.IgnoreType = class {
    constructor(e2) {
      this.len = e2;
    }
    get(e2, t2) {
    }
  };
  t.Uint8ArrayType = class {
    constructor(e2) {
      this.len = e2;
    }
    get(e2, t2) {
      return e2.subarray(t2, t2 + this.len);
    }
  };
  t.BufferType = class {
    constructor(e2) {
      this.len = e2;
    }
    get(e2, t2) {
      return Buffer.from(e2.subarray(t2, t2 + this.len));
    }
  };
  t.StringType = class {
    constructor(e2, t2) {
      this.len = e2, this.encoding = t2;
    }
    get(e2, t2) {
      return Buffer.from(e2).toString(this.encoding, t2, t2 + this.len);
    }
  };
  class r {
    constructor(e2) {
      this.len = e2;
    }
    static decode(e2, t2, i2) {
      let a2 = "";
      for (let n2 = t2; n2 < i2; ++n2) a2 += r.codePointToString(r.singleByteDecoder(e2[n2]));
      return a2;
    }
    static inRange(e2, t2, i2) {
      return t2 <= e2 && e2 <= i2;
    }
    static codePointToString(e2) {
      return e2 <= 65535 ? String.fromCharCode(e2) : (e2 -= 65536, String.fromCharCode(55296 + (e2 >> 10), 56320 + (1023 & e2)));
    }
    static singleByteDecoder(e2) {
      if (r.inRange(e2, 0, 127)) return e2;
      const t2 = r.windows1252[e2 - 128];
      if (null === t2) throw Error("invaliding encoding");
      return t2;
    }
    get(e2, t2 = 0) {
      return r.decode(e2, t2, t2 + this.len);
    }
  }
  t.AnsiStringType = r, r.windows1252 = [8364, 129, 8218, 402, 8222, 8230, 8224, 8225, 710, 8240, 352, 8249, 338, 141, 381, 143, 144, 8216, 8217, 8220, 8221, 8226, 8211, 8212, 732, 8482, 353, 8250, 339, 157, 382, 376, 160, 161, 162, 163, 164, 165, 166, 167, 168, 169, 170, 171, 172, 173, 174, 175, 176, 177, 178, 179, 180, 181, 182, 183, 184, 185, 186, 187, 188, 189, 190, 191, 192, 193, 194, 195, 196, 197, 198, 199, 200, 201, 202, 203, 204, 205, 206, 207, 208, 209, 210, 211, 212, 213, 214, 215, 216, 217, 218, 219, 220, 221, 222, 223, 224, 225, 226, 227, 228, 229, 230, 231, 232, 233, 234, 235, 236, 237, 238, 239, 240, 241, 242, 243, 244, 245, 246, 247, 248, 249, 250, 251, 252, 253, 254, 255];
}
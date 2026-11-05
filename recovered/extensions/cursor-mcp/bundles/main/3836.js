// @recovered-by cursor-re
// artifact: app/extensions/cursor-mcp/dist/main.js sha256:097aeef3cf1f927e9bc6c0d23972c432bbcae8dc0ea353a5b6308dd59620fb49
// module: 3836 range:291382..293179
// basis: webpack-id confidence: C
// method: split
// run: ext-p0 2026-11-05T10:07:22.069Z
3836: (e2, t2, r2) => {
    "use strict";
    Object.defineProperty(t2, "__esModule", { value: true }), t2.isScalarZeroValue = t2.scalarZeroValue = t2.scalarEquals = void 0;
    const n2 = r2(1498), o2 = r2(3408);
    t2.scalarEquals = function(e3, t3, r3) {
      if (t3 === r3) return true;
      if (e3 == o2.ScalarType.BYTES) {
        if (!(t3 instanceof Uint8Array && r3 instanceof Uint8Array)) return false;
        if (t3.length !== r3.length) return false;
        for (let e4 = 0; e4 < t3.length; e4++) if (t3[e4] !== r3[e4]) return false;
        return true;
      }
      switch (e3) {
        case o2.ScalarType.UINT64:
        case o2.ScalarType.FIXED64:
        case o2.ScalarType.INT64:
        case o2.ScalarType.SFIXED64:
        case o2.ScalarType.SINT64:
          return t3 == r3;
      }
      return false;
    }, t2.scalarZeroValue = function(e3, t3) {
      switch (e3) {
        case o2.ScalarType.BOOL:
          return false;
        case o2.ScalarType.UINT64:
        case o2.ScalarType.FIXED64:
        case o2.ScalarType.INT64:
        case o2.ScalarType.SFIXED64:
        case o2.ScalarType.SINT64:
          return 0 == t3 ? n2.protoInt64.zero : "0";
        case o2.ScalarType.DOUBLE:
        case o2.ScalarType.FLOAT:
          return 0;
        case o2.ScalarType.BYTES:
          return new Uint8Array(0);
        case o2.ScalarType.STRING:
          return "";
        default:
          return 0;
      }
    }, t2.isScalarZeroValue = function(e3, t3) {
      switch (e3) {
        case o2.ScalarType.BOOL:
          return false === t3;
        case o2.ScalarType.STRING:
          return "" === t3;
        case o2.ScalarType.BYTES:
          return t3 instanceof Uint8Array && !t3.byteLength;
        default:
          return 0 == t3;
      }
    };
  }
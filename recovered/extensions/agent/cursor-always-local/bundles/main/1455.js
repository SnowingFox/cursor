// @recovered-by cursor-re
// artifact: app/extensions/cursor-always-local/dist/main.js sha256:14fb2d0e360d81a024b4ec605f417e030e19b30b2df99bc45648aa227060534e
// module: 1455 range:505759..507556
// basis: webpack-id confidence: C
// method: split
// run: ext-agent 2026-11-05T10:20:08.356Z
1455: (t2, e2, r2) => {
    "use strict";
    Object.defineProperty(e2, "__esModule", { value: true }), e2.isScalarZeroValue = e2.scalarZeroValue = e2.scalarEquals = void 0;
    const n2 = r2(1498), s2 = r2(3408);
    e2.scalarEquals = function(t3, e3, r3) {
      if (e3 === r3) return true;
      if (t3 == s2.ScalarType.BYTES) {
        if (!(e3 instanceof Uint8Array && r3 instanceof Uint8Array)) return false;
        if (e3.length !== r3.length) return false;
        for (let t4 = 0; t4 < e3.length; t4++) if (e3[t4] !== r3[t4]) return false;
        return true;
      }
      switch (t3) {
        case s2.ScalarType.UINT64:
        case s2.ScalarType.FIXED64:
        case s2.ScalarType.INT64:
        case s2.ScalarType.SFIXED64:
        case s2.ScalarType.SINT64:
          return e3 == r3;
      }
      return false;
    }, e2.scalarZeroValue = function(t3, e3) {
      switch (t3) {
        case s2.ScalarType.BOOL:
          return false;
        case s2.ScalarType.UINT64:
        case s2.ScalarType.FIXED64:
        case s2.ScalarType.INT64:
        case s2.ScalarType.SFIXED64:
        case s2.ScalarType.SINT64:
          return 0 == e3 ? n2.protoInt64.zero : "0";
        case s2.ScalarType.DOUBLE:
        case s2.ScalarType.FLOAT:
          return 0;
        case s2.ScalarType.BYTES:
          return new Uint8Array(0);
        case s2.ScalarType.STRING:
          return "";
        default:
          return 0;
      }
    }, e2.isScalarZeroValue = function(t3, e3) {
      switch (t3) {
        case s2.ScalarType.BOOL:
          return false === e3;
        case s2.ScalarType.STRING:
          return "" === e3;
        case s2.ScalarType.BYTES:
          return e3 instanceof Uint8Array && !e3.byteLength;
        default:
          return 0 == e3;
      }
    };
  }
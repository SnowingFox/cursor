// @recovered-by cursor-re
// artifact: app/extensions/cursor-deeplink/dist/main.js sha256:2b0091d260814e411af8319789fee5fe8b4b75d7c27c85b905f80c4d53d995f3
// module: 1455 range:159043..160840
// basis: webpack-id confidence: C
// method: split
// run: ext-agent 2026-11-05T10:20:08.356Z
1455: (e2, t2, A2) => {
    "use strict";
    Object.defineProperty(t2, "__esModule", { value: true }), t2.isScalarZeroValue = t2.scalarZeroValue = t2.scalarEquals = void 0;
    const n2 = A2(1498), r2 = A2(3408);
    t2.scalarEquals = function(e3, t3, A3) {
      if (t3 === A3) return true;
      if (e3 == r2.ScalarType.BYTES) {
        if (!(t3 instanceof Uint8Array && A3 instanceof Uint8Array)) return false;
        if (t3.length !== A3.length) return false;
        for (let e4 = 0; e4 < t3.length; e4++) if (t3[e4] !== A3[e4]) return false;
        return true;
      }
      switch (e3) {
        case r2.ScalarType.UINT64:
        case r2.ScalarType.FIXED64:
        case r2.ScalarType.INT64:
        case r2.ScalarType.SFIXED64:
        case r2.ScalarType.SINT64:
          return t3 == A3;
      }
      return false;
    }, t2.scalarZeroValue = function(e3, t3) {
      switch (e3) {
        case r2.ScalarType.BOOL:
          return false;
        case r2.ScalarType.UINT64:
        case r2.ScalarType.FIXED64:
        case r2.ScalarType.INT64:
        case r2.ScalarType.SFIXED64:
        case r2.ScalarType.SINT64:
          return 0 == t3 ? n2.protoInt64.zero : "0";
        case r2.ScalarType.DOUBLE:
        case r2.ScalarType.FLOAT:
          return 0;
        case r2.ScalarType.BYTES:
          return new Uint8Array(0);
        case r2.ScalarType.STRING:
          return "";
        default:
          return 0;
      }
    }, t2.isScalarZeroValue = function(e3, t3) {
      switch (e3) {
        case r2.ScalarType.BOOL:
          return false === t3;
        case r2.ScalarType.STRING:
          return "" === t3;
        case r2.ScalarType.BYTES:
          return t3 instanceof Uint8Array && !t3.byteLength;
        default:
          return 0 == t3;
      }
    };
  }
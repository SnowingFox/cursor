// @recovered-by cursor-re
// artifact: app/extensions/cursor-commits/dist/main.js sha256:093f8518d2bba92ce25a152b40a9e7490ef35d5b45f1477f49078295148101b9
// module: 1455 range:153011..154808
// basis: webpack-id confidence: C
// method: split
// run: ext-agent 2026-11-05T10:20:08.356Z
1455: (e2, n2, a2) => {
    "use strict";
    Object.defineProperty(n2, "__esModule", { value: true }), n2.isScalarZeroValue = n2.scalarZeroValue = n2.scalarEquals = void 0;
    const t2 = a2(1498), s2 = a2(3408);
    n2.scalarEquals = function(e3, n3, a3) {
      if (n3 === a3) return true;
      if (e3 == s2.ScalarType.BYTES) {
        if (!(n3 instanceof Uint8Array && a3 instanceof Uint8Array)) return false;
        if (n3.length !== a3.length) return false;
        for (let e4 = 0; e4 < n3.length; e4++) if (n3[e4] !== a3[e4]) return false;
        return true;
      }
      switch (e3) {
        case s2.ScalarType.UINT64:
        case s2.ScalarType.FIXED64:
        case s2.ScalarType.INT64:
        case s2.ScalarType.SFIXED64:
        case s2.ScalarType.SINT64:
          return n3 == a3;
      }
      return false;
    }, n2.scalarZeroValue = function(e3, n3) {
      switch (e3) {
        case s2.ScalarType.BOOL:
          return false;
        case s2.ScalarType.UINT64:
        case s2.ScalarType.FIXED64:
        case s2.ScalarType.INT64:
        case s2.ScalarType.SFIXED64:
        case s2.ScalarType.SINT64:
          return 0 == n3 ? t2.protoInt64.zero : "0";
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
    }, n2.isScalarZeroValue = function(e3, n3) {
      switch (e3) {
        case s2.ScalarType.BOOL:
          return false === n3;
        case s2.ScalarType.STRING:
          return "" === n3;
        case s2.ScalarType.BYTES:
          return n3 instanceof Uint8Array && !n3.byteLength;
        default:
          return 0 == n3;
      }
    };
  }
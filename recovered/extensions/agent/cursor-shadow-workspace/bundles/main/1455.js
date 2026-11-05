// @recovered-by cursor-re
// artifact: app/extensions/cursor-shadow-workspace/dist/extension.js sha256:19218949e5ecc64e4c1b41e194ba40abfd54a9aeb034a14f90c71485b7f84585
// module: 1455 range:152957..154754
// basis: webpack-id confidence: C
// method: split
// run: ext-agent 2026-11-05T10:20:08.356Z
1455: (e2, A2, t2) => {
    "use strict";
    Object.defineProperty(A2, "__esModule", { value: true }), A2.isScalarZeroValue = A2.scalarZeroValue = A2.scalarEquals = void 0;
    const n2 = t2(1498), r2 = t2(3408);
    A2.scalarEquals = function(e3, A3, t3) {
      if (A3 === t3) return true;
      if (e3 == r2.ScalarType.BYTES) {
        if (!(A3 instanceof Uint8Array && t3 instanceof Uint8Array)) return false;
        if (A3.length !== t3.length) return false;
        for (let e4 = 0; e4 < A3.length; e4++) if (A3[e4] !== t3[e4]) return false;
        return true;
      }
      switch (e3) {
        case r2.ScalarType.UINT64:
        case r2.ScalarType.FIXED64:
        case r2.ScalarType.INT64:
        case r2.ScalarType.SFIXED64:
        case r2.ScalarType.SINT64:
          return A3 == t3;
      }
      return false;
    }, A2.scalarZeroValue = function(e3, A3) {
      switch (e3) {
        case r2.ScalarType.BOOL:
          return false;
        case r2.ScalarType.UINT64:
        case r2.ScalarType.FIXED64:
        case r2.ScalarType.INT64:
        case r2.ScalarType.SFIXED64:
        case r2.ScalarType.SINT64:
          return 0 == A3 ? n2.protoInt64.zero : "0";
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
    }, A2.isScalarZeroValue = function(e3, A3) {
      switch (e3) {
        case r2.ScalarType.BOOL:
          return false === A3;
        case r2.ScalarType.STRING:
          return "" === A3;
        case r2.ScalarType.BYTES:
          return A3 instanceof Uint8Array && !A3.byteLength;
        default:
          return 0 == A3;
      }
    };
  }
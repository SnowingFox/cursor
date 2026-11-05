// @recovered-by cursor-re
// artifact: app/extensions/cursor-computer-use/dist/extension.js sha256:2e37990c917916e7e5b3d1524e03cf61b1cf38ddc56b1e51014a1275aa4568a6
// module: 1455 range:157148..158945
// basis: webpack-id confidence: C
// method: split
// run: ext-p0 2026-11-05T10:07:22.069Z
1455: (e2, n2, t2) => {
    "use strict";
    Object.defineProperty(n2, "__esModule", { value: true }), n2.isScalarZeroValue = n2.scalarZeroValue = n2.scalarEquals = void 0;
    const a2 = t2(1498), s2 = t2(3408);
    n2.scalarEquals = function(e3, n3, t3) {
      if (n3 === t3) return true;
      if (e3 == s2.ScalarType.BYTES) {
        if (!(n3 instanceof Uint8Array && t3 instanceof Uint8Array)) return false;
        if (n3.length !== t3.length) return false;
        for (let e4 = 0; e4 < n3.length; e4++) if (n3[e4] !== t3[e4]) return false;
        return true;
      }
      switch (e3) {
        case s2.ScalarType.UINT64:
        case s2.ScalarType.FIXED64:
        case s2.ScalarType.INT64:
        case s2.ScalarType.SFIXED64:
        case s2.ScalarType.SINT64:
          return n3 == t3;
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
          return 0 == n3 ? a2.protoInt64.zero : "0";
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
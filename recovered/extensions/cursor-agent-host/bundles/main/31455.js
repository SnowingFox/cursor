// @recovered-by cursor-re
// artifact: app/extensions/cursor-agent-host/dist/main.js sha256:9d478dff35f72f6b3ed85b33f2c4a15c12b41b4e3d42247ecc8ce4981e9308bb
// module: 31455 range:5084645..5086410
// basis: webpack-id confidence: C
// method: split
// run: ext-p0 2026-11-05T10:07:22.069Z
31455: (e, t, r) => {
    "use strict";
    Object.defineProperty(t, "__esModule", { value: true }), t.isScalarZeroValue = t.scalarZeroValue = t.scalarEquals = void 0;
    const n = r(11498), s = r(3408);
    t.scalarEquals = function(e2, t2, r2) {
      if (t2 === r2) return true;
      if (e2 == s.ScalarType.BYTES) {
        if (!(t2 instanceof Uint8Array && r2 instanceof Uint8Array)) return false;
        if (t2.length !== r2.length) return false;
        for (let e3 = 0; e3 < t2.length; e3++) if (t2[e3] !== r2[e3]) return false;
        return true;
      }
      switch (e2) {
        case s.ScalarType.UINT64:
        case s.ScalarType.FIXED64:
        case s.ScalarType.INT64:
        case s.ScalarType.SFIXED64:
        case s.ScalarType.SINT64:
          return t2 == r2;
      }
      return false;
    }, t.scalarZeroValue = function(e2, t2) {
      switch (e2) {
        case s.ScalarType.BOOL:
          return false;
        case s.ScalarType.UINT64:
        case s.ScalarType.FIXED64:
        case s.ScalarType.INT64:
        case s.ScalarType.SFIXED64:
        case s.ScalarType.SINT64:
          return 0 == t2 ? n.protoInt64.zero : "0";
        case s.ScalarType.DOUBLE:
        case s.ScalarType.FLOAT:
          return 0;
        case s.ScalarType.BYTES:
          return new Uint8Array(0);
        case s.ScalarType.STRING:
          return "";
        default:
          return 0;
      }
    }, t.isScalarZeroValue = function(e2, t2) {
      switch (e2) {
        case s.ScalarType.BOOL:
          return false === t2;
        case s.ScalarType.STRING:
          return "" === t2;
        case s.ScalarType.BYTES:
          return t2 instanceof Uint8Array && !t2.byteLength;
        default:
          return 0 == t2;
      }
    };
  }
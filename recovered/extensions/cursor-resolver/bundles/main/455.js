// @recovered-by cursor-re
// artifact: app/extensions/cursor-resolver/dist/main.js sha256:677b774c75dfff0de56084737d26169857daed3731cb62a6702840900f439aed
// module: 455 range:124242..126018
// basis: webpack-id confidence: C
// method: split
// run: ext-p0 2026-11-05T10:07:22.069Z
455: (e2, t2, n2) => {
    Object.defineProperty(t2, "__esModule", { value: true }), t2.isScalarZeroValue = t2.scalarZeroValue = t2.scalarEquals = void 0;
    const r2 = n2(498), o2 = n2(408);
    t2.scalarEquals = function(e3, t3, n3) {
      if (t3 === n3) return true;
      if (e3 == o2.ScalarType.BYTES) {
        if (!(t3 instanceof Uint8Array && n3 instanceof Uint8Array)) return false;
        if (t3.length !== n3.length) return false;
        for (let e4 = 0; e4 < t3.length; e4++) if (t3[e4] !== n3[e4]) return false;
        return true;
      }
      switch (e3) {
        case o2.ScalarType.UINT64:
        case o2.ScalarType.FIXED64:
        case o2.ScalarType.INT64:
        case o2.ScalarType.SFIXED64:
        case o2.ScalarType.SINT64:
          return t3 == n3;
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
          return 0 == t3 ? r2.protoInt64.zero : "0";
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
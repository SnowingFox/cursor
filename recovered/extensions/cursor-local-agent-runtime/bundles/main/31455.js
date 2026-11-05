// @recovered-by cursor-re
// artifact: app/extensions/cursor-local-agent-runtime/dist/main.js sha256:be87ea0ed3ac86375ab8e5f92c4261df0ccfc61ff24b07420f9c88a78ae2cfd0
// module: 31455 range:1007859..1009624
// basis: webpack-id confidence: C
// method: split
// run: ext-p0 2026-11-05T10:07:22.069Z
31455: (e, t, r) => {
    "use strict";
    Object.defineProperty(t, "__esModule", { value: true }), t.isScalarZeroValue = t.scalarZeroValue = t.scalarEquals = void 0;
    const n = r(11498), o = r(3408);
    t.scalarEquals = function(e2, t2, r2) {
      if (t2 === r2) return true;
      if (e2 == o.ScalarType.BYTES) {
        if (!(t2 instanceof Uint8Array && r2 instanceof Uint8Array)) return false;
        if (t2.length !== r2.length) return false;
        for (let e3 = 0; e3 < t2.length; e3++) if (t2[e3] !== r2[e3]) return false;
        return true;
      }
      switch (e2) {
        case o.ScalarType.UINT64:
        case o.ScalarType.FIXED64:
        case o.ScalarType.INT64:
        case o.ScalarType.SFIXED64:
        case o.ScalarType.SINT64:
          return t2 == r2;
      }
      return false;
    }, t.scalarZeroValue = function(e2, t2) {
      switch (e2) {
        case o.ScalarType.BOOL:
          return false;
        case o.ScalarType.UINT64:
        case o.ScalarType.FIXED64:
        case o.ScalarType.INT64:
        case o.ScalarType.SFIXED64:
        case o.ScalarType.SINT64:
          return 0 == t2 ? n.protoInt64.zero : "0";
        case o.ScalarType.DOUBLE:
        case o.ScalarType.FLOAT:
          return 0;
        case o.ScalarType.BYTES:
          return new Uint8Array(0);
        case o.ScalarType.STRING:
          return "";
        default:
          return 0;
      }
    }, t.isScalarZeroValue = function(e2, t2) {
      switch (e2) {
        case o.ScalarType.BOOL:
          return false === t2;
        case o.ScalarType.STRING:
          return "" === t2;
        case o.ScalarType.BYTES:
          return t2 instanceof Uint8Array && !t2.byteLength;
        default:
          return 0 == t2;
      }
    };
  }
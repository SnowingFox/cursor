// @recovered-by cursor-re
// artifact: app/extensions/cursor-retrieval/dist/main.js sha256:50c717cc16d67dfb571db8461d6630caeb8e421ad0090d156086d1a3d53b1b2b
// module: 1455 range:167873..169670
// basis: webpack-id confidence: C
// method: split
// run: ext-agent 2026-11-05T10:20:08.356Z
1455: (e2, a2, n2) => {
    "use strict";
    Object.defineProperty(a2, "__esModule", { value: true }), a2.isScalarZeroValue = a2.scalarZeroValue = a2.scalarEquals = void 0;
    const t2 = n2(1498), s2 = n2(3408);
    a2.scalarEquals = function(e3, a3, n3) {
      if (a3 === n3) return true;
      if (e3 == s2.ScalarType.BYTES) {
        if (!(a3 instanceof Uint8Array && n3 instanceof Uint8Array)) return false;
        if (a3.length !== n3.length) return false;
        for (let e4 = 0; e4 < a3.length; e4++) if (a3[e4] !== n3[e4]) return false;
        return true;
      }
      switch (e3) {
        case s2.ScalarType.UINT64:
        case s2.ScalarType.FIXED64:
        case s2.ScalarType.INT64:
        case s2.ScalarType.SFIXED64:
        case s2.ScalarType.SINT64:
          return a3 == n3;
      }
      return false;
    }, a2.scalarZeroValue = function(e3, a3) {
      switch (e3) {
        case s2.ScalarType.BOOL:
          return false;
        case s2.ScalarType.UINT64:
        case s2.ScalarType.FIXED64:
        case s2.ScalarType.INT64:
        case s2.ScalarType.SFIXED64:
        case s2.ScalarType.SINT64:
          return 0 == a3 ? t2.protoInt64.zero : "0";
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
    }, a2.isScalarZeroValue = function(e3, a3) {
      switch (e3) {
        case s2.ScalarType.BOOL:
          return false === a3;
        case s2.ScalarType.STRING:
          return "" === a3;
        case s2.ScalarType.BYTES:
          return a3 instanceof Uint8Array && !a3.byteLength;
        default:
          return 0 == a3;
      }
    };
  }
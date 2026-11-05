// @recovered-by cursor-re
// artifact: app/extensions/cursor-agent-worker/dist/main.js sha256:d5af94b4e40f694b81a675a0fb00fa8d060306ca064a011e953218d005b613d5
// module: 1455 range:76587..78433
// basis: webpack-id confidence: C
// method: split
// run: ext-agent 2026-11-05T10:20:08.356Z
1455: (e10, a10, n10) => {
    Object.defineProperty(a10, "__esModule", { value: true }), a10.isScalarZeroValue = a10.scalarZeroValue = a10.scalarEquals = void 0;
    const s10 = n10(1498), o10 = n10(3408);
    a10.scalarEquals = function(e11, a11, n11) {
      if (a11 === n11) return true;
      if (e11 == o10.ScalarType.BYTES) {
        if (!(a11 instanceof Uint8Array && n11 instanceof Uint8Array)) return false;
        if (a11.length !== n11.length) return false;
        for (let e12 = 0; e12 < a11.length; e12++) if (a11[e12] !== n11[e12]) return false;
        return true;
      }
      switch (e11) {
        case o10.ScalarType.UINT64:
        case o10.ScalarType.FIXED64:
        case o10.ScalarType.INT64:
        case o10.ScalarType.SFIXED64:
        case o10.ScalarType.SINT64:
          return a11 == n11;
      }
      return false;
    }, a10.scalarZeroValue = function(e11, a11) {
      switch (e11) {
        case o10.ScalarType.BOOL:
          return false;
        case o10.ScalarType.UINT64:
        case o10.ScalarType.FIXED64:
        case o10.ScalarType.INT64:
        case o10.ScalarType.SFIXED64:
        case o10.ScalarType.SINT64:
          return 0 == a11 ? s10.protoInt64.zero : "0";
        case o10.ScalarType.DOUBLE:
        case o10.ScalarType.FLOAT:
          return 0;
        case o10.ScalarType.BYTES:
          return new Uint8Array(0);
        case o10.ScalarType.STRING:
          return "";
        default:
          return 0;
      }
    }, a10.isScalarZeroValue = function(e11, a11) {
      switch (e11) {
        case o10.ScalarType.BOOL:
          return false === a11;
        case o10.ScalarType.STRING:
          return "" === a11;
        case o10.ScalarType.BYTES:
          return a11 instanceof Uint8Array && !a11.byteLength;
        default:
          return 0 == a11;
      }
    };
  }
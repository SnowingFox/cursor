// @recovered-by cursor-re
// artifact: app/extensions/cursor-resolver-helper/dist/main.js sha256:0eb6078f0829c93d9374e39385fef22eabf7657a05c3cdf5bf316d9dbcf5ad0e
// module: 663 range:168249..172784
// basis: webpack-id confidence: C
// method: split
// run: ext-agent 2026-11-05T10:20:08.356Z
663: (e2, a2, n2) => {
    Object.defineProperty(a2, "__esModule", { value: true }), a2.parseTextFormatScalarValue = a2.parseTextFormatEnumValue = void 0;
    const o2 = n2(98), s2 = n2(498), t2 = n2(408);
    a2.parseTextFormatEnumValue = function(e3, a3) {
      const n3 = e3.values.find((e4) => e4.name === a3);
      return (0, o2.assert)(n3, `cannot parse ${e3.name} default value: ${a3}`), n3.number;
    }, a2.parseTextFormatScalarValue = function(e3, a3) {
      switch (e3) {
        case t2.ScalarType.STRING:
          return a3;
        case t2.ScalarType.BYTES: {
          const n3 = (function(e4) {
            const a4 = [], n4 = { tail: e4, c: "", next() {
              return 0 != this.tail.length && (this.c = this.tail[0], this.tail = this.tail.substring(1), true);
            }, take(e5) {
              if (this.tail.length >= e5) {
                const a5 = this.tail.substring(0, e5);
                return this.tail = this.tail.substring(e5), a5;
              }
              return false;
            } };
            for (; n4.next(); ) if ("\\" === n4.c) {
              if (n4.next()) switch (n4.c) {
                case "\\":
                  a4.push(n4.c.charCodeAt(0));
                  break;
                case "b":
                  a4.push(8);
                  break;
                case "f":
                  a4.push(12);
                  break;
                case "n":
                  a4.push(10);
                  break;
                case "r":
                  a4.push(13);
                  break;
                case "t":
                  a4.push(9);
                  break;
                case "v":
                  a4.push(11);
                  break;
                case "0":
                case "1":
                case "2":
                case "3":
                case "4":
                case "5":
                case "6":
                case "7": {
                  const e5 = n4.c, o3 = n4.take(2);
                  if (false === o3) return false;
                  const s3 = parseInt(e5 + o3, 8);
                  if (isNaN(s3)) return false;
                  a4.push(s3);
                  break;
                }
                case "x": {
                  const e5 = n4.c, o3 = n4.take(2);
                  if (false === o3) return false;
                  const s3 = parseInt(e5 + o3, 16);
                  if (isNaN(s3)) return false;
                  a4.push(s3);
                  break;
                }
                case "u": {
                  const e5 = n4.c, o3 = n4.take(4);
                  if (false === o3) return false;
                  const s3 = parseInt(e5 + o3, 16);
                  if (isNaN(s3)) return false;
                  const t3 = new Uint8Array(4);
                  new DataView(t3.buffer).setInt32(0, s3, true), a4.push(t3[0], t3[1], t3[2], t3[3]);
                  break;
                }
                case "U": {
                  const e5 = n4.c, o3 = n4.take(8);
                  if (false === o3) return false;
                  const t3 = s2.protoInt64.uEnc(e5 + o3), r2 = new Uint8Array(8), i2 = new DataView(r2.buffer);
                  i2.setInt32(0, t3.lo, true), i2.setInt32(4, t3.hi, true), a4.push(r2[0], r2[1], r2[2], r2[3], r2[4], r2[5], r2[6], r2[7]);
                  break;
                }
              }
            } else a4.push(n4.c.charCodeAt(0));
            return new Uint8Array(a4);
          })(a3);
          if (false === n3) throw new Error(`cannot parse ${t2.ScalarType[e3]} default value: ${a3}`);
          return n3;
        }
        case t2.ScalarType.INT64:
        case t2.ScalarType.SFIXED64:
        case t2.ScalarType.SINT64:
          return s2.protoInt64.parse(a3);
        case t2.ScalarType.UINT64:
        case t2.ScalarType.FIXED64:
          return s2.protoInt64.uParse(a3);
        case t2.ScalarType.DOUBLE:
        case t2.ScalarType.FLOAT:
          switch (a3) {
            case "inf":
              return Number.POSITIVE_INFINITY;
            case "-inf":
              return Number.NEGATIVE_INFINITY;
            case "nan":
              return Number.NaN;
            default:
              return parseFloat(a3);
          }
        case t2.ScalarType.BOOL:
          return "true" === a3;
        case t2.ScalarType.INT32:
        case t2.ScalarType.UINT32:
        case t2.ScalarType.SINT32:
        case t2.ScalarType.FIXED32:
        case t2.ScalarType.SFIXED32:
          return parseInt(a3, 10);
      }
    };
  }
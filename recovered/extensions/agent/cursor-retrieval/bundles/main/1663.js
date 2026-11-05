// @recovered-by cursor-re
// artifact: app/extensions/cursor-retrieval/dist/main.js sha256:50c717cc16d67dfb571db8461d6630caeb8e421ad0090d156086d1a3d53b1b2b
// module: 1663 range:189699..194257
// basis: webpack-id confidence: C
// method: split
// run: ext-agent 2026-11-05T10:20:08.356Z
1663: (e2, a2, n2) => {
    "use strict";
    Object.defineProperty(a2, "__esModule", { value: true }), a2.parseTextFormatScalarValue = a2.parseTextFormatEnumValue = void 0;
    const t2 = n2(3098), s2 = n2(1498), o2 = n2(3408);
    a2.parseTextFormatEnumValue = function(e3, a3) {
      const n3 = e3.values.find((e4) => e4.name === a3);
      return (0, t2.assert)(n3, `cannot parse ${e3.name} default value: ${a3}`), n3.number;
    }, a2.parseTextFormatScalarValue = function(e3, a3) {
      switch (e3) {
        case o2.ScalarType.STRING:
          return a3;
        case o2.ScalarType.BYTES: {
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
                  const e5 = n4.c, t3 = n4.take(2);
                  if (false === t3) return false;
                  const s3 = parseInt(e5 + t3, 8);
                  if (isNaN(s3)) return false;
                  a4.push(s3);
                  break;
                }
                case "x": {
                  const e5 = n4.c, t3 = n4.take(2);
                  if (false === t3) return false;
                  const s3 = parseInt(e5 + t3, 16);
                  if (isNaN(s3)) return false;
                  a4.push(s3);
                  break;
                }
                case "u": {
                  const e5 = n4.c, t3 = n4.take(4);
                  if (false === t3) return false;
                  const s3 = parseInt(e5 + t3, 16);
                  if (isNaN(s3)) return false;
                  const o3 = new Uint8Array(4);
                  new DataView(o3.buffer).setInt32(0, s3, true), a4.push(o3[0], o3[1], o3[2], o3[3]);
                  break;
                }
                case "U": {
                  const e5 = n4.c, t3 = n4.take(8);
                  if (false === t3) return false;
                  const o3 = s2.protoInt64.uEnc(e5 + t3), r2 = new Uint8Array(8), i2 = new DataView(r2.buffer);
                  i2.setInt32(0, o3.lo, true), i2.setInt32(4, o3.hi, true), a4.push(r2[0], r2[1], r2[2], r2[3], r2[4], r2[5], r2[6], r2[7]);
                  break;
                }
              }
            } else a4.push(n4.c.charCodeAt(0));
            return new Uint8Array(a4);
          })(a3);
          if (false === n3) throw new Error(`cannot parse ${o2.ScalarType[e3]} default value: ${a3}`);
          return n3;
        }
        case o2.ScalarType.INT64:
        case o2.ScalarType.SFIXED64:
        case o2.ScalarType.SINT64:
          return s2.protoInt64.parse(a3);
        case o2.ScalarType.UINT64:
        case o2.ScalarType.FIXED64:
          return s2.protoInt64.uParse(a3);
        case o2.ScalarType.DOUBLE:
        case o2.ScalarType.FLOAT:
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
        case o2.ScalarType.BOOL:
          return "true" === a3;
        case o2.ScalarType.INT32:
        case o2.ScalarType.UINT32:
        case o2.ScalarType.SINT32:
        case o2.ScalarType.FIXED32:
        case o2.ScalarType.SFIXED32:
          return parseInt(a3, 10);
      }
    };
  }
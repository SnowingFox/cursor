// @recovered-by cursor-re
// artifact: app/extensions/cursor-computer-use/dist/extension.js sha256:2e37990c917916e7e5b3d1524e03cf61b1cf38ddc56b1e51014a1275aa4568a6
// module: 1663 range:178935..183480
// basis: webpack-id confidence: C
// method: split
// run: ext-p0 2026-11-05T10:07:22.069Z
1663: (e2, n2, t2) => {
    "use strict";
    Object.defineProperty(n2, "__esModule", { value: true }), n2.parseTextFormatScalarValue = n2.parseTextFormatEnumValue = void 0;
    const a2 = t2(3098), s2 = t2(1498), o2 = t2(3408);
    n2.parseTextFormatEnumValue = function(e3, n3) {
      const t3 = e3.values.find((e4) => e4.name === n3);
      return (0, a2.assert)(t3, `cannot parse ${e3.name} default value: ${n3}`), t3.number;
    }, n2.parseTextFormatScalarValue = function(e3, n3) {
      switch (e3) {
        case o2.ScalarType.STRING:
          return n3;
        case o2.ScalarType.BYTES: {
          const t3 = (function(e4) {
            const n4 = [], t4 = { tail: e4, c: "", next() {
              return 0 != this.tail.length && (this.c = this.tail[0], this.tail = this.tail.substring(1), true);
            }, take(e5) {
              if (this.tail.length >= e5) {
                const n5 = this.tail.substring(0, e5);
                return this.tail = this.tail.substring(e5), n5;
              }
              return false;
            } };
            for (; t4.next(); ) if ("\\" === t4.c) {
              if (t4.next()) switch (t4.c) {
                case "\\":
                  n4.push(t4.c.charCodeAt(0));
                  break;
                case "b":
                  n4.push(8);
                  break;
                case "f":
                  n4.push(12);
                  break;
                case "n":
                  n4.push(10);
                  break;
                case "r":
                  n4.push(13);
                  break;
                case "t":
                  n4.push(9);
                  break;
                case "v":
                  n4.push(11);
                  break;
                case "0":
                case "1":
                case "2":
                case "3":
                case "4":
                case "5":
                case "6":
                case "7": {
                  const e5 = t4.c, a3 = t4.take(2);
                  if (false === a3) return false;
                  const s3 = parseInt(e5 + a3, 8);
                  if (isNaN(s3)) return false;
                  n4.push(s3);
                  break;
                }
                case "x": {
                  const e5 = t4.c, a3 = t4.take(2);
                  if (false === a3) return false;
                  const s3 = parseInt(e5 + a3, 16);
                  if (isNaN(s3)) return false;
                  n4.push(s3);
                  break;
                }
                case "u": {
                  const e5 = t4.c, a3 = t4.take(4);
                  if (false === a3) return false;
                  const s3 = parseInt(e5 + a3, 16);
                  if (isNaN(s3)) return false;
                  const o3 = new Uint8Array(4);
                  new DataView(o3.buffer).setInt32(0, s3, true), n4.push(o3[0], o3[1], o3[2], o3[3]);
                  break;
                }
                case "U": {
                  const e5 = t4.c, a3 = t4.take(8);
                  if (false === a3) return false;
                  const o3 = s2.protoInt64.uEnc(e5 + a3), r = new Uint8Array(8), i = new DataView(r.buffer);
                  i.setInt32(0, o3.lo, true), i.setInt32(4, o3.hi, true), n4.push(r[0], r[1], r[2], r[3], r[4], r[5], r[6], r[7]);
                  break;
                }
              }
            } else n4.push(t4.c.charCodeAt(0));
            return new Uint8Array(n4);
          })(n3);
          if (false === t3) throw new Error(`cannot parse ${o2.ScalarType[e3]} default value: ${n3}`);
          return t3;
        }
        case o2.ScalarType.INT64:
        case o2.ScalarType.SFIXED64:
        case o2.ScalarType.SINT64:
          return s2.protoInt64.parse(n3);
        case o2.ScalarType.UINT64:
        case o2.ScalarType.FIXED64:
          return s2.protoInt64.uParse(n3);
        case o2.ScalarType.DOUBLE:
        case o2.ScalarType.FLOAT:
          switch (n3) {
            case "inf":
              return Number.POSITIVE_INFINITY;
            case "-inf":
              return Number.NEGATIVE_INFINITY;
            case "nan":
              return Number.NaN;
            default:
              return parseFloat(n3);
          }
        case o2.ScalarType.BOOL:
          return "true" === n3;
        case o2.ScalarType.INT32:
        case o2.ScalarType.UINT32:
        case o2.ScalarType.SINT32:
        case o2.ScalarType.FIXED32:
        case o2.ScalarType.SFIXED32:
          return parseInt(n3, 10);
      }
    };
  }
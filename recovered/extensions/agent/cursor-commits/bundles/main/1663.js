// @recovered-by cursor-re
// artifact: app/extensions/cursor-commits/dist/main.js sha256:093f8518d2bba92ce25a152b40a9e7490ef35d5b45f1477f49078295148101b9
// module: 1663 range:174837..179395
// basis: webpack-id confidence: C
// method: split
// run: ext-agent 2026-11-05T10:20:08.356Z
1663: (e2, n2, a2) => {
    "use strict";
    Object.defineProperty(n2, "__esModule", { value: true }), n2.parseTextFormatScalarValue = n2.parseTextFormatEnumValue = void 0;
    const t2 = a2(3098), s2 = a2(1498), o2 = a2(3408);
    n2.parseTextFormatEnumValue = function(e3, n3) {
      const a3 = e3.values.find((e4) => e4.name === n3);
      return (0, t2.assert)(a3, `cannot parse ${e3.name} default value: ${n3}`), a3.number;
    }, n2.parseTextFormatScalarValue = function(e3, n3) {
      switch (e3) {
        case o2.ScalarType.STRING:
          return n3;
        case o2.ScalarType.BYTES: {
          const a3 = (function(e4) {
            const n4 = [], a4 = { tail: e4, c: "", next() {
              return 0 != this.tail.length && (this.c = this.tail[0], this.tail = this.tail.substring(1), true);
            }, take(e5) {
              if (this.tail.length >= e5) {
                const n5 = this.tail.substring(0, e5);
                return this.tail = this.tail.substring(e5), n5;
              }
              return false;
            } };
            for (; a4.next(); ) if ("\\" === a4.c) {
              if (a4.next()) switch (a4.c) {
                case "\\":
                  n4.push(a4.c.charCodeAt(0));
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
                  const e5 = a4.c, t3 = a4.take(2);
                  if (false === t3) return false;
                  const s3 = parseInt(e5 + t3, 8);
                  if (isNaN(s3)) return false;
                  n4.push(s3);
                  break;
                }
                case "x": {
                  const e5 = a4.c, t3 = a4.take(2);
                  if (false === t3) return false;
                  const s3 = parseInt(e5 + t3, 16);
                  if (isNaN(s3)) return false;
                  n4.push(s3);
                  break;
                }
                case "u": {
                  const e5 = a4.c, t3 = a4.take(4);
                  if (false === t3) return false;
                  const s3 = parseInt(e5 + t3, 16);
                  if (isNaN(s3)) return false;
                  const o3 = new Uint8Array(4);
                  new DataView(o3.buffer).setInt32(0, s3, true), n4.push(o3[0], o3[1], o3[2], o3[3]);
                  break;
                }
                case "U": {
                  const e5 = a4.c, t3 = a4.take(8);
                  if (false === t3) return false;
                  const o3 = s2.protoInt64.uEnc(e5 + t3), r2 = new Uint8Array(8), i2 = new DataView(r2.buffer);
                  i2.setInt32(0, o3.lo, true), i2.setInt32(4, o3.hi, true), n4.push(r2[0], r2[1], r2[2], r2[3], r2[4], r2[5], r2[6], r2[7]);
                  break;
                }
              }
            } else n4.push(a4.c.charCodeAt(0));
            return new Uint8Array(n4);
          })(n3);
          if (false === a3) throw new Error(`cannot parse ${o2.ScalarType[e3]} default value: ${n3}`);
          return a3;
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
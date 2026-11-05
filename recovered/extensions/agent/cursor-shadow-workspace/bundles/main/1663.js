// @recovered-by cursor-re
// artifact: app/extensions/cursor-shadow-workspace/dist/extension.js sha256:19218949e5ecc64e4c1b41e194ba40abfd54a9aeb034a14f90c71485b7f84585
// module: 1663 range:174744..179289
// basis: webpack-id confidence: C
// method: split
// run: ext-agent 2026-11-05T10:20:08.356Z
1663: (e2, A2, t2) => {
    "use strict";
    Object.defineProperty(A2, "__esModule", { value: true }), A2.parseTextFormatScalarValue = A2.parseTextFormatEnumValue = void 0;
    const n2 = t2(3098), r2 = t2(1498), o2 = t2(3408);
    A2.parseTextFormatEnumValue = function(e3, A3) {
      const t3 = e3.values.find((e4) => e4.name === A3);
      return (0, n2.assert)(t3, `cannot parse ${e3.name} default value: ${A3}`), t3.number;
    }, A2.parseTextFormatScalarValue = function(e3, A3) {
      switch (e3) {
        case o2.ScalarType.STRING:
          return A3;
        case o2.ScalarType.BYTES: {
          const t3 = (function(e4) {
            const A4 = [], t4 = { tail: e4, c: "", next() {
              return 0 != this.tail.length && (this.c = this.tail[0], this.tail = this.tail.substring(1), true);
            }, take(e5) {
              if (this.tail.length >= e5) {
                const A5 = this.tail.substring(0, e5);
                return this.tail = this.tail.substring(e5), A5;
              }
              return false;
            } };
            for (; t4.next(); ) if ("\\" === t4.c) {
              if (t4.next()) switch (t4.c) {
                case "\\":
                  A4.push(t4.c.charCodeAt(0));
                  break;
                case "b":
                  A4.push(8);
                  break;
                case "f":
                  A4.push(12);
                  break;
                case "n":
                  A4.push(10);
                  break;
                case "r":
                  A4.push(13);
                  break;
                case "t":
                  A4.push(9);
                  break;
                case "v":
                  A4.push(11);
                  break;
                case "0":
                case "1":
                case "2":
                case "3":
                case "4":
                case "5":
                case "6":
                case "7": {
                  const e5 = t4.c, n3 = t4.take(2);
                  if (false === n3) return false;
                  const r3 = parseInt(e5 + n3, 8);
                  if (isNaN(r3)) return false;
                  A4.push(r3);
                  break;
                }
                case "x": {
                  const e5 = t4.c, n3 = t4.take(2);
                  if (false === n3) return false;
                  const r3 = parseInt(e5 + n3, 16);
                  if (isNaN(r3)) return false;
                  A4.push(r3);
                  break;
                }
                case "u": {
                  const e5 = t4.c, n3 = t4.take(4);
                  if (false === n3) return false;
                  const r3 = parseInt(e5 + n3, 16);
                  if (isNaN(r3)) return false;
                  const o3 = new Uint8Array(4);
                  new DataView(o3.buffer).setInt32(0, r3, true), A4.push(o3[0], o3[1], o3[2], o3[3]);
                  break;
                }
                case "U": {
                  const e5 = t4.c, n3 = t4.take(8);
                  if (false === n3) return false;
                  const o3 = r2.protoInt64.uEnc(e5 + n3), s = new Uint8Array(8), a = new DataView(s.buffer);
                  a.setInt32(0, o3.lo, true), a.setInt32(4, o3.hi, true), A4.push(s[0], s[1], s[2], s[3], s[4], s[5], s[6], s[7]);
                  break;
                }
              }
            } else A4.push(t4.c.charCodeAt(0));
            return new Uint8Array(A4);
          })(A3);
          if (false === t3) throw new Error(`cannot parse ${o2.ScalarType[e3]} default value: ${A3}`);
          return t3;
        }
        case o2.ScalarType.INT64:
        case o2.ScalarType.SFIXED64:
        case o2.ScalarType.SINT64:
          return r2.protoInt64.parse(A3);
        case o2.ScalarType.UINT64:
        case o2.ScalarType.FIXED64:
          return r2.protoInt64.uParse(A3);
        case o2.ScalarType.DOUBLE:
        case o2.ScalarType.FLOAT:
          switch (A3) {
            case "inf":
              return Number.POSITIVE_INFINITY;
            case "-inf":
              return Number.NEGATIVE_INFINITY;
            case "nan":
              return Number.NaN;
            default:
              return parseFloat(A3);
          }
        case o2.ScalarType.BOOL:
          return "true" === A3;
        case o2.ScalarType.INT32:
        case o2.ScalarType.UINT32:
        case o2.ScalarType.SINT32:
        case o2.ScalarType.FIXED32:
        case o2.ScalarType.SFIXED32:
          return parseInt(A3, 10);
      }
    };
  }
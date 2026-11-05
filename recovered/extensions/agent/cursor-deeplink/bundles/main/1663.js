// @recovered-by cursor-re
// artifact: app/extensions/cursor-deeplink/dist/main.js sha256:2b0091d260814e411af8319789fee5fe8b4b75d7c27c85b905f80c4d53d995f3
// module: 1663 range:181099..185644
// basis: webpack-id confidence: C
// method: split
// run: ext-agent 2026-11-05T10:20:08.356Z
1663: (e2, t2, A2) => {
    "use strict";
    Object.defineProperty(t2, "__esModule", { value: true }), t2.parseTextFormatScalarValue = t2.parseTextFormatEnumValue = void 0;
    const n2 = A2(3098), r2 = A2(1498), o2 = A2(3408);
    t2.parseTextFormatEnumValue = function(e3, t3) {
      const A3 = e3.values.find((e4) => e4.name === t3);
      return (0, n2.assert)(A3, `cannot parse ${e3.name} default value: ${t3}`), A3.number;
    }, t2.parseTextFormatScalarValue = function(e3, t3) {
      switch (e3) {
        case o2.ScalarType.STRING:
          return t3;
        case o2.ScalarType.BYTES: {
          const A3 = (function(e4) {
            const t4 = [], A4 = { tail: e4, c: "", next() {
              return 0 != this.tail.length && (this.c = this.tail[0], this.tail = this.tail.substring(1), true);
            }, take(e5) {
              if (this.tail.length >= e5) {
                const t5 = this.tail.substring(0, e5);
                return this.tail = this.tail.substring(e5), t5;
              }
              return false;
            } };
            for (; A4.next(); ) if ("\\" === A4.c) {
              if (A4.next()) switch (A4.c) {
                case "\\":
                  t4.push(A4.c.charCodeAt(0));
                  break;
                case "b":
                  t4.push(8);
                  break;
                case "f":
                  t4.push(12);
                  break;
                case "n":
                  t4.push(10);
                  break;
                case "r":
                  t4.push(13);
                  break;
                case "t":
                  t4.push(9);
                  break;
                case "v":
                  t4.push(11);
                  break;
                case "0":
                case "1":
                case "2":
                case "3":
                case "4":
                case "5":
                case "6":
                case "7": {
                  const e5 = A4.c, n3 = A4.take(2);
                  if (false === n3) return false;
                  const r3 = parseInt(e5 + n3, 8);
                  if (isNaN(r3)) return false;
                  t4.push(r3);
                  break;
                }
                case "x": {
                  const e5 = A4.c, n3 = A4.take(2);
                  if (false === n3) return false;
                  const r3 = parseInt(e5 + n3, 16);
                  if (isNaN(r3)) return false;
                  t4.push(r3);
                  break;
                }
                case "u": {
                  const e5 = A4.c, n3 = A4.take(4);
                  if (false === n3) return false;
                  const r3 = parseInt(e5 + n3, 16);
                  if (isNaN(r3)) return false;
                  const o3 = new Uint8Array(4);
                  new DataView(o3.buffer).setInt32(0, r3, true), t4.push(o3[0], o3[1], o3[2], o3[3]);
                  break;
                }
                case "U": {
                  const e5 = A4.c, n3 = A4.take(8);
                  if (false === n3) return false;
                  const o3 = r2.protoInt64.uEnc(e5 + n3), s = new Uint8Array(8), i = new DataView(s.buffer);
                  i.setInt32(0, o3.lo, true), i.setInt32(4, o3.hi, true), t4.push(s[0], s[1], s[2], s[3], s[4], s[5], s[6], s[7]);
                  break;
                }
              }
            } else t4.push(A4.c.charCodeAt(0));
            return new Uint8Array(t4);
          })(t3);
          if (false === A3) throw new Error(`cannot parse ${o2.ScalarType[e3]} default value: ${t3}`);
          return A3;
        }
        case o2.ScalarType.INT64:
        case o2.ScalarType.SFIXED64:
        case o2.ScalarType.SINT64:
          return r2.protoInt64.parse(t3);
        case o2.ScalarType.UINT64:
        case o2.ScalarType.FIXED64:
          return r2.protoInt64.uParse(t3);
        case o2.ScalarType.DOUBLE:
        case o2.ScalarType.FLOAT:
          switch (t3) {
            case "inf":
              return Number.POSITIVE_INFINITY;
            case "-inf":
              return Number.NEGATIVE_INFINITY;
            case "nan":
              return Number.NaN;
            default:
              return parseFloat(t3);
          }
        case o2.ScalarType.BOOL:
          return "true" === t3;
        case o2.ScalarType.INT32:
        case o2.ScalarType.UINT32:
        case o2.ScalarType.SINT32:
        case o2.ScalarType.FIXED32:
        case o2.ScalarType.SFIXED32:
          return parseInt(t3, 10);
      }
    };
  }
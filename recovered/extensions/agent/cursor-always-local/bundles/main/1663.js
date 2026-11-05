// @recovered-by cursor-re
// artifact: app/extensions/cursor-always-local/dist/main.js sha256:14fb2d0e360d81a024b4ec605f417e030e19b30b2df99bc45648aa227060534e
// module: 1663 range:584548..589103
// basis: webpack-id confidence: C
// method: split
// run: ext-agent 2026-11-05T10:20:08.356Z
1663: (t2, e2, r2) => {
    "use strict";
    Object.defineProperty(e2, "__esModule", { value: true }), e2.parseTextFormatScalarValue = e2.parseTextFormatEnumValue = void 0;
    const n2 = r2(3098), s2 = r2(1498), i2 = r2(3408);
    e2.parseTextFormatEnumValue = function(t3, e3) {
      const r3 = t3.values.find((t4) => t4.name === e3);
      return (0, n2.assert)(r3, `cannot parse ${t3.name} default value: ${e3}`), r3.number;
    }, e2.parseTextFormatScalarValue = function(t3, e3) {
      switch (t3) {
        case i2.ScalarType.STRING:
          return e3;
        case i2.ScalarType.BYTES: {
          const r3 = (function(t4) {
            const e4 = [], r4 = { tail: t4, c: "", next() {
              return 0 != this.tail.length && (this.c = this.tail[0], this.tail = this.tail.substring(1), true);
            }, take(t5) {
              if (this.tail.length >= t5) {
                const e5 = this.tail.substring(0, t5);
                return this.tail = this.tail.substring(t5), e5;
              }
              return false;
            } };
            for (; r4.next(); ) if ("\\" === r4.c) {
              if (r4.next()) switch (r4.c) {
                case "\\":
                  e4.push(r4.c.charCodeAt(0));
                  break;
                case "b":
                  e4.push(8);
                  break;
                case "f":
                  e4.push(12);
                  break;
                case "n":
                  e4.push(10);
                  break;
                case "r":
                  e4.push(13);
                  break;
                case "t":
                  e4.push(9);
                  break;
                case "v":
                  e4.push(11);
                  break;
                case "0":
                case "1":
                case "2":
                case "3":
                case "4":
                case "5":
                case "6":
                case "7": {
                  const t5 = r4.c, n3 = r4.take(2);
                  if (false === n3) return false;
                  const s3 = parseInt(t5 + n3, 8);
                  if (isNaN(s3)) return false;
                  e4.push(s3);
                  break;
                }
                case "x": {
                  const t5 = r4.c, n3 = r4.take(2);
                  if (false === n3) return false;
                  const s3 = parseInt(t5 + n3, 16);
                  if (isNaN(s3)) return false;
                  e4.push(s3);
                  break;
                }
                case "u": {
                  const t5 = r4.c, n3 = r4.take(4);
                  if (false === n3) return false;
                  const s3 = parseInt(t5 + n3, 16);
                  if (isNaN(s3)) return false;
                  const i3 = new Uint8Array(4);
                  new DataView(i3.buffer).setInt32(0, s3, true), e4.push(i3[0], i3[1], i3[2], i3[3]);
                  break;
                }
                case "U": {
                  const t5 = r4.c, n3 = r4.take(8);
                  if (false === n3) return false;
                  const i3 = s2.protoInt64.uEnc(t5 + n3), o2 = new Uint8Array(8), a = new DataView(o2.buffer);
                  a.setInt32(0, i3.lo, true), a.setInt32(4, i3.hi, true), e4.push(o2[0], o2[1], o2[2], o2[3], o2[4], o2[5], o2[6], o2[7]);
                  break;
                }
              }
            } else e4.push(r4.c.charCodeAt(0));
            return new Uint8Array(e4);
          })(e3);
          if (false === r3) throw new Error(`cannot parse ${i2.ScalarType[t3]} default value: ${e3}`);
          return r3;
        }
        case i2.ScalarType.INT64:
        case i2.ScalarType.SFIXED64:
        case i2.ScalarType.SINT64:
          return s2.protoInt64.parse(e3);
        case i2.ScalarType.UINT64:
        case i2.ScalarType.FIXED64:
          return s2.protoInt64.uParse(e3);
        case i2.ScalarType.DOUBLE:
        case i2.ScalarType.FLOAT:
          switch (e3) {
            case "inf":
              return Number.POSITIVE_INFINITY;
            case "-inf":
              return Number.NEGATIVE_INFINITY;
            case "nan":
              return Number.NaN;
            default:
              return parseFloat(e3);
          }
        case i2.ScalarType.BOOL:
          return "true" === e3;
        case i2.ScalarType.INT32:
        case i2.ScalarType.UINT32:
        case i2.ScalarType.SINT32:
        case i2.ScalarType.FIXED32:
        case i2.ScalarType.SFIXED32:
          return parseInt(e3, 10);
      }
    };
  }
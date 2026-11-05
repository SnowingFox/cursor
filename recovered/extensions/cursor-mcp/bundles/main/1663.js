// @recovered-by cursor-re
// artifact: app/extensions/cursor-mcp/dist/main.js sha256:097aeef3cf1f927e9bc6c0d23972c432bbcae8dc0ea353a5b6308dd59620fb49
// module: 1663 range:173448..178006
// basis: webpack-id confidence: C
// method: split
// run: ext-p0 2026-11-05T10:07:22.069Z
1663: (e2, t2, r2) => {
    "use strict";
    Object.defineProperty(t2, "__esModule", { value: true }), t2.parseTextFormatScalarValue = t2.parseTextFormatEnumValue = void 0;
    const n2 = r2(3098), o2 = r2(1498), s2 = r2(3408);
    t2.parseTextFormatEnumValue = function(e3, t3) {
      const r3 = e3.values.find((e4) => e4.name === t3);
      return (0, n2.assert)(r3, `cannot parse ${e3.name} default value: ${t3}`), r3.number;
    }, t2.parseTextFormatScalarValue = function(e3, t3) {
      switch (e3) {
        case s2.ScalarType.STRING:
          return t3;
        case s2.ScalarType.BYTES: {
          const r3 = (function(e4) {
            const t4 = [], r4 = { tail: e4, c: "", next() {
              return 0 != this.tail.length && (this.c = this.tail[0], this.tail = this.tail.substring(1), true);
            }, take(e5) {
              if (this.tail.length >= e5) {
                const t5 = this.tail.substring(0, e5);
                return this.tail = this.tail.substring(e5), t5;
              }
              return false;
            } };
            for (; r4.next(); ) if ("\\" === r4.c) {
              if (r4.next()) switch (r4.c) {
                case "\\":
                  t4.push(r4.c.charCodeAt(0));
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
                  const e5 = r4.c, n3 = r4.take(2);
                  if (false === n3) return false;
                  const o3 = parseInt(e5 + n3, 8);
                  if (isNaN(o3)) return false;
                  t4.push(o3);
                  break;
                }
                case "x": {
                  const e5 = r4.c, n3 = r4.take(2);
                  if (false === n3) return false;
                  const o3 = parseInt(e5 + n3, 16);
                  if (isNaN(o3)) return false;
                  t4.push(o3);
                  break;
                }
                case "u": {
                  const e5 = r4.c, n3 = r4.take(4);
                  if (false === n3) return false;
                  const o3 = parseInt(e5 + n3, 16);
                  if (isNaN(o3)) return false;
                  const s3 = new Uint8Array(4);
                  new DataView(s3.buffer).setInt32(0, o3, true), t4.push(s3[0], s3[1], s3[2], s3[3]);
                  break;
                }
                case "U": {
                  const e5 = r4.c, n3 = r4.take(8);
                  if (false === n3) return false;
                  const s3 = o2.protoInt64.uEnc(e5 + n3), i2 = new Uint8Array(8), a2 = new DataView(i2.buffer);
                  a2.setInt32(0, s3.lo, true), a2.setInt32(4, s3.hi, true), t4.push(i2[0], i2[1], i2[2], i2[3], i2[4], i2[5], i2[6], i2[7]);
                  break;
                }
              }
            } else t4.push(r4.c.charCodeAt(0));
            return new Uint8Array(t4);
          })(t3);
          if (false === r3) throw new Error(`cannot parse ${s2.ScalarType[e3]} default value: ${t3}`);
          return r3;
        }
        case s2.ScalarType.INT64:
        case s2.ScalarType.SFIXED64:
        case s2.ScalarType.SINT64:
          return o2.protoInt64.parse(t3);
        case s2.ScalarType.UINT64:
        case s2.ScalarType.FIXED64:
          return o2.protoInt64.uParse(t3);
        case s2.ScalarType.DOUBLE:
        case s2.ScalarType.FLOAT:
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
        case s2.ScalarType.BOOL:
          return "true" === t3;
        case s2.ScalarType.INT32:
        case s2.ScalarType.UINT32:
        case s2.ScalarType.SINT32:
        case s2.ScalarType.FIXED32:
        case s2.ScalarType.SFIXED32:
          return parseInt(t3, 10);
      }
    };
  }
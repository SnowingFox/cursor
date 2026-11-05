// @recovered-by cursor-re
// artifact: app/extensions/cursor-resolver/dist/main.js sha256:677b774c75dfff0de56084737d26169857daed3731cb62a6702840900f439aed
// module: 663 range:168249..172784
// basis: webpack-id confidence: C
// method: split
// run: ext-p0 2026-11-05T10:07:22.069Z
663: (e2, t2, n2) => {
    Object.defineProperty(t2, "__esModule", { value: true }), t2.parseTextFormatScalarValue = t2.parseTextFormatEnumValue = void 0;
    const r2 = n2(98), o2 = n2(498), a2 = n2(408);
    t2.parseTextFormatEnumValue = function(e3, t3) {
      const n3 = e3.values.find((e4) => e4.name === t3);
      return (0, r2.assert)(n3, `cannot parse ${e3.name} default value: ${t3}`), n3.number;
    }, t2.parseTextFormatScalarValue = function(e3, t3) {
      switch (e3) {
        case a2.ScalarType.STRING:
          return t3;
        case a2.ScalarType.BYTES: {
          const n3 = (function(e4) {
            const t4 = [], n4 = { tail: e4, c: "", next() {
              return 0 != this.tail.length && (this.c = this.tail[0], this.tail = this.tail.substring(1), true);
            }, take(e5) {
              if (this.tail.length >= e5) {
                const t5 = this.tail.substring(0, e5);
                return this.tail = this.tail.substring(e5), t5;
              }
              return false;
            } };
            for (; n4.next(); ) if ("\\" === n4.c) {
              if (n4.next()) switch (n4.c) {
                case "\\":
                  t4.push(n4.c.charCodeAt(0));
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
                  const e5 = n4.c, r3 = n4.take(2);
                  if (false === r3) return false;
                  const o3 = parseInt(e5 + r3, 8);
                  if (isNaN(o3)) return false;
                  t4.push(o3);
                  break;
                }
                case "x": {
                  const e5 = n4.c, r3 = n4.take(2);
                  if (false === r3) return false;
                  const o3 = parseInt(e5 + r3, 16);
                  if (isNaN(o3)) return false;
                  t4.push(o3);
                  break;
                }
                case "u": {
                  const e5 = n4.c, r3 = n4.take(4);
                  if (false === r3) return false;
                  const o3 = parseInt(e5 + r3, 16);
                  if (isNaN(o3)) return false;
                  const a3 = new Uint8Array(4);
                  new DataView(a3.buffer).setInt32(0, o3, true), t4.push(a3[0], a3[1], a3[2], a3[3]);
                  break;
                }
                case "U": {
                  const e5 = n4.c, r3 = n4.take(8);
                  if (false === r3) return false;
                  const a3 = o2.protoInt64.uEnc(e5 + r3), s2 = new Uint8Array(8), i2 = new DataView(s2.buffer);
                  i2.setInt32(0, a3.lo, true), i2.setInt32(4, a3.hi, true), t4.push(s2[0], s2[1], s2[2], s2[3], s2[4], s2[5], s2[6], s2[7]);
                  break;
                }
              }
            } else t4.push(n4.c.charCodeAt(0));
            return new Uint8Array(t4);
          })(t3);
          if (false === n3) throw new Error(`cannot parse ${a2.ScalarType[e3]} default value: ${t3}`);
          return n3;
        }
        case a2.ScalarType.INT64:
        case a2.ScalarType.SFIXED64:
        case a2.ScalarType.SINT64:
          return o2.protoInt64.parse(t3);
        case a2.ScalarType.UINT64:
        case a2.ScalarType.FIXED64:
          return o2.protoInt64.uParse(t3);
        case a2.ScalarType.DOUBLE:
        case a2.ScalarType.FLOAT:
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
        case a2.ScalarType.BOOL:
          return "true" === t3;
        case a2.ScalarType.INT32:
        case a2.ScalarType.UINT32:
        case a2.ScalarType.SINT32:
        case a2.ScalarType.FIXED32:
        case a2.ScalarType.SFIXED32:
          return parseInt(t3, 10);
      }
    };
  }
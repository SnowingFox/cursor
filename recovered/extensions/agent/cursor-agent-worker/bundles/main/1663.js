// @recovered-by cursor-re
// artifact: app/extensions/cursor-agent-worker/dist/main.js sha256:d5af94b4e40f694b81a675a0fb00fa8d060306ca064a011e953218d005b613d5
// module: 1663 range:82696..87385
// basis: webpack-id confidence: C
// method: split
// run: ext-agent 2026-11-05T10:20:08.356Z
1663: (e10, a10, n10) => {
    Object.defineProperty(a10, "__esModule", { value: true }), a10.parseTextFormatScalarValue = a10.parseTextFormatEnumValue = void 0;
    const s10 = n10(3098), o10 = n10(1498), r10 = n10(3408);
    a10.parseTextFormatEnumValue = function(e11, a11) {
      const n11 = e11.values.find((e12) => e12.name === a11);
      return (0, s10.assert)(n11, `cannot parse ${e11.name} default value: ${a11}`), n11.number;
    }, a10.parseTextFormatScalarValue = function(e11, a11) {
      switch (e11) {
        case r10.ScalarType.STRING:
          return a11;
        case r10.ScalarType.BYTES: {
          const n11 = (function(e12) {
            const a12 = [], n12 = { tail: e12, c: "", next() {
              return 0 != this.tail.length && (this.c = this.tail[0], this.tail = this.tail.substring(1), true);
            }, take(e13) {
              if (this.tail.length >= e13) {
                const a13 = this.tail.substring(0, e13);
                return this.tail = this.tail.substring(e13), a13;
              }
              return false;
            } };
            for (; n12.next(); ) if ("\\" === n12.c) {
              if (n12.next()) switch (n12.c) {
                case "\\":
                  a12.push(n12.c.charCodeAt(0));
                  break;
                case "b":
                  a12.push(8);
                  break;
                case "f":
                  a12.push(12);
                  break;
                case "n":
                  a12.push(10);
                  break;
                case "r":
                  a12.push(13);
                  break;
                case "t":
                  a12.push(9);
                  break;
                case "v":
                  a12.push(11);
                  break;
                case "0":
                case "1":
                case "2":
                case "3":
                case "4":
                case "5":
                case "6":
                case "7": {
                  const e13 = n12.c, s11 = n12.take(2);
                  if (false === s11) return false;
                  const o11 = parseInt(e13 + s11, 8);
                  if (isNaN(o11)) return false;
                  a12.push(o11);
                  break;
                }
                case "x": {
                  const e13 = n12.c, s11 = n12.take(2);
                  if (false === s11) return false;
                  const o11 = parseInt(e13 + s11, 16);
                  if (isNaN(o11)) return false;
                  a12.push(o11);
                  break;
                }
                case "u": {
                  const e13 = n12.c, s11 = n12.take(4);
                  if (false === s11) return false;
                  const o11 = parseInt(e13 + s11, 16);
                  if (isNaN(o11)) return false;
                  const r11 = new Uint8Array(4);
                  new DataView(r11.buffer).setInt32(0, o11, true), a12.push(r11[0], r11[1], r11[2], r11[3]);
                  break;
                }
                case "U": {
                  const e13 = n12.c, s11 = n12.take(8);
                  if (false === s11) return false;
                  const r11 = o10.protoInt64.uEnc(e13 + s11), t10 = new Uint8Array(8), i10 = new DataView(t10.buffer);
                  i10.setInt32(0, r11.lo, true), i10.setInt32(4, r11.hi, true), a12.push(t10[0], t10[1], t10[2], t10[3], t10[4], t10[5], t10[6], t10[7]);
                  break;
                }
              }
            } else a12.push(n12.c.charCodeAt(0));
            return new Uint8Array(a12);
          })(a11);
          if (false === n11) throw new Error(`cannot parse ${r10.ScalarType[e11]} default value: ${a11}`);
          return n11;
        }
        case r10.ScalarType.INT64:
        case r10.ScalarType.SFIXED64:
        case r10.ScalarType.SINT64:
          return o10.protoInt64.parse(a11);
        case r10.ScalarType.UINT64:
        case r10.ScalarType.FIXED64:
          return o10.protoInt64.uParse(a11);
        case r10.ScalarType.DOUBLE:
        case r10.ScalarType.FLOAT:
          switch (a11) {
            case "inf":
              return Number.POSITIVE_INFINITY;
            case "-inf":
              return Number.NEGATIVE_INFINITY;
            case "nan":
              return Number.NaN;
            default:
              return parseFloat(a11);
          }
        case r10.ScalarType.BOOL:
          return "true" === a11;
        case r10.ScalarType.INT32:
        case r10.ScalarType.UINT32:
        case r10.ScalarType.SINT32:
        case r10.ScalarType.FIXED32:
        case r10.ScalarType.SFIXED32:
          return parseInt(a11, 10);
      }
    };
  }
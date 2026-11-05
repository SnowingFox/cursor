// @recovered-by cursor-re
// artifact: app/extensions/cursor-agent-exec/dist/main.js sha256:8d20326bd54948353115113c2d4716cf781d593610fd4d8acebcc37a3170da8e
// module: 31663 range:2899045..2903559
// basis: webpack-id confidence: C
// method: split
// run: ext-p0 2026-11-05T10:07:22.069Z
31663: (e, t, r) => {
    "use strict";
    Object.defineProperty(t, "__esModule", { value: true }), t.parseTextFormatScalarValue = t.parseTextFormatEnumValue = void 0;
    const n = r(43098), s = r(11498), o = r(3408);
    t.parseTextFormatEnumValue = function(e2, t2) {
      const r2 = e2.values.find((e3) => e3.name === t2);
      return (0, n.assert)(r2, `cannot parse ${e2.name} default value: ${t2}`), r2.number;
    }, t.parseTextFormatScalarValue = function(e2, t2) {
      switch (e2) {
        case o.ScalarType.STRING:
          return t2;
        case o.ScalarType.BYTES: {
          const r2 = (function(e3) {
            const t3 = [], r3 = { tail: e3, c: "", next() {
              return 0 != this.tail.length && (this.c = this.tail[0], this.tail = this.tail.substring(1), true);
            }, take(e4) {
              if (this.tail.length >= e4) {
                const t4 = this.tail.substring(0, e4);
                return this.tail = this.tail.substring(e4), t4;
              }
              return false;
            } };
            for (; r3.next(); ) if ("\\" === r3.c) {
              if (r3.next()) switch (r3.c) {
                case "\\":
                  t3.push(r3.c.charCodeAt(0));
                  break;
                case "b":
                  t3.push(8);
                  break;
                case "f":
                  t3.push(12);
                  break;
                case "n":
                  t3.push(10);
                  break;
                case "r":
                  t3.push(13);
                  break;
                case "t":
                  t3.push(9);
                  break;
                case "v":
                  t3.push(11);
                  break;
                case "0":
                case "1":
                case "2":
                case "3":
                case "4":
                case "5":
                case "6":
                case "7": {
                  const e4 = r3.c, n2 = r3.take(2);
                  if (false === n2) return false;
                  const s2 = parseInt(e4 + n2, 8);
                  if (isNaN(s2)) return false;
                  t3.push(s2);
                  break;
                }
                case "x": {
                  const e4 = r3.c, n2 = r3.take(2);
                  if (false === n2) return false;
                  const s2 = parseInt(e4 + n2, 16);
                  if (isNaN(s2)) return false;
                  t3.push(s2);
                  break;
                }
                case "u": {
                  const e4 = r3.c, n2 = r3.take(4);
                  if (false === n2) return false;
                  const s2 = parseInt(e4 + n2, 16);
                  if (isNaN(s2)) return false;
                  const o2 = new Uint8Array(4);
                  new DataView(o2.buffer).setInt32(0, s2, true), t3.push(o2[0], o2[1], o2[2], o2[3]);
                  break;
                }
                case "U": {
                  const e4 = r3.c, n2 = r3.take(8);
                  if (false === n2) return false;
                  const o2 = s.protoInt64.uEnc(e4 + n2), i = new Uint8Array(8), a = new DataView(i.buffer);
                  a.setInt32(0, o2.lo, true), a.setInt32(4, o2.hi, true), t3.push(i[0], i[1], i[2], i[3], i[4], i[5], i[6], i[7]);
                  break;
                }
              }
            } else t3.push(r3.c.charCodeAt(0));
            return new Uint8Array(t3);
          })(t2);
          if (false === r2) throw new Error(`cannot parse ${o.ScalarType[e2]} default value: ${t2}`);
          return r2;
        }
        case o.ScalarType.INT64:
        case o.ScalarType.SFIXED64:
        case o.ScalarType.SINT64:
          return s.protoInt64.parse(t2);
        case o.ScalarType.UINT64:
        case o.ScalarType.FIXED64:
          return s.protoInt64.uParse(t2);
        case o.ScalarType.DOUBLE:
        case o.ScalarType.FLOAT:
          switch (t2) {
            case "inf":
              return Number.POSITIVE_INFINITY;
            case "-inf":
              return Number.NEGATIVE_INFINITY;
            case "nan":
              return Number.NaN;
            default:
              return parseFloat(t2);
          }
        case o.ScalarType.BOOL:
          return "true" === t2;
        case o.ScalarType.INT32:
        case o.ScalarType.UINT32:
        case o.ScalarType.SINT32:
        case o.ScalarType.FIXED32:
        case o.ScalarType.SFIXED32:
          return parseInt(t2, 10);
      }
    };
  }
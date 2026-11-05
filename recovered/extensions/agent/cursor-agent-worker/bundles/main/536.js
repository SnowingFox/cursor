// @recovered-by cursor-re
// artifact: app/extensions/cursor-agent-worker/dist/main.js sha256:d5af94b4e40f694b81a675a0fb00fa8d060306ca064a011e953218d005b613d5
// module: 536 range:6704..21321
// basis: webpack-id confidence: C
// method: split
// run: ext-agent 2026-11-05T10:20:08.356Z
536: (e10, a10, n10) => {
    Object.defineProperty(a10, "__esModule", { value: true }), a10.makeJsonFormat = void 0;
    const s10 = n10(3098), o10 = n10(1498), r10 = n10(9526), t10 = n10(1802), i10 = n10(1771), m10 = n10(8803), l10 = n10(2212), d10 = n10(1455), c10 = n10(1455), T10 = n10(3408), p10 = n10(2706), _10 = { ignoreUnknownFields: false }, k10 = { emitDefaultValues: false, enumAsInteger: false, useProtoFieldName: false, prettySpaces: 0 };
    function u10(e11) {
      return e11 ? Object.assign(Object.assign({}, _10), e11) : _10;
    }
    function g10(e11) {
      return e11 ? Object.assign(Object.assign({}, k10), e11) : k10;
    }
    const E10 = /* @__PURE__ */ Symbol(), v10 = /* @__PURE__ */ Symbol();
    function y10(e11) {
      if (null === e11) return "null";
      switch (typeof e11) {
        case "object":
          return Array.isArray(e11) ? "array" : "object";
        case "string":
          return e11.length > 100 ? "string" : `"${e11.split('"').join('\\"')}"`;
        default:
          return String(e11);
      }
    }
    function S10(e11, a11, n11, o11, r11) {
      let t11 = n11.localName;
      if (n11.repeated) {
        if ((0, s10.assert)("map" != n11.kind), null === a11) return;
        if (!Array.isArray(a11)) throw new Error(`cannot decode field ${r11.typeName}.${n11.name} from JSON: ${y10(a11)}`);
        const i11 = e11[t11];
        for (const e12 of a11) {
          if (null === e12) throw new Error(`cannot decode field ${r11.typeName}.${n11.name} from JSON: ${y10(e12)}`);
          switch (n11.kind) {
            case "message":
              i11.push(n11.T.fromJson(e12, o11));
              break;
            case "enum":
              const a12 = f10(n11.T, e12, o11.ignoreUnknownFields, true);
              a12 !== v10 && i11.push(a12);
              break;
            case "scalar":
              try {
                i11.push(I10(n11.T, e12, n11.L, true));
              } catch (a13) {
                let s11 = `cannot decode field ${r11.typeName}.${n11.name} from JSON: ${y10(e12)}`;
                throw a13 instanceof Error && a13.message.length > 0 && (s11 += `: ${a13.message}`), new Error(s11);
              }
          }
        }
      } else if ("map" == n11.kind) {
        if (null === a11) return;
        if ("object" != typeof a11 || Array.isArray(a11)) throw new Error(`cannot decode field ${r11.typeName}.${n11.name} from JSON: ${y10(a11)}`);
        const s11 = e11[t11];
        for (const [e12, t12] of Object.entries(a11)) {
          if (null === t12) throw new Error(`cannot decode field ${r11.typeName}.${n11.name} from JSON: map value null`);
          let i11;
          try {
            i11 = R10(n11.K, e12);
          } catch (e13) {
            let s12 = `cannot decode map key for field ${r11.typeName}.${n11.name} from JSON: ${y10(a11)}`;
            throw e13 instanceof Error && e13.message.length > 0 && (s12 += `: ${e13.message}`), new Error(s12);
          }
          switch (n11.V.kind) {
            case "message":
              s11[i11] = n11.V.T.fromJson(t12, o11);
              break;
            case "enum":
              const e13 = f10(n11.V.T, t12, o11.ignoreUnknownFields, true);
              e13 !== v10 && (s11[i11] = e13);
              break;
            case "scalar":
              try {
                s11[i11] = I10(n11.V.T, t12, T10.LongType.BIGINT, true);
              } catch (e14) {
                let s12 = `cannot decode map value for field ${r11.typeName}.${n11.name} from JSON: ${y10(a11)}`;
                throw e14 instanceof Error && e14.message.length > 0 && (s12 += `: ${e14.message}`), new Error(s12);
              }
          }
        }
      } else switch (n11.oneof && (e11 = e11[n11.oneof.localName] = { case: t11 }, t11 = "value"), n11.kind) {
        case "message":
          const s11 = n11.T;
          if (null === a11 && "google.protobuf.Value" != s11.typeName) return;
          let i11 = e11[t11];
          (0, p10.isMessage)(i11) ? i11.fromJson(a11, o11) : (e11[t11] = i11 = s11.fromJson(a11, o11), s11.fieldWrapper && !n11.oneof && (e11[t11] = s11.fieldWrapper.unwrapField(i11)));
          break;
        case "enum":
          const l11 = f10(n11.T, a11, o11.ignoreUnknownFields, false);
          switch (l11) {
            case E10:
              (0, m10.clearField)(n11, e11);
              break;
            case v10:
              break;
            default:
              e11[t11] = l11;
          }
          break;
        case "scalar":
          try {
            const s12 = I10(n11.T, a11, n11.L, false);
            if (s12 === E10) (0, m10.clearField)(n11, e11);
            else e11[t11] = s12;
          } catch (e12) {
            let s12 = `cannot decode field ${r11.typeName}.${n11.name} from JSON: ${y10(a11)}`;
            throw e12 instanceof Error && e12.message.length > 0 && (s12 += `: ${e12.message}`), new Error(s12);
          }
      }
    }
    function R10(e11, a11) {
      if (e11 === T10.ScalarType.BOOL) switch (a11) {
        case "true":
          a11 = true;
          break;
        case "false":
          a11 = false;
      }
      return I10(e11, a11, T10.LongType.BIGINT, true).toString();
    }
    function I10(e11, a11, n11, t11) {
      if (null === a11) return t11 ? (0, d10.scalarZeroValue)(e11, n11) : E10;
      switch (e11) {
        case T10.ScalarType.DOUBLE:
        case T10.ScalarType.FLOAT:
          if ("NaN" === a11) return Number.NaN;
          if ("Infinity" === a11) return Number.POSITIVE_INFINITY;
          if ("-Infinity" === a11) return Number.NEGATIVE_INFINITY;
          if ("" === a11) break;
          if ("string" == typeof a11 && a11.trim().length !== a11.length) break;
          if ("string" != typeof a11 && "number" != typeof a11) break;
          const t12 = Number(a11);
          if (Number.isNaN(t12)) break;
          if (!Number.isFinite(t12)) break;
          return e11 == T10.ScalarType.FLOAT && (0, s10.assertFloat32)(t12), t12;
        case T10.ScalarType.INT32:
        case T10.ScalarType.FIXED32:
        case T10.ScalarType.SFIXED32:
        case T10.ScalarType.SINT32:
        case T10.ScalarType.UINT32:
          let i11;
          if ("number" == typeof a11 ? i11 = a11 : "string" == typeof a11 && a11.length > 0 && a11.trim().length === a11.length && (i11 = Number(a11)), void 0 === i11) break;
          return e11 == T10.ScalarType.UINT32 || e11 == T10.ScalarType.FIXED32 ? (0, s10.assertUInt32)(i11) : (0, s10.assertInt32)(i11), i11;
        case T10.ScalarType.INT64:
        case T10.ScalarType.SFIXED64:
        case T10.ScalarType.SINT64:
          if ("number" != typeof a11 && "string" != typeof a11) break;
          const m11 = o10.protoInt64.parse(a11);
          return n11 ? m11.toString() : m11;
        case T10.ScalarType.FIXED64:
        case T10.ScalarType.UINT64:
          if ("number" != typeof a11 && "string" != typeof a11) break;
          const l11 = o10.protoInt64.uParse(a11);
          return n11 ? l11.toString() : l11;
        case T10.ScalarType.BOOL:
          if ("boolean" != typeof a11) break;
          return a11;
        case T10.ScalarType.STRING:
          if ("string" != typeof a11) break;
          try {
            encodeURIComponent(a11);
          } catch (e12) {
            throw new Error("invalid UTF8");
          }
          return a11;
        case T10.ScalarType.BYTES:
          if ("" === a11) return new Uint8Array(0);
          if ("string" != typeof a11) break;
          return r10.protoBase64.dec(a11);
      }
      throw new Error();
    }
    function f10(e11, a11, n11, s11) {
      if (null === a11) return "google.protobuf.NullValue" == e11.typeName ? 0 : s11 ? e11.values[0].no : E10;
      switch (typeof a11) {
        case "number":
          if (Number.isInteger(a11)) return a11;
          break;
        case "string":
          const s12 = e11.findName(a11);
          if (void 0 !== s12) return s12.no;
          if (n11) return v10;
      }
      throw new Error(`cannot decode enum ${e11.typeName} from JSON: ${y10(a11)}`);
    }
    function N10(e11) {
      return !(!e11.repeated && "map" != e11.kind) || !e11.oneof && ("message" != e11.kind && (!e11.opt && !e11.req));
    }
    function O10(e11, a11, n11) {
      if ("map" == e11.kind) {
        (0, s10.assert)("object" == typeof a11 && null != a11);
        const o11 = {}, r11 = Object.entries(a11);
        switch (e11.V.kind) {
          case "scalar":
            for (const [a13, n12] of r11) o11[a13.toString()] = A10(e11.V.T, n12);
            break;
          case "message":
            for (const [e12, a13] of r11) o11[e12.toString()] = a13.toJson(n11);
            break;
          case "enum":
            const a12 = e11.V.T;
            for (const [e12, s11] of r11) o11[e12.toString()] = h10(a12, s11, n11.enumAsInteger);
        }
        return n11.emitDefaultValues || r11.length > 0 ? o11 : void 0;
      }
      if (e11.repeated) {
        (0, s10.assert)(Array.isArray(a11));
        const o11 = [];
        switch (e11.kind) {
          case "scalar":
            for (let n12 = 0; n12 < a11.length; n12++) o11.push(A10(e11.T, a11[n12]));
            break;
          case "enum":
            for (let s11 = 0; s11 < a11.length; s11++) o11.push(h10(e11.T, a11[s11], n11.enumAsInteger));
            break;
          case "message":
            for (let e12 = 0; e12 < a11.length; e12++) o11.push(a11[e12].toJson(n11));
        }
        return n11.emitDefaultValues || o11.length > 0 ? o11 : void 0;
      }
      switch (e11.kind) {
        case "scalar":
          return A10(e11.T, a11);
        case "enum":
          return h10(e11.T, a11, n11.enumAsInteger);
        case "message":
          return (0, l10.wrapField)(e11.T, a11).toJson(n11);
      }
    }
    function h10(e11, a11, n11) {
      var o11;
      if ((0, s10.assert)("number" == typeof a11), "google.protobuf.NullValue" == e11.typeName) return null;
      if (n11) return a11;
      const r11 = e11.findNumber(a11);
      return null !== (o11 = null == r11 ? void 0 : r11.name) && void 0 !== o11 ? o11 : a11;
    }
    function A10(e11, a11) {
      switch (e11) {
        case T10.ScalarType.INT32:
        case T10.ScalarType.SFIXED32:
        case T10.ScalarType.SINT32:
        case T10.ScalarType.FIXED32:
        case T10.ScalarType.UINT32:
          return (0, s10.assert)("number" == typeof a11), a11;
        case T10.ScalarType.FLOAT:
        case T10.ScalarType.DOUBLE:
          return (0, s10.assert)("number" == typeof a11), Number.isNaN(a11) ? "NaN" : a11 === Number.POSITIVE_INFINITY ? "Infinity" : a11 === Number.NEGATIVE_INFINITY ? "-Infinity" : a11;
        case T10.ScalarType.STRING:
          return (0, s10.assert)("string" == typeof a11), a11;
        case T10.ScalarType.BOOL:
          return (0, s10.assert)("boolean" == typeof a11), a11;
        case T10.ScalarType.UINT64:
        case T10.ScalarType.FIXED64:
        case T10.ScalarType.INT64:
        case T10.ScalarType.SFIXED64:
        case T10.ScalarType.SINT64:
          return (0, s10.assert)("bigint" == typeof a11 || "string" == typeof a11 || "number" == typeof a11), a11.toString();
        case T10.ScalarType.BYTES:
          return (0, s10.assert)(a11 instanceof Uint8Array), r10.protoBase64.enc(a11);
      }
    }
    a10.makeJsonFormat = function() {
      return { makeReadOptions: u10, makeWriteOptions: g10, readMessage(e11, a11, n11, s11) {
        if (null == a11 || Array.isArray(a11) || "object" != typeof a11) throw new Error(`cannot decode message ${e11.typeName} from JSON: ${y10(a11)}`);
        s11 = null != s11 ? s11 : new e11();
        const o11 = /* @__PURE__ */ new Map(), r11 = n11.typeRegistry;
        for (const [m11, l11] of Object.entries(a11)) {
          const a12 = e11.fields.findJsonName(m11);
          if (a12) {
            if (a12.oneof) {
              if (null === l11 && "scalar" == a12.kind) continue;
              const n12 = o11.get(a12.oneof);
              if (void 0 !== n12) throw new Error(`cannot decode message ${e11.typeName} from JSON: multiple keys for oneof "${a12.oneof.name}" present: "${n12}", "${m11}"`);
              o11.set(a12.oneof, m11);
            }
            S10(s11, l11, a12, n11, e11);
          } else {
            let a13 = false;
            if ((null == r11 ? void 0 : r11.findExtension) && m11.startsWith("[") && m11.endsWith("]")) {
              const o12 = r11.findExtension(m11.substring(1, m11.length - 1));
              if (o12 && o12.extendee.typeName == e11.typeName) {
                a13 = true;
                const [e12, r12] = (0, t10.createExtensionContainer)(o12);
                S10(e12, l11, o12.field, n11, o12), (0, i10.setExtension)(s11, o12, r12(), n11);
              }
            }
            if (!a13 && !n11.ignoreUnknownFields) throw new Error(`cannot decode message ${e11.typeName} from JSON: key "${m11}" is unknown`);
          }
        }
        return s11;
      }, writeMessage(e11, a11) {
        const n11 = e11.getType(), s11 = {};
        let o11;
        try {
          for (o11 of n11.fields.byNumber()) {
            if (!(0, m10.isFieldSet)(o11, e11)) {
              if (o11.req) throw "required field not set";
              if (!a11.emitDefaultValues) continue;
              if (!N10(o11)) continue;
            }
            const n12 = O10(o11, o11.oneof ? e11[o11.oneof.localName].value : e11[o11.localName], a11);
            void 0 !== n12 && (s11[a11.useProtoFieldName ? o11.name : o11.jsonName] = n12);
          }
          const r11 = a11.typeRegistry;
          if (null == r11 ? void 0 : r11.findExtensionFor) for (const o12 of n11.runtime.bin.listUnknownFields(e11)) {
            const t11 = r11.findExtensionFor(n11.typeName, o12.no);
            if (t11 && (0, i10.hasExtension)(e11, t11)) {
              const n12 = (0, i10.getExtension)(e11, t11, a11), o13 = O10(t11.field, n12, a11);
              void 0 !== o13 && (s11[t11.field.jsonName] = o13);
            }
          }
        } catch (e12) {
          const a12 = o11 ? `cannot encode field ${n11.typeName}.${o11.name} to JSON` : `cannot encode message ${n11.typeName} to JSON`, s12 = e12 instanceof Error ? e12.message : String(e12);
          throw new Error(a12 + (s12.length > 0 ? `: ${s12}` : ""));
        }
        return s11;
      }, readScalar: (e11, a11, n11) => I10(e11, a11, null != n11 ? n11 : T10.LongType.BIGINT, true), writeScalar(e11, a11, n11) {
        if (void 0 !== a11) return n11 || (0, c10.isScalarZeroValue)(e11, a11) ? A10(e11, a11) : void 0;
      }, debug: y10 };
    };
  }
// @recovered-by cursor-re
// artifact: app/extensions/cursor-resolver-helper/dist/main.js sha256:0eb6078f0829c93d9374e39385fef22eabf7657a05c3cdf5bf316d9dbcf5ad0e
// module: 536 range:138154..152058
// basis: webpack-id confidence: C
// method: split
// run: ext-agent 2026-11-05T10:20:08.356Z
536: (e2, a2, n2) => {
    Object.defineProperty(a2, "__esModule", { value: true }), a2.makeJsonFormat = void 0;
    const o2 = n2(98), s2 = n2(498), t2 = n2(526), r2 = n2(802), i2 = n2(771), m2 = n2(803), l2 = n2(212), d2 = n2(455), c2 = n2(455), T2 = n2(408), _2 = n2(706), p2 = { ignoreUnknownFields: false }, u2 = { emitDefaultValues: false, enumAsInteger: false, useProtoFieldName: false, prettySpaces: 0 };
    function k2(e3) {
      return e3 ? Object.assign(Object.assign({}, p2), e3) : p2;
    }
    function g2(e3) {
      return e3 ? Object.assign(Object.assign({}, u2), e3) : u2;
    }
    const E2 = /* @__PURE__ */ Symbol(), f2 = /* @__PURE__ */ Symbol();
    function N2(e3) {
      if (null === e3) return "null";
      switch (typeof e3) {
        case "object":
          return Array.isArray(e3) ? "array" : "object";
        case "string":
          return e3.length > 100 ? "string" : `"${e3.split('"').join('\\"')}"`;
        default:
          return String(e3);
      }
    }
    function v2(e3, a3, n3, s3, t3) {
      let r3 = n3.localName;
      if (n3.repeated) {
        if ((0, o2.assert)("map" != n3.kind), null === a3) return;
        if (!Array.isArray(a3)) throw new Error(`cannot decode field ${t3.typeName}.${n3.name} from JSON: ${N2(a3)}`);
        const i3 = e3[r3];
        for (const e4 of a3) {
          if (null === e4) throw new Error(`cannot decode field ${t3.typeName}.${n3.name} from JSON: ${N2(e4)}`);
          switch (n3.kind) {
            case "message":
              i3.push(n3.T.fromJson(e4, s3));
              break;
            case "enum":
              const a4 = R2(n3.T, e4, s3.ignoreUnknownFields, true);
              a4 !== f2 && i3.push(a4);
              break;
            case "scalar":
              try {
                i3.push(S2(n3.T, e4, n3.L, true));
              } catch (a5) {
                let o3 = `cannot decode field ${t3.typeName}.${n3.name} from JSON: ${N2(e4)}`;
                throw a5 instanceof Error && a5.message.length > 0 && (o3 += `: ${a5.message}`), new Error(o3);
              }
          }
        }
      } else if ("map" == n3.kind) {
        if (null === a3) return;
        if ("object" != typeof a3 || Array.isArray(a3)) throw new Error(`cannot decode field ${t3.typeName}.${n3.name} from JSON: ${N2(a3)}`);
        const o3 = e3[r3];
        for (const [e4, r4] of Object.entries(a3)) {
          if (null === r4) throw new Error(`cannot decode field ${t3.typeName}.${n3.name} from JSON: map value null`);
          let i3;
          try {
            i3 = y2(n3.K, e4);
          } catch (e5) {
            let o4 = `cannot decode map key for field ${t3.typeName}.${n3.name} from JSON: ${N2(a3)}`;
            throw e5 instanceof Error && e5.message.length > 0 && (o4 += `: ${e5.message}`), new Error(o4);
          }
          switch (n3.V.kind) {
            case "message":
              o3[i3] = n3.V.T.fromJson(r4, s3);
              break;
            case "enum":
              const e5 = R2(n3.V.T, r4, s3.ignoreUnknownFields, true);
              e5 !== f2 && (o3[i3] = e5);
              break;
            case "scalar":
              try {
                o3[i3] = S2(n3.V.T, r4, T2.LongType.BIGINT, true);
              } catch (e6) {
                let o4 = `cannot decode map value for field ${t3.typeName}.${n3.name} from JSON: ${N2(a3)}`;
                throw e6 instanceof Error && e6.message.length > 0 && (o4 += `: ${e6.message}`), new Error(o4);
              }
          }
        }
      } else switch (n3.oneof && (e3 = e3[n3.oneof.localName] = { case: r3 }, r3 = "value"), n3.kind) {
        case "message":
          const o3 = n3.T;
          if (null === a3 && "google.protobuf.Value" != o3.typeName) return;
          let i3 = e3[r3];
          (0, _2.isMessage)(i3) ? i3.fromJson(a3, s3) : (e3[r3] = i3 = o3.fromJson(a3, s3), o3.fieldWrapper && !n3.oneof && (e3[r3] = o3.fieldWrapper.unwrapField(i3)));
          break;
        case "enum":
          const l3 = R2(n3.T, a3, s3.ignoreUnknownFields, false);
          switch (l3) {
            case E2:
              (0, m2.clearField)(n3, e3);
              break;
            case f2:
              break;
            default:
              e3[r3] = l3;
          }
          break;
        case "scalar":
          try {
            const o4 = S2(n3.T, a3, n3.L, false);
            if (o4 === E2) (0, m2.clearField)(n3, e3);
            else e3[r3] = o4;
          } catch (e4) {
            let o4 = `cannot decode field ${t3.typeName}.${n3.name} from JSON: ${N2(a3)}`;
            throw e4 instanceof Error && e4.message.length > 0 && (o4 += `: ${e4.message}`), new Error(o4);
          }
      }
    }
    function y2(e3, a3) {
      if (e3 === T2.ScalarType.BOOL) switch (a3) {
        case "true":
          a3 = true;
          break;
        case "false":
          a3 = false;
      }
      return S2(e3, a3, T2.LongType.BIGINT, true).toString();
    }
    function S2(e3, a3, n3, r3) {
      if (null === a3) return r3 ? (0, d2.scalarZeroValue)(e3, n3) : E2;
      switch (e3) {
        case T2.ScalarType.DOUBLE:
        case T2.ScalarType.FLOAT:
          if ("NaN" === a3) return Number.NaN;
          if ("Infinity" === a3) return Number.POSITIVE_INFINITY;
          if ("-Infinity" === a3) return Number.NEGATIVE_INFINITY;
          if ("" === a3) break;
          if ("string" == typeof a3 && a3.trim().length !== a3.length) break;
          if ("string" != typeof a3 && "number" != typeof a3) break;
          const r4 = Number(a3);
          if (Number.isNaN(r4)) break;
          if (!Number.isFinite(r4)) break;
          return e3 == T2.ScalarType.FLOAT && (0, o2.assertFloat32)(r4), r4;
        case T2.ScalarType.INT32:
        case T2.ScalarType.FIXED32:
        case T2.ScalarType.SFIXED32:
        case T2.ScalarType.SINT32:
        case T2.ScalarType.UINT32:
          let i3;
          if ("number" == typeof a3 ? i3 = a3 : "string" == typeof a3 && a3.length > 0 && a3.trim().length === a3.length && (i3 = Number(a3)), void 0 === i3) break;
          return e3 == T2.ScalarType.UINT32 || e3 == T2.ScalarType.FIXED32 ? (0, o2.assertUInt32)(i3) : (0, o2.assertInt32)(i3), i3;
        case T2.ScalarType.INT64:
        case T2.ScalarType.SFIXED64:
        case T2.ScalarType.SINT64:
          if ("number" != typeof a3 && "string" != typeof a3) break;
          const m3 = s2.protoInt64.parse(a3);
          return n3 ? m3.toString() : m3;
        case T2.ScalarType.FIXED64:
        case T2.ScalarType.UINT64:
          if ("number" != typeof a3 && "string" != typeof a3) break;
          const l3 = s2.protoInt64.uParse(a3);
          return n3 ? l3.toString() : l3;
        case T2.ScalarType.BOOL:
          if ("boolean" != typeof a3) break;
          return a3;
        case T2.ScalarType.STRING:
          if ("string" != typeof a3) break;
          try {
            encodeURIComponent(a3);
          } catch (e4) {
            throw new Error("invalid UTF8");
          }
          return a3;
        case T2.ScalarType.BYTES:
          if ("" === a3) return new Uint8Array(0);
          if ("string" != typeof a3) break;
          return t2.protoBase64.dec(a3);
      }
      throw new Error();
    }
    function R2(e3, a3, n3, o3) {
      if (null === a3) return "google.protobuf.NullValue" == e3.typeName ? 0 : o3 ? e3.values[0].no : E2;
      switch (typeof a3) {
        case "number":
          if (Number.isInteger(a3)) return a3;
          break;
        case "string":
          const o4 = e3.findName(a3);
          if (void 0 !== o4) return o4.no;
          if (n3) return f2;
      }
      throw new Error(`cannot decode enum ${e3.typeName} from JSON: ${N2(a3)}`);
    }
    function I2(e3) {
      return !(!e3.repeated && "map" != e3.kind) || !e3.oneof && ("message" != e3.kind && (!e3.opt && !e3.req));
    }
    function O2(e3, a3, n3) {
      if ("map" == e3.kind) {
        (0, o2.assert)("object" == typeof a3 && null != a3);
        const s3 = {}, t3 = Object.entries(a3);
        switch (e3.V.kind) {
          case "scalar":
            for (const [a5, n4] of t3) s3[a5.toString()] = C2(e3.V.T, n4);
            break;
          case "message":
            for (const [e4, a5] of t3) s3[e4.toString()] = a5.toJson(n3);
            break;
          case "enum":
            const a4 = e3.V.T;
            for (const [e4, o3] of t3) s3[e4.toString()] = A2(a4, o3, n3.enumAsInteger);
        }
        return n3.emitDefaultValues || t3.length > 0 ? s3 : void 0;
      }
      if (e3.repeated) {
        (0, o2.assert)(Array.isArray(a3));
        const s3 = [];
        switch (e3.kind) {
          case "scalar":
            for (let n4 = 0; n4 < a3.length; n4++) s3.push(C2(e3.T, a3[n4]));
            break;
          case "enum":
            for (let o3 = 0; o3 < a3.length; o3++) s3.push(A2(e3.T, a3[o3], n3.enumAsInteger));
            break;
          case "message":
            for (let e4 = 0; e4 < a3.length; e4++) s3.push(a3[e4].toJson(n3));
        }
        return n3.emitDefaultValues || s3.length > 0 ? s3 : void 0;
      }
      switch (e3.kind) {
        case "scalar":
          return C2(e3.T, a3);
        case "enum":
          return A2(e3.T, a3, n3.enumAsInteger);
        case "message":
          return (0, l2.wrapField)(e3.T, a3).toJson(n3);
      }
    }
    function A2(e3, a3, n3) {
      var s3;
      if ((0, o2.assert)("number" == typeof a3), "google.protobuf.NullValue" == e3.typeName) return null;
      if (n3) return a3;
      const t3 = e3.findNumber(a3);
      return null !== (s3 = null == t3 ? void 0 : t3.name) && void 0 !== s3 ? s3 : a3;
    }
    function C2(e3, a3) {
      switch (e3) {
        case T2.ScalarType.INT32:
        case T2.ScalarType.SFIXED32:
        case T2.ScalarType.SINT32:
        case T2.ScalarType.FIXED32:
        case T2.ScalarType.UINT32:
          return (0, o2.assert)("number" == typeof a3), a3;
        case T2.ScalarType.FLOAT:
        case T2.ScalarType.DOUBLE:
          return (0, o2.assert)("number" == typeof a3), Number.isNaN(a3) ? "NaN" : a3 === Number.POSITIVE_INFINITY ? "Infinity" : a3 === Number.NEGATIVE_INFINITY ? "-Infinity" : a3;
        case T2.ScalarType.STRING:
          return (0, o2.assert)("string" == typeof a3), a3;
        case T2.ScalarType.BOOL:
          return (0, o2.assert)("boolean" == typeof a3), a3;
        case T2.ScalarType.UINT64:
        case T2.ScalarType.FIXED64:
        case T2.ScalarType.INT64:
        case T2.ScalarType.SFIXED64:
        case T2.ScalarType.SINT64:
          return (0, o2.assert)("bigint" == typeof a3 || "string" == typeof a3 || "number" == typeof a3), a3.toString();
        case T2.ScalarType.BYTES:
          return (0, o2.assert)(a3 instanceof Uint8Array), t2.protoBase64.enc(a3);
      }
    }
    a2.makeJsonFormat = function() {
      return { makeReadOptions: k2, makeWriteOptions: g2, readMessage(e3, a3, n3, o3) {
        if (null == a3 || Array.isArray(a3) || "object" != typeof a3) throw new Error(`cannot decode message ${e3.typeName} from JSON: ${N2(a3)}`);
        o3 = null != o3 ? o3 : new e3();
        const s3 = /* @__PURE__ */ new Map(), t3 = n3.typeRegistry;
        for (const [m3, l3] of Object.entries(a3)) {
          const a4 = e3.fields.findJsonName(m3);
          if (a4) {
            if (a4.oneof) {
              if (null === l3 && "scalar" == a4.kind) continue;
              const n4 = s3.get(a4.oneof);
              if (void 0 !== n4) throw new Error(`cannot decode message ${e3.typeName} from JSON: multiple keys for oneof "${a4.oneof.name}" present: "${n4}", "${m3}"`);
              s3.set(a4.oneof, m3);
            }
            v2(o3, l3, a4, n3, e3);
          } else {
            let a5 = false;
            if ((null == t3 ? void 0 : t3.findExtension) && m3.startsWith("[") && m3.endsWith("]")) {
              const s4 = t3.findExtension(m3.substring(1, m3.length - 1));
              if (s4 && s4.extendee.typeName == e3.typeName) {
                a5 = true;
                const [e4, t4] = (0, r2.createExtensionContainer)(s4);
                v2(e4, l3, s4.field, n3, s4), (0, i2.setExtension)(o3, s4, t4(), n3);
              }
            }
            if (!a5 && !n3.ignoreUnknownFields) throw new Error(`cannot decode message ${e3.typeName} from JSON: key "${m3}" is unknown`);
          }
        }
        return o3;
      }, writeMessage(e3, a3) {
        const n3 = e3.getType(), o3 = {};
        let s3;
        try {
          for (s3 of n3.fields.byNumber()) {
            if (!(0, m2.isFieldSet)(s3, e3)) {
              if (s3.req) throw "required field not set";
              if (!a3.emitDefaultValues) continue;
              if (!I2(s3)) continue;
            }
            const n4 = O2(s3, s3.oneof ? e3[s3.oneof.localName].value : e3[s3.localName], a3);
            void 0 !== n4 && (o3[a3.useProtoFieldName ? s3.name : s3.jsonName] = n4);
          }
          const t3 = a3.typeRegistry;
          if (null == t3 ? void 0 : t3.findExtensionFor) for (const s4 of n3.runtime.bin.listUnknownFields(e3)) {
            const r3 = t3.findExtensionFor(n3.typeName, s4.no);
            if (r3 && (0, i2.hasExtension)(e3, r3)) {
              const n4 = (0, i2.getExtension)(e3, r3, a3), s5 = O2(r3.field, n4, a3);
              void 0 !== s5 && (o3[r3.field.jsonName] = s5);
            }
          }
        } catch (e4) {
          const a4 = s3 ? `cannot encode field ${n3.typeName}.${s3.name} to JSON` : `cannot encode message ${n3.typeName} to JSON`, o4 = e4 instanceof Error ? e4.message : String(e4);
          throw new Error(a4 + (o4.length > 0 ? `: ${o4}` : ""));
        }
        return o3;
      }, readScalar: (e3, a3, n3) => S2(e3, a3, null != n3 ? n3 : T2.LongType.BIGINT, true), writeScalar(e3, a3, n3) {
        if (void 0 !== a3) return n3 || (0, c2.isScalarZeroValue)(e3, a3) ? C2(e3, a3) : void 0;
      }, debug: N2 };
    };
  }
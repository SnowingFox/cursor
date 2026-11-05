// @recovered-by cursor-re
// artifact: app/extensions/cursor-computer-use/dist/extension.js sha256:2e37990c917916e7e5b3d1524e03cf61b1cf38ddc56b1e51014a1275aa4568a6
// module: 536 range:20817..34635
// basis: webpack-id confidence: C
// method: split
// run: ext-p0 2026-11-05T10:07:22.069Z
536: (e2, n2, t2) => {
    "use strict";
    Object.defineProperty(n2, "__esModule", { value: true }), n2.makeJsonFormat = void 0;
    const a2 = t2(3098), s2 = t2(1498), o2 = t2(9526), r = t2(1802), i = t2(1771), A = t2(8803), c = t2(2212), l = t2(1455), d = t2(1455), m = t2(3408), u = t2(2706), g = { ignoreUnknownFields: false }, p = { emitDefaultValues: false, enumAsInteger: false, useProtoFieldName: false, prettySpaces: 0 };
    function E(e3) {
      return e3 ? Object.assign(Object.assign({}, g), e3) : g;
    }
    function h(e3) {
      return e3 ? Object.assign(Object.assign({}, p), e3) : p;
    }
    const T = /* @__PURE__ */ Symbol(), k = /* @__PURE__ */ Symbol();
    function f(e3) {
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
    function _(e3, n3, t3, s3, o3) {
      let r2 = t3.localName;
      if (t3.repeated) {
        if ((0, a2.assert)("map" != t3.kind), null === n3) return;
        if (!Array.isArray(n3)) throw new Error(`cannot decode field ${o3.typeName}.${t3.name} from JSON: ${f(n3)}`);
        const i2 = e3[r2];
        for (const e4 of n3) {
          if (null === e4) throw new Error(`cannot decode field ${o3.typeName}.${t3.name} from JSON: ${f(e4)}`);
          switch (t3.kind) {
            case "message":
              i2.push(t3.T.fromJson(e4, s3));
              break;
            case "enum":
              const n4 = y(t3.T, e4, s3.ignoreUnknownFields, true);
              n4 !== k && i2.push(n4);
              break;
            case "scalar":
              try {
                i2.push(C(t3.T, e4, t3.L, true));
              } catch (n5) {
                let a3 = `cannot decode field ${o3.typeName}.${t3.name} from JSON: ${f(e4)}`;
                throw n5 instanceof Error && n5.message.length > 0 && (a3 += `: ${n5.message}`), new Error(a3);
              }
          }
        }
      } else if ("map" == t3.kind) {
        if (null === n3) return;
        if ("object" != typeof n3 || Array.isArray(n3)) throw new Error(`cannot decode field ${o3.typeName}.${t3.name} from JSON: ${f(n3)}`);
        const a3 = e3[r2];
        for (const [e4, r3] of Object.entries(n3)) {
          if (null === r3) throw new Error(`cannot decode field ${o3.typeName}.${t3.name} from JSON: map value null`);
          let i2;
          try {
            i2 = I(t3.K, e4);
          } catch (e5) {
            let a4 = `cannot decode map key for field ${o3.typeName}.${t3.name} from JSON: ${f(n3)}`;
            throw e5 instanceof Error && e5.message.length > 0 && (a4 += `: ${e5.message}`), new Error(a4);
          }
          switch (t3.V.kind) {
            case "message":
              a3[i2] = t3.V.T.fromJson(r3, s3);
              break;
            case "enum":
              const e5 = y(t3.V.T, r3, s3.ignoreUnknownFields, true);
              e5 !== k && (a3[i2] = e5);
              break;
            case "scalar":
              try {
                a3[i2] = C(t3.V.T, r3, m.LongType.BIGINT, true);
              } catch (e6) {
                let a4 = `cannot decode map value for field ${o3.typeName}.${t3.name} from JSON: ${f(n3)}`;
                throw e6 instanceof Error && e6.message.length > 0 && (a4 += `: ${e6.message}`), new Error(a4);
              }
          }
        }
      } else switch (t3.oneof && (e3 = e3[t3.oneof.localName] = { case: r2 }, r2 = "value"), t3.kind) {
        case "message":
          const a3 = t3.T;
          if (null === n3 && "google.protobuf.Value" != a3.typeName) return;
          let i2 = e3[r2];
          (0, u.isMessage)(i2) ? i2.fromJson(n3, s3) : (e3[r2] = i2 = a3.fromJson(n3, s3), a3.fieldWrapper && !t3.oneof && (e3[r2] = a3.fieldWrapper.unwrapField(i2)));
          break;
        case "enum":
          const c2 = y(t3.T, n3, s3.ignoreUnknownFields, false);
          switch (c2) {
            case T:
              (0, A.clearField)(t3, e3);
              break;
            case k:
              break;
            default:
              e3[r2] = c2;
          }
          break;
        case "scalar":
          try {
            const a4 = C(t3.T, n3, t3.L, false);
            if (a4 === T) (0, A.clearField)(t3, e3);
            else e3[r2] = a4;
          } catch (e4) {
            let a4 = `cannot decode field ${o3.typeName}.${t3.name} from JSON: ${f(n3)}`;
            throw e4 instanceof Error && e4.message.length > 0 && (a4 += `: ${e4.message}`), new Error(a4);
          }
      }
    }
    function I(e3, n3) {
      if (e3 === m.ScalarType.BOOL) switch (n3) {
        case "true":
          n3 = true;
          break;
        case "false":
          n3 = false;
      }
      return C(e3, n3, m.LongType.BIGINT, true).toString();
    }
    function C(e3, n3, t3, r2) {
      if (null === n3) return r2 ? (0, l.scalarZeroValue)(e3, t3) : T;
      switch (e3) {
        case m.ScalarType.DOUBLE:
        case m.ScalarType.FLOAT:
          if ("NaN" === n3) return Number.NaN;
          if ("Infinity" === n3) return Number.POSITIVE_INFINITY;
          if ("-Infinity" === n3) return Number.NEGATIVE_INFINITY;
          if ("" === n3) break;
          if ("string" == typeof n3 && n3.trim().length !== n3.length) break;
          if ("string" != typeof n3 && "number" != typeof n3) break;
          const r3 = Number(n3);
          if (Number.isNaN(r3)) break;
          if (!Number.isFinite(r3)) break;
          return e3 == m.ScalarType.FLOAT && (0, a2.assertFloat32)(r3), r3;
        case m.ScalarType.INT32:
        case m.ScalarType.FIXED32:
        case m.ScalarType.SFIXED32:
        case m.ScalarType.SINT32:
        case m.ScalarType.UINT32:
          let i2;
          if ("number" == typeof n3 ? i2 = n3 : "string" == typeof n3 && n3.length > 0 && n3.trim().length === n3.length && (i2 = Number(n3)), void 0 === i2) break;
          return e3 == m.ScalarType.UINT32 || e3 == m.ScalarType.FIXED32 ? (0, a2.assertUInt32)(i2) : (0, a2.assertInt32)(i2), i2;
        case m.ScalarType.INT64:
        case m.ScalarType.SFIXED64:
        case m.ScalarType.SINT64:
          if ("number" != typeof n3 && "string" != typeof n3) break;
          const A2 = s2.protoInt64.parse(n3);
          return t3 ? A2.toString() : A2;
        case m.ScalarType.FIXED64:
        case m.ScalarType.UINT64:
          if ("number" != typeof n3 && "string" != typeof n3) break;
          const c2 = s2.protoInt64.uParse(n3);
          return t3 ? c2.toString() : c2;
        case m.ScalarType.BOOL:
          if ("boolean" != typeof n3) break;
          return n3;
        case m.ScalarType.STRING:
          if ("string" != typeof n3) break;
          try {
            encodeURIComponent(n3);
          } catch (e4) {
            throw new Error("invalid UTF8");
          }
          return n3;
        case m.ScalarType.BYTES:
          if ("" === n3) return new Uint8Array(0);
          if ("string" != typeof n3) break;
          return o2.protoBase64.dec(n3);
      }
      throw new Error();
    }
    function y(e3, n3, t3, a3) {
      if (null === n3) return "google.protobuf.NullValue" == e3.typeName ? 0 : a3 ? e3.values[0].no : T;
      switch (typeof n3) {
        case "number":
          if (Number.isInteger(n3)) return n3;
          break;
        case "string":
          const a4 = e3.findName(n3);
          if (void 0 !== a4) return a4.no;
          if (t3) return k;
      }
      throw new Error(`cannot decode enum ${e3.typeName} from JSON: ${f(n3)}`);
    }
    function B(e3) {
      return !(!e3.repeated && "map" != e3.kind) || !e3.oneof && ("message" != e3.kind && (!e3.opt && !e3.req));
    }
    function Q(e3, n3, t3) {
      if ("map" == e3.kind) {
        (0, a2.assert)("object" == typeof n3 && null != n3);
        const s3 = {}, o3 = Object.entries(n3);
        switch (e3.V.kind) {
          case "scalar":
            for (const [n5, t4] of o3) s3[n5.toString()] = R(e3.V.T, t4);
            break;
          case "message":
            for (const [e4, n5] of o3) s3[e4.toString()] = n5.toJson(t3);
            break;
          case "enum":
            const n4 = e3.V.T;
            for (const [e4, a3] of o3) s3[e4.toString()] = v(n4, a3, t3.enumAsInteger);
        }
        return t3.emitDefaultValues || o3.length > 0 ? s3 : void 0;
      }
      if (e3.repeated) {
        (0, a2.assert)(Array.isArray(n3));
        const s3 = [];
        switch (e3.kind) {
          case "scalar":
            for (let t4 = 0; t4 < n3.length; t4++) s3.push(R(e3.T, n3[t4]));
            break;
          case "enum":
            for (let a3 = 0; a3 < n3.length; a3++) s3.push(v(e3.T, n3[a3], t3.enumAsInteger));
            break;
          case "message":
            for (let e4 = 0; e4 < n3.length; e4++) s3.push(n3[e4].toJson(t3));
        }
        return t3.emitDefaultValues || s3.length > 0 ? s3 : void 0;
      }
      switch (e3.kind) {
        case "scalar":
          return R(e3.T, n3);
        case "enum":
          return v(e3.T, n3, t3.enumAsInteger);
        case "message":
          return (0, c.wrapField)(e3.T, n3).toJson(t3);
      }
    }
    function v(e3, n3, t3) {
      var s3;
      if ((0, a2.assert)("number" == typeof n3), "google.protobuf.NullValue" == e3.typeName) return null;
      if (t3) return n3;
      const o3 = e3.findNumber(n3);
      return null !== (s3 = null == o3 ? void 0 : o3.name) && void 0 !== s3 ? s3 : n3;
    }
    function R(e3, n3) {
      switch (e3) {
        case m.ScalarType.INT32:
        case m.ScalarType.SFIXED32:
        case m.ScalarType.SINT32:
        case m.ScalarType.FIXED32:
        case m.ScalarType.UINT32:
          return (0, a2.assert)("number" == typeof n3), n3;
        case m.ScalarType.FLOAT:
        case m.ScalarType.DOUBLE:
          return (0, a2.assert)("number" == typeof n3), Number.isNaN(n3) ? "NaN" : n3 === Number.POSITIVE_INFINITY ? "Infinity" : n3 === Number.NEGATIVE_INFINITY ? "-Infinity" : n3;
        case m.ScalarType.STRING:
          return (0, a2.assert)("string" == typeof n3), n3;
        case m.ScalarType.BOOL:
          return (0, a2.assert)("boolean" == typeof n3), n3;
        case m.ScalarType.UINT64:
        case m.ScalarType.FIXED64:
        case m.ScalarType.INT64:
        case m.ScalarType.SFIXED64:
        case m.ScalarType.SINT64:
          return (0, a2.assert)("bigint" == typeof n3 || "string" == typeof n3 || "number" == typeof n3), n3.toString();
        case m.ScalarType.BYTES:
          return (0, a2.assert)(n3 instanceof Uint8Array), o2.protoBase64.enc(n3);
      }
    }
    n2.makeJsonFormat = function() {
      return { makeReadOptions: E, makeWriteOptions: h, readMessage(e3, n3, t3, a3) {
        if (null == n3 || Array.isArray(n3) || "object" != typeof n3) throw new Error(`cannot decode message ${e3.typeName} from JSON: ${f(n3)}`);
        a3 = null != a3 ? a3 : new e3();
        const s3 = /* @__PURE__ */ new Map(), o3 = t3.typeRegistry;
        for (const [A2, c2] of Object.entries(n3)) {
          const n4 = e3.fields.findJsonName(A2);
          if (n4) {
            if (n4.oneof) {
              if (null === c2 && "scalar" == n4.kind) continue;
              const t4 = s3.get(n4.oneof);
              if (void 0 !== t4) throw new Error(`cannot decode message ${e3.typeName} from JSON: multiple keys for oneof "${n4.oneof.name}" present: "${t4}", "${A2}"`);
              s3.set(n4.oneof, A2);
            }
            _(a3, c2, n4, t3, e3);
          } else {
            let n5 = false;
            if ((null == o3 ? void 0 : o3.findExtension) && A2.startsWith("[") && A2.endsWith("]")) {
              const s4 = o3.findExtension(A2.substring(1, A2.length - 1));
              if (s4 && s4.extendee.typeName == e3.typeName) {
                n5 = true;
                const [e4, o4] = (0, r.createExtensionContainer)(s4);
                _(e4, c2, s4.field, t3, s4), (0, i.setExtension)(a3, s4, o4(), t3);
              }
            }
            if (!n5 && !t3.ignoreUnknownFields) throw new Error(`cannot decode message ${e3.typeName} from JSON: key "${A2}" is unknown`);
          }
        }
        return a3;
      }, writeMessage(e3, n3) {
        const t3 = e3.getType(), a3 = {};
        let s3;
        try {
          for (s3 of t3.fields.byNumber()) {
            if (!(0, A.isFieldSet)(s3, e3)) {
              if (s3.req) throw "required field not set";
              if (!n3.emitDefaultValues) continue;
              if (!B(s3)) continue;
            }
            const t4 = Q(s3, s3.oneof ? e3[s3.oneof.localName].value : e3[s3.localName], n3);
            void 0 !== t4 && (a3[n3.useProtoFieldName ? s3.name : s3.jsonName] = t4);
          }
          const o3 = n3.typeRegistry;
          if (null == o3 ? void 0 : o3.findExtensionFor) for (const s4 of t3.runtime.bin.listUnknownFields(e3)) {
            const r2 = o3.findExtensionFor(t3.typeName, s4.no);
            if (r2 && (0, i.hasExtension)(e3, r2)) {
              const t4 = (0, i.getExtension)(e3, r2, n3), s5 = Q(r2.field, t4, n3);
              void 0 !== s5 && (a3[r2.field.jsonName] = s5);
            }
          }
        } catch (e4) {
          const n4 = s3 ? `cannot encode field ${t3.typeName}.${s3.name} to JSON` : `cannot encode message ${t3.typeName} to JSON`, a4 = e4 instanceof Error ? e4.message : String(e4);
          throw new Error(n4 + (a4.length > 0 ? `: ${a4}` : ""));
        }
        return a3;
      }, readScalar: (e3, n3, t3) => C(e3, n3, null != t3 ? t3 : m.LongType.BIGINT, true), writeScalar(e3, n3, t3) {
        if (void 0 !== n3) return t3 || (0, d.isScalarZeroValue)(e3, n3) ? R(e3, n3) : void 0;
      }, debug: f };
    };
  }
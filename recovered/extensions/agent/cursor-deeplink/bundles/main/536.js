// @recovered-by cursor-re
// artifact: app/extensions/cursor-deeplink/dist/main.js sha256:2b0091d260814e411af8319789fee5fe8b4b75d7c27c85b905f80c4d53d995f3
// module: 536 range:20385..34203
// basis: webpack-id confidence: C
// method: split
// run: ext-agent 2026-11-05T10:20:08.356Z
536: (e2, t2, A2) => {
    "use strict";
    Object.defineProperty(t2, "__esModule", { value: true }), t2.makeJsonFormat = void 0;
    const n2 = A2(3098), r2 = A2(1498), o2 = A2(9526), s = A2(1802), i = A2(1771), a = A2(8803), c = A2(2212), l = A2(1455), u = A2(1455), g = A2(3408), E = A2(2706), h = { ignoreUnknownFields: false }, d = { emitDefaultValues: false, enumAsInteger: false, useProtoFieldName: false, prettySpaces: 0 };
    function I(e3) {
      return e3 ? Object.assign(Object.assign({}, h), e3) : h;
    }
    function B(e3) {
      return e3 ? Object.assign(Object.assign({}, d), e3) : d;
    }
    const Q = /* @__PURE__ */ Symbol(), f = /* @__PURE__ */ Symbol();
    function C(e3) {
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
    function p(e3, t3, A3, r3, o3) {
      let s2 = A3.localName;
      if (A3.repeated) {
        if ((0, n2.assert)("map" != A3.kind), null === t3) return;
        if (!Array.isArray(t3)) throw new Error(`cannot decode field ${o3.typeName}.${A3.name} from JSON: ${C(t3)}`);
        const i2 = e3[s2];
        for (const e4 of t3) {
          if (null === e4) throw new Error(`cannot decode field ${o3.typeName}.${A3.name} from JSON: ${C(e4)}`);
          switch (A3.kind) {
            case "message":
              i2.push(A3.T.fromJson(e4, r3));
              break;
            case "enum":
              const t4 = w(A3.T, e4, r3.ignoreUnknownFields, true);
              t4 !== f && i2.push(t4);
              break;
            case "scalar":
              try {
                i2.push(y(A3.T, e4, A3.L, true));
              } catch (t5) {
                let n3 = `cannot decode field ${o3.typeName}.${A3.name} from JSON: ${C(e4)}`;
                throw t5 instanceof Error && t5.message.length > 0 && (n3 += `: ${t5.message}`), new Error(n3);
              }
          }
        }
      } else if ("map" == A3.kind) {
        if (null === t3) return;
        if ("object" != typeof t3 || Array.isArray(t3)) throw new Error(`cannot decode field ${o3.typeName}.${A3.name} from JSON: ${C(t3)}`);
        const n3 = e3[s2];
        for (const [e4, s3] of Object.entries(t3)) {
          if (null === s3) throw new Error(`cannot decode field ${o3.typeName}.${A3.name} from JSON: map value null`);
          let i2;
          try {
            i2 = m(A3.K, e4);
          } catch (e5) {
            let n4 = `cannot decode map key for field ${o3.typeName}.${A3.name} from JSON: ${C(t3)}`;
            throw e5 instanceof Error && e5.message.length > 0 && (n4 += `: ${e5.message}`), new Error(n4);
          }
          switch (A3.V.kind) {
            case "message":
              n3[i2] = A3.V.T.fromJson(s3, r3);
              break;
            case "enum":
              const e5 = w(A3.V.T, s3, r3.ignoreUnknownFields, true);
              e5 !== f && (n3[i2] = e5);
              break;
            case "scalar":
              try {
                n3[i2] = y(A3.V.T, s3, g.LongType.BIGINT, true);
              } catch (e6) {
                let n4 = `cannot decode map value for field ${o3.typeName}.${A3.name} from JSON: ${C(t3)}`;
                throw e6 instanceof Error && e6.message.length > 0 && (n4 += `: ${e6.message}`), new Error(n4);
              }
          }
        }
      } else switch (A3.oneof && (e3 = e3[A3.oneof.localName] = { case: s2 }, s2 = "value"), A3.kind) {
        case "message":
          const n3 = A3.T;
          if (null === t3 && "google.protobuf.Value" != n3.typeName) return;
          let i2 = e3[s2];
          (0, E.isMessage)(i2) ? i2.fromJson(t3, r3) : (e3[s2] = i2 = n3.fromJson(t3, r3), n3.fieldWrapper && !A3.oneof && (e3[s2] = n3.fieldWrapper.unwrapField(i2)));
          break;
        case "enum":
          const c2 = w(A3.T, t3, r3.ignoreUnknownFields, false);
          switch (c2) {
            case Q:
              (0, a.clearField)(A3, e3);
              break;
            case f:
              break;
            default:
              e3[s2] = c2;
          }
          break;
        case "scalar":
          try {
            const n4 = y(A3.T, t3, A3.L, false);
            if (n4 === Q) (0, a.clearField)(A3, e3);
            else e3[s2] = n4;
          } catch (e4) {
            let n4 = `cannot decode field ${o3.typeName}.${A3.name} from JSON: ${C(t3)}`;
            throw e4 instanceof Error && e4.message.length > 0 && (n4 += `: ${e4.message}`), new Error(n4);
          }
      }
    }
    function m(e3, t3) {
      if (e3 === g.ScalarType.BOOL) switch (t3) {
        case "true":
          t3 = true;
          break;
        case "false":
          t3 = false;
      }
      return y(e3, t3, g.LongType.BIGINT, true).toString();
    }
    function y(e3, t3, A3, s2) {
      if (null === t3) return s2 ? (0, l.scalarZeroValue)(e3, A3) : Q;
      switch (e3) {
        case g.ScalarType.DOUBLE:
        case g.ScalarType.FLOAT:
          if ("NaN" === t3) return Number.NaN;
          if ("Infinity" === t3) return Number.POSITIVE_INFINITY;
          if ("-Infinity" === t3) return Number.NEGATIVE_INFINITY;
          if ("" === t3) break;
          if ("string" == typeof t3 && t3.trim().length !== t3.length) break;
          if ("string" != typeof t3 && "number" != typeof t3) break;
          const s3 = Number(t3);
          if (Number.isNaN(s3)) break;
          if (!Number.isFinite(s3)) break;
          return e3 == g.ScalarType.FLOAT && (0, n2.assertFloat32)(s3), s3;
        case g.ScalarType.INT32:
        case g.ScalarType.FIXED32:
        case g.ScalarType.SFIXED32:
        case g.ScalarType.SINT32:
        case g.ScalarType.UINT32:
          let i2;
          if ("number" == typeof t3 ? i2 = t3 : "string" == typeof t3 && t3.length > 0 && t3.trim().length === t3.length && (i2 = Number(t3)), void 0 === i2) break;
          return e3 == g.ScalarType.UINT32 || e3 == g.ScalarType.FIXED32 ? (0, n2.assertUInt32)(i2) : (0, n2.assertInt32)(i2), i2;
        case g.ScalarType.INT64:
        case g.ScalarType.SFIXED64:
        case g.ScalarType.SINT64:
          if ("number" != typeof t3 && "string" != typeof t3) break;
          const a2 = r2.protoInt64.parse(t3);
          return A3 ? a2.toString() : a2;
        case g.ScalarType.FIXED64:
        case g.ScalarType.UINT64:
          if ("number" != typeof t3 && "string" != typeof t3) break;
          const c2 = r2.protoInt64.uParse(t3);
          return A3 ? c2.toString() : c2;
        case g.ScalarType.BOOL:
          if ("boolean" != typeof t3) break;
          return t3;
        case g.ScalarType.STRING:
          if ("string" != typeof t3) break;
          try {
            encodeURIComponent(t3);
          } catch (e4) {
            throw new Error("invalid UTF8");
          }
          return t3;
        case g.ScalarType.BYTES:
          if ("" === t3) return new Uint8Array(0);
          if ("string" != typeof t3) break;
          return o2.protoBase64.dec(t3);
      }
      throw new Error();
    }
    function w(e3, t3, A3, n3) {
      if (null === t3) return "google.protobuf.NullValue" == e3.typeName ? 0 : n3 ? e3.values[0].no : Q;
      switch (typeof t3) {
        case "number":
          if (Number.isInteger(t3)) return t3;
          break;
        case "string":
          const n4 = e3.findName(t3);
          if (void 0 !== n4) return n4.no;
          if (A3) return f;
      }
      throw new Error(`cannot decode enum ${e3.typeName} from JSON: ${C(t3)}`);
    }
    function k(e3) {
      return !(!e3.repeated && "map" != e3.kind) || !e3.oneof && ("message" != e3.kind && (!e3.opt && !e3.req));
    }
    function b(e3, t3, A3) {
      if ("map" == e3.kind) {
        (0, n2.assert)("object" == typeof t3 && null != t3);
        const r3 = {}, o3 = Object.entries(t3);
        switch (e3.V.kind) {
          case "scalar":
            for (const [t5, A4] of o3) r3[t5.toString()] = T(e3.V.T, A4);
            break;
          case "message":
            for (const [e4, t5] of o3) r3[e4.toString()] = t5.toJson(A3);
            break;
          case "enum":
            const t4 = e3.V.T;
            for (const [e4, n3] of o3) r3[e4.toString()] = N(t4, n3, A3.enumAsInteger);
        }
        return A3.emitDefaultValues || o3.length > 0 ? r3 : void 0;
      }
      if (e3.repeated) {
        (0, n2.assert)(Array.isArray(t3));
        const r3 = [];
        switch (e3.kind) {
          case "scalar":
            for (let A4 = 0; A4 < t3.length; A4++) r3.push(T(e3.T, t3[A4]));
            break;
          case "enum":
            for (let n3 = 0; n3 < t3.length; n3++) r3.push(N(e3.T, t3[n3], A3.enumAsInteger));
            break;
          case "message":
            for (let e4 = 0; e4 < t3.length; e4++) r3.push(t3[e4].toJson(A3));
        }
        return A3.emitDefaultValues || r3.length > 0 ? r3 : void 0;
      }
      switch (e3.kind) {
        case "scalar":
          return T(e3.T, t3);
        case "enum":
          return N(e3.T, t3, A3.enumAsInteger);
        case "message":
          return (0, c.wrapField)(e3.T, t3).toJson(A3);
      }
    }
    function N(e3, t3, A3) {
      var r3;
      if ((0, n2.assert)("number" == typeof t3), "google.protobuf.NullValue" == e3.typeName) return null;
      if (A3) return t3;
      const o3 = e3.findNumber(t3);
      return null !== (r3 = null == o3 ? void 0 : o3.name) && void 0 !== r3 ? r3 : t3;
    }
    function T(e3, t3) {
      switch (e3) {
        case g.ScalarType.INT32:
        case g.ScalarType.SFIXED32:
        case g.ScalarType.SINT32:
        case g.ScalarType.FIXED32:
        case g.ScalarType.UINT32:
          return (0, n2.assert)("number" == typeof t3), t3;
        case g.ScalarType.FLOAT:
        case g.ScalarType.DOUBLE:
          return (0, n2.assert)("number" == typeof t3), Number.isNaN(t3) ? "NaN" : t3 === Number.POSITIVE_INFINITY ? "Infinity" : t3 === Number.NEGATIVE_INFINITY ? "-Infinity" : t3;
        case g.ScalarType.STRING:
          return (0, n2.assert)("string" == typeof t3), t3;
        case g.ScalarType.BOOL:
          return (0, n2.assert)("boolean" == typeof t3), t3;
        case g.ScalarType.UINT64:
        case g.ScalarType.FIXED64:
        case g.ScalarType.INT64:
        case g.ScalarType.SFIXED64:
        case g.ScalarType.SINT64:
          return (0, n2.assert)("bigint" == typeof t3 || "string" == typeof t3 || "number" == typeof t3), t3.toString();
        case g.ScalarType.BYTES:
          return (0, n2.assert)(t3 instanceof Uint8Array), o2.protoBase64.enc(t3);
      }
    }
    t2.makeJsonFormat = function() {
      return { makeReadOptions: I, makeWriteOptions: B, readMessage(e3, t3, A3, n3) {
        if (null == t3 || Array.isArray(t3) || "object" != typeof t3) throw new Error(`cannot decode message ${e3.typeName} from JSON: ${C(t3)}`);
        n3 = null != n3 ? n3 : new e3();
        const r3 = /* @__PURE__ */ new Map(), o3 = A3.typeRegistry;
        for (const [a2, c2] of Object.entries(t3)) {
          const t4 = e3.fields.findJsonName(a2);
          if (t4) {
            if (t4.oneof) {
              if (null === c2 && "scalar" == t4.kind) continue;
              const A4 = r3.get(t4.oneof);
              if (void 0 !== A4) throw new Error(`cannot decode message ${e3.typeName} from JSON: multiple keys for oneof "${t4.oneof.name}" present: "${A4}", "${a2}"`);
              r3.set(t4.oneof, a2);
            }
            p(n3, c2, t4, A3, e3);
          } else {
            let t5 = false;
            if ((null == o3 ? void 0 : o3.findExtension) && a2.startsWith("[") && a2.endsWith("]")) {
              const r4 = o3.findExtension(a2.substring(1, a2.length - 1));
              if (r4 && r4.extendee.typeName == e3.typeName) {
                t5 = true;
                const [e4, o4] = (0, s.createExtensionContainer)(r4);
                p(e4, c2, r4.field, A3, r4), (0, i.setExtension)(n3, r4, o4(), A3);
              }
            }
            if (!t5 && !A3.ignoreUnknownFields) throw new Error(`cannot decode message ${e3.typeName} from JSON: key "${a2}" is unknown`);
          }
        }
        return n3;
      }, writeMessage(e3, t3) {
        const A3 = e3.getType(), n3 = {};
        let r3;
        try {
          for (r3 of A3.fields.byNumber()) {
            if (!(0, a.isFieldSet)(r3, e3)) {
              if (r3.req) throw "required field not set";
              if (!t3.emitDefaultValues) continue;
              if (!k(r3)) continue;
            }
            const A4 = b(r3, r3.oneof ? e3[r3.oneof.localName].value : e3[r3.localName], t3);
            void 0 !== A4 && (n3[t3.useProtoFieldName ? r3.name : r3.jsonName] = A4);
          }
          const o3 = t3.typeRegistry;
          if (null == o3 ? void 0 : o3.findExtensionFor) for (const r4 of A3.runtime.bin.listUnknownFields(e3)) {
            const s2 = o3.findExtensionFor(A3.typeName, r4.no);
            if (s2 && (0, i.hasExtension)(e3, s2)) {
              const A4 = (0, i.getExtension)(e3, s2, t3), r5 = b(s2.field, A4, t3);
              void 0 !== r5 && (n3[s2.field.jsonName] = r5);
            }
          }
        } catch (e4) {
          const t4 = r3 ? `cannot encode field ${A3.typeName}.${r3.name} to JSON` : `cannot encode message ${A3.typeName} to JSON`, n4 = e4 instanceof Error ? e4.message : String(e4);
          throw new Error(t4 + (n4.length > 0 ? `: ${n4}` : ""));
        }
        return n3;
      }, readScalar: (e3, t3, A3) => y(e3, t3, null != A3 ? A3 : g.LongType.BIGINT, true), writeScalar(e3, t3, A3) {
        if (void 0 !== t3) return A3 || (0, u.isScalarZeroValue)(e3, t3) ? T(e3, t3) : void 0;
      }, debug: C };
    };
  }
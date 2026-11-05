// @recovered-by cursor-re
// artifact: app/extensions/cursor-shadow-workspace/dist/extension.js sha256:19218949e5ecc64e4c1b41e194ba40abfd54a9aeb034a14f90c71485b7f84585
// module: 536 range:16626..30444
// basis: webpack-id confidence: C
// method: split
// run: ext-agent 2026-11-05T10:20:08.356Z
536: (e2, A2, t2) => {
    "use strict";
    Object.defineProperty(A2, "__esModule", { value: true }), A2.makeJsonFormat = void 0;
    const n2 = t2(3098), r2 = t2(1498), o2 = t2(9526), s = t2(1802), a = t2(1771), i = t2(8803), c = t2(2212), l = t2(1455), g = t2(1455), E = t2(3408), u = t2(2706), d = { ignoreUnknownFields: false }, I = { emitDefaultValues: false, enumAsInteger: false, useProtoFieldName: false, prettySpaces: 0 };
    function h(e3) {
      return e3 ? Object.assign(Object.assign({}, d), e3) : d;
    }
    function Q(e3) {
      return e3 ? Object.assign(Object.assign({}, I), e3) : I;
    }
    const m = /* @__PURE__ */ Symbol(), C = /* @__PURE__ */ Symbol();
    function B(e3) {
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
    function p(e3, A3, t3, r3, o3) {
      let s2 = t3.localName;
      if (t3.repeated) {
        if ((0, n2.assert)("map" != t3.kind), null === A3) return;
        if (!Array.isArray(A3)) throw new Error(`cannot decode field ${o3.typeName}.${t3.name} from JSON: ${B(A3)}`);
        const a2 = e3[s2];
        for (const e4 of A3) {
          if (null === e4) throw new Error(`cannot decode field ${o3.typeName}.${t3.name} from JSON: ${B(e4)}`);
          switch (t3.kind) {
            case "message":
              a2.push(t3.T.fromJson(e4, r3));
              break;
            case "enum":
              const A4 = T(t3.T, e4, r3.ignoreUnknownFields, true);
              A4 !== C && a2.push(A4);
              break;
            case "scalar":
              try {
                a2.push(y(t3.T, e4, t3.L, true));
              } catch (A5) {
                let n3 = `cannot decode field ${o3.typeName}.${t3.name} from JSON: ${B(e4)}`;
                throw A5 instanceof Error && A5.message.length > 0 && (n3 += `: ${A5.message}`), new Error(n3);
              }
          }
        }
      } else if ("map" == t3.kind) {
        if (null === A3) return;
        if ("object" != typeof A3 || Array.isArray(A3)) throw new Error(`cannot decode field ${o3.typeName}.${t3.name} from JSON: ${B(A3)}`);
        const n3 = e3[s2];
        for (const [e4, s3] of Object.entries(A3)) {
          if (null === s3) throw new Error(`cannot decode field ${o3.typeName}.${t3.name} from JSON: map value null`);
          let a2;
          try {
            a2 = f(t3.K, e4);
          } catch (e5) {
            let n4 = `cannot decode map key for field ${o3.typeName}.${t3.name} from JSON: ${B(A3)}`;
            throw e5 instanceof Error && e5.message.length > 0 && (n4 += `: ${e5.message}`), new Error(n4);
          }
          switch (t3.V.kind) {
            case "message":
              n3[a2] = t3.V.T.fromJson(s3, r3);
              break;
            case "enum":
              const e5 = T(t3.V.T, s3, r3.ignoreUnknownFields, true);
              e5 !== C && (n3[a2] = e5);
              break;
            case "scalar":
              try {
                n3[a2] = y(t3.V.T, s3, E.LongType.BIGINT, true);
              } catch (e6) {
                let n4 = `cannot decode map value for field ${o3.typeName}.${t3.name} from JSON: ${B(A3)}`;
                throw e6 instanceof Error && e6.message.length > 0 && (n4 += `: ${e6.message}`), new Error(n4);
              }
          }
        }
      } else switch (t3.oneof && (e3 = e3[t3.oneof.localName] = { case: s2 }, s2 = "value"), t3.kind) {
        case "message":
          const n3 = t3.T;
          if (null === A3 && "google.protobuf.Value" != n3.typeName) return;
          let a2 = e3[s2];
          (0, u.isMessage)(a2) ? a2.fromJson(A3, r3) : (e3[s2] = a2 = n3.fromJson(A3, r3), n3.fieldWrapper && !t3.oneof && (e3[s2] = n3.fieldWrapper.unwrapField(a2)));
          break;
        case "enum":
          const c2 = T(t3.T, A3, r3.ignoreUnknownFields, false);
          switch (c2) {
            case m:
              (0, i.clearField)(t3, e3);
              break;
            case C:
              break;
            default:
              e3[s2] = c2;
          }
          break;
        case "scalar":
          try {
            const n4 = y(t3.T, A3, t3.L, false);
            if (n4 === m) (0, i.clearField)(t3, e3);
            else e3[s2] = n4;
          } catch (e4) {
            let n4 = `cannot decode field ${o3.typeName}.${t3.name} from JSON: ${B(A3)}`;
            throw e4 instanceof Error && e4.message.length > 0 && (n4 += `: ${e4.message}`), new Error(n4);
          }
      }
    }
    function f(e3, A3) {
      if (e3 === E.ScalarType.BOOL) switch (A3) {
        case "true":
          A3 = true;
          break;
        case "false":
          A3 = false;
      }
      return y(e3, A3, E.LongType.BIGINT, true).toString();
    }
    function y(e3, A3, t3, s2) {
      if (null === A3) return s2 ? (0, l.scalarZeroValue)(e3, t3) : m;
      switch (e3) {
        case E.ScalarType.DOUBLE:
        case E.ScalarType.FLOAT:
          if ("NaN" === A3) return Number.NaN;
          if ("Infinity" === A3) return Number.POSITIVE_INFINITY;
          if ("-Infinity" === A3) return Number.NEGATIVE_INFINITY;
          if ("" === A3) break;
          if ("string" == typeof A3 && A3.trim().length !== A3.length) break;
          if ("string" != typeof A3 && "number" != typeof A3) break;
          const s3 = Number(A3);
          if (Number.isNaN(s3)) break;
          if (!Number.isFinite(s3)) break;
          return e3 == E.ScalarType.FLOAT && (0, n2.assertFloat32)(s3), s3;
        case E.ScalarType.INT32:
        case E.ScalarType.FIXED32:
        case E.ScalarType.SFIXED32:
        case E.ScalarType.SINT32:
        case E.ScalarType.UINT32:
          let a2;
          if ("number" == typeof A3 ? a2 = A3 : "string" == typeof A3 && A3.length > 0 && A3.trim().length === A3.length && (a2 = Number(A3)), void 0 === a2) break;
          return e3 == E.ScalarType.UINT32 || e3 == E.ScalarType.FIXED32 ? (0, n2.assertUInt32)(a2) : (0, n2.assertInt32)(a2), a2;
        case E.ScalarType.INT64:
        case E.ScalarType.SFIXED64:
        case E.ScalarType.SINT64:
          if ("number" != typeof A3 && "string" != typeof A3) break;
          const i2 = r2.protoInt64.parse(A3);
          return t3 ? i2.toString() : i2;
        case E.ScalarType.FIXED64:
        case E.ScalarType.UINT64:
          if ("number" != typeof A3 && "string" != typeof A3) break;
          const c2 = r2.protoInt64.uParse(A3);
          return t3 ? c2.toString() : c2;
        case E.ScalarType.BOOL:
          if ("boolean" != typeof A3) break;
          return A3;
        case E.ScalarType.STRING:
          if ("string" != typeof A3) break;
          try {
            encodeURIComponent(A3);
          } catch (e4) {
            throw new Error("invalid UTF8");
          }
          return A3;
        case E.ScalarType.BYTES:
          if ("" === A3) return new Uint8Array(0);
          if ("string" != typeof A3) break;
          return o2.protoBase64.dec(A3);
      }
      throw new Error();
    }
    function T(e3, A3, t3, n3) {
      if (null === A3) return "google.protobuf.NullValue" == e3.typeName ? 0 : n3 ? e3.values[0].no : m;
      switch (typeof A3) {
        case "number":
          if (Number.isInteger(A3)) return A3;
          break;
        case "string":
          const n4 = e3.findName(A3);
          if (void 0 !== n4) return n4.no;
          if (t3) return C;
      }
      throw new Error(`cannot decode enum ${e3.typeName} from JSON: ${B(A3)}`);
    }
    function k(e3) {
      return !(!e3.repeated && "map" != e3.kind) || !e3.oneof && ("message" != e3.kind && (!e3.opt && !e3.req));
    }
    function w(e3, A3, t3) {
      if ("map" == e3.kind) {
        (0, n2.assert)("object" == typeof A3 && null != A3);
        const r3 = {}, o3 = Object.entries(A3);
        switch (e3.V.kind) {
          case "scalar":
            for (const [A5, t4] of o3) r3[A5.toString()] = D(e3.V.T, t4);
            break;
          case "message":
            for (const [e4, A5] of o3) r3[e4.toString()] = A5.toJson(t3);
            break;
          case "enum":
            const A4 = e3.V.T;
            for (const [e4, n3] of o3) r3[e4.toString()] = N(A4, n3, t3.enumAsInteger);
        }
        return t3.emitDefaultValues || o3.length > 0 ? r3 : void 0;
      }
      if (e3.repeated) {
        (0, n2.assert)(Array.isArray(A3));
        const r3 = [];
        switch (e3.kind) {
          case "scalar":
            for (let t4 = 0; t4 < A3.length; t4++) r3.push(D(e3.T, A3[t4]));
            break;
          case "enum":
            for (let n3 = 0; n3 < A3.length; n3++) r3.push(N(e3.T, A3[n3], t3.enumAsInteger));
            break;
          case "message":
            for (let e4 = 0; e4 < A3.length; e4++) r3.push(A3[e4].toJson(t3));
        }
        return t3.emitDefaultValues || r3.length > 0 ? r3 : void 0;
      }
      switch (e3.kind) {
        case "scalar":
          return D(e3.T, A3);
        case "enum":
          return N(e3.T, A3, t3.enumAsInteger);
        case "message":
          return (0, c.wrapField)(e3.T, A3).toJson(t3);
      }
    }
    function N(e3, A3, t3) {
      var r3;
      if ((0, n2.assert)("number" == typeof A3), "google.protobuf.NullValue" == e3.typeName) return null;
      if (t3) return A3;
      const o3 = e3.findNumber(A3);
      return null !== (r3 = null == o3 ? void 0 : o3.name) && void 0 !== r3 ? r3 : A3;
    }
    function D(e3, A3) {
      switch (e3) {
        case E.ScalarType.INT32:
        case E.ScalarType.SFIXED32:
        case E.ScalarType.SINT32:
        case E.ScalarType.FIXED32:
        case E.ScalarType.UINT32:
          return (0, n2.assert)("number" == typeof A3), A3;
        case E.ScalarType.FLOAT:
        case E.ScalarType.DOUBLE:
          return (0, n2.assert)("number" == typeof A3), Number.isNaN(A3) ? "NaN" : A3 === Number.POSITIVE_INFINITY ? "Infinity" : A3 === Number.NEGATIVE_INFINITY ? "-Infinity" : A3;
        case E.ScalarType.STRING:
          return (0, n2.assert)("string" == typeof A3), A3;
        case E.ScalarType.BOOL:
          return (0, n2.assert)("boolean" == typeof A3), A3;
        case E.ScalarType.UINT64:
        case E.ScalarType.FIXED64:
        case E.ScalarType.INT64:
        case E.ScalarType.SFIXED64:
        case E.ScalarType.SINT64:
          return (0, n2.assert)("bigint" == typeof A3 || "string" == typeof A3 || "number" == typeof A3), A3.toString();
        case E.ScalarType.BYTES:
          return (0, n2.assert)(A3 instanceof Uint8Array), o2.protoBase64.enc(A3);
      }
    }
    A2.makeJsonFormat = function() {
      return { makeReadOptions: h, makeWriteOptions: Q, readMessage(e3, A3, t3, n3) {
        if (null == A3 || Array.isArray(A3) || "object" != typeof A3) throw new Error(`cannot decode message ${e3.typeName} from JSON: ${B(A3)}`);
        n3 = null != n3 ? n3 : new e3();
        const r3 = /* @__PURE__ */ new Map(), o3 = t3.typeRegistry;
        for (const [i2, c2] of Object.entries(A3)) {
          const A4 = e3.fields.findJsonName(i2);
          if (A4) {
            if (A4.oneof) {
              if (null === c2 && "scalar" == A4.kind) continue;
              const t4 = r3.get(A4.oneof);
              if (void 0 !== t4) throw new Error(`cannot decode message ${e3.typeName} from JSON: multiple keys for oneof "${A4.oneof.name}" present: "${t4}", "${i2}"`);
              r3.set(A4.oneof, i2);
            }
            p(n3, c2, A4, t3, e3);
          } else {
            let A5 = false;
            if ((null == o3 ? void 0 : o3.findExtension) && i2.startsWith("[") && i2.endsWith("]")) {
              const r4 = o3.findExtension(i2.substring(1, i2.length - 1));
              if (r4 && r4.extendee.typeName == e3.typeName) {
                A5 = true;
                const [e4, o4] = (0, s.createExtensionContainer)(r4);
                p(e4, c2, r4.field, t3, r4), (0, a.setExtension)(n3, r4, o4(), t3);
              }
            }
            if (!A5 && !t3.ignoreUnknownFields) throw new Error(`cannot decode message ${e3.typeName} from JSON: key "${i2}" is unknown`);
          }
        }
        return n3;
      }, writeMessage(e3, A3) {
        const t3 = e3.getType(), n3 = {};
        let r3;
        try {
          for (r3 of t3.fields.byNumber()) {
            if (!(0, i.isFieldSet)(r3, e3)) {
              if (r3.req) throw "required field not set";
              if (!A3.emitDefaultValues) continue;
              if (!k(r3)) continue;
            }
            const t4 = w(r3, r3.oneof ? e3[r3.oneof.localName].value : e3[r3.localName], A3);
            void 0 !== t4 && (n3[A3.useProtoFieldName ? r3.name : r3.jsonName] = t4);
          }
          const o3 = A3.typeRegistry;
          if (null == o3 ? void 0 : o3.findExtensionFor) for (const r4 of t3.runtime.bin.listUnknownFields(e3)) {
            const s2 = o3.findExtensionFor(t3.typeName, r4.no);
            if (s2 && (0, a.hasExtension)(e3, s2)) {
              const t4 = (0, a.getExtension)(e3, s2, A3), r5 = w(s2.field, t4, A3);
              void 0 !== r5 && (n3[s2.field.jsonName] = r5);
            }
          }
        } catch (e4) {
          const A4 = r3 ? `cannot encode field ${t3.typeName}.${r3.name} to JSON` : `cannot encode message ${t3.typeName} to JSON`, n4 = e4 instanceof Error ? e4.message : String(e4);
          throw new Error(A4 + (n4.length > 0 ? `: ${n4}` : ""));
        }
        return n3;
      }, readScalar: (e3, A3, t3) => y(e3, A3, null != t3 ? t3 : E.LongType.BIGINT, true), writeScalar(e3, A3, t3) {
        if (void 0 !== A3) return t3 || (0, g.isScalarZeroValue)(e3, A3) ? D(e3, A3) : void 0;
      }, debug: B };
    };
  }
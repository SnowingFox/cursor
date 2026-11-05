// @recovered-by cursor-re
// artifact: app/extensions/cursor-commits/dist/main.js sha256:093f8518d2bba92ce25a152b40a9e7490ef35d5b45f1477f49078295148101b9
// module: 536 range:16631..30455
// basis: webpack-id confidence: C
// method: split
// run: ext-agent 2026-11-05T10:20:08.356Z
536: (e2, n2, a2) => {
    "use strict";
    Object.defineProperty(n2, "__esModule", { value: true }), n2.makeJsonFormat = void 0;
    const t2 = a2(3098), s2 = a2(1498), o2 = a2(9526), r2 = a2(1802), i2 = a2(1771), A = a2(8803), l = a2(2212), c = a2(1455), m = a2(1455), d = a2(3408), g = a2(2706), u = { ignoreUnknownFields: false }, E = { emitDefaultValues: false, enumAsInteger: false, useProtoFieldName: false, prettySpaces: 0 };
    function p(e3) {
      return e3 ? Object.assign(Object.assign({}, u), e3) : u;
    }
    function T(e3) {
      return e3 ? Object.assign(Object.assign({}, E), e3) : E;
    }
    const k = /* @__PURE__ */ Symbol(), I = /* @__PURE__ */ Symbol();
    function h(e3) {
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
    function _(e3, n3, a3, s3, o3) {
      let r3 = a3.localName;
      if (a3.repeated) {
        if ((0, t2.assert)("map" != a3.kind), null === n3) return;
        if (!Array.isArray(n3)) throw new Error(`cannot decode field ${o3.typeName}.${a3.name} from JSON: ${h(n3)}`);
        const i3 = e3[r3];
        for (const e4 of n3) {
          if (null === e4) throw new Error(`cannot decode field ${o3.typeName}.${a3.name} from JSON: ${h(e4)}`);
          switch (a3.kind) {
            case "message":
              i3.push(a3.T.fromJson(e4, s3));
              break;
            case "enum":
              const n4 = B(a3.T, e4, s3.ignoreUnknownFields, true);
              n4 !== I && i3.push(n4);
              break;
            case "scalar":
              try {
                i3.push(f(a3.T, e4, a3.L, true));
              } catch (n5) {
                let t3 = `cannot decode field ${o3.typeName}.${a3.name} from JSON: ${h(e4)}`;
                throw n5 instanceof Error && n5.message.length > 0 && (t3 += `: ${n5.message}`), new Error(t3);
              }
          }
        }
      } else if ("map" == a3.kind) {
        if (null === n3) return;
        if ("object" != typeof n3 || Array.isArray(n3)) throw new Error(`cannot decode field ${o3.typeName}.${a3.name} from JSON: ${h(n3)}`);
        const t3 = e3[r3];
        for (const [e4, r4] of Object.entries(n3)) {
          if (null === r4) throw new Error(`cannot decode field ${o3.typeName}.${a3.name} from JSON: map value null`);
          let i3;
          try {
            i3 = C(a3.K, e4);
          } catch (e5) {
            let t4 = `cannot decode map key for field ${o3.typeName}.${a3.name} from JSON: ${h(n3)}`;
            throw e5 instanceof Error && e5.message.length > 0 && (t4 += `: ${e5.message}`), new Error(t4);
          }
          switch (a3.V.kind) {
            case "message":
              t3[i3] = a3.V.T.fromJson(r4, s3);
              break;
            case "enum":
              const e5 = B(a3.V.T, r4, s3.ignoreUnknownFields, true);
              e5 !== I && (t3[i3] = e5);
              break;
            case "scalar":
              try {
                t3[i3] = f(a3.V.T, r4, d.LongType.BIGINT, true);
              } catch (e6) {
                let t4 = `cannot decode map value for field ${o3.typeName}.${a3.name} from JSON: ${h(n3)}`;
                throw e6 instanceof Error && e6.message.length > 0 && (t4 += `: ${e6.message}`), new Error(t4);
              }
          }
        }
      } else switch (a3.oneof && (e3 = e3[a3.oneof.localName] = { case: r3 }, r3 = "value"), a3.kind) {
        case "message":
          const t3 = a3.T;
          if (null === n3 && "google.protobuf.Value" != t3.typeName) return;
          let i3 = e3[r3];
          (0, g.isMessage)(i3) ? i3.fromJson(n3, s3) : (e3[r3] = i3 = t3.fromJson(n3, s3), t3.fieldWrapper && !a3.oneof && (e3[r3] = t3.fieldWrapper.unwrapField(i3)));
          break;
        case "enum":
          const l2 = B(a3.T, n3, s3.ignoreUnknownFields, false);
          switch (l2) {
            case k:
              (0, A.clearField)(a3, e3);
              break;
            case I:
              break;
            default:
              e3[r3] = l2;
          }
          break;
        case "scalar":
          try {
            const t4 = f(a3.T, n3, a3.L, false);
            if (t4 === k) (0, A.clearField)(a3, e3);
            else e3[r3] = t4;
          } catch (e4) {
            let t4 = `cannot decode field ${o3.typeName}.${a3.name} from JSON: ${h(n3)}`;
            throw e4 instanceof Error && e4.message.length > 0 && (t4 += `: ${e4.message}`), new Error(t4);
          }
      }
    }
    function C(e3, n3) {
      if (e3 === d.ScalarType.BOOL) switch (n3) {
        case "true":
          n3 = true;
          break;
        case "false":
          n3 = false;
      }
      return f(e3, n3, d.LongType.BIGINT, true).toString();
    }
    function f(e3, n3, a3, r3) {
      if (null === n3) return r3 ? (0, c.scalarZeroValue)(e3, a3) : k;
      switch (e3) {
        case d.ScalarType.DOUBLE:
        case d.ScalarType.FLOAT:
          if ("NaN" === n3) return Number.NaN;
          if ("Infinity" === n3) return Number.POSITIVE_INFINITY;
          if ("-Infinity" === n3) return Number.NEGATIVE_INFINITY;
          if ("" === n3) break;
          if ("string" == typeof n3 && n3.trim().length !== n3.length) break;
          if ("string" != typeof n3 && "number" != typeof n3) break;
          const r4 = Number(n3);
          if (Number.isNaN(r4)) break;
          if (!Number.isFinite(r4)) break;
          return e3 == d.ScalarType.FLOAT && (0, t2.assertFloat32)(r4), r4;
        case d.ScalarType.INT32:
        case d.ScalarType.FIXED32:
        case d.ScalarType.SFIXED32:
        case d.ScalarType.SINT32:
        case d.ScalarType.UINT32:
          let i3;
          if ("number" == typeof n3 ? i3 = n3 : "string" == typeof n3 && n3.length > 0 && n3.trim().length === n3.length && (i3 = Number(n3)), void 0 === i3) break;
          return e3 == d.ScalarType.UINT32 || e3 == d.ScalarType.FIXED32 ? (0, t2.assertUInt32)(i3) : (0, t2.assertInt32)(i3), i3;
        case d.ScalarType.INT64:
        case d.ScalarType.SFIXED64:
        case d.ScalarType.SINT64:
          if ("number" != typeof n3 && "string" != typeof n3) break;
          const A2 = s2.protoInt64.parse(n3);
          return a3 ? A2.toString() : A2;
        case d.ScalarType.FIXED64:
        case d.ScalarType.UINT64:
          if ("number" != typeof n3 && "string" != typeof n3) break;
          const l2 = s2.protoInt64.uParse(n3);
          return a3 ? l2.toString() : l2;
        case d.ScalarType.BOOL:
          if ("boolean" != typeof n3) break;
          return n3;
        case d.ScalarType.STRING:
          if ("string" != typeof n3) break;
          try {
            encodeURIComponent(n3);
          } catch (e4) {
            throw new Error("invalid UTF8");
          }
          return n3;
        case d.ScalarType.BYTES:
          if ("" === n3) return new Uint8Array(0);
          if ("string" != typeof n3) break;
          return o2.protoBase64.dec(n3);
      }
      throw new Error();
    }
    function B(e3, n3, a3, t3) {
      if (null === n3) return "google.protobuf.NullValue" == e3.typeName ? 0 : t3 ? e3.values[0].no : k;
      switch (typeof n3) {
        case "number":
          if (Number.isInteger(n3)) return n3;
          break;
        case "string":
          const t4 = e3.findName(n3);
          if (void 0 !== t4) return t4.no;
          if (a3) return I;
      }
      throw new Error(`cannot decode enum ${e3.typeName} from JSON: ${h(n3)}`);
    }
    function Q(e3) {
      return !(!e3.repeated && "map" != e3.kind) || !e3.oneof && ("message" != e3.kind && (!e3.opt && !e3.req));
    }
    function y(e3, n3, a3) {
      if ("map" == e3.kind) {
        (0, t2.assert)("object" == typeof n3 && null != n3);
        const s3 = {}, o3 = Object.entries(n3);
        switch (e3.V.kind) {
          case "scalar":
            for (const [n5, a4] of o3) s3[n5.toString()] = N(e3.V.T, a4);
            break;
          case "message":
            for (const [e4, n5] of o3) s3[e4.toString()] = n5.toJson(a3);
            break;
          case "enum":
            const n4 = e3.V.T;
            for (const [e4, t3] of o3) s3[e4.toString()] = R(n4, t3, a3.enumAsInteger);
        }
        return a3.emitDefaultValues || o3.length > 0 ? s3 : void 0;
      }
      if (e3.repeated) {
        (0, t2.assert)(Array.isArray(n3));
        const s3 = [];
        switch (e3.kind) {
          case "scalar":
            for (let a4 = 0; a4 < n3.length; a4++) s3.push(N(e3.T, n3[a4]));
            break;
          case "enum":
            for (let t3 = 0; t3 < n3.length; t3++) s3.push(R(e3.T, n3[t3], a3.enumAsInteger));
            break;
          case "message":
            for (let e4 = 0; e4 < n3.length; e4++) s3.push(n3[e4].toJson(a3));
        }
        return a3.emitDefaultValues || s3.length > 0 ? s3 : void 0;
      }
      switch (e3.kind) {
        case "scalar":
          return N(e3.T, n3);
        case "enum":
          return R(e3.T, n3, a3.enumAsInteger);
        case "message":
          return (0, l.wrapField)(e3.T, n3).toJson(a3);
      }
    }
    function R(e3, n3, a3) {
      var s3;
      if ((0, t2.assert)("number" == typeof n3), "google.protobuf.NullValue" == e3.typeName) return null;
      if (a3) return n3;
      const o3 = e3.findNumber(n3);
      return null !== (s3 = null == o3 ? void 0 : o3.name) && void 0 !== s3 ? s3 : n3;
    }
    function N(e3, n3) {
      switch (e3) {
        case d.ScalarType.INT32:
        case d.ScalarType.SFIXED32:
        case d.ScalarType.SINT32:
        case d.ScalarType.FIXED32:
        case d.ScalarType.UINT32:
          return (0, t2.assert)("number" == typeof n3), n3;
        case d.ScalarType.FLOAT:
        case d.ScalarType.DOUBLE:
          return (0, t2.assert)("number" == typeof n3), Number.isNaN(n3) ? "NaN" : n3 === Number.POSITIVE_INFINITY ? "Infinity" : n3 === Number.NEGATIVE_INFINITY ? "-Infinity" : n3;
        case d.ScalarType.STRING:
          return (0, t2.assert)("string" == typeof n3), n3;
        case d.ScalarType.BOOL:
          return (0, t2.assert)("boolean" == typeof n3), n3;
        case d.ScalarType.UINT64:
        case d.ScalarType.FIXED64:
        case d.ScalarType.INT64:
        case d.ScalarType.SFIXED64:
        case d.ScalarType.SINT64:
          return (0, t2.assert)("bigint" == typeof n3 || "string" == typeof n3 || "number" == typeof n3), n3.toString();
        case d.ScalarType.BYTES:
          return (0, t2.assert)(n3 instanceof Uint8Array), o2.protoBase64.enc(n3);
      }
    }
    n2.makeJsonFormat = function() {
      return { makeReadOptions: p, makeWriteOptions: T, readMessage(e3, n3, a3, t3) {
        if (null == n3 || Array.isArray(n3) || "object" != typeof n3) throw new Error(`cannot decode message ${e3.typeName} from JSON: ${h(n3)}`);
        t3 = null != t3 ? t3 : new e3();
        const s3 = /* @__PURE__ */ new Map(), o3 = a3.typeRegistry;
        for (const [A2, l2] of Object.entries(n3)) {
          const n4 = e3.fields.findJsonName(A2);
          if (n4) {
            if (n4.oneof) {
              if (null === l2 && "scalar" == n4.kind) continue;
              const a4 = s3.get(n4.oneof);
              if (void 0 !== a4) throw new Error(`cannot decode message ${e3.typeName} from JSON: multiple keys for oneof "${n4.oneof.name}" present: "${a4}", "${A2}"`);
              s3.set(n4.oneof, A2);
            }
            _(t3, l2, n4, a3, e3);
          } else {
            let n5 = false;
            if ((null == o3 ? void 0 : o3.findExtension) && A2.startsWith("[") && A2.endsWith("]")) {
              const s4 = o3.findExtension(A2.substring(1, A2.length - 1));
              if (s4 && s4.extendee.typeName == e3.typeName) {
                n5 = true;
                const [e4, o4] = (0, r2.createExtensionContainer)(s4);
                _(e4, l2, s4.field, a3, s4), (0, i2.setExtension)(t3, s4, o4(), a3);
              }
            }
            if (!n5 && !a3.ignoreUnknownFields) throw new Error(`cannot decode message ${e3.typeName} from JSON: key "${A2}" is unknown`);
          }
        }
        return t3;
      }, writeMessage(e3, n3) {
        const a3 = e3.getType(), t3 = {};
        let s3;
        try {
          for (s3 of a3.fields.byNumber()) {
            if (!(0, A.isFieldSet)(s3, e3)) {
              if (s3.req) throw "required field not set";
              if (!n3.emitDefaultValues) continue;
              if (!Q(s3)) continue;
            }
            const a4 = y(s3, s3.oneof ? e3[s3.oneof.localName].value : e3[s3.localName], n3);
            void 0 !== a4 && (t3[n3.useProtoFieldName ? s3.name : s3.jsonName] = a4);
          }
          const o3 = n3.typeRegistry;
          if (null == o3 ? void 0 : o3.findExtensionFor) for (const s4 of a3.runtime.bin.listUnknownFields(e3)) {
            const r3 = o3.findExtensionFor(a3.typeName, s4.no);
            if (r3 && (0, i2.hasExtension)(e3, r3)) {
              const a4 = (0, i2.getExtension)(e3, r3, n3), s5 = y(r3.field, a4, n3);
              void 0 !== s5 && (t3[r3.field.jsonName] = s5);
            }
          }
        } catch (e4) {
          const n4 = s3 ? `cannot encode field ${a3.typeName}.${s3.name} to JSON` : `cannot encode message ${a3.typeName} to JSON`, t4 = e4 instanceof Error ? e4.message : String(e4);
          throw new Error(n4 + (t4.length > 0 ? `: ${t4}` : ""));
        }
        return t3;
      }, readScalar: (e3, n3, a3) => f(e3, n3, null != a3 ? a3 : d.LongType.BIGINT, true), writeScalar(e3, n3, a3) {
        if (void 0 !== n3) return a3 || (0, m.isScalarZeroValue)(e3, n3) ? N(e3, n3) : void 0;
      }, debug: h };
    };
  }
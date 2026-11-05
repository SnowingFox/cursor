// @recovered-by cursor-re
// artifact: app/extensions/cursor-retrieval/dist/main.js sha256:50c717cc16d67dfb571db8461d6630caeb8e421ad0090d156086d1a3d53b1b2b
// module: 536 range:25084..38908
// basis: webpack-id confidence: C
// method: split
// run: ext-agent 2026-11-05T10:20:08.356Z
536: (e2, a2, n2) => {
    "use strict";
    Object.defineProperty(a2, "__esModule", { value: true }), a2.makeJsonFormat = void 0;
    const t2 = n2(3098), s2 = n2(1498), o2 = n2(9526), r2 = n2(1802), i2 = n2(1771), l = n2(8803), d = n2(2212), m = n2(1455), c = n2(1455), p = n2(3408), A = n2(2706), u = { ignoreUnknownFields: false }, g = { emitDefaultValues: false, enumAsInteger: false, useProtoFieldName: false, prettySpaces: 0 };
    function T(e3) {
      return e3 ? Object.assign(Object.assign({}, u), e3) : u;
    }
    function h(e3) {
      return e3 ? Object.assign(Object.assign({}, g), e3) : g;
    }
    const k = /* @__PURE__ */ Symbol(), _ = /* @__PURE__ */ Symbol();
    function E(e3) {
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
    function f(e3, a3, n3, s3, o3) {
      let r3 = n3.localName;
      if (n3.repeated) {
        if ((0, t2.assert)("map" != n3.kind), null === a3) return;
        if (!Array.isArray(a3)) throw new Error(`cannot decode field ${o3.typeName}.${n3.name} from JSON: ${E(a3)}`);
        const i3 = e3[r3];
        for (const e4 of a3) {
          if (null === e4) throw new Error(`cannot decode field ${o3.typeName}.${n3.name} from JSON: ${E(e4)}`);
          switch (n3.kind) {
            case "message":
              i3.push(n3.T.fromJson(e4, s3));
              break;
            case "enum":
              const a4 = v(n3.T, e4, s3.ignoreUnknownFields, true);
              a4 !== _ && i3.push(a4);
              break;
            case "scalar":
              try {
                i3.push(I(n3.T, e4, n3.L, true));
              } catch (a5) {
                let t3 = `cannot decode field ${o3.typeName}.${n3.name} from JSON: ${E(e4)}`;
                throw a5 instanceof Error && a5.message.length > 0 && (t3 += `: ${a5.message}`), new Error(t3);
              }
          }
        }
      } else if ("map" == n3.kind) {
        if (null === a3) return;
        if ("object" != typeof a3 || Array.isArray(a3)) throw new Error(`cannot decode field ${o3.typeName}.${n3.name} from JSON: ${E(a3)}`);
        const t3 = e3[r3];
        for (const [e4, r4] of Object.entries(a3)) {
          if (null === r4) throw new Error(`cannot decode field ${o3.typeName}.${n3.name} from JSON: map value null`);
          let i3;
          try {
            i3 = C(n3.K, e4);
          } catch (e5) {
            let t4 = `cannot decode map key for field ${o3.typeName}.${n3.name} from JSON: ${E(a3)}`;
            throw e5 instanceof Error && e5.message.length > 0 && (t4 += `: ${e5.message}`), new Error(t4);
          }
          switch (n3.V.kind) {
            case "message":
              t3[i3] = n3.V.T.fromJson(r4, s3);
              break;
            case "enum":
              const e5 = v(n3.V.T, r4, s3.ignoreUnknownFields, true);
              e5 !== _ && (t3[i3] = e5);
              break;
            case "scalar":
              try {
                t3[i3] = I(n3.V.T, r4, p.LongType.BIGINT, true);
              } catch (e6) {
                let t4 = `cannot decode map value for field ${o3.typeName}.${n3.name} from JSON: ${E(a3)}`;
                throw e6 instanceof Error && e6.message.length > 0 && (t4 += `: ${e6.message}`), new Error(t4);
              }
          }
        }
      } else switch (n3.oneof && (e3 = e3[n3.oneof.localName] = { case: r3 }, r3 = "value"), n3.kind) {
        case "message":
          const t3 = n3.T;
          if (null === a3 && "google.protobuf.Value" != t3.typeName) return;
          let i3 = e3[r3];
          (0, A.isMessage)(i3) ? i3.fromJson(a3, s3) : (e3[r3] = i3 = t3.fromJson(a3, s3), t3.fieldWrapper && !n3.oneof && (e3[r3] = t3.fieldWrapper.unwrapField(i3)));
          break;
        case "enum":
          const d2 = v(n3.T, a3, s3.ignoreUnknownFields, false);
          switch (d2) {
            case k:
              (0, l.clearField)(n3, e3);
              break;
            case _:
              break;
            default:
              e3[r3] = d2;
          }
          break;
        case "scalar":
          try {
            const t4 = I(n3.T, a3, n3.L, false);
            if (t4 === k) (0, l.clearField)(n3, e3);
            else e3[r3] = t4;
          } catch (e4) {
            let t4 = `cannot decode field ${o3.typeName}.${n3.name} from JSON: ${E(a3)}`;
            throw e4 instanceof Error && e4.message.length > 0 && (t4 += `: ${e4.message}`), new Error(t4);
          }
      }
    }
    function C(e3, a3) {
      if (e3 === p.ScalarType.BOOL) switch (a3) {
        case "true":
          a3 = true;
          break;
        case "false":
          a3 = false;
      }
      return I(e3, a3, p.LongType.BIGINT, true).toString();
    }
    function I(e3, a3, n3, r3) {
      if (null === a3) return r3 ? (0, m.scalarZeroValue)(e3, n3) : k;
      switch (e3) {
        case p.ScalarType.DOUBLE:
        case p.ScalarType.FLOAT:
          if ("NaN" === a3) return Number.NaN;
          if ("Infinity" === a3) return Number.POSITIVE_INFINITY;
          if ("-Infinity" === a3) return Number.NEGATIVE_INFINITY;
          if ("" === a3) break;
          if ("string" == typeof a3 && a3.trim().length !== a3.length) break;
          if ("string" != typeof a3 && "number" != typeof a3) break;
          const r4 = Number(a3);
          if (Number.isNaN(r4)) break;
          if (!Number.isFinite(r4)) break;
          return e3 == p.ScalarType.FLOAT && (0, t2.assertFloat32)(r4), r4;
        case p.ScalarType.INT32:
        case p.ScalarType.FIXED32:
        case p.ScalarType.SFIXED32:
        case p.ScalarType.SINT32:
        case p.ScalarType.UINT32:
          let i3;
          if ("number" == typeof a3 ? i3 = a3 : "string" == typeof a3 && a3.length > 0 && a3.trim().length === a3.length && (i3 = Number(a3)), void 0 === i3) break;
          return e3 == p.ScalarType.UINT32 || e3 == p.ScalarType.FIXED32 ? (0, t2.assertUInt32)(i3) : (0, t2.assertInt32)(i3), i3;
        case p.ScalarType.INT64:
        case p.ScalarType.SFIXED64:
        case p.ScalarType.SINT64:
          if ("number" != typeof a3 && "string" != typeof a3) break;
          const l2 = s2.protoInt64.parse(a3);
          return n3 ? l2.toString() : l2;
        case p.ScalarType.FIXED64:
        case p.ScalarType.UINT64:
          if ("number" != typeof a3 && "string" != typeof a3) break;
          const d2 = s2.protoInt64.uParse(a3);
          return n3 ? d2.toString() : d2;
        case p.ScalarType.BOOL:
          if ("boolean" != typeof a3) break;
          return a3;
        case p.ScalarType.STRING:
          if ("string" != typeof a3) break;
          try {
            encodeURIComponent(a3);
          } catch (e4) {
            throw new Error("invalid UTF8");
          }
          return a3;
        case p.ScalarType.BYTES:
          if ("" === a3) return new Uint8Array(0);
          if ("string" != typeof a3) break;
          return o2.protoBase64.dec(a3);
      }
      throw new Error();
    }
    function v(e3, a3, n3, t3) {
      if (null === a3) return "google.protobuf.NullValue" == e3.typeName ? 0 : t3 ? e3.values[0].no : k;
      switch (typeof a3) {
        case "number":
          if (Number.isInteger(a3)) return a3;
          break;
        case "string":
          const t4 = e3.findName(a3);
          if (void 0 !== t4) return t4.no;
          if (n3) return _;
      }
      throw new Error(`cannot decode enum ${e3.typeName} from JSON: ${E(a3)}`);
    }
    function y(e3) {
      return !(!e3.repeated && "map" != e3.kind) || !e3.oneof && ("message" != e3.kind && (!e3.opt && !e3.req));
    }
    function S(e3, a3, n3) {
      if ("map" == e3.kind) {
        (0, t2.assert)("object" == typeof a3 && null != a3);
        const s3 = {}, o3 = Object.entries(a3);
        switch (e3.V.kind) {
          case "scalar":
            for (const [a5, n4] of o3) s3[a5.toString()] = N(e3.V.T, n4);
            break;
          case "message":
            for (const [e4, a5] of o3) s3[e4.toString()] = a5.toJson(n3);
            break;
          case "enum":
            const a4 = e3.V.T;
            for (const [e4, t3] of o3) s3[e4.toString()] = R(a4, t3, n3.enumAsInteger);
        }
        return n3.emitDefaultValues || o3.length > 0 ? s3 : void 0;
      }
      if (e3.repeated) {
        (0, t2.assert)(Array.isArray(a3));
        const s3 = [];
        switch (e3.kind) {
          case "scalar":
            for (let n4 = 0; n4 < a3.length; n4++) s3.push(N(e3.T, a3[n4]));
            break;
          case "enum":
            for (let t3 = 0; t3 < a3.length; t3++) s3.push(R(e3.T, a3[t3], n3.enumAsInteger));
            break;
          case "message":
            for (let e4 = 0; e4 < a3.length; e4++) s3.push(a3[e4].toJson(n3));
        }
        return n3.emitDefaultValues || s3.length > 0 ? s3 : void 0;
      }
      switch (e3.kind) {
        case "scalar":
          return N(e3.T, a3);
        case "enum":
          return R(e3.T, a3, n3.enumAsInteger);
        case "message":
          return (0, d.wrapField)(e3.T, a3).toJson(n3);
      }
    }
    function R(e3, a3, n3) {
      var s3;
      if ((0, t2.assert)("number" == typeof a3), "google.protobuf.NullValue" == e3.typeName) return null;
      if (n3) return a3;
      const o3 = e3.findNumber(a3);
      return null !== (s3 = null == o3 ? void 0 : o3.name) && void 0 !== s3 ? s3 : a3;
    }
    function N(e3, a3) {
      switch (e3) {
        case p.ScalarType.INT32:
        case p.ScalarType.SFIXED32:
        case p.ScalarType.SINT32:
        case p.ScalarType.FIXED32:
        case p.ScalarType.UINT32:
          return (0, t2.assert)("number" == typeof a3), a3;
        case p.ScalarType.FLOAT:
        case p.ScalarType.DOUBLE:
          return (0, t2.assert)("number" == typeof a3), Number.isNaN(a3) ? "NaN" : a3 === Number.POSITIVE_INFINITY ? "Infinity" : a3 === Number.NEGATIVE_INFINITY ? "-Infinity" : a3;
        case p.ScalarType.STRING:
          return (0, t2.assert)("string" == typeof a3), a3;
        case p.ScalarType.BOOL:
          return (0, t2.assert)("boolean" == typeof a3), a3;
        case p.ScalarType.UINT64:
        case p.ScalarType.FIXED64:
        case p.ScalarType.INT64:
        case p.ScalarType.SFIXED64:
        case p.ScalarType.SINT64:
          return (0, t2.assert)("bigint" == typeof a3 || "string" == typeof a3 || "number" == typeof a3), a3.toString();
        case p.ScalarType.BYTES:
          return (0, t2.assert)(a3 instanceof Uint8Array), o2.protoBase64.enc(a3);
      }
    }
    a2.makeJsonFormat = function() {
      return { makeReadOptions: T, makeWriteOptions: h, readMessage(e3, a3, n3, t3) {
        if (null == a3 || Array.isArray(a3) || "object" != typeof a3) throw new Error(`cannot decode message ${e3.typeName} from JSON: ${E(a3)}`);
        t3 = null != t3 ? t3 : new e3();
        const s3 = /* @__PURE__ */ new Map(), o3 = n3.typeRegistry;
        for (const [l2, d2] of Object.entries(a3)) {
          const a4 = e3.fields.findJsonName(l2);
          if (a4) {
            if (a4.oneof) {
              if (null === d2 && "scalar" == a4.kind) continue;
              const n4 = s3.get(a4.oneof);
              if (void 0 !== n4) throw new Error(`cannot decode message ${e3.typeName} from JSON: multiple keys for oneof "${a4.oneof.name}" present: "${n4}", "${l2}"`);
              s3.set(a4.oneof, l2);
            }
            f(t3, d2, a4, n3, e3);
          } else {
            let a5 = false;
            if ((null == o3 ? void 0 : o3.findExtension) && l2.startsWith("[") && l2.endsWith("]")) {
              const s4 = o3.findExtension(l2.substring(1, l2.length - 1));
              if (s4 && s4.extendee.typeName == e3.typeName) {
                a5 = true;
                const [e4, o4] = (0, r2.createExtensionContainer)(s4);
                f(e4, d2, s4.field, n3, s4), (0, i2.setExtension)(t3, s4, o4(), n3);
              }
            }
            if (!a5 && !n3.ignoreUnknownFields) throw new Error(`cannot decode message ${e3.typeName} from JSON: key "${l2}" is unknown`);
          }
        }
        return t3;
      }, writeMessage(e3, a3) {
        const n3 = e3.getType(), t3 = {};
        let s3;
        try {
          for (s3 of n3.fields.byNumber()) {
            if (!(0, l.isFieldSet)(s3, e3)) {
              if (s3.req) throw "required field not set";
              if (!a3.emitDefaultValues) continue;
              if (!y(s3)) continue;
            }
            const n4 = S(s3, s3.oneof ? e3[s3.oneof.localName].value : e3[s3.localName], a3);
            void 0 !== n4 && (t3[a3.useProtoFieldName ? s3.name : s3.jsonName] = n4);
          }
          const o3 = a3.typeRegistry;
          if (null == o3 ? void 0 : o3.findExtensionFor) for (const s4 of n3.runtime.bin.listUnknownFields(e3)) {
            const r3 = o3.findExtensionFor(n3.typeName, s4.no);
            if (r3 && (0, i2.hasExtension)(e3, r3)) {
              const n4 = (0, i2.getExtension)(e3, r3, a3), s5 = S(r3.field, n4, a3);
              void 0 !== s5 && (t3[r3.field.jsonName] = s5);
            }
          }
        } catch (e4) {
          const a4 = s3 ? `cannot encode field ${n3.typeName}.${s3.name} to JSON` : `cannot encode message ${n3.typeName} to JSON`, t4 = e4 instanceof Error ? e4.message : String(e4);
          throw new Error(a4 + (t4.length > 0 ? `: ${t4}` : ""));
        }
        return t3;
      }, readScalar: (e3, a3, n3) => I(e3, a3, null != n3 ? n3 : p.LongType.BIGINT, true), writeScalar(e3, a3, n3) {
        if (void 0 !== a3) return n3 || (0, c.isScalarZeroValue)(e3, a3) ? N(e3, a3) : void 0;
      }, debug: E };
    };
  }
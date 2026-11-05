// @recovered-by cursor-re
// artifact: app/extensions/cursor-always-local/dist/main.js sha256:14fb2d0e360d81a024b4ec605f417e030e19b30b2df99bc45648aa227060534e
// module: 536 range:316195..330015
// basis: webpack-id confidence: C
// method: split
// run: ext-agent 2026-11-05T10:20:08.356Z
536: (t2, e2, r2) => {
    "use strict";
    Object.defineProperty(e2, "__esModule", { value: true }), e2.makeJsonFormat = void 0;
    const n2 = r2(3098), s2 = r2(1498), i2 = r2(9526), o2 = r2(1802), a = r2(1771), u = r2(8803), c = r2(2212), l = r2(1455), m = r2(1455), d = r2(3408), f = r2(2706), p = { ignoreUnknownFields: false }, h = { emitDefaultValues: false, enumAsInteger: false, useProtoFieldName: false, prettySpaces: 0 };
    function g(t3) {
      return t3 ? Object.assign(Object.assign({}, p), t3) : p;
    }
    function A(t3) {
      return t3 ? Object.assign(Object.assign({}, h), t3) : h;
    }
    const _ = /* @__PURE__ */ Symbol(), y = /* @__PURE__ */ Symbol();
    function w(t3) {
      if (null === t3) return "null";
      switch (typeof t3) {
        case "object":
          return Array.isArray(t3) ? "array" : "object";
        case "string":
          return t3.length > 100 ? "string" : `"${t3.split('"').join('\\"')}"`;
        default:
          return String(t3);
      }
    }
    function S(t3, e3, r3, s3, i3) {
      let o3 = r3.localName;
      if (r3.repeated) {
        if ((0, n2.assert)("map" != r3.kind), null === e3) return;
        if (!Array.isArray(e3)) throw new Error(`cannot decode field ${i3.typeName}.${r3.name} from JSON: ${w(e3)}`);
        const a2 = t3[o3];
        for (const t4 of e3) {
          if (null === t4) throw new Error(`cannot decode field ${i3.typeName}.${r3.name} from JSON: ${w(t4)}`);
          switch (r3.kind) {
            case "message":
              a2.push(r3.T.fromJson(t4, s3));
              break;
            case "enum":
              const e4 = E(r3.T, t4, s3.ignoreUnknownFields, true);
              e4 !== y && a2.push(e4);
              break;
            case "scalar":
              try {
                a2.push(B(r3.T, t4, r3.L, true));
              } catch (e5) {
                let n3 = `cannot decode field ${i3.typeName}.${r3.name} from JSON: ${w(t4)}`;
                throw e5 instanceof Error && e5.message.length > 0 && (n3 += `: ${e5.message}`), new Error(n3);
              }
          }
        }
      } else if ("map" == r3.kind) {
        if (null === e3) return;
        if ("object" != typeof e3 || Array.isArray(e3)) throw new Error(`cannot decode field ${i3.typeName}.${r3.name} from JSON: ${w(e3)}`);
        const n3 = t3[o3];
        for (const [t4, o4] of Object.entries(e3)) {
          if (null === o4) throw new Error(`cannot decode field ${i3.typeName}.${r3.name} from JSON: map value null`);
          let a2;
          try {
            a2 = J(r3.K, t4);
          } catch (t5) {
            let n4 = `cannot decode map key for field ${i3.typeName}.${r3.name} from JSON: ${w(e3)}`;
            throw t5 instanceof Error && t5.message.length > 0 && (n4 += `: ${t5.message}`), new Error(n4);
          }
          switch (r3.V.kind) {
            case "message":
              n3[a2] = r3.V.T.fromJson(o4, s3);
              break;
            case "enum":
              const t5 = E(r3.V.T, o4, s3.ignoreUnknownFields, true);
              t5 !== y && (n3[a2] = t5);
              break;
            case "scalar":
              try {
                n3[a2] = B(r3.V.T, o4, d.LongType.BIGINT, true);
              } catch (t6) {
                let n4 = `cannot decode map value for field ${i3.typeName}.${r3.name} from JSON: ${w(e3)}`;
                throw t6 instanceof Error && t6.message.length > 0 && (n4 += `: ${t6.message}`), new Error(n4);
              }
          }
        }
      } else switch (r3.oneof && (t3 = t3[r3.oneof.localName] = { case: o3 }, o3 = "value"), r3.kind) {
        case "message":
          const n3 = r3.T;
          if (null === e3 && "google.protobuf.Value" != n3.typeName) return;
          let a2 = t3[o3];
          (0, f.isMessage)(a2) ? a2.fromJson(e3, s3) : (t3[o3] = a2 = n3.fromJson(e3, s3), n3.fieldWrapper && !r3.oneof && (t3[o3] = n3.fieldWrapper.unwrapField(a2)));
          break;
        case "enum":
          const c2 = E(r3.T, e3, s3.ignoreUnknownFields, false);
          switch (c2) {
            case _:
              (0, u.clearField)(r3, t3);
              break;
            case y:
              break;
            default:
              t3[o3] = c2;
          }
          break;
        case "scalar":
          try {
            const n4 = B(r3.T, e3, r3.L, false);
            if (n4 === _) (0, u.clearField)(r3, t3);
            else t3[o3] = n4;
          } catch (t4) {
            let n4 = `cannot decode field ${i3.typeName}.${r3.name} from JSON: ${w(e3)}`;
            throw t4 instanceof Error && t4.message.length > 0 && (n4 += `: ${t4.message}`), new Error(n4);
          }
      }
    }
    function J(t3, e3) {
      if (t3 === d.ScalarType.BOOL) switch (e3) {
        case "true":
          e3 = true;
          break;
        case "false":
          e3 = false;
      }
      return B(t3, e3, d.LongType.BIGINT, true).toString();
    }
    function B(t3, e3, r3, o3) {
      if (null === e3) return o3 ? (0, l.scalarZeroValue)(t3, r3) : _;
      switch (t3) {
        case d.ScalarType.DOUBLE:
        case d.ScalarType.FLOAT:
          if ("NaN" === e3) return Number.NaN;
          if ("Infinity" === e3) return Number.POSITIVE_INFINITY;
          if ("-Infinity" === e3) return Number.NEGATIVE_INFINITY;
          if ("" === e3) break;
          if ("string" == typeof e3 && e3.trim().length !== e3.length) break;
          if ("string" != typeof e3 && "number" != typeof e3) break;
          const o4 = Number(e3);
          if (Number.isNaN(o4)) break;
          if (!Number.isFinite(o4)) break;
          return t3 == d.ScalarType.FLOAT && (0, n2.assertFloat32)(o4), o4;
        case d.ScalarType.INT32:
        case d.ScalarType.FIXED32:
        case d.ScalarType.SFIXED32:
        case d.ScalarType.SINT32:
        case d.ScalarType.UINT32:
          let a2;
          if ("number" == typeof e3 ? a2 = e3 : "string" == typeof e3 && e3.length > 0 && e3.trim().length === e3.length && (a2 = Number(e3)), void 0 === a2) break;
          return t3 == d.ScalarType.UINT32 || t3 == d.ScalarType.FIXED32 ? (0, n2.assertUInt32)(a2) : (0, n2.assertInt32)(a2), a2;
        case d.ScalarType.INT64:
        case d.ScalarType.SFIXED64:
        case d.ScalarType.SINT64:
          if ("number" != typeof e3 && "string" != typeof e3) break;
          const u2 = s2.protoInt64.parse(e3);
          return r3 ? u2.toString() : u2;
        case d.ScalarType.FIXED64:
        case d.ScalarType.UINT64:
          if ("number" != typeof e3 && "string" != typeof e3) break;
          const c2 = s2.protoInt64.uParse(e3);
          return r3 ? c2.toString() : c2;
        case d.ScalarType.BOOL:
          if ("boolean" != typeof e3) break;
          return e3;
        case d.ScalarType.STRING:
          if ("string" != typeof e3) break;
          try {
            encodeURIComponent(e3);
          } catch (t4) {
            throw new Error("invalid UTF8");
          }
          return e3;
        case d.ScalarType.BYTES:
          if ("" === e3) return new Uint8Array(0);
          if ("string" != typeof e3) break;
          return i2.protoBase64.dec(e3);
      }
      throw new Error();
    }
    function E(t3, e3, r3, n3) {
      if (null === e3) return "google.protobuf.NullValue" == t3.typeName ? 0 : n3 ? t3.values[0].no : _;
      switch (typeof e3) {
        case "number":
          if (Number.isInteger(e3)) return e3;
          break;
        case "string":
          const n4 = t3.findName(e3);
          if (void 0 !== n4) return n4.no;
          if (r3) return y;
      }
      throw new Error(`cannot decode enum ${t3.typeName} from JSON: ${w(e3)}`);
    }
    function I(t3) {
      return !(!t3.repeated && "map" != t3.kind) || !t3.oneof && ("message" != t3.kind && (!t3.opt && !t3.req));
    }
    function C(t3, e3, r3) {
      if ("map" == t3.kind) {
        (0, n2.assert)("object" == typeof e3 && null != e3);
        const s3 = {}, i3 = Object.entries(e3);
        switch (t3.V.kind) {
          case "scalar":
            for (const [e5, r4] of i3) s3[e5.toString()] = k(t3.V.T, r4);
            break;
          case "message":
            for (const [t4, e5] of i3) s3[t4.toString()] = e5.toJson(r3);
            break;
          case "enum":
            const e4 = t3.V.T;
            for (const [t4, n3] of i3) s3[t4.toString()] = b(e4, n3, r3.enumAsInteger);
        }
        return r3.emitDefaultValues || i3.length > 0 ? s3 : void 0;
      }
      if (t3.repeated) {
        (0, n2.assert)(Array.isArray(e3));
        const s3 = [];
        switch (t3.kind) {
          case "scalar":
            for (let r4 = 0; r4 < e3.length; r4++) s3.push(k(t3.T, e3[r4]));
            break;
          case "enum":
            for (let n3 = 0; n3 < e3.length; n3++) s3.push(b(t3.T, e3[n3], r3.enumAsInteger));
            break;
          case "message":
            for (let t4 = 0; t4 < e3.length; t4++) s3.push(e3[t4].toJson(r3));
        }
        return r3.emitDefaultValues || s3.length > 0 ? s3 : void 0;
      }
      switch (t3.kind) {
        case "scalar":
          return k(t3.T, e3);
        case "enum":
          return b(t3.T, e3, r3.enumAsInteger);
        case "message":
          return (0, c.wrapField)(t3.T, e3).toJson(r3);
      }
    }
    function b(t3, e3, r3) {
      var s3;
      if ((0, n2.assert)("number" == typeof e3), "google.protobuf.NullValue" == t3.typeName) return null;
      if (r3) return e3;
      const i3 = t3.findNumber(e3);
      return null !== (s3 = null == i3 ? void 0 : i3.name) && void 0 !== s3 ? s3 : e3;
    }
    function k(t3, e3) {
      switch (t3) {
        case d.ScalarType.INT32:
        case d.ScalarType.SFIXED32:
        case d.ScalarType.SINT32:
        case d.ScalarType.FIXED32:
        case d.ScalarType.UINT32:
          return (0, n2.assert)("number" == typeof e3), e3;
        case d.ScalarType.FLOAT:
        case d.ScalarType.DOUBLE:
          return (0, n2.assert)("number" == typeof e3), Number.isNaN(e3) ? "NaN" : e3 === Number.POSITIVE_INFINITY ? "Infinity" : e3 === Number.NEGATIVE_INFINITY ? "-Infinity" : e3;
        case d.ScalarType.STRING:
          return (0, n2.assert)("string" == typeof e3), e3;
        case d.ScalarType.BOOL:
          return (0, n2.assert)("boolean" == typeof e3), e3;
        case d.ScalarType.UINT64:
        case d.ScalarType.FIXED64:
        case d.ScalarType.INT64:
        case d.ScalarType.SFIXED64:
        case d.ScalarType.SINT64:
          return (0, n2.assert)("bigint" == typeof e3 || "string" == typeof e3 || "number" == typeof e3), e3.toString();
        case d.ScalarType.BYTES:
          return (0, n2.assert)(e3 instanceof Uint8Array), i2.protoBase64.enc(e3);
      }
    }
    e2.makeJsonFormat = function() {
      return { makeReadOptions: g, makeWriteOptions: A, readMessage(t3, e3, r3, n3) {
        if (null == e3 || Array.isArray(e3) || "object" != typeof e3) throw new Error(`cannot decode message ${t3.typeName} from JSON: ${w(e3)}`);
        n3 = null != n3 ? n3 : new t3();
        const s3 = /* @__PURE__ */ new Map(), i3 = r3.typeRegistry;
        for (const [u2, c2] of Object.entries(e3)) {
          const e4 = t3.fields.findJsonName(u2);
          if (e4) {
            if (e4.oneof) {
              if (null === c2 && "scalar" == e4.kind) continue;
              const r4 = s3.get(e4.oneof);
              if (void 0 !== r4) throw new Error(`cannot decode message ${t3.typeName} from JSON: multiple keys for oneof "${e4.oneof.name}" present: "${r4}", "${u2}"`);
              s3.set(e4.oneof, u2);
            }
            S(n3, c2, e4, r3, t3);
          } else {
            let e5 = false;
            if ((null == i3 ? void 0 : i3.findExtension) && u2.startsWith("[") && u2.endsWith("]")) {
              const s4 = i3.findExtension(u2.substring(1, u2.length - 1));
              if (s4 && s4.extendee.typeName == t3.typeName) {
                e5 = true;
                const [t4, i4] = (0, o2.createExtensionContainer)(s4);
                S(t4, c2, s4.field, r3, s4), (0, a.setExtension)(n3, s4, i4(), r3);
              }
            }
            if (!e5 && !r3.ignoreUnknownFields) throw new Error(`cannot decode message ${t3.typeName} from JSON: key "${u2}" is unknown`);
          }
        }
        return n3;
      }, writeMessage(t3, e3) {
        const r3 = t3.getType(), n3 = {};
        let s3;
        try {
          for (s3 of r3.fields.byNumber()) {
            if (!(0, u.isFieldSet)(s3, t3)) {
              if (s3.req) throw "required field not set";
              if (!e3.emitDefaultValues) continue;
              if (!I(s3)) continue;
            }
            const r4 = C(s3, s3.oneof ? t3[s3.oneof.localName].value : t3[s3.localName], e3);
            void 0 !== r4 && (n3[e3.useProtoFieldName ? s3.name : s3.jsonName] = r4);
          }
          const i3 = e3.typeRegistry;
          if (null == i3 ? void 0 : i3.findExtensionFor) for (const s4 of r3.runtime.bin.listUnknownFields(t3)) {
            const o3 = i3.findExtensionFor(r3.typeName, s4.no);
            if (o3 && (0, a.hasExtension)(t3, o3)) {
              const r4 = (0, a.getExtension)(t3, o3, e3), s5 = C(o3.field, r4, e3);
              void 0 !== s5 && (n3[o3.field.jsonName] = s5);
            }
          }
        } catch (t4) {
          const e4 = s3 ? `cannot encode field ${r3.typeName}.${s3.name} to JSON` : `cannot encode message ${r3.typeName} to JSON`, n4 = t4 instanceof Error ? t4.message : String(t4);
          throw new Error(e4 + (n4.length > 0 ? `: ${n4}` : ""));
        }
        return n3;
      }, readScalar: (t3, e3, r3) => B(t3, e3, null != r3 ? r3 : d.LongType.BIGINT, true), writeScalar(t3, e3, r3) {
        if (void 0 !== e3) return r3 || (0, m.isScalarZeroValue)(t3, e3) ? k(t3, e3) : void 0;
      }, debug: w };
    };
  }
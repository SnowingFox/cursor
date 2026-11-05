// @recovered-by cursor-re
// artifact: app/extensions/cursor-mcp/dist/main.js sha256:097aeef3cf1f927e9bc6c0d23972c432bbcae8dc0ea353a5b6308dd59620fb49
// module: 536 range:30312..44136
// basis: webpack-id confidence: C
// method: split
// run: ext-p0 2026-11-05T10:07:22.069Z
536: (e2, t2, r2) => {
    "use strict";
    Object.defineProperty(t2, "__esModule", { value: true }), t2.makeJsonFormat = void 0;
    const n2 = r2(3098), o2 = r2(1498), s2 = r2(9526), i2 = r2(1802), a2 = r2(7009), c = r2(8803), u = r2(2212), l = r2(3836), d = r2(3836), p = r2(3408), f = r2(2706), h = { ignoreUnknownFields: false }, m = { emitDefaultValues: false, enumAsInteger: false, useProtoFieldName: false, prettySpaces: 0 };
    function g(e3) {
      return e3 ? Object.assign(Object.assign({}, h), e3) : h;
    }
    function y(e3) {
      return e3 ? Object.assign(Object.assign({}, m), e3) : m;
    }
    const _ = /* @__PURE__ */ Symbol(), v = /* @__PURE__ */ Symbol();
    function w(e3) {
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
    function b(e3, t3, r3, o3, s3) {
      let i3 = r3.localName;
      if (r3.repeated) {
        if ((0, n2.assert)("map" != r3.kind), null === t3) return;
        if (!Array.isArray(t3)) throw new Error(`cannot decode field ${s3.typeName}.${r3.name} from JSON: ${w(t3)}`);
        const a3 = e3[i3];
        for (const e4 of t3) {
          if (null === e4) throw new Error(`cannot decode field ${s3.typeName}.${r3.name} from JSON: ${w(e4)}`);
          switch (r3.kind) {
            case "message":
              a3.push(r3.T.fromJson(e4, o3));
              break;
            case "enum":
              const t4 = E(r3.T, e4, o3.ignoreUnknownFields, true);
              t4 !== v && a3.push(t4);
              break;
            case "scalar":
              try {
                a3.push(k(r3.T, e4, r3.L, true));
              } catch (t5) {
                let n3 = `cannot decode field ${s3.typeName}.${r3.name} from JSON: ${w(e4)}`;
                throw t5 instanceof Error && t5.message.length > 0 && (n3 += `: ${t5.message}`), new Error(n3);
              }
          }
        }
      } else if ("map" == r3.kind) {
        if (null === t3) return;
        if ("object" != typeof t3 || Array.isArray(t3)) throw new Error(`cannot decode field ${s3.typeName}.${r3.name} from JSON: ${w(t3)}`);
        const n3 = e3[i3];
        for (const [e4, i4] of Object.entries(t3)) {
          if (null === i4) throw new Error(`cannot decode field ${s3.typeName}.${r3.name} from JSON: map value null`);
          let a3;
          try {
            a3 = S(r3.K, e4);
          } catch (e5) {
            let n4 = `cannot decode map key for field ${s3.typeName}.${r3.name} from JSON: ${w(t3)}`;
            throw e5 instanceof Error && e5.message.length > 0 && (n4 += `: ${e5.message}`), new Error(n4);
          }
          switch (r3.V.kind) {
            case "message":
              n3[a3] = r3.V.T.fromJson(i4, o3);
              break;
            case "enum":
              const e5 = E(r3.V.T, i4, o3.ignoreUnknownFields, true);
              e5 !== v && (n3[a3] = e5);
              break;
            case "scalar":
              try {
                n3[a3] = k(r3.V.T, i4, p.LongType.BIGINT, true);
              } catch (e6) {
                let n4 = `cannot decode map value for field ${s3.typeName}.${r3.name} from JSON: ${w(t3)}`;
                throw e6 instanceof Error && e6.message.length > 0 && (n4 += `: ${e6.message}`), new Error(n4);
              }
          }
        }
      } else switch (r3.oneof && (e3 = e3[r3.oneof.localName] = { case: i3 }, i3 = "value"), r3.kind) {
        case "message":
          const n3 = r3.T;
          if (null === t3 && "google.protobuf.Value" != n3.typeName) return;
          let a3 = e3[i3];
          (0, f.isMessage)(a3) ? a3.fromJson(t3, o3) : (e3[i3] = a3 = n3.fromJson(t3, o3), n3.fieldWrapper && !r3.oneof && (e3[i3] = n3.fieldWrapper.unwrapField(a3)));
          break;
        case "enum":
          const u2 = E(r3.T, t3, o3.ignoreUnknownFields, false);
          switch (u2) {
            case _:
              (0, c.clearField)(r3, e3);
              break;
            case v:
              break;
            default:
              e3[i3] = u2;
          }
          break;
        case "scalar":
          try {
            const n4 = k(r3.T, t3, r3.L, false);
            if (n4 === _) (0, c.clearField)(r3, e3);
            else e3[i3] = n4;
          } catch (e4) {
            let n4 = `cannot decode field ${s3.typeName}.${r3.name} from JSON: ${w(t3)}`;
            throw e4 instanceof Error && e4.message.length > 0 && (n4 += `: ${e4.message}`), new Error(n4);
          }
      }
    }
    function S(e3, t3) {
      if (e3 === p.ScalarType.BOOL) switch (t3) {
        case "true":
          t3 = true;
          break;
        case "false":
          t3 = false;
      }
      return k(e3, t3, p.LongType.BIGINT, true).toString();
    }
    function k(e3, t3, r3, i3) {
      if (null === t3) return i3 ? (0, l.scalarZeroValue)(e3, r3) : _;
      switch (e3) {
        case p.ScalarType.DOUBLE:
        case p.ScalarType.FLOAT:
          if ("NaN" === t3) return Number.NaN;
          if ("Infinity" === t3) return Number.POSITIVE_INFINITY;
          if ("-Infinity" === t3) return Number.NEGATIVE_INFINITY;
          if ("" === t3) break;
          if ("string" == typeof t3 && t3.trim().length !== t3.length) break;
          if ("string" != typeof t3 && "number" != typeof t3) break;
          const i4 = Number(t3);
          if (Number.isNaN(i4)) break;
          if (!Number.isFinite(i4)) break;
          return e3 == p.ScalarType.FLOAT && (0, n2.assertFloat32)(i4), i4;
        case p.ScalarType.INT32:
        case p.ScalarType.FIXED32:
        case p.ScalarType.SFIXED32:
        case p.ScalarType.SINT32:
        case p.ScalarType.UINT32:
          let a3;
          if ("number" == typeof t3 ? a3 = t3 : "string" == typeof t3 && t3.length > 0 && t3.trim().length === t3.length && (a3 = Number(t3)), void 0 === a3) break;
          return e3 == p.ScalarType.UINT32 || e3 == p.ScalarType.FIXED32 ? (0, n2.assertUInt32)(a3) : (0, n2.assertInt32)(a3), a3;
        case p.ScalarType.INT64:
        case p.ScalarType.SFIXED64:
        case p.ScalarType.SINT64:
          if ("number" != typeof t3 && "string" != typeof t3) break;
          const c2 = o2.protoInt64.parse(t3);
          return r3 ? c2.toString() : c2;
        case p.ScalarType.FIXED64:
        case p.ScalarType.UINT64:
          if ("number" != typeof t3 && "string" != typeof t3) break;
          const u2 = o2.protoInt64.uParse(t3);
          return r3 ? u2.toString() : u2;
        case p.ScalarType.BOOL:
          if ("boolean" != typeof t3) break;
          return t3;
        case p.ScalarType.STRING:
          if ("string" != typeof t3) break;
          try {
            encodeURIComponent(t3);
          } catch (e4) {
            throw new Error("invalid UTF8");
          }
          return t3;
        case p.ScalarType.BYTES:
          if ("" === t3) return new Uint8Array(0);
          if ("string" != typeof t3) break;
          return s2.protoBase64.dec(t3);
      }
      throw new Error();
    }
    function E(e3, t3, r3, n3) {
      if (null === t3) return "google.protobuf.NullValue" == e3.typeName ? 0 : n3 ? e3.values[0].no : _;
      switch (typeof t3) {
        case "number":
          if (Number.isInteger(t3)) return t3;
          break;
        case "string":
          const n4 = e3.findName(t3);
          if (void 0 !== n4) return n4.no;
          if (r3) return v;
      }
      throw new Error(`cannot decode enum ${e3.typeName} from JSON: ${w(t3)}`);
    }
    function x(e3) {
      return !(!e3.repeated && "map" != e3.kind) || !e3.oneof && ("message" != e3.kind && (!e3.opt && !e3.req));
    }
    function T(e3, t3, r3) {
      if ("map" == e3.kind) {
        (0, n2.assert)("object" == typeof t3 && null != t3);
        const o3 = {}, s3 = Object.entries(t3);
        switch (e3.V.kind) {
          case "scalar":
            for (const [t5, r4] of s3) o3[t5.toString()] = P(e3.V.T, r4);
            break;
          case "message":
            for (const [e4, t5] of s3) o3[e4.toString()] = t5.toJson(r3);
            break;
          case "enum":
            const t4 = e3.V.T;
            for (const [e4, n3] of s3) o3[e4.toString()] = O(t4, n3, r3.enumAsInteger);
        }
        return r3.emitDefaultValues || s3.length > 0 ? o3 : void 0;
      }
      if (e3.repeated) {
        (0, n2.assert)(Array.isArray(t3));
        const o3 = [];
        switch (e3.kind) {
          case "scalar":
            for (let r4 = 0; r4 < t3.length; r4++) o3.push(P(e3.T, t3[r4]));
            break;
          case "enum":
            for (let n3 = 0; n3 < t3.length; n3++) o3.push(O(e3.T, t3[n3], r3.enumAsInteger));
            break;
          case "message":
            for (let e4 = 0; e4 < t3.length; e4++) o3.push(t3[e4].toJson(r3));
        }
        return r3.emitDefaultValues || o3.length > 0 ? o3 : void 0;
      }
      switch (e3.kind) {
        case "scalar":
          return P(e3.T, t3);
        case "enum":
          return O(e3.T, t3, r3.enumAsInteger);
        case "message":
          return (0, u.wrapField)(e3.T, t3).toJson(r3);
      }
    }
    function O(e3, t3, r3) {
      var o3;
      if ((0, n2.assert)("number" == typeof t3), "google.protobuf.NullValue" == e3.typeName) return null;
      if (r3) return t3;
      const s3 = e3.findNumber(t3);
      return null !== (o3 = null == s3 ? void 0 : s3.name) && void 0 !== o3 ? o3 : t3;
    }
    function P(e3, t3) {
      switch (e3) {
        case p.ScalarType.INT32:
        case p.ScalarType.SFIXED32:
        case p.ScalarType.SINT32:
        case p.ScalarType.FIXED32:
        case p.ScalarType.UINT32:
          return (0, n2.assert)("number" == typeof t3), t3;
        case p.ScalarType.FLOAT:
        case p.ScalarType.DOUBLE:
          return (0, n2.assert)("number" == typeof t3), Number.isNaN(t3) ? "NaN" : t3 === Number.POSITIVE_INFINITY ? "Infinity" : t3 === Number.NEGATIVE_INFINITY ? "-Infinity" : t3;
        case p.ScalarType.STRING:
          return (0, n2.assert)("string" == typeof t3), t3;
        case p.ScalarType.BOOL:
          return (0, n2.assert)("boolean" == typeof t3), t3;
        case p.ScalarType.UINT64:
        case p.ScalarType.FIXED64:
        case p.ScalarType.INT64:
        case p.ScalarType.SFIXED64:
        case p.ScalarType.SINT64:
          return (0, n2.assert)("bigint" == typeof t3 || "string" == typeof t3 || "number" == typeof t3), t3.toString();
        case p.ScalarType.BYTES:
          return (0, n2.assert)(t3 instanceof Uint8Array), s2.protoBase64.enc(t3);
      }
    }
    t2.makeJsonFormat = function() {
      return { makeReadOptions: g, makeWriteOptions: y, readMessage(e3, t3, r3, n3) {
        if (null == t3 || Array.isArray(t3) || "object" != typeof t3) throw new Error(`cannot decode message ${e3.typeName} from JSON: ${w(t3)}`);
        n3 = null != n3 ? n3 : new e3();
        const o3 = /* @__PURE__ */ new Map(), s3 = r3.typeRegistry;
        for (const [c2, u2] of Object.entries(t3)) {
          const t4 = e3.fields.findJsonName(c2);
          if (t4) {
            if (t4.oneof) {
              if (null === u2 && "scalar" == t4.kind) continue;
              const r4 = o3.get(t4.oneof);
              if (void 0 !== r4) throw new Error(`cannot decode message ${e3.typeName} from JSON: multiple keys for oneof "${t4.oneof.name}" present: "${r4}", "${c2}"`);
              o3.set(t4.oneof, c2);
            }
            b(n3, u2, t4, r3, e3);
          } else {
            let t5 = false;
            if ((null == s3 ? void 0 : s3.findExtension) && c2.startsWith("[") && c2.endsWith("]")) {
              const o4 = s3.findExtension(c2.substring(1, c2.length - 1));
              if (o4 && o4.extendee.typeName == e3.typeName) {
                t5 = true;
                const [e4, s4] = (0, i2.createExtensionContainer)(o4);
                b(e4, u2, o4.field, r3, o4), (0, a2.setExtension)(n3, o4, s4(), r3);
              }
            }
            if (!t5 && !r3.ignoreUnknownFields) throw new Error(`cannot decode message ${e3.typeName} from JSON: key "${c2}" is unknown`);
          }
        }
        return n3;
      }, writeMessage(e3, t3) {
        const r3 = e3.getType(), n3 = {};
        let o3;
        try {
          for (o3 of r3.fields.byNumber()) {
            if (!(0, c.isFieldSet)(o3, e3)) {
              if (o3.req) throw "required field not set";
              if (!t3.emitDefaultValues) continue;
              if (!x(o3)) continue;
            }
            const r4 = T(o3, o3.oneof ? e3[o3.oneof.localName].value : e3[o3.localName], t3);
            void 0 !== r4 && (n3[t3.useProtoFieldName ? o3.name : o3.jsonName] = r4);
          }
          const s3 = t3.typeRegistry;
          if (null == s3 ? void 0 : s3.findExtensionFor) for (const o4 of r3.runtime.bin.listUnknownFields(e3)) {
            const i3 = s3.findExtensionFor(r3.typeName, o4.no);
            if (i3 && (0, a2.hasExtension)(e3, i3)) {
              const r4 = (0, a2.getExtension)(e3, i3, t3), o5 = T(i3.field, r4, t3);
              void 0 !== o5 && (n3[i3.field.jsonName] = o5);
            }
          }
        } catch (e4) {
          const t4 = o3 ? `cannot encode field ${r3.typeName}.${o3.name} to JSON` : `cannot encode message ${r3.typeName} to JSON`, n4 = e4 instanceof Error ? e4.message : String(e4);
          throw new Error(t4 + (n4.length > 0 ? `: ${n4}` : ""));
        }
        return n3;
      }, readScalar: (e3, t3, r3) => k(e3, t3, null != r3 ? r3 : p.LongType.BIGINT, true), writeScalar(e3, t3, r3) {
        if (void 0 !== t3) return r3 || (0, d.isScalarZeroValue)(e3, t3) ? P(e3, t3) : void 0;
      }, debug: w };
    };
  }
// @recovered-by cursor-re
// artifact: app/extensions/cursor-agent-exec/dist/main.js sha256:8d20326bd54948353115113c2d4716cf781d593610fd4d8acebcc37a3170da8e
// module: 20536 range:1002485..1016277
// basis: webpack-id confidence: C
// method: split
// run: ext-p0 2026-11-05T10:07:22.069Z
20536: (e, t, r) => {
    "use strict";
    Object.defineProperty(t, "__esModule", { value: true }), t.makeJsonFormat = void 0;
    const n = r(43098), s = r(11498), o = r(19526), i = r(1802), a = r(11771), c = r(88803), l = r(42212), u = r(31455), d = r(31455), p = r(3408), m = r(62706), h = { ignoreUnknownFields: false }, f = { emitDefaultValues: false, enumAsInteger: false, useProtoFieldName: false, prettySpaces: 0 };
    function g(e2) {
      return e2 ? Object.assign(Object.assign({}, h), e2) : h;
    }
    function y(e2) {
      return e2 ? Object.assign(Object.assign({}, f), e2) : f;
    }
    const w = /* @__PURE__ */ Symbol(), v = /* @__PURE__ */ Symbol();
    function _(e2) {
      if (null === e2) return "null";
      switch (typeof e2) {
        case "object":
          return Array.isArray(e2) ? "array" : "object";
        case "string":
          return e2.length > 100 ? "string" : `"${e2.split('"').join('\\"')}"`;
        default:
          return String(e2);
      }
    }
    function b(e2, t2, r2, s2, o2) {
      let i2 = r2.localName;
      if (r2.repeated) {
        if ((0, n.assert)("map" != r2.kind), null === t2) return;
        if (!Array.isArray(t2)) throw new Error(`cannot decode field ${o2.typeName}.${r2.name} from JSON: ${_(t2)}`);
        const a2 = e2[i2];
        for (const e3 of t2) {
          if (null === e3) throw new Error(`cannot decode field ${o2.typeName}.${r2.name} from JSON: ${_(e3)}`);
          switch (r2.kind) {
            case "message":
              a2.push(r2.T.fromJson(e3, s2));
              break;
            case "enum":
              const t3 = x(r2.T, e3, s2.ignoreUnknownFields, true);
              t3 !== v && a2.push(t3);
              break;
            case "scalar":
              try {
                a2.push(k(r2.T, e3, r2.L, true));
              } catch (t4) {
                let n2 = `cannot decode field ${o2.typeName}.${r2.name} from JSON: ${_(e3)}`;
                throw t4 instanceof Error && t4.message.length > 0 && (n2 += `: ${t4.message}`), new Error(n2);
              }
          }
        }
      } else if ("map" == r2.kind) {
        if (null === t2) return;
        if ("object" != typeof t2 || Array.isArray(t2)) throw new Error(`cannot decode field ${o2.typeName}.${r2.name} from JSON: ${_(t2)}`);
        const n2 = e2[i2];
        for (const [e3, i3] of Object.entries(t2)) {
          if (null === i3) throw new Error(`cannot decode field ${o2.typeName}.${r2.name} from JSON: map value null`);
          let a2;
          try {
            a2 = S(r2.K, e3);
          } catch (e4) {
            let n3 = `cannot decode map key for field ${o2.typeName}.${r2.name} from JSON: ${_(t2)}`;
            throw e4 instanceof Error && e4.message.length > 0 && (n3 += `: ${e4.message}`), new Error(n3);
          }
          switch (r2.V.kind) {
            case "message":
              n2[a2] = r2.V.T.fromJson(i3, s2);
              break;
            case "enum":
              const e4 = x(r2.V.T, i3, s2.ignoreUnknownFields, true);
              e4 !== v && (n2[a2] = e4);
              break;
            case "scalar":
              try {
                n2[a2] = k(r2.V.T, i3, p.LongType.BIGINT, true);
              } catch (e5) {
                let n3 = `cannot decode map value for field ${o2.typeName}.${r2.name} from JSON: ${_(t2)}`;
                throw e5 instanceof Error && e5.message.length > 0 && (n3 += `: ${e5.message}`), new Error(n3);
              }
          }
        }
      } else switch (r2.oneof && (e2 = e2[r2.oneof.localName] = { case: i2 }, i2 = "value"), r2.kind) {
        case "message":
          const n2 = r2.T;
          if (null === t2 && "google.protobuf.Value" != n2.typeName) return;
          let a2 = e2[i2];
          (0, m.isMessage)(a2) ? a2.fromJson(t2, s2) : (e2[i2] = a2 = n2.fromJson(t2, s2), n2.fieldWrapper && !r2.oneof && (e2[i2] = n2.fieldWrapper.unwrapField(a2)));
          break;
        case "enum":
          const l2 = x(r2.T, t2, s2.ignoreUnknownFields, false);
          switch (l2) {
            case w:
              (0, c.clearField)(r2, e2);
              break;
            case v:
              break;
            default:
              e2[i2] = l2;
          }
          break;
        case "scalar":
          try {
            const n3 = k(r2.T, t2, r2.L, false);
            if (n3 === w) (0, c.clearField)(r2, e2);
            else e2[i2] = n3;
          } catch (e3) {
            let n3 = `cannot decode field ${o2.typeName}.${r2.name} from JSON: ${_(t2)}`;
            throw e3 instanceof Error && e3.message.length > 0 && (n3 += `: ${e3.message}`), new Error(n3);
          }
      }
    }
    function S(e2, t2) {
      if (e2 === p.ScalarType.BOOL) switch (t2) {
        case "true":
          t2 = true;
          break;
        case "false":
          t2 = false;
      }
      return k(e2, t2, p.LongType.BIGINT, true).toString();
    }
    function k(e2, t2, r2, i2) {
      if (null === t2) return i2 ? (0, u.scalarZeroValue)(e2, r2) : w;
      switch (e2) {
        case p.ScalarType.DOUBLE:
        case p.ScalarType.FLOAT:
          if ("NaN" === t2) return Number.NaN;
          if ("Infinity" === t2) return Number.POSITIVE_INFINITY;
          if ("-Infinity" === t2) return Number.NEGATIVE_INFINITY;
          if ("" === t2) break;
          if ("string" == typeof t2 && t2.trim().length !== t2.length) break;
          if ("string" != typeof t2 && "number" != typeof t2) break;
          const i3 = Number(t2);
          if (Number.isNaN(i3)) break;
          if (!Number.isFinite(i3)) break;
          return e2 == p.ScalarType.FLOAT && (0, n.assertFloat32)(i3), i3;
        case p.ScalarType.INT32:
        case p.ScalarType.FIXED32:
        case p.ScalarType.SFIXED32:
        case p.ScalarType.SINT32:
        case p.ScalarType.UINT32:
          let a2;
          if ("number" == typeof t2 ? a2 = t2 : "string" == typeof t2 && t2.length > 0 && t2.trim().length === t2.length && (a2 = Number(t2)), void 0 === a2) break;
          return e2 == p.ScalarType.UINT32 || e2 == p.ScalarType.FIXED32 ? (0, n.assertUInt32)(a2) : (0, n.assertInt32)(a2), a2;
        case p.ScalarType.INT64:
        case p.ScalarType.SFIXED64:
        case p.ScalarType.SINT64:
          if ("number" != typeof t2 && "string" != typeof t2) break;
          const c2 = s.protoInt64.parse(t2);
          return r2 ? c2.toString() : c2;
        case p.ScalarType.FIXED64:
        case p.ScalarType.UINT64:
          if ("number" != typeof t2 && "string" != typeof t2) break;
          const l2 = s.protoInt64.uParse(t2);
          return r2 ? l2.toString() : l2;
        case p.ScalarType.BOOL:
          if ("boolean" != typeof t2) break;
          return t2;
        case p.ScalarType.STRING:
          if ("string" != typeof t2) break;
          try {
            encodeURIComponent(t2);
          } catch (e3) {
            throw new Error("invalid UTF8");
          }
          return t2;
        case p.ScalarType.BYTES:
          if ("" === t2) return new Uint8Array(0);
          if ("string" != typeof t2) break;
          return o.protoBase64.dec(t2);
      }
      throw new Error();
    }
    function x(e2, t2, r2, n2) {
      if (null === t2) return "google.protobuf.NullValue" == e2.typeName ? 0 : n2 ? e2.values[0].no : w;
      switch (typeof t2) {
        case "number":
          if (Number.isInteger(t2)) return t2;
          break;
        case "string":
          const n3 = e2.findName(t2);
          if (void 0 !== n3) return n3.no;
          if (r2) return v;
      }
      throw new Error(`cannot decode enum ${e2.typeName} from JSON: ${_(t2)}`);
    }
    function E(e2) {
      return !(!e2.repeated && "map" != e2.kind) || !e2.oneof && ("message" != e2.kind && (!e2.opt && !e2.req));
    }
    function I(e2, t2, r2) {
      if ("map" == e2.kind) {
        (0, n.assert)("object" == typeof t2 && null != t2);
        const s2 = {}, o2 = Object.entries(t2);
        switch (e2.V.kind) {
          case "scalar":
            for (const [t4, r3] of o2) s2[t4.toString()] = C(e2.V.T, r3);
            break;
          case "message":
            for (const [e3, t4] of o2) s2[e3.toString()] = t4.toJson(r2);
            break;
          case "enum":
            const t3 = e2.V.T;
            for (const [e3, n2] of o2) s2[e3.toString()] = T(t3, n2, r2.enumAsInteger);
        }
        return r2.emitDefaultValues || o2.length > 0 ? s2 : void 0;
      }
      if (e2.repeated) {
        (0, n.assert)(Array.isArray(t2));
        const s2 = [];
        switch (e2.kind) {
          case "scalar":
            for (let r3 = 0; r3 < t2.length; r3++) s2.push(C(e2.T, t2[r3]));
            break;
          case "enum":
            for (let n2 = 0; n2 < t2.length; n2++) s2.push(T(e2.T, t2[n2], r2.enumAsInteger));
            break;
          case "message":
            for (let e3 = 0; e3 < t2.length; e3++) s2.push(t2[e3].toJson(r2));
        }
        return r2.emitDefaultValues || s2.length > 0 ? s2 : void 0;
      }
      switch (e2.kind) {
        case "scalar":
          return C(e2.T, t2);
        case "enum":
          return T(e2.T, t2, r2.enumAsInteger);
        case "message":
          return (0, l.wrapField)(e2.T, t2).toJson(r2);
      }
    }
    function T(e2, t2, r2) {
      var s2;
      if ((0, n.assert)("number" == typeof t2), "google.protobuf.NullValue" == e2.typeName) return null;
      if (r2) return t2;
      const o2 = e2.findNumber(t2);
      return null !== (s2 = null == o2 ? void 0 : o2.name) && void 0 !== s2 ? s2 : t2;
    }
    function C(e2, t2) {
      switch (e2) {
        case p.ScalarType.INT32:
        case p.ScalarType.SFIXED32:
        case p.ScalarType.SINT32:
        case p.ScalarType.FIXED32:
        case p.ScalarType.UINT32:
          return (0, n.assert)("number" == typeof t2), t2;
        case p.ScalarType.FLOAT:
        case p.ScalarType.DOUBLE:
          return (0, n.assert)("number" == typeof t2), Number.isNaN(t2) ? "NaN" : t2 === Number.POSITIVE_INFINITY ? "Infinity" : t2 === Number.NEGATIVE_INFINITY ? "-Infinity" : t2;
        case p.ScalarType.STRING:
          return (0, n.assert)("string" == typeof t2), t2;
        case p.ScalarType.BOOL:
          return (0, n.assert)("boolean" == typeof t2), t2;
        case p.ScalarType.UINT64:
        case p.ScalarType.FIXED64:
        case p.ScalarType.INT64:
        case p.ScalarType.SFIXED64:
        case p.ScalarType.SINT64:
          return (0, n.assert)("bigint" == typeof t2 || "string" == typeof t2 || "number" == typeof t2), t2.toString();
        case p.ScalarType.BYTES:
          return (0, n.assert)(t2 instanceof Uint8Array), o.protoBase64.enc(t2);
      }
    }
    t.makeJsonFormat = function() {
      return { makeReadOptions: g, makeWriteOptions: y, readMessage(e2, t2, r2, n2) {
        if (null == t2 || Array.isArray(t2) || "object" != typeof t2) throw new Error(`cannot decode message ${e2.typeName} from JSON: ${_(t2)}`);
        n2 = null != n2 ? n2 : new e2();
        const s2 = /* @__PURE__ */ new Map(), o2 = r2.typeRegistry;
        for (const [c2, l2] of Object.entries(t2)) {
          const t3 = e2.fields.findJsonName(c2);
          if (t3) {
            if (t3.oneof) {
              if (null === l2 && "scalar" == t3.kind) continue;
              const r3 = s2.get(t3.oneof);
              if (void 0 !== r3) throw new Error(`cannot decode message ${e2.typeName} from JSON: multiple keys for oneof "${t3.oneof.name}" present: "${r3}", "${c2}"`);
              s2.set(t3.oneof, c2);
            }
            b(n2, l2, t3, r2, e2);
          } else {
            let t4 = false;
            if ((null == o2 ? void 0 : o2.findExtension) && c2.startsWith("[") && c2.endsWith("]")) {
              const s3 = o2.findExtension(c2.substring(1, c2.length - 1));
              if (s3 && s3.extendee.typeName == e2.typeName) {
                t4 = true;
                const [e3, o3] = (0, i.createExtensionContainer)(s3);
                b(e3, l2, s3.field, r2, s3), (0, a.setExtension)(n2, s3, o3(), r2);
              }
            }
            if (!t4 && !r2.ignoreUnknownFields) throw new Error(`cannot decode message ${e2.typeName} from JSON: key "${c2}" is unknown`);
          }
        }
        return n2;
      }, writeMessage(e2, t2) {
        const r2 = e2.getType(), n2 = {};
        let s2;
        try {
          for (s2 of r2.fields.byNumber()) {
            if (!(0, c.isFieldSet)(s2, e2)) {
              if (s2.req) throw "required field not set";
              if (!t2.emitDefaultValues) continue;
              if (!E(s2)) continue;
            }
            const r3 = I(s2, s2.oneof ? e2[s2.oneof.localName].value : e2[s2.localName], t2);
            void 0 !== r3 && (n2[t2.useProtoFieldName ? s2.name : s2.jsonName] = r3);
          }
          const o2 = t2.typeRegistry;
          if (null == o2 ? void 0 : o2.findExtensionFor) for (const s3 of r2.runtime.bin.listUnknownFields(e2)) {
            const i2 = o2.findExtensionFor(r2.typeName, s3.no);
            if (i2 && (0, a.hasExtension)(e2, i2)) {
              const r3 = (0, a.getExtension)(e2, i2, t2), s4 = I(i2.field, r3, t2);
              void 0 !== s4 && (n2[i2.field.jsonName] = s4);
            }
          }
        } catch (e3) {
          const t3 = s2 ? `cannot encode field ${r2.typeName}.${s2.name} to JSON` : `cannot encode message ${r2.typeName} to JSON`, n3 = e3 instanceof Error ? e3.message : String(e3);
          throw new Error(t3 + (n3.length > 0 ? `: ${n3}` : ""));
        }
        return n2;
      }, readScalar: (e2, t2, r2) => k(e2, t2, null != r2 ? r2 : p.LongType.BIGINT, true), writeScalar(e2, t2, r2) {
        if (void 0 !== t2) return r2 || (0, d.isScalarZeroValue)(e2, t2) ? C(e2, t2) : void 0;
      }, debug: _ };
    };
  }
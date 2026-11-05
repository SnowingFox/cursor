// @recovered-by cursor-re
// artifact: app/extensions/cursor-resolver/dist/main.js sha256:677b774c75dfff0de56084737d26169857daed3731cb62a6702840900f439aed
// module: 536 range:138154..152058
// basis: webpack-id confidence: C
// method: split
// run: ext-p0 2026-11-05T10:07:22.069Z
536: (e2, t2, n2) => {
    Object.defineProperty(t2, "__esModule", { value: true }), t2.makeJsonFormat = void 0;
    const r2 = n2(98), o2 = n2(498), a2 = n2(526), s2 = n2(802), i2 = n2(771), l2 = n2(803), u2 = n2(212), c2 = n2(455), m2 = n2(455), p2 = n2(408), d2 = n2(706), f2 = { ignoreUnknownFields: false }, T2 = { emitDefaultValues: false, enumAsInteger: false, useProtoFieldName: false, prettySpaces: 0 };
    function g2(e3) {
      return e3 ? Object.assign(Object.assign({}, f2), e3) : f2;
    }
    function E2(e3) {
      return e3 ? Object.assign(Object.assign({}, T2), e3) : T2;
    }
    const y2 = /* @__PURE__ */ Symbol(), h2 = /* @__PURE__ */ Symbol();
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
    function _2(e3, t3, n3, o3, a3) {
      let s3 = n3.localName;
      if (n3.repeated) {
        if ((0, r2.assert)("map" != n3.kind), null === t3) return;
        if (!Array.isArray(t3)) throw new Error(`cannot decode field ${a3.typeName}.${n3.name} from JSON: ${N2(t3)}`);
        const i3 = e3[s3];
        for (const e4 of t3) {
          if (null === e4) throw new Error(`cannot decode field ${a3.typeName}.${n3.name} from JSON: ${N2(e4)}`);
          switch (n3.kind) {
            case "message":
              i3.push(n3.T.fromJson(e4, o3));
              break;
            case "enum":
              const t4 = w2(n3.T, e4, o3.ignoreUnknownFields, true);
              t4 !== h2 && i3.push(t4);
              break;
            case "scalar":
              try {
                i3.push(S2(n3.T, e4, n3.L, true));
              } catch (t5) {
                let r3 = `cannot decode field ${a3.typeName}.${n3.name} from JSON: ${N2(e4)}`;
                throw t5 instanceof Error && t5.message.length > 0 && (r3 += `: ${t5.message}`), new Error(r3);
              }
          }
        }
      } else if ("map" == n3.kind) {
        if (null === t3) return;
        if ("object" != typeof t3 || Array.isArray(t3)) throw new Error(`cannot decode field ${a3.typeName}.${n3.name} from JSON: ${N2(t3)}`);
        const r3 = e3[s3];
        for (const [e4, s4] of Object.entries(t3)) {
          if (null === s4) throw new Error(`cannot decode field ${a3.typeName}.${n3.name} from JSON: map value null`);
          let i3;
          try {
            i3 = I2(n3.K, e4);
          } catch (e5) {
            let r4 = `cannot decode map key for field ${a3.typeName}.${n3.name} from JSON: ${N2(t3)}`;
            throw e5 instanceof Error && e5.message.length > 0 && (r4 += `: ${e5.message}`), new Error(r4);
          }
          switch (n3.V.kind) {
            case "message":
              r3[i3] = n3.V.T.fromJson(s4, o3);
              break;
            case "enum":
              const e5 = w2(n3.V.T, s4, o3.ignoreUnknownFields, true);
              e5 !== h2 && (r3[i3] = e5);
              break;
            case "scalar":
              try {
                r3[i3] = S2(n3.V.T, s4, p2.LongType.BIGINT, true);
              } catch (e6) {
                let r4 = `cannot decode map value for field ${a3.typeName}.${n3.name} from JSON: ${N2(t3)}`;
                throw e6 instanceof Error && e6.message.length > 0 && (r4 += `: ${e6.message}`), new Error(r4);
              }
          }
        }
      } else switch (n3.oneof && (e3 = e3[n3.oneof.localName] = { case: s3 }, s3 = "value"), n3.kind) {
        case "message":
          const r3 = n3.T;
          if (null === t3 && "google.protobuf.Value" != r3.typeName) return;
          let i3 = e3[s3];
          (0, d2.isMessage)(i3) ? i3.fromJson(t3, o3) : (e3[s3] = i3 = r3.fromJson(t3, o3), r3.fieldWrapper && !n3.oneof && (e3[s3] = r3.fieldWrapper.unwrapField(i3)));
          break;
        case "enum":
          const u3 = w2(n3.T, t3, o3.ignoreUnknownFields, false);
          switch (u3) {
            case y2:
              (0, l2.clearField)(n3, e3);
              break;
            case h2:
              break;
            default:
              e3[s3] = u3;
          }
          break;
        case "scalar":
          try {
            const r4 = S2(n3.T, t3, n3.L, false);
            if (r4 === y2) (0, l2.clearField)(n3, e3);
            else e3[s3] = r4;
          } catch (e4) {
            let r4 = `cannot decode field ${a3.typeName}.${n3.name} from JSON: ${N2(t3)}`;
            throw e4 instanceof Error && e4.message.length > 0 && (r4 += `: ${e4.message}`), new Error(r4);
          }
      }
    }
    function I2(e3, t3) {
      if (e3 === p2.ScalarType.BOOL) switch (t3) {
        case "true":
          t3 = true;
          break;
        case "false":
          t3 = false;
      }
      return S2(e3, t3, p2.LongType.BIGINT, true).toString();
    }
    function S2(e3, t3, n3, s3) {
      if (null === t3) return s3 ? (0, c2.scalarZeroValue)(e3, n3) : y2;
      switch (e3) {
        case p2.ScalarType.DOUBLE:
        case p2.ScalarType.FLOAT:
          if ("NaN" === t3) return Number.NaN;
          if ("Infinity" === t3) return Number.POSITIVE_INFINITY;
          if ("-Infinity" === t3) return Number.NEGATIVE_INFINITY;
          if ("" === t3) break;
          if ("string" == typeof t3 && t3.trim().length !== t3.length) break;
          if ("string" != typeof t3 && "number" != typeof t3) break;
          const s4 = Number(t3);
          if (Number.isNaN(s4)) break;
          if (!Number.isFinite(s4)) break;
          return e3 == p2.ScalarType.FLOAT && (0, r2.assertFloat32)(s4), s4;
        case p2.ScalarType.INT32:
        case p2.ScalarType.FIXED32:
        case p2.ScalarType.SFIXED32:
        case p2.ScalarType.SINT32:
        case p2.ScalarType.UINT32:
          let i3;
          if ("number" == typeof t3 ? i3 = t3 : "string" == typeof t3 && t3.length > 0 && t3.trim().length === t3.length && (i3 = Number(t3)), void 0 === i3) break;
          return e3 == p2.ScalarType.UINT32 || e3 == p2.ScalarType.FIXED32 ? (0, r2.assertUInt32)(i3) : (0, r2.assertInt32)(i3), i3;
        case p2.ScalarType.INT64:
        case p2.ScalarType.SFIXED64:
        case p2.ScalarType.SINT64:
          if ("number" != typeof t3 && "string" != typeof t3) break;
          const l3 = o2.protoInt64.parse(t3);
          return n3 ? l3.toString() : l3;
        case p2.ScalarType.FIXED64:
        case p2.ScalarType.UINT64:
          if ("number" != typeof t3 && "string" != typeof t3) break;
          const u3 = o2.protoInt64.uParse(t3);
          return n3 ? u3.toString() : u3;
        case p2.ScalarType.BOOL:
          if ("boolean" != typeof t3) break;
          return t3;
        case p2.ScalarType.STRING:
          if ("string" != typeof t3) break;
          try {
            encodeURIComponent(t3);
          } catch (e4) {
            throw new Error("invalid UTF8");
          }
          return t3;
        case p2.ScalarType.BYTES:
          if ("" === t3) return new Uint8Array(0);
          if ("string" != typeof t3) break;
          return a2.protoBase64.dec(t3);
      }
      throw new Error();
    }
    function w2(e3, t3, n3, r3) {
      if (null === t3) return "google.protobuf.NullValue" == e3.typeName ? 0 : r3 ? e3.values[0].no : y2;
      switch (typeof t3) {
        case "number":
          if (Number.isInteger(t3)) return t3;
          break;
        case "string":
          const r4 = e3.findName(t3);
          if (void 0 !== r4) return r4.no;
          if (n3) return h2;
      }
      throw new Error(`cannot decode enum ${e3.typeName} from JSON: ${N2(t3)}`);
    }
    function O2(e3) {
      return !(!e3.repeated && "map" != e3.kind) || !e3.oneof && ("message" != e3.kind && (!e3.opt && !e3.req));
    }
    function b2(e3, t3, n3) {
      if ("map" == e3.kind) {
        (0, r2.assert)("object" == typeof t3 && null != t3);
        const o3 = {}, a3 = Object.entries(t3);
        switch (e3.V.kind) {
          case "scalar":
            for (const [t5, n4] of a3) o3[t5.toString()] = v2(e3.V.T, n4);
            break;
          case "message":
            for (const [e4, t5] of a3) o3[e4.toString()] = t5.toJson(n3);
            break;
          case "enum":
            const t4 = e3.V.T;
            for (const [e4, r3] of a3) o3[e4.toString()] = k2(t4, r3, n3.enumAsInteger);
        }
        return n3.emitDefaultValues || a3.length > 0 ? o3 : void 0;
      }
      if (e3.repeated) {
        (0, r2.assert)(Array.isArray(t3));
        const o3 = [];
        switch (e3.kind) {
          case "scalar":
            for (let n4 = 0; n4 < t3.length; n4++) o3.push(v2(e3.T, t3[n4]));
            break;
          case "enum":
            for (let r3 = 0; r3 < t3.length; r3++) o3.push(k2(e3.T, t3[r3], n3.enumAsInteger));
            break;
          case "message":
            for (let e4 = 0; e4 < t3.length; e4++) o3.push(t3[e4].toJson(n3));
        }
        return n3.emitDefaultValues || o3.length > 0 ? o3 : void 0;
      }
      switch (e3.kind) {
        case "scalar":
          return v2(e3.T, t3);
        case "enum":
          return k2(e3.T, t3, n3.enumAsInteger);
        case "message":
          return (0, u2.wrapField)(e3.T, t3).toJson(n3);
      }
    }
    function k2(e3, t3, n3) {
      var o3;
      if ((0, r2.assert)("number" == typeof t3), "google.protobuf.NullValue" == e3.typeName) return null;
      if (n3) return t3;
      const a3 = e3.findNumber(t3);
      return null !== (o3 = null == a3 ? void 0 : a3.name) && void 0 !== o3 ? o3 : t3;
    }
    function v2(e3, t3) {
      switch (e3) {
        case p2.ScalarType.INT32:
        case p2.ScalarType.SFIXED32:
        case p2.ScalarType.SINT32:
        case p2.ScalarType.FIXED32:
        case p2.ScalarType.UINT32:
          return (0, r2.assert)("number" == typeof t3), t3;
        case p2.ScalarType.FLOAT:
        case p2.ScalarType.DOUBLE:
          return (0, r2.assert)("number" == typeof t3), Number.isNaN(t3) ? "NaN" : t3 === Number.POSITIVE_INFINITY ? "Infinity" : t3 === Number.NEGATIVE_INFINITY ? "-Infinity" : t3;
        case p2.ScalarType.STRING:
          return (0, r2.assert)("string" == typeof t3), t3;
        case p2.ScalarType.BOOL:
          return (0, r2.assert)("boolean" == typeof t3), t3;
        case p2.ScalarType.UINT64:
        case p2.ScalarType.FIXED64:
        case p2.ScalarType.INT64:
        case p2.ScalarType.SFIXED64:
        case p2.ScalarType.SINT64:
          return (0, r2.assert)("bigint" == typeof t3 || "string" == typeof t3 || "number" == typeof t3), t3.toString();
        case p2.ScalarType.BYTES:
          return (0, r2.assert)(t3 instanceof Uint8Array), a2.protoBase64.enc(t3);
      }
    }
    t2.makeJsonFormat = function() {
      return { makeReadOptions: g2, makeWriteOptions: E2, readMessage(e3, t3, n3, r3) {
        if (null == t3 || Array.isArray(t3) || "object" != typeof t3) throw new Error(`cannot decode message ${e3.typeName} from JSON: ${N2(t3)}`);
        r3 = null != r3 ? r3 : new e3();
        const o3 = /* @__PURE__ */ new Map(), a3 = n3.typeRegistry;
        for (const [l3, u3] of Object.entries(t3)) {
          const t4 = e3.fields.findJsonName(l3);
          if (t4) {
            if (t4.oneof) {
              if (null === u3 && "scalar" == t4.kind) continue;
              const n4 = o3.get(t4.oneof);
              if (void 0 !== n4) throw new Error(`cannot decode message ${e3.typeName} from JSON: multiple keys for oneof "${t4.oneof.name}" present: "${n4}", "${l3}"`);
              o3.set(t4.oneof, l3);
            }
            _2(r3, u3, t4, n3, e3);
          } else {
            let t5 = false;
            if ((null == a3 ? void 0 : a3.findExtension) && l3.startsWith("[") && l3.endsWith("]")) {
              const o4 = a3.findExtension(l3.substring(1, l3.length - 1));
              if (o4 && o4.extendee.typeName == e3.typeName) {
                t5 = true;
                const [e4, a4] = (0, s2.createExtensionContainer)(o4);
                _2(e4, u3, o4.field, n3, o4), (0, i2.setExtension)(r3, o4, a4(), n3);
              }
            }
            if (!t5 && !n3.ignoreUnknownFields) throw new Error(`cannot decode message ${e3.typeName} from JSON: key "${l3}" is unknown`);
          }
        }
        return r3;
      }, writeMessage(e3, t3) {
        const n3 = e3.getType(), r3 = {};
        let o3;
        try {
          for (o3 of n3.fields.byNumber()) {
            if (!(0, l2.isFieldSet)(o3, e3)) {
              if (o3.req) throw "required field not set";
              if (!t3.emitDefaultValues) continue;
              if (!O2(o3)) continue;
            }
            const n4 = b2(o3, o3.oneof ? e3[o3.oneof.localName].value : e3[o3.localName], t3);
            void 0 !== n4 && (r3[t3.useProtoFieldName ? o3.name : o3.jsonName] = n4);
          }
          const a3 = t3.typeRegistry;
          if (null == a3 ? void 0 : a3.findExtensionFor) for (const o4 of n3.runtime.bin.listUnknownFields(e3)) {
            const s3 = a3.findExtensionFor(n3.typeName, o4.no);
            if (s3 && (0, i2.hasExtension)(e3, s3)) {
              const n4 = (0, i2.getExtension)(e3, s3, t3), o5 = b2(s3.field, n4, t3);
              void 0 !== o5 && (r3[s3.field.jsonName] = o5);
            }
          }
        } catch (e4) {
          const t4 = o3 ? `cannot encode field ${n3.typeName}.${o3.name} to JSON` : `cannot encode message ${n3.typeName} to JSON`, r4 = e4 instanceof Error ? e4.message : String(e4);
          throw new Error(t4 + (r4.length > 0 ? `: ${r4}` : ""));
        }
        return r3;
      }, readScalar: (e3, t3, n3) => S2(e3, t3, null != n3 ? n3 : p2.LongType.BIGINT, true), writeScalar(e3, t3, n3) {
        if (void 0 !== t3) return n3 || (0, m2.isScalarZeroValue)(e3, t3) ? v2(e3, t3) : void 0;
      }, debug: N2 };
    };
  }
// @recovered-by cursor-re
// artifact: app/extensions/cursor-always-local/dist/main.js sha256:14fb2d0e360d81a024b4ec605f417e030e19b30b2df99bc45648aa227060534e
// module: 8269 range:5153873..5158488
// basis: webpack-id confidence: C
// method: split
// run: ext-agent 2026-11-05T10:20:08.356Z
8269: (t2, e2, r2) => {
    "use strict";
    Object.defineProperty(e2, "__esModule", { value: true }), e2.createRegistryFromDescriptors = void 0;
    const n2 = r2(3098), s2 = r2(7599), i2 = r2(3672), o2 = r2(5822), a = r2(7907), u = r2(1193), c = r2(8245), l = r2(7668), m = r2(970), d = r2(8814), f = r2(609), p = r2(8021), h = r2(7374), g = r2(1101), A = r2(2706), _ = [c.Any, u.Duration, l.Empty, m.FieldMask, d.Struct, d.Value, d.ListValue, a.Timestamp, u.Duration, p.DoubleValue, p.FloatValue, p.Int64Value, p.Int32Value, p.UInt32Value, p.UInt64Value, p.BoolValue, p.StringValue, p.BytesValue], y = [(0, f.getEnumType)(d.NullValue)];
    function w(t3, e3) {
      var r3;
      const s3 = { kind: t3.fieldKind, no: t3.number, name: t3.name, jsonName: t3.jsonName, delimited: t3.proto.type == h.FieldDescriptorProto_Type.GROUP, repeated: t3.repeated, packed: t3.packed, oneof: null === (r3 = t3.oneof) || void 0 === r3 ? void 0 : r3.name, opt: t3.optional, req: t3.proto.label === h.FieldDescriptorProto_Label.REQUIRED };
      switch (t3.fieldKind) {
        case "map": {
          let r4;
          switch ((0, n2.assert)("field" == t3.kind), t3.mapValue.kind) {
            case "scalar":
              r4 = t3.mapValue.scalar;
              break;
            case "enum":
              r4 = S(t3.mapValue.enum, e3, t3);
              break;
            case "message":
              r4 = S(t3.mapValue.message, e3, t3);
          }
          s3.K = t3.mapKey, s3.V = { kind: t3.mapValue.kind, T: r4 };
          break;
        }
        case "message":
          s3.T = S(t3.message, e3, t3);
          break;
        case "enum":
          s3.T = S(t3.enum, e3, t3), s3.default = t3.getDefaultValue();
          break;
        case "scalar":
          s3.L = t3.longType, s3.T = t3.scalar, s3.default = t3.getDefaultValue();
      }
      return s3;
    }
    function S(t3, e3, r3) {
      const s3 = "message" == t3.kind ? e3.findMessage(t3.typeName) : e3.findEnum(t3.typeName);
      return (0, n2.assert)(s3, `${t3.toString()}" for ${r3.toString()} not found`), s3;
    }
    e2.createRegistryFromDescriptors = function(t3, e3 = true) {
      const r3 = t3 instanceof Uint8Array || (0, A.isMessage)(t3, h.FileDescriptorSet) ? (0, g.createDescriptorSet)(t3) : t3, n3 = /* @__PURE__ */ new Map(), a2 = /* @__PURE__ */ new Map(), u2 = /* @__PURE__ */ new Map(), c2 = /* @__PURE__ */ new Map(), l2 = {};
      if (e3) {
        for (const t4 of _) a2.set(t4.typeName, t4);
        for (const t4 of y) n3.set(t4.typeName, t4);
      }
      return { findEnum(t4) {
        const e4 = n3.get(t4);
        if (e4) return e4;
        const a3 = r3.enums.get(t4);
        if (!a3) return;
        const u3 = ("proto3" == a3.file.syntax ? s2.proto3 : i2.proto2).makeEnumType(t4, a3.values.map((t5) => ({ no: t5.number, name: t5.name, localName: (0, o2.localName)(t5) })), {});
        return n3.set(t4, u3), u3;
      }, findMessage(t4) {
        const e4 = a2.get(t4);
        if (e4) return e4;
        const n4 = r3.messages.get(t4);
        if (!n4) return;
        const u3 = "proto3" == n4.file.syntax ? s2.proto3 : i2.proto2, c3 = [], l3 = u3.makeMessageType(t4, () => c3, { localName: (0, o2.localName)(n4) });
        a2.set(t4, l3);
        for (const t5 of n4.fields) c3.push(w(t5, this));
        return l3;
      }, findService(t4) {
        const e4 = l2[t4];
        if (e4) return e4;
        const n4 = r3.services.get(t4);
        if (!n4) return;
        const s3 = {};
        for (const t5 of n4.methods) {
          const e5 = S(t5.input, this, t5), r4 = S(t5.output, this, t5);
          s3[(0, o2.localName)(t5)] = { name: t5.name, I: e5, O: r4, kind: t5.methodKind, idempotency: t5.idempotency };
        }
        return l2[t4] = { typeName: n4.typeName, methods: s3 };
      }, findExtensionFor(t4, e4) {
        var n4;
        if (!r3.messages.has(t4)) return;
        let s3 = c2.get(t4);
        if (!s3) {
          s3 = /* @__PURE__ */ new Map(), c2.set(t4, s3);
          for (const e5 of r3.extensions.values()) e5.extendee.typeName == t4 && s3.set(e5.number, e5);
        }
        const i3 = null === (n4 = c2.get(t4)) || void 0 === n4 ? void 0 : n4.get(e4);
        return i3 ? this.findExtension(i3.typeName) : void 0;
      }, findExtension(t4) {
        const e4 = u2.get(t4);
        if (e4) return e4;
        const n4 = r3.extensions.get(t4);
        if (!n4) return;
        const o3 = S(n4.extendee, this, n4), a3 = ("proto3" == n4.file.syntax ? s2.proto3 : i2.proto2).makeExtension(t4, o3, w(n4, this));
        return u2.set(t4, a3), a3;
      } };
    };
  }
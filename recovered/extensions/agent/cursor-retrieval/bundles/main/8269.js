// @recovered-by cursor-re
// artifact: app/extensions/cursor-retrieval/dist/main.js sha256:50c717cc16d67dfb571db8461d6630caeb8e421ad0090d156086d1a3d53b1b2b
// module: 8269 range:956347..960964
// basis: webpack-id confidence: C
// method: split
// run: ext-agent 2026-11-05T10:20:08.356Z
8269: (e2, a2, n2) => {
    "use strict";
    Object.defineProperty(a2, "__esModule", { value: true }), a2.createRegistryFromDescriptors = void 0;
    const t2 = n2(3098), s2 = n2(7599), o2 = n2(3672), r2 = n2(5822), i2 = n2(7907), l = n2(1193), d = n2(8245), m = n2(7668), c = n2(970), p = n2(8814), A = n2(609), u = n2(8021), g = n2(7374), T = n2(1101), h = n2(2706), k = [d.Any, l.Duration, m.Empty, c.FieldMask, p.Struct, p.Value, p.ListValue, i2.Timestamp, l.Duration, u.DoubleValue, u.FloatValue, u.Int64Value, u.Int32Value, u.UInt32Value, u.UInt64Value, u.BoolValue, u.StringValue, u.BytesValue], _ = [(0, A.getEnumType)(p.NullValue)];
    function E(e3, a3) {
      var n3;
      const s3 = { kind: e3.fieldKind, no: e3.number, name: e3.name, jsonName: e3.jsonName, delimited: e3.proto.type == g.FieldDescriptorProto_Type.GROUP, repeated: e3.repeated, packed: e3.packed, oneof: null === (n3 = e3.oneof) || void 0 === n3 ? void 0 : n3.name, opt: e3.optional, req: e3.proto.label === g.FieldDescriptorProto_Label.REQUIRED };
      switch (e3.fieldKind) {
        case "map": {
          let n4;
          switch ((0, t2.assert)("field" == e3.kind), e3.mapValue.kind) {
            case "scalar":
              n4 = e3.mapValue.scalar;
              break;
            case "enum":
              n4 = f(e3.mapValue.enum, a3, e3);
              break;
            case "message":
              n4 = f(e3.mapValue.message, a3, e3);
          }
          s3.K = e3.mapKey, s3.V = { kind: e3.mapValue.kind, T: n4 };
          break;
        }
        case "message":
          s3.T = f(e3.message, a3, e3);
          break;
        case "enum":
          s3.T = f(e3.enum, a3, e3), s3.default = e3.getDefaultValue();
          break;
        case "scalar":
          s3.L = e3.longType, s3.T = e3.scalar, s3.default = e3.getDefaultValue();
      }
      return s3;
    }
    function f(e3, a3, n3) {
      const s3 = "message" == e3.kind ? a3.findMessage(e3.typeName) : a3.findEnum(e3.typeName);
      return (0, t2.assert)(s3, `${e3.toString()}" for ${n3.toString()} not found`), s3;
    }
    a2.createRegistryFromDescriptors = function(e3, a3 = true) {
      const n3 = e3 instanceof Uint8Array || (0, h.isMessage)(e3, g.FileDescriptorSet) ? (0, T.createDescriptorSet)(e3) : e3, t3 = /* @__PURE__ */ new Map(), i3 = /* @__PURE__ */ new Map(), l2 = /* @__PURE__ */ new Map(), d2 = /* @__PURE__ */ new Map(), m2 = {};
      if (a3) {
        for (const e4 of k) i3.set(e4.typeName, e4);
        for (const e4 of _) t3.set(e4.typeName, e4);
      }
      return { findEnum(e4) {
        const a4 = t3.get(e4);
        if (a4) return a4;
        const i4 = n3.enums.get(e4);
        if (!i4) return;
        const l3 = ("proto3" == i4.file.syntax ? s2.proto3 : o2.proto2).makeEnumType(e4, i4.values.map((e5) => ({ no: e5.number, name: e5.name, localName: (0, r2.localName)(e5) })), {});
        return t3.set(e4, l3), l3;
      }, findMessage(e4) {
        const a4 = i3.get(e4);
        if (a4) return a4;
        const t4 = n3.messages.get(e4);
        if (!t4) return;
        const l3 = "proto3" == t4.file.syntax ? s2.proto3 : o2.proto2, d3 = [], m3 = l3.makeMessageType(e4, () => d3, { localName: (0, r2.localName)(t4) });
        i3.set(e4, m3);
        for (const e5 of t4.fields) d3.push(E(e5, this));
        return m3;
      }, findService(e4) {
        const a4 = m2[e4];
        if (a4) return a4;
        const t4 = n3.services.get(e4);
        if (!t4) return;
        const s3 = {};
        for (const e5 of t4.methods) {
          const a5 = f(e5.input, this, e5), n4 = f(e5.output, this, e5);
          s3[(0, r2.localName)(e5)] = { name: e5.name, I: a5, O: n4, kind: e5.methodKind, idempotency: e5.idempotency };
        }
        return m2[e4] = { typeName: t4.typeName, methods: s3 };
      }, findExtensionFor(e4, a4) {
        var t4;
        if (!n3.messages.has(e4)) return;
        let s3 = d2.get(e4);
        if (!s3) {
          s3 = /* @__PURE__ */ new Map(), d2.set(e4, s3);
          for (const a5 of n3.extensions.values()) a5.extendee.typeName == e4 && s3.set(a5.number, a5);
        }
        const o3 = null === (t4 = d2.get(e4)) || void 0 === t4 ? void 0 : t4.get(a4);
        return o3 ? this.findExtension(o3.typeName) : void 0;
      }, findExtension(e4) {
        const a4 = l2.get(e4);
        if (a4) return a4;
        const t4 = n3.extensions.get(e4);
        if (!t4) return;
        const r3 = f(t4.extendee, this, t4), i4 = ("proto3" == t4.file.syntax ? s2.proto3 : o2.proto2).makeExtension(e4, r3, E(t4, this));
        return l2.set(e4, i4), i4;
      } };
    };
  }
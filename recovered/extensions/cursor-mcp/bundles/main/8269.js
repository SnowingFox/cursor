// @recovered-by cursor-re
// artifact: app/extensions/cursor-mcp/dist/main.js sha256:097aeef3cf1f927e9bc6c0d23972c432bbcae8dc0ea353a5b6308dd59620fb49
// module: 8269 range:766338..770955
// basis: webpack-id confidence: C
// method: split
// run: ext-p0 2026-11-05T10:07:22.069Z
8269: (e2, t2, r2) => {
    "use strict";
    Object.defineProperty(t2, "__esModule", { value: true }), t2.createRegistryFromDescriptors = void 0;
    const n2 = r2(3098), o2 = r2(7599), s2 = r2(3672), i2 = r2(5822), a2 = r2(7907), c = r2(1193), u = r2(8245), l = r2(7668), d = r2(970), p = r2(8814), f = r2(609), h = r2(8021), m = r2(7374), g = r2(1101), y = r2(2706), _ = [u.Any, c.Duration, l.Empty, d.FieldMask, p.Struct, p.Value, p.ListValue, a2.Timestamp, c.Duration, h.DoubleValue, h.FloatValue, h.Int64Value, h.Int32Value, h.UInt32Value, h.UInt64Value, h.BoolValue, h.StringValue, h.BytesValue], v = [(0, f.getEnumType)(p.NullValue)];
    function w(e3, t3) {
      var r3;
      const o3 = { kind: e3.fieldKind, no: e3.number, name: e3.name, jsonName: e3.jsonName, delimited: e3.proto.type == m.FieldDescriptorProto_Type.GROUP, repeated: e3.repeated, packed: e3.packed, oneof: null === (r3 = e3.oneof) || void 0 === r3 ? void 0 : r3.name, opt: e3.optional, req: e3.proto.label === m.FieldDescriptorProto_Label.REQUIRED };
      switch (e3.fieldKind) {
        case "map": {
          let r4;
          switch ((0, n2.assert)("field" == e3.kind), e3.mapValue.kind) {
            case "scalar":
              r4 = e3.mapValue.scalar;
              break;
            case "enum":
              r4 = b(e3.mapValue.enum, t3, e3);
              break;
            case "message":
              r4 = b(e3.mapValue.message, t3, e3);
          }
          o3.K = e3.mapKey, o3.V = { kind: e3.mapValue.kind, T: r4 };
          break;
        }
        case "message":
          o3.T = b(e3.message, t3, e3);
          break;
        case "enum":
          o3.T = b(e3.enum, t3, e3), o3.default = e3.getDefaultValue();
          break;
        case "scalar":
          o3.L = e3.longType, o3.T = e3.scalar, o3.default = e3.getDefaultValue();
      }
      return o3;
    }
    function b(e3, t3, r3) {
      const o3 = "message" == e3.kind ? t3.findMessage(e3.typeName) : t3.findEnum(e3.typeName);
      return (0, n2.assert)(o3, `${e3.toString()}" for ${r3.toString()} not found`), o3;
    }
    t2.createRegistryFromDescriptors = function(e3, t3 = true) {
      const r3 = e3 instanceof Uint8Array || (0, y.isMessage)(e3, m.FileDescriptorSet) ? (0, g.createDescriptorSet)(e3) : e3, n3 = /* @__PURE__ */ new Map(), a3 = /* @__PURE__ */ new Map(), c2 = /* @__PURE__ */ new Map(), u2 = /* @__PURE__ */ new Map(), l2 = {};
      if (t3) {
        for (const e4 of _) a3.set(e4.typeName, e4);
        for (const e4 of v) n3.set(e4.typeName, e4);
      }
      return { findEnum(e4) {
        const t4 = n3.get(e4);
        if (t4) return t4;
        const a4 = r3.enums.get(e4);
        if (!a4) return;
        const c3 = ("proto3" == a4.file.syntax ? o2.proto3 : s2.proto2).makeEnumType(e4, a4.values.map((e5) => ({ no: e5.number, name: e5.name, localName: (0, i2.localName)(e5) })), {});
        return n3.set(e4, c3), c3;
      }, findMessage(e4) {
        const t4 = a3.get(e4);
        if (t4) return t4;
        const n4 = r3.messages.get(e4);
        if (!n4) return;
        const c3 = "proto3" == n4.file.syntax ? o2.proto3 : s2.proto2, u3 = [], l3 = c3.makeMessageType(e4, () => u3, { localName: (0, i2.localName)(n4) });
        a3.set(e4, l3);
        for (const e5 of n4.fields) u3.push(w(e5, this));
        return l3;
      }, findService(e4) {
        const t4 = l2[e4];
        if (t4) return t4;
        const n4 = r3.services.get(e4);
        if (!n4) return;
        const o3 = {};
        for (const e5 of n4.methods) {
          const t5 = b(e5.input, this, e5), r4 = b(e5.output, this, e5);
          o3[(0, i2.localName)(e5)] = { name: e5.name, I: t5, O: r4, kind: e5.methodKind, idempotency: e5.idempotency };
        }
        return l2[e4] = { typeName: n4.typeName, methods: o3 };
      }, findExtensionFor(e4, t4) {
        var n4;
        if (!r3.messages.has(e4)) return;
        let o3 = u2.get(e4);
        if (!o3) {
          o3 = /* @__PURE__ */ new Map(), u2.set(e4, o3);
          for (const t5 of r3.extensions.values()) t5.extendee.typeName == e4 && o3.set(t5.number, t5);
        }
        const s3 = null === (n4 = u2.get(e4)) || void 0 === n4 ? void 0 : n4.get(t4);
        return s3 ? this.findExtension(s3.typeName) : void 0;
      }, findExtension(e4) {
        const t4 = c2.get(e4);
        if (t4) return t4;
        const n4 = r3.extensions.get(e4);
        if (!n4) return;
        const i3 = b(n4.extendee, this, n4), a4 = ("proto3" == n4.file.syntax ? o2.proto3 : s2.proto2).makeExtension(e4, i3, w(n4, this));
        return c2.set(e4, a4), a4;
      } };
    };
  }
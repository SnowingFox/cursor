// @recovered-by cursor-re
// artifact: app/extensions/cursor-deeplink/dist/main.js sha256:2b0091d260814e411af8319789fee5fe8b4b75d7c27c85b905f80c4d53d995f3
// module: 8269 range:766894..771505
// basis: webpack-id confidence: C
// method: split
// run: ext-agent 2026-11-05T10:20:08.356Z
8269: (e2, t2, A2) => {
    "use strict";
    Object.defineProperty(t2, "__esModule", { value: true }), t2.createRegistryFromDescriptors = void 0;
    const n2 = A2(3098), r2 = A2(7599), o2 = A2(3672), s = A2(5822), i = A2(7907), a = A2(1193), c = A2(8245), l = A2(7668), u = A2(970), g = A2(8814), E = A2(609), h = A2(8021), d = A2(7374), I = A2(1101), B = A2(2706), Q = [c.Any, a.Duration, l.Empty, u.FieldMask, g.Struct, g.Value, g.ListValue, i.Timestamp, a.Duration, h.DoubleValue, h.FloatValue, h.Int64Value, h.Int32Value, h.UInt32Value, h.UInt64Value, h.BoolValue, h.StringValue, h.BytesValue], f = [(0, E.getEnumType)(g.NullValue)];
    function C(e3, t3) {
      var A3;
      const r3 = { kind: e3.fieldKind, no: e3.number, name: e3.name, jsonName: e3.jsonName, delimited: e3.proto.type == d.FieldDescriptorProto_Type.GROUP, repeated: e3.repeated, packed: e3.packed, oneof: null === (A3 = e3.oneof) || void 0 === A3 ? void 0 : A3.name, opt: e3.optional, req: e3.proto.label === d.FieldDescriptorProto_Label.REQUIRED };
      switch (e3.fieldKind) {
        case "map": {
          let A4;
          switch ((0, n2.assert)("field" == e3.kind), e3.mapValue.kind) {
            case "scalar":
              A4 = e3.mapValue.scalar;
              break;
            case "enum":
              A4 = p(e3.mapValue.enum, t3, e3);
              break;
            case "message":
              A4 = p(e3.mapValue.message, t3, e3);
          }
          r3.K = e3.mapKey, r3.V = { kind: e3.mapValue.kind, T: A4 };
          break;
        }
        case "message":
          r3.T = p(e3.message, t3, e3);
          break;
        case "enum":
          r3.T = p(e3.enum, t3, e3), r3.default = e3.getDefaultValue();
          break;
        case "scalar":
          r3.L = e3.longType, r3.T = e3.scalar, r3.default = e3.getDefaultValue();
      }
      return r3;
    }
    function p(e3, t3, A3) {
      const r3 = "message" == e3.kind ? t3.findMessage(e3.typeName) : t3.findEnum(e3.typeName);
      return (0, n2.assert)(r3, `${e3.toString()}" for ${A3.toString()} not found`), r3;
    }
    t2.createRegistryFromDescriptors = function(e3, t3 = true) {
      const A3 = e3 instanceof Uint8Array || (0, B.isMessage)(e3, d.FileDescriptorSet) ? (0, I.createDescriptorSet)(e3) : e3, n3 = /* @__PURE__ */ new Map(), i2 = /* @__PURE__ */ new Map(), a2 = /* @__PURE__ */ new Map(), c2 = /* @__PURE__ */ new Map(), l2 = {};
      if (t3) {
        for (const e4 of Q) i2.set(e4.typeName, e4);
        for (const e4 of f) n3.set(e4.typeName, e4);
      }
      return { findEnum(e4) {
        const t4 = n3.get(e4);
        if (t4) return t4;
        const i3 = A3.enums.get(e4);
        if (!i3) return;
        const a3 = ("proto3" == i3.file.syntax ? r2.proto3 : o2.proto2).makeEnumType(e4, i3.values.map((e5) => ({ no: e5.number, name: e5.name, localName: (0, s.localName)(e5) })), {});
        return n3.set(e4, a3), a3;
      }, findMessage(e4) {
        const t4 = i2.get(e4);
        if (t4) return t4;
        const n4 = A3.messages.get(e4);
        if (!n4) return;
        const a3 = "proto3" == n4.file.syntax ? r2.proto3 : o2.proto2, c3 = [], l3 = a3.makeMessageType(e4, () => c3, { localName: (0, s.localName)(n4) });
        i2.set(e4, l3);
        for (const e5 of n4.fields) c3.push(C(e5, this));
        return l3;
      }, findService(e4) {
        const t4 = l2[e4];
        if (t4) return t4;
        const n4 = A3.services.get(e4);
        if (!n4) return;
        const r3 = {};
        for (const e5 of n4.methods) {
          const t5 = p(e5.input, this, e5), A4 = p(e5.output, this, e5);
          r3[(0, s.localName)(e5)] = { name: e5.name, I: t5, O: A4, kind: e5.methodKind, idempotency: e5.idempotency };
        }
        return l2[e4] = { typeName: n4.typeName, methods: r3 };
      }, findExtensionFor(e4, t4) {
        var n4;
        if (!A3.messages.has(e4)) return;
        let r3 = c2.get(e4);
        if (!r3) {
          r3 = /* @__PURE__ */ new Map(), c2.set(e4, r3);
          for (const t5 of A3.extensions.values()) t5.extendee.typeName == e4 && r3.set(t5.number, t5);
        }
        const o3 = null === (n4 = c2.get(e4)) || void 0 === n4 ? void 0 : n4.get(t4);
        return o3 ? this.findExtension(o3.typeName) : void 0;
      }, findExtension(e4) {
        const t4 = a2.get(e4);
        if (t4) return t4;
        const n4 = A3.extensions.get(e4);
        if (!n4) return;
        const s2 = p(n4.extendee, this, n4), i3 = ("proto3" == n4.file.syntax ? r2.proto3 : o2.proto2).makeExtension(e4, s2, C(n4, this));
        return a2.set(e4, i3), i3;
      } };
    };
  }
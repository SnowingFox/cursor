// @recovered-by cursor-re
// artifact: app/extensions/cursor-shadow-workspace/dist/extension.js sha256:19218949e5ecc64e4c1b41e194ba40abfd54a9aeb034a14f90c71485b7f84585
// module: 8269 range:634421..639032
// basis: webpack-id confidence: C
// method: split
// run: ext-agent 2026-11-05T10:20:08.356Z
8269: (e2, A2, t2) => {
    "use strict";
    Object.defineProperty(A2, "__esModule", { value: true }), A2.createRegistryFromDescriptors = void 0;
    const n2 = t2(3098), r2 = t2(7599), o2 = t2(3672), s = t2(5822), a = t2(7907), i = t2(1193), c = t2(8245), l = t2(7668), g = t2(970), E = t2(8814), u = t2(609), d = t2(8021), I = t2(7374), h = t2(1101), Q = t2(2706), m = [c.Any, i.Duration, l.Empty, g.FieldMask, E.Struct, E.Value, E.ListValue, a.Timestamp, i.Duration, d.DoubleValue, d.FloatValue, d.Int64Value, d.Int32Value, d.UInt32Value, d.UInt64Value, d.BoolValue, d.StringValue, d.BytesValue], C = [(0, u.getEnumType)(E.NullValue)];
    function B(e3, A3) {
      var t3;
      const r3 = { kind: e3.fieldKind, no: e3.number, name: e3.name, jsonName: e3.jsonName, delimited: e3.proto.type == I.FieldDescriptorProto_Type.GROUP, repeated: e3.repeated, packed: e3.packed, oneof: null === (t3 = e3.oneof) || void 0 === t3 ? void 0 : t3.name, opt: e3.optional, req: e3.proto.label === I.FieldDescriptorProto_Label.REQUIRED };
      switch (e3.fieldKind) {
        case "map": {
          let t4;
          switch ((0, n2.assert)("field" == e3.kind), e3.mapValue.kind) {
            case "scalar":
              t4 = e3.mapValue.scalar;
              break;
            case "enum":
              t4 = p(e3.mapValue.enum, A3, e3);
              break;
            case "message":
              t4 = p(e3.mapValue.message, A3, e3);
          }
          r3.K = e3.mapKey, r3.V = { kind: e3.mapValue.kind, T: t4 };
          break;
        }
        case "message":
          r3.T = p(e3.message, A3, e3);
          break;
        case "enum":
          r3.T = p(e3.enum, A3, e3), r3.default = e3.getDefaultValue();
          break;
        case "scalar":
          r3.L = e3.longType, r3.T = e3.scalar, r3.default = e3.getDefaultValue();
      }
      return r3;
    }
    function p(e3, A3, t3) {
      const r3 = "message" == e3.kind ? A3.findMessage(e3.typeName) : A3.findEnum(e3.typeName);
      return (0, n2.assert)(r3, `${e3.toString()}" for ${t3.toString()} not found`), r3;
    }
    A2.createRegistryFromDescriptors = function(e3, A3 = true) {
      const t3 = e3 instanceof Uint8Array || (0, Q.isMessage)(e3, I.FileDescriptorSet) ? (0, h.createDescriptorSet)(e3) : e3, n3 = /* @__PURE__ */ new Map(), a2 = /* @__PURE__ */ new Map(), i2 = /* @__PURE__ */ new Map(), c2 = /* @__PURE__ */ new Map(), l2 = {};
      if (A3) {
        for (const e4 of m) a2.set(e4.typeName, e4);
        for (const e4 of C) n3.set(e4.typeName, e4);
      }
      return { findEnum(e4) {
        const A4 = n3.get(e4);
        if (A4) return A4;
        const a3 = t3.enums.get(e4);
        if (!a3) return;
        const i3 = ("proto3" == a3.file.syntax ? r2.proto3 : o2.proto2).makeEnumType(e4, a3.values.map((e5) => ({ no: e5.number, name: e5.name, localName: (0, s.localName)(e5) })), {});
        return n3.set(e4, i3), i3;
      }, findMessage(e4) {
        const A4 = a2.get(e4);
        if (A4) return A4;
        const n4 = t3.messages.get(e4);
        if (!n4) return;
        const i3 = "proto3" == n4.file.syntax ? r2.proto3 : o2.proto2, c3 = [], l3 = i3.makeMessageType(e4, () => c3, { localName: (0, s.localName)(n4) });
        a2.set(e4, l3);
        for (const e5 of n4.fields) c3.push(B(e5, this));
        return l3;
      }, findService(e4) {
        const A4 = l2[e4];
        if (A4) return A4;
        const n4 = t3.services.get(e4);
        if (!n4) return;
        const r3 = {};
        for (const e5 of n4.methods) {
          const A5 = p(e5.input, this, e5), t4 = p(e5.output, this, e5);
          r3[(0, s.localName)(e5)] = { name: e5.name, I: A5, O: t4, kind: e5.methodKind, idempotency: e5.idempotency };
        }
        return l2[e4] = { typeName: n4.typeName, methods: r3 };
      }, findExtensionFor(e4, A4) {
        var n4;
        if (!t3.messages.has(e4)) return;
        let r3 = c2.get(e4);
        if (!r3) {
          r3 = /* @__PURE__ */ new Map(), c2.set(e4, r3);
          for (const A5 of t3.extensions.values()) A5.extendee.typeName == e4 && r3.set(A5.number, A5);
        }
        const o3 = null === (n4 = c2.get(e4)) || void 0 === n4 ? void 0 : n4.get(A4);
        return o3 ? this.findExtension(o3.typeName) : void 0;
      }, findExtension(e4) {
        const A4 = i2.get(e4);
        if (A4) return A4;
        const n4 = t3.extensions.get(e4);
        if (!n4) return;
        const s2 = p(n4.extendee, this, n4), a3 = ("proto3" == n4.file.syntax ? r2.proto3 : o2.proto2).makeExtension(e4, s2, B(n4, this));
        return i2.set(e4, a3), a3;
      } };
    };
  }
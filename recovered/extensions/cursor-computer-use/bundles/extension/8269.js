// @recovered-by cursor-re
// artifact: app/extensions/cursor-computer-use/dist/extension.js sha256:2e37990c917916e7e5b3d1524e03cf61b1cf38ddc56b1e51014a1275aa4568a6
// module: 8269 range:665841..670452
// basis: webpack-id confidence: C
// method: split
// run: ext-p0 2026-11-05T10:07:22.069Z
8269: (e2, n2, t2) => {
    "use strict";
    Object.defineProperty(n2, "__esModule", { value: true }), n2.createRegistryFromDescriptors = void 0;
    const a2 = t2(3098), s2 = t2(7599), o2 = t2(3672), r = t2(5822), i = t2(7907), A = t2(1193), c = t2(8245), l = t2(7668), d = t2(970), m = t2(8814), u = t2(609), g = t2(8021), p = t2(7374), E = t2(1101), h = t2(2706), T = [c.Any, A.Duration, l.Empty, d.FieldMask, m.Struct, m.Value, m.ListValue, i.Timestamp, A.Duration, g.DoubleValue, g.FloatValue, g.Int64Value, g.Int32Value, g.UInt32Value, g.UInt64Value, g.BoolValue, g.StringValue, g.BytesValue], k = [(0, u.getEnumType)(m.NullValue)];
    function f(e3, n3) {
      var t3;
      const s3 = { kind: e3.fieldKind, no: e3.number, name: e3.name, jsonName: e3.jsonName, delimited: e3.proto.type == p.FieldDescriptorProto_Type.GROUP, repeated: e3.repeated, packed: e3.packed, oneof: null === (t3 = e3.oneof) || void 0 === t3 ? void 0 : t3.name, opt: e3.optional, req: e3.proto.label === p.FieldDescriptorProto_Label.REQUIRED };
      switch (e3.fieldKind) {
        case "map": {
          let t4;
          switch ((0, a2.assert)("field" == e3.kind), e3.mapValue.kind) {
            case "scalar":
              t4 = e3.mapValue.scalar;
              break;
            case "enum":
              t4 = _(e3.mapValue.enum, n3, e3);
              break;
            case "message":
              t4 = _(e3.mapValue.message, n3, e3);
          }
          s3.K = e3.mapKey, s3.V = { kind: e3.mapValue.kind, T: t4 };
          break;
        }
        case "message":
          s3.T = _(e3.message, n3, e3);
          break;
        case "enum":
          s3.T = _(e3.enum, n3, e3), s3.default = e3.getDefaultValue();
          break;
        case "scalar":
          s3.L = e3.longType, s3.T = e3.scalar, s3.default = e3.getDefaultValue();
      }
      return s3;
    }
    function _(e3, n3, t3) {
      const s3 = "message" == e3.kind ? n3.findMessage(e3.typeName) : n3.findEnum(e3.typeName);
      return (0, a2.assert)(s3, `${e3.toString()}" for ${t3.toString()} not found`), s3;
    }
    n2.createRegistryFromDescriptors = function(e3, n3 = true) {
      const t3 = e3 instanceof Uint8Array || (0, h.isMessage)(e3, p.FileDescriptorSet) ? (0, E.createDescriptorSet)(e3) : e3, a3 = /* @__PURE__ */ new Map(), i2 = /* @__PURE__ */ new Map(), A2 = /* @__PURE__ */ new Map(), c2 = /* @__PURE__ */ new Map(), l2 = {};
      if (n3) {
        for (const e4 of T) i2.set(e4.typeName, e4);
        for (const e4 of k) a3.set(e4.typeName, e4);
      }
      return { findEnum(e4) {
        const n4 = a3.get(e4);
        if (n4) return n4;
        const i3 = t3.enums.get(e4);
        if (!i3) return;
        const A3 = ("proto3" == i3.file.syntax ? s2.proto3 : o2.proto2).makeEnumType(e4, i3.values.map((e5) => ({ no: e5.number, name: e5.name, localName: (0, r.localName)(e5) })), {});
        return a3.set(e4, A3), A3;
      }, findMessage(e4) {
        const n4 = i2.get(e4);
        if (n4) return n4;
        const a4 = t3.messages.get(e4);
        if (!a4) return;
        const A3 = "proto3" == a4.file.syntax ? s2.proto3 : o2.proto2, c3 = [], l3 = A3.makeMessageType(e4, () => c3, { localName: (0, r.localName)(a4) });
        i2.set(e4, l3);
        for (const e5 of a4.fields) c3.push(f(e5, this));
        return l3;
      }, findService(e4) {
        const n4 = l2[e4];
        if (n4) return n4;
        const a4 = t3.services.get(e4);
        if (!a4) return;
        const s3 = {};
        for (const e5 of a4.methods) {
          const n5 = _(e5.input, this, e5), t4 = _(e5.output, this, e5);
          s3[(0, r.localName)(e5)] = { name: e5.name, I: n5, O: t4, kind: e5.methodKind, idempotency: e5.idempotency };
        }
        return l2[e4] = { typeName: a4.typeName, methods: s3 };
      }, findExtensionFor(e4, n4) {
        var a4;
        if (!t3.messages.has(e4)) return;
        let s3 = c2.get(e4);
        if (!s3) {
          s3 = /* @__PURE__ */ new Map(), c2.set(e4, s3);
          for (const n5 of t3.extensions.values()) n5.extendee.typeName == e4 && s3.set(n5.number, n5);
        }
        const o3 = null === (a4 = c2.get(e4)) || void 0 === a4 ? void 0 : a4.get(n4);
        return o3 ? this.findExtension(o3.typeName) : void 0;
      }, findExtension(e4) {
        const n4 = A2.get(e4);
        if (n4) return n4;
        const a4 = t3.extensions.get(e4);
        if (!a4) return;
        const r2 = _(a4.extendee, this, a4), i3 = ("proto3" == a4.file.syntax ? s2.proto3 : o2.proto2).makeExtension(e4, r2, f(a4, this));
        return A2.set(e4, i3), i3;
      } };
    };
  }
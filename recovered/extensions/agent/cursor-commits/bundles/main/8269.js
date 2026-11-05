// @recovered-by cursor-re
// artifact: app/extensions/cursor-commits/dist/main.js sha256:093f8518d2bba92ce25a152b40a9e7490ef35d5b45f1477f49078295148101b9
// module: 8269 range:635313..639930
// basis: webpack-id confidence: C
// method: split
// run: ext-agent 2026-11-05T10:20:08.356Z
8269: (e2, n2, a2) => {
    "use strict";
    Object.defineProperty(n2, "__esModule", { value: true }), n2.createRegistryFromDescriptors = void 0;
    const t2 = a2(3098), s2 = a2(7599), o2 = a2(3672), r2 = a2(5822), i2 = a2(7907), A = a2(1193), l = a2(8245), c = a2(7668), m = a2(970), d = a2(8814), g = a2(609), u = a2(8021), E = a2(7374), p = a2(1101), T = a2(2706), k = [l.Any, A.Duration, c.Empty, m.FieldMask, d.Struct, d.Value, d.ListValue, i2.Timestamp, A.Duration, u.DoubleValue, u.FloatValue, u.Int64Value, u.Int32Value, u.UInt32Value, u.UInt64Value, u.BoolValue, u.StringValue, u.BytesValue], I = [(0, g.getEnumType)(d.NullValue)];
    function h(e3, n3) {
      var a3;
      const s3 = { kind: e3.fieldKind, no: e3.number, name: e3.name, jsonName: e3.jsonName, delimited: e3.proto.type == E.FieldDescriptorProto_Type.GROUP, repeated: e3.repeated, packed: e3.packed, oneof: null === (a3 = e3.oneof) || void 0 === a3 ? void 0 : a3.name, opt: e3.optional, req: e3.proto.label === E.FieldDescriptorProto_Label.REQUIRED };
      switch (e3.fieldKind) {
        case "map": {
          let a4;
          switch ((0, t2.assert)("field" == e3.kind), e3.mapValue.kind) {
            case "scalar":
              a4 = e3.mapValue.scalar;
              break;
            case "enum":
              a4 = _(e3.mapValue.enum, n3, e3);
              break;
            case "message":
              a4 = _(e3.mapValue.message, n3, e3);
          }
          s3.K = e3.mapKey, s3.V = { kind: e3.mapValue.kind, T: a4 };
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
    function _(e3, n3, a3) {
      const s3 = "message" == e3.kind ? n3.findMessage(e3.typeName) : n3.findEnum(e3.typeName);
      return (0, t2.assert)(s3, `${e3.toString()}" for ${a3.toString()} not found`), s3;
    }
    n2.createRegistryFromDescriptors = function(e3, n3 = true) {
      const a3 = e3 instanceof Uint8Array || (0, T.isMessage)(e3, E.FileDescriptorSet) ? (0, p.createDescriptorSet)(e3) : e3, t3 = /* @__PURE__ */ new Map(), i3 = /* @__PURE__ */ new Map(), A2 = /* @__PURE__ */ new Map(), l2 = /* @__PURE__ */ new Map(), c2 = {};
      if (n3) {
        for (const e4 of k) i3.set(e4.typeName, e4);
        for (const e4 of I) t3.set(e4.typeName, e4);
      }
      return { findEnum(e4) {
        const n4 = t3.get(e4);
        if (n4) return n4;
        const i4 = a3.enums.get(e4);
        if (!i4) return;
        const A3 = ("proto3" == i4.file.syntax ? s2.proto3 : o2.proto2).makeEnumType(e4, i4.values.map((e5) => ({ no: e5.number, name: e5.name, localName: (0, r2.localName)(e5) })), {});
        return t3.set(e4, A3), A3;
      }, findMessage(e4) {
        const n4 = i3.get(e4);
        if (n4) return n4;
        const t4 = a3.messages.get(e4);
        if (!t4) return;
        const A3 = "proto3" == t4.file.syntax ? s2.proto3 : o2.proto2, l3 = [], c3 = A3.makeMessageType(e4, () => l3, { localName: (0, r2.localName)(t4) });
        i3.set(e4, c3);
        for (const e5 of t4.fields) l3.push(h(e5, this));
        return c3;
      }, findService(e4) {
        const n4 = c2[e4];
        if (n4) return n4;
        const t4 = a3.services.get(e4);
        if (!t4) return;
        const s3 = {};
        for (const e5 of t4.methods) {
          const n5 = _(e5.input, this, e5), a4 = _(e5.output, this, e5);
          s3[(0, r2.localName)(e5)] = { name: e5.name, I: n5, O: a4, kind: e5.methodKind, idempotency: e5.idempotency };
        }
        return c2[e4] = { typeName: t4.typeName, methods: s3 };
      }, findExtensionFor(e4, n4) {
        var t4;
        if (!a3.messages.has(e4)) return;
        let s3 = l2.get(e4);
        if (!s3) {
          s3 = /* @__PURE__ */ new Map(), l2.set(e4, s3);
          for (const n5 of a3.extensions.values()) n5.extendee.typeName == e4 && s3.set(n5.number, n5);
        }
        const o3 = null === (t4 = l2.get(e4)) || void 0 === t4 ? void 0 : t4.get(n4);
        return o3 ? this.findExtension(o3.typeName) : void 0;
      }, findExtension(e4) {
        const n4 = A2.get(e4);
        if (n4) return n4;
        const t4 = a3.extensions.get(e4);
        if (!t4) return;
        const r3 = _(t4.extendee, this, t4), i4 = ("proto3" == t4.file.syntax ? s2.proto3 : o2.proto2).makeExtension(e4, r3, h(t4, this));
        return A2.set(e4, i4), i4;
      } };
    };
  }
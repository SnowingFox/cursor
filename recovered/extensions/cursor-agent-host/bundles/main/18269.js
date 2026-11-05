// @recovered-by cursor-re
// artifact: app/extensions/cursor-agent-host/dist/main.js sha256:9d478dff35f72f6b3ed85b33f2c4a15c12b41b4e3d42247ecc8ce4981e9308bb
// module: 18269 range:4322416..4327011
// basis: webpack-id confidence: C
// method: split
// run: ext-p0 2026-11-05T10:07:22.069Z
18269: (e, t, r) => {
    "use strict";
    Object.defineProperty(t, "__esModule", { value: true }), t.createRegistryFromDescriptors = void 0;
    const n = r(43098), s = r(27599), o = r(83672), i = r(75822), a = r(87907), c = r(11193), l = r(48245), u = r(27668), d = r(60970), p = r(78814), m = r(609), h = r(28021), f = r(27374), g = r(51101), y = r(62706), w = [l.Any, c.Duration, u.Empty, d.FieldMask, p.Struct, p.Value, p.ListValue, a.Timestamp, c.Duration, h.DoubleValue, h.FloatValue, h.Int64Value, h.Int32Value, h.UInt32Value, h.UInt64Value, h.BoolValue, h.StringValue, h.BytesValue], v = [(0, m.getEnumType)(p.NullValue)];
    function _(e2, t2) {
      var r2;
      const s2 = { kind: e2.fieldKind, no: e2.number, name: e2.name, jsonName: e2.jsonName, delimited: e2.proto.type == f.FieldDescriptorProto_Type.GROUP, repeated: e2.repeated, packed: e2.packed, oneof: null === (r2 = e2.oneof) || void 0 === r2 ? void 0 : r2.name, opt: e2.optional, req: e2.proto.label === f.FieldDescriptorProto_Label.REQUIRED };
      switch (e2.fieldKind) {
        case "map": {
          let r3;
          switch ((0, n.assert)("field" == e2.kind), e2.mapValue.kind) {
            case "scalar":
              r3 = e2.mapValue.scalar;
              break;
            case "enum":
              r3 = A(e2.mapValue.enum, t2, e2);
              break;
            case "message":
              r3 = A(e2.mapValue.message, t2, e2);
          }
          s2.K = e2.mapKey, s2.V = { kind: e2.mapValue.kind, T: r3 };
          break;
        }
        case "message":
          s2.T = A(e2.message, t2, e2);
          break;
        case "enum":
          s2.T = A(e2.enum, t2, e2), s2.default = e2.getDefaultValue();
          break;
        case "scalar":
          s2.L = e2.longType, s2.T = e2.scalar, s2.default = e2.getDefaultValue();
      }
      return s2;
    }
    function A(e2, t2, r2) {
      const s2 = "message" == e2.kind ? t2.findMessage(e2.typeName) : t2.findEnum(e2.typeName);
      return (0, n.assert)(s2, `${e2.toString()}" for ${r2.toString()} not found`), s2;
    }
    t.createRegistryFromDescriptors = function(e2, t2 = true) {
      const r2 = e2 instanceof Uint8Array || (0, y.isMessage)(e2, f.FileDescriptorSet) ? (0, g.createDescriptorSet)(e2) : e2, n2 = /* @__PURE__ */ new Map(), a2 = /* @__PURE__ */ new Map(), c2 = /* @__PURE__ */ new Map(), l2 = /* @__PURE__ */ new Map(), u2 = {};
      if (t2) {
        for (const e3 of w) a2.set(e3.typeName, e3);
        for (const e3 of v) n2.set(e3.typeName, e3);
      }
      return { findEnum(e3) {
        const t3 = n2.get(e3);
        if (t3) return t3;
        const a3 = r2.enums.get(e3);
        if (!a3) return;
        const c3 = ("proto3" == a3.file.syntax ? s.proto3 : o.proto2).makeEnumType(e3, a3.values.map((e4) => ({ no: e4.number, name: e4.name, localName: (0, i.localName)(e4) })), {});
        return n2.set(e3, c3), c3;
      }, findMessage(e3) {
        const t3 = a2.get(e3);
        if (t3) return t3;
        const n3 = r2.messages.get(e3);
        if (!n3) return;
        const c3 = "proto3" == n3.file.syntax ? s.proto3 : o.proto2, l3 = [], u3 = c3.makeMessageType(e3, () => l3, { localName: (0, i.localName)(n3) });
        a2.set(e3, u3);
        for (const e4 of n3.fields) l3.push(_(e4, this));
        return u3;
      }, findService(e3) {
        const t3 = u2[e3];
        if (t3) return t3;
        const n3 = r2.services.get(e3);
        if (!n3) return;
        const s2 = {};
        for (const e4 of n3.methods) {
          const t4 = A(e4.input, this, e4), r3 = A(e4.output, this, e4);
          s2[(0, i.localName)(e4)] = { name: e4.name, I: t4, O: r3, kind: e4.methodKind, idempotency: e4.idempotency };
        }
        return u2[e3] = { typeName: n3.typeName, methods: s2 };
      }, findExtensionFor(e3, t3) {
        var n3;
        if (!r2.messages.has(e3)) return;
        let s2 = l2.get(e3);
        if (!s2) {
          s2 = /* @__PURE__ */ new Map(), l2.set(e3, s2);
          for (const t4 of r2.extensions.values()) t4.extendee.typeName == e3 && s2.set(t4.number, t4);
        }
        const o2 = null === (n3 = l2.get(e3)) || void 0 === n3 ? void 0 : n3.get(t3);
        return o2 ? this.findExtension(o2.typeName) : void 0;
      }, findExtension(e3) {
        const t3 = c2.get(e3);
        if (t3) return t3;
        const n3 = r2.extensions.get(e3);
        if (!n3) return;
        const i2 = A(n3.extendee, this, n3), a3 = ("proto3" == n3.file.syntax ? s.proto3 : o.proto2).makeExtension(e3, i2, _(n3, this));
        return c2.set(e3, a3), a3;
      } };
    };
  }
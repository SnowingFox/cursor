// @recovered-by cursor-re
// artifact: app/extensions/cursor-local-agent-runtime/dist/main.js sha256:be87ea0ed3ac86375ab8e5f92c4261df0ccfc61ff24b07420f9c88a78ae2cfd0
// module: 18269 range:542180..546775
// basis: webpack-id confidence: C
// method: split
// run: ext-p0 2026-11-05T10:07:22.069Z
18269: (e, t, r) => {
    "use strict";
    Object.defineProperty(t, "__esModule", { value: true }), t.createRegistryFromDescriptors = void 0;
    const n = r(43098), o = r(27599), s = r(83672), i = r(75822), a = r(87907), l = r(11193), c = r(48245), u = r(27668), d = r(60970), p = r(78814), h = r(609), m = r(28021), f = r(27374), g = r(51101), y = r(62706), v = [c.Any, l.Duration, u.Empty, d.FieldMask, p.Struct, p.Value, p.ListValue, a.Timestamp, l.Duration, m.DoubleValue, m.FloatValue, m.Int64Value, m.Int32Value, m.UInt32Value, m.UInt64Value, m.BoolValue, m.StringValue, m.BytesValue], w = [(0, h.getEnumType)(p.NullValue)];
    function b(e2, t2) {
      var r2;
      const o2 = { kind: e2.fieldKind, no: e2.number, name: e2.name, jsonName: e2.jsonName, delimited: e2.proto.type == f.FieldDescriptorProto_Type.GROUP, repeated: e2.repeated, packed: e2.packed, oneof: null === (r2 = e2.oneof) || void 0 === r2 ? void 0 : r2.name, opt: e2.optional, req: e2.proto.label === f.FieldDescriptorProto_Label.REQUIRED };
      switch (e2.fieldKind) {
        case "map": {
          let r3;
          switch ((0, n.assert)("field" == e2.kind), e2.mapValue.kind) {
            case "scalar":
              r3 = e2.mapValue.scalar;
              break;
            case "enum":
              r3 = _(e2.mapValue.enum, t2, e2);
              break;
            case "message":
              r3 = _(e2.mapValue.message, t2, e2);
          }
          o2.K = e2.mapKey, o2.V = { kind: e2.mapValue.kind, T: r3 };
          break;
        }
        case "message":
          o2.T = _(e2.message, t2, e2);
          break;
        case "enum":
          o2.T = _(e2.enum, t2, e2), o2.default = e2.getDefaultValue();
          break;
        case "scalar":
          o2.L = e2.longType, o2.T = e2.scalar, o2.default = e2.getDefaultValue();
      }
      return o2;
    }
    function _(e2, t2, r2) {
      const o2 = "message" == e2.kind ? t2.findMessage(e2.typeName) : t2.findEnum(e2.typeName);
      return (0, n.assert)(o2, `${e2.toString()}" for ${r2.toString()} not found`), o2;
    }
    t.createRegistryFromDescriptors = function(e2, t2 = true) {
      const r2 = e2 instanceof Uint8Array || (0, y.isMessage)(e2, f.FileDescriptorSet) ? (0, g.createDescriptorSet)(e2) : e2, n2 = /* @__PURE__ */ new Map(), a2 = /* @__PURE__ */ new Map(), l2 = /* @__PURE__ */ new Map(), c2 = /* @__PURE__ */ new Map(), u2 = {};
      if (t2) {
        for (const e3 of v) a2.set(e3.typeName, e3);
        for (const e3 of w) n2.set(e3.typeName, e3);
      }
      return { findEnum(e3) {
        const t3 = n2.get(e3);
        if (t3) return t3;
        const a3 = r2.enums.get(e3);
        if (!a3) return;
        const l3 = ("proto3" == a3.file.syntax ? o.proto3 : s.proto2).makeEnumType(e3, a3.values.map((e4) => ({ no: e4.number, name: e4.name, localName: (0, i.localName)(e4) })), {});
        return n2.set(e3, l3), l3;
      }, findMessage(e3) {
        const t3 = a2.get(e3);
        if (t3) return t3;
        const n3 = r2.messages.get(e3);
        if (!n3) return;
        const l3 = "proto3" == n3.file.syntax ? o.proto3 : s.proto2, c3 = [], u3 = l3.makeMessageType(e3, () => c3, { localName: (0, i.localName)(n3) });
        a2.set(e3, u3);
        for (const e4 of n3.fields) c3.push(b(e4, this));
        return u3;
      }, findService(e3) {
        const t3 = u2[e3];
        if (t3) return t3;
        const n3 = r2.services.get(e3);
        if (!n3) return;
        const o2 = {};
        for (const e4 of n3.methods) {
          const t4 = _(e4.input, this, e4), r3 = _(e4.output, this, e4);
          o2[(0, i.localName)(e4)] = { name: e4.name, I: t4, O: r3, kind: e4.methodKind, idempotency: e4.idempotency };
        }
        return u2[e3] = { typeName: n3.typeName, methods: o2 };
      }, findExtensionFor(e3, t3) {
        var n3;
        if (!r2.messages.has(e3)) return;
        let o2 = c2.get(e3);
        if (!o2) {
          o2 = /* @__PURE__ */ new Map(), c2.set(e3, o2);
          for (const t4 of r2.extensions.values()) t4.extendee.typeName == e3 && o2.set(t4.number, t4);
        }
        const s2 = null === (n3 = c2.get(e3)) || void 0 === n3 ? void 0 : n3.get(t3);
        return s2 ? this.findExtension(s2.typeName) : void 0;
      }, findExtension(e3) {
        const t3 = l2.get(e3);
        if (t3) return t3;
        const n3 = r2.extensions.get(e3);
        if (!n3) return;
        const i2 = _(n3.extendee, this, n3), a3 = ("proto3" == n3.file.syntax ? o.proto3 : s.proto2).makeExtension(e3, i2, b(n3, this));
        return l2.set(e3, a3), a3;
      } };
    };
  }
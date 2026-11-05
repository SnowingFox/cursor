// @recovered-by cursor-re
// artifact: app/extensions/cursor-resolver/dist/main.js sha256:677b774c75dfff0de56084737d26169857daed3731cb62a6702840900f439aed
// module: 269 range:65789..70421
// basis: webpack-id confidence: C
// method: split
// run: ext-p0 2026-11-05T10:07:22.069Z
269: (e2, t2, n2) => {
    Object.defineProperty(t2, "__esModule", { value: true }), t2.createRegistryFromDescriptors = void 0;
    const r2 = n2(98), o2 = n2(599), a2 = n2(291), s2 = n2(822), i2 = n2(907), l2 = n2(574), u2 = n2(245), c2 = n2(668), m2 = n2(970), p2 = n2(814), d2 = n2(609), f2 = n2(21), T2 = n2(374), g2 = n2(101), E2 = n2(706), y2 = [u2.Any, l2.Duration, c2.Empty, m2.FieldMask, p2.Struct, p2.Value, p2.ListValue, i2.Timestamp, l2.Duration, f2.DoubleValue, f2.FloatValue, f2.Int64Value, f2.Int32Value, f2.UInt32Value, f2.UInt64Value, f2.BoolValue, f2.StringValue, f2.BytesValue], h2 = [(0, d2.getEnumType)(p2.NullValue)];
    function N2(e3, t3) {
      var n3;
      const o3 = { kind: e3.fieldKind, no: e3.number, name: e3.name, jsonName: e3.jsonName, delimited: e3.proto.type == T2.FieldDescriptorProto_Type.GROUP, repeated: e3.repeated, packed: e3.packed, oneof: null === (n3 = e3.oneof) || void 0 === n3 ? void 0 : n3.name, opt: e3.optional, req: e3.proto.label === T2.FieldDescriptorProto_Label.REQUIRED };
      switch (e3.fieldKind) {
        case "map": {
          let n4;
          switch ((0, r2.assert)("field" == e3.kind), e3.mapValue.kind) {
            case "scalar":
              n4 = e3.mapValue.scalar;
              break;
            case "enum":
              n4 = _2(e3.mapValue.enum, t3, e3);
              break;
            case "message":
              n4 = _2(e3.mapValue.message, t3, e3);
          }
          o3.K = e3.mapKey, o3.V = { kind: e3.mapValue.kind, T: n4 };
          break;
        }
        case "message":
          o3.T = _2(e3.message, t3, e3);
          break;
        case "enum":
          o3.T = _2(e3.enum, t3, e3), o3.default = e3.getDefaultValue();
          break;
        case "scalar":
          o3.L = e3.longType, o3.T = e3.scalar, o3.default = e3.getDefaultValue();
      }
      return o3;
    }
    function _2(e3, t3, n3) {
      const o3 = "message" == e3.kind ? t3.findMessage(e3.typeName) : t3.findEnum(e3.typeName);
      return (0, r2.assert)(o3, `${e3.toString()}" for ${n3.toString()} not found`), o3;
    }
    t2.createRegistryFromDescriptors = function(e3, t3 = true) {
      const n3 = e3 instanceof Uint8Array || (0, E2.isMessage)(e3, T2.FileDescriptorSet) ? (0, g2.createDescriptorSet)(e3) : e3, r3 = /* @__PURE__ */ new Map(), i3 = /* @__PURE__ */ new Map(), l3 = /* @__PURE__ */ new Map(), u3 = /* @__PURE__ */ new Map(), c3 = {};
      if (t3) {
        for (const e4 of y2) i3.set(e4.typeName, e4);
        for (const e4 of h2) r3.set(e4.typeName, e4);
      }
      return { findEnum(e4) {
        const t4 = r3.get(e4);
        if (t4) return t4;
        const i4 = n3.enums.get(e4);
        if (!i4) return;
        const l4 = ("proto3" == i4.file.syntax ? o2.proto3 : a2.proto2).makeEnumType(e4, i4.values.map((e5) => ({ no: e5.number, name: e5.name, localName: (0, s2.localName)(e5) })), {});
        return r3.set(e4, l4), l4;
      }, findMessage(e4) {
        const t4 = i3.get(e4);
        if (t4) return t4;
        const r4 = n3.messages.get(e4);
        if (!r4) return;
        const l4 = "proto3" == r4.file.syntax ? o2.proto3 : a2.proto2, u4 = [], c4 = l4.makeMessageType(e4, () => u4, { localName: (0, s2.localName)(r4) });
        i3.set(e4, c4);
        for (const e5 of r4.fields) u4.push(N2(e5, this));
        return c4;
      }, findService(e4) {
        const t4 = c3[e4];
        if (t4) return t4;
        const r4 = n3.services.get(e4);
        if (!r4) return;
        const o3 = {};
        for (const e5 of r4.methods) {
          const t5 = _2(e5.input, this, e5), n4 = _2(e5.output, this, e5);
          o3[(0, s2.localName)(e5)] = { name: e5.name, I: t5, O: n4, kind: e5.methodKind, idempotency: e5.idempotency };
        }
        return c3[e4] = { typeName: r4.typeName, methods: o3 };
      }, findExtensionFor(e4, t4) {
        var r4;
        if (!n3.messages.has(e4)) return;
        let o3 = u3.get(e4);
        if (!o3) {
          o3 = /* @__PURE__ */ new Map(), u3.set(e4, o3);
          for (const t5 of n3.extensions.values()) t5.extendee.typeName == e4 && o3.set(t5.number, t5);
        }
        const a3 = null === (r4 = u3.get(e4)) || void 0 === r4 ? void 0 : r4.get(t4);
        return a3 ? this.findExtension(a3.typeName) : void 0;
      }, findExtension(e4) {
        const t4 = l3.get(e4);
        if (t4) return t4;
        const r4 = n3.extensions.get(e4);
        if (!r4) return;
        const s3 = _2(r4.extendee, this, r4), i4 = ("proto3" == r4.file.syntax ? o2.proto3 : a2.proto2).makeExtension(e4, s3, N2(r4, this));
        return l3.set(e4, i4), i4;
      } };
    };
  }
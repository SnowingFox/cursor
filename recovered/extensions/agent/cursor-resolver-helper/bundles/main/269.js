// @recovered-by cursor-re
// artifact: app/extensions/cursor-resolver-helper/dist/main.js sha256:0eb6078f0829c93d9374e39385fef22eabf7657a05c3cdf5bf316d9dbcf5ad0e
// module: 269 range:65789..70421
// basis: webpack-id confidence: C
// method: split
// run: ext-agent 2026-11-05T10:20:08.356Z
269: (e2, a2, n2) => {
    Object.defineProperty(a2, "__esModule", { value: true }), a2.createRegistryFromDescriptors = void 0;
    const o2 = n2(98), s2 = n2(599), t2 = n2(291), r2 = n2(822), i2 = n2(907), m2 = n2(574), l2 = n2(245), d2 = n2(668), c2 = n2(970), T2 = n2(814), _2 = n2(609), p2 = n2(21), u2 = n2(374), k2 = n2(101), g2 = n2(706), E2 = [l2.Any, m2.Duration, d2.Empty, c2.FieldMask, T2.Struct, T2.Value, T2.ListValue, i2.Timestamp, m2.Duration, p2.DoubleValue, p2.FloatValue, p2.Int64Value, p2.Int32Value, p2.UInt32Value, p2.UInt64Value, p2.BoolValue, p2.StringValue, p2.BytesValue], f2 = [(0, _2.getEnumType)(T2.NullValue)];
    function N2(e3, a3) {
      var n3;
      const s3 = { kind: e3.fieldKind, no: e3.number, name: e3.name, jsonName: e3.jsonName, delimited: e3.proto.type == u2.FieldDescriptorProto_Type.GROUP, repeated: e3.repeated, packed: e3.packed, oneof: null === (n3 = e3.oneof) || void 0 === n3 ? void 0 : n3.name, opt: e3.optional, req: e3.proto.label === u2.FieldDescriptorProto_Label.REQUIRED };
      switch (e3.fieldKind) {
        case "map": {
          let n4;
          switch ((0, o2.assert)("field" == e3.kind), e3.mapValue.kind) {
            case "scalar":
              n4 = e3.mapValue.scalar;
              break;
            case "enum":
              n4 = v2(e3.mapValue.enum, a3, e3);
              break;
            case "message":
              n4 = v2(e3.mapValue.message, a3, e3);
          }
          s3.K = e3.mapKey, s3.V = { kind: e3.mapValue.kind, T: n4 };
          break;
        }
        case "message":
          s3.T = v2(e3.message, a3, e3);
          break;
        case "enum":
          s3.T = v2(e3.enum, a3, e3), s3.default = e3.getDefaultValue();
          break;
        case "scalar":
          s3.L = e3.longType, s3.T = e3.scalar, s3.default = e3.getDefaultValue();
      }
      return s3;
    }
    function v2(e3, a3, n3) {
      const s3 = "message" == e3.kind ? a3.findMessage(e3.typeName) : a3.findEnum(e3.typeName);
      return (0, o2.assert)(s3, `${e3.toString()}" for ${n3.toString()} not found`), s3;
    }
    a2.createRegistryFromDescriptors = function(e3, a3 = true) {
      const n3 = e3 instanceof Uint8Array || (0, g2.isMessage)(e3, u2.FileDescriptorSet) ? (0, k2.createDescriptorSet)(e3) : e3, o3 = /* @__PURE__ */ new Map(), i3 = /* @__PURE__ */ new Map(), m3 = /* @__PURE__ */ new Map(), l3 = /* @__PURE__ */ new Map(), d3 = {};
      if (a3) {
        for (const e4 of E2) i3.set(e4.typeName, e4);
        for (const e4 of f2) o3.set(e4.typeName, e4);
      }
      return { findEnum(e4) {
        const a4 = o3.get(e4);
        if (a4) return a4;
        const i4 = n3.enums.get(e4);
        if (!i4) return;
        const m4 = ("proto3" == i4.file.syntax ? s2.proto3 : t2.proto2).makeEnumType(e4, i4.values.map((e5) => ({ no: e5.number, name: e5.name, localName: (0, r2.localName)(e5) })), {});
        return o3.set(e4, m4), m4;
      }, findMessage(e4) {
        const a4 = i3.get(e4);
        if (a4) return a4;
        const o4 = n3.messages.get(e4);
        if (!o4) return;
        const m4 = "proto3" == o4.file.syntax ? s2.proto3 : t2.proto2, l4 = [], d4 = m4.makeMessageType(e4, () => l4, { localName: (0, r2.localName)(o4) });
        i3.set(e4, d4);
        for (const e5 of o4.fields) l4.push(N2(e5, this));
        return d4;
      }, findService(e4) {
        const a4 = d3[e4];
        if (a4) return a4;
        const o4 = n3.services.get(e4);
        if (!o4) return;
        const s3 = {};
        for (const e5 of o4.methods) {
          const a5 = v2(e5.input, this, e5), n4 = v2(e5.output, this, e5);
          s3[(0, r2.localName)(e5)] = { name: e5.name, I: a5, O: n4, kind: e5.methodKind, idempotency: e5.idempotency };
        }
        return d3[e4] = { typeName: o4.typeName, methods: s3 };
      }, findExtensionFor(e4, a4) {
        var o4;
        if (!n3.messages.has(e4)) return;
        let s3 = l3.get(e4);
        if (!s3) {
          s3 = /* @__PURE__ */ new Map(), l3.set(e4, s3);
          for (const a5 of n3.extensions.values()) a5.extendee.typeName == e4 && s3.set(a5.number, a5);
        }
        const t3 = null === (o4 = l3.get(e4)) || void 0 === o4 ? void 0 : o4.get(a4);
        return t3 ? this.findExtension(t3.typeName) : void 0;
      }, findExtension(e4) {
        const a4 = m3.get(e4);
        if (a4) return a4;
        const o4 = n3.extensions.get(e4);
        if (!o4) return;
        const r3 = v2(o4.extendee, this, o4), i4 = ("proto3" == o4.file.syntax ? s2.proto3 : t2.proto2).makeExtension(e4, r3, N2(o4, this));
        return m3.set(e4, i4), i4;
      } };
    };
  }
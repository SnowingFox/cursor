// @recovered-by cursor-re
// artifact: app/extensions/cursor-agent-worker/dist/main.js sha256:d5af94b4e40f694b81a675a0fb00fa8d060306ca064a011e953218d005b613d5
// module: 8269 range:321766..326717
// basis: webpack-id confidence: C
// method: split
// run: ext-agent 2026-11-05T10:20:08.356Z
8269: (e10, a10, n10) => {
    Object.defineProperty(a10, "__esModule", { value: true }), a10.createRegistryFromDescriptors = void 0;
    const s10 = n10(3098), o10 = n10(7599), r10 = n10(3672), t10 = n10(5822), i10 = n10(7907), m10 = n10(1193), l10 = n10(8245), d10 = n10(7668), c10 = n10(970), T10 = n10(8814), p10 = n10(609), _10 = n10(8021), k10 = n10(7374), u10 = n10(1101), g10 = n10(2706), E10 = [l10.Any, m10.Duration, d10.Empty, c10.FieldMask, T10.Struct, T10.Value, T10.ListValue, i10.Timestamp, m10.Duration, _10.DoubleValue, _10.FloatValue, _10.Int64Value, _10.Int32Value, _10.UInt32Value, _10.UInt64Value, _10.BoolValue, _10.StringValue, _10.BytesValue], v10 = [(0, p10.getEnumType)(T10.NullValue)];
    function y10(e11, a11) {
      var n11;
      const o11 = { kind: e11.fieldKind, no: e11.number, name: e11.name, jsonName: e11.jsonName, delimited: e11.proto.type == k10.FieldDescriptorProto_Type.GROUP, repeated: e11.repeated, packed: e11.packed, oneof: null === (n11 = e11.oneof) || void 0 === n11 ? void 0 : n11.name, opt: e11.optional, req: e11.proto.label === k10.FieldDescriptorProto_Label.REQUIRED };
      switch (e11.fieldKind) {
        case "map": {
          let n12;
          switch ((0, s10.assert)("field" == e11.kind), e11.mapValue.kind) {
            case "scalar":
              n12 = e11.mapValue.scalar;
              break;
            case "enum":
              n12 = S10(e11.mapValue.enum, a11, e11);
              break;
            case "message":
              n12 = S10(e11.mapValue.message, a11, e11);
          }
          o11.K = e11.mapKey, o11.V = { kind: e11.mapValue.kind, T: n12 };
          break;
        }
        case "message":
          o11.T = S10(e11.message, a11, e11);
          break;
        case "enum":
          o11.T = S10(e11.enum, a11, e11), o11.default = e11.getDefaultValue();
          break;
        case "scalar":
          o11.L = e11.longType, o11.T = e11.scalar, o11.default = e11.getDefaultValue();
      }
      return o11;
    }
    function S10(e11, a11, n11) {
      const o11 = "message" == e11.kind ? a11.findMessage(e11.typeName) : a11.findEnum(e11.typeName);
      return (0, s10.assert)(o11, `${e11.toString()}" for ${n11.toString()} not found`), o11;
    }
    a10.createRegistryFromDescriptors = function(e11, a11 = true) {
      const n11 = e11 instanceof Uint8Array || (0, g10.isMessage)(e11, k10.FileDescriptorSet) ? (0, u10.createDescriptorSet)(e11) : e11, s11 = /* @__PURE__ */ new Map(), i11 = /* @__PURE__ */ new Map(), m11 = /* @__PURE__ */ new Map(), l11 = /* @__PURE__ */ new Map(), d11 = {};
      if (a11) {
        for (const e12 of E10) i11.set(e12.typeName, e12);
        for (const e12 of v10) s11.set(e12.typeName, e12);
      }
      return { findEnum(e12) {
        const a12 = s11.get(e12);
        if (a12) return a12;
        const i12 = n11.enums.get(e12);
        if (!i12) return;
        const m12 = ("proto3" == i12.file.syntax ? o10.proto3 : r10.proto2).makeEnumType(e12, i12.values.map((e13) => ({ no: e13.number, name: e13.name, localName: (0, t10.localName)(e13) })), {});
        return s11.set(e12, m12), m12;
      }, findMessage(e12) {
        const a12 = i11.get(e12);
        if (a12) return a12;
        const s12 = n11.messages.get(e12);
        if (!s12) return;
        const m12 = "proto3" == s12.file.syntax ? o10.proto3 : r10.proto2, l12 = [], d12 = m12.makeMessageType(e12, () => l12, { localName: (0, t10.localName)(s12) });
        i11.set(e12, d12);
        for (const e13 of s12.fields) l12.push(y10(e13, this));
        return d12;
      }, findService(e12) {
        const a12 = d11[e12];
        if (a12) return a12;
        const s12 = n11.services.get(e12);
        if (!s12) return;
        const o11 = {};
        for (const e13 of s12.methods) {
          const a13 = S10(e13.input, this, e13), n12 = S10(e13.output, this, e13);
          o11[(0, t10.localName)(e13)] = { name: e13.name, I: a13, O: n12, kind: e13.methodKind, idempotency: e13.idempotency };
        }
        return d11[e12] = { typeName: s12.typeName, methods: o11 };
      }, findExtensionFor(e12, a12) {
        var s12;
        if (!n11.messages.has(e12)) return;
        let o11 = l11.get(e12);
        if (!o11) {
          o11 = /* @__PURE__ */ new Map(), l11.set(e12, o11);
          for (const a13 of n11.extensions.values()) a13.extendee.typeName == e12 && o11.set(a13.number, a13);
        }
        const r11 = null === (s12 = l11.get(e12)) || void 0 === s12 ? void 0 : s12.get(a12);
        return r11 ? this.findExtension(r11.typeName) : void 0;
      }, findExtension(e12) {
        const a12 = m11.get(e12);
        if (a12) return a12;
        const s12 = n11.extensions.get(e12);
        if (!s12) return;
        const t11 = S10(s12.extendee, this, s12), i12 = ("proto3" == s12.file.syntax ? o10.proto3 : r10.proto2).makeExtension(e12, t11, y10(s12, this));
        return m11.set(e12, i12), i12;
      } };
    };
  }
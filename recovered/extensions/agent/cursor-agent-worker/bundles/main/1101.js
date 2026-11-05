// @recovered-by cursor-re
// artifact: app/extensions/cursor-agent-worker/dist/main.js sha256:d5af94b4e40f694b81a675a0fb00fa8d060306ca064a011e953218d005b613d5
// module: 1101 range:42051..68199
// basis: webpack-id confidence: C
// method: split
// run: ext-agent 2026-11-05T10:20:08.356Z
1101: (e10, a10, n10) => {
    Object.defineProperty(a10, "__esModule", { value: true }), a10.createDescriptorSet = void 0;
    const s10 = n10(7374), o10 = n10(3098), r10 = n10(2422), t10 = n10(5822), i10 = n10(1663), m10 = n10(9301), l10 = n10(3408), d10 = n10(2706);
    function c10(e11, a11, n11) {
      var s11, r11;
      (0, o10.assert)(e11.name, "invalid FileDescriptorProto: missing name");
      const t11 = Object.assign(Object.assign({ kind: "file", proto: e11, deprecated: null !== (r11 = null === (s11 = e11.options) || void 0 === s11 ? void 0 : s11.deprecated) && void 0 !== r11 && r11 }, y10(e11.syntax, e11.edition)), { name: e11.name.replace(/\.proto/, ""), dependencies: S10(e11, a11), enums: [], messages: [], extensions: [], services: [], toString() {
        return `file ${this.proto.name}`;
      }, getSyntaxComments() {
        return M10(this.proto.sourceCodeInfo, [C10.FileDescriptorProto_Syntax]);
      }, getPackageComments() {
        return M10(this.proto.sourceCodeInfo, [C10.FileDescriptorProto_Package]);
      }, getFeatures() {
        var a12;
        return n11(null === (a12 = e11.options) || void 0 === a12 ? void 0 : a12.features);
      } });
      a11.mapEntries.clear();
      for (const s12 of e11.enumType) _10(s12, t11, void 0, a11, n11);
      for (const s12 of e11.messageType) k10(s12, t11, void 0, a11, n11);
      for (const s12 of e11.service) u10(s12, t11, a11, n11);
      T10(t11, a11, n11);
      for (const e12 of a11.mapEntries.values()) p10(e12, a11, n11);
      for (const e12 of t11.messages) p10(e12, a11, n11), T10(e12, a11, n11);
      a11.mapEntries.clear(), a11.files.push(t11);
    }
    function T10(e11, a11, n11) {
      switch (e11.kind) {
        case "file":
          for (const s11 of e11.proto.extension) {
            const o11 = v10(s11, e11, void 0, a11, n11);
            e11.extensions.push(o11), a11.extensions.set(o11.typeName, o11);
          }
          break;
        case "message":
          for (const s11 of e11.proto.extension) {
            const o11 = v10(s11, e11.file, e11, a11, n11);
            e11.nestedExtensions.push(o11), a11.extensions.set(o11.typeName, o11);
          }
          for (const s11 of e11.nestedMessages) T10(s11, a11, n11);
      }
    }
    function p10(e11, a11, n11) {
      const s11 = e11.proto.oneofDecl.map((a12) => (function(e12, a13, n12) {
        return (0, o10.assert)(e12.name, "invalid OneofDescriptorProto: missing name"), { kind: "oneof", proto: e12, deprecated: false, parent: a13, fields: [], name: e12.name, toString() {
          return `oneof ${a13.typeName}.${this.name}`;
        }, getComments() {
          const e13 = [...this.parent.getComments().sourcePath, C10.DescriptorProto_OneofDecl, this.parent.proto.oneofDecl.indexOf(this.proto)];
          return M10(a13.file.proto.sourceCodeInfo, e13);
        }, getFeatures() {
          var s12;
          return n12(a13.getFeatures(), null === (s12 = e12.options) || void 0 === s12 ? void 0 : s12.features);
        } };
      })(a12, e11, n11)), r11 = /* @__PURE__ */ new Set();
      for (const o11 of e11.proto.field) {
        const t11 = f10(o11, s11), i11 = E10(o11, e11.file, e11, t11, a11, n11);
        e11.fields.push(i11), void 0 === t11 ? e11.members.push(i11) : (t11.fields.push(i11), r11.has(t11) || (r11.add(t11), e11.members.push(t11)));
      }
      for (const a12 of s11.filter((e12) => r11.has(e12))) e11.oneofs.push(a12);
      for (const s12 of e11.nestedMessages) p10(s12, a11, n11);
    }
    function _10(e11, a11, n11, s11, r11) {
      var i11, m11, l11;
      (0, o10.assert)(e11.name, "invalid EnumDescriptorProto: missing name");
      const d11 = { kind: "enum", proto: e11, deprecated: null !== (m11 = null === (i11 = e11.options) || void 0 === i11 ? void 0 : i11.deprecated) && void 0 !== m11 && m11, file: a11, parent: n11, name: e11.name, typeName: R10(e11, n11, a11), values: [], sharedPrefix: (0, t10.findEnumSharedPrefix)(e11.name, e11.value.map((e12) => {
        var a12;
        return null !== (a12 = e12.name) && void 0 !== a12 ? a12 : "";
      })), toString() {
        return `enum ${this.typeName}`;
      }, getComments() {
        const e12 = this.parent ? [...this.parent.getComments().sourcePath, C10.DescriptorProto_EnumType, this.parent.proto.enumType.indexOf(this.proto)] : [C10.FileDescriptorProto_EnumType, this.file.proto.enumType.indexOf(this.proto)];
        return M10(a11.proto.sourceCodeInfo, e12);
      }, getFeatures() {
        var s12, o11;
        return r11(null !== (s12 = null == n11 ? void 0 : n11.getFeatures()) && void 0 !== s12 ? s12 : a11.getFeatures(), null === (o11 = e11.options) || void 0 === o11 ? void 0 : o11.features);
      } };
      s11.enums.set(d11.typeName, d11), e11.value.forEach((e12) => {
        var n12, s12;
        (0, o10.assert)(e12.name, "invalid EnumValueDescriptorProto: missing name"), (0, o10.assert)(void 0 !== e12.number, "invalid EnumValueDescriptorProto: missing number"), d11.values.push({ kind: "enum_value", proto: e12, deprecated: null !== (s12 = null === (n12 = e12.options) || void 0 === n12 ? void 0 : n12.deprecated) && void 0 !== s12 && s12, parent: d11, name: e12.name, number: e12.number, toString() {
          return `enum value ${d11.typeName}.${this.name}`;
        }, declarationString() {
          var e13;
          let a12 = `${this.name} = ${this.number}`;
          return true === (null === (e13 = this.proto.options) || void 0 === e13 ? void 0 : e13.deprecated) && (a12 += " [deprecated = true]"), a12;
        }, getComments() {
          const e13 = [...this.parent.getComments().sourcePath, C10.EnumDescriptorProto_Value, this.parent.proto.value.indexOf(this.proto)];
          return M10(a11.proto.sourceCodeInfo, e13);
        }, getFeatures() {
          var a12;
          return r11(d11.getFeatures(), null === (a12 = e12.options) || void 0 === a12 ? void 0 : a12.features);
        } });
      }), (null !== (l11 = null == n11 ? void 0 : n11.nestedEnums) && void 0 !== l11 ? l11 : a11.enums).push(d11);
    }
    function k10(e11, a11, n11, s11, r11) {
      var t11, i11, m11, l11;
      (0, o10.assert)(e11.name, "invalid DescriptorProto: missing name");
      const d11 = { kind: "message", proto: e11, deprecated: null !== (i11 = null === (t11 = e11.options) || void 0 === t11 ? void 0 : t11.deprecated) && void 0 !== i11 && i11, file: a11, parent: n11, name: e11.name, typeName: R10(e11, n11, a11), fields: [], oneofs: [], members: [], nestedEnums: [], nestedMessages: [], nestedExtensions: [], toString() {
        return `message ${this.typeName}`;
      }, getComments() {
        const e12 = this.parent ? [...this.parent.getComments().sourcePath, C10.DescriptorProto_NestedType, this.parent.proto.nestedType.indexOf(this.proto)] : [C10.FileDescriptorProto_MessageType, this.file.proto.messageType.indexOf(this.proto)];
        return M10(a11.proto.sourceCodeInfo, e12);
      }, getFeatures() {
        var s12, o11;
        return r11(null !== (s12 = null == n11 ? void 0 : n11.getFeatures()) && void 0 !== s12 ? s12 : a11.getFeatures(), null === (o11 = e11.options) || void 0 === o11 ? void 0 : o11.features);
      } };
      true === (null === (m11 = e11.options) || void 0 === m11 ? void 0 : m11.mapEntry) ? s11.mapEntries.set(d11.typeName, d11) : ((null !== (l11 = null == n11 ? void 0 : n11.nestedMessages) && void 0 !== l11 ? l11 : a11.messages).push(d11), s11.messages.set(d11.typeName, d11));
      for (const n12 of e11.enumType) _10(n12, a11, d11, s11, r11);
      for (const n12 of e11.nestedType) k10(n12, a11, d11, s11, r11);
    }
    function u10(e11, a11, n11, s11) {
      var r11, t11;
      (0, o10.assert)(e11.name, "invalid ServiceDescriptorProto: missing name");
      const i11 = { kind: "service", proto: e11, deprecated: null !== (t11 = null === (r11 = e11.options) || void 0 === r11 ? void 0 : r11.deprecated) && void 0 !== t11 && t11, file: a11, name: e11.name, typeName: R10(e11, void 0, a11), methods: [], toString() {
        return `service ${this.typeName}`;
      }, getComments() {
        const e12 = [C10.FileDescriptorProto_Service, this.file.proto.service.indexOf(this.proto)];
        return M10(a11.proto.sourceCodeInfo, e12);
      }, getFeatures() {
        var n12;
        return s11(a11.getFeatures(), null === (n12 = e11.options) || void 0 === n12 ? void 0 : n12.features);
      } };
      a11.services.push(i11), n11.services.set(i11.typeName, i11);
      for (const a12 of e11.method) i11.methods.push(g10(a12, i11, n11, s11));
    }
    function g10(e11, a11, n11, t11) {
      var i11, m11, l11;
      let d11, c11;
      switch ((0, o10.assert)(e11.name, "invalid MethodDescriptorProto: missing name"), (0, o10.assert)(e11.inputType, "invalid MethodDescriptorProto: missing input_type"), (0, o10.assert)(e11.outputType, "invalid MethodDescriptorProto: missing output_type"), d11 = true === e11.clientStreaming && true === e11.serverStreaming ? r10.MethodKind.BiDiStreaming : true === e11.clientStreaming ? r10.MethodKind.ClientStreaming : true === e11.serverStreaming ? r10.MethodKind.ServerStreaming : r10.MethodKind.Unary, null === (i11 = e11.options) || void 0 === i11 ? void 0 : i11.idempotencyLevel) {
        case s10.MethodOptions_IdempotencyLevel.IDEMPOTENT:
          c11 = r10.MethodIdempotency.Idempotent;
          break;
        case s10.MethodOptions_IdempotencyLevel.NO_SIDE_EFFECTS:
          c11 = r10.MethodIdempotency.NoSideEffects;
          break;
        case s10.MethodOptions_IdempotencyLevel.IDEMPOTENCY_UNKNOWN:
        case void 0:
          c11 = void 0;
      }
      const T11 = n11.messages.get(I10(e11.inputType)), p11 = n11.messages.get(I10(e11.outputType));
      (0, o10.assert)(T11, `invalid MethodDescriptorProto: input_type ${e11.inputType} not found`), (0, o10.assert)(p11, `invalid MethodDescriptorProto: output_type ${e11.inputType} not found`);
      const _11 = e11.name;
      return { kind: "rpc", proto: e11, deprecated: null !== (l11 = null === (m11 = e11.options) || void 0 === m11 ? void 0 : m11.deprecated) && void 0 !== l11 && l11, parent: a11, name: _11, methodKind: d11, input: T11, output: p11, idempotency: c11, toString: () => `rpc ${a11.typeName}.${_11}`, getComments() {
        const e12 = [...this.parent.getComments().sourcePath, C10.ServiceDescriptorProto_Method, this.parent.proto.method.indexOf(this.proto)];
        return M10(a11.file.proto.sourceCodeInfo, e12);
      }, getFeatures() {
        var n12;
        return t11(a11.getFeatures(), null === (n12 = e11.options) || void 0 === n12 ? void 0 : n12.features);
      } };
    }
    function E10(e11, a11, n11, r11, i11, m11) {
      var d11, c11, T11;
      (0, o10.assert)(e11.name, "invalid FieldDescriptorProto: missing name"), (0, o10.assert)(e11.number, "invalid FieldDescriptorProto: missing number"), (0, o10.assert)(e11.type, "invalid FieldDescriptorProto: missing type");
      const p11 = { proto: e11, deprecated: null !== (c11 = null === (d11 = e11.options) || void 0 === d11 ? void 0 : d11.deprecated) && void 0 !== c11 && c11, name: e11.name, number: e11.number, parent: n11, oneof: r11, optional: N10(e11, a11.syntax), packedByDefault: O10(e11, m11), packed: h10(a11, n11, e11, m11), jsonName: e11.jsonName === (0, t10.fieldJsonName)(e11.name) ? void 0 : e11.jsonName, scalar: void 0, longType: void 0, message: void 0, enum: void 0, mapKey: void 0, mapValue: void 0, declarationString: b10, toString() {
        return `field ${this.parent.typeName}.${this.name}`;
      }, getComments() {
        const e12 = [...this.parent.getComments().sourcePath, C10.DescriptorProto_Field, this.parent.proto.field.indexOf(this.proto)];
        return M10(a11.proto.sourceCodeInfo, e12);
      }, getFeatures() {
        var a12;
        return m11(n11.getFeatures(), null === (a12 = e11.options) || void 0 === a12 ? void 0 : a12.features);
      } }, _11 = e11.label === s10.FieldDescriptorProto_Label.REPEATED;
      switch (e11.type) {
        case s10.FieldDescriptorProto_Type.MESSAGE:
        case s10.FieldDescriptorProto_Type.GROUP: {
          (0, o10.assert)(e11.typeName, "invalid FieldDescriptorProto: missing type_name");
          const a12 = i11.mapEntries.get(I10(e11.typeName));
          if (void 0 !== a12) return (0, o10.assert)(_11, "invalid FieldDescriptorProto: expected map entry to be repeated"), Object.assign(Object.assign(Object.assign({}, p11), { kind: "field", fieldKind: "map", repeated: false }), (function(e12) {
            var a13, n13;
            (0, o10.assert)(null === (a13 = e12.proto.options) || void 0 === a13 ? void 0 : a13.mapEntry, `invalid DescriptorProto: expected ${e12.toString()} to be a map entry`), (0, o10.assert)(2 === e12.fields.length, `invalid DescriptorProto: map entry ${e12.toString()} has ${e12.fields.length} fields`);
            const s11 = e12.fields.find((e13) => 1 === e13.proto.number);
            (0, o10.assert)(s11, `invalid DescriptorProto: map entry ${e12.toString()} is missing key field`);
            const r12 = s11.scalar;
            (0, o10.assert)(void 0 !== r12 && r12 !== l10.ScalarType.BYTES && r12 !== l10.ScalarType.FLOAT && r12 !== l10.ScalarType.DOUBLE, `invalid DescriptorProto: map entry ${e12.toString()} has unexpected key type ${null !== (n13 = s11.proto.type) && void 0 !== n13 ? n13 : -1}`);
            const t11 = e12.fields.find((e13) => 2 === e13.proto.number);
            switch ((0, o10.assert)(t11, `invalid DescriptorProto: map entry ${e12.toString()} is missing value field`), t11.fieldKind) {
              case "scalar":
                return { mapKey: r12, mapValue: Object.assign(Object.assign({}, t11), { kind: "scalar" }) };
              case "message":
                return { mapKey: r12, mapValue: Object.assign(Object.assign({}, t11), { kind: "message" }) };
              case "enum":
                return { mapKey: r12, mapValue: Object.assign(Object.assign({}, t11), { kind: "enum" }) };
              default:
                throw new Error("invalid DescriptorProto: unsupported map entry value field");
            }
          })(a12));
          const n12 = i11.messages.get(I10(e11.typeName));
          return (0, o10.assert)(void 0 !== n12, `invalid FieldDescriptorProto: type_name ${e11.typeName} not found`), Object.assign(Object.assign({}, p11), { kind: "field", fieldKind: "message", repeated: _11, message: n12 });
        }
        case s10.FieldDescriptorProto_Type.ENUM: {
          (0, o10.assert)(e11.typeName, "invalid FieldDescriptorProto: missing type_name");
          const a12 = i11.enums.get(I10(e11.typeName));
          return (0, o10.assert)(void 0 !== a12, `invalid FieldDescriptorProto: type_name ${e11.typeName} not found`), Object.assign(Object.assign({}, p11), { kind: "field", fieldKind: "enum", getDefaultValue: U10, repeated: _11, enum: a12 });
        }
        default: {
          const a12 = A10[e11.type];
          return (0, o10.assert)(a12, `invalid FieldDescriptorProto: unknown type ${e11.type}`), Object.assign(Object.assign({}, p11), { kind: "field", fieldKind: "scalar", getDefaultValue: U10, repeated: _11, scalar: a12, longType: (null === (T11 = e11.options) || void 0 === T11 ? void 0 : T11.jstype) == s10.FieldOptions_JSType.JS_STRING ? l10.LongType.STRING : l10.LongType.BIGINT });
        }
      }
    }
    function v10(e11, a11, n11, s11, r11) {
      (0, o10.assert)(e11.extendee, "invalid FieldDescriptorProto: missing extendee");
      const t11 = E10(e11, a11, null, void 0, s11, r11), i11 = s11.messages.get(I10(e11.extendee));
      return (0, o10.assert)(i11, `invalid FieldDescriptorProto: extendee ${e11.extendee} not found`), Object.assign(Object.assign({}, t11), { kind: "extension", typeName: R10(e11, n11, a11), parent: n11, file: a11, extendee: i11, toString() {
        return `extension ${this.typeName}`;
      }, getComments() {
        const n12 = this.parent ? [...this.parent.getComments().sourcePath, C10.DescriptorProto_Extension, this.parent.proto.extension.indexOf(e11)] : [C10.FileDescriptorProto_Extension, this.file.proto.extension.indexOf(e11)];
        return M10(a11.proto.sourceCodeInfo, n12);
      }, getFeatures() {
        var s12;
        return r11((null != n11 ? n11 : a11).getFeatures(), null === (s12 = e11.options) || void 0 === s12 ? void 0 : s12.features);
      } });
    }
    function y10(e11, a11) {
      let n11, o11;
      switch (e11) {
        case void 0:
        case "proto2":
          o11 = "proto2", n11 = s10.Edition.EDITION_PROTO2;
          break;
        case "proto3":
          o11 = "proto3", n11 = s10.Edition.EDITION_PROTO3;
          break;
        case "editions":
          switch (o11 = "editions", a11) {
            case void 0:
            case s10.Edition.EDITION_1_TEST_ONLY:
            case s10.Edition.EDITION_2_TEST_ONLY:
            case s10.Edition.EDITION_99997_TEST_ONLY:
            case s10.Edition.EDITION_99998_TEST_ONLY:
            case s10.Edition.EDITION_99999_TEST_ONLY:
            case s10.Edition.EDITION_UNKNOWN:
              n11 = s10.Edition.EDITION_UNKNOWN;
              break;
            default:
              n11 = a11;
          }
          break;
        default:
          throw new Error(`invalid FileDescriptorProto: unsupported syntax: ${e11}`);
      }
      if ("editions" === e11 && a11 === s10.Edition.EDITION_UNKNOWN) throw new Error(`invalid FileDescriptorProto: syntax ${e11} cannot have edition ${String(a11)}`);
      return { syntax: o11, edition: n11 };
    }
    function S10(e11, a11) {
      return e11.dependency.map((e12) => {
        const n11 = a11.files.find((a12) => a12.proto.name === e12);
        return (0, o10.assert)(n11), n11;
      });
    }
    function R10(e11, a11, n11) {
      let s11;
      return (0, o10.assert)(e11.name, `invalid ${e11.getType().typeName}: missing name`), s11 = a11 ? `${a11.typeName}.${e11.name}` : void 0 !== n11.proto.package ? `${n11.proto.package}.${e11.name}` : `${e11.name}`, s11;
    }
    function I10(e11) {
      return e11.startsWith(".") ? e11.substring(1) : e11;
    }
    function f10(e11, a11) {
      var n11;
      const s11 = e11.oneofIndex;
      if (void 0 === s11) return;
      let r11;
      return true !== e11.proto3Optional && (r11 = a11[s11], (0, o10.assert)(r11, `invalid FieldDescriptorProto: oneof #${s11} for field #${null !== (n11 = e11.number) && void 0 !== n11 ? n11 : -1} not found`)), r11;
    }
    function N10(e11, a11) {
      switch (a11) {
        case "proto2":
          return void 0 === e11.oneofIndex && e11.label === s10.FieldDescriptorProto_Label.OPTIONAL;
        case "proto3":
          return true === e11.proto3Optional;
        case "editions":
          return false;
      }
    }
    function O10(e11, a11) {
      const { repeatedFieldEncoding: n11 } = a11();
      if (n11 != s10.FeatureSet_RepeatedFieldEncoding.PACKED) return false;
      switch (e11.type) {
        case s10.FieldDescriptorProto_Type.STRING:
        case s10.FieldDescriptorProto_Type.BYTES:
        case s10.FieldDescriptorProto_Type.GROUP:
        case s10.FieldDescriptorProto_Type.MESSAGE:
          return false;
        default:
          return true;
      }
    }
    function h10(e11, a11, n11, o11) {
      var r11, t11, i11, m11, l11, d11;
      switch (n11.type) {
        case s10.FieldDescriptorProto_Type.STRING:
        case s10.FieldDescriptorProto_Type.BYTES:
        case s10.FieldDescriptorProto_Type.GROUP:
        case s10.FieldDescriptorProto_Type.MESSAGE:
          return false;
        default:
          switch (e11.edition) {
            case s10.Edition.EDITION_PROTO2:
              return null !== (t11 = null === (r11 = n11.options) || void 0 === r11 ? void 0 : r11.packed) && void 0 !== t11 && t11;
            case s10.Edition.EDITION_PROTO3:
              return null === (m11 = null === (i11 = n11.options) || void 0 === i11 ? void 0 : i11.packed) || void 0 === m11 || m11;
            default: {
              const { repeatedFieldEncoding: r12 } = o11(null !== (l11 = null == a11 ? void 0 : a11.getFeatures()) && void 0 !== l11 ? l11 : e11.getFeatures(), null === (d11 = n11.options) || void 0 === d11 ? void 0 : d11.features);
              return r12 == s10.FeatureSet_RepeatedFieldEncoding.PACKED;
            }
          }
      }
    }
    a10.createDescriptorSet = function(e11, a11) {
      var n11;
      const o11 = { files: [], enums: /* @__PURE__ */ new Map(), messages: /* @__PURE__ */ new Map(), services: /* @__PURE__ */ new Map(), extensions: /* @__PURE__ */ new Map(), mapEntries: /* @__PURE__ */ new Map() }, r11 = (0, d10.isMessage)(e11, s10.FileDescriptorSet) ? e11.file : e11 instanceof Uint8Array ? s10.FileDescriptorSet.fromBinary(e11).file : e11, t11 = /* @__PURE__ */ new Map();
      for (const e12 of r11) {
        const s11 = null !== (n11 = e12.edition) && void 0 !== n11 ? n11 : y10(e12.syntax, e12.edition).edition;
        let r12 = t11.get(s11);
        void 0 === r12 && (r12 = (0, m10.createFeatureResolver)(s11, null == a11 ? void 0 : a11.featureSetDefaults, null == a11 ? void 0 : a11.serializationOptions), t11.set(s11, r12)), c10(e12, o11, r12);
      }
      return o11;
    };
    const A10 = { [s10.FieldDescriptorProto_Type.DOUBLE]: l10.ScalarType.DOUBLE, [s10.FieldDescriptorProto_Type.FLOAT]: l10.ScalarType.FLOAT, [s10.FieldDescriptorProto_Type.INT64]: l10.ScalarType.INT64, [s10.FieldDescriptorProto_Type.UINT64]: l10.ScalarType.UINT64, [s10.FieldDescriptorProto_Type.INT32]: l10.ScalarType.INT32, [s10.FieldDescriptorProto_Type.FIXED64]: l10.ScalarType.FIXED64, [s10.FieldDescriptorProto_Type.FIXED32]: l10.ScalarType.FIXED32, [s10.FieldDescriptorProto_Type.BOOL]: l10.ScalarType.BOOL, [s10.FieldDescriptorProto_Type.STRING]: l10.ScalarType.STRING, [s10.FieldDescriptorProto_Type.GROUP]: void 0, [s10.FieldDescriptorProto_Type.MESSAGE]: void 0, [s10.FieldDescriptorProto_Type.BYTES]: l10.ScalarType.BYTES, [s10.FieldDescriptorProto_Type.UINT32]: l10.ScalarType.UINT32, [s10.FieldDescriptorProto_Type.ENUM]: void 0, [s10.FieldDescriptorProto_Type.SFIXED32]: l10.ScalarType.SFIXED32, [s10.FieldDescriptorProto_Type.SFIXED64]: l10.ScalarType.SFIXED64, [s10.FieldDescriptorProto_Type.SINT32]: l10.ScalarType.SINT32, [s10.FieldDescriptorProto_Type.SINT64]: l10.ScalarType.SINT64 };
    function M10(e11, a11) {
      if (!e11) return { leadingDetached: [], sourcePath: a11 };
      for (const n11 of e11.location) if (n11.path.length === a11.length && !n11.path.some((e12, n12) => a11[n12] !== e12)) return { leadingDetached: n11.leadingDetachedComments, leading: n11.leadingComments, trailing: n11.trailingComments, sourcePath: a11 };
      return { leadingDetached: [], sourcePath: a11 };
    }
    var C10;
    function b10() {
      var e11, a11, n11;
      const o11 = [];
      this.repeated && o11.push("repeated"), this.optional && o11.push("optional");
      let r11;
      switch ("proto2" == ("extension" === this.kind ? this.file : this.parent.file).syntax && this.proto.label === s10.FieldDescriptorProto_Label.REQUIRED && o11.push("required"), this.fieldKind) {
        case "scalar":
          r11 = l10.ScalarType[this.scalar].toLowerCase();
          break;
        case "enum":
          r11 = this.enum.typeName;
          break;
        case "message":
          r11 = this.message.typeName;
          break;
        case "map": {
          const e12 = l10.ScalarType[this.mapKey].toLowerCase();
          let a12;
          switch (this.mapValue.kind) {
            case "scalar":
              a12 = l10.ScalarType[this.mapValue.scalar].toLowerCase();
              break;
            case "enum":
              a12 = this.mapValue.enum.typeName;
              break;
            case "message":
              a12 = this.mapValue.message.typeName;
          }
          r11 = `map<${e12}, ${a12}>`;
          break;
        }
      }
      o11.push(`${r11} ${this.name} = ${this.number}`);
      const t11 = [];
      void 0 !== (null === (e11 = this.proto.options) || void 0 === e11 ? void 0 : e11.packed) && t11.push(`packed = ${this.proto.options.packed.toString()}`);
      let i11 = this.proto.defaultValue;
      return void 0 !== i11 && (this.proto.type != s10.FieldDescriptorProto_Type.BYTES && this.proto.type != s10.FieldDescriptorProto_Type.STRING || (i11 = '"' + i11.replace('"', '\\"') + '"'), t11.push(`default = ${i11}`)), void 0 !== this.jsonName && t11.push(`json_name = "${this.jsonName}"`), void 0 !== (null === (a11 = this.proto.options) || void 0 === a11 ? void 0 : a11.jstype) && t11.push(`jstype = ${s10.FieldOptions_JSType[this.proto.options.jstype]}`), true === (null === (n11 = this.proto.options) || void 0 === n11 ? void 0 : n11.deprecated) && t11.push("deprecated = true"), t11.length > 0 && o11.push("[" + t11.join(", ") + "]"), o11.join(" ");
    }
    function U10() {
      const e11 = this.proto.defaultValue;
      if (void 0 !== e11) switch (this.fieldKind) {
        case "enum":
          return (0, i10.parseTextFormatEnumValue)(this.enum, e11);
        case "scalar":
          return (0, i10.parseTextFormatScalarValue)(this.scalar, e11);
        default:
          return;
      }
    }
    !(function(e11) {
      e11[e11.FileDescriptorProto_Package = 2] = "FileDescriptorProto_Package", e11[e11.FileDescriptorProto_MessageType = 4] = "FileDescriptorProto_MessageType", e11[e11.FileDescriptorProto_EnumType = 5] = "FileDescriptorProto_EnumType", e11[e11.FileDescriptorProto_Service = 6] = "FileDescriptorProto_Service", e11[e11.FileDescriptorProto_Extension = 7] = "FileDescriptorProto_Extension", e11[e11.FileDescriptorProto_Syntax = 12] = "FileDescriptorProto_Syntax", e11[e11.DescriptorProto_Field = 2] = "DescriptorProto_Field", e11[e11.DescriptorProto_NestedType = 3] = "DescriptorProto_NestedType", e11[e11.DescriptorProto_EnumType = 4] = "DescriptorProto_EnumType", e11[e11.DescriptorProto_Extension = 6] = "DescriptorProto_Extension", e11[e11.DescriptorProto_OneofDecl = 8] = "DescriptorProto_OneofDecl", e11[e11.EnumDescriptorProto_Value = 2] = "EnumDescriptorProto_Value", e11[e11.ServiceDescriptorProto_Method = 2] = "ServiceDescriptorProto_Method";
    })(C10 || (C10 = {}));
  }
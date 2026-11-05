// @recovered-by cursor-re
// artifact: app/extensions/cursor-resolver-helper/dist/main.js sha256:0eb6078f0829c93d9374e39385fef22eabf7657a05c3cdf5bf316d9dbcf5ad0e
// module: 101 range:21186..46248
// basis: webpack-id confidence: C
// method: split
// run: ext-agent 2026-11-05T10:20:08.356Z
101: (e2, a2, n2) => {
    Object.defineProperty(a2, "__esModule", { value: true }), a2.createDescriptorSet = void 0;
    const o2 = n2(374), s2 = n2(98), t2 = n2(422), r2 = n2(822), i2 = n2(663), m2 = n2(301), l2 = n2(408), d2 = n2(706);
    function c2(e3, a3, n3) {
      var o3, t3;
      (0, s2.assert)(e3.name, "invalid FileDescriptorProto: missing name");
      const r3 = Object.assign(Object.assign({ kind: "file", proto: e3, deprecated: null !== (t3 = null === (o3 = e3.options) || void 0 === o3 ? void 0 : o3.deprecated) && void 0 !== t3 && t3 }, N2(e3.syntax, e3.edition)), { name: e3.name.replace(/\.proto/, ""), dependencies: v2(e3, a3), enums: [], messages: [], extensions: [], services: [], toString() {
        return `file ${this.proto.name}`;
      }, getSyntaxComments() {
        return h2(this.proto.sourceCodeInfo, [M2.FileDescriptorProto_Syntax]);
      }, getPackageComments() {
        return h2(this.proto.sourceCodeInfo, [M2.FileDescriptorProto_Package]);
      }, getFeatures() {
        var a4;
        return n3(null === (a4 = e3.options) || void 0 === a4 ? void 0 : a4.features);
      } });
      a3.mapEntries.clear();
      for (const o4 of e3.enumType) p2(o4, r3, void 0, a3, n3);
      for (const o4 of e3.messageType) u2(o4, r3, void 0, a3, n3);
      for (const o4 of e3.service) k2(o4, r3, a3, n3);
      T2(r3, a3, n3);
      for (const e4 of a3.mapEntries.values()) _2(e4, a3, n3);
      for (const e4 of r3.messages) _2(e4, a3, n3), T2(e4, a3, n3);
      a3.mapEntries.clear(), a3.files.push(r3);
    }
    function T2(e3, a3, n3) {
      switch (e3.kind) {
        case "file":
          for (const o3 of e3.proto.extension) {
            const s3 = f2(o3, e3, void 0, a3, n3);
            e3.extensions.push(s3), a3.extensions.set(s3.typeName, s3);
          }
          break;
        case "message":
          for (const o3 of e3.proto.extension) {
            const s3 = f2(o3, e3.file, e3, a3, n3);
            e3.nestedExtensions.push(s3), a3.extensions.set(s3.typeName, s3);
          }
          for (const o3 of e3.nestedMessages) T2(o3, a3, n3);
      }
    }
    function _2(e3, a3, n3) {
      const o3 = e3.proto.oneofDecl.map((a4) => (function(e4, a5, n4) {
        return (0, s2.assert)(e4.name, "invalid OneofDescriptorProto: missing name"), { kind: "oneof", proto: e4, deprecated: false, parent: a5, fields: [], name: e4.name, toString() {
          return `oneof ${a5.typeName}.${this.name}`;
        }, getComments() {
          const e5 = [...this.parent.getComments().sourcePath, M2.DescriptorProto_OneofDecl, this.parent.proto.oneofDecl.indexOf(this.proto)];
          return h2(a5.file.proto.sourceCodeInfo, e5);
        }, getFeatures() {
          var o4;
          return n4(a5.getFeatures(), null === (o4 = e4.options) || void 0 === o4 ? void 0 : o4.features);
        } };
      })(a4, e3, n3)), t3 = /* @__PURE__ */ new Set();
      for (const s3 of e3.proto.field) {
        const r3 = R2(s3, o3), i3 = E2(s3, e3.file, e3, r3, a3, n3);
        e3.fields.push(i3), void 0 === r3 ? e3.members.push(i3) : (r3.fields.push(i3), t3.has(r3) || (t3.add(r3), e3.members.push(r3)));
      }
      for (const a4 of o3.filter((e4) => t3.has(e4))) e3.oneofs.push(a4);
      for (const o4 of e3.nestedMessages) _2(o4, a3, n3);
    }
    function p2(e3, a3, n3, o3, t3) {
      var i3, m3, l3;
      (0, s2.assert)(e3.name, "invalid EnumDescriptorProto: missing name");
      const d3 = { kind: "enum", proto: e3, deprecated: null !== (m3 = null === (i3 = e3.options) || void 0 === i3 ? void 0 : i3.deprecated) && void 0 !== m3 && m3, file: a3, parent: n3, name: e3.name, typeName: y2(e3, n3, a3), values: [], sharedPrefix: (0, r2.findEnumSharedPrefix)(e3.name, e3.value.map((e4) => {
        var a4;
        return null !== (a4 = e4.name) && void 0 !== a4 ? a4 : "";
      })), toString() {
        return `enum ${this.typeName}`;
      }, getComments() {
        const e4 = this.parent ? [...this.parent.getComments().sourcePath, M2.DescriptorProto_EnumType, this.parent.proto.enumType.indexOf(this.proto)] : [M2.FileDescriptorProto_EnumType, this.file.proto.enumType.indexOf(this.proto)];
        return h2(a3.proto.sourceCodeInfo, e4);
      }, getFeatures() {
        var o4, s3;
        return t3(null !== (o4 = null == n3 ? void 0 : n3.getFeatures()) && void 0 !== o4 ? o4 : a3.getFeatures(), null === (s3 = e3.options) || void 0 === s3 ? void 0 : s3.features);
      } };
      o3.enums.set(d3.typeName, d3), e3.value.forEach((e4) => {
        var n4, o4;
        (0, s2.assert)(e4.name, "invalid EnumValueDescriptorProto: missing name"), (0, s2.assert)(void 0 !== e4.number, "invalid EnumValueDescriptorProto: missing number"), d3.values.push({ kind: "enum_value", proto: e4, deprecated: null !== (o4 = null === (n4 = e4.options) || void 0 === n4 ? void 0 : n4.deprecated) && void 0 !== o4 && o4, parent: d3, name: e4.name, number: e4.number, toString() {
          return `enum value ${d3.typeName}.${this.name}`;
        }, declarationString() {
          var e5;
          let a4 = `${this.name} = ${this.number}`;
          return true === (null === (e5 = this.proto.options) || void 0 === e5 ? void 0 : e5.deprecated) && (a4 += " [deprecated = true]"), a4;
        }, getComments() {
          const e5 = [...this.parent.getComments().sourcePath, M2.EnumDescriptorProto_Value, this.parent.proto.value.indexOf(this.proto)];
          return h2(a3.proto.sourceCodeInfo, e5);
        }, getFeatures() {
          var a4;
          return t3(d3.getFeatures(), null === (a4 = e4.options) || void 0 === a4 ? void 0 : a4.features);
        } });
      }), (null !== (l3 = null == n3 ? void 0 : n3.nestedEnums) && void 0 !== l3 ? l3 : a3.enums).push(d3);
    }
    function u2(e3, a3, n3, o3, t3) {
      var r3, i3, m3, l3;
      (0, s2.assert)(e3.name, "invalid DescriptorProto: missing name");
      const d3 = { kind: "message", proto: e3, deprecated: null !== (i3 = null === (r3 = e3.options) || void 0 === r3 ? void 0 : r3.deprecated) && void 0 !== i3 && i3, file: a3, parent: n3, name: e3.name, typeName: y2(e3, n3, a3), fields: [], oneofs: [], members: [], nestedEnums: [], nestedMessages: [], nestedExtensions: [], toString() {
        return `message ${this.typeName}`;
      }, getComments() {
        const e4 = this.parent ? [...this.parent.getComments().sourcePath, M2.DescriptorProto_NestedType, this.parent.proto.nestedType.indexOf(this.proto)] : [M2.FileDescriptorProto_MessageType, this.file.proto.messageType.indexOf(this.proto)];
        return h2(a3.proto.sourceCodeInfo, e4);
      }, getFeatures() {
        var o4, s3;
        return t3(null !== (o4 = null == n3 ? void 0 : n3.getFeatures()) && void 0 !== o4 ? o4 : a3.getFeatures(), null === (s3 = e3.options) || void 0 === s3 ? void 0 : s3.features);
      } };
      true === (null === (m3 = e3.options) || void 0 === m3 ? void 0 : m3.mapEntry) ? o3.mapEntries.set(d3.typeName, d3) : ((null !== (l3 = null == n3 ? void 0 : n3.nestedMessages) && void 0 !== l3 ? l3 : a3.messages).push(d3), o3.messages.set(d3.typeName, d3));
      for (const n4 of e3.enumType) p2(n4, a3, d3, o3, t3);
      for (const n4 of e3.nestedType) u2(n4, a3, d3, o3, t3);
    }
    function k2(e3, a3, n3, o3) {
      var t3, r3;
      (0, s2.assert)(e3.name, "invalid ServiceDescriptorProto: missing name");
      const i3 = { kind: "service", proto: e3, deprecated: null !== (r3 = null === (t3 = e3.options) || void 0 === t3 ? void 0 : t3.deprecated) && void 0 !== r3 && r3, file: a3, name: e3.name, typeName: y2(e3, void 0, a3), methods: [], toString() {
        return `service ${this.typeName}`;
      }, getComments() {
        const e4 = [M2.FileDescriptorProto_Service, this.file.proto.service.indexOf(this.proto)];
        return h2(a3.proto.sourceCodeInfo, e4);
      }, getFeatures() {
        var n4;
        return o3(a3.getFeatures(), null === (n4 = e3.options) || void 0 === n4 ? void 0 : n4.features);
      } };
      a3.services.push(i3), n3.services.set(i3.typeName, i3);
      for (const a4 of e3.method) i3.methods.push(g2(a4, i3, n3, o3));
    }
    function g2(e3, a3, n3, r3) {
      var i3, m3, l3;
      let d3, c3;
      switch ((0, s2.assert)(e3.name, "invalid MethodDescriptorProto: missing name"), (0, s2.assert)(e3.inputType, "invalid MethodDescriptorProto: missing input_type"), (0, s2.assert)(e3.outputType, "invalid MethodDescriptorProto: missing output_type"), d3 = true === e3.clientStreaming && true === e3.serverStreaming ? t2.MethodKind.BiDiStreaming : true === e3.clientStreaming ? t2.MethodKind.ClientStreaming : true === e3.serverStreaming ? t2.MethodKind.ServerStreaming : t2.MethodKind.Unary, null === (i3 = e3.options) || void 0 === i3 ? void 0 : i3.idempotencyLevel) {
        case o2.MethodOptions_IdempotencyLevel.IDEMPOTENT:
          c3 = t2.MethodIdempotency.Idempotent;
          break;
        case o2.MethodOptions_IdempotencyLevel.NO_SIDE_EFFECTS:
          c3 = t2.MethodIdempotency.NoSideEffects;
          break;
        case o2.MethodOptions_IdempotencyLevel.IDEMPOTENCY_UNKNOWN:
        case void 0:
          c3 = void 0;
      }
      const T3 = n3.messages.get(S2(e3.inputType)), _3 = n3.messages.get(S2(e3.outputType));
      (0, s2.assert)(T3, `invalid MethodDescriptorProto: input_type ${e3.inputType} not found`), (0, s2.assert)(_3, `invalid MethodDescriptorProto: output_type ${e3.inputType} not found`);
      const p3 = e3.name;
      return { kind: "rpc", proto: e3, deprecated: null !== (l3 = null === (m3 = e3.options) || void 0 === m3 ? void 0 : m3.deprecated) && void 0 !== l3 && l3, parent: a3, name: p3, methodKind: d3, input: T3, output: _3, idempotency: c3, toString: () => `rpc ${a3.typeName}.${p3}`, getComments() {
        const e4 = [...this.parent.getComments().sourcePath, M2.ServiceDescriptorProto_Method, this.parent.proto.method.indexOf(this.proto)];
        return h2(a3.file.proto.sourceCodeInfo, e4);
      }, getFeatures() {
        var n4;
        return r3(a3.getFeatures(), null === (n4 = e3.options) || void 0 === n4 ? void 0 : n4.features);
      } };
    }
    function E2(e3, a3, n3, t3, i3, m3) {
      var d3, c3, T3;
      (0, s2.assert)(e3.name, "invalid FieldDescriptorProto: missing name"), (0, s2.assert)(e3.number, "invalid FieldDescriptorProto: missing number"), (0, s2.assert)(e3.type, "invalid FieldDescriptorProto: missing type");
      const _3 = { proto: e3, deprecated: null !== (c3 = null === (d3 = e3.options) || void 0 === d3 ? void 0 : d3.deprecated) && void 0 !== c3 && c3, name: e3.name, number: e3.number, parent: n3, oneof: t3, optional: I2(e3, a3.syntax), packedByDefault: O2(e3, m3), packed: A2(a3, n3, e3, m3), jsonName: e3.jsonName === (0, r2.fieldJsonName)(e3.name) ? void 0 : e3.jsonName, scalar: void 0, longType: void 0, message: void 0, enum: void 0, mapKey: void 0, mapValue: void 0, declarationString: P2, toString() {
        return `field ${this.parent.typeName}.${this.name}`;
      }, getComments() {
        const e4 = [...this.parent.getComments().sourcePath, M2.DescriptorProto_Field, this.parent.proto.field.indexOf(this.proto)];
        return h2(a3.proto.sourceCodeInfo, e4);
      }, getFeatures() {
        var a4;
        return m3(n3.getFeatures(), null === (a4 = e3.options) || void 0 === a4 ? void 0 : a4.features);
      } }, p3 = e3.label === o2.FieldDescriptorProto_Label.REPEATED;
      switch (e3.type) {
        case o2.FieldDescriptorProto_Type.MESSAGE:
        case o2.FieldDescriptorProto_Type.GROUP: {
          (0, s2.assert)(e3.typeName, "invalid FieldDescriptorProto: missing type_name");
          const a4 = i3.mapEntries.get(S2(e3.typeName));
          if (void 0 !== a4) return (0, s2.assert)(p3, "invalid FieldDescriptorProto: expected map entry to be repeated"), Object.assign(Object.assign(Object.assign({}, _3), { kind: "field", fieldKind: "map", repeated: false }), (function(e4) {
            var a5, n5;
            (0, s2.assert)(null === (a5 = e4.proto.options) || void 0 === a5 ? void 0 : a5.mapEntry, `invalid DescriptorProto: expected ${e4.toString()} to be a map entry`), (0, s2.assert)(2 === e4.fields.length, `invalid DescriptorProto: map entry ${e4.toString()} has ${e4.fields.length} fields`);
            const o3 = e4.fields.find((e5) => 1 === e5.proto.number);
            (0, s2.assert)(o3, `invalid DescriptorProto: map entry ${e4.toString()} is missing key field`);
            const t4 = o3.scalar;
            (0, s2.assert)(void 0 !== t4 && t4 !== l2.ScalarType.BYTES && t4 !== l2.ScalarType.FLOAT && t4 !== l2.ScalarType.DOUBLE, `invalid DescriptorProto: map entry ${e4.toString()} has unexpected key type ${null !== (n5 = o3.proto.type) && void 0 !== n5 ? n5 : -1}`);
            const r3 = e4.fields.find((e5) => 2 === e5.proto.number);
            switch ((0, s2.assert)(r3, `invalid DescriptorProto: map entry ${e4.toString()} is missing value field`), r3.fieldKind) {
              case "scalar":
                return { mapKey: t4, mapValue: Object.assign(Object.assign({}, r3), { kind: "scalar" }) };
              case "message":
                return { mapKey: t4, mapValue: Object.assign(Object.assign({}, r3), { kind: "message" }) };
              case "enum":
                return { mapKey: t4, mapValue: Object.assign(Object.assign({}, r3), { kind: "enum" }) };
              default:
                throw new Error("invalid DescriptorProto: unsupported map entry value field");
            }
          })(a4));
          const n4 = i3.messages.get(S2(e3.typeName));
          return (0, s2.assert)(void 0 !== n4, `invalid FieldDescriptorProto: type_name ${e3.typeName} not found`), Object.assign(Object.assign({}, _3), { kind: "field", fieldKind: "message", repeated: p3, message: n4 });
        }
        case o2.FieldDescriptorProto_Type.ENUM: {
          (0, s2.assert)(e3.typeName, "invalid FieldDescriptorProto: missing type_name");
          const a4 = i3.enums.get(S2(e3.typeName));
          return (0, s2.assert)(void 0 !== a4, `invalid FieldDescriptorProto: type_name ${e3.typeName} not found`), Object.assign(Object.assign({}, _3), { kind: "field", fieldKind: "enum", getDefaultValue: D2, repeated: p3, enum: a4 });
        }
        default: {
          const a4 = C2[e3.type];
          return (0, s2.assert)(a4, `invalid FieldDescriptorProto: unknown type ${e3.type}`), Object.assign(Object.assign({}, _3), { kind: "field", fieldKind: "scalar", getDefaultValue: D2, repeated: p3, scalar: a4, longType: (null === (T3 = e3.options) || void 0 === T3 ? void 0 : T3.jstype) == o2.FieldOptions_JSType.JS_STRING ? l2.LongType.STRING : l2.LongType.BIGINT });
        }
      }
    }
    function f2(e3, a3, n3, o3, t3) {
      (0, s2.assert)(e3.extendee, "invalid FieldDescriptorProto: missing extendee");
      const r3 = E2(e3, a3, null, void 0, o3, t3), i3 = o3.messages.get(S2(e3.extendee));
      return (0, s2.assert)(i3, `invalid FieldDescriptorProto: extendee ${e3.extendee} not found`), Object.assign(Object.assign({}, r3), { kind: "extension", typeName: y2(e3, n3, a3), parent: n3, file: a3, extendee: i3, toString() {
        return `extension ${this.typeName}`;
      }, getComments() {
        const n4 = this.parent ? [...this.parent.getComments().sourcePath, M2.DescriptorProto_Extension, this.parent.proto.extension.indexOf(e3)] : [M2.FileDescriptorProto_Extension, this.file.proto.extension.indexOf(e3)];
        return h2(a3.proto.sourceCodeInfo, n4);
      }, getFeatures() {
        var o4;
        return t3((null != n3 ? n3 : a3).getFeatures(), null === (o4 = e3.options) || void 0 === o4 ? void 0 : o4.features);
      } });
    }
    function N2(e3, a3) {
      let n3, s3;
      switch (e3) {
        case void 0:
        case "proto2":
          s3 = "proto2", n3 = o2.Edition.EDITION_PROTO2;
          break;
        case "proto3":
          s3 = "proto3", n3 = o2.Edition.EDITION_PROTO3;
          break;
        case "editions":
          switch (s3 = "editions", a3) {
            case void 0:
            case o2.Edition.EDITION_1_TEST_ONLY:
            case o2.Edition.EDITION_2_TEST_ONLY:
            case o2.Edition.EDITION_99997_TEST_ONLY:
            case o2.Edition.EDITION_99998_TEST_ONLY:
            case o2.Edition.EDITION_99999_TEST_ONLY:
            case o2.Edition.EDITION_UNKNOWN:
              n3 = o2.Edition.EDITION_UNKNOWN;
              break;
            default:
              n3 = a3;
          }
          break;
        default:
          throw new Error(`invalid FileDescriptorProto: unsupported syntax: ${e3}`);
      }
      if ("editions" === e3 && a3 === o2.Edition.EDITION_UNKNOWN) throw new Error(`invalid FileDescriptorProto: syntax ${e3} cannot have edition ${String(a3)}`);
      return { syntax: s3, edition: n3 };
    }
    function v2(e3, a3) {
      return e3.dependency.map((e4) => {
        const n3 = a3.files.find((a4) => a4.proto.name === e4);
        return (0, s2.assert)(n3), n3;
      });
    }
    function y2(e3, a3, n3) {
      let o3;
      return (0, s2.assert)(e3.name, `invalid ${e3.getType().typeName}: missing name`), o3 = a3 ? `${a3.typeName}.${e3.name}` : void 0 !== n3.proto.package ? `${n3.proto.package}.${e3.name}` : `${e3.name}`, o3;
    }
    function S2(e3) {
      return e3.startsWith(".") ? e3.substring(1) : e3;
    }
    function R2(e3, a3) {
      var n3;
      const o3 = e3.oneofIndex;
      if (void 0 === o3) return;
      let t3;
      return true !== e3.proto3Optional && (t3 = a3[o3], (0, s2.assert)(t3, `invalid FieldDescriptorProto: oneof #${o3} for field #${null !== (n3 = e3.number) && void 0 !== n3 ? n3 : -1} not found`)), t3;
    }
    function I2(e3, a3) {
      switch (a3) {
        case "proto2":
          return void 0 === e3.oneofIndex && e3.label === o2.FieldDescriptorProto_Label.OPTIONAL;
        case "proto3":
          return true === e3.proto3Optional;
        case "editions":
          return false;
      }
    }
    function O2(e3, a3) {
      const { repeatedFieldEncoding: n3 } = a3();
      if (n3 != o2.FeatureSet_RepeatedFieldEncoding.PACKED) return false;
      switch (e3.type) {
        case o2.FieldDescriptorProto_Type.STRING:
        case o2.FieldDescriptorProto_Type.BYTES:
        case o2.FieldDescriptorProto_Type.GROUP:
        case o2.FieldDescriptorProto_Type.MESSAGE:
          return false;
        default:
          return true;
      }
    }
    function A2(e3, a3, n3, s3) {
      var t3, r3, i3, m3, l3, d3;
      switch (n3.type) {
        case o2.FieldDescriptorProto_Type.STRING:
        case o2.FieldDescriptorProto_Type.BYTES:
        case o2.FieldDescriptorProto_Type.GROUP:
        case o2.FieldDescriptorProto_Type.MESSAGE:
          return false;
        default:
          switch (e3.edition) {
            case o2.Edition.EDITION_PROTO2:
              return null !== (r3 = null === (t3 = n3.options) || void 0 === t3 ? void 0 : t3.packed) && void 0 !== r3 && r3;
            case o2.Edition.EDITION_PROTO3:
              return null === (m3 = null === (i3 = n3.options) || void 0 === i3 ? void 0 : i3.packed) || void 0 === m3 || m3;
            default: {
              const { repeatedFieldEncoding: t4 } = s3(null !== (l3 = null == a3 ? void 0 : a3.getFeatures()) && void 0 !== l3 ? l3 : e3.getFeatures(), null === (d3 = n3.options) || void 0 === d3 ? void 0 : d3.features);
              return t4 == o2.FeatureSet_RepeatedFieldEncoding.PACKED;
            }
          }
      }
    }
    a2.createDescriptorSet = function(e3, a3) {
      var n3;
      const s3 = { files: [], enums: /* @__PURE__ */ new Map(), messages: /* @__PURE__ */ new Map(), services: /* @__PURE__ */ new Map(), extensions: /* @__PURE__ */ new Map(), mapEntries: /* @__PURE__ */ new Map() }, t3 = (0, d2.isMessage)(e3, o2.FileDescriptorSet) ? e3.file : e3 instanceof Uint8Array ? o2.FileDescriptorSet.fromBinary(e3).file : e3, r3 = /* @__PURE__ */ new Map();
      for (const e4 of t3) {
        const o3 = null !== (n3 = e4.edition) && void 0 !== n3 ? n3 : N2(e4.syntax, e4.edition).edition;
        let t4 = r3.get(o3);
        void 0 === t4 && (t4 = (0, m2.createFeatureResolver)(o3, null == a3 ? void 0 : a3.featureSetDefaults, null == a3 ? void 0 : a3.serializationOptions), r3.set(o3, t4)), c2(e4, s3, t4);
      }
      return s3;
    };
    const C2 = { [o2.FieldDescriptorProto_Type.DOUBLE]: l2.ScalarType.DOUBLE, [o2.FieldDescriptorProto_Type.FLOAT]: l2.ScalarType.FLOAT, [o2.FieldDescriptorProto_Type.INT64]: l2.ScalarType.INT64, [o2.FieldDescriptorProto_Type.UINT64]: l2.ScalarType.UINT64, [o2.FieldDescriptorProto_Type.INT32]: l2.ScalarType.INT32, [o2.FieldDescriptorProto_Type.FIXED64]: l2.ScalarType.FIXED64, [o2.FieldDescriptorProto_Type.FIXED32]: l2.ScalarType.FIXED32, [o2.FieldDescriptorProto_Type.BOOL]: l2.ScalarType.BOOL, [o2.FieldDescriptorProto_Type.STRING]: l2.ScalarType.STRING, [o2.FieldDescriptorProto_Type.GROUP]: void 0, [o2.FieldDescriptorProto_Type.MESSAGE]: void 0, [o2.FieldDescriptorProto_Type.BYTES]: l2.ScalarType.BYTES, [o2.FieldDescriptorProto_Type.UINT32]: l2.ScalarType.UINT32, [o2.FieldDescriptorProto_Type.ENUM]: void 0, [o2.FieldDescriptorProto_Type.SFIXED32]: l2.ScalarType.SFIXED32, [o2.FieldDescriptorProto_Type.SFIXED64]: l2.ScalarType.SFIXED64, [o2.FieldDescriptorProto_Type.SINT32]: l2.ScalarType.SINT32, [o2.FieldDescriptorProto_Type.SINT64]: l2.ScalarType.SINT64 };
    function h2(e3, a3) {
      if (!e3) return { leadingDetached: [], sourcePath: a3 };
      for (const n3 of e3.location) if (n3.path.length === a3.length && !n3.path.some((e4, n4) => a3[n4] !== e4)) return { leadingDetached: n3.leadingDetachedComments, leading: n3.leadingComments, trailing: n3.trailingComments, sourcePath: a3 };
      return { leadingDetached: [], sourcePath: a3 };
    }
    var M2;
    function P2() {
      var e3, a3, n3;
      const s3 = [];
      this.repeated && s3.push("repeated"), this.optional && s3.push("optional");
      let t3;
      switch ("proto2" == ("extension" === this.kind ? this.file : this.parent.file).syntax && this.proto.label === o2.FieldDescriptorProto_Label.REQUIRED && s3.push("required"), this.fieldKind) {
        case "scalar":
          t3 = l2.ScalarType[this.scalar].toLowerCase();
          break;
        case "enum":
          t3 = this.enum.typeName;
          break;
        case "message":
          t3 = this.message.typeName;
          break;
        case "map": {
          const e4 = l2.ScalarType[this.mapKey].toLowerCase();
          let a4;
          switch (this.mapValue.kind) {
            case "scalar":
              a4 = l2.ScalarType[this.mapValue.scalar].toLowerCase();
              break;
            case "enum":
              a4 = this.mapValue.enum.typeName;
              break;
            case "message":
              a4 = this.mapValue.message.typeName;
          }
          t3 = `map<${e4}, ${a4}>`;
          break;
        }
      }
      s3.push(`${t3} ${this.name} = ${this.number}`);
      const r3 = [];
      void 0 !== (null === (e3 = this.proto.options) || void 0 === e3 ? void 0 : e3.packed) && r3.push(`packed = ${this.proto.options.packed.toString()}`);
      let i3 = this.proto.defaultValue;
      return void 0 !== i3 && (this.proto.type != o2.FieldDescriptorProto_Type.BYTES && this.proto.type != o2.FieldDescriptorProto_Type.STRING || (i3 = '"' + i3.replace('"', '\\"') + '"'), r3.push(`default = ${i3}`)), void 0 !== this.jsonName && r3.push(`json_name = "${this.jsonName}"`), void 0 !== (null === (a3 = this.proto.options) || void 0 === a3 ? void 0 : a3.jstype) && r3.push(`jstype = ${o2.FieldOptions_JSType[this.proto.options.jstype]}`), true === (null === (n3 = this.proto.options) || void 0 === n3 ? void 0 : n3.deprecated) && r3.push("deprecated = true"), r3.length > 0 && s3.push("[" + r3.join(", ") + "]"), s3.join(" ");
    }
    function D2() {
      const e3 = this.proto.defaultValue;
      if (void 0 !== e3) switch (this.fieldKind) {
        case "enum":
          return (0, i2.parseTextFormatEnumValue)(this.enum, e3);
        case "scalar":
          return (0, i2.parseTextFormatScalarValue)(this.scalar, e3);
        default:
          return;
      }
    }
    !(function(e3) {
      e3[e3.FileDescriptorProto_Package = 2] = "FileDescriptorProto_Package", e3[e3.FileDescriptorProto_MessageType = 4] = "FileDescriptorProto_MessageType", e3[e3.FileDescriptorProto_EnumType = 5] = "FileDescriptorProto_EnumType", e3[e3.FileDescriptorProto_Service = 6] = "FileDescriptorProto_Service", e3[e3.FileDescriptorProto_Extension = 7] = "FileDescriptorProto_Extension", e3[e3.FileDescriptorProto_Syntax = 12] = "FileDescriptorProto_Syntax", e3[e3.DescriptorProto_Field = 2] = "DescriptorProto_Field", e3[e3.DescriptorProto_NestedType = 3] = "DescriptorProto_NestedType", e3[e3.DescriptorProto_EnumType = 4] = "DescriptorProto_EnumType", e3[e3.DescriptorProto_Extension = 6] = "DescriptorProto_Extension", e3[e3.DescriptorProto_OneofDecl = 8] = "DescriptorProto_OneofDecl", e3[e3.EnumDescriptorProto_Value = 2] = "EnumDescriptorProto_Value", e3[e3.ServiceDescriptorProto_Method = 2] = "ServiceDescriptorProto_Method";
    })(M2 || (M2 = {}));
  }
// @recovered-by cursor-re
// artifact: app/extensions/cursor-resolver/dist/main.js sha256:677b774c75dfff0de56084737d26169857daed3731cb62a6702840900f439aed
// module: 101 range:21186..46248
// basis: webpack-id confidence: C
// method: split
// run: ext-p0 2026-11-05T10:07:22.069Z
101: (e2, t2, n2) => {
    Object.defineProperty(t2, "__esModule", { value: true }), t2.createDescriptorSet = void 0;
    const r2 = n2(374), o2 = n2(98), a2 = n2(422), s2 = n2(822), i2 = n2(663), l2 = n2(301), u2 = n2(408), c2 = n2(706);
    function m2(e3, t3, n3) {
      var r3, a3;
      (0, o2.assert)(e3.name, "invalid FileDescriptorProto: missing name");
      const s3 = Object.assign(Object.assign({ kind: "file", proto: e3, deprecated: null !== (a3 = null === (r3 = e3.options) || void 0 === r3 ? void 0 : r3.deprecated) && void 0 !== a3 && a3 }, N2(e3.syntax, e3.edition)), { name: e3.name.replace(/\.proto/, ""), dependencies: _2(e3, t3), enums: [], messages: [], extensions: [], services: [], toString() {
        return `file ${this.proto.name}`;
      }, getSyntaxComments() {
        return P2(this.proto.sourceCodeInfo, [F2.FileDescriptorProto_Syntax]);
      }, getPackageComments() {
        return P2(this.proto.sourceCodeInfo, [F2.FileDescriptorProto_Package]);
      }, getFeatures() {
        var t4;
        return n3(null === (t4 = e3.options) || void 0 === t4 ? void 0 : t4.features);
      } });
      t3.mapEntries.clear();
      for (const r4 of e3.enumType) f2(r4, s3, void 0, t3, n3);
      for (const r4 of e3.messageType) T2(r4, s3, void 0, t3, n3);
      for (const r4 of e3.service) g2(r4, s3, t3, n3);
      p2(s3, t3, n3);
      for (const e4 of t3.mapEntries.values()) d2(e4, t3, n3);
      for (const e4 of s3.messages) d2(e4, t3, n3), p2(e4, t3, n3);
      t3.mapEntries.clear(), t3.files.push(s3);
    }
    function p2(e3, t3, n3) {
      switch (e3.kind) {
        case "file":
          for (const r3 of e3.proto.extension) {
            const o3 = h2(r3, e3, void 0, t3, n3);
            e3.extensions.push(o3), t3.extensions.set(o3.typeName, o3);
          }
          break;
        case "message":
          for (const r3 of e3.proto.extension) {
            const o3 = h2(r3, e3.file, e3, t3, n3);
            e3.nestedExtensions.push(o3), t3.extensions.set(o3.typeName, o3);
          }
          for (const r3 of e3.nestedMessages) p2(r3, t3, n3);
      }
    }
    function d2(e3, t3, n3) {
      const r3 = e3.proto.oneofDecl.map((t4) => (function(e4, t5, n4) {
        return (0, o2.assert)(e4.name, "invalid OneofDescriptorProto: missing name"), { kind: "oneof", proto: e4, deprecated: false, parent: t5, fields: [], name: e4.name, toString() {
          return `oneof ${t5.typeName}.${this.name}`;
        }, getComments() {
          const e5 = [...this.parent.getComments().sourcePath, F2.DescriptorProto_OneofDecl, this.parent.proto.oneofDecl.indexOf(this.proto)];
          return P2(t5.file.proto.sourceCodeInfo, e5);
        }, getFeatures() {
          var r4;
          return n4(t5.getFeatures(), null === (r4 = e4.options) || void 0 === r4 ? void 0 : r4.features);
        } };
      })(t4, e3, n3)), a3 = /* @__PURE__ */ new Set();
      for (const o3 of e3.proto.field) {
        const s3 = w2(o3, r3), i3 = y2(o3, e3.file, e3, s3, t3, n3);
        e3.fields.push(i3), void 0 === s3 ? e3.members.push(i3) : (s3.fields.push(i3), a3.has(s3) || (a3.add(s3), e3.members.push(s3)));
      }
      for (const t4 of r3.filter((e4) => a3.has(e4))) e3.oneofs.push(t4);
      for (const r4 of e3.nestedMessages) d2(r4, t3, n3);
    }
    function f2(e3, t3, n3, r3, a3) {
      var i3, l3, u3;
      (0, o2.assert)(e3.name, "invalid EnumDescriptorProto: missing name");
      const c3 = { kind: "enum", proto: e3, deprecated: null !== (l3 = null === (i3 = e3.options) || void 0 === i3 ? void 0 : i3.deprecated) && void 0 !== l3 && l3, file: t3, parent: n3, name: e3.name, typeName: I2(e3, n3, t3), values: [], sharedPrefix: (0, s2.findEnumSharedPrefix)(e3.name, e3.value.map((e4) => {
        var t4;
        return null !== (t4 = e4.name) && void 0 !== t4 ? t4 : "";
      })), toString() {
        return `enum ${this.typeName}`;
      }, getComments() {
        const e4 = this.parent ? [...this.parent.getComments().sourcePath, F2.DescriptorProto_EnumType, this.parent.proto.enumType.indexOf(this.proto)] : [F2.FileDescriptorProto_EnumType, this.file.proto.enumType.indexOf(this.proto)];
        return P2(t3.proto.sourceCodeInfo, e4);
      }, getFeatures() {
        var r4, o3;
        return a3(null !== (r4 = null == n3 ? void 0 : n3.getFeatures()) && void 0 !== r4 ? r4 : t3.getFeatures(), null === (o3 = e3.options) || void 0 === o3 ? void 0 : o3.features);
      } };
      r3.enums.set(c3.typeName, c3), e3.value.forEach((e4) => {
        var n4, r4;
        (0, o2.assert)(e4.name, "invalid EnumValueDescriptorProto: missing name"), (0, o2.assert)(void 0 !== e4.number, "invalid EnumValueDescriptorProto: missing number"), c3.values.push({ kind: "enum_value", proto: e4, deprecated: null !== (r4 = null === (n4 = e4.options) || void 0 === n4 ? void 0 : n4.deprecated) && void 0 !== r4 && r4, parent: c3, name: e4.name, number: e4.number, toString() {
          return `enum value ${c3.typeName}.${this.name}`;
        }, declarationString() {
          var e5;
          let t4 = `${this.name} = ${this.number}`;
          return true === (null === (e5 = this.proto.options) || void 0 === e5 ? void 0 : e5.deprecated) && (t4 += " [deprecated = true]"), t4;
        }, getComments() {
          const e5 = [...this.parent.getComments().sourcePath, F2.EnumDescriptorProto_Value, this.parent.proto.value.indexOf(this.proto)];
          return P2(t3.proto.sourceCodeInfo, e5);
        }, getFeatures() {
          var t4;
          return a3(c3.getFeatures(), null === (t4 = e4.options) || void 0 === t4 ? void 0 : t4.features);
        } });
      }), (null !== (u3 = null == n3 ? void 0 : n3.nestedEnums) && void 0 !== u3 ? u3 : t3.enums).push(c3);
    }
    function T2(e3, t3, n3, r3, a3) {
      var s3, i3, l3, u3;
      (0, o2.assert)(e3.name, "invalid DescriptorProto: missing name");
      const c3 = { kind: "message", proto: e3, deprecated: null !== (i3 = null === (s3 = e3.options) || void 0 === s3 ? void 0 : s3.deprecated) && void 0 !== i3 && i3, file: t3, parent: n3, name: e3.name, typeName: I2(e3, n3, t3), fields: [], oneofs: [], members: [], nestedEnums: [], nestedMessages: [], nestedExtensions: [], toString() {
        return `message ${this.typeName}`;
      }, getComments() {
        const e4 = this.parent ? [...this.parent.getComments().sourcePath, F2.DescriptorProto_NestedType, this.parent.proto.nestedType.indexOf(this.proto)] : [F2.FileDescriptorProto_MessageType, this.file.proto.messageType.indexOf(this.proto)];
        return P2(t3.proto.sourceCodeInfo, e4);
      }, getFeatures() {
        var r4, o3;
        return a3(null !== (r4 = null == n3 ? void 0 : n3.getFeatures()) && void 0 !== r4 ? r4 : t3.getFeatures(), null === (o3 = e3.options) || void 0 === o3 ? void 0 : o3.features);
      } };
      true === (null === (l3 = e3.options) || void 0 === l3 ? void 0 : l3.mapEntry) ? r3.mapEntries.set(c3.typeName, c3) : ((null !== (u3 = null == n3 ? void 0 : n3.nestedMessages) && void 0 !== u3 ? u3 : t3.messages).push(c3), r3.messages.set(c3.typeName, c3));
      for (const n4 of e3.enumType) f2(n4, t3, c3, r3, a3);
      for (const n4 of e3.nestedType) T2(n4, t3, c3, r3, a3);
    }
    function g2(e3, t3, n3, r3) {
      var a3, s3;
      (0, o2.assert)(e3.name, "invalid ServiceDescriptorProto: missing name");
      const i3 = { kind: "service", proto: e3, deprecated: null !== (s3 = null === (a3 = e3.options) || void 0 === a3 ? void 0 : a3.deprecated) && void 0 !== s3 && s3, file: t3, name: e3.name, typeName: I2(e3, void 0, t3), methods: [], toString() {
        return `service ${this.typeName}`;
      }, getComments() {
        const e4 = [F2.FileDescriptorProto_Service, this.file.proto.service.indexOf(this.proto)];
        return P2(t3.proto.sourceCodeInfo, e4);
      }, getFeatures() {
        var n4;
        return r3(t3.getFeatures(), null === (n4 = e3.options) || void 0 === n4 ? void 0 : n4.features);
      } };
      t3.services.push(i3), n3.services.set(i3.typeName, i3);
      for (const t4 of e3.method) i3.methods.push(E2(t4, i3, n3, r3));
    }
    function E2(e3, t3, n3, s3) {
      var i3, l3, u3;
      let c3, m3;
      switch ((0, o2.assert)(e3.name, "invalid MethodDescriptorProto: missing name"), (0, o2.assert)(e3.inputType, "invalid MethodDescriptorProto: missing input_type"), (0, o2.assert)(e3.outputType, "invalid MethodDescriptorProto: missing output_type"), c3 = true === e3.clientStreaming && true === e3.serverStreaming ? a2.MethodKind.BiDiStreaming : true === e3.clientStreaming ? a2.MethodKind.ClientStreaming : true === e3.serverStreaming ? a2.MethodKind.ServerStreaming : a2.MethodKind.Unary, null === (i3 = e3.options) || void 0 === i3 ? void 0 : i3.idempotencyLevel) {
        case r2.MethodOptions_IdempotencyLevel.IDEMPOTENT:
          m3 = a2.MethodIdempotency.Idempotent;
          break;
        case r2.MethodOptions_IdempotencyLevel.NO_SIDE_EFFECTS:
          m3 = a2.MethodIdempotency.NoSideEffects;
          break;
        case r2.MethodOptions_IdempotencyLevel.IDEMPOTENCY_UNKNOWN:
        case void 0:
          m3 = void 0;
      }
      const p3 = n3.messages.get(S2(e3.inputType)), d3 = n3.messages.get(S2(e3.outputType));
      (0, o2.assert)(p3, `invalid MethodDescriptorProto: input_type ${e3.inputType} not found`), (0, o2.assert)(d3, `invalid MethodDescriptorProto: output_type ${e3.inputType} not found`);
      const f3 = e3.name;
      return { kind: "rpc", proto: e3, deprecated: null !== (u3 = null === (l3 = e3.options) || void 0 === l3 ? void 0 : l3.deprecated) && void 0 !== u3 && u3, parent: t3, name: f3, methodKind: c3, input: p3, output: d3, idempotency: m3, toString: () => `rpc ${t3.typeName}.${f3}`, getComments() {
        const e4 = [...this.parent.getComments().sourcePath, F2.ServiceDescriptorProto_Method, this.parent.proto.method.indexOf(this.proto)];
        return P2(t3.file.proto.sourceCodeInfo, e4);
      }, getFeatures() {
        var n4;
        return s3(t3.getFeatures(), null === (n4 = e3.options) || void 0 === n4 ? void 0 : n4.features);
      } };
    }
    function y2(e3, t3, n3, a3, i3, l3) {
      var c3, m3, p3;
      (0, o2.assert)(e3.name, "invalid FieldDescriptorProto: missing name"), (0, o2.assert)(e3.number, "invalid FieldDescriptorProto: missing number"), (0, o2.assert)(e3.type, "invalid FieldDescriptorProto: missing type");
      const d3 = { proto: e3, deprecated: null !== (m3 = null === (c3 = e3.options) || void 0 === c3 ? void 0 : c3.deprecated) && void 0 !== m3 && m3, name: e3.name, number: e3.number, parent: n3, oneof: a3, optional: O2(e3, t3.syntax), packedByDefault: b2(e3, l3), packed: k2(t3, n3, e3, l3), jsonName: e3.jsonName === (0, s2.fieldJsonName)(e3.name) ? void 0 : e3.jsonName, scalar: void 0, longType: void 0, message: void 0, enum: void 0, mapKey: void 0, mapValue: void 0, declarationString: D2, toString() {
        return `field ${this.parent.typeName}.${this.name}`;
      }, getComments() {
        const e4 = [...this.parent.getComments().sourcePath, F2.DescriptorProto_Field, this.parent.proto.field.indexOf(this.proto)];
        return P2(t3.proto.sourceCodeInfo, e4);
      }, getFeatures() {
        var t4;
        return l3(n3.getFeatures(), null === (t4 = e3.options) || void 0 === t4 ? void 0 : t4.features);
      } }, f3 = e3.label === r2.FieldDescriptorProto_Label.REPEATED;
      switch (e3.type) {
        case r2.FieldDescriptorProto_Type.MESSAGE:
        case r2.FieldDescriptorProto_Type.GROUP: {
          (0, o2.assert)(e3.typeName, "invalid FieldDescriptorProto: missing type_name");
          const t4 = i3.mapEntries.get(S2(e3.typeName));
          if (void 0 !== t4) return (0, o2.assert)(f3, "invalid FieldDescriptorProto: expected map entry to be repeated"), Object.assign(Object.assign(Object.assign({}, d3), { kind: "field", fieldKind: "map", repeated: false }), (function(e4) {
            var t5, n5;
            (0, o2.assert)(null === (t5 = e4.proto.options) || void 0 === t5 ? void 0 : t5.mapEntry, `invalid DescriptorProto: expected ${e4.toString()} to be a map entry`), (0, o2.assert)(2 === e4.fields.length, `invalid DescriptorProto: map entry ${e4.toString()} has ${e4.fields.length} fields`);
            const r3 = e4.fields.find((e5) => 1 === e5.proto.number);
            (0, o2.assert)(r3, `invalid DescriptorProto: map entry ${e4.toString()} is missing key field`);
            const a4 = r3.scalar;
            (0, o2.assert)(void 0 !== a4 && a4 !== u2.ScalarType.BYTES && a4 !== u2.ScalarType.FLOAT && a4 !== u2.ScalarType.DOUBLE, `invalid DescriptorProto: map entry ${e4.toString()} has unexpected key type ${null !== (n5 = r3.proto.type) && void 0 !== n5 ? n5 : -1}`);
            const s3 = e4.fields.find((e5) => 2 === e5.proto.number);
            switch ((0, o2.assert)(s3, `invalid DescriptorProto: map entry ${e4.toString()} is missing value field`), s3.fieldKind) {
              case "scalar":
                return { mapKey: a4, mapValue: Object.assign(Object.assign({}, s3), { kind: "scalar" }) };
              case "message":
                return { mapKey: a4, mapValue: Object.assign(Object.assign({}, s3), { kind: "message" }) };
              case "enum":
                return { mapKey: a4, mapValue: Object.assign(Object.assign({}, s3), { kind: "enum" }) };
              default:
                throw new Error("invalid DescriptorProto: unsupported map entry value field");
            }
          })(t4));
          const n4 = i3.messages.get(S2(e3.typeName));
          return (0, o2.assert)(void 0 !== n4, `invalid FieldDescriptorProto: type_name ${e3.typeName} not found`), Object.assign(Object.assign({}, d3), { kind: "field", fieldKind: "message", repeated: f3, message: n4 });
        }
        case r2.FieldDescriptorProto_Type.ENUM: {
          (0, o2.assert)(e3.typeName, "invalid FieldDescriptorProto: missing type_name");
          const t4 = i3.enums.get(S2(e3.typeName));
          return (0, o2.assert)(void 0 !== t4, `invalid FieldDescriptorProto: type_name ${e3.typeName} not found`), Object.assign(Object.assign({}, d3), { kind: "field", fieldKind: "enum", getDefaultValue: R2, repeated: f3, enum: t4 });
        }
        default: {
          const t4 = v2[e3.type];
          return (0, o2.assert)(t4, `invalid FieldDescriptorProto: unknown type ${e3.type}`), Object.assign(Object.assign({}, d3), { kind: "field", fieldKind: "scalar", getDefaultValue: R2, repeated: f3, scalar: t4, longType: (null === (p3 = e3.options) || void 0 === p3 ? void 0 : p3.jstype) == r2.FieldOptions_JSType.JS_STRING ? u2.LongType.STRING : u2.LongType.BIGINT });
        }
      }
    }
    function h2(e3, t3, n3, r3, a3) {
      (0, o2.assert)(e3.extendee, "invalid FieldDescriptorProto: missing extendee");
      const s3 = y2(e3, t3, null, void 0, r3, a3), i3 = r3.messages.get(S2(e3.extendee));
      return (0, o2.assert)(i3, `invalid FieldDescriptorProto: extendee ${e3.extendee} not found`), Object.assign(Object.assign({}, s3), { kind: "extension", typeName: I2(e3, n3, t3), parent: n3, file: t3, extendee: i3, toString() {
        return `extension ${this.typeName}`;
      }, getComments() {
        const n4 = this.parent ? [...this.parent.getComments().sourcePath, F2.DescriptorProto_Extension, this.parent.proto.extension.indexOf(e3)] : [F2.FileDescriptorProto_Extension, this.file.proto.extension.indexOf(e3)];
        return P2(t3.proto.sourceCodeInfo, n4);
      }, getFeatures() {
        var r4;
        return a3((null != n3 ? n3 : t3).getFeatures(), null === (r4 = e3.options) || void 0 === r4 ? void 0 : r4.features);
      } });
    }
    function N2(e3, t3) {
      let n3, o3;
      switch (e3) {
        case void 0:
        case "proto2":
          o3 = "proto2", n3 = r2.Edition.EDITION_PROTO2;
          break;
        case "proto3":
          o3 = "proto3", n3 = r2.Edition.EDITION_PROTO3;
          break;
        case "editions":
          switch (o3 = "editions", t3) {
            case void 0:
            case r2.Edition.EDITION_1_TEST_ONLY:
            case r2.Edition.EDITION_2_TEST_ONLY:
            case r2.Edition.EDITION_99997_TEST_ONLY:
            case r2.Edition.EDITION_99998_TEST_ONLY:
            case r2.Edition.EDITION_99999_TEST_ONLY:
            case r2.Edition.EDITION_UNKNOWN:
              n3 = r2.Edition.EDITION_UNKNOWN;
              break;
            default:
              n3 = t3;
          }
          break;
        default:
          throw new Error(`invalid FileDescriptorProto: unsupported syntax: ${e3}`);
      }
      if ("editions" === e3 && t3 === r2.Edition.EDITION_UNKNOWN) throw new Error(`invalid FileDescriptorProto: syntax ${e3} cannot have edition ${String(t3)}`);
      return { syntax: o3, edition: n3 };
    }
    function _2(e3, t3) {
      return e3.dependency.map((e4) => {
        const n3 = t3.files.find((t4) => t4.proto.name === e4);
        return (0, o2.assert)(n3), n3;
      });
    }
    function I2(e3, t3, n3) {
      let r3;
      return (0, o2.assert)(e3.name, `invalid ${e3.getType().typeName}: missing name`), r3 = t3 ? `${t3.typeName}.${e3.name}` : void 0 !== n3.proto.package ? `${n3.proto.package}.${e3.name}` : `${e3.name}`, r3;
    }
    function S2(e3) {
      return e3.startsWith(".") ? e3.substring(1) : e3;
    }
    function w2(e3, t3) {
      var n3;
      const r3 = e3.oneofIndex;
      if (void 0 === r3) return;
      let a3;
      return true !== e3.proto3Optional && (a3 = t3[r3], (0, o2.assert)(a3, `invalid FieldDescriptorProto: oneof #${r3} for field #${null !== (n3 = e3.number) && void 0 !== n3 ? n3 : -1} not found`)), a3;
    }
    function O2(e3, t3) {
      switch (t3) {
        case "proto2":
          return void 0 === e3.oneofIndex && e3.label === r2.FieldDescriptorProto_Label.OPTIONAL;
        case "proto3":
          return true === e3.proto3Optional;
        case "editions":
          return false;
      }
    }
    function b2(e3, t3) {
      const { repeatedFieldEncoding: n3 } = t3();
      if (n3 != r2.FeatureSet_RepeatedFieldEncoding.PACKED) return false;
      switch (e3.type) {
        case r2.FieldDescriptorProto_Type.STRING:
        case r2.FieldDescriptorProto_Type.BYTES:
        case r2.FieldDescriptorProto_Type.GROUP:
        case r2.FieldDescriptorProto_Type.MESSAGE:
          return false;
        default:
          return true;
      }
    }
    function k2(e3, t3, n3, o3) {
      var a3, s3, i3, l3, u3, c3;
      switch (n3.type) {
        case r2.FieldDescriptorProto_Type.STRING:
        case r2.FieldDescriptorProto_Type.BYTES:
        case r2.FieldDescriptorProto_Type.GROUP:
        case r2.FieldDescriptorProto_Type.MESSAGE:
          return false;
        default:
          switch (e3.edition) {
            case r2.Edition.EDITION_PROTO2:
              return null !== (s3 = null === (a3 = n3.options) || void 0 === a3 ? void 0 : a3.packed) && void 0 !== s3 && s3;
            case r2.Edition.EDITION_PROTO3:
              return null === (l3 = null === (i3 = n3.options) || void 0 === i3 ? void 0 : i3.packed) || void 0 === l3 || l3;
            default: {
              const { repeatedFieldEncoding: a4 } = o3(null !== (u3 = null == t3 ? void 0 : t3.getFeatures()) && void 0 !== u3 ? u3 : e3.getFeatures(), null === (c3 = n3.options) || void 0 === c3 ? void 0 : c3.features);
              return a4 == r2.FeatureSet_RepeatedFieldEncoding.PACKED;
            }
          }
      }
    }
    t2.createDescriptorSet = function(e3, t3) {
      var n3;
      const o3 = { files: [], enums: /* @__PURE__ */ new Map(), messages: /* @__PURE__ */ new Map(), services: /* @__PURE__ */ new Map(), extensions: /* @__PURE__ */ new Map(), mapEntries: /* @__PURE__ */ new Map() }, a3 = (0, c2.isMessage)(e3, r2.FileDescriptorSet) ? e3.file : e3 instanceof Uint8Array ? r2.FileDescriptorSet.fromBinary(e3).file : e3, s3 = /* @__PURE__ */ new Map();
      for (const e4 of a3) {
        const r3 = null !== (n3 = e4.edition) && void 0 !== n3 ? n3 : N2(e4.syntax, e4.edition).edition;
        let a4 = s3.get(r3);
        void 0 === a4 && (a4 = (0, l2.createFeatureResolver)(r3, null == t3 ? void 0 : t3.featureSetDefaults, null == t3 ? void 0 : t3.serializationOptions), s3.set(r3, a4)), m2(e4, o3, a4);
      }
      return o3;
    };
    const v2 = { [r2.FieldDescriptorProto_Type.DOUBLE]: u2.ScalarType.DOUBLE, [r2.FieldDescriptorProto_Type.FLOAT]: u2.ScalarType.FLOAT, [r2.FieldDescriptorProto_Type.INT64]: u2.ScalarType.INT64, [r2.FieldDescriptorProto_Type.UINT64]: u2.ScalarType.UINT64, [r2.FieldDescriptorProto_Type.INT32]: u2.ScalarType.INT32, [r2.FieldDescriptorProto_Type.FIXED64]: u2.ScalarType.FIXED64, [r2.FieldDescriptorProto_Type.FIXED32]: u2.ScalarType.FIXED32, [r2.FieldDescriptorProto_Type.BOOL]: u2.ScalarType.BOOL, [r2.FieldDescriptorProto_Type.STRING]: u2.ScalarType.STRING, [r2.FieldDescriptorProto_Type.GROUP]: void 0, [r2.FieldDescriptorProto_Type.MESSAGE]: void 0, [r2.FieldDescriptorProto_Type.BYTES]: u2.ScalarType.BYTES, [r2.FieldDescriptorProto_Type.UINT32]: u2.ScalarType.UINT32, [r2.FieldDescriptorProto_Type.ENUM]: void 0, [r2.FieldDescriptorProto_Type.SFIXED32]: u2.ScalarType.SFIXED32, [r2.FieldDescriptorProto_Type.SFIXED64]: u2.ScalarType.SFIXED64, [r2.FieldDescriptorProto_Type.SINT32]: u2.ScalarType.SINT32, [r2.FieldDescriptorProto_Type.SINT64]: u2.ScalarType.SINT64 };
    function P2(e3, t3) {
      if (!e3) return { leadingDetached: [], sourcePath: t3 };
      for (const n3 of e3.location) if (n3.path.length === t3.length && !n3.path.some((e4, n4) => t3[n4] !== e4)) return { leadingDetached: n3.leadingDetachedComments, leading: n3.leadingComments, trailing: n3.trailingComments, sourcePath: t3 };
      return { leadingDetached: [], sourcePath: t3 };
    }
    var F2;
    function D2() {
      var e3, t3, n3;
      const o3 = [];
      this.repeated && o3.push("repeated"), this.optional && o3.push("optional");
      let a3;
      switch ("proto2" == ("extension" === this.kind ? this.file : this.parent.file).syntax && this.proto.label === r2.FieldDescriptorProto_Label.REQUIRED && o3.push("required"), this.fieldKind) {
        case "scalar":
          a3 = u2.ScalarType[this.scalar].toLowerCase();
          break;
        case "enum":
          a3 = this.enum.typeName;
          break;
        case "message":
          a3 = this.message.typeName;
          break;
        case "map": {
          const e4 = u2.ScalarType[this.mapKey].toLowerCase();
          let t4;
          switch (this.mapValue.kind) {
            case "scalar":
              t4 = u2.ScalarType[this.mapValue.scalar].toLowerCase();
              break;
            case "enum":
              t4 = this.mapValue.enum.typeName;
              break;
            case "message":
              t4 = this.mapValue.message.typeName;
          }
          a3 = `map<${e4}, ${t4}>`;
          break;
        }
      }
      o3.push(`${a3} ${this.name} = ${this.number}`);
      const s3 = [];
      void 0 !== (null === (e3 = this.proto.options) || void 0 === e3 ? void 0 : e3.packed) && s3.push(`packed = ${this.proto.options.packed.toString()}`);
      let i3 = this.proto.defaultValue;
      return void 0 !== i3 && (this.proto.type != r2.FieldDescriptorProto_Type.BYTES && this.proto.type != r2.FieldDescriptorProto_Type.STRING || (i3 = '"' + i3.replace('"', '\\"') + '"'), s3.push(`default = ${i3}`)), void 0 !== this.jsonName && s3.push(`json_name = "${this.jsonName}"`), void 0 !== (null === (t3 = this.proto.options) || void 0 === t3 ? void 0 : t3.jstype) && s3.push(`jstype = ${r2.FieldOptions_JSType[this.proto.options.jstype]}`), true === (null === (n3 = this.proto.options) || void 0 === n3 ? void 0 : n3.deprecated) && s3.push("deprecated = true"), s3.length > 0 && o3.push("[" + s3.join(", ") + "]"), o3.join(" ");
    }
    function R2() {
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
    })(F2 || (F2 = {}));
  }
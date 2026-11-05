// @recovered-by cursor-re
// artifact: app/extensions/cursor-computer-use/dist/extension.js sha256:2e37990c917916e7e5b3d1524e03cf61b1cf38ddc56b1e51014a1275aa4568a6
// module: 1101 range:125903..150874
// basis: webpack-id confidence: C
// method: split
// run: ext-p0 2026-11-05T10:07:22.069Z
1101: (e2, n2, t2) => {
    "use strict";
    Object.defineProperty(n2, "__esModule", { value: true }), n2.createDescriptorSet = void 0;
    const a2 = t2(7374), s2 = t2(3098), o2 = t2(2422), r = t2(5822), i = t2(1663), A = t2(9301), c = t2(3408), l = t2(2706);
    function d(e3, n3, t3) {
      var a3, o3;
      (0, s2.assert)(e3.name, "invalid FileDescriptorProto: missing name");
      const r2 = Object.assign(Object.assign({ kind: "file", proto: e3, deprecated: null !== (o3 = null === (a3 = e3.options) || void 0 === a3 ? void 0 : a3.deprecated) && void 0 !== o3 && o3 }, f(e3.syntax, e3.edition)), { name: e3.name.replace(/\.proto/, ""), dependencies: _(e3, n3), enums: [], messages: [], extensions: [], services: [], toString() {
        return `file ${this.proto.name}`;
      }, getSyntaxComments() {
        return N(this.proto.sourceCodeInfo, [S.FileDescriptorProto_Syntax]);
      }, getPackageComments() {
        return N(this.proto.sourceCodeInfo, [S.FileDescriptorProto_Package]);
      }, getFeatures() {
        var n4;
        return t3(null === (n4 = e3.options) || void 0 === n4 ? void 0 : n4.features);
      } });
      n3.mapEntries.clear();
      for (const a4 of e3.enumType) g(a4, r2, void 0, n3, t3);
      for (const a4 of e3.messageType) p(a4, r2, void 0, n3, t3);
      for (const a4 of e3.service) E(a4, r2, n3, t3);
      m(r2, n3, t3);
      for (const e4 of n3.mapEntries.values()) u(e4, n3, t3);
      for (const e4 of r2.messages) u(e4, n3, t3), m(e4, n3, t3);
      n3.mapEntries.clear(), n3.files.push(r2);
    }
    function m(e3, n3, t3) {
      switch (e3.kind) {
        case "file":
          for (const a3 of e3.proto.extension) {
            const s3 = k(a3, e3, void 0, n3, t3);
            e3.extensions.push(s3), n3.extensions.set(s3.typeName, s3);
          }
          break;
        case "message":
          for (const a3 of e3.proto.extension) {
            const s3 = k(a3, e3.file, e3, n3, t3);
            e3.nestedExtensions.push(s3), n3.extensions.set(s3.typeName, s3);
          }
          for (const a3 of e3.nestedMessages) m(a3, n3, t3);
      }
    }
    function u(e3, n3, t3) {
      const a3 = e3.proto.oneofDecl.map((n4) => (function(e4, n5, t4) {
        return (0, s2.assert)(e4.name, "invalid OneofDescriptorProto: missing name"), { kind: "oneof", proto: e4, deprecated: false, parent: n5, fields: [], name: e4.name, toString() {
          return `oneof ${n5.typeName}.${this.name}`;
        }, getComments() {
          const e5 = [...this.parent.getComments().sourcePath, S.DescriptorProto_OneofDecl, this.parent.proto.oneofDecl.indexOf(this.proto)];
          return N(n5.file.proto.sourceCodeInfo, e5);
        }, getFeatures() {
          var a4;
          return t4(n5.getFeatures(), null === (a4 = e4.options) || void 0 === a4 ? void 0 : a4.features);
        } };
      })(n4, e3, t3)), o3 = /* @__PURE__ */ new Set();
      for (const s3 of e3.proto.field) {
        const r2 = y(s3, a3), i2 = T(s3, e3.file, e3, r2, n3, t3);
        e3.fields.push(i2), void 0 === r2 ? e3.members.push(i2) : (r2.fields.push(i2), o3.has(r2) || (o3.add(r2), e3.members.push(r2)));
      }
      for (const n4 of a3.filter((e4) => o3.has(e4))) e3.oneofs.push(n4);
      for (const a4 of e3.nestedMessages) u(a4, n3, t3);
    }
    function g(e3, n3, t3, a3, o3) {
      var i2, A2, c2;
      (0, s2.assert)(e3.name, "invalid EnumDescriptorProto: missing name");
      const l2 = { kind: "enum", proto: e3, deprecated: null !== (A2 = null === (i2 = e3.options) || void 0 === i2 ? void 0 : i2.deprecated) && void 0 !== A2 && A2, file: n3, parent: t3, name: e3.name, typeName: I(e3, t3, n3), values: [], sharedPrefix: (0, r.findEnumSharedPrefix)(e3.name, e3.value.map((e4) => {
        var n4;
        return null !== (n4 = e4.name) && void 0 !== n4 ? n4 : "";
      })), toString() {
        return `enum ${this.typeName}`;
      }, getComments() {
        const e4 = this.parent ? [...this.parent.getComments().sourcePath, S.DescriptorProto_EnumType, this.parent.proto.enumType.indexOf(this.proto)] : [S.FileDescriptorProto_EnumType, this.file.proto.enumType.indexOf(this.proto)];
        return N(n3.proto.sourceCodeInfo, e4);
      }, getFeatures() {
        var a4, s3;
        return o3(null !== (a4 = null == t3 ? void 0 : t3.getFeatures()) && void 0 !== a4 ? a4 : n3.getFeatures(), null === (s3 = e3.options) || void 0 === s3 ? void 0 : s3.features);
      } };
      a3.enums.set(l2.typeName, l2), e3.value.forEach((e4) => {
        var t4, a4;
        (0, s2.assert)(e4.name, "invalid EnumValueDescriptorProto: missing name"), (0, s2.assert)(void 0 !== e4.number, "invalid EnumValueDescriptorProto: missing number"), l2.values.push({ kind: "enum_value", proto: e4, deprecated: null !== (a4 = null === (t4 = e4.options) || void 0 === t4 ? void 0 : t4.deprecated) && void 0 !== a4 && a4, parent: l2, name: e4.name, number: e4.number, toString() {
          return `enum value ${l2.typeName}.${this.name}`;
        }, declarationString() {
          var e5;
          let n4 = `${this.name} = ${this.number}`;
          return true === (null === (e5 = this.proto.options) || void 0 === e5 ? void 0 : e5.deprecated) && (n4 += " [deprecated = true]"), n4;
        }, getComments() {
          const e5 = [...this.parent.getComments().sourcePath, S.EnumDescriptorProto_Value, this.parent.proto.value.indexOf(this.proto)];
          return N(n3.proto.sourceCodeInfo, e5);
        }, getFeatures() {
          var n4;
          return o3(l2.getFeatures(), null === (n4 = e4.options) || void 0 === n4 ? void 0 : n4.features);
        } });
      }), (null !== (c2 = null == t3 ? void 0 : t3.nestedEnums) && void 0 !== c2 ? c2 : n3.enums).push(l2);
    }
    function p(e3, n3, t3, a3, o3) {
      var r2, i2, A2, c2;
      (0, s2.assert)(e3.name, "invalid DescriptorProto: missing name");
      const l2 = { kind: "message", proto: e3, deprecated: null !== (i2 = null === (r2 = e3.options) || void 0 === r2 ? void 0 : r2.deprecated) && void 0 !== i2 && i2, file: n3, parent: t3, name: e3.name, typeName: I(e3, t3, n3), fields: [], oneofs: [], members: [], nestedEnums: [], nestedMessages: [], nestedExtensions: [], toString() {
        return `message ${this.typeName}`;
      }, getComments() {
        const e4 = this.parent ? [...this.parent.getComments().sourcePath, S.DescriptorProto_NestedType, this.parent.proto.nestedType.indexOf(this.proto)] : [S.FileDescriptorProto_MessageType, this.file.proto.messageType.indexOf(this.proto)];
        return N(n3.proto.sourceCodeInfo, e4);
      }, getFeatures() {
        var a4, s3;
        return o3(null !== (a4 = null == t3 ? void 0 : t3.getFeatures()) && void 0 !== a4 ? a4 : n3.getFeatures(), null === (s3 = e3.options) || void 0 === s3 ? void 0 : s3.features);
      } };
      true === (null === (A2 = e3.options) || void 0 === A2 ? void 0 : A2.mapEntry) ? a3.mapEntries.set(l2.typeName, l2) : ((null !== (c2 = null == t3 ? void 0 : t3.nestedMessages) && void 0 !== c2 ? c2 : n3.messages).push(l2), a3.messages.set(l2.typeName, l2));
      for (const t4 of e3.enumType) g(t4, n3, l2, a3, o3);
      for (const t4 of e3.nestedType) p(t4, n3, l2, a3, o3);
    }
    function E(e3, n3, t3, a3) {
      var o3, r2;
      (0, s2.assert)(e3.name, "invalid ServiceDescriptorProto: missing name");
      const i2 = { kind: "service", proto: e3, deprecated: null !== (r2 = null === (o3 = e3.options) || void 0 === o3 ? void 0 : o3.deprecated) && void 0 !== r2 && r2, file: n3, name: e3.name, typeName: I(e3, void 0, n3), methods: [], toString() {
        return `service ${this.typeName}`;
      }, getComments() {
        const e4 = [S.FileDescriptorProto_Service, this.file.proto.service.indexOf(this.proto)];
        return N(n3.proto.sourceCodeInfo, e4);
      }, getFeatures() {
        var t4;
        return a3(n3.getFeatures(), null === (t4 = e3.options) || void 0 === t4 ? void 0 : t4.features);
      } };
      n3.services.push(i2), t3.services.set(i2.typeName, i2);
      for (const n4 of e3.method) i2.methods.push(h(n4, i2, t3, a3));
    }
    function h(e3, n3, t3, r2) {
      var i2, A2, c2;
      let l2, d2;
      switch ((0, s2.assert)(e3.name, "invalid MethodDescriptorProto: missing name"), (0, s2.assert)(e3.inputType, "invalid MethodDescriptorProto: missing input_type"), (0, s2.assert)(e3.outputType, "invalid MethodDescriptorProto: missing output_type"), l2 = true === e3.clientStreaming && true === e3.serverStreaming ? o2.MethodKind.BiDiStreaming : true === e3.clientStreaming ? o2.MethodKind.ClientStreaming : true === e3.serverStreaming ? o2.MethodKind.ServerStreaming : o2.MethodKind.Unary, null === (i2 = e3.options) || void 0 === i2 ? void 0 : i2.idempotencyLevel) {
        case a2.MethodOptions_IdempotencyLevel.IDEMPOTENT:
          d2 = o2.MethodIdempotency.Idempotent;
          break;
        case a2.MethodOptions_IdempotencyLevel.NO_SIDE_EFFECTS:
          d2 = o2.MethodIdempotency.NoSideEffects;
          break;
        case a2.MethodOptions_IdempotencyLevel.IDEMPOTENCY_UNKNOWN:
        case void 0:
          d2 = void 0;
      }
      const m2 = t3.messages.get(C(e3.inputType)), u2 = t3.messages.get(C(e3.outputType));
      (0, s2.assert)(m2, `invalid MethodDescriptorProto: input_type ${e3.inputType} not found`), (0, s2.assert)(u2, `invalid MethodDescriptorProto: output_type ${e3.inputType} not found`);
      const g2 = e3.name;
      return { kind: "rpc", proto: e3, deprecated: null !== (c2 = null === (A2 = e3.options) || void 0 === A2 ? void 0 : A2.deprecated) && void 0 !== c2 && c2, parent: n3, name: g2, methodKind: l2, input: m2, output: u2, idempotency: d2, toString: () => `rpc ${n3.typeName}.${g2}`, getComments() {
        const e4 = [...this.parent.getComments().sourcePath, S.ServiceDescriptorProto_Method, this.parent.proto.method.indexOf(this.proto)];
        return N(n3.file.proto.sourceCodeInfo, e4);
      }, getFeatures() {
        var t4;
        return r2(n3.getFeatures(), null === (t4 = e3.options) || void 0 === t4 ? void 0 : t4.features);
      } };
    }
    function T(e3, n3, t3, o3, i2, A2) {
      var l2, d2, m2;
      (0, s2.assert)(e3.name, "invalid FieldDescriptorProto: missing name"), (0, s2.assert)(e3.number, "invalid FieldDescriptorProto: missing number"), (0, s2.assert)(e3.type, "invalid FieldDescriptorProto: missing type");
      const u2 = { proto: e3, deprecated: null !== (d2 = null === (l2 = e3.options) || void 0 === l2 ? void 0 : l2.deprecated) && void 0 !== d2 && d2, name: e3.name, number: e3.number, parent: t3, oneof: o3, optional: B(e3, n3.syntax), packedByDefault: Q(e3, A2), packed: v(n3, t3, e3, A2), jsonName: e3.jsonName === (0, r.fieldJsonName)(e3.name) ? void 0 : e3.jsonName, scalar: void 0, longType: void 0, message: void 0, enum: void 0, mapKey: void 0, mapValue: void 0, declarationString: w, toString() {
        return `field ${this.parent.typeName}.${this.name}`;
      }, getComments() {
        const e4 = [...this.parent.getComments().sourcePath, S.DescriptorProto_Field, this.parent.proto.field.indexOf(this.proto)];
        return N(n3.proto.sourceCodeInfo, e4);
      }, getFeatures() {
        var n4;
        return A2(t3.getFeatures(), null === (n4 = e3.options) || void 0 === n4 ? void 0 : n4.features);
      } }, g2 = e3.label === a2.FieldDescriptorProto_Label.REPEATED;
      switch (e3.type) {
        case a2.FieldDescriptorProto_Type.MESSAGE:
        case a2.FieldDescriptorProto_Type.GROUP: {
          (0, s2.assert)(e3.typeName, "invalid FieldDescriptorProto: missing type_name");
          const n4 = i2.mapEntries.get(C(e3.typeName));
          if (void 0 !== n4) return (0, s2.assert)(g2, "invalid FieldDescriptorProto: expected map entry to be repeated"), Object.assign(Object.assign(Object.assign({}, u2), { kind: "field", fieldKind: "map", repeated: false }), (function(e4) {
            var n5, t5;
            (0, s2.assert)(null === (n5 = e4.proto.options) || void 0 === n5 ? void 0 : n5.mapEntry, `invalid DescriptorProto: expected ${e4.toString()} to be a map entry`), (0, s2.assert)(2 === e4.fields.length, `invalid DescriptorProto: map entry ${e4.toString()} has ${e4.fields.length} fields`);
            const a3 = e4.fields.find((e5) => 1 === e5.proto.number);
            (0, s2.assert)(a3, `invalid DescriptorProto: map entry ${e4.toString()} is missing key field`);
            const o4 = a3.scalar;
            (0, s2.assert)(void 0 !== o4 && o4 !== c.ScalarType.BYTES && o4 !== c.ScalarType.FLOAT && o4 !== c.ScalarType.DOUBLE, `invalid DescriptorProto: map entry ${e4.toString()} has unexpected key type ${null !== (t5 = a3.proto.type) && void 0 !== t5 ? t5 : -1}`);
            const r2 = e4.fields.find((e5) => 2 === e5.proto.number);
            switch ((0, s2.assert)(r2, `invalid DescriptorProto: map entry ${e4.toString()} is missing value field`), r2.fieldKind) {
              case "scalar":
                return { mapKey: o4, mapValue: Object.assign(Object.assign({}, r2), { kind: "scalar" }) };
              case "message":
                return { mapKey: o4, mapValue: Object.assign(Object.assign({}, r2), { kind: "message" }) };
              case "enum":
                return { mapKey: o4, mapValue: Object.assign(Object.assign({}, r2), { kind: "enum" }) };
              default:
                throw new Error("invalid DescriptorProto: unsupported map entry value field");
            }
          })(n4));
          const t4 = i2.messages.get(C(e3.typeName));
          return (0, s2.assert)(void 0 !== t4, `invalid FieldDescriptorProto: type_name ${e3.typeName} not found`), Object.assign(Object.assign({}, u2), { kind: "field", fieldKind: "message", repeated: g2, message: t4 });
        }
        case a2.FieldDescriptorProto_Type.ENUM: {
          (0, s2.assert)(e3.typeName, "invalid FieldDescriptorProto: missing type_name");
          const n4 = i2.enums.get(C(e3.typeName));
          return (0, s2.assert)(void 0 !== n4, `invalid FieldDescriptorProto: type_name ${e3.typeName} not found`), Object.assign(Object.assign({}, u2), { kind: "field", fieldKind: "enum", getDefaultValue: b, repeated: g2, enum: n4 });
        }
        default: {
          const n4 = R[e3.type];
          return (0, s2.assert)(n4, `invalid FieldDescriptorProto: unknown type ${e3.type}`), Object.assign(Object.assign({}, u2), { kind: "field", fieldKind: "scalar", getDefaultValue: b, repeated: g2, scalar: n4, longType: (null === (m2 = e3.options) || void 0 === m2 ? void 0 : m2.jstype) == a2.FieldOptions_JSType.JS_STRING ? c.LongType.STRING : c.LongType.BIGINT });
        }
      }
    }
    function k(e3, n3, t3, a3, o3) {
      (0, s2.assert)(e3.extendee, "invalid FieldDescriptorProto: missing extendee");
      const r2 = T(e3, n3, null, void 0, a3, o3), i2 = a3.messages.get(C(e3.extendee));
      return (0, s2.assert)(i2, `invalid FieldDescriptorProto: extendee ${e3.extendee} not found`), Object.assign(Object.assign({}, r2), { kind: "extension", typeName: I(e3, t3, n3), parent: t3, file: n3, extendee: i2, toString() {
        return `extension ${this.typeName}`;
      }, getComments() {
        const t4 = this.parent ? [...this.parent.getComments().sourcePath, S.DescriptorProto_Extension, this.parent.proto.extension.indexOf(e3)] : [S.FileDescriptorProto_Extension, this.file.proto.extension.indexOf(e3)];
        return N(n3.proto.sourceCodeInfo, t4);
      }, getFeatures() {
        var a4;
        return o3((null != t3 ? t3 : n3).getFeatures(), null === (a4 = e3.options) || void 0 === a4 ? void 0 : a4.features);
      } });
    }
    function f(e3, n3) {
      let t3, s3;
      switch (e3) {
        case void 0:
        case "proto2":
          s3 = "proto2", t3 = a2.Edition.EDITION_PROTO2;
          break;
        case "proto3":
          s3 = "proto3", t3 = a2.Edition.EDITION_PROTO3;
          break;
        case "editions":
          switch (s3 = "editions", n3) {
            case void 0:
            case a2.Edition.EDITION_1_TEST_ONLY:
            case a2.Edition.EDITION_2_TEST_ONLY:
            case a2.Edition.EDITION_99997_TEST_ONLY:
            case a2.Edition.EDITION_99998_TEST_ONLY:
            case a2.Edition.EDITION_99999_TEST_ONLY:
            case a2.Edition.EDITION_UNKNOWN:
              t3 = a2.Edition.EDITION_UNKNOWN;
              break;
            default:
              t3 = n3;
          }
          break;
        default:
          throw new Error(`invalid FileDescriptorProto: unsupported syntax: ${e3}`);
      }
      if ("editions" === e3 && n3 === a2.Edition.EDITION_UNKNOWN) throw new Error(`invalid FileDescriptorProto: syntax ${e3} cannot have edition ${String(n3)}`);
      return { syntax: s3, edition: t3 };
    }
    function _(e3, n3) {
      return e3.dependency.map((e4) => {
        const t3 = n3.files.find((n4) => n4.proto.name === e4);
        return (0, s2.assert)(t3), t3;
      });
    }
    function I(e3, n3, t3) {
      let a3;
      return (0, s2.assert)(e3.name, `invalid ${e3.getType().typeName}: missing name`), a3 = n3 ? `${n3.typeName}.${e3.name}` : void 0 !== t3.proto.package ? `${t3.proto.package}.${e3.name}` : `${e3.name}`, a3;
    }
    function C(e3) {
      return e3.startsWith(".") ? e3.substring(1) : e3;
    }
    function y(e3, n3) {
      var t3;
      const a3 = e3.oneofIndex;
      if (void 0 === a3) return;
      let o3;
      return true !== e3.proto3Optional && (o3 = n3[a3], (0, s2.assert)(o3, `invalid FieldDescriptorProto: oneof #${a3} for field #${null !== (t3 = e3.number) && void 0 !== t3 ? t3 : -1} not found`)), o3;
    }
    function B(e3, n3) {
      switch (n3) {
        case "proto2":
          return void 0 === e3.oneofIndex && e3.label === a2.FieldDescriptorProto_Label.OPTIONAL;
        case "proto3":
          return true === e3.proto3Optional;
        case "editions":
          return false;
      }
    }
    function Q(e3, n3) {
      const { repeatedFieldEncoding: t3 } = n3();
      if (t3 != a2.FeatureSet_RepeatedFieldEncoding.PACKED) return false;
      switch (e3.type) {
        case a2.FieldDescriptorProto_Type.STRING:
        case a2.FieldDescriptorProto_Type.BYTES:
        case a2.FieldDescriptorProto_Type.GROUP:
        case a2.FieldDescriptorProto_Type.MESSAGE:
          return false;
        default:
          return true;
      }
    }
    function v(e3, n3, t3, s3) {
      var o3, r2, i2, A2, c2, l2;
      switch (t3.type) {
        case a2.FieldDescriptorProto_Type.STRING:
        case a2.FieldDescriptorProto_Type.BYTES:
        case a2.FieldDescriptorProto_Type.GROUP:
        case a2.FieldDescriptorProto_Type.MESSAGE:
          return false;
        default:
          switch (e3.edition) {
            case a2.Edition.EDITION_PROTO2:
              return null !== (r2 = null === (o3 = t3.options) || void 0 === o3 ? void 0 : o3.packed) && void 0 !== r2 && r2;
            case a2.Edition.EDITION_PROTO3:
              return null === (A2 = null === (i2 = t3.options) || void 0 === i2 ? void 0 : i2.packed) || void 0 === A2 || A2;
            default: {
              const { repeatedFieldEncoding: o4 } = s3(null !== (c2 = null == n3 ? void 0 : n3.getFeatures()) && void 0 !== c2 ? c2 : e3.getFeatures(), null === (l2 = t3.options) || void 0 === l2 ? void 0 : l2.features);
              return o4 == a2.FeatureSet_RepeatedFieldEncoding.PACKED;
            }
          }
      }
    }
    n2.createDescriptorSet = function(e3, n3) {
      var t3;
      const s3 = { files: [], enums: /* @__PURE__ */ new Map(), messages: /* @__PURE__ */ new Map(), services: /* @__PURE__ */ new Map(), extensions: /* @__PURE__ */ new Map(), mapEntries: /* @__PURE__ */ new Map() }, o3 = (0, l.isMessage)(e3, a2.FileDescriptorSet) ? e3.file : e3 instanceof Uint8Array ? a2.FileDescriptorSet.fromBinary(e3).file : e3, r2 = /* @__PURE__ */ new Map();
      for (const e4 of o3) {
        const a3 = null !== (t3 = e4.edition) && void 0 !== t3 ? t3 : f(e4.syntax, e4.edition).edition;
        let o4 = r2.get(a3);
        void 0 === o4 && (o4 = (0, A.createFeatureResolver)(a3, null == n3 ? void 0 : n3.featureSetDefaults, null == n3 ? void 0 : n3.serializationOptions), r2.set(a3, o4)), d(e4, s3, o4);
      }
      return s3;
    };
    const R = { [a2.FieldDescriptorProto_Type.DOUBLE]: c.ScalarType.DOUBLE, [a2.FieldDescriptorProto_Type.FLOAT]: c.ScalarType.FLOAT, [a2.FieldDescriptorProto_Type.INT64]: c.ScalarType.INT64, [a2.FieldDescriptorProto_Type.UINT64]: c.ScalarType.UINT64, [a2.FieldDescriptorProto_Type.INT32]: c.ScalarType.INT32, [a2.FieldDescriptorProto_Type.FIXED64]: c.ScalarType.FIXED64, [a2.FieldDescriptorProto_Type.FIXED32]: c.ScalarType.FIXED32, [a2.FieldDescriptorProto_Type.BOOL]: c.ScalarType.BOOL, [a2.FieldDescriptorProto_Type.STRING]: c.ScalarType.STRING, [a2.FieldDescriptorProto_Type.GROUP]: void 0, [a2.FieldDescriptorProto_Type.MESSAGE]: void 0, [a2.FieldDescriptorProto_Type.BYTES]: c.ScalarType.BYTES, [a2.FieldDescriptorProto_Type.UINT32]: c.ScalarType.UINT32, [a2.FieldDescriptorProto_Type.ENUM]: void 0, [a2.FieldDescriptorProto_Type.SFIXED32]: c.ScalarType.SFIXED32, [a2.FieldDescriptorProto_Type.SFIXED64]: c.ScalarType.SFIXED64, [a2.FieldDescriptorProto_Type.SINT32]: c.ScalarType.SINT32, [a2.FieldDescriptorProto_Type.SINT64]: c.ScalarType.SINT64 };
    function N(e3, n3) {
      if (!e3) return { leadingDetached: [], sourcePath: n3 };
      for (const t3 of e3.location) if (t3.path.length === n3.length && !t3.path.some((e4, t4) => n3[t4] !== e4)) return { leadingDetached: t3.leadingDetachedComments, leading: t3.leadingComments, trailing: t3.trailingComments, sourcePath: n3 };
      return { leadingDetached: [], sourcePath: n3 };
    }
    var S;
    function w() {
      var e3, n3, t3;
      const s3 = [];
      this.repeated && s3.push("repeated"), this.optional && s3.push("optional");
      let o3;
      switch ("proto2" == ("extension" === this.kind ? this.file : this.parent.file).syntax && this.proto.label === a2.FieldDescriptorProto_Label.REQUIRED && s3.push("required"), this.fieldKind) {
        case "scalar":
          o3 = c.ScalarType[this.scalar].toLowerCase();
          break;
        case "enum":
          o3 = this.enum.typeName;
          break;
        case "message":
          o3 = this.message.typeName;
          break;
        case "map": {
          const e4 = c.ScalarType[this.mapKey].toLowerCase();
          let n4;
          switch (this.mapValue.kind) {
            case "scalar":
              n4 = c.ScalarType[this.mapValue.scalar].toLowerCase();
              break;
            case "enum":
              n4 = this.mapValue.enum.typeName;
              break;
            case "message":
              n4 = this.mapValue.message.typeName;
          }
          o3 = `map<${e4}, ${n4}>`;
          break;
        }
      }
      s3.push(`${o3} ${this.name} = ${this.number}`);
      const r2 = [];
      void 0 !== (null === (e3 = this.proto.options) || void 0 === e3 ? void 0 : e3.packed) && r2.push(`packed = ${this.proto.options.packed.toString()}`);
      let i2 = this.proto.defaultValue;
      return void 0 !== i2 && (this.proto.type != a2.FieldDescriptorProto_Type.BYTES && this.proto.type != a2.FieldDescriptorProto_Type.STRING || (i2 = '"' + i2.replace('"', '\\"') + '"'), r2.push(`default = ${i2}`)), void 0 !== this.jsonName && r2.push(`json_name = "${this.jsonName}"`), void 0 !== (null === (n3 = this.proto.options) || void 0 === n3 ? void 0 : n3.jstype) && r2.push(`jstype = ${a2.FieldOptions_JSType[this.proto.options.jstype]}`), true === (null === (t3 = this.proto.options) || void 0 === t3 ? void 0 : t3.deprecated) && r2.push("deprecated = true"), r2.length > 0 && s3.push("[" + r2.join(", ") + "]"), s3.join(" ");
    }
    function b() {
      const e3 = this.proto.defaultValue;
      if (void 0 !== e3) switch (this.fieldKind) {
        case "enum":
          return (0, i.parseTextFormatEnumValue)(this.enum, e3);
        case "scalar":
          return (0, i.parseTextFormatScalarValue)(this.scalar, e3);
        default:
          return;
      }
    }
    !(function(e3) {
      e3[e3.FileDescriptorProto_Package = 2] = "FileDescriptorProto_Package", e3[e3.FileDescriptorProto_MessageType = 4] = "FileDescriptorProto_MessageType", e3[e3.FileDescriptorProto_EnumType = 5] = "FileDescriptorProto_EnumType", e3[e3.FileDescriptorProto_Service = 6] = "FileDescriptorProto_Service", e3[e3.FileDescriptorProto_Extension = 7] = "FileDescriptorProto_Extension", e3[e3.FileDescriptorProto_Syntax = 12] = "FileDescriptorProto_Syntax", e3[e3.DescriptorProto_Field = 2] = "DescriptorProto_Field", e3[e3.DescriptorProto_NestedType = 3] = "DescriptorProto_NestedType", e3[e3.DescriptorProto_EnumType = 4] = "DescriptorProto_EnumType", e3[e3.DescriptorProto_Extension = 6] = "DescriptorProto_Extension", e3[e3.DescriptorProto_OneofDecl = 8] = "DescriptorProto_OneofDecl", e3[e3.EnumDescriptorProto_Value = 2] = "EnumDescriptorProto_Value", e3[e3.ServiceDescriptorProto_Method = 2] = "ServiceDescriptorProto_Method";
    })(S || (S = {}));
  }
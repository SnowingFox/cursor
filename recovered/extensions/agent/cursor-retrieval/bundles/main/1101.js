// @recovered-by cursor-re
// artifact: app/extensions/cursor-retrieval/dist/main.js sha256:50c717cc16d67dfb571db8461d6630caeb8e421ad0090d156086d1a3d53b1b2b
// module: 1101 range:136607..161584
// basis: webpack-id confidence: C
// method: split
// run: ext-agent 2026-11-05T10:20:08.356Z
1101: (e2, a2, n2) => {
    "use strict";
    Object.defineProperty(a2, "__esModule", { value: true }), a2.createDescriptorSet = void 0;
    const t2 = n2(7374), s2 = n2(3098), o2 = n2(2422), r2 = n2(5822), i2 = n2(1663), l = n2(9301), d = n2(3408), m = n2(2706);
    function c(e3, a3, n3) {
      var t3, o3;
      (0, s2.assert)(e3.name, "invalid FileDescriptorProto: missing name");
      const r3 = Object.assign(Object.assign({ kind: "file", proto: e3, deprecated: null !== (o3 = null === (t3 = e3.options) || void 0 === t3 ? void 0 : t3.deprecated) && void 0 !== o3 && o3 }, E(e3.syntax, e3.edition)), { name: e3.name.replace(/\.proto/, ""), dependencies: f(e3, a3), enums: [], messages: [], extensions: [], services: [], toString() {
        return `file ${this.proto.name}`;
      }, getSyntaxComments() {
        return B(this.proto.sourceCodeInfo, [w.FileDescriptorProto_Syntax]);
      }, getPackageComments() {
        return B(this.proto.sourceCodeInfo, [w.FileDescriptorProto_Package]);
      }, getFeatures() {
        var a4;
        return n3(null === (a4 = e3.options) || void 0 === a4 ? void 0 : a4.features);
      } });
      a3.mapEntries.clear();
      for (const t4 of e3.enumType) u(t4, r3, void 0, a3, n3);
      for (const t4 of e3.messageType) g(t4, r3, void 0, a3, n3);
      for (const t4 of e3.service) T(t4, r3, a3, n3);
      p(r3, a3, n3);
      for (const e4 of a3.mapEntries.values()) A(e4, a3, n3);
      for (const e4 of r3.messages) A(e4, a3, n3), p(e4, a3, n3);
      a3.mapEntries.clear(), a3.files.push(r3);
    }
    function p(e3, a3, n3) {
      switch (e3.kind) {
        case "file":
          for (const t3 of e3.proto.extension) {
            const s3 = _(t3, e3, void 0, a3, n3);
            e3.extensions.push(s3), a3.extensions.set(s3.typeName, s3);
          }
          break;
        case "message":
          for (const t3 of e3.proto.extension) {
            const s3 = _(t3, e3.file, e3, a3, n3);
            e3.nestedExtensions.push(s3), a3.extensions.set(s3.typeName, s3);
          }
          for (const t3 of e3.nestedMessages) p(t3, a3, n3);
      }
    }
    function A(e3, a3, n3) {
      const t3 = e3.proto.oneofDecl.map((a4) => (function(e4, a5, n4) {
        return (0, s2.assert)(e4.name, "invalid OneofDescriptorProto: missing name"), { kind: "oneof", proto: e4, deprecated: false, parent: a5, fields: [], name: e4.name, toString() {
          return `oneof ${a5.typeName}.${this.name}`;
        }, getComments() {
          const e5 = [...this.parent.getComments().sourcePath, w.DescriptorProto_OneofDecl, this.parent.proto.oneofDecl.indexOf(this.proto)];
          return B(a5.file.proto.sourceCodeInfo, e5);
        }, getFeatures() {
          var t4;
          return n4(a5.getFeatures(), null === (t4 = e4.options) || void 0 === t4 ? void 0 : t4.features);
        } };
      })(a4, e3, n3)), o3 = /* @__PURE__ */ new Set();
      for (const s3 of e3.proto.field) {
        const r3 = v(s3, t3), i3 = k(s3, e3.file, e3, r3, a3, n3);
        e3.fields.push(i3), void 0 === r3 ? e3.members.push(i3) : (r3.fields.push(i3), o3.has(r3) || (o3.add(r3), e3.members.push(r3)));
      }
      for (const a4 of t3.filter((e4) => o3.has(e4))) e3.oneofs.push(a4);
      for (const t4 of e3.nestedMessages) A(t4, a3, n3);
    }
    function u(e3, a3, n3, t3, o3) {
      var i3, l2, d2;
      (0, s2.assert)(e3.name, "invalid EnumDescriptorProto: missing name");
      const m2 = { kind: "enum", proto: e3, deprecated: null !== (l2 = null === (i3 = e3.options) || void 0 === i3 ? void 0 : i3.deprecated) && void 0 !== l2 && l2, file: a3, parent: n3, name: e3.name, typeName: C(e3, n3, a3), values: [], sharedPrefix: (0, r2.findEnumSharedPrefix)(e3.name, e3.value.map((e4) => {
        var a4;
        return null !== (a4 = e4.name) && void 0 !== a4 ? a4 : "";
      })), toString() {
        return `enum ${this.typeName}`;
      }, getComments() {
        const e4 = this.parent ? [...this.parent.getComments().sourcePath, w.DescriptorProto_EnumType, this.parent.proto.enumType.indexOf(this.proto)] : [w.FileDescriptorProto_EnumType, this.file.proto.enumType.indexOf(this.proto)];
        return B(a3.proto.sourceCodeInfo, e4);
      }, getFeatures() {
        var t4, s3;
        return o3(null !== (t4 = null == n3 ? void 0 : n3.getFeatures()) && void 0 !== t4 ? t4 : a3.getFeatures(), null === (s3 = e3.options) || void 0 === s3 ? void 0 : s3.features);
      } };
      t3.enums.set(m2.typeName, m2), e3.value.forEach((e4) => {
        var n4, t4;
        (0, s2.assert)(e4.name, "invalid EnumValueDescriptorProto: missing name"), (0, s2.assert)(void 0 !== e4.number, "invalid EnumValueDescriptorProto: missing number"), m2.values.push({ kind: "enum_value", proto: e4, deprecated: null !== (t4 = null === (n4 = e4.options) || void 0 === n4 ? void 0 : n4.deprecated) && void 0 !== t4 && t4, parent: m2, name: e4.name, number: e4.number, toString() {
          return `enum value ${m2.typeName}.${this.name}`;
        }, declarationString() {
          var e5;
          let a4 = `${this.name} = ${this.number}`;
          return true === (null === (e5 = this.proto.options) || void 0 === e5 ? void 0 : e5.deprecated) && (a4 += " [deprecated = true]"), a4;
        }, getComments() {
          const e5 = [...this.parent.getComments().sourcePath, w.EnumDescriptorProto_Value, this.parent.proto.value.indexOf(this.proto)];
          return B(a3.proto.sourceCodeInfo, e5);
        }, getFeatures() {
          var a4;
          return o3(m2.getFeatures(), null === (a4 = e4.options) || void 0 === a4 ? void 0 : a4.features);
        } });
      }), (null !== (d2 = null == n3 ? void 0 : n3.nestedEnums) && void 0 !== d2 ? d2 : a3.enums).push(m2);
    }
    function g(e3, a3, n3, t3, o3) {
      var r3, i3, l2, d2;
      (0, s2.assert)(e3.name, "invalid DescriptorProto: missing name");
      const m2 = { kind: "message", proto: e3, deprecated: null !== (i3 = null === (r3 = e3.options) || void 0 === r3 ? void 0 : r3.deprecated) && void 0 !== i3 && i3, file: a3, parent: n3, name: e3.name, typeName: C(e3, n3, a3), fields: [], oneofs: [], members: [], nestedEnums: [], nestedMessages: [], nestedExtensions: [], toString() {
        return `message ${this.typeName}`;
      }, getComments() {
        const e4 = this.parent ? [...this.parent.getComments().sourcePath, w.DescriptorProto_NestedType, this.parent.proto.nestedType.indexOf(this.proto)] : [w.FileDescriptorProto_MessageType, this.file.proto.messageType.indexOf(this.proto)];
        return B(a3.proto.sourceCodeInfo, e4);
      }, getFeatures() {
        var t4, s3;
        return o3(null !== (t4 = null == n3 ? void 0 : n3.getFeatures()) && void 0 !== t4 ? t4 : a3.getFeatures(), null === (s3 = e3.options) || void 0 === s3 ? void 0 : s3.features);
      } };
      true === (null === (l2 = e3.options) || void 0 === l2 ? void 0 : l2.mapEntry) ? t3.mapEntries.set(m2.typeName, m2) : ((null !== (d2 = null == n3 ? void 0 : n3.nestedMessages) && void 0 !== d2 ? d2 : a3.messages).push(m2), t3.messages.set(m2.typeName, m2));
      for (const n4 of e3.enumType) u(n4, a3, m2, t3, o3);
      for (const n4 of e3.nestedType) g(n4, a3, m2, t3, o3);
    }
    function T(e3, a3, n3, t3) {
      var o3, r3;
      (0, s2.assert)(e3.name, "invalid ServiceDescriptorProto: missing name");
      const i3 = { kind: "service", proto: e3, deprecated: null !== (r3 = null === (o3 = e3.options) || void 0 === o3 ? void 0 : o3.deprecated) && void 0 !== r3 && r3, file: a3, name: e3.name, typeName: C(e3, void 0, a3), methods: [], toString() {
        return `service ${this.typeName}`;
      }, getComments() {
        const e4 = [w.FileDescriptorProto_Service, this.file.proto.service.indexOf(this.proto)];
        return B(a3.proto.sourceCodeInfo, e4);
      }, getFeatures() {
        var n4;
        return t3(a3.getFeatures(), null === (n4 = e3.options) || void 0 === n4 ? void 0 : n4.features);
      } };
      a3.services.push(i3), n3.services.set(i3.typeName, i3);
      for (const a4 of e3.method) i3.methods.push(h(a4, i3, n3, t3));
    }
    function h(e3, a3, n3, r3) {
      var i3, l2, d2;
      let m2, c2;
      switch ((0, s2.assert)(e3.name, "invalid MethodDescriptorProto: missing name"), (0, s2.assert)(e3.inputType, "invalid MethodDescriptorProto: missing input_type"), (0, s2.assert)(e3.outputType, "invalid MethodDescriptorProto: missing output_type"), m2 = true === e3.clientStreaming && true === e3.serverStreaming ? o2.MethodKind.BiDiStreaming : true === e3.clientStreaming ? o2.MethodKind.ClientStreaming : true === e3.serverStreaming ? o2.MethodKind.ServerStreaming : o2.MethodKind.Unary, null === (i3 = e3.options) || void 0 === i3 ? void 0 : i3.idempotencyLevel) {
        case t2.MethodOptions_IdempotencyLevel.IDEMPOTENT:
          c2 = o2.MethodIdempotency.Idempotent;
          break;
        case t2.MethodOptions_IdempotencyLevel.NO_SIDE_EFFECTS:
          c2 = o2.MethodIdempotency.NoSideEffects;
          break;
        case t2.MethodOptions_IdempotencyLevel.IDEMPOTENCY_UNKNOWN:
        case void 0:
          c2 = void 0;
      }
      const p2 = n3.messages.get(I(e3.inputType)), A2 = n3.messages.get(I(e3.outputType));
      (0, s2.assert)(p2, `invalid MethodDescriptorProto: input_type ${e3.inputType} not found`), (0, s2.assert)(A2, `invalid MethodDescriptorProto: output_type ${e3.inputType} not found`);
      const u2 = e3.name;
      return { kind: "rpc", proto: e3, deprecated: null !== (d2 = null === (l2 = e3.options) || void 0 === l2 ? void 0 : l2.deprecated) && void 0 !== d2 && d2, parent: a3, name: u2, methodKind: m2, input: p2, output: A2, idempotency: c2, toString: () => `rpc ${a3.typeName}.${u2}`, getComments() {
        const e4 = [...this.parent.getComments().sourcePath, w.ServiceDescriptorProto_Method, this.parent.proto.method.indexOf(this.proto)];
        return B(a3.file.proto.sourceCodeInfo, e4);
      }, getFeatures() {
        var n4;
        return r3(a3.getFeatures(), null === (n4 = e3.options) || void 0 === n4 ? void 0 : n4.features);
      } };
    }
    function k(e3, a3, n3, o3, i3, l2) {
      var m2, c2, p2;
      (0, s2.assert)(e3.name, "invalid FieldDescriptorProto: missing name"), (0, s2.assert)(e3.number, "invalid FieldDescriptorProto: missing number"), (0, s2.assert)(e3.type, "invalid FieldDescriptorProto: missing type");
      const A2 = { proto: e3, deprecated: null !== (c2 = null === (m2 = e3.options) || void 0 === m2 ? void 0 : m2.deprecated) && void 0 !== c2 && c2, name: e3.name, number: e3.number, parent: n3, oneof: o3, optional: y(e3, a3.syntax), packedByDefault: S(e3, l2), packed: R(a3, n3, e3, l2), jsonName: e3.jsonName === (0, r2.fieldJsonName)(e3.name) ? void 0 : e3.jsonName, scalar: void 0, longType: void 0, message: void 0, enum: void 0, mapKey: void 0, mapValue: void 0, declarationString: b, toString() {
        return `field ${this.parent.typeName}.${this.name}`;
      }, getComments() {
        const e4 = [...this.parent.getComments().sourcePath, w.DescriptorProto_Field, this.parent.proto.field.indexOf(this.proto)];
        return B(a3.proto.sourceCodeInfo, e4);
      }, getFeatures() {
        var a4;
        return l2(n3.getFeatures(), null === (a4 = e3.options) || void 0 === a4 ? void 0 : a4.features);
      } }, u2 = e3.label === t2.FieldDescriptorProto_Label.REPEATED;
      switch (e3.type) {
        case t2.FieldDescriptorProto_Type.MESSAGE:
        case t2.FieldDescriptorProto_Type.GROUP: {
          (0, s2.assert)(e3.typeName, "invalid FieldDescriptorProto: missing type_name");
          const a4 = i3.mapEntries.get(I(e3.typeName));
          if (void 0 !== a4) return (0, s2.assert)(u2, "invalid FieldDescriptorProto: expected map entry to be repeated"), Object.assign(Object.assign(Object.assign({}, A2), { kind: "field", fieldKind: "map", repeated: false }), (function(e4) {
            var a5, n5;
            (0, s2.assert)(null === (a5 = e4.proto.options) || void 0 === a5 ? void 0 : a5.mapEntry, `invalid DescriptorProto: expected ${e4.toString()} to be a map entry`), (0, s2.assert)(2 === e4.fields.length, `invalid DescriptorProto: map entry ${e4.toString()} has ${e4.fields.length} fields`);
            const t3 = e4.fields.find((e5) => 1 === e5.proto.number);
            (0, s2.assert)(t3, `invalid DescriptorProto: map entry ${e4.toString()} is missing key field`);
            const o4 = t3.scalar;
            (0, s2.assert)(void 0 !== o4 && o4 !== d.ScalarType.BYTES && o4 !== d.ScalarType.FLOAT && o4 !== d.ScalarType.DOUBLE, `invalid DescriptorProto: map entry ${e4.toString()} has unexpected key type ${null !== (n5 = t3.proto.type) && void 0 !== n5 ? n5 : -1}`);
            const r3 = e4.fields.find((e5) => 2 === e5.proto.number);
            switch ((0, s2.assert)(r3, `invalid DescriptorProto: map entry ${e4.toString()} is missing value field`), r3.fieldKind) {
              case "scalar":
                return { mapKey: o4, mapValue: Object.assign(Object.assign({}, r3), { kind: "scalar" }) };
              case "message":
                return { mapKey: o4, mapValue: Object.assign(Object.assign({}, r3), { kind: "message" }) };
              case "enum":
                return { mapKey: o4, mapValue: Object.assign(Object.assign({}, r3), { kind: "enum" }) };
              default:
                throw new Error("invalid DescriptorProto: unsupported map entry value field");
            }
          })(a4));
          const n4 = i3.messages.get(I(e3.typeName));
          return (0, s2.assert)(void 0 !== n4, `invalid FieldDescriptorProto: type_name ${e3.typeName} not found`), Object.assign(Object.assign({}, A2), { kind: "field", fieldKind: "message", repeated: u2, message: n4 });
        }
        case t2.FieldDescriptorProto_Type.ENUM: {
          (0, s2.assert)(e3.typeName, "invalid FieldDescriptorProto: missing type_name");
          const a4 = i3.enums.get(I(e3.typeName));
          return (0, s2.assert)(void 0 !== a4, `invalid FieldDescriptorProto: type_name ${e3.typeName} not found`), Object.assign(Object.assign({}, A2), { kind: "field", fieldKind: "enum", getDefaultValue: Q, repeated: u2, enum: a4 });
        }
        default: {
          const a4 = N[e3.type];
          return (0, s2.assert)(a4, `invalid FieldDescriptorProto: unknown type ${e3.type}`), Object.assign(Object.assign({}, A2), { kind: "field", fieldKind: "scalar", getDefaultValue: Q, repeated: u2, scalar: a4, longType: (null === (p2 = e3.options) || void 0 === p2 ? void 0 : p2.jstype) == t2.FieldOptions_JSType.JS_STRING ? d.LongType.STRING : d.LongType.BIGINT });
        }
      }
    }
    function _(e3, a3, n3, t3, o3) {
      (0, s2.assert)(e3.extendee, "invalid FieldDescriptorProto: missing extendee");
      const r3 = k(e3, a3, null, void 0, t3, o3), i3 = t3.messages.get(I(e3.extendee));
      return (0, s2.assert)(i3, `invalid FieldDescriptorProto: extendee ${e3.extendee} not found`), Object.assign(Object.assign({}, r3), { kind: "extension", typeName: C(e3, n3, a3), parent: n3, file: a3, extendee: i3, toString() {
        return `extension ${this.typeName}`;
      }, getComments() {
        const n4 = this.parent ? [...this.parent.getComments().sourcePath, w.DescriptorProto_Extension, this.parent.proto.extension.indexOf(e3)] : [w.FileDescriptorProto_Extension, this.file.proto.extension.indexOf(e3)];
        return B(a3.proto.sourceCodeInfo, n4);
      }, getFeatures() {
        var t4;
        return o3((null != n3 ? n3 : a3).getFeatures(), null === (t4 = e3.options) || void 0 === t4 ? void 0 : t4.features);
      } });
    }
    function E(e3, a3) {
      let n3, s3;
      switch (e3) {
        case void 0:
        case "proto2":
          s3 = "proto2", n3 = t2.Edition.EDITION_PROTO2;
          break;
        case "proto3":
          s3 = "proto3", n3 = t2.Edition.EDITION_PROTO3;
          break;
        case "editions":
          switch (s3 = "editions", a3) {
            case void 0:
            case t2.Edition.EDITION_1_TEST_ONLY:
            case t2.Edition.EDITION_2_TEST_ONLY:
            case t2.Edition.EDITION_99997_TEST_ONLY:
            case t2.Edition.EDITION_99998_TEST_ONLY:
            case t2.Edition.EDITION_99999_TEST_ONLY:
            case t2.Edition.EDITION_UNKNOWN:
              n3 = t2.Edition.EDITION_UNKNOWN;
              break;
            default:
              n3 = a3;
          }
          break;
        default:
          throw new Error(`invalid FileDescriptorProto: unsupported syntax: ${e3}`);
      }
      if ("editions" === e3 && a3 === t2.Edition.EDITION_UNKNOWN) throw new Error(`invalid FileDescriptorProto: syntax ${e3} cannot have edition ${String(a3)}`);
      return { syntax: s3, edition: n3 };
    }
    function f(e3, a3) {
      return e3.dependency.map((e4) => {
        const n3 = a3.files.find((a4) => a4.proto.name === e4);
        return (0, s2.assert)(n3), n3;
      });
    }
    function C(e3, a3, n3) {
      let t3;
      return (0, s2.assert)(e3.name, `invalid ${e3.getType().typeName}: missing name`), t3 = a3 ? `${a3.typeName}.${e3.name}` : void 0 !== n3.proto.package ? `${n3.proto.package}.${e3.name}` : `${e3.name}`, t3;
    }
    function I(e3) {
      return e3.startsWith(".") ? e3.substring(1) : e3;
    }
    function v(e3, a3) {
      var n3;
      const t3 = e3.oneofIndex;
      if (void 0 === t3) return;
      let o3;
      return true !== e3.proto3Optional && (o3 = a3[t3], (0, s2.assert)(o3, `invalid FieldDescriptorProto: oneof #${t3} for field #${null !== (n3 = e3.number) && void 0 !== n3 ? n3 : -1} not found`)), o3;
    }
    function y(e3, a3) {
      switch (a3) {
        case "proto2":
          return void 0 === e3.oneofIndex && e3.label === t2.FieldDescriptorProto_Label.OPTIONAL;
        case "proto3":
          return true === e3.proto3Optional;
        case "editions":
          return false;
      }
    }
    function S(e3, a3) {
      const { repeatedFieldEncoding: n3 } = a3();
      if (n3 != t2.FeatureSet_RepeatedFieldEncoding.PACKED) return false;
      switch (e3.type) {
        case t2.FieldDescriptorProto_Type.STRING:
        case t2.FieldDescriptorProto_Type.BYTES:
        case t2.FieldDescriptorProto_Type.GROUP:
        case t2.FieldDescriptorProto_Type.MESSAGE:
          return false;
        default:
          return true;
      }
    }
    function R(e3, a3, n3, s3) {
      var o3, r3, i3, l2, d2, m2;
      switch (n3.type) {
        case t2.FieldDescriptorProto_Type.STRING:
        case t2.FieldDescriptorProto_Type.BYTES:
        case t2.FieldDescriptorProto_Type.GROUP:
        case t2.FieldDescriptorProto_Type.MESSAGE:
          return false;
        default:
          switch (e3.edition) {
            case t2.Edition.EDITION_PROTO2:
              return null !== (r3 = null === (o3 = n3.options) || void 0 === o3 ? void 0 : o3.packed) && void 0 !== r3 && r3;
            case t2.Edition.EDITION_PROTO3:
              return null === (l2 = null === (i3 = n3.options) || void 0 === i3 ? void 0 : i3.packed) || void 0 === l2 || l2;
            default: {
              const { repeatedFieldEncoding: o4 } = s3(null !== (d2 = null == a3 ? void 0 : a3.getFeatures()) && void 0 !== d2 ? d2 : e3.getFeatures(), null === (m2 = n3.options) || void 0 === m2 ? void 0 : m2.features);
              return o4 == t2.FeatureSet_RepeatedFieldEncoding.PACKED;
            }
          }
      }
    }
    a2.createDescriptorSet = function(e3, a3) {
      var n3;
      const s3 = { files: [], enums: /* @__PURE__ */ new Map(), messages: /* @__PURE__ */ new Map(), services: /* @__PURE__ */ new Map(), extensions: /* @__PURE__ */ new Map(), mapEntries: /* @__PURE__ */ new Map() }, o3 = (0, m.isMessage)(e3, t2.FileDescriptorSet) ? e3.file : e3 instanceof Uint8Array ? t2.FileDescriptorSet.fromBinary(e3).file : e3, r3 = /* @__PURE__ */ new Map();
      for (const e4 of o3) {
        const t3 = null !== (n3 = e4.edition) && void 0 !== n3 ? n3 : E(e4.syntax, e4.edition).edition;
        let o4 = r3.get(t3);
        void 0 === o4 && (o4 = (0, l.createFeatureResolver)(t3, null == a3 ? void 0 : a3.featureSetDefaults, null == a3 ? void 0 : a3.serializationOptions), r3.set(t3, o4)), c(e4, s3, o4);
      }
      return s3;
    };
    const N = { [t2.FieldDescriptorProto_Type.DOUBLE]: d.ScalarType.DOUBLE, [t2.FieldDescriptorProto_Type.FLOAT]: d.ScalarType.FLOAT, [t2.FieldDescriptorProto_Type.INT64]: d.ScalarType.INT64, [t2.FieldDescriptorProto_Type.UINT64]: d.ScalarType.UINT64, [t2.FieldDescriptorProto_Type.INT32]: d.ScalarType.INT32, [t2.FieldDescriptorProto_Type.FIXED64]: d.ScalarType.FIXED64, [t2.FieldDescriptorProto_Type.FIXED32]: d.ScalarType.FIXED32, [t2.FieldDescriptorProto_Type.BOOL]: d.ScalarType.BOOL, [t2.FieldDescriptorProto_Type.STRING]: d.ScalarType.STRING, [t2.FieldDescriptorProto_Type.GROUP]: void 0, [t2.FieldDescriptorProto_Type.MESSAGE]: void 0, [t2.FieldDescriptorProto_Type.BYTES]: d.ScalarType.BYTES, [t2.FieldDescriptorProto_Type.UINT32]: d.ScalarType.UINT32, [t2.FieldDescriptorProto_Type.ENUM]: void 0, [t2.FieldDescriptorProto_Type.SFIXED32]: d.ScalarType.SFIXED32, [t2.FieldDescriptorProto_Type.SFIXED64]: d.ScalarType.SFIXED64, [t2.FieldDescriptorProto_Type.SINT32]: d.ScalarType.SINT32, [t2.FieldDescriptorProto_Type.SINT64]: d.ScalarType.SINT64 };
    function B(e3, a3) {
      if (!e3) return { leadingDetached: [], sourcePath: a3 };
      for (const n3 of e3.location) if (n3.path.length === a3.length && !n3.path.some((e4, n4) => a3[n4] !== e4)) return { leadingDetached: n3.leadingDetachedComments, leading: n3.leadingComments, trailing: n3.trailingComments, sourcePath: a3 };
      return { leadingDetached: [], sourcePath: a3 };
    }
    var w;
    function b() {
      var e3, a3, n3;
      const s3 = [];
      this.repeated && s3.push("repeated"), this.optional && s3.push("optional");
      let o3;
      switch ("proto2" == ("extension" === this.kind ? this.file : this.parent.file).syntax && this.proto.label === t2.FieldDescriptorProto_Label.REQUIRED && s3.push("required"), this.fieldKind) {
        case "scalar":
          o3 = d.ScalarType[this.scalar].toLowerCase();
          break;
        case "enum":
          o3 = this.enum.typeName;
          break;
        case "message":
          o3 = this.message.typeName;
          break;
        case "map": {
          const e4 = d.ScalarType[this.mapKey].toLowerCase();
          let a4;
          switch (this.mapValue.kind) {
            case "scalar":
              a4 = d.ScalarType[this.mapValue.scalar].toLowerCase();
              break;
            case "enum":
              a4 = this.mapValue.enum.typeName;
              break;
            case "message":
              a4 = this.mapValue.message.typeName;
          }
          o3 = `map<${e4}, ${a4}>`;
          break;
        }
      }
      s3.push(`${o3} ${this.name} = ${this.number}`);
      const r3 = [];
      void 0 !== (null === (e3 = this.proto.options) || void 0 === e3 ? void 0 : e3.packed) && r3.push(`packed = ${this.proto.options.packed.toString()}`);
      let i3 = this.proto.defaultValue;
      return void 0 !== i3 && (this.proto.type != t2.FieldDescriptorProto_Type.BYTES && this.proto.type != t2.FieldDescriptorProto_Type.STRING || (i3 = '"' + i3.replace('"', '\\"') + '"'), r3.push(`default = ${i3}`)), void 0 !== this.jsonName && r3.push(`json_name = "${this.jsonName}"`), void 0 !== (null === (a3 = this.proto.options) || void 0 === a3 ? void 0 : a3.jstype) && r3.push(`jstype = ${t2.FieldOptions_JSType[this.proto.options.jstype]}`), true === (null === (n3 = this.proto.options) || void 0 === n3 ? void 0 : n3.deprecated) && r3.push("deprecated = true"), r3.length > 0 && s3.push("[" + r3.join(", ") + "]"), s3.join(" ");
    }
    function Q() {
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
    })(w || (w = {}));
  }
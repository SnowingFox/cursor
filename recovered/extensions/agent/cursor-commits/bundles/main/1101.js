// @recovered-by cursor-re
// artifact: app/extensions/cursor-commits/dist/main.js sha256:093f8518d2bba92ce25a152b40a9e7490ef35d5b45f1477f49078295148101b9
// module: 1101 range:121745..146722
// basis: webpack-id confidence: C
// method: split
// run: ext-agent 2026-11-05T10:20:08.356Z
1101: (e2, n2, a2) => {
    "use strict";
    Object.defineProperty(n2, "__esModule", { value: true }), n2.createDescriptorSet = void 0;
    const t2 = a2(7374), s2 = a2(3098), o2 = a2(2422), r2 = a2(5822), i2 = a2(1663), A = a2(9301), l = a2(3408), c = a2(2706);
    function m(e3, n3, a3) {
      var t3, o3;
      (0, s2.assert)(e3.name, "invalid FileDescriptorProto: missing name");
      const r3 = Object.assign(Object.assign({ kind: "file", proto: e3, deprecated: null !== (o3 = null === (t3 = e3.options) || void 0 === t3 ? void 0 : t3.deprecated) && void 0 !== o3 && o3 }, h(e3.syntax, e3.edition)), { name: e3.name.replace(/\.proto/, ""), dependencies: _(e3, n3), enums: [], messages: [], extensions: [], services: [], toString() {
        return `file ${this.proto.name}`;
      }, getSyntaxComments() {
        return v(this.proto.sourceCodeInfo, [S.FileDescriptorProto_Syntax]);
      }, getPackageComments() {
        return v(this.proto.sourceCodeInfo, [S.FileDescriptorProto_Package]);
      }, getFeatures() {
        var n4;
        return a3(null === (n4 = e3.options) || void 0 === n4 ? void 0 : n4.features);
      } });
      n3.mapEntries.clear();
      for (const t4 of e3.enumType) u(t4, r3, void 0, n3, a3);
      for (const t4 of e3.messageType) E(t4, r3, void 0, n3, a3);
      for (const t4 of e3.service) p(t4, r3, n3, a3);
      d(r3, n3, a3);
      for (const e4 of n3.mapEntries.values()) g(e4, n3, a3);
      for (const e4 of r3.messages) g(e4, n3, a3), d(e4, n3, a3);
      n3.mapEntries.clear(), n3.files.push(r3);
    }
    function d(e3, n3, a3) {
      switch (e3.kind) {
        case "file":
          for (const t3 of e3.proto.extension) {
            const s3 = I(t3, e3, void 0, n3, a3);
            e3.extensions.push(s3), n3.extensions.set(s3.typeName, s3);
          }
          break;
        case "message":
          for (const t3 of e3.proto.extension) {
            const s3 = I(t3, e3.file, e3, n3, a3);
            e3.nestedExtensions.push(s3), n3.extensions.set(s3.typeName, s3);
          }
          for (const t3 of e3.nestedMessages) d(t3, n3, a3);
      }
    }
    function g(e3, n3, a3) {
      const t3 = e3.proto.oneofDecl.map((n4) => (function(e4, n5, a4) {
        return (0, s2.assert)(e4.name, "invalid OneofDescriptorProto: missing name"), { kind: "oneof", proto: e4, deprecated: false, parent: n5, fields: [], name: e4.name, toString() {
          return `oneof ${n5.typeName}.${this.name}`;
        }, getComments() {
          const e5 = [...this.parent.getComments().sourcePath, S.DescriptorProto_OneofDecl, this.parent.proto.oneofDecl.indexOf(this.proto)];
          return v(n5.file.proto.sourceCodeInfo, e5);
        }, getFeatures() {
          var t4;
          return a4(n5.getFeatures(), null === (t4 = e4.options) || void 0 === t4 ? void 0 : t4.features);
        } };
      })(n4, e3, a3)), o3 = /* @__PURE__ */ new Set();
      for (const s3 of e3.proto.field) {
        const r3 = B(s3, t3), i3 = k(s3, e3.file, e3, r3, n3, a3);
        e3.fields.push(i3), void 0 === r3 ? e3.members.push(i3) : (r3.fields.push(i3), o3.has(r3) || (o3.add(r3), e3.members.push(r3)));
      }
      for (const n4 of t3.filter((e4) => o3.has(e4))) e3.oneofs.push(n4);
      for (const t4 of e3.nestedMessages) g(t4, n3, a3);
    }
    function u(e3, n3, a3, t3, o3) {
      var i3, A2, l2;
      (0, s2.assert)(e3.name, "invalid EnumDescriptorProto: missing name");
      const c2 = { kind: "enum", proto: e3, deprecated: null !== (A2 = null === (i3 = e3.options) || void 0 === i3 ? void 0 : i3.deprecated) && void 0 !== A2 && A2, file: n3, parent: a3, name: e3.name, typeName: C(e3, a3, n3), values: [], sharedPrefix: (0, r2.findEnumSharedPrefix)(e3.name, e3.value.map((e4) => {
        var n4;
        return null !== (n4 = e4.name) && void 0 !== n4 ? n4 : "";
      })), toString() {
        return `enum ${this.typeName}`;
      }, getComments() {
        const e4 = this.parent ? [...this.parent.getComments().sourcePath, S.DescriptorProto_EnumType, this.parent.proto.enumType.indexOf(this.proto)] : [S.FileDescriptorProto_EnumType, this.file.proto.enumType.indexOf(this.proto)];
        return v(n3.proto.sourceCodeInfo, e4);
      }, getFeatures() {
        var t4, s3;
        return o3(null !== (t4 = null == a3 ? void 0 : a3.getFeatures()) && void 0 !== t4 ? t4 : n3.getFeatures(), null === (s3 = e3.options) || void 0 === s3 ? void 0 : s3.features);
      } };
      t3.enums.set(c2.typeName, c2), e3.value.forEach((e4) => {
        var a4, t4;
        (0, s2.assert)(e4.name, "invalid EnumValueDescriptorProto: missing name"), (0, s2.assert)(void 0 !== e4.number, "invalid EnumValueDescriptorProto: missing number"), c2.values.push({ kind: "enum_value", proto: e4, deprecated: null !== (t4 = null === (a4 = e4.options) || void 0 === a4 ? void 0 : a4.deprecated) && void 0 !== t4 && t4, parent: c2, name: e4.name, number: e4.number, toString() {
          return `enum value ${c2.typeName}.${this.name}`;
        }, declarationString() {
          var e5;
          let n4 = `${this.name} = ${this.number}`;
          return true === (null === (e5 = this.proto.options) || void 0 === e5 ? void 0 : e5.deprecated) && (n4 += " [deprecated = true]"), n4;
        }, getComments() {
          const e5 = [...this.parent.getComments().sourcePath, S.EnumDescriptorProto_Value, this.parent.proto.value.indexOf(this.proto)];
          return v(n3.proto.sourceCodeInfo, e5);
        }, getFeatures() {
          var n4;
          return o3(c2.getFeatures(), null === (n4 = e4.options) || void 0 === n4 ? void 0 : n4.features);
        } });
      }), (null !== (l2 = null == a3 ? void 0 : a3.nestedEnums) && void 0 !== l2 ? l2 : n3.enums).push(c2);
    }
    function E(e3, n3, a3, t3, o3) {
      var r3, i3, A2, l2;
      (0, s2.assert)(e3.name, "invalid DescriptorProto: missing name");
      const c2 = { kind: "message", proto: e3, deprecated: null !== (i3 = null === (r3 = e3.options) || void 0 === r3 ? void 0 : r3.deprecated) && void 0 !== i3 && i3, file: n3, parent: a3, name: e3.name, typeName: C(e3, a3, n3), fields: [], oneofs: [], members: [], nestedEnums: [], nestedMessages: [], nestedExtensions: [], toString() {
        return `message ${this.typeName}`;
      }, getComments() {
        const e4 = this.parent ? [...this.parent.getComments().sourcePath, S.DescriptorProto_NestedType, this.parent.proto.nestedType.indexOf(this.proto)] : [S.FileDescriptorProto_MessageType, this.file.proto.messageType.indexOf(this.proto)];
        return v(n3.proto.sourceCodeInfo, e4);
      }, getFeatures() {
        var t4, s3;
        return o3(null !== (t4 = null == a3 ? void 0 : a3.getFeatures()) && void 0 !== t4 ? t4 : n3.getFeatures(), null === (s3 = e3.options) || void 0 === s3 ? void 0 : s3.features);
      } };
      true === (null === (A2 = e3.options) || void 0 === A2 ? void 0 : A2.mapEntry) ? t3.mapEntries.set(c2.typeName, c2) : ((null !== (l2 = null == a3 ? void 0 : a3.nestedMessages) && void 0 !== l2 ? l2 : n3.messages).push(c2), t3.messages.set(c2.typeName, c2));
      for (const a4 of e3.enumType) u(a4, n3, c2, t3, o3);
      for (const a4 of e3.nestedType) E(a4, n3, c2, t3, o3);
    }
    function p(e3, n3, a3, t3) {
      var o3, r3;
      (0, s2.assert)(e3.name, "invalid ServiceDescriptorProto: missing name");
      const i3 = { kind: "service", proto: e3, deprecated: null !== (r3 = null === (o3 = e3.options) || void 0 === o3 ? void 0 : o3.deprecated) && void 0 !== r3 && r3, file: n3, name: e3.name, typeName: C(e3, void 0, n3), methods: [], toString() {
        return `service ${this.typeName}`;
      }, getComments() {
        const e4 = [S.FileDescriptorProto_Service, this.file.proto.service.indexOf(this.proto)];
        return v(n3.proto.sourceCodeInfo, e4);
      }, getFeatures() {
        var a4;
        return t3(n3.getFeatures(), null === (a4 = e3.options) || void 0 === a4 ? void 0 : a4.features);
      } };
      n3.services.push(i3), a3.services.set(i3.typeName, i3);
      for (const n4 of e3.method) i3.methods.push(T(n4, i3, a3, t3));
    }
    function T(e3, n3, a3, r3) {
      var i3, A2, l2;
      let c2, m2;
      switch ((0, s2.assert)(e3.name, "invalid MethodDescriptorProto: missing name"), (0, s2.assert)(e3.inputType, "invalid MethodDescriptorProto: missing input_type"), (0, s2.assert)(e3.outputType, "invalid MethodDescriptorProto: missing output_type"), c2 = true === e3.clientStreaming && true === e3.serverStreaming ? o2.MethodKind.BiDiStreaming : true === e3.clientStreaming ? o2.MethodKind.ClientStreaming : true === e3.serverStreaming ? o2.MethodKind.ServerStreaming : o2.MethodKind.Unary, null === (i3 = e3.options) || void 0 === i3 ? void 0 : i3.idempotencyLevel) {
        case t2.MethodOptions_IdempotencyLevel.IDEMPOTENT:
          m2 = o2.MethodIdempotency.Idempotent;
          break;
        case t2.MethodOptions_IdempotencyLevel.NO_SIDE_EFFECTS:
          m2 = o2.MethodIdempotency.NoSideEffects;
          break;
        case t2.MethodOptions_IdempotencyLevel.IDEMPOTENCY_UNKNOWN:
        case void 0:
          m2 = void 0;
      }
      const d2 = a3.messages.get(f(e3.inputType)), g2 = a3.messages.get(f(e3.outputType));
      (0, s2.assert)(d2, `invalid MethodDescriptorProto: input_type ${e3.inputType} not found`), (0, s2.assert)(g2, `invalid MethodDescriptorProto: output_type ${e3.inputType} not found`);
      const u2 = e3.name;
      return { kind: "rpc", proto: e3, deprecated: null !== (l2 = null === (A2 = e3.options) || void 0 === A2 ? void 0 : A2.deprecated) && void 0 !== l2 && l2, parent: n3, name: u2, methodKind: c2, input: d2, output: g2, idempotency: m2, toString: () => `rpc ${n3.typeName}.${u2}`, getComments() {
        const e4 = [...this.parent.getComments().sourcePath, S.ServiceDescriptorProto_Method, this.parent.proto.method.indexOf(this.proto)];
        return v(n3.file.proto.sourceCodeInfo, e4);
      }, getFeatures() {
        var a4;
        return r3(n3.getFeatures(), null === (a4 = e3.options) || void 0 === a4 ? void 0 : a4.features);
      } };
    }
    function k(e3, n3, a3, o3, i3, A2) {
      var c2, m2, d2;
      (0, s2.assert)(e3.name, "invalid FieldDescriptorProto: missing name"), (0, s2.assert)(e3.number, "invalid FieldDescriptorProto: missing number"), (0, s2.assert)(e3.type, "invalid FieldDescriptorProto: missing type");
      const g2 = { proto: e3, deprecated: null !== (m2 = null === (c2 = e3.options) || void 0 === c2 ? void 0 : c2.deprecated) && void 0 !== m2 && m2, name: e3.name, number: e3.number, parent: a3, oneof: o3, optional: Q(e3, n3.syntax), packedByDefault: y(e3, A2), packed: R(n3, a3, e3, A2), jsonName: e3.jsonName === (0, r2.fieldJsonName)(e3.name) ? void 0 : e3.jsonName, scalar: void 0, longType: void 0, message: void 0, enum: void 0, mapKey: void 0, mapValue: void 0, declarationString: D, toString() {
        return `field ${this.parent.typeName}.${this.name}`;
      }, getComments() {
        const e4 = [...this.parent.getComments().sourcePath, S.DescriptorProto_Field, this.parent.proto.field.indexOf(this.proto)];
        return v(n3.proto.sourceCodeInfo, e4);
      }, getFeatures() {
        var n4;
        return A2(a3.getFeatures(), null === (n4 = e3.options) || void 0 === n4 ? void 0 : n4.features);
      } }, u2 = e3.label === t2.FieldDescriptorProto_Label.REPEATED;
      switch (e3.type) {
        case t2.FieldDescriptorProto_Type.MESSAGE:
        case t2.FieldDescriptorProto_Type.GROUP: {
          (0, s2.assert)(e3.typeName, "invalid FieldDescriptorProto: missing type_name");
          const n4 = i3.mapEntries.get(f(e3.typeName));
          if (void 0 !== n4) return (0, s2.assert)(u2, "invalid FieldDescriptorProto: expected map entry to be repeated"), Object.assign(Object.assign(Object.assign({}, g2), { kind: "field", fieldKind: "map", repeated: false }), (function(e4) {
            var n5, a5;
            (0, s2.assert)(null === (n5 = e4.proto.options) || void 0 === n5 ? void 0 : n5.mapEntry, `invalid DescriptorProto: expected ${e4.toString()} to be a map entry`), (0, s2.assert)(2 === e4.fields.length, `invalid DescriptorProto: map entry ${e4.toString()} has ${e4.fields.length} fields`);
            const t3 = e4.fields.find((e5) => 1 === e5.proto.number);
            (0, s2.assert)(t3, `invalid DescriptorProto: map entry ${e4.toString()} is missing key field`);
            const o4 = t3.scalar;
            (0, s2.assert)(void 0 !== o4 && o4 !== l.ScalarType.BYTES && o4 !== l.ScalarType.FLOAT && o4 !== l.ScalarType.DOUBLE, `invalid DescriptorProto: map entry ${e4.toString()} has unexpected key type ${null !== (a5 = t3.proto.type) && void 0 !== a5 ? a5 : -1}`);
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
          })(n4));
          const a4 = i3.messages.get(f(e3.typeName));
          return (0, s2.assert)(void 0 !== a4, `invalid FieldDescriptorProto: type_name ${e3.typeName} not found`), Object.assign(Object.assign({}, g2), { kind: "field", fieldKind: "message", repeated: u2, message: a4 });
        }
        case t2.FieldDescriptorProto_Type.ENUM: {
          (0, s2.assert)(e3.typeName, "invalid FieldDescriptorProto: missing type_name");
          const n4 = i3.enums.get(f(e3.typeName));
          return (0, s2.assert)(void 0 !== n4, `invalid FieldDescriptorProto: type_name ${e3.typeName} not found`), Object.assign(Object.assign({}, g2), { kind: "field", fieldKind: "enum", getDefaultValue: w, repeated: u2, enum: n4 });
        }
        default: {
          const n4 = N[e3.type];
          return (0, s2.assert)(n4, `invalid FieldDescriptorProto: unknown type ${e3.type}`), Object.assign(Object.assign({}, g2), { kind: "field", fieldKind: "scalar", getDefaultValue: w, repeated: u2, scalar: n4, longType: (null === (d2 = e3.options) || void 0 === d2 ? void 0 : d2.jstype) == t2.FieldOptions_JSType.JS_STRING ? l.LongType.STRING : l.LongType.BIGINT });
        }
      }
    }
    function I(e3, n3, a3, t3, o3) {
      (0, s2.assert)(e3.extendee, "invalid FieldDescriptorProto: missing extendee");
      const r3 = k(e3, n3, null, void 0, t3, o3), i3 = t3.messages.get(f(e3.extendee));
      return (0, s2.assert)(i3, `invalid FieldDescriptorProto: extendee ${e3.extendee} not found`), Object.assign(Object.assign({}, r3), { kind: "extension", typeName: C(e3, a3, n3), parent: a3, file: n3, extendee: i3, toString() {
        return `extension ${this.typeName}`;
      }, getComments() {
        const a4 = this.parent ? [...this.parent.getComments().sourcePath, S.DescriptorProto_Extension, this.parent.proto.extension.indexOf(e3)] : [S.FileDescriptorProto_Extension, this.file.proto.extension.indexOf(e3)];
        return v(n3.proto.sourceCodeInfo, a4);
      }, getFeatures() {
        var t4;
        return o3((null != a3 ? a3 : n3).getFeatures(), null === (t4 = e3.options) || void 0 === t4 ? void 0 : t4.features);
      } });
    }
    function h(e3, n3) {
      let a3, s3;
      switch (e3) {
        case void 0:
        case "proto2":
          s3 = "proto2", a3 = t2.Edition.EDITION_PROTO2;
          break;
        case "proto3":
          s3 = "proto3", a3 = t2.Edition.EDITION_PROTO3;
          break;
        case "editions":
          switch (s3 = "editions", n3) {
            case void 0:
            case t2.Edition.EDITION_1_TEST_ONLY:
            case t2.Edition.EDITION_2_TEST_ONLY:
            case t2.Edition.EDITION_99997_TEST_ONLY:
            case t2.Edition.EDITION_99998_TEST_ONLY:
            case t2.Edition.EDITION_99999_TEST_ONLY:
            case t2.Edition.EDITION_UNKNOWN:
              a3 = t2.Edition.EDITION_UNKNOWN;
              break;
            default:
              a3 = n3;
          }
          break;
        default:
          throw new Error(`invalid FileDescriptorProto: unsupported syntax: ${e3}`);
      }
      if ("editions" === e3 && n3 === t2.Edition.EDITION_UNKNOWN) throw new Error(`invalid FileDescriptorProto: syntax ${e3} cannot have edition ${String(n3)}`);
      return { syntax: s3, edition: a3 };
    }
    function _(e3, n3) {
      return e3.dependency.map((e4) => {
        const a3 = n3.files.find((n4) => n4.proto.name === e4);
        return (0, s2.assert)(a3), a3;
      });
    }
    function C(e3, n3, a3) {
      let t3;
      return (0, s2.assert)(e3.name, `invalid ${e3.getType().typeName}: missing name`), t3 = n3 ? `${n3.typeName}.${e3.name}` : void 0 !== a3.proto.package ? `${a3.proto.package}.${e3.name}` : `${e3.name}`, t3;
    }
    function f(e3) {
      return e3.startsWith(".") ? e3.substring(1) : e3;
    }
    function B(e3, n3) {
      var a3;
      const t3 = e3.oneofIndex;
      if (void 0 === t3) return;
      let o3;
      return true !== e3.proto3Optional && (o3 = n3[t3], (0, s2.assert)(o3, `invalid FieldDescriptorProto: oneof #${t3} for field #${null !== (a3 = e3.number) && void 0 !== a3 ? a3 : -1} not found`)), o3;
    }
    function Q(e3, n3) {
      switch (n3) {
        case "proto2":
          return void 0 === e3.oneofIndex && e3.label === t2.FieldDescriptorProto_Label.OPTIONAL;
        case "proto3":
          return true === e3.proto3Optional;
        case "editions":
          return false;
      }
    }
    function y(e3, n3) {
      const { repeatedFieldEncoding: a3 } = n3();
      if (a3 != t2.FeatureSet_RepeatedFieldEncoding.PACKED) return false;
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
    function R(e3, n3, a3, s3) {
      var o3, r3, i3, A2, l2, c2;
      switch (a3.type) {
        case t2.FieldDescriptorProto_Type.STRING:
        case t2.FieldDescriptorProto_Type.BYTES:
        case t2.FieldDescriptorProto_Type.GROUP:
        case t2.FieldDescriptorProto_Type.MESSAGE:
          return false;
        default:
          switch (e3.edition) {
            case t2.Edition.EDITION_PROTO2:
              return null !== (r3 = null === (o3 = a3.options) || void 0 === o3 ? void 0 : o3.packed) && void 0 !== r3 && r3;
            case t2.Edition.EDITION_PROTO3:
              return null === (A2 = null === (i3 = a3.options) || void 0 === i3 ? void 0 : i3.packed) || void 0 === A2 || A2;
            default: {
              const { repeatedFieldEncoding: o4 } = s3(null !== (l2 = null == n3 ? void 0 : n3.getFeatures()) && void 0 !== l2 ? l2 : e3.getFeatures(), null === (c2 = a3.options) || void 0 === c2 ? void 0 : c2.features);
              return o4 == t2.FeatureSet_RepeatedFieldEncoding.PACKED;
            }
          }
      }
    }
    n2.createDescriptorSet = function(e3, n3) {
      var a3;
      const s3 = { files: [], enums: /* @__PURE__ */ new Map(), messages: /* @__PURE__ */ new Map(), services: /* @__PURE__ */ new Map(), extensions: /* @__PURE__ */ new Map(), mapEntries: /* @__PURE__ */ new Map() }, o3 = (0, c.isMessage)(e3, t2.FileDescriptorSet) ? e3.file : e3 instanceof Uint8Array ? t2.FileDescriptorSet.fromBinary(e3).file : e3, r3 = /* @__PURE__ */ new Map();
      for (const e4 of o3) {
        const t3 = null !== (a3 = e4.edition) && void 0 !== a3 ? a3 : h(e4.syntax, e4.edition).edition;
        let o4 = r3.get(t3);
        void 0 === o4 && (o4 = (0, A.createFeatureResolver)(t3, null == n3 ? void 0 : n3.featureSetDefaults, null == n3 ? void 0 : n3.serializationOptions), r3.set(t3, o4)), m(e4, s3, o4);
      }
      return s3;
    };
    const N = { [t2.FieldDescriptorProto_Type.DOUBLE]: l.ScalarType.DOUBLE, [t2.FieldDescriptorProto_Type.FLOAT]: l.ScalarType.FLOAT, [t2.FieldDescriptorProto_Type.INT64]: l.ScalarType.INT64, [t2.FieldDescriptorProto_Type.UINT64]: l.ScalarType.UINT64, [t2.FieldDescriptorProto_Type.INT32]: l.ScalarType.INT32, [t2.FieldDescriptorProto_Type.FIXED64]: l.ScalarType.FIXED64, [t2.FieldDescriptorProto_Type.FIXED32]: l.ScalarType.FIXED32, [t2.FieldDescriptorProto_Type.BOOL]: l.ScalarType.BOOL, [t2.FieldDescriptorProto_Type.STRING]: l.ScalarType.STRING, [t2.FieldDescriptorProto_Type.GROUP]: void 0, [t2.FieldDescriptorProto_Type.MESSAGE]: void 0, [t2.FieldDescriptorProto_Type.BYTES]: l.ScalarType.BYTES, [t2.FieldDescriptorProto_Type.UINT32]: l.ScalarType.UINT32, [t2.FieldDescriptorProto_Type.ENUM]: void 0, [t2.FieldDescriptorProto_Type.SFIXED32]: l.ScalarType.SFIXED32, [t2.FieldDescriptorProto_Type.SFIXED64]: l.ScalarType.SFIXED64, [t2.FieldDescriptorProto_Type.SINT32]: l.ScalarType.SINT32, [t2.FieldDescriptorProto_Type.SINT64]: l.ScalarType.SINT64 };
    function v(e3, n3) {
      if (!e3) return { leadingDetached: [], sourcePath: n3 };
      for (const a3 of e3.location) if (a3.path.length === n3.length && !a3.path.some((e4, a4) => n3[a4] !== e4)) return { leadingDetached: a3.leadingDetachedComments, leading: a3.leadingComments, trailing: a3.trailingComments, sourcePath: n3 };
      return { leadingDetached: [], sourcePath: n3 };
    }
    var S;
    function D() {
      var e3, n3, a3;
      const s3 = [];
      this.repeated && s3.push("repeated"), this.optional && s3.push("optional");
      let o3;
      switch ("proto2" == ("extension" === this.kind ? this.file : this.parent.file).syntax && this.proto.label === t2.FieldDescriptorProto_Label.REQUIRED && s3.push("required"), this.fieldKind) {
        case "scalar":
          o3 = l.ScalarType[this.scalar].toLowerCase();
          break;
        case "enum":
          o3 = this.enum.typeName;
          break;
        case "message":
          o3 = this.message.typeName;
          break;
        case "map": {
          const e4 = l.ScalarType[this.mapKey].toLowerCase();
          let n4;
          switch (this.mapValue.kind) {
            case "scalar":
              n4 = l.ScalarType[this.mapValue.scalar].toLowerCase();
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
      const r3 = [];
      void 0 !== (null === (e3 = this.proto.options) || void 0 === e3 ? void 0 : e3.packed) && r3.push(`packed = ${this.proto.options.packed.toString()}`);
      let i3 = this.proto.defaultValue;
      return void 0 !== i3 && (this.proto.type != t2.FieldDescriptorProto_Type.BYTES && this.proto.type != t2.FieldDescriptorProto_Type.STRING || (i3 = '"' + i3.replace('"', '\\"') + '"'), r3.push(`default = ${i3}`)), void 0 !== this.jsonName && r3.push(`json_name = "${this.jsonName}"`), void 0 !== (null === (n3 = this.proto.options) || void 0 === n3 ? void 0 : n3.jstype) && r3.push(`jstype = ${t2.FieldOptions_JSType[this.proto.options.jstype]}`), true === (null === (a3 = this.proto.options) || void 0 === a3 ? void 0 : a3.deprecated) && r3.push("deprecated = true"), r3.length > 0 && s3.push("[" + r3.join(", ") + "]"), s3.join(" ");
    }
    function w() {
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
    })(S || (S = {}));
  }
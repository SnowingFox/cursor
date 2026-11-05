// @recovered-by cursor-re
// artifact: app/extensions/cursor-deeplink/dist/main.js sha256:2b0091d260814e411af8319789fee5fe8b4b75d7c27c85b905f80c4d53d995f3
// module: 1101 range:127620..152591
// basis: webpack-id confidence: C
// method: split
// run: ext-agent 2026-11-05T10:20:08.356Z
1101: (e2, t2, A2) => {
    "use strict";
    Object.defineProperty(t2, "__esModule", { value: true }), t2.createDescriptorSet = void 0;
    const n2 = A2(7374), r2 = A2(3098), o2 = A2(2422), s = A2(5822), i = A2(1663), a = A2(9301), c = A2(3408), l = A2(2706);
    function u(e3, t3, A3) {
      var n3, o3;
      (0, r2.assert)(e3.name, "invalid FileDescriptorProto: missing name");
      const s2 = Object.assign(Object.assign({ kind: "file", proto: e3, deprecated: null !== (o3 = null === (n3 = e3.options) || void 0 === n3 ? void 0 : n3.deprecated) && void 0 !== o3 && o3 }, C(e3.syntax, e3.edition)), { name: e3.name.replace(/\.proto/, ""), dependencies: p(e3, t3), enums: [], messages: [], extensions: [], services: [], toString() {
        return `file ${this.proto.name}`;
      }, getSyntaxComments() {
        return D(this.proto.sourceCodeInfo, [S.FileDescriptorProto_Syntax]);
      }, getPackageComments() {
        return D(this.proto.sourceCodeInfo, [S.FileDescriptorProto_Package]);
      }, getFeatures() {
        var t4;
        return A3(null === (t4 = e3.options) || void 0 === t4 ? void 0 : t4.features);
      } });
      t3.mapEntries.clear();
      for (const n4 of e3.enumType) h(n4, s2, void 0, t3, A3);
      for (const n4 of e3.messageType) d(n4, s2, void 0, t3, A3);
      for (const n4 of e3.service) I(n4, s2, t3, A3);
      g(s2, t3, A3);
      for (const e4 of t3.mapEntries.values()) E(e4, t3, A3);
      for (const e4 of s2.messages) E(e4, t3, A3), g(e4, t3, A3);
      t3.mapEntries.clear(), t3.files.push(s2);
    }
    function g(e3, t3, A3) {
      switch (e3.kind) {
        case "file":
          for (const n3 of e3.proto.extension) {
            const r3 = f(n3, e3, void 0, t3, A3);
            e3.extensions.push(r3), t3.extensions.set(r3.typeName, r3);
          }
          break;
        case "message":
          for (const n3 of e3.proto.extension) {
            const r3 = f(n3, e3.file, e3, t3, A3);
            e3.nestedExtensions.push(r3), t3.extensions.set(r3.typeName, r3);
          }
          for (const n3 of e3.nestedMessages) g(n3, t3, A3);
      }
    }
    function E(e3, t3, A3) {
      const n3 = e3.proto.oneofDecl.map((t4) => (function(e4, t5, A4) {
        return (0, r2.assert)(e4.name, "invalid OneofDescriptorProto: missing name"), { kind: "oneof", proto: e4, deprecated: false, parent: t5, fields: [], name: e4.name, toString() {
          return `oneof ${t5.typeName}.${this.name}`;
        }, getComments() {
          const e5 = [...this.parent.getComments().sourcePath, S.DescriptorProto_OneofDecl, this.parent.proto.oneofDecl.indexOf(this.proto)];
          return D(t5.file.proto.sourceCodeInfo, e5);
        }, getFeatures() {
          var n4;
          return A4(t5.getFeatures(), null === (n4 = e4.options) || void 0 === n4 ? void 0 : n4.features);
        } };
      })(t4, e3, A3)), o3 = /* @__PURE__ */ new Set();
      for (const r3 of e3.proto.field) {
        const s2 = w(r3, n3), i2 = Q(r3, e3.file, e3, s2, t3, A3);
        e3.fields.push(i2), void 0 === s2 ? e3.members.push(i2) : (s2.fields.push(i2), o3.has(s2) || (o3.add(s2), e3.members.push(s2)));
      }
      for (const t4 of n3.filter((e4) => o3.has(e4))) e3.oneofs.push(t4);
      for (const n4 of e3.nestedMessages) E(n4, t3, A3);
    }
    function h(e3, t3, A3, n3, o3) {
      var i2, a2, c2;
      (0, r2.assert)(e3.name, "invalid EnumDescriptorProto: missing name");
      const l2 = { kind: "enum", proto: e3, deprecated: null !== (a2 = null === (i2 = e3.options) || void 0 === i2 ? void 0 : i2.deprecated) && void 0 !== a2 && a2, file: t3, parent: A3, name: e3.name, typeName: m(e3, A3, t3), values: [], sharedPrefix: (0, s.findEnumSharedPrefix)(e3.name, e3.value.map((e4) => {
        var t4;
        return null !== (t4 = e4.name) && void 0 !== t4 ? t4 : "";
      })), toString() {
        return `enum ${this.typeName}`;
      }, getComments() {
        const e4 = this.parent ? [...this.parent.getComments().sourcePath, S.DescriptorProto_EnumType, this.parent.proto.enumType.indexOf(this.proto)] : [S.FileDescriptorProto_EnumType, this.file.proto.enumType.indexOf(this.proto)];
        return D(t3.proto.sourceCodeInfo, e4);
      }, getFeatures() {
        var n4, r3;
        return o3(null !== (n4 = null == A3 ? void 0 : A3.getFeatures()) && void 0 !== n4 ? n4 : t3.getFeatures(), null === (r3 = e3.options) || void 0 === r3 ? void 0 : r3.features);
      } };
      n3.enums.set(l2.typeName, l2), e3.value.forEach((e4) => {
        var A4, n4;
        (0, r2.assert)(e4.name, "invalid EnumValueDescriptorProto: missing name"), (0, r2.assert)(void 0 !== e4.number, "invalid EnumValueDescriptorProto: missing number"), l2.values.push({ kind: "enum_value", proto: e4, deprecated: null !== (n4 = null === (A4 = e4.options) || void 0 === A4 ? void 0 : A4.deprecated) && void 0 !== n4 && n4, parent: l2, name: e4.name, number: e4.number, toString() {
          return `enum value ${l2.typeName}.${this.name}`;
        }, declarationString() {
          var e5;
          let t4 = `${this.name} = ${this.number}`;
          return true === (null === (e5 = this.proto.options) || void 0 === e5 ? void 0 : e5.deprecated) && (t4 += " [deprecated = true]"), t4;
        }, getComments() {
          const e5 = [...this.parent.getComments().sourcePath, S.EnumDescriptorProto_Value, this.parent.proto.value.indexOf(this.proto)];
          return D(t3.proto.sourceCodeInfo, e5);
        }, getFeatures() {
          var t4;
          return o3(l2.getFeatures(), null === (t4 = e4.options) || void 0 === t4 ? void 0 : t4.features);
        } });
      }), (null !== (c2 = null == A3 ? void 0 : A3.nestedEnums) && void 0 !== c2 ? c2 : t3.enums).push(l2);
    }
    function d(e3, t3, A3, n3, o3) {
      var s2, i2, a2, c2;
      (0, r2.assert)(e3.name, "invalid DescriptorProto: missing name");
      const l2 = { kind: "message", proto: e3, deprecated: null !== (i2 = null === (s2 = e3.options) || void 0 === s2 ? void 0 : s2.deprecated) && void 0 !== i2 && i2, file: t3, parent: A3, name: e3.name, typeName: m(e3, A3, t3), fields: [], oneofs: [], members: [], nestedEnums: [], nestedMessages: [], nestedExtensions: [], toString() {
        return `message ${this.typeName}`;
      }, getComments() {
        const e4 = this.parent ? [...this.parent.getComments().sourcePath, S.DescriptorProto_NestedType, this.parent.proto.nestedType.indexOf(this.proto)] : [S.FileDescriptorProto_MessageType, this.file.proto.messageType.indexOf(this.proto)];
        return D(t3.proto.sourceCodeInfo, e4);
      }, getFeatures() {
        var n4, r3;
        return o3(null !== (n4 = null == A3 ? void 0 : A3.getFeatures()) && void 0 !== n4 ? n4 : t3.getFeatures(), null === (r3 = e3.options) || void 0 === r3 ? void 0 : r3.features);
      } };
      true === (null === (a2 = e3.options) || void 0 === a2 ? void 0 : a2.mapEntry) ? n3.mapEntries.set(l2.typeName, l2) : ((null !== (c2 = null == A3 ? void 0 : A3.nestedMessages) && void 0 !== c2 ? c2 : t3.messages).push(l2), n3.messages.set(l2.typeName, l2));
      for (const A4 of e3.enumType) h(A4, t3, l2, n3, o3);
      for (const A4 of e3.nestedType) d(A4, t3, l2, n3, o3);
    }
    function I(e3, t3, A3, n3) {
      var o3, s2;
      (0, r2.assert)(e3.name, "invalid ServiceDescriptorProto: missing name");
      const i2 = { kind: "service", proto: e3, deprecated: null !== (s2 = null === (o3 = e3.options) || void 0 === o3 ? void 0 : o3.deprecated) && void 0 !== s2 && s2, file: t3, name: e3.name, typeName: m(e3, void 0, t3), methods: [], toString() {
        return `service ${this.typeName}`;
      }, getComments() {
        const e4 = [S.FileDescriptorProto_Service, this.file.proto.service.indexOf(this.proto)];
        return D(t3.proto.sourceCodeInfo, e4);
      }, getFeatures() {
        var A4;
        return n3(t3.getFeatures(), null === (A4 = e3.options) || void 0 === A4 ? void 0 : A4.features);
      } };
      t3.services.push(i2), A3.services.set(i2.typeName, i2);
      for (const t4 of e3.method) i2.methods.push(B(t4, i2, A3, n3));
    }
    function B(e3, t3, A3, s2) {
      var i2, a2, c2;
      let l2, u2;
      switch ((0, r2.assert)(e3.name, "invalid MethodDescriptorProto: missing name"), (0, r2.assert)(e3.inputType, "invalid MethodDescriptorProto: missing input_type"), (0, r2.assert)(e3.outputType, "invalid MethodDescriptorProto: missing output_type"), l2 = true === e3.clientStreaming && true === e3.serverStreaming ? o2.MethodKind.BiDiStreaming : true === e3.clientStreaming ? o2.MethodKind.ClientStreaming : true === e3.serverStreaming ? o2.MethodKind.ServerStreaming : o2.MethodKind.Unary, null === (i2 = e3.options) || void 0 === i2 ? void 0 : i2.idempotencyLevel) {
        case n2.MethodOptions_IdempotencyLevel.IDEMPOTENT:
          u2 = o2.MethodIdempotency.Idempotent;
          break;
        case n2.MethodOptions_IdempotencyLevel.NO_SIDE_EFFECTS:
          u2 = o2.MethodIdempotency.NoSideEffects;
          break;
        case n2.MethodOptions_IdempotencyLevel.IDEMPOTENCY_UNKNOWN:
        case void 0:
          u2 = void 0;
      }
      const g2 = A3.messages.get(y(e3.inputType)), E2 = A3.messages.get(y(e3.outputType));
      (0, r2.assert)(g2, `invalid MethodDescriptorProto: input_type ${e3.inputType} not found`), (0, r2.assert)(E2, `invalid MethodDescriptorProto: output_type ${e3.inputType} not found`);
      const h2 = e3.name;
      return { kind: "rpc", proto: e3, deprecated: null !== (c2 = null === (a2 = e3.options) || void 0 === a2 ? void 0 : a2.deprecated) && void 0 !== c2 && c2, parent: t3, name: h2, methodKind: l2, input: g2, output: E2, idempotency: u2, toString: () => `rpc ${t3.typeName}.${h2}`, getComments() {
        const e4 = [...this.parent.getComments().sourcePath, S.ServiceDescriptorProto_Method, this.parent.proto.method.indexOf(this.proto)];
        return D(t3.file.proto.sourceCodeInfo, e4);
      }, getFeatures() {
        var A4;
        return s2(t3.getFeatures(), null === (A4 = e3.options) || void 0 === A4 ? void 0 : A4.features);
      } };
    }
    function Q(e3, t3, A3, o3, i2, a2) {
      var l2, u2, g2;
      (0, r2.assert)(e3.name, "invalid FieldDescriptorProto: missing name"), (0, r2.assert)(e3.number, "invalid FieldDescriptorProto: missing number"), (0, r2.assert)(e3.type, "invalid FieldDescriptorProto: missing type");
      const E2 = { proto: e3, deprecated: null !== (u2 = null === (l2 = e3.options) || void 0 === l2 ? void 0 : l2.deprecated) && void 0 !== u2 && u2, name: e3.name, number: e3.number, parent: A3, oneof: o3, optional: k(e3, t3.syntax), packedByDefault: b(e3, a2), packed: N(t3, A3, e3, a2), jsonName: e3.jsonName === (0, s.fieldJsonName)(e3.name) ? void 0 : e3.jsonName, scalar: void 0, longType: void 0, message: void 0, enum: void 0, mapKey: void 0, mapValue: void 0, declarationString: R, toString() {
        return `field ${this.parent.typeName}.${this.name}`;
      }, getComments() {
        const e4 = [...this.parent.getComments().sourcePath, S.DescriptorProto_Field, this.parent.proto.field.indexOf(this.proto)];
        return D(t3.proto.sourceCodeInfo, e4);
      }, getFeatures() {
        var t4;
        return a2(A3.getFeatures(), null === (t4 = e3.options) || void 0 === t4 ? void 0 : t4.features);
      } }, h2 = e3.label === n2.FieldDescriptorProto_Label.REPEATED;
      switch (e3.type) {
        case n2.FieldDescriptorProto_Type.MESSAGE:
        case n2.FieldDescriptorProto_Type.GROUP: {
          (0, r2.assert)(e3.typeName, "invalid FieldDescriptorProto: missing type_name");
          const t4 = i2.mapEntries.get(y(e3.typeName));
          if (void 0 !== t4) return (0, r2.assert)(h2, "invalid FieldDescriptorProto: expected map entry to be repeated"), Object.assign(Object.assign(Object.assign({}, E2), { kind: "field", fieldKind: "map", repeated: false }), (function(e4) {
            var t5, A5;
            (0, r2.assert)(null === (t5 = e4.proto.options) || void 0 === t5 ? void 0 : t5.mapEntry, `invalid DescriptorProto: expected ${e4.toString()} to be a map entry`), (0, r2.assert)(2 === e4.fields.length, `invalid DescriptorProto: map entry ${e4.toString()} has ${e4.fields.length} fields`);
            const n3 = e4.fields.find((e5) => 1 === e5.proto.number);
            (0, r2.assert)(n3, `invalid DescriptorProto: map entry ${e4.toString()} is missing key field`);
            const o4 = n3.scalar;
            (0, r2.assert)(void 0 !== o4 && o4 !== c.ScalarType.BYTES && o4 !== c.ScalarType.FLOAT && o4 !== c.ScalarType.DOUBLE, `invalid DescriptorProto: map entry ${e4.toString()} has unexpected key type ${null !== (A5 = n3.proto.type) && void 0 !== A5 ? A5 : -1}`);
            const s2 = e4.fields.find((e5) => 2 === e5.proto.number);
            switch ((0, r2.assert)(s2, `invalid DescriptorProto: map entry ${e4.toString()} is missing value field`), s2.fieldKind) {
              case "scalar":
                return { mapKey: o4, mapValue: Object.assign(Object.assign({}, s2), { kind: "scalar" }) };
              case "message":
                return { mapKey: o4, mapValue: Object.assign(Object.assign({}, s2), { kind: "message" }) };
              case "enum":
                return { mapKey: o4, mapValue: Object.assign(Object.assign({}, s2), { kind: "enum" }) };
              default:
                throw new Error("invalid DescriptorProto: unsupported map entry value field");
            }
          })(t4));
          const A4 = i2.messages.get(y(e3.typeName));
          return (0, r2.assert)(void 0 !== A4, `invalid FieldDescriptorProto: type_name ${e3.typeName} not found`), Object.assign(Object.assign({}, E2), { kind: "field", fieldKind: "message", repeated: h2, message: A4 });
        }
        case n2.FieldDescriptorProto_Type.ENUM: {
          (0, r2.assert)(e3.typeName, "invalid FieldDescriptorProto: missing type_name");
          const t4 = i2.enums.get(y(e3.typeName));
          return (0, r2.assert)(void 0 !== t4, `invalid FieldDescriptorProto: type_name ${e3.typeName} not found`), Object.assign(Object.assign({}, E2), { kind: "field", fieldKind: "enum", getDefaultValue: F, repeated: h2, enum: t4 });
        }
        default: {
          const t4 = T[e3.type];
          return (0, r2.assert)(t4, `invalid FieldDescriptorProto: unknown type ${e3.type}`), Object.assign(Object.assign({}, E2), { kind: "field", fieldKind: "scalar", getDefaultValue: F, repeated: h2, scalar: t4, longType: (null === (g2 = e3.options) || void 0 === g2 ? void 0 : g2.jstype) == n2.FieldOptions_JSType.JS_STRING ? c.LongType.STRING : c.LongType.BIGINT });
        }
      }
    }
    function f(e3, t3, A3, n3, o3) {
      (0, r2.assert)(e3.extendee, "invalid FieldDescriptorProto: missing extendee");
      const s2 = Q(e3, t3, null, void 0, n3, o3), i2 = n3.messages.get(y(e3.extendee));
      return (0, r2.assert)(i2, `invalid FieldDescriptorProto: extendee ${e3.extendee} not found`), Object.assign(Object.assign({}, s2), { kind: "extension", typeName: m(e3, A3, t3), parent: A3, file: t3, extendee: i2, toString() {
        return `extension ${this.typeName}`;
      }, getComments() {
        const A4 = this.parent ? [...this.parent.getComments().sourcePath, S.DescriptorProto_Extension, this.parent.proto.extension.indexOf(e3)] : [S.FileDescriptorProto_Extension, this.file.proto.extension.indexOf(e3)];
        return D(t3.proto.sourceCodeInfo, A4);
      }, getFeatures() {
        var n4;
        return o3((null != A3 ? A3 : t3).getFeatures(), null === (n4 = e3.options) || void 0 === n4 ? void 0 : n4.features);
      } });
    }
    function C(e3, t3) {
      let A3, r3;
      switch (e3) {
        case void 0:
        case "proto2":
          r3 = "proto2", A3 = n2.Edition.EDITION_PROTO2;
          break;
        case "proto3":
          r3 = "proto3", A3 = n2.Edition.EDITION_PROTO3;
          break;
        case "editions":
          switch (r3 = "editions", t3) {
            case void 0:
            case n2.Edition.EDITION_1_TEST_ONLY:
            case n2.Edition.EDITION_2_TEST_ONLY:
            case n2.Edition.EDITION_99997_TEST_ONLY:
            case n2.Edition.EDITION_99998_TEST_ONLY:
            case n2.Edition.EDITION_99999_TEST_ONLY:
            case n2.Edition.EDITION_UNKNOWN:
              A3 = n2.Edition.EDITION_UNKNOWN;
              break;
            default:
              A3 = t3;
          }
          break;
        default:
          throw new Error(`invalid FileDescriptorProto: unsupported syntax: ${e3}`);
      }
      if ("editions" === e3 && t3 === n2.Edition.EDITION_UNKNOWN) throw new Error(`invalid FileDescriptorProto: syntax ${e3} cannot have edition ${String(t3)}`);
      return { syntax: r3, edition: A3 };
    }
    function p(e3, t3) {
      return e3.dependency.map((e4) => {
        const A3 = t3.files.find((t4) => t4.proto.name === e4);
        return (0, r2.assert)(A3), A3;
      });
    }
    function m(e3, t3, A3) {
      let n3;
      return (0, r2.assert)(e3.name, `invalid ${e3.getType().typeName}: missing name`), n3 = t3 ? `${t3.typeName}.${e3.name}` : void 0 !== A3.proto.package ? `${A3.proto.package}.${e3.name}` : `${e3.name}`, n3;
    }
    function y(e3) {
      return e3.startsWith(".") ? e3.substring(1) : e3;
    }
    function w(e3, t3) {
      var A3;
      const n3 = e3.oneofIndex;
      if (void 0 === n3) return;
      let o3;
      return true !== e3.proto3Optional && (o3 = t3[n3], (0, r2.assert)(o3, `invalid FieldDescriptorProto: oneof #${n3} for field #${null !== (A3 = e3.number) && void 0 !== A3 ? A3 : -1} not found`)), o3;
    }
    function k(e3, t3) {
      switch (t3) {
        case "proto2":
          return void 0 === e3.oneofIndex && e3.label === n2.FieldDescriptorProto_Label.OPTIONAL;
        case "proto3":
          return true === e3.proto3Optional;
        case "editions":
          return false;
      }
    }
    function b(e3, t3) {
      const { repeatedFieldEncoding: A3 } = t3();
      if (A3 != n2.FeatureSet_RepeatedFieldEncoding.PACKED) return false;
      switch (e3.type) {
        case n2.FieldDescriptorProto_Type.STRING:
        case n2.FieldDescriptorProto_Type.BYTES:
        case n2.FieldDescriptorProto_Type.GROUP:
        case n2.FieldDescriptorProto_Type.MESSAGE:
          return false;
        default:
          return true;
      }
    }
    function N(e3, t3, A3, r3) {
      var o3, s2, i2, a2, c2, l2;
      switch (A3.type) {
        case n2.FieldDescriptorProto_Type.STRING:
        case n2.FieldDescriptorProto_Type.BYTES:
        case n2.FieldDescriptorProto_Type.GROUP:
        case n2.FieldDescriptorProto_Type.MESSAGE:
          return false;
        default:
          switch (e3.edition) {
            case n2.Edition.EDITION_PROTO2:
              return null !== (s2 = null === (o3 = A3.options) || void 0 === o3 ? void 0 : o3.packed) && void 0 !== s2 && s2;
            case n2.Edition.EDITION_PROTO3:
              return null === (a2 = null === (i2 = A3.options) || void 0 === i2 ? void 0 : i2.packed) || void 0 === a2 || a2;
            default: {
              const { repeatedFieldEncoding: o4 } = r3(null !== (c2 = null == t3 ? void 0 : t3.getFeatures()) && void 0 !== c2 ? c2 : e3.getFeatures(), null === (l2 = A3.options) || void 0 === l2 ? void 0 : l2.features);
              return o4 == n2.FeatureSet_RepeatedFieldEncoding.PACKED;
            }
          }
      }
    }
    t2.createDescriptorSet = function(e3, t3) {
      var A3;
      const r3 = { files: [], enums: /* @__PURE__ */ new Map(), messages: /* @__PURE__ */ new Map(), services: /* @__PURE__ */ new Map(), extensions: /* @__PURE__ */ new Map(), mapEntries: /* @__PURE__ */ new Map() }, o3 = (0, l.isMessage)(e3, n2.FileDescriptorSet) ? e3.file : e3 instanceof Uint8Array ? n2.FileDescriptorSet.fromBinary(e3).file : e3, s2 = /* @__PURE__ */ new Map();
      for (const e4 of o3) {
        const n3 = null !== (A3 = e4.edition) && void 0 !== A3 ? A3 : C(e4.syntax, e4.edition).edition;
        let o4 = s2.get(n3);
        void 0 === o4 && (o4 = (0, a.createFeatureResolver)(n3, null == t3 ? void 0 : t3.featureSetDefaults, null == t3 ? void 0 : t3.serializationOptions), s2.set(n3, o4)), u(e4, r3, o4);
      }
      return r3;
    };
    const T = { [n2.FieldDescriptorProto_Type.DOUBLE]: c.ScalarType.DOUBLE, [n2.FieldDescriptorProto_Type.FLOAT]: c.ScalarType.FLOAT, [n2.FieldDescriptorProto_Type.INT64]: c.ScalarType.INT64, [n2.FieldDescriptorProto_Type.UINT64]: c.ScalarType.UINT64, [n2.FieldDescriptorProto_Type.INT32]: c.ScalarType.INT32, [n2.FieldDescriptorProto_Type.FIXED64]: c.ScalarType.FIXED64, [n2.FieldDescriptorProto_Type.FIXED32]: c.ScalarType.FIXED32, [n2.FieldDescriptorProto_Type.BOOL]: c.ScalarType.BOOL, [n2.FieldDescriptorProto_Type.STRING]: c.ScalarType.STRING, [n2.FieldDescriptorProto_Type.GROUP]: void 0, [n2.FieldDescriptorProto_Type.MESSAGE]: void 0, [n2.FieldDescriptorProto_Type.BYTES]: c.ScalarType.BYTES, [n2.FieldDescriptorProto_Type.UINT32]: c.ScalarType.UINT32, [n2.FieldDescriptorProto_Type.ENUM]: void 0, [n2.FieldDescriptorProto_Type.SFIXED32]: c.ScalarType.SFIXED32, [n2.FieldDescriptorProto_Type.SFIXED64]: c.ScalarType.SFIXED64, [n2.FieldDescriptorProto_Type.SINT32]: c.ScalarType.SINT32, [n2.FieldDescriptorProto_Type.SINT64]: c.ScalarType.SINT64 };
    function D(e3, t3) {
      if (!e3) return { leadingDetached: [], sourcePath: t3 };
      for (const A3 of e3.location) if (A3.path.length === t3.length && !A3.path.some((e4, A4) => t3[A4] !== e4)) return { leadingDetached: A3.leadingDetachedComments, leading: A3.leadingComments, trailing: A3.trailingComments, sourcePath: t3 };
      return { leadingDetached: [], sourcePath: t3 };
    }
    var S;
    function R() {
      var e3, t3, A3;
      const r3 = [];
      this.repeated && r3.push("repeated"), this.optional && r3.push("optional");
      let o3;
      switch ("proto2" == ("extension" === this.kind ? this.file : this.parent.file).syntax && this.proto.label === n2.FieldDescriptorProto_Label.REQUIRED && r3.push("required"), this.fieldKind) {
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
          let t4;
          switch (this.mapValue.kind) {
            case "scalar":
              t4 = c.ScalarType[this.mapValue.scalar].toLowerCase();
              break;
            case "enum":
              t4 = this.mapValue.enum.typeName;
              break;
            case "message":
              t4 = this.mapValue.message.typeName;
          }
          o3 = `map<${e4}, ${t4}>`;
          break;
        }
      }
      r3.push(`${o3} ${this.name} = ${this.number}`);
      const s2 = [];
      void 0 !== (null === (e3 = this.proto.options) || void 0 === e3 ? void 0 : e3.packed) && s2.push(`packed = ${this.proto.options.packed.toString()}`);
      let i2 = this.proto.defaultValue;
      return void 0 !== i2 && (this.proto.type != n2.FieldDescriptorProto_Type.BYTES && this.proto.type != n2.FieldDescriptorProto_Type.STRING || (i2 = '"' + i2.replace('"', '\\"') + '"'), s2.push(`default = ${i2}`)), void 0 !== this.jsonName && s2.push(`json_name = "${this.jsonName}"`), void 0 !== (null === (t3 = this.proto.options) || void 0 === t3 ? void 0 : t3.jstype) && s2.push(`jstype = ${n2.FieldOptions_JSType[this.proto.options.jstype]}`), true === (null === (A3 = this.proto.options) || void 0 === A3 ? void 0 : A3.deprecated) && s2.push("deprecated = true"), s2.length > 0 && r3.push("[" + s2.join(", ") + "]"), r3.join(" ");
    }
    function F() {
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
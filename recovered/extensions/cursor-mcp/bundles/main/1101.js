// @recovered-by cursor-re
// artifact: app/extensions/cursor-mcp/dist/main.js sha256:097aeef3cf1f927e9bc6c0d23972c432bbcae8dc0ea353a5b6308dd59620fb49
// module: 1101 range:84962..109939
// basis: webpack-id confidence: C
// method: split
// run: ext-p0 2026-11-05T10:07:22.069Z
1101: (e2, t2, r2) => {
    "use strict";
    Object.defineProperty(t2, "__esModule", { value: true }), t2.createDescriptorSet = void 0;
    const n2 = r2(7374), o2 = r2(3098), s2 = r2(2422), i2 = r2(5822), a2 = r2(1663), c = r2(9301), u = r2(3408), l = r2(2706);
    function d(e3, t3, r3) {
      var n3, s3;
      (0, o2.assert)(e3.name, "invalid FileDescriptorProto: missing name");
      const i3 = Object.assign(Object.assign({ kind: "file", proto: e3, deprecated: null !== (s3 = null === (n3 = e3.options) || void 0 === n3 ? void 0 : n3.deprecated) && void 0 !== s3 && s3 }, w(e3.syntax, e3.edition)), { name: e3.name.replace(/\.proto/, ""), dependencies: b(e3, t3), enums: [], messages: [], extensions: [], services: [], toString() {
        return `file ${this.proto.name}`;
      }, getSyntaxComments() {
        return I(this.proto.sourceCodeInfo, [C.FileDescriptorProto_Syntax]);
      }, getPackageComments() {
        return I(this.proto.sourceCodeInfo, [C.FileDescriptorProto_Package]);
      }, getFeatures() {
        var t4;
        return r3(null === (t4 = e3.options) || void 0 === t4 ? void 0 : t4.features);
      } });
      t3.mapEntries.clear();
      for (const n4 of e3.enumType) h(n4, i3, void 0, t3, r3);
      for (const n4 of e3.messageType) m(n4, i3, void 0, t3, r3);
      for (const n4 of e3.service) g(n4, i3, t3, r3);
      p(i3, t3, r3);
      for (const e4 of t3.mapEntries.values()) f(e4, t3, r3);
      for (const e4 of i3.messages) f(e4, t3, r3), p(e4, t3, r3);
      t3.mapEntries.clear(), t3.files.push(i3);
    }
    function p(e3, t3, r3) {
      switch (e3.kind) {
        case "file":
          for (const n3 of e3.proto.extension) {
            const o3 = v(n3, e3, void 0, t3, r3);
            e3.extensions.push(o3), t3.extensions.set(o3.typeName, o3);
          }
          break;
        case "message":
          for (const n3 of e3.proto.extension) {
            const o3 = v(n3, e3.file, e3, t3, r3);
            e3.nestedExtensions.push(o3), t3.extensions.set(o3.typeName, o3);
          }
          for (const n3 of e3.nestedMessages) p(n3, t3, r3);
      }
    }
    function f(e3, t3, r3) {
      const n3 = e3.proto.oneofDecl.map((t4) => (function(e4, t5, r4) {
        return (0, o2.assert)(e4.name, "invalid OneofDescriptorProto: missing name"), { kind: "oneof", proto: e4, deprecated: false, parent: t5, fields: [], name: e4.name, toString() {
          return `oneof ${t5.typeName}.${this.name}`;
        }, getComments() {
          const e5 = [...this.parent.getComments().sourcePath, C.DescriptorProto_OneofDecl, this.parent.proto.oneofDecl.indexOf(this.proto)];
          return I(t5.file.proto.sourceCodeInfo, e5);
        }, getFeatures() {
          var n4;
          return r4(t5.getFeatures(), null === (n4 = e4.options) || void 0 === n4 ? void 0 : n4.features);
        } };
      })(t4, e3, r3)), s3 = /* @__PURE__ */ new Set();
      for (const o3 of e3.proto.field) {
        const i3 = E(o3, n3), a3 = _(o3, e3.file, e3, i3, t3, r3);
        e3.fields.push(a3), void 0 === i3 ? e3.members.push(a3) : (i3.fields.push(a3), s3.has(i3) || (s3.add(i3), e3.members.push(i3)));
      }
      for (const t4 of n3.filter((e4) => s3.has(e4))) e3.oneofs.push(t4);
      for (const n4 of e3.nestedMessages) f(n4, t3, r3);
    }
    function h(e3, t3, r3, n3, s3) {
      var a3, c2, u2;
      (0, o2.assert)(e3.name, "invalid EnumDescriptorProto: missing name");
      const l2 = { kind: "enum", proto: e3, deprecated: null !== (c2 = null === (a3 = e3.options) || void 0 === a3 ? void 0 : a3.deprecated) && void 0 !== c2 && c2, file: t3, parent: r3, name: e3.name, typeName: S(e3, r3, t3), values: [], sharedPrefix: (0, i2.findEnumSharedPrefix)(e3.name, e3.value.map((e4) => {
        var t4;
        return null !== (t4 = e4.name) && void 0 !== t4 ? t4 : "";
      })), toString() {
        return `enum ${this.typeName}`;
      }, getComments() {
        const e4 = this.parent ? [...this.parent.getComments().sourcePath, C.DescriptorProto_EnumType, this.parent.proto.enumType.indexOf(this.proto)] : [C.FileDescriptorProto_EnumType, this.file.proto.enumType.indexOf(this.proto)];
        return I(t3.proto.sourceCodeInfo, e4);
      }, getFeatures() {
        var n4, o3;
        return s3(null !== (n4 = null == r3 ? void 0 : r3.getFeatures()) && void 0 !== n4 ? n4 : t3.getFeatures(), null === (o3 = e3.options) || void 0 === o3 ? void 0 : o3.features);
      } };
      n3.enums.set(l2.typeName, l2), e3.value.forEach((e4) => {
        var r4, n4;
        (0, o2.assert)(e4.name, "invalid EnumValueDescriptorProto: missing name"), (0, o2.assert)(void 0 !== e4.number, "invalid EnumValueDescriptorProto: missing number"), l2.values.push({ kind: "enum_value", proto: e4, deprecated: null !== (n4 = null === (r4 = e4.options) || void 0 === r4 ? void 0 : r4.deprecated) && void 0 !== n4 && n4, parent: l2, name: e4.name, number: e4.number, toString() {
          return `enum value ${l2.typeName}.${this.name}`;
        }, declarationString() {
          var e5;
          let t4 = `${this.name} = ${this.number}`;
          return true === (null === (e5 = this.proto.options) || void 0 === e5 ? void 0 : e5.deprecated) && (t4 += " [deprecated = true]"), t4;
        }, getComments() {
          const e5 = [...this.parent.getComments().sourcePath, C.EnumDescriptorProto_Value, this.parent.proto.value.indexOf(this.proto)];
          return I(t3.proto.sourceCodeInfo, e5);
        }, getFeatures() {
          var t4;
          return s3(l2.getFeatures(), null === (t4 = e4.options) || void 0 === t4 ? void 0 : t4.features);
        } });
      }), (null !== (u2 = null == r3 ? void 0 : r3.nestedEnums) && void 0 !== u2 ? u2 : t3.enums).push(l2);
    }
    function m(e3, t3, r3, n3, s3) {
      var i3, a3, c2, u2;
      (0, o2.assert)(e3.name, "invalid DescriptorProto: missing name");
      const l2 = { kind: "message", proto: e3, deprecated: null !== (a3 = null === (i3 = e3.options) || void 0 === i3 ? void 0 : i3.deprecated) && void 0 !== a3 && a3, file: t3, parent: r3, name: e3.name, typeName: S(e3, r3, t3), fields: [], oneofs: [], members: [], nestedEnums: [], nestedMessages: [], nestedExtensions: [], toString() {
        return `message ${this.typeName}`;
      }, getComments() {
        const e4 = this.parent ? [...this.parent.getComments().sourcePath, C.DescriptorProto_NestedType, this.parent.proto.nestedType.indexOf(this.proto)] : [C.FileDescriptorProto_MessageType, this.file.proto.messageType.indexOf(this.proto)];
        return I(t3.proto.sourceCodeInfo, e4);
      }, getFeatures() {
        var n4, o3;
        return s3(null !== (n4 = null == r3 ? void 0 : r3.getFeatures()) && void 0 !== n4 ? n4 : t3.getFeatures(), null === (o3 = e3.options) || void 0 === o3 ? void 0 : o3.features);
      } };
      true === (null === (c2 = e3.options) || void 0 === c2 ? void 0 : c2.mapEntry) ? n3.mapEntries.set(l2.typeName, l2) : ((null !== (u2 = null == r3 ? void 0 : r3.nestedMessages) && void 0 !== u2 ? u2 : t3.messages).push(l2), n3.messages.set(l2.typeName, l2));
      for (const r4 of e3.enumType) h(r4, t3, l2, n3, s3);
      for (const r4 of e3.nestedType) m(r4, t3, l2, n3, s3);
    }
    function g(e3, t3, r3, n3) {
      var s3, i3;
      (0, o2.assert)(e3.name, "invalid ServiceDescriptorProto: missing name");
      const a3 = { kind: "service", proto: e3, deprecated: null !== (i3 = null === (s3 = e3.options) || void 0 === s3 ? void 0 : s3.deprecated) && void 0 !== i3 && i3, file: t3, name: e3.name, typeName: S(e3, void 0, t3), methods: [], toString() {
        return `service ${this.typeName}`;
      }, getComments() {
        const e4 = [C.FileDescriptorProto_Service, this.file.proto.service.indexOf(this.proto)];
        return I(t3.proto.sourceCodeInfo, e4);
      }, getFeatures() {
        var r4;
        return n3(t3.getFeatures(), null === (r4 = e3.options) || void 0 === r4 ? void 0 : r4.features);
      } };
      t3.services.push(a3), r3.services.set(a3.typeName, a3);
      for (const t4 of e3.method) a3.methods.push(y(t4, a3, r3, n3));
    }
    function y(e3, t3, r3, i3) {
      var a3, c2, u2;
      let l2, d2;
      switch ((0, o2.assert)(e3.name, "invalid MethodDescriptorProto: missing name"), (0, o2.assert)(e3.inputType, "invalid MethodDescriptorProto: missing input_type"), (0, o2.assert)(e3.outputType, "invalid MethodDescriptorProto: missing output_type"), l2 = true === e3.clientStreaming && true === e3.serverStreaming ? s2.MethodKind.BiDiStreaming : true === e3.clientStreaming ? s2.MethodKind.ClientStreaming : true === e3.serverStreaming ? s2.MethodKind.ServerStreaming : s2.MethodKind.Unary, null === (a3 = e3.options) || void 0 === a3 ? void 0 : a3.idempotencyLevel) {
        case n2.MethodOptions_IdempotencyLevel.IDEMPOTENT:
          d2 = s2.MethodIdempotency.Idempotent;
          break;
        case n2.MethodOptions_IdempotencyLevel.NO_SIDE_EFFECTS:
          d2 = s2.MethodIdempotency.NoSideEffects;
          break;
        case n2.MethodOptions_IdempotencyLevel.IDEMPOTENCY_UNKNOWN:
        case void 0:
          d2 = void 0;
      }
      const p2 = r3.messages.get(k(e3.inputType)), f2 = r3.messages.get(k(e3.outputType));
      (0, o2.assert)(p2, `invalid MethodDescriptorProto: input_type ${e3.inputType} not found`), (0, o2.assert)(f2, `invalid MethodDescriptorProto: output_type ${e3.inputType} not found`);
      const h2 = e3.name;
      return { kind: "rpc", proto: e3, deprecated: null !== (u2 = null === (c2 = e3.options) || void 0 === c2 ? void 0 : c2.deprecated) && void 0 !== u2 && u2, parent: t3, name: h2, methodKind: l2, input: p2, output: f2, idempotency: d2, toString: () => `rpc ${t3.typeName}.${h2}`, getComments() {
        const e4 = [...this.parent.getComments().sourcePath, C.ServiceDescriptorProto_Method, this.parent.proto.method.indexOf(this.proto)];
        return I(t3.file.proto.sourceCodeInfo, e4);
      }, getFeatures() {
        var r4;
        return i3(t3.getFeatures(), null === (r4 = e3.options) || void 0 === r4 ? void 0 : r4.features);
      } };
    }
    function _(e3, t3, r3, s3, a3, c2) {
      var l2, d2, p2;
      (0, o2.assert)(e3.name, "invalid FieldDescriptorProto: missing name"), (0, o2.assert)(e3.number, "invalid FieldDescriptorProto: missing number"), (0, o2.assert)(e3.type, "invalid FieldDescriptorProto: missing type");
      const f2 = { proto: e3, deprecated: null !== (d2 = null === (l2 = e3.options) || void 0 === l2 ? void 0 : l2.deprecated) && void 0 !== d2 && d2, name: e3.name, number: e3.number, parent: r3, oneof: s3, optional: x(e3, t3.syntax), packedByDefault: T(e3, c2), packed: O(t3, r3, e3, c2), jsonName: e3.jsonName === (0, i2.fieldJsonName)(e3.name) ? void 0 : e3.jsonName, scalar: void 0, longType: void 0, message: void 0, enum: void 0, mapKey: void 0, mapValue: void 0, declarationString: A, toString() {
        return `field ${this.parent.typeName}.${this.name}`;
      }, getComments() {
        const e4 = [...this.parent.getComments().sourcePath, C.DescriptorProto_Field, this.parent.proto.field.indexOf(this.proto)];
        return I(t3.proto.sourceCodeInfo, e4);
      }, getFeatures() {
        var t4;
        return c2(r3.getFeatures(), null === (t4 = e3.options) || void 0 === t4 ? void 0 : t4.features);
      } }, h2 = e3.label === n2.FieldDescriptorProto_Label.REPEATED;
      switch (e3.type) {
        case n2.FieldDescriptorProto_Type.MESSAGE:
        case n2.FieldDescriptorProto_Type.GROUP: {
          (0, o2.assert)(e3.typeName, "invalid FieldDescriptorProto: missing type_name");
          const t4 = a3.mapEntries.get(k(e3.typeName));
          if (void 0 !== t4) return (0, o2.assert)(h2, "invalid FieldDescriptorProto: expected map entry to be repeated"), Object.assign(Object.assign(Object.assign({}, f2), { kind: "field", fieldKind: "map", repeated: false }), (function(e4) {
            var t5, r5;
            (0, o2.assert)(null === (t5 = e4.proto.options) || void 0 === t5 ? void 0 : t5.mapEntry, `invalid DescriptorProto: expected ${e4.toString()} to be a map entry`), (0, o2.assert)(2 === e4.fields.length, `invalid DescriptorProto: map entry ${e4.toString()} has ${e4.fields.length} fields`);
            const n3 = e4.fields.find((e5) => 1 === e5.proto.number);
            (0, o2.assert)(n3, `invalid DescriptorProto: map entry ${e4.toString()} is missing key field`);
            const s4 = n3.scalar;
            (0, o2.assert)(void 0 !== s4 && s4 !== u.ScalarType.BYTES && s4 !== u.ScalarType.FLOAT && s4 !== u.ScalarType.DOUBLE, `invalid DescriptorProto: map entry ${e4.toString()} has unexpected key type ${null !== (r5 = n3.proto.type) && void 0 !== r5 ? r5 : -1}`);
            const i3 = e4.fields.find((e5) => 2 === e5.proto.number);
            switch ((0, o2.assert)(i3, `invalid DescriptorProto: map entry ${e4.toString()} is missing value field`), i3.fieldKind) {
              case "scalar":
                return { mapKey: s4, mapValue: Object.assign(Object.assign({}, i3), { kind: "scalar" }) };
              case "message":
                return { mapKey: s4, mapValue: Object.assign(Object.assign({}, i3), { kind: "message" }) };
              case "enum":
                return { mapKey: s4, mapValue: Object.assign(Object.assign({}, i3), { kind: "enum" }) };
              default:
                throw new Error("invalid DescriptorProto: unsupported map entry value field");
            }
          })(t4));
          const r4 = a3.messages.get(k(e3.typeName));
          return (0, o2.assert)(void 0 !== r4, `invalid FieldDescriptorProto: type_name ${e3.typeName} not found`), Object.assign(Object.assign({}, f2), { kind: "field", fieldKind: "message", repeated: h2, message: r4 });
        }
        case n2.FieldDescriptorProto_Type.ENUM: {
          (0, o2.assert)(e3.typeName, "invalid FieldDescriptorProto: missing type_name");
          const t4 = a3.enums.get(k(e3.typeName));
          return (0, o2.assert)(void 0 !== t4, `invalid FieldDescriptorProto: type_name ${e3.typeName} not found`), Object.assign(Object.assign({}, f2), { kind: "field", fieldKind: "enum", getDefaultValue: $, repeated: h2, enum: t4 });
        }
        default: {
          const t4 = P[e3.type];
          return (0, o2.assert)(t4, `invalid FieldDescriptorProto: unknown type ${e3.type}`), Object.assign(Object.assign({}, f2), { kind: "field", fieldKind: "scalar", getDefaultValue: $, repeated: h2, scalar: t4, longType: (null === (p2 = e3.options) || void 0 === p2 ? void 0 : p2.jstype) == n2.FieldOptions_JSType.JS_STRING ? u.LongType.STRING : u.LongType.BIGINT });
        }
      }
    }
    function v(e3, t3, r3, n3, s3) {
      (0, o2.assert)(e3.extendee, "invalid FieldDescriptorProto: missing extendee");
      const i3 = _(e3, t3, null, void 0, n3, s3), a3 = n3.messages.get(k(e3.extendee));
      return (0, o2.assert)(a3, `invalid FieldDescriptorProto: extendee ${e3.extendee} not found`), Object.assign(Object.assign({}, i3), { kind: "extension", typeName: S(e3, r3, t3), parent: r3, file: t3, extendee: a3, toString() {
        return `extension ${this.typeName}`;
      }, getComments() {
        const r4 = this.parent ? [...this.parent.getComments().sourcePath, C.DescriptorProto_Extension, this.parent.proto.extension.indexOf(e3)] : [C.FileDescriptorProto_Extension, this.file.proto.extension.indexOf(e3)];
        return I(t3.proto.sourceCodeInfo, r4);
      }, getFeatures() {
        var n4;
        return s3((null != r3 ? r3 : t3).getFeatures(), null === (n4 = e3.options) || void 0 === n4 ? void 0 : n4.features);
      } });
    }
    function w(e3, t3) {
      let r3, o3;
      switch (e3) {
        case void 0:
        case "proto2":
          o3 = "proto2", r3 = n2.Edition.EDITION_PROTO2;
          break;
        case "proto3":
          o3 = "proto3", r3 = n2.Edition.EDITION_PROTO3;
          break;
        case "editions":
          switch (o3 = "editions", t3) {
            case void 0:
            case n2.Edition.EDITION_1_TEST_ONLY:
            case n2.Edition.EDITION_2_TEST_ONLY:
            case n2.Edition.EDITION_99997_TEST_ONLY:
            case n2.Edition.EDITION_99998_TEST_ONLY:
            case n2.Edition.EDITION_99999_TEST_ONLY:
            case n2.Edition.EDITION_UNKNOWN:
              r3 = n2.Edition.EDITION_UNKNOWN;
              break;
            default:
              r3 = t3;
          }
          break;
        default:
          throw new Error(`invalid FileDescriptorProto: unsupported syntax: ${e3}`);
      }
      if ("editions" === e3 && t3 === n2.Edition.EDITION_UNKNOWN) throw new Error(`invalid FileDescriptorProto: syntax ${e3} cannot have edition ${String(t3)}`);
      return { syntax: o3, edition: r3 };
    }
    function b(e3, t3) {
      return e3.dependency.map((e4) => {
        const r3 = t3.files.find((t4) => t4.proto.name === e4);
        return (0, o2.assert)(r3), r3;
      });
    }
    function S(e3, t3, r3) {
      let n3;
      return (0, o2.assert)(e3.name, `invalid ${e3.getType().typeName}: missing name`), n3 = t3 ? `${t3.typeName}.${e3.name}` : void 0 !== r3.proto.package ? `${r3.proto.package}.${e3.name}` : `${e3.name}`, n3;
    }
    function k(e3) {
      return e3.startsWith(".") ? e3.substring(1) : e3;
    }
    function E(e3, t3) {
      var r3;
      const n3 = e3.oneofIndex;
      if (void 0 === n3) return;
      let s3;
      return true !== e3.proto3Optional && (s3 = t3[n3], (0, o2.assert)(s3, `invalid FieldDescriptorProto: oneof #${n3} for field #${null !== (r3 = e3.number) && void 0 !== r3 ? r3 : -1} not found`)), s3;
    }
    function x(e3, t3) {
      switch (t3) {
        case "proto2":
          return void 0 === e3.oneofIndex && e3.label === n2.FieldDescriptorProto_Label.OPTIONAL;
        case "proto3":
          return true === e3.proto3Optional;
        case "editions":
          return false;
      }
    }
    function T(e3, t3) {
      const { repeatedFieldEncoding: r3 } = t3();
      if (r3 != n2.FeatureSet_RepeatedFieldEncoding.PACKED) return false;
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
    function O(e3, t3, r3, o3) {
      var s3, i3, a3, c2, u2, l2;
      switch (r3.type) {
        case n2.FieldDescriptorProto_Type.STRING:
        case n2.FieldDescriptorProto_Type.BYTES:
        case n2.FieldDescriptorProto_Type.GROUP:
        case n2.FieldDescriptorProto_Type.MESSAGE:
          return false;
        default:
          switch (e3.edition) {
            case n2.Edition.EDITION_PROTO2:
              return null !== (i3 = null === (s3 = r3.options) || void 0 === s3 ? void 0 : s3.packed) && void 0 !== i3 && i3;
            case n2.Edition.EDITION_PROTO3:
              return null === (c2 = null === (a3 = r3.options) || void 0 === a3 ? void 0 : a3.packed) || void 0 === c2 || c2;
            default: {
              const { repeatedFieldEncoding: s4 } = o3(null !== (u2 = null == t3 ? void 0 : t3.getFeatures()) && void 0 !== u2 ? u2 : e3.getFeatures(), null === (l2 = r3.options) || void 0 === l2 ? void 0 : l2.features);
              return s4 == n2.FeatureSet_RepeatedFieldEncoding.PACKED;
            }
          }
      }
    }
    t2.createDescriptorSet = function(e3, t3) {
      var r3;
      const o3 = { files: [], enums: /* @__PURE__ */ new Map(), messages: /* @__PURE__ */ new Map(), services: /* @__PURE__ */ new Map(), extensions: /* @__PURE__ */ new Map(), mapEntries: /* @__PURE__ */ new Map() }, s3 = (0, l.isMessage)(e3, n2.FileDescriptorSet) ? e3.file : e3 instanceof Uint8Array ? n2.FileDescriptorSet.fromBinary(e3).file : e3, i3 = /* @__PURE__ */ new Map();
      for (const e4 of s3) {
        const n3 = null !== (r3 = e4.edition) && void 0 !== r3 ? r3 : w(e4.syntax, e4.edition).edition;
        let s4 = i3.get(n3);
        void 0 === s4 && (s4 = (0, c.createFeatureResolver)(n3, null == t3 ? void 0 : t3.featureSetDefaults, null == t3 ? void 0 : t3.serializationOptions), i3.set(n3, s4)), d(e4, o3, s4);
      }
      return o3;
    };
    const P = { [n2.FieldDescriptorProto_Type.DOUBLE]: u.ScalarType.DOUBLE, [n2.FieldDescriptorProto_Type.FLOAT]: u.ScalarType.FLOAT, [n2.FieldDescriptorProto_Type.INT64]: u.ScalarType.INT64, [n2.FieldDescriptorProto_Type.UINT64]: u.ScalarType.UINT64, [n2.FieldDescriptorProto_Type.INT32]: u.ScalarType.INT32, [n2.FieldDescriptorProto_Type.FIXED64]: u.ScalarType.FIXED64, [n2.FieldDescriptorProto_Type.FIXED32]: u.ScalarType.FIXED32, [n2.FieldDescriptorProto_Type.BOOL]: u.ScalarType.BOOL, [n2.FieldDescriptorProto_Type.STRING]: u.ScalarType.STRING, [n2.FieldDescriptorProto_Type.GROUP]: void 0, [n2.FieldDescriptorProto_Type.MESSAGE]: void 0, [n2.FieldDescriptorProto_Type.BYTES]: u.ScalarType.BYTES, [n2.FieldDescriptorProto_Type.UINT32]: u.ScalarType.UINT32, [n2.FieldDescriptorProto_Type.ENUM]: void 0, [n2.FieldDescriptorProto_Type.SFIXED32]: u.ScalarType.SFIXED32, [n2.FieldDescriptorProto_Type.SFIXED64]: u.ScalarType.SFIXED64, [n2.FieldDescriptorProto_Type.SINT32]: u.ScalarType.SINT32, [n2.FieldDescriptorProto_Type.SINT64]: u.ScalarType.SINT64 };
    function I(e3, t3) {
      if (!e3) return { leadingDetached: [], sourcePath: t3 };
      for (const r3 of e3.location) if (r3.path.length === t3.length && !r3.path.some((e4, r4) => t3[r4] !== e4)) return { leadingDetached: r3.leadingDetachedComments, leading: r3.leadingComments, trailing: r3.trailingComments, sourcePath: t3 };
      return { leadingDetached: [], sourcePath: t3 };
    }
    var C;
    function A() {
      var e3, t3, r3;
      const o3 = [];
      this.repeated && o3.push("repeated"), this.optional && o3.push("optional");
      let s3;
      switch ("proto2" == ("extension" === this.kind ? this.file : this.parent.file).syntax && this.proto.label === n2.FieldDescriptorProto_Label.REQUIRED && o3.push("required"), this.fieldKind) {
        case "scalar":
          s3 = u.ScalarType[this.scalar].toLowerCase();
          break;
        case "enum":
          s3 = this.enum.typeName;
          break;
        case "message":
          s3 = this.message.typeName;
          break;
        case "map": {
          const e4 = u.ScalarType[this.mapKey].toLowerCase();
          let t4;
          switch (this.mapValue.kind) {
            case "scalar":
              t4 = u.ScalarType[this.mapValue.scalar].toLowerCase();
              break;
            case "enum":
              t4 = this.mapValue.enum.typeName;
              break;
            case "message":
              t4 = this.mapValue.message.typeName;
          }
          s3 = `map<${e4}, ${t4}>`;
          break;
        }
      }
      o3.push(`${s3} ${this.name} = ${this.number}`);
      const i3 = [];
      void 0 !== (null === (e3 = this.proto.options) || void 0 === e3 ? void 0 : e3.packed) && i3.push(`packed = ${this.proto.options.packed.toString()}`);
      let a3 = this.proto.defaultValue;
      return void 0 !== a3 && (this.proto.type != n2.FieldDescriptorProto_Type.BYTES && this.proto.type != n2.FieldDescriptorProto_Type.STRING || (a3 = '"' + a3.replace('"', '\\"') + '"'), i3.push(`default = ${a3}`)), void 0 !== this.jsonName && i3.push(`json_name = "${this.jsonName}"`), void 0 !== (null === (t3 = this.proto.options) || void 0 === t3 ? void 0 : t3.jstype) && i3.push(`jstype = ${n2.FieldOptions_JSType[this.proto.options.jstype]}`), true === (null === (r3 = this.proto.options) || void 0 === r3 ? void 0 : r3.deprecated) && i3.push("deprecated = true"), i3.length > 0 && o3.push("[" + i3.join(", ") + "]"), o3.join(" ");
    }
    function $() {
      const e3 = this.proto.defaultValue;
      if (void 0 !== e3) switch (this.fieldKind) {
        case "enum":
          return (0, a2.parseTextFormatEnumValue)(this.enum, e3);
        case "scalar":
          return (0, a2.parseTextFormatScalarValue)(this.scalar, e3);
        default:
          return;
      }
    }
    !(function(e3) {
      e3[e3.FileDescriptorProto_Package = 2] = "FileDescriptorProto_Package", e3[e3.FileDescriptorProto_MessageType = 4] = "FileDescriptorProto_MessageType", e3[e3.FileDescriptorProto_EnumType = 5] = "FileDescriptorProto_EnumType", e3[e3.FileDescriptorProto_Service = 6] = "FileDescriptorProto_Service", e3[e3.FileDescriptorProto_Extension = 7] = "FileDescriptorProto_Extension", e3[e3.FileDescriptorProto_Syntax = 12] = "FileDescriptorProto_Syntax", e3[e3.DescriptorProto_Field = 2] = "DescriptorProto_Field", e3[e3.DescriptorProto_NestedType = 3] = "DescriptorProto_NestedType", e3[e3.DescriptorProto_EnumType = 4] = "DescriptorProto_EnumType", e3[e3.DescriptorProto_Extension = 6] = "DescriptorProto_Extension", e3[e3.DescriptorProto_OneofDecl = 8] = "DescriptorProto_OneofDecl", e3[e3.EnumDescriptorProto_Value = 2] = "EnumDescriptorProto_Value", e3[e3.ServiceDescriptorProto_Method = 2] = "ServiceDescriptorProto_Method";
    })(C || (C = {}));
  }
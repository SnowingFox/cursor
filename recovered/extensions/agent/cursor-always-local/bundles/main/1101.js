// @recovered-by cursor-re
// artifact: app/extensions/cursor-always-local/dist/main.js sha256:14fb2d0e360d81a024b4ec605f417e030e19b30b2df99bc45648aa227060534e
// module: 1101 range:404549..429523
// basis: webpack-id confidence: C
// method: split
// run: ext-agent 2026-11-05T10:20:08.356Z
1101: (t2, e2, r2) => {
    "use strict";
    Object.defineProperty(e2, "__esModule", { value: true }), e2.createDescriptorSet = void 0;
    const n2 = r2(7374), s2 = r2(3098), i2 = r2(2422), o2 = r2(5822), a = r2(1663), u = r2(9301), c = r2(3408), l = r2(2706);
    function m(t3, e3, r3) {
      var n3, i3;
      (0, s2.assert)(t3.name, "invalid FileDescriptorProto: missing name");
      const o3 = Object.assign(Object.assign({ kind: "file", proto: t3, deprecated: null !== (i3 = null === (n3 = t3.options) || void 0 === n3 ? void 0 : n3.deprecated) && void 0 !== i3 && i3 }, w(t3.syntax, t3.edition)), { name: t3.name.replace(/\.proto/, ""), dependencies: S(t3, e3), enums: [], messages: [], extensions: [], services: [], toString() {
        return `file ${this.proto.name}`;
      }, getSyntaxComments() {
        return v(this.proto.sourceCodeInfo, [q.FileDescriptorProto_Syntax]);
      }, getPackageComments() {
        return v(this.proto.sourceCodeInfo, [q.FileDescriptorProto_Package]);
      }, getFeatures() {
        var e4;
        return r3(null === (e4 = t3.options) || void 0 === e4 ? void 0 : e4.features);
      } });
      e3.mapEntries.clear();
      for (const n4 of t3.enumType) p(n4, o3, void 0, e3, r3);
      for (const n4 of t3.messageType) h(n4, o3, void 0, e3, r3);
      for (const n4 of t3.service) g(n4, o3, e3, r3);
      d(o3, e3, r3);
      for (const t4 of e3.mapEntries.values()) f(t4, e3, r3);
      for (const t4 of o3.messages) f(t4, e3, r3), d(t4, e3, r3);
      e3.mapEntries.clear(), e3.files.push(o3);
    }
    function d(t3, e3, r3) {
      switch (t3.kind) {
        case "file":
          for (const n3 of t3.proto.extension) {
            const s3 = y(n3, t3, void 0, e3, r3);
            t3.extensions.push(s3), e3.extensions.set(s3.typeName, s3);
          }
          break;
        case "message":
          for (const n3 of t3.proto.extension) {
            const s3 = y(n3, t3.file, t3, e3, r3);
            t3.nestedExtensions.push(s3), e3.extensions.set(s3.typeName, s3);
          }
          for (const n3 of t3.nestedMessages) d(n3, e3, r3);
      }
    }
    function f(t3, e3, r3) {
      const n3 = t3.proto.oneofDecl.map((e4) => (function(t4, e5, r4) {
        return (0, s2.assert)(t4.name, "invalid OneofDescriptorProto: missing name"), { kind: "oneof", proto: t4, deprecated: false, parent: e5, fields: [], name: t4.name, toString() {
          return `oneof ${e5.typeName}.${this.name}`;
        }, getComments() {
          const t5 = [...this.parent.getComments().sourcePath, q.DescriptorProto_OneofDecl, this.parent.proto.oneofDecl.indexOf(this.proto)];
          return v(e5.file.proto.sourceCodeInfo, t5);
        }, getFeatures() {
          var n4;
          return r4(e5.getFeatures(), null === (n4 = t4.options) || void 0 === n4 ? void 0 : n4.features);
        } };
      })(e4, t3, r3)), i3 = /* @__PURE__ */ new Set();
      for (const s3 of t3.proto.field) {
        const o3 = E(s3, n3), a2 = _(s3, t3.file, t3, o3, e3, r3);
        t3.fields.push(a2), void 0 === o3 ? t3.members.push(a2) : (o3.fields.push(a2), i3.has(o3) || (i3.add(o3), t3.members.push(o3)));
      }
      for (const e4 of n3.filter((t4) => i3.has(t4))) t3.oneofs.push(e4);
      for (const n4 of t3.nestedMessages) f(n4, e3, r3);
    }
    function p(t3, e3, r3, n3, i3) {
      var a2, u2, c2;
      (0, s2.assert)(t3.name, "invalid EnumDescriptorProto: missing name");
      const l2 = { kind: "enum", proto: t3, deprecated: null !== (u2 = null === (a2 = t3.options) || void 0 === a2 ? void 0 : a2.deprecated) && void 0 !== u2 && u2, file: e3, parent: r3, name: t3.name, typeName: J(t3, r3, e3), values: [], sharedPrefix: (0, o2.findEnumSharedPrefix)(t3.name, t3.value.map((t4) => {
        var e4;
        return null !== (e4 = t4.name) && void 0 !== e4 ? e4 : "";
      })), toString() {
        return `enum ${this.typeName}`;
      }, getComments() {
        const t4 = this.parent ? [...this.parent.getComments().sourcePath, q.DescriptorProto_EnumType, this.parent.proto.enumType.indexOf(this.proto)] : [q.FileDescriptorProto_EnumType, this.file.proto.enumType.indexOf(this.proto)];
        return v(e3.proto.sourceCodeInfo, t4);
      }, getFeatures() {
        var n4, s3;
        return i3(null !== (n4 = null == r3 ? void 0 : r3.getFeatures()) && void 0 !== n4 ? n4 : e3.getFeatures(), null === (s3 = t3.options) || void 0 === s3 ? void 0 : s3.features);
      } };
      n3.enums.set(l2.typeName, l2), t3.value.forEach((t4) => {
        var r4, n4;
        (0, s2.assert)(t4.name, "invalid EnumValueDescriptorProto: missing name"), (0, s2.assert)(void 0 !== t4.number, "invalid EnumValueDescriptorProto: missing number"), l2.values.push({ kind: "enum_value", proto: t4, deprecated: null !== (n4 = null === (r4 = t4.options) || void 0 === r4 ? void 0 : r4.deprecated) && void 0 !== n4 && n4, parent: l2, name: t4.name, number: t4.number, toString() {
          return `enum value ${l2.typeName}.${this.name}`;
        }, declarationString() {
          var t5;
          let e4 = `${this.name} = ${this.number}`;
          return true === (null === (t5 = this.proto.options) || void 0 === t5 ? void 0 : t5.deprecated) && (e4 += " [deprecated = true]"), e4;
        }, getComments() {
          const t5 = [...this.parent.getComments().sourcePath, q.EnumDescriptorProto_Value, this.parent.proto.value.indexOf(this.proto)];
          return v(e3.proto.sourceCodeInfo, t5);
        }, getFeatures() {
          var e4;
          return i3(l2.getFeatures(), null === (e4 = t4.options) || void 0 === e4 ? void 0 : e4.features);
        } });
      }), (null !== (c2 = null == r3 ? void 0 : r3.nestedEnums) && void 0 !== c2 ? c2 : e3.enums).push(l2);
    }
    function h(t3, e3, r3, n3, i3) {
      var o3, a2, u2, c2;
      (0, s2.assert)(t3.name, "invalid DescriptorProto: missing name");
      const l2 = { kind: "message", proto: t3, deprecated: null !== (a2 = null === (o3 = t3.options) || void 0 === o3 ? void 0 : o3.deprecated) && void 0 !== a2 && a2, file: e3, parent: r3, name: t3.name, typeName: J(t3, r3, e3), fields: [], oneofs: [], members: [], nestedEnums: [], nestedMessages: [], nestedExtensions: [], toString() {
        return `message ${this.typeName}`;
      }, getComments() {
        const t4 = this.parent ? [...this.parent.getComments().sourcePath, q.DescriptorProto_NestedType, this.parent.proto.nestedType.indexOf(this.proto)] : [q.FileDescriptorProto_MessageType, this.file.proto.messageType.indexOf(this.proto)];
        return v(e3.proto.sourceCodeInfo, t4);
      }, getFeatures() {
        var n4, s3;
        return i3(null !== (n4 = null == r3 ? void 0 : r3.getFeatures()) && void 0 !== n4 ? n4 : e3.getFeatures(), null === (s3 = t3.options) || void 0 === s3 ? void 0 : s3.features);
      } };
      true === (null === (u2 = t3.options) || void 0 === u2 ? void 0 : u2.mapEntry) ? n3.mapEntries.set(l2.typeName, l2) : ((null !== (c2 = null == r3 ? void 0 : r3.nestedMessages) && void 0 !== c2 ? c2 : e3.messages).push(l2), n3.messages.set(l2.typeName, l2));
      for (const r4 of t3.enumType) p(r4, e3, l2, n3, i3);
      for (const r4 of t3.nestedType) h(r4, e3, l2, n3, i3);
    }
    function g(t3, e3, r3, n3) {
      var i3, o3;
      (0, s2.assert)(t3.name, "invalid ServiceDescriptorProto: missing name");
      const a2 = { kind: "service", proto: t3, deprecated: null !== (o3 = null === (i3 = t3.options) || void 0 === i3 ? void 0 : i3.deprecated) && void 0 !== o3 && o3, file: e3, name: t3.name, typeName: J(t3, void 0, e3), methods: [], toString() {
        return `service ${this.typeName}`;
      }, getComments() {
        const t4 = [q.FileDescriptorProto_Service, this.file.proto.service.indexOf(this.proto)];
        return v(e3.proto.sourceCodeInfo, t4);
      }, getFeatures() {
        var r4;
        return n3(e3.getFeatures(), null === (r4 = t3.options) || void 0 === r4 ? void 0 : r4.features);
      } };
      e3.services.push(a2), r3.services.set(a2.typeName, a2);
      for (const e4 of t3.method) a2.methods.push(A(e4, a2, r3, n3));
    }
    function A(t3, e3, r3, o3) {
      var a2, u2, c2;
      let l2, m2;
      switch ((0, s2.assert)(t3.name, "invalid MethodDescriptorProto: missing name"), (0, s2.assert)(t3.inputType, "invalid MethodDescriptorProto: missing input_type"), (0, s2.assert)(t3.outputType, "invalid MethodDescriptorProto: missing output_type"), l2 = true === t3.clientStreaming && true === t3.serverStreaming ? i2.MethodKind.BiDiStreaming : true === t3.clientStreaming ? i2.MethodKind.ClientStreaming : true === t3.serverStreaming ? i2.MethodKind.ServerStreaming : i2.MethodKind.Unary, null === (a2 = t3.options) || void 0 === a2 ? void 0 : a2.idempotencyLevel) {
        case n2.MethodOptions_IdempotencyLevel.IDEMPOTENT:
          m2 = i2.MethodIdempotency.Idempotent;
          break;
        case n2.MethodOptions_IdempotencyLevel.NO_SIDE_EFFECTS:
          m2 = i2.MethodIdempotency.NoSideEffects;
          break;
        case n2.MethodOptions_IdempotencyLevel.IDEMPOTENCY_UNKNOWN:
        case void 0:
          m2 = void 0;
      }
      const d2 = r3.messages.get(B(t3.inputType)), f2 = r3.messages.get(B(t3.outputType));
      (0, s2.assert)(d2, `invalid MethodDescriptorProto: input_type ${t3.inputType} not found`), (0, s2.assert)(f2, `invalid MethodDescriptorProto: output_type ${t3.inputType} not found`);
      const p2 = t3.name;
      return { kind: "rpc", proto: t3, deprecated: null !== (c2 = null === (u2 = t3.options) || void 0 === u2 ? void 0 : u2.deprecated) && void 0 !== c2 && c2, parent: e3, name: p2, methodKind: l2, input: d2, output: f2, idempotency: m2, toString: () => `rpc ${e3.typeName}.${p2}`, getComments() {
        const t4 = [...this.parent.getComments().sourcePath, q.ServiceDescriptorProto_Method, this.parent.proto.method.indexOf(this.proto)];
        return v(e3.file.proto.sourceCodeInfo, t4);
      }, getFeatures() {
        var r4;
        return o3(e3.getFeatures(), null === (r4 = t3.options) || void 0 === r4 ? void 0 : r4.features);
      } };
    }
    function _(t3, e3, r3, i3, a2, u2) {
      var l2, m2, d2;
      (0, s2.assert)(t3.name, "invalid FieldDescriptorProto: missing name"), (0, s2.assert)(t3.number, "invalid FieldDescriptorProto: missing number"), (0, s2.assert)(t3.type, "invalid FieldDescriptorProto: missing type");
      const f2 = { proto: t3, deprecated: null !== (m2 = null === (l2 = t3.options) || void 0 === l2 ? void 0 : l2.deprecated) && void 0 !== m2 && m2, name: t3.name, number: t3.number, parent: r3, oneof: i3, optional: I(t3, e3.syntax), packedByDefault: C(t3, u2), packed: b(e3, r3, t3, u2), jsonName: t3.jsonName === (0, o2.fieldJsonName)(t3.name) ? void 0 : t3.jsonName, scalar: void 0, longType: void 0, message: void 0, enum: void 0, mapKey: void 0, mapValue: void 0, declarationString: R, toString() {
        return `field ${this.parent.typeName}.${this.name}`;
      }, getComments() {
        const t4 = [...this.parent.getComments().sourcePath, q.DescriptorProto_Field, this.parent.proto.field.indexOf(this.proto)];
        return v(e3.proto.sourceCodeInfo, t4);
      }, getFeatures() {
        var e4;
        return u2(r3.getFeatures(), null === (e4 = t3.options) || void 0 === e4 ? void 0 : e4.features);
      } }, p2 = t3.label === n2.FieldDescriptorProto_Label.REPEATED;
      switch (t3.type) {
        case n2.FieldDescriptorProto_Type.MESSAGE:
        case n2.FieldDescriptorProto_Type.GROUP: {
          (0, s2.assert)(t3.typeName, "invalid FieldDescriptorProto: missing type_name");
          const e4 = a2.mapEntries.get(B(t3.typeName));
          if (void 0 !== e4) return (0, s2.assert)(p2, "invalid FieldDescriptorProto: expected map entry to be repeated"), Object.assign(Object.assign(Object.assign({}, f2), { kind: "field", fieldKind: "map", repeated: false }), (function(t4) {
            var e5, r5;
            (0, s2.assert)(null === (e5 = t4.proto.options) || void 0 === e5 ? void 0 : e5.mapEntry, `invalid DescriptorProto: expected ${t4.toString()} to be a map entry`), (0, s2.assert)(2 === t4.fields.length, `invalid DescriptorProto: map entry ${t4.toString()} has ${t4.fields.length} fields`);
            const n3 = t4.fields.find((t5) => 1 === t5.proto.number);
            (0, s2.assert)(n3, `invalid DescriptorProto: map entry ${t4.toString()} is missing key field`);
            const i4 = n3.scalar;
            (0, s2.assert)(void 0 !== i4 && i4 !== c.ScalarType.BYTES && i4 !== c.ScalarType.FLOAT && i4 !== c.ScalarType.DOUBLE, `invalid DescriptorProto: map entry ${t4.toString()} has unexpected key type ${null !== (r5 = n3.proto.type) && void 0 !== r5 ? r5 : -1}`);
            const o3 = t4.fields.find((t5) => 2 === t5.proto.number);
            switch ((0, s2.assert)(o3, `invalid DescriptorProto: map entry ${t4.toString()} is missing value field`), o3.fieldKind) {
              case "scalar":
                return { mapKey: i4, mapValue: Object.assign(Object.assign({}, o3), { kind: "scalar" }) };
              case "message":
                return { mapKey: i4, mapValue: Object.assign(Object.assign({}, o3), { kind: "message" }) };
              case "enum":
                return { mapKey: i4, mapValue: Object.assign(Object.assign({}, o3), { kind: "enum" }) };
              default:
                throw new Error("invalid DescriptorProto: unsupported map entry value field");
            }
          })(e4));
          const r4 = a2.messages.get(B(t3.typeName));
          return (0, s2.assert)(void 0 !== r4, `invalid FieldDescriptorProto: type_name ${t3.typeName} not found`), Object.assign(Object.assign({}, f2), { kind: "field", fieldKind: "message", repeated: p2, message: r4 });
        }
        case n2.FieldDescriptorProto_Type.ENUM: {
          (0, s2.assert)(t3.typeName, "invalid FieldDescriptorProto: missing type_name");
          const e4 = a2.enums.get(B(t3.typeName));
          return (0, s2.assert)(void 0 !== e4, `invalid FieldDescriptorProto: type_name ${t3.typeName} not found`), Object.assign(Object.assign({}, f2), { kind: "field", fieldKind: "enum", getDefaultValue: P, repeated: p2, enum: e4 });
        }
        default: {
          const e4 = k[t3.type];
          return (0, s2.assert)(e4, `invalid FieldDescriptorProto: unknown type ${t3.type}`), Object.assign(Object.assign({}, f2), { kind: "field", fieldKind: "scalar", getDefaultValue: P, repeated: p2, scalar: e4, longType: (null === (d2 = t3.options) || void 0 === d2 ? void 0 : d2.jstype) == n2.FieldOptions_JSType.JS_STRING ? c.LongType.STRING : c.LongType.BIGINT });
        }
      }
    }
    function y(t3, e3, r3, n3, i3) {
      (0, s2.assert)(t3.extendee, "invalid FieldDescriptorProto: missing extendee");
      const o3 = _(t3, e3, null, void 0, n3, i3), a2 = n3.messages.get(B(t3.extendee));
      return (0, s2.assert)(a2, `invalid FieldDescriptorProto: extendee ${t3.extendee} not found`), Object.assign(Object.assign({}, o3), { kind: "extension", typeName: J(t3, r3, e3), parent: r3, file: e3, extendee: a2, toString() {
        return `extension ${this.typeName}`;
      }, getComments() {
        const r4 = this.parent ? [...this.parent.getComments().sourcePath, q.DescriptorProto_Extension, this.parent.proto.extension.indexOf(t3)] : [q.FileDescriptorProto_Extension, this.file.proto.extension.indexOf(t3)];
        return v(e3.proto.sourceCodeInfo, r4);
      }, getFeatures() {
        var n4;
        return i3((null != r3 ? r3 : e3).getFeatures(), null === (n4 = t3.options) || void 0 === n4 ? void 0 : n4.features);
      } });
    }
    function w(t3, e3) {
      let r3, s3;
      switch (t3) {
        case void 0:
        case "proto2":
          s3 = "proto2", r3 = n2.Edition.EDITION_PROTO2;
          break;
        case "proto3":
          s3 = "proto3", r3 = n2.Edition.EDITION_PROTO3;
          break;
        case "editions":
          switch (s3 = "editions", e3) {
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
              r3 = e3;
          }
          break;
        default:
          throw new Error(`invalid FileDescriptorProto: unsupported syntax: ${t3}`);
      }
      if ("editions" === t3 && e3 === n2.Edition.EDITION_UNKNOWN) throw new Error(`invalid FileDescriptorProto: syntax ${t3} cannot have edition ${String(e3)}`);
      return { syntax: s3, edition: r3 };
    }
    function S(t3, e3) {
      return t3.dependency.map((t4) => {
        const r3 = e3.files.find((e4) => e4.proto.name === t4);
        return (0, s2.assert)(r3), r3;
      });
    }
    function J(t3, e3, r3) {
      let n3;
      return (0, s2.assert)(t3.name, `invalid ${t3.getType().typeName}: missing name`), n3 = e3 ? `${e3.typeName}.${t3.name}` : void 0 !== r3.proto.package ? `${r3.proto.package}.${t3.name}` : `${t3.name}`, n3;
    }
    function B(t3) {
      return t3.startsWith(".") ? t3.substring(1) : t3;
    }
    function E(t3, e3) {
      var r3;
      const n3 = t3.oneofIndex;
      if (void 0 === n3) return;
      let i3;
      return true !== t3.proto3Optional && (i3 = e3[n3], (0, s2.assert)(i3, `invalid FieldDescriptorProto: oneof #${n3} for field #${null !== (r3 = t3.number) && void 0 !== r3 ? r3 : -1} not found`)), i3;
    }
    function I(t3, e3) {
      switch (e3) {
        case "proto2":
          return void 0 === t3.oneofIndex && t3.label === n2.FieldDescriptorProto_Label.OPTIONAL;
        case "proto3":
          return true === t3.proto3Optional;
        case "editions":
          return false;
      }
    }
    function C(t3, e3) {
      const { repeatedFieldEncoding: r3 } = e3();
      if (r3 != n2.FeatureSet_RepeatedFieldEncoding.PACKED) return false;
      switch (t3.type) {
        case n2.FieldDescriptorProto_Type.STRING:
        case n2.FieldDescriptorProto_Type.BYTES:
        case n2.FieldDescriptorProto_Type.GROUP:
        case n2.FieldDescriptorProto_Type.MESSAGE:
          return false;
        default:
          return true;
      }
    }
    function b(t3, e3, r3, s3) {
      var i3, o3, a2, u2, c2, l2;
      switch (r3.type) {
        case n2.FieldDescriptorProto_Type.STRING:
        case n2.FieldDescriptorProto_Type.BYTES:
        case n2.FieldDescriptorProto_Type.GROUP:
        case n2.FieldDescriptorProto_Type.MESSAGE:
          return false;
        default:
          switch (t3.edition) {
            case n2.Edition.EDITION_PROTO2:
              return null !== (o3 = null === (i3 = r3.options) || void 0 === i3 ? void 0 : i3.packed) && void 0 !== o3 && o3;
            case n2.Edition.EDITION_PROTO3:
              return null === (u2 = null === (a2 = r3.options) || void 0 === a2 ? void 0 : a2.packed) || void 0 === u2 || u2;
            default: {
              const { repeatedFieldEncoding: i4 } = s3(null !== (c2 = null == e3 ? void 0 : e3.getFeatures()) && void 0 !== c2 ? c2 : t3.getFeatures(), null === (l2 = r3.options) || void 0 === l2 ? void 0 : l2.features);
              return i4 == n2.FeatureSet_RepeatedFieldEncoding.PACKED;
            }
          }
      }
    }
    e2.createDescriptorSet = function(t3, e3) {
      var r3;
      const s3 = { files: [], enums: /* @__PURE__ */ new Map(), messages: /* @__PURE__ */ new Map(), services: /* @__PURE__ */ new Map(), extensions: /* @__PURE__ */ new Map(), mapEntries: /* @__PURE__ */ new Map() }, i3 = (0, l.isMessage)(t3, n2.FileDescriptorSet) ? t3.file : t3 instanceof Uint8Array ? n2.FileDescriptorSet.fromBinary(t3).file : t3, o3 = /* @__PURE__ */ new Map();
      for (const t4 of i3) {
        const n3 = null !== (r3 = t4.edition) && void 0 !== r3 ? r3 : w(t4.syntax, t4.edition).edition;
        let i4 = o3.get(n3);
        void 0 === i4 && (i4 = (0, u.createFeatureResolver)(n3, null == e3 ? void 0 : e3.featureSetDefaults, null == e3 ? void 0 : e3.serializationOptions), o3.set(n3, i4)), m(t4, s3, i4);
      }
      return s3;
    };
    const k = { [n2.FieldDescriptorProto_Type.DOUBLE]: c.ScalarType.DOUBLE, [n2.FieldDescriptorProto_Type.FLOAT]: c.ScalarType.FLOAT, [n2.FieldDescriptorProto_Type.INT64]: c.ScalarType.INT64, [n2.FieldDescriptorProto_Type.UINT64]: c.ScalarType.UINT64, [n2.FieldDescriptorProto_Type.INT32]: c.ScalarType.INT32, [n2.FieldDescriptorProto_Type.FIXED64]: c.ScalarType.FIXED64, [n2.FieldDescriptorProto_Type.FIXED32]: c.ScalarType.FIXED32, [n2.FieldDescriptorProto_Type.BOOL]: c.ScalarType.BOOL, [n2.FieldDescriptorProto_Type.STRING]: c.ScalarType.STRING, [n2.FieldDescriptorProto_Type.GROUP]: void 0, [n2.FieldDescriptorProto_Type.MESSAGE]: void 0, [n2.FieldDescriptorProto_Type.BYTES]: c.ScalarType.BYTES, [n2.FieldDescriptorProto_Type.UINT32]: c.ScalarType.UINT32, [n2.FieldDescriptorProto_Type.ENUM]: void 0, [n2.FieldDescriptorProto_Type.SFIXED32]: c.ScalarType.SFIXED32, [n2.FieldDescriptorProto_Type.SFIXED64]: c.ScalarType.SFIXED64, [n2.FieldDescriptorProto_Type.SINT32]: c.ScalarType.SINT32, [n2.FieldDescriptorProto_Type.SINT64]: c.ScalarType.SINT64 };
    function v(t3, e3) {
      if (!t3) return { leadingDetached: [], sourcePath: e3 };
      for (const r3 of t3.location) if (r3.path.length === e3.length && !r3.path.some((t4, r4) => e3[r4] !== t4)) return { leadingDetached: r3.leadingDetachedComments, leading: r3.leadingComments, trailing: r3.trailingComments, sourcePath: e3 };
      return { leadingDetached: [], sourcePath: e3 };
    }
    var q;
    function R() {
      var t3, e3, r3;
      const s3 = [];
      this.repeated && s3.push("repeated"), this.optional && s3.push("optional");
      let i3;
      switch ("proto2" == ("extension" === this.kind ? this.file : this.parent.file).syntax && this.proto.label === n2.FieldDescriptorProto_Label.REQUIRED && s3.push("required"), this.fieldKind) {
        case "scalar":
          i3 = c.ScalarType[this.scalar].toLowerCase();
          break;
        case "enum":
          i3 = this.enum.typeName;
          break;
        case "message":
          i3 = this.message.typeName;
          break;
        case "map": {
          const t4 = c.ScalarType[this.mapKey].toLowerCase();
          let e4;
          switch (this.mapValue.kind) {
            case "scalar":
              e4 = c.ScalarType[this.mapValue.scalar].toLowerCase();
              break;
            case "enum":
              e4 = this.mapValue.enum.typeName;
              break;
            case "message":
              e4 = this.mapValue.message.typeName;
          }
          i3 = `map<${t4}, ${e4}>`;
          break;
        }
      }
      s3.push(`${i3} ${this.name} = ${this.number}`);
      const o3 = [];
      void 0 !== (null === (t3 = this.proto.options) || void 0 === t3 ? void 0 : t3.packed) && o3.push(`packed = ${this.proto.options.packed.toString()}`);
      let a2 = this.proto.defaultValue;
      return void 0 !== a2 && (this.proto.type != n2.FieldDescriptorProto_Type.BYTES && this.proto.type != n2.FieldDescriptorProto_Type.STRING || (a2 = '"' + a2.replace('"', '\\"') + '"'), o3.push(`default = ${a2}`)), void 0 !== this.jsonName && o3.push(`json_name = "${this.jsonName}"`), void 0 !== (null === (e3 = this.proto.options) || void 0 === e3 ? void 0 : e3.jstype) && o3.push(`jstype = ${n2.FieldOptions_JSType[this.proto.options.jstype]}`), true === (null === (r3 = this.proto.options) || void 0 === r3 ? void 0 : r3.deprecated) && o3.push("deprecated = true"), o3.length > 0 && s3.push("[" + o3.join(", ") + "]"), s3.join(" ");
    }
    function P() {
      const t3 = this.proto.defaultValue;
      if (void 0 !== t3) switch (this.fieldKind) {
        case "enum":
          return (0, a.parseTextFormatEnumValue)(this.enum, t3);
        case "scalar":
          return (0, a.parseTextFormatScalarValue)(this.scalar, t3);
        default:
          return;
      }
    }
    !(function(t3) {
      t3[t3.FileDescriptorProto_Package = 2] = "FileDescriptorProto_Package", t3[t3.FileDescriptorProto_MessageType = 4] = "FileDescriptorProto_MessageType", t3[t3.FileDescriptorProto_EnumType = 5] = "FileDescriptorProto_EnumType", t3[t3.FileDescriptorProto_Service = 6] = "FileDescriptorProto_Service", t3[t3.FileDescriptorProto_Extension = 7] = "FileDescriptorProto_Extension", t3[t3.FileDescriptorProto_Syntax = 12] = "FileDescriptorProto_Syntax", t3[t3.DescriptorProto_Field = 2] = "DescriptorProto_Field", t3[t3.DescriptorProto_NestedType = 3] = "DescriptorProto_NestedType", t3[t3.DescriptorProto_EnumType = 4] = "DescriptorProto_EnumType", t3[t3.DescriptorProto_Extension = 6] = "DescriptorProto_Extension", t3[t3.DescriptorProto_OneofDecl = 8] = "DescriptorProto_OneofDecl", t3[t3.EnumDescriptorProto_Value = 2] = "EnumDescriptorProto_Value", t3[t3.ServiceDescriptorProto_Method = 2] = "ServiceDescriptorProto_Method";
    })(q || (q = {}));
  }
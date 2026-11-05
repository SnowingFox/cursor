// @recovered-by cursor-re
// artifact: app/extensions/cursor-local-agent-runtime/dist/main.js sha256:be87ea0ed3ac86375ab8e5f92c4261df0ccfc61ff24b07420f9c88a78ae2cfd0
// module: 51101 range:1660114..1684984
// basis: webpack-id confidence: C
// method: split
// run: ext-p0 2026-11-05T10:07:22.069Z
51101: (e, t, r) => {
    "use strict";
    Object.defineProperty(t, "__esModule", { value: true }), t.createDescriptorSet = void 0;
    const n = r(27374), o = r(43098), s = r(22422), i = r(75822), a = r(31663), l = r(69301), c = r(3408), u = r(62706);
    function d(e2, t2, r2) {
      var n2, s2;
      (0, o.assert)(e2.name, "invalid FileDescriptorProto: missing name");
      const i2 = Object.assign(Object.assign({ kind: "file", proto: e2, deprecated: null !== (s2 = null === (n2 = e2.options) || void 0 === n2 ? void 0 : n2.deprecated) && void 0 !== s2 && s2 }, b(e2.syntax, e2.edition)), { name: e2.name.replace(/\.proto/, ""), dependencies: _(e2, t2), enums: [], messages: [], extensions: [], services: [], toString() {
        return `file ${this.proto.name}`;
      }, getSyntaxComments() {
        return A(this.proto.sourceCodeInfo, [P.FileDescriptorProto_Syntax]);
      }, getPackageComments() {
        return A(this.proto.sourceCodeInfo, [P.FileDescriptorProto_Package]);
      }, getFeatures() {
        var t3;
        return r2(null === (t3 = e2.options) || void 0 === t3 ? void 0 : t3.features);
      } });
      t2.mapEntries.clear();
      for (const n3 of e2.enumType) m(n3, i2, void 0, t2, r2);
      for (const n3 of e2.messageType) f(n3, i2, void 0, t2, r2);
      for (const n3 of e2.service) g(n3, i2, t2, r2);
      p(i2, t2, r2);
      for (const e3 of t2.mapEntries.values()) h(e3, t2, r2);
      for (const e3 of i2.messages) h(e3, t2, r2), p(e3, t2, r2);
      t2.mapEntries.clear(), t2.files.push(i2);
    }
    function p(e2, t2, r2) {
      switch (e2.kind) {
        case "file":
          for (const n2 of e2.proto.extension) {
            const o2 = w(n2, e2, void 0, t2, r2);
            e2.extensions.push(o2), t2.extensions.set(o2.typeName, o2);
          }
          break;
        case "message":
          for (const n2 of e2.proto.extension) {
            const o2 = w(n2, e2.file, e2, t2, r2);
            e2.nestedExtensions.push(o2), t2.extensions.set(o2.typeName, o2);
          }
          for (const n2 of e2.nestedMessages) p(n2, t2, r2);
      }
    }
    function h(e2, t2, r2) {
      const n2 = e2.proto.oneofDecl.map((t3) => (function(e3, t4, r3) {
        return (0, o.assert)(e3.name, "invalid OneofDescriptorProto: missing name"), { kind: "oneof", proto: e3, deprecated: false, parent: t4, fields: [], name: e3.name, toString() {
          return `oneof ${t4.typeName}.${this.name}`;
        }, getComments() {
          const e4 = [...this.parent.getComments().sourcePath, P.DescriptorProto_OneofDecl, this.parent.proto.oneofDecl.indexOf(this.proto)];
          return A(t4.file.proto.sourceCodeInfo, e4);
        }, getFeatures() {
          var n3;
          return r3(t4.getFeatures(), null === (n3 = e3.options) || void 0 === n3 ? void 0 : n3.features);
        } };
      })(t3, e2, r2)), s2 = /* @__PURE__ */ new Set();
      for (const o2 of e2.proto.field) {
        const i2 = k(o2, n2), a2 = v(o2, e2.file, e2, i2, t2, r2);
        e2.fields.push(a2), void 0 === i2 ? e2.members.push(a2) : (i2.fields.push(a2), s2.has(i2) || (s2.add(i2), e2.members.push(i2)));
      }
      for (const t3 of n2.filter((e3) => s2.has(e3))) e2.oneofs.push(t3);
      for (const n3 of e2.nestedMessages) h(n3, t2, r2);
    }
    function m(e2, t2, r2, n2, s2) {
      var a2, l2, c2;
      (0, o.assert)(e2.name, "invalid EnumDescriptorProto: missing name");
      const u2 = { kind: "enum", proto: e2, deprecated: null !== (l2 = null === (a2 = e2.options) || void 0 === a2 ? void 0 : a2.deprecated) && void 0 !== l2 && l2, file: t2, parent: r2, name: e2.name, typeName: S(e2, r2, t2), values: [], sharedPrefix: (0, i.findEnumSharedPrefix)(e2.name, e2.value.map((e3) => {
        var t3;
        return null !== (t3 = e3.name) && void 0 !== t3 ? t3 : "";
      })), toString() {
        return `enum ${this.typeName}`;
      }, getComments() {
        const e3 = this.parent ? [...this.parent.getComments().sourcePath, P.DescriptorProto_EnumType, this.parent.proto.enumType.indexOf(this.proto)] : [P.FileDescriptorProto_EnumType, this.file.proto.enumType.indexOf(this.proto)];
        return A(t2.proto.sourceCodeInfo, e3);
      }, getFeatures() {
        var n3, o2;
        return s2(null !== (n3 = null == r2 ? void 0 : r2.getFeatures()) && void 0 !== n3 ? n3 : t2.getFeatures(), null === (o2 = e2.options) || void 0 === o2 ? void 0 : o2.features);
      } };
      n2.enums.set(u2.typeName, u2), e2.value.forEach((e3) => {
        var r3, n3;
        (0, o.assert)(e3.name, "invalid EnumValueDescriptorProto: missing name"), (0, o.assert)(void 0 !== e3.number, "invalid EnumValueDescriptorProto: missing number"), u2.values.push({ kind: "enum_value", proto: e3, deprecated: null !== (n3 = null === (r3 = e3.options) || void 0 === r3 ? void 0 : r3.deprecated) && void 0 !== n3 && n3, parent: u2, name: e3.name, number: e3.number, toString() {
          return `enum value ${u2.typeName}.${this.name}`;
        }, declarationString() {
          var e4;
          let t3 = `${this.name} = ${this.number}`;
          return true === (null === (e4 = this.proto.options) || void 0 === e4 ? void 0 : e4.deprecated) && (t3 += " [deprecated = true]"), t3;
        }, getComments() {
          const e4 = [...this.parent.getComments().sourcePath, P.EnumDescriptorProto_Value, this.parent.proto.value.indexOf(this.proto)];
          return A(t2.proto.sourceCodeInfo, e4);
        }, getFeatures() {
          var t3;
          return s2(u2.getFeatures(), null === (t3 = e3.options) || void 0 === t3 ? void 0 : t3.features);
        } });
      }), (null !== (c2 = null == r2 ? void 0 : r2.nestedEnums) && void 0 !== c2 ? c2 : t2.enums).push(u2);
    }
    function f(e2, t2, r2, n2, s2) {
      var i2, a2, l2, c2;
      (0, o.assert)(e2.name, "invalid DescriptorProto: missing name");
      const u2 = { kind: "message", proto: e2, deprecated: null !== (a2 = null === (i2 = e2.options) || void 0 === i2 ? void 0 : i2.deprecated) && void 0 !== a2 && a2, file: t2, parent: r2, name: e2.name, typeName: S(e2, r2, t2), fields: [], oneofs: [], members: [], nestedEnums: [], nestedMessages: [], nestedExtensions: [], toString() {
        return `message ${this.typeName}`;
      }, getComments() {
        const e3 = this.parent ? [...this.parent.getComments().sourcePath, P.DescriptorProto_NestedType, this.parent.proto.nestedType.indexOf(this.proto)] : [P.FileDescriptorProto_MessageType, this.file.proto.messageType.indexOf(this.proto)];
        return A(t2.proto.sourceCodeInfo, e3);
      }, getFeatures() {
        var n3, o2;
        return s2(null !== (n3 = null == r2 ? void 0 : r2.getFeatures()) && void 0 !== n3 ? n3 : t2.getFeatures(), null === (o2 = e2.options) || void 0 === o2 ? void 0 : o2.features);
      } };
      true === (null === (l2 = e2.options) || void 0 === l2 ? void 0 : l2.mapEntry) ? n2.mapEntries.set(u2.typeName, u2) : ((null !== (c2 = null == r2 ? void 0 : r2.nestedMessages) && void 0 !== c2 ? c2 : t2.messages).push(u2), n2.messages.set(u2.typeName, u2));
      for (const r3 of e2.enumType) m(r3, t2, u2, n2, s2);
      for (const r3 of e2.nestedType) f(r3, t2, u2, n2, s2);
    }
    function g(e2, t2, r2, n2) {
      var s2, i2;
      (0, o.assert)(e2.name, "invalid ServiceDescriptorProto: missing name");
      const a2 = { kind: "service", proto: e2, deprecated: null !== (i2 = null === (s2 = e2.options) || void 0 === s2 ? void 0 : s2.deprecated) && void 0 !== i2 && i2, file: t2, name: e2.name, typeName: S(e2, void 0, t2), methods: [], toString() {
        return `service ${this.typeName}`;
      }, getComments() {
        const e3 = [P.FileDescriptorProto_Service, this.file.proto.service.indexOf(this.proto)];
        return A(t2.proto.sourceCodeInfo, e3);
      }, getFeatures() {
        var r3;
        return n2(t2.getFeatures(), null === (r3 = e2.options) || void 0 === r3 ? void 0 : r3.features);
      } };
      t2.services.push(a2), r2.services.set(a2.typeName, a2);
      for (const t3 of e2.method) a2.methods.push(y(t3, a2, r2, n2));
    }
    function y(e2, t2, r2, i2) {
      var a2, l2, c2;
      let u2, d2;
      switch ((0, o.assert)(e2.name, "invalid MethodDescriptorProto: missing name"), (0, o.assert)(e2.inputType, "invalid MethodDescriptorProto: missing input_type"), (0, o.assert)(e2.outputType, "invalid MethodDescriptorProto: missing output_type"), u2 = true === e2.clientStreaming && true === e2.serverStreaming ? s.MethodKind.BiDiStreaming : true === e2.clientStreaming ? s.MethodKind.ClientStreaming : true === e2.serverStreaming ? s.MethodKind.ServerStreaming : s.MethodKind.Unary, null === (a2 = e2.options) || void 0 === a2 ? void 0 : a2.idempotencyLevel) {
        case n.MethodOptions_IdempotencyLevel.IDEMPOTENT:
          d2 = s.MethodIdempotency.Idempotent;
          break;
        case n.MethodOptions_IdempotencyLevel.NO_SIDE_EFFECTS:
          d2 = s.MethodIdempotency.NoSideEffects;
          break;
        case n.MethodOptions_IdempotencyLevel.IDEMPOTENCY_UNKNOWN:
        case void 0:
          d2 = void 0;
      }
      const p2 = r2.messages.get(x(e2.inputType)), h2 = r2.messages.get(x(e2.outputType));
      (0, o.assert)(p2, `invalid MethodDescriptorProto: input_type ${e2.inputType} not found`), (0, o.assert)(h2, `invalid MethodDescriptorProto: output_type ${e2.inputType} not found`);
      const m2 = e2.name;
      return { kind: "rpc", proto: e2, deprecated: null !== (c2 = null === (l2 = e2.options) || void 0 === l2 ? void 0 : l2.deprecated) && void 0 !== c2 && c2, parent: t2, name: m2, methodKind: u2, input: p2, output: h2, idempotency: d2, toString: () => `rpc ${t2.typeName}.${m2}`, getComments() {
        const e3 = [...this.parent.getComments().sourcePath, P.ServiceDescriptorProto_Method, this.parent.proto.method.indexOf(this.proto)];
        return A(t2.file.proto.sourceCodeInfo, e3);
      }, getFeatures() {
        var r3;
        return i2(t2.getFeatures(), null === (r3 = e2.options) || void 0 === r3 ? void 0 : r3.features);
      } };
    }
    function v(e2, t2, r2, s2, a2, l2) {
      var u2, d2, p2;
      (0, o.assert)(e2.name, "invalid FieldDescriptorProto: missing name"), (0, o.assert)(e2.number, "invalid FieldDescriptorProto: missing number"), (0, o.assert)(e2.type, "invalid FieldDescriptorProto: missing type");
      const h2 = { proto: e2, deprecated: null !== (d2 = null === (u2 = e2.options) || void 0 === u2 ? void 0 : u2.deprecated) && void 0 !== d2 && d2, name: e2.name, number: e2.number, parent: r2, oneof: s2, optional: E(e2, t2.syntax), packedByDefault: T(e2, l2), packed: C(t2, r2, e2, l2), jsonName: e2.jsonName === (0, i.fieldJsonName)(e2.name) ? void 0 : e2.jsonName, scalar: void 0, longType: void 0, message: void 0, enum: void 0, mapKey: void 0, mapValue: void 0, declarationString: M, toString() {
        return `field ${this.parent.typeName}.${this.name}`;
      }, getComments() {
        const e3 = [...this.parent.getComments().sourcePath, P.DescriptorProto_Field, this.parent.proto.field.indexOf(this.proto)];
        return A(t2.proto.sourceCodeInfo, e3);
      }, getFeatures() {
        var t3;
        return l2(r2.getFeatures(), null === (t3 = e2.options) || void 0 === t3 ? void 0 : t3.features);
      } }, m2 = e2.label === n.FieldDescriptorProto_Label.REPEATED;
      switch (e2.type) {
        case n.FieldDescriptorProto_Type.MESSAGE:
        case n.FieldDescriptorProto_Type.GROUP: {
          (0, o.assert)(e2.typeName, "invalid FieldDescriptorProto: missing type_name");
          const t3 = a2.mapEntries.get(x(e2.typeName));
          if (void 0 !== t3) return (0, o.assert)(m2, "invalid FieldDescriptorProto: expected map entry to be repeated"), Object.assign(Object.assign(Object.assign({}, h2), { kind: "field", fieldKind: "map", repeated: false }), (function(e3) {
            var t4, r4;
            (0, o.assert)(null === (t4 = e3.proto.options) || void 0 === t4 ? void 0 : t4.mapEntry, `invalid DescriptorProto: expected ${e3.toString()} to be a map entry`), (0, o.assert)(2 === e3.fields.length, `invalid DescriptorProto: map entry ${e3.toString()} has ${e3.fields.length} fields`);
            const n2 = e3.fields.find((e4) => 1 === e4.proto.number);
            (0, o.assert)(n2, `invalid DescriptorProto: map entry ${e3.toString()} is missing key field`);
            const s3 = n2.scalar;
            (0, o.assert)(void 0 !== s3 && s3 !== c.ScalarType.BYTES && s3 !== c.ScalarType.FLOAT && s3 !== c.ScalarType.DOUBLE, `invalid DescriptorProto: map entry ${e3.toString()} has unexpected key type ${null !== (r4 = n2.proto.type) && void 0 !== r4 ? r4 : -1}`);
            const i2 = e3.fields.find((e4) => 2 === e4.proto.number);
            switch ((0, o.assert)(i2, `invalid DescriptorProto: map entry ${e3.toString()} is missing value field`), i2.fieldKind) {
              case "scalar":
                return { mapKey: s3, mapValue: Object.assign(Object.assign({}, i2), { kind: "scalar" }) };
              case "message":
                return { mapKey: s3, mapValue: Object.assign(Object.assign({}, i2), { kind: "message" }) };
              case "enum":
                return { mapKey: s3, mapValue: Object.assign(Object.assign({}, i2), { kind: "enum" }) };
              default:
                throw new Error("invalid DescriptorProto: unsupported map entry value field");
            }
          })(t3));
          const r3 = a2.messages.get(x(e2.typeName));
          return (0, o.assert)(void 0 !== r3, `invalid FieldDescriptorProto: type_name ${e2.typeName} not found`), Object.assign(Object.assign({}, h2), { kind: "field", fieldKind: "message", repeated: m2, message: r3 });
        }
        case n.FieldDescriptorProto_Type.ENUM: {
          (0, o.assert)(e2.typeName, "invalid FieldDescriptorProto: missing type_name");
          const t3 = a2.enums.get(x(e2.typeName));
          return (0, o.assert)(void 0 !== t3, `invalid FieldDescriptorProto: type_name ${e2.typeName} not found`), Object.assign(Object.assign({}, h2), { kind: "field", fieldKind: "enum", getDefaultValue: R, repeated: m2, enum: t3 });
        }
        default: {
          const t3 = I[e2.type];
          return (0, o.assert)(t3, `invalid FieldDescriptorProto: unknown type ${e2.type}`), Object.assign(Object.assign({}, h2), { kind: "field", fieldKind: "scalar", getDefaultValue: R, repeated: m2, scalar: t3, longType: (null === (p2 = e2.options) || void 0 === p2 ? void 0 : p2.jstype) == n.FieldOptions_JSType.JS_STRING ? c.LongType.STRING : c.LongType.BIGINT });
        }
      }
    }
    function w(e2, t2, r2, n2, s2) {
      (0, o.assert)(e2.extendee, "invalid FieldDescriptorProto: missing extendee");
      const i2 = v(e2, t2, null, void 0, n2, s2), a2 = n2.messages.get(x(e2.extendee));
      return (0, o.assert)(a2, `invalid FieldDescriptorProto: extendee ${e2.extendee} not found`), Object.assign(Object.assign({}, i2), { kind: "extension", typeName: S(e2, r2, t2), parent: r2, file: t2, extendee: a2, toString() {
        return `extension ${this.typeName}`;
      }, getComments() {
        const r3 = this.parent ? [...this.parent.getComments().sourcePath, P.DescriptorProto_Extension, this.parent.proto.extension.indexOf(e2)] : [P.FileDescriptorProto_Extension, this.file.proto.extension.indexOf(e2)];
        return A(t2.proto.sourceCodeInfo, r3);
      }, getFeatures() {
        var n3;
        return s2((null != r2 ? r2 : t2).getFeatures(), null === (n3 = e2.options) || void 0 === n3 ? void 0 : n3.features);
      } });
    }
    function b(e2, t2) {
      let r2, o2;
      switch (e2) {
        case void 0:
        case "proto2":
          o2 = "proto2", r2 = n.Edition.EDITION_PROTO2;
          break;
        case "proto3":
          o2 = "proto3", r2 = n.Edition.EDITION_PROTO3;
          break;
        case "editions":
          switch (o2 = "editions", t2) {
            case void 0:
            case n.Edition.EDITION_1_TEST_ONLY:
            case n.Edition.EDITION_2_TEST_ONLY:
            case n.Edition.EDITION_99997_TEST_ONLY:
            case n.Edition.EDITION_99998_TEST_ONLY:
            case n.Edition.EDITION_99999_TEST_ONLY:
            case n.Edition.EDITION_UNKNOWN:
              r2 = n.Edition.EDITION_UNKNOWN;
              break;
            default:
              r2 = t2;
          }
          break;
        default:
          throw new Error(`invalid FileDescriptorProto: unsupported syntax: ${e2}`);
      }
      if ("editions" === e2 && t2 === n.Edition.EDITION_UNKNOWN) throw new Error(`invalid FileDescriptorProto: syntax ${e2} cannot have edition ${String(t2)}`);
      return { syntax: o2, edition: r2 };
    }
    function _(e2, t2) {
      return e2.dependency.map((e3) => {
        const r2 = t2.files.find((t3) => t3.proto.name === e3);
        return (0, o.assert)(r2), r2;
      });
    }
    function S(e2, t2, r2) {
      let n2;
      return (0, o.assert)(e2.name, `invalid ${e2.getType().typeName}: missing name`), n2 = t2 ? `${t2.typeName}.${e2.name}` : void 0 !== r2.proto.package ? `${r2.proto.package}.${e2.name}` : `${e2.name}`, n2;
    }
    function x(e2) {
      return e2.startsWith(".") ? e2.substring(1) : e2;
    }
    function k(e2, t2) {
      var r2;
      const n2 = e2.oneofIndex;
      if (void 0 === n2) return;
      let s2;
      return true !== e2.proto3Optional && (s2 = t2[n2], (0, o.assert)(s2, `invalid FieldDescriptorProto: oneof #${n2} for field #${null !== (r2 = e2.number) && void 0 !== r2 ? r2 : -1} not found`)), s2;
    }
    function E(e2, t2) {
      switch (t2) {
        case "proto2":
          return void 0 === e2.oneofIndex && e2.label === n.FieldDescriptorProto_Label.OPTIONAL;
        case "proto3":
          return true === e2.proto3Optional;
        case "editions":
          return false;
      }
    }
    function T(e2, t2) {
      const { repeatedFieldEncoding: r2 } = t2();
      if (r2 != n.FeatureSet_RepeatedFieldEncoding.PACKED) return false;
      switch (e2.type) {
        case n.FieldDescriptorProto_Type.STRING:
        case n.FieldDescriptorProto_Type.BYTES:
        case n.FieldDescriptorProto_Type.GROUP:
        case n.FieldDescriptorProto_Type.MESSAGE:
          return false;
        default:
          return true;
      }
    }
    function C(e2, t2, r2, o2) {
      var s2, i2, a2, l2, c2, u2;
      switch (r2.type) {
        case n.FieldDescriptorProto_Type.STRING:
        case n.FieldDescriptorProto_Type.BYTES:
        case n.FieldDescriptorProto_Type.GROUP:
        case n.FieldDescriptorProto_Type.MESSAGE:
          return false;
        default:
          switch (e2.edition) {
            case n.Edition.EDITION_PROTO2:
              return null !== (i2 = null === (s2 = r2.options) || void 0 === s2 ? void 0 : s2.packed) && void 0 !== i2 && i2;
            case n.Edition.EDITION_PROTO3:
              return null === (l2 = null === (a2 = r2.options) || void 0 === a2 ? void 0 : a2.packed) || void 0 === l2 || l2;
            default: {
              const { repeatedFieldEncoding: s3 } = o2(null !== (c2 = null == t2 ? void 0 : t2.getFeatures()) && void 0 !== c2 ? c2 : e2.getFeatures(), null === (u2 = r2.options) || void 0 === u2 ? void 0 : u2.features);
              return s3 == n.FeatureSet_RepeatedFieldEncoding.PACKED;
            }
          }
      }
    }
    t.createDescriptorSet = function(e2, t2) {
      var r2;
      const o2 = { files: [], enums: /* @__PURE__ */ new Map(), messages: /* @__PURE__ */ new Map(), services: /* @__PURE__ */ new Map(), extensions: /* @__PURE__ */ new Map(), mapEntries: /* @__PURE__ */ new Map() }, s2 = (0, u.isMessage)(e2, n.FileDescriptorSet) ? e2.file : e2 instanceof Uint8Array ? n.FileDescriptorSet.fromBinary(e2).file : e2, i2 = /* @__PURE__ */ new Map();
      for (const e3 of s2) {
        const n2 = null !== (r2 = e3.edition) && void 0 !== r2 ? r2 : b(e3.syntax, e3.edition).edition;
        let s3 = i2.get(n2);
        void 0 === s3 && (s3 = (0, l.createFeatureResolver)(n2, null == t2 ? void 0 : t2.featureSetDefaults, null == t2 ? void 0 : t2.serializationOptions), i2.set(n2, s3)), d(e3, o2, s3);
      }
      return o2;
    };
    const I = { [n.FieldDescriptorProto_Type.DOUBLE]: c.ScalarType.DOUBLE, [n.FieldDescriptorProto_Type.FLOAT]: c.ScalarType.FLOAT, [n.FieldDescriptorProto_Type.INT64]: c.ScalarType.INT64, [n.FieldDescriptorProto_Type.UINT64]: c.ScalarType.UINT64, [n.FieldDescriptorProto_Type.INT32]: c.ScalarType.INT32, [n.FieldDescriptorProto_Type.FIXED64]: c.ScalarType.FIXED64, [n.FieldDescriptorProto_Type.FIXED32]: c.ScalarType.FIXED32, [n.FieldDescriptorProto_Type.BOOL]: c.ScalarType.BOOL, [n.FieldDescriptorProto_Type.STRING]: c.ScalarType.STRING, [n.FieldDescriptorProto_Type.GROUP]: void 0, [n.FieldDescriptorProto_Type.MESSAGE]: void 0, [n.FieldDescriptorProto_Type.BYTES]: c.ScalarType.BYTES, [n.FieldDescriptorProto_Type.UINT32]: c.ScalarType.UINT32, [n.FieldDescriptorProto_Type.ENUM]: void 0, [n.FieldDescriptorProto_Type.SFIXED32]: c.ScalarType.SFIXED32, [n.FieldDescriptorProto_Type.SFIXED64]: c.ScalarType.SFIXED64, [n.FieldDescriptorProto_Type.SINT32]: c.ScalarType.SINT32, [n.FieldDescriptorProto_Type.SINT64]: c.ScalarType.SINT64 };
    function A(e2, t2) {
      if (!e2) return { leadingDetached: [], sourcePath: t2 };
      for (const r2 of e2.location) if (r2.path.length === t2.length && !r2.path.some((e3, r3) => t2[r3] !== e3)) return { leadingDetached: r2.leadingDetachedComments, leading: r2.leadingComments, trailing: r2.trailingComments, sourcePath: t2 };
      return { leadingDetached: [], sourcePath: t2 };
    }
    var P;
    function M() {
      var e2, t2, r2;
      const o2 = [];
      this.repeated && o2.push("repeated"), this.optional && o2.push("optional");
      let s2;
      switch ("proto2" == ("extension" === this.kind ? this.file : this.parent.file).syntax && this.proto.label === n.FieldDescriptorProto_Label.REQUIRED && o2.push("required"), this.fieldKind) {
        case "scalar":
          s2 = c.ScalarType[this.scalar].toLowerCase();
          break;
        case "enum":
          s2 = this.enum.typeName;
          break;
        case "message":
          s2 = this.message.typeName;
          break;
        case "map": {
          const e3 = c.ScalarType[this.mapKey].toLowerCase();
          let t3;
          switch (this.mapValue.kind) {
            case "scalar":
              t3 = c.ScalarType[this.mapValue.scalar].toLowerCase();
              break;
            case "enum":
              t3 = this.mapValue.enum.typeName;
              break;
            case "message":
              t3 = this.mapValue.message.typeName;
          }
          s2 = `map<${e3}, ${t3}>`;
          break;
        }
      }
      o2.push(`${s2} ${this.name} = ${this.number}`);
      const i2 = [];
      void 0 !== (null === (e2 = this.proto.options) || void 0 === e2 ? void 0 : e2.packed) && i2.push(`packed = ${this.proto.options.packed.toString()}`);
      let a2 = this.proto.defaultValue;
      return void 0 !== a2 && (this.proto.type != n.FieldDescriptorProto_Type.BYTES && this.proto.type != n.FieldDescriptorProto_Type.STRING || (a2 = '"' + a2.replace('"', '\\"') + '"'), i2.push(`default = ${a2}`)), void 0 !== this.jsonName && i2.push(`json_name = "${this.jsonName}"`), void 0 !== (null === (t2 = this.proto.options) || void 0 === t2 ? void 0 : t2.jstype) && i2.push(`jstype = ${n.FieldOptions_JSType[this.proto.options.jstype]}`), true === (null === (r2 = this.proto.options) || void 0 === r2 ? void 0 : r2.deprecated) && i2.push("deprecated = true"), i2.length > 0 && o2.push("[" + i2.join(", ") + "]"), o2.join(" ");
    }
    function R() {
      const e2 = this.proto.defaultValue;
      if (void 0 !== e2) switch (this.fieldKind) {
        case "enum":
          return (0, a.parseTextFormatEnumValue)(this.enum, e2);
        case "scalar":
          return (0, a.parseTextFormatScalarValue)(this.scalar, e2);
        default:
          return;
      }
    }
    !(function(e2) {
      e2[e2.FileDescriptorProto_Package = 2] = "FileDescriptorProto_Package", e2[e2.FileDescriptorProto_MessageType = 4] = "FileDescriptorProto_MessageType", e2[e2.FileDescriptorProto_EnumType = 5] = "FileDescriptorProto_EnumType", e2[e2.FileDescriptorProto_Service = 6] = "FileDescriptorProto_Service", e2[e2.FileDescriptorProto_Extension = 7] = "FileDescriptorProto_Extension", e2[e2.FileDescriptorProto_Syntax = 12] = "FileDescriptorProto_Syntax", e2[e2.DescriptorProto_Field = 2] = "DescriptorProto_Field", e2[e2.DescriptorProto_NestedType = 3] = "DescriptorProto_NestedType", e2[e2.DescriptorProto_EnumType = 4] = "DescriptorProto_EnumType", e2[e2.DescriptorProto_Extension = 6] = "DescriptorProto_Extension", e2[e2.DescriptorProto_OneofDecl = 8] = "DescriptorProto_OneofDecl", e2[e2.EnumDescriptorProto_Value = 2] = "EnumDescriptorProto_Value", e2[e2.ServiceDescriptorProto_Method = 2] = "ServiceDescriptorProto_Method";
    })(P || (P = {}));
  }
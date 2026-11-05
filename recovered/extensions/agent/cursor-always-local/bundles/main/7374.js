// @recovered-by cursor-re
// artifact: app/extensions/cursor-always-local/dist/main.js sha256:14fb2d0e360d81a024b4ec605f417e030e19b30b2df99bc45648aa227060534e
// module: 7374 range:4249866..4294657
// basis: webpack-id confidence: C
// method: split
// run: ext-agent 2026-11-05T10:20:08.356Z
7374: (t2, e2, r2) => {
    "use strict";
    Object.defineProperty(e2, "__esModule", { value: true }), e2.GeneratedCodeInfo_Annotation_Semantic = e2.GeneratedCodeInfo_Annotation = e2.GeneratedCodeInfo = e2.SourceCodeInfo_Location = e2.SourceCodeInfo = e2.FeatureSetDefaults_FeatureSetEditionDefault = e2.FeatureSetDefaults = e2.FeatureSet_JsonFormat = e2.FeatureSet_MessageEncoding = e2.FeatureSet_Utf8Validation = e2.FeatureSet_RepeatedFieldEncoding = e2.FeatureSet_EnumType = e2.FeatureSet_FieldPresence = e2.FeatureSet = e2.UninterpretedOption_NamePart = e2.UninterpretedOption = e2.MethodOptions_IdempotencyLevel = e2.MethodOptions = e2.ServiceOptions = e2.EnumValueOptions = e2.EnumOptions = e2.OneofOptions = e2.FieldOptions_FeatureSupport = e2.FieldOptions_EditionDefault = e2.FieldOptions_OptionTargetType = e2.FieldOptions_OptionRetention = e2.FieldOptions_JSType = e2.FieldOptions_CType = e2.FieldOptions = e2.MessageOptions = e2.FileOptions_OptimizeMode = e2.FileOptions = e2.MethodDescriptorProto = e2.ServiceDescriptorProto = e2.EnumValueDescriptorProto = e2.EnumDescriptorProto_EnumReservedRange = e2.EnumDescriptorProto = e2.OneofDescriptorProto = e2.FieldDescriptorProto_Label = e2.FieldDescriptorProto_Type = e2.FieldDescriptorProto = e2.ExtensionRangeOptions_Declaration = e2.ExtensionRangeOptions_VerificationState = e2.ExtensionRangeOptions = e2.DescriptorProto_ReservedRange = e2.DescriptorProto_ExtensionRange = e2.DescriptorProto = e2.FileDescriptorProto = e2.FileDescriptorSet = e2.Edition = void 0;
    const n2 = r2(3672), s2 = r2(4193);
    var i2, o2, a, u, c, l, m, d, f, p, h, g, A, _, y, w, S;
    !(function(t3) {
      t3[t3.EDITION_UNKNOWN = 0] = "EDITION_UNKNOWN", t3[t3.EDITION_LEGACY = 900] = "EDITION_LEGACY", t3[t3.EDITION_PROTO2 = 998] = "EDITION_PROTO2", t3[t3.EDITION_PROTO3 = 999] = "EDITION_PROTO3", t3[t3.EDITION_2023 = 1e3] = "EDITION_2023", t3[t3.EDITION_2024 = 1001] = "EDITION_2024", t3[t3.EDITION_1_TEST_ONLY = 1] = "EDITION_1_TEST_ONLY", t3[t3.EDITION_2_TEST_ONLY = 2] = "EDITION_2_TEST_ONLY", t3[t3.EDITION_99997_TEST_ONLY = 99997] = "EDITION_99997_TEST_ONLY", t3[t3.EDITION_99998_TEST_ONLY = 99998] = "EDITION_99998_TEST_ONLY", t3[t3.EDITION_99999_TEST_ONLY = 99999] = "EDITION_99999_TEST_ONLY", t3[t3.EDITION_MAX = 2147483647] = "EDITION_MAX";
    })(i2 || (e2.Edition = i2 = {})), n2.proto2.util.setEnumType(i2, "google.protobuf.Edition", [{ no: 0, name: "EDITION_UNKNOWN" }, { no: 900, name: "EDITION_LEGACY" }, { no: 998, name: "EDITION_PROTO2" }, { no: 999, name: "EDITION_PROTO3" }, { no: 1e3, name: "EDITION_2023" }, { no: 1001, name: "EDITION_2024" }, { no: 1, name: "EDITION_1_TEST_ONLY" }, { no: 2, name: "EDITION_2_TEST_ONLY" }, { no: 99997, name: "EDITION_99997_TEST_ONLY" }, { no: 99998, name: "EDITION_99998_TEST_ONLY" }, { no: 99999, name: "EDITION_99999_TEST_ONLY" }, { no: 2147483647, name: "EDITION_MAX" }]);
    class J extends s2.Message {
      constructor(t3) {
        super(), this.file = [], n2.proto2.util.initPartial(t3, this);
      }
      static fromBinary(t3, e3) {
        return new J().fromBinary(t3, e3);
      }
      static fromJson(t3, e3) {
        return new J().fromJson(t3, e3);
      }
      static fromJsonString(t3, e3) {
        return new J().fromJsonString(t3, e3);
      }
      static equals(t3, e3) {
        return n2.proto2.util.equals(J, t3, e3);
      }
    }
    e2.FileDescriptorSet = J, J.runtime = n2.proto2, J.typeName = "google.protobuf.FileDescriptorSet", J.fields = n2.proto2.util.newFieldList(() => [{ no: 1, name: "file", kind: "message", T: B, repeated: true }]);
    class B extends s2.Message {
      constructor(t3) {
        super(), this.dependency = [], this.publicDependency = [], this.weakDependency = [], this.messageType = [], this.enumType = [], this.service = [], this.extension = [], n2.proto2.util.initPartial(t3, this);
      }
      static fromBinary(t3, e3) {
        return new B().fromBinary(t3, e3);
      }
      static fromJson(t3, e3) {
        return new B().fromJson(t3, e3);
      }
      static fromJsonString(t3, e3) {
        return new B().fromJsonString(t3, e3);
      }
      static equals(t3, e3) {
        return n2.proto2.util.equals(B, t3, e3);
      }
    }
    e2.FileDescriptorProto = B, B.runtime = n2.proto2, B.typeName = "google.protobuf.FileDescriptorProto", B.fields = n2.proto2.util.newFieldList(() => [{ no: 1, name: "name", kind: "scalar", T: 9, opt: true }, { no: 2, name: "package", kind: "scalar", T: 9, opt: true }, { no: 3, name: "dependency", kind: "scalar", T: 9, repeated: true }, { no: 10, name: "public_dependency", kind: "scalar", T: 5, repeated: true }, { no: 11, name: "weak_dependency", kind: "scalar", T: 5, repeated: true }, { no: 4, name: "message_type", kind: "message", T: E, repeated: true }, { no: 5, name: "enum_type", kind: "message", T: R, repeated: true }, { no: 6, name: "service", kind: "message", T: x, repeated: true }, { no: 7, name: "extension", kind: "message", T: v, repeated: true }, { no: 8, name: "options", kind: "message", T: D, opt: true }, { no: 9, name: "source_code_info", kind: "message", T: j, opt: true }, { no: 12, name: "syntax", kind: "scalar", T: 9, opt: true }, { no: 14, name: "edition", kind: "enum", T: n2.proto2.getEnumType(i2), opt: true }]);
    class E extends s2.Message {
      constructor(t3) {
        super(), this.field = [], this.extension = [], this.nestedType = [], this.enumType = [], this.extensionRange = [], this.oneofDecl = [], this.reservedRange = [], this.reservedName = [], n2.proto2.util.initPartial(t3, this);
      }
      static fromBinary(t3, e3) {
        return new E().fromBinary(t3, e3);
      }
      static fromJson(t3, e3) {
        return new E().fromJson(t3, e3);
      }
      static fromJsonString(t3, e3) {
        return new E().fromJsonString(t3, e3);
      }
      static equals(t3, e3) {
        return n2.proto2.util.equals(E, t3, e3);
      }
    }
    e2.DescriptorProto = E, E.runtime = n2.proto2, E.typeName = "google.protobuf.DescriptorProto", E.fields = n2.proto2.util.newFieldList(() => [{ no: 1, name: "name", kind: "scalar", T: 9, opt: true }, { no: 2, name: "field", kind: "message", T: v, repeated: true }, { no: 6, name: "extension", kind: "message", T: v, repeated: true }, { no: 3, name: "nested_type", kind: "message", T: E, repeated: true }, { no: 4, name: "enum_type", kind: "message", T: R, repeated: true }, { no: 5, name: "extension_range", kind: "message", T: I, repeated: true }, { no: 8, name: "oneof_decl", kind: "message", T: q, repeated: true }, { no: 7, name: "options", kind: "message", T: U, opt: true }, { no: 9, name: "reserved_range", kind: "message", T: C, repeated: true }, { no: 10, name: "reserved_name", kind: "scalar", T: 9, repeated: true }]);
    class I extends s2.Message {
      constructor(t3) {
        super(), n2.proto2.util.initPartial(t3, this);
      }
      static fromBinary(t3, e3) {
        return new I().fromBinary(t3, e3);
      }
      static fromJson(t3, e3) {
        return new I().fromJson(t3, e3);
      }
      static fromJsonString(t3, e3) {
        return new I().fromJsonString(t3, e3);
      }
      static equals(t3, e3) {
        return n2.proto2.util.equals(I, t3, e3);
      }
    }
    e2.DescriptorProto_ExtensionRange = I, I.runtime = n2.proto2, I.typeName = "google.protobuf.DescriptorProto.ExtensionRange", I.fields = n2.proto2.util.newFieldList(() => [{ no: 1, name: "start", kind: "scalar", T: 5, opt: true }, { no: 2, name: "end", kind: "scalar", T: 5, opt: true }, { no: 3, name: "options", kind: "message", T: b, opt: true }]);
    class C extends s2.Message {
      constructor(t3) {
        super(), n2.proto2.util.initPartial(t3, this);
      }
      static fromBinary(t3, e3) {
        return new C().fromBinary(t3, e3);
      }
      static fromJson(t3, e3) {
        return new C().fromJson(t3, e3);
      }
      static fromJsonString(t3, e3) {
        return new C().fromJsonString(t3, e3);
      }
      static equals(t3, e3) {
        return n2.proto2.util.equals(C, t3, e3);
      }
    }
    e2.DescriptorProto_ReservedRange = C, C.runtime = n2.proto2, C.typeName = "google.protobuf.DescriptorProto.ReservedRange", C.fields = n2.proto2.util.newFieldList(() => [{ no: 1, name: "start", kind: "scalar", T: 5, opt: true }, { no: 2, name: "end", kind: "scalar", T: 5, opt: true }]);
    class b extends s2.Message {
      constructor(t3) {
        super(), this.uninterpretedOption = [], this.declaration = [], n2.proto2.util.initPartial(t3, this);
      }
      static fromBinary(t3, e3) {
        return new b().fromBinary(t3, e3);
      }
      static fromJson(t3, e3) {
        return new b().fromJson(t3, e3);
      }
      static fromJsonString(t3, e3) {
        return new b().fromJsonString(t3, e3);
      }
      static equals(t3, e3) {
        return n2.proto2.util.equals(b, t3, e3);
      }
    }
    e2.ExtensionRangeOptions = b, b.runtime = n2.proto2, b.typeName = "google.protobuf.ExtensionRangeOptions", b.fields = n2.proto2.util.newFieldList(() => [{ no: 999, name: "uninterpreted_option", kind: "message", T: K, repeated: true }, { no: 2, name: "declaration", kind: "message", T: k, repeated: true }, { no: 50, name: "features", kind: "message", T: z, opt: true }, { no: 3, name: "verification", kind: "enum", T: n2.proto2.getEnumType(o2), opt: true, default: o2.UNVERIFIED }]), (function(t3) {
      t3[t3.DECLARATION = 0] = "DECLARATION", t3[t3.UNVERIFIED = 1] = "UNVERIFIED";
    })(o2 || (e2.ExtensionRangeOptions_VerificationState = o2 = {})), n2.proto2.util.setEnumType(o2, "google.protobuf.ExtensionRangeOptions.VerificationState", [{ no: 0, name: "DECLARATION" }, { no: 1, name: "UNVERIFIED" }]);
    class k extends s2.Message {
      constructor(t3) {
        super(), n2.proto2.util.initPartial(t3, this);
      }
      static fromBinary(t3, e3) {
        return new k().fromBinary(t3, e3);
      }
      static fromJson(t3, e3) {
        return new k().fromJson(t3, e3);
      }
      static fromJsonString(t3, e3) {
        return new k().fromJsonString(t3, e3);
      }
      static equals(t3, e3) {
        return n2.proto2.util.equals(k, t3, e3);
      }
    }
    e2.ExtensionRangeOptions_Declaration = k, k.runtime = n2.proto2, k.typeName = "google.protobuf.ExtensionRangeOptions.Declaration", k.fields = n2.proto2.util.newFieldList(() => [{ no: 1, name: "number", kind: "scalar", T: 5, opt: true }, { no: 2, name: "full_name", kind: "scalar", T: 9, opt: true }, { no: 3, name: "type", kind: "scalar", T: 9, opt: true }, { no: 5, name: "reserved", kind: "scalar", T: 8, opt: true }, { no: 6, name: "repeated", kind: "scalar", T: 8, opt: true }]);
    class v extends s2.Message {
      constructor(t3) {
        super(), n2.proto2.util.initPartial(t3, this);
      }
      static fromBinary(t3, e3) {
        return new v().fromBinary(t3, e3);
      }
      static fromJson(t3, e3) {
        return new v().fromJson(t3, e3);
      }
      static fromJsonString(t3, e3) {
        return new v().fromJsonString(t3, e3);
      }
      static equals(t3, e3) {
        return n2.proto2.util.equals(v, t3, e3);
      }
    }
    e2.FieldDescriptorProto = v, v.runtime = n2.proto2, v.typeName = "google.protobuf.FieldDescriptorProto", v.fields = n2.proto2.util.newFieldList(() => [{ no: 1, name: "name", kind: "scalar", T: 9, opt: true }, { no: 3, name: "number", kind: "scalar", T: 5, opt: true }, { no: 4, name: "label", kind: "enum", T: n2.proto2.getEnumType(u), opt: true }, { no: 5, name: "type", kind: "enum", T: n2.proto2.getEnumType(a), opt: true }, { no: 6, name: "type_name", kind: "scalar", T: 9, opt: true }, { no: 2, name: "extendee", kind: "scalar", T: 9, opt: true }, { no: 7, name: "default_value", kind: "scalar", T: 9, opt: true }, { no: 9, name: "oneof_index", kind: "scalar", T: 5, opt: true }, { no: 10, name: "json_name", kind: "scalar", T: 9, opt: true }, { no: 8, name: "options", kind: "message", T: Q, opt: true }, { no: 17, name: "proto3_optional", kind: "scalar", T: 8, opt: true }]), (function(t3) {
      t3[t3.DOUBLE = 1] = "DOUBLE", t3[t3.FLOAT = 2] = "FLOAT", t3[t3.INT64 = 3] = "INT64", t3[t3.UINT64 = 4] = "UINT64", t3[t3.INT32 = 5] = "INT32", t3[t3.FIXED64 = 6] = "FIXED64", t3[t3.FIXED32 = 7] = "FIXED32", t3[t3.BOOL = 8] = "BOOL", t3[t3.STRING = 9] = "STRING", t3[t3.GROUP = 10] = "GROUP", t3[t3.MESSAGE = 11] = "MESSAGE", t3[t3.BYTES = 12] = "BYTES", t3[t3.UINT32 = 13] = "UINT32", t3[t3.ENUM = 14] = "ENUM", t3[t3.SFIXED32 = 15] = "SFIXED32", t3[t3.SFIXED64 = 16] = "SFIXED64", t3[t3.SINT32 = 17] = "SINT32", t3[t3.SINT64 = 18] = "SINT64";
    })(a || (e2.FieldDescriptorProto_Type = a = {})), n2.proto2.util.setEnumType(a, "google.protobuf.FieldDescriptorProto.Type", [{ no: 1, name: "TYPE_DOUBLE" }, { no: 2, name: "TYPE_FLOAT" }, { no: 3, name: "TYPE_INT64" }, { no: 4, name: "TYPE_UINT64" }, { no: 5, name: "TYPE_INT32" }, { no: 6, name: "TYPE_FIXED64" }, { no: 7, name: "TYPE_FIXED32" }, { no: 8, name: "TYPE_BOOL" }, { no: 9, name: "TYPE_STRING" }, { no: 10, name: "TYPE_GROUP" }, { no: 11, name: "TYPE_MESSAGE" }, { no: 12, name: "TYPE_BYTES" }, { no: 13, name: "TYPE_UINT32" }, { no: 14, name: "TYPE_ENUM" }, { no: 15, name: "TYPE_SFIXED32" }, { no: 16, name: "TYPE_SFIXED64" }, { no: 17, name: "TYPE_SINT32" }, { no: 18, name: "TYPE_SINT64" }]), (function(t3) {
      t3[t3.OPTIONAL = 1] = "OPTIONAL", t3[t3.REPEATED = 3] = "REPEATED", t3[t3.REQUIRED = 2] = "REQUIRED";
    })(u || (e2.FieldDescriptorProto_Label = u = {})), n2.proto2.util.setEnumType(u, "google.protobuf.FieldDescriptorProto.Label", [{ no: 1, name: "LABEL_OPTIONAL" }, { no: 3, name: "LABEL_REPEATED" }, { no: 2, name: "LABEL_REQUIRED" }]);
    class q extends s2.Message {
      constructor(t3) {
        super(), n2.proto2.util.initPartial(t3, this);
      }
      static fromBinary(t3, e3) {
        return new q().fromBinary(t3, e3);
      }
      static fromJson(t3, e3) {
        return new q().fromJson(t3, e3);
      }
      static fromJsonString(t3, e3) {
        return new q().fromJsonString(t3, e3);
      }
      static equals(t3, e3) {
        return n2.proto2.util.equals(q, t3, e3);
      }
    }
    e2.OneofDescriptorProto = q, q.runtime = n2.proto2, q.typeName = "google.protobuf.OneofDescriptorProto", q.fields = n2.proto2.util.newFieldList(() => [{ no: 1, name: "name", kind: "scalar", T: 9, opt: true }, { no: 2, name: "options", kind: "message", T: F, opt: true }]);
    class R extends s2.Message {
      constructor(t3) {
        super(), this.value = [], this.reservedRange = [], this.reservedName = [], n2.proto2.util.initPartial(t3, this);
      }
      static fromBinary(t3, e3) {
        return new R().fromBinary(t3, e3);
      }
      static fromJson(t3, e3) {
        return new R().fromJson(t3, e3);
      }
      static fromJsonString(t3, e3) {
        return new R().fromJsonString(t3, e3);
      }
      static equals(t3, e3) {
        return n2.proto2.util.equals(R, t3, e3);
      }
    }
    e2.EnumDescriptorProto = R, R.runtime = n2.proto2, R.typeName = "google.protobuf.EnumDescriptorProto", R.fields = n2.proto2.util.newFieldList(() => [{ no: 1, name: "name", kind: "scalar", T: 9, opt: true }, { no: 2, name: "value", kind: "message", T, repeated: true }, { no: 3, name: "options", kind: "message", T: L, opt: true }, { no: 4, name: "reserved_range", kind: "message", T: P, repeated: true }, { no: 5, name: "reserved_name", kind: "scalar", T: 9, repeated: true }]);
    class P extends s2.Message {
      constructor(t3) {
        super(), n2.proto2.util.initPartial(t3, this);
      }
      static fromBinary(t3, e3) {
        return new P().fromBinary(t3, e3);
      }
      static fromJson(t3, e3) {
        return new P().fromJson(t3, e3);
      }
      static fromJsonString(t3, e3) {
        return new P().fromJsonString(t3, e3);
      }
      static equals(t3, e3) {
        return n2.proto2.util.equals(P, t3, e3);
      }
    }
    e2.EnumDescriptorProto_EnumReservedRange = P, P.runtime = n2.proto2, P.typeName = "google.protobuf.EnumDescriptorProto.EnumReservedRange", P.fields = n2.proto2.util.newFieldList(() => [{ no: 1, name: "start", kind: "scalar", T: 5, opt: true }, { no: 2, name: "end", kind: "scalar", T: 5, opt: true }]);
    class T extends s2.Message {
      constructor(t3) {
        super(), n2.proto2.util.initPartial(t3, this);
      }
      static fromBinary(t3, e3) {
        return new T().fromBinary(t3, e3);
      }
      static fromJson(t3, e3) {
        return new T().fromJson(t3, e3);
      }
      static fromJsonString(t3, e3) {
        return new T().fromJsonString(t3, e3);
      }
      static equals(t3, e3) {
        return n2.proto2.util.equals(T, t3, e3);
      }
    }
    e2.EnumValueDescriptorProto = T, T.runtime = n2.proto2, T.typeName = "google.protobuf.EnumValueDescriptorProto", T.fields = n2.proto2.util.newFieldList(() => [{ no: 1, name: "name", kind: "scalar", T: 9, opt: true }, { no: 2, name: "number", kind: "scalar", T: 5, opt: true }, { no: 3, name: "options", kind: "message", T: $, opt: true }]);
    class x extends s2.Message {
      constructor(t3) {
        super(), this.method = [], n2.proto2.util.initPartial(t3, this);
      }
      static fromBinary(t3, e3) {
        return new x().fromBinary(t3, e3);
      }
      static fromJson(t3, e3) {
        return new x().fromJson(t3, e3);
      }
      static fromJsonString(t3, e3) {
        return new x().fromJsonString(t3, e3);
      }
      static equals(t3, e3) {
        return n2.proto2.util.equals(x, t3, e3);
      }
    }
    e2.ServiceDescriptorProto = x, x.runtime = n2.proto2, x.typeName = "google.protobuf.ServiceDescriptorProto", x.fields = n2.proto2.util.newFieldList(() => [{ no: 1, name: "name", kind: "scalar", T: 9, opt: true }, { no: 2, name: "method", kind: "message", T: N, repeated: true }, { no: 3, name: "options", kind: "message", T: G, opt: true }]);
    class N extends s2.Message {
      constructor(t3) {
        super(), n2.proto2.util.initPartial(t3, this);
      }
      static fromBinary(t3, e3) {
        return new N().fromBinary(t3, e3);
      }
      static fromJson(t3, e3) {
        return new N().fromJson(t3, e3);
      }
      static fromJsonString(t3, e3) {
        return new N().fromJsonString(t3, e3);
      }
      static equals(t3, e3) {
        return n2.proto2.util.equals(N, t3, e3);
      }
    }
    e2.MethodDescriptorProto = N, N.runtime = n2.proto2, N.typeName = "google.protobuf.MethodDescriptorProto", N.fields = n2.proto2.util.newFieldList(() => [{ no: 1, name: "name", kind: "scalar", T: 9, opt: true }, { no: 2, name: "input_type", kind: "scalar", T: 9, opt: true }, { no: 3, name: "output_type", kind: "scalar", T: 9, opt: true }, { no: 4, name: "options", kind: "message", T: H, opt: true }, { no: 5, name: "client_streaming", kind: "scalar", T: 8, opt: true, default: false }, { no: 6, name: "server_streaming", kind: "scalar", T: 8, opt: true, default: false }]);
    class D extends s2.Message {
      constructor(t3) {
        super(), this.uninterpretedOption = [], n2.proto2.util.initPartial(t3, this);
      }
      static fromBinary(t3, e3) {
        return new D().fromBinary(t3, e3);
      }
      static fromJson(t3, e3) {
        return new D().fromJson(t3, e3);
      }
      static fromJsonString(t3, e3) {
        return new D().fromJsonString(t3, e3);
      }
      static equals(t3, e3) {
        return n2.proto2.util.equals(D, t3, e3);
      }
    }
    e2.FileOptions = D, D.runtime = n2.proto2, D.typeName = "google.protobuf.FileOptions", D.fields = n2.proto2.util.newFieldList(() => [{ no: 1, name: "java_package", kind: "scalar", T: 9, opt: true }, { no: 8, name: "java_outer_classname", kind: "scalar", T: 9, opt: true }, { no: 10, name: "java_multiple_files", kind: "scalar", T: 8, opt: true, default: false }, { no: 20, name: "java_generate_equals_and_hash", kind: "scalar", T: 8, opt: true }, { no: 27, name: "java_string_check_utf8", kind: "scalar", T: 8, opt: true, default: false }, { no: 9, name: "optimize_for", kind: "enum", T: n2.proto2.getEnumType(c), opt: true, default: c.SPEED }, { no: 11, name: "go_package", kind: "scalar", T: 9, opt: true }, { no: 16, name: "cc_generic_services", kind: "scalar", T: 8, opt: true, default: false }, { no: 17, name: "java_generic_services", kind: "scalar", T: 8, opt: true, default: false }, { no: 18, name: "py_generic_services", kind: "scalar", T: 8, opt: true, default: false }, { no: 23, name: "deprecated", kind: "scalar", T: 8, opt: true, default: false }, { no: 31, name: "cc_enable_arenas", kind: "scalar", T: 8, opt: true, default: true }, { no: 36, name: "objc_class_prefix", kind: "scalar", T: 9, opt: true }, { no: 37, name: "csharp_namespace", kind: "scalar", T: 9, opt: true }, { no: 39, name: "swift_prefix", kind: "scalar", T: 9, opt: true }, { no: 40, name: "php_class_prefix", kind: "scalar", T: 9, opt: true }, { no: 41, name: "php_namespace", kind: "scalar", T: 9, opt: true }, { no: 44, name: "php_metadata_namespace", kind: "scalar", T: 9, opt: true }, { no: 45, name: "ruby_package", kind: "scalar", T: 9, opt: true }, { no: 50, name: "features", kind: "message", T: z, opt: true }, { no: 999, name: "uninterpreted_option", kind: "message", T: K, repeated: true }]), (function(t3) {
      t3[t3.SPEED = 1] = "SPEED", t3[t3.CODE_SIZE = 2] = "CODE_SIZE", t3[t3.LITE_RUNTIME = 3] = "LITE_RUNTIME";
    })(c || (e2.FileOptions_OptimizeMode = c = {})), n2.proto2.util.setEnumType(c, "google.protobuf.FileOptions.OptimizeMode", [{ no: 1, name: "SPEED" }, { no: 2, name: "CODE_SIZE" }, { no: 3, name: "LITE_RUNTIME" }]);
    class U extends s2.Message {
      constructor(t3) {
        super(), this.uninterpretedOption = [], n2.proto2.util.initPartial(t3, this);
      }
      static fromBinary(t3, e3) {
        return new U().fromBinary(t3, e3);
      }
      static fromJson(t3, e3) {
        return new U().fromJson(t3, e3);
      }
      static fromJsonString(t3, e3) {
        return new U().fromJsonString(t3, e3);
      }
      static equals(t3, e3) {
        return n2.proto2.util.equals(U, t3, e3);
      }
    }
    e2.MessageOptions = U, U.runtime = n2.proto2, U.typeName = "google.protobuf.MessageOptions", U.fields = n2.proto2.util.newFieldList(() => [{ no: 1, name: "message_set_wire_format", kind: "scalar", T: 8, opt: true, default: false }, { no: 2, name: "no_standard_descriptor_accessor", kind: "scalar", T: 8, opt: true, default: false }, { no: 3, name: "deprecated", kind: "scalar", T: 8, opt: true, default: false }, { no: 7, name: "map_entry", kind: "scalar", T: 8, opt: true }, { no: 11, name: "deprecated_legacy_json_field_conflicts", kind: "scalar", T: 8, opt: true }, { no: 12, name: "features", kind: "message", T: z, opt: true }, { no: 999, name: "uninterpreted_option", kind: "message", T: K, repeated: true }]);
    class Q extends s2.Message {
      constructor(t3) {
        super(), this.targets = [], this.editionDefaults = [], this.uninterpretedOption = [], n2.proto2.util.initPartial(t3, this);
      }
      static fromBinary(t3, e3) {
        return new Q().fromBinary(t3, e3);
      }
      static fromJson(t3, e3) {
        return new Q().fromJson(t3, e3);
      }
      static fromJsonString(t3, e3) {
        return new Q().fromJsonString(t3, e3);
      }
      static equals(t3, e3) {
        return n2.proto2.util.equals(Q, t3, e3);
      }
    }
    e2.FieldOptions = Q, Q.runtime = n2.proto2, Q.typeName = "google.protobuf.FieldOptions", Q.fields = n2.proto2.util.newFieldList(() => [{ no: 1, name: "ctype", kind: "enum", T: n2.proto2.getEnumType(l), opt: true, default: l.STRING }, { no: 2, name: "packed", kind: "scalar", T: 8, opt: true }, { no: 6, name: "jstype", kind: "enum", T: n2.proto2.getEnumType(m), opt: true, default: m.JS_NORMAL }, { no: 5, name: "lazy", kind: "scalar", T: 8, opt: true, default: false }, { no: 15, name: "unverified_lazy", kind: "scalar", T: 8, opt: true, default: false }, { no: 3, name: "deprecated", kind: "scalar", T: 8, opt: true, default: false }, { no: 10, name: "weak", kind: "scalar", T: 8, opt: true, default: false }, { no: 16, name: "debug_redact", kind: "scalar", T: 8, opt: true, default: false }, { no: 17, name: "retention", kind: "enum", T: n2.proto2.getEnumType(d), opt: true }, { no: 19, name: "targets", kind: "enum", T: n2.proto2.getEnumType(f), repeated: true }, { no: 20, name: "edition_defaults", kind: "message", T: M, repeated: true }, { no: 21, name: "features", kind: "message", T: z, opt: true }, { no: 22, name: "feature_support", kind: "message", T: O, opt: true }, { no: 999, name: "uninterpreted_option", kind: "message", T: K, repeated: true }]), (function(t3) {
      t3[t3.STRING = 0] = "STRING", t3[t3.CORD = 1] = "CORD", t3[t3.STRING_PIECE = 2] = "STRING_PIECE";
    })(l || (e2.FieldOptions_CType = l = {})), n2.proto2.util.setEnumType(l, "google.protobuf.FieldOptions.CType", [{ no: 0, name: "STRING" }, { no: 1, name: "CORD" }, { no: 2, name: "STRING_PIECE" }]), (function(t3) {
      t3[t3.JS_NORMAL = 0] = "JS_NORMAL", t3[t3.JS_STRING = 1] = "JS_STRING", t3[t3.JS_NUMBER = 2] = "JS_NUMBER";
    })(m || (e2.FieldOptions_JSType = m = {})), n2.proto2.util.setEnumType(m, "google.protobuf.FieldOptions.JSType", [{ no: 0, name: "JS_NORMAL" }, { no: 1, name: "JS_STRING" }, { no: 2, name: "JS_NUMBER" }]), (function(t3) {
      t3[t3.RETENTION_UNKNOWN = 0] = "RETENTION_UNKNOWN", t3[t3.RETENTION_RUNTIME = 1] = "RETENTION_RUNTIME", t3[t3.RETENTION_SOURCE = 2] = "RETENTION_SOURCE";
    })(d || (e2.FieldOptions_OptionRetention = d = {})), n2.proto2.util.setEnumType(d, "google.protobuf.FieldOptions.OptionRetention", [{ no: 0, name: "RETENTION_UNKNOWN" }, { no: 1, name: "RETENTION_RUNTIME" }, { no: 2, name: "RETENTION_SOURCE" }]), (function(t3) {
      t3[t3.TARGET_TYPE_UNKNOWN = 0] = "TARGET_TYPE_UNKNOWN", t3[t3.TARGET_TYPE_FILE = 1] = "TARGET_TYPE_FILE", t3[t3.TARGET_TYPE_EXTENSION_RANGE = 2] = "TARGET_TYPE_EXTENSION_RANGE", t3[t3.TARGET_TYPE_MESSAGE = 3] = "TARGET_TYPE_MESSAGE", t3[t3.TARGET_TYPE_FIELD = 4] = "TARGET_TYPE_FIELD", t3[t3.TARGET_TYPE_ONEOF = 5] = "TARGET_TYPE_ONEOF", t3[t3.TARGET_TYPE_ENUM = 6] = "TARGET_TYPE_ENUM", t3[t3.TARGET_TYPE_ENUM_ENTRY = 7] = "TARGET_TYPE_ENUM_ENTRY", t3[t3.TARGET_TYPE_SERVICE = 8] = "TARGET_TYPE_SERVICE", t3[t3.TARGET_TYPE_METHOD = 9] = "TARGET_TYPE_METHOD";
    })(f || (e2.FieldOptions_OptionTargetType = f = {})), n2.proto2.util.setEnumType(f, "google.protobuf.FieldOptions.OptionTargetType", [{ no: 0, name: "TARGET_TYPE_UNKNOWN" }, { no: 1, name: "TARGET_TYPE_FILE" }, { no: 2, name: "TARGET_TYPE_EXTENSION_RANGE" }, { no: 3, name: "TARGET_TYPE_MESSAGE" }, { no: 4, name: "TARGET_TYPE_FIELD" }, { no: 5, name: "TARGET_TYPE_ONEOF" }, { no: 6, name: "TARGET_TYPE_ENUM" }, { no: 7, name: "TARGET_TYPE_ENUM_ENTRY" }, { no: 8, name: "TARGET_TYPE_SERVICE" }, { no: 9, name: "TARGET_TYPE_METHOD" }]);
    class M extends s2.Message {
      constructor(t3) {
        super(), n2.proto2.util.initPartial(t3, this);
      }
      static fromBinary(t3, e3) {
        return new M().fromBinary(t3, e3);
      }
      static fromJson(t3, e3) {
        return new M().fromJson(t3, e3);
      }
      static fromJsonString(t3, e3) {
        return new M().fromJsonString(t3, e3);
      }
      static equals(t3, e3) {
        return n2.proto2.util.equals(M, t3, e3);
      }
    }
    e2.FieldOptions_EditionDefault = M, M.runtime = n2.proto2, M.typeName = "google.protobuf.FieldOptions.EditionDefault", M.fields = n2.proto2.util.newFieldList(() => [{ no: 3, name: "edition", kind: "enum", T: n2.proto2.getEnumType(i2), opt: true }, { no: 2, name: "value", kind: "scalar", T: 9, opt: true }]);
    class O extends s2.Message {
      constructor(t3) {
        super(), n2.proto2.util.initPartial(t3, this);
      }
      static fromBinary(t3, e3) {
        return new O().fromBinary(t3, e3);
      }
      static fromJson(t3, e3) {
        return new O().fromJson(t3, e3);
      }
      static fromJsonString(t3, e3) {
        return new O().fromJsonString(t3, e3);
      }
      static equals(t3, e3) {
        return n2.proto2.util.equals(O, t3, e3);
      }
    }
    e2.FieldOptions_FeatureSupport = O, O.runtime = n2.proto2, O.typeName = "google.protobuf.FieldOptions.FeatureSupport", O.fields = n2.proto2.util.newFieldList(() => [{ no: 1, name: "edition_introduced", kind: "enum", T: n2.proto2.getEnumType(i2), opt: true }, { no: 2, name: "edition_deprecated", kind: "enum", T: n2.proto2.getEnumType(i2), opt: true }, { no: 3, name: "deprecation_warning", kind: "scalar", T: 9, opt: true }, { no: 4, name: "edition_removed", kind: "enum", T: n2.proto2.getEnumType(i2), opt: true }]);
    class F extends s2.Message {
      constructor(t3) {
        super(), this.uninterpretedOption = [], n2.proto2.util.initPartial(t3, this);
      }
      static fromBinary(t3, e3) {
        return new F().fromBinary(t3, e3);
      }
      static fromJson(t3, e3) {
        return new F().fromJson(t3, e3);
      }
      static fromJsonString(t3, e3) {
        return new F().fromJsonString(t3, e3);
      }
      static equals(t3, e3) {
        return n2.proto2.util.equals(F, t3, e3);
      }
    }
    e2.OneofOptions = F, F.runtime = n2.proto2, F.typeName = "google.protobuf.OneofOptions", F.fields = n2.proto2.util.newFieldList(() => [{ no: 1, name: "features", kind: "message", T: z, opt: true }, { no: 999, name: "uninterpreted_option", kind: "message", T: K, repeated: true }]);
    class L extends s2.Message {
      constructor(t3) {
        super(), this.uninterpretedOption = [], n2.proto2.util.initPartial(t3, this);
      }
      static fromBinary(t3, e3) {
        return new L().fromBinary(t3, e3);
      }
      static fromJson(t3, e3) {
        return new L().fromJson(t3, e3);
      }
      static fromJsonString(t3, e3) {
        return new L().fromJsonString(t3, e3);
      }
      static equals(t3, e3) {
        return n2.proto2.util.equals(L, t3, e3);
      }
    }
    e2.EnumOptions = L, L.runtime = n2.proto2, L.typeName = "google.protobuf.EnumOptions", L.fields = n2.proto2.util.newFieldList(() => [{ no: 2, name: "allow_alias", kind: "scalar", T: 8, opt: true }, { no: 3, name: "deprecated", kind: "scalar", T: 8, opt: true, default: false }, { no: 6, name: "deprecated_legacy_json_field_conflicts", kind: "scalar", T: 8, opt: true }, { no: 7, name: "features", kind: "message", T: z, opt: true }, { no: 999, name: "uninterpreted_option", kind: "message", T: K, repeated: true }]);
    class $ extends s2.Message {
      constructor(t3) {
        super(), this.uninterpretedOption = [], n2.proto2.util.initPartial(t3, this);
      }
      static fromBinary(t3, e3) {
        return new $().fromBinary(t3, e3);
      }
      static fromJson(t3, e3) {
        return new $().fromJson(t3, e3);
      }
      static fromJsonString(t3, e3) {
        return new $().fromJsonString(t3, e3);
      }
      static equals(t3, e3) {
        return n2.proto2.util.equals($, t3, e3);
      }
    }
    e2.EnumValueOptions = $, $.runtime = n2.proto2, $.typeName = "google.protobuf.EnumValueOptions", $.fields = n2.proto2.util.newFieldList(() => [{ no: 1, name: "deprecated", kind: "scalar", T: 8, opt: true, default: false }, { no: 2, name: "features", kind: "message", T: z, opt: true }, { no: 3, name: "debug_redact", kind: "scalar", T: 8, opt: true, default: false }, { no: 4, name: "feature_support", kind: "message", T: O, opt: true }, { no: 999, name: "uninterpreted_option", kind: "message", T: K, repeated: true }]);
    class G extends s2.Message {
      constructor(t3) {
        super(), this.uninterpretedOption = [], n2.proto2.util.initPartial(t3, this);
      }
      static fromBinary(t3, e3) {
        return new G().fromBinary(t3, e3);
      }
      static fromJson(t3, e3) {
        return new G().fromJson(t3, e3);
      }
      static fromJsonString(t3, e3) {
        return new G().fromJsonString(t3, e3);
      }
      static equals(t3, e3) {
        return n2.proto2.util.equals(G, t3, e3);
      }
    }
    e2.ServiceOptions = G, G.runtime = n2.proto2, G.typeName = "google.protobuf.ServiceOptions", G.fields = n2.proto2.util.newFieldList(() => [{ no: 34, name: "features", kind: "message", T: z, opt: true }, { no: 33, name: "deprecated", kind: "scalar", T: 8, opt: true, default: false }, { no: 999, name: "uninterpreted_option", kind: "message", T: K, repeated: true }]);
    class H extends s2.Message {
      constructor(t3) {
        super(), this.uninterpretedOption = [], n2.proto2.util.initPartial(t3, this);
      }
      static fromBinary(t3, e3) {
        return new H().fromBinary(t3, e3);
      }
      static fromJson(t3, e3) {
        return new H().fromJson(t3, e3);
      }
      static fromJsonString(t3, e3) {
        return new H().fromJsonString(t3, e3);
      }
      static equals(t3, e3) {
        return n2.proto2.util.equals(H, t3, e3);
      }
    }
    e2.MethodOptions = H, H.runtime = n2.proto2, H.typeName = "google.protobuf.MethodOptions", H.fields = n2.proto2.util.newFieldList(() => [{ no: 33, name: "deprecated", kind: "scalar", T: 8, opt: true, default: false }, { no: 34, name: "idempotency_level", kind: "enum", T: n2.proto2.getEnumType(p), opt: true, default: p.IDEMPOTENCY_UNKNOWN }, { no: 35, name: "features", kind: "message", T: z, opt: true }, { no: 999, name: "uninterpreted_option", kind: "message", T: K, repeated: true }]), (function(t3) {
      t3[t3.IDEMPOTENCY_UNKNOWN = 0] = "IDEMPOTENCY_UNKNOWN", t3[t3.NO_SIDE_EFFECTS = 1] = "NO_SIDE_EFFECTS", t3[t3.IDEMPOTENT = 2] = "IDEMPOTENT";
    })(p || (e2.MethodOptions_IdempotencyLevel = p = {})), n2.proto2.util.setEnumType(p, "google.protobuf.MethodOptions.IdempotencyLevel", [{ no: 0, name: "IDEMPOTENCY_UNKNOWN" }, { no: 1, name: "NO_SIDE_EFFECTS" }, { no: 2, name: "IDEMPOTENT" }]);
    class K extends s2.Message {
      constructor(t3) {
        super(), this.name = [], n2.proto2.util.initPartial(t3, this);
      }
      static fromBinary(t3, e3) {
        return new K().fromBinary(t3, e3);
      }
      static fromJson(t3, e3) {
        return new K().fromJson(t3, e3);
      }
      static fromJsonString(t3, e3) {
        return new K().fromJsonString(t3, e3);
      }
      static equals(t3, e3) {
        return n2.proto2.util.equals(K, t3, e3);
      }
    }
    e2.UninterpretedOption = K, K.runtime = n2.proto2, K.typeName = "google.protobuf.UninterpretedOption", K.fields = n2.proto2.util.newFieldList(() => [{ no: 2, name: "name", kind: "message", T: V, repeated: true }, { no: 3, name: "identifier_value", kind: "scalar", T: 9, opt: true }, { no: 4, name: "positive_int_value", kind: "scalar", T: 4, opt: true }, { no: 5, name: "negative_int_value", kind: "scalar", T: 3, opt: true }, { no: 6, name: "double_value", kind: "scalar", T: 1, opt: true }, { no: 7, name: "string_value", kind: "scalar", T: 12, opt: true }, { no: 8, name: "aggregate_value", kind: "scalar", T: 9, opt: true }]);
    class V extends s2.Message {
      constructor(t3) {
        super(), n2.proto2.util.initPartial(t3, this);
      }
      static fromBinary(t3, e3) {
        return new V().fromBinary(t3, e3);
      }
      static fromJson(t3, e3) {
        return new V().fromJson(t3, e3);
      }
      static fromJsonString(t3, e3) {
        return new V().fromJsonString(t3, e3);
      }
      static equals(t3, e3) {
        return n2.proto2.util.equals(V, t3, e3);
      }
    }
    e2.UninterpretedOption_NamePart = V, V.runtime = n2.proto2, V.typeName = "google.protobuf.UninterpretedOption.NamePart", V.fields = n2.proto2.util.newFieldList(() => [{ no: 1, name: "name_part", kind: "scalar", T: 9, req: true }, { no: 2, name: "is_extension", kind: "scalar", T: 8, req: true }]);
    class z extends s2.Message {
      constructor(t3) {
        super(), n2.proto2.util.initPartial(t3, this);
      }
      static fromBinary(t3, e3) {
        return new z().fromBinary(t3, e3);
      }
      static fromJson(t3, e3) {
        return new z().fromJson(t3, e3);
      }
      static fromJsonString(t3, e3) {
        return new z().fromJsonString(t3, e3);
      }
      static equals(t3, e3) {
        return n2.proto2.util.equals(z, t3, e3);
      }
    }
    e2.FeatureSet = z, z.runtime = n2.proto2, z.typeName = "google.protobuf.FeatureSet", z.fields = n2.proto2.util.newFieldList(() => [{ no: 1, name: "field_presence", kind: "enum", T: n2.proto2.getEnumType(h), opt: true }, { no: 2, name: "enum_type", kind: "enum", T: n2.proto2.getEnumType(g), opt: true }, { no: 3, name: "repeated_field_encoding", kind: "enum", T: n2.proto2.getEnumType(A), opt: true }, { no: 4, name: "utf8_validation", kind: "enum", T: n2.proto2.getEnumType(_), opt: true }, { no: 5, name: "message_encoding", kind: "enum", T: n2.proto2.getEnumType(y), opt: true }, { no: 6, name: "json_format", kind: "enum", T: n2.proto2.getEnumType(w), opt: true }]), (function(t3) {
      t3[t3.FIELD_PRESENCE_UNKNOWN = 0] = "FIELD_PRESENCE_UNKNOWN", t3[t3.EXPLICIT = 1] = "EXPLICIT", t3[t3.IMPLICIT = 2] = "IMPLICIT", t3[t3.LEGACY_REQUIRED = 3] = "LEGACY_REQUIRED";
    })(h || (e2.FeatureSet_FieldPresence = h = {})), n2.proto2.util.setEnumType(h, "google.protobuf.FeatureSet.FieldPresence", [{ no: 0, name: "FIELD_PRESENCE_UNKNOWN" }, { no: 1, name: "EXPLICIT" }, { no: 2, name: "IMPLICIT" }, { no: 3, name: "LEGACY_REQUIRED" }]), (function(t3) {
      t3[t3.ENUM_TYPE_UNKNOWN = 0] = "ENUM_TYPE_UNKNOWN", t3[t3.OPEN = 1] = "OPEN", t3[t3.CLOSED = 2] = "CLOSED";
    })(g || (e2.FeatureSet_EnumType = g = {})), n2.proto2.util.setEnumType(g, "google.protobuf.FeatureSet.EnumType", [{ no: 0, name: "ENUM_TYPE_UNKNOWN" }, { no: 1, name: "OPEN" }, { no: 2, name: "CLOSED" }]), (function(t3) {
      t3[t3.REPEATED_FIELD_ENCODING_UNKNOWN = 0] = "REPEATED_FIELD_ENCODING_UNKNOWN", t3[t3.PACKED = 1] = "PACKED", t3[t3.EXPANDED = 2] = "EXPANDED";
    })(A || (e2.FeatureSet_RepeatedFieldEncoding = A = {})), n2.proto2.util.setEnumType(A, "google.protobuf.FeatureSet.RepeatedFieldEncoding", [{ no: 0, name: "REPEATED_FIELD_ENCODING_UNKNOWN" }, { no: 1, name: "PACKED" }, { no: 2, name: "EXPANDED" }]), (function(t3) {
      t3[t3.UTF8_VALIDATION_UNKNOWN = 0] = "UTF8_VALIDATION_UNKNOWN", t3[t3.VERIFY = 2] = "VERIFY", t3[t3.NONE = 3] = "NONE";
    })(_ || (e2.FeatureSet_Utf8Validation = _ = {})), n2.proto2.util.setEnumType(_, "google.protobuf.FeatureSet.Utf8Validation", [{ no: 0, name: "UTF8_VALIDATION_UNKNOWN" }, { no: 2, name: "VERIFY" }, { no: 3, name: "NONE" }]), (function(t3) {
      t3[t3.MESSAGE_ENCODING_UNKNOWN = 0] = "MESSAGE_ENCODING_UNKNOWN", t3[t3.LENGTH_PREFIXED = 1] = "LENGTH_PREFIXED", t3[t3.DELIMITED = 2] = "DELIMITED";
    })(y || (e2.FeatureSet_MessageEncoding = y = {})), n2.proto2.util.setEnumType(y, "google.protobuf.FeatureSet.MessageEncoding", [{ no: 0, name: "MESSAGE_ENCODING_UNKNOWN" }, { no: 1, name: "LENGTH_PREFIXED" }, { no: 2, name: "DELIMITED" }]), (function(t3) {
      t3[t3.JSON_FORMAT_UNKNOWN = 0] = "JSON_FORMAT_UNKNOWN", t3[t3.ALLOW = 1] = "ALLOW", t3[t3.LEGACY_BEST_EFFORT = 2] = "LEGACY_BEST_EFFORT";
    })(w || (e2.FeatureSet_JsonFormat = w = {})), n2.proto2.util.setEnumType(w, "google.protobuf.FeatureSet.JsonFormat", [{ no: 0, name: "JSON_FORMAT_UNKNOWN" }, { no: 1, name: "ALLOW" }, { no: 2, name: "LEGACY_BEST_EFFORT" }]);
    class W extends s2.Message {
      constructor(t3) {
        super(), this.defaults = [], n2.proto2.util.initPartial(t3, this);
      }
      static fromBinary(t3, e3) {
        return new W().fromBinary(t3, e3);
      }
      static fromJson(t3, e3) {
        return new W().fromJson(t3, e3);
      }
      static fromJsonString(t3, e3) {
        return new W().fromJsonString(t3, e3);
      }
      static equals(t3, e3) {
        return n2.proto2.util.equals(W, t3, e3);
      }
    }
    e2.FeatureSetDefaults = W, W.runtime = n2.proto2, W.typeName = "google.protobuf.FeatureSetDefaults", W.fields = n2.proto2.util.newFieldList(() => [{ no: 1, name: "defaults", kind: "message", T: Y, repeated: true }, { no: 4, name: "minimum_edition", kind: "enum", T: n2.proto2.getEnumType(i2), opt: true }, { no: 5, name: "maximum_edition", kind: "enum", T: n2.proto2.getEnumType(i2), opt: true }]);
    class Y extends s2.Message {
      constructor(t3) {
        super(), n2.proto2.util.initPartial(t3, this);
      }
      static fromBinary(t3, e3) {
        return new Y().fromBinary(t3, e3);
      }
      static fromJson(t3, e3) {
        return new Y().fromJson(t3, e3);
      }
      static fromJsonString(t3, e3) {
        return new Y().fromJsonString(t3, e3);
      }
      static equals(t3, e3) {
        return n2.proto2.util.equals(Y, t3, e3);
      }
    }
    e2.FeatureSetDefaults_FeatureSetEditionDefault = Y, Y.runtime = n2.proto2, Y.typeName = "google.protobuf.FeatureSetDefaults.FeatureSetEditionDefault", Y.fields = n2.proto2.util.newFieldList(() => [{ no: 3, name: "edition", kind: "enum", T: n2.proto2.getEnumType(i2), opt: true }, { no: 4, name: "overridable_features", kind: "message", T: z, opt: true }, { no: 5, name: "fixed_features", kind: "message", T: z, opt: true }]);
    class j extends s2.Message {
      constructor(t3) {
        super(), this.location = [], n2.proto2.util.initPartial(t3, this);
      }
      static fromBinary(t3, e3) {
        return new j().fromBinary(t3, e3);
      }
      static fromJson(t3, e3) {
        return new j().fromJson(t3, e3);
      }
      static fromJsonString(t3, e3) {
        return new j().fromJsonString(t3, e3);
      }
      static equals(t3, e3) {
        return n2.proto2.util.equals(j, t3, e3);
      }
    }
    e2.SourceCodeInfo = j, j.runtime = n2.proto2, j.typeName = "google.protobuf.SourceCodeInfo", j.fields = n2.proto2.util.newFieldList(() => [{ no: 1, name: "location", kind: "message", T: X, repeated: true }]);
    class X extends s2.Message {
      constructor(t3) {
        super(), this.path = [], this.span = [], this.leadingDetachedComments = [], n2.proto2.util.initPartial(t3, this);
      }
      static fromBinary(t3, e3) {
        return new X().fromBinary(t3, e3);
      }
      static fromJson(t3, e3) {
        return new X().fromJson(t3, e3);
      }
      static fromJsonString(t3, e3) {
        return new X().fromJsonString(t3, e3);
      }
      static equals(t3, e3) {
        return n2.proto2.util.equals(X, t3, e3);
      }
    }
    e2.SourceCodeInfo_Location = X, X.runtime = n2.proto2, X.typeName = "google.protobuf.SourceCodeInfo.Location", X.fields = n2.proto2.util.newFieldList(() => [{ no: 1, name: "path", kind: "scalar", T: 5, repeated: true, packed: true }, { no: 2, name: "span", kind: "scalar", T: 5, repeated: true, packed: true }, { no: 3, name: "leading_comments", kind: "scalar", T: 9, opt: true }, { no: 4, name: "trailing_comments", kind: "scalar", T: 9, opt: true }, { no: 6, name: "leading_detached_comments", kind: "scalar", T: 9, repeated: true }]);
    class Z extends s2.Message {
      constructor(t3) {
        super(), this.annotation = [], n2.proto2.util.initPartial(t3, this);
      }
      static fromBinary(t3, e3) {
        return new Z().fromBinary(t3, e3);
      }
      static fromJson(t3, e3) {
        return new Z().fromJson(t3, e3);
      }
      static fromJsonString(t3, e3) {
        return new Z().fromJsonString(t3, e3);
      }
      static equals(t3, e3) {
        return n2.proto2.util.equals(Z, t3, e3);
      }
    }
    e2.GeneratedCodeInfo = Z, Z.runtime = n2.proto2, Z.typeName = "google.protobuf.GeneratedCodeInfo", Z.fields = n2.proto2.util.newFieldList(() => [{ no: 1, name: "annotation", kind: "message", T: tt, repeated: true }]);
    class tt extends s2.Message {
      constructor(t3) {
        super(), this.path = [], n2.proto2.util.initPartial(t3, this);
      }
      static fromBinary(t3, e3) {
        return new tt().fromBinary(t3, e3);
      }
      static fromJson(t3, e3) {
        return new tt().fromJson(t3, e3);
      }
      static fromJsonString(t3, e3) {
        return new tt().fromJsonString(t3, e3);
      }
      static equals(t3, e3) {
        return n2.proto2.util.equals(tt, t3, e3);
      }
    }
    e2.GeneratedCodeInfo_Annotation = tt, tt.runtime = n2.proto2, tt.typeName = "google.protobuf.GeneratedCodeInfo.Annotation", tt.fields = n2.proto2.util.newFieldList(() => [{ no: 1, name: "path", kind: "scalar", T: 5, repeated: true, packed: true }, { no: 2, name: "source_file", kind: "scalar", T: 9, opt: true }, { no: 3, name: "begin", kind: "scalar", T: 5, opt: true }, { no: 4, name: "end", kind: "scalar", T: 5, opt: true }, { no: 5, name: "semantic", kind: "enum", T: n2.proto2.getEnumType(S), opt: true }]), (function(t3) {
      t3[t3.NONE = 0] = "NONE", t3[t3.SET = 1] = "SET", t3[t3.ALIAS = 2] = "ALIAS";
    })(S || (e2.GeneratedCodeInfo_Annotation_Semantic = S = {})), n2.proto2.util.setEnumType(S, "google.protobuf.GeneratedCodeInfo.Annotation.Semantic", [{ no: 0, name: "NONE" }, { no: 1, name: "SET" }, { no: 2, name: "ALIAS" }]);
  }
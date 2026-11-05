// @recovered-by cursor-re
// artifact: app/extensions/cursor-retrieval/dist/main.js sha256:50c717cc16d67dfb571db8461d6630caeb8e421ad0090d156086d1a3d53b1b2b
// module: 7374 range:861466..906265
// basis: webpack-id confidence: C
// method: split
// run: ext-agent 2026-11-05T10:20:08.356Z
7374: (e2, a2, n2) => {
    "use strict";
    Object.defineProperty(a2, "__esModule", { value: true }), a2.GeneratedCodeInfo_Annotation_Semantic = a2.GeneratedCodeInfo_Annotation = a2.GeneratedCodeInfo = a2.SourceCodeInfo_Location = a2.SourceCodeInfo = a2.FeatureSetDefaults_FeatureSetEditionDefault = a2.FeatureSetDefaults = a2.FeatureSet_JsonFormat = a2.FeatureSet_MessageEncoding = a2.FeatureSet_Utf8Validation = a2.FeatureSet_RepeatedFieldEncoding = a2.FeatureSet_EnumType = a2.FeatureSet_FieldPresence = a2.FeatureSet = a2.UninterpretedOption_NamePart = a2.UninterpretedOption = a2.MethodOptions_IdempotencyLevel = a2.MethodOptions = a2.ServiceOptions = a2.EnumValueOptions = a2.EnumOptions = a2.OneofOptions = a2.FieldOptions_FeatureSupport = a2.FieldOptions_EditionDefault = a2.FieldOptions_OptionTargetType = a2.FieldOptions_OptionRetention = a2.FieldOptions_JSType = a2.FieldOptions_CType = a2.FieldOptions = a2.MessageOptions = a2.FileOptions_OptimizeMode = a2.FileOptions = a2.MethodDescriptorProto = a2.ServiceDescriptorProto = a2.EnumValueDescriptorProto = a2.EnumDescriptorProto_EnumReservedRange = a2.EnumDescriptorProto = a2.OneofDescriptorProto = a2.FieldDescriptorProto_Label = a2.FieldDescriptorProto_Type = a2.FieldDescriptorProto = a2.ExtensionRangeOptions_Declaration = a2.ExtensionRangeOptions_VerificationState = a2.ExtensionRangeOptions = a2.DescriptorProto_ReservedRange = a2.DescriptorProto_ExtensionRange = a2.DescriptorProto = a2.FileDescriptorProto = a2.FileDescriptorSet = a2.Edition = void 0;
    const t2 = n2(3672), s2 = n2(4193);
    var o2, r2, i2, l, d, m, c, p, A, u, g, T, h, k, _, E, f;
    !(function(e3) {
      e3[e3.EDITION_UNKNOWN = 0] = "EDITION_UNKNOWN", e3[e3.EDITION_LEGACY = 900] = "EDITION_LEGACY", e3[e3.EDITION_PROTO2 = 998] = "EDITION_PROTO2", e3[e3.EDITION_PROTO3 = 999] = "EDITION_PROTO3", e3[e3.EDITION_2023 = 1e3] = "EDITION_2023", e3[e3.EDITION_2024 = 1001] = "EDITION_2024", e3[e3.EDITION_1_TEST_ONLY = 1] = "EDITION_1_TEST_ONLY", e3[e3.EDITION_2_TEST_ONLY = 2] = "EDITION_2_TEST_ONLY", e3[e3.EDITION_99997_TEST_ONLY = 99997] = "EDITION_99997_TEST_ONLY", e3[e3.EDITION_99998_TEST_ONLY = 99998] = "EDITION_99998_TEST_ONLY", e3[e3.EDITION_99999_TEST_ONLY = 99999] = "EDITION_99999_TEST_ONLY", e3[e3.EDITION_MAX = 2147483647] = "EDITION_MAX";
    })(o2 || (a2.Edition = o2 = {})), t2.proto2.util.setEnumType(o2, "google.protobuf.Edition", [{ no: 0, name: "EDITION_UNKNOWN" }, { no: 900, name: "EDITION_LEGACY" }, { no: 998, name: "EDITION_PROTO2" }, { no: 999, name: "EDITION_PROTO3" }, { no: 1e3, name: "EDITION_2023" }, { no: 1001, name: "EDITION_2024" }, { no: 1, name: "EDITION_1_TEST_ONLY" }, { no: 2, name: "EDITION_2_TEST_ONLY" }, { no: 99997, name: "EDITION_99997_TEST_ONLY" }, { no: 99998, name: "EDITION_99998_TEST_ONLY" }, { no: 99999, name: "EDITION_99999_TEST_ONLY" }, { no: 2147483647, name: "EDITION_MAX" }]);
    class C extends s2.Message {
      constructor(e3) {
        super(), this.file = [], t2.proto2.util.initPartial(e3, this);
      }
      static fromBinary(e3, a3) {
        return new C().fromBinary(e3, a3);
      }
      static fromJson(e3, a3) {
        return new C().fromJson(e3, a3);
      }
      static fromJsonString(e3, a3) {
        return new C().fromJsonString(e3, a3);
      }
      static equals(e3, a3) {
        return t2.proto2.util.equals(C, e3, a3);
      }
    }
    a2.FileDescriptorSet = C, C.runtime = t2.proto2, C.typeName = "google.protobuf.FileDescriptorSet", C.fields = t2.proto2.util.newFieldList(() => [{ no: 1, name: "file", kind: "message", T: I, repeated: true }]);
    class I extends s2.Message {
      constructor(e3) {
        super(), this.dependency = [], this.publicDependency = [], this.weakDependency = [], this.messageType = [], this.enumType = [], this.service = [], this.extension = [], t2.proto2.util.initPartial(e3, this);
      }
      static fromBinary(e3, a3) {
        return new I().fromBinary(e3, a3);
      }
      static fromJson(e3, a3) {
        return new I().fromJson(e3, a3);
      }
      static fromJsonString(e3, a3) {
        return new I().fromJsonString(e3, a3);
      }
      static equals(e3, a3) {
        return t2.proto2.util.equals(I, e3, a3);
      }
    }
    a2.FileDescriptorProto = I, I.runtime = t2.proto2, I.typeName = "google.protobuf.FileDescriptorProto", I.fields = t2.proto2.util.newFieldList(() => [{ no: 1, name: "name", kind: "scalar", T: 9, opt: true }, { no: 2, name: "package", kind: "scalar", T: 9, opt: true }, { no: 3, name: "dependency", kind: "scalar", T: 9, repeated: true }, { no: 10, name: "public_dependency", kind: "scalar", T: 5, repeated: true }, { no: 11, name: "weak_dependency", kind: "scalar", T: 5, repeated: true }, { no: 4, name: "message_type", kind: "message", T: v, repeated: true }, { no: 5, name: "enum_type", kind: "message", T: b, repeated: true }, { no: 6, name: "service", kind: "message", T: M, repeated: true }, { no: 7, name: "extension", kind: "message", T: B, repeated: true }, { no: 8, name: "options", kind: "message", T: U, opt: true }, { no: 9, name: "source_code_info", kind: "message", T: X, opt: true }, { no: 12, name: "syntax", kind: "scalar", T: 9, opt: true }, { no: 14, name: "edition", kind: "enum", T: t2.proto2.getEnumType(o2), opt: true }]);
    class v extends s2.Message {
      constructor(e3) {
        super(), this.field = [], this.extension = [], this.nestedType = [], this.enumType = [], this.extensionRange = [], this.oneofDecl = [], this.reservedRange = [], this.reservedName = [], t2.proto2.util.initPartial(e3, this);
      }
      static fromBinary(e3, a3) {
        return new v().fromBinary(e3, a3);
      }
      static fromJson(e3, a3) {
        return new v().fromJson(e3, a3);
      }
      static fromJsonString(e3, a3) {
        return new v().fromJsonString(e3, a3);
      }
      static equals(e3, a3) {
        return t2.proto2.util.equals(v, e3, a3);
      }
    }
    a2.DescriptorProto = v, v.runtime = t2.proto2, v.typeName = "google.protobuf.DescriptorProto", v.fields = t2.proto2.util.newFieldList(() => [{ no: 1, name: "name", kind: "scalar", T: 9, opt: true }, { no: 2, name: "field", kind: "message", T: B, repeated: true }, { no: 6, name: "extension", kind: "message", T: B, repeated: true }, { no: 3, name: "nested_type", kind: "message", T: v, repeated: true }, { no: 4, name: "enum_type", kind: "message", T: b, repeated: true }, { no: 5, name: "extension_range", kind: "message", T: y, repeated: true }, { no: 8, name: "oneof_decl", kind: "message", T: w, repeated: true }, { no: 7, name: "options", kind: "message", T: F, opt: true }, { no: 9, name: "reserved_range", kind: "message", T: S, repeated: true }, { no: 10, name: "reserved_name", kind: "scalar", T: 9, repeated: true }]);
    class y extends s2.Message {
      constructor(e3) {
        super(), t2.proto2.util.initPartial(e3, this);
      }
      static fromBinary(e3, a3) {
        return new y().fromBinary(e3, a3);
      }
      static fromJson(e3, a3) {
        return new y().fromJson(e3, a3);
      }
      static fromJsonString(e3, a3) {
        return new y().fromJsonString(e3, a3);
      }
      static equals(e3, a3) {
        return t2.proto2.util.equals(y, e3, a3);
      }
    }
    a2.DescriptorProto_ExtensionRange = y, y.runtime = t2.proto2, y.typeName = "google.protobuf.DescriptorProto.ExtensionRange", y.fields = t2.proto2.util.newFieldList(() => [{ no: 1, name: "start", kind: "scalar", T: 5, opt: true }, { no: 2, name: "end", kind: "scalar", T: 5, opt: true }, { no: 3, name: "options", kind: "message", T: R, opt: true }]);
    class S extends s2.Message {
      constructor(e3) {
        super(), t2.proto2.util.initPartial(e3, this);
      }
      static fromBinary(e3, a3) {
        return new S().fromBinary(e3, a3);
      }
      static fromJson(e3, a3) {
        return new S().fromJson(e3, a3);
      }
      static fromJsonString(e3, a3) {
        return new S().fromJsonString(e3, a3);
      }
      static equals(e3, a3) {
        return t2.proto2.util.equals(S, e3, a3);
      }
    }
    a2.DescriptorProto_ReservedRange = S, S.runtime = t2.proto2, S.typeName = "google.protobuf.DescriptorProto.ReservedRange", S.fields = t2.proto2.util.newFieldList(() => [{ no: 1, name: "start", kind: "scalar", T: 5, opt: true }, { no: 2, name: "end", kind: "scalar", T: 5, opt: true }]);
    class R extends s2.Message {
      constructor(e3) {
        super(), this.uninterpretedOption = [], this.declaration = [], t2.proto2.util.initPartial(e3, this);
      }
      static fromBinary(e3, a3) {
        return new R().fromBinary(e3, a3);
      }
      static fromJson(e3, a3) {
        return new R().fromJson(e3, a3);
      }
      static fromJsonString(e3, a3) {
        return new R().fromJsonString(e3, a3);
      }
      static equals(e3, a3) {
        return t2.proto2.util.equals(R, e3, a3);
      }
    }
    a2.ExtensionRangeOptions = R, R.runtime = t2.proto2, R.typeName = "google.protobuf.ExtensionRangeOptions", R.fields = t2.proto2.util.newFieldList(() => [{ no: 999, name: "uninterpreted_option", kind: "message", T: J, repeated: true }, { no: 2, name: "declaration", kind: "message", T: N, repeated: true }, { no: 50, name: "features", kind: "message", T: K, opt: true }, { no: 3, name: "verification", kind: "enum", T: t2.proto2.getEnumType(r2), opt: true, default: r2.UNVERIFIED }]), (function(e3) {
      e3[e3.DECLARATION = 0] = "DECLARATION", e3[e3.UNVERIFIED = 1] = "UNVERIFIED";
    })(r2 || (a2.ExtensionRangeOptions_VerificationState = r2 = {})), t2.proto2.util.setEnumType(r2, "google.protobuf.ExtensionRangeOptions.VerificationState", [{ no: 0, name: "DECLARATION" }, { no: 1, name: "UNVERIFIED" }]);
    class N extends s2.Message {
      constructor(e3) {
        super(), t2.proto2.util.initPartial(e3, this);
      }
      static fromBinary(e3, a3) {
        return new N().fromBinary(e3, a3);
      }
      static fromJson(e3, a3) {
        return new N().fromJson(e3, a3);
      }
      static fromJsonString(e3, a3) {
        return new N().fromJsonString(e3, a3);
      }
      static equals(e3, a3) {
        return t2.proto2.util.equals(N, e3, a3);
      }
    }
    a2.ExtensionRangeOptions_Declaration = N, N.runtime = t2.proto2, N.typeName = "google.protobuf.ExtensionRangeOptions.Declaration", N.fields = t2.proto2.util.newFieldList(() => [{ no: 1, name: "number", kind: "scalar", T: 5, opt: true }, { no: 2, name: "full_name", kind: "scalar", T: 9, opt: true }, { no: 3, name: "type", kind: "scalar", T: 9, opt: true }, { no: 5, name: "reserved", kind: "scalar", T: 8, opt: true }, { no: 6, name: "repeated", kind: "scalar", T: 8, opt: true }]);
    class B extends s2.Message {
      constructor(e3) {
        super(), t2.proto2.util.initPartial(e3, this);
      }
      static fromBinary(e3, a3) {
        return new B().fromBinary(e3, a3);
      }
      static fromJson(e3, a3) {
        return new B().fromJson(e3, a3);
      }
      static fromJsonString(e3, a3) {
        return new B().fromJsonString(e3, a3);
      }
      static equals(e3, a3) {
        return t2.proto2.util.equals(B, e3, a3);
      }
    }
    a2.FieldDescriptorProto = B, B.runtime = t2.proto2, B.typeName = "google.protobuf.FieldDescriptorProto", B.fields = t2.proto2.util.newFieldList(() => [{ no: 1, name: "name", kind: "scalar", T: 9, opt: true }, { no: 3, name: "number", kind: "scalar", T: 5, opt: true }, { no: 4, name: "label", kind: "enum", T: t2.proto2.getEnumType(l), opt: true }, { no: 5, name: "type", kind: "enum", T: t2.proto2.getEnumType(i2), opt: true }, { no: 6, name: "type_name", kind: "scalar", T: 9, opt: true }, { no: 2, name: "extendee", kind: "scalar", T: 9, opt: true }, { no: 7, name: "default_value", kind: "scalar", T: 9, opt: true }, { no: 9, name: "oneof_index", kind: "scalar", T: 5, opt: true }, { no: 10, name: "json_name", kind: "scalar", T: 9, opt: true }, { no: 8, name: "options", kind: "message", T: P, opt: true }, { no: 17, name: "proto3_optional", kind: "scalar", T: 8, opt: true }]), (function(e3) {
      e3[e3.DOUBLE = 1] = "DOUBLE", e3[e3.FLOAT = 2] = "FLOAT", e3[e3.INT64 = 3] = "INT64", e3[e3.UINT64 = 4] = "UINT64", e3[e3.INT32 = 5] = "INT32", e3[e3.FIXED64 = 6] = "FIXED64", e3[e3.FIXED32 = 7] = "FIXED32", e3[e3.BOOL = 8] = "BOOL", e3[e3.STRING = 9] = "STRING", e3[e3.GROUP = 10] = "GROUP", e3[e3.MESSAGE = 11] = "MESSAGE", e3[e3.BYTES = 12] = "BYTES", e3[e3.UINT32 = 13] = "UINT32", e3[e3.ENUM = 14] = "ENUM", e3[e3.SFIXED32 = 15] = "SFIXED32", e3[e3.SFIXED64 = 16] = "SFIXED64", e3[e3.SINT32 = 17] = "SINT32", e3[e3.SINT64 = 18] = "SINT64";
    })(i2 || (a2.FieldDescriptorProto_Type = i2 = {})), t2.proto2.util.setEnumType(i2, "google.protobuf.FieldDescriptorProto.Type", [{ no: 1, name: "TYPE_DOUBLE" }, { no: 2, name: "TYPE_FLOAT" }, { no: 3, name: "TYPE_INT64" }, { no: 4, name: "TYPE_UINT64" }, { no: 5, name: "TYPE_INT32" }, { no: 6, name: "TYPE_FIXED64" }, { no: 7, name: "TYPE_FIXED32" }, { no: 8, name: "TYPE_BOOL" }, { no: 9, name: "TYPE_STRING" }, { no: 10, name: "TYPE_GROUP" }, { no: 11, name: "TYPE_MESSAGE" }, { no: 12, name: "TYPE_BYTES" }, { no: 13, name: "TYPE_UINT32" }, { no: 14, name: "TYPE_ENUM" }, { no: 15, name: "TYPE_SFIXED32" }, { no: 16, name: "TYPE_SFIXED64" }, { no: 17, name: "TYPE_SINT32" }, { no: 18, name: "TYPE_SINT64" }]), (function(e3) {
      e3[e3.OPTIONAL = 1] = "OPTIONAL", e3[e3.REPEATED = 3] = "REPEATED", e3[e3.REQUIRED = 2] = "REQUIRED";
    })(l || (a2.FieldDescriptorProto_Label = l = {})), t2.proto2.util.setEnumType(l, "google.protobuf.FieldDescriptorProto.Label", [{ no: 1, name: "LABEL_OPTIONAL" }, { no: 3, name: "LABEL_REPEATED" }, { no: 2, name: "LABEL_REQUIRED" }]);
    class w extends s2.Message {
      constructor(e3) {
        super(), t2.proto2.util.initPartial(e3, this);
      }
      static fromBinary(e3, a3) {
        return new w().fromBinary(e3, a3);
      }
      static fromJson(e3, a3) {
        return new w().fromJson(e3, a3);
      }
      static fromJsonString(e3, a3) {
        return new w().fromJsonString(e3, a3);
      }
      static equals(e3, a3) {
        return t2.proto2.util.equals(w, e3, a3);
      }
    }
    a2.OneofDescriptorProto = w, w.runtime = t2.proto2, w.typeName = "google.protobuf.OneofDescriptorProto", w.fields = t2.proto2.util.newFieldList(() => [{ no: 1, name: "name", kind: "scalar", T: 9, opt: true }, { no: 2, name: "options", kind: "message", T: x, opt: true }]);
    class b extends s2.Message {
      constructor(e3) {
        super(), this.value = [], this.reservedRange = [], this.reservedName = [], t2.proto2.util.initPartial(e3, this);
      }
      static fromBinary(e3, a3) {
        return new b().fromBinary(e3, a3);
      }
      static fromJson(e3, a3) {
        return new b().fromJson(e3, a3);
      }
      static fromJsonString(e3, a3) {
        return new b().fromJsonString(e3, a3);
      }
      static equals(e3, a3) {
        return t2.proto2.util.equals(b, e3, a3);
      }
    }
    a2.EnumDescriptorProto = b, b.runtime = t2.proto2, b.typeName = "google.protobuf.EnumDescriptorProto", b.fields = t2.proto2.util.newFieldList(() => [{ no: 1, name: "name", kind: "scalar", T: 9, opt: true }, { no: 2, name: "value", kind: "message", T: D, repeated: true }, { no: 3, name: "options", kind: "message", T: V, opt: true }, { no: 4, name: "reserved_range", kind: "message", T: Q, repeated: true }, { no: 5, name: "reserved_name", kind: "scalar", T: 9, repeated: true }]);
    class Q extends s2.Message {
      constructor(e3) {
        super(), t2.proto2.util.initPartial(e3, this);
      }
      static fromBinary(e3, a3) {
        return new Q().fromBinary(e3, a3);
      }
      static fromJson(e3, a3) {
        return new Q().fromJson(e3, a3);
      }
      static fromJsonString(e3, a3) {
        return new Q().fromJsonString(e3, a3);
      }
      static equals(e3, a3) {
        return t2.proto2.util.equals(Q, e3, a3);
      }
    }
    a2.EnumDescriptorProto_EnumReservedRange = Q, Q.runtime = t2.proto2, Q.typeName = "google.protobuf.EnumDescriptorProto.EnumReservedRange", Q.fields = t2.proto2.util.newFieldList(() => [{ no: 1, name: "start", kind: "scalar", T: 5, opt: true }, { no: 2, name: "end", kind: "scalar", T: 5, opt: true }]);
    class D extends s2.Message {
      constructor(e3) {
        super(), t2.proto2.util.initPartial(e3, this);
      }
      static fromBinary(e3, a3) {
        return new D().fromBinary(e3, a3);
      }
      static fromJson(e3, a3) {
        return new D().fromJson(e3, a3);
      }
      static fromJsonString(e3, a3) {
        return new D().fromJsonString(e3, a3);
      }
      static equals(e3, a3) {
        return t2.proto2.util.equals(D, e3, a3);
      }
    }
    a2.EnumValueDescriptorProto = D, D.runtime = t2.proto2, D.typeName = "google.protobuf.EnumValueDescriptorProto", D.fields = t2.proto2.util.newFieldList(() => [{ no: 1, name: "name", kind: "scalar", T: 9, opt: true }, { no: 2, name: "number", kind: "scalar", T: 5, opt: true }, { no: 3, name: "options", kind: "message", T: Y, opt: true }]);
    class M extends s2.Message {
      constructor(e3) {
        super(), this.method = [], t2.proto2.util.initPartial(e3, this);
      }
      static fromBinary(e3, a3) {
        return new M().fromBinary(e3, a3);
      }
      static fromJson(e3, a3) {
        return new M().fromJson(e3, a3);
      }
      static fromJsonString(e3, a3) {
        return new M().fromJsonString(e3, a3);
      }
      static equals(e3, a3) {
        return t2.proto2.util.equals(M, e3, a3);
      }
    }
    a2.ServiceDescriptorProto = M, M.runtime = t2.proto2, M.typeName = "google.protobuf.ServiceDescriptorProto", M.fields = t2.proto2.util.newFieldList(() => [{ no: 1, name: "name", kind: "scalar", T: 9, opt: true }, { no: 2, name: "method", kind: "message", T: O, repeated: true }, { no: 3, name: "options", kind: "message", T: q, opt: true }]);
    class O extends s2.Message {
      constructor(e3) {
        super(), t2.proto2.util.initPartial(e3, this);
      }
      static fromBinary(e3, a3) {
        return new O().fromBinary(e3, a3);
      }
      static fromJson(e3, a3) {
        return new O().fromJson(e3, a3);
      }
      static fromJsonString(e3, a3) {
        return new O().fromJsonString(e3, a3);
      }
      static equals(e3, a3) {
        return t2.proto2.util.equals(O, e3, a3);
      }
    }
    a2.MethodDescriptorProto = O, O.runtime = t2.proto2, O.typeName = "google.protobuf.MethodDescriptorProto", O.fields = t2.proto2.util.newFieldList(() => [{ no: 1, name: "name", kind: "scalar", T: 9, opt: true }, { no: 2, name: "input_type", kind: "scalar", T: 9, opt: true }, { no: 3, name: "output_type", kind: "scalar", T: 9, opt: true }, { no: 4, name: "options", kind: "message", T: H, opt: true }, { no: 5, name: "client_streaming", kind: "scalar", T: 8, opt: true, default: false }, { no: 6, name: "server_streaming", kind: "scalar", T: 8, opt: true, default: false }]);
    class U extends s2.Message {
      constructor(e3) {
        super(), this.uninterpretedOption = [], t2.proto2.util.initPartial(e3, this);
      }
      static fromBinary(e3, a3) {
        return new U().fromBinary(e3, a3);
      }
      static fromJson(e3, a3) {
        return new U().fromJson(e3, a3);
      }
      static fromJsonString(e3, a3) {
        return new U().fromJsonString(e3, a3);
      }
      static equals(e3, a3) {
        return t2.proto2.util.equals(U, e3, a3);
      }
    }
    a2.FileOptions = U, U.runtime = t2.proto2, U.typeName = "google.protobuf.FileOptions", U.fields = t2.proto2.util.newFieldList(() => [{ no: 1, name: "java_package", kind: "scalar", T: 9, opt: true }, { no: 8, name: "java_outer_classname", kind: "scalar", T: 9, opt: true }, { no: 10, name: "java_multiple_files", kind: "scalar", T: 8, opt: true, default: false }, { no: 20, name: "java_generate_equals_and_hash", kind: "scalar", T: 8, opt: true }, { no: 27, name: "java_string_check_utf8", kind: "scalar", T: 8, opt: true, default: false }, { no: 9, name: "optimize_for", kind: "enum", T: t2.proto2.getEnumType(d), opt: true, default: d.SPEED }, { no: 11, name: "go_package", kind: "scalar", T: 9, opt: true }, { no: 16, name: "cc_generic_services", kind: "scalar", T: 8, opt: true, default: false }, { no: 17, name: "java_generic_services", kind: "scalar", T: 8, opt: true, default: false }, { no: 18, name: "py_generic_services", kind: "scalar", T: 8, opt: true, default: false }, { no: 23, name: "deprecated", kind: "scalar", T: 8, opt: true, default: false }, { no: 31, name: "cc_enable_arenas", kind: "scalar", T: 8, opt: true, default: true }, { no: 36, name: "objc_class_prefix", kind: "scalar", T: 9, opt: true }, { no: 37, name: "csharp_namespace", kind: "scalar", T: 9, opt: true }, { no: 39, name: "swift_prefix", kind: "scalar", T: 9, opt: true }, { no: 40, name: "php_class_prefix", kind: "scalar", T: 9, opt: true }, { no: 41, name: "php_namespace", kind: "scalar", T: 9, opt: true }, { no: 44, name: "php_metadata_namespace", kind: "scalar", T: 9, opt: true }, { no: 45, name: "ruby_package", kind: "scalar", T: 9, opt: true }, { no: 50, name: "features", kind: "message", T: K, opt: true }, { no: 999, name: "uninterpreted_option", kind: "message", T: J, repeated: true }]), (function(e3) {
      e3[e3.SPEED = 1] = "SPEED", e3[e3.CODE_SIZE = 2] = "CODE_SIZE", e3[e3.LITE_RUNTIME = 3] = "LITE_RUNTIME";
    })(d || (a2.FileOptions_OptimizeMode = d = {})), t2.proto2.util.setEnumType(d, "google.protobuf.FileOptions.OptimizeMode", [{ no: 1, name: "SPEED" }, { no: 2, name: "CODE_SIZE" }, { no: 3, name: "LITE_RUNTIME" }]);
    class F extends s2.Message {
      constructor(e3) {
        super(), this.uninterpretedOption = [], t2.proto2.util.initPartial(e3, this);
      }
      static fromBinary(e3, a3) {
        return new F().fromBinary(e3, a3);
      }
      static fromJson(e3, a3) {
        return new F().fromJson(e3, a3);
      }
      static fromJsonString(e3, a3) {
        return new F().fromJsonString(e3, a3);
      }
      static equals(e3, a3) {
        return t2.proto2.util.equals(F, e3, a3);
      }
    }
    a2.MessageOptions = F, F.runtime = t2.proto2, F.typeName = "google.protobuf.MessageOptions", F.fields = t2.proto2.util.newFieldList(() => [{ no: 1, name: "message_set_wire_format", kind: "scalar", T: 8, opt: true, default: false }, { no: 2, name: "no_standard_descriptor_accessor", kind: "scalar", T: 8, opt: true, default: false }, { no: 3, name: "deprecated", kind: "scalar", T: 8, opt: true, default: false }, { no: 7, name: "map_entry", kind: "scalar", T: 8, opt: true }, { no: 11, name: "deprecated_legacy_json_field_conflicts", kind: "scalar", T: 8, opt: true }, { no: 12, name: "features", kind: "message", T: K, opt: true }, { no: 999, name: "uninterpreted_option", kind: "message", T: J, repeated: true }]);
    class P extends s2.Message {
      constructor(e3) {
        super(), this.targets = [], this.editionDefaults = [], this.uninterpretedOption = [], t2.proto2.util.initPartial(e3, this);
      }
      static fromBinary(e3, a3) {
        return new P().fromBinary(e3, a3);
      }
      static fromJson(e3, a3) {
        return new P().fromJson(e3, a3);
      }
      static fromJsonString(e3, a3) {
        return new P().fromJsonString(e3, a3);
      }
      static equals(e3, a3) {
        return t2.proto2.util.equals(P, e3, a3);
      }
    }
    a2.FieldOptions = P, P.runtime = t2.proto2, P.typeName = "google.protobuf.FieldOptions", P.fields = t2.proto2.util.newFieldList(() => [{ no: 1, name: "ctype", kind: "enum", T: t2.proto2.getEnumType(m), opt: true, default: m.STRING }, { no: 2, name: "packed", kind: "scalar", T: 8, opt: true }, { no: 6, name: "jstype", kind: "enum", T: t2.proto2.getEnumType(c), opt: true, default: c.JS_NORMAL }, { no: 5, name: "lazy", kind: "scalar", T: 8, opt: true, default: false }, { no: 15, name: "unverified_lazy", kind: "scalar", T: 8, opt: true, default: false }, { no: 3, name: "deprecated", kind: "scalar", T: 8, opt: true, default: false }, { no: 10, name: "weak", kind: "scalar", T: 8, opt: true, default: false }, { no: 16, name: "debug_redact", kind: "scalar", T: 8, opt: true, default: false }, { no: 17, name: "retention", kind: "enum", T: t2.proto2.getEnumType(p), opt: true }, { no: 19, name: "targets", kind: "enum", T: t2.proto2.getEnumType(A), repeated: true }, { no: 20, name: "edition_defaults", kind: "message", T: L, repeated: true }, { no: 21, name: "features", kind: "message", T: K, opt: true }, { no: 22, name: "feature_support", kind: "message", T: G, opt: true }, { no: 999, name: "uninterpreted_option", kind: "message", T: J, repeated: true }]), (function(e3) {
      e3[e3.STRING = 0] = "STRING", e3[e3.CORD = 1] = "CORD", e3[e3.STRING_PIECE = 2] = "STRING_PIECE";
    })(m || (a2.FieldOptions_CType = m = {})), t2.proto2.util.setEnumType(m, "google.protobuf.FieldOptions.CType", [{ no: 0, name: "STRING" }, { no: 1, name: "CORD" }, { no: 2, name: "STRING_PIECE" }]), (function(e3) {
      e3[e3.JS_NORMAL = 0] = "JS_NORMAL", e3[e3.JS_STRING = 1] = "JS_STRING", e3[e3.JS_NUMBER = 2] = "JS_NUMBER";
    })(c || (a2.FieldOptions_JSType = c = {})), t2.proto2.util.setEnumType(c, "google.protobuf.FieldOptions.JSType", [{ no: 0, name: "JS_NORMAL" }, { no: 1, name: "JS_STRING" }, { no: 2, name: "JS_NUMBER" }]), (function(e3) {
      e3[e3.RETENTION_UNKNOWN = 0] = "RETENTION_UNKNOWN", e3[e3.RETENTION_RUNTIME = 1] = "RETENTION_RUNTIME", e3[e3.RETENTION_SOURCE = 2] = "RETENTION_SOURCE";
    })(p || (a2.FieldOptions_OptionRetention = p = {})), t2.proto2.util.setEnumType(p, "google.protobuf.FieldOptions.OptionRetention", [{ no: 0, name: "RETENTION_UNKNOWN" }, { no: 1, name: "RETENTION_RUNTIME" }, { no: 2, name: "RETENTION_SOURCE" }]), (function(e3) {
      e3[e3.TARGET_TYPE_UNKNOWN = 0] = "TARGET_TYPE_UNKNOWN", e3[e3.TARGET_TYPE_FILE = 1] = "TARGET_TYPE_FILE", e3[e3.TARGET_TYPE_EXTENSION_RANGE = 2] = "TARGET_TYPE_EXTENSION_RANGE", e3[e3.TARGET_TYPE_MESSAGE = 3] = "TARGET_TYPE_MESSAGE", e3[e3.TARGET_TYPE_FIELD = 4] = "TARGET_TYPE_FIELD", e3[e3.TARGET_TYPE_ONEOF = 5] = "TARGET_TYPE_ONEOF", e3[e3.TARGET_TYPE_ENUM = 6] = "TARGET_TYPE_ENUM", e3[e3.TARGET_TYPE_ENUM_ENTRY = 7] = "TARGET_TYPE_ENUM_ENTRY", e3[e3.TARGET_TYPE_SERVICE = 8] = "TARGET_TYPE_SERVICE", e3[e3.TARGET_TYPE_METHOD = 9] = "TARGET_TYPE_METHOD";
    })(A || (a2.FieldOptions_OptionTargetType = A = {})), t2.proto2.util.setEnumType(A, "google.protobuf.FieldOptions.OptionTargetType", [{ no: 0, name: "TARGET_TYPE_UNKNOWN" }, { no: 1, name: "TARGET_TYPE_FILE" }, { no: 2, name: "TARGET_TYPE_EXTENSION_RANGE" }, { no: 3, name: "TARGET_TYPE_MESSAGE" }, { no: 4, name: "TARGET_TYPE_FIELD" }, { no: 5, name: "TARGET_TYPE_ONEOF" }, { no: 6, name: "TARGET_TYPE_ENUM" }, { no: 7, name: "TARGET_TYPE_ENUM_ENTRY" }, { no: 8, name: "TARGET_TYPE_SERVICE" }, { no: 9, name: "TARGET_TYPE_METHOD" }]);
    class L extends s2.Message {
      constructor(e3) {
        super(), t2.proto2.util.initPartial(e3, this);
      }
      static fromBinary(e3, a3) {
        return new L().fromBinary(e3, a3);
      }
      static fromJson(e3, a3) {
        return new L().fromJson(e3, a3);
      }
      static fromJsonString(e3, a3) {
        return new L().fromJsonString(e3, a3);
      }
      static equals(e3, a3) {
        return t2.proto2.util.equals(L, e3, a3);
      }
    }
    a2.FieldOptions_EditionDefault = L, L.runtime = t2.proto2, L.typeName = "google.protobuf.FieldOptions.EditionDefault", L.fields = t2.proto2.util.newFieldList(() => [{ no: 3, name: "edition", kind: "enum", T: t2.proto2.getEnumType(o2), opt: true }, { no: 2, name: "value", kind: "scalar", T: 9, opt: true }]);
    class G extends s2.Message {
      constructor(e3) {
        super(), t2.proto2.util.initPartial(e3, this);
      }
      static fromBinary(e3, a3) {
        return new G().fromBinary(e3, a3);
      }
      static fromJson(e3, a3) {
        return new G().fromJson(e3, a3);
      }
      static fromJsonString(e3, a3) {
        return new G().fromJsonString(e3, a3);
      }
      static equals(e3, a3) {
        return t2.proto2.util.equals(G, e3, a3);
      }
    }
    a2.FieldOptions_FeatureSupport = G, G.runtime = t2.proto2, G.typeName = "google.protobuf.FieldOptions.FeatureSupport", G.fields = t2.proto2.util.newFieldList(() => [{ no: 1, name: "edition_introduced", kind: "enum", T: t2.proto2.getEnumType(o2), opt: true }, { no: 2, name: "edition_deprecated", kind: "enum", T: t2.proto2.getEnumType(o2), opt: true }, { no: 3, name: "deprecation_warning", kind: "scalar", T: 9, opt: true }, { no: 4, name: "edition_removed", kind: "enum", T: t2.proto2.getEnumType(o2), opt: true }]);
    class x extends s2.Message {
      constructor(e3) {
        super(), this.uninterpretedOption = [], t2.proto2.util.initPartial(e3, this);
      }
      static fromBinary(e3, a3) {
        return new x().fromBinary(e3, a3);
      }
      static fromJson(e3, a3) {
        return new x().fromJson(e3, a3);
      }
      static fromJsonString(e3, a3) {
        return new x().fromJsonString(e3, a3);
      }
      static equals(e3, a3) {
        return t2.proto2.util.equals(x, e3, a3);
      }
    }
    a2.OneofOptions = x, x.runtime = t2.proto2, x.typeName = "google.protobuf.OneofOptions", x.fields = t2.proto2.util.newFieldList(() => [{ no: 1, name: "features", kind: "message", T: K, opt: true }, { no: 999, name: "uninterpreted_option", kind: "message", T: J, repeated: true }]);
    class V extends s2.Message {
      constructor(e3) {
        super(), this.uninterpretedOption = [], t2.proto2.util.initPartial(e3, this);
      }
      static fromBinary(e3, a3) {
        return new V().fromBinary(e3, a3);
      }
      static fromJson(e3, a3) {
        return new V().fromJson(e3, a3);
      }
      static fromJsonString(e3, a3) {
        return new V().fromJsonString(e3, a3);
      }
      static equals(e3, a3) {
        return t2.proto2.util.equals(V, e3, a3);
      }
    }
    a2.EnumOptions = V, V.runtime = t2.proto2, V.typeName = "google.protobuf.EnumOptions", V.fields = t2.proto2.util.newFieldList(() => [{ no: 2, name: "allow_alias", kind: "scalar", T: 8, opt: true }, { no: 3, name: "deprecated", kind: "scalar", T: 8, opt: true, default: false }, { no: 6, name: "deprecated_legacy_json_field_conflicts", kind: "scalar", T: 8, opt: true }, { no: 7, name: "features", kind: "message", T: K, opt: true }, { no: 999, name: "uninterpreted_option", kind: "message", T: J, repeated: true }]);
    class Y extends s2.Message {
      constructor(e3) {
        super(), this.uninterpretedOption = [], t2.proto2.util.initPartial(e3, this);
      }
      static fromBinary(e3, a3) {
        return new Y().fromBinary(e3, a3);
      }
      static fromJson(e3, a3) {
        return new Y().fromJson(e3, a3);
      }
      static fromJsonString(e3, a3) {
        return new Y().fromJsonString(e3, a3);
      }
      static equals(e3, a3) {
        return t2.proto2.util.equals(Y, e3, a3);
      }
    }
    a2.EnumValueOptions = Y, Y.runtime = t2.proto2, Y.typeName = "google.protobuf.EnumValueOptions", Y.fields = t2.proto2.util.newFieldList(() => [{ no: 1, name: "deprecated", kind: "scalar", T: 8, opt: true, default: false }, { no: 2, name: "features", kind: "message", T: K, opt: true }, { no: 3, name: "debug_redact", kind: "scalar", T: 8, opt: true, default: false }, { no: 4, name: "feature_support", kind: "message", T: G, opt: true }, { no: 999, name: "uninterpreted_option", kind: "message", T: J, repeated: true }]);
    class q extends s2.Message {
      constructor(e3) {
        super(), this.uninterpretedOption = [], t2.proto2.util.initPartial(e3, this);
      }
      static fromBinary(e3, a3) {
        return new q().fromBinary(e3, a3);
      }
      static fromJson(e3, a3) {
        return new q().fromJson(e3, a3);
      }
      static fromJsonString(e3, a3) {
        return new q().fromJsonString(e3, a3);
      }
      static equals(e3, a3) {
        return t2.proto2.util.equals(q, e3, a3);
      }
    }
    a2.ServiceOptions = q, q.runtime = t2.proto2, q.typeName = "google.protobuf.ServiceOptions", q.fields = t2.proto2.util.newFieldList(() => [{ no: 34, name: "features", kind: "message", T: K, opt: true }, { no: 33, name: "deprecated", kind: "scalar", T: 8, opt: true, default: false }, { no: 999, name: "uninterpreted_option", kind: "message", T: J, repeated: true }]);
    class H extends s2.Message {
      constructor(e3) {
        super(), this.uninterpretedOption = [], t2.proto2.util.initPartial(e3, this);
      }
      static fromBinary(e3, a3) {
        return new H().fromBinary(e3, a3);
      }
      static fromJson(e3, a3) {
        return new H().fromJson(e3, a3);
      }
      static fromJsonString(e3, a3) {
        return new H().fromJsonString(e3, a3);
      }
      static equals(e3, a3) {
        return t2.proto2.util.equals(H, e3, a3);
      }
    }
    a2.MethodOptions = H, H.runtime = t2.proto2, H.typeName = "google.protobuf.MethodOptions", H.fields = t2.proto2.util.newFieldList(() => [{ no: 33, name: "deprecated", kind: "scalar", T: 8, opt: true, default: false }, { no: 34, name: "idempotency_level", kind: "enum", T: t2.proto2.getEnumType(u), opt: true, default: u.IDEMPOTENCY_UNKNOWN }, { no: 35, name: "features", kind: "message", T: K, opt: true }, { no: 999, name: "uninterpreted_option", kind: "message", T: J, repeated: true }]), (function(e3) {
      e3[e3.IDEMPOTENCY_UNKNOWN = 0] = "IDEMPOTENCY_UNKNOWN", e3[e3.NO_SIDE_EFFECTS = 1] = "NO_SIDE_EFFECTS", e3[e3.IDEMPOTENT = 2] = "IDEMPOTENT";
    })(u || (a2.MethodOptions_IdempotencyLevel = u = {})), t2.proto2.util.setEnumType(u, "google.protobuf.MethodOptions.IdempotencyLevel", [{ no: 0, name: "IDEMPOTENCY_UNKNOWN" }, { no: 1, name: "NO_SIDE_EFFECTS" }, { no: 2, name: "IDEMPOTENT" }]);
    class J extends s2.Message {
      constructor(e3) {
        super(), this.name = [], t2.proto2.util.initPartial(e3, this);
      }
      static fromBinary(e3, a3) {
        return new J().fromBinary(e3, a3);
      }
      static fromJson(e3, a3) {
        return new J().fromJson(e3, a3);
      }
      static fromJsonString(e3, a3) {
        return new J().fromJsonString(e3, a3);
      }
      static equals(e3, a3) {
        return t2.proto2.util.equals(J, e3, a3);
      }
    }
    a2.UninterpretedOption = J, J.runtime = t2.proto2, J.typeName = "google.protobuf.UninterpretedOption", J.fields = t2.proto2.util.newFieldList(() => [{ no: 2, name: "name", kind: "message", T: W, repeated: true }, { no: 3, name: "identifier_value", kind: "scalar", T: 9, opt: true }, { no: 4, name: "positive_int_value", kind: "scalar", T: 4, opt: true }, { no: 5, name: "negative_int_value", kind: "scalar", T: 3, opt: true }, { no: 6, name: "double_value", kind: "scalar", T: 1, opt: true }, { no: 7, name: "string_value", kind: "scalar", T: 12, opt: true }, { no: 8, name: "aggregate_value", kind: "scalar", T: 9, opt: true }]);
    class W extends s2.Message {
      constructor(e3) {
        super(), t2.proto2.util.initPartial(e3, this);
      }
      static fromBinary(e3, a3) {
        return new W().fromBinary(e3, a3);
      }
      static fromJson(e3, a3) {
        return new W().fromJson(e3, a3);
      }
      static fromJsonString(e3, a3) {
        return new W().fromJsonString(e3, a3);
      }
      static equals(e3, a3) {
        return t2.proto2.util.equals(W, e3, a3);
      }
    }
    a2.UninterpretedOption_NamePart = W, W.runtime = t2.proto2, W.typeName = "google.protobuf.UninterpretedOption.NamePart", W.fields = t2.proto2.util.newFieldList(() => [{ no: 1, name: "name_part", kind: "scalar", T: 9, req: true }, { no: 2, name: "is_extension", kind: "scalar", T: 8, req: true }]);
    class K extends s2.Message {
      constructor(e3) {
        super(), t2.proto2.util.initPartial(e3, this);
      }
      static fromBinary(e3, a3) {
        return new K().fromBinary(e3, a3);
      }
      static fromJson(e3, a3) {
        return new K().fromJson(e3, a3);
      }
      static fromJsonString(e3, a3) {
        return new K().fromJsonString(e3, a3);
      }
      static equals(e3, a3) {
        return t2.proto2.util.equals(K, e3, a3);
      }
    }
    a2.FeatureSet = K, K.runtime = t2.proto2, K.typeName = "google.protobuf.FeatureSet", K.fields = t2.proto2.util.newFieldList(() => [{ no: 1, name: "field_presence", kind: "enum", T: t2.proto2.getEnumType(g), opt: true }, { no: 2, name: "enum_type", kind: "enum", T: t2.proto2.getEnumType(T), opt: true }, { no: 3, name: "repeated_field_encoding", kind: "enum", T: t2.proto2.getEnumType(h), opt: true }, { no: 4, name: "utf8_validation", kind: "enum", T: t2.proto2.getEnumType(k), opt: true }, { no: 5, name: "message_encoding", kind: "enum", T: t2.proto2.getEnumType(_), opt: true }, { no: 6, name: "json_format", kind: "enum", T: t2.proto2.getEnumType(E), opt: true }]), (function(e3) {
      e3[e3.FIELD_PRESENCE_UNKNOWN = 0] = "FIELD_PRESENCE_UNKNOWN", e3[e3.EXPLICIT = 1] = "EXPLICIT", e3[e3.IMPLICIT = 2] = "IMPLICIT", e3[e3.LEGACY_REQUIRED = 3] = "LEGACY_REQUIRED";
    })(g || (a2.FeatureSet_FieldPresence = g = {})), t2.proto2.util.setEnumType(g, "google.protobuf.FeatureSet.FieldPresence", [{ no: 0, name: "FIELD_PRESENCE_UNKNOWN" }, { no: 1, name: "EXPLICIT" }, { no: 2, name: "IMPLICIT" }, { no: 3, name: "LEGACY_REQUIRED" }]), (function(e3) {
      e3[e3.ENUM_TYPE_UNKNOWN = 0] = "ENUM_TYPE_UNKNOWN", e3[e3.OPEN = 1] = "OPEN", e3[e3.CLOSED = 2] = "CLOSED";
    })(T || (a2.FeatureSet_EnumType = T = {})), t2.proto2.util.setEnumType(T, "google.protobuf.FeatureSet.EnumType", [{ no: 0, name: "ENUM_TYPE_UNKNOWN" }, { no: 1, name: "OPEN" }, { no: 2, name: "CLOSED" }]), (function(e3) {
      e3[e3.REPEATED_FIELD_ENCODING_UNKNOWN = 0] = "REPEATED_FIELD_ENCODING_UNKNOWN", e3[e3.PACKED = 1] = "PACKED", e3[e3.EXPANDED = 2] = "EXPANDED";
    })(h || (a2.FeatureSet_RepeatedFieldEncoding = h = {})), t2.proto2.util.setEnumType(h, "google.protobuf.FeatureSet.RepeatedFieldEncoding", [{ no: 0, name: "REPEATED_FIELD_ENCODING_UNKNOWN" }, { no: 1, name: "PACKED" }, { no: 2, name: "EXPANDED" }]), (function(e3) {
      e3[e3.UTF8_VALIDATION_UNKNOWN = 0] = "UTF8_VALIDATION_UNKNOWN", e3[e3.VERIFY = 2] = "VERIFY", e3[e3.NONE = 3] = "NONE";
    })(k || (a2.FeatureSet_Utf8Validation = k = {})), t2.proto2.util.setEnumType(k, "google.protobuf.FeatureSet.Utf8Validation", [{ no: 0, name: "UTF8_VALIDATION_UNKNOWN" }, { no: 2, name: "VERIFY" }, { no: 3, name: "NONE" }]), (function(e3) {
      e3[e3.MESSAGE_ENCODING_UNKNOWN = 0] = "MESSAGE_ENCODING_UNKNOWN", e3[e3.LENGTH_PREFIXED = 1] = "LENGTH_PREFIXED", e3[e3.DELIMITED = 2] = "DELIMITED";
    })(_ || (a2.FeatureSet_MessageEncoding = _ = {})), t2.proto2.util.setEnumType(_, "google.protobuf.FeatureSet.MessageEncoding", [{ no: 0, name: "MESSAGE_ENCODING_UNKNOWN" }, { no: 1, name: "LENGTH_PREFIXED" }, { no: 2, name: "DELIMITED" }]), (function(e3) {
      e3[e3.JSON_FORMAT_UNKNOWN = 0] = "JSON_FORMAT_UNKNOWN", e3[e3.ALLOW = 1] = "ALLOW", e3[e3.LEGACY_BEST_EFFORT = 2] = "LEGACY_BEST_EFFORT";
    })(E || (a2.FeatureSet_JsonFormat = E = {})), t2.proto2.util.setEnumType(E, "google.protobuf.FeatureSet.JsonFormat", [{ no: 0, name: "JSON_FORMAT_UNKNOWN" }, { no: 1, name: "ALLOW" }, { no: 2, name: "LEGACY_BEST_EFFORT" }]);
    class j extends s2.Message {
      constructor(e3) {
        super(), this.defaults = [], t2.proto2.util.initPartial(e3, this);
      }
      static fromBinary(e3, a3) {
        return new j().fromBinary(e3, a3);
      }
      static fromJson(e3, a3) {
        return new j().fromJson(e3, a3);
      }
      static fromJsonString(e3, a3) {
        return new j().fromJsonString(e3, a3);
      }
      static equals(e3, a3) {
        return t2.proto2.util.equals(j, e3, a3);
      }
    }
    a2.FeatureSetDefaults = j, j.runtime = t2.proto2, j.typeName = "google.protobuf.FeatureSetDefaults", j.fields = t2.proto2.util.newFieldList(() => [{ no: 1, name: "defaults", kind: "message", T: $, repeated: true }, { no: 4, name: "minimum_edition", kind: "enum", T: t2.proto2.getEnumType(o2), opt: true }, { no: 5, name: "maximum_edition", kind: "enum", T: t2.proto2.getEnumType(o2), opt: true }]);
    class $ extends s2.Message {
      constructor(e3) {
        super(), t2.proto2.util.initPartial(e3, this);
      }
      static fromBinary(e3, a3) {
        return new $().fromBinary(e3, a3);
      }
      static fromJson(e3, a3) {
        return new $().fromJson(e3, a3);
      }
      static fromJsonString(e3, a3) {
        return new $().fromJsonString(e3, a3);
      }
      static equals(e3, a3) {
        return t2.proto2.util.equals($, e3, a3);
      }
    }
    a2.FeatureSetDefaults_FeatureSetEditionDefault = $, $.runtime = t2.proto2, $.typeName = "google.protobuf.FeatureSetDefaults.FeatureSetEditionDefault", $.fields = t2.proto2.util.newFieldList(() => [{ no: 3, name: "edition", kind: "enum", T: t2.proto2.getEnumType(o2), opt: true }, { no: 4, name: "overridable_features", kind: "message", T: K, opt: true }, { no: 5, name: "fixed_features", kind: "message", T: K, opt: true }]);
    class X extends s2.Message {
      constructor(e3) {
        super(), this.location = [], t2.proto2.util.initPartial(e3, this);
      }
      static fromBinary(e3, a3) {
        return new X().fromBinary(e3, a3);
      }
      static fromJson(e3, a3) {
        return new X().fromJson(e3, a3);
      }
      static fromJsonString(e3, a3) {
        return new X().fromJsonString(e3, a3);
      }
      static equals(e3, a3) {
        return t2.proto2.util.equals(X, e3, a3);
      }
    }
    a2.SourceCodeInfo = X, X.runtime = t2.proto2, X.typeName = "google.protobuf.SourceCodeInfo", X.fields = t2.proto2.util.newFieldList(() => [{ no: 1, name: "location", kind: "message", T: z, repeated: true }]);
    class z extends s2.Message {
      constructor(e3) {
        super(), this.path = [], this.span = [], this.leadingDetachedComments = [], t2.proto2.util.initPartial(e3, this);
      }
      static fromBinary(e3, a3) {
        return new z().fromBinary(e3, a3);
      }
      static fromJson(e3, a3) {
        return new z().fromJson(e3, a3);
      }
      static fromJsonString(e3, a3) {
        return new z().fromJsonString(e3, a3);
      }
      static equals(e3, a3) {
        return t2.proto2.util.equals(z, e3, a3);
      }
    }
    a2.SourceCodeInfo_Location = z, z.runtime = t2.proto2, z.typeName = "google.protobuf.SourceCodeInfo.Location", z.fields = t2.proto2.util.newFieldList(() => [{ no: 1, name: "path", kind: "scalar", T: 5, repeated: true, packed: true }, { no: 2, name: "span", kind: "scalar", T: 5, repeated: true, packed: true }, { no: 3, name: "leading_comments", kind: "scalar", T: 9, opt: true }, { no: 4, name: "trailing_comments", kind: "scalar", T: 9, opt: true }, { no: 6, name: "leading_detached_comments", kind: "scalar", T: 9, repeated: true }]);
    class Z extends s2.Message {
      constructor(e3) {
        super(), this.annotation = [], t2.proto2.util.initPartial(e3, this);
      }
      static fromBinary(e3, a3) {
        return new Z().fromBinary(e3, a3);
      }
      static fromJson(e3, a3) {
        return new Z().fromJson(e3, a3);
      }
      static fromJsonString(e3, a3) {
        return new Z().fromJsonString(e3, a3);
      }
      static equals(e3, a3) {
        return t2.proto2.util.equals(Z, e3, a3);
      }
    }
    a2.GeneratedCodeInfo = Z, Z.runtime = t2.proto2, Z.typeName = "google.protobuf.GeneratedCodeInfo", Z.fields = t2.proto2.util.newFieldList(() => [{ no: 1, name: "annotation", kind: "message", T: ee, repeated: true }]);
    class ee extends s2.Message {
      constructor(e3) {
        super(), this.path = [], t2.proto2.util.initPartial(e3, this);
      }
      static fromBinary(e3, a3) {
        return new ee().fromBinary(e3, a3);
      }
      static fromJson(e3, a3) {
        return new ee().fromJson(e3, a3);
      }
      static fromJsonString(e3, a3) {
        return new ee().fromJsonString(e3, a3);
      }
      static equals(e3, a3) {
        return t2.proto2.util.equals(ee, e3, a3);
      }
    }
    a2.GeneratedCodeInfo_Annotation = ee, ee.runtime = t2.proto2, ee.typeName = "google.protobuf.GeneratedCodeInfo.Annotation", ee.fields = t2.proto2.util.newFieldList(() => [{ no: 1, name: "path", kind: "scalar", T: 5, repeated: true, packed: true }, { no: 2, name: "source_file", kind: "scalar", T: 9, opt: true }, { no: 3, name: "begin", kind: "scalar", T: 5, opt: true }, { no: 4, name: "end", kind: "scalar", T: 5, opt: true }, { no: 5, name: "semantic", kind: "enum", T: t2.proto2.getEnumType(f), opt: true }]), (function(e3) {
      e3[e3.NONE = 0] = "NONE", e3[e3.SET = 1] = "SET", e3[e3.ALIAS = 2] = "ALIAS";
    })(f || (a2.GeneratedCodeInfo_Annotation_Semantic = f = {})), t2.proto2.util.setEnumType(f, "google.protobuf.GeneratedCodeInfo.Annotation.Semantic", [{ no: 0, name: "NONE" }, { no: 1, name: "SET" }, { no: 2, name: "ALIAS" }]);
  }
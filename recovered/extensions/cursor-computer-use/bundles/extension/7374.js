// @recovered-by cursor-re
// artifact: app/extensions/cursor-computer-use/dist/extension.js sha256:2e37990c917916e7e5b3d1524e03cf61b1cf38ddc56b1e51014a1275aa4568a6
// module: 7374 range:571120..615908
// basis: webpack-id confidence: C
// method: split
// run: ext-p0 2026-11-05T10:07:22.069Z
7374: (e2, n2, t2) => {
    "use strict";
    Object.defineProperty(n2, "__esModule", { value: true }), n2.GeneratedCodeInfo_Annotation_Semantic = n2.GeneratedCodeInfo_Annotation = n2.GeneratedCodeInfo = n2.SourceCodeInfo_Location = n2.SourceCodeInfo = n2.FeatureSetDefaults_FeatureSetEditionDefault = n2.FeatureSetDefaults = n2.FeatureSet_JsonFormat = n2.FeatureSet_MessageEncoding = n2.FeatureSet_Utf8Validation = n2.FeatureSet_RepeatedFieldEncoding = n2.FeatureSet_EnumType = n2.FeatureSet_FieldPresence = n2.FeatureSet = n2.UninterpretedOption_NamePart = n2.UninterpretedOption = n2.MethodOptions_IdempotencyLevel = n2.MethodOptions = n2.ServiceOptions = n2.EnumValueOptions = n2.EnumOptions = n2.OneofOptions = n2.FieldOptions_FeatureSupport = n2.FieldOptions_EditionDefault = n2.FieldOptions_OptionTargetType = n2.FieldOptions_OptionRetention = n2.FieldOptions_JSType = n2.FieldOptions_CType = n2.FieldOptions = n2.MessageOptions = n2.FileOptions_OptimizeMode = n2.FileOptions = n2.MethodDescriptorProto = n2.ServiceDescriptorProto = n2.EnumValueDescriptorProto = n2.EnumDescriptorProto_EnumReservedRange = n2.EnumDescriptorProto = n2.OneofDescriptorProto = n2.FieldDescriptorProto_Label = n2.FieldDescriptorProto_Type = n2.FieldDescriptorProto = n2.ExtensionRangeOptions_Declaration = n2.ExtensionRangeOptions_VerificationState = n2.ExtensionRangeOptions = n2.DescriptorProto_ReservedRange = n2.DescriptorProto_ExtensionRange = n2.DescriptorProto = n2.FileDescriptorProto = n2.FileDescriptorSet = n2.Edition = void 0;
    const a2 = t2(3672), s2 = t2(4193);
    var o2, r, i, A, c, l, d, m, u, g, p, E, h, T, k, f, _;
    !(function(e3) {
      e3[e3.EDITION_UNKNOWN = 0] = "EDITION_UNKNOWN", e3[e3.EDITION_LEGACY = 900] = "EDITION_LEGACY", e3[e3.EDITION_PROTO2 = 998] = "EDITION_PROTO2", e3[e3.EDITION_PROTO3 = 999] = "EDITION_PROTO3", e3[e3.EDITION_2023 = 1e3] = "EDITION_2023", e3[e3.EDITION_2024 = 1001] = "EDITION_2024", e3[e3.EDITION_1_TEST_ONLY = 1] = "EDITION_1_TEST_ONLY", e3[e3.EDITION_2_TEST_ONLY = 2] = "EDITION_2_TEST_ONLY", e3[e3.EDITION_99997_TEST_ONLY = 99997] = "EDITION_99997_TEST_ONLY", e3[e3.EDITION_99998_TEST_ONLY = 99998] = "EDITION_99998_TEST_ONLY", e3[e3.EDITION_99999_TEST_ONLY = 99999] = "EDITION_99999_TEST_ONLY", e3[e3.EDITION_MAX = 2147483647] = "EDITION_MAX";
    })(o2 || (n2.Edition = o2 = {})), a2.proto2.util.setEnumType(o2, "google.protobuf.Edition", [{ no: 0, name: "EDITION_UNKNOWN" }, { no: 900, name: "EDITION_LEGACY" }, { no: 998, name: "EDITION_PROTO2" }, { no: 999, name: "EDITION_PROTO3" }, { no: 1e3, name: "EDITION_2023" }, { no: 1001, name: "EDITION_2024" }, { no: 1, name: "EDITION_1_TEST_ONLY" }, { no: 2, name: "EDITION_2_TEST_ONLY" }, { no: 99997, name: "EDITION_99997_TEST_ONLY" }, { no: 99998, name: "EDITION_99998_TEST_ONLY" }, { no: 99999, name: "EDITION_99999_TEST_ONLY" }, { no: 2147483647, name: "EDITION_MAX" }]);
    class I extends s2.Message {
      constructor(e3) {
        super(), this.file = [], a2.proto2.util.initPartial(e3, this);
      }
      static fromBinary(e3, n3) {
        return new I().fromBinary(e3, n3);
      }
      static fromJson(e3, n3) {
        return new I().fromJson(e3, n3);
      }
      static fromJsonString(e3, n3) {
        return new I().fromJsonString(e3, n3);
      }
      static equals(e3, n3) {
        return a2.proto2.util.equals(I, e3, n3);
      }
    }
    n2.FileDescriptorSet = I, I.runtime = a2.proto2, I.typeName = "google.protobuf.FileDescriptorSet", I.fields = a2.proto2.util.newFieldList(() => [{ no: 1, name: "file", kind: "message", T: C, repeated: true }]);
    class C extends s2.Message {
      constructor(e3) {
        super(), this.dependency = [], this.publicDependency = [], this.weakDependency = [], this.messageType = [], this.enumType = [], this.service = [], this.extension = [], a2.proto2.util.initPartial(e3, this);
      }
      static fromBinary(e3, n3) {
        return new C().fromBinary(e3, n3);
      }
      static fromJson(e3, n3) {
        return new C().fromJson(e3, n3);
      }
      static fromJsonString(e3, n3) {
        return new C().fromJsonString(e3, n3);
      }
      static equals(e3, n3) {
        return a2.proto2.util.equals(C, e3, n3);
      }
    }
    n2.FileDescriptorProto = C, C.runtime = a2.proto2, C.typeName = "google.protobuf.FileDescriptorProto", C.fields = a2.proto2.util.newFieldList(() => [{ no: 1, name: "name", kind: "scalar", T: 9, opt: true }, { no: 2, name: "package", kind: "scalar", T: 9, opt: true }, { no: 3, name: "dependency", kind: "scalar", T: 9, repeated: true }, { no: 10, name: "public_dependency", kind: "scalar", T: 5, repeated: true }, { no: 11, name: "weak_dependency", kind: "scalar", T: 5, repeated: true }, { no: 4, name: "message_type", kind: "message", T: y, repeated: true }, { no: 5, name: "enum_type", kind: "message", T: w, repeated: true }, { no: 6, name: "service", kind: "message", T: M, repeated: true }, { no: 7, name: "extension", kind: "message", T: N, repeated: true }, { no: 8, name: "options", kind: "message", T: O, opt: true }, { no: 9, name: "source_code_info", kind: "message", T: X, opt: true }, { no: 12, name: "syntax", kind: "scalar", T: 9, opt: true }, { no: 14, name: "edition", kind: "enum", T: a2.proto2.getEnumType(o2), opt: true }]);
    class y extends s2.Message {
      constructor(e3) {
        super(), this.field = [], this.extension = [], this.nestedType = [], this.enumType = [], this.extensionRange = [], this.oneofDecl = [], this.reservedRange = [], this.reservedName = [], a2.proto2.util.initPartial(e3, this);
      }
      static fromBinary(e3, n3) {
        return new y().fromBinary(e3, n3);
      }
      static fromJson(e3, n3) {
        return new y().fromJson(e3, n3);
      }
      static fromJsonString(e3, n3) {
        return new y().fromJsonString(e3, n3);
      }
      static equals(e3, n3) {
        return a2.proto2.util.equals(y, e3, n3);
      }
    }
    n2.DescriptorProto = y, y.runtime = a2.proto2, y.typeName = "google.protobuf.DescriptorProto", y.fields = a2.proto2.util.newFieldList(() => [{ no: 1, name: "name", kind: "scalar", T: 9, opt: true }, { no: 2, name: "field", kind: "message", T: N, repeated: true }, { no: 6, name: "extension", kind: "message", T: N, repeated: true }, { no: 3, name: "nested_type", kind: "message", T: y, repeated: true }, { no: 4, name: "enum_type", kind: "message", T: w, repeated: true }, { no: 5, name: "extension_range", kind: "message", T: B, repeated: true }, { no: 8, name: "oneof_decl", kind: "message", T: S, repeated: true }, { no: 7, name: "options", kind: "message", T: U, opt: true }, { no: 9, name: "reserved_range", kind: "message", T: Q, repeated: true }, { no: 10, name: "reserved_name", kind: "scalar", T: 9, repeated: true }]);
    class B extends s2.Message {
      constructor(e3) {
        super(), a2.proto2.util.initPartial(e3, this);
      }
      static fromBinary(e3, n3) {
        return new B().fromBinary(e3, n3);
      }
      static fromJson(e3, n3) {
        return new B().fromJson(e3, n3);
      }
      static fromJsonString(e3, n3) {
        return new B().fromJsonString(e3, n3);
      }
      static equals(e3, n3) {
        return a2.proto2.util.equals(B, e3, n3);
      }
    }
    n2.DescriptorProto_ExtensionRange = B, B.runtime = a2.proto2, B.typeName = "google.protobuf.DescriptorProto.ExtensionRange", B.fields = a2.proto2.util.newFieldList(() => [{ no: 1, name: "start", kind: "scalar", T: 5, opt: true }, { no: 2, name: "end", kind: "scalar", T: 5, opt: true }, { no: 3, name: "options", kind: "message", T: v, opt: true }]);
    class Q extends s2.Message {
      constructor(e3) {
        super(), a2.proto2.util.initPartial(e3, this);
      }
      static fromBinary(e3, n3) {
        return new Q().fromBinary(e3, n3);
      }
      static fromJson(e3, n3) {
        return new Q().fromJson(e3, n3);
      }
      static fromJsonString(e3, n3) {
        return new Q().fromJsonString(e3, n3);
      }
      static equals(e3, n3) {
        return a2.proto2.util.equals(Q, e3, n3);
      }
    }
    n2.DescriptorProto_ReservedRange = Q, Q.runtime = a2.proto2, Q.typeName = "google.protobuf.DescriptorProto.ReservedRange", Q.fields = a2.proto2.util.newFieldList(() => [{ no: 1, name: "start", kind: "scalar", T: 5, opt: true }, { no: 2, name: "end", kind: "scalar", T: 5, opt: true }]);
    class v extends s2.Message {
      constructor(e3) {
        super(), this.uninterpretedOption = [], this.declaration = [], a2.proto2.util.initPartial(e3, this);
      }
      static fromBinary(e3, n3) {
        return new v().fromBinary(e3, n3);
      }
      static fromJson(e3, n3) {
        return new v().fromJson(e3, n3);
      }
      static fromJsonString(e3, n3) {
        return new v().fromJsonString(e3, n3);
      }
      static equals(e3, n3) {
        return a2.proto2.util.equals(v, e3, n3);
      }
    }
    n2.ExtensionRangeOptions = v, v.runtime = a2.proto2, v.typeName = "google.protobuf.ExtensionRangeOptions", v.fields = a2.proto2.util.newFieldList(() => [{ no: 999, name: "uninterpreted_option", kind: "message", T: H, repeated: true }, { no: 2, name: "declaration", kind: "message", T: R, repeated: true }, { no: 50, name: "features", kind: "message", T: j, opt: true }, { no: 3, name: "verification", kind: "enum", T: a2.proto2.getEnumType(r), opt: true, default: r.UNVERIFIED }]), (function(e3) {
      e3[e3.DECLARATION = 0] = "DECLARATION", e3[e3.UNVERIFIED = 1] = "UNVERIFIED";
    })(r || (n2.ExtensionRangeOptions_VerificationState = r = {})), a2.proto2.util.setEnumType(r, "google.protobuf.ExtensionRangeOptions.VerificationState", [{ no: 0, name: "DECLARATION" }, { no: 1, name: "UNVERIFIED" }]);
    class R extends s2.Message {
      constructor(e3) {
        super(), a2.proto2.util.initPartial(e3, this);
      }
      static fromBinary(e3, n3) {
        return new R().fromBinary(e3, n3);
      }
      static fromJson(e3, n3) {
        return new R().fromJson(e3, n3);
      }
      static fromJsonString(e3, n3) {
        return new R().fromJsonString(e3, n3);
      }
      static equals(e3, n3) {
        return a2.proto2.util.equals(R, e3, n3);
      }
    }
    n2.ExtensionRangeOptions_Declaration = R, R.runtime = a2.proto2, R.typeName = "google.protobuf.ExtensionRangeOptions.Declaration", R.fields = a2.proto2.util.newFieldList(() => [{ no: 1, name: "number", kind: "scalar", T: 5, opt: true }, { no: 2, name: "full_name", kind: "scalar", T: 9, opt: true }, { no: 3, name: "type", kind: "scalar", T: 9, opt: true }, { no: 5, name: "reserved", kind: "scalar", T: 8, opt: true }, { no: 6, name: "repeated", kind: "scalar", T: 8, opt: true }]);
    class N extends s2.Message {
      constructor(e3) {
        super(), a2.proto2.util.initPartial(e3, this);
      }
      static fromBinary(e3, n3) {
        return new N().fromBinary(e3, n3);
      }
      static fromJson(e3, n3) {
        return new N().fromJson(e3, n3);
      }
      static fromJsonString(e3, n3) {
        return new N().fromJsonString(e3, n3);
      }
      static equals(e3, n3) {
        return a2.proto2.util.equals(N, e3, n3);
      }
    }
    n2.FieldDescriptorProto = N, N.runtime = a2.proto2, N.typeName = "google.protobuf.FieldDescriptorProto", N.fields = a2.proto2.util.newFieldList(() => [{ no: 1, name: "name", kind: "scalar", T: 9, opt: true }, { no: 3, name: "number", kind: "scalar", T: 5, opt: true }, { no: 4, name: "label", kind: "enum", T: a2.proto2.getEnumType(A), opt: true }, { no: 5, name: "type", kind: "enum", T: a2.proto2.getEnumType(i), opt: true }, { no: 6, name: "type_name", kind: "scalar", T: 9, opt: true }, { no: 2, name: "extendee", kind: "scalar", T: 9, opt: true }, { no: 7, name: "default_value", kind: "scalar", T: 9, opt: true }, { no: 9, name: "oneof_index", kind: "scalar", T: 5, opt: true }, { no: 10, name: "json_name", kind: "scalar", T: 9, opt: true }, { no: 8, name: "options", kind: "message", T: L, opt: true }, { no: 17, name: "proto3_optional", kind: "scalar", T: 8, opt: true }]), (function(e3) {
      e3[e3.DOUBLE = 1] = "DOUBLE", e3[e3.FLOAT = 2] = "FLOAT", e3[e3.INT64 = 3] = "INT64", e3[e3.UINT64 = 4] = "UINT64", e3[e3.INT32 = 5] = "INT32", e3[e3.FIXED64 = 6] = "FIXED64", e3[e3.FIXED32 = 7] = "FIXED32", e3[e3.BOOL = 8] = "BOOL", e3[e3.STRING = 9] = "STRING", e3[e3.GROUP = 10] = "GROUP", e3[e3.MESSAGE = 11] = "MESSAGE", e3[e3.BYTES = 12] = "BYTES", e3[e3.UINT32 = 13] = "UINT32", e3[e3.ENUM = 14] = "ENUM", e3[e3.SFIXED32 = 15] = "SFIXED32", e3[e3.SFIXED64 = 16] = "SFIXED64", e3[e3.SINT32 = 17] = "SINT32", e3[e3.SINT64 = 18] = "SINT64";
    })(i || (n2.FieldDescriptorProto_Type = i = {})), a2.proto2.util.setEnumType(i, "google.protobuf.FieldDescriptorProto.Type", [{ no: 1, name: "TYPE_DOUBLE" }, { no: 2, name: "TYPE_FLOAT" }, { no: 3, name: "TYPE_INT64" }, { no: 4, name: "TYPE_UINT64" }, { no: 5, name: "TYPE_INT32" }, { no: 6, name: "TYPE_FIXED64" }, { no: 7, name: "TYPE_FIXED32" }, { no: 8, name: "TYPE_BOOL" }, { no: 9, name: "TYPE_STRING" }, { no: 10, name: "TYPE_GROUP" }, { no: 11, name: "TYPE_MESSAGE" }, { no: 12, name: "TYPE_BYTES" }, { no: 13, name: "TYPE_UINT32" }, { no: 14, name: "TYPE_ENUM" }, { no: 15, name: "TYPE_SFIXED32" }, { no: 16, name: "TYPE_SFIXED64" }, { no: 17, name: "TYPE_SINT32" }, { no: 18, name: "TYPE_SINT64" }]), (function(e3) {
      e3[e3.OPTIONAL = 1] = "OPTIONAL", e3[e3.REPEATED = 3] = "REPEATED", e3[e3.REQUIRED = 2] = "REQUIRED";
    })(A || (n2.FieldDescriptorProto_Label = A = {})), a2.proto2.util.setEnumType(A, "google.protobuf.FieldDescriptorProto.Label", [{ no: 1, name: "LABEL_OPTIONAL" }, { no: 3, name: "LABEL_REPEATED" }, { no: 2, name: "LABEL_REQUIRED" }]);
    class S extends s2.Message {
      constructor(e3) {
        super(), a2.proto2.util.initPartial(e3, this);
      }
      static fromBinary(e3, n3) {
        return new S().fromBinary(e3, n3);
      }
      static fromJson(e3, n3) {
        return new S().fromJson(e3, n3);
      }
      static fromJsonString(e3, n3) {
        return new S().fromJsonString(e3, n3);
      }
      static equals(e3, n3) {
        return a2.proto2.util.equals(S, e3, n3);
      }
    }
    n2.OneofDescriptorProto = S, S.runtime = a2.proto2, S.typeName = "google.protobuf.OneofDescriptorProto", S.fields = a2.proto2.util.newFieldList(() => [{ no: 1, name: "name", kind: "scalar", T: 9, opt: true }, { no: 2, name: "options", kind: "message", T: G, opt: true }]);
    class w extends s2.Message {
      constructor(e3) {
        super(), this.value = [], this.reservedRange = [], this.reservedName = [], a2.proto2.util.initPartial(e3, this);
      }
      static fromBinary(e3, n3) {
        return new w().fromBinary(e3, n3);
      }
      static fromJson(e3, n3) {
        return new w().fromJson(e3, n3);
      }
      static fromJsonString(e3, n3) {
        return new w().fromJsonString(e3, n3);
      }
      static equals(e3, n3) {
        return a2.proto2.util.equals(w, e3, n3);
      }
    }
    n2.EnumDescriptorProto = w, w.runtime = a2.proto2, w.typeName = "google.protobuf.EnumDescriptorProto", w.fields = a2.proto2.util.newFieldList(() => [{ no: 1, name: "name", kind: "scalar", T: 9, opt: true }, { no: 2, name: "value", kind: "message", T: D, repeated: true }, { no: 3, name: "options", kind: "message", T: Y, opt: true }, { no: 4, name: "reserved_range", kind: "message", T: b, repeated: true }, { no: 5, name: "reserved_name", kind: "scalar", T: 9, repeated: true }]);
    class b extends s2.Message {
      constructor(e3) {
        super(), a2.proto2.util.initPartial(e3, this);
      }
      static fromBinary(e3, n3) {
        return new b().fromBinary(e3, n3);
      }
      static fromJson(e3, n3) {
        return new b().fromJson(e3, n3);
      }
      static fromJsonString(e3, n3) {
        return new b().fromJsonString(e3, n3);
      }
      static equals(e3, n3) {
        return a2.proto2.util.equals(b, e3, n3);
      }
    }
    n2.EnumDescriptorProto_EnumReservedRange = b, b.runtime = a2.proto2, b.typeName = "google.protobuf.EnumDescriptorProto.EnumReservedRange", b.fields = a2.proto2.util.newFieldList(() => [{ no: 1, name: "start", kind: "scalar", T: 5, opt: true }, { no: 2, name: "end", kind: "scalar", T: 5, opt: true }]);
    class D extends s2.Message {
      constructor(e3) {
        super(), a2.proto2.util.initPartial(e3, this);
      }
      static fromBinary(e3, n3) {
        return new D().fromBinary(e3, n3);
      }
      static fromJson(e3, n3) {
        return new D().fromJson(e3, n3);
      }
      static fromJsonString(e3, n3) {
        return new D().fromJsonString(e3, n3);
      }
      static equals(e3, n3) {
        return a2.proto2.util.equals(D, e3, n3);
      }
    }
    n2.EnumValueDescriptorProto = D, D.runtime = a2.proto2, D.typeName = "google.protobuf.EnumValueDescriptorProto", D.fields = a2.proto2.util.newFieldList(() => [{ no: 1, name: "name", kind: "scalar", T: 9, opt: true }, { no: 2, name: "number", kind: "scalar", T: 5, opt: true }, { no: 3, name: "options", kind: "message", T: J, opt: true }]);
    class M extends s2.Message {
      constructor(e3) {
        super(), this.method = [], a2.proto2.util.initPartial(e3, this);
      }
      static fromBinary(e3, n3) {
        return new M().fromBinary(e3, n3);
      }
      static fromJson(e3, n3) {
        return new M().fromJson(e3, n3);
      }
      static fromJsonString(e3, n3) {
        return new M().fromJsonString(e3, n3);
      }
      static equals(e3, n3) {
        return a2.proto2.util.equals(M, e3, n3);
      }
    }
    n2.ServiceDescriptorProto = M, M.runtime = a2.proto2, M.typeName = "google.protobuf.ServiceDescriptorProto", M.fields = a2.proto2.util.newFieldList(() => [{ no: 1, name: "name", kind: "scalar", T: 9, opt: true }, { no: 2, name: "method", kind: "message", T: F, repeated: true }, { no: 3, name: "options", kind: "message", T: V, opt: true }]);
    class F extends s2.Message {
      constructor(e3) {
        super(), a2.proto2.util.initPartial(e3, this);
      }
      static fromBinary(e3, n3) {
        return new F().fromBinary(e3, n3);
      }
      static fromJson(e3, n3) {
        return new F().fromJson(e3, n3);
      }
      static fromJsonString(e3, n3) {
        return new F().fromJsonString(e3, n3);
      }
      static equals(e3, n3) {
        return a2.proto2.util.equals(F, e3, n3);
      }
    }
    n2.MethodDescriptorProto = F, F.runtime = a2.proto2, F.typeName = "google.protobuf.MethodDescriptorProto", F.fields = a2.proto2.util.newFieldList(() => [{ no: 1, name: "name", kind: "scalar", T: 9, opt: true }, { no: 2, name: "input_type", kind: "scalar", T: 9, opt: true }, { no: 3, name: "output_type", kind: "scalar", T: 9, opt: true }, { no: 4, name: "options", kind: "message", T: q, opt: true }, { no: 5, name: "client_streaming", kind: "scalar", T: 8, opt: true, default: false }, { no: 6, name: "server_streaming", kind: "scalar", T: 8, opt: true, default: false }]);
    class O extends s2.Message {
      constructor(e3) {
        super(), this.uninterpretedOption = [], a2.proto2.util.initPartial(e3, this);
      }
      static fromBinary(e3, n3) {
        return new O().fromBinary(e3, n3);
      }
      static fromJson(e3, n3) {
        return new O().fromJson(e3, n3);
      }
      static fromJsonString(e3, n3) {
        return new O().fromJsonString(e3, n3);
      }
      static equals(e3, n3) {
        return a2.proto2.util.equals(O, e3, n3);
      }
    }
    n2.FileOptions = O, O.runtime = a2.proto2, O.typeName = "google.protobuf.FileOptions", O.fields = a2.proto2.util.newFieldList(() => [{ no: 1, name: "java_package", kind: "scalar", T: 9, opt: true }, { no: 8, name: "java_outer_classname", kind: "scalar", T: 9, opt: true }, { no: 10, name: "java_multiple_files", kind: "scalar", T: 8, opt: true, default: false }, { no: 20, name: "java_generate_equals_and_hash", kind: "scalar", T: 8, opt: true }, { no: 27, name: "java_string_check_utf8", kind: "scalar", T: 8, opt: true, default: false }, { no: 9, name: "optimize_for", kind: "enum", T: a2.proto2.getEnumType(c), opt: true, default: c.SPEED }, { no: 11, name: "go_package", kind: "scalar", T: 9, opt: true }, { no: 16, name: "cc_generic_services", kind: "scalar", T: 8, opt: true, default: false }, { no: 17, name: "java_generic_services", kind: "scalar", T: 8, opt: true, default: false }, { no: 18, name: "py_generic_services", kind: "scalar", T: 8, opt: true, default: false }, { no: 23, name: "deprecated", kind: "scalar", T: 8, opt: true, default: false }, { no: 31, name: "cc_enable_arenas", kind: "scalar", T: 8, opt: true, default: true }, { no: 36, name: "objc_class_prefix", kind: "scalar", T: 9, opt: true }, { no: 37, name: "csharp_namespace", kind: "scalar", T: 9, opt: true }, { no: 39, name: "swift_prefix", kind: "scalar", T: 9, opt: true }, { no: 40, name: "php_class_prefix", kind: "scalar", T: 9, opt: true }, { no: 41, name: "php_namespace", kind: "scalar", T: 9, opt: true }, { no: 44, name: "php_metadata_namespace", kind: "scalar", T: 9, opt: true }, { no: 45, name: "ruby_package", kind: "scalar", T: 9, opt: true }, { no: 50, name: "features", kind: "message", T: j, opt: true }, { no: 999, name: "uninterpreted_option", kind: "message", T: H, repeated: true }]), (function(e3) {
      e3[e3.SPEED = 1] = "SPEED", e3[e3.CODE_SIZE = 2] = "CODE_SIZE", e3[e3.LITE_RUNTIME = 3] = "LITE_RUNTIME";
    })(c || (n2.FileOptions_OptimizeMode = c = {})), a2.proto2.util.setEnumType(c, "google.protobuf.FileOptions.OptimizeMode", [{ no: 1, name: "SPEED" }, { no: 2, name: "CODE_SIZE" }, { no: 3, name: "LITE_RUNTIME" }]);
    class U extends s2.Message {
      constructor(e3) {
        super(), this.uninterpretedOption = [], a2.proto2.util.initPartial(e3, this);
      }
      static fromBinary(e3, n3) {
        return new U().fromBinary(e3, n3);
      }
      static fromJson(e3, n3) {
        return new U().fromJson(e3, n3);
      }
      static fromJsonString(e3, n3) {
        return new U().fromJsonString(e3, n3);
      }
      static equals(e3, n3) {
        return a2.proto2.util.equals(U, e3, n3);
      }
    }
    n2.MessageOptions = U, U.runtime = a2.proto2, U.typeName = "google.protobuf.MessageOptions", U.fields = a2.proto2.util.newFieldList(() => [{ no: 1, name: "message_set_wire_format", kind: "scalar", T: 8, opt: true, default: false }, { no: 2, name: "no_standard_descriptor_accessor", kind: "scalar", T: 8, opt: true, default: false }, { no: 3, name: "deprecated", kind: "scalar", T: 8, opt: true, default: false }, { no: 7, name: "map_entry", kind: "scalar", T: 8, opt: true }, { no: 11, name: "deprecated_legacy_json_field_conflicts", kind: "scalar", T: 8, opt: true }, { no: 12, name: "features", kind: "message", T: j, opt: true }, { no: 999, name: "uninterpreted_option", kind: "message", T: H, repeated: true }]);
    class L extends s2.Message {
      constructor(e3) {
        super(), this.targets = [], this.editionDefaults = [], this.uninterpretedOption = [], a2.proto2.util.initPartial(e3, this);
      }
      static fromBinary(e3, n3) {
        return new L().fromBinary(e3, n3);
      }
      static fromJson(e3, n3) {
        return new L().fromJson(e3, n3);
      }
      static fromJsonString(e3, n3) {
        return new L().fromJsonString(e3, n3);
      }
      static equals(e3, n3) {
        return a2.proto2.util.equals(L, e3, n3);
      }
    }
    n2.FieldOptions = L, L.runtime = a2.proto2, L.typeName = "google.protobuf.FieldOptions", L.fields = a2.proto2.util.newFieldList(() => [{ no: 1, name: "ctype", kind: "enum", T: a2.proto2.getEnumType(l), opt: true, default: l.STRING }, { no: 2, name: "packed", kind: "scalar", T: 8, opt: true }, { no: 6, name: "jstype", kind: "enum", T: a2.proto2.getEnumType(d), opt: true, default: d.JS_NORMAL }, { no: 5, name: "lazy", kind: "scalar", T: 8, opt: true, default: false }, { no: 15, name: "unverified_lazy", kind: "scalar", T: 8, opt: true, default: false }, { no: 3, name: "deprecated", kind: "scalar", T: 8, opt: true, default: false }, { no: 10, name: "weak", kind: "scalar", T: 8, opt: true, default: false }, { no: 16, name: "debug_redact", kind: "scalar", T: 8, opt: true, default: false }, { no: 17, name: "retention", kind: "enum", T: a2.proto2.getEnumType(m), opt: true }, { no: 19, name: "targets", kind: "enum", T: a2.proto2.getEnumType(u), repeated: true }, { no: 20, name: "edition_defaults", kind: "message", T: P, repeated: true }, { no: 21, name: "features", kind: "message", T: j, opt: true }, { no: 22, name: "feature_support", kind: "message", T: x, opt: true }, { no: 999, name: "uninterpreted_option", kind: "message", T: H, repeated: true }]), (function(e3) {
      e3[e3.STRING = 0] = "STRING", e3[e3.CORD = 1] = "CORD", e3[e3.STRING_PIECE = 2] = "STRING_PIECE";
    })(l || (n2.FieldOptions_CType = l = {})), a2.proto2.util.setEnumType(l, "google.protobuf.FieldOptions.CType", [{ no: 0, name: "STRING" }, { no: 1, name: "CORD" }, { no: 2, name: "STRING_PIECE" }]), (function(e3) {
      e3[e3.JS_NORMAL = 0] = "JS_NORMAL", e3[e3.JS_STRING = 1] = "JS_STRING", e3[e3.JS_NUMBER = 2] = "JS_NUMBER";
    })(d || (n2.FieldOptions_JSType = d = {})), a2.proto2.util.setEnumType(d, "google.protobuf.FieldOptions.JSType", [{ no: 0, name: "JS_NORMAL" }, { no: 1, name: "JS_STRING" }, { no: 2, name: "JS_NUMBER" }]), (function(e3) {
      e3[e3.RETENTION_UNKNOWN = 0] = "RETENTION_UNKNOWN", e3[e3.RETENTION_RUNTIME = 1] = "RETENTION_RUNTIME", e3[e3.RETENTION_SOURCE = 2] = "RETENTION_SOURCE";
    })(m || (n2.FieldOptions_OptionRetention = m = {})), a2.proto2.util.setEnumType(m, "google.protobuf.FieldOptions.OptionRetention", [{ no: 0, name: "RETENTION_UNKNOWN" }, { no: 1, name: "RETENTION_RUNTIME" }, { no: 2, name: "RETENTION_SOURCE" }]), (function(e3) {
      e3[e3.TARGET_TYPE_UNKNOWN = 0] = "TARGET_TYPE_UNKNOWN", e3[e3.TARGET_TYPE_FILE = 1] = "TARGET_TYPE_FILE", e3[e3.TARGET_TYPE_EXTENSION_RANGE = 2] = "TARGET_TYPE_EXTENSION_RANGE", e3[e3.TARGET_TYPE_MESSAGE = 3] = "TARGET_TYPE_MESSAGE", e3[e3.TARGET_TYPE_FIELD = 4] = "TARGET_TYPE_FIELD", e3[e3.TARGET_TYPE_ONEOF = 5] = "TARGET_TYPE_ONEOF", e3[e3.TARGET_TYPE_ENUM = 6] = "TARGET_TYPE_ENUM", e3[e3.TARGET_TYPE_ENUM_ENTRY = 7] = "TARGET_TYPE_ENUM_ENTRY", e3[e3.TARGET_TYPE_SERVICE = 8] = "TARGET_TYPE_SERVICE", e3[e3.TARGET_TYPE_METHOD = 9] = "TARGET_TYPE_METHOD";
    })(u || (n2.FieldOptions_OptionTargetType = u = {})), a2.proto2.util.setEnumType(u, "google.protobuf.FieldOptions.OptionTargetType", [{ no: 0, name: "TARGET_TYPE_UNKNOWN" }, { no: 1, name: "TARGET_TYPE_FILE" }, { no: 2, name: "TARGET_TYPE_EXTENSION_RANGE" }, { no: 3, name: "TARGET_TYPE_MESSAGE" }, { no: 4, name: "TARGET_TYPE_FIELD" }, { no: 5, name: "TARGET_TYPE_ONEOF" }, { no: 6, name: "TARGET_TYPE_ENUM" }, { no: 7, name: "TARGET_TYPE_ENUM_ENTRY" }, { no: 8, name: "TARGET_TYPE_SERVICE" }, { no: 9, name: "TARGET_TYPE_METHOD" }]);
    class P extends s2.Message {
      constructor(e3) {
        super(), a2.proto2.util.initPartial(e3, this);
      }
      static fromBinary(e3, n3) {
        return new P().fromBinary(e3, n3);
      }
      static fromJson(e3, n3) {
        return new P().fromJson(e3, n3);
      }
      static fromJsonString(e3, n3) {
        return new P().fromJsonString(e3, n3);
      }
      static equals(e3, n3) {
        return a2.proto2.util.equals(P, e3, n3);
      }
    }
    n2.FieldOptions_EditionDefault = P, P.runtime = a2.proto2, P.typeName = "google.protobuf.FieldOptions.EditionDefault", P.fields = a2.proto2.util.newFieldList(() => [{ no: 3, name: "edition", kind: "enum", T: a2.proto2.getEnumType(o2), opt: true }, { no: 2, name: "value", kind: "scalar", T: 9, opt: true }]);
    class x extends s2.Message {
      constructor(e3) {
        super(), a2.proto2.util.initPartial(e3, this);
      }
      static fromBinary(e3, n3) {
        return new x().fromBinary(e3, n3);
      }
      static fromJson(e3, n3) {
        return new x().fromJson(e3, n3);
      }
      static fromJsonString(e3, n3) {
        return new x().fromJsonString(e3, n3);
      }
      static equals(e3, n3) {
        return a2.proto2.util.equals(x, e3, n3);
      }
    }
    n2.FieldOptions_FeatureSupport = x, x.runtime = a2.proto2, x.typeName = "google.protobuf.FieldOptions.FeatureSupport", x.fields = a2.proto2.util.newFieldList(() => [{ no: 1, name: "edition_introduced", kind: "enum", T: a2.proto2.getEnumType(o2), opt: true }, { no: 2, name: "edition_deprecated", kind: "enum", T: a2.proto2.getEnumType(o2), opt: true }, { no: 3, name: "deprecation_warning", kind: "scalar", T: 9, opt: true }, { no: 4, name: "edition_removed", kind: "enum", T: a2.proto2.getEnumType(o2), opt: true }]);
    class G extends s2.Message {
      constructor(e3) {
        super(), this.uninterpretedOption = [], a2.proto2.util.initPartial(e3, this);
      }
      static fromBinary(e3, n3) {
        return new G().fromBinary(e3, n3);
      }
      static fromJson(e3, n3) {
        return new G().fromJson(e3, n3);
      }
      static fromJsonString(e3, n3) {
        return new G().fromJsonString(e3, n3);
      }
      static equals(e3, n3) {
        return a2.proto2.util.equals(G, e3, n3);
      }
    }
    n2.OneofOptions = G, G.runtime = a2.proto2, G.typeName = "google.protobuf.OneofOptions", G.fields = a2.proto2.util.newFieldList(() => [{ no: 1, name: "features", kind: "message", T: j, opt: true }, { no: 999, name: "uninterpreted_option", kind: "message", T: H, repeated: true }]);
    class Y extends s2.Message {
      constructor(e3) {
        super(), this.uninterpretedOption = [], a2.proto2.util.initPartial(e3, this);
      }
      static fromBinary(e3, n3) {
        return new Y().fromBinary(e3, n3);
      }
      static fromJson(e3, n3) {
        return new Y().fromJson(e3, n3);
      }
      static fromJsonString(e3, n3) {
        return new Y().fromJsonString(e3, n3);
      }
      static equals(e3, n3) {
        return a2.proto2.util.equals(Y, e3, n3);
      }
    }
    n2.EnumOptions = Y, Y.runtime = a2.proto2, Y.typeName = "google.protobuf.EnumOptions", Y.fields = a2.proto2.util.newFieldList(() => [{ no: 2, name: "allow_alias", kind: "scalar", T: 8, opt: true }, { no: 3, name: "deprecated", kind: "scalar", T: 8, opt: true, default: false }, { no: 6, name: "deprecated_legacy_json_field_conflicts", kind: "scalar", T: 8, opt: true }, { no: 7, name: "features", kind: "message", T: j, opt: true }, { no: 999, name: "uninterpreted_option", kind: "message", T: H, repeated: true }]);
    class J extends s2.Message {
      constructor(e3) {
        super(), this.uninterpretedOption = [], a2.proto2.util.initPartial(e3, this);
      }
      static fromBinary(e3, n3) {
        return new J().fromBinary(e3, n3);
      }
      static fromJson(e3, n3) {
        return new J().fromJson(e3, n3);
      }
      static fromJsonString(e3, n3) {
        return new J().fromJsonString(e3, n3);
      }
      static equals(e3, n3) {
        return a2.proto2.util.equals(J, e3, n3);
      }
    }
    n2.EnumValueOptions = J, J.runtime = a2.proto2, J.typeName = "google.protobuf.EnumValueOptions", J.fields = a2.proto2.util.newFieldList(() => [{ no: 1, name: "deprecated", kind: "scalar", T: 8, opt: true, default: false }, { no: 2, name: "features", kind: "message", T: j, opt: true }, { no: 3, name: "debug_redact", kind: "scalar", T: 8, opt: true, default: false }, { no: 4, name: "feature_support", kind: "message", T: x, opt: true }, { no: 999, name: "uninterpreted_option", kind: "message", T: H, repeated: true }]);
    class V extends s2.Message {
      constructor(e3) {
        super(), this.uninterpretedOption = [], a2.proto2.util.initPartial(e3, this);
      }
      static fromBinary(e3, n3) {
        return new V().fromBinary(e3, n3);
      }
      static fromJson(e3, n3) {
        return new V().fromJson(e3, n3);
      }
      static fromJsonString(e3, n3) {
        return new V().fromJsonString(e3, n3);
      }
      static equals(e3, n3) {
        return a2.proto2.util.equals(V, e3, n3);
      }
    }
    n2.ServiceOptions = V, V.runtime = a2.proto2, V.typeName = "google.protobuf.ServiceOptions", V.fields = a2.proto2.util.newFieldList(() => [{ no: 34, name: "features", kind: "message", T: j, opt: true }, { no: 33, name: "deprecated", kind: "scalar", T: 8, opt: true, default: false }, { no: 999, name: "uninterpreted_option", kind: "message", T: H, repeated: true }]);
    class q extends s2.Message {
      constructor(e3) {
        super(), this.uninterpretedOption = [], a2.proto2.util.initPartial(e3, this);
      }
      static fromBinary(e3, n3) {
        return new q().fromBinary(e3, n3);
      }
      static fromJson(e3, n3) {
        return new q().fromJson(e3, n3);
      }
      static fromJsonString(e3, n3) {
        return new q().fromJsonString(e3, n3);
      }
      static equals(e3, n3) {
        return a2.proto2.util.equals(q, e3, n3);
      }
    }
    n2.MethodOptions = q, q.runtime = a2.proto2, q.typeName = "google.protobuf.MethodOptions", q.fields = a2.proto2.util.newFieldList(() => [{ no: 33, name: "deprecated", kind: "scalar", T: 8, opt: true, default: false }, { no: 34, name: "idempotency_level", kind: "enum", T: a2.proto2.getEnumType(g), opt: true, default: g.IDEMPOTENCY_UNKNOWN }, { no: 35, name: "features", kind: "message", T: j, opt: true }, { no: 999, name: "uninterpreted_option", kind: "message", T: H, repeated: true }]), (function(e3) {
      e3[e3.IDEMPOTENCY_UNKNOWN = 0] = "IDEMPOTENCY_UNKNOWN", e3[e3.NO_SIDE_EFFECTS = 1] = "NO_SIDE_EFFECTS", e3[e3.IDEMPOTENT = 2] = "IDEMPOTENT";
    })(g || (n2.MethodOptions_IdempotencyLevel = g = {})), a2.proto2.util.setEnumType(g, "google.protobuf.MethodOptions.IdempotencyLevel", [{ no: 0, name: "IDEMPOTENCY_UNKNOWN" }, { no: 1, name: "NO_SIDE_EFFECTS" }, { no: 2, name: "IDEMPOTENT" }]);
    class H extends s2.Message {
      constructor(e3) {
        super(), this.name = [], a2.proto2.util.initPartial(e3, this);
      }
      static fromBinary(e3, n3) {
        return new H().fromBinary(e3, n3);
      }
      static fromJson(e3, n3) {
        return new H().fromJson(e3, n3);
      }
      static fromJsonString(e3, n3) {
        return new H().fromJsonString(e3, n3);
      }
      static equals(e3, n3) {
        return a2.proto2.util.equals(H, e3, n3);
      }
    }
    n2.UninterpretedOption = H, H.runtime = a2.proto2, H.typeName = "google.protobuf.UninterpretedOption", H.fields = a2.proto2.util.newFieldList(() => [{ no: 2, name: "name", kind: "message", T: W, repeated: true }, { no: 3, name: "identifier_value", kind: "scalar", T: 9, opt: true }, { no: 4, name: "positive_int_value", kind: "scalar", T: 4, opt: true }, { no: 5, name: "negative_int_value", kind: "scalar", T: 3, opt: true }, { no: 6, name: "double_value", kind: "scalar", T: 1, opt: true }, { no: 7, name: "string_value", kind: "scalar", T: 12, opt: true }, { no: 8, name: "aggregate_value", kind: "scalar", T: 9, opt: true }]);
    class W extends s2.Message {
      constructor(e3) {
        super(), a2.proto2.util.initPartial(e3, this);
      }
      static fromBinary(e3, n3) {
        return new W().fromBinary(e3, n3);
      }
      static fromJson(e3, n3) {
        return new W().fromJson(e3, n3);
      }
      static fromJsonString(e3, n3) {
        return new W().fromJsonString(e3, n3);
      }
      static equals(e3, n3) {
        return a2.proto2.util.equals(W, e3, n3);
      }
    }
    n2.UninterpretedOption_NamePart = W, W.runtime = a2.proto2, W.typeName = "google.protobuf.UninterpretedOption.NamePart", W.fields = a2.proto2.util.newFieldList(() => [{ no: 1, name: "name_part", kind: "scalar", T: 9, req: true }, { no: 2, name: "is_extension", kind: "scalar", T: 8, req: true }]);
    class j extends s2.Message {
      constructor(e3) {
        super(), a2.proto2.util.initPartial(e3, this);
      }
      static fromBinary(e3, n3) {
        return new j().fromBinary(e3, n3);
      }
      static fromJson(e3, n3) {
        return new j().fromJson(e3, n3);
      }
      static fromJsonString(e3, n3) {
        return new j().fromJsonString(e3, n3);
      }
      static equals(e3, n3) {
        return a2.proto2.util.equals(j, e3, n3);
      }
    }
    n2.FeatureSet = j, j.runtime = a2.proto2, j.typeName = "google.protobuf.FeatureSet", j.fields = a2.proto2.util.newFieldList(() => [{ no: 1, name: "field_presence", kind: "enum", T: a2.proto2.getEnumType(p), opt: true }, { no: 2, name: "enum_type", kind: "enum", T: a2.proto2.getEnumType(E), opt: true }, { no: 3, name: "repeated_field_encoding", kind: "enum", T: a2.proto2.getEnumType(h), opt: true }, { no: 4, name: "utf8_validation", kind: "enum", T: a2.proto2.getEnumType(T), opt: true }, { no: 5, name: "message_encoding", kind: "enum", T: a2.proto2.getEnumType(k), opt: true }, { no: 6, name: "json_format", kind: "enum", T: a2.proto2.getEnumType(f), opt: true }]), (function(e3) {
      e3[e3.FIELD_PRESENCE_UNKNOWN = 0] = "FIELD_PRESENCE_UNKNOWN", e3[e3.EXPLICIT = 1] = "EXPLICIT", e3[e3.IMPLICIT = 2] = "IMPLICIT", e3[e3.LEGACY_REQUIRED = 3] = "LEGACY_REQUIRED";
    })(p || (n2.FeatureSet_FieldPresence = p = {})), a2.proto2.util.setEnumType(p, "google.protobuf.FeatureSet.FieldPresence", [{ no: 0, name: "FIELD_PRESENCE_UNKNOWN" }, { no: 1, name: "EXPLICIT" }, { no: 2, name: "IMPLICIT" }, { no: 3, name: "LEGACY_REQUIRED" }]), (function(e3) {
      e3[e3.ENUM_TYPE_UNKNOWN = 0] = "ENUM_TYPE_UNKNOWN", e3[e3.OPEN = 1] = "OPEN", e3[e3.CLOSED = 2] = "CLOSED";
    })(E || (n2.FeatureSet_EnumType = E = {})), a2.proto2.util.setEnumType(E, "google.protobuf.FeatureSet.EnumType", [{ no: 0, name: "ENUM_TYPE_UNKNOWN" }, { no: 1, name: "OPEN" }, { no: 2, name: "CLOSED" }]), (function(e3) {
      e3[e3.REPEATED_FIELD_ENCODING_UNKNOWN = 0] = "REPEATED_FIELD_ENCODING_UNKNOWN", e3[e3.PACKED = 1] = "PACKED", e3[e3.EXPANDED = 2] = "EXPANDED";
    })(h || (n2.FeatureSet_RepeatedFieldEncoding = h = {})), a2.proto2.util.setEnumType(h, "google.protobuf.FeatureSet.RepeatedFieldEncoding", [{ no: 0, name: "REPEATED_FIELD_ENCODING_UNKNOWN" }, { no: 1, name: "PACKED" }, { no: 2, name: "EXPANDED" }]), (function(e3) {
      e3[e3.UTF8_VALIDATION_UNKNOWN = 0] = "UTF8_VALIDATION_UNKNOWN", e3[e3.VERIFY = 2] = "VERIFY", e3[e3.NONE = 3] = "NONE";
    })(T || (n2.FeatureSet_Utf8Validation = T = {})), a2.proto2.util.setEnumType(T, "google.protobuf.FeatureSet.Utf8Validation", [{ no: 0, name: "UTF8_VALIDATION_UNKNOWN" }, { no: 2, name: "VERIFY" }, { no: 3, name: "NONE" }]), (function(e3) {
      e3[e3.MESSAGE_ENCODING_UNKNOWN = 0] = "MESSAGE_ENCODING_UNKNOWN", e3[e3.LENGTH_PREFIXED = 1] = "LENGTH_PREFIXED", e3[e3.DELIMITED = 2] = "DELIMITED";
    })(k || (n2.FeatureSet_MessageEncoding = k = {})), a2.proto2.util.setEnumType(k, "google.protobuf.FeatureSet.MessageEncoding", [{ no: 0, name: "MESSAGE_ENCODING_UNKNOWN" }, { no: 1, name: "LENGTH_PREFIXED" }, { no: 2, name: "DELIMITED" }]), (function(e3) {
      e3[e3.JSON_FORMAT_UNKNOWN = 0] = "JSON_FORMAT_UNKNOWN", e3[e3.ALLOW = 1] = "ALLOW", e3[e3.LEGACY_BEST_EFFORT = 2] = "LEGACY_BEST_EFFORT";
    })(f || (n2.FeatureSet_JsonFormat = f = {})), a2.proto2.util.setEnumType(f, "google.protobuf.FeatureSet.JsonFormat", [{ no: 0, name: "JSON_FORMAT_UNKNOWN" }, { no: 1, name: "ALLOW" }, { no: 2, name: "LEGACY_BEST_EFFORT" }]);
    class K extends s2.Message {
      constructor(e3) {
        super(), this.defaults = [], a2.proto2.util.initPartial(e3, this);
      }
      static fromBinary(e3, n3) {
        return new K().fromBinary(e3, n3);
      }
      static fromJson(e3, n3) {
        return new K().fromJson(e3, n3);
      }
      static fromJsonString(e3, n3) {
        return new K().fromJsonString(e3, n3);
      }
      static equals(e3, n3) {
        return a2.proto2.util.equals(K, e3, n3);
      }
    }
    n2.FeatureSetDefaults = K, K.runtime = a2.proto2, K.typeName = "google.protobuf.FeatureSetDefaults", K.fields = a2.proto2.util.newFieldList(() => [{ no: 1, name: "defaults", kind: "message", T: $, repeated: true }, { no: 4, name: "minimum_edition", kind: "enum", T: a2.proto2.getEnumType(o2), opt: true }, { no: 5, name: "maximum_edition", kind: "enum", T: a2.proto2.getEnumType(o2), opt: true }]);
    class $ extends s2.Message {
      constructor(e3) {
        super(), a2.proto2.util.initPartial(e3, this);
      }
      static fromBinary(e3, n3) {
        return new $().fromBinary(e3, n3);
      }
      static fromJson(e3, n3) {
        return new $().fromJson(e3, n3);
      }
      static fromJsonString(e3, n3) {
        return new $().fromJsonString(e3, n3);
      }
      static equals(e3, n3) {
        return a2.proto2.util.equals($, e3, n3);
      }
    }
    n2.FeatureSetDefaults_FeatureSetEditionDefault = $, $.runtime = a2.proto2, $.typeName = "google.protobuf.FeatureSetDefaults.FeatureSetEditionDefault", $.fields = a2.proto2.util.newFieldList(() => [{ no: 3, name: "edition", kind: "enum", T: a2.proto2.getEnumType(o2), opt: true }, { no: 4, name: "overridable_features", kind: "message", T: j, opt: true }, { no: 5, name: "fixed_features", kind: "message", T: j, opt: true }]);
    class X extends s2.Message {
      constructor(e3) {
        super(), this.location = [], a2.proto2.util.initPartial(e3, this);
      }
      static fromBinary(e3, n3) {
        return new X().fromBinary(e3, n3);
      }
      static fromJson(e3, n3) {
        return new X().fromJson(e3, n3);
      }
      static fromJsonString(e3, n3) {
        return new X().fromJsonString(e3, n3);
      }
      static equals(e3, n3) {
        return a2.proto2.util.equals(X, e3, n3);
      }
    }
    n2.SourceCodeInfo = X, X.runtime = a2.proto2, X.typeName = "google.protobuf.SourceCodeInfo", X.fields = a2.proto2.util.newFieldList(() => [{ no: 1, name: "location", kind: "message", T: Z, repeated: true }]);
    class Z extends s2.Message {
      constructor(e3) {
        super(), this.path = [], this.span = [], this.leadingDetachedComments = [], a2.proto2.util.initPartial(e3, this);
      }
      static fromBinary(e3, n3) {
        return new Z().fromBinary(e3, n3);
      }
      static fromJson(e3, n3) {
        return new Z().fromJson(e3, n3);
      }
      static fromJsonString(e3, n3) {
        return new Z().fromJsonString(e3, n3);
      }
      static equals(e3, n3) {
        return a2.proto2.util.equals(Z, e3, n3);
      }
    }
    n2.SourceCodeInfo_Location = Z, Z.runtime = a2.proto2, Z.typeName = "google.protobuf.SourceCodeInfo.Location", Z.fields = a2.proto2.util.newFieldList(() => [{ no: 1, name: "path", kind: "scalar", T: 5, repeated: true, packed: true }, { no: 2, name: "span", kind: "scalar", T: 5, repeated: true, packed: true }, { no: 3, name: "leading_comments", kind: "scalar", T: 9, opt: true }, { no: 4, name: "trailing_comments", kind: "scalar", T: 9, opt: true }, { no: 6, name: "leading_detached_comments", kind: "scalar", T: 9, repeated: true }]);
    class z extends s2.Message {
      constructor(e3) {
        super(), this.annotation = [], a2.proto2.util.initPartial(e3, this);
      }
      static fromBinary(e3, n3) {
        return new z().fromBinary(e3, n3);
      }
      static fromJson(e3, n3) {
        return new z().fromJson(e3, n3);
      }
      static fromJsonString(e3, n3) {
        return new z().fromJsonString(e3, n3);
      }
      static equals(e3, n3) {
        return a2.proto2.util.equals(z, e3, n3);
      }
    }
    n2.GeneratedCodeInfo = z, z.runtime = a2.proto2, z.typeName = "google.protobuf.GeneratedCodeInfo", z.fields = a2.proto2.util.newFieldList(() => [{ no: 1, name: "annotation", kind: "message", T: ee, repeated: true }]);
    class ee extends s2.Message {
      constructor(e3) {
        super(), this.path = [], a2.proto2.util.initPartial(e3, this);
      }
      static fromBinary(e3, n3) {
        return new ee().fromBinary(e3, n3);
      }
      static fromJson(e3, n3) {
        return new ee().fromJson(e3, n3);
      }
      static fromJsonString(e3, n3) {
        return new ee().fromJsonString(e3, n3);
      }
      static equals(e3, n3) {
        return a2.proto2.util.equals(ee, e3, n3);
      }
    }
    n2.GeneratedCodeInfo_Annotation = ee, ee.runtime = a2.proto2, ee.typeName = "google.protobuf.GeneratedCodeInfo.Annotation", ee.fields = a2.proto2.util.newFieldList(() => [{ no: 1, name: "path", kind: "scalar", T: 5, repeated: true, packed: true }, { no: 2, name: "source_file", kind: "scalar", T: 9, opt: true }, { no: 3, name: "begin", kind: "scalar", T: 5, opt: true }, { no: 4, name: "end", kind: "scalar", T: 5, opt: true }, { no: 5, name: "semantic", kind: "enum", T: a2.proto2.getEnumType(_), opt: true }]), (function(e3) {
      e3[e3.NONE = 0] = "NONE", e3[e3.SET = 1] = "SET", e3[e3.ALIAS = 2] = "ALIAS";
    })(_ || (n2.GeneratedCodeInfo_Annotation_Semantic = _ = {})), a2.proto2.util.setEnumType(_, "google.protobuf.GeneratedCodeInfo.Annotation.Semantic", [{ no: 0, name: "NONE" }, { no: 1, name: "SET" }, { no: 2, name: "ALIAS" }]);
  }
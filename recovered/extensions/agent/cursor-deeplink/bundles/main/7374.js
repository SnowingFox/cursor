// @recovered-by cursor-re
// artifact: app/extensions/cursor-deeplink/dist/main.js sha256:2b0091d260814e411af8319789fee5fe8b4b75d7c27c85b905f80c4d53d995f3
// module: 7374 range:651316..696101
// basis: webpack-id confidence: C
// method: split
// run: ext-agent 2026-11-05T10:20:08.356Z
7374: (e2, t2, A2) => {
    "use strict";
    Object.defineProperty(t2, "__esModule", { value: true }), t2.GeneratedCodeInfo_Annotation_Semantic = t2.GeneratedCodeInfo_Annotation = t2.GeneratedCodeInfo = t2.SourceCodeInfo_Location = t2.SourceCodeInfo = t2.FeatureSetDefaults_FeatureSetEditionDefault = t2.FeatureSetDefaults = t2.FeatureSet_JsonFormat = t2.FeatureSet_MessageEncoding = t2.FeatureSet_Utf8Validation = t2.FeatureSet_RepeatedFieldEncoding = t2.FeatureSet_EnumType = t2.FeatureSet_FieldPresence = t2.FeatureSet = t2.UninterpretedOption_NamePart = t2.UninterpretedOption = t2.MethodOptions_IdempotencyLevel = t2.MethodOptions = t2.ServiceOptions = t2.EnumValueOptions = t2.EnumOptions = t2.OneofOptions = t2.FieldOptions_FeatureSupport = t2.FieldOptions_EditionDefault = t2.FieldOptions_OptionTargetType = t2.FieldOptions_OptionRetention = t2.FieldOptions_JSType = t2.FieldOptions_CType = t2.FieldOptions = t2.MessageOptions = t2.FileOptions_OptimizeMode = t2.FileOptions = t2.MethodDescriptorProto = t2.ServiceDescriptorProto = t2.EnumValueDescriptorProto = t2.EnumDescriptorProto_EnumReservedRange = t2.EnumDescriptorProto = t2.OneofDescriptorProto = t2.FieldDescriptorProto_Label = t2.FieldDescriptorProto_Type = t2.FieldDescriptorProto = t2.ExtensionRangeOptions_Declaration = t2.ExtensionRangeOptions_VerificationState = t2.ExtensionRangeOptions = t2.DescriptorProto_ReservedRange = t2.DescriptorProto_ExtensionRange = t2.DescriptorProto = t2.FileDescriptorProto = t2.FileDescriptorSet = t2.Edition = void 0;
    const n2 = A2(3672), r2 = A2(4193);
    var o2, s, i, a, c, l, u, g, E, h, d, I, B, Q, f, C, p;
    !(function(e3) {
      e3[e3.EDITION_UNKNOWN = 0] = "EDITION_UNKNOWN", e3[e3.EDITION_LEGACY = 900] = "EDITION_LEGACY", e3[e3.EDITION_PROTO2 = 998] = "EDITION_PROTO2", e3[e3.EDITION_PROTO3 = 999] = "EDITION_PROTO3", e3[e3.EDITION_2023 = 1e3] = "EDITION_2023", e3[e3.EDITION_2024 = 1001] = "EDITION_2024", e3[e3.EDITION_1_TEST_ONLY = 1] = "EDITION_1_TEST_ONLY", e3[e3.EDITION_2_TEST_ONLY = 2] = "EDITION_2_TEST_ONLY", e3[e3.EDITION_99997_TEST_ONLY = 99997] = "EDITION_99997_TEST_ONLY", e3[e3.EDITION_99998_TEST_ONLY = 99998] = "EDITION_99998_TEST_ONLY", e3[e3.EDITION_99999_TEST_ONLY = 99999] = "EDITION_99999_TEST_ONLY", e3[e3.EDITION_MAX = 2147483647] = "EDITION_MAX";
    })(o2 || (t2.Edition = o2 = {})), n2.proto2.util.setEnumType(o2, "google.protobuf.Edition", [{ no: 0, name: "EDITION_UNKNOWN" }, { no: 900, name: "EDITION_LEGACY" }, { no: 998, name: "EDITION_PROTO2" }, { no: 999, name: "EDITION_PROTO3" }, { no: 1e3, name: "EDITION_2023" }, { no: 1001, name: "EDITION_2024" }, { no: 1, name: "EDITION_1_TEST_ONLY" }, { no: 2, name: "EDITION_2_TEST_ONLY" }, { no: 99997, name: "EDITION_99997_TEST_ONLY" }, { no: 99998, name: "EDITION_99998_TEST_ONLY" }, { no: 99999, name: "EDITION_99999_TEST_ONLY" }, { no: 2147483647, name: "EDITION_MAX" }]);
    class m extends r2.Message {
      constructor(e3) {
        super(), this.file = [], n2.proto2.util.initPartial(e3, this);
      }
      static fromBinary(e3, t3) {
        return new m().fromBinary(e3, t3);
      }
      static fromJson(e3, t3) {
        return new m().fromJson(e3, t3);
      }
      static fromJsonString(e3, t3) {
        return new m().fromJsonString(e3, t3);
      }
      static equals(e3, t3) {
        return n2.proto2.util.equals(m, e3, t3);
      }
    }
    t2.FileDescriptorSet = m, m.runtime = n2.proto2, m.typeName = "google.protobuf.FileDescriptorSet", m.fields = n2.proto2.util.newFieldList(() => [{ no: 1, name: "file", kind: "message", T: y, repeated: true }]);
    class y extends r2.Message {
      constructor(e3) {
        super(), this.dependency = [], this.publicDependency = [], this.weakDependency = [], this.messageType = [], this.enumType = [], this.service = [], this.extension = [], n2.proto2.util.initPartial(e3, this);
      }
      static fromBinary(e3, t3) {
        return new y().fromBinary(e3, t3);
      }
      static fromJson(e3, t3) {
        return new y().fromJson(e3, t3);
      }
      static fromJsonString(e3, t3) {
        return new y().fromJsonString(e3, t3);
      }
      static equals(e3, t3) {
        return n2.proto2.util.equals(y, e3, t3);
      }
    }
    t2.FileDescriptorProto = y, y.runtime = n2.proto2, y.typeName = "google.protobuf.FileDescriptorProto", y.fields = n2.proto2.util.newFieldList(() => [{ no: 1, name: "name", kind: "scalar", T: 9, opt: true }, { no: 2, name: "package", kind: "scalar", T: 9, opt: true }, { no: 3, name: "dependency", kind: "scalar", T: 9, repeated: true }, { no: 10, name: "public_dependency", kind: "scalar", T: 5, repeated: true }, { no: 11, name: "weak_dependency", kind: "scalar", T: 5, repeated: true }, { no: 4, name: "message_type", kind: "message", T: w, repeated: true }, { no: 5, name: "enum_type", kind: "message", T: R, repeated: true }, { no: 6, name: "service", kind: "message", T: M, repeated: true }, { no: 7, name: "extension", kind: "message", T: D, repeated: true }, { no: 8, name: "options", kind: "message", T: L, opt: true }, { no: 9, name: "source_code_info", kind: "message", T: Z, opt: true }, { no: 12, name: "syntax", kind: "scalar", T: 9, opt: true }, { no: 14, name: "edition", kind: "enum", T: n2.proto2.getEnumType(o2), opt: true }]);
    class w extends r2.Message {
      constructor(e3) {
        super(), this.field = [], this.extension = [], this.nestedType = [], this.enumType = [], this.extensionRange = [], this.oneofDecl = [], this.reservedRange = [], this.reservedName = [], n2.proto2.util.initPartial(e3, this);
      }
      static fromBinary(e3, t3) {
        return new w().fromBinary(e3, t3);
      }
      static fromJson(e3, t3) {
        return new w().fromJson(e3, t3);
      }
      static fromJsonString(e3, t3) {
        return new w().fromJsonString(e3, t3);
      }
      static equals(e3, t3) {
        return n2.proto2.util.equals(w, e3, t3);
      }
    }
    t2.DescriptorProto = w, w.runtime = n2.proto2, w.typeName = "google.protobuf.DescriptorProto", w.fields = n2.proto2.util.newFieldList(() => [{ no: 1, name: "name", kind: "scalar", T: 9, opt: true }, { no: 2, name: "field", kind: "message", T: D, repeated: true }, { no: 6, name: "extension", kind: "message", T: D, repeated: true }, { no: 3, name: "nested_type", kind: "message", T: w, repeated: true }, { no: 4, name: "enum_type", kind: "message", T: R, repeated: true }, { no: 5, name: "extension_range", kind: "message", T: k, repeated: true }, { no: 8, name: "oneof_decl", kind: "message", T: S, repeated: true }, { no: 7, name: "options", kind: "message", T: _, opt: true }, { no: 9, name: "reserved_range", kind: "message", T: b, repeated: true }, { no: 10, name: "reserved_name", kind: "scalar", T: 9, repeated: true }]);
    class k extends r2.Message {
      constructor(e3) {
        super(), n2.proto2.util.initPartial(e3, this);
      }
      static fromBinary(e3, t3) {
        return new k().fromBinary(e3, t3);
      }
      static fromJson(e3, t3) {
        return new k().fromJson(e3, t3);
      }
      static fromJsonString(e3, t3) {
        return new k().fromJsonString(e3, t3);
      }
      static equals(e3, t3) {
        return n2.proto2.util.equals(k, e3, t3);
      }
    }
    t2.DescriptorProto_ExtensionRange = k, k.runtime = n2.proto2, k.typeName = "google.protobuf.DescriptorProto.ExtensionRange", k.fields = n2.proto2.util.newFieldList(() => [{ no: 1, name: "start", kind: "scalar", T: 5, opt: true }, { no: 2, name: "end", kind: "scalar", T: 5, opt: true }, { no: 3, name: "options", kind: "message", T: N, opt: true }]);
    class b extends r2.Message {
      constructor(e3) {
        super(), n2.proto2.util.initPartial(e3, this);
      }
      static fromBinary(e3, t3) {
        return new b().fromBinary(e3, t3);
      }
      static fromJson(e3, t3) {
        return new b().fromJson(e3, t3);
      }
      static fromJsonString(e3, t3) {
        return new b().fromJsonString(e3, t3);
      }
      static equals(e3, t3) {
        return n2.proto2.util.equals(b, e3, t3);
      }
    }
    t2.DescriptorProto_ReservedRange = b, b.runtime = n2.proto2, b.typeName = "google.protobuf.DescriptorProto.ReservedRange", b.fields = n2.proto2.util.newFieldList(() => [{ no: 1, name: "start", kind: "scalar", T: 5, opt: true }, { no: 2, name: "end", kind: "scalar", T: 5, opt: true }]);
    class N extends r2.Message {
      constructor(e3) {
        super(), this.uninterpretedOption = [], this.declaration = [], n2.proto2.util.initPartial(e3, this);
      }
      static fromBinary(e3, t3) {
        return new N().fromBinary(e3, t3);
      }
      static fromJson(e3, t3) {
        return new N().fromJson(e3, t3);
      }
      static fromJsonString(e3, t3) {
        return new N().fromJsonString(e3, t3);
      }
      static equals(e3, t3) {
        return n2.proto2.util.equals(N, e3, t3);
      }
    }
    t2.ExtensionRangeOptions = N, N.runtime = n2.proto2, N.typeName = "google.protobuf.ExtensionRangeOptions", N.fields = n2.proto2.util.newFieldList(() => [{ no: 999, name: "uninterpreted_option", kind: "message", T: q, repeated: true }, { no: 2, name: "declaration", kind: "message", T, repeated: true }, { no: 50, name: "features", kind: "message", T: j, opt: true }, { no: 3, name: "verification", kind: "enum", T: n2.proto2.getEnumType(s), opt: true, default: s.UNVERIFIED }]), (function(e3) {
      e3[e3.DECLARATION = 0] = "DECLARATION", e3[e3.UNVERIFIED = 1] = "UNVERIFIED";
    })(s || (t2.ExtensionRangeOptions_VerificationState = s = {})), n2.proto2.util.setEnumType(s, "google.protobuf.ExtensionRangeOptions.VerificationState", [{ no: 0, name: "DECLARATION" }, { no: 1, name: "UNVERIFIED" }]);
    class T extends r2.Message {
      constructor(e3) {
        super(), n2.proto2.util.initPartial(e3, this);
      }
      static fromBinary(e3, t3) {
        return new T().fromBinary(e3, t3);
      }
      static fromJson(e3, t3) {
        return new T().fromJson(e3, t3);
      }
      static fromJsonString(e3, t3) {
        return new T().fromJsonString(e3, t3);
      }
      static equals(e3, t3) {
        return n2.proto2.util.equals(T, e3, t3);
      }
    }
    t2.ExtensionRangeOptions_Declaration = T, T.runtime = n2.proto2, T.typeName = "google.protobuf.ExtensionRangeOptions.Declaration", T.fields = n2.proto2.util.newFieldList(() => [{ no: 1, name: "number", kind: "scalar", T: 5, opt: true }, { no: 2, name: "full_name", kind: "scalar", T: 9, opt: true }, { no: 3, name: "type", kind: "scalar", T: 9, opt: true }, { no: 5, name: "reserved", kind: "scalar", T: 8, opt: true }, { no: 6, name: "repeated", kind: "scalar", T: 8, opt: true }]);
    class D extends r2.Message {
      constructor(e3) {
        super(), n2.proto2.util.initPartial(e3, this);
      }
      static fromBinary(e3, t3) {
        return new D().fromBinary(e3, t3);
      }
      static fromJson(e3, t3) {
        return new D().fromJson(e3, t3);
      }
      static fromJsonString(e3, t3) {
        return new D().fromJsonString(e3, t3);
      }
      static equals(e3, t3) {
        return n2.proto2.util.equals(D, e3, t3);
      }
    }
    t2.FieldDescriptorProto = D, D.runtime = n2.proto2, D.typeName = "google.protobuf.FieldDescriptorProto", D.fields = n2.proto2.util.newFieldList(() => [{ no: 1, name: "name", kind: "scalar", T: 9, opt: true }, { no: 3, name: "number", kind: "scalar", T: 5, opt: true }, { no: 4, name: "label", kind: "enum", T: n2.proto2.getEnumType(a), opt: true }, { no: 5, name: "type", kind: "enum", T: n2.proto2.getEnumType(i), opt: true }, { no: 6, name: "type_name", kind: "scalar", T: 9, opt: true }, { no: 2, name: "extendee", kind: "scalar", T: 9, opt: true }, { no: 7, name: "default_value", kind: "scalar", T: 9, opt: true }, { no: 9, name: "oneof_index", kind: "scalar", T: 5, opt: true }, { no: 10, name: "json_name", kind: "scalar", T: 9, opt: true }, { no: 8, name: "options", kind: "message", T: J, opt: true }, { no: 17, name: "proto3_optional", kind: "scalar", T: 8, opt: true }]), (function(e3) {
      e3[e3.DOUBLE = 1] = "DOUBLE", e3[e3.FLOAT = 2] = "FLOAT", e3[e3.INT64 = 3] = "INT64", e3[e3.UINT64 = 4] = "UINT64", e3[e3.INT32 = 5] = "INT32", e3[e3.FIXED64 = 6] = "FIXED64", e3[e3.FIXED32 = 7] = "FIXED32", e3[e3.BOOL = 8] = "BOOL", e3[e3.STRING = 9] = "STRING", e3[e3.GROUP = 10] = "GROUP", e3[e3.MESSAGE = 11] = "MESSAGE", e3[e3.BYTES = 12] = "BYTES", e3[e3.UINT32 = 13] = "UINT32", e3[e3.ENUM = 14] = "ENUM", e3[e3.SFIXED32 = 15] = "SFIXED32", e3[e3.SFIXED64 = 16] = "SFIXED64", e3[e3.SINT32 = 17] = "SINT32", e3[e3.SINT64 = 18] = "SINT64";
    })(i || (t2.FieldDescriptorProto_Type = i = {})), n2.proto2.util.setEnumType(i, "google.protobuf.FieldDescriptorProto.Type", [{ no: 1, name: "TYPE_DOUBLE" }, { no: 2, name: "TYPE_FLOAT" }, { no: 3, name: "TYPE_INT64" }, { no: 4, name: "TYPE_UINT64" }, { no: 5, name: "TYPE_INT32" }, { no: 6, name: "TYPE_FIXED64" }, { no: 7, name: "TYPE_FIXED32" }, { no: 8, name: "TYPE_BOOL" }, { no: 9, name: "TYPE_STRING" }, { no: 10, name: "TYPE_GROUP" }, { no: 11, name: "TYPE_MESSAGE" }, { no: 12, name: "TYPE_BYTES" }, { no: 13, name: "TYPE_UINT32" }, { no: 14, name: "TYPE_ENUM" }, { no: 15, name: "TYPE_SFIXED32" }, { no: 16, name: "TYPE_SFIXED64" }, { no: 17, name: "TYPE_SINT32" }, { no: 18, name: "TYPE_SINT64" }]), (function(e3) {
      e3[e3.OPTIONAL = 1] = "OPTIONAL", e3[e3.REPEATED = 3] = "REPEATED", e3[e3.REQUIRED = 2] = "REQUIRED";
    })(a || (t2.FieldDescriptorProto_Label = a = {})), n2.proto2.util.setEnumType(a, "google.protobuf.FieldDescriptorProto.Label", [{ no: 1, name: "LABEL_OPTIONAL" }, { no: 3, name: "LABEL_REPEATED" }, { no: 2, name: "LABEL_REQUIRED" }]);
    class S extends r2.Message {
      constructor(e3) {
        super(), n2.proto2.util.initPartial(e3, this);
      }
      static fromBinary(e3, t3) {
        return new S().fromBinary(e3, t3);
      }
      static fromJson(e3, t3) {
        return new S().fromJson(e3, t3);
      }
      static fromJsonString(e3, t3) {
        return new S().fromJsonString(e3, t3);
      }
      static equals(e3, t3) {
        return n2.proto2.util.equals(S, e3, t3);
      }
    }
    t2.OneofDescriptorProto = S, S.runtime = n2.proto2, S.typeName = "google.protobuf.OneofDescriptorProto", S.fields = n2.proto2.util.newFieldList(() => [{ no: 1, name: "name", kind: "scalar", T: 9, opt: true }, { no: 2, name: "options", kind: "message", T: G, opt: true }]);
    class R extends r2.Message {
      constructor(e3) {
        super(), this.value = [], this.reservedRange = [], this.reservedName = [], n2.proto2.util.initPartial(e3, this);
      }
      static fromBinary(e3, t3) {
        return new R().fromBinary(e3, t3);
      }
      static fromJson(e3, t3) {
        return new R().fromJson(e3, t3);
      }
      static fromJsonString(e3, t3) {
        return new R().fromJsonString(e3, t3);
      }
      static equals(e3, t3) {
        return n2.proto2.util.equals(R, e3, t3);
      }
    }
    t2.EnumDescriptorProto = R, R.runtime = n2.proto2, R.typeName = "google.protobuf.EnumDescriptorProto", R.fields = n2.proto2.util.newFieldList(() => [{ no: 1, name: "name", kind: "scalar", T: 9, opt: true }, { no: 2, name: "value", kind: "message", T: v, repeated: true }, { no: 3, name: "options", kind: "message", T: P, opt: true }, { no: 4, name: "reserved_range", kind: "message", T: F, repeated: true }, { no: 5, name: "reserved_name", kind: "scalar", T: 9, repeated: true }]);
    class F extends r2.Message {
      constructor(e3) {
        super(), n2.proto2.util.initPartial(e3, this);
      }
      static fromBinary(e3, t3) {
        return new F().fromBinary(e3, t3);
      }
      static fromJson(e3, t3) {
        return new F().fromJson(e3, t3);
      }
      static fromJsonString(e3, t3) {
        return new F().fromJsonString(e3, t3);
      }
      static equals(e3, t3) {
        return n2.proto2.util.equals(F, e3, t3);
      }
    }
    t2.EnumDescriptorProto_EnumReservedRange = F, F.runtime = n2.proto2, F.typeName = "google.protobuf.EnumDescriptorProto.EnumReservedRange", F.fields = n2.proto2.util.newFieldList(() => [{ no: 1, name: "start", kind: "scalar", T: 5, opt: true }, { no: 2, name: "end", kind: "scalar", T: 5, opt: true }]);
    class v extends r2.Message {
      constructor(e3) {
        super(), n2.proto2.util.initPartial(e3, this);
      }
      static fromBinary(e3, t3) {
        return new v().fromBinary(e3, t3);
      }
      static fromJson(e3, t3) {
        return new v().fromJson(e3, t3);
      }
      static fromJsonString(e3, t3) {
        return new v().fromJsonString(e3, t3);
      }
      static equals(e3, t3) {
        return n2.proto2.util.equals(v, e3, t3);
      }
    }
    t2.EnumValueDescriptorProto = v, v.runtime = n2.proto2, v.typeName = "google.protobuf.EnumValueDescriptorProto", v.fields = n2.proto2.util.newFieldList(() => [{ no: 1, name: "name", kind: "scalar", T: 9, opt: true }, { no: 2, name: "number", kind: "scalar", T: 5, opt: true }, { no: 3, name: "options", kind: "message", T: V, opt: true }]);
    class M extends r2.Message {
      constructor(e3) {
        super(), this.method = [], n2.proto2.util.initPartial(e3, this);
      }
      static fromBinary(e3, t3) {
        return new M().fromBinary(e3, t3);
      }
      static fromJson(e3, t3) {
        return new M().fromJson(e3, t3);
      }
      static fromJsonString(e3, t3) {
        return new M().fromJsonString(e3, t3);
      }
      static equals(e3, t3) {
        return n2.proto2.util.equals(M, e3, t3);
      }
    }
    t2.ServiceDescriptorProto = M, M.runtime = n2.proto2, M.typeName = "google.protobuf.ServiceDescriptorProto", M.fields = n2.proto2.util.newFieldList(() => [{ no: 1, name: "name", kind: "scalar", T: 9, opt: true }, { no: 2, name: "method", kind: "message", T: U, repeated: true }, { no: 3, name: "options", kind: "message", T: x, opt: true }]);
    class U extends r2.Message {
      constructor(e3) {
        super(), n2.proto2.util.initPartial(e3, this);
      }
      static fromBinary(e3, t3) {
        return new U().fromBinary(e3, t3);
      }
      static fromJson(e3, t3) {
        return new U().fromJson(e3, t3);
      }
      static fromJsonString(e3, t3) {
        return new U().fromJsonString(e3, t3);
      }
      static equals(e3, t3) {
        return n2.proto2.util.equals(U, e3, t3);
      }
    }
    t2.MethodDescriptorProto = U, U.runtime = n2.proto2, U.typeName = "google.protobuf.MethodDescriptorProto", U.fields = n2.proto2.util.newFieldList(() => [{ no: 1, name: "name", kind: "scalar", T: 9, opt: true }, { no: 2, name: "input_type", kind: "scalar", T: 9, opt: true }, { no: 3, name: "output_type", kind: "scalar", T: 9, opt: true }, { no: 4, name: "options", kind: "message", T: H, opt: true }, { no: 5, name: "client_streaming", kind: "scalar", T: 8, opt: true, default: false }, { no: 6, name: "server_streaming", kind: "scalar", T: 8, opt: true, default: false }]);
    class L extends r2.Message {
      constructor(e3) {
        super(), this.uninterpretedOption = [], n2.proto2.util.initPartial(e3, this);
      }
      static fromBinary(e3, t3) {
        return new L().fromBinary(e3, t3);
      }
      static fromJson(e3, t3) {
        return new L().fromJson(e3, t3);
      }
      static fromJsonString(e3, t3) {
        return new L().fromJsonString(e3, t3);
      }
      static equals(e3, t3) {
        return n2.proto2.util.equals(L, e3, t3);
      }
    }
    t2.FileOptions = L, L.runtime = n2.proto2, L.typeName = "google.protobuf.FileOptions", L.fields = n2.proto2.util.newFieldList(() => [{ no: 1, name: "java_package", kind: "scalar", T: 9, opt: true }, { no: 8, name: "java_outer_classname", kind: "scalar", T: 9, opt: true }, { no: 10, name: "java_multiple_files", kind: "scalar", T: 8, opt: true, default: false }, { no: 20, name: "java_generate_equals_and_hash", kind: "scalar", T: 8, opt: true }, { no: 27, name: "java_string_check_utf8", kind: "scalar", T: 8, opt: true, default: false }, { no: 9, name: "optimize_for", kind: "enum", T: n2.proto2.getEnumType(c), opt: true, default: c.SPEED }, { no: 11, name: "go_package", kind: "scalar", T: 9, opt: true }, { no: 16, name: "cc_generic_services", kind: "scalar", T: 8, opt: true, default: false }, { no: 17, name: "java_generic_services", kind: "scalar", T: 8, opt: true, default: false }, { no: 18, name: "py_generic_services", kind: "scalar", T: 8, opt: true, default: false }, { no: 23, name: "deprecated", kind: "scalar", T: 8, opt: true, default: false }, { no: 31, name: "cc_enable_arenas", kind: "scalar", T: 8, opt: true, default: true }, { no: 36, name: "objc_class_prefix", kind: "scalar", T: 9, opt: true }, { no: 37, name: "csharp_namespace", kind: "scalar", T: 9, opt: true }, { no: 39, name: "swift_prefix", kind: "scalar", T: 9, opt: true }, { no: 40, name: "php_class_prefix", kind: "scalar", T: 9, opt: true }, { no: 41, name: "php_namespace", kind: "scalar", T: 9, opt: true }, { no: 44, name: "php_metadata_namespace", kind: "scalar", T: 9, opt: true }, { no: 45, name: "ruby_package", kind: "scalar", T: 9, opt: true }, { no: 50, name: "features", kind: "message", T: j, opt: true }, { no: 999, name: "uninterpreted_option", kind: "message", T: q, repeated: true }]), (function(e3) {
      e3[e3.SPEED = 1] = "SPEED", e3[e3.CODE_SIZE = 2] = "CODE_SIZE", e3[e3.LITE_RUNTIME = 3] = "LITE_RUNTIME";
    })(c || (t2.FileOptions_OptimizeMode = c = {})), n2.proto2.util.setEnumType(c, "google.protobuf.FileOptions.OptimizeMode", [{ no: 1, name: "SPEED" }, { no: 2, name: "CODE_SIZE" }, { no: 3, name: "LITE_RUNTIME" }]);
    class _ extends r2.Message {
      constructor(e3) {
        super(), this.uninterpretedOption = [], n2.proto2.util.initPartial(e3, this);
      }
      static fromBinary(e3, t3) {
        return new _().fromBinary(e3, t3);
      }
      static fromJson(e3, t3) {
        return new _().fromJson(e3, t3);
      }
      static fromJsonString(e3, t3) {
        return new _().fromJsonString(e3, t3);
      }
      static equals(e3, t3) {
        return n2.proto2.util.equals(_, e3, t3);
      }
    }
    t2.MessageOptions = _, _.runtime = n2.proto2, _.typeName = "google.protobuf.MessageOptions", _.fields = n2.proto2.util.newFieldList(() => [{ no: 1, name: "message_set_wire_format", kind: "scalar", T: 8, opt: true, default: false }, { no: 2, name: "no_standard_descriptor_accessor", kind: "scalar", T: 8, opt: true, default: false }, { no: 3, name: "deprecated", kind: "scalar", T: 8, opt: true, default: false }, { no: 7, name: "map_entry", kind: "scalar", T: 8, opt: true }, { no: 11, name: "deprecated_legacy_json_field_conflicts", kind: "scalar", T: 8, opt: true }, { no: 12, name: "features", kind: "message", T: j, opt: true }, { no: 999, name: "uninterpreted_option", kind: "message", T: q, repeated: true }]);
    class J extends r2.Message {
      constructor(e3) {
        super(), this.targets = [], this.editionDefaults = [], this.uninterpretedOption = [], n2.proto2.util.initPartial(e3, this);
      }
      static fromBinary(e3, t3) {
        return new J().fromBinary(e3, t3);
      }
      static fromJson(e3, t3) {
        return new J().fromJson(e3, t3);
      }
      static fromJsonString(e3, t3) {
        return new J().fromJsonString(e3, t3);
      }
      static equals(e3, t3) {
        return n2.proto2.util.equals(J, e3, t3);
      }
    }
    t2.FieldOptions = J, J.runtime = n2.proto2, J.typeName = "google.protobuf.FieldOptions", J.fields = n2.proto2.util.newFieldList(() => [{ no: 1, name: "ctype", kind: "enum", T: n2.proto2.getEnumType(l), opt: true, default: l.STRING }, { no: 2, name: "packed", kind: "scalar", T: 8, opt: true }, { no: 6, name: "jstype", kind: "enum", T: n2.proto2.getEnumType(u), opt: true, default: u.JS_NORMAL }, { no: 5, name: "lazy", kind: "scalar", T: 8, opt: true, default: false }, { no: 15, name: "unverified_lazy", kind: "scalar", T: 8, opt: true, default: false }, { no: 3, name: "deprecated", kind: "scalar", T: 8, opt: true, default: false }, { no: 10, name: "weak", kind: "scalar", T: 8, opt: true, default: false }, { no: 16, name: "debug_redact", kind: "scalar", T: 8, opt: true, default: false }, { no: 17, name: "retention", kind: "enum", T: n2.proto2.getEnumType(g), opt: true }, { no: 19, name: "targets", kind: "enum", T: n2.proto2.getEnumType(E), repeated: true }, { no: 20, name: "edition_defaults", kind: "message", T: O, repeated: true }, { no: 21, name: "features", kind: "message", T: j, opt: true }, { no: 22, name: "feature_support", kind: "message", T: Y, opt: true }, { no: 999, name: "uninterpreted_option", kind: "message", T: q, repeated: true }]), (function(e3) {
      e3[e3.STRING = 0] = "STRING", e3[e3.CORD = 1] = "CORD", e3[e3.STRING_PIECE = 2] = "STRING_PIECE";
    })(l || (t2.FieldOptions_CType = l = {})), n2.proto2.util.setEnumType(l, "google.protobuf.FieldOptions.CType", [{ no: 0, name: "STRING" }, { no: 1, name: "CORD" }, { no: 2, name: "STRING_PIECE" }]), (function(e3) {
      e3[e3.JS_NORMAL = 0] = "JS_NORMAL", e3[e3.JS_STRING = 1] = "JS_STRING", e3[e3.JS_NUMBER = 2] = "JS_NUMBER";
    })(u || (t2.FieldOptions_JSType = u = {})), n2.proto2.util.setEnumType(u, "google.protobuf.FieldOptions.JSType", [{ no: 0, name: "JS_NORMAL" }, { no: 1, name: "JS_STRING" }, { no: 2, name: "JS_NUMBER" }]), (function(e3) {
      e3[e3.RETENTION_UNKNOWN = 0] = "RETENTION_UNKNOWN", e3[e3.RETENTION_RUNTIME = 1] = "RETENTION_RUNTIME", e3[e3.RETENTION_SOURCE = 2] = "RETENTION_SOURCE";
    })(g || (t2.FieldOptions_OptionRetention = g = {})), n2.proto2.util.setEnumType(g, "google.protobuf.FieldOptions.OptionRetention", [{ no: 0, name: "RETENTION_UNKNOWN" }, { no: 1, name: "RETENTION_RUNTIME" }, { no: 2, name: "RETENTION_SOURCE" }]), (function(e3) {
      e3[e3.TARGET_TYPE_UNKNOWN = 0] = "TARGET_TYPE_UNKNOWN", e3[e3.TARGET_TYPE_FILE = 1] = "TARGET_TYPE_FILE", e3[e3.TARGET_TYPE_EXTENSION_RANGE = 2] = "TARGET_TYPE_EXTENSION_RANGE", e3[e3.TARGET_TYPE_MESSAGE = 3] = "TARGET_TYPE_MESSAGE", e3[e3.TARGET_TYPE_FIELD = 4] = "TARGET_TYPE_FIELD", e3[e3.TARGET_TYPE_ONEOF = 5] = "TARGET_TYPE_ONEOF", e3[e3.TARGET_TYPE_ENUM = 6] = "TARGET_TYPE_ENUM", e3[e3.TARGET_TYPE_ENUM_ENTRY = 7] = "TARGET_TYPE_ENUM_ENTRY", e3[e3.TARGET_TYPE_SERVICE = 8] = "TARGET_TYPE_SERVICE", e3[e3.TARGET_TYPE_METHOD = 9] = "TARGET_TYPE_METHOD";
    })(E || (t2.FieldOptions_OptionTargetType = E = {})), n2.proto2.util.setEnumType(E, "google.protobuf.FieldOptions.OptionTargetType", [{ no: 0, name: "TARGET_TYPE_UNKNOWN" }, { no: 1, name: "TARGET_TYPE_FILE" }, { no: 2, name: "TARGET_TYPE_EXTENSION_RANGE" }, { no: 3, name: "TARGET_TYPE_MESSAGE" }, { no: 4, name: "TARGET_TYPE_FIELD" }, { no: 5, name: "TARGET_TYPE_ONEOF" }, { no: 6, name: "TARGET_TYPE_ENUM" }, { no: 7, name: "TARGET_TYPE_ENUM_ENTRY" }, { no: 8, name: "TARGET_TYPE_SERVICE" }, { no: 9, name: "TARGET_TYPE_METHOD" }]);
    class O extends r2.Message {
      constructor(e3) {
        super(), n2.proto2.util.initPartial(e3, this);
      }
      static fromBinary(e3, t3) {
        return new O().fromBinary(e3, t3);
      }
      static fromJson(e3, t3) {
        return new O().fromJson(e3, t3);
      }
      static fromJsonString(e3, t3) {
        return new O().fromJsonString(e3, t3);
      }
      static equals(e3, t3) {
        return n2.proto2.util.equals(O, e3, t3);
      }
    }
    t2.FieldOptions_EditionDefault = O, O.runtime = n2.proto2, O.typeName = "google.protobuf.FieldOptions.EditionDefault", O.fields = n2.proto2.util.newFieldList(() => [{ no: 3, name: "edition", kind: "enum", T: n2.proto2.getEnumType(o2), opt: true }, { no: 2, name: "value", kind: "scalar", T: 9, opt: true }]);
    class Y extends r2.Message {
      constructor(e3) {
        super(), n2.proto2.util.initPartial(e3, this);
      }
      static fromBinary(e3, t3) {
        return new Y().fromBinary(e3, t3);
      }
      static fromJson(e3, t3) {
        return new Y().fromJson(e3, t3);
      }
      static fromJsonString(e3, t3) {
        return new Y().fromJsonString(e3, t3);
      }
      static equals(e3, t3) {
        return n2.proto2.util.equals(Y, e3, t3);
      }
    }
    t2.FieldOptions_FeatureSupport = Y, Y.runtime = n2.proto2, Y.typeName = "google.protobuf.FieldOptions.FeatureSupport", Y.fields = n2.proto2.util.newFieldList(() => [{ no: 1, name: "edition_introduced", kind: "enum", T: n2.proto2.getEnumType(o2), opt: true }, { no: 2, name: "edition_deprecated", kind: "enum", T: n2.proto2.getEnumType(o2), opt: true }, { no: 3, name: "deprecation_warning", kind: "scalar", T: 9, opt: true }, { no: 4, name: "edition_removed", kind: "enum", T: n2.proto2.getEnumType(o2), opt: true }]);
    class G extends r2.Message {
      constructor(e3) {
        super(), this.uninterpretedOption = [], n2.proto2.util.initPartial(e3, this);
      }
      static fromBinary(e3, t3) {
        return new G().fromBinary(e3, t3);
      }
      static fromJson(e3, t3) {
        return new G().fromJson(e3, t3);
      }
      static fromJsonString(e3, t3) {
        return new G().fromJsonString(e3, t3);
      }
      static equals(e3, t3) {
        return n2.proto2.util.equals(G, e3, t3);
      }
    }
    t2.OneofOptions = G, G.runtime = n2.proto2, G.typeName = "google.protobuf.OneofOptions", G.fields = n2.proto2.util.newFieldList(() => [{ no: 1, name: "features", kind: "message", T: j, opt: true }, { no: 999, name: "uninterpreted_option", kind: "message", T: q, repeated: true }]);
    class P extends r2.Message {
      constructor(e3) {
        super(), this.uninterpretedOption = [], n2.proto2.util.initPartial(e3, this);
      }
      static fromBinary(e3, t3) {
        return new P().fromBinary(e3, t3);
      }
      static fromJson(e3, t3) {
        return new P().fromJson(e3, t3);
      }
      static fromJsonString(e3, t3) {
        return new P().fromJsonString(e3, t3);
      }
      static equals(e3, t3) {
        return n2.proto2.util.equals(P, e3, t3);
      }
    }
    t2.EnumOptions = P, P.runtime = n2.proto2, P.typeName = "google.protobuf.EnumOptions", P.fields = n2.proto2.util.newFieldList(() => [{ no: 2, name: "allow_alias", kind: "scalar", T: 8, opt: true }, { no: 3, name: "deprecated", kind: "scalar", T: 8, opt: true, default: false }, { no: 6, name: "deprecated_legacy_json_field_conflicts", kind: "scalar", T: 8, opt: true }, { no: 7, name: "features", kind: "message", T: j, opt: true }, { no: 999, name: "uninterpreted_option", kind: "message", T: q, repeated: true }]);
    class V extends r2.Message {
      constructor(e3) {
        super(), this.uninterpretedOption = [], n2.proto2.util.initPartial(e3, this);
      }
      static fromBinary(e3, t3) {
        return new V().fromBinary(e3, t3);
      }
      static fromJson(e3, t3) {
        return new V().fromJson(e3, t3);
      }
      static fromJsonString(e3, t3) {
        return new V().fromJsonString(e3, t3);
      }
      static equals(e3, t3) {
        return n2.proto2.util.equals(V, e3, t3);
      }
    }
    t2.EnumValueOptions = V, V.runtime = n2.proto2, V.typeName = "google.protobuf.EnumValueOptions", V.fields = n2.proto2.util.newFieldList(() => [{ no: 1, name: "deprecated", kind: "scalar", T: 8, opt: true, default: false }, { no: 2, name: "features", kind: "message", T: j, opt: true }, { no: 3, name: "debug_redact", kind: "scalar", T: 8, opt: true, default: false }, { no: 4, name: "feature_support", kind: "message", T: Y, opt: true }, { no: 999, name: "uninterpreted_option", kind: "message", T: q, repeated: true }]);
    class x extends r2.Message {
      constructor(e3) {
        super(), this.uninterpretedOption = [], n2.proto2.util.initPartial(e3, this);
      }
      static fromBinary(e3, t3) {
        return new x().fromBinary(e3, t3);
      }
      static fromJson(e3, t3) {
        return new x().fromJson(e3, t3);
      }
      static fromJsonString(e3, t3) {
        return new x().fromJsonString(e3, t3);
      }
      static equals(e3, t3) {
        return n2.proto2.util.equals(x, e3, t3);
      }
    }
    t2.ServiceOptions = x, x.runtime = n2.proto2, x.typeName = "google.protobuf.ServiceOptions", x.fields = n2.proto2.util.newFieldList(() => [{ no: 34, name: "features", kind: "message", T: j, opt: true }, { no: 33, name: "deprecated", kind: "scalar", T: 8, opt: true, default: false }, { no: 999, name: "uninterpreted_option", kind: "message", T: q, repeated: true }]);
    class H extends r2.Message {
      constructor(e3) {
        super(), this.uninterpretedOption = [], n2.proto2.util.initPartial(e3, this);
      }
      static fromBinary(e3, t3) {
        return new H().fromBinary(e3, t3);
      }
      static fromJson(e3, t3) {
        return new H().fromJson(e3, t3);
      }
      static fromJsonString(e3, t3) {
        return new H().fromJsonString(e3, t3);
      }
      static equals(e3, t3) {
        return n2.proto2.util.equals(H, e3, t3);
      }
    }
    t2.MethodOptions = H, H.runtime = n2.proto2, H.typeName = "google.protobuf.MethodOptions", H.fields = n2.proto2.util.newFieldList(() => [{ no: 33, name: "deprecated", kind: "scalar", T: 8, opt: true, default: false }, { no: 34, name: "idempotency_level", kind: "enum", T: n2.proto2.getEnumType(h), opt: true, default: h.IDEMPOTENCY_UNKNOWN }, { no: 35, name: "features", kind: "message", T: j, opt: true }, { no: 999, name: "uninterpreted_option", kind: "message", T: q, repeated: true }]), (function(e3) {
      e3[e3.IDEMPOTENCY_UNKNOWN = 0] = "IDEMPOTENCY_UNKNOWN", e3[e3.NO_SIDE_EFFECTS = 1] = "NO_SIDE_EFFECTS", e3[e3.IDEMPOTENT = 2] = "IDEMPOTENT";
    })(h || (t2.MethodOptions_IdempotencyLevel = h = {})), n2.proto2.util.setEnumType(h, "google.protobuf.MethodOptions.IdempotencyLevel", [{ no: 0, name: "IDEMPOTENCY_UNKNOWN" }, { no: 1, name: "NO_SIDE_EFFECTS" }, { no: 2, name: "IDEMPOTENT" }]);
    class q extends r2.Message {
      constructor(e3) {
        super(), this.name = [], n2.proto2.util.initPartial(e3, this);
      }
      static fromBinary(e3, t3) {
        return new q().fromBinary(e3, t3);
      }
      static fromJson(e3, t3) {
        return new q().fromJson(e3, t3);
      }
      static fromJsonString(e3, t3) {
        return new q().fromJsonString(e3, t3);
      }
      static equals(e3, t3) {
        return n2.proto2.util.equals(q, e3, t3);
      }
    }
    t2.UninterpretedOption = q, q.runtime = n2.proto2, q.typeName = "google.protobuf.UninterpretedOption", q.fields = n2.proto2.util.newFieldList(() => [{ no: 2, name: "name", kind: "message", T: W, repeated: true }, { no: 3, name: "identifier_value", kind: "scalar", T: 9, opt: true }, { no: 4, name: "positive_int_value", kind: "scalar", T: 4, opt: true }, { no: 5, name: "negative_int_value", kind: "scalar", T: 3, opt: true }, { no: 6, name: "double_value", kind: "scalar", T: 1, opt: true }, { no: 7, name: "string_value", kind: "scalar", T: 12, opt: true }, { no: 8, name: "aggregate_value", kind: "scalar", T: 9, opt: true }]);
    class W extends r2.Message {
      constructor(e3) {
        super(), n2.proto2.util.initPartial(e3, this);
      }
      static fromBinary(e3, t3) {
        return new W().fromBinary(e3, t3);
      }
      static fromJson(e3, t3) {
        return new W().fromJson(e3, t3);
      }
      static fromJsonString(e3, t3) {
        return new W().fromJsonString(e3, t3);
      }
      static equals(e3, t3) {
        return n2.proto2.util.equals(W, e3, t3);
      }
    }
    t2.UninterpretedOption_NamePart = W, W.runtime = n2.proto2, W.typeName = "google.protobuf.UninterpretedOption.NamePart", W.fields = n2.proto2.util.newFieldList(() => [{ no: 1, name: "name_part", kind: "scalar", T: 9, req: true }, { no: 2, name: "is_extension", kind: "scalar", T: 8, req: true }]);
    class j extends r2.Message {
      constructor(e3) {
        super(), n2.proto2.util.initPartial(e3, this);
      }
      static fromBinary(e3, t3) {
        return new j().fromBinary(e3, t3);
      }
      static fromJson(e3, t3) {
        return new j().fromJson(e3, t3);
      }
      static fromJsonString(e3, t3) {
        return new j().fromJsonString(e3, t3);
      }
      static equals(e3, t3) {
        return n2.proto2.util.equals(j, e3, t3);
      }
    }
    t2.FeatureSet = j, j.runtime = n2.proto2, j.typeName = "google.protobuf.FeatureSet", j.fields = n2.proto2.util.newFieldList(() => [{ no: 1, name: "field_presence", kind: "enum", T: n2.proto2.getEnumType(d), opt: true }, { no: 2, name: "enum_type", kind: "enum", T: n2.proto2.getEnumType(I), opt: true }, { no: 3, name: "repeated_field_encoding", kind: "enum", T: n2.proto2.getEnumType(B), opt: true }, { no: 4, name: "utf8_validation", kind: "enum", T: n2.proto2.getEnumType(Q), opt: true }, { no: 5, name: "message_encoding", kind: "enum", T: n2.proto2.getEnumType(f), opt: true }, { no: 6, name: "json_format", kind: "enum", T: n2.proto2.getEnumType(C), opt: true }]), (function(e3) {
      e3[e3.FIELD_PRESENCE_UNKNOWN = 0] = "FIELD_PRESENCE_UNKNOWN", e3[e3.EXPLICIT = 1] = "EXPLICIT", e3[e3.IMPLICIT = 2] = "IMPLICIT", e3[e3.LEGACY_REQUIRED = 3] = "LEGACY_REQUIRED";
    })(d || (t2.FeatureSet_FieldPresence = d = {})), n2.proto2.util.setEnumType(d, "google.protobuf.FeatureSet.FieldPresence", [{ no: 0, name: "FIELD_PRESENCE_UNKNOWN" }, { no: 1, name: "EXPLICIT" }, { no: 2, name: "IMPLICIT" }, { no: 3, name: "LEGACY_REQUIRED" }]), (function(e3) {
      e3[e3.ENUM_TYPE_UNKNOWN = 0] = "ENUM_TYPE_UNKNOWN", e3[e3.OPEN = 1] = "OPEN", e3[e3.CLOSED = 2] = "CLOSED";
    })(I || (t2.FeatureSet_EnumType = I = {})), n2.proto2.util.setEnumType(I, "google.protobuf.FeatureSet.EnumType", [{ no: 0, name: "ENUM_TYPE_UNKNOWN" }, { no: 1, name: "OPEN" }, { no: 2, name: "CLOSED" }]), (function(e3) {
      e3[e3.REPEATED_FIELD_ENCODING_UNKNOWN = 0] = "REPEATED_FIELD_ENCODING_UNKNOWN", e3[e3.PACKED = 1] = "PACKED", e3[e3.EXPANDED = 2] = "EXPANDED";
    })(B || (t2.FeatureSet_RepeatedFieldEncoding = B = {})), n2.proto2.util.setEnumType(B, "google.protobuf.FeatureSet.RepeatedFieldEncoding", [{ no: 0, name: "REPEATED_FIELD_ENCODING_UNKNOWN" }, { no: 1, name: "PACKED" }, { no: 2, name: "EXPANDED" }]), (function(e3) {
      e3[e3.UTF8_VALIDATION_UNKNOWN = 0] = "UTF8_VALIDATION_UNKNOWN", e3[e3.VERIFY = 2] = "VERIFY", e3[e3.NONE = 3] = "NONE";
    })(Q || (t2.FeatureSet_Utf8Validation = Q = {})), n2.proto2.util.setEnumType(Q, "google.protobuf.FeatureSet.Utf8Validation", [{ no: 0, name: "UTF8_VALIDATION_UNKNOWN" }, { no: 2, name: "VERIFY" }, { no: 3, name: "NONE" }]), (function(e3) {
      e3[e3.MESSAGE_ENCODING_UNKNOWN = 0] = "MESSAGE_ENCODING_UNKNOWN", e3[e3.LENGTH_PREFIXED = 1] = "LENGTH_PREFIXED", e3[e3.DELIMITED = 2] = "DELIMITED";
    })(f || (t2.FeatureSet_MessageEncoding = f = {})), n2.proto2.util.setEnumType(f, "google.protobuf.FeatureSet.MessageEncoding", [{ no: 0, name: "MESSAGE_ENCODING_UNKNOWN" }, { no: 1, name: "LENGTH_PREFIXED" }, { no: 2, name: "DELIMITED" }]), (function(e3) {
      e3[e3.JSON_FORMAT_UNKNOWN = 0] = "JSON_FORMAT_UNKNOWN", e3[e3.ALLOW = 1] = "ALLOW", e3[e3.LEGACY_BEST_EFFORT = 2] = "LEGACY_BEST_EFFORT";
    })(C || (t2.FeatureSet_JsonFormat = C = {})), n2.proto2.util.setEnumType(C, "google.protobuf.FeatureSet.JsonFormat", [{ no: 0, name: "JSON_FORMAT_UNKNOWN" }, { no: 1, name: "ALLOW" }, { no: 2, name: "LEGACY_BEST_EFFORT" }]);
    class K extends r2.Message {
      constructor(e3) {
        super(), this.defaults = [], n2.proto2.util.initPartial(e3, this);
      }
      static fromBinary(e3, t3) {
        return new K().fromBinary(e3, t3);
      }
      static fromJson(e3, t3) {
        return new K().fromJson(e3, t3);
      }
      static fromJsonString(e3, t3) {
        return new K().fromJsonString(e3, t3);
      }
      static equals(e3, t3) {
        return n2.proto2.util.equals(K, e3, t3);
      }
    }
    t2.FeatureSetDefaults = K, K.runtime = n2.proto2, K.typeName = "google.protobuf.FeatureSetDefaults", K.fields = n2.proto2.util.newFieldList(() => [{ no: 1, name: "defaults", kind: "message", T: X, repeated: true }, { no: 4, name: "minimum_edition", kind: "enum", T: n2.proto2.getEnumType(o2), opt: true }, { no: 5, name: "maximum_edition", kind: "enum", T: n2.proto2.getEnumType(o2), opt: true }]);
    class X extends r2.Message {
      constructor(e3) {
        super(), n2.proto2.util.initPartial(e3, this);
      }
      static fromBinary(e3, t3) {
        return new X().fromBinary(e3, t3);
      }
      static fromJson(e3, t3) {
        return new X().fromJson(e3, t3);
      }
      static fromJsonString(e3, t3) {
        return new X().fromJsonString(e3, t3);
      }
      static equals(e3, t3) {
        return n2.proto2.util.equals(X, e3, t3);
      }
    }
    t2.FeatureSetDefaults_FeatureSetEditionDefault = X, X.runtime = n2.proto2, X.typeName = "google.protobuf.FeatureSetDefaults.FeatureSetEditionDefault", X.fields = n2.proto2.util.newFieldList(() => [{ no: 3, name: "edition", kind: "enum", T: n2.proto2.getEnumType(o2), opt: true }, { no: 4, name: "overridable_features", kind: "message", T: j, opt: true }, { no: 5, name: "fixed_features", kind: "message", T: j, opt: true }]);
    class Z extends r2.Message {
      constructor(e3) {
        super(), this.location = [], n2.proto2.util.initPartial(e3, this);
      }
      static fromBinary(e3, t3) {
        return new Z().fromBinary(e3, t3);
      }
      static fromJson(e3, t3) {
        return new Z().fromJson(e3, t3);
      }
      static fromJsonString(e3, t3) {
        return new Z().fromJsonString(e3, t3);
      }
      static equals(e3, t3) {
        return n2.proto2.util.equals(Z, e3, t3);
      }
    }
    t2.SourceCodeInfo = Z, Z.runtime = n2.proto2, Z.typeName = "google.protobuf.SourceCodeInfo", Z.fields = n2.proto2.util.newFieldList(() => [{ no: 1, name: "location", kind: "message", T: z, repeated: true }]);
    class z extends r2.Message {
      constructor(e3) {
        super(), this.path = [], this.span = [], this.leadingDetachedComments = [], n2.proto2.util.initPartial(e3, this);
      }
      static fromBinary(e3, t3) {
        return new z().fromBinary(e3, t3);
      }
      static fromJson(e3, t3) {
        return new z().fromJson(e3, t3);
      }
      static fromJsonString(e3, t3) {
        return new z().fromJsonString(e3, t3);
      }
      static equals(e3, t3) {
        return n2.proto2.util.equals(z, e3, t3);
      }
    }
    t2.SourceCodeInfo_Location = z, z.runtime = n2.proto2, z.typeName = "google.protobuf.SourceCodeInfo.Location", z.fields = n2.proto2.util.newFieldList(() => [{ no: 1, name: "path", kind: "scalar", T: 5, repeated: true, packed: true }, { no: 2, name: "span", kind: "scalar", T: 5, repeated: true, packed: true }, { no: 3, name: "leading_comments", kind: "scalar", T: 9, opt: true }, { no: 4, name: "trailing_comments", kind: "scalar", T: 9, opt: true }, { no: 6, name: "leading_detached_comments", kind: "scalar", T: 9, repeated: true }]);
    class $ extends r2.Message {
      constructor(e3) {
        super(), this.annotation = [], n2.proto2.util.initPartial(e3, this);
      }
      static fromBinary(e3, t3) {
        return new $().fromBinary(e3, t3);
      }
      static fromJson(e3, t3) {
        return new $().fromJson(e3, t3);
      }
      static fromJsonString(e3, t3) {
        return new $().fromJsonString(e3, t3);
      }
      static equals(e3, t3) {
        return n2.proto2.util.equals($, e3, t3);
      }
    }
    t2.GeneratedCodeInfo = $, $.runtime = n2.proto2, $.typeName = "google.protobuf.GeneratedCodeInfo", $.fields = n2.proto2.util.newFieldList(() => [{ no: 1, name: "annotation", kind: "message", T: ee, repeated: true }]);
    class ee extends r2.Message {
      constructor(e3) {
        super(), this.path = [], n2.proto2.util.initPartial(e3, this);
      }
      static fromBinary(e3, t3) {
        return new ee().fromBinary(e3, t3);
      }
      static fromJson(e3, t3) {
        return new ee().fromJson(e3, t3);
      }
      static fromJsonString(e3, t3) {
        return new ee().fromJsonString(e3, t3);
      }
      static equals(e3, t3) {
        return n2.proto2.util.equals(ee, e3, t3);
      }
    }
    t2.GeneratedCodeInfo_Annotation = ee, ee.runtime = n2.proto2, ee.typeName = "google.protobuf.GeneratedCodeInfo.Annotation", ee.fields = n2.proto2.util.newFieldList(() => [{ no: 1, name: "path", kind: "scalar", T: 5, repeated: true, packed: true }, { no: 2, name: "source_file", kind: "scalar", T: 9, opt: true }, { no: 3, name: "begin", kind: "scalar", T: 5, opt: true }, { no: 4, name: "end", kind: "scalar", T: 5, opt: true }, { no: 5, name: "semantic", kind: "enum", T: n2.proto2.getEnumType(p), opt: true }]), (function(e3) {
      e3[e3.NONE = 0] = "NONE", e3[e3.SET = 1] = "SET", e3[e3.ALIAS = 2] = "ALIAS";
    })(p || (t2.GeneratedCodeInfo_Annotation_Semantic = p = {})), n2.proto2.util.setEnumType(p, "google.protobuf.GeneratedCodeInfo.Annotation.Semantic", [{ no: 0, name: "NONE" }, { no: 1, name: "SET" }, { no: 2, name: "ALIAS" }]);
  }
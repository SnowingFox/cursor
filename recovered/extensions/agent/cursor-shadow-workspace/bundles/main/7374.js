// @recovered-by cursor-re
// artifact: app/extensions/cursor-shadow-workspace/dist/extension.js sha256:19218949e5ecc64e4c1b41e194ba40abfd54a9aeb034a14f90c71485b7f84585
// module: 7374 range:539794..584576
// basis: webpack-id confidence: C
// method: split
// run: ext-agent 2026-11-05T10:20:08.356Z
7374: (e2, A2, t2) => {
    "use strict";
    Object.defineProperty(A2, "__esModule", { value: true }), A2.GeneratedCodeInfo_Annotation_Semantic = A2.GeneratedCodeInfo_Annotation = A2.GeneratedCodeInfo = A2.SourceCodeInfo_Location = A2.SourceCodeInfo = A2.FeatureSetDefaults_FeatureSetEditionDefault = A2.FeatureSetDefaults = A2.FeatureSet_JsonFormat = A2.FeatureSet_MessageEncoding = A2.FeatureSet_Utf8Validation = A2.FeatureSet_RepeatedFieldEncoding = A2.FeatureSet_EnumType = A2.FeatureSet_FieldPresence = A2.FeatureSet = A2.UninterpretedOption_NamePart = A2.UninterpretedOption = A2.MethodOptions_IdempotencyLevel = A2.MethodOptions = A2.ServiceOptions = A2.EnumValueOptions = A2.EnumOptions = A2.OneofOptions = A2.FieldOptions_FeatureSupport = A2.FieldOptions_EditionDefault = A2.FieldOptions_OptionTargetType = A2.FieldOptions_OptionRetention = A2.FieldOptions_JSType = A2.FieldOptions_CType = A2.FieldOptions = A2.MessageOptions = A2.FileOptions_OptimizeMode = A2.FileOptions = A2.MethodDescriptorProto = A2.ServiceDescriptorProto = A2.EnumValueDescriptorProto = A2.EnumDescriptorProto_EnumReservedRange = A2.EnumDescriptorProto = A2.OneofDescriptorProto = A2.FieldDescriptorProto_Label = A2.FieldDescriptorProto_Type = A2.FieldDescriptorProto = A2.ExtensionRangeOptions_Declaration = A2.ExtensionRangeOptions_VerificationState = A2.ExtensionRangeOptions = A2.DescriptorProto_ReservedRange = A2.DescriptorProto_ExtensionRange = A2.DescriptorProto = A2.FileDescriptorProto = A2.FileDescriptorSet = A2.Edition = void 0;
    const n2 = t2(3672), r2 = t2(4193);
    var o2, s, a, i, c, l, g, E, u, d, I, h, Q, m, C, B, p;
    !(function(e3) {
      e3[e3.EDITION_UNKNOWN = 0] = "EDITION_UNKNOWN", e3[e3.EDITION_LEGACY = 900] = "EDITION_LEGACY", e3[e3.EDITION_PROTO2 = 998] = "EDITION_PROTO2", e3[e3.EDITION_PROTO3 = 999] = "EDITION_PROTO3", e3[e3.EDITION_2023 = 1e3] = "EDITION_2023", e3[e3.EDITION_2024 = 1001] = "EDITION_2024", e3[e3.EDITION_1_TEST_ONLY = 1] = "EDITION_1_TEST_ONLY", e3[e3.EDITION_2_TEST_ONLY = 2] = "EDITION_2_TEST_ONLY", e3[e3.EDITION_99997_TEST_ONLY = 99997] = "EDITION_99997_TEST_ONLY", e3[e3.EDITION_99998_TEST_ONLY = 99998] = "EDITION_99998_TEST_ONLY", e3[e3.EDITION_99999_TEST_ONLY = 99999] = "EDITION_99999_TEST_ONLY", e3[e3.EDITION_MAX = 2147483647] = "EDITION_MAX";
    })(o2 || (A2.Edition = o2 = {})), n2.proto2.util.setEnumType(o2, "google.protobuf.Edition", [{ no: 0, name: "EDITION_UNKNOWN" }, { no: 900, name: "EDITION_LEGACY" }, { no: 998, name: "EDITION_PROTO2" }, { no: 999, name: "EDITION_PROTO3" }, { no: 1e3, name: "EDITION_2023" }, { no: 1001, name: "EDITION_2024" }, { no: 1, name: "EDITION_1_TEST_ONLY" }, { no: 2, name: "EDITION_2_TEST_ONLY" }, { no: 99997, name: "EDITION_99997_TEST_ONLY" }, { no: 99998, name: "EDITION_99998_TEST_ONLY" }, { no: 99999, name: "EDITION_99999_TEST_ONLY" }, { no: 2147483647, name: "EDITION_MAX" }]);
    class f extends r2.Message {
      constructor(e3) {
        super(), this.file = [], n2.proto2.util.initPartial(e3, this);
      }
      static fromBinary(e3, A3) {
        return new f().fromBinary(e3, A3);
      }
      static fromJson(e3, A3) {
        return new f().fromJson(e3, A3);
      }
      static fromJsonString(e3, A3) {
        return new f().fromJsonString(e3, A3);
      }
      static equals(e3, A3) {
        return n2.proto2.util.equals(f, e3, A3);
      }
    }
    A2.FileDescriptorSet = f, f.runtime = n2.proto2, f.typeName = "google.protobuf.FileDescriptorSet", f.fields = n2.proto2.util.newFieldList(() => [{ no: 1, name: "file", kind: "message", T: y, repeated: true }]);
    class y extends r2.Message {
      constructor(e3) {
        super(), this.dependency = [], this.publicDependency = [], this.weakDependency = [], this.messageType = [], this.enumType = [], this.service = [], this.extension = [], n2.proto2.util.initPartial(e3, this);
      }
      static fromBinary(e3, A3) {
        return new y().fromBinary(e3, A3);
      }
      static fromJson(e3, A3) {
        return new y().fromJson(e3, A3);
      }
      static fromJsonString(e3, A3) {
        return new y().fromJsonString(e3, A3);
      }
      static equals(e3, A3) {
        return n2.proto2.util.equals(y, e3, A3);
      }
    }
    A2.FileDescriptorProto = y, y.runtime = n2.proto2, y.typeName = "google.protobuf.FileDescriptorProto", y.fields = n2.proto2.util.newFieldList(() => [{ no: 1, name: "name", kind: "scalar", T: 9, opt: true }, { no: 2, name: "package", kind: "scalar", T: 9, opt: true }, { no: 3, name: "dependency", kind: "scalar", T: 9, repeated: true }, { no: 10, name: "public_dependency", kind: "scalar", T: 5, repeated: true }, { no: 11, name: "weak_dependency", kind: "scalar", T: 5, repeated: true }, { no: 4, name: "message_type", kind: "message", T, repeated: true }, { no: 5, name: "enum_type", kind: "message", T: b, repeated: true }, { no: 6, name: "service", kind: "message", T: v, repeated: true }, { no: 7, name: "extension", kind: "message", T: R, repeated: true }, { no: 8, name: "options", kind: "message", T: U, opt: true }, { no: 9, name: "source_code_info", kind: "message", T: Z, opt: true }, { no: 12, name: "syntax", kind: "scalar", T: 9, opt: true }, { no: 14, name: "edition", kind: "enum", T: n2.proto2.getEnumType(o2), opt: true }]);
    class T extends r2.Message {
      constructor(e3) {
        super(), this.field = [], this.extension = [], this.nestedType = [], this.enumType = [], this.extensionRange = [], this.oneofDecl = [], this.reservedRange = [], this.reservedName = [], n2.proto2.util.initPartial(e3, this);
      }
      static fromBinary(e3, A3) {
        return new T().fromBinary(e3, A3);
      }
      static fromJson(e3, A3) {
        return new T().fromJson(e3, A3);
      }
      static fromJsonString(e3, A3) {
        return new T().fromJsonString(e3, A3);
      }
      static equals(e3, A3) {
        return n2.proto2.util.equals(T, e3, A3);
      }
    }
    A2.DescriptorProto = T, T.runtime = n2.proto2, T.typeName = "google.protobuf.DescriptorProto", T.fields = n2.proto2.util.newFieldList(() => [{ no: 1, name: "name", kind: "scalar", T: 9, opt: true }, { no: 2, name: "field", kind: "message", T: R, repeated: true }, { no: 6, name: "extension", kind: "message", T: R, repeated: true }, { no: 3, name: "nested_type", kind: "message", T, repeated: true }, { no: 4, name: "enum_type", kind: "message", T: b, repeated: true }, { no: 5, name: "extension_range", kind: "message", T: k, repeated: true }, { no: 8, name: "oneof_decl", kind: "message", T: S, repeated: true }, { no: 7, name: "options", kind: "message", T: M, opt: true }, { no: 9, name: "reserved_range", kind: "message", T: w, repeated: true }, { no: 10, name: "reserved_name", kind: "scalar", T: 9, repeated: true }]);
    class k extends r2.Message {
      constructor(e3) {
        super(), n2.proto2.util.initPartial(e3, this);
      }
      static fromBinary(e3, A3) {
        return new k().fromBinary(e3, A3);
      }
      static fromJson(e3, A3) {
        return new k().fromJson(e3, A3);
      }
      static fromJsonString(e3, A3) {
        return new k().fromJsonString(e3, A3);
      }
      static equals(e3, A3) {
        return n2.proto2.util.equals(k, e3, A3);
      }
    }
    A2.DescriptorProto_ExtensionRange = k, k.runtime = n2.proto2, k.typeName = "google.protobuf.DescriptorProto.ExtensionRange", k.fields = n2.proto2.util.newFieldList(() => [{ no: 1, name: "start", kind: "scalar", T: 5, opt: true }, { no: 2, name: "end", kind: "scalar", T: 5, opt: true }, { no: 3, name: "options", kind: "message", T: N, opt: true }]);
    class w extends r2.Message {
      constructor(e3) {
        super(), n2.proto2.util.initPartial(e3, this);
      }
      static fromBinary(e3, A3) {
        return new w().fromBinary(e3, A3);
      }
      static fromJson(e3, A3) {
        return new w().fromJson(e3, A3);
      }
      static fromJsonString(e3, A3) {
        return new w().fromJsonString(e3, A3);
      }
      static equals(e3, A3) {
        return n2.proto2.util.equals(w, e3, A3);
      }
    }
    A2.DescriptorProto_ReservedRange = w, w.runtime = n2.proto2, w.typeName = "google.protobuf.DescriptorProto.ReservedRange", w.fields = n2.proto2.util.newFieldList(() => [{ no: 1, name: "start", kind: "scalar", T: 5, opt: true }, { no: 2, name: "end", kind: "scalar", T: 5, opt: true }]);
    class N extends r2.Message {
      constructor(e3) {
        super(), this.uninterpretedOption = [], this.declaration = [], n2.proto2.util.initPartial(e3, this);
      }
      static fromBinary(e3, A3) {
        return new N().fromBinary(e3, A3);
      }
      static fromJson(e3, A3) {
        return new N().fromJson(e3, A3);
      }
      static fromJsonString(e3, A3) {
        return new N().fromJsonString(e3, A3);
      }
      static equals(e3, A3) {
        return n2.proto2.util.equals(N, e3, A3);
      }
    }
    A2.ExtensionRangeOptions = N, N.runtime = n2.proto2, N.typeName = "google.protobuf.ExtensionRangeOptions", N.fields = n2.proto2.util.newFieldList(() => [{ no: 999, name: "uninterpreted_option", kind: "message", T: q, repeated: true }, { no: 2, name: "declaration", kind: "message", T: D, repeated: true }, { no: 50, name: "features", kind: "message", T: j, opt: true }, { no: 3, name: "verification", kind: "enum", T: n2.proto2.getEnumType(s), opt: true, default: s.UNVERIFIED }]), (function(e3) {
      e3[e3.DECLARATION = 0] = "DECLARATION", e3[e3.UNVERIFIED = 1] = "UNVERIFIED";
    })(s || (A2.ExtensionRangeOptions_VerificationState = s = {})), n2.proto2.util.setEnumType(s, "google.protobuf.ExtensionRangeOptions.VerificationState", [{ no: 0, name: "DECLARATION" }, { no: 1, name: "UNVERIFIED" }]);
    class D extends r2.Message {
      constructor(e3) {
        super(), n2.proto2.util.initPartial(e3, this);
      }
      static fromBinary(e3, A3) {
        return new D().fromBinary(e3, A3);
      }
      static fromJson(e3, A3) {
        return new D().fromJson(e3, A3);
      }
      static fromJsonString(e3, A3) {
        return new D().fromJsonString(e3, A3);
      }
      static equals(e3, A3) {
        return n2.proto2.util.equals(D, e3, A3);
      }
    }
    A2.ExtensionRangeOptions_Declaration = D, D.runtime = n2.proto2, D.typeName = "google.protobuf.ExtensionRangeOptions.Declaration", D.fields = n2.proto2.util.newFieldList(() => [{ no: 1, name: "number", kind: "scalar", T: 5, opt: true }, { no: 2, name: "full_name", kind: "scalar", T: 9, opt: true }, { no: 3, name: "type", kind: "scalar", T: 9, opt: true }, { no: 5, name: "reserved", kind: "scalar", T: 8, opt: true }, { no: 6, name: "repeated", kind: "scalar", T: 8, opt: true }]);
    class R extends r2.Message {
      constructor(e3) {
        super(), n2.proto2.util.initPartial(e3, this);
      }
      static fromBinary(e3, A3) {
        return new R().fromBinary(e3, A3);
      }
      static fromJson(e3, A3) {
        return new R().fromJson(e3, A3);
      }
      static fromJsonString(e3, A3) {
        return new R().fromJsonString(e3, A3);
      }
      static equals(e3, A3) {
        return n2.proto2.util.equals(R, e3, A3);
      }
    }
    A2.FieldDescriptorProto = R, R.runtime = n2.proto2, R.typeName = "google.protobuf.FieldDescriptorProto", R.fields = n2.proto2.util.newFieldList(() => [{ no: 1, name: "name", kind: "scalar", T: 9, opt: true }, { no: 3, name: "number", kind: "scalar", T: 5, opt: true }, { no: 4, name: "label", kind: "enum", T: n2.proto2.getEnumType(i), opt: true }, { no: 5, name: "type", kind: "enum", T: n2.proto2.getEnumType(a), opt: true }, { no: 6, name: "type_name", kind: "scalar", T: 9, opt: true }, { no: 2, name: "extendee", kind: "scalar", T: 9, opt: true }, { no: 7, name: "default_value", kind: "scalar", T: 9, opt: true }, { no: 9, name: "oneof_index", kind: "scalar", T: 5, opt: true }, { no: 10, name: "json_name", kind: "scalar", T: 9, opt: true }, { no: 8, name: "options", kind: "message", T: O, opt: true }, { no: 17, name: "proto3_optional", kind: "scalar", T: 8, opt: true }]), (function(e3) {
      e3[e3.DOUBLE = 1] = "DOUBLE", e3[e3.FLOAT = 2] = "FLOAT", e3[e3.INT64 = 3] = "INT64", e3[e3.UINT64 = 4] = "UINT64", e3[e3.INT32 = 5] = "INT32", e3[e3.FIXED64 = 6] = "FIXED64", e3[e3.FIXED32 = 7] = "FIXED32", e3[e3.BOOL = 8] = "BOOL", e3[e3.STRING = 9] = "STRING", e3[e3.GROUP = 10] = "GROUP", e3[e3.MESSAGE = 11] = "MESSAGE", e3[e3.BYTES = 12] = "BYTES", e3[e3.UINT32 = 13] = "UINT32", e3[e3.ENUM = 14] = "ENUM", e3[e3.SFIXED32 = 15] = "SFIXED32", e3[e3.SFIXED64 = 16] = "SFIXED64", e3[e3.SINT32 = 17] = "SINT32", e3[e3.SINT64 = 18] = "SINT64";
    })(a || (A2.FieldDescriptorProto_Type = a = {})), n2.proto2.util.setEnumType(a, "google.protobuf.FieldDescriptorProto.Type", [{ no: 1, name: "TYPE_DOUBLE" }, { no: 2, name: "TYPE_FLOAT" }, { no: 3, name: "TYPE_INT64" }, { no: 4, name: "TYPE_UINT64" }, { no: 5, name: "TYPE_INT32" }, { no: 6, name: "TYPE_FIXED64" }, { no: 7, name: "TYPE_FIXED32" }, { no: 8, name: "TYPE_BOOL" }, { no: 9, name: "TYPE_STRING" }, { no: 10, name: "TYPE_GROUP" }, { no: 11, name: "TYPE_MESSAGE" }, { no: 12, name: "TYPE_BYTES" }, { no: 13, name: "TYPE_UINT32" }, { no: 14, name: "TYPE_ENUM" }, { no: 15, name: "TYPE_SFIXED32" }, { no: 16, name: "TYPE_SFIXED64" }, { no: 17, name: "TYPE_SINT32" }, { no: 18, name: "TYPE_SINT64" }]), (function(e3) {
      e3[e3.OPTIONAL = 1] = "OPTIONAL", e3[e3.REPEATED = 3] = "REPEATED", e3[e3.REQUIRED = 2] = "REQUIRED";
    })(i || (A2.FieldDescriptorProto_Label = i = {})), n2.proto2.util.setEnumType(i, "google.protobuf.FieldDescriptorProto.Label", [{ no: 1, name: "LABEL_OPTIONAL" }, { no: 3, name: "LABEL_REPEATED" }, { no: 2, name: "LABEL_REQUIRED" }]);
    class S extends r2.Message {
      constructor(e3) {
        super(), n2.proto2.util.initPartial(e3, this);
      }
      static fromBinary(e3, A3) {
        return new S().fromBinary(e3, A3);
      }
      static fromJson(e3, A3) {
        return new S().fromJson(e3, A3);
      }
      static fromJsonString(e3, A3) {
        return new S().fromJsonString(e3, A3);
      }
      static equals(e3, A3) {
        return n2.proto2.util.equals(S, e3, A3);
      }
    }
    A2.OneofDescriptorProto = S, S.runtime = n2.proto2, S.typeName = "google.protobuf.OneofDescriptorProto", S.fields = n2.proto2.util.newFieldList(() => [{ no: 1, name: "name", kind: "scalar", T: 9, opt: true }, { no: 2, name: "options", kind: "message", T: P, opt: true }]);
    class b extends r2.Message {
      constructor(e3) {
        super(), this.value = [], this.reservedRange = [], this.reservedName = [], n2.proto2.util.initPartial(e3, this);
      }
      static fromBinary(e3, A3) {
        return new b().fromBinary(e3, A3);
      }
      static fromJson(e3, A3) {
        return new b().fromJson(e3, A3);
      }
      static fromJsonString(e3, A3) {
        return new b().fromJsonString(e3, A3);
      }
      static equals(e3, A3) {
        return n2.proto2.util.equals(b, e3, A3);
      }
    }
    A2.EnumDescriptorProto = b, b.runtime = n2.proto2, b.typeName = "google.protobuf.EnumDescriptorProto", b.fields = n2.proto2.util.newFieldList(() => [{ no: 1, name: "name", kind: "scalar", T: 9, opt: true }, { no: 2, name: "value", kind: "message", T: _, repeated: true }, { no: 3, name: "options", kind: "message", T: G, opt: true }, { no: 4, name: "reserved_range", kind: "message", T: F, repeated: true }, { no: 5, name: "reserved_name", kind: "scalar", T: 9, repeated: true }]);
    class F extends r2.Message {
      constructor(e3) {
        super(), n2.proto2.util.initPartial(e3, this);
      }
      static fromBinary(e3, A3) {
        return new F().fromBinary(e3, A3);
      }
      static fromJson(e3, A3) {
        return new F().fromJson(e3, A3);
      }
      static fromJsonString(e3, A3) {
        return new F().fromJsonString(e3, A3);
      }
      static equals(e3, A3) {
        return n2.proto2.util.equals(F, e3, A3);
      }
    }
    A2.EnumDescriptorProto_EnumReservedRange = F, F.runtime = n2.proto2, F.typeName = "google.protobuf.EnumDescriptorProto.EnumReservedRange", F.fields = n2.proto2.util.newFieldList(() => [{ no: 1, name: "start", kind: "scalar", T: 5, opt: true }, { no: 2, name: "end", kind: "scalar", T: 5, opt: true }]);
    class _ extends r2.Message {
      constructor(e3) {
        super(), n2.proto2.util.initPartial(e3, this);
      }
      static fromBinary(e3, A3) {
        return new _().fromBinary(e3, A3);
      }
      static fromJson(e3, A3) {
        return new _().fromJson(e3, A3);
      }
      static fromJsonString(e3, A3) {
        return new _().fromJsonString(e3, A3);
      }
      static equals(e3, A3) {
        return n2.proto2.util.equals(_, e3, A3);
      }
    }
    A2.EnumValueDescriptorProto = _, _.runtime = n2.proto2, _.typeName = "google.protobuf.EnumValueDescriptorProto", _.fields = n2.proto2.util.newFieldList(() => [{ no: 1, name: "name", kind: "scalar", T: 9, opt: true }, { no: 2, name: "number", kind: "scalar", T: 5, opt: true }, { no: 3, name: "options", kind: "message", T: V, opt: true }]);
    class v extends r2.Message {
      constructor(e3) {
        super(), this.method = [], n2.proto2.util.initPartial(e3, this);
      }
      static fromBinary(e3, A3) {
        return new v().fromBinary(e3, A3);
      }
      static fromJson(e3, A3) {
        return new v().fromJson(e3, A3);
      }
      static fromJsonString(e3, A3) {
        return new v().fromJsonString(e3, A3);
      }
      static equals(e3, A3) {
        return n2.proto2.util.equals(v, e3, A3);
      }
    }
    A2.ServiceDescriptorProto = v, v.runtime = n2.proto2, v.typeName = "google.protobuf.ServiceDescriptorProto", v.fields = n2.proto2.util.newFieldList(() => [{ no: 1, name: "name", kind: "scalar", T: 9, opt: true }, { no: 2, name: "method", kind: "message", T: L, repeated: true }, { no: 3, name: "options", kind: "message", T: x, opt: true }]);
    class L extends r2.Message {
      constructor(e3) {
        super(), n2.proto2.util.initPartial(e3, this);
      }
      static fromBinary(e3, A3) {
        return new L().fromBinary(e3, A3);
      }
      static fromJson(e3, A3) {
        return new L().fromJson(e3, A3);
      }
      static fromJsonString(e3, A3) {
        return new L().fromJsonString(e3, A3);
      }
      static equals(e3, A3) {
        return n2.proto2.util.equals(L, e3, A3);
      }
    }
    A2.MethodDescriptorProto = L, L.runtime = n2.proto2, L.typeName = "google.protobuf.MethodDescriptorProto", L.fields = n2.proto2.util.newFieldList(() => [{ no: 1, name: "name", kind: "scalar", T: 9, opt: true }, { no: 2, name: "input_type", kind: "scalar", T: 9, opt: true }, { no: 3, name: "output_type", kind: "scalar", T: 9, opt: true }, { no: 4, name: "options", kind: "message", T: H, opt: true }, { no: 5, name: "client_streaming", kind: "scalar", T: 8, opt: true, default: false }, { no: 6, name: "server_streaming", kind: "scalar", T: 8, opt: true, default: false }]);
    class U extends r2.Message {
      constructor(e3) {
        super(), this.uninterpretedOption = [], n2.proto2.util.initPartial(e3, this);
      }
      static fromBinary(e3, A3) {
        return new U().fromBinary(e3, A3);
      }
      static fromJson(e3, A3) {
        return new U().fromJson(e3, A3);
      }
      static fromJsonString(e3, A3) {
        return new U().fromJsonString(e3, A3);
      }
      static equals(e3, A3) {
        return n2.proto2.util.equals(U, e3, A3);
      }
    }
    A2.FileOptions = U, U.runtime = n2.proto2, U.typeName = "google.protobuf.FileOptions", U.fields = n2.proto2.util.newFieldList(() => [{ no: 1, name: "java_package", kind: "scalar", T: 9, opt: true }, { no: 8, name: "java_outer_classname", kind: "scalar", T: 9, opt: true }, { no: 10, name: "java_multiple_files", kind: "scalar", T: 8, opt: true, default: false }, { no: 20, name: "java_generate_equals_and_hash", kind: "scalar", T: 8, opt: true }, { no: 27, name: "java_string_check_utf8", kind: "scalar", T: 8, opt: true, default: false }, { no: 9, name: "optimize_for", kind: "enum", T: n2.proto2.getEnumType(c), opt: true, default: c.SPEED }, { no: 11, name: "go_package", kind: "scalar", T: 9, opt: true }, { no: 16, name: "cc_generic_services", kind: "scalar", T: 8, opt: true, default: false }, { no: 17, name: "java_generic_services", kind: "scalar", T: 8, opt: true, default: false }, { no: 18, name: "py_generic_services", kind: "scalar", T: 8, opt: true, default: false }, { no: 23, name: "deprecated", kind: "scalar", T: 8, opt: true, default: false }, { no: 31, name: "cc_enable_arenas", kind: "scalar", T: 8, opt: true, default: true }, { no: 36, name: "objc_class_prefix", kind: "scalar", T: 9, opt: true }, { no: 37, name: "csharp_namespace", kind: "scalar", T: 9, opt: true }, { no: 39, name: "swift_prefix", kind: "scalar", T: 9, opt: true }, { no: 40, name: "php_class_prefix", kind: "scalar", T: 9, opt: true }, { no: 41, name: "php_namespace", kind: "scalar", T: 9, opt: true }, { no: 44, name: "php_metadata_namespace", kind: "scalar", T: 9, opt: true }, { no: 45, name: "ruby_package", kind: "scalar", T: 9, opt: true }, { no: 50, name: "features", kind: "message", T: j, opt: true }, { no: 999, name: "uninterpreted_option", kind: "message", T: q, repeated: true }]), (function(e3) {
      e3[e3.SPEED = 1] = "SPEED", e3[e3.CODE_SIZE = 2] = "CODE_SIZE", e3[e3.LITE_RUNTIME = 3] = "LITE_RUNTIME";
    })(c || (A2.FileOptions_OptimizeMode = c = {})), n2.proto2.util.setEnumType(c, "google.protobuf.FileOptions.OptimizeMode", [{ no: 1, name: "SPEED" }, { no: 2, name: "CODE_SIZE" }, { no: 3, name: "LITE_RUNTIME" }]);
    class M extends r2.Message {
      constructor(e3) {
        super(), this.uninterpretedOption = [], n2.proto2.util.initPartial(e3, this);
      }
      static fromBinary(e3, A3) {
        return new M().fromBinary(e3, A3);
      }
      static fromJson(e3, A3) {
        return new M().fromJson(e3, A3);
      }
      static fromJsonString(e3, A3) {
        return new M().fromJsonString(e3, A3);
      }
      static equals(e3, A3) {
        return n2.proto2.util.equals(M, e3, A3);
      }
    }
    A2.MessageOptions = M, M.runtime = n2.proto2, M.typeName = "google.protobuf.MessageOptions", M.fields = n2.proto2.util.newFieldList(() => [{ no: 1, name: "message_set_wire_format", kind: "scalar", T: 8, opt: true, default: false }, { no: 2, name: "no_standard_descriptor_accessor", kind: "scalar", T: 8, opt: true, default: false }, { no: 3, name: "deprecated", kind: "scalar", T: 8, opt: true, default: false }, { no: 7, name: "map_entry", kind: "scalar", T: 8, opt: true }, { no: 11, name: "deprecated_legacy_json_field_conflicts", kind: "scalar", T: 8, opt: true }, { no: 12, name: "features", kind: "message", T: j, opt: true }, { no: 999, name: "uninterpreted_option", kind: "message", T: q, repeated: true }]);
    class O extends r2.Message {
      constructor(e3) {
        super(), this.targets = [], this.editionDefaults = [], this.uninterpretedOption = [], n2.proto2.util.initPartial(e3, this);
      }
      static fromBinary(e3, A3) {
        return new O().fromBinary(e3, A3);
      }
      static fromJson(e3, A3) {
        return new O().fromJson(e3, A3);
      }
      static fromJsonString(e3, A3) {
        return new O().fromJsonString(e3, A3);
      }
      static equals(e3, A3) {
        return n2.proto2.util.equals(O, e3, A3);
      }
    }
    A2.FieldOptions = O, O.runtime = n2.proto2, O.typeName = "google.protobuf.FieldOptions", O.fields = n2.proto2.util.newFieldList(() => [{ no: 1, name: "ctype", kind: "enum", T: n2.proto2.getEnumType(l), opt: true, default: l.STRING }, { no: 2, name: "packed", kind: "scalar", T: 8, opt: true }, { no: 6, name: "jstype", kind: "enum", T: n2.proto2.getEnumType(g), opt: true, default: g.JS_NORMAL }, { no: 5, name: "lazy", kind: "scalar", T: 8, opt: true, default: false }, { no: 15, name: "unverified_lazy", kind: "scalar", T: 8, opt: true, default: false }, { no: 3, name: "deprecated", kind: "scalar", T: 8, opt: true, default: false }, { no: 10, name: "weak", kind: "scalar", T: 8, opt: true, default: false }, { no: 16, name: "debug_redact", kind: "scalar", T: 8, opt: true, default: false }, { no: 17, name: "retention", kind: "enum", T: n2.proto2.getEnumType(E), opt: true }, { no: 19, name: "targets", kind: "enum", T: n2.proto2.getEnumType(u), repeated: true }, { no: 20, name: "edition_defaults", kind: "message", T: J, repeated: true }, { no: 21, name: "features", kind: "message", T: j, opt: true }, { no: 22, name: "feature_support", kind: "message", T: Y, opt: true }, { no: 999, name: "uninterpreted_option", kind: "message", T: q, repeated: true }]), (function(e3) {
      e3[e3.STRING = 0] = "STRING", e3[e3.CORD = 1] = "CORD", e3[e3.STRING_PIECE = 2] = "STRING_PIECE";
    })(l || (A2.FieldOptions_CType = l = {})), n2.proto2.util.setEnumType(l, "google.protobuf.FieldOptions.CType", [{ no: 0, name: "STRING" }, { no: 1, name: "CORD" }, { no: 2, name: "STRING_PIECE" }]), (function(e3) {
      e3[e3.JS_NORMAL = 0] = "JS_NORMAL", e3[e3.JS_STRING = 1] = "JS_STRING", e3[e3.JS_NUMBER = 2] = "JS_NUMBER";
    })(g || (A2.FieldOptions_JSType = g = {})), n2.proto2.util.setEnumType(g, "google.protobuf.FieldOptions.JSType", [{ no: 0, name: "JS_NORMAL" }, { no: 1, name: "JS_STRING" }, { no: 2, name: "JS_NUMBER" }]), (function(e3) {
      e3[e3.RETENTION_UNKNOWN = 0] = "RETENTION_UNKNOWN", e3[e3.RETENTION_RUNTIME = 1] = "RETENTION_RUNTIME", e3[e3.RETENTION_SOURCE = 2] = "RETENTION_SOURCE";
    })(E || (A2.FieldOptions_OptionRetention = E = {})), n2.proto2.util.setEnumType(E, "google.protobuf.FieldOptions.OptionRetention", [{ no: 0, name: "RETENTION_UNKNOWN" }, { no: 1, name: "RETENTION_RUNTIME" }, { no: 2, name: "RETENTION_SOURCE" }]), (function(e3) {
      e3[e3.TARGET_TYPE_UNKNOWN = 0] = "TARGET_TYPE_UNKNOWN", e3[e3.TARGET_TYPE_FILE = 1] = "TARGET_TYPE_FILE", e3[e3.TARGET_TYPE_EXTENSION_RANGE = 2] = "TARGET_TYPE_EXTENSION_RANGE", e3[e3.TARGET_TYPE_MESSAGE = 3] = "TARGET_TYPE_MESSAGE", e3[e3.TARGET_TYPE_FIELD = 4] = "TARGET_TYPE_FIELD", e3[e3.TARGET_TYPE_ONEOF = 5] = "TARGET_TYPE_ONEOF", e3[e3.TARGET_TYPE_ENUM = 6] = "TARGET_TYPE_ENUM", e3[e3.TARGET_TYPE_ENUM_ENTRY = 7] = "TARGET_TYPE_ENUM_ENTRY", e3[e3.TARGET_TYPE_SERVICE = 8] = "TARGET_TYPE_SERVICE", e3[e3.TARGET_TYPE_METHOD = 9] = "TARGET_TYPE_METHOD";
    })(u || (A2.FieldOptions_OptionTargetType = u = {})), n2.proto2.util.setEnumType(u, "google.protobuf.FieldOptions.OptionTargetType", [{ no: 0, name: "TARGET_TYPE_UNKNOWN" }, { no: 1, name: "TARGET_TYPE_FILE" }, { no: 2, name: "TARGET_TYPE_EXTENSION_RANGE" }, { no: 3, name: "TARGET_TYPE_MESSAGE" }, { no: 4, name: "TARGET_TYPE_FIELD" }, { no: 5, name: "TARGET_TYPE_ONEOF" }, { no: 6, name: "TARGET_TYPE_ENUM" }, { no: 7, name: "TARGET_TYPE_ENUM_ENTRY" }, { no: 8, name: "TARGET_TYPE_SERVICE" }, { no: 9, name: "TARGET_TYPE_METHOD" }]);
    class J extends r2.Message {
      constructor(e3) {
        super(), n2.proto2.util.initPartial(e3, this);
      }
      static fromBinary(e3, A3) {
        return new J().fromBinary(e3, A3);
      }
      static fromJson(e3, A3) {
        return new J().fromJson(e3, A3);
      }
      static fromJsonString(e3, A3) {
        return new J().fromJsonString(e3, A3);
      }
      static equals(e3, A3) {
        return n2.proto2.util.equals(J, e3, A3);
      }
    }
    A2.FieldOptions_EditionDefault = J, J.runtime = n2.proto2, J.typeName = "google.protobuf.FieldOptions.EditionDefault", J.fields = n2.proto2.util.newFieldList(() => [{ no: 3, name: "edition", kind: "enum", T: n2.proto2.getEnumType(o2), opt: true }, { no: 2, name: "value", kind: "scalar", T: 9, opt: true }]);
    class Y extends r2.Message {
      constructor(e3) {
        super(), n2.proto2.util.initPartial(e3, this);
      }
      static fromBinary(e3, A3) {
        return new Y().fromBinary(e3, A3);
      }
      static fromJson(e3, A3) {
        return new Y().fromJson(e3, A3);
      }
      static fromJsonString(e3, A3) {
        return new Y().fromJsonString(e3, A3);
      }
      static equals(e3, A3) {
        return n2.proto2.util.equals(Y, e3, A3);
      }
    }
    A2.FieldOptions_FeatureSupport = Y, Y.runtime = n2.proto2, Y.typeName = "google.protobuf.FieldOptions.FeatureSupport", Y.fields = n2.proto2.util.newFieldList(() => [{ no: 1, name: "edition_introduced", kind: "enum", T: n2.proto2.getEnumType(o2), opt: true }, { no: 2, name: "edition_deprecated", kind: "enum", T: n2.proto2.getEnumType(o2), opt: true }, { no: 3, name: "deprecation_warning", kind: "scalar", T: 9, opt: true }, { no: 4, name: "edition_removed", kind: "enum", T: n2.proto2.getEnumType(o2), opt: true }]);
    class P extends r2.Message {
      constructor(e3) {
        super(), this.uninterpretedOption = [], n2.proto2.util.initPartial(e3, this);
      }
      static fromBinary(e3, A3) {
        return new P().fromBinary(e3, A3);
      }
      static fromJson(e3, A3) {
        return new P().fromJson(e3, A3);
      }
      static fromJsonString(e3, A3) {
        return new P().fromJsonString(e3, A3);
      }
      static equals(e3, A3) {
        return n2.proto2.util.equals(P, e3, A3);
      }
    }
    A2.OneofOptions = P, P.runtime = n2.proto2, P.typeName = "google.protobuf.OneofOptions", P.fields = n2.proto2.util.newFieldList(() => [{ no: 1, name: "features", kind: "message", T: j, opt: true }, { no: 999, name: "uninterpreted_option", kind: "message", T: q, repeated: true }]);
    class G extends r2.Message {
      constructor(e3) {
        super(), this.uninterpretedOption = [], n2.proto2.util.initPartial(e3, this);
      }
      static fromBinary(e3, A3) {
        return new G().fromBinary(e3, A3);
      }
      static fromJson(e3, A3) {
        return new G().fromJson(e3, A3);
      }
      static fromJsonString(e3, A3) {
        return new G().fromJsonString(e3, A3);
      }
      static equals(e3, A3) {
        return n2.proto2.util.equals(G, e3, A3);
      }
    }
    A2.EnumOptions = G, G.runtime = n2.proto2, G.typeName = "google.protobuf.EnumOptions", G.fields = n2.proto2.util.newFieldList(() => [{ no: 2, name: "allow_alias", kind: "scalar", T: 8, opt: true }, { no: 3, name: "deprecated", kind: "scalar", T: 8, opt: true, default: false }, { no: 6, name: "deprecated_legacy_json_field_conflicts", kind: "scalar", T: 8, opt: true }, { no: 7, name: "features", kind: "message", T: j, opt: true }, { no: 999, name: "uninterpreted_option", kind: "message", T: q, repeated: true }]);
    class V extends r2.Message {
      constructor(e3) {
        super(), this.uninterpretedOption = [], n2.proto2.util.initPartial(e3, this);
      }
      static fromBinary(e3, A3) {
        return new V().fromBinary(e3, A3);
      }
      static fromJson(e3, A3) {
        return new V().fromJson(e3, A3);
      }
      static fromJsonString(e3, A3) {
        return new V().fromJsonString(e3, A3);
      }
      static equals(e3, A3) {
        return n2.proto2.util.equals(V, e3, A3);
      }
    }
    A2.EnumValueOptions = V, V.runtime = n2.proto2, V.typeName = "google.protobuf.EnumValueOptions", V.fields = n2.proto2.util.newFieldList(() => [{ no: 1, name: "deprecated", kind: "scalar", T: 8, opt: true, default: false }, { no: 2, name: "features", kind: "message", T: j, opt: true }, { no: 3, name: "debug_redact", kind: "scalar", T: 8, opt: true, default: false }, { no: 4, name: "feature_support", kind: "message", T: Y, opt: true }, { no: 999, name: "uninterpreted_option", kind: "message", T: q, repeated: true }]);
    class x extends r2.Message {
      constructor(e3) {
        super(), this.uninterpretedOption = [], n2.proto2.util.initPartial(e3, this);
      }
      static fromBinary(e3, A3) {
        return new x().fromBinary(e3, A3);
      }
      static fromJson(e3, A3) {
        return new x().fromJson(e3, A3);
      }
      static fromJsonString(e3, A3) {
        return new x().fromJsonString(e3, A3);
      }
      static equals(e3, A3) {
        return n2.proto2.util.equals(x, e3, A3);
      }
    }
    A2.ServiceOptions = x, x.runtime = n2.proto2, x.typeName = "google.protobuf.ServiceOptions", x.fields = n2.proto2.util.newFieldList(() => [{ no: 34, name: "features", kind: "message", T: j, opt: true }, { no: 33, name: "deprecated", kind: "scalar", T: 8, opt: true, default: false }, { no: 999, name: "uninterpreted_option", kind: "message", T: q, repeated: true }]);
    class H extends r2.Message {
      constructor(e3) {
        super(), this.uninterpretedOption = [], n2.proto2.util.initPartial(e3, this);
      }
      static fromBinary(e3, A3) {
        return new H().fromBinary(e3, A3);
      }
      static fromJson(e3, A3) {
        return new H().fromJson(e3, A3);
      }
      static fromJsonString(e3, A3) {
        return new H().fromJsonString(e3, A3);
      }
      static equals(e3, A3) {
        return n2.proto2.util.equals(H, e3, A3);
      }
    }
    A2.MethodOptions = H, H.runtime = n2.proto2, H.typeName = "google.protobuf.MethodOptions", H.fields = n2.proto2.util.newFieldList(() => [{ no: 33, name: "deprecated", kind: "scalar", T: 8, opt: true, default: false }, { no: 34, name: "idempotency_level", kind: "enum", T: n2.proto2.getEnumType(d), opt: true, default: d.IDEMPOTENCY_UNKNOWN }, { no: 35, name: "features", kind: "message", T: j, opt: true }, { no: 999, name: "uninterpreted_option", kind: "message", T: q, repeated: true }]), (function(e3) {
      e3[e3.IDEMPOTENCY_UNKNOWN = 0] = "IDEMPOTENCY_UNKNOWN", e3[e3.NO_SIDE_EFFECTS = 1] = "NO_SIDE_EFFECTS", e3[e3.IDEMPOTENT = 2] = "IDEMPOTENT";
    })(d || (A2.MethodOptions_IdempotencyLevel = d = {})), n2.proto2.util.setEnumType(d, "google.protobuf.MethodOptions.IdempotencyLevel", [{ no: 0, name: "IDEMPOTENCY_UNKNOWN" }, { no: 1, name: "NO_SIDE_EFFECTS" }, { no: 2, name: "IDEMPOTENT" }]);
    class q extends r2.Message {
      constructor(e3) {
        super(), this.name = [], n2.proto2.util.initPartial(e3, this);
      }
      static fromBinary(e3, A3) {
        return new q().fromBinary(e3, A3);
      }
      static fromJson(e3, A3) {
        return new q().fromJson(e3, A3);
      }
      static fromJsonString(e3, A3) {
        return new q().fromJsonString(e3, A3);
      }
      static equals(e3, A3) {
        return n2.proto2.util.equals(q, e3, A3);
      }
    }
    A2.UninterpretedOption = q, q.runtime = n2.proto2, q.typeName = "google.protobuf.UninterpretedOption", q.fields = n2.proto2.util.newFieldList(() => [{ no: 2, name: "name", kind: "message", T: W, repeated: true }, { no: 3, name: "identifier_value", kind: "scalar", T: 9, opt: true }, { no: 4, name: "positive_int_value", kind: "scalar", T: 4, opt: true }, { no: 5, name: "negative_int_value", kind: "scalar", T: 3, opt: true }, { no: 6, name: "double_value", kind: "scalar", T: 1, opt: true }, { no: 7, name: "string_value", kind: "scalar", T: 12, opt: true }, { no: 8, name: "aggregate_value", kind: "scalar", T: 9, opt: true }]);
    class W extends r2.Message {
      constructor(e3) {
        super(), n2.proto2.util.initPartial(e3, this);
      }
      static fromBinary(e3, A3) {
        return new W().fromBinary(e3, A3);
      }
      static fromJson(e3, A3) {
        return new W().fromJson(e3, A3);
      }
      static fromJsonString(e3, A3) {
        return new W().fromJsonString(e3, A3);
      }
      static equals(e3, A3) {
        return n2.proto2.util.equals(W, e3, A3);
      }
    }
    A2.UninterpretedOption_NamePart = W, W.runtime = n2.proto2, W.typeName = "google.protobuf.UninterpretedOption.NamePart", W.fields = n2.proto2.util.newFieldList(() => [{ no: 1, name: "name_part", kind: "scalar", T: 9, req: true }, { no: 2, name: "is_extension", kind: "scalar", T: 8, req: true }]);
    class j extends r2.Message {
      constructor(e3) {
        super(), n2.proto2.util.initPartial(e3, this);
      }
      static fromBinary(e3, A3) {
        return new j().fromBinary(e3, A3);
      }
      static fromJson(e3, A3) {
        return new j().fromJson(e3, A3);
      }
      static fromJsonString(e3, A3) {
        return new j().fromJsonString(e3, A3);
      }
      static equals(e3, A3) {
        return n2.proto2.util.equals(j, e3, A3);
      }
    }
    A2.FeatureSet = j, j.runtime = n2.proto2, j.typeName = "google.protobuf.FeatureSet", j.fields = n2.proto2.util.newFieldList(() => [{ no: 1, name: "field_presence", kind: "enum", T: n2.proto2.getEnumType(I), opt: true }, { no: 2, name: "enum_type", kind: "enum", T: n2.proto2.getEnumType(h), opt: true }, { no: 3, name: "repeated_field_encoding", kind: "enum", T: n2.proto2.getEnumType(Q), opt: true }, { no: 4, name: "utf8_validation", kind: "enum", T: n2.proto2.getEnumType(m), opt: true }, { no: 5, name: "message_encoding", kind: "enum", T: n2.proto2.getEnumType(C), opt: true }, { no: 6, name: "json_format", kind: "enum", T: n2.proto2.getEnumType(B), opt: true }]), (function(e3) {
      e3[e3.FIELD_PRESENCE_UNKNOWN = 0] = "FIELD_PRESENCE_UNKNOWN", e3[e3.EXPLICIT = 1] = "EXPLICIT", e3[e3.IMPLICIT = 2] = "IMPLICIT", e3[e3.LEGACY_REQUIRED = 3] = "LEGACY_REQUIRED";
    })(I || (A2.FeatureSet_FieldPresence = I = {})), n2.proto2.util.setEnumType(I, "google.protobuf.FeatureSet.FieldPresence", [{ no: 0, name: "FIELD_PRESENCE_UNKNOWN" }, { no: 1, name: "EXPLICIT" }, { no: 2, name: "IMPLICIT" }, { no: 3, name: "LEGACY_REQUIRED" }]), (function(e3) {
      e3[e3.ENUM_TYPE_UNKNOWN = 0] = "ENUM_TYPE_UNKNOWN", e3[e3.OPEN = 1] = "OPEN", e3[e3.CLOSED = 2] = "CLOSED";
    })(h || (A2.FeatureSet_EnumType = h = {})), n2.proto2.util.setEnumType(h, "google.protobuf.FeatureSet.EnumType", [{ no: 0, name: "ENUM_TYPE_UNKNOWN" }, { no: 1, name: "OPEN" }, { no: 2, name: "CLOSED" }]), (function(e3) {
      e3[e3.REPEATED_FIELD_ENCODING_UNKNOWN = 0] = "REPEATED_FIELD_ENCODING_UNKNOWN", e3[e3.PACKED = 1] = "PACKED", e3[e3.EXPANDED = 2] = "EXPANDED";
    })(Q || (A2.FeatureSet_RepeatedFieldEncoding = Q = {})), n2.proto2.util.setEnumType(Q, "google.protobuf.FeatureSet.RepeatedFieldEncoding", [{ no: 0, name: "REPEATED_FIELD_ENCODING_UNKNOWN" }, { no: 1, name: "PACKED" }, { no: 2, name: "EXPANDED" }]), (function(e3) {
      e3[e3.UTF8_VALIDATION_UNKNOWN = 0] = "UTF8_VALIDATION_UNKNOWN", e3[e3.VERIFY = 2] = "VERIFY", e3[e3.NONE = 3] = "NONE";
    })(m || (A2.FeatureSet_Utf8Validation = m = {})), n2.proto2.util.setEnumType(m, "google.protobuf.FeatureSet.Utf8Validation", [{ no: 0, name: "UTF8_VALIDATION_UNKNOWN" }, { no: 2, name: "VERIFY" }, { no: 3, name: "NONE" }]), (function(e3) {
      e3[e3.MESSAGE_ENCODING_UNKNOWN = 0] = "MESSAGE_ENCODING_UNKNOWN", e3[e3.LENGTH_PREFIXED = 1] = "LENGTH_PREFIXED", e3[e3.DELIMITED = 2] = "DELIMITED";
    })(C || (A2.FeatureSet_MessageEncoding = C = {})), n2.proto2.util.setEnumType(C, "google.protobuf.FeatureSet.MessageEncoding", [{ no: 0, name: "MESSAGE_ENCODING_UNKNOWN" }, { no: 1, name: "LENGTH_PREFIXED" }, { no: 2, name: "DELIMITED" }]), (function(e3) {
      e3[e3.JSON_FORMAT_UNKNOWN = 0] = "JSON_FORMAT_UNKNOWN", e3[e3.ALLOW = 1] = "ALLOW", e3[e3.LEGACY_BEST_EFFORT = 2] = "LEGACY_BEST_EFFORT";
    })(B || (A2.FeatureSet_JsonFormat = B = {})), n2.proto2.util.setEnumType(B, "google.protobuf.FeatureSet.JsonFormat", [{ no: 0, name: "JSON_FORMAT_UNKNOWN" }, { no: 1, name: "ALLOW" }, { no: 2, name: "LEGACY_BEST_EFFORT" }]);
    class X extends r2.Message {
      constructor(e3) {
        super(), this.defaults = [], n2.proto2.util.initPartial(e3, this);
      }
      static fromBinary(e3, A3) {
        return new X().fromBinary(e3, A3);
      }
      static fromJson(e3, A3) {
        return new X().fromJson(e3, A3);
      }
      static fromJsonString(e3, A3) {
        return new X().fromJsonString(e3, A3);
      }
      static equals(e3, A3) {
        return n2.proto2.util.equals(X, e3, A3);
      }
    }
    A2.FeatureSetDefaults = X, X.runtime = n2.proto2, X.typeName = "google.protobuf.FeatureSetDefaults", X.fields = n2.proto2.util.newFieldList(() => [{ no: 1, name: "defaults", kind: "message", T: K, repeated: true }, { no: 4, name: "minimum_edition", kind: "enum", T: n2.proto2.getEnumType(o2), opt: true }, { no: 5, name: "maximum_edition", kind: "enum", T: n2.proto2.getEnumType(o2), opt: true }]);
    class K extends r2.Message {
      constructor(e3) {
        super(), n2.proto2.util.initPartial(e3, this);
      }
      static fromBinary(e3, A3) {
        return new K().fromBinary(e3, A3);
      }
      static fromJson(e3, A3) {
        return new K().fromJson(e3, A3);
      }
      static fromJsonString(e3, A3) {
        return new K().fromJsonString(e3, A3);
      }
      static equals(e3, A3) {
        return n2.proto2.util.equals(K, e3, A3);
      }
    }
    A2.FeatureSetDefaults_FeatureSetEditionDefault = K, K.runtime = n2.proto2, K.typeName = "google.protobuf.FeatureSetDefaults.FeatureSetEditionDefault", K.fields = n2.proto2.util.newFieldList(() => [{ no: 3, name: "edition", kind: "enum", T: n2.proto2.getEnumType(o2), opt: true }, { no: 4, name: "overridable_features", kind: "message", T: j, opt: true }, { no: 5, name: "fixed_features", kind: "message", T: j, opt: true }]);
    class Z extends r2.Message {
      constructor(e3) {
        super(), this.location = [], n2.proto2.util.initPartial(e3, this);
      }
      static fromBinary(e3, A3) {
        return new Z().fromBinary(e3, A3);
      }
      static fromJson(e3, A3) {
        return new Z().fromJson(e3, A3);
      }
      static fromJsonString(e3, A3) {
        return new Z().fromJsonString(e3, A3);
      }
      static equals(e3, A3) {
        return n2.proto2.util.equals(Z, e3, A3);
      }
    }
    A2.SourceCodeInfo = Z, Z.runtime = n2.proto2, Z.typeName = "google.protobuf.SourceCodeInfo", Z.fields = n2.proto2.util.newFieldList(() => [{ no: 1, name: "location", kind: "message", T: z, repeated: true }]);
    class z extends r2.Message {
      constructor(e3) {
        super(), this.path = [], this.span = [], this.leadingDetachedComments = [], n2.proto2.util.initPartial(e3, this);
      }
      static fromBinary(e3, A3) {
        return new z().fromBinary(e3, A3);
      }
      static fromJson(e3, A3) {
        return new z().fromJson(e3, A3);
      }
      static fromJsonString(e3, A3) {
        return new z().fromJsonString(e3, A3);
      }
      static equals(e3, A3) {
        return n2.proto2.util.equals(z, e3, A3);
      }
    }
    A2.SourceCodeInfo_Location = z, z.runtime = n2.proto2, z.typeName = "google.protobuf.SourceCodeInfo.Location", z.fields = n2.proto2.util.newFieldList(() => [{ no: 1, name: "path", kind: "scalar", T: 5, repeated: true, packed: true }, { no: 2, name: "span", kind: "scalar", T: 5, repeated: true, packed: true }, { no: 3, name: "leading_comments", kind: "scalar", T: 9, opt: true }, { no: 4, name: "trailing_comments", kind: "scalar", T: 9, opt: true }, { no: 6, name: "leading_detached_comments", kind: "scalar", T: 9, repeated: true }]);
    class $ extends r2.Message {
      constructor(e3) {
        super(), this.annotation = [], n2.proto2.util.initPartial(e3, this);
      }
      static fromBinary(e3, A3) {
        return new $().fromBinary(e3, A3);
      }
      static fromJson(e3, A3) {
        return new $().fromJson(e3, A3);
      }
      static fromJsonString(e3, A3) {
        return new $().fromJsonString(e3, A3);
      }
      static equals(e3, A3) {
        return n2.proto2.util.equals($, e3, A3);
      }
    }
    A2.GeneratedCodeInfo = $, $.runtime = n2.proto2, $.typeName = "google.protobuf.GeneratedCodeInfo", $.fields = n2.proto2.util.newFieldList(() => [{ no: 1, name: "annotation", kind: "message", T: ee, repeated: true }]);
    class ee extends r2.Message {
      constructor(e3) {
        super(), this.path = [], n2.proto2.util.initPartial(e3, this);
      }
      static fromBinary(e3, A3) {
        return new ee().fromBinary(e3, A3);
      }
      static fromJson(e3, A3) {
        return new ee().fromJson(e3, A3);
      }
      static fromJsonString(e3, A3) {
        return new ee().fromJsonString(e3, A3);
      }
      static equals(e3, A3) {
        return n2.proto2.util.equals(ee, e3, A3);
      }
    }
    A2.GeneratedCodeInfo_Annotation = ee, ee.runtime = n2.proto2, ee.typeName = "google.protobuf.GeneratedCodeInfo.Annotation", ee.fields = n2.proto2.util.newFieldList(() => [{ no: 1, name: "path", kind: "scalar", T: 5, repeated: true, packed: true }, { no: 2, name: "source_file", kind: "scalar", T: 9, opt: true }, { no: 3, name: "begin", kind: "scalar", T: 5, opt: true }, { no: 4, name: "end", kind: "scalar", T: 5, opt: true }, { no: 5, name: "semantic", kind: "enum", T: n2.proto2.getEnumType(p), opt: true }]), (function(e3) {
      e3[e3.NONE = 0] = "NONE", e3[e3.SET = 1] = "SET", e3[e3.ALIAS = 2] = "ALIAS";
    })(p || (A2.GeneratedCodeInfo_Annotation_Semantic = p = {})), n2.proto2.util.setEnumType(p, "google.protobuf.GeneratedCodeInfo.Annotation.Semantic", [{ no: 0, name: "NONE" }, { no: 1, name: "SET" }, { no: 2, name: "ALIAS" }]);
  }
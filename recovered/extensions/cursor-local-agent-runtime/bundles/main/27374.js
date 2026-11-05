// @recovered-by cursor-re
// artifact: app/extensions/cursor-local-agent-runtime/dist/main.js sha256:be87ea0ed3ac86375ab8e5f92c4261df0ccfc61ff24b07420f9c88a78ae2cfd0
// module: 27374 range:848330..892792
// basis: webpack-id confidence: C
// method: split
// run: ext-p0 2026-11-05T10:07:22.069Z
27374: (e, t, r) => {
    "use strict";
    Object.defineProperty(t, "__esModule", { value: true }), t.GeneratedCodeInfo_Annotation_Semantic = t.GeneratedCodeInfo_Annotation = t.GeneratedCodeInfo = t.SourceCodeInfo_Location = t.SourceCodeInfo = t.FeatureSetDefaults_FeatureSetEditionDefault = t.FeatureSetDefaults = t.FeatureSet_JsonFormat = t.FeatureSet_MessageEncoding = t.FeatureSet_Utf8Validation = t.FeatureSet_RepeatedFieldEncoding = t.FeatureSet_EnumType = t.FeatureSet_FieldPresence = t.FeatureSet = t.UninterpretedOption_NamePart = t.UninterpretedOption = t.MethodOptions_IdempotencyLevel = t.MethodOptions = t.ServiceOptions = t.EnumValueOptions = t.EnumOptions = t.OneofOptions = t.FieldOptions_FeatureSupport = t.FieldOptions_EditionDefault = t.FieldOptions_OptionTargetType = t.FieldOptions_OptionRetention = t.FieldOptions_JSType = t.FieldOptions_CType = t.FieldOptions = t.MessageOptions = t.FileOptions_OptimizeMode = t.FileOptions = t.MethodDescriptorProto = t.ServiceDescriptorProto = t.EnumValueDescriptorProto = t.EnumDescriptorProto_EnumReservedRange = t.EnumDescriptorProto = t.OneofDescriptorProto = t.FieldDescriptorProto_Label = t.FieldDescriptorProto_Type = t.FieldDescriptorProto = t.ExtensionRangeOptions_Declaration = t.ExtensionRangeOptions_VerificationState = t.ExtensionRangeOptions = t.DescriptorProto_ReservedRange = t.DescriptorProto_ExtensionRange = t.DescriptorProto = t.FileDescriptorProto = t.FileDescriptorSet = t.Edition = void 0;
    const n = r(83672), o = r(24193);
    var s, i, a, l, c, u, d, p, h, m, f, g, y, v, w, b, _;
    !(function(e2) {
      e2[e2.EDITION_UNKNOWN = 0] = "EDITION_UNKNOWN", e2[e2.EDITION_LEGACY = 900] = "EDITION_LEGACY", e2[e2.EDITION_PROTO2 = 998] = "EDITION_PROTO2", e2[e2.EDITION_PROTO3 = 999] = "EDITION_PROTO3", e2[e2.EDITION_2023 = 1e3] = "EDITION_2023", e2[e2.EDITION_2024 = 1001] = "EDITION_2024", e2[e2.EDITION_1_TEST_ONLY = 1] = "EDITION_1_TEST_ONLY", e2[e2.EDITION_2_TEST_ONLY = 2] = "EDITION_2_TEST_ONLY", e2[e2.EDITION_99997_TEST_ONLY = 99997] = "EDITION_99997_TEST_ONLY", e2[e2.EDITION_99998_TEST_ONLY = 99998] = "EDITION_99998_TEST_ONLY", e2[e2.EDITION_99999_TEST_ONLY = 99999] = "EDITION_99999_TEST_ONLY", e2[e2.EDITION_MAX = 2147483647] = "EDITION_MAX";
    })(s || (t.Edition = s = {})), n.proto2.util.setEnumType(s, "google.protobuf.Edition", [{ no: 0, name: "EDITION_UNKNOWN" }, { no: 900, name: "EDITION_LEGACY" }, { no: 998, name: "EDITION_PROTO2" }, { no: 999, name: "EDITION_PROTO3" }, { no: 1e3, name: "EDITION_2023" }, { no: 1001, name: "EDITION_2024" }, { no: 1, name: "EDITION_1_TEST_ONLY" }, { no: 2, name: "EDITION_2_TEST_ONLY" }, { no: 99997, name: "EDITION_99997_TEST_ONLY" }, { no: 99998, name: "EDITION_99998_TEST_ONLY" }, { no: 99999, name: "EDITION_99999_TEST_ONLY" }, { no: 2147483647, name: "EDITION_MAX" }]);
    class S extends o.Message {
      constructor(e2) {
        super(), this.file = [], n.proto2.util.initPartial(e2, this);
      }
      static fromBinary(e2, t2) {
        return new S().fromBinary(e2, t2);
      }
      static fromJson(e2, t2) {
        return new S().fromJson(e2, t2);
      }
      static fromJsonString(e2, t2) {
        return new S().fromJsonString(e2, t2);
      }
      static equals(e2, t2) {
        return n.proto2.util.equals(S, e2, t2);
      }
    }
    t.FileDescriptorSet = S, S.runtime = n.proto2, S.typeName = "google.protobuf.FileDescriptorSet", S.fields = n.proto2.util.newFieldList(() => [{ no: 1, name: "file", kind: "message", T: x, repeated: true }]);
    class x extends o.Message {
      constructor(e2) {
        super(), this.dependency = [], this.publicDependency = [], this.weakDependency = [], this.messageType = [], this.enumType = [], this.service = [], this.extension = [], n.proto2.util.initPartial(e2, this);
      }
      static fromBinary(e2, t2) {
        return new x().fromBinary(e2, t2);
      }
      static fromJson(e2, t2) {
        return new x().fromJson(e2, t2);
      }
      static fromJsonString(e2, t2) {
        return new x().fromJsonString(e2, t2);
      }
      static equals(e2, t2) {
        return n.proto2.util.equals(x, e2, t2);
      }
    }
    t.FileDescriptorProto = x, x.runtime = n.proto2, x.typeName = "google.protobuf.FileDescriptorProto", x.fields = n.proto2.util.newFieldList(() => [{ no: 1, name: "name", kind: "scalar", T: 9, opt: true }, { no: 2, name: "package", kind: "scalar", T: 9, opt: true }, { no: 3, name: "dependency", kind: "scalar", T: 9, repeated: true }, { no: 10, name: "public_dependency", kind: "scalar", T: 5, repeated: true }, { no: 11, name: "weak_dependency", kind: "scalar", T: 5, repeated: true }, { no: 4, name: "message_type", kind: "message", T: k, repeated: true }, { no: 5, name: "enum_type", kind: "message", T: M, repeated: true }, { no: 6, name: "service", kind: "message", T: D, repeated: true }, { no: 7, name: "extension", kind: "message", T: A, repeated: true }, { no: 8, name: "options", kind: "message", T: F, opt: true }, { no: 9, name: "source_code_info", kind: "message", T: Z, opt: true }, { no: 12, name: "syntax", kind: "scalar", T: 9, opt: true }, { no: 14, name: "edition", kind: "enum", T: n.proto2.getEnumType(s), opt: true }]);
    class k extends o.Message {
      constructor(e2) {
        super(), this.field = [], this.extension = [], this.nestedType = [], this.enumType = [], this.extensionRange = [], this.oneofDecl = [], this.reservedRange = [], this.reservedName = [], n.proto2.util.initPartial(e2, this);
      }
      static fromBinary(e2, t2) {
        return new k().fromBinary(e2, t2);
      }
      static fromJson(e2, t2) {
        return new k().fromJson(e2, t2);
      }
      static fromJsonString(e2, t2) {
        return new k().fromJsonString(e2, t2);
      }
      static equals(e2, t2) {
        return n.proto2.util.equals(k, e2, t2);
      }
    }
    t.DescriptorProto = k, k.runtime = n.proto2, k.typeName = "google.protobuf.DescriptorProto", k.fields = n.proto2.util.newFieldList(() => [{ no: 1, name: "name", kind: "scalar", T: 9, opt: true }, { no: 2, name: "field", kind: "message", T: A, repeated: true }, { no: 6, name: "extension", kind: "message", T: A, repeated: true }, { no: 3, name: "nested_type", kind: "message", T: k, repeated: true }, { no: 4, name: "enum_type", kind: "message", T: M, repeated: true }, { no: 5, name: "extension_range", kind: "message", T: E, repeated: true }, { no: 8, name: "oneof_decl", kind: "message", T: P, repeated: true }, { no: 7, name: "options", kind: "message", T: L, opt: true }, { no: 9, name: "reserved_range", kind: "message", T, repeated: true }, { no: 10, name: "reserved_name", kind: "scalar", T: 9, repeated: true }]);
    class E extends o.Message {
      constructor(e2) {
        super(), n.proto2.util.initPartial(e2, this);
      }
      static fromBinary(e2, t2) {
        return new E().fromBinary(e2, t2);
      }
      static fromJson(e2, t2) {
        return new E().fromJson(e2, t2);
      }
      static fromJsonString(e2, t2) {
        return new E().fromJsonString(e2, t2);
      }
      static equals(e2, t2) {
        return n.proto2.util.equals(E, e2, t2);
      }
    }
    t.DescriptorProto_ExtensionRange = E, E.runtime = n.proto2, E.typeName = "google.protobuf.DescriptorProto.ExtensionRange", E.fields = n.proto2.util.newFieldList(() => [{ no: 1, name: "start", kind: "scalar", T: 5, opt: true }, { no: 2, name: "end", kind: "scalar", T: 5, opt: true }, { no: 3, name: "options", kind: "message", T: C, opt: true }]);
    class T extends o.Message {
      constructor(e2) {
        super(), n.proto2.util.initPartial(e2, this);
      }
      static fromBinary(e2, t2) {
        return new T().fromBinary(e2, t2);
      }
      static fromJson(e2, t2) {
        return new T().fromJson(e2, t2);
      }
      static fromJsonString(e2, t2) {
        return new T().fromJsonString(e2, t2);
      }
      static equals(e2, t2) {
        return n.proto2.util.equals(T, e2, t2);
      }
    }
    t.DescriptorProto_ReservedRange = T, T.runtime = n.proto2, T.typeName = "google.protobuf.DescriptorProto.ReservedRange", T.fields = n.proto2.util.newFieldList(() => [{ no: 1, name: "start", kind: "scalar", T: 5, opt: true }, { no: 2, name: "end", kind: "scalar", T: 5, opt: true }]);
    class C extends o.Message {
      constructor(e2) {
        super(), this.uninterpretedOption = [], this.declaration = [], n.proto2.util.initPartial(e2, this);
      }
      static fromBinary(e2, t2) {
        return new C().fromBinary(e2, t2);
      }
      static fromJson(e2, t2) {
        return new C().fromJson(e2, t2);
      }
      static fromJsonString(e2, t2) {
        return new C().fromJsonString(e2, t2);
      }
      static equals(e2, t2) {
        return n.proto2.util.equals(C, e2, t2);
      }
    }
    t.ExtensionRangeOptions = C, C.runtime = n.proto2, C.typeName = "google.protobuf.ExtensionRangeOptions", C.fields = n.proto2.util.newFieldList(() => [{ no: 999, name: "uninterpreted_option", kind: "message", T: W, repeated: true }, { no: 2, name: "declaration", kind: "message", T: I, repeated: true }, { no: 50, name: "features", kind: "message", T: Y, opt: true }, { no: 3, name: "verification", kind: "enum", T: n.proto2.getEnumType(i), opt: true, default: i.UNVERIFIED }]), (function(e2) {
      e2[e2.DECLARATION = 0] = "DECLARATION", e2[e2.UNVERIFIED = 1] = "UNVERIFIED";
    })(i || (t.ExtensionRangeOptions_VerificationState = i = {})), n.proto2.util.setEnumType(i, "google.protobuf.ExtensionRangeOptions.VerificationState", [{ no: 0, name: "DECLARATION" }, { no: 1, name: "UNVERIFIED" }]);
    class I extends o.Message {
      constructor(e2) {
        super(), n.proto2.util.initPartial(e2, this);
      }
      static fromBinary(e2, t2) {
        return new I().fromBinary(e2, t2);
      }
      static fromJson(e2, t2) {
        return new I().fromJson(e2, t2);
      }
      static fromJsonString(e2, t2) {
        return new I().fromJsonString(e2, t2);
      }
      static equals(e2, t2) {
        return n.proto2.util.equals(I, e2, t2);
      }
    }
    t.ExtensionRangeOptions_Declaration = I, I.runtime = n.proto2, I.typeName = "google.protobuf.ExtensionRangeOptions.Declaration", I.fields = n.proto2.util.newFieldList(() => [{ no: 1, name: "number", kind: "scalar", T: 5, opt: true }, { no: 2, name: "full_name", kind: "scalar", T: 9, opt: true }, { no: 3, name: "type", kind: "scalar", T: 9, opt: true }, { no: 5, name: "reserved", kind: "scalar", T: 8, opt: true }, { no: 6, name: "repeated", kind: "scalar", T: 8, opt: true }]);
    class A extends o.Message {
      constructor(e2) {
        super(), n.proto2.util.initPartial(e2, this);
      }
      static fromBinary(e2, t2) {
        return new A().fromBinary(e2, t2);
      }
      static fromJson(e2, t2) {
        return new A().fromJson(e2, t2);
      }
      static fromJsonString(e2, t2) {
        return new A().fromJsonString(e2, t2);
      }
      static equals(e2, t2) {
        return n.proto2.util.equals(A, e2, t2);
      }
    }
    t.FieldDescriptorProto = A, A.runtime = n.proto2, A.typeName = "google.protobuf.FieldDescriptorProto", A.fields = n.proto2.util.newFieldList(() => [{ no: 1, name: "name", kind: "scalar", T: 9, opt: true }, { no: 3, name: "number", kind: "scalar", T: 5, opt: true }, { no: 4, name: "label", kind: "enum", T: n.proto2.getEnumType(l), opt: true }, { no: 5, name: "type", kind: "enum", T: n.proto2.getEnumType(a), opt: true }, { no: 6, name: "type_name", kind: "scalar", T: 9, opt: true }, { no: 2, name: "extendee", kind: "scalar", T: 9, opt: true }, { no: 7, name: "default_value", kind: "scalar", T: 9, opt: true }, { no: 9, name: "oneof_index", kind: "scalar", T: 5, opt: true }, { no: 10, name: "json_name", kind: "scalar", T: 9, opt: true }, { no: 8, name: "options", kind: "message", T: U, opt: true }, { no: 17, name: "proto3_optional", kind: "scalar", T: 8, opt: true }]), (function(e2) {
      e2[e2.DOUBLE = 1] = "DOUBLE", e2[e2.FLOAT = 2] = "FLOAT", e2[e2.INT64 = 3] = "INT64", e2[e2.UINT64 = 4] = "UINT64", e2[e2.INT32 = 5] = "INT32", e2[e2.FIXED64 = 6] = "FIXED64", e2[e2.FIXED32 = 7] = "FIXED32", e2[e2.BOOL = 8] = "BOOL", e2[e2.STRING = 9] = "STRING", e2[e2.GROUP = 10] = "GROUP", e2[e2.MESSAGE = 11] = "MESSAGE", e2[e2.BYTES = 12] = "BYTES", e2[e2.UINT32 = 13] = "UINT32", e2[e2.ENUM = 14] = "ENUM", e2[e2.SFIXED32 = 15] = "SFIXED32", e2[e2.SFIXED64 = 16] = "SFIXED64", e2[e2.SINT32 = 17] = "SINT32", e2[e2.SINT64 = 18] = "SINT64";
    })(a || (t.FieldDescriptorProto_Type = a = {})), n.proto2.util.setEnumType(a, "google.protobuf.FieldDescriptorProto.Type", [{ no: 1, name: "TYPE_DOUBLE" }, { no: 2, name: "TYPE_FLOAT" }, { no: 3, name: "TYPE_INT64" }, { no: 4, name: "TYPE_UINT64" }, { no: 5, name: "TYPE_INT32" }, { no: 6, name: "TYPE_FIXED64" }, { no: 7, name: "TYPE_FIXED32" }, { no: 8, name: "TYPE_BOOL" }, { no: 9, name: "TYPE_STRING" }, { no: 10, name: "TYPE_GROUP" }, { no: 11, name: "TYPE_MESSAGE" }, { no: 12, name: "TYPE_BYTES" }, { no: 13, name: "TYPE_UINT32" }, { no: 14, name: "TYPE_ENUM" }, { no: 15, name: "TYPE_SFIXED32" }, { no: 16, name: "TYPE_SFIXED64" }, { no: 17, name: "TYPE_SINT32" }, { no: 18, name: "TYPE_SINT64" }]), (function(e2) {
      e2[e2.OPTIONAL = 1] = "OPTIONAL", e2[e2.REPEATED = 3] = "REPEATED", e2[e2.REQUIRED = 2] = "REQUIRED";
    })(l || (t.FieldDescriptorProto_Label = l = {})), n.proto2.util.setEnumType(l, "google.protobuf.FieldDescriptorProto.Label", [{ no: 1, name: "LABEL_OPTIONAL" }, { no: 3, name: "LABEL_REPEATED" }, { no: 2, name: "LABEL_REQUIRED" }]);
    class P extends o.Message {
      constructor(e2) {
        super(), n.proto2.util.initPartial(e2, this);
      }
      static fromBinary(e2, t2) {
        return new P().fromBinary(e2, t2);
      }
      static fromJson(e2, t2) {
        return new P().fromJson(e2, t2);
      }
      static fromJsonString(e2, t2) {
        return new P().fromJsonString(e2, t2);
      }
      static equals(e2, t2) {
        return n.proto2.util.equals(P, e2, t2);
      }
    }
    t.OneofDescriptorProto = P, P.runtime = n.proto2, P.typeName = "google.protobuf.OneofDescriptorProto", P.fields = n.proto2.util.newFieldList(() => [{ no: 1, name: "name", kind: "scalar", T: 9, opt: true }, { no: 2, name: "options", kind: "message", T: q, opt: true }]);
    class M extends o.Message {
      constructor(e2) {
        super(), this.value = [], this.reservedRange = [], this.reservedName = [], n.proto2.util.initPartial(e2, this);
      }
      static fromBinary(e2, t2) {
        return new M().fromBinary(e2, t2);
      }
      static fromJson(e2, t2) {
        return new M().fromJson(e2, t2);
      }
      static fromJsonString(e2, t2) {
        return new M().fromJsonString(e2, t2);
      }
      static equals(e2, t2) {
        return n.proto2.util.equals(M, e2, t2);
      }
    }
    t.EnumDescriptorProto = M, M.runtime = n.proto2, M.typeName = "google.protobuf.EnumDescriptorProto", M.fields = n.proto2.util.newFieldList(() => [{ no: 1, name: "name", kind: "scalar", T: 9, opt: true }, { no: 2, name: "value", kind: "message", T: O, repeated: true }, { no: 3, name: "options", kind: "message", T: j, opt: true }, { no: 4, name: "reserved_range", kind: "message", T: R, repeated: true }, { no: 5, name: "reserved_name", kind: "scalar", T: 9, repeated: true }]);
    class R extends o.Message {
      constructor(e2) {
        super(), n.proto2.util.initPartial(e2, this);
      }
      static fromBinary(e2, t2) {
        return new R().fromBinary(e2, t2);
      }
      static fromJson(e2, t2) {
        return new R().fromJson(e2, t2);
      }
      static fromJsonString(e2, t2) {
        return new R().fromJsonString(e2, t2);
      }
      static equals(e2, t2) {
        return n.proto2.util.equals(R, e2, t2);
      }
    }
    t.EnumDescriptorProto_EnumReservedRange = R, R.runtime = n.proto2, R.typeName = "google.protobuf.EnumDescriptorProto.EnumReservedRange", R.fields = n.proto2.util.newFieldList(() => [{ no: 1, name: "start", kind: "scalar", T: 5, opt: true }, { no: 2, name: "end", kind: "scalar", T: 5, opt: true }]);
    class O extends o.Message {
      constructor(e2) {
        super(), n.proto2.util.initPartial(e2, this);
      }
      static fromBinary(e2, t2) {
        return new O().fromBinary(e2, t2);
      }
      static fromJson(e2, t2) {
        return new O().fromJson(e2, t2);
      }
      static fromJsonString(e2, t2) {
        return new O().fromJsonString(e2, t2);
      }
      static equals(e2, t2) {
        return n.proto2.util.equals(O, e2, t2);
      }
    }
    t.EnumValueDescriptorProto = O, O.runtime = n.proto2, O.typeName = "google.protobuf.EnumValueDescriptorProto", O.fields = n.proto2.util.newFieldList(() => [{ no: 1, name: "name", kind: "scalar", T: 9, opt: true }, { no: 2, name: "number", kind: "scalar", T: 5, opt: true }, { no: 3, name: "options", kind: "message", T: J, opt: true }]);
    class D extends o.Message {
      constructor(e2) {
        super(), this.method = [], n.proto2.util.initPartial(e2, this);
      }
      static fromBinary(e2, t2) {
        return new D().fromBinary(e2, t2);
      }
      static fromJson(e2, t2) {
        return new D().fromJson(e2, t2);
      }
      static fromJsonString(e2, t2) {
        return new D().fromJsonString(e2, t2);
      }
      static equals(e2, t2) {
        return n.proto2.util.equals(D, e2, t2);
      }
    }
    t.ServiceDescriptorProto = D, D.runtime = n.proto2, D.typeName = "google.protobuf.ServiceDescriptorProto", D.fields = n.proto2.util.newFieldList(() => [{ no: 1, name: "name", kind: "scalar", T: 9, opt: true }, { no: 2, name: "method", kind: "message", T: N, repeated: true }, { no: 3, name: "options", kind: "message", T: z, opt: true }]);
    class N extends o.Message {
      constructor(e2) {
        super(), n.proto2.util.initPartial(e2, this);
      }
      static fromBinary(e2, t2) {
        return new N().fromBinary(e2, t2);
      }
      static fromJson(e2, t2) {
        return new N().fromJson(e2, t2);
      }
      static fromJsonString(e2, t2) {
        return new N().fromJsonString(e2, t2);
      }
      static equals(e2, t2) {
        return n.proto2.util.equals(N, e2, t2);
      }
    }
    t.MethodDescriptorProto = N, N.runtime = n.proto2, N.typeName = "google.protobuf.MethodDescriptorProto", N.fields = n.proto2.util.newFieldList(() => [{ no: 1, name: "name", kind: "scalar", T: 9, opt: true }, { no: 2, name: "input_type", kind: "scalar", T: 9, opt: true }, { no: 3, name: "output_type", kind: "scalar", T: 9, opt: true }, { no: 4, name: "options", kind: "message", T: H, opt: true }, { no: 5, name: "client_streaming", kind: "scalar", T: 8, opt: true, default: false }, { no: 6, name: "server_streaming", kind: "scalar", T: 8, opt: true, default: false }]);
    class F extends o.Message {
      constructor(e2) {
        super(), this.uninterpretedOption = [], n.proto2.util.initPartial(e2, this);
      }
      static fromBinary(e2, t2) {
        return new F().fromBinary(e2, t2);
      }
      static fromJson(e2, t2) {
        return new F().fromJson(e2, t2);
      }
      static fromJsonString(e2, t2) {
        return new F().fromJsonString(e2, t2);
      }
      static equals(e2, t2) {
        return n.proto2.util.equals(F, e2, t2);
      }
    }
    t.FileOptions = F, F.runtime = n.proto2, F.typeName = "google.protobuf.FileOptions", F.fields = n.proto2.util.newFieldList(() => [{ no: 1, name: "java_package", kind: "scalar", T: 9, opt: true }, { no: 8, name: "java_outer_classname", kind: "scalar", T: 9, opt: true }, { no: 10, name: "java_multiple_files", kind: "scalar", T: 8, opt: true, default: false }, { no: 20, name: "java_generate_equals_and_hash", kind: "scalar", T: 8, opt: true }, { no: 27, name: "java_string_check_utf8", kind: "scalar", T: 8, opt: true, default: false }, { no: 9, name: "optimize_for", kind: "enum", T: n.proto2.getEnumType(c), opt: true, default: c.SPEED }, { no: 11, name: "go_package", kind: "scalar", T: 9, opt: true }, { no: 16, name: "cc_generic_services", kind: "scalar", T: 8, opt: true, default: false }, { no: 17, name: "java_generic_services", kind: "scalar", T: 8, opt: true, default: false }, { no: 18, name: "py_generic_services", kind: "scalar", T: 8, opt: true, default: false }, { no: 23, name: "deprecated", kind: "scalar", T: 8, opt: true, default: false }, { no: 31, name: "cc_enable_arenas", kind: "scalar", T: 8, opt: true, default: true }, { no: 36, name: "objc_class_prefix", kind: "scalar", T: 9, opt: true }, { no: 37, name: "csharp_namespace", kind: "scalar", T: 9, opt: true }, { no: 39, name: "swift_prefix", kind: "scalar", T: 9, opt: true }, { no: 40, name: "php_class_prefix", kind: "scalar", T: 9, opt: true }, { no: 41, name: "php_namespace", kind: "scalar", T: 9, opt: true }, { no: 44, name: "php_metadata_namespace", kind: "scalar", T: 9, opt: true }, { no: 45, name: "ruby_package", kind: "scalar", T: 9, opt: true }, { no: 50, name: "features", kind: "message", T: Y, opt: true }, { no: 999, name: "uninterpreted_option", kind: "message", T: W, repeated: true }]), (function(e2) {
      e2[e2.SPEED = 1] = "SPEED", e2[e2.CODE_SIZE = 2] = "CODE_SIZE", e2[e2.LITE_RUNTIME = 3] = "LITE_RUNTIME";
    })(c || (t.FileOptions_OptimizeMode = c = {})), n.proto2.util.setEnumType(c, "google.protobuf.FileOptions.OptimizeMode", [{ no: 1, name: "SPEED" }, { no: 2, name: "CODE_SIZE" }, { no: 3, name: "LITE_RUNTIME" }]);
    class L extends o.Message {
      constructor(e2) {
        super(), this.uninterpretedOption = [], n.proto2.util.initPartial(e2, this);
      }
      static fromBinary(e2, t2) {
        return new L().fromBinary(e2, t2);
      }
      static fromJson(e2, t2) {
        return new L().fromJson(e2, t2);
      }
      static fromJsonString(e2, t2) {
        return new L().fromJsonString(e2, t2);
      }
      static equals(e2, t2) {
        return n.proto2.util.equals(L, e2, t2);
      }
    }
    t.MessageOptions = L, L.runtime = n.proto2, L.typeName = "google.protobuf.MessageOptions", L.fields = n.proto2.util.newFieldList(() => [{ no: 1, name: "message_set_wire_format", kind: "scalar", T: 8, opt: true, default: false }, { no: 2, name: "no_standard_descriptor_accessor", kind: "scalar", T: 8, opt: true, default: false }, { no: 3, name: "deprecated", kind: "scalar", T: 8, opt: true, default: false }, { no: 7, name: "map_entry", kind: "scalar", T: 8, opt: true }, { no: 11, name: "deprecated_legacy_json_field_conflicts", kind: "scalar", T: 8, opt: true }, { no: 12, name: "features", kind: "message", T: Y, opt: true }, { no: 999, name: "uninterpreted_option", kind: "message", T: W, repeated: true }]);
    class U extends o.Message {
      constructor(e2) {
        super(), this.targets = [], this.editionDefaults = [], this.uninterpretedOption = [], n.proto2.util.initPartial(e2, this);
      }
      static fromBinary(e2, t2) {
        return new U().fromBinary(e2, t2);
      }
      static fromJson(e2, t2) {
        return new U().fromJson(e2, t2);
      }
      static fromJsonString(e2, t2) {
        return new U().fromJsonString(e2, t2);
      }
      static equals(e2, t2) {
        return n.proto2.util.equals(U, e2, t2);
      }
    }
    t.FieldOptions = U, U.runtime = n.proto2, U.typeName = "google.protobuf.FieldOptions", U.fields = n.proto2.util.newFieldList(() => [{ no: 1, name: "ctype", kind: "enum", T: n.proto2.getEnumType(u), opt: true, default: u.STRING }, { no: 2, name: "packed", kind: "scalar", T: 8, opt: true }, { no: 6, name: "jstype", kind: "enum", T: n.proto2.getEnumType(d), opt: true, default: d.JS_NORMAL }, { no: 5, name: "lazy", kind: "scalar", T: 8, opt: true, default: false }, { no: 15, name: "unverified_lazy", kind: "scalar", T: 8, opt: true, default: false }, { no: 3, name: "deprecated", kind: "scalar", T: 8, opt: true, default: false }, { no: 10, name: "weak", kind: "scalar", T: 8, opt: true, default: false }, { no: 16, name: "debug_redact", kind: "scalar", T: 8, opt: true, default: false }, { no: 17, name: "retention", kind: "enum", T: n.proto2.getEnumType(p), opt: true }, { no: 19, name: "targets", kind: "enum", T: n.proto2.getEnumType(h), repeated: true }, { no: 20, name: "edition_defaults", kind: "message", T: B, repeated: true }, { no: 21, name: "features", kind: "message", T: Y, opt: true }, { no: 22, name: "feature_support", kind: "message", T: $, opt: true }, { no: 999, name: "uninterpreted_option", kind: "message", T: W, repeated: true }]), (function(e2) {
      e2[e2.STRING = 0] = "STRING", e2[e2.CORD = 1] = "CORD", e2[e2.STRING_PIECE = 2] = "STRING_PIECE";
    })(u || (t.FieldOptions_CType = u = {})), n.proto2.util.setEnumType(u, "google.protobuf.FieldOptions.CType", [{ no: 0, name: "STRING" }, { no: 1, name: "CORD" }, { no: 2, name: "STRING_PIECE" }]), (function(e2) {
      e2[e2.JS_NORMAL = 0] = "JS_NORMAL", e2[e2.JS_STRING = 1] = "JS_STRING", e2[e2.JS_NUMBER = 2] = "JS_NUMBER";
    })(d || (t.FieldOptions_JSType = d = {})), n.proto2.util.setEnumType(d, "google.protobuf.FieldOptions.JSType", [{ no: 0, name: "JS_NORMAL" }, { no: 1, name: "JS_STRING" }, { no: 2, name: "JS_NUMBER" }]), (function(e2) {
      e2[e2.RETENTION_UNKNOWN = 0] = "RETENTION_UNKNOWN", e2[e2.RETENTION_RUNTIME = 1] = "RETENTION_RUNTIME", e2[e2.RETENTION_SOURCE = 2] = "RETENTION_SOURCE";
    })(p || (t.FieldOptions_OptionRetention = p = {})), n.proto2.util.setEnumType(p, "google.protobuf.FieldOptions.OptionRetention", [{ no: 0, name: "RETENTION_UNKNOWN" }, { no: 1, name: "RETENTION_RUNTIME" }, { no: 2, name: "RETENTION_SOURCE" }]), (function(e2) {
      e2[e2.TARGET_TYPE_UNKNOWN = 0] = "TARGET_TYPE_UNKNOWN", e2[e2.TARGET_TYPE_FILE = 1] = "TARGET_TYPE_FILE", e2[e2.TARGET_TYPE_EXTENSION_RANGE = 2] = "TARGET_TYPE_EXTENSION_RANGE", e2[e2.TARGET_TYPE_MESSAGE = 3] = "TARGET_TYPE_MESSAGE", e2[e2.TARGET_TYPE_FIELD = 4] = "TARGET_TYPE_FIELD", e2[e2.TARGET_TYPE_ONEOF = 5] = "TARGET_TYPE_ONEOF", e2[e2.TARGET_TYPE_ENUM = 6] = "TARGET_TYPE_ENUM", e2[e2.TARGET_TYPE_ENUM_ENTRY = 7] = "TARGET_TYPE_ENUM_ENTRY", e2[e2.TARGET_TYPE_SERVICE = 8] = "TARGET_TYPE_SERVICE", e2[e2.TARGET_TYPE_METHOD = 9] = "TARGET_TYPE_METHOD";
    })(h || (t.FieldOptions_OptionTargetType = h = {})), n.proto2.util.setEnumType(h, "google.protobuf.FieldOptions.OptionTargetType", [{ no: 0, name: "TARGET_TYPE_UNKNOWN" }, { no: 1, name: "TARGET_TYPE_FILE" }, { no: 2, name: "TARGET_TYPE_EXTENSION_RANGE" }, { no: 3, name: "TARGET_TYPE_MESSAGE" }, { no: 4, name: "TARGET_TYPE_FIELD" }, { no: 5, name: "TARGET_TYPE_ONEOF" }, { no: 6, name: "TARGET_TYPE_ENUM" }, { no: 7, name: "TARGET_TYPE_ENUM_ENTRY" }, { no: 8, name: "TARGET_TYPE_SERVICE" }, { no: 9, name: "TARGET_TYPE_METHOD" }]);
    class B extends o.Message {
      constructor(e2) {
        super(), n.proto2.util.initPartial(e2, this);
      }
      static fromBinary(e2, t2) {
        return new B().fromBinary(e2, t2);
      }
      static fromJson(e2, t2) {
        return new B().fromJson(e2, t2);
      }
      static fromJsonString(e2, t2) {
        return new B().fromJsonString(e2, t2);
      }
      static equals(e2, t2) {
        return n.proto2.util.equals(B, e2, t2);
      }
    }
    t.FieldOptions_EditionDefault = B, B.runtime = n.proto2, B.typeName = "google.protobuf.FieldOptions.EditionDefault", B.fields = n.proto2.util.newFieldList(() => [{ no: 3, name: "edition", kind: "enum", T: n.proto2.getEnumType(s), opt: true }, { no: 2, name: "value", kind: "scalar", T: 9, opt: true }]);
    class $ extends o.Message {
      constructor(e2) {
        super(), n.proto2.util.initPartial(e2, this);
      }
      static fromBinary(e2, t2) {
        return new $().fromBinary(e2, t2);
      }
      static fromJson(e2, t2) {
        return new $().fromJson(e2, t2);
      }
      static fromJsonString(e2, t2) {
        return new $().fromJsonString(e2, t2);
      }
      static equals(e2, t2) {
        return n.proto2.util.equals($, e2, t2);
      }
    }
    t.FieldOptions_FeatureSupport = $, $.runtime = n.proto2, $.typeName = "google.protobuf.FieldOptions.FeatureSupport", $.fields = n.proto2.util.newFieldList(() => [{ no: 1, name: "edition_introduced", kind: "enum", T: n.proto2.getEnumType(s), opt: true }, { no: 2, name: "edition_deprecated", kind: "enum", T: n.proto2.getEnumType(s), opt: true }, { no: 3, name: "deprecation_warning", kind: "scalar", T: 9, opt: true }, { no: 4, name: "edition_removed", kind: "enum", T: n.proto2.getEnumType(s), opt: true }]);
    class q extends o.Message {
      constructor(e2) {
        super(), this.uninterpretedOption = [], n.proto2.util.initPartial(e2, this);
      }
      static fromBinary(e2, t2) {
        return new q().fromBinary(e2, t2);
      }
      static fromJson(e2, t2) {
        return new q().fromJson(e2, t2);
      }
      static fromJsonString(e2, t2) {
        return new q().fromJsonString(e2, t2);
      }
      static equals(e2, t2) {
        return n.proto2.util.equals(q, e2, t2);
      }
    }
    t.OneofOptions = q, q.runtime = n.proto2, q.typeName = "google.protobuf.OneofOptions", q.fields = n.proto2.util.newFieldList(() => [{ no: 1, name: "features", kind: "message", T: Y, opt: true }, { no: 999, name: "uninterpreted_option", kind: "message", T: W, repeated: true }]);
    class j extends o.Message {
      constructor(e2) {
        super(), this.uninterpretedOption = [], n.proto2.util.initPartial(e2, this);
      }
      static fromBinary(e2, t2) {
        return new j().fromBinary(e2, t2);
      }
      static fromJson(e2, t2) {
        return new j().fromJson(e2, t2);
      }
      static fromJsonString(e2, t2) {
        return new j().fromJsonString(e2, t2);
      }
      static equals(e2, t2) {
        return n.proto2.util.equals(j, e2, t2);
      }
    }
    t.EnumOptions = j, j.runtime = n.proto2, j.typeName = "google.protobuf.EnumOptions", j.fields = n.proto2.util.newFieldList(() => [{ no: 2, name: "allow_alias", kind: "scalar", T: 8, opt: true }, { no: 3, name: "deprecated", kind: "scalar", T: 8, opt: true, default: false }, { no: 6, name: "deprecated_legacy_json_field_conflicts", kind: "scalar", T: 8, opt: true }, { no: 7, name: "features", kind: "message", T: Y, opt: true }, { no: 999, name: "uninterpreted_option", kind: "message", T: W, repeated: true }]);
    class J extends o.Message {
      constructor(e2) {
        super(), this.uninterpretedOption = [], n.proto2.util.initPartial(e2, this);
      }
      static fromBinary(e2, t2) {
        return new J().fromBinary(e2, t2);
      }
      static fromJson(e2, t2) {
        return new J().fromJson(e2, t2);
      }
      static fromJsonString(e2, t2) {
        return new J().fromJsonString(e2, t2);
      }
      static equals(e2, t2) {
        return n.proto2.util.equals(J, e2, t2);
      }
    }
    t.EnumValueOptions = J, J.runtime = n.proto2, J.typeName = "google.protobuf.EnumValueOptions", J.fields = n.proto2.util.newFieldList(() => [{ no: 1, name: "deprecated", kind: "scalar", T: 8, opt: true, default: false }, { no: 2, name: "features", kind: "message", T: Y, opt: true }, { no: 3, name: "debug_redact", kind: "scalar", T: 8, opt: true, default: false }, { no: 4, name: "feature_support", kind: "message", T: $, opt: true }, { no: 999, name: "uninterpreted_option", kind: "message", T: W, repeated: true }]);
    class z extends o.Message {
      constructor(e2) {
        super(), this.uninterpretedOption = [], n.proto2.util.initPartial(e2, this);
      }
      static fromBinary(e2, t2) {
        return new z().fromBinary(e2, t2);
      }
      static fromJson(e2, t2) {
        return new z().fromJson(e2, t2);
      }
      static fromJsonString(e2, t2) {
        return new z().fromJsonString(e2, t2);
      }
      static equals(e2, t2) {
        return n.proto2.util.equals(z, e2, t2);
      }
    }
    t.ServiceOptions = z, z.runtime = n.proto2, z.typeName = "google.protobuf.ServiceOptions", z.fields = n.proto2.util.newFieldList(() => [{ no: 34, name: "features", kind: "message", T: Y, opt: true }, { no: 33, name: "deprecated", kind: "scalar", T: 8, opt: true, default: false }, { no: 999, name: "uninterpreted_option", kind: "message", T: W, repeated: true }]);
    class H extends o.Message {
      constructor(e2) {
        super(), this.uninterpretedOption = [], n.proto2.util.initPartial(e2, this);
      }
      static fromBinary(e2, t2) {
        return new H().fromBinary(e2, t2);
      }
      static fromJson(e2, t2) {
        return new H().fromJson(e2, t2);
      }
      static fromJsonString(e2, t2) {
        return new H().fromJsonString(e2, t2);
      }
      static equals(e2, t2) {
        return n.proto2.util.equals(H, e2, t2);
      }
    }
    t.MethodOptions = H, H.runtime = n.proto2, H.typeName = "google.protobuf.MethodOptions", H.fields = n.proto2.util.newFieldList(() => [{ no: 33, name: "deprecated", kind: "scalar", T: 8, opt: true, default: false }, { no: 34, name: "idempotency_level", kind: "enum", T: n.proto2.getEnumType(m), opt: true, default: m.IDEMPOTENCY_UNKNOWN }, { no: 35, name: "features", kind: "message", T: Y, opt: true }, { no: 999, name: "uninterpreted_option", kind: "message", T: W, repeated: true }]), (function(e2) {
      e2[e2.IDEMPOTENCY_UNKNOWN = 0] = "IDEMPOTENCY_UNKNOWN", e2[e2.NO_SIDE_EFFECTS = 1] = "NO_SIDE_EFFECTS", e2[e2.IDEMPOTENT = 2] = "IDEMPOTENT";
    })(m || (t.MethodOptions_IdempotencyLevel = m = {})), n.proto2.util.setEnumType(m, "google.protobuf.MethodOptions.IdempotencyLevel", [{ no: 0, name: "IDEMPOTENCY_UNKNOWN" }, { no: 1, name: "NO_SIDE_EFFECTS" }, { no: 2, name: "IDEMPOTENT" }]);
    class W extends o.Message {
      constructor(e2) {
        super(), this.name = [], n.proto2.util.initPartial(e2, this);
      }
      static fromBinary(e2, t2) {
        return new W().fromBinary(e2, t2);
      }
      static fromJson(e2, t2) {
        return new W().fromJson(e2, t2);
      }
      static fromJsonString(e2, t2) {
        return new W().fromJsonString(e2, t2);
      }
      static equals(e2, t2) {
        return n.proto2.util.equals(W, e2, t2);
      }
    }
    t.UninterpretedOption = W, W.runtime = n.proto2, W.typeName = "google.protobuf.UninterpretedOption", W.fields = n.proto2.util.newFieldList(() => [{ no: 2, name: "name", kind: "message", T: G, repeated: true }, { no: 3, name: "identifier_value", kind: "scalar", T: 9, opt: true }, { no: 4, name: "positive_int_value", kind: "scalar", T: 4, opt: true }, { no: 5, name: "negative_int_value", kind: "scalar", T: 3, opt: true }, { no: 6, name: "double_value", kind: "scalar", T: 1, opt: true }, { no: 7, name: "string_value", kind: "scalar", T: 12, opt: true }, { no: 8, name: "aggregate_value", kind: "scalar", T: 9, opt: true }]);
    class G extends o.Message {
      constructor(e2) {
        super(), n.proto2.util.initPartial(e2, this);
      }
      static fromBinary(e2, t2) {
        return new G().fromBinary(e2, t2);
      }
      static fromJson(e2, t2) {
        return new G().fromJson(e2, t2);
      }
      static fromJsonString(e2, t2) {
        return new G().fromJsonString(e2, t2);
      }
      static equals(e2, t2) {
        return n.proto2.util.equals(G, e2, t2);
      }
    }
    t.UninterpretedOption_NamePart = G, G.runtime = n.proto2, G.typeName = "google.protobuf.UninterpretedOption.NamePart", G.fields = n.proto2.util.newFieldList(() => [{ no: 1, name: "name_part", kind: "scalar", T: 9, req: true }, { no: 2, name: "is_extension", kind: "scalar", T: 8, req: true }]);
    class Y extends o.Message {
      constructor(e2) {
        super(), n.proto2.util.initPartial(e2, this);
      }
      static fromBinary(e2, t2) {
        return new Y().fromBinary(e2, t2);
      }
      static fromJson(e2, t2) {
        return new Y().fromJson(e2, t2);
      }
      static fromJsonString(e2, t2) {
        return new Y().fromJsonString(e2, t2);
      }
      static equals(e2, t2) {
        return n.proto2.util.equals(Y, e2, t2);
      }
    }
    t.FeatureSet = Y, Y.runtime = n.proto2, Y.typeName = "google.protobuf.FeatureSet", Y.fields = n.proto2.util.newFieldList(() => [{ no: 1, name: "field_presence", kind: "enum", T: n.proto2.getEnumType(f), opt: true }, { no: 2, name: "enum_type", kind: "enum", T: n.proto2.getEnumType(g), opt: true }, { no: 3, name: "repeated_field_encoding", kind: "enum", T: n.proto2.getEnumType(y), opt: true }, { no: 4, name: "utf8_validation", kind: "enum", T: n.proto2.getEnumType(v), opt: true }, { no: 5, name: "message_encoding", kind: "enum", T: n.proto2.getEnumType(w), opt: true }, { no: 6, name: "json_format", kind: "enum", T: n.proto2.getEnumType(b), opt: true }]), (function(e2) {
      e2[e2.FIELD_PRESENCE_UNKNOWN = 0] = "FIELD_PRESENCE_UNKNOWN", e2[e2.EXPLICIT = 1] = "EXPLICIT", e2[e2.IMPLICIT = 2] = "IMPLICIT", e2[e2.LEGACY_REQUIRED = 3] = "LEGACY_REQUIRED";
    })(f || (t.FeatureSet_FieldPresence = f = {})), n.proto2.util.setEnumType(f, "google.protobuf.FeatureSet.FieldPresence", [{ no: 0, name: "FIELD_PRESENCE_UNKNOWN" }, { no: 1, name: "EXPLICIT" }, { no: 2, name: "IMPLICIT" }, { no: 3, name: "LEGACY_REQUIRED" }]), (function(e2) {
      e2[e2.ENUM_TYPE_UNKNOWN = 0] = "ENUM_TYPE_UNKNOWN", e2[e2.OPEN = 1] = "OPEN", e2[e2.CLOSED = 2] = "CLOSED";
    })(g || (t.FeatureSet_EnumType = g = {})), n.proto2.util.setEnumType(g, "google.protobuf.FeatureSet.EnumType", [{ no: 0, name: "ENUM_TYPE_UNKNOWN" }, { no: 1, name: "OPEN" }, { no: 2, name: "CLOSED" }]), (function(e2) {
      e2[e2.REPEATED_FIELD_ENCODING_UNKNOWN = 0] = "REPEATED_FIELD_ENCODING_UNKNOWN", e2[e2.PACKED = 1] = "PACKED", e2[e2.EXPANDED = 2] = "EXPANDED";
    })(y || (t.FeatureSet_RepeatedFieldEncoding = y = {})), n.proto2.util.setEnumType(y, "google.protobuf.FeatureSet.RepeatedFieldEncoding", [{ no: 0, name: "REPEATED_FIELD_ENCODING_UNKNOWN" }, { no: 1, name: "PACKED" }, { no: 2, name: "EXPANDED" }]), (function(e2) {
      e2[e2.UTF8_VALIDATION_UNKNOWN = 0] = "UTF8_VALIDATION_UNKNOWN", e2[e2.VERIFY = 2] = "VERIFY", e2[e2.NONE = 3] = "NONE";
    })(v || (t.FeatureSet_Utf8Validation = v = {})), n.proto2.util.setEnumType(v, "google.protobuf.FeatureSet.Utf8Validation", [{ no: 0, name: "UTF8_VALIDATION_UNKNOWN" }, { no: 2, name: "VERIFY" }, { no: 3, name: "NONE" }]), (function(e2) {
      e2[e2.MESSAGE_ENCODING_UNKNOWN = 0] = "MESSAGE_ENCODING_UNKNOWN", e2[e2.LENGTH_PREFIXED = 1] = "LENGTH_PREFIXED", e2[e2.DELIMITED = 2] = "DELIMITED";
    })(w || (t.FeatureSet_MessageEncoding = w = {})), n.proto2.util.setEnumType(w, "google.protobuf.FeatureSet.MessageEncoding", [{ no: 0, name: "MESSAGE_ENCODING_UNKNOWN" }, { no: 1, name: "LENGTH_PREFIXED" }, { no: 2, name: "DELIMITED" }]), (function(e2) {
      e2[e2.JSON_FORMAT_UNKNOWN = 0] = "JSON_FORMAT_UNKNOWN", e2[e2.ALLOW = 1] = "ALLOW", e2[e2.LEGACY_BEST_EFFORT = 2] = "LEGACY_BEST_EFFORT";
    })(b || (t.FeatureSet_JsonFormat = b = {})), n.proto2.util.setEnumType(b, "google.protobuf.FeatureSet.JsonFormat", [{ no: 0, name: "JSON_FORMAT_UNKNOWN" }, { no: 1, name: "ALLOW" }, { no: 2, name: "LEGACY_BEST_EFFORT" }]);
    class V extends o.Message {
      constructor(e2) {
        super(), this.defaults = [], n.proto2.util.initPartial(e2, this);
      }
      static fromBinary(e2, t2) {
        return new V().fromBinary(e2, t2);
      }
      static fromJson(e2, t2) {
        return new V().fromJson(e2, t2);
      }
      static fromJsonString(e2, t2) {
        return new V().fromJsonString(e2, t2);
      }
      static equals(e2, t2) {
        return n.proto2.util.equals(V, e2, t2);
      }
    }
    t.FeatureSetDefaults = V, V.runtime = n.proto2, V.typeName = "google.protobuf.FeatureSetDefaults", V.fields = n.proto2.util.newFieldList(() => [{ no: 1, name: "defaults", kind: "message", T: K, repeated: true }, { no: 4, name: "minimum_edition", kind: "enum", T: n.proto2.getEnumType(s), opt: true }, { no: 5, name: "maximum_edition", kind: "enum", T: n.proto2.getEnumType(s), opt: true }]);
    class K extends o.Message {
      constructor(e2) {
        super(), n.proto2.util.initPartial(e2, this);
      }
      static fromBinary(e2, t2) {
        return new K().fromBinary(e2, t2);
      }
      static fromJson(e2, t2) {
        return new K().fromJson(e2, t2);
      }
      static fromJsonString(e2, t2) {
        return new K().fromJsonString(e2, t2);
      }
      static equals(e2, t2) {
        return n.proto2.util.equals(K, e2, t2);
      }
    }
    t.FeatureSetDefaults_FeatureSetEditionDefault = K, K.runtime = n.proto2, K.typeName = "google.protobuf.FeatureSetDefaults.FeatureSetEditionDefault", K.fields = n.proto2.util.newFieldList(() => [{ no: 3, name: "edition", kind: "enum", T: n.proto2.getEnumType(s), opt: true }, { no: 4, name: "overridable_features", kind: "message", T: Y, opt: true }, { no: 5, name: "fixed_features", kind: "message", T: Y, opt: true }]);
    class Z extends o.Message {
      constructor(e2) {
        super(), this.location = [], n.proto2.util.initPartial(e2, this);
      }
      static fromBinary(e2, t2) {
        return new Z().fromBinary(e2, t2);
      }
      static fromJson(e2, t2) {
        return new Z().fromJson(e2, t2);
      }
      static fromJsonString(e2, t2) {
        return new Z().fromJsonString(e2, t2);
      }
      static equals(e2, t2) {
        return n.proto2.util.equals(Z, e2, t2);
      }
    }
    t.SourceCodeInfo = Z, Z.runtime = n.proto2, Z.typeName = "google.protobuf.SourceCodeInfo", Z.fields = n.proto2.util.newFieldList(() => [{ no: 1, name: "location", kind: "message", T: X, repeated: true }]);
    class X extends o.Message {
      constructor(e2) {
        super(), this.path = [], this.span = [], this.leadingDetachedComments = [], n.proto2.util.initPartial(e2, this);
      }
      static fromBinary(e2, t2) {
        return new X().fromBinary(e2, t2);
      }
      static fromJson(e2, t2) {
        return new X().fromJson(e2, t2);
      }
      static fromJsonString(e2, t2) {
        return new X().fromJsonString(e2, t2);
      }
      static equals(e2, t2) {
        return n.proto2.util.equals(X, e2, t2);
      }
    }
    t.SourceCodeInfo_Location = X, X.runtime = n.proto2, X.typeName = "google.protobuf.SourceCodeInfo.Location", X.fields = n.proto2.util.newFieldList(() => [{ no: 1, name: "path", kind: "scalar", T: 5, repeated: true, packed: true }, { no: 2, name: "span", kind: "scalar", T: 5, repeated: true, packed: true }, { no: 3, name: "leading_comments", kind: "scalar", T: 9, opt: true }, { no: 4, name: "trailing_comments", kind: "scalar", T: 9, opt: true }, { no: 6, name: "leading_detached_comments", kind: "scalar", T: 9, repeated: true }]);
    class Q extends o.Message {
      constructor(e2) {
        super(), this.annotation = [], n.proto2.util.initPartial(e2, this);
      }
      static fromBinary(e2, t2) {
        return new Q().fromBinary(e2, t2);
      }
      static fromJson(e2, t2) {
        return new Q().fromJson(e2, t2);
      }
      static fromJsonString(e2, t2) {
        return new Q().fromJsonString(e2, t2);
      }
      static equals(e2, t2) {
        return n.proto2.util.equals(Q, e2, t2);
      }
    }
    t.GeneratedCodeInfo = Q, Q.runtime = n.proto2, Q.typeName = "google.protobuf.GeneratedCodeInfo", Q.fields = n.proto2.util.newFieldList(() => [{ no: 1, name: "annotation", kind: "message", T: ee, repeated: true }]);
    class ee extends o.Message {
      constructor(e2) {
        super(), this.path = [], n.proto2.util.initPartial(e2, this);
      }
      static fromBinary(e2, t2) {
        return new ee().fromBinary(e2, t2);
      }
      static fromJson(e2, t2) {
        return new ee().fromJson(e2, t2);
      }
      static fromJsonString(e2, t2) {
        return new ee().fromJsonString(e2, t2);
      }
      static equals(e2, t2) {
        return n.proto2.util.equals(ee, e2, t2);
      }
    }
    t.GeneratedCodeInfo_Annotation = ee, ee.runtime = n.proto2, ee.typeName = "google.protobuf.GeneratedCodeInfo.Annotation", ee.fields = n.proto2.util.newFieldList(() => [{ no: 1, name: "path", kind: "scalar", T: 5, repeated: true, packed: true }, { no: 2, name: "source_file", kind: "scalar", T: 9, opt: true }, { no: 3, name: "begin", kind: "scalar", T: 5, opt: true }, { no: 4, name: "end", kind: "scalar", T: 5, opt: true }, { no: 5, name: "semantic", kind: "enum", T: n.proto2.getEnumType(_), opt: true }]), (function(e2) {
      e2[e2.NONE = 0] = "NONE", e2[e2.SET = 1] = "SET", e2[e2.ALIAS = 2] = "ALIAS";
    })(_ || (t.GeneratedCodeInfo_Annotation_Semantic = _ = {})), n.proto2.util.setEnumType(_, "google.protobuf.GeneratedCodeInfo.Annotation.Semantic", [{ no: 0, name: "NONE" }, { no: 1, name: "SET" }, { no: 2, name: "ALIAS" }]);
  }
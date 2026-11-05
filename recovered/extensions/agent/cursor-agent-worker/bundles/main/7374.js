// @recovered-by cursor-re
// artifact: app/extensions/cursor-agent-worker/dist/main.js sha256:d5af94b4e40f694b81a675a0fb00fa8d060306ca064a011e953218d005b613d5
// module: 7374 range:243324..290055
// basis: webpack-id confidence: C
// method: split
// run: ext-agent 2026-11-05T10:20:08.356Z
7374: (e10, a10, n10) => {
    Object.defineProperty(a10, "__esModule", { value: true }), a10.GeneratedCodeInfo_Annotation_Semantic = a10.GeneratedCodeInfo_Annotation = a10.GeneratedCodeInfo = a10.SourceCodeInfo_Location = a10.SourceCodeInfo = a10.FeatureSetDefaults_FeatureSetEditionDefault = a10.FeatureSetDefaults = a10.FeatureSet_JsonFormat = a10.FeatureSet_MessageEncoding = a10.FeatureSet_Utf8Validation = a10.FeatureSet_RepeatedFieldEncoding = a10.FeatureSet_EnumType = a10.FeatureSet_FieldPresence = a10.FeatureSet = a10.UninterpretedOption_NamePart = a10.UninterpretedOption = a10.MethodOptions_IdempotencyLevel = a10.MethodOptions = a10.ServiceOptions = a10.EnumValueOptions = a10.EnumOptions = a10.OneofOptions = a10.FieldOptions_FeatureSupport = a10.FieldOptions_EditionDefault = a10.FieldOptions_OptionTargetType = a10.FieldOptions_OptionRetention = a10.FieldOptions_JSType = a10.FieldOptions_CType = a10.FieldOptions = a10.MessageOptions = a10.FileOptions_OptimizeMode = a10.FileOptions = a10.MethodDescriptorProto = a10.ServiceDescriptorProto = a10.EnumValueDescriptorProto = a10.EnumDescriptorProto_EnumReservedRange = a10.EnumDescriptorProto = a10.OneofDescriptorProto = a10.FieldDescriptorProto_Label = a10.FieldDescriptorProto_Type = a10.FieldDescriptorProto = a10.ExtensionRangeOptions_Declaration = a10.ExtensionRangeOptions_VerificationState = a10.ExtensionRangeOptions = a10.DescriptorProto_ReservedRange = a10.DescriptorProto_ExtensionRange = a10.DescriptorProto = a10.FileDescriptorProto = a10.FileDescriptorSet = a10.Edition = void 0;
    const s10 = n10(3672), o10 = n10(4193);
    var r10, t10, i10, m10, l10, d10, c10, T10, p10, _10, k10, u10, g10, E10, v10, y10, S10;
    !(function(e11) {
      e11[e11.EDITION_UNKNOWN = 0] = "EDITION_UNKNOWN", e11[e11.EDITION_LEGACY = 900] = "EDITION_LEGACY", e11[e11.EDITION_PROTO2 = 998] = "EDITION_PROTO2", e11[e11.EDITION_PROTO3 = 999] = "EDITION_PROTO3", e11[e11.EDITION_2023 = 1e3] = "EDITION_2023", e11[e11.EDITION_2024 = 1001] = "EDITION_2024", e11[e11.EDITION_1_TEST_ONLY = 1] = "EDITION_1_TEST_ONLY", e11[e11.EDITION_2_TEST_ONLY = 2] = "EDITION_2_TEST_ONLY", e11[e11.EDITION_99997_TEST_ONLY = 99997] = "EDITION_99997_TEST_ONLY", e11[e11.EDITION_99998_TEST_ONLY = 99998] = "EDITION_99998_TEST_ONLY", e11[e11.EDITION_99999_TEST_ONLY = 99999] = "EDITION_99999_TEST_ONLY", e11[e11.EDITION_MAX = 2147483647] = "EDITION_MAX";
    })(r10 || (a10.Edition = r10 = {})), s10.proto2.util.setEnumType(r10, "google.protobuf.Edition", [{ no: 0, name: "EDITION_UNKNOWN" }, { no: 900, name: "EDITION_LEGACY" }, { no: 998, name: "EDITION_PROTO2" }, { no: 999, name: "EDITION_PROTO3" }, { no: 1e3, name: "EDITION_2023" }, { no: 1001, name: "EDITION_2024" }, { no: 1, name: "EDITION_1_TEST_ONLY" }, { no: 2, name: "EDITION_2_TEST_ONLY" }, { no: 99997, name: "EDITION_99997_TEST_ONLY" }, { no: 99998, name: "EDITION_99998_TEST_ONLY" }, { no: 99999, name: "EDITION_99999_TEST_ONLY" }, { no: 2147483647, name: "EDITION_MAX" }]);
    class R10 extends o10.Message {
      constructor(e11) {
        super(), this.file = [], s10.proto2.util.initPartial(e11, this);
      }
      static fromBinary(e11, a11) {
        return new R10().fromBinary(e11, a11);
      }
      static fromJson(e11, a11) {
        return new R10().fromJson(e11, a11);
      }
      static fromJsonString(e11, a11) {
        return new R10().fromJsonString(e11, a11);
      }
      static equals(e11, a11) {
        return s10.proto2.util.equals(R10, e11, a11);
      }
    }
    a10.FileDescriptorSet = R10, R10.runtime = s10.proto2, R10.typeName = "google.protobuf.FileDescriptorSet", R10.fields = s10.proto2.util.newFieldList(() => [{ no: 1, name: "file", kind: "message", T: I10, repeated: true }]);
    class I10 extends o10.Message {
      constructor(e11) {
        super(), this.dependency = [], this.publicDependency = [], this.weakDependency = [], this.messageType = [], this.enumType = [], this.service = [], this.extension = [], s10.proto2.util.initPartial(e11, this);
      }
      static fromBinary(e11, a11) {
        return new I10().fromBinary(e11, a11);
      }
      static fromJson(e11, a11) {
        return new I10().fromJson(e11, a11);
      }
      static fromJsonString(e11, a11) {
        return new I10().fromJsonString(e11, a11);
      }
      static equals(e11, a11) {
        return s10.proto2.util.equals(I10, e11, a11);
      }
    }
    a10.FileDescriptorProto = I10, I10.runtime = s10.proto2, I10.typeName = "google.protobuf.FileDescriptorProto", I10.fields = s10.proto2.util.newFieldList(() => [{ no: 1, name: "name", kind: "scalar", T: 9, opt: true }, { no: 2, name: "package", kind: "scalar", T: 9, opt: true }, { no: 3, name: "dependency", kind: "scalar", T: 9, repeated: true }, { no: 10, name: "public_dependency", kind: "scalar", T: 5, repeated: true }, { no: 11, name: "weak_dependency", kind: "scalar", T: 5, repeated: true }, { no: 4, name: "message_type", kind: "message", T: f10, repeated: true }, { no: 5, name: "enum_type", kind: "message", T: b10, repeated: true }, { no: 6, name: "service", kind: "message", T: D10, repeated: true }, { no: 7, name: "extension", kind: "message", T: M10, repeated: true }, { no: 8, name: "options", kind: "message", T: G10, opt: true }, { no: 9, name: "source_code_info", kind: "message", T: $10, opt: true }, { no: 12, name: "syntax", kind: "scalar", T: 9, opt: true }, { no: 14, name: "edition", kind: "enum", T: s10.proto2.getEnumType(r10), opt: true }]);
    class f10 extends o10.Message {
      constructor(e11) {
        super(), this.field = [], this.extension = [], this.nestedType = [], this.enumType = [], this.extensionRange = [], this.oneofDecl = [], this.reservedRange = [], this.reservedName = [], s10.proto2.util.initPartial(e11, this);
      }
      static fromBinary(e11, a11) {
        return new f10().fromBinary(e11, a11);
      }
      static fromJson(e11, a11) {
        return new f10().fromJson(e11, a11);
      }
      static fromJsonString(e11, a11) {
        return new f10().fromJsonString(e11, a11);
      }
      static equals(e11, a11) {
        return s10.proto2.util.equals(f10, e11, a11);
      }
    }
    a10.DescriptorProto = f10, f10.runtime = s10.proto2, f10.typeName = "google.protobuf.DescriptorProto", f10.fields = s10.proto2.util.newFieldList(() => [{ no: 1, name: "name", kind: "scalar", T: 9, opt: true }, { no: 2, name: "field", kind: "message", T: M10, repeated: true }, { no: 6, name: "extension", kind: "message", T: M10, repeated: true }, { no: 3, name: "nested_type", kind: "message", T: f10, repeated: true }, { no: 4, name: "enum_type", kind: "message", T: b10, repeated: true }, { no: 5, name: "extension_range", kind: "message", T: N10, repeated: true }, { no: 8, name: "oneof_decl", kind: "message", T: C10, repeated: true }, { no: 7, name: "options", kind: "message", T: w10, opt: true }, { no: 9, name: "reserved_range", kind: "message", T: O10, repeated: true }, { no: 10, name: "reserved_name", kind: "scalar", T: 9, repeated: true }]);
    class N10 extends o10.Message {
      constructor(e11) {
        super(), s10.proto2.util.initPartial(e11, this);
      }
      static fromBinary(e11, a11) {
        return new N10().fromBinary(e11, a11);
      }
      static fromJson(e11, a11) {
        return new N10().fromJson(e11, a11);
      }
      static fromJsonString(e11, a11) {
        return new N10().fromJsonString(e11, a11);
      }
      static equals(e11, a11) {
        return s10.proto2.util.equals(N10, e11, a11);
      }
    }
    a10.DescriptorProto_ExtensionRange = N10, N10.runtime = s10.proto2, N10.typeName = "google.protobuf.DescriptorProto.ExtensionRange", N10.fields = s10.proto2.util.newFieldList(() => [{ no: 1, name: "start", kind: "scalar", T: 5, opt: true }, { no: 2, name: "end", kind: "scalar", T: 5, opt: true }, { no: 3, name: "options", kind: "message", T: h10, opt: true }]);
    class O10 extends o10.Message {
      constructor(e11) {
        super(), s10.proto2.util.initPartial(e11, this);
      }
      static fromBinary(e11, a11) {
        return new O10().fromBinary(e11, a11);
      }
      static fromJson(e11, a11) {
        return new O10().fromJson(e11, a11);
      }
      static fromJsonString(e11, a11) {
        return new O10().fromJsonString(e11, a11);
      }
      static equals(e11, a11) {
        return s10.proto2.util.equals(O10, e11, a11);
      }
    }
    a10.DescriptorProto_ReservedRange = O10, O10.runtime = s10.proto2, O10.typeName = "google.protobuf.DescriptorProto.ReservedRange", O10.fields = s10.proto2.util.newFieldList(() => [{ no: 1, name: "start", kind: "scalar", T: 5, opt: true }, { no: 2, name: "end", kind: "scalar", T: 5, opt: true }]);
    class h10 extends o10.Message {
      constructor(e11) {
        super(), this.uninterpretedOption = [], this.declaration = [], s10.proto2.util.initPartial(e11, this);
      }
      static fromBinary(e11, a11) {
        return new h10().fromBinary(e11, a11);
      }
      static fromJson(e11, a11) {
        return new h10().fromJson(e11, a11);
      }
      static fromJsonString(e11, a11) {
        return new h10().fromJsonString(e11, a11);
      }
      static equals(e11, a11) {
        return s10.proto2.util.equals(h10, e11, a11);
      }
    }
    a10.ExtensionRangeOptions = h10, h10.runtime = s10.proto2, h10.typeName = "google.protobuf.ExtensionRangeOptions", h10.fields = s10.proto2.util.newFieldList(() => [{ no: 999, name: "uninterpreted_option", kind: "message", T: W10, repeated: true }, { no: 2, name: "declaration", kind: "message", T: A10, repeated: true }, { no: 50, name: "features", kind: "message", T: J10, opt: true }, { no: 3, name: "verification", kind: "enum", T: s10.proto2.getEnumType(t10), opt: true, default: t10.UNVERIFIED }]), (function(e11) {
      e11[e11.DECLARATION = 0] = "DECLARATION", e11[e11.UNVERIFIED = 1] = "UNVERIFIED";
    })(t10 || (a10.ExtensionRangeOptions_VerificationState = t10 = {})), s10.proto2.util.setEnumType(t10, "google.protobuf.ExtensionRangeOptions.VerificationState", [{ no: 0, name: "DECLARATION" }, { no: 1, name: "UNVERIFIED" }]);
    class A10 extends o10.Message {
      constructor(e11) {
        super(), s10.proto2.util.initPartial(e11, this);
      }
      static fromBinary(e11, a11) {
        return new A10().fromBinary(e11, a11);
      }
      static fromJson(e11, a11) {
        return new A10().fromJson(e11, a11);
      }
      static fromJsonString(e11, a11) {
        return new A10().fromJsonString(e11, a11);
      }
      static equals(e11, a11) {
        return s10.proto2.util.equals(A10, e11, a11);
      }
    }
    a10.ExtensionRangeOptions_Declaration = A10, A10.runtime = s10.proto2, A10.typeName = "google.protobuf.ExtensionRangeOptions.Declaration", A10.fields = s10.proto2.util.newFieldList(() => [{ no: 1, name: "number", kind: "scalar", T: 5, opt: true }, { no: 2, name: "full_name", kind: "scalar", T: 9, opt: true }, { no: 3, name: "type", kind: "scalar", T: 9, opt: true }, { no: 5, name: "reserved", kind: "scalar", T: 8, opt: true }, { no: 6, name: "repeated", kind: "scalar", T: 8, opt: true }]);
    class M10 extends o10.Message {
      constructor(e11) {
        super(), s10.proto2.util.initPartial(e11, this);
      }
      static fromBinary(e11, a11) {
        return new M10().fromBinary(e11, a11);
      }
      static fromJson(e11, a11) {
        return new M10().fromJson(e11, a11);
      }
      static fromJsonString(e11, a11) {
        return new M10().fromJsonString(e11, a11);
      }
      static equals(e11, a11) {
        return s10.proto2.util.equals(M10, e11, a11);
      }
    }
    a10.FieldDescriptorProto = M10, M10.runtime = s10.proto2, M10.typeName = "google.protobuf.FieldDescriptorProto", M10.fields = s10.proto2.util.newFieldList(() => [{ no: 1, name: "name", kind: "scalar", T: 9, opt: true }, { no: 3, name: "number", kind: "scalar", T: 5, opt: true }, { no: 4, name: "label", kind: "enum", T: s10.proto2.getEnumType(m10), opt: true }, { no: 5, name: "type", kind: "enum", T: s10.proto2.getEnumType(i10), opt: true }, { no: 6, name: "type_name", kind: "scalar", T: 9, opt: true }, { no: 2, name: "extendee", kind: "scalar", T: 9, opt: true }, { no: 7, name: "default_value", kind: "scalar", T: 9, opt: true }, { no: 9, name: "oneof_index", kind: "scalar", T: 5, opt: true }, { no: 10, name: "json_name", kind: "scalar", T: 9, opt: true }, { no: 8, name: "options", kind: "message", T: F10, opt: true }, { no: 17, name: "proto3_optional", kind: "scalar", T: 8, opt: true }]), (function(e11) {
      e11[e11.DOUBLE = 1] = "DOUBLE", e11[e11.FLOAT = 2] = "FLOAT", e11[e11.INT64 = 3] = "INT64", e11[e11.UINT64 = 4] = "UINT64", e11[e11.INT32 = 5] = "INT32", e11[e11.FIXED64 = 6] = "FIXED64", e11[e11.FIXED32 = 7] = "FIXED32", e11[e11.BOOL = 8] = "BOOL", e11[e11.STRING = 9] = "STRING", e11[e11.GROUP = 10] = "GROUP", e11[e11.MESSAGE = 11] = "MESSAGE", e11[e11.BYTES = 12] = "BYTES", e11[e11.UINT32 = 13] = "UINT32", e11[e11.ENUM = 14] = "ENUM", e11[e11.SFIXED32 = 15] = "SFIXED32", e11[e11.SFIXED64 = 16] = "SFIXED64", e11[e11.SINT32 = 17] = "SINT32", e11[e11.SINT64 = 18] = "SINT64";
    })(i10 || (a10.FieldDescriptorProto_Type = i10 = {})), s10.proto2.util.setEnumType(i10, "google.protobuf.FieldDescriptorProto.Type", [{ no: 1, name: "TYPE_DOUBLE" }, { no: 2, name: "TYPE_FLOAT" }, { no: 3, name: "TYPE_INT64" }, { no: 4, name: "TYPE_UINT64" }, { no: 5, name: "TYPE_INT32" }, { no: 6, name: "TYPE_FIXED64" }, { no: 7, name: "TYPE_FIXED32" }, { no: 8, name: "TYPE_BOOL" }, { no: 9, name: "TYPE_STRING" }, { no: 10, name: "TYPE_GROUP" }, { no: 11, name: "TYPE_MESSAGE" }, { no: 12, name: "TYPE_BYTES" }, { no: 13, name: "TYPE_UINT32" }, { no: 14, name: "TYPE_ENUM" }, { no: 15, name: "TYPE_SFIXED32" }, { no: 16, name: "TYPE_SFIXED64" }, { no: 17, name: "TYPE_SINT32" }, { no: 18, name: "TYPE_SINT64" }]), (function(e11) {
      e11[e11.OPTIONAL = 1] = "OPTIONAL", e11[e11.REPEATED = 3] = "REPEATED", e11[e11.REQUIRED = 2] = "REQUIRED";
    })(m10 || (a10.FieldDescriptorProto_Label = m10 = {})), s10.proto2.util.setEnumType(m10, "google.protobuf.FieldDescriptorProto.Label", [{ no: 1, name: "LABEL_OPTIONAL" }, { no: 3, name: "LABEL_REPEATED" }, { no: 2, name: "LABEL_REQUIRED" }]);
    class C10 extends o10.Message {
      constructor(e11) {
        super(), s10.proto2.util.initPartial(e11, this);
      }
      static fromBinary(e11, a11) {
        return new C10().fromBinary(e11, a11);
      }
      static fromJson(e11, a11) {
        return new C10().fromJson(e11, a11);
      }
      static fromJsonString(e11, a11) {
        return new C10().fromJsonString(e11, a11);
      }
      static equals(e11, a11) {
        return s10.proto2.util.equals(C10, e11, a11);
      }
    }
    a10.OneofDescriptorProto = C10, C10.runtime = s10.proto2, C10.typeName = "google.protobuf.OneofDescriptorProto", C10.fields = s10.proto2.util.newFieldList(() => [{ no: 1, name: "name", kind: "scalar", T: 9, opt: true }, { no: 2, name: "options", kind: "message", T: x10, opt: true }]);
    class b10 extends o10.Message {
      constructor(e11) {
        super(), this.value = [], this.reservedRange = [], this.reservedName = [], s10.proto2.util.initPartial(e11, this);
      }
      static fromBinary(e11, a11) {
        return new b10().fromBinary(e11, a11);
      }
      static fromJson(e11, a11) {
        return new b10().fromJson(e11, a11);
      }
      static fromJsonString(e11, a11) {
        return new b10().fromJsonString(e11, a11);
      }
      static equals(e11, a11) {
        return s10.proto2.util.equals(b10, e11, a11);
      }
    }
    a10.EnumDescriptorProto = b10, b10.runtime = s10.proto2, b10.typeName = "google.protobuf.EnumDescriptorProto", b10.fields = s10.proto2.util.newFieldList(() => [{ no: 1, name: "name", kind: "scalar", T: 9, opt: true }, { no: 2, name: "value", kind: "message", T: P10, repeated: true }, { no: 3, name: "options", kind: "message", T: V10, opt: true }, { no: 4, name: "reserved_range", kind: "message", T: U10, repeated: true }, { no: 5, name: "reserved_name", kind: "scalar", T: 9, repeated: true }]);
    class U10 extends o10.Message {
      constructor(e11) {
        super(), s10.proto2.util.initPartial(e11, this);
      }
      static fromBinary(e11, a11) {
        return new U10().fromBinary(e11, a11);
      }
      static fromJson(e11, a11) {
        return new U10().fromJson(e11, a11);
      }
      static fromJsonString(e11, a11) {
        return new U10().fromJsonString(e11, a11);
      }
      static equals(e11, a11) {
        return s10.proto2.util.equals(U10, e11, a11);
      }
    }
    a10.EnumDescriptorProto_EnumReservedRange = U10, U10.runtime = s10.proto2, U10.typeName = "google.protobuf.EnumDescriptorProto.EnumReservedRange", U10.fields = s10.proto2.util.newFieldList(() => [{ no: 1, name: "start", kind: "scalar", T: 5, opt: true }, { no: 2, name: "end", kind: "scalar", T: 5, opt: true }]);
    class P10 extends o10.Message {
      constructor(e11) {
        super(), s10.proto2.util.initPartial(e11, this);
      }
      static fromBinary(e11, a11) {
        return new P10().fromBinary(e11, a11);
      }
      static fromJson(e11, a11) {
        return new P10().fromJson(e11, a11);
      }
      static fromJsonString(e11, a11) {
        return new P10().fromJsonString(e11, a11);
      }
      static equals(e11, a11) {
        return s10.proto2.util.equals(P10, e11, a11);
      }
    }
    a10.EnumValueDescriptorProto = P10, P10.runtime = s10.proto2, P10.typeName = "google.protobuf.EnumValueDescriptorProto", P10.fields = s10.proto2.util.newFieldList(() => [{ no: 1, name: "name", kind: "scalar", T: 9, opt: true }, { no: 2, name: "number", kind: "scalar", T: 5, opt: true }, { no: 3, name: "options", kind: "message", T: K10, opt: true }]);
    class D10 extends o10.Message {
      constructor(e11) {
        super(), this.method = [], s10.proto2.util.initPartial(e11, this);
      }
      static fromBinary(e11, a11) {
        return new D10().fromBinary(e11, a11);
      }
      static fromJson(e11, a11) {
        return new D10().fromJson(e11, a11);
      }
      static fromJsonString(e11, a11) {
        return new D10().fromJsonString(e11, a11);
      }
      static equals(e11, a11) {
        return s10.proto2.util.equals(D10, e11, a11);
      }
    }
    a10.ServiceDescriptorProto = D10, D10.runtime = s10.proto2, D10.typeName = "google.protobuf.ServiceDescriptorProto", D10.fields = s10.proto2.util.newFieldList(() => [{ no: 1, name: "name", kind: "scalar", T: 9, opt: true }, { no: 2, name: "method", kind: "message", T: L10, repeated: true }, { no: 3, name: "options", kind: "message", T: Y10, opt: true }]);
    class L10 extends o10.Message {
      constructor(e11) {
        super(), s10.proto2.util.initPartial(e11, this);
      }
      static fromBinary(e11, a11) {
        return new L10().fromBinary(e11, a11);
      }
      static fromJson(e11, a11) {
        return new L10().fromJson(e11, a11);
      }
      static fromJsonString(e11, a11) {
        return new L10().fromJsonString(e11, a11);
      }
      static equals(e11, a11) {
        return s10.proto2.util.equals(L10, e11, a11);
      }
    }
    a10.MethodDescriptorProto = L10, L10.runtime = s10.proto2, L10.typeName = "google.protobuf.MethodDescriptorProto", L10.fields = s10.proto2.util.newFieldList(() => [{ no: 1, name: "name", kind: "scalar", T: 9, opt: true }, { no: 2, name: "input_type", kind: "scalar", T: 9, opt: true }, { no: 3, name: "output_type", kind: "scalar", T: 9, opt: true }, { no: 4, name: "options", kind: "message", T: j10, opt: true }, { no: 5, name: "client_streaming", kind: "scalar", T: 8, opt: true, default: false }, { no: 6, name: "server_streaming", kind: "scalar", T: 8, opt: true, default: false }]);
    class G10 extends o10.Message {
      constructor(e11) {
        super(), this.uninterpretedOption = [], s10.proto2.util.initPartial(e11, this);
      }
      static fromBinary(e11, a11) {
        return new G10().fromBinary(e11, a11);
      }
      static fromJson(e11, a11) {
        return new G10().fromJson(e11, a11);
      }
      static fromJsonString(e11, a11) {
        return new G10().fromJsonString(e11, a11);
      }
      static equals(e11, a11) {
        return s10.proto2.util.equals(G10, e11, a11);
      }
    }
    a10.FileOptions = G10, G10.runtime = s10.proto2, G10.typeName = "google.protobuf.FileOptions", G10.fields = s10.proto2.util.newFieldList(() => [{ no: 1, name: "java_package", kind: "scalar", T: 9, opt: true }, { no: 8, name: "java_outer_classname", kind: "scalar", T: 9, opt: true }, { no: 10, name: "java_multiple_files", kind: "scalar", T: 8, opt: true, default: false }, { no: 20, name: "java_generate_equals_and_hash", kind: "scalar", T: 8, opt: true }, { no: 27, name: "java_string_check_utf8", kind: "scalar", T: 8, opt: true, default: false }, { no: 9, name: "optimize_for", kind: "enum", T: s10.proto2.getEnumType(l10), opt: true, default: l10.SPEED }, { no: 11, name: "go_package", kind: "scalar", T: 9, opt: true }, { no: 16, name: "cc_generic_services", kind: "scalar", T: 8, opt: true, default: false }, { no: 17, name: "java_generic_services", kind: "scalar", T: 8, opt: true, default: false }, { no: 18, name: "py_generic_services", kind: "scalar", T: 8, opt: true, default: false }, { no: 23, name: "deprecated", kind: "scalar", T: 8, opt: true, default: false }, { no: 31, name: "cc_enable_arenas", kind: "scalar", T: 8, opt: true, default: true }, { no: 36, name: "objc_class_prefix", kind: "scalar", T: 9, opt: true }, { no: 37, name: "csharp_namespace", kind: "scalar", T: 9, opt: true }, { no: 39, name: "swift_prefix", kind: "scalar", T: 9, opt: true }, { no: 40, name: "php_class_prefix", kind: "scalar", T: 9, opt: true }, { no: 41, name: "php_namespace", kind: "scalar", T: 9, opt: true }, { no: 44, name: "php_metadata_namespace", kind: "scalar", T: 9, opt: true }, { no: 45, name: "ruby_package", kind: "scalar", T: 9, opt: true }, { no: 50, name: "features", kind: "message", T: J10, opt: true }, { no: 999, name: "uninterpreted_option", kind: "message", T: W10, repeated: true }]), (function(e11) {
      e11[e11.SPEED = 1] = "SPEED", e11[e11.CODE_SIZE = 2] = "CODE_SIZE", e11[e11.LITE_RUNTIME = 3] = "LITE_RUNTIME";
    })(l10 || (a10.FileOptions_OptimizeMode = l10 = {})), s10.proto2.util.setEnumType(l10, "google.protobuf.FileOptions.OptimizeMode", [{ no: 1, name: "SPEED" }, { no: 2, name: "CODE_SIZE" }, { no: 3, name: "LITE_RUNTIME" }]);
    class w10 extends o10.Message {
      constructor(e11) {
        super(), this.uninterpretedOption = [], s10.proto2.util.initPartial(e11, this);
      }
      static fromBinary(e11, a11) {
        return new w10().fromBinary(e11, a11);
      }
      static fromJson(e11, a11) {
        return new w10().fromJson(e11, a11);
      }
      static fromJsonString(e11, a11) {
        return new w10().fromJsonString(e11, a11);
      }
      static equals(e11, a11) {
        return s10.proto2.util.equals(w10, e11, a11);
      }
    }
    a10.MessageOptions = w10, w10.runtime = s10.proto2, w10.typeName = "google.protobuf.MessageOptions", w10.fields = s10.proto2.util.newFieldList(() => [{ no: 1, name: "message_set_wire_format", kind: "scalar", T: 8, opt: true, default: false }, { no: 2, name: "no_standard_descriptor_accessor", kind: "scalar", T: 8, opt: true, default: false }, { no: 3, name: "deprecated", kind: "scalar", T: 8, opt: true, default: false }, { no: 7, name: "map_entry", kind: "scalar", T: 8, opt: true }, { no: 11, name: "deprecated_legacy_json_field_conflicts", kind: "scalar", T: 8, opt: true }, { no: 12, name: "features", kind: "message", T: J10, opt: true }, { no: 999, name: "uninterpreted_option", kind: "message", T: W10, repeated: true }]);
    class F10 extends o10.Message {
      constructor(e11) {
        super(), this.targets = [], this.editionDefaults = [], this.uninterpretedOption = [], s10.proto2.util.initPartial(e11, this);
      }
      static fromBinary(e11, a11) {
        return new F10().fromBinary(e11, a11);
      }
      static fromJson(e11, a11) {
        return new F10().fromJson(e11, a11);
      }
      static fromJsonString(e11, a11) {
        return new F10().fromJsonString(e11, a11);
      }
      static equals(e11, a11) {
        return s10.proto2.util.equals(F10, e11, a11);
      }
    }
    a10.FieldOptions = F10, F10.runtime = s10.proto2, F10.typeName = "google.protobuf.FieldOptions", F10.fields = s10.proto2.util.newFieldList(() => [{ no: 1, name: "ctype", kind: "enum", T: s10.proto2.getEnumType(d10), opt: true, default: d10.STRING }, { no: 2, name: "packed", kind: "scalar", T: 8, opt: true }, { no: 6, name: "jstype", kind: "enum", T: s10.proto2.getEnumType(c10), opt: true, default: c10.JS_NORMAL }, { no: 5, name: "lazy", kind: "scalar", T: 8, opt: true, default: false }, { no: 15, name: "unverified_lazy", kind: "scalar", T: 8, opt: true, default: false }, { no: 3, name: "deprecated", kind: "scalar", T: 8, opt: true, default: false }, { no: 10, name: "weak", kind: "scalar", T: 8, opt: true, default: false }, { no: 16, name: "debug_redact", kind: "scalar", T: 8, opt: true, default: false }, { no: 17, name: "retention", kind: "enum", T: s10.proto2.getEnumType(T10), opt: true }, { no: 19, name: "targets", kind: "enum", T: s10.proto2.getEnumType(p10), repeated: true }, { no: 20, name: "edition_defaults", kind: "message", T: B10, repeated: true }, { no: 21, name: "features", kind: "message", T: J10, opt: true }, { no: 22, name: "feature_support", kind: "message", T: q10, opt: true }, { no: 999, name: "uninterpreted_option", kind: "message", T: W10, repeated: true }]), (function(e11) {
      e11[e11.STRING = 0] = "STRING", e11[e11.CORD = 1] = "CORD", e11[e11.STRING_PIECE = 2] = "STRING_PIECE";
    })(d10 || (a10.FieldOptions_CType = d10 = {})), s10.proto2.util.setEnumType(d10, "google.protobuf.FieldOptions.CType", [{ no: 0, name: "STRING" }, { no: 1, name: "CORD" }, { no: 2, name: "STRING_PIECE" }]), (function(e11) {
      e11[e11.JS_NORMAL = 0] = "JS_NORMAL", e11[e11.JS_STRING = 1] = "JS_STRING", e11[e11.JS_NUMBER = 2] = "JS_NUMBER";
    })(c10 || (a10.FieldOptions_JSType = c10 = {})), s10.proto2.util.setEnumType(c10, "google.protobuf.FieldOptions.JSType", [{ no: 0, name: "JS_NORMAL" }, { no: 1, name: "JS_STRING" }, { no: 2, name: "JS_NUMBER" }]), (function(e11) {
      e11[e11.RETENTION_UNKNOWN = 0] = "RETENTION_UNKNOWN", e11[e11.RETENTION_RUNTIME = 1] = "RETENTION_RUNTIME", e11[e11.RETENTION_SOURCE = 2] = "RETENTION_SOURCE";
    })(T10 || (a10.FieldOptions_OptionRetention = T10 = {})), s10.proto2.util.setEnumType(T10, "google.protobuf.FieldOptions.OptionRetention", [{ no: 0, name: "RETENTION_UNKNOWN" }, { no: 1, name: "RETENTION_RUNTIME" }, { no: 2, name: "RETENTION_SOURCE" }]), (function(e11) {
      e11[e11.TARGET_TYPE_UNKNOWN = 0] = "TARGET_TYPE_UNKNOWN", e11[e11.TARGET_TYPE_FILE = 1] = "TARGET_TYPE_FILE", e11[e11.TARGET_TYPE_EXTENSION_RANGE = 2] = "TARGET_TYPE_EXTENSION_RANGE", e11[e11.TARGET_TYPE_MESSAGE = 3] = "TARGET_TYPE_MESSAGE", e11[e11.TARGET_TYPE_FIELD = 4] = "TARGET_TYPE_FIELD", e11[e11.TARGET_TYPE_ONEOF = 5] = "TARGET_TYPE_ONEOF", e11[e11.TARGET_TYPE_ENUM = 6] = "TARGET_TYPE_ENUM", e11[e11.TARGET_TYPE_ENUM_ENTRY = 7] = "TARGET_TYPE_ENUM_ENTRY", e11[e11.TARGET_TYPE_SERVICE = 8] = "TARGET_TYPE_SERVICE", e11[e11.TARGET_TYPE_METHOD = 9] = "TARGET_TYPE_METHOD";
    })(p10 || (a10.FieldOptions_OptionTargetType = p10 = {})), s10.proto2.util.setEnumType(p10, "google.protobuf.FieldOptions.OptionTargetType", [{ no: 0, name: "TARGET_TYPE_UNKNOWN" }, { no: 1, name: "TARGET_TYPE_FILE" }, { no: 2, name: "TARGET_TYPE_EXTENSION_RANGE" }, { no: 3, name: "TARGET_TYPE_MESSAGE" }, { no: 4, name: "TARGET_TYPE_FIELD" }, { no: 5, name: "TARGET_TYPE_ONEOF" }, { no: 6, name: "TARGET_TYPE_ENUM" }, { no: 7, name: "TARGET_TYPE_ENUM_ENTRY" }, { no: 8, name: "TARGET_TYPE_SERVICE" }, { no: 9, name: "TARGET_TYPE_METHOD" }]);
    class B10 extends o10.Message {
      constructor(e11) {
        super(), s10.proto2.util.initPartial(e11, this);
      }
      static fromBinary(e11, a11) {
        return new B10().fromBinary(e11, a11);
      }
      static fromJson(e11, a11) {
        return new B10().fromJson(e11, a11);
      }
      static fromJsonString(e11, a11) {
        return new B10().fromJsonString(e11, a11);
      }
      static equals(e11, a11) {
        return s10.proto2.util.equals(B10, e11, a11);
      }
    }
    a10.FieldOptions_EditionDefault = B10, B10.runtime = s10.proto2, B10.typeName = "google.protobuf.FieldOptions.EditionDefault", B10.fields = s10.proto2.util.newFieldList(() => [{ no: 3, name: "edition", kind: "enum", T: s10.proto2.getEnumType(r10), opt: true }, { no: 2, name: "value", kind: "scalar", T: 9, opt: true }]);
    class q10 extends o10.Message {
      constructor(e11) {
        super(), s10.proto2.util.initPartial(e11, this);
      }
      static fromBinary(e11, a11) {
        return new q10().fromBinary(e11, a11);
      }
      static fromJson(e11, a11) {
        return new q10().fromJson(e11, a11);
      }
      static fromJsonString(e11, a11) {
        return new q10().fromJsonString(e11, a11);
      }
      static equals(e11, a11) {
        return s10.proto2.util.equals(q10, e11, a11);
      }
    }
    a10.FieldOptions_FeatureSupport = q10, q10.runtime = s10.proto2, q10.typeName = "google.protobuf.FieldOptions.FeatureSupport", q10.fields = s10.proto2.util.newFieldList(() => [{ no: 1, name: "edition_introduced", kind: "enum", T: s10.proto2.getEnumType(r10), opt: true }, { no: 2, name: "edition_deprecated", kind: "enum", T: s10.proto2.getEnumType(r10), opt: true }, { no: 3, name: "deprecation_warning", kind: "scalar", T: 9, opt: true }, { no: 4, name: "edition_removed", kind: "enum", T: s10.proto2.getEnumType(r10), opt: true }]);
    class x10 extends o10.Message {
      constructor(e11) {
        super(), this.uninterpretedOption = [], s10.proto2.util.initPartial(e11, this);
      }
      static fromBinary(e11, a11) {
        return new x10().fromBinary(e11, a11);
      }
      static fromJson(e11, a11) {
        return new x10().fromJson(e11, a11);
      }
      static fromJsonString(e11, a11) {
        return new x10().fromJsonString(e11, a11);
      }
      static equals(e11, a11) {
        return s10.proto2.util.equals(x10, e11, a11);
      }
    }
    a10.OneofOptions = x10, x10.runtime = s10.proto2, x10.typeName = "google.protobuf.OneofOptions", x10.fields = s10.proto2.util.newFieldList(() => [{ no: 1, name: "features", kind: "message", T: J10, opt: true }, { no: 999, name: "uninterpreted_option", kind: "message", T: W10, repeated: true }]);
    class V10 extends o10.Message {
      constructor(e11) {
        super(), this.uninterpretedOption = [], s10.proto2.util.initPartial(e11, this);
      }
      static fromBinary(e11, a11) {
        return new V10().fromBinary(e11, a11);
      }
      static fromJson(e11, a11) {
        return new V10().fromJson(e11, a11);
      }
      static fromJsonString(e11, a11) {
        return new V10().fromJsonString(e11, a11);
      }
      static equals(e11, a11) {
        return s10.proto2.util.equals(V10, e11, a11);
      }
    }
    a10.EnumOptions = V10, V10.runtime = s10.proto2, V10.typeName = "google.protobuf.EnumOptions", V10.fields = s10.proto2.util.newFieldList(() => [{ no: 2, name: "allow_alias", kind: "scalar", T: 8, opt: true }, { no: 3, name: "deprecated", kind: "scalar", T: 8, opt: true, default: false }, { no: 6, name: "deprecated_legacy_json_field_conflicts", kind: "scalar", T: 8, opt: true }, { no: 7, name: "features", kind: "message", T: J10, opt: true }, { no: 999, name: "uninterpreted_option", kind: "message", T: W10, repeated: true }]);
    class K10 extends o10.Message {
      constructor(e11) {
        super(), this.uninterpretedOption = [], s10.proto2.util.initPartial(e11, this);
      }
      static fromBinary(e11, a11) {
        return new K10().fromBinary(e11, a11);
      }
      static fromJson(e11, a11) {
        return new K10().fromJson(e11, a11);
      }
      static fromJsonString(e11, a11) {
        return new K10().fromJsonString(e11, a11);
      }
      static equals(e11, a11) {
        return s10.proto2.util.equals(K10, e11, a11);
      }
    }
    a10.EnumValueOptions = K10, K10.runtime = s10.proto2, K10.typeName = "google.protobuf.EnumValueOptions", K10.fields = s10.proto2.util.newFieldList(() => [{ no: 1, name: "deprecated", kind: "scalar", T: 8, opt: true, default: false }, { no: 2, name: "features", kind: "message", T: J10, opt: true }, { no: 3, name: "debug_redact", kind: "scalar", T: 8, opt: true, default: false }, { no: 4, name: "feature_support", kind: "message", T: q10, opt: true }, { no: 999, name: "uninterpreted_option", kind: "message", T: W10, repeated: true }]);
    class Y10 extends o10.Message {
      constructor(e11) {
        super(), this.uninterpretedOption = [], s10.proto2.util.initPartial(e11, this);
      }
      static fromBinary(e11, a11) {
        return new Y10().fromBinary(e11, a11);
      }
      static fromJson(e11, a11) {
        return new Y10().fromJson(e11, a11);
      }
      static fromJsonString(e11, a11) {
        return new Y10().fromJsonString(e11, a11);
      }
      static equals(e11, a11) {
        return s10.proto2.util.equals(Y10, e11, a11);
      }
    }
    a10.ServiceOptions = Y10, Y10.runtime = s10.proto2, Y10.typeName = "google.protobuf.ServiceOptions", Y10.fields = s10.proto2.util.newFieldList(() => [{ no: 34, name: "features", kind: "message", T: J10, opt: true }, { no: 33, name: "deprecated", kind: "scalar", T: 8, opt: true, default: false }, { no: 999, name: "uninterpreted_option", kind: "message", T: W10, repeated: true }]);
    class j10 extends o10.Message {
      constructor(e11) {
        super(), this.uninterpretedOption = [], s10.proto2.util.initPartial(e11, this);
      }
      static fromBinary(e11, a11) {
        return new j10().fromBinary(e11, a11);
      }
      static fromJson(e11, a11) {
        return new j10().fromJson(e11, a11);
      }
      static fromJsonString(e11, a11) {
        return new j10().fromJsonString(e11, a11);
      }
      static equals(e11, a11) {
        return s10.proto2.util.equals(j10, e11, a11);
      }
    }
    a10.MethodOptions = j10, j10.runtime = s10.proto2, j10.typeName = "google.protobuf.MethodOptions", j10.fields = s10.proto2.util.newFieldList(() => [{ no: 33, name: "deprecated", kind: "scalar", T: 8, opt: true, default: false }, { no: 34, name: "idempotency_level", kind: "enum", T: s10.proto2.getEnumType(_10), opt: true, default: _10.IDEMPOTENCY_UNKNOWN }, { no: 35, name: "features", kind: "message", T: J10, opt: true }, { no: 999, name: "uninterpreted_option", kind: "message", T: W10, repeated: true }]), (function(e11) {
      e11[e11.IDEMPOTENCY_UNKNOWN = 0] = "IDEMPOTENCY_UNKNOWN", e11[e11.NO_SIDE_EFFECTS = 1] = "NO_SIDE_EFFECTS", e11[e11.IDEMPOTENT = 2] = "IDEMPOTENT";
    })(_10 || (a10.MethodOptions_IdempotencyLevel = _10 = {})), s10.proto2.util.setEnumType(_10, "google.protobuf.MethodOptions.IdempotencyLevel", [{ no: 0, name: "IDEMPOTENCY_UNKNOWN" }, { no: 1, name: "NO_SIDE_EFFECTS" }, { no: 2, name: "IDEMPOTENT" }]);
    class W10 extends o10.Message {
      constructor(e11) {
        super(), this.name = [], s10.proto2.util.initPartial(e11, this);
      }
      static fromBinary(e11, a11) {
        return new W10().fromBinary(e11, a11);
      }
      static fromJson(e11, a11) {
        return new W10().fromJson(e11, a11);
      }
      static fromJsonString(e11, a11) {
        return new W10().fromJsonString(e11, a11);
      }
      static equals(e11, a11) {
        return s10.proto2.util.equals(W10, e11, a11);
      }
    }
    a10.UninterpretedOption = W10, W10.runtime = s10.proto2, W10.typeName = "google.protobuf.UninterpretedOption", W10.fields = s10.proto2.util.newFieldList(() => [{ no: 2, name: "name", kind: "message", T: H10, repeated: true }, { no: 3, name: "identifier_value", kind: "scalar", T: 9, opt: true }, { no: 4, name: "positive_int_value", kind: "scalar", T: 4, opt: true }, { no: 5, name: "negative_int_value", kind: "scalar", T: 3, opt: true }, { no: 6, name: "double_value", kind: "scalar", T: 1, opt: true }, { no: 7, name: "string_value", kind: "scalar", T: 12, opt: true }, { no: 8, name: "aggregate_value", kind: "scalar", T: 9, opt: true }]);
    class H10 extends o10.Message {
      constructor(e11) {
        super(), s10.proto2.util.initPartial(e11, this);
      }
      static fromBinary(e11, a11) {
        return new H10().fromBinary(e11, a11);
      }
      static fromJson(e11, a11) {
        return new H10().fromJson(e11, a11);
      }
      static fromJsonString(e11, a11) {
        return new H10().fromJsonString(e11, a11);
      }
      static equals(e11, a11) {
        return s10.proto2.util.equals(H10, e11, a11);
      }
    }
    a10.UninterpretedOption_NamePart = H10, H10.runtime = s10.proto2, H10.typeName = "google.protobuf.UninterpretedOption.NamePart", H10.fields = s10.proto2.util.newFieldList(() => [{ no: 1, name: "name_part", kind: "scalar", T: 9, req: true }, { no: 2, name: "is_extension", kind: "scalar", T: 8, req: true }]);
    class J10 extends o10.Message {
      constructor(e11) {
        super(), s10.proto2.util.initPartial(e11, this);
      }
      static fromBinary(e11, a11) {
        return new J10().fromBinary(e11, a11);
      }
      static fromJson(e11, a11) {
        return new J10().fromJson(e11, a11);
      }
      static fromJsonString(e11, a11) {
        return new J10().fromJsonString(e11, a11);
      }
      static equals(e11, a11) {
        return s10.proto2.util.equals(J10, e11, a11);
      }
    }
    a10.FeatureSet = J10, J10.runtime = s10.proto2, J10.typeName = "google.protobuf.FeatureSet", J10.fields = s10.proto2.util.newFieldList(() => [{ no: 1, name: "field_presence", kind: "enum", T: s10.proto2.getEnumType(k10), opt: true }, { no: 2, name: "enum_type", kind: "enum", T: s10.proto2.getEnumType(u10), opt: true }, { no: 3, name: "repeated_field_encoding", kind: "enum", T: s10.proto2.getEnumType(g10), opt: true }, { no: 4, name: "utf8_validation", kind: "enum", T: s10.proto2.getEnumType(E10), opt: true }, { no: 5, name: "message_encoding", kind: "enum", T: s10.proto2.getEnumType(v10), opt: true }, { no: 6, name: "json_format", kind: "enum", T: s10.proto2.getEnumType(y10), opt: true }]), (function(e11) {
      e11[e11.FIELD_PRESENCE_UNKNOWN = 0] = "FIELD_PRESENCE_UNKNOWN", e11[e11.EXPLICIT = 1] = "EXPLICIT", e11[e11.IMPLICIT = 2] = "IMPLICIT", e11[e11.LEGACY_REQUIRED = 3] = "LEGACY_REQUIRED";
    })(k10 || (a10.FeatureSet_FieldPresence = k10 = {})), s10.proto2.util.setEnumType(k10, "google.protobuf.FeatureSet.FieldPresence", [{ no: 0, name: "FIELD_PRESENCE_UNKNOWN" }, { no: 1, name: "EXPLICIT" }, { no: 2, name: "IMPLICIT" }, { no: 3, name: "LEGACY_REQUIRED" }]), (function(e11) {
      e11[e11.ENUM_TYPE_UNKNOWN = 0] = "ENUM_TYPE_UNKNOWN", e11[e11.OPEN = 1] = "OPEN", e11[e11.CLOSED = 2] = "CLOSED";
    })(u10 || (a10.FeatureSet_EnumType = u10 = {})), s10.proto2.util.setEnumType(u10, "google.protobuf.FeatureSet.EnumType", [{ no: 0, name: "ENUM_TYPE_UNKNOWN" }, { no: 1, name: "OPEN" }, { no: 2, name: "CLOSED" }]), (function(e11) {
      e11[e11.REPEATED_FIELD_ENCODING_UNKNOWN = 0] = "REPEATED_FIELD_ENCODING_UNKNOWN", e11[e11.PACKED = 1] = "PACKED", e11[e11.EXPANDED = 2] = "EXPANDED";
    })(g10 || (a10.FeatureSet_RepeatedFieldEncoding = g10 = {})), s10.proto2.util.setEnumType(g10, "google.protobuf.FeatureSet.RepeatedFieldEncoding", [{ no: 0, name: "REPEATED_FIELD_ENCODING_UNKNOWN" }, { no: 1, name: "PACKED" }, { no: 2, name: "EXPANDED" }]), (function(e11) {
      e11[e11.UTF8_VALIDATION_UNKNOWN = 0] = "UTF8_VALIDATION_UNKNOWN", e11[e11.VERIFY = 2] = "VERIFY", e11[e11.NONE = 3] = "NONE";
    })(E10 || (a10.FeatureSet_Utf8Validation = E10 = {})), s10.proto2.util.setEnumType(E10, "google.protobuf.FeatureSet.Utf8Validation", [{ no: 0, name: "UTF8_VALIDATION_UNKNOWN" }, { no: 2, name: "VERIFY" }, { no: 3, name: "NONE" }]), (function(e11) {
      e11[e11.MESSAGE_ENCODING_UNKNOWN = 0] = "MESSAGE_ENCODING_UNKNOWN", e11[e11.LENGTH_PREFIXED = 1] = "LENGTH_PREFIXED", e11[e11.DELIMITED = 2] = "DELIMITED";
    })(v10 || (a10.FeatureSet_MessageEncoding = v10 = {})), s10.proto2.util.setEnumType(v10, "google.protobuf.FeatureSet.MessageEncoding", [{ no: 0, name: "MESSAGE_ENCODING_UNKNOWN" }, { no: 1, name: "LENGTH_PREFIXED" }, { no: 2, name: "DELIMITED" }]), (function(e11) {
      e11[e11.JSON_FORMAT_UNKNOWN = 0] = "JSON_FORMAT_UNKNOWN", e11[e11.ALLOW = 1] = "ALLOW", e11[e11.LEGACY_BEST_EFFORT = 2] = "LEGACY_BEST_EFFORT";
    })(y10 || (a10.FeatureSet_JsonFormat = y10 = {})), s10.proto2.util.setEnumType(y10, "google.protobuf.FeatureSet.JsonFormat", [{ no: 0, name: "JSON_FORMAT_UNKNOWN" }, { no: 1, name: "ALLOW" }, { no: 2, name: "LEGACY_BEST_EFFORT" }]);
    class z10 extends o10.Message {
      constructor(e11) {
        super(), this.defaults = [], s10.proto2.util.initPartial(e11, this);
      }
      static fromBinary(e11, a11) {
        return new z10().fromBinary(e11, a11);
      }
      static fromJson(e11, a11) {
        return new z10().fromJson(e11, a11);
      }
      static fromJsonString(e11, a11) {
        return new z10().fromJsonString(e11, a11);
      }
      static equals(e11, a11) {
        return s10.proto2.util.equals(z10, e11, a11);
      }
    }
    a10.FeatureSetDefaults = z10, z10.runtime = s10.proto2, z10.typeName = "google.protobuf.FeatureSetDefaults", z10.fields = s10.proto2.util.newFieldList(() => [{ no: 1, name: "defaults", kind: "message", T: X10, repeated: true }, { no: 4, name: "minimum_edition", kind: "enum", T: s10.proto2.getEnumType(r10), opt: true }, { no: 5, name: "maximum_edition", kind: "enum", T: s10.proto2.getEnumType(r10), opt: true }]);
    class X10 extends o10.Message {
      constructor(e11) {
        super(), s10.proto2.util.initPartial(e11, this);
      }
      static fromBinary(e11, a11) {
        return new X10().fromBinary(e11, a11);
      }
      static fromJson(e11, a11) {
        return new X10().fromJson(e11, a11);
      }
      static fromJsonString(e11, a11) {
        return new X10().fromJsonString(e11, a11);
      }
      static equals(e11, a11) {
        return s10.proto2.util.equals(X10, e11, a11);
      }
    }
    a10.FeatureSetDefaults_FeatureSetEditionDefault = X10, X10.runtime = s10.proto2, X10.typeName = "google.protobuf.FeatureSetDefaults.FeatureSetEditionDefault", X10.fields = s10.proto2.util.newFieldList(() => [{ no: 3, name: "edition", kind: "enum", T: s10.proto2.getEnumType(r10), opt: true }, { no: 4, name: "overridable_features", kind: "message", T: J10, opt: true }, { no: 5, name: "fixed_features", kind: "message", T: J10, opt: true }]);
    class $10 extends o10.Message {
      constructor(e11) {
        super(), this.location = [], s10.proto2.util.initPartial(e11, this);
      }
      static fromBinary(e11, a11) {
        return new $10().fromBinary(e11, a11);
      }
      static fromJson(e11, a11) {
        return new $10().fromJson(e11, a11);
      }
      static fromJsonString(e11, a11) {
        return new $10().fromJsonString(e11, a11);
      }
      static equals(e11, a11) {
        return s10.proto2.util.equals($10, e11, a11);
      }
    }
    a10.SourceCodeInfo = $10, $10.runtime = s10.proto2, $10.typeName = "google.protobuf.SourceCodeInfo", $10.fields = s10.proto2.util.newFieldList(() => [{ no: 1, name: "location", kind: "message", T: Q10, repeated: true }]);
    class Q10 extends o10.Message {
      constructor(e11) {
        super(), this.path = [], this.span = [], this.leadingDetachedComments = [], s10.proto2.util.initPartial(e11, this);
      }
      static fromBinary(e11, a11) {
        return new Q10().fromBinary(e11, a11);
      }
      static fromJson(e11, a11) {
        return new Q10().fromJson(e11, a11);
      }
      static fromJsonString(e11, a11) {
        return new Q10().fromJsonString(e11, a11);
      }
      static equals(e11, a11) {
        return s10.proto2.util.equals(Q10, e11, a11);
      }
    }
    a10.SourceCodeInfo_Location = Q10, Q10.runtime = s10.proto2, Q10.typeName = "google.protobuf.SourceCodeInfo.Location", Q10.fields = s10.proto2.util.newFieldList(() => [{ no: 1, name: "path", kind: "scalar", T: 5, repeated: true, packed: true }, { no: 2, name: "span", kind: "scalar", T: 5, repeated: true, packed: true }, { no: 3, name: "leading_comments", kind: "scalar", T: 9, opt: true }, { no: 4, name: "trailing_comments", kind: "scalar", T: 9, opt: true }, { no: 6, name: "leading_detached_comments", kind: "scalar", T: 9, repeated: true }]);
    class Z10 extends o10.Message {
      constructor(e11) {
        super(), this.annotation = [], s10.proto2.util.initPartial(e11, this);
      }
      static fromBinary(e11, a11) {
        return new Z10().fromBinary(e11, a11);
      }
      static fromJson(e11, a11) {
        return new Z10().fromJson(e11, a11);
      }
      static fromJsonString(e11, a11) {
        return new Z10().fromJsonString(e11, a11);
      }
      static equals(e11, a11) {
        return s10.proto2.util.equals(Z10, e11, a11);
      }
    }
    a10.GeneratedCodeInfo = Z10, Z10.runtime = s10.proto2, Z10.typeName = "google.protobuf.GeneratedCodeInfo", Z10.fields = s10.proto2.util.newFieldList(() => [{ no: 1, name: "annotation", kind: "message", T: ee2, repeated: true }]);
    class ee2 extends o10.Message {
      constructor(e11) {
        super(), this.path = [], s10.proto2.util.initPartial(e11, this);
      }
      static fromBinary(e11, a11) {
        return new ee2().fromBinary(e11, a11);
      }
      static fromJson(e11, a11) {
        return new ee2().fromJson(e11, a11);
      }
      static fromJsonString(e11, a11) {
        return new ee2().fromJsonString(e11, a11);
      }
      static equals(e11, a11) {
        return s10.proto2.util.equals(ee2, e11, a11);
      }
    }
    a10.GeneratedCodeInfo_Annotation = ee2, ee2.runtime = s10.proto2, ee2.typeName = "google.protobuf.GeneratedCodeInfo.Annotation", ee2.fields = s10.proto2.util.newFieldList(() => [{ no: 1, name: "path", kind: "scalar", T: 5, repeated: true, packed: true }, { no: 2, name: "source_file", kind: "scalar", T: 9, opt: true }, { no: 3, name: "begin", kind: "scalar", T: 5, opt: true }, { no: 4, name: "end", kind: "scalar", T: 5, opt: true }, { no: 5, name: "semantic", kind: "enum", T: s10.proto2.getEnumType(S10), opt: true }]), (function(e11) {
      e11[e11.NONE = 0] = "NONE", e11[e11.SET = 1] = "SET", e11[e11.ALIAS = 2] = "ALIAS";
    })(S10 || (a10.GeneratedCodeInfo_Annotation_Semantic = S10 = {})), s10.proto2.util.setEnumType(S10, "google.protobuf.GeneratedCodeInfo.Annotation.Semantic", [{ no: 0, name: "NONE" }, { no: 1, name: "SET" }, { no: 2, name: "ALIAS" }]);
  }
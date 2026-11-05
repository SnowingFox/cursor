// @recovered-by cursor-re
// artifact: app/extensions/cursor-resolver/dist/main.js sha256:677b774c75dfff0de56084737d26169857daed3731cb62a6702840900f439aed
// module: 374 range:74378..119580
// basis: webpack-id confidence: C
// method: split
// run: ext-p0 2026-11-05T10:07:22.069Z
374: (e2, t2, n2) => {
    Object.defineProperty(t2, "__esModule", { value: true }), t2.GeneratedCodeInfo_Annotation_Semantic = t2.GeneratedCodeInfo_Annotation = t2.GeneratedCodeInfo = t2.SourceCodeInfo_Location = t2.SourceCodeInfo = t2.FeatureSetDefaults_FeatureSetEditionDefault = t2.FeatureSetDefaults = t2.FeatureSet_JsonFormat = t2.FeatureSet_MessageEncoding = t2.FeatureSet_Utf8Validation = t2.FeatureSet_RepeatedFieldEncoding = t2.FeatureSet_EnumType = t2.FeatureSet_FieldPresence = t2.FeatureSet = t2.UninterpretedOption_NamePart = t2.UninterpretedOption = t2.MethodOptions_IdempotencyLevel = t2.MethodOptions = t2.ServiceOptions = t2.EnumValueOptions = t2.EnumOptions = t2.OneofOptions = t2.FieldOptions_FeatureSupport = t2.FieldOptions_EditionDefault = t2.FieldOptions_OptionTargetType = t2.FieldOptions_OptionRetention = t2.FieldOptions_JSType = t2.FieldOptions_CType = t2.FieldOptions = t2.MessageOptions = t2.FileOptions_OptimizeMode = t2.FileOptions = t2.MethodDescriptorProto = t2.ServiceDescriptorProto = t2.EnumValueDescriptorProto = t2.EnumDescriptorProto_EnumReservedRange = t2.EnumDescriptorProto = t2.OneofDescriptorProto = t2.FieldDescriptorProto_Label = t2.FieldDescriptorProto_Type = t2.FieldDescriptorProto = t2.ExtensionRangeOptions_Declaration = t2.ExtensionRangeOptions_VerificationState = t2.ExtensionRangeOptions = t2.DescriptorProto_ReservedRange = t2.DescriptorProto_ExtensionRange = t2.DescriptorProto = t2.FileDescriptorProto = t2.FileDescriptorSet = t2.Edition = void 0;
    const r2 = n2(291), o2 = n2(193);
    var a2, s2, i2, l2, u2, c2, m2, p2, d2, f2, T2, g2, E2, y2, h2, N2, _2;
    !(function(e3) {
      e3[e3.EDITION_UNKNOWN = 0] = "EDITION_UNKNOWN", e3[e3.EDITION_LEGACY = 900] = "EDITION_LEGACY", e3[e3.EDITION_PROTO2 = 998] = "EDITION_PROTO2", e3[e3.EDITION_PROTO3 = 999] = "EDITION_PROTO3", e3[e3.EDITION_2023 = 1e3] = "EDITION_2023", e3[e3.EDITION_2024 = 1001] = "EDITION_2024", e3[e3.EDITION_1_TEST_ONLY = 1] = "EDITION_1_TEST_ONLY", e3[e3.EDITION_2_TEST_ONLY = 2] = "EDITION_2_TEST_ONLY", e3[e3.EDITION_99997_TEST_ONLY = 99997] = "EDITION_99997_TEST_ONLY", e3[e3.EDITION_99998_TEST_ONLY = 99998] = "EDITION_99998_TEST_ONLY", e3[e3.EDITION_99999_TEST_ONLY = 99999] = "EDITION_99999_TEST_ONLY", e3[e3.EDITION_MAX = 2147483647] = "EDITION_MAX";
    })(a2 || (t2.Edition = a2 = {})), r2.proto2.util.setEnumType(a2, "google.protobuf.Edition", [{ no: 0, name: "EDITION_UNKNOWN" }, { no: 900, name: "EDITION_LEGACY" }, { no: 998, name: "EDITION_PROTO2" }, { no: 999, name: "EDITION_PROTO3" }, { no: 1e3, name: "EDITION_2023" }, { no: 1001, name: "EDITION_2024" }, { no: 1, name: "EDITION_1_TEST_ONLY" }, { no: 2, name: "EDITION_2_TEST_ONLY" }, { no: 99997, name: "EDITION_99997_TEST_ONLY" }, { no: 99998, name: "EDITION_99998_TEST_ONLY" }, { no: 99999, name: "EDITION_99999_TEST_ONLY" }, { no: 2147483647, name: "EDITION_MAX" }]);
    class I2 extends o2.Message {
      constructor(e3) {
        super(), this.file = [], r2.proto2.util.initPartial(e3, this);
      }
      static fromBinary(e3, t3) {
        return new I2().fromBinary(e3, t3);
      }
      static fromJson(e3, t3) {
        return new I2().fromJson(e3, t3);
      }
      static fromJsonString(e3, t3) {
        return new I2().fromJsonString(e3, t3);
      }
      static equals(e3, t3) {
        return r2.proto2.util.equals(I2, e3, t3);
      }
    }
    t2.FileDescriptorSet = I2, I2.runtime = r2.proto2, I2.typeName = "google.protobuf.FileDescriptorSet", I2.fields = r2.proto2.util.newFieldList(() => [{ no: 1, name: "file", kind: "message", T: S2, repeated: true }]);
    class S2 extends o2.Message {
      constructor(e3) {
        super(), this.dependency = [], this.publicDependency = [], this.weakDependency = [], this.messageType = [], this.enumType = [], this.service = [], this.extension = [], r2.proto2.util.initPartial(e3, this);
      }
      static fromBinary(e3, t3) {
        return new S2().fromBinary(e3, t3);
      }
      static fromJson(e3, t3) {
        return new S2().fromJson(e3, t3);
      }
      static fromJsonString(e3, t3) {
        return new S2().fromJsonString(e3, t3);
      }
      static equals(e3, t3) {
        return r2.proto2.util.equals(S2, e3, t3);
      }
    }
    t2.FileDescriptorProto = S2, S2.runtime = r2.proto2, S2.typeName = "google.protobuf.FileDescriptorProto", S2.fields = r2.proto2.util.newFieldList(() => [{ no: 1, name: "name", kind: "scalar", T: 9, opt: true }, { no: 2, name: "package", kind: "scalar", T: 9, opt: true }, { no: 3, name: "dependency", kind: "scalar", T: 9, repeated: true }, { no: 10, name: "public_dependency", kind: "scalar", T: 5, repeated: true }, { no: 11, name: "weak_dependency", kind: "scalar", T: 5, repeated: true }, { no: 4, name: "message_type", kind: "message", T: w2, repeated: true }, { no: 5, name: "enum_type", kind: "message", T: D2, repeated: true }, { no: 6, name: "service", kind: "message", T: U2, repeated: true }, { no: 7, name: "extension", kind: "message", T: P2, repeated: true }, { no: 8, name: "options", kind: "message", T: L2, opt: true }, { no: 9, name: "source_code_info", kind: "message", T: H2, opt: true }, { no: 12, name: "syntax", kind: "scalar", T: 9, opt: true }, { no: 14, name: "edition", kind: "enum", T: r2.proto2.getEnumType(a2), opt: true }]);
    class w2 extends o2.Message {
      constructor(e3) {
        super(), this.field = [], this.extension = [], this.nestedType = [], this.enumType = [], this.extensionRange = [], this.oneofDecl = [], this.reservedRange = [], this.reservedName = [], r2.proto2.util.initPartial(e3, this);
      }
      static fromBinary(e3, t3) {
        return new w2().fromBinary(e3, t3);
      }
      static fromJson(e3, t3) {
        return new w2().fromJson(e3, t3);
      }
      static fromJsonString(e3, t3) {
        return new w2().fromJsonString(e3, t3);
      }
      static equals(e3, t3) {
        return r2.proto2.util.equals(w2, e3, t3);
      }
    }
    t2.DescriptorProto = w2, w2.runtime = r2.proto2, w2.typeName = "google.protobuf.DescriptorProto", w2.fields = r2.proto2.util.newFieldList(() => [{ no: 1, name: "name", kind: "scalar", T: 9, opt: true }, { no: 2, name: "field", kind: "message", T: P2, repeated: true }, { no: 6, name: "extension", kind: "message", T: P2, repeated: true }, { no: 3, name: "nested_type", kind: "message", T: w2, repeated: true }, { no: 4, name: "enum_type", kind: "message", T: D2, repeated: true }, { no: 5, name: "extension_range", kind: "message", T: O2, repeated: true }, { no: 8, name: "oneof_decl", kind: "message", T: F2, repeated: true }, { no: 7, name: "options", kind: "message", T: B2, opt: true }, { no: 9, name: "reserved_range", kind: "message", T: b2, repeated: true }, { no: 10, name: "reserved_name", kind: "scalar", T: 9, repeated: true }]);
    class O2 extends o2.Message {
      constructor(e3) {
        super(), r2.proto2.util.initPartial(e3, this);
      }
      static fromBinary(e3, t3) {
        return new O2().fromBinary(e3, t3);
      }
      static fromJson(e3, t3) {
        return new O2().fromJson(e3, t3);
      }
      static fromJsonString(e3, t3) {
        return new O2().fromJsonString(e3, t3);
      }
      static equals(e3, t3) {
        return r2.proto2.util.equals(O2, e3, t3);
      }
    }
    t2.DescriptorProto_ExtensionRange = O2, O2.runtime = r2.proto2, O2.typeName = "google.protobuf.DescriptorProto.ExtensionRange", O2.fields = r2.proto2.util.newFieldList(() => [{ no: 1, name: "start", kind: "scalar", T: 5, opt: true }, { no: 2, name: "end", kind: "scalar", T: 5, opt: true }, { no: 3, name: "options", kind: "message", T: k2, opt: true }]);
    class b2 extends o2.Message {
      constructor(e3) {
        super(), r2.proto2.util.initPartial(e3, this);
      }
      static fromBinary(e3, t3) {
        return new b2().fromBinary(e3, t3);
      }
      static fromJson(e3, t3) {
        return new b2().fromJson(e3, t3);
      }
      static fromJsonString(e3, t3) {
        return new b2().fromJsonString(e3, t3);
      }
      static equals(e3, t3) {
        return r2.proto2.util.equals(b2, e3, t3);
      }
    }
    t2.DescriptorProto_ReservedRange = b2, b2.runtime = r2.proto2, b2.typeName = "google.protobuf.DescriptorProto.ReservedRange", b2.fields = r2.proto2.util.newFieldList(() => [{ no: 1, name: "start", kind: "scalar", T: 5, opt: true }, { no: 2, name: "end", kind: "scalar", T: 5, opt: true }]);
    class k2 extends o2.Message {
      constructor(e3) {
        super(), this.uninterpretedOption = [], this.declaration = [], r2.proto2.util.initPartial(e3, this);
      }
      static fromBinary(e3, t3) {
        return new k2().fromBinary(e3, t3);
      }
      static fromJson(e3, t3) {
        return new k2().fromJson(e3, t3);
      }
      static fromJsonString(e3, t3) {
        return new k2().fromJsonString(e3, t3);
      }
      static equals(e3, t3) {
        return r2.proto2.util.equals(k2, e3, t3);
      }
    }
    t2.ExtensionRangeOptions = k2, k2.runtime = r2.proto2, k2.typeName = "google.protobuf.ExtensionRangeOptions", k2.fields = r2.proto2.util.newFieldList(() => [{ no: 999, name: "uninterpreted_option", kind: "message", T: $2, repeated: true }, { no: 2, name: "declaration", kind: "message", T: v2, repeated: true }, { no: 50, name: "features", kind: "message", T: X2, opt: true }, { no: 3, name: "verification", kind: "enum", T: r2.proto2.getEnumType(s2), opt: true, default: s2.UNVERIFIED }]), (function(e3) {
      e3[e3.DECLARATION = 0] = "DECLARATION", e3[e3.UNVERIFIED = 1] = "UNVERIFIED";
    })(s2 || (t2.ExtensionRangeOptions_VerificationState = s2 = {})), r2.proto2.util.setEnumType(s2, "google.protobuf.ExtensionRangeOptions.VerificationState", [{ no: 0, name: "DECLARATION" }, { no: 1, name: "UNVERIFIED" }]);
    class v2 extends o2.Message {
      constructor(e3) {
        super(), r2.proto2.util.initPartial(e3, this);
      }
      static fromBinary(e3, t3) {
        return new v2().fromBinary(e3, t3);
      }
      static fromJson(e3, t3) {
        return new v2().fromJson(e3, t3);
      }
      static fromJsonString(e3, t3) {
        return new v2().fromJsonString(e3, t3);
      }
      static equals(e3, t3) {
        return r2.proto2.util.equals(v2, e3, t3);
      }
    }
    t2.ExtensionRangeOptions_Declaration = v2, v2.runtime = r2.proto2, v2.typeName = "google.protobuf.ExtensionRangeOptions.Declaration", v2.fields = r2.proto2.util.newFieldList(() => [{ no: 1, name: "number", kind: "scalar", T: 5, opt: true }, { no: 2, name: "full_name", kind: "scalar", T: 9, opt: true }, { no: 3, name: "type", kind: "scalar", T: 9, opt: true }, { no: 5, name: "reserved", kind: "scalar", T: 8, opt: true }, { no: 6, name: "repeated", kind: "scalar", T: 8, opt: true }]);
    class P2 extends o2.Message {
      constructor(e3) {
        super(), r2.proto2.util.initPartial(e3, this);
      }
      static fromBinary(e3, t3) {
        return new P2().fromBinary(e3, t3);
      }
      static fromJson(e3, t3) {
        return new P2().fromJson(e3, t3);
      }
      static fromJsonString(e3, t3) {
        return new P2().fromJsonString(e3, t3);
      }
      static equals(e3, t3) {
        return r2.proto2.util.equals(P2, e3, t3);
      }
    }
    t2.FieldDescriptorProto = P2, P2.runtime = r2.proto2, P2.typeName = "google.protobuf.FieldDescriptorProto", P2.fields = r2.proto2.util.newFieldList(() => [{ no: 1, name: "name", kind: "scalar", T: 9, opt: true }, { no: 3, name: "number", kind: "scalar", T: 5, opt: true }, { no: 4, name: "label", kind: "enum", T: r2.proto2.getEnumType(l2), opt: true }, { no: 5, name: "type", kind: "enum", T: r2.proto2.getEnumType(i2), opt: true }, { no: 6, name: "type_name", kind: "scalar", T: 9, opt: true }, { no: 2, name: "extendee", kind: "scalar", T: 9, opt: true }, { no: 7, name: "default_value", kind: "scalar", T: 9, opt: true }, { no: 9, name: "oneof_index", kind: "scalar", T: 5, opt: true }, { no: 10, name: "json_name", kind: "scalar", T: 9, opt: true }, { no: 8, name: "options", kind: "message", T: M2, opt: true }, { no: 17, name: "proto3_optional", kind: "scalar", T: 8, opt: true }]), (function(e3) {
      e3[e3.DOUBLE = 1] = "DOUBLE", e3[e3.FLOAT = 2] = "FLOAT", e3[e3.INT64 = 3] = "INT64", e3[e3.UINT64 = 4] = "UINT64", e3[e3.INT32 = 5] = "INT32", e3[e3.FIXED64 = 6] = "FIXED64", e3[e3.FIXED32 = 7] = "FIXED32", e3[e3.BOOL = 8] = "BOOL", e3[e3.STRING = 9] = "STRING", e3[e3.GROUP = 10] = "GROUP", e3[e3.MESSAGE = 11] = "MESSAGE", e3[e3.BYTES = 12] = "BYTES", e3[e3.UINT32 = 13] = "UINT32", e3[e3.ENUM = 14] = "ENUM", e3[e3.SFIXED32 = 15] = "SFIXED32", e3[e3.SFIXED64 = 16] = "SFIXED64", e3[e3.SINT32 = 17] = "SINT32", e3[e3.SINT64 = 18] = "SINT64";
    })(i2 || (t2.FieldDescriptorProto_Type = i2 = {})), r2.proto2.util.setEnumType(i2, "google.protobuf.FieldDescriptorProto.Type", [{ no: 1, name: "TYPE_DOUBLE" }, { no: 2, name: "TYPE_FLOAT" }, { no: 3, name: "TYPE_INT64" }, { no: 4, name: "TYPE_UINT64" }, { no: 5, name: "TYPE_INT32" }, { no: 6, name: "TYPE_FIXED64" }, { no: 7, name: "TYPE_FIXED32" }, { no: 8, name: "TYPE_BOOL" }, { no: 9, name: "TYPE_STRING" }, { no: 10, name: "TYPE_GROUP" }, { no: 11, name: "TYPE_MESSAGE" }, { no: 12, name: "TYPE_BYTES" }, { no: 13, name: "TYPE_UINT32" }, { no: 14, name: "TYPE_ENUM" }, { no: 15, name: "TYPE_SFIXED32" }, { no: 16, name: "TYPE_SFIXED64" }, { no: 17, name: "TYPE_SINT32" }, { no: 18, name: "TYPE_SINT64" }]), (function(e3) {
      e3[e3.OPTIONAL = 1] = "OPTIONAL", e3[e3.REPEATED = 3] = "REPEATED", e3[e3.REQUIRED = 2] = "REQUIRED";
    })(l2 || (t2.FieldDescriptorProto_Label = l2 = {})), r2.proto2.util.setEnumType(l2, "google.protobuf.FieldDescriptorProto.Label", [{ no: 1, name: "LABEL_OPTIONAL" }, { no: 3, name: "LABEL_REPEATED" }, { no: 2, name: "LABEL_REQUIRED" }]);
    class F2 extends o2.Message {
      constructor(e3) {
        super(), r2.proto2.util.initPartial(e3, this);
      }
      static fromBinary(e3, t3) {
        return new F2().fromBinary(e3, t3);
      }
      static fromJson(e3, t3) {
        return new F2().fromJson(e3, t3);
      }
      static fromJsonString(e3, t3) {
        return new F2().fromJsonString(e3, t3);
      }
      static equals(e3, t3) {
        return r2.proto2.util.equals(F2, e3, t3);
      }
    }
    t2.OneofDescriptorProto = F2, F2.runtime = r2.proto2, F2.typeName = "google.protobuf.OneofDescriptorProto", F2.fields = r2.proto2.util.newFieldList(() => [{ no: 1, name: "name", kind: "scalar", T: 9, opt: true }, { no: 2, name: "options", kind: "message", T: C2, opt: true }]);
    class D2 extends o2.Message {
      constructor(e3) {
        super(), this.value = [], this.reservedRange = [], this.reservedName = [], r2.proto2.util.initPartial(e3, this);
      }
      static fromBinary(e3, t3) {
        return new D2().fromBinary(e3, t3);
      }
      static fromJson(e3, t3) {
        return new D2().fromJson(e3, t3);
      }
      static fromJsonString(e3, t3) {
        return new D2().fromJsonString(e3, t3);
      }
      static equals(e3, t3) {
        return r2.proto2.util.equals(D2, e3, t3);
      }
    }
    t2.EnumDescriptorProto = D2, D2.runtime = r2.proto2, D2.typeName = "google.protobuf.EnumDescriptorProto", D2.fields = r2.proto2.util.newFieldList(() => [{ no: 1, name: "name", kind: "scalar", T: 9, opt: true }, { no: 2, name: "value", kind: "message", T: J2, repeated: true }, { no: 3, name: "options", kind: "message", T: j2, opt: true }, { no: 4, name: "reserved_range", kind: "message", T: R2, repeated: true }, { no: 5, name: "reserved_name", kind: "scalar", T: 9, repeated: true }]);
    class R2 extends o2.Message {
      constructor(e3) {
        super(), r2.proto2.util.initPartial(e3, this);
      }
      static fromBinary(e3, t3) {
        return new R2().fromBinary(e3, t3);
      }
      static fromJson(e3, t3) {
        return new R2().fromJson(e3, t3);
      }
      static fromJsonString(e3, t3) {
        return new R2().fromJsonString(e3, t3);
      }
      static equals(e3, t3) {
        return r2.proto2.util.equals(R2, e3, t3);
      }
    }
    t2.EnumDescriptorProto_EnumReservedRange = R2, R2.runtime = r2.proto2, R2.typeName = "google.protobuf.EnumDescriptorProto.EnumReservedRange", R2.fields = r2.proto2.util.newFieldList(() => [{ no: 1, name: "start", kind: "scalar", T: 5, opt: true }, { no: 2, name: "end", kind: "scalar", T: 5, opt: true }]);
    class J2 extends o2.Message {
      constructor(e3) {
        super(), r2.proto2.util.initPartial(e3, this);
      }
      static fromBinary(e3, t3) {
        return new J2().fromBinary(e3, t3);
      }
      static fromJson(e3, t3) {
        return new J2().fromJson(e3, t3);
      }
      static fromJsonString(e3, t3) {
        return new J2().fromJsonString(e3, t3);
      }
      static equals(e3, t3) {
        return r2.proto2.util.equals(J2, e3, t3);
      }
    }
    t2.EnumValueDescriptorProto = J2, J2.runtime = r2.proto2, J2.typeName = "google.protobuf.EnumValueDescriptorProto", J2.fields = r2.proto2.util.newFieldList(() => [{ no: 1, name: "name", kind: "scalar", T: 9, opt: true }, { no: 2, name: "number", kind: "scalar", T: 5, opt: true }, { no: 3, name: "options", kind: "message", T: V2, opt: true }]);
    class U2 extends o2.Message {
      constructor(e3) {
        super(), this.method = [], r2.proto2.util.initPartial(e3, this);
      }
      static fromBinary(e3, t3) {
        return new U2().fromBinary(e3, t3);
      }
      static fromJson(e3, t3) {
        return new U2().fromJson(e3, t3);
      }
      static fromJsonString(e3, t3) {
        return new U2().fromJsonString(e3, t3);
      }
      static equals(e3, t3) {
        return r2.proto2.util.equals(U2, e3, t3);
      }
    }
    t2.ServiceDescriptorProto = U2, U2.runtime = r2.proto2, U2.typeName = "google.protobuf.ServiceDescriptorProto", U2.fields = r2.proto2.util.newFieldList(() => [{ no: 1, name: "name", kind: "scalar", T: 9, opt: true }, { no: 2, name: "method", kind: "message", T: A2, repeated: true }, { no: 3, name: "options", kind: "message", T: G2, opt: true }]);
    class A2 extends o2.Message {
      constructor(e3) {
        super(), r2.proto2.util.initPartial(e3, this);
      }
      static fromBinary(e3, t3) {
        return new A2().fromBinary(e3, t3);
      }
      static fromJson(e3, t3) {
        return new A2().fromJson(e3, t3);
      }
      static fromJsonString(e3, t3) {
        return new A2().fromJsonString(e3, t3);
      }
      static equals(e3, t3) {
        return r2.proto2.util.equals(A2, e3, t3);
      }
    }
    t2.MethodDescriptorProto = A2, A2.runtime = r2.proto2, A2.typeName = "google.protobuf.MethodDescriptorProto", A2.fields = r2.proto2.util.newFieldList(() => [{ no: 1, name: "name", kind: "scalar", T: 9, opt: true }, { no: 2, name: "input_type", kind: "scalar", T: 9, opt: true }, { no: 3, name: "output_type", kind: "scalar", T: 9, opt: true }, { no: 4, name: "options", kind: "message", T: q2, opt: true }, { no: 5, name: "client_streaming", kind: "scalar", T: 8, opt: true, default: false }, { no: 6, name: "server_streaming", kind: "scalar", T: 8, opt: true, default: false }]);
    class L2 extends o2.Message {
      constructor(e3) {
        super(), this.uninterpretedOption = [], r2.proto2.util.initPartial(e3, this);
      }
      static fromBinary(e3, t3) {
        return new L2().fromBinary(e3, t3);
      }
      static fromJson(e3, t3) {
        return new L2().fromJson(e3, t3);
      }
      static fromJsonString(e3, t3) {
        return new L2().fromJsonString(e3, t3);
      }
      static equals(e3, t3) {
        return r2.proto2.util.equals(L2, e3, t3);
      }
    }
    t2.FileOptions = L2, L2.runtime = r2.proto2, L2.typeName = "google.protobuf.FileOptions", L2.fields = r2.proto2.util.newFieldList(() => [{ no: 1, name: "java_package", kind: "scalar", T: 9, opt: true }, { no: 8, name: "java_outer_classname", kind: "scalar", T: 9, opt: true }, { no: 10, name: "java_multiple_files", kind: "scalar", T: 8, opt: true, default: false }, { no: 20, name: "java_generate_equals_and_hash", kind: "scalar", T: 8, opt: true }, { no: 27, name: "java_string_check_utf8", kind: "scalar", T: 8, opt: true, default: false }, { no: 9, name: "optimize_for", kind: "enum", T: r2.proto2.getEnumType(u2), opt: true, default: u2.SPEED }, { no: 11, name: "go_package", kind: "scalar", T: 9, opt: true }, { no: 16, name: "cc_generic_services", kind: "scalar", T: 8, opt: true, default: false }, { no: 17, name: "java_generic_services", kind: "scalar", T: 8, opt: true, default: false }, { no: 18, name: "py_generic_services", kind: "scalar", T: 8, opt: true, default: false }, { no: 23, name: "deprecated", kind: "scalar", T: 8, opt: true, default: false }, { no: 31, name: "cc_enable_arenas", kind: "scalar", T: 8, opt: true, default: true }, { no: 36, name: "objc_class_prefix", kind: "scalar", T: 9, opt: true }, { no: 37, name: "csharp_namespace", kind: "scalar", T: 9, opt: true }, { no: 39, name: "swift_prefix", kind: "scalar", T: 9, opt: true }, { no: 40, name: "php_class_prefix", kind: "scalar", T: 9, opt: true }, { no: 41, name: "php_namespace", kind: "scalar", T: 9, opt: true }, { no: 44, name: "php_metadata_namespace", kind: "scalar", T: 9, opt: true }, { no: 45, name: "ruby_package", kind: "scalar", T: 9, opt: true }, { no: 50, name: "features", kind: "message", T: X2, opt: true }, { no: 999, name: "uninterpreted_option", kind: "message", T: $2, repeated: true }]), (function(e3) {
      e3[e3.SPEED = 1] = "SPEED", e3[e3.CODE_SIZE = 2] = "CODE_SIZE", e3[e3.LITE_RUNTIME = 3] = "LITE_RUNTIME";
    })(u2 || (t2.FileOptions_OptimizeMode = u2 = {})), r2.proto2.util.setEnumType(u2, "google.protobuf.FileOptions.OptimizeMode", [{ no: 1, name: "SPEED" }, { no: 2, name: "CODE_SIZE" }, { no: 3, name: "LITE_RUNTIME" }]);
    class B2 extends o2.Message {
      constructor(e3) {
        super(), this.uninterpretedOption = [], r2.proto2.util.initPartial(e3, this);
      }
      static fromBinary(e3, t3) {
        return new B2().fromBinary(e3, t3);
      }
      static fromJson(e3, t3) {
        return new B2().fromJson(e3, t3);
      }
      static fromJsonString(e3, t3) {
        return new B2().fromJsonString(e3, t3);
      }
      static equals(e3, t3) {
        return r2.proto2.util.equals(B2, e3, t3);
      }
    }
    t2.MessageOptions = B2, B2.runtime = r2.proto2, B2.typeName = "google.protobuf.MessageOptions", B2.fields = r2.proto2.util.newFieldList(() => [{ no: 1, name: "message_set_wire_format", kind: "scalar", T: 8, opt: true, default: false }, { no: 2, name: "no_standard_descriptor_accessor", kind: "scalar", T: 8, opt: true, default: false }, { no: 3, name: "deprecated", kind: "scalar", T: 8, opt: true, default: false }, { no: 7, name: "map_entry", kind: "scalar", T: 8, opt: true }, { no: 11, name: "deprecated_legacy_json_field_conflicts", kind: "scalar", T: 8, opt: true }, { no: 12, name: "features", kind: "message", T: X2, opt: true }, { no: 999, name: "uninterpreted_option", kind: "message", T: $2, repeated: true }]);
    class M2 extends o2.Message {
      constructor(e3) {
        super(), this.targets = [], this.editionDefaults = [], this.uninterpretedOption = [], r2.proto2.util.initPartial(e3, this);
      }
      static fromBinary(e3, t3) {
        return new M2().fromBinary(e3, t3);
      }
      static fromJson(e3, t3) {
        return new M2().fromJson(e3, t3);
      }
      static fromJsonString(e3, t3) {
        return new M2().fromJsonString(e3, t3);
      }
      static equals(e3, t3) {
        return r2.proto2.util.equals(M2, e3, t3);
      }
    }
    t2.FieldOptions = M2, M2.runtime = r2.proto2, M2.typeName = "google.protobuf.FieldOptions", M2.fields = r2.proto2.util.newFieldList(() => [{ no: 1, name: "ctype", kind: "enum", T: r2.proto2.getEnumType(c2), opt: true, default: c2.STRING }, { no: 2, name: "packed", kind: "scalar", T: 8, opt: true }, { no: 6, name: "jstype", kind: "enum", T: r2.proto2.getEnumType(m2), opt: true, default: m2.JS_NORMAL }, { no: 5, name: "lazy", kind: "scalar", T: 8, opt: true, default: false }, { no: 15, name: "unverified_lazy", kind: "scalar", T: 8, opt: true, default: false }, { no: 3, name: "deprecated", kind: "scalar", T: 8, opt: true, default: false }, { no: 10, name: "weak", kind: "scalar", T: 8, opt: true, default: false }, { no: 16, name: "debug_redact", kind: "scalar", T: 8, opt: true, default: false }, { no: 17, name: "retention", kind: "enum", T: r2.proto2.getEnumType(p2), opt: true }, { no: 19, name: "targets", kind: "enum", T: r2.proto2.getEnumType(d2), repeated: true }, { no: 20, name: "edition_defaults", kind: "message", T: x2, repeated: true }, { no: 21, name: "features", kind: "message", T: X2, opt: true }, { no: 22, name: "feature_support", kind: "message", T: Y2, opt: true }, { no: 999, name: "uninterpreted_option", kind: "message", T: $2, repeated: true }]), (function(e3) {
      e3[e3.STRING = 0] = "STRING", e3[e3.CORD = 1] = "CORD", e3[e3.STRING_PIECE = 2] = "STRING_PIECE";
    })(c2 || (t2.FieldOptions_CType = c2 = {})), r2.proto2.util.setEnumType(c2, "google.protobuf.FieldOptions.CType", [{ no: 0, name: "STRING" }, { no: 1, name: "CORD" }, { no: 2, name: "STRING_PIECE" }]), (function(e3) {
      e3[e3.JS_NORMAL = 0] = "JS_NORMAL", e3[e3.JS_STRING = 1] = "JS_STRING", e3[e3.JS_NUMBER = 2] = "JS_NUMBER";
    })(m2 || (t2.FieldOptions_JSType = m2 = {})), r2.proto2.util.setEnumType(m2, "google.protobuf.FieldOptions.JSType", [{ no: 0, name: "JS_NORMAL" }, { no: 1, name: "JS_STRING" }, { no: 2, name: "JS_NUMBER" }]), (function(e3) {
      e3[e3.RETENTION_UNKNOWN = 0] = "RETENTION_UNKNOWN", e3[e3.RETENTION_RUNTIME = 1] = "RETENTION_RUNTIME", e3[e3.RETENTION_SOURCE = 2] = "RETENTION_SOURCE";
    })(p2 || (t2.FieldOptions_OptionRetention = p2 = {})), r2.proto2.util.setEnumType(p2, "google.protobuf.FieldOptions.OptionRetention", [{ no: 0, name: "RETENTION_UNKNOWN" }, { no: 1, name: "RETENTION_RUNTIME" }, { no: 2, name: "RETENTION_SOURCE" }]), (function(e3) {
      e3[e3.TARGET_TYPE_UNKNOWN = 0] = "TARGET_TYPE_UNKNOWN", e3[e3.TARGET_TYPE_FILE = 1] = "TARGET_TYPE_FILE", e3[e3.TARGET_TYPE_EXTENSION_RANGE = 2] = "TARGET_TYPE_EXTENSION_RANGE", e3[e3.TARGET_TYPE_MESSAGE = 3] = "TARGET_TYPE_MESSAGE", e3[e3.TARGET_TYPE_FIELD = 4] = "TARGET_TYPE_FIELD", e3[e3.TARGET_TYPE_ONEOF = 5] = "TARGET_TYPE_ONEOF", e3[e3.TARGET_TYPE_ENUM = 6] = "TARGET_TYPE_ENUM", e3[e3.TARGET_TYPE_ENUM_ENTRY = 7] = "TARGET_TYPE_ENUM_ENTRY", e3[e3.TARGET_TYPE_SERVICE = 8] = "TARGET_TYPE_SERVICE", e3[e3.TARGET_TYPE_METHOD = 9] = "TARGET_TYPE_METHOD";
    })(d2 || (t2.FieldOptions_OptionTargetType = d2 = {})), r2.proto2.util.setEnumType(d2, "google.protobuf.FieldOptions.OptionTargetType", [{ no: 0, name: "TARGET_TYPE_UNKNOWN" }, { no: 1, name: "TARGET_TYPE_FILE" }, { no: 2, name: "TARGET_TYPE_EXTENSION_RANGE" }, { no: 3, name: "TARGET_TYPE_MESSAGE" }, { no: 4, name: "TARGET_TYPE_FIELD" }, { no: 5, name: "TARGET_TYPE_ONEOF" }, { no: 6, name: "TARGET_TYPE_ENUM" }, { no: 7, name: "TARGET_TYPE_ENUM_ENTRY" }, { no: 8, name: "TARGET_TYPE_SERVICE" }, { no: 9, name: "TARGET_TYPE_METHOD" }]);
    class x2 extends o2.Message {
      constructor(e3) {
        super(), r2.proto2.util.initPartial(e3, this);
      }
      static fromBinary(e3, t3) {
        return new x2().fromBinary(e3, t3);
      }
      static fromJson(e3, t3) {
        return new x2().fromJson(e3, t3);
      }
      static fromJsonString(e3, t3) {
        return new x2().fromJsonString(e3, t3);
      }
      static equals(e3, t3) {
        return r2.proto2.util.equals(x2, e3, t3);
      }
    }
    t2.FieldOptions_EditionDefault = x2, x2.runtime = r2.proto2, x2.typeName = "google.protobuf.FieldOptions.EditionDefault", x2.fields = r2.proto2.util.newFieldList(() => [{ no: 3, name: "edition", kind: "enum", T: r2.proto2.getEnumType(a2), opt: true }, { no: 2, name: "value", kind: "scalar", T: 9, opt: true }]);
    class Y2 extends o2.Message {
      constructor(e3) {
        super(), r2.proto2.util.initPartial(e3, this);
      }
      static fromBinary(e3, t3) {
        return new Y2().fromBinary(e3, t3);
      }
      static fromJson(e3, t3) {
        return new Y2().fromJson(e3, t3);
      }
      static fromJsonString(e3, t3) {
        return new Y2().fromJsonString(e3, t3);
      }
      static equals(e3, t3) {
        return r2.proto2.util.equals(Y2, e3, t3);
      }
    }
    t2.FieldOptions_FeatureSupport = Y2, Y2.runtime = r2.proto2, Y2.typeName = "google.protobuf.FieldOptions.FeatureSupport", Y2.fields = r2.proto2.util.newFieldList(() => [{ no: 1, name: "edition_introduced", kind: "enum", T: r2.proto2.getEnumType(a2), opt: true }, { no: 2, name: "edition_deprecated", kind: "enum", T: r2.proto2.getEnumType(a2), opt: true }, { no: 3, name: "deprecation_warning", kind: "scalar", T: 9, opt: true }, { no: 4, name: "edition_removed", kind: "enum", T: r2.proto2.getEnumType(a2), opt: true }]);
    class C2 extends o2.Message {
      constructor(e3) {
        super(), this.uninterpretedOption = [], r2.proto2.util.initPartial(e3, this);
      }
      static fromBinary(e3, t3) {
        return new C2().fromBinary(e3, t3);
      }
      static fromJson(e3, t3) {
        return new C2().fromJson(e3, t3);
      }
      static fromJsonString(e3, t3) {
        return new C2().fromJsonString(e3, t3);
      }
      static equals(e3, t3) {
        return r2.proto2.util.equals(C2, e3, t3);
      }
    }
    t2.OneofOptions = C2, C2.runtime = r2.proto2, C2.typeName = "google.protobuf.OneofOptions", C2.fields = r2.proto2.util.newFieldList(() => [{ no: 1, name: "features", kind: "message", T: X2, opt: true }, { no: 999, name: "uninterpreted_option", kind: "message", T: $2, repeated: true }]);
    class j2 extends o2.Message {
      constructor(e3) {
        super(), this.uninterpretedOption = [], r2.proto2.util.initPartial(e3, this);
      }
      static fromBinary(e3, t3) {
        return new j2().fromBinary(e3, t3);
      }
      static fromJson(e3, t3) {
        return new j2().fromJson(e3, t3);
      }
      static fromJsonString(e3, t3) {
        return new j2().fromJsonString(e3, t3);
      }
      static equals(e3, t3) {
        return r2.proto2.util.equals(j2, e3, t3);
      }
    }
    t2.EnumOptions = j2, j2.runtime = r2.proto2, j2.typeName = "google.protobuf.EnumOptions", j2.fields = r2.proto2.util.newFieldList(() => [{ no: 2, name: "allow_alias", kind: "scalar", T: 8, opt: true }, { no: 3, name: "deprecated", kind: "scalar", T: 8, opt: true, default: false }, { no: 6, name: "deprecated_legacy_json_field_conflicts", kind: "scalar", T: 8, opt: true }, { no: 7, name: "features", kind: "message", T: X2, opt: true }, { no: 999, name: "uninterpreted_option", kind: "message", T: $2, repeated: true }]);
    class V2 extends o2.Message {
      constructor(e3) {
        super(), this.uninterpretedOption = [], r2.proto2.util.initPartial(e3, this);
      }
      static fromBinary(e3, t3) {
        return new V2().fromBinary(e3, t3);
      }
      static fromJson(e3, t3) {
        return new V2().fromJson(e3, t3);
      }
      static fromJsonString(e3, t3) {
        return new V2().fromJsonString(e3, t3);
      }
      static equals(e3, t3) {
        return r2.proto2.util.equals(V2, e3, t3);
      }
    }
    t2.EnumValueOptions = V2, V2.runtime = r2.proto2, V2.typeName = "google.protobuf.EnumValueOptions", V2.fields = r2.proto2.util.newFieldList(() => [{ no: 1, name: "deprecated", kind: "scalar", T: 8, opt: true, default: false }, { no: 2, name: "features", kind: "message", T: X2, opt: true }, { no: 3, name: "debug_redact", kind: "scalar", T: 8, opt: true, default: false }, { no: 4, name: "feature_support", kind: "message", T: Y2, opt: true }, { no: 999, name: "uninterpreted_option", kind: "message", T: $2, repeated: true }]);
    class G2 extends o2.Message {
      constructor(e3) {
        super(), this.uninterpretedOption = [], r2.proto2.util.initPartial(e3, this);
      }
      static fromBinary(e3, t3) {
        return new G2().fromBinary(e3, t3);
      }
      static fromJson(e3, t3) {
        return new G2().fromJson(e3, t3);
      }
      static fromJsonString(e3, t3) {
        return new G2().fromJsonString(e3, t3);
      }
      static equals(e3, t3) {
        return r2.proto2.util.equals(G2, e3, t3);
      }
    }
    t2.ServiceOptions = G2, G2.runtime = r2.proto2, G2.typeName = "google.protobuf.ServiceOptions", G2.fields = r2.proto2.util.newFieldList(() => [{ no: 34, name: "features", kind: "message", T: X2, opt: true }, { no: 33, name: "deprecated", kind: "scalar", T: 8, opt: true, default: false }, { no: 999, name: "uninterpreted_option", kind: "message", T: $2, repeated: true }]);
    class q2 extends o2.Message {
      constructor(e3) {
        super(), this.uninterpretedOption = [], r2.proto2.util.initPartial(e3, this);
      }
      static fromBinary(e3, t3) {
        return new q2().fromBinary(e3, t3);
      }
      static fromJson(e3, t3) {
        return new q2().fromJson(e3, t3);
      }
      static fromJsonString(e3, t3) {
        return new q2().fromJsonString(e3, t3);
      }
      static equals(e3, t3) {
        return r2.proto2.util.equals(q2, e3, t3);
      }
    }
    t2.MethodOptions = q2, q2.runtime = r2.proto2, q2.typeName = "google.protobuf.MethodOptions", q2.fields = r2.proto2.util.newFieldList(() => [{ no: 33, name: "deprecated", kind: "scalar", T: 8, opt: true, default: false }, { no: 34, name: "idempotency_level", kind: "enum", T: r2.proto2.getEnumType(f2), opt: true, default: f2.IDEMPOTENCY_UNKNOWN }, { no: 35, name: "features", kind: "message", T: X2, opt: true }, { no: 999, name: "uninterpreted_option", kind: "message", T: $2, repeated: true }]), (function(e3) {
      e3[e3.IDEMPOTENCY_UNKNOWN = 0] = "IDEMPOTENCY_UNKNOWN", e3[e3.NO_SIDE_EFFECTS = 1] = "NO_SIDE_EFFECTS", e3[e3.IDEMPOTENT = 2] = "IDEMPOTENT";
    })(f2 || (t2.MethodOptions_IdempotencyLevel = f2 = {})), r2.proto2.util.setEnumType(f2, "google.protobuf.MethodOptions.IdempotencyLevel", [{ no: 0, name: "IDEMPOTENCY_UNKNOWN" }, { no: 1, name: "NO_SIDE_EFFECTS" }, { no: 2, name: "IDEMPOTENT" }]);
    class $2 extends o2.Message {
      constructor(e3) {
        super(), this.name = [], r2.proto2.util.initPartial(e3, this);
      }
      static fromBinary(e3, t3) {
        return new $2().fromBinary(e3, t3);
      }
      static fromJson(e3, t3) {
        return new $2().fromJson(e3, t3);
      }
      static fromJsonString(e3, t3) {
        return new $2().fromJsonString(e3, t3);
      }
      static equals(e3, t3) {
        return r2.proto2.util.equals($2, e3, t3);
      }
    }
    t2.UninterpretedOption = $2, $2.runtime = r2.proto2, $2.typeName = "google.protobuf.UninterpretedOption", $2.fields = r2.proto2.util.newFieldList(() => [{ no: 2, name: "name", kind: "message", T: W2, repeated: true }, { no: 3, name: "identifier_value", kind: "scalar", T: 9, opt: true }, { no: 4, name: "positive_int_value", kind: "scalar", T: 4, opt: true }, { no: 5, name: "negative_int_value", kind: "scalar", T: 3, opt: true }, { no: 6, name: "double_value", kind: "scalar", T: 1, opt: true }, { no: 7, name: "string_value", kind: "scalar", T: 12, opt: true }, { no: 8, name: "aggregate_value", kind: "scalar", T: 9, opt: true }]);
    class W2 extends o2.Message {
      constructor(e3) {
        super(), r2.proto2.util.initPartial(e3, this);
      }
      static fromBinary(e3, t3) {
        return new W2().fromBinary(e3, t3);
      }
      static fromJson(e3, t3) {
        return new W2().fromJson(e3, t3);
      }
      static fromJsonString(e3, t3) {
        return new W2().fromJsonString(e3, t3);
      }
      static equals(e3, t3) {
        return r2.proto2.util.equals(W2, e3, t3);
      }
    }
    t2.UninterpretedOption_NamePart = W2, W2.runtime = r2.proto2, W2.typeName = "google.protobuf.UninterpretedOption.NamePart", W2.fields = r2.proto2.util.newFieldList(() => [{ no: 1, name: "name_part", kind: "scalar", T: 9, req: true }, { no: 2, name: "is_extension", kind: "scalar", T: 8, req: true }]);
    class X2 extends o2.Message {
      constructor(e3) {
        super(), r2.proto2.util.initPartial(e3, this);
      }
      static fromBinary(e3, t3) {
        return new X2().fromBinary(e3, t3);
      }
      static fromJson(e3, t3) {
        return new X2().fromJson(e3, t3);
      }
      static fromJsonString(e3, t3) {
        return new X2().fromJsonString(e3, t3);
      }
      static equals(e3, t3) {
        return r2.proto2.util.equals(X2, e3, t3);
      }
    }
    t2.FeatureSet = X2, X2.runtime = r2.proto2, X2.typeName = "google.protobuf.FeatureSet", X2.fields = r2.proto2.util.newFieldList(() => [{ no: 1, name: "field_presence", kind: "enum", T: r2.proto2.getEnumType(T2), opt: true }, { no: 2, name: "enum_type", kind: "enum", T: r2.proto2.getEnumType(g2), opt: true }, { no: 3, name: "repeated_field_encoding", kind: "enum", T: r2.proto2.getEnumType(E2), opt: true }, { no: 4, name: "utf8_validation", kind: "enum", T: r2.proto2.getEnumType(y2), opt: true }, { no: 5, name: "message_encoding", kind: "enum", T: r2.proto2.getEnumType(h2), opt: true }, { no: 6, name: "json_format", kind: "enum", T: r2.proto2.getEnumType(N2), opt: true }]), (function(e3) {
      e3[e3.FIELD_PRESENCE_UNKNOWN = 0] = "FIELD_PRESENCE_UNKNOWN", e3[e3.EXPLICIT = 1] = "EXPLICIT", e3[e3.IMPLICIT = 2] = "IMPLICIT", e3[e3.LEGACY_REQUIRED = 3] = "LEGACY_REQUIRED";
    })(T2 || (t2.FeatureSet_FieldPresence = T2 = {})), r2.proto2.util.setEnumType(T2, "google.protobuf.FeatureSet.FieldPresence", [{ no: 0, name: "FIELD_PRESENCE_UNKNOWN" }, { no: 1, name: "EXPLICIT" }, { no: 2, name: "IMPLICIT" }, { no: 3, name: "LEGACY_REQUIRED" }]), (function(e3) {
      e3[e3.ENUM_TYPE_UNKNOWN = 0] = "ENUM_TYPE_UNKNOWN", e3[e3.OPEN = 1] = "OPEN", e3[e3.CLOSED = 2] = "CLOSED";
    })(g2 || (t2.FeatureSet_EnumType = g2 = {})), r2.proto2.util.setEnumType(g2, "google.protobuf.FeatureSet.EnumType", [{ no: 0, name: "ENUM_TYPE_UNKNOWN" }, { no: 1, name: "OPEN" }, { no: 2, name: "CLOSED" }]), (function(e3) {
      e3[e3.REPEATED_FIELD_ENCODING_UNKNOWN = 0] = "REPEATED_FIELD_ENCODING_UNKNOWN", e3[e3.PACKED = 1] = "PACKED", e3[e3.EXPANDED = 2] = "EXPANDED";
    })(E2 || (t2.FeatureSet_RepeatedFieldEncoding = E2 = {})), r2.proto2.util.setEnumType(E2, "google.protobuf.FeatureSet.RepeatedFieldEncoding", [{ no: 0, name: "REPEATED_FIELD_ENCODING_UNKNOWN" }, { no: 1, name: "PACKED" }, { no: 2, name: "EXPANDED" }]), (function(e3) {
      e3[e3.UTF8_VALIDATION_UNKNOWN = 0] = "UTF8_VALIDATION_UNKNOWN", e3[e3.VERIFY = 2] = "VERIFY", e3[e3.NONE = 3] = "NONE";
    })(y2 || (t2.FeatureSet_Utf8Validation = y2 = {})), r2.proto2.util.setEnumType(y2, "google.protobuf.FeatureSet.Utf8Validation", [{ no: 0, name: "UTF8_VALIDATION_UNKNOWN" }, { no: 2, name: "VERIFY" }, { no: 3, name: "NONE" }]), (function(e3) {
      e3[e3.MESSAGE_ENCODING_UNKNOWN = 0] = "MESSAGE_ENCODING_UNKNOWN", e3[e3.LENGTH_PREFIXED = 1] = "LENGTH_PREFIXED", e3[e3.DELIMITED = 2] = "DELIMITED";
    })(h2 || (t2.FeatureSet_MessageEncoding = h2 = {})), r2.proto2.util.setEnumType(h2, "google.protobuf.FeatureSet.MessageEncoding", [{ no: 0, name: "MESSAGE_ENCODING_UNKNOWN" }, { no: 1, name: "LENGTH_PREFIXED" }, { no: 2, name: "DELIMITED" }]), (function(e3) {
      e3[e3.JSON_FORMAT_UNKNOWN = 0] = "JSON_FORMAT_UNKNOWN", e3[e3.ALLOW = 1] = "ALLOW", e3[e3.LEGACY_BEST_EFFORT = 2] = "LEGACY_BEST_EFFORT";
    })(N2 || (t2.FeatureSet_JsonFormat = N2 = {})), r2.proto2.util.setEnumType(N2, "google.protobuf.FeatureSet.JsonFormat", [{ no: 0, name: "JSON_FORMAT_UNKNOWN" }, { no: 1, name: "ALLOW" }, { no: 2, name: "LEGACY_BEST_EFFORT" }]);
    class K2 extends o2.Message {
      constructor(e3) {
        super(), this.defaults = [], r2.proto2.util.initPartial(e3, this);
      }
      static fromBinary(e3, t3) {
        return new K2().fromBinary(e3, t3);
      }
      static fromJson(e3, t3) {
        return new K2().fromJson(e3, t3);
      }
      static fromJsonString(e3, t3) {
        return new K2().fromJsonString(e3, t3);
      }
      static equals(e3, t3) {
        return r2.proto2.util.equals(K2, e3, t3);
      }
    }
    t2.FeatureSetDefaults = K2, K2.runtime = r2.proto2, K2.typeName = "google.protobuf.FeatureSetDefaults", K2.fields = r2.proto2.util.newFieldList(() => [{ no: 1, name: "defaults", kind: "message", T: Z2, repeated: true }, { no: 4, name: "minimum_edition", kind: "enum", T: r2.proto2.getEnumType(a2), opt: true }, { no: 5, name: "maximum_edition", kind: "enum", T: r2.proto2.getEnumType(a2), opt: true }]);
    class Z2 extends o2.Message {
      constructor(e3) {
        super(), r2.proto2.util.initPartial(e3, this);
      }
      static fromBinary(e3, t3) {
        return new Z2().fromBinary(e3, t3);
      }
      static fromJson(e3, t3) {
        return new Z2().fromJson(e3, t3);
      }
      static fromJsonString(e3, t3) {
        return new Z2().fromJsonString(e3, t3);
      }
      static equals(e3, t3) {
        return r2.proto2.util.equals(Z2, e3, t3);
      }
    }
    t2.FeatureSetDefaults_FeatureSetEditionDefault = Z2, Z2.runtime = r2.proto2, Z2.typeName = "google.protobuf.FeatureSetDefaults.FeatureSetEditionDefault", Z2.fields = r2.proto2.util.newFieldList(() => [{ no: 3, name: "edition", kind: "enum", T: r2.proto2.getEnumType(a2), opt: true }, { no: 4, name: "overridable_features", kind: "message", T: X2, opt: true }, { no: 5, name: "fixed_features", kind: "message", T: X2, opt: true }]);
    class H2 extends o2.Message {
      constructor(e3) {
        super(), this.location = [], r2.proto2.util.initPartial(e3, this);
      }
      static fromBinary(e3, t3) {
        return new H2().fromBinary(e3, t3);
      }
      static fromJson(e3, t3) {
        return new H2().fromJson(e3, t3);
      }
      static fromJsonString(e3, t3) {
        return new H2().fromJsonString(e3, t3);
      }
      static equals(e3, t3) {
        return r2.proto2.util.equals(H2, e3, t3);
      }
    }
    t2.SourceCodeInfo = H2, H2.runtime = r2.proto2, H2.typeName = "google.protobuf.SourceCodeInfo", H2.fields = r2.proto2.util.newFieldList(() => [{ no: 1, name: "location", kind: "message", T: z2, repeated: true }]);
    class z2 extends o2.Message {
      constructor(e3) {
        super(), this.path = [], this.span = [], this.leadingDetachedComments = [], r2.proto2.util.initPartial(e3, this);
      }
      static fromBinary(e3, t3) {
        return new z2().fromBinary(e3, t3);
      }
      static fromJson(e3, t3) {
        return new z2().fromJson(e3, t3);
      }
      static fromJsonString(e3, t3) {
        return new z2().fromJsonString(e3, t3);
      }
      static equals(e3, t3) {
        return r2.proto2.util.equals(z2, e3, t3);
      }
    }
    t2.SourceCodeInfo_Location = z2, z2.runtime = r2.proto2, z2.typeName = "google.protobuf.SourceCodeInfo.Location", z2.fields = r2.proto2.util.newFieldList(() => [{ no: 1, name: "path", kind: "scalar", T: 5, repeated: true, packed: true }, { no: 2, name: "span", kind: "scalar", T: 5, repeated: true, packed: true }, { no: 3, name: "leading_comments", kind: "scalar", T: 9, opt: true }, { no: 4, name: "trailing_comments", kind: "scalar", T: 9, opt: true }, { no: 6, name: "leading_detached_comments", kind: "scalar", T: 9, repeated: true }]);
    class Q2 extends o2.Message {
      constructor(e3) {
        super(), this.annotation = [], r2.proto2.util.initPartial(e3, this);
      }
      static fromBinary(e3, t3) {
        return new Q2().fromBinary(e3, t3);
      }
      static fromJson(e3, t3) {
        return new Q2().fromJson(e3, t3);
      }
      static fromJsonString(e3, t3) {
        return new Q2().fromJsonString(e3, t3);
      }
      static equals(e3, t3) {
        return r2.proto2.util.equals(Q2, e3, t3);
      }
    }
    t2.GeneratedCodeInfo = Q2, Q2.runtime = r2.proto2, Q2.typeName = "google.protobuf.GeneratedCodeInfo", Q2.fields = r2.proto2.util.newFieldList(() => [{ no: 1, name: "annotation", kind: "message", T: ee2, repeated: true }]);
    class ee2 extends o2.Message {
      constructor(e3) {
        super(), this.path = [], r2.proto2.util.initPartial(e3, this);
      }
      static fromBinary(e3, t3) {
        return new ee2().fromBinary(e3, t3);
      }
      static fromJson(e3, t3) {
        return new ee2().fromJson(e3, t3);
      }
      static fromJsonString(e3, t3) {
        return new ee2().fromJsonString(e3, t3);
      }
      static equals(e3, t3) {
        return r2.proto2.util.equals(ee2, e3, t3);
      }
    }
    t2.GeneratedCodeInfo_Annotation = ee2, ee2.runtime = r2.proto2, ee2.typeName = "google.protobuf.GeneratedCodeInfo.Annotation", ee2.fields = r2.proto2.util.newFieldList(() => [{ no: 1, name: "path", kind: "scalar", T: 5, repeated: true, packed: true }, { no: 2, name: "source_file", kind: "scalar", T: 9, opt: true }, { no: 3, name: "begin", kind: "scalar", T: 5, opt: true }, { no: 4, name: "end", kind: "scalar", T: 5, opt: true }, { no: 5, name: "semantic", kind: "enum", T: r2.proto2.getEnumType(_2), opt: true }]), (function(e3) {
      e3[e3.NONE = 0] = "NONE", e3[e3.SET = 1] = "SET", e3[e3.ALIAS = 2] = "ALIAS";
    })(_2 || (t2.GeneratedCodeInfo_Annotation_Semantic = _2 = {})), r2.proto2.util.setEnumType(_2, "google.protobuf.GeneratedCodeInfo.Annotation.Semantic", [{ no: 0, name: "NONE" }, { no: 1, name: "SET" }, { no: 2, name: "ALIAS" }]);
  }
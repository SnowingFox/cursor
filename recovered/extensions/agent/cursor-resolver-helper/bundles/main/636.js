// @recovered-by cursor-re
// artifact: app/extensions/cursor-resolver-helper/dist/main.js sha256:0eb6078f0829c93d9374e39385fef22eabf7657a05c3cdf5bf316d9dbcf5ad0e
// module: 636 range:159431..164081
// basis: webpack-id confidence: C
// method: split
// run: ext-agent 2026-11-05T10:20:08.356Z
636: (e2, a2, n2) => {
    Object.defineProperty(a2, "__esModule", { value: true }), a2.CodeGeneratorResponse_File = a2.CodeGeneratorResponse_Feature = a2.CodeGeneratorResponse = a2.CodeGeneratorRequest = a2.Version = void 0;
    const o2 = n2(193), s2 = n2(291), t2 = n2(374);
    class r2 extends o2.Message {
      constructor(e3) {
        super(), s2.proto2.util.initPartial(e3, this);
      }
      static fromBinary(e3, a3) {
        return new r2().fromBinary(e3, a3);
      }
      static fromJson(e3, a3) {
        return new r2().fromJson(e3, a3);
      }
      static fromJsonString(e3, a3) {
        return new r2().fromJsonString(e3, a3);
      }
      static equals(e3, a3) {
        return s2.proto2.util.equals(r2, e3, a3);
      }
    }
    a2.Version = r2, r2.runtime = s2.proto2, r2.typeName = "google.protobuf.compiler.Version", r2.fields = s2.proto2.util.newFieldList(() => [{ no: 1, name: "major", kind: "scalar", T: 5, opt: true }, { no: 2, name: "minor", kind: "scalar", T: 5, opt: true }, { no: 3, name: "patch", kind: "scalar", T: 5, opt: true }, { no: 4, name: "suffix", kind: "scalar", T: 9, opt: true }]);
    class i2 extends o2.Message {
      constructor(e3) {
        super(), this.fileToGenerate = [], this.protoFile = [], this.sourceFileDescriptors = [], s2.proto2.util.initPartial(e3, this);
      }
      static fromBinary(e3, a3) {
        return new i2().fromBinary(e3, a3);
      }
      static fromJson(e3, a3) {
        return new i2().fromJson(e3, a3);
      }
      static fromJsonString(e3, a3) {
        return new i2().fromJsonString(e3, a3);
      }
      static equals(e3, a3) {
        return s2.proto2.util.equals(i2, e3, a3);
      }
    }
    a2.CodeGeneratorRequest = i2, i2.runtime = s2.proto2, i2.typeName = "google.protobuf.compiler.CodeGeneratorRequest", i2.fields = s2.proto2.util.newFieldList(() => [{ no: 1, name: "file_to_generate", kind: "scalar", T: 9, repeated: true }, { no: 2, name: "parameter", kind: "scalar", T: 9, opt: true }, { no: 15, name: "proto_file", kind: "message", T: t2.FileDescriptorProto, repeated: true }, { no: 17, name: "source_file_descriptors", kind: "message", T: t2.FileDescriptorProto, repeated: true }, { no: 3, name: "compiler_version", kind: "message", T: r2, opt: true }]);
    class m2 extends o2.Message {
      constructor(e3) {
        super(), this.file = [], s2.proto2.util.initPartial(e3, this);
      }
      static fromBinary(e3, a3) {
        return new m2().fromBinary(e3, a3);
      }
      static fromJson(e3, a3) {
        return new m2().fromJson(e3, a3);
      }
      static fromJsonString(e3, a3) {
        return new m2().fromJsonString(e3, a3);
      }
      static equals(e3, a3) {
        return s2.proto2.util.equals(m2, e3, a3);
      }
    }
    var l2;
    a2.CodeGeneratorResponse = m2, m2.runtime = s2.proto2, m2.typeName = "google.protobuf.compiler.CodeGeneratorResponse", m2.fields = s2.proto2.util.newFieldList(() => [{ no: 1, name: "error", kind: "scalar", T: 9, opt: true }, { no: 2, name: "supported_features", kind: "scalar", T: 4, opt: true }, { no: 3, name: "minimum_edition", kind: "scalar", T: 5, opt: true }, { no: 4, name: "maximum_edition", kind: "scalar", T: 5, opt: true }, { no: 15, name: "file", kind: "message", T: d2, repeated: true }]), (function(e3) {
      e3[e3.NONE = 0] = "NONE", e3[e3.PROTO3_OPTIONAL = 1] = "PROTO3_OPTIONAL", e3[e3.SUPPORTS_EDITIONS = 2] = "SUPPORTS_EDITIONS";
    })(l2 || (a2.CodeGeneratorResponse_Feature = l2 = {})), s2.proto2.util.setEnumType(l2, "google.protobuf.compiler.CodeGeneratorResponse.Feature", [{ no: 0, name: "FEATURE_NONE" }, { no: 1, name: "FEATURE_PROTO3_OPTIONAL" }, { no: 2, name: "FEATURE_SUPPORTS_EDITIONS" }]);
    class d2 extends o2.Message {
      constructor(e3) {
        super(), s2.proto2.util.initPartial(e3, this);
      }
      static fromBinary(e3, a3) {
        return new d2().fromBinary(e3, a3);
      }
      static fromJson(e3, a3) {
        return new d2().fromJson(e3, a3);
      }
      static fromJsonString(e3, a3) {
        return new d2().fromJsonString(e3, a3);
      }
      static equals(e3, a3) {
        return s2.proto2.util.equals(d2, e3, a3);
      }
    }
    a2.CodeGeneratorResponse_File = d2, d2.runtime = s2.proto2, d2.typeName = "google.protobuf.compiler.CodeGeneratorResponse.File", d2.fields = s2.proto2.util.newFieldList(() => [{ no: 1, name: "name", kind: "scalar", T: 9, opt: true }, { no: 2, name: "insertion_point", kind: "scalar", T: 9, opt: true }, { no: 15, name: "content", kind: "scalar", T: 9, opt: true }, { no: 16, name: "generated_code_info", kind: "message", T: t2.GeneratedCodeInfo, opt: true }]);
  }
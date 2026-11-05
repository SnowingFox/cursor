// @recovered-by cursor-re
// artifact: app/extensions/cursor-resolver/dist/main.js sha256:677b774c75dfff0de56084737d26169857daed3731cb62a6702840900f439aed
// module: 636 range:159431..164081
// basis: webpack-id confidence: C
// method: split
// run: ext-p0 2026-11-05T10:07:22.069Z
636: (e2, t2, n2) => {
    Object.defineProperty(t2, "__esModule", { value: true }), t2.CodeGeneratorResponse_File = t2.CodeGeneratorResponse_Feature = t2.CodeGeneratorResponse = t2.CodeGeneratorRequest = t2.Version = void 0;
    const r2 = n2(193), o2 = n2(291), a2 = n2(374);
    class s2 extends r2.Message {
      constructor(e3) {
        super(), o2.proto2.util.initPartial(e3, this);
      }
      static fromBinary(e3, t3) {
        return new s2().fromBinary(e3, t3);
      }
      static fromJson(e3, t3) {
        return new s2().fromJson(e3, t3);
      }
      static fromJsonString(e3, t3) {
        return new s2().fromJsonString(e3, t3);
      }
      static equals(e3, t3) {
        return o2.proto2.util.equals(s2, e3, t3);
      }
    }
    t2.Version = s2, s2.runtime = o2.proto2, s2.typeName = "google.protobuf.compiler.Version", s2.fields = o2.proto2.util.newFieldList(() => [{ no: 1, name: "major", kind: "scalar", T: 5, opt: true }, { no: 2, name: "minor", kind: "scalar", T: 5, opt: true }, { no: 3, name: "patch", kind: "scalar", T: 5, opt: true }, { no: 4, name: "suffix", kind: "scalar", T: 9, opt: true }]);
    class i2 extends r2.Message {
      constructor(e3) {
        super(), this.fileToGenerate = [], this.protoFile = [], this.sourceFileDescriptors = [], o2.proto2.util.initPartial(e3, this);
      }
      static fromBinary(e3, t3) {
        return new i2().fromBinary(e3, t3);
      }
      static fromJson(e3, t3) {
        return new i2().fromJson(e3, t3);
      }
      static fromJsonString(e3, t3) {
        return new i2().fromJsonString(e3, t3);
      }
      static equals(e3, t3) {
        return o2.proto2.util.equals(i2, e3, t3);
      }
    }
    t2.CodeGeneratorRequest = i2, i2.runtime = o2.proto2, i2.typeName = "google.protobuf.compiler.CodeGeneratorRequest", i2.fields = o2.proto2.util.newFieldList(() => [{ no: 1, name: "file_to_generate", kind: "scalar", T: 9, repeated: true }, { no: 2, name: "parameter", kind: "scalar", T: 9, opt: true }, { no: 15, name: "proto_file", kind: "message", T: a2.FileDescriptorProto, repeated: true }, { no: 17, name: "source_file_descriptors", kind: "message", T: a2.FileDescriptorProto, repeated: true }, { no: 3, name: "compiler_version", kind: "message", T: s2, opt: true }]);
    class l2 extends r2.Message {
      constructor(e3) {
        super(), this.file = [], o2.proto2.util.initPartial(e3, this);
      }
      static fromBinary(e3, t3) {
        return new l2().fromBinary(e3, t3);
      }
      static fromJson(e3, t3) {
        return new l2().fromJson(e3, t3);
      }
      static fromJsonString(e3, t3) {
        return new l2().fromJsonString(e3, t3);
      }
      static equals(e3, t3) {
        return o2.proto2.util.equals(l2, e3, t3);
      }
    }
    var u2;
    t2.CodeGeneratorResponse = l2, l2.runtime = o2.proto2, l2.typeName = "google.protobuf.compiler.CodeGeneratorResponse", l2.fields = o2.proto2.util.newFieldList(() => [{ no: 1, name: "error", kind: "scalar", T: 9, opt: true }, { no: 2, name: "supported_features", kind: "scalar", T: 4, opt: true }, { no: 3, name: "minimum_edition", kind: "scalar", T: 5, opt: true }, { no: 4, name: "maximum_edition", kind: "scalar", T: 5, opt: true }, { no: 15, name: "file", kind: "message", T: c2, repeated: true }]), (function(e3) {
      e3[e3.NONE = 0] = "NONE", e3[e3.PROTO3_OPTIONAL = 1] = "PROTO3_OPTIONAL", e3[e3.SUPPORTS_EDITIONS = 2] = "SUPPORTS_EDITIONS";
    })(u2 || (t2.CodeGeneratorResponse_Feature = u2 = {})), o2.proto2.util.setEnumType(u2, "google.protobuf.compiler.CodeGeneratorResponse.Feature", [{ no: 0, name: "FEATURE_NONE" }, { no: 1, name: "FEATURE_PROTO3_OPTIONAL" }, { no: 2, name: "FEATURE_SUPPORTS_EDITIONS" }]);
    class c2 extends r2.Message {
      constructor(e3) {
        super(), o2.proto2.util.initPartial(e3, this);
      }
      static fromBinary(e3, t3) {
        return new c2().fromBinary(e3, t3);
      }
      static fromJson(e3, t3) {
        return new c2().fromJson(e3, t3);
      }
      static fromJsonString(e3, t3) {
        return new c2().fromJsonString(e3, t3);
      }
      static equals(e3, t3) {
        return o2.proto2.util.equals(c2, e3, t3);
      }
    }
    t2.CodeGeneratorResponse_File = c2, c2.runtime = o2.proto2, c2.typeName = "google.protobuf.compiler.CodeGeneratorResponse.File", c2.fields = o2.proto2.util.newFieldList(() => [{ no: 1, name: "name", kind: "scalar", T: 9, opt: true }, { no: 2, name: "insertion_point", kind: "scalar", T: 9, opt: true }, { no: 15, name: "content", kind: "scalar", T: 9, opt: true }, { no: 16, name: "generated_code_info", kind: "message", T: a2.GeneratedCodeInfo, opt: true }]);
  }
// @recovered-by cursor-re
// artifact: app/extensions/cursor-commits/dist/main.js sha256:093f8518d2bba92ce25a152b40a9e7490ef35d5b45f1477f49078295148101b9
// module: 5636 range:445996..450645
// basis: webpack-id confidence: C
// method: split
// run: ext-agent 2026-11-05T10:20:08.356Z
5636: (e2, n2, a2) => {
    "use strict";
    Object.defineProperty(n2, "__esModule", { value: true }), n2.CodeGeneratorResponse_File = n2.CodeGeneratorResponse_Feature = n2.CodeGeneratorResponse = n2.CodeGeneratorRequest = n2.Version = void 0;
    const t2 = a2(4193), s2 = a2(3672), o2 = a2(7374);
    class r2 extends t2.Message {
      constructor(e3) {
        super(), s2.proto2.util.initPartial(e3, this);
      }
      static fromBinary(e3, n3) {
        return new r2().fromBinary(e3, n3);
      }
      static fromJson(e3, n3) {
        return new r2().fromJson(e3, n3);
      }
      static fromJsonString(e3, n3) {
        return new r2().fromJsonString(e3, n3);
      }
      static equals(e3, n3) {
        return s2.proto2.util.equals(r2, e3, n3);
      }
    }
    n2.Version = r2, r2.runtime = s2.proto2, r2.typeName = "google.protobuf.compiler.Version", r2.fields = s2.proto2.util.newFieldList(() => [{ no: 1, name: "major", kind: "scalar", T: 5, opt: true }, { no: 2, name: "minor", kind: "scalar", T: 5, opt: true }, { no: 3, name: "patch", kind: "scalar", T: 5, opt: true }, { no: 4, name: "suffix", kind: "scalar", T: 9, opt: true }]);
    class i2 extends t2.Message {
      constructor(e3) {
        super(), this.fileToGenerate = [], this.protoFile = [], this.sourceFileDescriptors = [], s2.proto2.util.initPartial(e3, this);
      }
      static fromBinary(e3, n3) {
        return new i2().fromBinary(e3, n3);
      }
      static fromJson(e3, n3) {
        return new i2().fromJson(e3, n3);
      }
      static fromJsonString(e3, n3) {
        return new i2().fromJsonString(e3, n3);
      }
      static equals(e3, n3) {
        return s2.proto2.util.equals(i2, e3, n3);
      }
    }
    n2.CodeGeneratorRequest = i2, i2.runtime = s2.proto2, i2.typeName = "google.protobuf.compiler.CodeGeneratorRequest", i2.fields = s2.proto2.util.newFieldList(() => [{ no: 1, name: "file_to_generate", kind: "scalar", T: 9, repeated: true }, { no: 2, name: "parameter", kind: "scalar", T: 9, opt: true }, { no: 15, name: "proto_file", kind: "message", T: o2.FileDescriptorProto, repeated: true }, { no: 17, name: "source_file_descriptors", kind: "message", T: o2.FileDescriptorProto, repeated: true }, { no: 3, name: "compiler_version", kind: "message", T: r2, opt: true }]);
    class A extends t2.Message {
      constructor(e3) {
        super(), this.file = [], s2.proto2.util.initPartial(e3, this);
      }
      static fromBinary(e3, n3) {
        return new A().fromBinary(e3, n3);
      }
      static fromJson(e3, n3) {
        return new A().fromJson(e3, n3);
      }
      static fromJsonString(e3, n3) {
        return new A().fromJsonString(e3, n3);
      }
      static equals(e3, n3) {
        return s2.proto2.util.equals(A, e3, n3);
      }
    }
    var l;
    n2.CodeGeneratorResponse = A, A.runtime = s2.proto2, A.typeName = "google.protobuf.compiler.CodeGeneratorResponse", A.fields = s2.proto2.util.newFieldList(() => [{ no: 1, name: "error", kind: "scalar", T: 9, opt: true }, { no: 2, name: "supported_features", kind: "scalar", T: 4, opt: true }, { no: 3, name: "minimum_edition", kind: "scalar", T: 5, opt: true }, { no: 4, name: "maximum_edition", kind: "scalar", T: 5, opt: true }, { no: 15, name: "file", kind: "message", T: c, repeated: true }]), (function(e3) {
      e3[e3.NONE = 0] = "NONE", e3[e3.PROTO3_OPTIONAL = 1] = "PROTO3_OPTIONAL", e3[e3.SUPPORTS_EDITIONS = 2] = "SUPPORTS_EDITIONS";
    })(l || (n2.CodeGeneratorResponse_Feature = l = {})), s2.proto2.util.setEnumType(l, "google.protobuf.compiler.CodeGeneratorResponse.Feature", [{ no: 0, name: "FEATURE_NONE" }, { no: 1, name: "FEATURE_PROTO3_OPTIONAL" }, { no: 2, name: "FEATURE_SUPPORTS_EDITIONS" }]);
    class c extends t2.Message {
      constructor(e3) {
        super(), s2.proto2.util.initPartial(e3, this);
      }
      static fromBinary(e3, n3) {
        return new c().fromBinary(e3, n3);
      }
      static fromJson(e3, n3) {
        return new c().fromJson(e3, n3);
      }
      static fromJsonString(e3, n3) {
        return new c().fromJsonString(e3, n3);
      }
      static equals(e3, n3) {
        return s2.proto2.util.equals(c, e3, n3);
      }
    }
    n2.CodeGeneratorResponse_File = c, c.runtime = s2.proto2, c.typeName = "google.protobuf.compiler.CodeGeneratorResponse.File", c.fields = s2.proto2.util.newFieldList(() => [{ no: 1, name: "name", kind: "scalar", T: 9, opt: true }, { no: 2, name: "insertion_point", kind: "scalar", T: 9, opt: true }, { no: 15, name: "content", kind: "scalar", T: 9, opt: true }, { no: 16, name: "generated_code_info", kind: "message", T: o2.GeneratedCodeInfo, opt: true }]);
  }
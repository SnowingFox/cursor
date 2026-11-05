// @recovered-by cursor-re
// artifact: app/extensions/cursor-shadow-workspace/dist/extension.js sha256:19218949e5ecc64e4c1b41e194ba40abfd54a9aeb034a14f90c71485b7f84585
// module: 5636 range:445572..450202
// basis: webpack-id confidence: C
// method: split
// run: ext-agent 2026-11-05T10:20:08.356Z
5636: (e2, A2, t2) => {
    "use strict";
    Object.defineProperty(A2, "__esModule", { value: true }), A2.CodeGeneratorResponse_File = A2.CodeGeneratorResponse_Feature = A2.CodeGeneratorResponse = A2.CodeGeneratorRequest = A2.Version = void 0;
    const n2 = t2(4193), r2 = t2(3672), o2 = t2(7374);
    class s extends n2.Message {
      constructor(e3) {
        super(), r2.proto2.util.initPartial(e3, this);
      }
      static fromBinary(e3, A3) {
        return new s().fromBinary(e3, A3);
      }
      static fromJson(e3, A3) {
        return new s().fromJson(e3, A3);
      }
      static fromJsonString(e3, A3) {
        return new s().fromJsonString(e3, A3);
      }
      static equals(e3, A3) {
        return r2.proto2.util.equals(s, e3, A3);
      }
    }
    A2.Version = s, s.runtime = r2.proto2, s.typeName = "google.protobuf.compiler.Version", s.fields = r2.proto2.util.newFieldList(() => [{ no: 1, name: "major", kind: "scalar", T: 5, opt: true }, { no: 2, name: "minor", kind: "scalar", T: 5, opt: true }, { no: 3, name: "patch", kind: "scalar", T: 5, opt: true }, { no: 4, name: "suffix", kind: "scalar", T: 9, opt: true }]);
    class a extends n2.Message {
      constructor(e3) {
        super(), this.fileToGenerate = [], this.protoFile = [], this.sourceFileDescriptors = [], r2.proto2.util.initPartial(e3, this);
      }
      static fromBinary(e3, A3) {
        return new a().fromBinary(e3, A3);
      }
      static fromJson(e3, A3) {
        return new a().fromJson(e3, A3);
      }
      static fromJsonString(e3, A3) {
        return new a().fromJsonString(e3, A3);
      }
      static equals(e3, A3) {
        return r2.proto2.util.equals(a, e3, A3);
      }
    }
    A2.CodeGeneratorRequest = a, a.runtime = r2.proto2, a.typeName = "google.protobuf.compiler.CodeGeneratorRequest", a.fields = r2.proto2.util.newFieldList(() => [{ no: 1, name: "file_to_generate", kind: "scalar", T: 9, repeated: true }, { no: 2, name: "parameter", kind: "scalar", T: 9, opt: true }, { no: 15, name: "proto_file", kind: "message", T: o2.FileDescriptorProto, repeated: true }, { no: 17, name: "source_file_descriptors", kind: "message", T: o2.FileDescriptorProto, repeated: true }, { no: 3, name: "compiler_version", kind: "message", T: s, opt: true }]);
    class i extends n2.Message {
      constructor(e3) {
        super(), this.file = [], r2.proto2.util.initPartial(e3, this);
      }
      static fromBinary(e3, A3) {
        return new i().fromBinary(e3, A3);
      }
      static fromJson(e3, A3) {
        return new i().fromJson(e3, A3);
      }
      static fromJsonString(e3, A3) {
        return new i().fromJsonString(e3, A3);
      }
      static equals(e3, A3) {
        return r2.proto2.util.equals(i, e3, A3);
      }
    }
    var c;
    A2.CodeGeneratorResponse = i, i.runtime = r2.proto2, i.typeName = "google.protobuf.compiler.CodeGeneratorResponse", i.fields = r2.proto2.util.newFieldList(() => [{ no: 1, name: "error", kind: "scalar", T: 9, opt: true }, { no: 2, name: "supported_features", kind: "scalar", T: 4, opt: true }, { no: 3, name: "minimum_edition", kind: "scalar", T: 5, opt: true }, { no: 4, name: "maximum_edition", kind: "scalar", T: 5, opt: true }, { no: 15, name: "file", kind: "message", T: l, repeated: true }]), (function(e3) {
      e3[e3.NONE = 0] = "NONE", e3[e3.PROTO3_OPTIONAL = 1] = "PROTO3_OPTIONAL", e3[e3.SUPPORTS_EDITIONS = 2] = "SUPPORTS_EDITIONS";
    })(c || (A2.CodeGeneratorResponse_Feature = c = {})), r2.proto2.util.setEnumType(c, "google.protobuf.compiler.CodeGeneratorResponse.Feature", [{ no: 0, name: "FEATURE_NONE" }, { no: 1, name: "FEATURE_PROTO3_OPTIONAL" }, { no: 2, name: "FEATURE_SUPPORTS_EDITIONS" }]);
    class l extends n2.Message {
      constructor(e3) {
        super(), r2.proto2.util.initPartial(e3, this);
      }
      static fromBinary(e3, A3) {
        return new l().fromBinary(e3, A3);
      }
      static fromJson(e3, A3) {
        return new l().fromJson(e3, A3);
      }
      static fromJsonString(e3, A3) {
        return new l().fromJsonString(e3, A3);
      }
      static equals(e3, A3) {
        return r2.proto2.util.equals(l, e3, A3);
      }
    }
    A2.CodeGeneratorResponse_File = l, l.runtime = r2.proto2, l.typeName = "google.protobuf.compiler.CodeGeneratorResponse.File", l.fields = r2.proto2.util.newFieldList(() => [{ no: 1, name: "name", kind: "scalar", T: 9, opt: true }, { no: 2, name: "insertion_point", kind: "scalar", T: 9, opt: true }, { no: 15, name: "content", kind: "scalar", T: 9, opt: true }, { no: 16, name: "generated_code_info", kind: "message", T: o2.GeneratedCodeInfo, opt: true }]);
  }
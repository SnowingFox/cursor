// @recovered-by cursor-re
// artifact: app/extensions/cursor-deeplink/dist/main.js sha256:2b0091d260814e411af8319789fee5fe8b4b75d7c27c85b905f80c4d53d995f3
// module: 3255 range:409958..414588
// basis: webpack-id confidence: C
// method: split
// run: ext-agent 2026-11-05T10:20:08.356Z
3255: (e2, t2, A2) => {
    "use strict";
    Object.defineProperty(t2, "__esModule", { value: true }), t2.CodeGeneratorResponse_File = t2.CodeGeneratorResponse_Feature = t2.CodeGeneratorResponse = t2.CodeGeneratorRequest = t2.Version = void 0;
    const n2 = A2(4193), r2 = A2(3672), o2 = A2(7374);
    class s extends n2.Message {
      constructor(e3) {
        super(), r2.proto2.util.initPartial(e3, this);
      }
      static fromBinary(e3, t3) {
        return new s().fromBinary(e3, t3);
      }
      static fromJson(e3, t3) {
        return new s().fromJson(e3, t3);
      }
      static fromJsonString(e3, t3) {
        return new s().fromJsonString(e3, t3);
      }
      static equals(e3, t3) {
        return r2.proto2.util.equals(s, e3, t3);
      }
    }
    t2.Version = s, s.runtime = r2.proto2, s.typeName = "google.protobuf.compiler.Version", s.fields = r2.proto2.util.newFieldList(() => [{ no: 1, name: "major", kind: "scalar", T: 5, opt: true }, { no: 2, name: "minor", kind: "scalar", T: 5, opt: true }, { no: 3, name: "patch", kind: "scalar", T: 5, opt: true }, { no: 4, name: "suffix", kind: "scalar", T: 9, opt: true }]);
    class i extends n2.Message {
      constructor(e3) {
        super(), this.fileToGenerate = [], this.protoFile = [], this.sourceFileDescriptors = [], r2.proto2.util.initPartial(e3, this);
      }
      static fromBinary(e3, t3) {
        return new i().fromBinary(e3, t3);
      }
      static fromJson(e3, t3) {
        return new i().fromJson(e3, t3);
      }
      static fromJsonString(e3, t3) {
        return new i().fromJsonString(e3, t3);
      }
      static equals(e3, t3) {
        return r2.proto2.util.equals(i, e3, t3);
      }
    }
    t2.CodeGeneratorRequest = i, i.runtime = r2.proto2, i.typeName = "google.protobuf.compiler.CodeGeneratorRequest", i.fields = r2.proto2.util.newFieldList(() => [{ no: 1, name: "file_to_generate", kind: "scalar", T: 9, repeated: true }, { no: 2, name: "parameter", kind: "scalar", T: 9, opt: true }, { no: 15, name: "proto_file", kind: "message", T: o2.FileDescriptorProto, repeated: true }, { no: 17, name: "source_file_descriptors", kind: "message", T: o2.FileDescriptorProto, repeated: true }, { no: 3, name: "compiler_version", kind: "message", T: s, opt: true }]);
    class a extends n2.Message {
      constructor(e3) {
        super(), this.file = [], r2.proto2.util.initPartial(e3, this);
      }
      static fromBinary(e3, t3) {
        return new a().fromBinary(e3, t3);
      }
      static fromJson(e3, t3) {
        return new a().fromJson(e3, t3);
      }
      static fromJsonString(e3, t3) {
        return new a().fromJsonString(e3, t3);
      }
      static equals(e3, t3) {
        return r2.proto2.util.equals(a, e3, t3);
      }
    }
    var c;
    t2.CodeGeneratorResponse = a, a.runtime = r2.proto2, a.typeName = "google.protobuf.compiler.CodeGeneratorResponse", a.fields = r2.proto2.util.newFieldList(() => [{ no: 1, name: "error", kind: "scalar", T: 9, opt: true }, { no: 2, name: "supported_features", kind: "scalar", T: 4, opt: true }, { no: 3, name: "minimum_edition", kind: "scalar", T: 5, opt: true }, { no: 4, name: "maximum_edition", kind: "scalar", T: 5, opt: true }, { no: 15, name: "file", kind: "message", T: l, repeated: true }]), (function(e3) {
      e3[e3.NONE = 0] = "NONE", e3[e3.PROTO3_OPTIONAL = 1] = "PROTO3_OPTIONAL", e3[e3.SUPPORTS_EDITIONS = 2] = "SUPPORTS_EDITIONS";
    })(c || (t2.CodeGeneratorResponse_Feature = c = {})), r2.proto2.util.setEnumType(c, "google.protobuf.compiler.CodeGeneratorResponse.Feature", [{ no: 0, name: "FEATURE_NONE" }, { no: 1, name: "FEATURE_PROTO3_OPTIONAL" }, { no: 2, name: "FEATURE_SUPPORTS_EDITIONS" }]);
    class l extends n2.Message {
      constructor(e3) {
        super(), r2.proto2.util.initPartial(e3, this);
      }
      static fromBinary(e3, t3) {
        return new l().fromBinary(e3, t3);
      }
      static fromJson(e3, t3) {
        return new l().fromJson(e3, t3);
      }
      static fromJsonString(e3, t3) {
        return new l().fromJsonString(e3, t3);
      }
      static equals(e3, t3) {
        return r2.proto2.util.equals(l, e3, t3);
      }
    }
    t2.CodeGeneratorResponse_File = l, l.runtime = r2.proto2, l.typeName = "google.protobuf.compiler.CodeGeneratorResponse.File", l.fields = r2.proto2.util.newFieldList(() => [{ no: 1, name: "name", kind: "scalar", T: 9, opt: true }, { no: 2, name: "insertion_point", kind: "scalar", T: 9, opt: true }, { no: 15, name: "content", kind: "scalar", T: 9, opt: true }, { no: 16, name: "generated_code_info", kind: "message", T: o2.GeneratedCodeInfo, opt: true }]);
  }
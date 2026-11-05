// @recovered-by cursor-re
// artifact: app/extensions/cursor-always-local/dist/main.js sha256:14fb2d0e360d81a024b4ec605f417e030e19b30b2df99bc45648aa227060534e
// module: 5636 range:1274745..1279385
// basis: webpack-id confidence: C
// method: split
// run: ext-agent 2026-11-05T10:20:08.356Z
5636: (t2, e2, r2) => {
    "use strict";
    Object.defineProperty(e2, "__esModule", { value: true }), e2.CodeGeneratorResponse_File = e2.CodeGeneratorResponse_Feature = e2.CodeGeneratorResponse = e2.CodeGeneratorRequest = e2.Version = void 0;
    const n2 = r2(4193), s2 = r2(3672), i2 = r2(7374);
    class o2 extends n2.Message {
      constructor(t3) {
        super(), s2.proto2.util.initPartial(t3, this);
      }
      static fromBinary(t3, e3) {
        return new o2().fromBinary(t3, e3);
      }
      static fromJson(t3, e3) {
        return new o2().fromJson(t3, e3);
      }
      static fromJsonString(t3, e3) {
        return new o2().fromJsonString(t3, e3);
      }
      static equals(t3, e3) {
        return s2.proto2.util.equals(o2, t3, e3);
      }
    }
    e2.Version = o2, o2.runtime = s2.proto2, o2.typeName = "google.protobuf.compiler.Version", o2.fields = s2.proto2.util.newFieldList(() => [{ no: 1, name: "major", kind: "scalar", T: 5, opt: true }, { no: 2, name: "minor", kind: "scalar", T: 5, opt: true }, { no: 3, name: "patch", kind: "scalar", T: 5, opt: true }, { no: 4, name: "suffix", kind: "scalar", T: 9, opt: true }]);
    class a extends n2.Message {
      constructor(t3) {
        super(), this.fileToGenerate = [], this.protoFile = [], this.sourceFileDescriptors = [], s2.proto2.util.initPartial(t3, this);
      }
      static fromBinary(t3, e3) {
        return new a().fromBinary(t3, e3);
      }
      static fromJson(t3, e3) {
        return new a().fromJson(t3, e3);
      }
      static fromJsonString(t3, e3) {
        return new a().fromJsonString(t3, e3);
      }
      static equals(t3, e3) {
        return s2.proto2.util.equals(a, t3, e3);
      }
    }
    e2.CodeGeneratorRequest = a, a.runtime = s2.proto2, a.typeName = "google.protobuf.compiler.CodeGeneratorRequest", a.fields = s2.proto2.util.newFieldList(() => [{ no: 1, name: "file_to_generate", kind: "scalar", T: 9, repeated: true }, { no: 2, name: "parameter", kind: "scalar", T: 9, opt: true }, { no: 15, name: "proto_file", kind: "message", T: i2.FileDescriptorProto, repeated: true }, { no: 17, name: "source_file_descriptors", kind: "message", T: i2.FileDescriptorProto, repeated: true }, { no: 3, name: "compiler_version", kind: "message", T: o2, opt: true }]);
    class u extends n2.Message {
      constructor(t3) {
        super(), this.file = [], s2.proto2.util.initPartial(t3, this);
      }
      static fromBinary(t3, e3) {
        return new u().fromBinary(t3, e3);
      }
      static fromJson(t3, e3) {
        return new u().fromJson(t3, e3);
      }
      static fromJsonString(t3, e3) {
        return new u().fromJsonString(t3, e3);
      }
      static equals(t3, e3) {
        return s2.proto2.util.equals(u, t3, e3);
      }
    }
    var c;
    e2.CodeGeneratorResponse = u, u.runtime = s2.proto2, u.typeName = "google.protobuf.compiler.CodeGeneratorResponse", u.fields = s2.proto2.util.newFieldList(() => [{ no: 1, name: "error", kind: "scalar", T: 9, opt: true }, { no: 2, name: "supported_features", kind: "scalar", T: 4, opt: true }, { no: 3, name: "minimum_edition", kind: "scalar", T: 5, opt: true }, { no: 4, name: "maximum_edition", kind: "scalar", T: 5, opt: true }, { no: 15, name: "file", kind: "message", T: l, repeated: true }]), (function(t3) {
      t3[t3.NONE = 0] = "NONE", t3[t3.PROTO3_OPTIONAL = 1] = "PROTO3_OPTIONAL", t3[t3.SUPPORTS_EDITIONS = 2] = "SUPPORTS_EDITIONS";
    })(c || (e2.CodeGeneratorResponse_Feature = c = {})), s2.proto2.util.setEnumType(c, "google.protobuf.compiler.CodeGeneratorResponse.Feature", [{ no: 0, name: "FEATURE_NONE" }, { no: 1, name: "FEATURE_PROTO3_OPTIONAL" }, { no: 2, name: "FEATURE_SUPPORTS_EDITIONS" }]);
    class l extends n2.Message {
      constructor(t3) {
        super(), s2.proto2.util.initPartial(t3, this);
      }
      static fromBinary(t3, e3) {
        return new l().fromBinary(t3, e3);
      }
      static fromJson(t3, e3) {
        return new l().fromJson(t3, e3);
      }
      static fromJsonString(t3, e3) {
        return new l().fromJsonString(t3, e3);
      }
      static equals(t3, e3) {
        return s2.proto2.util.equals(l, t3, e3);
      }
    }
    e2.CodeGeneratorResponse_File = l, l.runtime = s2.proto2, l.typeName = "google.protobuf.compiler.CodeGeneratorResponse.File", l.fields = s2.proto2.util.newFieldList(() => [{ no: 1, name: "name", kind: "scalar", T: 9, opt: true }, { no: 2, name: "insertion_point", kind: "scalar", T: 9, opt: true }, { no: 15, name: "content", kind: "scalar", T: 9, opt: true }, { no: 16, name: "generated_code_info", kind: "message", T: i2.GeneratedCodeInfo, opt: true }]);
  }
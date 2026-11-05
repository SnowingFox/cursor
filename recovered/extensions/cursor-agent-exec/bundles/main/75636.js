// @recovered-by cursor-re
// artifact: app/extensions/cursor-agent-exec/dist/main.js sha256:8d20326bd54948353115113c2d4716cf781d593610fd4d8acebcc37a3170da8e
// module: 75636 range:6458439..6463029
// basis: webpack-id confidence: C
// method: split
// run: ext-p0 2026-11-05T10:07:22.069Z
75636: (e, t, r) => {
    "use strict";
    Object.defineProperty(t, "__esModule", { value: true }), t.CodeGeneratorResponse_File = t.CodeGeneratorResponse_Feature = t.CodeGeneratorResponse = t.CodeGeneratorRequest = t.Version = void 0;
    const n = r(24193), s = r(83672), o = r(27374);
    class i extends n.Message {
      constructor(e2) {
        super(), s.proto2.util.initPartial(e2, this);
      }
      static fromBinary(e2, t2) {
        return new i().fromBinary(e2, t2);
      }
      static fromJson(e2, t2) {
        return new i().fromJson(e2, t2);
      }
      static fromJsonString(e2, t2) {
        return new i().fromJsonString(e2, t2);
      }
      static equals(e2, t2) {
        return s.proto2.util.equals(i, e2, t2);
      }
    }
    t.Version = i, i.runtime = s.proto2, i.typeName = "google.protobuf.compiler.Version", i.fields = s.proto2.util.newFieldList(() => [{ no: 1, name: "major", kind: "scalar", T: 5, opt: true }, { no: 2, name: "minor", kind: "scalar", T: 5, opt: true }, { no: 3, name: "patch", kind: "scalar", T: 5, opt: true }, { no: 4, name: "suffix", kind: "scalar", T: 9, opt: true }]);
    class a extends n.Message {
      constructor(e2) {
        super(), this.fileToGenerate = [], this.protoFile = [], this.sourceFileDescriptors = [], s.proto2.util.initPartial(e2, this);
      }
      static fromBinary(e2, t2) {
        return new a().fromBinary(e2, t2);
      }
      static fromJson(e2, t2) {
        return new a().fromJson(e2, t2);
      }
      static fromJsonString(e2, t2) {
        return new a().fromJsonString(e2, t2);
      }
      static equals(e2, t2) {
        return s.proto2.util.equals(a, e2, t2);
      }
    }
    t.CodeGeneratorRequest = a, a.runtime = s.proto2, a.typeName = "google.protobuf.compiler.CodeGeneratorRequest", a.fields = s.proto2.util.newFieldList(() => [{ no: 1, name: "file_to_generate", kind: "scalar", T: 9, repeated: true }, { no: 2, name: "parameter", kind: "scalar", T: 9, opt: true }, { no: 15, name: "proto_file", kind: "message", T: o.FileDescriptorProto, repeated: true }, { no: 17, name: "source_file_descriptors", kind: "message", T: o.FileDescriptorProto, repeated: true }, { no: 3, name: "compiler_version", kind: "message", T: i, opt: true }]);
    class c extends n.Message {
      constructor(e2) {
        super(), this.file = [], s.proto2.util.initPartial(e2, this);
      }
      static fromBinary(e2, t2) {
        return new c().fromBinary(e2, t2);
      }
      static fromJson(e2, t2) {
        return new c().fromJson(e2, t2);
      }
      static fromJsonString(e2, t2) {
        return new c().fromJsonString(e2, t2);
      }
      static equals(e2, t2) {
        return s.proto2.util.equals(c, e2, t2);
      }
    }
    var l;
    t.CodeGeneratorResponse = c, c.runtime = s.proto2, c.typeName = "google.protobuf.compiler.CodeGeneratorResponse", c.fields = s.proto2.util.newFieldList(() => [{ no: 1, name: "error", kind: "scalar", T: 9, opt: true }, { no: 2, name: "supported_features", kind: "scalar", T: 4, opt: true }, { no: 3, name: "minimum_edition", kind: "scalar", T: 5, opt: true }, { no: 4, name: "maximum_edition", kind: "scalar", T: 5, opt: true }, { no: 15, name: "file", kind: "message", T: u, repeated: true }]), (function(e2) {
      e2[e2.NONE = 0] = "NONE", e2[e2.PROTO3_OPTIONAL = 1] = "PROTO3_OPTIONAL", e2[e2.SUPPORTS_EDITIONS = 2] = "SUPPORTS_EDITIONS";
    })(l || (t.CodeGeneratorResponse_Feature = l = {})), s.proto2.util.setEnumType(l, "google.protobuf.compiler.CodeGeneratorResponse.Feature", [{ no: 0, name: "FEATURE_NONE" }, { no: 1, name: "FEATURE_PROTO3_OPTIONAL" }, { no: 2, name: "FEATURE_SUPPORTS_EDITIONS" }]);
    class u extends n.Message {
      constructor(e2) {
        super(), s.proto2.util.initPartial(e2, this);
      }
      static fromBinary(e2, t2) {
        return new u().fromBinary(e2, t2);
      }
      static fromJson(e2, t2) {
        return new u().fromJson(e2, t2);
      }
      static fromJsonString(e2, t2) {
        return new u().fromJsonString(e2, t2);
      }
      static equals(e2, t2) {
        return s.proto2.util.equals(u, e2, t2);
      }
    }
    t.CodeGeneratorResponse_File = u, u.runtime = s.proto2, u.typeName = "google.protobuf.compiler.CodeGeneratorResponse.File", u.fields = s.proto2.util.newFieldList(() => [{ no: 1, name: "name", kind: "scalar", T: 9, opt: true }, { no: 2, name: "insertion_point", kind: "scalar", T: 9, opt: true }, { no: 15, name: "content", kind: "scalar", T: 9, opt: true }, { no: 16, name: "generated_code_info", kind: "message", T: o.GeneratedCodeInfo, opt: true }]);
  }
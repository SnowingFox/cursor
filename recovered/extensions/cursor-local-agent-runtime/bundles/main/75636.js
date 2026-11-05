// @recovered-by cursor-re
// artifact: app/extensions/cursor-local-agent-runtime/dist/main.js sha256:be87ea0ed3ac86375ab8e5f92c4261df0ccfc61ff24b07420f9c88a78ae2cfd0
// module: 75636 range:7241712..7246302
// basis: webpack-id confidence: C
// method: split
// run: ext-p0 2026-11-05T10:07:22.069Z
75636: (e, t, r) => {
    "use strict";
    Object.defineProperty(t, "__esModule", { value: true }), t.CodeGeneratorResponse_File = t.CodeGeneratorResponse_Feature = t.CodeGeneratorResponse = t.CodeGeneratorRequest = t.Version = void 0;
    const n = r(24193), o = r(83672), s = r(27374);
    class i extends n.Message {
      constructor(e2) {
        super(), o.proto2.util.initPartial(e2, this);
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
        return o.proto2.util.equals(i, e2, t2);
      }
    }
    t.Version = i, i.runtime = o.proto2, i.typeName = "google.protobuf.compiler.Version", i.fields = o.proto2.util.newFieldList(() => [{ no: 1, name: "major", kind: "scalar", T: 5, opt: true }, { no: 2, name: "minor", kind: "scalar", T: 5, opt: true }, { no: 3, name: "patch", kind: "scalar", T: 5, opt: true }, { no: 4, name: "suffix", kind: "scalar", T: 9, opt: true }]);
    class a extends n.Message {
      constructor(e2) {
        super(), this.fileToGenerate = [], this.protoFile = [], this.sourceFileDescriptors = [], o.proto2.util.initPartial(e2, this);
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
        return o.proto2.util.equals(a, e2, t2);
      }
    }
    t.CodeGeneratorRequest = a, a.runtime = o.proto2, a.typeName = "google.protobuf.compiler.CodeGeneratorRequest", a.fields = o.proto2.util.newFieldList(() => [{ no: 1, name: "file_to_generate", kind: "scalar", T: 9, repeated: true }, { no: 2, name: "parameter", kind: "scalar", T: 9, opt: true }, { no: 15, name: "proto_file", kind: "message", T: s.FileDescriptorProto, repeated: true }, { no: 17, name: "source_file_descriptors", kind: "message", T: s.FileDescriptorProto, repeated: true }, { no: 3, name: "compiler_version", kind: "message", T: i, opt: true }]);
    class l extends n.Message {
      constructor(e2) {
        super(), this.file = [], o.proto2.util.initPartial(e2, this);
      }
      static fromBinary(e2, t2) {
        return new l().fromBinary(e2, t2);
      }
      static fromJson(e2, t2) {
        return new l().fromJson(e2, t2);
      }
      static fromJsonString(e2, t2) {
        return new l().fromJsonString(e2, t2);
      }
      static equals(e2, t2) {
        return o.proto2.util.equals(l, e2, t2);
      }
    }
    var c;
    t.CodeGeneratorResponse = l, l.runtime = o.proto2, l.typeName = "google.protobuf.compiler.CodeGeneratorResponse", l.fields = o.proto2.util.newFieldList(() => [{ no: 1, name: "error", kind: "scalar", T: 9, opt: true }, { no: 2, name: "supported_features", kind: "scalar", T: 4, opt: true }, { no: 3, name: "minimum_edition", kind: "scalar", T: 5, opt: true }, { no: 4, name: "maximum_edition", kind: "scalar", T: 5, opt: true }, { no: 15, name: "file", kind: "message", T: u, repeated: true }]), (function(e2) {
      e2[e2.NONE = 0] = "NONE", e2[e2.PROTO3_OPTIONAL = 1] = "PROTO3_OPTIONAL", e2[e2.SUPPORTS_EDITIONS = 2] = "SUPPORTS_EDITIONS";
    })(c || (t.CodeGeneratorResponse_Feature = c = {})), o.proto2.util.setEnumType(c, "google.protobuf.compiler.CodeGeneratorResponse.Feature", [{ no: 0, name: "FEATURE_NONE" }, { no: 1, name: "FEATURE_PROTO3_OPTIONAL" }, { no: 2, name: "FEATURE_SUPPORTS_EDITIONS" }]);
    class u extends n.Message {
      constructor(e2) {
        super(), o.proto2.util.initPartial(e2, this);
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
        return o.proto2.util.equals(u, e2, t2);
      }
    }
    t.CodeGeneratorResponse_File = u, u.runtime = o.proto2, u.typeName = "google.protobuf.compiler.CodeGeneratorResponse.File", u.fields = o.proto2.util.newFieldList(() => [{ no: 1, name: "name", kind: "scalar", T: 9, opt: true }, { no: 2, name: "insertion_point", kind: "scalar", T: 9, opt: true }, { no: 15, name: "content", kind: "scalar", T: 9, opt: true }, { no: 16, name: "generated_code_info", kind: "message", T: s.GeneratedCodeInfo, opt: true }]);
  }
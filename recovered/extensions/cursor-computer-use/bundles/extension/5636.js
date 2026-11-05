// @recovered-by cursor-re
// artifact: app/extensions/cursor-computer-use/dist/extension.js sha256:2e37990c917916e7e5b3d1524e03cf61b1cf38ddc56b1e51014a1275aa4568a6
// module: 5636 range:476898..481528
// basis: webpack-id confidence: C
// method: split
// run: ext-p0 2026-11-05T10:07:22.069Z
5636: (e2, n2, t2) => {
    "use strict";
    Object.defineProperty(n2, "__esModule", { value: true }), n2.CodeGeneratorResponse_File = n2.CodeGeneratorResponse_Feature = n2.CodeGeneratorResponse = n2.CodeGeneratorRequest = n2.Version = void 0;
    const a2 = t2(4193), s2 = t2(3672), o2 = t2(7374);
    class r extends a2.Message {
      constructor(e3) {
        super(), s2.proto2.util.initPartial(e3, this);
      }
      static fromBinary(e3, n3) {
        return new r().fromBinary(e3, n3);
      }
      static fromJson(e3, n3) {
        return new r().fromJson(e3, n3);
      }
      static fromJsonString(e3, n3) {
        return new r().fromJsonString(e3, n3);
      }
      static equals(e3, n3) {
        return s2.proto2.util.equals(r, e3, n3);
      }
    }
    n2.Version = r, r.runtime = s2.proto2, r.typeName = "google.protobuf.compiler.Version", r.fields = s2.proto2.util.newFieldList(() => [{ no: 1, name: "major", kind: "scalar", T: 5, opt: true }, { no: 2, name: "minor", kind: "scalar", T: 5, opt: true }, { no: 3, name: "patch", kind: "scalar", T: 5, opt: true }, { no: 4, name: "suffix", kind: "scalar", T: 9, opt: true }]);
    class i extends a2.Message {
      constructor(e3) {
        super(), this.fileToGenerate = [], this.protoFile = [], this.sourceFileDescriptors = [], s2.proto2.util.initPartial(e3, this);
      }
      static fromBinary(e3, n3) {
        return new i().fromBinary(e3, n3);
      }
      static fromJson(e3, n3) {
        return new i().fromJson(e3, n3);
      }
      static fromJsonString(e3, n3) {
        return new i().fromJsonString(e3, n3);
      }
      static equals(e3, n3) {
        return s2.proto2.util.equals(i, e3, n3);
      }
    }
    n2.CodeGeneratorRequest = i, i.runtime = s2.proto2, i.typeName = "google.protobuf.compiler.CodeGeneratorRequest", i.fields = s2.proto2.util.newFieldList(() => [{ no: 1, name: "file_to_generate", kind: "scalar", T: 9, repeated: true }, { no: 2, name: "parameter", kind: "scalar", T: 9, opt: true }, { no: 15, name: "proto_file", kind: "message", T: o2.FileDescriptorProto, repeated: true }, { no: 17, name: "source_file_descriptors", kind: "message", T: o2.FileDescriptorProto, repeated: true }, { no: 3, name: "compiler_version", kind: "message", T: r, opt: true }]);
    class A extends a2.Message {
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
    var c;
    n2.CodeGeneratorResponse = A, A.runtime = s2.proto2, A.typeName = "google.protobuf.compiler.CodeGeneratorResponse", A.fields = s2.proto2.util.newFieldList(() => [{ no: 1, name: "error", kind: "scalar", T: 9, opt: true }, { no: 2, name: "supported_features", kind: "scalar", T: 4, opt: true }, { no: 3, name: "minimum_edition", kind: "scalar", T: 5, opt: true }, { no: 4, name: "maximum_edition", kind: "scalar", T: 5, opt: true }, { no: 15, name: "file", kind: "message", T: l, repeated: true }]), (function(e3) {
      e3[e3.NONE = 0] = "NONE", e3[e3.PROTO3_OPTIONAL = 1] = "PROTO3_OPTIONAL", e3[e3.SUPPORTS_EDITIONS = 2] = "SUPPORTS_EDITIONS";
    })(c || (n2.CodeGeneratorResponse_Feature = c = {})), s2.proto2.util.setEnumType(c, "google.protobuf.compiler.CodeGeneratorResponse.Feature", [{ no: 0, name: "FEATURE_NONE" }, { no: 1, name: "FEATURE_PROTO3_OPTIONAL" }, { no: 2, name: "FEATURE_SUPPORTS_EDITIONS" }]);
    class l extends a2.Message {
      constructor(e3) {
        super(), s2.proto2.util.initPartial(e3, this);
      }
      static fromBinary(e3, n3) {
        return new l().fromBinary(e3, n3);
      }
      static fromJson(e3, n3) {
        return new l().fromJson(e3, n3);
      }
      static fromJsonString(e3, n3) {
        return new l().fromJsonString(e3, n3);
      }
      static equals(e3, n3) {
        return s2.proto2.util.equals(l, e3, n3);
      }
    }
    n2.CodeGeneratorResponse_File = l, l.runtime = s2.proto2, l.typeName = "google.protobuf.compiler.CodeGeneratorResponse.File", l.fields = s2.proto2.util.newFieldList(() => [{ no: 1, name: "name", kind: "scalar", T: 9, opt: true }, { no: 2, name: "insertion_point", kind: "scalar", T: 9, opt: true }, { no: 15, name: "content", kind: "scalar", T: 9, opt: true }, { no: 16, name: "generated_code_info", kind: "message", T: o2.GeneratedCodeInfo, opt: true }]);
  }
// @recovered-by cursor-re
// artifact: app/extensions/cursor-mcp/dist/main.js sha256:097aeef3cf1f927e9bc6c0d23972c432bbcae8dc0ea353a5b6308dd59620fb49
// module: 5636 range:428000..432649
// basis: webpack-id confidence: C
// method: split
// run: ext-p0 2026-11-05T10:07:22.069Z
5636: (e2, t2, r2) => {
    "use strict";
    Object.defineProperty(t2, "__esModule", { value: true }), t2.CodeGeneratorResponse_File = t2.CodeGeneratorResponse_Feature = t2.CodeGeneratorResponse = t2.CodeGeneratorRequest = t2.Version = void 0;
    const n2 = r2(4193), o2 = r2(3672), s2 = r2(7374);
    class i2 extends n2.Message {
      constructor(e3) {
        super(), o2.proto2.util.initPartial(e3, this);
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
    t2.Version = i2, i2.runtime = o2.proto2, i2.typeName = "google.protobuf.compiler.Version", i2.fields = o2.proto2.util.newFieldList(() => [{ no: 1, name: "major", kind: "scalar", T: 5, opt: true }, { no: 2, name: "minor", kind: "scalar", T: 5, opt: true }, { no: 3, name: "patch", kind: "scalar", T: 5, opt: true }, { no: 4, name: "suffix", kind: "scalar", T: 9, opt: true }]);
    class a2 extends n2.Message {
      constructor(e3) {
        super(), this.fileToGenerate = [], this.protoFile = [], this.sourceFileDescriptors = [], o2.proto2.util.initPartial(e3, this);
      }
      static fromBinary(e3, t3) {
        return new a2().fromBinary(e3, t3);
      }
      static fromJson(e3, t3) {
        return new a2().fromJson(e3, t3);
      }
      static fromJsonString(e3, t3) {
        return new a2().fromJsonString(e3, t3);
      }
      static equals(e3, t3) {
        return o2.proto2.util.equals(a2, e3, t3);
      }
    }
    t2.CodeGeneratorRequest = a2, a2.runtime = o2.proto2, a2.typeName = "google.protobuf.compiler.CodeGeneratorRequest", a2.fields = o2.proto2.util.newFieldList(() => [{ no: 1, name: "file_to_generate", kind: "scalar", T: 9, repeated: true }, { no: 2, name: "parameter", kind: "scalar", T: 9, opt: true }, { no: 15, name: "proto_file", kind: "message", T: s2.FileDescriptorProto, repeated: true }, { no: 17, name: "source_file_descriptors", kind: "message", T: s2.FileDescriptorProto, repeated: true }, { no: 3, name: "compiler_version", kind: "message", T: i2, opt: true }]);
    class c extends n2.Message {
      constructor(e3) {
        super(), this.file = [], o2.proto2.util.initPartial(e3, this);
      }
      static fromBinary(e3, t3) {
        return new c().fromBinary(e3, t3);
      }
      static fromJson(e3, t3) {
        return new c().fromJson(e3, t3);
      }
      static fromJsonString(e3, t3) {
        return new c().fromJsonString(e3, t3);
      }
      static equals(e3, t3) {
        return o2.proto2.util.equals(c, e3, t3);
      }
    }
    var u;
    t2.CodeGeneratorResponse = c, c.runtime = o2.proto2, c.typeName = "google.protobuf.compiler.CodeGeneratorResponse", c.fields = o2.proto2.util.newFieldList(() => [{ no: 1, name: "error", kind: "scalar", T: 9, opt: true }, { no: 2, name: "supported_features", kind: "scalar", T: 4, opt: true }, { no: 3, name: "minimum_edition", kind: "scalar", T: 5, opt: true }, { no: 4, name: "maximum_edition", kind: "scalar", T: 5, opt: true }, { no: 15, name: "file", kind: "message", T: l, repeated: true }]), (function(e3) {
      e3[e3.NONE = 0] = "NONE", e3[e3.PROTO3_OPTIONAL = 1] = "PROTO3_OPTIONAL", e3[e3.SUPPORTS_EDITIONS = 2] = "SUPPORTS_EDITIONS";
    })(u || (t2.CodeGeneratorResponse_Feature = u = {})), o2.proto2.util.setEnumType(u, "google.protobuf.compiler.CodeGeneratorResponse.Feature", [{ no: 0, name: "FEATURE_NONE" }, { no: 1, name: "FEATURE_PROTO3_OPTIONAL" }, { no: 2, name: "FEATURE_SUPPORTS_EDITIONS" }]);
    class l extends n2.Message {
      constructor(e3) {
        super(), o2.proto2.util.initPartial(e3, this);
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
        return o2.proto2.util.equals(l, e3, t3);
      }
    }
    t2.CodeGeneratorResponse_File = l, l.runtime = o2.proto2, l.typeName = "google.protobuf.compiler.CodeGeneratorResponse.File", l.fields = o2.proto2.util.newFieldList(() => [{ no: 1, name: "name", kind: "scalar", T: 9, opt: true }, { no: 2, name: "insertion_point", kind: "scalar", T: 9, opt: true }, { no: 15, name: "content", kind: "scalar", T: 9, opt: true }, { no: 16, name: "generated_code_info", kind: "message", T: s2.GeneratedCodeInfo, opt: true }]);
  }
// @recovered-by cursor-re
// artifact: app/extensions/cursor-agent-worker/dist/main.js sha256:d5af94b4e40f694b81a675a0fb00fa8d060306ca064a011e953218d005b613d5
// module: 5636 range:158595..163414
// basis: webpack-id confidence: C
// method: split
// run: ext-agent 2026-11-05T10:20:08.356Z
5636: (e10, a10, n10) => {
    Object.defineProperty(a10, "__esModule", { value: true }), a10.CodeGeneratorResponse_File = a10.CodeGeneratorResponse_Feature = a10.CodeGeneratorResponse = a10.CodeGeneratorRequest = a10.Version = void 0;
    const s10 = n10(4193), o10 = n10(3672), r10 = n10(7374);
    class t10 extends s10.Message {
      constructor(e11) {
        super(), o10.proto2.util.initPartial(e11, this);
      }
      static fromBinary(e11, a11) {
        return new t10().fromBinary(e11, a11);
      }
      static fromJson(e11, a11) {
        return new t10().fromJson(e11, a11);
      }
      static fromJsonString(e11, a11) {
        return new t10().fromJsonString(e11, a11);
      }
      static equals(e11, a11) {
        return o10.proto2.util.equals(t10, e11, a11);
      }
    }
    a10.Version = t10, t10.runtime = o10.proto2, t10.typeName = "google.protobuf.compiler.Version", t10.fields = o10.proto2.util.newFieldList(() => [{ no: 1, name: "major", kind: "scalar", T: 5, opt: true }, { no: 2, name: "minor", kind: "scalar", T: 5, opt: true }, { no: 3, name: "patch", kind: "scalar", T: 5, opt: true }, { no: 4, name: "suffix", kind: "scalar", T: 9, opt: true }]);
    class i10 extends s10.Message {
      constructor(e11) {
        super(), this.fileToGenerate = [], this.protoFile = [], this.sourceFileDescriptors = [], o10.proto2.util.initPartial(e11, this);
      }
      static fromBinary(e11, a11) {
        return new i10().fromBinary(e11, a11);
      }
      static fromJson(e11, a11) {
        return new i10().fromJson(e11, a11);
      }
      static fromJsonString(e11, a11) {
        return new i10().fromJsonString(e11, a11);
      }
      static equals(e11, a11) {
        return o10.proto2.util.equals(i10, e11, a11);
      }
    }
    a10.CodeGeneratorRequest = i10, i10.runtime = o10.proto2, i10.typeName = "google.protobuf.compiler.CodeGeneratorRequest", i10.fields = o10.proto2.util.newFieldList(() => [{ no: 1, name: "file_to_generate", kind: "scalar", T: 9, repeated: true }, { no: 2, name: "parameter", kind: "scalar", T: 9, opt: true }, { no: 15, name: "proto_file", kind: "message", T: r10.FileDescriptorProto, repeated: true }, { no: 17, name: "source_file_descriptors", kind: "message", T: r10.FileDescriptorProto, repeated: true }, { no: 3, name: "compiler_version", kind: "message", T: t10, opt: true }]);
    class m10 extends s10.Message {
      constructor(e11) {
        super(), this.file = [], o10.proto2.util.initPartial(e11, this);
      }
      static fromBinary(e11, a11) {
        return new m10().fromBinary(e11, a11);
      }
      static fromJson(e11, a11) {
        return new m10().fromJson(e11, a11);
      }
      static fromJsonString(e11, a11) {
        return new m10().fromJsonString(e11, a11);
      }
      static equals(e11, a11) {
        return o10.proto2.util.equals(m10, e11, a11);
      }
    }
    var l10;
    a10.CodeGeneratorResponse = m10, m10.runtime = o10.proto2, m10.typeName = "google.protobuf.compiler.CodeGeneratorResponse", m10.fields = o10.proto2.util.newFieldList(() => [{ no: 1, name: "error", kind: "scalar", T: 9, opt: true }, { no: 2, name: "supported_features", kind: "scalar", T: 4, opt: true }, { no: 3, name: "minimum_edition", kind: "scalar", T: 5, opt: true }, { no: 4, name: "maximum_edition", kind: "scalar", T: 5, opt: true }, { no: 15, name: "file", kind: "message", T: d10, repeated: true }]), (function(e11) {
      e11[e11.NONE = 0] = "NONE", e11[e11.PROTO3_OPTIONAL = 1] = "PROTO3_OPTIONAL", e11[e11.SUPPORTS_EDITIONS = 2] = "SUPPORTS_EDITIONS";
    })(l10 || (a10.CodeGeneratorResponse_Feature = l10 = {})), o10.proto2.util.setEnumType(l10, "google.protobuf.compiler.CodeGeneratorResponse.Feature", [{ no: 0, name: "FEATURE_NONE" }, { no: 1, name: "FEATURE_PROTO3_OPTIONAL" }, { no: 2, name: "FEATURE_SUPPORTS_EDITIONS" }]);
    class d10 extends s10.Message {
      constructor(e11) {
        super(), o10.proto2.util.initPartial(e11, this);
      }
      static fromBinary(e11, a11) {
        return new d10().fromBinary(e11, a11);
      }
      static fromJson(e11, a11) {
        return new d10().fromJson(e11, a11);
      }
      static fromJsonString(e11, a11) {
        return new d10().fromJsonString(e11, a11);
      }
      static equals(e11, a11) {
        return o10.proto2.util.equals(d10, e11, a11);
      }
    }
    a10.CodeGeneratorResponse_File = d10, d10.runtime = o10.proto2, d10.typeName = "google.protobuf.compiler.CodeGeneratorResponse.File", d10.fields = o10.proto2.util.newFieldList(() => [{ no: 1, name: "name", kind: "scalar", T: 9, opt: true }, { no: 2, name: "insertion_point", kind: "scalar", T: 9, opt: true }, { no: 15, name: "content", kind: "scalar", T: 9, opt: true }, { no: 16, name: "generated_code_info", kind: "message", T: r10.GeneratedCodeInfo, opt: true }]);
  }
// @recovered-by cursor-re
// artifact: app/extensions/cursor-agent-worker/dist/main.js sha256:d5af94b4e40f694b81a675a0fb00fa8d060306ca064a011e953218d005b613d5
// module: 4443 range:140268..143744
// basis: webpack-id confidence: C
// method: split
// run: ext-agent 2026-11-05T10:20:08.356Z
4443: (e10, a10, n10) => {
    Object.defineProperty(a10, "__esModule", { value: true }), a10.Mixin = a10.Method = a10.Api = void 0;
    const s10 = n10(4193), o10 = n10(3469), r10 = n10(7206), t10 = n10(7599);
    class i10 extends s10.Message {
      constructor(e11) {
        super(), this.name = "", this.methods = [], this.options = [], this.version = "", this.mixins = [], this.syntax = o10.Syntax.PROTO2, t10.proto3.util.initPartial(e11, this);
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
        return t10.proto3.util.equals(i10, e11, a11);
      }
    }
    a10.Api = i10, i10.runtime = t10.proto3, i10.typeName = "google.protobuf.Api", i10.fields = t10.proto3.util.newFieldList(() => [{ no: 1, name: "name", kind: "scalar", T: 9 }, { no: 2, name: "methods", kind: "message", T: m10, repeated: true }, { no: 3, name: "options", kind: "message", T: o10.Option, repeated: true }, { no: 4, name: "version", kind: "scalar", T: 9 }, { no: 5, name: "source_context", kind: "message", T: r10.SourceContext }, { no: 6, name: "mixins", kind: "message", T: l10, repeated: true }, { no: 7, name: "syntax", kind: "enum", T: t10.proto3.getEnumType(o10.Syntax) }]);
    class m10 extends s10.Message {
      constructor(e11) {
        super(), this.name = "", this.requestTypeUrl = "", this.requestStreaming = false, this.responseTypeUrl = "", this.responseStreaming = false, this.options = [], this.syntax = o10.Syntax.PROTO2, t10.proto3.util.initPartial(e11, this);
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
        return t10.proto3.util.equals(m10, e11, a11);
      }
    }
    a10.Method = m10, m10.runtime = t10.proto3, m10.typeName = "google.protobuf.Method", m10.fields = t10.proto3.util.newFieldList(() => [{ no: 1, name: "name", kind: "scalar", T: 9 }, { no: 2, name: "request_type_url", kind: "scalar", T: 9 }, { no: 3, name: "request_streaming", kind: "scalar", T: 8 }, { no: 4, name: "response_type_url", kind: "scalar", T: 9 }, { no: 5, name: "response_streaming", kind: "scalar", T: 8 }, { no: 6, name: "options", kind: "message", T: o10.Option, repeated: true }, { no: 7, name: "syntax", kind: "enum", T: t10.proto3.getEnumType(o10.Syntax) }]);
    class l10 extends s10.Message {
      constructor(e11) {
        super(), this.name = "", this.root = "", t10.proto3.util.initPartial(e11, this);
      }
      static fromBinary(e11, a11) {
        return new l10().fromBinary(e11, a11);
      }
      static fromJson(e11, a11) {
        return new l10().fromJson(e11, a11);
      }
      static fromJsonString(e11, a11) {
        return new l10().fromJsonString(e11, a11);
      }
      static equals(e11, a11) {
        return t10.proto3.util.equals(l10, e11, a11);
      }
    }
    a10.Mixin = l10, l10.runtime = t10.proto3, l10.typeName = "google.protobuf.Mixin", l10.fields = t10.proto3.util.newFieldList(() => [{ no: 1, name: "name", kind: "scalar", T: 9 }, { no: 2, name: "root", kind: "scalar", T: 9 }]);
  }
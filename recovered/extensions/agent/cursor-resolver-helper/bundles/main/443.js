// @recovered-by cursor-re
// artifact: app/extensions/cursor-resolver-helper/dist/main.js sha256:0eb6078f0829c93d9374e39385fef22eabf7657a05c3cdf5bf316d9dbcf5ad0e
// module: 443 range:120894..124240
// basis: webpack-id confidence: C
// method: split
// run: ext-agent 2026-11-05T10:20:08.356Z
443: (e2, a2, n2) => {
    Object.defineProperty(a2, "__esModule", { value: true }), a2.Mixin = a2.Method = a2.Api = void 0;
    const o2 = n2(193), s2 = n2(469), t2 = n2(206), r2 = n2(599);
    class i2 extends o2.Message {
      constructor(e3) {
        super(), this.name = "", this.methods = [], this.options = [], this.version = "", this.mixins = [], this.syntax = s2.Syntax.PROTO2, r2.proto3.util.initPartial(e3, this);
      }
      static fromBinary(e3, a3) {
        return new i2().fromBinary(e3, a3);
      }
      static fromJson(e3, a3) {
        return new i2().fromJson(e3, a3);
      }
      static fromJsonString(e3, a3) {
        return new i2().fromJsonString(e3, a3);
      }
      static equals(e3, a3) {
        return r2.proto3.util.equals(i2, e3, a3);
      }
    }
    a2.Api = i2, i2.runtime = r2.proto3, i2.typeName = "google.protobuf.Api", i2.fields = r2.proto3.util.newFieldList(() => [{ no: 1, name: "name", kind: "scalar", T: 9 }, { no: 2, name: "methods", kind: "message", T: m2, repeated: true }, { no: 3, name: "options", kind: "message", T: s2.Option, repeated: true }, { no: 4, name: "version", kind: "scalar", T: 9 }, { no: 5, name: "source_context", kind: "message", T: t2.SourceContext }, { no: 6, name: "mixins", kind: "message", T: l2, repeated: true }, { no: 7, name: "syntax", kind: "enum", T: r2.proto3.getEnumType(s2.Syntax) }]);
    class m2 extends o2.Message {
      constructor(e3) {
        super(), this.name = "", this.requestTypeUrl = "", this.requestStreaming = false, this.responseTypeUrl = "", this.responseStreaming = false, this.options = [], this.syntax = s2.Syntax.PROTO2, r2.proto3.util.initPartial(e3, this);
      }
      static fromBinary(e3, a3) {
        return new m2().fromBinary(e3, a3);
      }
      static fromJson(e3, a3) {
        return new m2().fromJson(e3, a3);
      }
      static fromJsonString(e3, a3) {
        return new m2().fromJsonString(e3, a3);
      }
      static equals(e3, a3) {
        return r2.proto3.util.equals(m2, e3, a3);
      }
    }
    a2.Method = m2, m2.runtime = r2.proto3, m2.typeName = "google.protobuf.Method", m2.fields = r2.proto3.util.newFieldList(() => [{ no: 1, name: "name", kind: "scalar", T: 9 }, { no: 2, name: "request_type_url", kind: "scalar", T: 9 }, { no: 3, name: "request_streaming", kind: "scalar", T: 8 }, { no: 4, name: "response_type_url", kind: "scalar", T: 9 }, { no: 5, name: "response_streaming", kind: "scalar", T: 8 }, { no: 6, name: "options", kind: "message", T: s2.Option, repeated: true }, { no: 7, name: "syntax", kind: "enum", T: r2.proto3.getEnumType(s2.Syntax) }]);
    class l2 extends o2.Message {
      constructor(e3) {
        super(), this.name = "", this.root = "", r2.proto3.util.initPartial(e3, this);
      }
      static fromBinary(e3, a3) {
        return new l2().fromBinary(e3, a3);
      }
      static fromJson(e3, a3) {
        return new l2().fromJson(e3, a3);
      }
      static fromJsonString(e3, a3) {
        return new l2().fromJsonString(e3, a3);
      }
      static equals(e3, a3) {
        return r2.proto3.util.equals(l2, e3, a3);
      }
    }
    a2.Mixin = l2, l2.runtime = r2.proto3, l2.typeName = "google.protobuf.Mixin", l2.fields = r2.proto3.util.newFieldList(() => [{ no: 1, name: "name", kind: "scalar", T: 9 }, { no: 2, name: "root", kind: "scalar", T: 9 }]);
  }
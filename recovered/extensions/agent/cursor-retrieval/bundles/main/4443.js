// @recovered-by cursor-re
// artifact: app/extensions/cursor-retrieval/dist/main.js sha256:50c717cc16d67dfb571db8461d6630caeb8e421ad0090d156086d1a3d53b1b2b
// module: 4443 range:703243..706592
// basis: webpack-id confidence: C
// method: split
// run: ext-agent 2026-11-05T10:20:08.356Z
4443: (e2, a2, n2) => {
    "use strict";
    Object.defineProperty(a2, "__esModule", { value: true }), a2.Mixin = a2.Method = a2.Api = void 0;
    const t2 = n2(4193), s2 = n2(3469), o2 = n2(7206), r2 = n2(7599);
    class i2 extends t2.Message {
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
    a2.Api = i2, i2.runtime = r2.proto3, i2.typeName = "google.protobuf.Api", i2.fields = r2.proto3.util.newFieldList(() => [{ no: 1, name: "name", kind: "scalar", T: 9 }, { no: 2, name: "methods", kind: "message", T: l, repeated: true }, { no: 3, name: "options", kind: "message", T: s2.Option, repeated: true }, { no: 4, name: "version", kind: "scalar", T: 9 }, { no: 5, name: "source_context", kind: "message", T: o2.SourceContext }, { no: 6, name: "mixins", kind: "message", T: d, repeated: true }, { no: 7, name: "syntax", kind: "enum", T: r2.proto3.getEnumType(s2.Syntax) }]);
    class l extends t2.Message {
      constructor(e3) {
        super(), this.name = "", this.requestTypeUrl = "", this.requestStreaming = false, this.responseTypeUrl = "", this.responseStreaming = false, this.options = [], this.syntax = s2.Syntax.PROTO2, r2.proto3.util.initPartial(e3, this);
      }
      static fromBinary(e3, a3) {
        return new l().fromBinary(e3, a3);
      }
      static fromJson(e3, a3) {
        return new l().fromJson(e3, a3);
      }
      static fromJsonString(e3, a3) {
        return new l().fromJsonString(e3, a3);
      }
      static equals(e3, a3) {
        return r2.proto3.util.equals(l, e3, a3);
      }
    }
    a2.Method = l, l.runtime = r2.proto3, l.typeName = "google.protobuf.Method", l.fields = r2.proto3.util.newFieldList(() => [{ no: 1, name: "name", kind: "scalar", T: 9 }, { no: 2, name: "request_type_url", kind: "scalar", T: 9 }, { no: 3, name: "request_streaming", kind: "scalar", T: 8 }, { no: 4, name: "response_type_url", kind: "scalar", T: 9 }, { no: 5, name: "response_streaming", kind: "scalar", T: 8 }, { no: 6, name: "options", kind: "message", T: s2.Option, repeated: true }, { no: 7, name: "syntax", kind: "enum", T: r2.proto3.getEnumType(s2.Syntax) }]);
    class d extends t2.Message {
      constructor(e3) {
        super(), this.name = "", this.root = "", r2.proto3.util.initPartial(e3, this);
      }
      static fromBinary(e3, a3) {
        return new d().fromBinary(e3, a3);
      }
      static fromJson(e3, a3) {
        return new d().fromJson(e3, a3);
      }
      static fromJsonString(e3, a3) {
        return new d().fromJsonString(e3, a3);
      }
      static equals(e3, a3) {
        return r2.proto3.util.equals(d, e3, a3);
      }
    }
    a2.Mixin = d, d.runtime = r2.proto3, d.typeName = "google.protobuf.Mixin", d.fields = r2.proto3.util.newFieldList(() => [{ no: 1, name: "name", kind: "scalar", T: 9 }, { no: 2, name: "root", kind: "scalar", T: 9 }]);
  }
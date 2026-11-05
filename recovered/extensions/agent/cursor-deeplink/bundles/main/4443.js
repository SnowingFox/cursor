// @recovered-by cursor-re
// artifact: app/extensions/cursor-deeplink/dist/main.js sha256:2b0091d260814e411af8319789fee5fe8b4b75d7c27c85b905f80c4d53d995f3
// module: 4443 range:500522..503847
// basis: webpack-id confidence: C
// method: split
// run: ext-agent 2026-11-05T10:20:08.356Z
4443: (e2, t2, A2) => {
    "use strict";
    Object.defineProperty(t2, "__esModule", { value: true }), t2.Mixin = t2.Method = t2.Api = void 0;
    const n2 = A2(4193), r2 = A2(3469), o2 = A2(7206), s = A2(7599);
    class i extends n2.Message {
      constructor(e3) {
        super(), this.name = "", this.methods = [], this.options = [], this.version = "", this.mixins = [], this.syntax = r2.Syntax.PROTO2, s.proto3.util.initPartial(e3, this);
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
        return s.proto3.util.equals(i, e3, t3);
      }
    }
    t2.Api = i, i.runtime = s.proto3, i.typeName = "google.protobuf.Api", i.fields = s.proto3.util.newFieldList(() => [{ no: 1, name: "name", kind: "scalar", T: 9 }, { no: 2, name: "methods", kind: "message", T: a, repeated: true }, { no: 3, name: "options", kind: "message", T: r2.Option, repeated: true }, { no: 4, name: "version", kind: "scalar", T: 9 }, { no: 5, name: "source_context", kind: "message", T: o2.SourceContext }, { no: 6, name: "mixins", kind: "message", T: c, repeated: true }, { no: 7, name: "syntax", kind: "enum", T: s.proto3.getEnumType(r2.Syntax) }]);
    class a extends n2.Message {
      constructor(e3) {
        super(), this.name = "", this.requestTypeUrl = "", this.requestStreaming = false, this.responseTypeUrl = "", this.responseStreaming = false, this.options = [], this.syntax = r2.Syntax.PROTO2, s.proto3.util.initPartial(e3, this);
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
        return s.proto3.util.equals(a, e3, t3);
      }
    }
    t2.Method = a, a.runtime = s.proto3, a.typeName = "google.protobuf.Method", a.fields = s.proto3.util.newFieldList(() => [{ no: 1, name: "name", kind: "scalar", T: 9 }, { no: 2, name: "request_type_url", kind: "scalar", T: 9 }, { no: 3, name: "request_streaming", kind: "scalar", T: 8 }, { no: 4, name: "response_type_url", kind: "scalar", T: 9 }, { no: 5, name: "response_streaming", kind: "scalar", T: 8 }, { no: 6, name: "options", kind: "message", T: r2.Option, repeated: true }, { no: 7, name: "syntax", kind: "enum", T: s.proto3.getEnumType(r2.Syntax) }]);
    class c extends n2.Message {
      constructor(e3) {
        super(), this.name = "", this.root = "", s.proto3.util.initPartial(e3, this);
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
        return s.proto3.util.equals(c, e3, t3);
      }
    }
    t2.Mixin = c, c.runtime = s.proto3, c.typeName = "google.protobuf.Mixin", c.fields = s.proto3.util.newFieldList(() => [{ no: 1, name: "name", kind: "scalar", T: 9 }, { no: 2, name: "root", kind: "scalar", T: 9 }]);
  }
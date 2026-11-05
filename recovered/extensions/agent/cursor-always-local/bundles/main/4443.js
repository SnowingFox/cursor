// @recovered-by cursor-re
// artifact: app/extensions/cursor-always-local/dist/main.js sha256:14fb2d0e360d81a024b4ec605f417e030e19b30b2df99bc45648aa227060534e
// module: 4443 range:1158357..1161697
// basis: webpack-id confidence: C
// method: split
// run: ext-agent 2026-11-05T10:20:08.356Z
4443: (t2, e2, r2) => {
    "use strict";
    Object.defineProperty(e2, "__esModule", { value: true }), e2.Mixin = e2.Method = e2.Api = void 0;
    const n2 = r2(4193), s2 = r2(3469), i2 = r2(7206), o2 = r2(7599);
    class a extends n2.Message {
      constructor(t3) {
        super(), this.name = "", this.methods = [], this.options = [], this.version = "", this.mixins = [], this.syntax = s2.Syntax.PROTO2, o2.proto3.util.initPartial(t3, this);
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
        return o2.proto3.util.equals(a, t3, e3);
      }
    }
    e2.Api = a, a.runtime = o2.proto3, a.typeName = "google.protobuf.Api", a.fields = o2.proto3.util.newFieldList(() => [{ no: 1, name: "name", kind: "scalar", T: 9 }, { no: 2, name: "methods", kind: "message", T: u, repeated: true }, { no: 3, name: "options", kind: "message", T: s2.Option, repeated: true }, { no: 4, name: "version", kind: "scalar", T: 9 }, { no: 5, name: "source_context", kind: "message", T: i2.SourceContext }, { no: 6, name: "mixins", kind: "message", T: c, repeated: true }, { no: 7, name: "syntax", kind: "enum", T: o2.proto3.getEnumType(s2.Syntax) }]);
    class u extends n2.Message {
      constructor(t3) {
        super(), this.name = "", this.requestTypeUrl = "", this.requestStreaming = false, this.responseTypeUrl = "", this.responseStreaming = false, this.options = [], this.syntax = s2.Syntax.PROTO2, o2.proto3.util.initPartial(t3, this);
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
        return o2.proto3.util.equals(u, t3, e3);
      }
    }
    e2.Method = u, u.runtime = o2.proto3, u.typeName = "google.protobuf.Method", u.fields = o2.proto3.util.newFieldList(() => [{ no: 1, name: "name", kind: "scalar", T: 9 }, { no: 2, name: "request_type_url", kind: "scalar", T: 9 }, { no: 3, name: "request_streaming", kind: "scalar", T: 8 }, { no: 4, name: "response_type_url", kind: "scalar", T: 9 }, { no: 5, name: "response_streaming", kind: "scalar", T: 8 }, { no: 6, name: "options", kind: "message", T: s2.Option, repeated: true }, { no: 7, name: "syntax", kind: "enum", T: o2.proto3.getEnumType(s2.Syntax) }]);
    class c extends n2.Message {
      constructor(t3) {
        super(), this.name = "", this.root = "", o2.proto3.util.initPartial(t3, this);
      }
      static fromBinary(t3, e3) {
        return new c().fromBinary(t3, e3);
      }
      static fromJson(t3, e3) {
        return new c().fromJson(t3, e3);
      }
      static fromJsonString(t3, e3) {
        return new c().fromJsonString(t3, e3);
      }
      static equals(t3, e3) {
        return o2.proto3.util.equals(c, t3, e3);
      }
    }
    e2.Mixin = c, c.runtime = o2.proto3, c.typeName = "google.protobuf.Mixin", c.fields = o2.proto3.util.newFieldList(() => [{ no: 1, name: "name", kind: "scalar", T: 9 }, { no: 2, name: "root", kind: "scalar", T: 9 }]);
  }
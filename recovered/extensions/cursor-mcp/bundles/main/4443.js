// @recovered-by cursor-re
// artifact: app/extensions/cursor-mcp/dist/main.js sha256:097aeef3cf1f927e9bc6c0d23972c432bbcae8dc0ea353a5b6308dd59620fb49
// module: 4443 range:308472..311821
// basis: webpack-id confidence: C
// method: split
// run: ext-p0 2026-11-05T10:07:22.069Z
4443: (e2, t2, r2) => {
    "use strict";
    Object.defineProperty(t2, "__esModule", { value: true }), t2.Mixin = t2.Method = t2.Api = void 0;
    const n2 = r2(4193), o2 = r2(3469), s2 = r2(7206), i2 = r2(7599);
    class a2 extends n2.Message {
      constructor(e3) {
        super(), this.name = "", this.methods = [], this.options = [], this.version = "", this.mixins = [], this.syntax = o2.Syntax.PROTO2, i2.proto3.util.initPartial(e3, this);
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
        return i2.proto3.util.equals(a2, e3, t3);
      }
    }
    t2.Api = a2, a2.runtime = i2.proto3, a2.typeName = "google.protobuf.Api", a2.fields = i2.proto3.util.newFieldList(() => [{ no: 1, name: "name", kind: "scalar", T: 9 }, { no: 2, name: "methods", kind: "message", T: c, repeated: true }, { no: 3, name: "options", kind: "message", T: o2.Option, repeated: true }, { no: 4, name: "version", kind: "scalar", T: 9 }, { no: 5, name: "source_context", kind: "message", T: s2.SourceContext }, { no: 6, name: "mixins", kind: "message", T: u, repeated: true }, { no: 7, name: "syntax", kind: "enum", T: i2.proto3.getEnumType(o2.Syntax) }]);
    class c extends n2.Message {
      constructor(e3) {
        super(), this.name = "", this.requestTypeUrl = "", this.requestStreaming = false, this.responseTypeUrl = "", this.responseStreaming = false, this.options = [], this.syntax = o2.Syntax.PROTO2, i2.proto3.util.initPartial(e3, this);
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
        return i2.proto3.util.equals(c, e3, t3);
      }
    }
    t2.Method = c, c.runtime = i2.proto3, c.typeName = "google.protobuf.Method", c.fields = i2.proto3.util.newFieldList(() => [{ no: 1, name: "name", kind: "scalar", T: 9 }, { no: 2, name: "request_type_url", kind: "scalar", T: 9 }, { no: 3, name: "request_streaming", kind: "scalar", T: 8 }, { no: 4, name: "response_type_url", kind: "scalar", T: 9 }, { no: 5, name: "response_streaming", kind: "scalar", T: 8 }, { no: 6, name: "options", kind: "message", T: o2.Option, repeated: true }, { no: 7, name: "syntax", kind: "enum", T: i2.proto3.getEnumType(o2.Syntax) }]);
    class u extends n2.Message {
      constructor(e3) {
        super(), this.name = "", this.root = "", i2.proto3.util.initPartial(e3, this);
      }
      static fromBinary(e3, t3) {
        return new u().fromBinary(e3, t3);
      }
      static fromJson(e3, t3) {
        return new u().fromJson(e3, t3);
      }
      static fromJsonString(e3, t3) {
        return new u().fromJsonString(e3, t3);
      }
      static equals(e3, t3) {
        return i2.proto3.util.equals(u, e3, t3);
      }
    }
    t2.Mixin = u, u.runtime = i2.proto3, u.typeName = "google.protobuf.Mixin", u.fields = i2.proto3.util.newFieldList(() => [{ no: 1, name: "name", kind: "scalar", T: 9 }, { no: 2, name: "root", kind: "scalar", T: 9 }]);
  }
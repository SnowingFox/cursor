// @recovered-by cursor-re
// artifact: app/extensions/cursor-resolver/dist/main.js sha256:677b774c75dfff0de56084737d26169857daed3731cb62a6702840900f439aed
// module: 443 range:120894..124240
// basis: webpack-id confidence: C
// method: split
// run: ext-p0 2026-11-05T10:07:22.069Z
443: (e2, t2, n2) => {
    Object.defineProperty(t2, "__esModule", { value: true }), t2.Mixin = t2.Method = t2.Api = void 0;
    const r2 = n2(193), o2 = n2(469), a2 = n2(206), s2 = n2(599);
    class i2 extends r2.Message {
      constructor(e3) {
        super(), this.name = "", this.methods = [], this.options = [], this.version = "", this.mixins = [], this.syntax = o2.Syntax.PROTO2, s2.proto3.util.initPartial(e3, this);
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
        return s2.proto3.util.equals(i2, e3, t3);
      }
    }
    t2.Api = i2, i2.runtime = s2.proto3, i2.typeName = "google.protobuf.Api", i2.fields = s2.proto3.util.newFieldList(() => [{ no: 1, name: "name", kind: "scalar", T: 9 }, { no: 2, name: "methods", kind: "message", T: l2, repeated: true }, { no: 3, name: "options", kind: "message", T: o2.Option, repeated: true }, { no: 4, name: "version", kind: "scalar", T: 9 }, { no: 5, name: "source_context", kind: "message", T: a2.SourceContext }, { no: 6, name: "mixins", kind: "message", T: u2, repeated: true }, { no: 7, name: "syntax", kind: "enum", T: s2.proto3.getEnumType(o2.Syntax) }]);
    class l2 extends r2.Message {
      constructor(e3) {
        super(), this.name = "", this.requestTypeUrl = "", this.requestStreaming = false, this.responseTypeUrl = "", this.responseStreaming = false, this.options = [], this.syntax = o2.Syntax.PROTO2, s2.proto3.util.initPartial(e3, this);
      }
      static fromBinary(e3, t3) {
        return new l2().fromBinary(e3, t3);
      }
      static fromJson(e3, t3) {
        return new l2().fromJson(e3, t3);
      }
      static fromJsonString(e3, t3) {
        return new l2().fromJsonString(e3, t3);
      }
      static equals(e3, t3) {
        return s2.proto3.util.equals(l2, e3, t3);
      }
    }
    t2.Method = l2, l2.runtime = s2.proto3, l2.typeName = "google.protobuf.Method", l2.fields = s2.proto3.util.newFieldList(() => [{ no: 1, name: "name", kind: "scalar", T: 9 }, { no: 2, name: "request_type_url", kind: "scalar", T: 9 }, { no: 3, name: "request_streaming", kind: "scalar", T: 8 }, { no: 4, name: "response_type_url", kind: "scalar", T: 9 }, { no: 5, name: "response_streaming", kind: "scalar", T: 8 }, { no: 6, name: "options", kind: "message", T: o2.Option, repeated: true }, { no: 7, name: "syntax", kind: "enum", T: s2.proto3.getEnumType(o2.Syntax) }]);
    class u2 extends r2.Message {
      constructor(e3) {
        super(), this.name = "", this.root = "", s2.proto3.util.initPartial(e3, this);
      }
      static fromBinary(e3, t3) {
        return new u2().fromBinary(e3, t3);
      }
      static fromJson(e3, t3) {
        return new u2().fromJson(e3, t3);
      }
      static fromJsonString(e3, t3) {
        return new u2().fromJsonString(e3, t3);
      }
      static equals(e3, t3) {
        return s2.proto3.util.equals(u2, e3, t3);
      }
    }
    t2.Mixin = u2, u2.runtime = s2.proto3, u2.typeName = "google.protobuf.Mixin", u2.fields = s2.proto3.util.newFieldList(() => [{ no: 1, name: "name", kind: "scalar", T: 9 }, { no: 2, name: "root", kind: "scalar", T: 9 }]);
  }
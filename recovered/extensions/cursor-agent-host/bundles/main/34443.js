// @recovered-by cursor-re
// artifact: app/extensions/cursor-agent-host/dist/main.js sha256:9d478dff35f72f6b3ed85b33f2c4a15c12b41b4e3d42247ecc8ce4981e9308bb
// module: 34443 range:6621226..6624529
// basis: webpack-id confidence: C
// method: split
// run: ext-p0 2026-11-05T10:07:22.069Z
34443: (e, t, r) => {
    "use strict";
    Object.defineProperty(t, "__esModule", { value: true }), t.Mixin = t.Method = t.Api = void 0;
    const n = r(24193), s = r(73469), o = r(77206), i = r(27599);
    class a extends n.Message {
      constructor(e2) {
        super(), this.name = "", this.methods = [], this.options = [], this.version = "", this.mixins = [], this.syntax = s.Syntax.PROTO2, i.proto3.util.initPartial(e2, this);
      }
      static fromBinary(e2, t2) {
        return new a().fromBinary(e2, t2);
      }
      static fromJson(e2, t2) {
        return new a().fromJson(e2, t2);
      }
      static fromJsonString(e2, t2) {
        return new a().fromJsonString(e2, t2);
      }
      static equals(e2, t2) {
        return i.proto3.util.equals(a, e2, t2);
      }
    }
    t.Api = a, a.runtime = i.proto3, a.typeName = "google.protobuf.Api", a.fields = i.proto3.util.newFieldList(() => [{ no: 1, name: "name", kind: "scalar", T: 9 }, { no: 2, name: "methods", kind: "message", T: c, repeated: true }, { no: 3, name: "options", kind: "message", T: s.Option, repeated: true }, { no: 4, name: "version", kind: "scalar", T: 9 }, { no: 5, name: "source_context", kind: "message", T: o.SourceContext }, { no: 6, name: "mixins", kind: "message", T: l, repeated: true }, { no: 7, name: "syntax", kind: "enum", T: i.proto3.getEnumType(s.Syntax) }]);
    class c extends n.Message {
      constructor(e2) {
        super(), this.name = "", this.requestTypeUrl = "", this.requestStreaming = false, this.responseTypeUrl = "", this.responseStreaming = false, this.options = [], this.syntax = s.Syntax.PROTO2, i.proto3.util.initPartial(e2, this);
      }
      static fromBinary(e2, t2) {
        return new c().fromBinary(e2, t2);
      }
      static fromJson(e2, t2) {
        return new c().fromJson(e2, t2);
      }
      static fromJsonString(e2, t2) {
        return new c().fromJsonString(e2, t2);
      }
      static equals(e2, t2) {
        return i.proto3.util.equals(c, e2, t2);
      }
    }
    t.Method = c, c.runtime = i.proto3, c.typeName = "google.protobuf.Method", c.fields = i.proto3.util.newFieldList(() => [{ no: 1, name: "name", kind: "scalar", T: 9 }, { no: 2, name: "request_type_url", kind: "scalar", T: 9 }, { no: 3, name: "request_streaming", kind: "scalar", T: 8 }, { no: 4, name: "response_type_url", kind: "scalar", T: 9 }, { no: 5, name: "response_streaming", kind: "scalar", T: 8 }, { no: 6, name: "options", kind: "message", T: s.Option, repeated: true }, { no: 7, name: "syntax", kind: "enum", T: i.proto3.getEnumType(s.Syntax) }]);
    class l extends n.Message {
      constructor(e2) {
        super(), this.name = "", this.root = "", i.proto3.util.initPartial(e2, this);
      }
      static fromBinary(e2, t2) {
        return new l().fromBinary(e2, t2);
      }
      static fromJson(e2, t2) {
        return new l().fromJson(e2, t2);
      }
      static fromJsonString(e2, t2) {
        return new l().fromJsonString(e2, t2);
      }
      static equals(e2, t2) {
        return i.proto3.util.equals(l, e2, t2);
      }
    }
    t.Mixin = l, l.runtime = i.proto3, l.typeName = "google.protobuf.Mixin", l.fields = i.proto3.util.newFieldList(() => [{ no: 1, name: "name", kind: "scalar", T: 9 }, { no: 2, name: "root", kind: "scalar", T: 9 }]);
  }
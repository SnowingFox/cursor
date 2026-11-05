// @recovered-by cursor-re
// artifact: app/extensions/cursor-shadow-workspace/dist/extension.js sha256:19218949e5ecc64e4c1b41e194ba40abfd54a9aeb034a14f90c71485b7f84585
// module: 4443 range:397176..400501
// basis: webpack-id confidence: C
// method: split
// run: ext-agent 2026-11-05T10:20:08.356Z
4443: (e2, A2, t2) => {
    "use strict";
    Object.defineProperty(A2, "__esModule", { value: true }), A2.Mixin = A2.Method = A2.Api = void 0;
    const n2 = t2(4193), r2 = t2(3469), o2 = t2(7206), s = t2(7599);
    class a extends n2.Message {
      constructor(e3) {
        super(), this.name = "", this.methods = [], this.options = [], this.version = "", this.mixins = [], this.syntax = r2.Syntax.PROTO2, s.proto3.util.initPartial(e3, this);
      }
      static fromBinary(e3, A3) {
        return new a().fromBinary(e3, A3);
      }
      static fromJson(e3, A3) {
        return new a().fromJson(e3, A3);
      }
      static fromJsonString(e3, A3) {
        return new a().fromJsonString(e3, A3);
      }
      static equals(e3, A3) {
        return s.proto3.util.equals(a, e3, A3);
      }
    }
    A2.Api = a, a.runtime = s.proto3, a.typeName = "google.protobuf.Api", a.fields = s.proto3.util.newFieldList(() => [{ no: 1, name: "name", kind: "scalar", T: 9 }, { no: 2, name: "methods", kind: "message", T: i, repeated: true }, { no: 3, name: "options", kind: "message", T: r2.Option, repeated: true }, { no: 4, name: "version", kind: "scalar", T: 9 }, { no: 5, name: "source_context", kind: "message", T: o2.SourceContext }, { no: 6, name: "mixins", kind: "message", T: c, repeated: true }, { no: 7, name: "syntax", kind: "enum", T: s.proto3.getEnumType(r2.Syntax) }]);
    class i extends n2.Message {
      constructor(e3) {
        super(), this.name = "", this.requestTypeUrl = "", this.requestStreaming = false, this.responseTypeUrl = "", this.responseStreaming = false, this.options = [], this.syntax = r2.Syntax.PROTO2, s.proto3.util.initPartial(e3, this);
      }
      static fromBinary(e3, A3) {
        return new i().fromBinary(e3, A3);
      }
      static fromJson(e3, A3) {
        return new i().fromJson(e3, A3);
      }
      static fromJsonString(e3, A3) {
        return new i().fromJsonString(e3, A3);
      }
      static equals(e3, A3) {
        return s.proto3.util.equals(i, e3, A3);
      }
    }
    A2.Method = i, i.runtime = s.proto3, i.typeName = "google.protobuf.Method", i.fields = s.proto3.util.newFieldList(() => [{ no: 1, name: "name", kind: "scalar", T: 9 }, { no: 2, name: "request_type_url", kind: "scalar", T: 9 }, { no: 3, name: "request_streaming", kind: "scalar", T: 8 }, { no: 4, name: "response_type_url", kind: "scalar", T: 9 }, { no: 5, name: "response_streaming", kind: "scalar", T: 8 }, { no: 6, name: "options", kind: "message", T: r2.Option, repeated: true }, { no: 7, name: "syntax", kind: "enum", T: s.proto3.getEnumType(r2.Syntax) }]);
    class c extends n2.Message {
      constructor(e3) {
        super(), this.name = "", this.root = "", s.proto3.util.initPartial(e3, this);
      }
      static fromBinary(e3, A3) {
        return new c().fromBinary(e3, A3);
      }
      static fromJson(e3, A3) {
        return new c().fromJson(e3, A3);
      }
      static fromJsonString(e3, A3) {
        return new c().fromJsonString(e3, A3);
      }
      static equals(e3, A3) {
        return s.proto3.util.equals(c, e3, A3);
      }
    }
    A2.Mixin = c, c.runtime = s.proto3, c.typeName = "google.protobuf.Mixin", c.fields = s.proto3.util.newFieldList(() => [{ no: 1, name: "name", kind: "scalar", T: 9 }, { no: 2, name: "root", kind: "scalar", T: 9 }]);
  }
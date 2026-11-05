// @recovered-by cursor-re
// artifact: app/extensions/cursor-computer-use/dist/extension.js sha256:2e37990c917916e7e5b3d1524e03cf61b1cf38ddc56b1e51014a1275aa4568a6
// module: 4443 range:404597..407922
// basis: webpack-id confidence: C
// method: split
// run: ext-p0 2026-11-05T10:07:22.069Z
4443: (e2, n2, t2) => {
    "use strict";
    Object.defineProperty(n2, "__esModule", { value: true }), n2.Mixin = n2.Method = n2.Api = void 0;
    const a2 = t2(4193), s2 = t2(3469), o2 = t2(7206), r = t2(7599);
    class i extends a2.Message {
      constructor(e3) {
        super(), this.name = "", this.methods = [], this.options = [], this.version = "", this.mixins = [], this.syntax = s2.Syntax.PROTO2, r.proto3.util.initPartial(e3, this);
      }
      static fromBinary(e3, n3) {
        return new i().fromBinary(e3, n3);
      }
      static fromJson(e3, n3) {
        return new i().fromJson(e3, n3);
      }
      static fromJsonString(e3, n3) {
        return new i().fromJsonString(e3, n3);
      }
      static equals(e3, n3) {
        return r.proto3.util.equals(i, e3, n3);
      }
    }
    n2.Api = i, i.runtime = r.proto3, i.typeName = "google.protobuf.Api", i.fields = r.proto3.util.newFieldList(() => [{ no: 1, name: "name", kind: "scalar", T: 9 }, { no: 2, name: "methods", kind: "message", T: A, repeated: true }, { no: 3, name: "options", kind: "message", T: s2.Option, repeated: true }, { no: 4, name: "version", kind: "scalar", T: 9 }, { no: 5, name: "source_context", kind: "message", T: o2.SourceContext }, { no: 6, name: "mixins", kind: "message", T: c, repeated: true }, { no: 7, name: "syntax", kind: "enum", T: r.proto3.getEnumType(s2.Syntax) }]);
    class A extends a2.Message {
      constructor(e3) {
        super(), this.name = "", this.requestTypeUrl = "", this.requestStreaming = false, this.responseTypeUrl = "", this.responseStreaming = false, this.options = [], this.syntax = s2.Syntax.PROTO2, r.proto3.util.initPartial(e3, this);
      }
      static fromBinary(e3, n3) {
        return new A().fromBinary(e3, n3);
      }
      static fromJson(e3, n3) {
        return new A().fromJson(e3, n3);
      }
      static fromJsonString(e3, n3) {
        return new A().fromJsonString(e3, n3);
      }
      static equals(e3, n3) {
        return r.proto3.util.equals(A, e3, n3);
      }
    }
    n2.Method = A, A.runtime = r.proto3, A.typeName = "google.protobuf.Method", A.fields = r.proto3.util.newFieldList(() => [{ no: 1, name: "name", kind: "scalar", T: 9 }, { no: 2, name: "request_type_url", kind: "scalar", T: 9 }, { no: 3, name: "request_streaming", kind: "scalar", T: 8 }, { no: 4, name: "response_type_url", kind: "scalar", T: 9 }, { no: 5, name: "response_streaming", kind: "scalar", T: 8 }, { no: 6, name: "options", kind: "message", T: s2.Option, repeated: true }, { no: 7, name: "syntax", kind: "enum", T: r.proto3.getEnumType(s2.Syntax) }]);
    class c extends a2.Message {
      constructor(e3) {
        super(), this.name = "", this.root = "", r.proto3.util.initPartial(e3, this);
      }
      static fromBinary(e3, n3) {
        return new c().fromBinary(e3, n3);
      }
      static fromJson(e3, n3) {
        return new c().fromJson(e3, n3);
      }
      static fromJsonString(e3, n3) {
        return new c().fromJsonString(e3, n3);
      }
      static equals(e3, n3) {
        return r.proto3.util.equals(c, e3, n3);
      }
    }
    n2.Mixin = c, c.runtime = r.proto3, c.typeName = "google.protobuf.Mixin", c.fields = r.proto3.util.newFieldList(() => [{ no: 1, name: "name", kind: "scalar", T: 9 }, { no: 2, name: "root", kind: "scalar", T: 9 }]);
  }
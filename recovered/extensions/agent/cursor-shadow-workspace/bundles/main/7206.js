// @recovered-by cursor-re
// artifact: app/extensions/cursor-shadow-workspace/dist/extension.js sha256:19218949e5ecc64e4c1b41e194ba40abfd54a9aeb034a14f90c71485b7f84585
// module: 7206 range:536235..537105
// basis: webpack-id confidence: C
// method: split
// run: ext-agent 2026-11-05T10:20:08.356Z
7206: (e2, A2, t2) => {
    "use strict";
    Object.defineProperty(A2, "__esModule", { value: true }), A2.SourceContext = void 0;
    const n2 = t2(4193), r2 = t2(7599);
    class o2 extends n2.Message {
      constructor(e3) {
        super(), this.fileName = "", r2.proto3.util.initPartial(e3, this);
      }
      static fromBinary(e3, A3) {
        return new o2().fromBinary(e3, A3);
      }
      static fromJson(e3, A3) {
        return new o2().fromJson(e3, A3);
      }
      static fromJsonString(e3, A3) {
        return new o2().fromJsonString(e3, A3);
      }
      static equals(e3, A3) {
        return r2.proto3.util.equals(o2, e3, A3);
      }
    }
    A2.SourceContext = o2, o2.runtime = r2.proto3, o2.typeName = "google.protobuf.SourceContext", o2.fields = r2.proto3.util.newFieldList(() => [{ no: 1, name: "file_name", kind: "scalar", T: 9 }]);
  }
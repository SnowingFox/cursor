// @recovered-by cursor-re
// artifact: app/extensions/cursor-computer-use/dist/extension.js sha256:2e37990c917916e7e5b3d1524e03cf61b1cf38ddc56b1e51014a1275aa4568a6
// module: 7206 range:567561..568431
// basis: webpack-id confidence: C
// method: split
// run: ext-p0 2026-11-05T10:07:22.069Z
7206: (e2, n2, t2) => {
    "use strict";
    Object.defineProperty(n2, "__esModule", { value: true }), n2.SourceContext = void 0;
    const a2 = t2(4193), s2 = t2(7599);
    class o2 extends a2.Message {
      constructor(e3) {
        super(), this.fileName = "", s2.proto3.util.initPartial(e3, this);
      }
      static fromBinary(e3, n3) {
        return new o2().fromBinary(e3, n3);
      }
      static fromJson(e3, n3) {
        return new o2().fromJson(e3, n3);
      }
      static fromJsonString(e3, n3) {
        return new o2().fromJsonString(e3, n3);
      }
      static equals(e3, n3) {
        return s2.proto3.util.equals(o2, e3, n3);
      }
    }
    n2.SourceContext = o2, o2.runtime = s2.proto3, o2.typeName = "google.protobuf.SourceContext", o2.fields = s2.proto3.util.newFieldList(() => [{ no: 1, name: "file_name", kind: "scalar", T: 9 }]);
  }
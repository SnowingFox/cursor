// @recovered-by cursor-re
// artifact: app/extensions/cursor-retrieval/dist/main.js sha256:50c717cc16d67dfb571db8461d6630caeb8e421ad0090d156086d1a3d53b1b2b
// module: 7206 range:857896..858766
// basis: webpack-id confidence: C
// method: split
// run: ext-agent 2026-11-05T10:20:08.356Z
7206: (e2, a2, n2) => {
    "use strict";
    Object.defineProperty(a2, "__esModule", { value: true }), a2.SourceContext = void 0;
    const t2 = n2(4193), s2 = n2(7599);
    class o2 extends t2.Message {
      constructor(e3) {
        super(), this.fileName = "", s2.proto3.util.initPartial(e3, this);
      }
      static fromBinary(e3, a3) {
        return new o2().fromBinary(e3, a3);
      }
      static fromJson(e3, a3) {
        return new o2().fromJson(e3, a3);
      }
      static fromJsonString(e3, a3) {
        return new o2().fromJsonString(e3, a3);
      }
      static equals(e3, a3) {
        return s2.proto3.util.equals(o2, e3, a3);
      }
    }
    a2.SourceContext = o2, o2.runtime = s2.proto3, o2.typeName = "google.protobuf.SourceContext", o2.fields = s2.proto3.util.newFieldList(() => [{ no: 1, name: "file_name", kind: "scalar", T: 9 }]);
  }
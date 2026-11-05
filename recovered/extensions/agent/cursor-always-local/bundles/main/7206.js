// @recovered-by cursor-re
// artifact: app/extensions/cursor-always-local/dist/main.js sha256:14fb2d0e360d81a024b4ec605f417e030e19b30b2df99bc45648aa227060534e
// module: 7206 range:4220317..4221187
// basis: webpack-id confidence: C
// method: split
// run: ext-agent 2026-11-05T10:20:08.356Z
7206: (t2, e2, r2) => {
    "use strict";
    Object.defineProperty(e2, "__esModule", { value: true }), e2.SourceContext = void 0;
    const n2 = r2(4193), s2 = r2(7599);
    class i2 extends n2.Message {
      constructor(t3) {
        super(), this.fileName = "", s2.proto3.util.initPartial(t3, this);
      }
      static fromBinary(t3, e3) {
        return new i2().fromBinary(t3, e3);
      }
      static fromJson(t3, e3) {
        return new i2().fromJson(t3, e3);
      }
      static fromJsonString(t3, e3) {
        return new i2().fromJsonString(t3, e3);
      }
      static equals(t3, e3) {
        return s2.proto3.util.equals(i2, t3, e3);
      }
    }
    e2.SourceContext = i2, i2.runtime = s2.proto3, i2.typeName = "google.protobuf.SourceContext", i2.fields = s2.proto3.util.newFieldList(() => [{ no: 1, name: "file_name", kind: "scalar", T: 9 }]);
  }
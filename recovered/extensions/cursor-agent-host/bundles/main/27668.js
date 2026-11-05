// @recovered-by cursor-re
// artifact: app/extensions/cursor-agent-host/dist/main.js sha256:9d478dff35f72f6b3ed85b33f2c4a15c12b41b4e3d42247ecc8ce4981e9308bb
// module: 27668 range:4828826..4829581
// basis: webpack-id confidence: C
// method: split
// run: ext-p0 2026-11-05T10:07:22.069Z
27668: (e, t, r) => {
    "use strict";
    Object.defineProperty(t, "__esModule", { value: true }), t.Empty = void 0;
    const n = r(24193), s = r(27599);
    class o extends n.Message {
      constructor(e2) {
        super(), s.proto3.util.initPartial(e2, this);
      }
      static fromBinary(e2, t2) {
        return new o().fromBinary(e2, t2);
      }
      static fromJson(e2, t2) {
        return new o().fromJson(e2, t2);
      }
      static fromJsonString(e2, t2) {
        return new o().fromJsonString(e2, t2);
      }
      static equals(e2, t2) {
        return s.proto3.util.equals(o, e2, t2);
      }
    }
    t.Empty = o, o.runtime = s.proto3, o.typeName = "google.protobuf.Empty", o.fields = s.proto3.util.newFieldList(() => []);
  }
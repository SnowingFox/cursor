// @recovered-by cursor-re
// artifact: app/extensions/cursor-local-agent-runtime/dist/main.js sha256:be87ea0ed3ac86375ab8e5f92c4261df0ccfc61ff24b07420f9c88a78ae2cfd0
// module: 27668 range:896291..897046
// basis: webpack-id confidence: C
// method: split
// run: ext-p0 2026-11-05T10:07:22.069Z
27668: (e, t, r) => {
    "use strict";
    Object.defineProperty(t, "__esModule", { value: true }), t.Empty = void 0;
    const n = r(24193), o = r(27599);
    class s extends n.Message {
      constructor(e2) {
        super(), o.proto3.util.initPartial(e2, this);
      }
      static fromBinary(e2, t2) {
        return new s().fromBinary(e2, t2);
      }
      static fromJson(e2, t2) {
        return new s().fromJson(e2, t2);
      }
      static fromJsonString(e2, t2) {
        return new s().fromJsonString(e2, t2);
      }
      static equals(e2, t2) {
        return o.proto3.util.equals(s, e2, t2);
      }
    }
    t.Empty = s, s.runtime = o.proto3, s.typeName = "google.protobuf.Empty", s.fields = o.proto3.util.newFieldList(() => []);
  }
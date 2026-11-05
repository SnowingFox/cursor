// @recovered-by cursor-re
// artifact: app/extensions/cursor-commits/dist/main.js sha256:093f8518d2bba92ce25a152b40a9e7490ef35d5b45f1477f49078295148101b9
// module: 7668 range:586253..587029
// basis: webpack-id confidence: C
// method: split
// run: ext-agent 2026-11-05T10:20:08.356Z
7668: (e2, n2, a2) => {
    "use strict";
    Object.defineProperty(n2, "__esModule", { value: true }), n2.Empty = void 0;
    const t2 = a2(4193), s2 = a2(7599);
    class o2 extends t2.Message {
      constructor(e3) {
        super(), s2.proto3.util.initPartial(e3, this);
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
    n2.Empty = o2, o2.runtime = s2.proto3, o2.typeName = "google.protobuf.Empty", o2.fields = s2.proto3.util.newFieldList(() => []);
  }
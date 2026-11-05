// @recovered-by cursor-re
// artifact: app/extensions/cursor-deeplink/dist/main.js sha256:2b0091d260814e411af8319789fee5fe8b4b75d7c27c85b905f80c4d53d995f3
// module: 7668 range:717491..718267
// basis: webpack-id confidence: C
// method: split
// run: ext-agent 2026-11-05T10:20:08.356Z
7668: (e2, t2, A2) => {
    "use strict";
    Object.defineProperty(t2, "__esModule", { value: true }), t2.Empty = void 0;
    const n2 = A2(4193), r2 = A2(7599);
    class o2 extends n2.Message {
      constructor(e3) {
        super(), r2.proto3.util.initPartial(e3, this);
      }
      static fromBinary(e3, t3) {
        return new o2().fromBinary(e3, t3);
      }
      static fromJson(e3, t3) {
        return new o2().fromJson(e3, t3);
      }
      static fromJsonString(e3, t3) {
        return new o2().fromJsonString(e3, t3);
      }
      static equals(e3, t3) {
        return r2.proto3.util.equals(o2, e3, t3);
      }
    }
    t2.Empty = o2, o2.runtime = r2.proto3, o2.typeName = "google.protobuf.Empty", o2.fields = r2.proto3.util.newFieldList(() => []);
  }
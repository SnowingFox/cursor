// @recovered-by cursor-re
// artifact: app/extensions/cursor-resolver-helper/dist/main.js sha256:0eb6078f0829c93d9374e39385fef22eabf7657a05c3cdf5bf316d9dbcf5ad0e
// module: 668 range:172786..173541
// basis: webpack-id confidence: C
// method: split
// run: ext-agent 2026-11-05T10:20:08.356Z
668: (e2, a2, n2) => {
    Object.defineProperty(a2, "__esModule", { value: true }), a2.Empty = void 0;
    const o2 = n2(193), s2 = n2(599);
    class t2 extends o2.Message {
      constructor(e3) {
        super(), s2.proto3.util.initPartial(e3, this);
      }
      static fromBinary(e3, a3) {
        return new t2().fromBinary(e3, a3);
      }
      static fromJson(e3, a3) {
        return new t2().fromJson(e3, a3);
      }
      static fromJsonString(e3, a3) {
        return new t2().fromJsonString(e3, a3);
      }
      static equals(e3, a3) {
        return s2.proto3.util.equals(t2, e3, a3);
      }
    }
    a2.Empty = t2, t2.runtime = s2.proto3, t2.typeName = "google.protobuf.Empty", t2.fields = s2.proto3.util.newFieldList(() => []);
  }
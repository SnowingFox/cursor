// @recovered-by cursor-re
// artifact: app/extensions/cursor-resolver-helper/dist/main.js sha256:0eb6078f0829c93d9374e39385fef22eabf7657a05c3cdf5bf316d9dbcf5ad0e
// module: 206 range:58981..59830
// basis: webpack-id confidence: C
// method: split
// run: ext-agent 2026-11-05T10:20:08.356Z
206: (e2, a2, n2) => {
    Object.defineProperty(a2, "__esModule", { value: true }), a2.SourceContext = void 0;
    const o2 = n2(193), s2 = n2(599);
    class t2 extends o2.Message {
      constructor(e3) {
        super(), this.fileName = "", s2.proto3.util.initPartial(e3, this);
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
    a2.SourceContext = t2, t2.runtime = s2.proto3, t2.typeName = "google.protobuf.SourceContext", t2.fields = s2.proto3.util.newFieldList(() => [{ no: 1, name: "file_name", kind: "scalar", T: 9 }]);
  }
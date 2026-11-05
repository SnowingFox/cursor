// @recovered-by cursor-re
// artifact: app/extensions/cursor-resolver/dist/main.js sha256:677b774c75dfff0de56084737d26169857daed3731cb62a6702840900f439aed
// module: 668 range:172786..173541
// basis: webpack-id confidence: C
// method: split
// run: ext-p0 2026-11-05T10:07:22.069Z
668: (e2, t2, n2) => {
    Object.defineProperty(t2, "__esModule", { value: true }), t2.Empty = void 0;
    const r2 = n2(193), o2 = n2(599);
    class a2 extends r2.Message {
      constructor(e3) {
        super(), o2.proto3.util.initPartial(e3, this);
      }
      static fromBinary(e3, t3) {
        return new a2().fromBinary(e3, t3);
      }
      static fromJson(e3, t3) {
        return new a2().fromJson(e3, t3);
      }
      static fromJsonString(e3, t3) {
        return new a2().fromJsonString(e3, t3);
      }
      static equals(e3, t3) {
        return o2.proto3.util.equals(a2, e3, t3);
      }
    }
    t2.Empty = a2, a2.runtime = o2.proto3, a2.typeName = "google.protobuf.Empty", a2.fields = o2.proto3.util.newFieldList(() => []);
  }
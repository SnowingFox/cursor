// @recovered-by cursor-re
// artifact: app/extensions/cursor-mcp/dist/main.js sha256:097aeef3cf1f927e9bc6c0d23972c432bbcae8dc0ea353a5b6308dd59620fb49
// module: 7206 range:604385..605255
// basis: webpack-id confidence: C
// method: split
// run: ext-p0 2026-11-05T10:07:22.069Z
7206: (e2, t2, r2) => {
    "use strict";
    Object.defineProperty(t2, "__esModule", { value: true }), t2.SourceContext = void 0;
    const n2 = r2(4193), o2 = r2(7599);
    class s2 extends n2.Message {
      constructor(e3) {
        super(), this.fileName = "", o2.proto3.util.initPartial(e3, this);
      }
      static fromBinary(e3, t3) {
        return new s2().fromBinary(e3, t3);
      }
      static fromJson(e3, t3) {
        return new s2().fromJson(e3, t3);
      }
      static fromJsonString(e3, t3) {
        return new s2().fromJsonString(e3, t3);
      }
      static equals(e3, t3) {
        return o2.proto3.util.equals(s2, e3, t3);
      }
    }
    t2.SourceContext = s2, s2.runtime = o2.proto3, s2.typeName = "google.protobuf.SourceContext", s2.fields = o2.proto3.util.newFieldList(() => [{ no: 1, name: "file_name", kind: "scalar", T: 9 }]);
  }
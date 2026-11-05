// @recovered-by cursor-re
// artifact: app/extensions/cursor-agent-worker/dist/main.js sha256:d5af94b4e40f694b81a675a0fb00fa8d060306ca064a011e953218d005b613d5
// module: 7206 range:216620..217514
// basis: webpack-id confidence: C
// method: split
// run: ext-agent 2026-11-05T10:20:08.356Z
7206: (e10, a10, n10) => {
    Object.defineProperty(a10, "__esModule", { value: true }), a10.SourceContext = void 0;
    const s10 = n10(4193), o10 = n10(7599);
    class r10 extends s10.Message {
      constructor(e11) {
        super(), this.fileName = "", o10.proto3.util.initPartial(e11, this);
      }
      static fromBinary(e11, a11) {
        return new r10().fromBinary(e11, a11);
      }
      static fromJson(e11, a11) {
        return new r10().fromJson(e11, a11);
      }
      static fromJsonString(e11, a11) {
        return new r10().fromJsonString(e11, a11);
      }
      static equals(e11, a11) {
        return o10.proto3.util.equals(r10, e11, a11);
      }
    }
    a10.SourceContext = r10, r10.runtime = o10.proto3, r10.typeName = "google.protobuf.SourceContext", r10.fields = o10.proto3.util.newFieldList(() => [{ no: 1, name: "file_name", kind: "scalar", T: 9 }]);
  }
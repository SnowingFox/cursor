// @recovered-by cursor-re
// artifact: app/extensions/cursor-agent-host/dist/main.js sha256:9d478dff35f72f6b3ed85b33f2c4a15c12b41b4e3d42247ecc8ce4981e9308bb
// module: 38036 range:7399210..7400361
// basis: webpack-id confidence: C
// method: split
// run: ext-p0 2026-11-05T10:07:22.069Z
38036: (e, t, r) => {
    "use strict";
    r.d(t, { d: () => i });
    var n = r(36038), s = r(8592);
    class o extends s.HL {
      static get runtime() {
        return (0, s.kU)(this, "runtime", n.proto3);
      }
      static $p() {
        return "agent.v1.";
      }
    }
    class i extends o {
      constructor(e2) {
        super(), this.truncated = false, this.truncatedBy = "", this.totalLines = 0, this.outputLines = 0, this.outputBytes = 0, this.firstLineExceedsLimit = false, this.lastLinePartial = false, n.proto3.util.initPartial(e2, this);
      }
      static fromBinary(e2, t2) {
        return new i().fromBinary(e2, t2);
      }
      static fromJson(e2, t2) {
        return new i().fromJson(e2, t2);
      }
      static fromJsonString(e2, t2) {
        return new i().fromJsonString(e2, t2);
      }
      static equals(e2, t2) {
        return n.proto3.util.equals(i, e2, t2);
      }
      static $() {
        return ["PiTruncation|1 truncated 8|2 truncated_by 9|3 total_lines 13|4 output_lines 13|5 output_bytes 13|6 max_lines 13?|7 max_bytes 13?|8 first_line_exceeds_limit 8|9 last_line_partial 8"];
      }
    }
  }
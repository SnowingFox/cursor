// @recovered-by cursor-re
// artifact: app/extensions/cursor-always-local/dist/main.js sha256:14fb2d0e360d81a024b4ec605f417e030e19b30b2df99bc45648aa227060534e
// module: 8036 range:4719428..4720599
// basis: webpack-id confidence: C
// method: split
// run: ext-agent 2026-11-05T10:20:08.356Z
8036: (t2, e2, r2) => {
    "use strict";
    r2.d(e2, { d: () => o2 });
    var n2 = r2(6038), s2 = r2(8592);
    class i2 extends s2.HL {
      static get runtime() {
        return (0, s2.kU)(this, "runtime", n2.proto3);
      }
      static $p() {
        return "agent.v1.";
      }
    }
    class o2 extends i2 {
      constructor(t3) {
        super(), this.truncated = false, this.truncatedBy = "", this.totalLines = 0, this.outputLines = 0, this.outputBytes = 0, this.firstLineExceedsLimit = false, this.lastLinePartial = false, n2.proto3.util.initPartial(t3, this);
      }
      static fromBinary(t3, e3) {
        return new o2().fromBinary(t3, e3);
      }
      static fromJson(t3, e3) {
        return new o2().fromJson(t3, e3);
      }
      static fromJsonString(t3, e3) {
        return new o2().fromJsonString(t3, e3);
      }
      static equals(t3, e3) {
        return n2.proto3.util.equals(o2, t3, e3);
      }
      static $() {
        return ["PiTruncation|1 truncated 8|2 truncated_by 9|3 total_lines 13|4 output_lines 13|5 output_bytes 13|6 max_lines 13?|7 max_bytes 13?|8 first_line_exceeds_limit 8|9 last_line_partial 8"];
      }
    }
  }
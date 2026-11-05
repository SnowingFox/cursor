// @recovered-by cursor-re
// artifact: app/extensions/cursor-always-local/dist/main.js sha256:14fb2d0e360d81a024b4ec605f417e030e19b30b2df99bc45648aa227060534e
// module: 1934 range:643376..647320
// basis: webpack-id confidence: C
// method: split
// run: ext-agent 2026-11-05T10:20:08.356Z
1934: (t2, e2, r2) => {
    "use strict";
    r2.d(e2, { Cr: () => u, Fl: () => c, HC: () => m, gl: () => l });
    var n2 = r2(6038), s2 = r2(7918), i2 = r2(8592);
    const o2 = "aiserver.v1.";
    class a extends i2.HL {
      static get runtime() {
        return (0, i2.kU)(this, "runtime", n2.proto3);
      }
      static $p() {
        return o2;
      }
    }
    n2.proto3, n2.proto3, n2.proto3;
    class u extends a {
      constructor(t3) {
        super(), this.file = "", this.startLine = 0, this.endLine = 0, this.codeLines = [], n2.proto3.util.initPartial(t3, this);
      }
      static fromBinary(t3, e3) {
        return new u().fromBinary(t3, e3);
      }
      static fromJson(t3, e3) {
        return new u().fromJson(t3, e3);
      }
      static fromJsonString(t3, e3) {
        return new u().fromJsonString(t3, e3);
      }
      static equals(t3, e3) {
        return n2.proto3.util.equals(u, t3, e3);
      }
      static $() {
        return ["BugLocation|1 file 9|2 start_line 5|3 end_line 5|4 code_lines 9*"];
      }
    }
    class c extends a {
      constructor(t3) {
        super(), this.locations = [], this.id = "", this.description = "", n2.proto3.util.initPartial(t3, this);
      }
      static fromBinary(t3, e3) {
        return new c().fromBinary(t3, e3);
      }
      static fromJson(t3, e3) {
        return new c().fromJson(t3, e3);
      }
      static fromJsonString(t3, e3) {
        return new c().fromJsonString(t3, e3);
      }
      static equals(t3, e3) {
        return n2.proto3.util.equals(c, t3, e3);
      }
      static $() {
        return ["BugReport|1 locations #0*|2 id 9|3 description 9|4 confidence 2?|5 category 9?|6 severity 9?|7 title 9?|9 rationale 9?|10 triggered_by_rule_id 9?|11 model_confidence 2?", u];
      }
    }
    class l extends a {
      constructor(t3) {
        super(), this.bugReports = [], n2.proto3.util.initPartial(t3, this);
      }
      static fromBinary(t3, e3) {
        return new l().fromBinary(t3, e3);
      }
      static fromJson(t3, e3) {
        return new l().fromJson(t3, e3);
      }
      static fromJsonString(t3, e3) {
        return new l().fromJsonString(t3, e3);
      }
      static equals(t3, e3) {
        return n2.proto3.util.equals(l, t3, e3);
      }
      static $() {
        return ["BugReports|1 bug_reports #0*", c];
      }
    }
    class m extends a {
      constructor(t3) {
        super(), this.contextFiles = [], this.inBackgroundSubsidized = false, this.hasTelemetry = false, n2.proto3.util.initPartial(t3, this);
      }
      static fromBinary(t3, e3) {
        return new m().fromBinary(t3, e3);
      }
      static fromJson(t3, e3) {
        return new m().fromJson(t3, e3);
      }
      static fromJsonString(t3, e3) {
        return new m().fromJsonString(t3, e3);
      }
      static equals(t3, e3) {
        return n2.proto3.util.equals(m, t3, e3);
      }
      static $() {
        return ["StreamBugBotRequest|1 git_diff #0|13 context_files #1*|2 model_details #2|3 user_instructions 9?|4 bug_detection_guidelines 9?|5 iterations 5?|12 unified_context_lines 5?|6 in_background_subsidized 8|7 session_id 9?|8 price_id 9?|9 has_telemetry 8|10 constrain_to_file 9?|11 constrain_to_range #3?|14 deep_review 8?", s2.GitDiff, s2.CodeBlock, s2.ModelDetails, d];
      }
    }
    class d extends a {
      constructor(t3) {
        super(), this.startLine = 0, this.endLineInclusive = 0, n2.proto3.util.initPartial(t3, this);
      }
      static fromBinary(t3, e3) {
        return new d().fromBinary(t3, e3);
      }
      static fromJson(t3, e3) {
        return new d().fromJson(t3, e3);
      }
      static fromJsonString(t3, e3) {
        return new d().fromJsonString(t3, e3);
      }
      static equals(t3, e3) {
        return n2.proto3.util.equals(d, t3, e3);
      }
      static $() {
        return ["StreamBugBotRequest.Range|1 start_line 5|2 end_line_inclusive 5"];
      }
    }
  }
// @recovered-by cursor-re
// artifact: app/extensions/cursor-agent-host/dist/main.js sha256:9d478dff35f72f6b3ed85b33f2c4a15c12b41b4e3d42247ecc8ce4981e9308bb
// module: 21934 range:4440465..4444380
// basis: webpack-id confidence: C
// method: split
// run: ext-p0 2026-11-05T10:07:22.069Z
21934: (e, t, r) => {
    "use strict";
    r.d(t, { Cr: () => c, Fl: () => l, HC: () => d, gl: () => u });
    var n = r(36038), s = r(67918), o = r(8592);
    const i = "aiserver.v1.";
    class a extends o.HL {
      static get runtime() {
        return (0, o.kU)(this, "runtime", n.proto3);
      }
      static $p() {
        return i;
      }
    }
    n.proto3, n.proto3, n.proto3;
    class c extends a {
      constructor(e2) {
        super(), this.file = "", this.startLine = 0, this.endLine = 0, this.codeLines = [], n.proto3.util.initPartial(e2, this);
      }
      static fromBinary(e2, t2) {
        return new c().fromBinary(e2, t2);
      }
      static fromJson(e2, t2) {
        return new c().fromJson(e2, t2);
      }
      static fromJsonString(e2, t2) {
        return new c().fromJsonString(e2, t2);
      }
      static equals(e2, t2) {
        return n.proto3.util.equals(c, e2, t2);
      }
      static $() {
        return ["BugLocation|1 file 9|2 start_line 5|3 end_line 5|4 code_lines 9*"];
      }
    }
    class l extends a {
      constructor(e2) {
        super(), this.locations = [], this.id = "", this.description = "", n.proto3.util.initPartial(e2, this);
      }
      static fromBinary(e2, t2) {
        return new l().fromBinary(e2, t2);
      }
      static fromJson(e2, t2) {
        return new l().fromJson(e2, t2);
      }
      static fromJsonString(e2, t2) {
        return new l().fromJsonString(e2, t2);
      }
      static equals(e2, t2) {
        return n.proto3.util.equals(l, e2, t2);
      }
      static $() {
        return ["BugReport|1 locations #0*|2 id 9|3 description 9|4 confidence 2?|5 category 9?|6 severity 9?|7 title 9?|9 rationale 9?|10 triggered_by_rule_id 9?|11 model_confidence 2?", c];
      }
    }
    class u extends a {
      constructor(e2) {
        super(), this.bugReports = [], n.proto3.util.initPartial(e2, this);
      }
      static fromBinary(e2, t2) {
        return new u().fromBinary(e2, t2);
      }
      static fromJson(e2, t2) {
        return new u().fromJson(e2, t2);
      }
      static fromJsonString(e2, t2) {
        return new u().fromJsonString(e2, t2);
      }
      static equals(e2, t2) {
        return n.proto3.util.equals(u, e2, t2);
      }
      static $() {
        return ["BugReports|1 bug_reports #0*", l];
      }
    }
    class d extends a {
      constructor(e2) {
        super(), this.contextFiles = [], this.inBackgroundSubsidized = false, this.hasTelemetry = false, n.proto3.util.initPartial(e2, this);
      }
      static fromBinary(e2, t2) {
        return new d().fromBinary(e2, t2);
      }
      static fromJson(e2, t2) {
        return new d().fromJson(e2, t2);
      }
      static fromJsonString(e2, t2) {
        return new d().fromJsonString(e2, t2);
      }
      static equals(e2, t2) {
        return n.proto3.util.equals(d, e2, t2);
      }
      static $() {
        return ["StreamBugBotRequest|1 git_diff #0|13 context_files #1*|2 model_details #2|3 user_instructions 9?|4 bug_detection_guidelines 9?|5 iterations 5?|12 unified_context_lines 5?|6 in_background_subsidized 8|7 session_id 9?|8 price_id 9?|9 has_telemetry 8|10 constrain_to_file 9?|11 constrain_to_range #3?|14 deep_review 8?", s.GitDiff, s.CodeBlock, s.ModelDetails, p];
      }
    }
    class p extends a {
      constructor(e2) {
        super(), this.startLine = 0, this.endLineInclusive = 0, n.proto3.util.initPartial(e2, this);
      }
      static fromBinary(e2, t2) {
        return new p().fromBinary(e2, t2);
      }
      static fromJson(e2, t2) {
        return new p().fromJson(e2, t2);
      }
      static fromJsonString(e2, t2) {
        return new p().fromJsonString(e2, t2);
      }
      static equals(e2, t2) {
        return n.proto3.util.equals(p, e2, t2);
      }
      static $() {
        return ["StreamBugBotRequest.Range|1 start_line 5|2 end_line_inclusive 5"];
      }
    }
  }
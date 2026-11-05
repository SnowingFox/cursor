// @recovered-by cursor-re
// artifact: app/extensions/cursor-local-agent-runtime/dist/main.js sha256:be87ea0ed3ac86375ab8e5f92c4261df0ccfc61ff24b07420f9c88a78ae2cfd0
// module: 42506 range:1273419..1277679
// basis: webpack-id confidence: C
// method: split
// run: ext-p0 2026-11-05T10:07:22.069Z
42506: (e, t, r) => {
    "use strict";
    r.d(t, { A2: () => d, D8: () => a, E8: () => u, Qc: () => l, uX: () => c, vO: () => p });
    var n = r(36038), o = r(43955), s = r(8592);
    class i extends s.HL {
      static get runtime() {
        return (0, s.kU)(this, "runtime", n.proto3);
      }
      static $p() {
        return "agent.v1.";
      }
    }
    class a extends i {
      constructor(e2) {
        super(), n.proto3.util.initPartial(e2, this);
      }
      static fromBinary(e2, t2) {
        return new a().fromBinary(e2, t2);
      }
      static fromJson(e2, t2) {
        return new a().fromJson(e2, t2);
      }
      static fromJsonString(e2, t2) {
        return new a().fromJsonString(e2, t2);
      }
      static equals(e2, t2) {
        return n.proto3.util.equals(a, e2, t2);
      }
      static $() {
        return ["ReadToolCall|1 args #0|2 result #1", l, c];
      }
    }
    class l extends i {
      constructor(e2) {
        super(), this.path = "", n.proto3.util.initPartial(e2, this);
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
        return ["ReadToolArgs|1 path 9|2 offset 5?|3 limit 5?|5 include_line_numbers 8?"];
      }
    }
    class c extends i {
      constructor(e2) {
        super(), this.result = { case: void 0 }, n.proto3.util.initPartial(e2, this);
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
        return ["ReadToolResult|1 success #0 result|2 error #1 result", d, p];
      }
    }
    class u extends i {
      constructor(e2) {
        super(), this.startLine = 0, this.endLine = 0, n.proto3.util.initPartial(e2, this);
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
        return ["ReadRange|1 start_line 13|2 end_line 13"];
      }
    }
    class d extends i {
      constructor(e2) {
        super(), this.output = { case: void 0 }, this.isEmpty = false, this.exceededLimit = false, this.totalLines = 0, this.fileSize = 0, this.path = "", this.relatedCursorRulePaths = [], this.relatedCursorRules = [], n.proto3.util.initPartial(e2, this);
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
        return ["ReadToolSuccess|1 content 9 output|6 data 12 output|9 data_blob_id 12 output|10 content_blob_id 12 output|2 is_empty 8|3 exceeded_limit 8|4 total_lines 13|5 file_size 13|7 path 9|8 read_range #0?|11 include_line_numbers 8?|12 related_cursor_rule_paths 9*|13 related_cursor_rules #1*", u, o.DX];
      }
    }
    class p extends i {
      constructor(e2) {
        super(), this.errorMessage = "", n.proto3.util.initPartial(e2, this);
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
        return ["ReadToolError|1 error_message 9"];
      }
    }
  }
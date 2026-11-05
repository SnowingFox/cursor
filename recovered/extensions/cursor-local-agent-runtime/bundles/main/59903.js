// @recovered-by cursor-re
// artifact: app/extensions/cursor-local-agent-runtime/dist/main.js sha256:be87ea0ed3ac86375ab8e5f92c4261df0ccfc61ff24b07420f9c88a78ae2cfd0
// module: 59903 range:1852295..1860168
// basis: webpack-id confidence: C
// method: split
// run: ext-p0 2026-11-05T10:07:22.069Z
59903: (e, t, r) => {
    "use strict";
    r.d(t, { Qj: () => a, T7: () => m, Ud: () => l, Zp: () => f, _0: () => u, dx: () => y, sS: () => h, ts: () => c, uI: () => g, vD: () => d, xA: () => p });
    var n = r(36038), o = r(13574), s = r(8592);
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
        super(), this.pattern = "", this.toolCallId = "", n.proto3.util.initPartial(e2, this);
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
        return ["GrepArgs|1 pattern 9|2 path 9?|3 glob 9?|4 output_mode 9?|5 context_before 5?|6 context_after 5?|7 context 5?|8 case_insensitive 8?|9 type 9?|10 head_limit 5?|11 multiline 8?|12 sort 9?|13 sort_ascending 8?|14 tool_call_id 9|15 sandbox_policy #0?|16 offset 5?", o.Mw];
      }
    }
    class l extends i {
      constructor(e2) {
        super(), this.result = { case: void 0 }, n.proto3.util.initPartial(e2, this);
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
        return ["GrepResult|1 success #0 result|2 error #1 result", u, c];
      }
    }
    class c extends i {
      constructor(e2) {
        super(), this.error = "", n.proto3.util.initPartial(e2, this);
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
        return ["GrepError|1 error 9"];
      }
    }
    class u extends i {
      constructor(e2) {
        super(), this.pattern = "", this.path = "", this.outputMode = "", this.workspaceResults = {}, n.proto3.util.initPartial(e2, this);
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
        return ["GrepSuccess|1 pattern 9|2 path 9|3 output_mode 9|4 workspace_results 9,#0|5 active_editor_result #0?", d];
      }
    }
    class d extends i {
      constructor(e2) {
        super(), this.result = { case: void 0 }, n.proto3.util.initPartial(e2, this);
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
        return ["GrepUnionResult|1 count #0 result|2 files #1 result|3 content #2 result", p, m, f];
      }
    }
    class p extends i {
      constructor(e2) {
        super(), this.counts = [], this.totalFiles = 0, this.totalMatches = 0, this.clientTruncated = false, this.ripgrepTruncated = false, n.proto3.util.initPartial(e2, this);
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
        return ["GrepCountResult|1 counts #0*|2 total_files 5|3 total_matches 5|4 client_truncated 8|5 ripgrep_truncated 8|6 head_limit_applied 5?|7 offset_applied 5?", h];
      }
    }
    class h extends i {
      constructor(e2) {
        super(), this.file = "", this.count = 0, n.proto3.util.initPartial(e2, this);
      }
      static fromBinary(e2, t2) {
        return new h().fromBinary(e2, t2);
      }
      static fromJson(e2, t2) {
        return new h().fromJson(e2, t2);
      }
      static fromJsonString(e2, t2) {
        return new h().fromJsonString(e2, t2);
      }
      static equals(e2, t2) {
        return n.proto3.util.equals(h, e2, t2);
      }
      static $() {
        return ["GrepFileCount|1 file 9|2 count 5"];
      }
    }
    class m extends i {
      constructor(e2) {
        super(), this.files = [], this.totalFiles = 0, this.clientTruncated = false, this.ripgrepTruncated = false, n.proto3.util.initPartial(e2, this);
      }
      static fromBinary(e2, t2) {
        return new m().fromBinary(e2, t2);
      }
      static fromJson(e2, t2) {
        return new m().fromJson(e2, t2);
      }
      static fromJsonString(e2, t2) {
        return new m().fromJsonString(e2, t2);
      }
      static equals(e2, t2) {
        return n.proto3.util.equals(m, e2, t2);
      }
      static $() {
        return ["GrepFilesResult|1 files 9*|2 total_files 5|3 client_truncated 8|4 ripgrep_truncated 8|5 head_limit_applied 5?|6 offset_applied 5?"];
      }
    }
    class f extends i {
      constructor(e2) {
        super(), this.matches = [], this.totalLines = 0, this.totalMatchedLines = 0, this.clientTruncated = false, this.ripgrepTruncated = false, n.proto3.util.initPartial(e2, this);
      }
      static fromBinary(e2, t2) {
        return new f().fromBinary(e2, t2);
      }
      static fromJson(e2, t2) {
        return new f().fromJson(e2, t2);
      }
      static fromJsonString(e2, t2) {
        return new f().fromJsonString(e2, t2);
      }
      static equals(e2, t2) {
        return n.proto3.util.equals(f, e2, t2);
      }
      static $() {
        return ["GrepContentResult|1 matches #0*|2 total_lines 5|3 total_matched_lines 5|4 client_truncated 8|5 ripgrep_truncated 8|6 head_limit_applied 5?|7 offset_applied 5?", g];
      }
    }
    class g extends i {
      constructor(e2) {
        super(), this.file = "", this.matches = [], n.proto3.util.initPartial(e2, this);
      }
      static fromBinary(e2, t2) {
        return new g().fromBinary(e2, t2);
      }
      static fromJson(e2, t2) {
        return new g().fromJson(e2, t2);
      }
      static fromJsonString(e2, t2) {
        return new g().fromJsonString(e2, t2);
      }
      static equals(e2, t2) {
        return n.proto3.util.equals(g, e2, t2);
      }
      static $() {
        return ["GrepFileMatch|1 file 9|2 matches #0*", y];
      }
    }
    class y extends i {
      constructor(e2) {
        super(), this.lineNumber = 0, this.content = "", this.contentTruncated = false, this.isContextLine = false, n.proto3.util.initPartial(e2, this);
      }
      static fromBinary(e2, t2) {
        return new y().fromBinary(e2, t2);
      }
      static fromJson(e2, t2) {
        return new y().fromJson(e2, t2);
      }
      static fromJsonString(e2, t2) {
        return new y().fromJsonString(e2, t2);
      }
      static equals(e2, t2) {
        return n.proto3.util.equals(y, e2, t2);
      }
      static $() {
        return ["GrepContentMatch|1 line_number 5|2 content 9|3 content_truncated 8|4 is_context_line 8"];
      }
    }
  }
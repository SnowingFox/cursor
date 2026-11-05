// @recovered-by cursor-re
// artifact: app/extensions/cursor-always-local/dist/main.js sha256:14fb2d0e360d81a024b4ec605f417e030e19b30b2df99bc45648aa227060534e
// module: 2730 range:780283..786842
// basis: webpack-id confidence: C
// method: split
// run: ext-agent 2026-11-05T10:20:08.356Z
2730: (t2, e2, r2) => {
    "use strict";
    r2.d(e2, { Y$: () => h, fv: () => u, vq: () => l, xe: () => a });
    var n2 = r2(6038), s2 = r2(3574), i2 = r2(8592);
    class o2 extends i2.HL {
      static get runtime() {
        return (0, i2.kU)(this, "runtime", n2.proto3);
      }
      static $p() {
        return "agent.v1.";
      }
    }
    class a extends o2 {
      constructor(t3) {
        super(), this.path = "", this.ignore = [], this.toolCallId = "", n2.proto3.util.initPartial(t3, this);
      }
      static fromBinary(t3, e3) {
        return new a().fromBinary(t3, e3);
      }
      static fromJson(t3, e3) {
        return new a().fromJson(t3, e3);
      }
      static fromJsonString(t3, e3) {
        return new a().fromJsonString(t3, e3);
      }
      static equals(t3, e3) {
        return n2.proto3.util.equals(a, t3, e3);
      }
      static $() {
        return ["LsArgs|1 path 9|2 ignore 9*|3 tool_call_id 9|4 sandbox_policy #0?|5 timeout_ms 13?", s2.Mw];
      }
    }
    class u extends o2 {
      constructor(t3) {
        super(), this.result = { case: void 0 }, n2.proto3.util.initPartial(t3, this);
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
        return ["LsResult|1 success #0 result|2 error #1 result|3 rejected #2 result|4 timeout #3 result", c, d, f, p];
      }
    }
    class c extends o2 {
      constructor(t3) {
        super(), n2.proto3.util.initPartial(t3, this);
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
        return ["LsSuccess|1 directory_tree_root #0", l];
      }
    }
    class l extends o2 {
      constructor(t3) {
        super(), this.absPath = "", this.childrenDirs = [], this.childrenFiles = [], this.childrenWereProcessed = false, this.fullSubtreeExtensionCounts = {}, this.numFiles = 0, n2.proto3.util.initPartial(t3, this);
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
        return ["LsDirectoryTreeNode|1 abs_path 9|2 children_dirs #0*|3 children_files #1*|4 children_were_processed 8|5 full_subtree_extension_counts 9,5|6 num_files 5", l, m];
      }
    }
    class m extends o2 {
      constructor(t3) {
        super(), this.name = "", n2.proto3.util.initPartial(t3, this);
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
        return ["LsDirectoryTreeNode.File|1 name 9|2 terminal_metadata #0?", h];
      }
    }
    class d extends o2 {
      constructor(t3) {
        super(), this.path = "", this.error = "", n2.proto3.util.initPartial(t3, this);
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
        return ["LsError|1 path 9|2 error 9"];
      }
    }
    class f extends o2 {
      constructor(t3) {
        super(), this.path = "", this.reason = "", n2.proto3.util.initPartial(t3, this);
      }
      static fromBinary(t3, e3) {
        return new f().fromBinary(t3, e3);
      }
      static fromJson(t3, e3) {
        return new f().fromJson(t3, e3);
      }
      static fromJsonString(t3, e3) {
        return new f().fromJsonString(t3, e3);
      }
      static equals(t3, e3) {
        return n2.proto3.util.equals(f, t3, e3);
      }
      static $() {
        return ["LsRejected|1 path 9|2 reason 9"];
      }
    }
    class p extends o2 {
      constructor(t3) {
        super(), n2.proto3.util.initPartial(t3, this);
      }
      static fromBinary(t3, e3) {
        return new p().fromBinary(t3, e3);
      }
      static fromJson(t3, e3) {
        return new p().fromJson(t3, e3);
      }
      static fromJsonString(t3, e3) {
        return new p().fromJsonString(t3, e3);
      }
      static equals(t3, e3) {
        return n2.proto3.util.equals(p, t3, e3);
      }
      static $() {
        return ["LsTimeout|1 directory_tree_root #0", l];
      }
    }
    class h extends o2 {
      constructor(t3) {
        super(), this.lastCommands = [], n2.proto3.util.initPartial(t3, this);
      }
      static fromBinary(t3, e3) {
        return new h().fromBinary(t3, e3);
      }
      static fromJson(t3, e3) {
        return new h().fromJson(t3, e3);
      }
      static fromJsonString(t3, e3) {
        return new h().fromJsonString(t3, e3);
      }
      static equals(t3, e3) {
        return n2.proto3.util.equals(h, t3, e3);
      }
      static $() {
        return ["TerminalMetadata|1 cwd 9?|2 last_commands #0*|3 last_modified_ms 3?|4 current_command #0?", g];
      }
    }
    class g extends o2 {
      constructor(t3) {
        super(), this.command = "", n2.proto3.util.initPartial(t3, this);
      }
      static fromBinary(t3, e3) {
        return new g().fromBinary(t3, e3);
      }
      static fromJson(t3, e3) {
        return new g().fromJson(t3, e3);
      }
      static fromJsonString(t3, e3) {
        return new g().fromJsonString(t3, e3);
      }
      static equals(t3, e3) {
        return n2.proto3.util.equals(g, t3, e3);
      }
      static $() {
        return ["TerminalMetadata.Command|1 command 9|2 exit_code 5?|3 timestamp_ms 3?|4 duration_ms 3?"];
      }
    }
  }
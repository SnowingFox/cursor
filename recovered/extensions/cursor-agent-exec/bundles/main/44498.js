// @recovered-by cursor-re
// artifact: app/extensions/cursor-agent-exec/dist/main.js sha256:8d20326bd54948353115113c2d4716cf781d593610fd4d8acebcc37a3170da8e
// module: 44498 range:3275726..3281726
// basis: webpack-id confidence: C
// method: split
// run: ext-p0 2026-11-05T10:07:22.069Z
44498: (e, t, r) => {
    "use strict";
    r.d(t, { $P: () => l, Gv: () => g, LL: () => m, Lt: () => u, Of: () => p, Po: () => d, nt: () => h, tR: () => f });
    var n = r(36038), s = r(62671), o = r(13574), i = r(64500), a = r(8592);
    class c extends a.HL {
      static get runtime() {
        return (0, a.kU)(this, "runtime", n.proto3);
      }
      static $p() {
        return "agent.v1.";
      }
    }
    class l extends c {
      constructor(e2) {
        super(), this.command = "", this.workingDirectory = "", this.toolCallId = "", this.enableWriteShellStdinTool = false, this.skipApproval = false, this.adminCommandDenylist = [], this.suppressStdinLogging = false, n.proto3.util.initPartial(e2, this);
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
        return ["BackgroundShellSpawnArgs|1 command 9|2 working_directory 9|3 tool_call_id 9|4 parsing_result #0|5 sandbox_policy #1?|6 enable_write_shell_stdin_tool 8|7 description 9?|8 classifier_result #2?|9 output_notification #3?|10 smart_mode_approval #4?|11 hook_approval_requirement #5?|12 skip_approval 8|13 conversation_id 9?|14 admin_command_denylist 9*|15 request_id 9?|16 suppress_stdin_logging 8|17 secret_scope_id 9?", s.HO, o.Mw, s.E4, s.$F, i.UC, s.In];
      }
    }
    class u extends c {
      constructor(e2) {
        super(), this.result = { case: void 0 }, n.proto3.util.initPartial(e2, this);
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
        return ["BackgroundShellSpawnResult|1 success #0 result|2 error #1 result|3 rejected #2 result|4 permission_denied #3 result|5 sandbox_unsupported #4 result", d, p, s.pZ, s.jn, s.rI];
      }
    }
    class d extends c {
      constructor(e2) {
        super(), this.shellId = 0, this.command = "", this.workingDirectory = "", n.proto3.util.initPartial(e2, this);
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
        return ["BackgroundShellSpawnSuccess|1 shell_id 13|2 command 9|3 working_directory 9|4 pid 13?"];
      }
    }
    class p extends c {
      constructor(e2) {
        super(), this.command = "", this.workingDirectory = "", this.error = "", n.proto3.util.initPartial(e2, this);
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
        return ["BackgroundShellSpawnError|1 command 9|2 working_directory 9|3 error 9"];
      }
    }
    class m extends c {
      constructor(e2) {
        super(), this.shellId = 0, this.chars = "", n.proto3.util.initPartial(e2, this);
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
        return ["WriteShellStdinArgs|1 shell_id 13|2 chars 9"];
      }
    }
    class h extends c {
      constructor(e2) {
        super(), this.result = { case: void 0 }, n.proto3.util.initPartial(e2, this);
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
        return ["WriteShellStdinResult|1 success #0 result|2 error #1 result", f, g];
      }
    }
    class f extends c {
      constructor(e2) {
        super(), this.shellId = 0, this.terminalFileLengthBeforeInputWritten = 0, n.proto3.util.initPartial(e2, this);
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
        return ["WriteShellStdinSuccess|1 shell_id 13|2 terminal_file_length_before_input_written 13"];
      }
    }
    class g extends c {
      constructor(e2) {
        super(), this.error = "", n.proto3.util.initPartial(e2, this);
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
        return ["WriteShellStdinError|1 error 9"];
      }
    }
  }
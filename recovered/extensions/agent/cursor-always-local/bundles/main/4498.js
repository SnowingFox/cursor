// @recovered-by cursor-re
// artifact: app/extensions/cursor-always-local/dist/main.js sha256:14fb2d0e360d81a024b4ec605f417e030e19b30b2df99bc45648aa227060534e
// module: 4498 range:1161776..1167759
// basis: webpack-id confidence: C
// method: split
// run: ext-agent 2026-11-05T10:20:08.356Z
4498: (t2, e2, r2) => {
    "use strict";
    r2.d(e2, { $P: () => c, LL: () => f, Lt: () => l, nt: () => p });
    var n2 = r2(6038), s2 = r2(2671), i2 = r2(3574), o2 = r2(4500), a = r2(8592);
    class u extends a.HL {
      static get runtime() {
        return (0, a.kU)(this, "runtime", n2.proto3);
      }
      static $p() {
        return "agent.v1.";
      }
    }
    class c extends u {
      constructor(t3) {
        super(), this.command = "", this.workingDirectory = "", this.toolCallId = "", this.enableWriteShellStdinTool = false, this.skipApproval = false, this.adminCommandDenylist = [], this.suppressStdinLogging = false, n2.proto3.util.initPartial(t3, this);
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
        return ["BackgroundShellSpawnArgs|1 command 9|2 working_directory 9|3 tool_call_id 9|4 parsing_result #0|5 sandbox_policy #1?|6 enable_write_shell_stdin_tool 8|7 description 9?|8 classifier_result #2?|9 output_notification #3?|10 smart_mode_approval #4?|11 hook_approval_requirement #5?|12 skip_approval 8|13 conversation_id 9?|14 admin_command_denylist 9*|15 request_id 9?|16 suppress_stdin_logging 8|17 secret_scope_id 9?", s2.HO, i2.Mw, s2.E4, s2.$F, o2.UC, s2.In];
      }
    }
    class l extends u {
      constructor(t3) {
        super(), this.result = { case: void 0 }, n2.proto3.util.initPartial(t3, this);
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
        return ["BackgroundShellSpawnResult|1 success #0 result|2 error #1 result|3 rejected #2 result|4 permission_denied #3 result|5 sandbox_unsupported #4 result", m, d, s2.pZ, s2.jn, s2.rI];
      }
    }
    class m extends u {
      constructor(t3) {
        super(), this.shellId = 0, this.command = "", this.workingDirectory = "", n2.proto3.util.initPartial(t3, this);
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
        return ["BackgroundShellSpawnSuccess|1 shell_id 13|2 command 9|3 working_directory 9|4 pid 13?"];
      }
    }
    class d extends u {
      constructor(t3) {
        super(), this.command = "", this.workingDirectory = "", this.error = "", n2.proto3.util.initPartial(t3, this);
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
        return ["BackgroundShellSpawnError|1 command 9|2 working_directory 9|3 error 9"];
      }
    }
    class f extends u {
      constructor(t3) {
        super(), this.shellId = 0, this.chars = "", n2.proto3.util.initPartial(t3, this);
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
        return ["WriteShellStdinArgs|1 shell_id 13|2 chars 9"];
      }
    }
    class p extends u {
      constructor(t3) {
        super(), this.result = { case: void 0 }, n2.proto3.util.initPartial(t3, this);
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
        return ["WriteShellStdinResult|1 success #0 result|2 error #1 result", h, g];
      }
    }
    class h extends u {
      constructor(t3) {
        super(), this.shellId = 0, this.terminalFileLengthBeforeInputWritten = 0, n2.proto3.util.initPartial(t3, this);
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
        return ["WriteShellStdinSuccess|1 shell_id 13|2 terminal_file_length_before_input_written 13"];
      }
    }
    class g extends u {
      constructor(t3) {
        super(), this.error = "", n2.proto3.util.initPartial(t3, this);
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
        return ["WriteShellStdinError|1 error 9"];
      }
    }
  }
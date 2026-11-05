// @recovered-by cursor-re
// artifact: app/extensions/cursor-always-local/dist/main.js sha256:14fb2d0e360d81a024b4ec605f417e030e19b30b2df99bc45648aa227060534e
// module: 2671 range:717249..737863
// basis: webpack-id confidence: C
// method: split
// run: ext-agent 2026-11-05T10:20:08.356Z
2671: (t2, e2, r2) => {
    "use strict";
    r2.d(e2, { $F: () => S, Db: () => R, E4: () => _, FI: () => U, HO: () => p, Hu: () => J, In: () => E, W4: () => b, a: () => C, jK: () => B, jn: () => L, o0: () => q, pZ: () => F, rI: () => D, tD: () => T, vb: () => P });
    var n2 = r2(6038), s2 = r2(3574), i2 = r2(4500), o2 = r2(1180), a = r2(8592);
    const u = "agent.v1.";
    class c extends a.HL {
      static get runtime() {
        return (0, a.kU)(this, "runtime", n2.proto3);
      }
      static $p() {
        return u;
      }
    }
    var l = (0, a.QT)(n2.proto3, u, "TimeoutBehavior", [[0, "UNSPECIFIED"], [1, "CANCEL"], [2, "BACKGROUND"]], 1), m = (0, a.QT)(n2.proto3, u, "ShellBackgroundReason", [[0, "UNSPECIFIED"], [1, "TIMEOUT"], [2, "USER_REQUEST"]], 1), d = (0, a.QT)(n2.proto3, u, "ForceBackgroundShellStatus", [[0, "UNSPECIFIED"], [1, "ACCEPTED"], [2, "NOT_FOUND"]], 1), f = (0, a.QT)(n2.proto3, u, "ShellAbortReason", [[0, "UNSPECIFIED"], [1, "USER_ABORT"], [2, "TIMEOUT"]], 1);
    class p extends c {
      constructor(t3) {
        super(), this.parsingFailed = false, this.executableCommands = [], this.hasRedirects = false, this.hasCommandSubstitution = false, this.redirects = [], n2.proto3.util.initPartial(t3, this);
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
        return ["ShellCommandParsingResult|1 parsing_failed 8|2 executable_commands #0*|3 has_redirects 8|4 has_command_substitution 8|5 all_redirects_are_dev_null 8?|6 redirects #1*", g, A];
      }
    }
    class h extends c {
      constructor(t3) {
        super(), this.type = "", this.value = "", n2.proto3.util.initPartial(t3, this);
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
        return ["ShellCommandParsingResult.ExecutableCommandArg|1 type 9|2 value 9"];
      }
    }
    class g extends c {
      constructor(t3) {
        super(), this.name = "", this.args = [], this.fullText = "", n2.proto3.util.initPartial(t3, this);
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
        return ["ShellCommandParsingResult.ExecutableCommand|1 name 9|2 args #0*|3 full_text 9", h];
      }
    }
    class A extends c {
      constructor(t3) {
        super(), this.operator = "", this.destinationFds = [], this.targetNodeType = "", n2.proto3.util.initPartial(t3, this);
      }
      static fromBinary(t3, e3) {
        return new A().fromBinary(t3, e3);
      }
      static fromJson(t3, e3) {
        return new A().fromJson(t3, e3);
      }
      static fromJsonString(t3, e3) {
        return new A().fromJsonString(t3, e3);
      }
      static equals(t3, e3) {
        return n2.proto3.util.equals(A, t3, e3);
      }
      static $() {
        return ["ShellCommandParsingResult.Redirect|1 operator 9|2 destination_fds 13*|3 target_node_type 9|4 target_text 9?"];
      }
    }
    class _ extends c {
      constructor(t3) {
        super(), this.commands = [], this.suggestedSandboxMode = y.UNSPECIFIED, this.classificationFailed = false, n2.proto3.util.initPartial(t3, this);
      }
      static fromBinary(t3, e3) {
        return new _().fromBinary(t3, e3);
      }
      static fromJson(t3, e3) {
        return new _().fromJson(t3, e3);
      }
      static fromJsonString(t3, e3) {
        return new _().fromJsonString(t3, e3);
      }
      static equals(t3, e3) {
        return n2.proto3.util.equals(_, t3, e3);
      }
      static $() {
        return ["CommandClassifierResult|1 commands #0*|2 suggested_sandbox_mode #1|3 classification_failed 8", w, y];
      }
    }
    var y = (0, a.QT)(n2.proto3, u, "CommandClassifierResult.SuggestedSandboxMode", [[0, "UNSPECIFIED"], [1, "SANDBOX"], [2, "NO_SANDBOX"], [3, "UNDETERMINED"]], 1);
    class w extends c {
      constructor(t3) {
        super(), this.name = "", this.arguments = [], this.subcommandTokens = [], n2.proto3.util.initPartial(t3, this);
      }
      static fromBinary(t3, e3) {
        return new w().fromBinary(t3, e3);
      }
      static fromJson(t3, e3) {
        return new w().fromJson(t3, e3);
      }
      static fromJsonString(t3, e3) {
        return new w().fromJsonString(t3, e3);
      }
      static equals(t3, e3) {
        return n2.proto3.util.equals(w, t3, e3);
      }
      static $() {
        return ["CommandClassifierResult.ClassifiedCommand|1 name 9|2 arguments 9*|3 suggested_allowlist_entry 9?|4 subcommand_tokens 9*"];
      }
    }
    class S extends c {
      constructor(t3) {
        super(), this.pattern = "", this.reason = "", n2.proto3.util.initPartial(t3, this);
      }
      static fromBinary(t3, e3) {
        return new S().fromBinary(t3, e3);
      }
      static fromJson(t3, e3) {
        return new S().fromJson(t3, e3);
      }
      static fromJsonString(t3, e3) {
        return new S().fromJsonString(t3, e3);
      }
      static equals(t3, e3) {
        return n2.proto3.util.equals(S, t3, e3);
      }
      static $() {
        return ["ShellOutputNotificationConfig|1 pattern 9|2 reason 9|3 debounce 1?|4 notification_limit 5?"];
      }
    }
    class J extends c {
      constructor(t3) {
        super(), this.toolCallId = "", n2.proto3.util.initPartial(t3, this);
      }
      static fromBinary(t3, e3) {
        return new J().fromBinary(t3, e3);
      }
      static fromJson(t3, e3) {
        return new J().fromJson(t3, e3);
      }
      static fromJsonString(t3, e3) {
        return new J().fromJsonString(t3, e3);
      }
      static equals(t3, e3) {
        return n2.proto3.util.equals(J, t3, e3);
      }
      static $() {
        return ["ForceBackgroundShellArgs|1 tool_call_id 9"];
      }
    }
    class B extends c {
      constructor(t3) {
        super(), this.status = d.UNSPECIFIED, n2.proto3.util.initPartial(t3, this);
      }
      static fromBinary(t3, e3) {
        return new B().fromBinary(t3, e3);
      }
      static fromJson(t3, e3) {
        return new B().fromJson(t3, e3);
      }
      static fromJsonString(t3, e3) {
        return new B().fromJsonString(t3, e3);
      }
      static equals(t3, e3) {
        return n2.proto3.util.equals(B, t3, e3);
      }
      static $() {
        return ["ForceBackgroundShellResult|1 status #0|2 shell_result #1?", d, b];
      }
    }
    class E extends c {
      constructor(t3) {
        super(), this.kind = I.UNSPECIFIED, n2.proto3.util.initPartial(t3, this);
      }
      static fromBinary(t3, e3) {
        return new E().fromBinary(t3, e3);
      }
      static fromJson(t3, e3) {
        return new E().fromJson(t3, e3);
      }
      static fromJsonString(t3, e3) {
        return new E().fromJsonString(t3, e3);
      }
      static equals(t3, e3) {
        return n2.proto3.util.equals(E, t3, e3);
      }
      static $() {
        return ["ShellHookApprovalRequirement|1 kind #0|2 reason 9?", I];
      }
    }
    var I = (0, a.QT)(n2.proto3, u, "ShellHookApprovalRequirement.Kind", [[0, "UNSPECIFIED"], [1, "FORCE_PROMPT"]], 1);
    class C extends c {
      constructor(t3) {
        super(), this.command = "", this.workingDirectory = "", this.timeout = 0, this.toolCallId = "", this.simpleCommands = [], this.hasInputRedirect = false, this.hasOutputRedirect = false, this.isBackground = false, this.skipApproval = false, this.timeoutBehavior = l.UNSPECIFIED, this.closeStdin = false, this.adminCommandDenylist = [], n2.proto3.util.initPartial(t3, this);
      }
      static fromBinary(t3, e3) {
        return new C().fromBinary(t3, e3);
      }
      static fromJson(t3, e3) {
        return new C().fromJson(t3, e3);
      }
      static fromJsonString(t3, e3) {
        return new C().fromJsonString(t3, e3);
      }
      static equals(t3, e3) {
        return n2.proto3.util.equals(C, t3, e3);
      }
      static $() {
        return ["ShellArgs|1 command 9|2 working_directory 9|3 timeout 5|4 tool_call_id 9|5 simple_commands 9*|6 has_input_redirect 8|7 has_output_redirect 8|8 parsing_result #0|9 requested_sandbox_policy #1?|10 file_output_threshold_bytes 4?|11 is_background 8|12 skip_approval 8|13 timeout_behavior #2|14 hard_timeout 5?|15 description 9?|16 classifier_result #3?|17 close_stdin 8|18 output_notification #4?|19 smart_mode_approval #5?|20 hook_approval_requirement #6?|21 conversation_id 9?|22 admin_command_denylist 9*|23 request_id 9?|24 secret_scope_id 9?", p, s2.Mw, l, _, S, i2.UC, E];
      }
    }
    class b extends c {
      constructor(t3) {
        super(), this.result = { case: void 0 }, n2.proto3.util.initPartial(t3, this);
      }
      static fromBinary(t3, e3) {
        return new b().fromBinary(t3, e3);
      }
      static fromJson(t3, e3) {
        return new b().fromJson(t3, e3);
      }
      static fromJsonString(t3, e3) {
        return new b().fromJsonString(t3, e3);
      }
      static equals(t3, e3) {
        return n2.proto3.util.equals(b, t3, e3);
      }
      static $() {
        return ["ShellResult|1 success #0 result|2 failure #1 result|3 timeout #2 result|4 rejected #3 result|5 spawn_error #4 result|7 permission_denied #5 result|101 sandbox_policy #6?|102 is_background 8?|103 terminals_folder 9?|104 pid 13?", Q, M, O, F, $, L, s2.Mw];
      }
    }
    class k extends c {
      constructor(t3) {
        super(), this.kind = v.UNSPECIFIED, this.memoryLimitBytes = n2.protoInt64.zero, n2.proto3.util.initPartial(t3, this);
      }
      static fromBinary(t3, e3) {
        return new k().fromBinary(t3, e3);
      }
      static fromJson(t3, e3) {
        return new k().fromJson(t3, e3);
      }
      static fromJsonString(t3, e3) {
        return new k().fromJsonString(t3, e3);
      }
      static equals(t3, e3) {
        return n2.proto3.util.equals(k, t3, e3);
      }
      static $() {
        return ["ShellOomKill|1 kind #0|2 memory_limit_bytes 4", v];
      }
    }
    var v = (0, a.QT)(n2.proto3, u, "ShellOomKill.Kind", [[0, "UNSPECIFIED"], [1, "COMMAND_KILLED"], [2, "COMMAND_FAILED"], [3, "UNCONFIRMED"]], 1);
    class q extends c {
      constructor(t3) {
        super(), this.data = "", n2.proto3.util.initPartial(t3, this);
      }
      static fromBinary(t3, e3) {
        return new q().fromBinary(t3, e3);
      }
      static fromJson(t3, e3) {
        return new q().fromJson(t3, e3);
      }
      static fromJsonString(t3, e3) {
        return new q().fromJsonString(t3, e3);
      }
      static equals(t3, e3) {
        return n2.proto3.util.equals(q, t3, e3);
      }
      static $() {
        return ["ShellStreamStdout|1 data 9"];
      }
    }
    class R extends c {
      constructor(t3) {
        super(), this.data = "", n2.proto3.util.initPartial(t3, this);
      }
      static fromBinary(t3, e3) {
        return new R().fromBinary(t3, e3);
      }
      static fromJson(t3, e3) {
        return new R().fromJson(t3, e3);
      }
      static fromJsonString(t3, e3) {
        return new R().fromJsonString(t3, e3);
      }
      static equals(t3, e3) {
        return n2.proto3.util.equals(R, t3, e3);
      }
      static $() {
        return ["ShellStreamStderr|1 data 9"];
      }
    }
    class P extends c {
      constructor(t3) {
        super(), this.code = 0, this.cwd = "", this.aborted = false, n2.proto3.util.initPartial(t3, this);
      }
      static fromBinary(t3, e3) {
        return new P().fromBinary(t3, e3);
      }
      static fromJson(t3, e3) {
        return new P().fromJson(t3, e3);
      }
      static fromJsonString(t3, e3) {
        return new P().fromJsonString(t3, e3);
      }
      static equals(t3, e3) {
        return n2.proto3.util.equals(P, t3, e3);
      }
      static $() {
        return ["ShellStreamExit|1 code 13|2 cwd 9|3 output_location #0?|4 aborted 8|5 abort_reason #1?|6 local_execution_time_ms 5?|7 oom_kill #2?", i2.pV, f, k];
      }
    }
    class T extends c {
      constructor(t3) {
        super(), n2.proto3.util.initPartial(t3, this);
      }
      static fromBinary(t3, e3) {
        return new T().fromBinary(t3, e3);
      }
      static fromJson(t3, e3) {
        return new T().fromJson(t3, e3);
      }
      static fromJsonString(t3, e3) {
        return new T().fromJsonString(t3, e3);
      }
      static equals(t3, e3) {
        return n2.proto3.util.equals(T, t3, e3);
      }
      static $() {
        return ["ShellStreamStart|1 sandbox_policy #0?", s2.Mw];
      }
    }
    class x extends c {
      constructor(t3) {
        super(), this.shellId = 0, this.command = "", this.workingDirectory = "", n2.proto3.util.initPartial(t3, this);
      }
      static fromBinary(t3, e3) {
        return new x().fromBinary(t3, e3);
      }
      static fromJson(t3, e3) {
        return new x().fromJson(t3, e3);
      }
      static fromJsonString(t3, e3) {
        return new x().fromJsonString(t3, e3);
      }
      static equals(t3, e3) {
        return n2.proto3.util.equals(x, t3, e3);
      }
      static $() {
        return ["ShellStreamBackgrounded|1 shell_id 13|2 command 9|3 working_directory 9|4 pid 13?|5 ms_to_wait 5?|6 reason #0?", m];
      }
    }
    class N extends c {
      constructor(t3) {
        super(), this.hookAdditionalContexts = [], n2.proto3.util.initPartial(t3, this);
      }
      static fromBinary(t3, e3) {
        return new N().fromBinary(t3, e3);
      }
      static fromJson(t3, e3) {
        return new N().fromJson(t3, e3);
      }
      static fromJsonString(t3, e3) {
        return new N().fromJsonString(t3, e3);
      }
      static equals(t3, e3) {
        return n2.proto3.util.equals(N, t3, e3);
      }
      static $() {
        return ["ShellStreamHookContext|1 hook_additional_contexts #0*", o2.C];
      }
    }
    class D extends c {
      constructor(t3) {
        super(), this.command = "", this.workingDirectory = "", this.sandboxPolicyType = "", this.reason = "", this.isReadonly = false, n2.proto3.util.initPartial(t3, this);
      }
      static fromBinary(t3, e3) {
        return new D().fromBinary(t3, e3);
      }
      static fromJson(t3, e3) {
        return new D().fromJson(t3, e3);
      }
      static fromJsonString(t3, e3) {
        return new D().fromJsonString(t3, e3);
      }
      static equals(t3, e3) {
        return n2.proto3.util.equals(D, t3, e3);
      }
      static $() {
        return ["ShellSandboxUnsupported|1 command 9|2 working_directory 9|3 sandbox_policy_type 9|4 reason 9|5 is_readonly 8"];
      }
    }
    class U extends c {
      constructor(t3) {
        super(), this.event = { case: void 0 }, n2.proto3.util.initPartial(t3, this);
      }
      static fromBinary(t3, e3) {
        return new U().fromBinary(t3, e3);
      }
      static fromJson(t3, e3) {
        return new U().fromJson(t3, e3);
      }
      static fromJsonString(t3, e3) {
        return new U().fromJsonString(t3, e3);
      }
      static equals(t3, e3) {
        return n2.proto3.util.equals(U, t3, e3);
      }
      static $() {
        return ["ShellStream|1 stdout #0 event|2 stderr #1 event|3 exit #2 event|4 start #3 event|5 rejected #4 event|6 permission_denied #5 event|7 backgrounded #6 event|8 hook_context #7 event|9 sandbox_unsupported #8 event", q, R, P, T, F, L, x, N, D];
      }
    }
    class Q extends c {
      constructor(t3) {
        super(), this.command = "", this.workingDirectory = "", this.exitCode = 0, this.signal = "", this.stdout = "", this.stderr = "", this.executionTime = 0, n2.proto3.util.initPartial(t3, this);
      }
      static fromBinary(t3, e3) {
        return new Q().fromBinary(t3, e3);
      }
      static fromJson(t3, e3) {
        return new Q().fromJson(t3, e3);
      }
      static fromJsonString(t3, e3) {
        return new Q().fromJsonString(t3, e3);
      }
      static equals(t3, e3) {
        return n2.proto3.util.equals(Q, t3, e3);
      }
      static $() {
        return ["ShellSuccess|1 command 9|2 working_directory 9|3 exit_code 5|4 signal 9|5 stdout 9|6 stderr 9|7 execution_time 5|8 output_location #0?|9 shell_id 13?|10 interleaved_output 9?|11 pid 13?|12 ms_to_wait 5?|13 local_execution_time_ms 5?|14 background_reason #1?|15 output_head 9?|16 output_tail 9?|17 elided_chars 13?", i2.pV, m];
      }
    }
    class M extends c {
      constructor(t3) {
        super(), this.command = "", this.workingDirectory = "", this.exitCode = 0, this.signal = "", this.stdout = "", this.stderr = "", this.executionTime = 0, this.aborted = false, n2.proto3.util.initPartial(t3, this);
      }
      static fromBinary(t3, e3) {
        return new M().fromBinary(t3, e3);
      }
      static fromJson(t3, e3) {
        return new M().fromJson(t3, e3);
      }
      static fromJsonString(t3, e3) {
        return new M().fromJsonString(t3, e3);
      }
      static equals(t3, e3) {
        return n2.proto3.util.equals(M, t3, e3);
      }
      static $() {
        return ["ShellFailure|1 command 9|2 working_directory 9|3 exit_code 5|4 signal 9|5 stdout 9|6 stderr 9|7 execution_time 5|8 output_location #0?|9 interleaved_output 9?|10 abort_reason #1?|11 aborted 8|12 local_execution_time_ms 5?|13 output_head 9?|14 output_tail 9?|15 elided_chars 13?|16 oom_kill #2?", i2.pV, f, k];
      }
    }
    class O extends c {
      constructor(t3) {
        super(), this.command = "", this.workingDirectory = "", this.timeoutMs = 0, n2.proto3.util.initPartial(t3, this);
      }
      static fromBinary(t3, e3) {
        return new O().fromBinary(t3, e3);
      }
      static fromJson(t3, e3) {
        return new O().fromJson(t3, e3);
      }
      static fromJsonString(t3, e3) {
        return new O().fromJsonString(t3, e3);
      }
      static equals(t3, e3) {
        return n2.proto3.util.equals(O, t3, e3);
      }
      static $() {
        return ["ShellTimeout|1 command 9|2 working_directory 9|3 timeout_ms 5"];
      }
    }
    class F extends c {
      constructor(t3) {
        super(), this.command = "", this.workingDirectory = "", this.reason = "", this.isReadonly = false, n2.proto3.util.initPartial(t3, this);
      }
      static fromBinary(t3, e3) {
        return new F().fromBinary(t3, e3);
      }
      static fromJson(t3, e3) {
        return new F().fromJson(t3, e3);
      }
      static fromJsonString(t3, e3) {
        return new F().fromJsonString(t3, e3);
      }
      static equals(t3, e3) {
        return n2.proto3.util.equals(F, t3, e3);
      }
      static $() {
        return ["ShellRejected|1 command 9|2 working_directory 9|3 reason 9|4 is_readonly 8"];
      }
    }
    class L extends c {
      constructor(t3) {
        super(), this.command = "", this.workingDirectory = "", this.error = "", this.isReadonly = false, n2.proto3.util.initPartial(t3, this);
      }
      static fromBinary(t3, e3) {
        return new L().fromBinary(t3, e3);
      }
      static fromJson(t3, e3) {
        return new L().fromJson(t3, e3);
      }
      static fromJsonString(t3, e3) {
        return new L().fromJsonString(t3, e3);
      }
      static equals(t3, e3) {
        return n2.proto3.util.equals(L, t3, e3);
      }
      static $() {
        return ["ShellPermissionDenied|1 command 9|2 working_directory 9|3 error 9|4 is_readonly 8"];
      }
    }
    class $ extends c {
      constructor(t3) {
        super(), this.command = "", this.workingDirectory = "", this.error = "", n2.proto3.util.initPartial(t3, this);
      }
      static fromBinary(t3, e3) {
        return new $().fromBinary(t3, e3);
      }
      static fromJson(t3, e3) {
        return new $().fromJson(t3, e3);
      }
      static fromJsonString(t3, e3) {
        return new $().fromJsonString(t3, e3);
      }
      static equals(t3, e3) {
        return n2.proto3.util.equals($, t3, e3);
      }
      static $() {
        return ["ShellSpawnError|1 command 9|2 working_directory 9|3 error 9"];
      }
    }
  }
// @recovered-by cursor-re
// artifact: app/extensions/cursor-local-agent-runtime/dist/main.js sha256:be87ea0ed3ac86375ab8e5f92c4261df0ccfc61ff24b07420f9c88a78ae2cfd0
// module: 62671 range:1921815..1942582
// basis: webpack-id confidence: C
// method: split
// run: ext-p0 2026-11-05T10:07:22.069Z
62671: (e, t, r) => {
    "use strict";
    r.d(t, { $F: () => _, Db: () => M, E4: () => v, FI: () => L, HO: () => m, Hu: () => S, In: () => k, Jg: () => d, Lv: () => h, Ng: () => N, Pv: () => g, QR: () => U, R_: () => A, W4: () => C, Y9: () => D, _d: () => u, a: () => T, b: () => E, eG: () => $, iA: () => p, iH: () => I, jK: () => x, jn: () => j, mJ: () => J, mW: () => y, nD: () => b, o0: () => P, pZ: () => q, r6: () => f, rI: () => F, sw: () => w, tD: () => O, vb: () => R, xC: () => B });
    var n = r(36038), o = r(13574), s = r(64500), i = r(21180), a = r(8592);
    const l = "agent.v1.";
    class c extends a.HL {
      static get runtime() {
        return (0, a.kU)(this, "runtime", n.proto3);
      }
      static $p() {
        return l;
      }
    }
    var u = (0, a.QT)(n.proto3, l, "TimeoutBehavior", [[0, "UNSPECIFIED"], [1, "CANCEL"], [2, "BACKGROUND"]], 1), d = (0, a.QT)(n.proto3, l, "ShellBackgroundReason", [[0, "UNSPECIFIED"], [1, "TIMEOUT"], [2, "USER_REQUEST"]], 1), p = (0, a.QT)(n.proto3, l, "ForceBackgroundShellStatus", [[0, "UNSPECIFIED"], [1, "ACCEPTED"], [2, "NOT_FOUND"]], 1), h = (0, a.QT)(n.proto3, l, "ShellAbortReason", [[0, "UNSPECIFIED"], [1, "USER_ABORT"], [2, "TIMEOUT"]], 1);
    class m extends c {
      constructor(e2) {
        super(), this.parsingFailed = false, this.executableCommands = [], this.hasRedirects = false, this.hasCommandSubstitution = false, this.redirects = [], n.proto3.util.initPartial(e2, this);
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
        return ["ShellCommandParsingResult|1 parsing_failed 8|2 executable_commands #0*|3 has_redirects 8|4 has_command_substitution 8|5 all_redirects_are_dev_null 8?|6 redirects #1*", g, y];
      }
    }
    class f extends c {
      constructor(e2) {
        super(), this.type = "", this.value = "", n.proto3.util.initPartial(e2, this);
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
        return ["ShellCommandParsingResult.ExecutableCommandArg|1 type 9|2 value 9"];
      }
    }
    class g extends c {
      constructor(e2) {
        super(), this.name = "", this.args = [], this.fullText = "", n.proto3.util.initPartial(e2, this);
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
        return ["ShellCommandParsingResult.ExecutableCommand|1 name 9|2 args #0*|3 full_text 9", f];
      }
    }
    class y extends c {
      constructor(e2) {
        super(), this.operator = "", this.destinationFds = [], this.targetNodeType = "", n.proto3.util.initPartial(e2, this);
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
        return ["ShellCommandParsingResult.Redirect|1 operator 9|2 destination_fds 13*|3 target_node_type 9|4 target_text 9?"];
      }
    }
    class v extends c {
      constructor(e2) {
        super(), this.commands = [], this.suggestedSandboxMode = w.UNSPECIFIED, this.classificationFailed = false, n.proto3.util.initPartial(e2, this);
      }
      static fromBinary(e2, t2) {
        return new v().fromBinary(e2, t2);
      }
      static fromJson(e2, t2) {
        return new v().fromJson(e2, t2);
      }
      static fromJsonString(e2, t2) {
        return new v().fromJsonString(e2, t2);
      }
      static equals(e2, t2) {
        return n.proto3.util.equals(v, e2, t2);
      }
      static $() {
        return ["CommandClassifierResult|1 commands #0*|2 suggested_sandbox_mode #1|3 classification_failed 8", b, w];
      }
    }
    var w = (0, a.QT)(n.proto3, l, "CommandClassifierResult.SuggestedSandboxMode", [[0, "UNSPECIFIED"], [1, "SANDBOX"], [2, "NO_SANDBOX"], [3, "UNDETERMINED"]], 1);
    class b extends c {
      constructor(e2) {
        super(), this.name = "", this.arguments = [], this.subcommandTokens = [], n.proto3.util.initPartial(e2, this);
      }
      static fromBinary(e2, t2) {
        return new b().fromBinary(e2, t2);
      }
      static fromJson(e2, t2) {
        return new b().fromJson(e2, t2);
      }
      static fromJsonString(e2, t2) {
        return new b().fromJsonString(e2, t2);
      }
      static equals(e2, t2) {
        return n.proto3.util.equals(b, e2, t2);
      }
      static $() {
        return ["CommandClassifierResult.ClassifiedCommand|1 name 9|2 arguments 9*|3 suggested_allowlist_entry 9?|4 subcommand_tokens 9*"];
      }
    }
    class _ extends c {
      constructor(e2) {
        super(), this.pattern = "", this.reason = "", n.proto3.util.initPartial(e2, this);
      }
      static fromBinary(e2, t2) {
        return new _().fromBinary(e2, t2);
      }
      static fromJson(e2, t2) {
        return new _().fromJson(e2, t2);
      }
      static fromJsonString(e2, t2) {
        return new _().fromJsonString(e2, t2);
      }
      static equals(e2, t2) {
        return n.proto3.util.equals(_, e2, t2);
      }
      static $() {
        return ["ShellOutputNotificationConfig|1 pattern 9|2 reason 9|3 debounce 1?|4 notification_limit 5?"];
      }
    }
    class S extends c {
      constructor(e2) {
        super(), this.toolCallId = "", n.proto3.util.initPartial(e2, this);
      }
      static fromBinary(e2, t2) {
        return new S().fromBinary(e2, t2);
      }
      static fromJson(e2, t2) {
        return new S().fromJson(e2, t2);
      }
      static fromJsonString(e2, t2) {
        return new S().fromJsonString(e2, t2);
      }
      static equals(e2, t2) {
        return n.proto3.util.equals(S, e2, t2);
      }
      static $() {
        return ["ForceBackgroundShellArgs|1 tool_call_id 9"];
      }
    }
    class x extends c {
      constructor(e2) {
        super(), this.status = p.UNSPECIFIED, n.proto3.util.initPartial(e2, this);
      }
      static fromBinary(e2, t2) {
        return new x().fromBinary(e2, t2);
      }
      static fromJson(e2, t2) {
        return new x().fromJson(e2, t2);
      }
      static fromJsonString(e2, t2) {
        return new x().fromJsonString(e2, t2);
      }
      static equals(e2, t2) {
        return n.proto3.util.equals(x, e2, t2);
      }
      static $() {
        return ["ForceBackgroundShellResult|1 status #0|2 shell_result #1?", p, C];
      }
    }
    class k extends c {
      constructor(e2) {
        super(), this.kind = E.UNSPECIFIED, n.proto3.util.initPartial(e2, this);
      }
      static fromBinary(e2, t2) {
        return new k().fromBinary(e2, t2);
      }
      static fromJson(e2, t2) {
        return new k().fromJson(e2, t2);
      }
      static fromJsonString(e2, t2) {
        return new k().fromJsonString(e2, t2);
      }
      static equals(e2, t2) {
        return n.proto3.util.equals(k, e2, t2);
      }
      static $() {
        return ["ShellHookApprovalRequirement|1 kind #0|2 reason 9?", E];
      }
    }
    var E = (0, a.QT)(n.proto3, l, "ShellHookApprovalRequirement.Kind", [[0, "UNSPECIFIED"], [1, "FORCE_PROMPT"]], 1);
    class T extends c {
      constructor(e2) {
        super(), this.command = "", this.workingDirectory = "", this.timeout = 0, this.toolCallId = "", this.simpleCommands = [], this.hasInputRedirect = false, this.hasOutputRedirect = false, this.isBackground = false, this.skipApproval = false, this.timeoutBehavior = u.UNSPECIFIED, this.closeStdin = false, this.adminCommandDenylist = [], n.proto3.util.initPartial(e2, this);
      }
      static fromBinary(e2, t2) {
        return new T().fromBinary(e2, t2);
      }
      static fromJson(e2, t2) {
        return new T().fromJson(e2, t2);
      }
      static fromJsonString(e2, t2) {
        return new T().fromJsonString(e2, t2);
      }
      static equals(e2, t2) {
        return n.proto3.util.equals(T, e2, t2);
      }
      static $() {
        return ["ShellArgs|1 command 9|2 working_directory 9|3 timeout 5|4 tool_call_id 9|5 simple_commands 9*|6 has_input_redirect 8|7 has_output_redirect 8|8 parsing_result #0|9 requested_sandbox_policy #1?|10 file_output_threshold_bytes 4?|11 is_background 8|12 skip_approval 8|13 timeout_behavior #2|14 hard_timeout 5?|15 description 9?|16 classifier_result #3?|17 close_stdin 8|18 output_notification #4?|19 smart_mode_approval #5?|20 hook_approval_requirement #6?|21 conversation_id 9?|22 admin_command_denylist 9*|23 request_id 9?|24 secret_scope_id 9?", m, o.Mw, u, v, _, s.UC, k];
      }
    }
    class C extends c {
      constructor(e2) {
        super(), this.result = { case: void 0 }, n.proto3.util.initPartial(e2, this);
      }
      static fromBinary(e2, t2) {
        return new C().fromBinary(e2, t2);
      }
      static fromJson(e2, t2) {
        return new C().fromJson(e2, t2);
      }
      static fromJsonString(e2, t2) {
        return new C().fromJsonString(e2, t2);
      }
      static equals(e2, t2) {
        return n.proto3.util.equals(C, e2, t2);
      }
      static $() {
        return ["ShellResult|1 success #0 result|2 failure #1 result|3 timeout #2 result|4 rejected #3 result|5 spawn_error #4 result|7 permission_denied #5 result|101 sandbox_policy #6?|102 is_background 8?|103 terminals_folder 9?|104 pid 13?", U, B, $, q, J, j, o.Mw];
      }
    }
    class I extends c {
      constructor(e2) {
        super(), this.kind = A.UNSPECIFIED, this.memoryLimitBytes = n.protoInt64.zero, n.proto3.util.initPartial(e2, this);
      }
      static fromBinary(e2, t2) {
        return new I().fromBinary(e2, t2);
      }
      static fromJson(e2, t2) {
        return new I().fromJson(e2, t2);
      }
      static fromJsonString(e2, t2) {
        return new I().fromJsonString(e2, t2);
      }
      static equals(e2, t2) {
        return n.proto3.util.equals(I, e2, t2);
      }
      static $() {
        return ["ShellOomKill|1 kind #0|2 memory_limit_bytes 4", A];
      }
    }
    var A = (0, a.QT)(n.proto3, l, "ShellOomKill.Kind", [[0, "UNSPECIFIED"], [1, "COMMAND_KILLED"], [2, "COMMAND_FAILED"], [3, "UNCONFIRMED"]], 1);
    class P extends c {
      constructor(e2) {
        super(), this.data = "", n.proto3.util.initPartial(e2, this);
      }
      static fromBinary(e2, t2) {
        return new P().fromBinary(e2, t2);
      }
      static fromJson(e2, t2) {
        return new P().fromJson(e2, t2);
      }
      static fromJsonString(e2, t2) {
        return new P().fromJsonString(e2, t2);
      }
      static equals(e2, t2) {
        return n.proto3.util.equals(P, e2, t2);
      }
      static $() {
        return ["ShellStreamStdout|1 data 9"];
      }
    }
    class M extends c {
      constructor(e2) {
        super(), this.data = "", n.proto3.util.initPartial(e2, this);
      }
      static fromBinary(e2, t2) {
        return new M().fromBinary(e2, t2);
      }
      static fromJson(e2, t2) {
        return new M().fromJson(e2, t2);
      }
      static fromJsonString(e2, t2) {
        return new M().fromJsonString(e2, t2);
      }
      static equals(e2, t2) {
        return n.proto3.util.equals(M, e2, t2);
      }
      static $() {
        return ["ShellStreamStderr|1 data 9"];
      }
    }
    class R extends c {
      constructor(e2) {
        super(), this.code = 0, this.cwd = "", this.aborted = false, n.proto3.util.initPartial(e2, this);
      }
      static fromBinary(e2, t2) {
        return new R().fromBinary(e2, t2);
      }
      static fromJson(e2, t2) {
        return new R().fromJson(e2, t2);
      }
      static fromJsonString(e2, t2) {
        return new R().fromJsonString(e2, t2);
      }
      static equals(e2, t2) {
        return n.proto3.util.equals(R, e2, t2);
      }
      static $() {
        return ["ShellStreamExit|1 code 13|2 cwd 9|3 output_location #0?|4 aborted 8|5 abort_reason #1?|6 local_execution_time_ms 5?|7 oom_kill #2?", s.pV, h, I];
      }
    }
    class O extends c {
      constructor(e2) {
        super(), n.proto3.util.initPartial(e2, this);
      }
      static fromBinary(e2, t2) {
        return new O().fromBinary(e2, t2);
      }
      static fromJson(e2, t2) {
        return new O().fromJson(e2, t2);
      }
      static fromJsonString(e2, t2) {
        return new O().fromJsonString(e2, t2);
      }
      static equals(e2, t2) {
        return n.proto3.util.equals(O, e2, t2);
      }
      static $() {
        return ["ShellStreamStart|1 sandbox_policy #0?", o.Mw];
      }
    }
    class D extends c {
      constructor(e2) {
        super(), this.shellId = 0, this.command = "", this.workingDirectory = "", n.proto3.util.initPartial(e2, this);
      }
      static fromBinary(e2, t2) {
        return new D().fromBinary(e2, t2);
      }
      static fromJson(e2, t2) {
        return new D().fromJson(e2, t2);
      }
      static fromJsonString(e2, t2) {
        return new D().fromJsonString(e2, t2);
      }
      static equals(e2, t2) {
        return n.proto3.util.equals(D, e2, t2);
      }
      static $() {
        return ["ShellStreamBackgrounded|1 shell_id 13|2 command 9|3 working_directory 9|4 pid 13?|5 ms_to_wait 5?|6 reason #0?", d];
      }
    }
    class N extends c {
      constructor(e2) {
        super(), this.hookAdditionalContexts = [], n.proto3.util.initPartial(e2, this);
      }
      static fromBinary(e2, t2) {
        return new N().fromBinary(e2, t2);
      }
      static fromJson(e2, t2) {
        return new N().fromJson(e2, t2);
      }
      static fromJsonString(e2, t2) {
        return new N().fromJsonString(e2, t2);
      }
      static equals(e2, t2) {
        return n.proto3.util.equals(N, e2, t2);
      }
      static $() {
        return ["ShellStreamHookContext|1 hook_additional_contexts #0*", i.C];
      }
    }
    class F extends c {
      constructor(e2) {
        super(), this.command = "", this.workingDirectory = "", this.sandboxPolicyType = "", this.reason = "", this.isReadonly = false, n.proto3.util.initPartial(e2, this);
      }
      static fromBinary(e2, t2) {
        return new F().fromBinary(e2, t2);
      }
      static fromJson(e2, t2) {
        return new F().fromJson(e2, t2);
      }
      static fromJsonString(e2, t2) {
        return new F().fromJsonString(e2, t2);
      }
      static equals(e2, t2) {
        return n.proto3.util.equals(F, e2, t2);
      }
      static $() {
        return ["ShellSandboxUnsupported|1 command 9|2 working_directory 9|3 sandbox_policy_type 9|4 reason 9|5 is_readonly 8"];
      }
    }
    class L extends c {
      constructor(e2) {
        super(), this.event = { case: void 0 }, n.proto3.util.initPartial(e2, this);
      }
      static fromBinary(e2, t2) {
        return new L().fromBinary(e2, t2);
      }
      static fromJson(e2, t2) {
        return new L().fromJson(e2, t2);
      }
      static fromJsonString(e2, t2) {
        return new L().fromJsonString(e2, t2);
      }
      static equals(e2, t2) {
        return n.proto3.util.equals(L, e2, t2);
      }
      static $() {
        return ["ShellStream|1 stdout #0 event|2 stderr #1 event|3 exit #2 event|4 start #3 event|5 rejected #4 event|6 permission_denied #5 event|7 backgrounded #6 event|8 hook_context #7 event|9 sandbox_unsupported #8 event", P, M, R, O, q, j, D, N, F];
      }
    }
    class U extends c {
      constructor(e2) {
        super(), this.command = "", this.workingDirectory = "", this.exitCode = 0, this.signal = "", this.stdout = "", this.stderr = "", this.executionTime = 0, n.proto3.util.initPartial(e2, this);
      }
      static fromBinary(e2, t2) {
        return new U().fromBinary(e2, t2);
      }
      static fromJson(e2, t2) {
        return new U().fromJson(e2, t2);
      }
      static fromJsonString(e2, t2) {
        return new U().fromJsonString(e2, t2);
      }
      static equals(e2, t2) {
        return n.proto3.util.equals(U, e2, t2);
      }
      static $() {
        return ["ShellSuccess|1 command 9|2 working_directory 9|3 exit_code 5|4 signal 9|5 stdout 9|6 stderr 9|7 execution_time 5|8 output_location #0?|9 shell_id 13?|10 interleaved_output 9?|11 pid 13?|12 ms_to_wait 5?|13 local_execution_time_ms 5?|14 background_reason #1?|15 output_head 9?|16 output_tail 9?|17 elided_chars 13?", s.pV, d];
      }
    }
    class B extends c {
      constructor(e2) {
        super(), this.command = "", this.workingDirectory = "", this.exitCode = 0, this.signal = "", this.stdout = "", this.stderr = "", this.executionTime = 0, this.aborted = false, n.proto3.util.initPartial(e2, this);
      }
      static fromBinary(e2, t2) {
        return new B().fromBinary(e2, t2);
      }
      static fromJson(e2, t2) {
        return new B().fromJson(e2, t2);
      }
      static fromJsonString(e2, t2) {
        return new B().fromJsonString(e2, t2);
      }
      static equals(e2, t2) {
        return n.proto3.util.equals(B, e2, t2);
      }
      static $() {
        return ["ShellFailure|1 command 9|2 working_directory 9|3 exit_code 5|4 signal 9|5 stdout 9|6 stderr 9|7 execution_time 5|8 output_location #0?|9 interleaved_output 9?|10 abort_reason #1?|11 aborted 8|12 local_execution_time_ms 5?|13 output_head 9?|14 output_tail 9?|15 elided_chars 13?|16 oom_kill #2?", s.pV, h, I];
      }
    }
    class $ extends c {
      constructor(e2) {
        super(), this.command = "", this.workingDirectory = "", this.timeoutMs = 0, n.proto3.util.initPartial(e2, this);
      }
      static fromBinary(e2, t2) {
        return new $().fromBinary(e2, t2);
      }
      static fromJson(e2, t2) {
        return new $().fromJson(e2, t2);
      }
      static fromJsonString(e2, t2) {
        return new $().fromJsonString(e2, t2);
      }
      static equals(e2, t2) {
        return n.proto3.util.equals($, e2, t2);
      }
      static $() {
        return ["ShellTimeout|1 command 9|2 working_directory 9|3 timeout_ms 5"];
      }
    }
    class q extends c {
      constructor(e2) {
        super(), this.command = "", this.workingDirectory = "", this.reason = "", this.isReadonly = false, n.proto3.util.initPartial(e2, this);
      }
      static fromBinary(e2, t2) {
        return new q().fromBinary(e2, t2);
      }
      static fromJson(e2, t2) {
        return new q().fromJson(e2, t2);
      }
      static fromJsonString(e2, t2) {
        return new q().fromJsonString(e2, t2);
      }
      static equals(e2, t2) {
        return n.proto3.util.equals(q, e2, t2);
      }
      static $() {
        return ["ShellRejected|1 command 9|2 working_directory 9|3 reason 9|4 is_readonly 8"];
      }
    }
    class j extends c {
      constructor(e2) {
        super(), this.command = "", this.workingDirectory = "", this.error = "", this.isReadonly = false, n.proto3.util.initPartial(e2, this);
      }
      static fromBinary(e2, t2) {
        return new j().fromBinary(e2, t2);
      }
      static fromJson(e2, t2) {
        return new j().fromJson(e2, t2);
      }
      static fromJsonString(e2, t2) {
        return new j().fromJsonString(e2, t2);
      }
      static equals(e2, t2) {
        return n.proto3.util.equals(j, e2, t2);
      }
      static $() {
        return ["ShellPermissionDenied|1 command 9|2 working_directory 9|3 error 9|4 is_readonly 8"];
      }
    }
    class J extends c {
      constructor(e2) {
        super(), this.command = "", this.workingDirectory = "", this.error = "", n.proto3.util.initPartial(e2, this);
      }
      static fromBinary(e2, t2) {
        return new J().fromBinary(e2, t2);
      }
      static fromJson(e2, t2) {
        return new J().fromJson(e2, t2);
      }
      static fromJsonString(e2, t2) {
        return new J().fromJsonString(e2, t2);
      }
      static equals(e2, t2) {
        return n.proto3.util.equals(J, e2, t2);
      }
      static $() {
        return ["ShellSpawnError|1 command 9|2 working_directory 9|3 error 9"];
      }
    }
  }
// @recovered-by cursor-re
// artifact: app/extensions/cursor-always-local/dist/main.js sha256:14fb2d0e360d81a024b4ec605f417e030e19b30b2df99bc45648aa227060534e
// module: 7595 range:4313548..4390521
// basis: webpack-id confidence: C
// method: split
// run: ext-agent 2026-11-05T10:20:08.356Z
7595: (t2, e2, r2) => {
    "use strict";
    r2.d(e2, { $Y: () => xe, yT: () => Me, Nv: () => De, Ye: () => Qe, Kg: () => Ue });
    var n2 = r2(6038), s2 = r2(2671), i2 = r2(8592);
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
        super(), this.path = "", this.fileText = "", this.toolCallId = "", this.returnFileContentAfterWrite = false, this.fileBytes = new Uint8Array(0), n2.proto3.util.initPartial(t3, this);
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
        return ["WriteArgs|1 path 9|2 file_text 9|3 tool_call_id 9|4 return_file_content_after_write 8|5 file_bytes 12|6 encoding_hint 9?"];
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
        return ["WriteResult|1 success #0 result|3 permission_denied #1 result|4 no_space #2 result|5 error #3 result|6 rejected #4 result", c, l, m, d, f];
      }
    }
    class c extends o2 {
      constructor(t3) {
        super(), this.path = "", this.linesCreated = 0, this.fileSize = 0, n2.proto3.util.initPartial(t3, this);
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
        return ["WriteSuccess|1 path 9|2 lines_created 5|3 file_size 5|4 file_content_after_write 9?"];
      }
    }
    class l extends o2 {
      constructor(t3) {
        super(), this.path = "", this.directory = "", this.operation = "", this.error = "", this.isReadonly = false, n2.proto3.util.initPartial(t3, this);
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
        return ["WritePermissionDenied|1 path 9|2 directory 9|3 operation 9|4 error 9|5 is_readonly 8"];
      }
    }
    class m extends o2 {
      constructor(t3) {
        super(), this.path = "", n2.proto3.util.initPartial(t3, this);
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
        return ["WriteNoSpace|1 path 9"];
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
        return ["WriteError|1 path 9|2 error 9"];
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
        return ["WriteRejected|1 path 9|2 reason 9"];
      }
    }
    var p = r2(9260), h = r2(9903);
    class g extends i2.HL {
      static get runtime() {
        return (0, i2.kU)(this, "runtime", n2.proto3);
      }
      static $p() {
        return "agent.v1.";
      }
    }
    class A extends g {
      constructor(t3) {
        super(), this.path = "", this.toolCallId = "", n2.proto3.util.initPartial(t3, this);
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
        return ["ReadArgs|1 path 9|2 tool_call_id 9|4 offset 5?|5 limit 13?|6 encoding_hint 9?|7 digest_only 8?"];
      }
    }
    class _ extends g {
      constructor(t3) {
        super(), this.result = { case: void 0 }, n2.proto3.util.initPartial(t3, this);
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
        return ["ReadResult|1 success #0 result|2 error #1 result|3 rejected #2 result|4 file_not_found #3 result|5 permission_denied #4 result|6 invalid_file #5 result", y, w, S, J, B, E];
      }
    }
    class y extends g {
      constructor(t3) {
        super(), this.path = "", this.output = { case: void 0 }, this.totalLines = 0, this.fileSize = n2.protoInt64.zero, this.truncated = false, this.rangeApplied = false, n2.proto3.util.initPartial(t3, this);
      }
      static fromBinary(t3, e3) {
        return new y().fromBinary(t3, e3);
      }
      static fromJson(t3, e3) {
        return new y().fromJson(t3, e3);
      }
      static fromJsonString(t3, e3) {
        return new y().fromJsonString(t3, e3);
      }
      static equals(t3, e3) {
        return n2.proto3.util.equals(y, t3, e3);
      }
      static $() {
        return ["ReadSuccess|1 path 9|2 content 9 output|5 data 12 output|3 total_lines 5|4 file_size 3|6 truncated 8|7 output_blob_id 12?|8 range_applied 8|9 sha256 9?|10 size_bytes 3?"];
      }
    }
    class w extends g {
      constructor(t3) {
        super(), this.path = "", this.error = "", n2.proto3.util.initPartial(t3, this);
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
        return ["ReadError|1 path 9|2 error 9"];
      }
    }
    class S extends g {
      constructor(t3) {
        super(), this.path = "", this.reason = "", n2.proto3.util.initPartial(t3, this);
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
        return ["ReadRejected|1 path 9|2 reason 9"];
      }
    }
    class J extends g {
      constructor(t3) {
        super(), this.path = "", n2.proto3.util.initPartial(t3, this);
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
        return ["ReadFileNotFound|1 path 9"];
      }
    }
    class B extends g {
      constructor(t3) {
        super(), this.path = "", n2.proto3.util.initPartial(t3, this);
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
        return ["ReadPermissionDenied|1 path 9"];
      }
    }
    class E extends g {
      constructor(t3) {
        super(), this.path = "", this.reason = "", n2.proto3.util.initPartial(t3, this);
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
        return ["ReadInvalidFile|1 path 9|2 reason 9"];
      }
    }
    var I = r2(2730), C = r2(6885), b = r2(9639), k = r2(1197), v = r2(4498), q = r2(1489), R = r2(1531), P = r2(3643), T = r2(6209), x = r2(1491), N = r2(9582);
    const D = "agent.v1.";
    class U extends i2.HL {
      static get runtime() {
        return (0, i2.kU)(this, "runtime", n2.proto3);
      }
      static $p() {
        return D;
      }
    }
    var Q = (0, i2.QT)(n2.proto3, D, "ForceBackgroundSubagentStatus", [[0, "UNSPECIFIED"], [1, "ACCEPTED"], [2, "NOT_FOUND"]], 1);
    class M extends U {
      constructor(t3) {
        super(), this.toolCallId = "", this.subagentType = "", this.modelId = "", this.prompt = "", this.readonly = false, this.credentials = { case: void 0 }, this.mode = x.FL.UNSPECIFIED, this.environment = x.dU.UNSPECIFIED, this.modelParameters = [], n2.proto3.util.initPartial(t3, this);
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
        return ["SubagentArgs|1 tool_call_id 9|2 subagent_type 9|3 model_id 9|4 prompt 9|5 readonly 8|6 resume_agent_id 9?|7 run_in_background 8?|8 continuation_config #0|9 parent_conversation_id 9?|10 api_key_credentials #1 credentials|11 azure_credentials #2 credentials|12 bedrock_credentials #3 credentials|13 interrupt 8?|14 mode #4|15 fork_agent_id 9?|16 root_parent_conversation_id 9?|17 selected_context #5?|18 direct_meta_parent_child_subagent 8?|19 environment #6|20 cloud_base_branch 9?|21 model_parameters #7*", O, T.G0, T.ih, T.R4, x.FL, N.xv, x.dU, T.SR];
      }
    }
    class O extends U {
      constructor(t3) {
        super(), this.idleThreshold = 0, this.maxLoops = 0, this.nudgeMessage = "", this.escapeMessageTemplate = "", this.collectBackgroundChildren = false, this.childrenCompletedMessageTemplate = "", this.continuationRoundDelayMs = 0, n2.proto3.util.initPartial(t3, this);
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
        return ["ClientContinuationConfig|1 idle_threshold 5|2 max_loops 5|3 nudge_message 9|4 escape_message_template 9|5 collect_background_children 8|6 children_completed_message_template 9|7 continuation_round_delay_ms 5"];
      }
    }
    class F extends U {
      constructor(t3) {
        super(), this.result = { case: void 0 }, n2.proto3.util.initPartial(t3, this);
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
        return ["SubagentResult|1 success #0 result|2 error #1 result", z, W];
      }
    }
    class L extends U {
      constructor(t3) {
        super(), this.agentId = "", this.timeoutMs = 0, n2.proto3.util.initPartial(t3, this);
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
        return ["SubagentAwaitArgs|1 agent_id 9|2 timeout_ms 13"];
      }
    }
    class $ extends U {
      constructor(t3) {
        super(), this.result = { case: void 0 }, n2.proto3.util.initPartial(t3, this);
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
        return ["SubagentAwaitResult|1 complete #0 result|2 still_running #1 result|3 not_found #2 result|4 error #3 result", G, H, K, V];
      }
    }
    class G extends U {
      constructor(t3) {
        super(), this.agentId = "", this.toolCallCount = 0, n2.proto3.util.initPartial(t3, this);
      }
      static fromBinary(t3, e3) {
        return new G().fromBinary(t3, e3);
      }
      static fromJson(t3, e3) {
        return new G().fromJson(t3, e3);
      }
      static fromJsonString(t3, e3) {
        return new G().fromJsonString(t3, e3);
      }
      static equals(t3, e3) {
        return n2.proto3.util.equals(G, t3, e3);
      }
      static $() {
        return ["SubagentAwaitComplete|1 agent_id 9|2 transcript_path 9?|3 tool_call_count 5|4 final_message 9?"];
      }
    }
    class H extends U {
      constructor(t3) {
        super(), this.agentId = "", n2.proto3.util.initPartial(t3, this);
      }
      static fromBinary(t3, e3) {
        return new H().fromBinary(t3, e3);
      }
      static fromJson(t3, e3) {
        return new H().fromJson(t3, e3);
      }
      static fromJsonString(t3, e3) {
        return new H().fromJsonString(t3, e3);
      }
      static equals(t3, e3) {
        return n2.proto3.util.equals(H, t3, e3);
      }
      static $() {
        return ["SubagentAwaitStillRunning|1 agent_id 9|2 transcript_path 9?"];
      }
    }
    class K extends U {
      constructor(t3) {
        super(), this.agentId = "", n2.proto3.util.initPartial(t3, this);
      }
      static fromBinary(t3, e3) {
        return new K().fromBinary(t3, e3);
      }
      static fromJson(t3, e3) {
        return new K().fromJson(t3, e3);
      }
      static fromJsonString(t3, e3) {
        return new K().fromJsonString(t3, e3);
      }
      static equals(t3, e3) {
        return n2.proto3.util.equals(K, t3, e3);
      }
      static $() {
        return ["SubagentAwaitNotFound|1 agent_id 9"];
      }
    }
    class V extends U {
      constructor(t3) {
        super(), this.error = "", n2.proto3.util.initPartial(t3, this);
      }
      static fromBinary(t3, e3) {
        return new V().fromBinary(t3, e3);
      }
      static fromJson(t3, e3) {
        return new V().fromJson(t3, e3);
      }
      static fromJsonString(t3, e3) {
        return new V().fromJsonString(t3, e3);
      }
      static equals(t3, e3) {
        return n2.proto3.util.equals(V, t3, e3);
      }
      static $() {
        return ["SubagentAwaitError|1 agent_id 9?|2 error 9"];
      }
    }
    class z extends U {
      constructor(t3) {
        super(), this.agentId = "", this.toolCallCount = 0, this.backgroundReason = x.qL.UNSPECIFIED, n2.proto3.util.initPartial(t3, this);
      }
      static fromBinary(t3, e3) {
        return new z().fromBinary(t3, e3);
      }
      static fromJson(t3, e3) {
        return new z().fromJson(t3, e3);
      }
      static fromJsonString(t3, e3) {
        return new z().fromJsonString(t3, e3);
      }
      static equals(t3, e3) {
        return n2.proto3.util.equals(z, t3, e3);
      }
      static $() {
        return ["SubagentSuccess|1 agent_id 9|2 final_message 9?|3 tool_call_count 5|4 background_reason #0|5 transcript_path 9?", x.qL];
      }
    }
    class W extends U {
      constructor(t3) {
        super(), this.error = "", n2.proto3.util.initPartial(t3, this);
      }
      static fromBinary(t3, e3) {
        return new W().fromBinary(t3, e3);
      }
      static fromJson(t3, e3) {
        return new W().fromJson(t3, e3);
      }
      static fromJsonString(t3, e3) {
        return new W().fromJsonString(t3, e3);
      }
      static equals(t3, e3) {
        return n2.proto3.util.equals(W, t3, e3);
      }
      static $() {
        return ["SubagentError|1 agent_id 9?|2 error 9"];
      }
    }
    class Y extends U {
      constructor(t3) {
        super(), this.toolCallId = "", n2.proto3.util.initPartial(t3, this);
      }
      static fromBinary(t3, e3) {
        return new Y().fromBinary(t3, e3);
      }
      static fromJson(t3, e3) {
        return new Y().fromJson(t3, e3);
      }
      static fromJsonString(t3, e3) {
        return new Y().fromJsonString(t3, e3);
      }
      static equals(t3, e3) {
        return n2.proto3.util.equals(Y, t3, e3);
      }
      static $() {
        return ["ForceBackgroundSubagentArgs|1 tool_call_id 9"];
      }
    }
    class j extends U {
      constructor(t3) {
        super(), this.status = Q.UNSPECIFIED, n2.proto3.util.initPartial(t3, this);
      }
      static fromBinary(t3, e3) {
        return new j().fromBinary(t3, e3);
      }
      static fromJson(t3, e3) {
        return new j().fromJson(t3, e3);
      }
      static fromJsonString(t3, e3) {
        return new j().fromJsonString(t3, e3);
      }
      static equals(t3, e3) {
        return n2.proto3.util.equals(j, t3, e3);
      }
      static $() {
        return ["ForceBackgroundSubagentResult|1 status #0", Q];
      }
    }
    var X = r2(8846);
    class Z extends i2.HL {
      static get runtime() {
        return (0, i2.kU)(this, "runtime", n2.proto3);
      }
      static $p() {
        return "agent.v1.";
      }
    }
    class tt extends Z {
      constructor(t3) {
        super(), this.path = "", this.toolCallId = "", n2.proto3.util.initPartial(t3, this);
      }
      static fromBinary(t3, e3) {
        return new tt().fromBinary(t3, e3);
      }
      static fromJson(t3, e3) {
        return new tt().fromJson(t3, e3);
      }
      static fromJsonString(t3, e3) {
        return new tt().fromJsonString(t3, e3);
      }
      static equals(t3, e3) {
        return n2.proto3.util.equals(tt, t3, e3);
      }
      static $() {
        return ["CanvasDiagnosticsArgs|1 path 9|2 tool_call_id 9"];
      }
    }
    class et extends Z {
      constructor(t3) {
        super(), this.result = { case: void 0 }, n2.proto3.util.initPartial(t3, this);
      }
      static fromBinary(t3, e3) {
        return new et().fromBinary(t3, e3);
      }
      static fromJson(t3, e3) {
        return new et().fromJson(t3, e3);
      }
      static fromJsonString(t3, e3) {
        return new et().fromJsonString(t3, e3);
      }
      static equals(t3, e3) {
        return n2.proto3.util.equals(et, t3, e3);
      }
      static $() {
        return ["CanvasDiagnosticsResult|1 success #0 result|2 error #1 result|3 canvas_id 9?|4 title 9?|5 save_state 9?|6 save_detail 9?", rt, nt];
      }
    }
    class rt extends Z {
      constructor(t3) {
        super(), this.path = "", this.diagnostics = [], n2.proto3.util.initPartial(t3, this);
      }
      static fromBinary(t3, e3) {
        return new rt().fromBinary(t3, e3);
      }
      static fromJson(t3, e3) {
        return new rt().fromJson(t3, e3);
      }
      static fromJsonString(t3, e3) {
        return new rt().fromJsonString(t3, e3);
      }
      static equals(t3, e3) {
        return n2.proto3.util.equals(rt, t3, e3);
      }
      static $() {
        return ["CanvasDiagnosticsSuccess|1 path 9|2 diagnostics #0*", C.oQ];
      }
    }
    class nt extends Z {
      constructor(t3) {
        super(), this.path = "", this.error = "", n2.proto3.util.initPartial(t3, this);
      }
      static fromBinary(t3, e3) {
        return new nt().fromBinary(t3, e3);
      }
      static fromJson(t3, e3) {
        return new nt().fromJson(t3, e3);
      }
      static fromJsonString(t3, e3) {
        return new nt().fromJsonString(t3, e3);
      }
      static equals(t3, e3) {
        return n2.proto3.util.equals(nt, t3, e3);
      }
      static $() {
        return ["CanvasDiagnosticsError|1 path 9|2 error 9"];
      }
    }
    class st extends i2.HL {
      static get runtime() {
        return (0, i2.kU)(this, "runtime", n2.proto3);
      }
      static $p() {
        return "agent.v1.";
      }
    }
    class it extends st {
      constructor(t3) {
        super(), this.command = "", this.workingDirectory = "", n2.proto3.util.initPartial(t3, this);
      }
      static fromBinary(t3, e3) {
        return new it().fromBinary(t3, e3);
      }
      static fromJson(t3, e3) {
        return new it().fromJson(t3, e3);
      }
      static fromJsonString(t3, e3) {
        return new it().fromJsonString(t3, e3);
      }
      static equals(t3, e3) {
        return n2.proto3.util.equals(it, t3, e3);
      }
      static $() {
        return ["ShellAllowlistPrecheckArgs|1 command 9|2 working_directory 9|3 parsing_result #0|4 classifier_result #1?|5 tool_call_id 9?", s2.HO, s2.E4];
      }
    }
    class ot extends st {
      constructor(t3) {
        super(), this.allowlisted = false, n2.proto3.util.initPartial(t3, this);
      }
      static fromBinary(t3, e3) {
        return new ot().fromBinary(t3, e3);
      }
      static fromJson(t3, e3) {
        return new ot().fromJson(t3, e3);
      }
      static fromJsonString(t3, e3) {
        return new ot().fromJsonString(t3, e3);
      }
      static equals(t3, e3) {
        return n2.proto3.util.equals(ot, t3, e3);
      }
      static $() {
        return ["ShellAllowlistPrecheckResult|1 allowlisted 8"];
      }
    }
    class at extends i2.HL {
      static get runtime() {
        return (0, i2.kU)(this, "runtime", n2.proto3);
      }
      static $p() {
        return "agent.v1.";
      }
    }
    class ut extends at {
      constructor(t3) {
        super(), this.providerIdentifier = "", this.toolName = "", n2.proto3.util.initPartial(t3, this);
      }
      static fromBinary(t3, e3) {
        return new ut().fromBinary(t3, e3);
      }
      static fromJson(t3, e3) {
        return new ut().fromJson(t3, e3);
      }
      static fromJsonString(t3, e3) {
        return new ut().fromJsonString(t3, e3);
      }
      static equals(t3, e3) {
        return n2.proto3.util.equals(ut, t3, e3);
      }
      static $() {
        return ["McpAllowlistPrecheckArgs|1 provider_identifier 9|2 tool_name 9|3 tool_call_id 9?|4 annotations_json 9?"];
      }
    }
    class ct extends at {
      constructor(t3) {
        super(), this.allowlisted = false, n2.proto3.util.initPartial(t3, this);
      }
      static fromBinary(t3, e3) {
        return new ct().fromBinary(t3, e3);
      }
      static fromJson(t3, e3) {
        return new ct().fromJson(t3, e3);
      }
      static fromJsonString(t3, e3) {
        return new ct().fromJsonString(t3, e3);
      }
      static equals(t3, e3) {
        return n2.proto3.util.equals(ct, t3, e3);
      }
      static $() {
        return ["McpAllowlistPrecheckResult|1 allowlisted 8"];
      }
    }
    class lt extends i2.HL {
      static get runtime() {
        return (0, i2.kU)(this, "runtime", n2.proto3);
      }
      static $p() {
        return "agent.v1.";
      }
    }
    class mt extends lt {
      constructor(t3) {
        super(), this.url = "", n2.proto3.util.initPartial(t3, this);
      }
      static fromBinary(t3, e3) {
        return new mt().fromBinary(t3, e3);
      }
      static fromJson(t3, e3) {
        return new mt().fromJson(t3, e3);
      }
      static fromJsonString(t3, e3) {
        return new mt().fromJsonString(t3, e3);
      }
      static equals(t3, e3) {
        return n2.proto3.util.equals(mt, t3, e3);
      }
      static $() {
        return ["WebFetchAllowlistPrecheckArgs|1 url 9|2 tool_call_id 9?"];
      }
    }
    class dt extends lt {
      constructor(t3) {
        super(), this.allowlisted = false, n2.proto3.util.initPartial(t3, this);
      }
      static fromBinary(t3, e3) {
        return new dt().fromBinary(t3, e3);
      }
      static fromJson(t3, e3) {
        return new dt().fromJson(t3, e3);
      }
      static fromJsonString(t3, e3) {
        return new dt().fromJsonString(t3, e3);
      }
      static equals(t3, e3) {
        return n2.proto3.util.equals(dt, t3, e3);
      }
      static $() {
        return ["WebFetchAllowlistPrecheckResult|1 allowlisted 8"];
      }
    }
    var ft = r2(7918), pt = r2(8036);
    class ht extends i2.HL {
      static get runtime() {
        return (0, i2.kU)(this, "runtime", n2.proto3);
      }
      static $p() {
        return "agent.v1.";
      }
    }
    class gt extends ht {
      constructor(t3) {
        super(), this.path = "", n2.proto3.util.initPartial(t3, this);
      }
      static fromBinary(t3, e3) {
        return new gt().fromBinary(t3, e3);
      }
      static fromJson(t3, e3) {
        return new gt().fromJson(t3, e3);
      }
      static fromJsonString(t3, e3) {
        return new gt().fromJsonString(t3, e3);
      }
      static equals(t3, e3) {
        return n2.proto3.util.equals(gt, t3, e3);
      }
      static $() {
        return ["PiReadExecArgs|1 path 9|2 offset 5?|3 limit 5?"];
      }
    }
    class At extends ht {
      constructor(t3) {
        super(), this.result = { case: void 0 }, n2.proto3.util.initPartial(t3, this);
      }
      static fromBinary(t3, e3) {
        return new At().fromBinary(t3, e3);
      }
      static fromJson(t3, e3) {
        return new At().fromJson(t3, e3);
      }
      static fromJsonString(t3, e3) {
        return new At().fromJsonString(t3, e3);
      }
      static equals(t3, e3) {
        return n2.proto3.util.equals(At, t3, e3);
      }
      static $() {
        return ["PiReadExecResult|1 success #0 result|2 error #1 result", _t, yt];
      }
    }
    class _t extends ht {
      constructor(t3) {
        super(), this.output = "", n2.proto3.util.initPartial(t3, this);
      }
      static fromBinary(t3, e3) {
        return new _t().fromBinary(t3, e3);
      }
      static fromJson(t3, e3) {
        return new _t().fromJson(t3, e3);
      }
      static fromJsonString(t3, e3) {
        return new _t().fromJsonString(t3, e3);
      }
      static equals(t3, e3) {
        return n2.proto3.util.equals(_t, t3, e3);
      }
      static $() {
        return ["PiReadExecSuccess|1 output 9|2 truncation #0?", pt.d];
      }
    }
    class yt extends ht {
      constructor(t3) {
        super(), this.error = "", n2.proto3.util.initPartial(t3, this);
      }
      static fromBinary(t3, e3) {
        return new yt().fromBinary(t3, e3);
      }
      static fromJson(t3, e3) {
        return new yt().fromJson(t3, e3);
      }
      static fromJsonString(t3, e3) {
        return new yt().fromJsonString(t3, e3);
      }
      static equals(t3, e3) {
        return n2.proto3.util.equals(yt, t3, e3);
      }
      static $() {
        return ["PiReadExecError|1 error 9"];
      }
    }
    class wt extends i2.HL {
      static get runtime() {
        return (0, i2.kU)(this, "runtime", n2.proto3);
      }
      static $p() {
        return "agent.v1.";
      }
    }
    class St extends wt {
      constructor(t3) {
        super(), this.command = "", n2.proto3.util.initPartial(t3, this);
      }
      static fromBinary(t3, e3) {
        return new St().fromBinary(t3, e3);
      }
      static fromJson(t3, e3) {
        return new St().fromJson(t3, e3);
      }
      static fromJsonString(t3, e3) {
        return new St().fromJsonString(t3, e3);
      }
      static equals(t3, e3) {
        return n2.proto3.util.equals(St, t3, e3);
      }
      static $() {
        return ["PiBashExecArgs|1 command 9|2 timeout 1?"];
      }
    }
    class Jt extends wt {
      constructor(t3) {
        super(), this.result = { case: void 0 }, n2.proto3.util.initPartial(t3, this);
      }
      static fromBinary(t3, e3) {
        return new Jt().fromBinary(t3, e3);
      }
      static fromJson(t3, e3) {
        return new Jt().fromJson(t3, e3);
      }
      static fromJsonString(t3, e3) {
        return new Jt().fromJsonString(t3, e3);
      }
      static equals(t3, e3) {
        return n2.proto3.util.equals(Jt, t3, e3);
      }
      static $() {
        return ["PiBashExecResult|1 success #0 result|2 error #1 result", Bt, Et];
      }
    }
    class Bt extends wt {
      constructor(t3) {
        super(), this.output = "", n2.proto3.util.initPartial(t3, this);
      }
      static fromBinary(t3, e3) {
        return new Bt().fromBinary(t3, e3);
      }
      static fromJson(t3, e3) {
        return new Bt().fromJson(t3, e3);
      }
      static fromJsonString(t3, e3) {
        return new Bt().fromJsonString(t3, e3);
      }
      static equals(t3, e3) {
        return n2.proto3.util.equals(Bt, t3, e3);
      }
      static $() {
        return ["PiBashExecSuccess|1 output 9|2 truncation #0?|3 full_output_path 9?", pt.d];
      }
    }
    class Et extends wt {
      constructor(t3) {
        super(), this.error = "", n2.proto3.util.initPartial(t3, this);
      }
      static fromBinary(t3, e3) {
        return new Et().fromBinary(t3, e3);
      }
      static fromJson(t3, e3) {
        return new Et().fromJson(t3, e3);
      }
      static fromJsonString(t3, e3) {
        return new Et().fromJsonString(t3, e3);
      }
      static equals(t3, e3) {
        return n2.proto3.util.equals(Et, t3, e3);
      }
      static $() {
        return ["PiBashExecError|1 error 9|2 truncation #0?|3 full_output_path 9?", pt.d];
      }
    }
    var It = r2(2628);
    class Ct extends i2.HL {
      static get runtime() {
        return (0, i2.kU)(this, "runtime", n2.proto3);
      }
      static $p() {
        return "agent.v1.";
      }
    }
    class bt extends Ct {
      constructor(t3) {
        super(), this.path = "", this.edits = [], n2.proto3.util.initPartial(t3, this);
      }
      static fromBinary(t3, e3) {
        return new bt().fromBinary(t3, e3);
      }
      static fromJson(t3, e3) {
        return new bt().fromJson(t3, e3);
      }
      static fromJsonString(t3, e3) {
        return new bt().fromJsonString(t3, e3);
      }
      static equals(t3, e3) {
        return n2.proto3.util.equals(bt, t3, e3);
      }
      static $() {
        return ["PiEditExecArgs|1 path 9|2 edits #0*", It.mR];
      }
    }
    class kt extends Ct {
      constructor(t3) {
        super(), this.result = { case: void 0 }, n2.proto3.util.initPartial(t3, this);
      }
      static fromBinary(t3, e3) {
        return new kt().fromBinary(t3, e3);
      }
      static fromJson(t3, e3) {
        return new kt().fromJson(t3, e3);
      }
      static fromJsonString(t3, e3) {
        return new kt().fromJsonString(t3, e3);
      }
      static equals(t3, e3) {
        return n2.proto3.util.equals(kt, t3, e3);
      }
      static $() {
        return ["PiEditExecResult|1 success #0 result|2 error #1 result|3 rejected #2 result", vt, qt, Rt];
      }
    }
    class vt extends Ct {
      constructor(t3) {
        super(), this.output = "", this.diff = "", this.patch = "", n2.proto3.util.initPartial(t3, this);
      }
      static fromBinary(t3, e3) {
        return new vt().fromBinary(t3, e3);
      }
      static fromJson(t3, e3) {
        return new vt().fromJson(t3, e3);
      }
      static fromJsonString(t3, e3) {
        return new vt().fromJsonString(t3, e3);
      }
      static equals(t3, e3) {
        return n2.proto3.util.equals(vt, t3, e3);
      }
      static $() {
        return ["PiEditExecSuccess|1 output 9|2 diff 9|3 patch 9|4 first_changed_line 13?"];
      }
    }
    class qt extends Ct {
      constructor(t3) {
        super(), this.error = "", n2.proto3.util.initPartial(t3, this);
      }
      static fromBinary(t3, e3) {
        return new qt().fromBinary(t3, e3);
      }
      static fromJson(t3, e3) {
        return new qt().fromJson(t3, e3);
      }
      static fromJsonString(t3, e3) {
        return new qt().fromJsonString(t3, e3);
      }
      static equals(t3, e3) {
        return n2.proto3.util.equals(qt, t3, e3);
      }
      static $() {
        return ["PiEditExecError|1 error 9"];
      }
    }
    class Rt extends Ct {
      constructor(t3) {
        super(), this.reason = "", n2.proto3.util.initPartial(t3, this);
      }
      static fromBinary(t3, e3) {
        return new Rt().fromBinary(t3, e3);
      }
      static fromJson(t3, e3) {
        return new Rt().fromJson(t3, e3);
      }
      static fromJsonString(t3, e3) {
        return new Rt().fromJsonString(t3, e3);
      }
      static equals(t3, e3) {
        return n2.proto3.util.equals(Rt, t3, e3);
      }
      static $() {
        return ["PiEditExecRejected|1 reason 9"];
      }
    }
    class Pt extends i2.HL {
      static get runtime() {
        return (0, i2.kU)(this, "runtime", n2.proto3);
      }
      static $p() {
        return "agent.v1.";
      }
    }
    class Tt extends Pt {
      constructor(t3) {
        super(), this.path = "", this.content = "", n2.proto3.util.initPartial(t3, this);
      }
      static fromBinary(t3, e3) {
        return new Tt().fromBinary(t3, e3);
      }
      static fromJson(t3, e3) {
        return new Tt().fromJson(t3, e3);
      }
      static fromJsonString(t3, e3) {
        return new Tt().fromJsonString(t3, e3);
      }
      static equals(t3, e3) {
        return n2.proto3.util.equals(Tt, t3, e3);
      }
      static $() {
        return ["PiWriteExecArgs|1 path 9|2 content 9"];
      }
    }
    class xt extends Pt {
      constructor(t3) {
        super(), this.result = { case: void 0 }, n2.proto3.util.initPartial(t3, this);
      }
      static fromBinary(t3, e3) {
        return new xt().fromBinary(t3, e3);
      }
      static fromJson(t3, e3) {
        return new xt().fromJson(t3, e3);
      }
      static fromJsonString(t3, e3) {
        return new xt().fromJsonString(t3, e3);
      }
      static equals(t3, e3) {
        return n2.proto3.util.equals(xt, t3, e3);
      }
      static $() {
        return ["PiWriteExecResult|1 success #0 result|2 error #1 result|3 rejected #2 result", Nt, Dt, Ut];
      }
    }
    class Nt extends Pt {
      constructor(t3) {
        super(), this.output = "", n2.proto3.util.initPartial(t3, this);
      }
      static fromBinary(t3, e3) {
        return new Nt().fromBinary(t3, e3);
      }
      static fromJson(t3, e3) {
        return new Nt().fromJson(t3, e3);
      }
      static fromJsonString(t3, e3) {
        return new Nt().fromJsonString(t3, e3);
      }
      static equals(t3, e3) {
        return n2.proto3.util.equals(Nt, t3, e3);
      }
      static $() {
        return ["PiWriteExecSuccess|1 output 9"];
      }
    }
    class Dt extends Pt {
      constructor(t3) {
        super(), this.error = "", n2.proto3.util.initPartial(t3, this);
      }
      static fromBinary(t3, e3) {
        return new Dt().fromBinary(t3, e3);
      }
      static fromJson(t3, e3) {
        return new Dt().fromJson(t3, e3);
      }
      static fromJsonString(t3, e3) {
        return new Dt().fromJsonString(t3, e3);
      }
      static equals(t3, e3) {
        return n2.proto3.util.equals(Dt, t3, e3);
      }
      static $() {
        return ["PiWriteExecError|1 error 9"];
      }
    }
    class Ut extends Pt {
      constructor(t3) {
        super(), this.reason = "", n2.proto3.util.initPartial(t3, this);
      }
      static fromBinary(t3, e3) {
        return new Ut().fromBinary(t3, e3);
      }
      static fromJson(t3, e3) {
        return new Ut().fromJson(t3, e3);
      }
      static fromJsonString(t3, e3) {
        return new Ut().fromJsonString(t3, e3);
      }
      static equals(t3, e3) {
        return n2.proto3.util.equals(Ut, t3, e3);
      }
      static $() {
        return ["PiWriteExecRejected|1 reason 9"];
      }
    }
    class Qt extends i2.HL {
      static get runtime() {
        return (0, i2.kU)(this, "runtime", n2.proto3);
      }
      static $p() {
        return "agent.v1.";
      }
    }
    class Mt extends Qt {
      constructor(t3) {
        super(), this.pattern = "", n2.proto3.util.initPartial(t3, this);
      }
      static fromBinary(t3, e3) {
        return new Mt().fromBinary(t3, e3);
      }
      static fromJson(t3, e3) {
        return new Mt().fromJson(t3, e3);
      }
      static fromJsonString(t3, e3) {
        return new Mt().fromJsonString(t3, e3);
      }
      static equals(t3, e3) {
        return n2.proto3.util.equals(Mt, t3, e3);
      }
      static $() {
        return ["PiGrepExecArgs|1 pattern 9|2 path 9?|3 glob 9?|4 ignore_case 8?|5 literal 8?|6 context 5?|7 limit 5?"];
      }
    }
    class Ot extends Qt {
      constructor(t3) {
        super(), this.result = { case: void 0 }, n2.proto3.util.initPartial(t3, this);
      }
      static fromBinary(t3, e3) {
        return new Ot().fromBinary(t3, e3);
      }
      static fromJson(t3, e3) {
        return new Ot().fromJson(t3, e3);
      }
      static fromJsonString(t3, e3) {
        return new Ot().fromJsonString(t3, e3);
      }
      static equals(t3, e3) {
        return n2.proto3.util.equals(Ot, t3, e3);
      }
      static $() {
        return ["PiGrepExecResult|1 success #0 result|2 error #1 result", Ft, Lt];
      }
    }
    class Ft extends Qt {
      constructor(t3) {
        super(), this.output = "", this.linesTruncated = false, n2.proto3.util.initPartial(t3, this);
      }
      static fromBinary(t3, e3) {
        return new Ft().fromBinary(t3, e3);
      }
      static fromJson(t3, e3) {
        return new Ft().fromJson(t3, e3);
      }
      static fromJsonString(t3, e3) {
        return new Ft().fromJsonString(t3, e3);
      }
      static equals(t3, e3) {
        return n2.proto3.util.equals(Ft, t3, e3);
      }
      static $() {
        return ["PiGrepExecSuccess|1 output 9|2 truncation #0?|3 match_limit_reached 13?|4 lines_truncated 8", pt.d];
      }
    }
    class Lt extends Qt {
      constructor(t3) {
        super(), this.error = "", n2.proto3.util.initPartial(t3, this);
      }
      static fromBinary(t3, e3) {
        return new Lt().fromBinary(t3, e3);
      }
      static fromJson(t3, e3) {
        return new Lt().fromJson(t3, e3);
      }
      static fromJsonString(t3, e3) {
        return new Lt().fromJsonString(t3, e3);
      }
      static equals(t3, e3) {
        return n2.proto3.util.equals(Lt, t3, e3);
      }
      static $() {
        return ["PiGrepExecError|1 error 9"];
      }
    }
    class $t extends i2.HL {
      static get runtime() {
        return (0, i2.kU)(this, "runtime", n2.proto3);
      }
      static $p() {
        return "agent.v1.";
      }
    }
    class Gt extends $t {
      constructor(t3) {
        super(), this.pattern = "", n2.proto3.util.initPartial(t3, this);
      }
      static fromBinary(t3, e3) {
        return new Gt().fromBinary(t3, e3);
      }
      static fromJson(t3, e3) {
        return new Gt().fromJson(t3, e3);
      }
      static fromJsonString(t3, e3) {
        return new Gt().fromJsonString(t3, e3);
      }
      static equals(t3, e3) {
        return n2.proto3.util.equals(Gt, t3, e3);
      }
      static $() {
        return ["PiFindExecArgs|1 pattern 9|2 path 9?|3 limit 5?"];
      }
    }
    class Ht extends $t {
      constructor(t3) {
        super(), this.result = { case: void 0 }, n2.proto3.util.initPartial(t3, this);
      }
      static fromBinary(t3, e3) {
        return new Ht().fromBinary(t3, e3);
      }
      static fromJson(t3, e3) {
        return new Ht().fromJson(t3, e3);
      }
      static fromJsonString(t3, e3) {
        return new Ht().fromJsonString(t3, e3);
      }
      static equals(t3, e3) {
        return n2.proto3.util.equals(Ht, t3, e3);
      }
      static $() {
        return ["PiFindExecResult|1 success #0 result|2 error #1 result", Kt, Vt];
      }
    }
    class Kt extends $t {
      constructor(t3) {
        super(), this.output = "", n2.proto3.util.initPartial(t3, this);
      }
      static fromBinary(t3, e3) {
        return new Kt().fromBinary(t3, e3);
      }
      static fromJson(t3, e3) {
        return new Kt().fromJson(t3, e3);
      }
      static fromJsonString(t3, e3) {
        return new Kt().fromJsonString(t3, e3);
      }
      static equals(t3, e3) {
        return n2.proto3.util.equals(Kt, t3, e3);
      }
      static $() {
        return ["PiFindExecSuccess|1 output 9|2 truncation #0?|3 result_limit_reached 13?", pt.d];
      }
    }
    class Vt extends $t {
      constructor(t3) {
        super(), this.error = "", n2.proto3.util.initPartial(t3, this);
      }
      static fromBinary(t3, e3) {
        return new Vt().fromBinary(t3, e3);
      }
      static fromJson(t3, e3) {
        return new Vt().fromJson(t3, e3);
      }
      static fromJsonString(t3, e3) {
        return new Vt().fromJsonString(t3, e3);
      }
      static equals(t3, e3) {
        return n2.proto3.util.equals(Vt, t3, e3);
      }
      static $() {
        return ["PiFindExecError|1 error 9"];
      }
    }
    class zt extends i2.HL {
      static get runtime() {
        return (0, i2.kU)(this, "runtime", n2.proto3);
      }
      static $p() {
        return "agent.v1.";
      }
    }
    class Wt extends zt {
      constructor(t3) {
        super(), n2.proto3.util.initPartial(t3, this);
      }
      static fromBinary(t3, e3) {
        return new Wt().fromBinary(t3, e3);
      }
      static fromJson(t3, e3) {
        return new Wt().fromJson(t3, e3);
      }
      static fromJsonString(t3, e3) {
        return new Wt().fromJsonString(t3, e3);
      }
      static equals(t3, e3) {
        return n2.proto3.util.equals(Wt, t3, e3);
      }
      static $() {
        return ["PiLsExecArgs|1 path 9?|2 limit 5?"];
      }
    }
    class Yt extends zt {
      constructor(t3) {
        super(), this.result = { case: void 0 }, n2.proto3.util.initPartial(t3, this);
      }
      static fromBinary(t3, e3) {
        return new Yt().fromBinary(t3, e3);
      }
      static fromJson(t3, e3) {
        return new Yt().fromJson(t3, e3);
      }
      static fromJsonString(t3, e3) {
        return new Yt().fromJsonString(t3, e3);
      }
      static equals(t3, e3) {
        return n2.proto3.util.equals(Yt, t3, e3);
      }
      static $() {
        return ["PiLsExecResult|1 success #0 result|2 error #1 result", jt, Xt];
      }
    }
    class jt extends zt {
      constructor(t3) {
        super(), this.output = "", n2.proto3.util.initPartial(t3, this);
      }
      static fromBinary(t3, e3) {
        return new jt().fromBinary(t3, e3);
      }
      static fromJson(t3, e3) {
        return new jt().fromJson(t3, e3);
      }
      static fromJsonString(t3, e3) {
        return new jt().fromJsonString(t3, e3);
      }
      static equals(t3, e3) {
        return n2.proto3.util.equals(jt, t3, e3);
      }
      static $() {
        return ["PiLsExecSuccess|1 output 9|2 truncation #0?|3 entry_limit_reached 13?", pt.d];
      }
    }
    class Xt extends zt {
      constructor(t3) {
        super(), this.error = "", n2.proto3.util.initPartial(t3, this);
      }
      static fromBinary(t3, e3) {
        return new Xt().fromBinary(t3, e3);
      }
      static fromJson(t3, e3) {
        return new Xt().fromJson(t3, e3);
      }
      static fromJsonString(t3, e3) {
        return new Xt().fromJsonString(t3, e3);
      }
      static equals(t3, e3) {
        return n2.proto3.util.equals(Xt, t3, e3);
      }
      static $() {
        return ["PiLsExecError|1 error 9"];
      }
    }
    var Zt = r2(3081);
    class te extends i2.HL {
      static get runtime() {
        return (0, i2.kU)(this, "runtime", n2.proto3);
      }
      static $p() {
        return "agent.v1.";
      }
    }
    class ee extends te {
      constructor(t3) {
        super(), this.journalEpoch = "", this.seq = n2.protoInt64.zero, this.lastEventId = "", n2.proto3.util.initPartial(t3, this);
      }
      static fromBinary(t3, e3) {
        return new ee().fromBinary(t3, e3);
      }
      static fromJson(t3, e3) {
        return new ee().fromJson(t3, e3);
      }
      static fromJsonString(t3, e3) {
        return new ee().fromJsonString(t3, e3);
      }
      static equals(t3, e3) {
        return n2.proto3.util.equals(ee, t3, e3);
      }
      static $() {
        return ["AgentStoreConflictCursor|1 journal_epoch 9|2 seq 4|3 last_event_id 9"];
      }
    }
    class re extends te {
      constructor(t3) {
        super(), n2.proto3.util.initPartial(t3, this);
      }
      static fromBinary(t3, e3) {
        return new re().fromBinary(t3, e3);
      }
      static fromJson(t3, e3) {
        return new re().fromJson(t3, e3);
      }
      static fromJsonString(t3, e3) {
        return new re().fromJsonString(t3, e3);
      }
      static equals(t3, e3) {
        return n2.proto3.util.equals(re, t3, e3);
      }
      static $() {
        return ["AgentStoreConflictArgs|1 cursor #0?|2 advance 8?|3 include_quota_notices 8?", ee];
      }
    }
    class ne extends te {
      constructor(t3) {
        super(), this.v = 0, this.eventId = "", this.journalEpoch = "", this.seq = n2.protoInt64.zero, this.tsMs = n2.protoInt64.zero, this.kind = "", n2.proto3.util.initPartial(t3, this);
      }
      static fromBinary(t3, e3) {
        return new ne().fromBinary(t3, e3);
      }
      static fromJson(t3, e3) {
        return new ne().fromJson(t3, e3);
      }
      static fromJsonString(t3, e3) {
        return new ne().fromJsonString(t3, e3);
      }
      static equals(t3, e3) {
        return n2.proto3.util.equals(ne, t3, e3);
      }
      static $() {
        return ["AgentStoreConflictEvent|1 v 13|2 event_id 9|3 journal_epoch 9|4 seq 4|5 ts_ms 4|6 kind 9|7 store_id 9?|8 original_rel_path 9?|9 conflict_rel_path 9?|10 original_abs_path 9?|11 conflict_abs_path 9?|12 preserved_bytes 4?|13 scope_kind 9?|14 limit_bytes 4?|15 usage_bytes 4?"];
      }
    }
    class se extends te {
      constructor(t3) {
        super(), this.result = { case: void 0 }, n2.proto3.util.initPartial(t3, this);
      }
      static fromBinary(t3, e3) {
        return new se().fromBinary(t3, e3);
      }
      static fromJson(t3, e3) {
        return new se().fromJson(t3, e3);
      }
      static fromJsonString(t3, e3) {
        return new se().fromJsonString(t3, e3);
      }
      static equals(t3, e3) {
        return n2.proto3.util.equals(se, t3, e3);
      }
      static $() {
        return ["AgentStoreConflictResult|1 success #0 result|2 error #1 result", ie, oe];
      }
    }
    class ie extends te {
      constructor(t3) {
        super(), this.events = [], this.gap = false, n2.proto3.util.initPartial(t3, this);
      }
      static fromBinary(t3, e3) {
        return new ie().fromBinary(t3, e3);
      }
      static fromJson(t3, e3) {
        return new ie().fromJson(t3, e3);
      }
      static fromJsonString(t3, e3) {
        return new ie().fromJsonString(t3, e3);
      }
      static equals(t3, e3) {
        return n2.proto3.util.equals(ie, t3, e3);
      }
      static $() {
        return ["AgentStoreConflictSuccess|1 events #0*|2 next_cursor #1|3 gap 8", ne, ee];
      }
    }
    class oe extends te {
      constructor(t3) {
        super(), this.error = "", n2.proto3.util.initPartial(t3, this);
      }
      static fromBinary(t3, e3) {
        return new oe().fromBinary(t3, e3);
      }
      static fromJson(t3, e3) {
        return new oe().fromJson(t3, e3);
      }
      static fromJsonString(t3, e3) {
        return new oe().fromJsonString(t3, e3);
      }
      static equals(t3, e3) {
        return n2.proto3.util.equals(oe, t3, e3);
      }
      static $() {
        return ["AgentStoreConflictError|1 error 9"];
      }
    }
    var ae = r2(1180);
    class ue extends i2.HL {
      static get runtime() {
        return (0, i2.kU)(this, "runtime", n2.proto3);
      }
      static $p() {
        return "agent.v1.";
      }
    }
    class ce extends ue {
      constructor(t3) {
        super(), this.trigger = "", this.contextUsagePercent = 0, this.contextTokens = n2.protoInt64.zero, this.contextWindowSize = n2.protoInt64.zero, this.messageCount = 0, this.messagesToCompact = 0, this.isFirstCompaction = false, this.modelParams = [], n2.proto3.util.initPartial(t3, this);
      }
      static fromBinary(t3, e3) {
        return new ce().fromBinary(t3, e3);
      }
      static fromJson(t3, e3) {
        return new ce().fromJson(t3, e3);
      }
      static fromJsonString(t3, e3) {
        return new ce().fromJsonString(t3, e3);
      }
      static equals(t3, e3) {
        return n2.proto3.util.equals(ce, t3, e3);
      }
      static $() {
        return ["PreCompactRequestQuery|1 trigger 9|2 context_usage_percent 1|3 context_tokens 3|4 context_window_size 3|5 message_count 5|6 messages_to_compact 5|7 is_first_compaction 8|8 conversation_id 9?|9 generation_id 9?|10 model 9?|11 model_id 9?|12 model_params #0*", T.SR];
      }
    }
    class le extends ue {
      constructor(t3) {
        super(), n2.proto3.util.initPartial(t3, this);
      }
      static fromBinary(t3, e3) {
        return new le().fromBinary(t3, e3);
      }
      static fromJson(t3, e3) {
        return new le().fromJson(t3, e3);
      }
      static fromJsonString(t3, e3) {
        return new le().fromJsonString(t3, e3);
      }
      static equals(t3, e3) {
        return n2.proto3.util.equals(le, t3, e3);
      }
      static $() {
        return ["PreCompactRequestResponse|1 user_message 9?"];
      }
    }
    class me extends ue {
      constructor(t3) {
        super(), this.subagentId = "", this.subagentType = "", this.task = "", this.parentConversationId = "", this.isParallelWorker = false, this.modelParams = [], n2.proto3.util.initPartial(t3, this);
      }
      static fromBinary(t3, e3) {
        return new me().fromBinary(t3, e3);
      }
      static fromJson(t3, e3) {
        return new me().fromJson(t3, e3);
      }
      static fromJsonString(t3, e3) {
        return new me().fromJsonString(t3, e3);
      }
      static equals(t3, e3) {
        return n2.proto3.util.equals(me, t3, e3);
      }
      static $() {
        return ["SubagentStartRequestQuery|1 subagent_id 9|2 subagent_type 9|3 task 9|4 parent_conversation_id 9|5 tool_call_id 9?|6 subagent_model 9?|7 is_parallel_worker 8|8 git_branch 9?|9 conversation_id 9?|10 generation_id 9?|11 model 9?|12 model_id 9?|13 model_params #0*", T.SR];
      }
    }
    class de extends ue {
      constructor(t3) {
        super(), n2.proto3.util.initPartial(t3, this);
      }
      static fromBinary(t3, e3) {
        return new de().fromBinary(t3, e3);
      }
      static fromJson(t3, e3) {
        return new de().fromJson(t3, e3);
      }
      static fromJsonString(t3, e3) {
        return new de().fromJsonString(t3, e3);
      }
      static equals(t3, e3) {
        return n2.proto3.util.equals(de, t3, e3);
      }
      static $() {
        return ["SubagentStartRequestResponse|1 permission 9?|2 user_message 9?|3 additional_context 9?"];
      }
    }
    class fe extends ue {
      constructor(t3) {
        super(), this.subagentId = "", this.subagentType = "", this.status = "", this.durationMs = n2.protoInt64.zero, this.parentConversationId = "", this.messageCount = 0, this.toolCallCount = 0, this.modifiedFiles = [], this.loopCount = 0, this.modelParams = [], n2.proto3.util.initPartial(t3, this);
      }
      static fromBinary(t3, e3) {
        return new fe().fromBinary(t3, e3);
      }
      static fromJson(t3, e3) {
        return new fe().fromJson(t3, e3);
      }
      static fromJsonString(t3, e3) {
        return new fe().fromJsonString(t3, e3);
      }
      static equals(t3, e3) {
        return n2.proto3.util.equals(fe, t3, e3);
      }
      static $() {
        return ["SubagentStopRequestQuery|1 subagent_id 9|2 subagent_type 9|3 status 9|4 duration_ms 3|5 summary 9?|6 parent_conversation_id 9|7 message_count 5|8 tool_call_count 5|9 error_message 9?|10 modified_files 9*|11 git_branch 9?|12 conversation_id 9?|13 generation_id 9?|14 model 9?|15 loop_count 5|16 task 9?|17 description 9?|18 model_id 9?|19 model_params #0*|20 child_conversation_id 9?", T.SR];
      }
    }
    class pe extends ue {
      constructor(t3) {
        super(), n2.proto3.util.initPartial(t3, this);
      }
      static fromBinary(t3, e3) {
        return new pe().fromBinary(t3, e3);
      }
      static fromJson(t3, e3) {
        return new pe().fromJson(t3, e3);
      }
      static fromJsonString(t3, e3) {
        return new pe().fromJsonString(t3, e3);
      }
      static equals(t3, e3) {
        return n2.proto3.util.equals(pe, t3, e3);
      }
      static $() {
        return ["SubagentStopRequestResponse|1 followup_message 9?|2 additional_context 9?"];
      }
    }
    class he extends ue {
      constructor(t3) {
        super(), this.type = "", this.filePath = "", n2.proto3.util.initPartial(t3, this);
      }
      static fromBinary(t3, e3) {
        return new he().fromBinary(t3, e3);
      }
      static fromJson(t3, e3) {
        return new he().fromJson(t3, e3);
      }
      static fromJsonString(t3, e3) {
        return new he().fromJsonString(t3, e3);
      }
      static equals(t3, e3) {
        return n2.proto3.util.equals(he, t3, e3);
      }
      static $() {
        return ["BeforeSubmitPromptAttachment|1 type 9|2 file_path 9"];
      }
    }
    class ge extends ue {
      constructor(t3) {
        super(), this.prompt = "", this.attachments = [], this.modelParams = [], n2.proto3.util.initPartial(t3, this);
      }
      static fromBinary(t3, e3) {
        return new ge().fromBinary(t3, e3);
      }
      static fromJson(t3, e3) {
        return new ge().fromJson(t3, e3);
      }
      static fromJsonString(t3, e3) {
        return new ge().fromJsonString(t3, e3);
      }
      static equals(t3, e3) {
        return n2.proto3.util.equals(ge, t3, e3);
      }
      static $() {
        return ["BeforeSubmitPromptRequestQuery|1 prompt 9|2 attachments #0*|3 composer_mode 9?|4 conversation_id 9?|5 generation_id 9?|6 model 9?|7 model_id 9?|8 model_params #1*", he, T.SR];
      }
    }
    class Ae extends ue {
      constructor(t3) {
        super(), n2.proto3.util.initPartial(t3, this);
      }
      static fromBinary(t3, e3) {
        return new Ae().fromBinary(t3, e3);
      }
      static fromJson(t3, e3) {
        return new Ae().fromJson(t3, e3);
      }
      static fromJsonString(t3, e3) {
        return new Ae().fromJsonString(t3, e3);
      }
      static equals(t3, e3) {
        return n2.proto3.util.equals(Ae, t3, e3);
      }
      static $() {
        return ["BeforeSubmitPromptRequestResponse|1 continue 8?|2 user_message 9?|3 additional_context 9?"];
      }
    }
    class _e extends ue {
      constructor(t3) {
        super(), this.text = "", this.modelParams = [], n2.proto3.util.initPartial(t3, this);
      }
      static fromBinary(t3, e3) {
        return new _e().fromBinary(t3, e3);
      }
      static fromJson(t3, e3) {
        return new _e().fromJson(t3, e3);
      }
      static fromJsonString(t3, e3) {
        return new _e().fromJsonString(t3, e3);
      }
      static equals(t3, e3) {
        return n2.proto3.util.equals(_e, t3, e3);
      }
      static $() {
        return ["AfterAgentResponseRequestQuery|1 text 9|2 conversation_id 9?|3 generation_id 9?|4 model 9?|5 model_id 9?|6 model_params #0*|7 input_tokens 3?|8 output_tokens 3?|9 cache_read_tokens 3?|10 cache_write_tokens 3?", T.SR];
      }
    }
    class ye extends ue {
      constructor(t3) {
        super(), n2.proto3.util.initPartial(t3, this);
      }
      static fromBinary(t3, e3) {
        return new ye().fromBinary(t3, e3);
      }
      static fromJson(t3, e3) {
        return new ye().fromJson(t3, e3);
      }
      static fromJsonString(t3, e3) {
        return new ye().fromJsonString(t3, e3);
      }
      static equals(t3, e3) {
        return n2.proto3.util.equals(ye, t3, e3);
      }
      static $() {
        return ["AfterAgentResponseRequestResponse"];
      }
    }
    class we extends ue {
      constructor(t3) {
        super(), this.text = "", this.modelParams = [], n2.proto3.util.initPartial(t3, this);
      }
      static fromBinary(t3, e3) {
        return new we().fromBinary(t3, e3);
      }
      static fromJson(t3, e3) {
        return new we().fromJson(t3, e3);
      }
      static fromJsonString(t3, e3) {
        return new we().fromJsonString(t3, e3);
      }
      static equals(t3, e3) {
        return n2.proto3.util.equals(we, t3, e3);
      }
      static $() {
        return ["AfterAgentThoughtRequestQuery|1 text 9|2 duration_ms 3?|3 conversation_id 9?|4 generation_id 9?|5 model 9?|6 model_id 9?|7 model_params #0*", T.SR];
      }
    }
    class Se extends ue {
      constructor(t3) {
        super(), n2.proto3.util.initPartial(t3, this);
      }
      static fromBinary(t3, e3) {
        return new Se().fromBinary(t3, e3);
      }
      static fromJson(t3, e3) {
        return new Se().fromJson(t3, e3);
      }
      static fromJsonString(t3, e3) {
        return new Se().fromJsonString(t3, e3);
      }
      static equals(t3, e3) {
        return n2.proto3.util.equals(Se, t3, e3);
      }
      static $() {
        return ["AfterAgentThoughtRequestResponse"];
      }
    }
    class Je extends ue {
      constructor(t3) {
        super(), this.status = "", this.loopCount = 0, this.modelParams = [], n2.proto3.util.initPartial(t3, this);
      }
      static fromBinary(t3, e3) {
        return new Je().fromBinary(t3, e3);
      }
      static fromJson(t3, e3) {
        return new Je().fromJson(t3, e3);
      }
      static fromJsonString(t3, e3) {
        return new Je().fromJsonString(t3, e3);
      }
      static equals(t3, e3) {
        return n2.proto3.util.equals(Je, t3, e3);
      }
      static $() {
        return ["StopRequestQuery|1 status 9|2 loop_count 5|3 conversation_id 9?|4 generation_id 9?|5 model 9?|6 model_id 9?|7 model_params #0*|8 input_tokens 3?|9 output_tokens 3?|10 cache_read_tokens 3?|11 cache_write_tokens 3?", T.SR];
      }
    }
    class Be extends ue {
      constructor(t3) {
        super(), n2.proto3.util.initPartial(t3, this);
      }
      static fromBinary(t3, e3) {
        return new Be().fromBinary(t3, e3);
      }
      static fromJson(t3, e3) {
        return new Be().fromJson(t3, e3);
      }
      static fromJsonString(t3, e3) {
        return new Be().fromJsonString(t3, e3);
      }
      static equals(t3, e3) {
        return n2.proto3.util.equals(Be, t3, e3);
      }
      static $() {
        return ["StopRequestResponse|1 followup_message 9?"];
      }
    }
    class Ee extends ue {
      constructor(t3) {
        super(), this.toolName = "", this.toolUseId = "", this.modelParams = [], n2.proto3.util.initPartial(t3, this);
      }
      static fromBinary(t3, e3) {
        return new Ee().fromBinary(t3, e3);
      }
      static fromJson(t3, e3) {
        return new Ee().fromJson(t3, e3);
      }
      static fromJsonString(t3, e3) {
        return new Ee().fromJsonString(t3, e3);
      }
      static equals(t3, e3) {
        return n2.proto3.util.equals(Ee, t3, e3);
      }
      static $() {
        return ["PreToolUseRequestQuery|1 tool_name 9|2 tool_input #0|3 tool_use_id 9|4 cwd 9?|5 conversation_id 9?|6 generation_id 9?|7 model 9?|8 model_id 9?|9 model_params #1*|10 parent_tool_call_id 9?", n2.Struct, T.SR];
      }
    }
    class Ie extends ue {
      constructor(t3) {
        super(), n2.proto3.util.initPartial(t3, this);
      }
      static fromBinary(t3, e3) {
        return new Ie().fromBinary(t3, e3);
      }
      static fromJson(t3, e3) {
        return new Ie().fromJson(t3, e3);
      }
      static fromJsonString(t3, e3) {
        return new Ie().fromJsonString(t3, e3);
      }
      static equals(t3, e3) {
        return n2.proto3.util.equals(Ie, t3, e3);
      }
      static $() {
        return ["PreToolUseRequestResponse|1 permission 9?|2 user_message 9?|3 agent_message 9?|4 updated_input 9?|5 additional_context 9?"];
      }
    }
    class Ce extends ue {
      constructor(t3) {
        super(), this.toolName = "", this.toolOutput = "", this.durationMs = n2.protoInt64.zero, this.toolUseId = "", this.modelParams = [], n2.proto3.util.initPartial(t3, this);
      }
      static fromBinary(t3, e3) {
        return new Ce().fromBinary(t3, e3);
      }
      static fromJson(t3, e3) {
        return new Ce().fromJson(t3, e3);
      }
      static fromJsonString(t3, e3) {
        return new Ce().fromJsonString(t3, e3);
      }
      static equals(t3, e3) {
        return n2.proto3.util.equals(Ce, t3, e3);
      }
      static $() {
        return ["PostToolUseRequestQuery|1 tool_name 9|2 tool_input #0|3 tool_output 9|4 duration_ms 3|5 tool_use_id 9|6 cwd 9?|7 conversation_id 9?|8 generation_id 9?|9 model 9?|10 model_id 9?|11 model_params #1*|12 parent_tool_call_id 9?", n2.Struct, T.SR];
      }
    }
    class be extends ue {
      constructor(t3) {
        super(), n2.proto3.util.initPartial(t3, this);
      }
      static fromBinary(t3, e3) {
        return new be().fromBinary(t3, e3);
      }
      static fromJson(t3, e3) {
        return new be().fromJson(t3, e3);
      }
      static fromJsonString(t3, e3) {
        return new be().fromJsonString(t3, e3);
      }
      static equals(t3, e3) {
        return n2.proto3.util.equals(be, t3, e3);
      }
      static $() {
        return ["PostToolUseRequestResponse|1 additional_context 9?"];
      }
    }
    class ke extends ue {
      constructor(t3) {
        super(), this.toolName = "", this.errorMessage = "", this.failureType = "", this.durationMs = n2.protoInt64.zero, this.toolUseId = "", this.isInterrupt = false, this.modelParams = [], n2.proto3.util.initPartial(t3, this);
      }
      static fromBinary(t3, e3) {
        return new ke().fromBinary(t3, e3);
      }
      static fromJson(t3, e3) {
        return new ke().fromJson(t3, e3);
      }
      static fromJsonString(t3, e3) {
        return new ke().fromJsonString(t3, e3);
      }
      static equals(t3, e3) {
        return n2.proto3.util.equals(ke, t3, e3);
      }
      static $() {
        return ["PostToolUseFailureRequestQuery|1 tool_name 9|2 tool_input #0|3 error_message 9|4 failure_type 9|5 duration_ms 3|6 tool_use_id 9|7 is_interrupt 8|8 conversation_id 9?|9 generation_id 9?|10 model 9?|11 model_id 9?|12 model_params #1*|13 parent_tool_call_id 9?", n2.Struct, T.SR];
      }
    }
    class ve extends ue {
      constructor(t3) {
        super(), n2.proto3.util.initPartial(t3, this);
      }
      static fromBinary(t3, e3) {
        return new ve().fromBinary(t3, e3);
      }
      static fromJson(t3, e3) {
        return new ve().fromJson(t3, e3);
      }
      static fromJsonString(t3, e3) {
        return new ve().fromJsonString(t3, e3);
      }
      static equals(t3, e3) {
        return n2.proto3.util.equals(ve, t3, e3);
      }
      static $() {
        return ["PostToolUseFailureRequestResponse|1 additional_context 9?"];
      }
    }
    class qe extends i2.HL {
      static get runtime() {
        return (0, i2.kU)(this, "runtime", n2.proto3);
      }
      static $p() {
        return "agent.v1.";
      }
    }
    class Re extends qe {
      constructor(t3) {
        super(), this.id = 0, n2.proto3.util.initPartial(t3, this);
      }
      static fromBinary(t3, e3) {
        return new Re().fromBinary(t3, e3);
      }
      static fromJson(t3, e3) {
        return new Re().fromJson(t3, e3);
      }
      static fromJsonString(t3, e3) {
        return new Re().fromJsonString(t3, e3);
      }
      static equals(t3, e3) {
        return n2.proto3.util.equals(Re, t3, e3);
      }
      static $() {
        return ["ExecClientStreamClose|1 id 13"];
      }
    }
    class Pe extends qe {
      constructor(t3) {
        super(), this.id = 0, this.error = "", n2.proto3.util.initPartial(t3, this);
      }
      static fromBinary(t3, e3) {
        return new Pe().fromBinary(t3, e3);
      }
      static fromJson(t3, e3) {
        return new Pe().fromJson(t3, e3);
      }
      static fromJsonString(t3, e3) {
        return new Pe().fromJsonString(t3, e3);
      }
      static equals(t3, e3) {
        return n2.proto3.util.equals(Pe, t3, e3);
      }
      static $() {
        return ["ExecClientThrow|1 id 13|2 error 9|3 stack_trace 9?|4 error_code 9?"];
      }
    }
    class Te extends qe {
      constructor(t3) {
        super(), this.id = 0, n2.proto3.util.initPartial(t3, this);
      }
      static fromBinary(t3, e3) {
        return new Te().fromBinary(t3, e3);
      }
      static fromJson(t3, e3) {
        return new Te().fromJson(t3, e3);
      }
      static fromJsonString(t3, e3) {
        return new Te().fromJsonString(t3, e3);
      }
      static equals(t3, e3) {
        return n2.proto3.util.equals(Te, t3, e3);
      }
      static $() {
        return ["ExecClientHeartbeat|1 id 13"];
      }
    }
    class xe extends qe {
      constructor(t3) {
        super(), this.message = { case: void 0 }, n2.proto3.util.initPartial(t3, this);
      }
      static fromBinary(t3, e3) {
        return new xe().fromBinary(t3, e3);
      }
      static fromJson(t3, e3) {
        return new xe().fromJson(t3, e3);
      }
      static fromJsonString(t3, e3) {
        return new xe().fromJsonString(t3, e3);
      }
      static equals(t3, e3) {
        return n2.proto3.util.equals(xe, t3, e3);
      }
      static $() {
        return ["ExecClientControlMessage|1 stream_close #0 message|2 throw #1 message|3 heartbeat #2 message", Re, Pe, Te];
      }
    }
    class Ne extends qe {
      constructor(t3) {
        super(), this.id = 0, n2.proto3.util.initPartial(t3, this);
      }
      static fromBinary(t3, e3) {
        return new Ne().fromBinary(t3, e3);
      }
      static fromJson(t3, e3) {
        return new Ne().fromJson(t3, e3);
      }
      static fromJsonString(t3, e3) {
        return new Ne().fromJsonString(t3, e3);
      }
      static equals(t3, e3) {
        return n2.proto3.util.equals(Ne, t3, e3);
      }
      static $() {
        return ["ExecServerAbort|1 id 13"];
      }
    }
    class De extends qe {
      constructor(t3) {
        super(), this.message = { case: void 0 }, n2.proto3.util.initPartial(t3, this);
      }
      static fromBinary(t3, e3) {
        return new De().fromBinary(t3, e3);
      }
      static fromJson(t3, e3) {
        return new De().fromJson(t3, e3);
      }
      static fromJsonString(t3, e3) {
        return new De().fromJsonString(t3, e3);
      }
      static equals(t3, e3) {
        return n2.proto3.util.equals(De, t3, e3);
      }
      static $() {
        return ["ExecServerControlMessage|1 abort #0 message", Ne];
      }
    }
    class Ue extends qe {
      constructor(t3) {
        super(), this.traceId = "", this.spanId = "", n2.proto3.util.initPartial(t3, this);
      }
      static fromBinary(t3, e3) {
        return new Ue().fromBinary(t3, e3);
      }
      static fromJson(t3, e3) {
        return new Ue().fromJson(t3, e3);
      }
      static fromJsonString(t3, e3) {
        return new Ue().fromJsonString(t3, e3);
      }
      static equals(t3, e3) {
        return n2.proto3.util.equals(Ue, t3, e3);
      }
      static $() {
        return ["SpanContext|1 trace_id 9|2 span_id 9|3 trace_flags 13?|4 trace_state 9?"];
      }
    }
    class Qe extends qe {
      constructor(t3) {
        super(), this.id = 0, this.execId = "", this.message = { case: void 0 }, n2.proto3.util.initPartial(t3, this);
      }
      static fromBinary(t3, e3) {
        return new Qe().fromBinary(t3, e3);
      }
      static fromJson(t3, e3) {
        return new Qe().fromJson(t3, e3);
      }
      static fromJsonString(t3, e3) {
        return new Qe().fromJsonString(t3, e3);
      }
      static equals(t3, e3) {
        return n2.proto3.util.equals(Qe, t3, e3);
      }
      static $() {
        return ["ExecServerMessage|1 id 13|15 exec_id 9|57 machine_id 9?|2 shell_args #0 message|3 write_args #1 message|4 delete_args #2 message|5 grep_args #3 message|7 read_args #4 message|29 redacted_read_args #4 message|8 ls_args #5 message|9 diagnostics_args #6 message|10 request_context_args #7 message|11 mcp_args #8 message|14 shell_stream_args #0 message|16 background_shell_spawn_args #9 message|17 list_mcp_resources_exec_args #10 message|18 read_mcp_resource_exec_args #11 message|36 mcp_state_exec_args #12 message|20 fetch_args #13 message|21 record_screen_args #14 message|22 computer_use_args #15 message|23 write_shell_stdin_args #16 message|27 execute_hook_args #17 message|28 subagent_args #18 message|30 force_background_shell_args #19 message|31 force_background_subagent_args #20 message|37 subagent_await_args #21 message|38 smart_mode_classifier_args #22 message|40 canvas_diagnostics_args #23 message|41 shell_allowlist_precheck_args #24 message|42 mcp_allowlist_precheck_args #25 message|43 web_fetch_allowlist_precheck_args #26 message|44 git_diff_request #27 message|45 pi_read_args #28 message|46 pi_bash_args #29 message|47 pi_edit_args #30 message|48 pi_write_args #31 message|49 pi_grep_args #32 message|50 pi_find_args #33 message|51 pi_ls_args #34 message|52 mini_swe_agent_bash_args #0 message|53 conversation_search_args #35 message|54 agent_store_conflict_args #36 message|19 span_context #37?|55 accept_hook_additional_contexts 8?", s2.a, a, p.dn, h.Qj, A, I.xe, C._B, b._K, k.E_, v.$P, k.kj, k.DI, k.Km, q.UM, R.zH, P.K5, v.LL, Oe, M, s2.Hu, Y, L, X.Th, tt, it, ut, mt, ft.GetDiffRequest, gt, St, bt, Tt, Mt, Gt, Wt, Zt.$m, re, Ue];
      }
    }
    class Me extends qe {
      constructor(t3) {
        super(), this.id = 0, this.execId = "", this.hookAdditionalContexts = [], this.message = { case: void 0 }, n2.proto3.util.initPartial(t3, this);
      }
      static fromBinary(t3, e3) {
        return new Me().fromBinary(t3, e3);
      }
      static fromJson(t3, e3) {
        return new Me().fromJson(t3, e3);
      }
      static fromJsonString(t3, e3) {
        return new Me().fromJsonString(t3, e3);
      }
      static equals(t3, e3) {
        return n2.proto3.util.equals(Me, t3, e3);
      }
      static $() {
        return ["ExecClientMessage|1 id 13|15 exec_id 9|39 local_execution_time_ms 5?|45 hook_additional_contexts #0*|2 shell_result #1 message|3 write_result #2 message|4 delete_result #3 message|5 grep_result #4 message|7 read_result #5 message|29 redacted_read_result #5 message|8 ls_result #6 message|9 diagnostics_result #7 message|10 request_context_result #8 message|11 mcp_result #9 message|14 shell_stream #10 message|16 background_shell_spawn_result #11 message|17 list_mcp_resources_exec_result #12 message|18 read_mcp_resource_exec_result #13 message|36 mcp_state_exec_result #14 message|20 fetch_result #15 message|21 record_screen_result #16 message|22 computer_use_result #17 message|23 write_shell_stdin_result #18 message|27 execute_hook_result #19 message|28 subagent_result #20 message|30 force_background_shell_result #21 message|31 force_background_subagent_result #22 message|37 subagent_await_result #23 message|38 smart_mode_classifier_result #24 message|40 canvas_diagnostics_result #25 message|41 shell_allowlist_precheck_result #26 message|42 mcp_allowlist_precheck_result #27 message|43 web_fetch_allowlist_precheck_result #28 message|44 git_diff_response #29 message|46 pi_read_result #30 message|47 pi_bash_result #31 message|48 pi_edit_result #32 message|49 pi_write_result #33 message|50 pi_grep_result #34 message|51 pi_find_result #35 message|52 pi_ls_result #36 message|53 conversation_search_result #37 message|54 agent_store_conflict_result #38 message|55 mini_swe_agent_bash_result #1 message", ae.C, s2.W4, u, p.Pi, h.Ud, _, I.fv, C.Ek, b._G, k.iz, s2.FI, v.Lt, k.kP, k.ZD, k._W, q.uN, R.Tj, P.ks, v.nt, Fe, F, s2.jK, j, $, X.bN, et, ot, ct, dt, ft.GetDiffResponse, At, Jt, kt, xt, Ot, Ht, Yt, Zt.pT, se];
      }
    }
    class Oe extends qe {
      constructor(t3) {
        super(), n2.proto3.util.initPartial(t3, this);
      }
      static fromBinary(t3, e3) {
        return new Oe().fromBinary(t3, e3);
      }
      static fromJson(t3, e3) {
        return new Oe().fromJson(t3, e3);
      }
      static fromJsonString(t3, e3) {
        return new Oe().fromJsonString(t3, e3);
      }
      static equals(t3, e3) {
        return n2.proto3.util.equals(Oe, t3, e3);
      }
      static $() {
        return ["ExecuteHookArgs|1 request #0", Le];
      }
    }
    class Fe extends qe {
      constructor(t3) {
        super(), n2.proto3.util.initPartial(t3, this);
      }
      static fromBinary(t3, e3) {
        return new Fe().fromBinary(t3, e3);
      }
      static fromJson(t3, e3) {
        return new Fe().fromJson(t3, e3);
      }
      static fromJsonString(t3, e3) {
        return new Fe().fromJsonString(t3, e3);
      }
      static equals(t3, e3) {
        return n2.proto3.util.equals(Fe, t3, e3);
      }
      static $() {
        return ["ExecuteHookResult|1 response #0", $e];
      }
    }
    class Le extends qe {
      constructor(t3) {
        super(), this.request = { case: void 0 }, n2.proto3.util.initPartial(t3, this);
      }
      static fromBinary(t3, e3) {
        return new Le().fromBinary(t3, e3);
      }
      static fromJson(t3, e3) {
        return new Le().fromJson(t3, e3);
      }
      static fromJsonString(t3, e3) {
        return new Le().fromJsonString(t3, e3);
      }
      static equals(t3, e3) {
        return n2.proto3.util.equals(Le, t3, e3);
      }
      static $() {
        return ["ExecuteHookRequest|1 pre_compact #0 request|2 subagent_start #1 request|3 subagent_stop #2 request|4 pre_tool_use #3 request|5 post_tool_use #4 request|6 post_tool_use_failure #5 request|7 before_submit_prompt #6 request|8 after_agent_response #7 request|9 after_agent_thought #8 request|11 stop #9 request", ce, me, fe, Ee, Ce, ke, ge, _e, we, Je];
      }
    }
    class $e extends qe {
      constructor(t3) {
        super(), this.response = { case: void 0 }, n2.proto3.util.initPartial(t3, this);
      }
      static fromBinary(t3, e3) {
        return new $e().fromBinary(t3, e3);
      }
      static fromJson(t3, e3) {
        return new $e().fromJson(t3, e3);
      }
      static fromJsonString(t3, e3) {
        return new $e().fromJsonString(t3, e3);
      }
      static equals(t3, e3) {
        return n2.proto3.util.equals($e, t3, e3);
      }
      static $() {
        return ["ExecuteHookResponse|1 pre_compact #0 response|2 subagent_start #1 response|3 subagent_stop #2 response|4 pre_tool_use #3 response|5 post_tool_use #4 response|6 post_tool_use_failure #5 response|7 before_submit_prompt #6 response|8 after_agent_response #7 response|9 after_agent_thought #8 response|11 stop #9 response", le, de, pe, Ie, be, ve, Ae, ye, Se, Be];
      }
    }
  }
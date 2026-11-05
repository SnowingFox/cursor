// @recovered-by cursor-re
// artifact: app/extensions/cursor-agent-exec/dist/main.js sha256:8d20326bd54948353115113c2d4716cf781d593610fd4d8acebcc37a3170da8e
// module: 70355 range:6309753..6325277
// basis: webpack-id confidence: C
// method: split
// run: ext-p0 2026-11-05T10:07:22.069Z
70355: (e, t, r) => {
    "use strict";
    r.d(t, { $_: () => c, AH: () => p, AL: () => w, CI: () => S, D2: () => h, FW: () => y, H: () => v, Ks: () => a, Od: () => _, U1: () => T, W0: () => u, Wn: () => k, b3: () => l, hy: () => I, mL: () => g, rT: () => b, rY: () => x, ty: () => d, u1: () => f, uB: () => E });
    var n = r(36038), s = r(86209), o = r(8592);
    class i extends o.HL {
      static get runtime() {
        return (0, o.kU)(this, "runtime", n.proto3);
      }
      static $p() {
        return "agent.v1.";
      }
    }
    class a extends i {
      constructor(e2) {
        super(), this.trigger = "", this.contextUsagePercent = 0, this.contextTokens = n.protoInt64.zero, this.contextWindowSize = n.protoInt64.zero, this.messageCount = 0, this.messagesToCompact = 0, this.isFirstCompaction = false, this.modelParams = [], n.proto3.util.initPartial(e2, this);
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
        return ["PreCompactRequestQuery|1 trigger 9|2 context_usage_percent 1|3 context_tokens 3|4 context_window_size 3|5 message_count 5|6 messages_to_compact 5|7 is_first_compaction 8|8 conversation_id 9?|9 generation_id 9?|10 model 9?|11 model_id 9?|12 model_params #0*", s.SR];
      }
    }
    class c extends i {
      constructor(e2) {
        super(), n.proto3.util.initPartial(e2, this);
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
        return ["PreCompactRequestResponse|1 user_message 9?"];
      }
    }
    class l extends i {
      constructor(e2) {
        super(), this.subagentId = "", this.subagentType = "", this.task = "", this.parentConversationId = "", this.isParallelWorker = false, this.modelParams = [], n.proto3.util.initPartial(e2, this);
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
        return ["SubagentStartRequestQuery|1 subagent_id 9|2 subagent_type 9|3 task 9|4 parent_conversation_id 9|5 tool_call_id 9?|6 subagent_model 9?|7 is_parallel_worker 8|8 git_branch 9?|9 conversation_id 9?|10 generation_id 9?|11 model 9?|12 model_id 9?|13 model_params #0*", s.SR];
      }
    }
    class u extends i {
      constructor(e2) {
        super(), n.proto3.util.initPartial(e2, this);
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
        return ["SubagentStartRequestResponse|1 permission 9?|2 user_message 9?|3 additional_context 9?"];
      }
    }
    class d extends i {
      constructor(e2) {
        super(), this.subagentId = "", this.subagentType = "", this.status = "", this.durationMs = n.protoInt64.zero, this.parentConversationId = "", this.messageCount = 0, this.toolCallCount = 0, this.modifiedFiles = [], this.loopCount = 0, this.modelParams = [], n.proto3.util.initPartial(e2, this);
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
        return ["SubagentStopRequestQuery|1 subagent_id 9|2 subagent_type 9|3 status 9|4 duration_ms 3|5 summary 9?|6 parent_conversation_id 9|7 message_count 5|8 tool_call_count 5|9 error_message 9?|10 modified_files 9*|11 git_branch 9?|12 conversation_id 9?|13 generation_id 9?|14 model 9?|15 loop_count 5|16 task 9?|17 description 9?|18 model_id 9?|19 model_params #0*|20 child_conversation_id 9?", s.SR];
      }
    }
    class p extends i {
      constructor(e2) {
        super(), n.proto3.util.initPartial(e2, this);
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
        return ["SubagentStopRequestResponse|1 followup_message 9?|2 additional_context 9?"];
      }
    }
    class m extends i {
      constructor(e2) {
        super(), this.type = "", this.filePath = "", n.proto3.util.initPartial(e2, this);
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
        return ["BeforeSubmitPromptAttachment|1 type 9|2 file_path 9"];
      }
    }
    class h extends i {
      constructor(e2) {
        super(), this.prompt = "", this.attachments = [], this.modelParams = [], n.proto3.util.initPartial(e2, this);
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
        return ["BeforeSubmitPromptRequestQuery|1 prompt 9|2 attachments #0*|3 composer_mode 9?|4 conversation_id 9?|5 generation_id 9?|6 model 9?|7 model_id 9?|8 model_params #1*", m, s.SR];
      }
    }
    class f extends i {
      constructor(e2) {
        super(), n.proto3.util.initPartial(e2, this);
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
        return ["BeforeSubmitPromptRequestResponse|1 continue 8?|2 user_message 9?|3 additional_context 9?"];
      }
    }
    class g extends i {
      constructor(e2) {
        super(), this.text = "", this.modelParams = [], n.proto3.util.initPartial(e2, this);
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
        return ["AfterAgentResponseRequestQuery|1 text 9|2 conversation_id 9?|3 generation_id 9?|4 model 9?|5 model_id 9?|6 model_params #0*|7 input_tokens 3?|8 output_tokens 3?|9 cache_read_tokens 3?|10 cache_write_tokens 3?", s.SR];
      }
    }
    class y extends i {
      constructor(e2) {
        super(), n.proto3.util.initPartial(e2, this);
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
        return ["AfterAgentResponseRequestResponse"];
      }
    }
    class w extends i {
      constructor(e2) {
        super(), this.text = "", this.modelParams = [], n.proto3.util.initPartial(e2, this);
      }
      static fromBinary(e2, t2) {
        return new w().fromBinary(e2, t2);
      }
      static fromJson(e2, t2) {
        return new w().fromJson(e2, t2);
      }
      static fromJsonString(e2, t2) {
        return new w().fromJsonString(e2, t2);
      }
      static equals(e2, t2) {
        return n.proto3.util.equals(w, e2, t2);
      }
      static $() {
        return ["AfterAgentThoughtRequestQuery|1 text 9|2 duration_ms 3?|3 conversation_id 9?|4 generation_id 9?|5 model 9?|6 model_id 9?|7 model_params #0*", s.SR];
      }
    }
    class v extends i {
      constructor(e2) {
        super(), n.proto3.util.initPartial(e2, this);
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
        return ["AfterAgentThoughtRequestResponse"];
      }
    }
    class _ extends i {
      constructor(e2) {
        super(), this.status = "", this.loopCount = 0, this.modelParams = [], n.proto3.util.initPartial(e2, this);
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
        return ["StopRequestQuery|1 status 9|2 loop_count 5|3 conversation_id 9?|4 generation_id 9?|5 model 9?|6 model_id 9?|7 model_params #0*|8 input_tokens 3?|9 output_tokens 3?|10 cache_read_tokens 3?|11 cache_write_tokens 3?", s.SR];
      }
    }
    class b extends i {
      constructor(e2) {
        super(), n.proto3.util.initPartial(e2, this);
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
        return ["StopRequestResponse|1 followup_message 9?"];
      }
    }
    class S extends i {
      constructor(e2) {
        super(), this.toolName = "", this.toolUseId = "", this.modelParams = [], n.proto3.util.initPartial(e2, this);
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
        return ["PreToolUseRequestQuery|1 tool_name 9|2 tool_input #0|3 tool_use_id 9|4 cwd 9?|5 conversation_id 9?|6 generation_id 9?|7 model 9?|8 model_id 9?|9 model_params #1*|10 parent_tool_call_id 9?", n.Struct, s.SR];
      }
    }
    class k extends i {
      constructor(e2) {
        super(), n.proto3.util.initPartial(e2, this);
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
        return ["PreToolUseRequestResponse|1 permission 9?|2 user_message 9?|3 agent_message 9?|4 updated_input 9?|5 additional_context 9?"];
      }
    }
    class x extends i {
      constructor(e2) {
        super(), this.toolName = "", this.toolOutput = "", this.durationMs = n.protoInt64.zero, this.toolUseId = "", this.modelParams = [], n.proto3.util.initPartial(e2, this);
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
        return ["PostToolUseRequestQuery|1 tool_name 9|2 tool_input #0|3 tool_output 9|4 duration_ms 3|5 tool_use_id 9|6 cwd 9?|7 conversation_id 9?|8 generation_id 9?|9 model 9?|10 model_id 9?|11 model_params #1*|12 parent_tool_call_id 9?", n.Struct, s.SR];
      }
    }
    class E extends i {
      constructor(e2) {
        super(), n.proto3.util.initPartial(e2, this);
      }
      static fromBinary(e2, t2) {
        return new E().fromBinary(e2, t2);
      }
      static fromJson(e2, t2) {
        return new E().fromJson(e2, t2);
      }
      static fromJsonString(e2, t2) {
        return new E().fromJsonString(e2, t2);
      }
      static equals(e2, t2) {
        return n.proto3.util.equals(E, e2, t2);
      }
      static $() {
        return ["PostToolUseRequestResponse|1 additional_context 9?"];
      }
    }
    class I extends i {
      constructor(e2) {
        super(), this.toolName = "", this.errorMessage = "", this.failureType = "", this.durationMs = n.protoInt64.zero, this.toolUseId = "", this.isInterrupt = false, this.modelParams = [], n.proto3.util.initPartial(e2, this);
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
        return ["PostToolUseFailureRequestQuery|1 tool_name 9|2 tool_input #0|3 error_message 9|4 failure_type 9|5 duration_ms 3|6 tool_use_id 9|7 is_interrupt 8|8 conversation_id 9?|9 generation_id 9?|10 model 9?|11 model_id 9?|12 model_params #1*|13 parent_tool_call_id 9?", n.Struct, s.SR];
      }
    }
    class T extends i {
      constructor(e2) {
        super(), n.proto3.util.initPartial(e2, this);
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
        return ["PostToolUseFailureRequestResponse|1 additional_context 9?"];
      }
    }
  }
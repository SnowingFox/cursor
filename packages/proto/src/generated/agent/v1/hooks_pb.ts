// @ts-nocheck - TODO(recovered): recovered minified artifact; type-level signatures unavailable offline (documented exception, see REPORT.md)
// @recovered-by cursor-re
// artifact: .vendor/cursor-sdk-1.3.1/dist/esm/index.js sha256:86cacbdcba6cefe8315ceac7b60f0915500dbe94175aebe3d62f2abf4f716a87
// module: "../proto/dist/generated/agent/v1/hooks_pb.js" range:723333..734496
// basis: webpack-key
// confidence: B
// method: split+rewire+generated
// run: w1-sdk-runtime 2026-11-05T10:06:18.348Z
// status: generated (do not hand-edit descriptors)
import * as __dep0 from "@bufbuild/protobuf";
import * as __dep1 from "./requested_model_pb";
import * as __dep2 from "../../../runtime/compact";
var n = __dep0,
  s = __dep1,
  i = __dep2;
class o extends i.HL {
  static get runtime() {
    return (0, i.kU)(this, "runtime", n.proto3);
  }
  static $p() {
    return "agent.v1.";
  }
}
class a extends o {
  constructor(t) {
    super(), this.trigger = "", this.contextUsagePercent = 0, this.contextTokens = n.protoInt64.zero, this.contextWindowSize = n.protoInt64.zero, this.messageCount = 0, this.messagesToCompact = 0, this.isFirstCompaction = !1, this.modelParams = [], n.proto3.util.initPartial(t, this);
  }
  static fromBinary(t, r) {
    return new a().fromBinary(t, r);
  }
  static fromJson(t, r) {
    return new a().fromJson(t, r);
  }
  static fromJsonString(t, r) {
    return new a().fromJsonString(t, r);
  }
  static equals(t, r) {
    return n.proto3.util.equals(a, t, r);
  }
  static $() {
    return ["PreCompactRequestQuery|1 trigger 9|2 context_usage_percent 1|3 context_tokens 3|4 context_window_size 3|5 message_count 5|6 messages_to_compact 5|7 is_first_compaction 8|8 conversation_id 9?|9 generation_id 9?|10 model 9?|11 model_id 9?|12 model_params #0*", s.SR];
  }
}
class u extends o {
  constructor(t) {
    super(), n.proto3.util.initPartial(t, this);
  }
  static fromBinary(t, r) {
    return new u().fromBinary(t, r);
  }
  static fromJson(t, r) {
    return new u().fromJson(t, r);
  }
  static fromJsonString(t, r) {
    return new u().fromJsonString(t, r);
  }
  static equals(t, r) {
    return n.proto3.util.equals(u, t, r);
  }
  static $() {
    return ["PreCompactRequestResponse|1 user_message 9?"];
  }
}
class c extends o {
  constructor(t) {
    super(), this.subagentId = "", this.subagentType = "", this.task = "", this.parentConversationId = "", this.isParallelWorker = !1, this.modelParams = [], n.proto3.util.initPartial(t, this);
  }
  static fromBinary(t, r) {
    return new c().fromBinary(t, r);
  }
  static fromJson(t, r) {
    return new c().fromJson(t, r);
  }
  static fromJsonString(t, r) {
    return new c().fromJsonString(t, r);
  }
  static equals(t, r) {
    return n.proto3.util.equals(c, t, r);
  }
  static $() {
    return ["SubagentStartRequestQuery|1 subagent_id 9|2 subagent_type 9|3 task 9|4 parent_conversation_id 9|5 tool_call_id 9?|6 subagent_model 9?|7 is_parallel_worker 8|8 git_branch 9?|9 conversation_id 9?|10 generation_id 9?|11 model 9?|12 model_id 9?|13 model_params #0*", s.SR];
  }
}
class l extends o {
  constructor(t) {
    super(), n.proto3.util.initPartial(t, this);
  }
  static fromBinary(t, r) {
    return new l().fromBinary(t, r);
  }
  static fromJson(t, r) {
    return new l().fromJson(t, r);
  }
  static fromJsonString(t, r) {
    return new l().fromJsonString(t, r);
  }
  static equals(t, r) {
    return n.proto3.util.equals(l, t, r);
  }
  static $() {
    return ["SubagentStartRequestResponse|1 permission 9?|2 user_message 9?|3 additional_context 9?"];
  }
}
class m extends o {
  constructor(t) {
    super(), this.subagentId = "", this.subagentType = "", this.status = "", this.durationMs = n.protoInt64.zero, this.parentConversationId = "", this.messageCount = 0, this.toolCallCount = 0, this.modifiedFiles = [], this.loopCount = 0, this.modelParams = [], n.proto3.util.initPartial(t, this);
  }
  static fromBinary(t, r) {
    return new m().fromBinary(t, r);
  }
  static fromJson(t, r) {
    return new m().fromJson(t, r);
  }
  static fromJsonString(t, r) {
    return new m().fromJsonString(t, r);
  }
  static equals(t, r) {
    return n.proto3.util.equals(m, t, r);
  }
  static $() {
    return ["SubagentStopRequestQuery|1 subagent_id 9|2 subagent_type 9|3 status 9|4 duration_ms 3|5 summary 9?|6 parent_conversation_id 9|7 message_count 5|8 tool_call_count 5|9 error_message 9?|10 modified_files 9*|11 git_branch 9?|12 conversation_id 9?|13 generation_id 9?|14 model 9?|15 loop_count 5|16 task 9?|17 description 9?|18 model_id 9?|19 model_params #0*|20 child_conversation_id 9?", s.SR];
  }
}
class d extends o {
  constructor(t) {
    super(), n.proto3.util.initPartial(t, this);
  }
  static fromBinary(t, r) {
    return new d().fromBinary(t, r);
  }
  static fromJson(t, r) {
    return new d().fromJson(t, r);
  }
  static fromJsonString(t, r) {
    return new d().fromJsonString(t, r);
  }
  static equals(t, r) {
    return n.proto3.util.equals(d, t, r);
  }
  static $() {
    return ["SubagentStopRequestResponse|1 followup_message 9?|2 additional_context 9?"];
  }
}
class p extends o {
  constructor(t) {
    super(), this.type = "", this.filePath = "", n.proto3.util.initPartial(t, this);
  }
  static fromBinary(t, r) {
    return new p().fromBinary(t, r);
  }
  static fromJson(t, r) {
    return new p().fromJson(t, r);
  }
  static fromJsonString(t, r) {
    return new p().fromJsonString(t, r);
  }
  static equals(t, r) {
    return n.proto3.util.equals(p, t, r);
  }
  static $() {
    return ["BeforeSubmitPromptAttachment|1 type 9|2 file_path 9"];
  }
}
class f extends o {
  constructor(t) {
    super(), this.prompt = "", this.attachments = [], this.modelParams = [], n.proto3.util.initPartial(t, this);
  }
  static fromBinary(t, r) {
    return new f().fromBinary(t, r);
  }
  static fromJson(t, r) {
    return new f().fromJson(t, r);
  }
  static fromJsonString(t, r) {
    return new f().fromJsonString(t, r);
  }
  static equals(t, r) {
    return n.proto3.util.equals(f, t, r);
  }
  static $() {
    return ["BeforeSubmitPromptRequestQuery|1 prompt 9|2 attachments #0*|3 composer_mode 9?|4 conversation_id 9?|5 generation_id 9?|6 model 9?|7 model_id 9?|8 model_params #1*", p, s.SR];
  }
}
class h extends o {
  constructor(t) {
    super(), n.proto3.util.initPartial(t, this);
  }
  static fromBinary(t, r) {
    return new h().fromBinary(t, r);
  }
  static fromJson(t, r) {
    return new h().fromJson(t, r);
  }
  static fromJsonString(t, r) {
    return new h().fromJsonString(t, r);
  }
  static equals(t, r) {
    return n.proto3.util.equals(h, t, r);
  }
  static $() {
    return ["BeforeSubmitPromptRequestResponse|1 continue 8?|2 user_message 9?|3 additional_context 9?"];
  }
}
class g extends o {
  constructor(t) {
    super(), this.text = "", this.modelParams = [], n.proto3.util.initPartial(t, this);
  }
  static fromBinary(t, r) {
    return new g().fromBinary(t, r);
  }
  static fromJson(t, r) {
    return new g().fromJson(t, r);
  }
  static fromJsonString(t, r) {
    return new g().fromJsonString(t, r);
  }
  static equals(t, r) {
    return n.proto3.util.equals(g, t, r);
  }
  static $() {
    return ["AfterAgentResponseRequestQuery|1 text 9|2 conversation_id 9?|3 generation_id 9?|4 model 9?|5 model_id 9?|6 model_params #0*|7 input_tokens 3?|8 output_tokens 3?|9 cache_read_tokens 3?|10 cache_write_tokens 3?", s.SR];
  }
}
class _ extends o {
  constructor(t) {
    super(), n.proto3.util.initPartial(t, this);
  }
  static fromBinary(t, r) {
    return new _().fromBinary(t, r);
  }
  static fromJson(t, r) {
    return new _().fromJson(t, r);
  }
  static fromJsonString(t, r) {
    return new _().fromJsonString(t, r);
  }
  static equals(t, r) {
    return n.proto3.util.equals(_, t, r);
  }
  static $() {
    return ["AfterAgentResponseRequestResponse"];
  }
}
class w extends o {
  constructor(t) {
    super(), this.text = "", this.modelParams = [], n.proto3.util.initPartial(t, this);
  }
  static fromBinary(t, r) {
    return new w().fromBinary(t, r);
  }
  static fromJson(t, r) {
    return new w().fromJson(t, r);
  }
  static fromJsonString(t, r) {
    return new w().fromJsonString(t, r);
  }
  static equals(t, r) {
    return n.proto3.util.equals(w, t, r);
  }
  static $() {
    return ["AfterAgentThoughtRequestQuery|1 text 9|2 duration_ms 3?|3 conversation_id 9?|4 generation_id 9?|5 model 9?|6 model_id 9?|7 model_params #0*", s.SR];
  }
}
class y extends o {
  constructor(t) {
    super(), n.proto3.util.initPartial(t, this);
  }
  static fromBinary(t, r) {
    return new y().fromBinary(t, r);
  }
  static fromJson(t, r) {
    return new y().fromJson(t, r);
  }
  static fromJsonString(t, r) {
    return new y().fromJsonString(t, r);
  }
  static equals(t, r) {
    return n.proto3.util.equals(y, t, r);
  }
  static $() {
    return ["AfterAgentThoughtRequestResponse"];
  }
}
class J extends o {
  constructor(t) {
    super(), this.status = "", this.loopCount = 0, this.modelParams = [], n.proto3.util.initPartial(t, this);
  }
  static fromBinary(t, r) {
    return new J().fromBinary(t, r);
  }
  static fromJson(t, r) {
    return new J().fromJson(t, r);
  }
  static fromJsonString(t, r) {
    return new J().fromJsonString(t, r);
  }
  static equals(t, r) {
    return n.proto3.util.equals(J, t, r);
  }
  static $() {
    return ["StopRequestQuery|1 status 9|2 loop_count 5|3 conversation_id 9?|4 generation_id 9?|5 model 9?|6 model_id 9?|7 model_params #0*|8 input_tokens 3?|9 output_tokens 3?|10 cache_read_tokens 3?|11 cache_write_tokens 3?", s.SR];
  }
}
class S extends o {
  constructor(t) {
    super(), n.proto3.util.initPartial(t, this);
  }
  static fromBinary(t, r) {
    return new S().fromBinary(t, r);
  }
  static fromJson(t, r) {
    return new S().fromJson(t, r);
  }
  static fromJsonString(t, r) {
    return new S().fromJsonString(t, r);
  }
  static equals(t, r) {
    return n.proto3.util.equals(S, t, r);
  }
  static $() {
    return ["StopRequestResponse|1 followup_message 9?"];
  }
}
class q extends o {
  constructor(t) {
    super(), this.toolName = "", this.toolUseId = "", this.modelParams = [], n.proto3.util.initPartial(t, this);
  }
  static fromBinary(t, r) {
    return new q().fromBinary(t, r);
  }
  static fromJson(t, r) {
    return new q().fromJson(t, r);
  }
  static fromJsonString(t, r) {
    return new q().fromJsonString(t, r);
  }
  static equals(t, r) {
    return n.proto3.util.equals(q, t, r);
  }
  static $() {
    return ["PreToolUseRequestQuery|1 tool_name 9|2 tool_input #0|3 tool_use_id 9|4 cwd 9?|5 conversation_id 9?|6 generation_id 9?|7 model 9?|8 model_id 9?|9 model_params #1*|10 parent_tool_call_id 9?", n.Struct, s.SR];
  }
}
class B extends o {
  constructor(t) {
    super(), n.proto3.util.initPartial(t, this);
  }
  static fromBinary(t, r) {
    return new B().fromBinary(t, r);
  }
  static fromJson(t, r) {
    return new B().fromJson(t, r);
  }
  static fromJsonString(t, r) {
    return new B().fromJsonString(t, r);
  }
  static equals(t, r) {
    return n.proto3.util.equals(B, t, r);
  }
  static $() {
    return ["PreToolUseRequestResponse|1 permission 9?|2 user_message 9?|3 agent_message 9?|4 updated_input 9?|5 additional_context 9?"];
  }
}
class b extends o {
  constructor(t) {
    super(), this.toolName = "", this.toolOutput = "", this.durationMs = n.protoInt64.zero, this.toolUseId = "", this.modelParams = [], n.proto3.util.initPartial(t, this);
  }
  static fromBinary(t, r) {
    return new b().fromBinary(t, r);
  }
  static fromJson(t, r) {
    return new b().fromJson(t, r);
  }
  static fromJsonString(t, r) {
    return new b().fromJsonString(t, r);
  }
  static equals(t, r) {
    return n.proto3.util.equals(b, t, r);
  }
  static $() {
    return ["PostToolUseRequestQuery|1 tool_name 9|2 tool_input #0|3 tool_output 9|4 duration_ms 3|5 tool_use_id 9|6 cwd 9?|7 conversation_id 9?|8 generation_id 9?|9 model 9?|10 model_id 9?|11 model_params #1*|12 parent_tool_call_id 9?", n.Struct, s.SR];
  }
}
class P extends o {
  constructor(t) {
    super(), n.proto3.util.initPartial(t, this);
  }
  static fromBinary(t, r) {
    return new P().fromBinary(t, r);
  }
  static fromJson(t, r) {
    return new P().fromJson(t, r);
  }
  static fromJsonString(t, r) {
    return new P().fromJsonString(t, r);
  }
  static equals(t, r) {
    return n.proto3.util.equals(P, t, r);
  }
  static $() {
    return ["PostToolUseRequestResponse|1 additional_context 9?"];
  }
}
class I extends o {
  constructor(t) {
    super(), this.toolName = "", this.errorMessage = "", this.failureType = "", this.durationMs = n.protoInt64.zero, this.toolUseId = "", this.isInterrupt = !1, this.modelParams = [], n.proto3.util.initPartial(t, this);
  }
  static fromBinary(t, r) {
    return new I().fromBinary(t, r);
  }
  static fromJson(t, r) {
    return new I().fromJson(t, r);
  }
  static fromJsonString(t, r) {
    return new I().fromJsonString(t, r);
  }
  static equals(t, r) {
    return n.proto3.util.equals(I, t, r);
  }
  static $() {
    return ["PostToolUseFailureRequestQuery|1 tool_name 9|2 tool_input #0|3 error_message 9|4 failure_type 9|5 duration_ms 3|6 tool_use_id 9|7 is_interrupt 8|8 conversation_id 9?|9 generation_id 9?|10 model 9?|11 model_id 9?|12 model_params #1*|13 parent_tool_call_id 9?", n.Struct, s.SR];
  }
}
class x extends o {
  constructor(t) {
    super(), n.proto3.util.initPartial(t, this);
  }
  static fromBinary(t, r) {
    return new x().fromBinary(t, r);
  }
  static fromJson(t, r) {
    return new x().fromJson(t, r);
  }
  static fromJsonString(t, r) {
    return new x().fromJsonString(t, r);
  }
  static equals(t, r) {
    return n.proto3.util.equals(x, t, r);
  }
  static $() {
    return ["PostToolUseFailureRequestResponse|1 additional_context 9?"];
  }
}
export { u as $_, d as AH, w as AL, q as CI, f as D2, _ as FW, y as H, a as Ks, J as Od, x as U1, l as W0, B as Wn, c as b3, I as hy, g as mL, S as rT, b as rY, m as ty, h as u1, P as uB };

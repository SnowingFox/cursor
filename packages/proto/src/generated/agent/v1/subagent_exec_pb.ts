// @ts-nocheck - TODO(recovered): recovered minified artifact; type-level signatures unavailable offline (documented exception, see REPORT.md)
// @recovered-by cursor-re
// artifact: .vendor/cursor-sdk-1.3.1/dist/esm/index.js sha256:86cacbdcba6cefe8315ceac7b60f0915500dbe94175aebe3d62f2abf4f716a87
// module: "../proto/dist/generated/agent/v1/subagent_exec_pb.js" range:858370..865243
// basis: webpack-key
// confidence: B
// method: split+rewire+generated
// run: w1-sdk-runtime 2026-11-05T10:06:18.348Z
// status: generated (do not hand-edit descriptors)
import * as __dep0 from "@bufbuild/protobuf";
import * as __dep1 from "./requested_model_pb";
import * as __dep2 from "./subagents_pb";
import * as __dep3 from "./selected_context_pb";
import * as __dep4 from "../../../runtime/compact";
var n = __dep0,
  s = __dep1,
  i = __dep2,
  o = __dep3,
  a = __dep4;
const u = "agent.v1.";
class c extends a.HL {
  static get runtime() {
    return (0, a.kU)(this, "runtime", n.proto3);
  }
  static $p() {
    return u;
  }
}
var l = (0, a.QT)(n.proto3, u, "ForceBackgroundSubagentStatus", [[0, "UNSPECIFIED"], [1, "ACCEPTED"], [2, "NOT_FOUND"]], 1);
class m extends c {
  constructor(t) {
    super(), this.toolCallId = "", this.subagentType = "", this.modelId = "", this.prompt = "", this.readonly = !1, this.credentials = {
      case: void 0
    }, this.mode = i.FL.UNSPECIFIED, this.environment = i.dU.UNSPECIFIED, this.modelParameters = [], n.proto3.util.initPartial(t, this);
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
    return ["SubagentArgs|1 tool_call_id 9|2 subagent_type 9|3 model_id 9|4 prompt 9|5 readonly 8|6 resume_agent_id 9?|7 run_in_background 8?|8 continuation_config #0|9 parent_conversation_id 9?|10 api_key_credentials #1 credentials|11 azure_credentials #2 credentials|12 bedrock_credentials #3 credentials|13 interrupt 8?|14 mode #4|15 fork_agent_id 9?|16 root_parent_conversation_id 9?|17 selected_context #5?|18 direct_meta_parent_child_subagent 8?|19 environment #6|20 cloud_base_branch 9?|21 model_parameters #7*|22 voice_call_notes #8?", d, s.G0, s.ih, s.R4, i.FL, o.xv, i.dU, s.SR, i.OT];
  }
}
class d extends c {
  constructor(t) {
    super(), this.idleThreshold = 0, this.maxLoops = 0, this.nudgeMessage = "", this.escapeMessageTemplate = "", this.collectBackgroundChildren = !1, this.childrenCompletedMessageTemplate = "", this.continuationRoundDelayMs = 0, n.proto3.util.initPartial(t, this);
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
    return ["ClientContinuationConfig|1 idle_threshold 5|2 max_loops 5|3 nudge_message 9|4 escape_message_template 9|5 collect_background_children 8|6 children_completed_message_template 9|7 continuation_round_delay_ms 5"];
  }
}
class p extends c {
  constructor(t) {
    super(), this.result = {
      case: void 0
    }, n.proto3.util.initPartial(t, this);
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
    return ["SubagentResult|1 success #0 result|2 error #1 result", J, S];
  }
}
class f extends c {
  constructor(t) {
    super(), this.agentId = "", this.timeoutMs = 0, n.proto3.util.initPartial(t, this);
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
    return ["SubagentAwaitArgs|1 agent_id 9|2 timeout_ms 13"];
  }
}
class h extends c {
  constructor(t) {
    super(), this.result = {
      case: void 0
    }, n.proto3.util.initPartial(t, this);
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
    return ["SubagentAwaitResult|1 complete #0 result|2 still_running #1 result|3 not_found #2 result|4 error #3 result", g, _, w, y];
  }
}
class g extends c {
  constructor(t) {
    super(), this.agentId = "", this.toolCallCount = 0, n.proto3.util.initPartial(t, this);
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
    return ["SubagentAwaitComplete|1 agent_id 9|2 transcript_path 9?|3 tool_call_count 5|4 final_message 9?"];
  }
}
class _ extends c {
  constructor(t) {
    super(), this.agentId = "", n.proto3.util.initPartial(t, this);
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
    return ["SubagentAwaitStillRunning|1 agent_id 9|2 transcript_path 9?"];
  }
}
class w extends c {
  constructor(t) {
    super(), this.agentId = "", n.proto3.util.initPartial(t, this);
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
    return ["SubagentAwaitNotFound|1 agent_id 9"];
  }
}
class y extends c {
  constructor(t) {
    super(), this.error = "", n.proto3.util.initPartial(t, this);
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
    return ["SubagentAwaitError|1 agent_id 9?|2 error 9"];
  }
}
class J extends c {
  constructor(t) {
    super(), this.agentId = "", this.toolCallCount = 0, this.backgroundReason = i.qL.UNSPECIFIED, n.proto3.util.initPartial(t, this);
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
    return ["SubagentSuccess|1 agent_id 9|2 final_message 9?|3 tool_call_count 5|4 background_reason #0|5 transcript_path 9?", i.qL];
  }
}
class S extends c {
  constructor(t) {
    super(), this.error = "", n.proto3.util.initPartial(t, this);
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
    return ["SubagentError|1 agent_id 9?|2 error 9"];
  }
}
class q extends c {
  constructor(t) {
    super(), this.toolCallId = "", n.proto3.util.initPartial(t, this);
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
    return ["ForceBackgroundSubagentArgs|1 tool_call_id 9"];
  }
}
class B extends c {
  constructor(t) {
    super(), this.status = l.UNSPECIFIED, n.proto3.util.initPartial(t, this);
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
    return ["ForceBackgroundSubagentResult|1 status #0", l];
  }
}
export { J as HJ, w as Hq, _ as L5, m as Pw, q as S3, f as TN, y as Y, B as a3, g as bE, l as jh, S as od, p as vS, h as zJ };

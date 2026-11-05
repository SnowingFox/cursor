// @ts-nocheck - TODO(recovered): recovered minified artifact; type-level signatures unavailable offline (documented exception, see REPORT.md)
// @recovered-by cursor-re
// artifact: .vendor/cursor-sdk-1.3.1/dist/esm/index.js sha256:86cacbdcba6cefe8315ceac7b60f0915500dbe94175aebe3d62f2abf4f716a87
// module: "../proto/dist/generated/agent/v1/smart_mode_classifier_exec_pb.js" range:854208..858308
// basis: webpack-key
// confidence: B
// method: split+rewire+generated
// run: w1-sdk-runtime 2026-11-05T10:06:18.348Z
// status: generated (do not hand-edit descriptors)
import * as __dep0 from "@bufbuild/protobuf";
import * as __dep1 from "../../../runtime/compact";
var n = __dep0,
  s = __dep1;
const i = "agent.v1.";
class o extends s.HL {
  static get runtime() {
    return (0, s.kU)(this, "runtime", n.proto3);
  }
  static $p() {
    return i;
  }
}
var a = (0, s.QT)(n.proto3, i, "SmartModeClassifierDecision", [[0, "UNSPECIFIED"], [1, "ALLOW"], [2, "BLOCK"]], 1),
  u = (0, s.QT)(n.proto3, i, "SmartModeClassifierRuleEffect", [[0, "UNSPECIFIED"], [1, "ALLOW"], [2, "ASK_FIRST"]], 1),
  c = (0, s.QT)(n.proto3, i, "SmartModeClassifierRuleSource", [[0, "UNSPECIFIED"], [1, "CUSTOM_RULE"], [2, "TEAM_RULE"]], 1);
class l extends o {
  constructor(t) {
    super(), this.role = "", this.content = "", this.invokedFiles = [], n.proto3.util.initPartial(t, this);
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
    return ["SmartModeClassifierConversationMessage|1 role 9|2 content 9|3 position 13?|4 invoked_files #0*", m];
  }
}
class m extends o {
  constructor(t) {
    super(), this.path = "", this.content = "", n.proto3.util.initPartial(t, this);
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
    return ["SmartModeClassifierInvokedFile|1 path 9|2 content 9"];
  }
}
class d extends o {
  constructor(t) {
    super(), this.toolCallId = "", this.conversationContext = [], n.proto3.util.initPartial(t, this);
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
    return ["SmartModeClassifierArgs|1 tool_call_id 9|2 parent_conversation_id 9?|3 target #0|4 conversation_context #1*", p, l];
  }
}
class p extends o {
  constructor(t) {
    super(), this.action = "", n.proto3.util.initPartial(t, this);
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
    return ["SmartModeRiskTarget|1 action 9|2 arguments #0", n.Struct];
  }
}
class f extends o {
  constructor(t) {
    super(), this.result = {
      case: void 0
    }, n.proto3.util.initPartial(t, this);
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
    return ["SmartModeClassifierResult|1 success #0 result|2 error #1 result", h, _];
  }
}
class h extends o {
  constructor(t) {
    super(), this.decision = a.UNSPECIFIED, this.appliedRules = [], n.proto3.util.initPartial(t, this);
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
    return ["SmartModeClassifierSuccess|1 decision #0|2 block_reason 9?|3 proposed_allow_rule 9?|4 applied_rules #1*|5 proposed_allow_rule_replaces 9?|6 blocked_effect 9?|7 irreversible 8?|8 action_description 9?|9 block_reason_category 9?|10 jev_path 9?|11 high_stakes 8?", a, g];
  }
}
class g extends o {
  constructor(t) {
    super(), this.effect = u.UNSPECIFIED, this.text = "", this.source = c.UNSPECIFIED, n.proto3.util.initPartial(t, this);
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
    return ["SmartModeClassifierAppliedRule|1 effect #0|2 text 9|3 source #1", u, c];
  }
}
class _ extends o {
  constructor(t) {
    super(), this.error = "", n.proto3.util.initPartial(t, this);
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
    return ["SmartModeClassifierError|1 error 9"];
  }
}
export { d as Th, f as bN };

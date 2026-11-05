// @ts-nocheck - TODO(recovered): recovered minified artifact; type-level signatures unavailable offline (documented exception, see REPORT.md)
// @recovered-by cursor-re
// artifact: .vendor/cursor-sdk-1.3.1/dist/esm/index.js sha256:86cacbdcba6cefe8315ceac7b60f0915500dbe94175aebe3d62f2abf4f716a87
// module: "../proto/dist/generated/aiserver/v1/usage_pb.js" range:2427596..2439011
// basis: webpack-key
// confidence: B
// method: split+rewire+generated
// run: w1-sdk-runtime 2026-11-05T10:06:18.348Z
// status: generated (do not hand-edit descriptors)
import * as __dep0 from "@bufbuild/protobuf";
import * as __dep1 from "../../../runtime/compact";
var n = __dep0,
  s = __dep1;
const i = "aiserver.v1.";
class o extends s.HL {
  static get runtime() {
    return (0, s.kU)(this, "runtime", n.proto3);
  }
  static $p() {
    return i;
  }
}
var a = (0, s.QT)(n.proto3, i, "UsageEventKind", [[0, "UNSPECIFIED"], [1, "USAGE_BASED"], [2, "USER_API_KEY"], [3, "INCLUDED_IN_PRO"], [4, "INCLUDED_IN_BUSINESS"], [5, "ERRORED_NOT_CHARGED"], [6, "ABORTED_NOT_CHARGED"], [7, "CUSTOM_SUBSCRIPTION"], [8, "INCLUDED_IN_PRO_PLUS"], [9, "INCLUDED_IN_ULTRA"], [10, "FREE_CREDIT"]], 1);
class u extends o {
  constructor(t) {
    super(), this.modelId = "", this.maxMode = !1, this.parameters = [], n.proto3.util.initPartial(t, this);
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
    return ["ModelSelectionSnapshot|1 model_id 9|2 max_mode 8|3 parameters #0*", c];
  }
}
class c extends o {
  constructor(t) {
    super(), this.id = "", this.value = "", n.proto3.util.initPartial(t, this);
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
    return ["ModelSelectionSnapshot.ModelParameterValue|1 id 9|2 value 9"];
  }
}
class l extends o {
  constructor(t) {
    super(), this.feature = {
      case: void 0
    }, n.proto3.util.initPartial(t, this);
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
    return ["UsageEventDetails|1 chat #0 feature|2 context_chat #1 feature|3 cmd_k #2 feature|4 terminal_cmd_k #3 feature|5 ai_review_accepted_comment #4 feature|6 interpreter_chat #5 feature|7 slash_edit #6 feature|8 composer #7 feature|9 fast_apply #8 feature|10 warm_composer #9 feature|11 bug_finder_trigger_v1 #10 feature|12 tool_call_composer #11 feature|14 bug_bot #12 feature|15 prompt_hook #13 feature|20 agent_sdk_managed #14?|13 override_num_requests_counted 5?|16 override_num_requests_counted_millis 5?|17 routed_model 9?|18 requested_model_selection #15?|19 effective_model_selection #15?", f, y, J, S, q, B, b, g, h, w, d, _, p, m, P, u];
  }
}
class m extends o {
  constructor(t) {
    super(), this.modelIntent = "", n.proto3.util.initPartial(t, this);
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
    return ["UsageEventDetails.PromptHook|1 model_intent 9|2 token_usage #0?|3 max_mode 8?|4 is_token_based_call 8?", v];
  }
}
class d extends o {
  constructor(t) {
    super(), this.inBackgroundSubsidized = !1, this.costCents = 0, this.isFast = !1, n.proto3.util.initPartial(t, this);
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
    return ["UsageEventDetails.BugFinderTriggerV1|1 in_background_subsidized 8|2 cost_cents 5|3 is_fast 8"];
  }
}
class p extends o {
  constructor(t) {
    super(), this.modelIntent = "", this.isTokenBasedCall = !1, this.maxMode = !1, this.discount = {
      case: void 0
    }, this.billingMode = "", n.proto3.util.initPartial(t, this);
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
    return ["UsageEventDetails.BugBot|1 model_intent 9|2 token_usage #0|3 is_token_based_call 8|4 max_mode 8|5 no_discount #1 discount|6 free #1 discount|7 billing_mode 9", v, n.Empty];
  }
}
class f extends o {
  constructor(t) {
    super(), this.modelIntent = "", n.proto3.util.initPartial(t, this);
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
    return ["UsageEventDetails.Chat|1 model_intent 9|2 override_num_requests_counted 5?|3 is_token_based_call 8?|4 token_usage #0?|5 max_mode 8?", v];
  }
}
class h extends o {
  constructor(t) {
    super(), this.isOptimistic = !1, this.willingToPayExtraForSpeed = !1, n.proto3.util.initPartial(t, this);
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
    return ["UsageEventDetails.FastApply|1 is_optimistic 8|2 willing_to_pay_extra_for_speed 8"];
  }
}
class g extends o {
  constructor(t) {
    super(), this.modelIntent = "", n.proto3.util.initPartial(t, this);
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
    return ["UsageEventDetails.Composer|1 model_intent 9|2 override_num_requests_counted 5?|3 is_headless 8?|4 is_token_based_call 8?|5 token_usage #0?|6 max_mode 8?", v];
  }
}
class _ extends o {
  constructor(t) {
    super(), this.modelIntent = "", n.proto3.util.initPartial(t, this);
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
    return ["UsageEventDetails.ToolCallComposer|1 model_intent 9|2 override_num_requests_counted 5?|3 is_headless 8?|4 is_token_based_call 8?|5 token_usage #0?|6 max_mode 8?", v];
  }
}
class w extends o {
  constructor(t) {
    super(), this.modelIntent = "", n.proto3.util.initPartial(t, this);
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
    return ["UsageEventDetails.WarmComposer|1 model_intent 9|2 max_mode 8?"];
  }
}
class y extends o {
  constructor(t) {
    super(), this.modelIntent = "", n.proto3.util.initPartial(t, this);
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
    return ["UsageEventDetails.ContextChat|1 model_intent 9|2 override_num_requests_counted 5?|3 is_token_based_call 8?|4 token_usage #0?|5 max_mode 8?", v];
  }
}
class J extends o {
  constructor(t) {
    super(), this.modelIntent = "", n.proto3.util.initPartial(t, this);
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
    return ["UsageEventDetails.CmdK|1 model_intent 9|2 override_num_requests_counted 5?|3 is_token_based_call 8?|4 token_usage #0?|5 max_mode 8?", v];
  }
}
class S extends o {
  constructor(t) {
    super(), this.modelIntent = "", n.proto3.util.initPartial(t, this);
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
    return ["UsageEventDetails.TerminalCmdK|1 model_intent 9|2 override_num_requests_counted 5?|3 is_token_based_call 8?|4 token_usage #0?|5 max_mode 8?", v];
  }
}
class q extends o {
  constructor(t) {
    super(), n.proto3.util.initPartial(t, this);
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
    return ["UsageEventDetails.AiReviewAcceptedComment"];
  }
}
class B extends o {
  constructor(t) {
    super(), this.modelIntent = "", n.proto3.util.initPartial(t, this);
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
    return ["UsageEventDetails.InterpreterChat|1 model_intent 9|2 override_num_requests_counted 5?|3 is_token_based_call 8?|4 token_usage #0?|5 max_mode 8?", v];
  }
}
class b extends o {
  constructor(t) {
    super(), this.modelIntent = "", n.proto3.util.initPartial(t, this);
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
    return ["UsageEventDetails.SlashEdit|1 model_intent 9|2 max_mode 8?"];
  }
}
class P extends o {
  constructor(t) {
    super(), this.managedType = "", this.applicationSlug = "", n.proto3.util.initPartial(t, this);
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
    return ["UsageEventDetails.AgentSdkManagedProduct|1 managed_type 9|2 application_slug 9"];
  }
}
class I extends o {
  constructor(t) {
    super(), this.timestamp = n.protoInt64.zero, this.isSlow = !1, this.status = "", n.proto3.util.initPartial(t, this);
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
    return ["UsageEvent|1 timestamp 3|2 details #0|3 subscription_product_id 9?|4 usage_price_id 9?|5 is_slow 8|6 status 9|7 owning_user 9?|8 owning_team 9?|9 price_cents 2?|10 team_membership_type 9?", l];
  }
}
class x extends o {
  constructor(t) {
    super(), this.timestamp = n.protoInt64.zero, this.model = "", this.kind = a.UNSPECIFIED, this.maxMode = !1, this.requestsCosts = 0, n.proto3.util.initPartial(t, this);
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
    return ["UsageEventDisplay|1 timestamp 3|2 model 9|3 kind #0|4 custom_subscription_name 9?|5 max_mode 8|6 requests_costs 2|7 usage_based_costs 9?|8 is_token_based_call 8?|9 token_usage #1?|10 owning_user 9?|11 owning_team 9?|12 user_email 9?|13 cursor_token_fee 2?|14 is_chargeable 8?|15 service_account_name 9?|16 service_account_id 9?|17 is_headless 8?|18 charged_cents 2?|19 cloud_agent_id 9?|20 automation_id 9?|21 automation_managed_type 9?|22 client_type 9?|23 conversation_id 9?|24 subscription_product_id 9?|25 pr_author 9?|26 repo 9?|27 pr_number 5?|28 usage_event_id 9?", a, v];
  }
}
class v extends o {
  constructor(t) {
    super(), this.inputTokens = 0, this.outputTokens = 0, this.cacheWriteTokens = 0, this.cacheReadTokens = 0, this.totalCents = 0, n.proto3.util.initPartial(t, this);
  }
  static fromBinary(t, r) {
    return new v().fromBinary(t, r);
  }
  static fromJson(t, r) {
    return new v().fromJson(t, r);
  }
  static fromJsonString(t, r) {
    return new v().fromJsonString(t, r);
  }
  static equals(t, r) {
    return n.proto3.util.equals(v, t, r);
  }
  static $() {
    return ["TokenUsage|1 input_tokens 5|2 output_tokens 5|3 cache_write_tokens 5|4 cache_read_tokens 5|5 total_cents 2|6 discount_percent_off 5?|7 enterprise_usage_discount_percent 2?|8 enterprise_product_usage_discount_percent 2?"];
  }
}
export { x as GF, I as aq, l as kK };

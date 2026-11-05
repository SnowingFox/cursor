// @recovered-by cursor-re
// artifact: app/extensions/cursor-agent-host/dist/main.js sha256:9d478dff35f72f6b3ed85b33f2c4a15c12b41b4e3d42247ecc8ce4981e9308bb
// module: 5576 range:411568..427304
// basis: webpack-id confidence: C
// method: split
// run: ext-p0 2026-11-05T10:07:22.069Z
5576: (e, t, r) => {
    "use strict";
    r.d(t, { GF: () => k, aq: () => C, kK: () => u });
    var n = r(36038), s = r(8592);
    const o = "aiserver.v1.";
    class i extends s.HL {
      static get runtime() {
        return (0, s.kU)(this, "runtime", n.proto3);
      }
      static $p() {
        return o;
      }
    }
    var a = (0, s.QT)(n.proto3, o, "UsageEventKind", [[0, "UNSPECIFIED"], [1, "USAGE_BASED"], [2, "USER_API_KEY"], [3, "INCLUDED_IN_PRO"], [4, "INCLUDED_IN_BUSINESS"], [5, "ERRORED_NOT_CHARGED"], [6, "ABORTED_NOT_CHARGED"], [7, "CUSTOM_SUBSCRIPTION"], [8, "INCLUDED_IN_PRO_PLUS"], [9, "INCLUDED_IN_ULTRA"], [10, "FREE_CREDIT"]], 1);
    class c extends i {
      constructor(e2) {
        super(), this.modelId = "", this.maxMode = false, this.parameters = [], n.proto3.util.initPartial(e2, this);
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
        return ["ModelSelectionSnapshot|1 model_id 9|2 max_mode 8|3 parameters #0*", l];
      }
    }
    class l extends i {
      constructor(e2) {
        super(), this.id = "", this.value = "", n.proto3.util.initPartial(e2, this);
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
        return ["ModelSelectionSnapshot.ModelParameterValue|1 id 9|2 value 9"];
      }
    }
    class u extends i {
      constructor(e2) {
        super(), this.feature = { case: void 0 }, n.proto3.util.initPartial(e2, this);
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
        return ["UsageEventDetails|1 chat #0 feature|2 context_chat #1 feature|3 cmd_k #2 feature|4 terminal_cmd_k #3 feature|5 ai_review_accepted_comment #4 feature|6 interpreter_chat #5 feature|7 slash_edit #6 feature|8 composer #7 feature|9 fast_apply #8 feature|10 warm_composer #9 feature|11 bug_finder_trigger_v1 #10 feature|12 tool_call_composer #11 feature|14 bug_bot #12 feature|15 prompt_hook #13 feature|20 agent_sdk_managed #14?|13 override_num_requests_counted 5?|16 override_num_requests_counted_millis 5?|17 routed_model 9?|18 requested_model_selection #15?|19 effective_model_selection #15?", h, v, _, A, S, b, E, g, f, w, p, y, m, d, I, c];
      }
    }
    class d extends i {
      constructor(e2) {
        super(), this.modelIntent = "", n.proto3.util.initPartial(e2, this);
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
        return ["UsageEventDetails.PromptHook|1 model_intent 9|2 token_usage #0?|3 max_mode 8?|4 is_token_based_call 8?", x];
      }
    }
    class p extends i {
      constructor(e2) {
        super(), this.inBackgroundSubsidized = false, this.costCents = 0, this.isFast = false, n.proto3.util.initPartial(e2, this);
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
        return ["UsageEventDetails.BugFinderTriggerV1|1 in_background_subsidized 8|2 cost_cents 5|3 is_fast 8"];
      }
    }
    class m extends i {
      constructor(e2) {
        super(), this.modelIntent = "", this.isTokenBasedCall = false, this.maxMode = false, this.discount = { case: void 0 }, this.billingMode = "", n.proto3.util.initPartial(e2, this);
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
        return ["UsageEventDetails.BugBot|1 model_intent 9|2 token_usage #0|3 is_token_based_call 8|4 max_mode 8|5 no_discount #1 discount|6 free #1 discount|7 billing_mode 9", x, n.Empty];
      }
    }
    class h extends i {
      constructor(e2) {
        super(), this.modelIntent = "", n.proto3.util.initPartial(e2, this);
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
        return ["UsageEventDetails.Chat|1 model_intent 9|2 override_num_requests_counted 5?|3 is_token_based_call 8?|4 token_usage #0?|5 max_mode 8?", x];
      }
    }
    class f extends i {
      constructor(e2) {
        super(), this.isOptimistic = false, this.willingToPayExtraForSpeed = false, n.proto3.util.initPartial(e2, this);
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
        return ["UsageEventDetails.FastApply|1 is_optimistic 8|2 willing_to_pay_extra_for_speed 8"];
      }
    }
    class g extends i {
      constructor(e2) {
        super(), this.modelIntent = "", n.proto3.util.initPartial(e2, this);
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
        return ["UsageEventDetails.Composer|1 model_intent 9|2 override_num_requests_counted 5?|3 is_headless 8?|4 is_token_based_call 8?|5 token_usage #0?|6 max_mode 8?", x];
      }
    }
    class y extends i {
      constructor(e2) {
        super(), this.modelIntent = "", n.proto3.util.initPartial(e2, this);
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
        return ["UsageEventDetails.ToolCallComposer|1 model_intent 9|2 override_num_requests_counted 5?|3 is_headless 8?|4 is_token_based_call 8?|5 token_usage #0?|6 max_mode 8?", x];
      }
    }
    class w extends i {
      constructor(e2) {
        super(), this.modelIntent = "", n.proto3.util.initPartial(e2, this);
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
        return ["UsageEventDetails.WarmComposer|1 model_intent 9|2 max_mode 8?"];
      }
    }
    class v extends i {
      constructor(e2) {
        super(), this.modelIntent = "", n.proto3.util.initPartial(e2, this);
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
        return ["UsageEventDetails.ContextChat|1 model_intent 9|2 override_num_requests_counted 5?|3 is_token_based_call 8?|4 token_usage #0?|5 max_mode 8?", x];
      }
    }
    class _ extends i {
      constructor(e2) {
        super(), this.modelIntent = "", n.proto3.util.initPartial(e2, this);
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
        return ["UsageEventDetails.CmdK|1 model_intent 9|2 override_num_requests_counted 5?|3 is_token_based_call 8?|4 token_usage #0?|5 max_mode 8?", x];
      }
    }
    class A extends i {
      constructor(e2) {
        super(), this.modelIntent = "", n.proto3.util.initPartial(e2, this);
      }
      static fromBinary(e2, t2) {
        return new A().fromBinary(e2, t2);
      }
      static fromJson(e2, t2) {
        return new A().fromJson(e2, t2);
      }
      static fromJsonString(e2, t2) {
        return new A().fromJsonString(e2, t2);
      }
      static equals(e2, t2) {
        return n.proto3.util.equals(A, e2, t2);
      }
      static $() {
        return ["UsageEventDetails.TerminalCmdK|1 model_intent 9|2 override_num_requests_counted 5?|3 is_token_based_call 8?|4 token_usage #0?|5 max_mode 8?", x];
      }
    }
    class S extends i {
      constructor(e2) {
        super(), n.proto3.util.initPartial(e2, this);
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
        return ["UsageEventDetails.AiReviewAcceptedComment"];
      }
    }
    class b extends i {
      constructor(e2) {
        super(), this.modelIntent = "", n.proto3.util.initPartial(e2, this);
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
        return ["UsageEventDetails.InterpreterChat|1 model_intent 9|2 override_num_requests_counted 5?|3 is_token_based_call 8?|4 token_usage #0?|5 max_mode 8?", x];
      }
    }
    class E extends i {
      constructor(e2) {
        super(), this.modelIntent = "", n.proto3.util.initPartial(e2, this);
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
        return ["UsageEventDetails.SlashEdit|1 model_intent 9|2 max_mode 8?"];
      }
    }
    class I extends i {
      constructor(e2) {
        super(), this.managedType = "", this.applicationSlug = "", n.proto3.util.initPartial(e2, this);
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
        return ["UsageEventDetails.AgentSdkManagedProduct|1 managed_type 9|2 application_slug 9"];
      }
    }
    class C extends i {
      constructor(e2) {
        super(), this.timestamp = n.protoInt64.zero, this.isSlow = false, this.status = "", n.proto3.util.initPartial(e2, this);
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
        return ["UsageEvent|1 timestamp 3|2 details #0|3 subscription_product_id 9?|4 usage_price_id 9?|5 is_slow 8|6 status 9|7 owning_user 9?|8 owning_team 9?|9 price_cents 2?|10 team_membership_type 9?", u];
      }
    }
    class k extends i {
      constructor(e2) {
        super(), this.timestamp = n.protoInt64.zero, this.model = "", this.kind = a.UNSPECIFIED, this.maxMode = false, this.requestsCosts = 0, n.proto3.util.initPartial(e2, this);
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
        return ["UsageEventDisplay|1 timestamp 3|2 model 9|3 kind #0|4 custom_subscription_name 9?|5 max_mode 8|6 requests_costs 2|7 usage_based_costs 9?|8 is_token_based_call 8?|9 token_usage #1?|10 owning_user 9?|11 owning_team 9?|12 user_email 9?|13 cursor_token_fee 2?|14 is_chargeable 8?|15 service_account_name 9?|16 service_account_id 9?|17 is_headless 8?|18 charged_cents 2?|19 cloud_agent_id 9?|20 automation_id 9?|21 automation_managed_type 9?|22 client_type 9?|23 conversation_id 9?|24 subscription_product_id 9?|25 pr_author 9?|26 repo 9?|27 pr_number 5?", a, x];
      }
    }
    class x extends i {
      constructor(e2) {
        super(), this.inputTokens = 0, this.outputTokens = 0, this.cacheWriteTokens = 0, this.cacheReadTokens = 0, this.totalCents = 0, n.proto3.util.initPartial(e2, this);
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
        return ["TokenUsage|1 input_tokens 5|2 output_tokens 5|3 cache_write_tokens 5|4 cache_read_tokens 5|5 total_cents 2|6 discount_percent_off 5?|7 enterprise_usage_discount_percent 2?"];
      }
    }
  }
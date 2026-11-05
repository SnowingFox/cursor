// @recovered-by cursor-re
// artifact: app/extensions/cursor-always-local/dist/main.js sha256:14fb2d0e360d81a024b4ec605f417e030e19b30b2df99bc45648aa227060534e
// module: 5576 range:1250974..1266793
// basis: webpack-id confidence: C
// method: split
// run: ext-agent 2026-11-05T10:20:08.356Z
5576: (t2, e2, r2) => {
    "use strict";
    r2.d(e2, { GF: () => b, aq: () => C, kK: () => l });
    var n2 = r2(6038), s2 = r2(8592);
    const i2 = "aiserver.v1.";
    class o2 extends s2.HL {
      static get runtime() {
        return (0, s2.kU)(this, "runtime", n2.proto3);
      }
      static $p() {
        return i2;
      }
    }
    var a = (0, s2.QT)(n2.proto3, i2, "UsageEventKind", [[0, "UNSPECIFIED"], [1, "USAGE_BASED"], [2, "USER_API_KEY"], [3, "INCLUDED_IN_PRO"], [4, "INCLUDED_IN_BUSINESS"], [5, "ERRORED_NOT_CHARGED"], [6, "ABORTED_NOT_CHARGED"], [7, "CUSTOM_SUBSCRIPTION"], [8, "INCLUDED_IN_PRO_PLUS"], [9, "INCLUDED_IN_ULTRA"], [10, "FREE_CREDIT"]], 1);
    class u extends o2 {
      constructor(t3) {
        super(), this.modelId = "", this.maxMode = false, this.parameters = [], n2.proto3.util.initPartial(t3, this);
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
        return ["ModelSelectionSnapshot|1 model_id 9|2 max_mode 8|3 parameters #0*", c];
      }
    }
    class c extends o2 {
      constructor(t3) {
        super(), this.id = "", this.value = "", n2.proto3.util.initPartial(t3, this);
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
        return ["ModelSelectionSnapshot.ModelParameterValue|1 id 9|2 value 9"];
      }
    }
    class l extends o2 {
      constructor(t3) {
        super(), this.feature = { case: void 0 }, n2.proto3.util.initPartial(t3, this);
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
        return ["UsageEventDetails|1 chat #0 feature|2 context_chat #1 feature|3 cmd_k #2 feature|4 terminal_cmd_k #3 feature|5 ai_review_accepted_comment #4 feature|6 interpreter_chat #5 feature|7 slash_edit #6 feature|8 composer #7 feature|9 fast_apply #8 feature|10 warm_composer #9 feature|11 bug_finder_trigger_v1 #10 feature|12 tool_call_composer #11 feature|14 bug_bot #12 feature|15 prompt_hook #13 feature|20 agent_sdk_managed #14?|13 override_num_requests_counted 5?|16 override_num_requests_counted_millis 5?|17 routed_model 9?|18 requested_model_selection #15?|19 effective_model_selection #15?", p, y, w, S, J, B, E, g, h, _, d, A, f, m, I, u];
      }
    }
    class m extends o2 {
      constructor(t3) {
        super(), this.modelIntent = "", n2.proto3.util.initPartial(t3, this);
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
        return ["UsageEventDetails.PromptHook|1 model_intent 9|2 token_usage #0?|3 max_mode 8?|4 is_token_based_call 8?", k];
      }
    }
    class d extends o2 {
      constructor(t3) {
        super(), this.inBackgroundSubsidized = false, this.costCents = 0, this.isFast = false, n2.proto3.util.initPartial(t3, this);
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
        return ["UsageEventDetails.BugFinderTriggerV1|1 in_background_subsidized 8|2 cost_cents 5|3 is_fast 8"];
      }
    }
    class f extends o2 {
      constructor(t3) {
        super(), this.modelIntent = "", this.isTokenBasedCall = false, this.maxMode = false, this.discount = { case: void 0 }, this.billingMode = "", n2.proto3.util.initPartial(t3, this);
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
        return ["UsageEventDetails.BugBot|1 model_intent 9|2 token_usage #0|3 is_token_based_call 8|4 max_mode 8|5 no_discount #1 discount|6 free #1 discount|7 billing_mode 9", k, n2.Empty];
      }
    }
    class p extends o2 {
      constructor(t3) {
        super(), this.modelIntent = "", n2.proto3.util.initPartial(t3, this);
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
        return ["UsageEventDetails.Chat|1 model_intent 9|2 override_num_requests_counted 5?|3 is_token_based_call 8?|4 token_usage #0?|5 max_mode 8?", k];
      }
    }
    class h extends o2 {
      constructor(t3) {
        super(), this.isOptimistic = false, this.willingToPayExtraForSpeed = false, n2.proto3.util.initPartial(t3, this);
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
        return ["UsageEventDetails.FastApply|1 is_optimistic 8|2 willing_to_pay_extra_for_speed 8"];
      }
    }
    class g extends o2 {
      constructor(t3) {
        super(), this.modelIntent = "", n2.proto3.util.initPartial(t3, this);
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
        return ["UsageEventDetails.Composer|1 model_intent 9|2 override_num_requests_counted 5?|3 is_headless 8?|4 is_token_based_call 8?|5 token_usage #0?|6 max_mode 8?", k];
      }
    }
    class A extends o2 {
      constructor(t3) {
        super(), this.modelIntent = "", n2.proto3.util.initPartial(t3, this);
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
        return ["UsageEventDetails.ToolCallComposer|1 model_intent 9|2 override_num_requests_counted 5?|3 is_headless 8?|4 is_token_based_call 8?|5 token_usage #0?|6 max_mode 8?", k];
      }
    }
    class _ extends o2 {
      constructor(t3) {
        super(), this.modelIntent = "", n2.proto3.util.initPartial(t3, this);
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
        return ["UsageEventDetails.WarmComposer|1 model_intent 9|2 max_mode 8?"];
      }
    }
    class y extends o2 {
      constructor(t3) {
        super(), this.modelIntent = "", n2.proto3.util.initPartial(t3, this);
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
        return ["UsageEventDetails.ContextChat|1 model_intent 9|2 override_num_requests_counted 5?|3 is_token_based_call 8?|4 token_usage #0?|5 max_mode 8?", k];
      }
    }
    class w extends o2 {
      constructor(t3) {
        super(), this.modelIntent = "", n2.proto3.util.initPartial(t3, this);
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
        return ["UsageEventDetails.CmdK|1 model_intent 9|2 override_num_requests_counted 5?|3 is_token_based_call 8?|4 token_usage #0?|5 max_mode 8?", k];
      }
    }
    class S extends o2 {
      constructor(t3) {
        super(), this.modelIntent = "", n2.proto3.util.initPartial(t3, this);
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
        return ["UsageEventDetails.TerminalCmdK|1 model_intent 9|2 override_num_requests_counted 5?|3 is_token_based_call 8?|4 token_usage #0?|5 max_mode 8?", k];
      }
    }
    class J extends o2 {
      constructor(t3) {
        super(), n2.proto3.util.initPartial(t3, this);
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
        return ["UsageEventDetails.AiReviewAcceptedComment"];
      }
    }
    class B extends o2 {
      constructor(t3) {
        super(), this.modelIntent = "", n2.proto3.util.initPartial(t3, this);
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
        return ["UsageEventDetails.InterpreterChat|1 model_intent 9|2 override_num_requests_counted 5?|3 is_token_based_call 8?|4 token_usage #0?|5 max_mode 8?", k];
      }
    }
    class E extends o2 {
      constructor(t3) {
        super(), this.modelIntent = "", n2.proto3.util.initPartial(t3, this);
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
        return ["UsageEventDetails.SlashEdit|1 model_intent 9|2 max_mode 8?"];
      }
    }
    class I extends o2 {
      constructor(t3) {
        super(), this.managedType = "", this.applicationSlug = "", n2.proto3.util.initPartial(t3, this);
      }
      static fromBinary(t3, e3) {
        return new I().fromBinary(t3, e3);
      }
      static fromJson(t3, e3) {
        return new I().fromJson(t3, e3);
      }
      static fromJsonString(t3, e3) {
        return new I().fromJsonString(t3, e3);
      }
      static equals(t3, e3) {
        return n2.proto3.util.equals(I, t3, e3);
      }
      static $() {
        return ["UsageEventDetails.AgentSdkManagedProduct|1 managed_type 9|2 application_slug 9"];
      }
    }
    class C extends o2 {
      constructor(t3) {
        super(), this.timestamp = n2.protoInt64.zero, this.isSlow = false, this.status = "", n2.proto3.util.initPartial(t3, this);
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
        return ["UsageEvent|1 timestamp 3|2 details #0|3 subscription_product_id 9?|4 usage_price_id 9?|5 is_slow 8|6 status 9|7 owning_user 9?|8 owning_team 9?|9 price_cents 2?|10 team_membership_type 9?", l];
      }
    }
    class b extends o2 {
      constructor(t3) {
        super(), this.timestamp = n2.protoInt64.zero, this.model = "", this.kind = a.UNSPECIFIED, this.maxMode = false, this.requestsCosts = 0, n2.proto3.util.initPartial(t3, this);
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
        return ["UsageEventDisplay|1 timestamp 3|2 model 9|3 kind #0|4 custom_subscription_name 9?|5 max_mode 8|6 requests_costs 2|7 usage_based_costs 9?|8 is_token_based_call 8?|9 token_usage #1?|10 owning_user 9?|11 owning_team 9?|12 user_email 9?|13 cursor_token_fee 2?|14 is_chargeable 8?|15 service_account_name 9?|16 service_account_id 9?|17 is_headless 8?|18 charged_cents 2?|19 cloud_agent_id 9?|20 automation_id 9?|21 automation_managed_type 9?|22 client_type 9?|23 conversation_id 9?|24 subscription_product_id 9?|25 pr_author 9?|26 repo 9?|27 pr_number 5?", a, k];
      }
    }
    class k extends o2 {
      constructor(t3) {
        super(), this.inputTokens = 0, this.outputTokens = 0, this.cacheWriteTokens = 0, this.cacheReadTokens = 0, this.totalCents = 0, n2.proto3.util.initPartial(t3, this);
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
        return ["TokenUsage|1 input_tokens 5|2 output_tokens 5|3 cache_write_tokens 5|4 cache_read_tokens 5|5 total_cents 2|6 discount_percent_off 5?|7 enterprise_usage_discount_percent 2?"];
      }
    }
  }
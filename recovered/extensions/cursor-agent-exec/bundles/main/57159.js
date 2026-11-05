// @recovered-by cursor-re
// artifact: app/extensions/cursor-agent-exec/dist/main.js sha256:8d20326bd54948353115113c2d4716cf781d593610fd4d8acebcc37a3170da8e
// module: 57159 range:4616125..4628154
// basis: webpack-id confidence: C
// method: split
// run: ext-p0 2026-11-05T10:07:22.069Z
57159: (e, t, r) => {
    "use strict";
    r.d(t, { MSu: () => S, K$: () => f, UNk: () => I });
    var n = r(36038), s = (r(50464), r(77620), r(67918), r(8592));
    const o = "aiserver.v1.";
    s.HL;
    n.proto3, n.proto3, n.proto3;
    r(55094);
    s.HL;
    const i = "aiserver.v1.";
    s.HL;
    n.proto3, n.proto3;
    r(4067);
    const a = "aiserver.v1.";
    s.HL;
    n.proto3, n.proto3;
    n.proto3;
    n.proto3;
    n.proto3;
    n.proto3;
    n.proto3;
    n.proto3;
    n.proto3;
    n.proto3, n.proto3;
    n.proto3;
    n.proto3;
    n.proto3;
    n.proto3;
    n.proto3;
    n.proto3;
    var c = r(86209);
    const l = "aiserver.v1.";
    s.HL;
    n.proto3;
    n.proto3;
    n.proto3;
    s.HL;
    r(65610), r(18846), r(3617), r(69584);
    const u = "aiserver.v1.";
    s.HL;
    n.proto3, n.proto3;
    const d = "aiserver.v1.";
    s.HL;
    n.proto3, n.proto3;
    s.HL;
    r(5576);
    const p = "aiserver.v1.";
    s.HL;
    n.proto3;
    const m = "aiserver.v1.";
    class h extends s.HL {
      static get runtime() {
        return (0, s.kU)(this, "runtime", n.proto3);
      }
      static $p() {
        return m;
      }
    }
    n.proto3, n.proto3, n.proto3;
    var f = (0, s.QT)(n.proto3, m, "CloudAgentEffortMode", [[0, "UNSPECIFIED"], [1, "STANDARD"], [2, "GRIND"]], 1);
    n.proto3;
    n.proto3;
    n.proto3;
    n.proto3;
    n.proto3;
    n.proto3, n.proto3;
    n.proto3, n.proto3, n.proto3;
    n.proto3;
    var g = (0, s.QT)(n.proto3, m, "AvailableModelsResponse.DegradationStatus", [[0, "UNSPECIFIED"], [1, "DEGRADED"], [2, "DISABLED"]], 1), y = (0, s.QT)(n.proto3, m, "AvailableModelsResponse.ModelVendorId", [[0, "UNSPECIFIED"], [1, "ANTHROPIC"], [2, "OPENAI"], [3, "GOOGLE"], [4, "XAI"], [5, "MOONSHOT"], [6, "CURSOR"], [7, "NVIDIA"], [8, "ZAI"], [9, "META"], [10, "DEEPSEEK"]], 1);
    class w extends h {
      constructor(e2) {
        super(), this.primaryText = "", this.secondaryText = "", this.secondaryWarningText = false, this.icon = "", this.tertiaryText = "", this.tertiaryTextUrl = "", n.proto3.util.initPartial(e2, this);
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
        return ["AvailableModelsResponse.TooltipData|1 primary_text 9|2 secondary_text 9|3 secondary_warning_text 8|4 icon 9|5 tertiary_text 9|6 tertiary_text_url 9|7 markdown_content 9?"];
      }
    }
    class v extends h {
      constructor(e2) {
        super(), this.id = y.UNSPECIFIED, this.displayName = "", n.proto3.util.initPartial(e2, this);
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
        return ["AvailableModelsResponse.ModelVendor|1 id #0|2 display_name 9", y];
      }
    }
    class _ extends h {
      constructor(e2) {
        super(), this.label = "", this.variant = b.UNSPECIFIED, this.dismissOnSelection = false, n.proto3.util.initPartial(e2, this);
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
        return ["AvailableModelsResponse.ModelPickerBadge|1 label 9|2 variant #0|3 dismiss_on_selection 8", b];
      }
    }
    var b = (0, s.QT)(n.proto3, m, "AvailableModelsResponse.ModelPickerBadge.Variant", [[0, "UNSPECIFIED"], [1, "ACCENT"], [2, "NEUTRAL"], [3, "SUCCESS"], [4, "WARN"], [5, "DANGER"]], 1);
    class S extends h {
      constructor(e2) {
        super(), this.name = "", this.defaultOn = false, this.parameterDefinitions = [], this.variants = [], this.legacySlugs = [], this.idAliases = [], this.cloudAgentEffortModes = [], this.modelPickerBadges = [], n.proto3.util.initPartial(e2, this);
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
        return ["AvailableModelsResponse.AvailableModel|1 name 9|2 default_on 8|3 is_long_context_only 8?|4 is_chat_only 8?|5 supports_agent 8?|6 degradation_status #0?|7 price 1?|8 tooltip_data #1?|20 tooltip_data_for_max_mode #1?|9 supports_thinking 8?|10 supports_images 8?|11 supports_auto_context 8?|12 auto_context_max_tokens 5?|13 auto_context_extended_max_tokens 5?|14 supports_max_mode 8?|19 supports_non_max_mode 8?|15 context_token_limit 5?|16 context_token_limit_for_max_mode 5?|17 client_display_name 9?|18 server_model_name 9?|21 is_recommended_for_background_composer 8?|22 supports_plan_mode 8?|25 supports_sandboxing 8?|23 is_user_added 8?|24 inputbox_short_model_name 9?|26 supports_cmd_k 8?|27 only_supports_cmd_k 8?|28 background_composer_sort_order 5?|29 parameter_definitions #2*|30 variants #3*|32 cloud_agent_effort_mode #4?|33 cloud_migrate_to_model 9?|34 upgrade_model_id 9?|35 is_hidden 8?|36 legacy_slugs 9*|37 id_aliases 9*|38 named_model_section_index 5?|39 tagline 9?|40 visible_in_routed_model_view 8?|41 vendor_name 9?|42 vendor #5?|43 default_disabled_in_admin_allowlist 8?|44 cloud_agent_effort_modes #4*|45 supports_smart_mode_classifier 8?|46 requires_data_retention 8?|47 reason_for_zdr_consent_block 9?|48 model_picker_badges #6*", g, w, I, k, f, v, _];
      }
    }
    class k extends h {
      constructor(e2) {
        super(), this.parameterValues = [], this.displayName = "", this.isMaxMode = false, n.proto3.util.initPartial(e2, this);
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
        return ["AvailableModelsResponse.ModelVariantConfig|1 parameter_values #0*|2 display_name 9|8 display_name_outside_picker 9?|3 is_max_mode 8|4 is_default_max_config 8?|5 is_default_non_max_config 8?|6 tooltip_data #1?|7 tagline 9?|9 variant_string_representation 9?|10 confirmation_dialogue #2?|11 legacy_slug 9?", c.SR, w, x];
      }
    }
    class x extends h {
      constructor(e2) {
        super(), this.title = "", this.body = "", this.key = "", this.blocksSubmission = false, n.proto3.util.initPartial(e2, this);
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
        return ["AvailableModelsResponse.ConfirmationDialogue|1 title 9|2 body 9|3 key 9|4 blocks_submission 8|5 presentation #0?", E];
      }
    }
    var E = (0, s.QT)(n.proto3, m, "AvailableModelsResponse.ConfirmationDialogue.Presentation", [[0, "UNSPECIFIED"], [1, "POST_PICKER_WARNING"]], 1);
    class I extends h {
      constructor(e2) {
        super(), this.id = "", this.name = "", n.proto3.util.initPartial(e2, this);
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
        return ["ModelParameterDefinition|1 id 9|2 name 9|3 markdown_tooltip 9?|4 parameter_type #0|5 is_cycleable_by_hotkey 8?", T];
      }
    }
    class T extends h {
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
        return ["ModelParameterDefinition.ModelParameterType|1 boolean_parameter #0?|2 enum_parameter #1?", C, A];
      }
    }
    class C extends h {
      constructor(e2) {
        super(), this.values = [], n.proto3.util.initPartial(e2, this);
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
        return ["ModelParameterDefinition.BooleanParameterDefinition|1 values #0*", P];
      }
    }
    class P extends h {
      constructor(e2) {
        super(), this.value = "", n.proto3.util.initPartial(e2, this);
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
        return ["ModelParameterDefinition.BooleanParameterDefinition.BooleanParameterValue|1 value 9|2 display_name 9?|3 increases_model_cost 8?|4 default_blocked_in_admin_allowlist 8?|5 hide_from_user_picker_when_admin_blocked 8?|6 blocked_by_admin_allowlist 8?"];
      }
    }
    class A extends h {
      constructor(e2) {
        super(), this.values = [], n.proto3.util.initPartial(e2, this);
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
        return ["ModelParameterDefinition.EnumParameterDefinition|1 values #0*", R];
      }
    }
    class R extends h {
      constructor(e2) {
        super(), this.value = "", this.modelPickerBadges = [], n.proto3.util.initPartial(e2, this);
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
        return ["ModelParameterDefinition.EnumParameterDefinition.EnumParameterValue|1 value 9|2 display_name 9?|3 increases_model_cost 8?|4 blocked_by_admin_allowlist 8?|5 markdown_tooltip 9?|6 model_picker_badges #0*", _];
      }
    }
    n.proto3;
    n.proto3;
    n.proto3;
    n.proto3;
    n.proto3, n.proto3;
    n.proto3;
    n.proto3;
    n.proto3;
    n.proto3;
    n.proto3;
    n.proto3;
  }
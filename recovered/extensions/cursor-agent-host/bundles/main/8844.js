// @recovered-by cursor-re
// artifact: app/extensions/cursor-agent-host/dist/main.js sha256:9d478dff35f72f6b3ed85b33f2c4a15c12b41b4e3d42247ecc8ce4981e9308bb
// module: 8844 range:3408907..3466506
// basis: webpack-id confidence: C
// method: split
// run: ext-p0 2026-11-05T10:07:22.069Z
8844: (e, t, r) => {
    "use strict";
    r.d(t, { AC: () => X, Am: () => k, C7: () => w, D4: () => ge, DI: () => T, FN: () => p, FT: () => pe, Fw: () => Ee, G2: () => fe, Hc: () => l, IS: () => oe, KU: () => b, Mg: () => S, NN: () => h, R8: () => m, RK: () => g, S0: () => me, SD: () => ce, ST: () => de, Vr: () => x, WC: () => A, X0: () => ee, YG: () => he, Zc: () => f, Zf: () => ie, b7: () => _, bn: () => v, eQ: () => $, fJ: () => ye, iG: () => Z, iv: () => ae, jK: () => R, jR: () => se, kG: () => re, lj: () => le, m3: () => I, nF: () => y, nO: () => C, ni: () => ue, pQ: () => Y, qL: () => d, tB: () => u, up: () => Q, yJ: () => te });
    var n = r(36038), s = r(43955), o = r(8592);
    const i = "aiserver.v1.";
    class a extends o.HL {
      static get runtime() {
        return (0, o.kU)(this, "runtime", n.proto3);
      }
      static $p() {
        return i;
      }
    }
    var c = (0, o.QT)(n.proto3, i, "InferenceReason", [[0, "UNSPECIFIED"], [1, "GEMINI_VIDEO_SUBAGENT"], [2, "GROK_BOT_PROACTIVITY_SUBAGENT"]], 1), l = (0, o.QT)(n.proto3, i, "InferenceAssistantPartKind", [[0, "UNSPECIFIED"], [1, "REASONING"], [2, "TEXT"], [3, "TOOL_CALL"]], 1), u = (0, o.QT)(n.proto3, i, "InferenceMessageRole", [[0, "UNSPECIFIED"], [1, "USER"], [2, "ASSISTANT"], [3, "TOOL"], [4, "SYSTEM"]], 1), d = (0, o.QT)(n.proto3, i, "InferenceStreamErrorType", [[0, "UNSPECIFIED"], [1, "UNKNOWN"], [2, "INPUT_TOKEN_LIMIT"], [3, "OUTPUT_TOKEN_LIMIT"], [4, "RATE_LIMIT"], [5, "AUTHENTICATION"], [6, "PERMISSION"], [7, "OVERLOADED"], [8, "CONTENT_FILTER"]], 1), p = (0, o.QT)(n.proto3, i, "RunInferenceAgentModuleSource", [[0, "UNSPECIFIED"], [1, "STATIC"], [2, "FLOOR"], [3, "INSTALLED"]], 1), m = (0, o.QT)(n.proto3, i, "RunInferenceRoutingRole", [[0, "UNSPECIFIED"], [1, "USER"], [2, "ASSISTANT"]], 1), h = (0, o.QT)(n.proto3, i, "RunInferenceInvocationPurpose", [[0, "UNSPECIFIED"], [1, "CONTEXT_SUMMARIZATION"]], 1);
    class f extends a {
      constructor(e2) {
        super(), this.messages = [], this.tools = [], this.providerDefinedTools = [], this.acceptedUnadvertisedToolNames = [], n.proto3.util.initPartial(e2, this);
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
        return ["InferenceStreamRequest|1 messages #0*|2 tools #1*|3 provider_defined_tools #2*|4 model_config #3?|5 model_id 9?|6 invocation_id 9?|7 requested_model #4?|8 conversation_id 9?|9 accepted_unadvertised_tool_names 9*|10 automation_id 9?|11 inference_reason #5?|12 conversation_group_id 9?|13 parent_request_id 9?|14 root_parent_request_id 9?|15 parent_agent_tool_call_id 9?|16 subagent_type 9?|17 compaction_epoch 5?|18 turn_unit_id 9?|19 turn_unit_type 9?|20 originating_flow 9?|21 routing_reason 9?|22 summarized_message_count 5?|23 is_simulated_msg 8?|24 simulated_msg_reason 5?", w, C, x, T, g, c];
      }
    }
    class g extends a {
      constructor(e2) {
        super(), this.modelId = "", this.maxMode = false, this.parameters = [], this.builtInModel = false, n.proto3.util.initPartial(e2, this);
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
        return ["InferenceRequestedModel|1 model_id 9|2 max_mode 8|3 parameters #0*|4 built_in_model 8", y];
      }
    }
    class y extends a {
      constructor(e2) {
        super(), this.id = "", this.value = "", n.proto3.util.initPartial(e2, this);
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
        return ["InferenceModelParameterValue|1 id 9|2 value 9"];
      }
    }
    class w extends a {
      constructor(e2) {
        super(), this.role = u.UNSPECIFIED, this.content = { case: void 0 }, this.toolCalls = [], this.reasoningParts = [], this.assistantPartOrder = [], this.assistantTextParts = [], n.proto3.util.initPartial(e2, this);
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
        return ["InferenceCoreMessage|1 role #0|2 text 9 content|3 parts #1 content|6 tool_content #2 content|4 tool_calls #3*|7 reasoning_parts #4*|8 model_provider_message_id 9?|9 openai_phase 9?|10 openai_phase_null 8?|11 cursor_inference_reason 9?|12 cursor_feature_type 9?|13 cursor_is_summary 8?|14 cursor_clear_at 9?|15 cursor_fallback_insert_before 9?|16 assistant_part_order #5*|17 assistant_text_parts 9*|18 anthropic_native_content 9?|19 lineage_tag 9?|20 cursor_request_id 9?", u, _, $, I, v, l];
      }
    }
    class v extends a {
      constructor(e2) {
        super(), this.isRedacted = false, this.text = "", n.proto3.util.initPartial(e2, this);
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
        return ["InferenceReasoningPart|1 is_redacted 8|2 text 9|3 signature 9?|4 redacted_data 9?|5 model_name 9?|6 lineage_tag 9?"];
      }
    }
    class _ extends a {
      constructor(e2) {
        super(), this.parts = [], n.proto3.util.initPartial(e2, this);
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
        return ["InferenceContentParts|1 parts #0*", A];
      }
    }
    class A extends a {
      constructor(e2) {
        super(), this.part = { case: void 0 }, n.proto3.util.initPartial(e2, this);
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
        return ["InferenceContentPart|1 text #0 part|2 image #1 part|3 file #2 part", S, b, E];
      }
    }
    class S extends a {
      constructor(e2) {
        super(), this.text = "", n.proto3.util.initPartial(e2, this);
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
        return ["InferenceTextPart|1 text 9|2 provider_options #0?", Y];
      }
    }
    class b extends a {
      constructor(e2) {
        super(), this.data = "", n.proto3.util.initPartial(e2, this);
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
        return ["InferenceImagePart|1 data 9|2 mime_type 9?|3 provider_options #0?", Y];
      }
    }
    class E extends a {
      constructor(e2) {
        super(), this.data = "", this.mediaType = "", n.proto3.util.initPartial(e2, this);
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
        return ["InferenceFilePart|1 data 9|2 media_type 9|3 filename 9?|4 provider_options #0?", Y];
      }
    }
    class I extends a {
      constructor(e2) {
        super(), this.toolCallId = "", this.toolName = "", n.proto3.util.initPartial(e2, this);
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
        return ["InferenceToolCall|1 tool_call_id 9|2 tool_name 9|3 args #0|4 raw_tool_call_args 9?", n.Struct];
      }
    }
    class C extends a {
      constructor(e2) {
        super(), this.name = "", this.description = "", n.proto3.util.initPartial(e2, this);
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
        return ["InferenceAgentTool|1 name 9|2 description 9|3 parameters #0|4 custom_tool_format #1?", n.Struct, k];
      }
    }
    class k extends a {
      constructor(e2) {
        super(), this.type = "", this.definition = "", this.syntax = "", n.proto3.util.initPartial(e2, this);
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
        return ["InferenceCustomToolFormat|1 type 9|2 definition 9|3 syntax 9"];
      }
    }
    class x extends a {
      constructor(e2) {
        super(), this.name = "", this.id = "", this.type = "", n.proto3.util.initPartial(e2, this);
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
        return ["InferenceNamedProviderDefinedTool|1 name 9|2 id 9|3 type 9|4 options #0", n.Struct];
      }
    }
    class T extends a {
      constructor(e2) {
        super(), this.stopSequences = [], n.proto3.util.initPartial(e2, this);
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
        return ["InferenceModelConfig|1 max_tokens 5?|2 temperature 2?|3 top_p 2?|4 stop_sequences 9*"];
      }
    }
    class R extends a {
      constructor(e2) {
        super(), this.response = { case: void 0 }, n.proto3.util.initPartial(e2, this);
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
        return ["InferenceStreamResponse|1 text_part #0 response|2 tool_call_part #1 response|3 usage #2 response|4 response_info #3 response|5 extended_usage #4 response|6 provider_metadata #5 response|7 invocation_id #6 response|8 error #7 response|9 thinking_part #8 response|10 image_descriptions #9 response|11 lineage_tags #10 response", q, O, N, U, F, W, V, K, D, J, B];
      }
    }
    class B extends a {
      constructor(e2) {
        super(), this.tags = [], n.proto3.util.initPartial(e2, this);
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
        return ["InferenceLineageTagsInfo|1 tags #0*", P];
      }
    }
    class P extends a {
      constructor(e2) {
        super(), this.messageIndex = 0, this.tag = "", this.reasoningTags = [], n.proto3.util.initPartial(e2, this);
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
        return ["InferenceLineageTag|1 message_index 5|2 tag 9|3 reasoning_tags 9*"];
      }
    }
    class J extends a {
      constructor(e2) {
        super(), this.descriptions = [], n.proto3.util.initPartial(e2, this);
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
        return ["InferenceImageDescriptionsInfo|1 descriptions #0*", M];
      }
    }
    class M extends a {
      constructor(e2) {
        super(), this.messageIndex = 0, this.partIndex = 0, this.description = "", n.proto3.util.initPartial(e2, this);
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
        return ["InferenceImageDescription|1 message_index 5|2 part_index 5|3 exp_content_index 5?|4 description 9"];
      }
    }
    class q extends a {
      constructor(e2) {
        super(), this.text = "", this.isFinal = false, n.proto3.util.initPartial(e2, this);
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
        return ["InferenceTextStreamPart|1 text 9|2 is_final 8"];
      }
    }
    class D extends a {
      constructor(e2) {
        super(), this.text = "", this.isFinal = false, n.proto3.util.initPartial(e2, this);
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
        return ["InferenceThinkingStreamPart|1 text 9|2 signature 9?|3 is_final 8|4 is_already_summarized 8?|5 model_name 9?|6 redacted_data 9?"];
      }
    }
    class O extends a {
      constructor(e2) {
        super(), this.toolCallId = "", this.toolName = "", this.args = "", this.isComplete = false, n.proto3.util.initPartial(e2, this);
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
        return ["InferenceToolCallStreamPart|1 tool_call_id 9|2 tool_name 9|3 args 9|4 is_complete 8|5 tool_index 5?"];
      }
    }
    class N extends a {
      constructor(e2) {
        super(), this.promptTokens = 0, this.completionTokens = 0, n.proto3.util.initPartial(e2, this);
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
        return ["InferenceUsageInfo|1 prompt_tokens 5|2 completion_tokens 5|3 total_tokens 5?"];
      }
    }
    class F extends a {
      constructor(e2) {
        super(), this.inputTokens = 0, this.outputTokens = 0, this.cacheReadTokens = 0, this.cacheWriteTokens = 0, this.maxTokens = 0, n.proto3.util.initPartial(e2, this);
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
        return ["InferenceExtendedUsageInfo|1 input_tokens 5|2 output_tokens 5|3 cache_read_tokens 5|4 cache_write_tokens 5|5 max_tokens 5|6 reasoning_tokens 5?"];
      }
    }
    class U extends a {
      constructor(e2) {
        super(), this.id = "", this.model = "", this.createdAt = n.protoInt64.zero, this.messages = [], n.proto3.util.initPartial(e2, this);
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
        return ["InferenceResponseInfo|1 id 9|2 model 9|3 created_at 3|4 messages #0*|5 error_message 9?|6 inference_extra_data #1?|7 supports_self_summary 8?|8 early_compaction_context_token_threshold 5?", L, j];
      }
    }
    class L extends a {
      constructor(e2) {
        super(), this.id = "", this.role = u.UNSPECIFIED, this.toolCalls = [], this.reasoningParts = [], this.assistantPartOrder = [], this.assistantTextParts = [], n.proto3.util.initPartial(e2, this);
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
        return ["InferenceResponseMessage|1 id 9|2 role #0|3 content 9?|4 tool_calls #1*|5 tool_result #2?|6 reasoning_parts #3*|7 model_provider_message_id 9?|8 openai_phase 9?|9 openai_phase_null 8?|10 assistant_part_order #4*|11 assistant_text_parts 9*|12 anthropic_native_content 9?|13 lineage_tag 9?", u, I, $, v, l];
      }
    }
    class $ extends a {
      constructor(e2) {
        super(), this.parts = [], n.proto3.util.initPartial(e2, this);
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
        return ["InferenceToolResultContent|1 parts #0*", Q];
      }
    }
    class Q extends a {
      constructor(e2) {
        super(), this.toolCallId = "", this.toolName = "", this.isError = false, this.experimentalContent = [], n.proto3.util.initPartial(e2, this);
      }
      static fromBinary(e2, t2) {
        return new Q().fromBinary(e2, t2);
      }
      static fromJson(e2, t2) {
        return new Q().fromJson(e2, t2);
      }
      static fromJsonString(e2, t2) {
        return new Q().fromJsonString(e2, t2);
      }
      static equals(e2, t2) {
        return n.proto3.util.equals(Q, e2, t2);
      }
      static $() {
        return ["InferenceToolResultPart|1 tool_call_id 9|2 tool_name 9|3 result #0|4 is_error 8|5 experimental_content #1*|6 provider_options #2?|7 cursor_tool_call_is_error 8?", n.Value, A, Y];
      }
    }
    class j extends a {
      constructor(e2) {
        super(), this.tokenLogprobs = [], this.tokenIds = [], this.promptTokenIds = [], this.extraTokens = [], this.extraLogprobs = [], this.routingMatrix = [], n.proto3.util.initPartial(e2, this);
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
        return ["InferenceExtraData|1 token_logprobs #0*|2 token_ids #1*|3 prompt_token_ids #1*|4 extra_tokens #1*|5 extra_logprobs #0*|6 routing_matrix #2*", G, H, z];
      }
    }
    class G extends a {
      constructor(e2) {
        super(), this.values = [], n.proto3.util.initPartial(e2, this);
      }
      static fromBinary(e2, t2) {
        return new G().fromBinary(e2, t2);
      }
      static fromJson(e2, t2) {
        return new G().fromJson(e2, t2);
      }
      static fromJsonString(e2, t2) {
        return new G().fromJsonString(e2, t2);
      }
      static equals(e2, t2) {
        return n.proto3.util.equals(G, e2, t2);
      }
      static $() {
        return ["InferenceTokenLogprobs|1 values 1*"];
      }
    }
    class H extends a {
      constructor(e2) {
        super(), this.values = [], n.proto3.util.initPartial(e2, this);
      }
      static fromBinary(e2, t2) {
        return new H().fromBinary(e2, t2);
      }
      static fromJson(e2, t2) {
        return new H().fromJson(e2, t2);
      }
      static fromJsonString(e2, t2) {
        return new H().fromJsonString(e2, t2);
      }
      static equals(e2, t2) {
        return n.proto3.util.equals(H, e2, t2);
      }
      static $() {
        return ["InferenceTokenIds|1 values 3*"];
      }
    }
    class z extends a {
      constructor(e2) {
        super(), this.values = [], n.proto3.util.initPartial(e2, this);
      }
      static fromBinary(e2, t2) {
        return new z().fromBinary(e2, t2);
      }
      static fromJson(e2, t2) {
        return new z().fromJson(e2, t2);
      }
      static fromJsonString(e2, t2) {
        return new z().fromJsonString(e2, t2);
      }
      static equals(e2, t2) {
        return n.proto3.util.equals(z, e2, t2);
      }
      static $() {
        return ["InferenceRoutingRow|1 values 9*"];
      }
    }
    class W extends a {
      constructor(e2) {
        super(), n.proto3.util.initPartial(e2, this);
      }
      static fromBinary(e2, t2) {
        return new W().fromBinary(e2, t2);
      }
      static fromJson(e2, t2) {
        return new W().fromJson(e2, t2);
      }
      static fromJsonString(e2, t2) {
        return new W().fromJsonString(e2, t2);
      }
      static equals(e2, t2) {
        return n.proto3.util.equals(W, e2, t2);
      }
      static $() {
        return ["InferenceProviderMetadataInfo|1 metadata #0", n.Struct];
      }
    }
    class V extends a {
      constructor(e2) {
        super(), this.invocationId = "", n.proto3.util.initPartial(e2, this);
      }
      static fromBinary(e2, t2) {
        return new V().fromBinary(e2, t2);
      }
      static fromJson(e2, t2) {
        return new V().fromJson(e2, t2);
      }
      static fromJsonString(e2, t2) {
        return new V().fromJsonString(e2, t2);
      }
      static equals(e2, t2) {
        return n.proto3.util.equals(V, e2, t2);
      }
      static $() {
        return ["InferenceInvocationIdInfo|1 invocation_id 9"];
      }
    }
    class K extends a {
      constructor(e2) {
        super(), this.message = "", this.code = "", this.isInputTokenLimitError = false, this.isOutputTokenLimitError = false, this.errorType = d.UNSPECIFIED, n.proto3.util.initPartial(e2, this);
      }
      static fromBinary(e2, t2) {
        return new K().fromBinary(e2, t2);
      }
      static fromJson(e2, t2) {
        return new K().fromJson(e2, t2);
      }
      static fromJsonString(e2, t2) {
        return new K().fromJsonString(e2, t2);
      }
      static equals(e2, t2) {
        return n.proto3.util.equals(K, e2, t2);
      }
      static $() {
        return ["InferenceStreamError|1 message 9|2 code 9|3 is_input_token_limit_error 8|4 is_output_token_limit_error 8|5 error_type #0", d];
      }
    }
    class Y extends a {
      constructor(e2) {
        super(), n.proto3.util.initPartial(e2, this);
      }
      static fromBinary(e2, t2) {
        return new Y().fromBinary(e2, t2);
      }
      static fromJson(e2, t2) {
        return new Y().fromJson(e2, t2);
      }
      static fromJsonString(e2, t2) {
        return new Y().fromJsonString(e2, t2);
      }
      static equals(e2, t2) {
        return n.proto3.util.equals(Y, e2, t2);
      }
      static $() {
        return ["InferenceProviderOptions|1 anthropic #0?|2 cursor #1?", X, Z];
      }
    }
    class Z extends a {
      constructor(e2) {
        super(), this.imageDescriptions = {}, n.proto3.util.initPartial(e2, this);
      }
      static fromBinary(e2, t2) {
        return new Z().fromBinary(e2, t2);
      }
      static fromJson(e2, t2) {
        return new Z().fromJson(e2, t2);
      }
      static fromJsonString(e2, t2) {
        return new Z().fromJsonString(e2, t2);
      }
      static equals(e2, t2) {
        return n.proto3.util.equals(Z, e2, t2);
      }
      static $() {
        return ["InferenceCursorOptions|1 image_description 9?|2 image_descriptions 5,9|3 image_content_sha256 9?"];
      }
    }
    class X extends a {
      constructor(e2) {
        super(), n.proto3.util.initPartial(e2, this);
      }
      static fromBinary(e2, t2) {
        return new X().fromBinary(e2, t2);
      }
      static fromJson(e2, t2) {
        return new X().fromJson(e2, t2);
      }
      static fromJsonString(e2, t2) {
        return new X().fromJsonString(e2, t2);
      }
      static equals(e2, t2) {
        return n.proto3.util.equals(X, e2, t2);
      }
      static $() {
        return ["InferenceAnthropicOptions|1 cache_control #0?", ee];
      }
    }
    class ee extends a {
      constructor(e2) {
        super(), this.type = "", n.proto3.util.initPartial(e2, this);
      }
      static fromBinary(e2, t2) {
        return new ee().fromBinary(e2, t2);
      }
      static fromJson(e2, t2) {
        return new ee().fromJson(e2, t2);
      }
      static fromJsonString(e2, t2) {
        return new ee().fromJsonString(e2, t2);
      }
      static equals(e2, t2) {
        return n.proto3.util.equals(ee, e2, t2);
      }
      static $() {
        return ["InferenceCacheControl|1 type 9"];
      }
    }
    class te extends a {
      constructor(e2) {
        super(), this.requestId = "", this.replyingToRequestId = "", this.messages = [], this.messageRequestIds = [], n.proto3.util.initPartial(e2, this);
      }
      static fromBinary(e2, t2) {
        return new te().fromBinary(e2, t2);
      }
      static fromJson(e2, t2) {
        return new te().fromJson(e2, t2);
      }
      static fromJsonString(e2, t2) {
        return new te().fromJsonString(e2, t2);
      }
      static equals(e2, t2) {
        return n.proto3.util.equals(te, e2, t2);
      }
      static $() {
        return ["AgentFollowupCategorizationRequest|1 request_id 9|2 replying_to_request_id 9|3 messages #0*|4 conversation_id 9?|5 agent_mode 9?|6 model_name 9?|7 served_model_name 9?|8 turn_agent_mode 9?|9 message_request_ids 9*", w];
      }
    }
    class re extends a {
      constructor(e2) {
        super(), this.requestId = "", this.messages = [], this.externalSends = [], this.parentMessages = [], n.proto3.util.initPartial(e2, this);
      }
      static fromBinary(e2, t2) {
        return new re().fromBinary(e2, t2);
      }
      static fromJson(e2, t2) {
        return new re().fromJson(e2, t2);
      }
      static fromJsonString(e2, t2) {
        return new re().fromJsonString(e2, t2);
      }
      static equals(e2, t2) {
        return n.proto3.util.equals(re, e2, t2);
      }
      static $() {
        return ["AgentPostTurnLabelingRequest|1 request_id 9|2 messages #0*|3 conversation_id 9?|4 agent_mode 9?|5 model_name 9?|6 external_sends #1*|7 external_send_only 8?|8 request_source 9?|9 is_subagent 8?|10 parent_messages #0*|11 external_send_reported 8?|12 turn_agent_mode 9?", w, ne];
      }
    }
    class ne extends a {
      constructor(e2) {
        super(), this.toolCallId = "", this.toolName = "", this.connector = "", this.humanApprovedCard = false, n.proto3.util.initPartial(e2, this);
      }
      static fromBinary(e2, t2) {
        return new ne().fromBinary(e2, t2);
      }
      static fromJson(e2, t2) {
        return new ne().fromJson(e2, t2);
      }
      static fromJsonString(e2, t2) {
        return new ne().fromJsonString(e2, t2);
      }
      static equals(e2, t2) {
        return n.proto3.util.equals(ne, e2, t2);
      }
      static $() {
        return ["AgentPostTurnExternalSend|1 tool_call_id 9|2 tool_name 9|3 connector 9|4 human_approved_card 8"];
      }
    }
    class se extends a {
      constructor(e2) {
        super(), this.message = { case: void 0 }, n.proto3.util.initPartial(e2, this);
      }
      static fromBinary(e2, t2) {
        return new se().fromBinary(e2, t2);
      }
      static fromJson(e2, t2) {
        return new se().fromJson(e2, t2);
      }
      static fromJsonString(e2, t2) {
        return new se().fromJsonString(e2, t2);
      }
      static equals(e2, t2) {
        return n.proto3.util.equals(se, e2, t2);
      }
      static $() {
        return ["RunInferenceClientMessage|1 run_request #0 message|2 invoke_model #1 message|3 cancel_invocation #2 message|4 finish_run #3 message|5 client_heartbeat #4 message|6 agent_event #5 message|7 run_request_log #6 message|9 resolve_subagent_models #7 message", le, he, fe, ge, oe, ce, ie, ae];
      }
    }
    class oe extends a {
      constructor(e2) {
        super(), n.proto3.util.initPartial(e2, this);
      }
      static fromBinary(e2, t2) {
        return new oe().fromBinary(e2, t2);
      }
      static fromJson(e2, t2) {
        return new oe().fromJson(e2, t2);
      }
      static fromJsonString(e2, t2) {
        return new oe().fromJsonString(e2, t2);
      }
      static equals(e2, t2) {
        return n.proto3.util.equals(oe, e2, t2);
      }
      static $() {
        return ["RunInferenceClientHeartbeat"];
      }
    }
    class ie extends a {
      constructor(e2) {
        super(), this.agentRunRequest = new Uint8Array(0), n.proto3.util.initPartial(e2, this);
      }
      static fromBinary(e2, t2) {
        return new ie().fromBinary(e2, t2);
      }
      static fromJson(e2, t2) {
        return new ie().fromJson(e2, t2);
      }
      static fromJsonString(e2, t2) {
        return new ie().fromJsonString(e2, t2);
      }
      static equals(e2, t2) {
        return n.proto3.util.equals(ie, e2, t2);
      }
      static $() {
        return ["RunInferenceRunRequestLog|1 agent_run_request 12"];
      }
    }
    class ae extends a {
      constructor(e2) {
        super(), this.resolutionId = "", this.requestedModels = [], n.proto3.util.initPartial(e2, this);
      }
      static fromBinary(e2, t2) {
        return new ae().fromBinary(e2, t2);
      }
      static fromJson(e2, t2) {
        return new ae().fromJson(e2, t2);
      }
      static fromJsonString(e2, t2) {
        return new ae().fromJsonString(e2, t2);
      }
      static equals(e2, t2) {
        return n.proto3.util.equals(ae, e2, t2);
      }
      static $() {
        return ["RunInferenceResolveSubagentModels|1 resolution_id 9|2 requested_models 9*"];
      }
    }
    class ce extends a {
      constructor(e2) {
        super(), this.methodName = "", this.optionsJson = "", n.proto3.util.initPartial(e2, this);
      }
      static fromBinary(e2, t2) {
        return new ce().fromBinary(e2, t2);
      }
      static fromJson(e2, t2) {
        return new ce().fromJson(e2, t2);
      }
      static fromJsonString(e2, t2) {
        return new ce().fromJsonString(e2, t2);
      }
      static equals(e2, t2) {
        return n.proto3.util.equals(ce, e2, t2);
      }
      static $() {
        return ["RunInferenceAgentEvent|1 method_name 9|2 options_json 9|3 client_reported_at_ms 3?"];
      }
    }
    class le extends a {
      constructor(e2) {
        super(), this.conversationId = "", this.routingConversation = [], this.selectedSubagentModels = [], this.subagentModelOverrides = [], this.supportsLongReasoningReminder = false, this.supportsAgentLoopError = false, n.proto3.util.initPartial(e2, this);
      }
      static fromBinary(e2, t2) {
        return new le().fromBinary(e2, t2);
      }
      static fromJson(e2, t2) {
        return new le().fromJson(e2, t2);
      }
      static fromJsonString(e2, t2) {
        return new le().fromJsonString(e2, t2);
      }
      static equals(e2, t2) {
        return n.proto3.util.equals(le, e2, t2);
      }
      static $() {
        return ["RunInferenceRunRequest|1 conversation_id 9|2 conversation_group_id 9?|3 requested_model #0|4 routing_conversation #1*|5 agent_mode 9?|6 subagent_type_name 9?|7 selected_subagent_models #0*|8 subagent_model_overrides #2*|9 is_summarize_action 8?|10 supports_long_reasoning_reminder 8|11 agent_module #3?|12 previous_request_id 9?|15 execute_plan #4?|16 turn_agent_mode 9?|17 supports_agent_loop_error 8", g, me, pe, de, ue];
      }
    }
    class ue extends a {
      constructor(e2) {
        super(), n.proto3.util.initPartial(e2, this);
      }
      static fromBinary(e2, t2) {
        return new ue().fromBinary(e2, t2);
      }
      static fromJson(e2, t2) {
        return new ue().fromJson(e2, t2);
      }
      static fromJsonString(e2, t2) {
        return new ue().fromJsonString(e2, t2);
      }
      static equals(e2, t2) {
        return n.proto3.util.equals(ue, e2, t2);
      }
      static $() {
        return ["RunInferenceExecutePlan|1 plan_file_uri 9?|2 plan_file_content 9?"];
      }
    }
    class de extends a {
      constructor(e2) {
        super(), this.generation = "", this.source = p.UNSPECIFIED, this.channel = "", this.interfaceRevision = 0, this.promptVersions = [], n.proto3.util.initPartial(e2, this);
      }
      static fromBinary(e2, t2) {
        return new de().fromBinary(e2, t2);
      }
      static fromJson(e2, t2) {
        return new de().fromJson(e2, t2);
      }
      static fromJsonString(e2, t2) {
        return new de().fromJsonString(e2, t2);
      }
      static equals(e2, t2) {
        return n.proto3.util.equals(de, e2, t2);
      }
      static $() {
        return ["RunInferenceAgentModule|1 generation 9|2 source #0|3 channel 9|4 commit 9?|5 interface_revision 13|6 prompt_versions 9*", p];
      }
    }
    class pe extends a {
      constructor(e2) {
        super(), this.subagentType = "", this.selection = { case: void 0 }, n.proto3.util.initPartial(e2, this);
      }
      static fromBinary(e2, t2) {
        return new pe().fromBinary(e2, t2);
      }
      static fromJson(e2, t2) {
        return new pe().fromJson(e2, t2);
      }
      static fromJsonString(e2, t2) {
        return new pe().fromJsonString(e2, t2);
      }
      static equals(e2, t2) {
        return n.proto3.util.equals(pe, e2, t2);
      }
      static $() {
        return ["RunInferenceSubagentModelOverride|1 subagent_type 9|2 model #0 selection|3 inherit 8 selection|4 disabled 8 selection", g];
      }
    }
    class me extends a {
      constructor(e2) {
        super(), this.role = m.UNSPECIFIED, this.text = "", n.proto3.util.initPartial(e2, this);
      }
      static fromBinary(e2, t2) {
        return new me().fromBinary(e2, t2);
      }
      static fromJson(e2, t2) {
        return new me().fromJson(e2, t2);
      }
      static fromJsonString(e2, t2) {
        return new me().fromJsonString(e2, t2);
      }
      static equals(e2, t2) {
        return n.proto3.util.equals(me, e2, t2);
      }
      static $() {
        return ["RunInferenceRoutingMessage|1 role #0|2 text 9", m];
      }
    }
    class he extends a {
      constructor(e2) {
        super(), this.invocationId = "", this.purpose = h.UNSPECIFIED, n.proto3.util.initPartial(e2, this);
      }
      static fromBinary(e2, t2) {
        return new he().fromBinary(e2, t2);
      }
      static fromJson(e2, t2) {
        return new he().fromJson(e2, t2);
      }
      static fromJsonString(e2, t2) {
        return new he().fromJsonString(e2, t2);
      }
      static equals(e2, t2) {
        return n.proto3.util.equals(he, e2, t2);
      }
      static $() {
        return ["RunInferenceInvokeModel|1 invocation_id 9|2 request #0|3 purpose #1", f, h];
      }
    }
    class fe extends a {
      constructor(e2) {
        super(), this.invocationId = "", n.proto3.util.initPartial(e2, this);
      }
      static fromBinary(e2, t2) {
        return new fe().fromBinary(e2, t2);
      }
      static fromJson(e2, t2) {
        return new fe().fromJson(e2, t2);
      }
      static fromJsonString(e2, t2) {
        return new fe().fromJsonString(e2, t2);
      }
      static equals(e2, t2) {
        return n.proto3.util.equals(fe, e2, t2);
      }
      static $() {
        return ["RunInferenceCancelInvocation|1 invocation_id 9"];
      }
    }
    class ge extends a {
      constructor(e2) {
        super(), this.aborted = false, n.proto3.util.initPartial(e2, this);
      }
      static fromBinary(e2, t2) {
        return new ge().fromBinary(e2, t2);
      }
      static fromJson(e2, t2) {
        return new ge().fromJson(e2, t2);
      }
      static fromJsonString(e2, t2) {
        return new ge().fromJsonString(e2, t2);
      }
      static equals(e2, t2) {
        return n.proto3.util.equals(ge, e2, t2);
      }
      static $() {
        return ["RunInferenceFinishRun|1 aborted 8|2 turn_completed 8?"];
      }
    }
    class ye extends a {
      constructor(e2) {
        super(), this.message = { case: void 0 }, n.proto3.util.initPartial(e2, this);
      }
      static fromBinary(e2, t2) {
        return new ye().fromBinary(e2, t2);
      }
      static fromJson(e2, t2) {
        return new ye().fromJson(e2, t2);
      }
      static fromJsonString(e2, t2) {
        return new ye().fromJsonString(e2, t2);
      }
      static equals(e2, t2) {
        return n.proto3.util.equals(ye, e2, t2);
      }
      static $() {
        return ["RunInferenceServerMessage|1 heartbeat #0 message|2 run_ready #1 message|3 invocation_response #2 message|4 invocation_end #3 message|5 subagent_models_resolved #4 message", we, Ae, qe, De, ve];
      }
    }
    class we extends a {
      constructor(e2) {
        super(), n.proto3.util.initPartial(e2, this);
      }
      static fromBinary(e2, t2) {
        return new we().fromBinary(e2, t2);
      }
      static fromJson(e2, t2) {
        return new we().fromJson(e2, t2);
      }
      static fromJsonString(e2, t2) {
        return new we().fromJsonString(e2, t2);
      }
      static equals(e2, t2) {
        return n.proto3.util.equals(we, e2, t2);
      }
      static $() {
        return ["RunInferenceHeartbeat"];
      }
    }
    class ve extends a {
      constructor(e2) {
        super(), this.resolutionId = "", this.models = [], n.proto3.util.initPartial(e2, this);
      }
      static fromBinary(e2, t2) {
        return new ve().fromBinary(e2, t2);
      }
      static fromJson(e2, t2) {
        return new ve().fromJson(e2, t2);
      }
      static fromJsonString(e2, t2) {
        return new ve().fromJsonString(e2, t2);
      }
      static equals(e2, t2) {
        return n.proto3.util.equals(ve, e2, t2);
      }
      static $() {
        return ["RunInferenceSubagentModelsResolved|1 resolution_id 9|2 models #0*", _e];
      }
    }
    class _e extends a {
      constructor(e2) {
        super(), this.requested = "", n.proto3.util.initPartial(e2, this);
      }
      static fromBinary(e2, t2) {
        return new _e().fromBinary(e2, t2);
      }
      static fromJson(e2, t2) {
        return new _e().fromJson(e2, t2);
      }
      static fromJsonString(e2, t2) {
        return new _e().fromJsonString(e2, t2);
      }
      static equals(e2, t2) {
        return n.proto3.util.equals(_e, e2, t2);
      }
      static $() {
        return ["RunInferenceResolvedSubagentModel|1 requested 9|2 resolved_slug 9?"];
      }
    }
    class Ae extends a {
      constructor(e2) {
        super(), this.supportsSelfSummary = false, this.nonFileRules = [], this.acceptsClientHeartbeat = false, this.acceptsAgentEvents = false, this.agentRunRequestLogRequested = false, this.kvBlobTelemetryEnabled = false, this.acceptsAbortedFinish = false, this.metricLabels = {}, this.acceptsSubagentModelResolution = false, n.proto3.util.initPartial(e2, this);
      }
      static fromBinary(e2, t2) {
        return new Ae().fromBinary(e2, t2);
      }
      static fromJson(e2, t2) {
        return new Ae().fromJson(e2, t2);
      }
      static fromJsonString(e2, t2) {
        return new Ae().fromJsonString(e2, t2);
      }
      static equals(e2, t2) {
        return n.proto3.util.equals(Ae, e2, t2);
      }
      static $() {
        return ["RunInferenceRunReady|1 resolved_model #0|2 supports_self_summary 8|3 routed_model_display_name 9?|4 prompt_model_metadata #1|5 summarization #2|6 non_file_rules #3*|7 accepts_client_heartbeat 8|8 accepts_agent_events 8|10 agent_run_request_log_requested 8|9 kv_blob_telemetry_enabled 8|13 accepts_aborted_finish 8|12 metric_labels 9,9|14 accepts_subagent_model_resolution 8", g, Ee, Se, s.DX];
      }
    }
    class Se extends a {
      constructor(e2) {
        super(), this.isFallbackToMainModel = false, this.maxPromptChars = 0, n.proto3.util.initPartial(e2, this);
      }
      static fromBinary(e2, t2) {
        return new Se().fromBinary(e2, t2);
      }
      static fromJson(e2, t2) {
        return new Se().fromJson(e2, t2);
      }
      static fromJsonString(e2, t2) {
        return new Se().fromJsonString(e2, t2);
      }
      static equals(e2, t2) {
        return n.proto3.util.equals(Se, e2, t2);
      }
      static $() {
        return ["RunInferenceSummarizationConfig|1 model #0|2 is_fallback_to_main_model 8|3 max_prompt_chars 5|4 background #1", g, be];
      }
    }
    class be extends a {
      constructor(e2) {
        super(), this.requireTriggerThresholdForMidLoopPersist = false, this.discardOnError = false, n.proto3.util.initPartial(e2, this);
      }
      static fromBinary(e2, t2) {
        return new be().fromBinary(e2, t2);
      }
      static fromJson(e2, t2) {
        return new be().fromJson(e2, t2);
      }
      static fromJsonString(e2, t2) {
        return new be().fromJsonString(e2, t2);
      }
      static equals(e2, t2) {
        return n.proto3.util.equals(be, e2, t2);
      }
      static $() {
        return ["RunInferenceBackgroundSummarizationConfig|1 unused_tokens_threshold_to_start 5?|2 unused_percent_tokens_threshold_to_start 1?|3 unused_tokens_threshold_to_persist 5?|4 unused_percent_tokens_threshold_to_persist 1?|5 require_trigger_threshold_for_mid_loop_persist 8|6 discard_on_error 8"];
      }
    }
    class Ee extends a {
      constructor(e2) {
        super(), this.vendor = "", this.promptVersion = "", this.isSonnet45 = false, this.isGemini3 = false, this.isGpt51 = false, this.isGpt52 = false, this.isGpt5 = false, this.isGpt55 = false, this.isGpt56 = false, this.isSonnet4 = false, this.isCodexFamily = false, this.isGpt54 = false, this.isGpt52Codex = false, this.isGpt53Codex = false, this.isGpt53CodexSpark = false, this.isClaude4x = false, this.isOpus45 = false, this.isOpus46 = false, this.isOpus48 = false, this.isOpus5 = false, this.isOpus55 = false, this.isFable5 = false, this.isFable51 = false, this.isFruitcake = false, this.isGpt5Family = false, this.isComposer1 = false, this.isComposer15 = false, this.isComposer2 = false, this.isComposerMatterhorn = false, this.isGrok45ProductPrompt = false, this.isRawTrainingSlug = false, this.isGrok46ProductPrompt = false, this.useDsv3Harness = false, this.persona = "", this.featureFlags = {}, this.supportsAssistantMessagePrefill = false, this.enableLineNumbers = false, this.useSparseReadLineNumbers = false, this.selfIdentityName = "", this.agentModeConfigs = [], this.postToolReminders = [], n.proto3.util.initPartial(e2, this);
      }
      static fromBinary(e2, t2) {
        return new Ee().fromBinary(e2, t2);
      }
      static fromJson(e2, t2) {
        return new Ee().fromJson(e2, t2);
      }
      static fromJsonString(e2, t2) {
        return new Ee().fromJsonString(e2, t2);
      }
      static equals(e2, t2) {
        return n.proto3.util.equals(Ee, e2, t2);
      }
      static $() {
        return ["RunInferencePromptModelMetadata|1 vendor 9|2 prompt_version 9|3 is_sonnet45 8|4 is_gemini3 8|5 is_gpt51 8|6 is_gpt52 8|7 is_gpt5 8|8 is_gpt55 8|9 is_gpt56 8|10 is_sonnet4 8|11 is_codex_family 8|12 is_gpt54 8|13 is_gpt52_codex 8|14 is_gpt53_codex 8|15 is_gpt53_codex_spark 8|16 is_claude_4x 8|17 is_opus45 8|18 is_opus46 8|19 is_opus48 8|20 is_opus5 8|50 is_opus55 8|21 is_fable5 8|43 is_fable51 8|22 is_fruitcake 8|23 is_gpt5_family 8|24 is_composer1 8|25 is_composer15 8|26 is_composer2 8|27 is_composer_matterhorn 8|28 is_grok45_product_prompt 8|29 is_raw_training_slug 8|34 is_grok46_product_prompt 8|30 reasoning_effort 9?|31 use_dsv3_harness 8|32 agent_token_limit 5?|33 estimated_cache_ttl_ms 5?|35 persona 9|36 feature_flags 9,#0|37 loop_nudge #1?|38 progress_reminder_threshold 5?|39 effort_level 9?|40 supports_assistant_message_prefill 8|41 enable_line_numbers 8|42 use_sparse_read_line_numbers 8|44 self_identity_name 9|45 dsv3_is_thinking 8?|46 agent_mode_configs #2*|47 use_new_plan_mode_prompts 8?|48 ask_question_config #3?|49 subagent_model_config #4?|51 post_tool_reminders #5*|52 enable_semantic_search 8?|53 long_reasoning_reminder #6?|54 smart_mode_classifier_mode 8?|55 smart_mode_classifier_shadow_mode 8?", Je, Me, Be, Re, ke, Ie, Ce];
      }
    }
    class Ie extends a {
      constructor(e2) {
        super(), this.id = "", n.proto3.util.initPartial(e2, this);
      }
      static fromBinary(e2, t2) {
        return new Ie().fromBinary(e2, t2);
      }
      static fromJson(e2, t2) {
        return new Ie().fromJson(e2, t2);
      }
      static fromJsonString(e2, t2) {
        return new Ie().fromJsonString(e2, t2);
      }
      static equals(e2, t2) {
        return n.proto3.util.equals(Ie, e2, t2);
      }
      static $() {
        return ["RunInferencePostToolReminder|1 id 9|2 interval_tool_calls 13?"];
      }
    }
    class Ce extends a {
      constructor(e2) {
        super(), this.arm = "", this.enabled = false, this.thresholdTokens = 0, this.delayCalls = 0, this.reminderText = "", n.proto3.util.initPartial(e2, this);
      }
      static fromBinary(e2, t2) {
        return new Ce().fromBinary(e2, t2);
      }
      static fromJson(e2, t2) {
        return new Ce().fromJson(e2, t2);
      }
      static fromJsonString(e2, t2) {
        return new Ce().fromJsonString(e2, t2);
      }
      static equals(e2, t2) {
        return n.proto3.util.equals(Ce, e2, t2);
      }
      static $() {
        return ["RunInferenceLongReasoningReminderConfig|1 arm 9|2 enabled 8|3 threshold_tokens 13|4 delay_calls 13|5 reminder_text 9"];
      }
    }
    class ke extends a {
      constructor(e2) {
        super(), this.forcePolicy = "", this.parentMaxMode = false, this.models = [], this.overrides = [], this.taskToolOmitted = false, this.parentRequestedModelName = "", n.proto3.util.initPartial(e2, this);
      }
      static fromBinary(e2, t2) {
        return new ke().fromBinary(e2, t2);
      }
      static fromJson(e2, t2) {
        return new ke().fromJson(e2, t2);
      }
      static fromJsonString(e2, t2) {
        return new ke().fromJsonString(e2, t2);
      }
      static equals(e2, t2) {
        return n.proto3.util.equals(ke, e2, t2);
      }
      static $() {
        return ["RunInferenceSubagentModelConfig|1 force_policy 9|2 force_model_id 9?|3 parent_max_mode 8|4 models #0*|5 overrides #1*|6 task_tool_omitted 8|7 parent_requested_model_name 9", xe, Te];
      }
    }
    class xe extends a {
      constructor(e2) {
        super(), this.slug = "", this.advertised = false, this.valid = false, this.blocked = false, this.requiresMaxMode = false, this.representativeCostDollars = 0, this.legacyAliases = [], n.proto3.util.initPartial(e2, this);
      }
      static fromBinary(e2, t2) {
        return new xe().fromBinary(e2, t2);
      }
      static fromJson(e2, t2) {
        return new xe().fromJson(e2, t2);
      }
      static fromJsonString(e2, t2) {
        return new xe().fromJsonString(e2, t2);
      }
      static equals(e2, t2) {
        return n.proto3.util.equals(xe, e2, t2);
      }
      static $() {
        return ["RunInferenceSubagentModelPolicy|1 slug 9|2 advertised 8|3 valid 8|4 blocked 8|5 requires_max_mode 8|6 representative_cost_dollars 1|7 legacy_aliases 9*"];
      }
    }
    class Te extends a {
      constructor(e2) {
        super(), this.subagentType = "", this.kind = "", n.proto3.util.initPartial(e2, this);
      }
      static fromBinary(e2, t2) {
        return new Te().fromBinary(e2, t2);
      }
      static fromJson(e2, t2) {
        return new Te().fromJson(e2, t2);
      }
      static fromJsonString(e2, t2) {
        return new Te().fromJsonString(e2, t2);
      }
      static equals(e2, t2) {
        return n.proto3.util.equals(Te, e2, t2);
      }
      static $() {
        return ["RunInferenceResolvedSubagentModelOverride|1 subagent_type 9|2 kind 9|3 model_id 9?"];
      }
    }
    class Re extends a {
      constructor(e2) {
        super(), this.toolName = "", this.autoRejectFirst = false, n.proto3.util.initPartial(e2, this);
      }
      static fromBinary(e2, t2) {
        return new Re().fromBinary(e2, t2);
      }
      static fromJson(e2, t2) {
        return new Re().fromJson(e2, t2);
      }
      static fromJsonString(e2, t2) {
        return new Re().fromJsonString(e2, t2);
      }
      static equals(e2, t2) {
        return n.proto3.util.equals(Re, e2, t2);
      }
      static $() {
        return ["RunInferenceAskQuestionConfig|1 tool_name 9|2 auto_reject_first 8"];
      }
    }
    class Be extends a {
      constructor(e2) {
        super(), this.modeId = "", this.enableAskQuestionTool = false, n.proto3.util.initPartial(e2, this);
      }
      static fromBinary(e2, t2) {
        return new Be().fromBinary(e2, t2);
      }
      static fromJson(e2, t2) {
        return new Be().fromJson(e2, t2);
      }
      static fromJsonString(e2, t2) {
        return new Be().fromJsonString(e2, t2);
      }
      static equals(e2, t2) {
        return n.proto3.util.equals(Be, e2, t2);
      }
      static $() {
        return ["RunInferenceAgentModeConfig|1 mode_id 9|2 enable_ask_question_tool 8|3 switch_mode_tool_config #0?", Pe];
      }
    }
    class Pe extends a {
      constructor(e2) {
        super(), this.targetModes = [], n.proto3.util.initPartial(e2, this);
      }
      static fromBinary(e2, t2) {
        return new Pe().fromBinary(e2, t2);
      }
      static fromJson(e2, t2) {
        return new Pe().fromJson(e2, t2);
      }
      static fromJsonString(e2, t2) {
        return new Pe().fromJsonString(e2, t2);
      }
      static equals(e2, t2) {
        return n.proto3.util.equals(Pe, e2, t2);
      }
      static $() {
        return ["RunInferenceSwitchModeToolConfig|1 target_modes 9*"];
      }
    }
    class Je extends a {
      constructor(e2) {
        super(), this.value = { case: void 0 }, n.proto3.util.initPartial(e2, this);
      }
      static fromBinary(e2, t2) {
        return new Je().fromBinary(e2, t2);
      }
      static fromJson(e2, t2) {
        return new Je().fromJson(e2, t2);
      }
      static fromJsonString(e2, t2) {
        return new Je().fromJsonString(e2, t2);
      }
      static equals(e2, t2) {
        return n.proto3.util.equals(Je, e2, t2);
      }
      static $() {
        return ["RunInferenceFlagValue|1 bool_value 8 value|2 number_value 1 value|3 string_value 9 value"];
      }
    }
    class Me extends a {
      constructor(e2) {
        super(), this.minRepetitions = 0, this.minMessageLength = 0, this.injectReminder = false, n.proto3.util.initPartial(e2, this);
      }
      static fromBinary(e2, t2) {
        return new Me().fromBinary(e2, t2);
      }
      static fromJson(e2, t2) {
        return new Me().fromJson(e2, t2);
      }
      static fromJsonString(e2, t2) {
        return new Me().fromJsonString(e2, t2);
      }
      static equals(e2, t2) {
        return n.proto3.util.equals(Me, e2, t2);
      }
      static $() {
        return ["RunInferenceLoopNudgeConfig|1 min_repetitions 5|2 min_message_length 5|3 inject_reminder 8"];
      }
    }
    class qe extends a {
      constructor(e2) {
        super(), this.invocationId = "", n.proto3.util.initPartial(e2, this);
      }
      static fromBinary(e2, t2) {
        return new qe().fromBinary(e2, t2);
      }
      static fromJson(e2, t2) {
        return new qe().fromJson(e2, t2);
      }
      static fromJsonString(e2, t2) {
        return new qe().fromJsonString(e2, t2);
      }
      static equals(e2, t2) {
        return n.proto3.util.equals(qe, e2, t2);
      }
      static $() {
        return ["RunInferenceInvocationResponse|1 invocation_id 9|2 response #0", R];
      }
    }
    class De extends a {
      constructor(e2) {
        super(), this.invocationId = "", n.proto3.util.initPartial(e2, this);
      }
      static fromBinary(e2, t2) {
        return new De().fromBinary(e2, t2);
      }
      static fromJson(e2, t2) {
        return new De().fromJson(e2, t2);
      }
      static fromJsonString(e2, t2) {
        return new De().fromJsonString(e2, t2);
      }
      static equals(e2, t2) {
        return n.proto3.util.equals(De, e2, t2);
      }
      static $() {
        return ["RunInferenceInvocationEnd|1 invocation_id 9|2 error #0?", Oe];
      }
    }
    class Oe extends a {
      constructor(e2) {
        super(), this.code = 0, this.message = "", this.details = [], n.proto3.util.initPartial(e2, this);
      }
      static fromBinary(e2, t2) {
        return new Oe().fromBinary(e2, t2);
      }
      static fromJson(e2, t2) {
        return new Oe().fromJson(e2, t2);
      }
      static fromJsonString(e2, t2) {
        return new Oe().fromJsonString(e2, t2);
      }
      static equals(e2, t2) {
        return n.proto3.util.equals(Oe, e2, t2);
      }
      static $() {
        return ["RunInferenceInvocationError|1 code 5|2 message 9|3 details #0*", Ne];
      }
    }
    class Ne extends a {
      constructor(e2) {
        super(), this.type = "", this.value = new Uint8Array(0), n.proto3.util.initPartial(e2, this);
      }
      static fromBinary(e2, t2) {
        return new Ne().fromBinary(e2, t2);
      }
      static fromJson(e2, t2) {
        return new Ne().fromJson(e2, t2);
      }
      static fromJsonString(e2, t2) {
        return new Ne().fromJsonString(e2, t2);
      }
      static equals(e2, t2) {
        return n.proto3.util.equals(Ne, e2, t2);
      }
      static $() {
        return ["RunInferenceErrorDetail|1 type 9|2 value 12"];
      }
    }
  }
// @recovered-by cursor-re
// artifact: app/extensions/cursor-always-local/dist/main.js sha256:14fb2d0e360d81a024b4ec605f417e030e19b30b2df99bc45648aa227060534e
// module: 8844 range:5353438..5410754
// basis: webpack-id confidence: C
// method: split
// run: ext-agent 2026-11-05T10:20:08.356Z
8844: (t2, e2, r2) => {
    "use strict";
    r2.d(e2, { Fw: () => Et, RK: () => g, Zc: () => h, fJ: () => At, jK: () => q, jR: () => st, kG: () => rt, yJ: () => et });
    var n2 = r2(6038), s2 = r2(3955), i2 = r2(8592);
    const o2 = "aiserver.v1.";
    class a extends i2.HL {
      static get runtime() {
        return (0, i2.kU)(this, "runtime", n2.proto3);
      }
      static $p() {
        return o2;
      }
    }
    var u = (0, i2.QT)(n2.proto3, o2, "InferenceReason", [[0, "UNSPECIFIED"], [1, "GEMINI_VIDEO_SUBAGENT"], [2, "GROK_BOT_PROACTIVITY_SUBAGENT"]], 1), c = (0, i2.QT)(n2.proto3, o2, "InferenceAssistantPartKind", [[0, "UNSPECIFIED"], [1, "REASONING"], [2, "TEXT"], [3, "TOOL_CALL"]], 1), l = (0, i2.QT)(n2.proto3, o2, "InferenceMessageRole", [[0, "UNSPECIFIED"], [1, "USER"], [2, "ASSISTANT"], [3, "TOOL"], [4, "SYSTEM"]], 1), m = (0, i2.QT)(n2.proto3, o2, "InferenceStreamErrorType", [[0, "UNSPECIFIED"], [1, "UNKNOWN"], [2, "INPUT_TOKEN_LIMIT"], [3, "OUTPUT_TOKEN_LIMIT"], [4, "RATE_LIMIT"], [5, "AUTHENTICATION"], [6, "PERMISSION"], [7, "OVERLOADED"], [8, "CONTENT_FILTER"]], 1), d = (0, i2.QT)(n2.proto3, o2, "RunInferenceAgentModuleSource", [[0, "UNSPECIFIED"], [1, "STATIC"], [2, "FLOOR"], [3, "INSTALLED"]], 1), f = (0, i2.QT)(n2.proto3, o2, "RunInferenceRoutingRole", [[0, "UNSPECIFIED"], [1, "USER"], [2, "ASSISTANT"]], 1), p = (0, i2.QT)(n2.proto3, o2, "RunInferenceInvocationPurpose", [[0, "UNSPECIFIED"], [1, "CONTEXT_SUMMARIZATION"]], 1);
    class h extends a {
      constructor(t3) {
        super(), this.messages = [], this.tools = [], this.providerDefinedTools = [], this.acceptedUnadvertisedToolNames = [], n2.proto3.util.initPartial(t3, this);
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
        return ["InferenceStreamRequest|1 messages #0*|2 tools #1*|3 provider_defined_tools #2*|4 model_config #3?|5 model_id 9?|6 invocation_id 9?|7 requested_model #4?|8 conversation_id 9?|9 accepted_unadvertised_tool_names 9*|10 automation_id 9?|11 inference_reason #5?|12 conversation_group_id 9?|13 parent_request_id 9?|14 root_parent_request_id 9?|15 parent_agent_tool_call_id 9?|16 subagent_type 9?|17 compaction_epoch 5?|18 turn_unit_id 9?|19 turn_unit_type 9?|20 originating_flow 9?|21 routing_reason 9?|22 summarized_message_count 5?|23 is_simulated_msg 8?|24 simulated_msg_reason 5?", _, C, k, v, g, u];
      }
    }
    class g extends a {
      constructor(t3) {
        super(), this.modelId = "", this.maxMode = false, this.parameters = [], this.builtInModel = false, n2.proto3.util.initPartial(t3, this);
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
        return ["InferenceRequestedModel|1 model_id 9|2 max_mode 8|3 parameters #0*|4 built_in_model 8", A];
      }
    }
    class A extends a {
      constructor(t3) {
        super(), this.id = "", this.value = "", n2.proto3.util.initPartial(t3, this);
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
        return ["InferenceModelParameterValue|1 id 9|2 value 9"];
      }
    }
    class _ extends a {
      constructor(t3) {
        super(), this.role = l.UNSPECIFIED, this.content = { case: void 0 }, this.toolCalls = [], this.reasoningParts = [], this.assistantPartOrder = [], this.assistantTextParts = [], n2.proto3.util.initPartial(t3, this);
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
        return ["InferenceCoreMessage|1 role #0|2 text 9 content|3 parts #1 content|6 tool_content #2 content|4 tool_calls #3*|7 reasoning_parts #4*|8 model_provider_message_id 9?|9 openai_phase 9?|10 openai_phase_null 8?|11 cursor_inference_reason 9?|12 cursor_feature_type 9?|13 cursor_is_summary 8?|14 cursor_clear_at 9?|15 cursor_fallback_insert_before 9?|16 assistant_part_order #5*|17 assistant_text_parts 9*|18 anthropic_native_content 9?|19 lineage_tag 9?|20 cursor_request_id 9?", l, w, L, I, y, c];
      }
    }
    class y extends a {
      constructor(t3) {
        super(), this.isRedacted = false, this.text = "", n2.proto3.util.initPartial(t3, this);
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
        return ["InferenceReasoningPart|1 is_redacted 8|2 text 9|3 signature 9?|4 redacted_data 9?|5 model_name 9?|6 lineage_tag 9?"];
      }
    }
    class w extends a {
      constructor(t3) {
        super(), this.parts = [], n2.proto3.util.initPartial(t3, this);
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
        return ["InferenceContentParts|1 parts #0*", S];
      }
    }
    class S extends a {
      constructor(t3) {
        super(), this.part = { case: void 0 }, n2.proto3.util.initPartial(t3, this);
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
        return ["InferenceContentPart|1 text #0 part|2 image #1 part|3 file #2 part", J, B, E];
      }
    }
    class J extends a {
      constructor(t3) {
        super(), this.text = "", n2.proto3.util.initPartial(t3, this);
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
        return ["InferenceTextPart|1 text 9|2 provider_options #0?", j];
      }
    }
    class B extends a {
      constructor(t3) {
        super(), this.data = "", n2.proto3.util.initPartial(t3, this);
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
        return ["InferenceImagePart|1 data 9|2 mime_type 9?|3 provider_options #0?", j];
      }
    }
    class E extends a {
      constructor(t3) {
        super(), this.data = "", this.mediaType = "", n2.proto3.util.initPartial(t3, this);
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
        return ["InferenceFilePart|1 data 9|2 media_type 9|3 filename 9?|4 provider_options #0?", j];
      }
    }
    class I extends a {
      constructor(t3) {
        super(), this.toolCallId = "", this.toolName = "", n2.proto3.util.initPartial(t3, this);
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
        return ["InferenceToolCall|1 tool_call_id 9|2 tool_name 9|3 args #0|4 raw_tool_call_args 9?", n2.Struct];
      }
    }
    class C extends a {
      constructor(t3) {
        super(), this.name = "", this.description = "", n2.proto3.util.initPartial(t3, this);
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
        return ["InferenceAgentTool|1 name 9|2 description 9|3 parameters #0|4 custom_tool_format #1?", n2.Struct, b];
      }
    }
    class b extends a {
      constructor(t3) {
        super(), this.type = "", this.definition = "", this.syntax = "", n2.proto3.util.initPartial(t3, this);
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
        return ["InferenceCustomToolFormat|1 type 9|2 definition 9|3 syntax 9"];
      }
    }
    class k extends a {
      constructor(t3) {
        super(), this.name = "", this.id = "", this.type = "", n2.proto3.util.initPartial(t3, this);
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
        return ["InferenceNamedProviderDefinedTool|1 name 9|2 id 9|3 type 9|4 options #0", n2.Struct];
      }
    }
    class v extends a {
      constructor(t3) {
        super(), this.stopSequences = [], n2.proto3.util.initPartial(t3, this);
      }
      static fromBinary(t3, e3) {
        return new v().fromBinary(t3, e3);
      }
      static fromJson(t3, e3) {
        return new v().fromJson(t3, e3);
      }
      static fromJsonString(t3, e3) {
        return new v().fromJsonString(t3, e3);
      }
      static equals(t3, e3) {
        return n2.proto3.util.equals(v, t3, e3);
      }
      static $() {
        return ["InferenceModelConfig|1 max_tokens 5?|2 temperature 2?|3 top_p 2?|4 stop_sequences 9*"];
      }
    }
    class q extends a {
      constructor(t3) {
        super(), this.response = { case: void 0 }, n2.proto3.util.initPartial(t3, this);
      }
      static fromBinary(t3, e3) {
        return new q().fromBinary(t3, e3);
      }
      static fromJson(t3, e3) {
        return new q().fromJson(t3, e3);
      }
      static fromJsonString(t3, e3) {
        return new q().fromJsonString(t3, e3);
      }
      static equals(t3, e3) {
        return n2.proto3.util.equals(q, t3, e3);
      }
      static $() {
        return ["InferenceStreamResponse|1 text_part #0 response|2 tool_call_part #1 response|3 usage #2 response|4 response_info #3 response|5 extended_usage #4 response|6 provider_metadata #5 response|7 invocation_id #6 response|8 error #7 response|9 thinking_part #8 response|10 image_descriptions #9 response|11 lineage_tags #10 response", N, U, Q, O, M, z, W, Y, D, T, R];
      }
    }
    class R extends a {
      constructor(t3) {
        super(), this.tags = [], n2.proto3.util.initPartial(t3, this);
      }
      static fromBinary(t3, e3) {
        return new R().fromBinary(t3, e3);
      }
      static fromJson(t3, e3) {
        return new R().fromJson(t3, e3);
      }
      static fromJsonString(t3, e3) {
        return new R().fromJsonString(t3, e3);
      }
      static equals(t3, e3) {
        return n2.proto3.util.equals(R, t3, e3);
      }
      static $() {
        return ["InferenceLineageTagsInfo|1 tags #0*", P];
      }
    }
    class P extends a {
      constructor(t3) {
        super(), this.messageIndex = 0, this.tag = "", this.reasoningTags = [], n2.proto3.util.initPartial(t3, this);
      }
      static fromBinary(t3, e3) {
        return new P().fromBinary(t3, e3);
      }
      static fromJson(t3, e3) {
        return new P().fromJson(t3, e3);
      }
      static fromJsonString(t3, e3) {
        return new P().fromJsonString(t3, e3);
      }
      static equals(t3, e3) {
        return n2.proto3.util.equals(P, t3, e3);
      }
      static $() {
        return ["InferenceLineageTag|1 message_index 5|2 tag 9|3 reasoning_tags 9*"];
      }
    }
    class T extends a {
      constructor(t3) {
        super(), this.descriptions = [], n2.proto3.util.initPartial(t3, this);
      }
      static fromBinary(t3, e3) {
        return new T().fromBinary(t3, e3);
      }
      static fromJson(t3, e3) {
        return new T().fromJson(t3, e3);
      }
      static fromJsonString(t3, e3) {
        return new T().fromJsonString(t3, e3);
      }
      static equals(t3, e3) {
        return n2.proto3.util.equals(T, t3, e3);
      }
      static $() {
        return ["InferenceImageDescriptionsInfo|1 descriptions #0*", x];
      }
    }
    class x extends a {
      constructor(t3) {
        super(), this.messageIndex = 0, this.partIndex = 0, this.description = "", n2.proto3.util.initPartial(t3, this);
      }
      static fromBinary(t3, e3) {
        return new x().fromBinary(t3, e3);
      }
      static fromJson(t3, e3) {
        return new x().fromJson(t3, e3);
      }
      static fromJsonString(t3, e3) {
        return new x().fromJsonString(t3, e3);
      }
      static equals(t3, e3) {
        return n2.proto3.util.equals(x, t3, e3);
      }
      static $() {
        return ["InferenceImageDescription|1 message_index 5|2 part_index 5|3 exp_content_index 5?|4 description 9"];
      }
    }
    class N extends a {
      constructor(t3) {
        super(), this.text = "", this.isFinal = false, n2.proto3.util.initPartial(t3, this);
      }
      static fromBinary(t3, e3) {
        return new N().fromBinary(t3, e3);
      }
      static fromJson(t3, e3) {
        return new N().fromJson(t3, e3);
      }
      static fromJsonString(t3, e3) {
        return new N().fromJsonString(t3, e3);
      }
      static equals(t3, e3) {
        return n2.proto3.util.equals(N, t3, e3);
      }
      static $() {
        return ["InferenceTextStreamPart|1 text 9|2 is_final 8"];
      }
    }
    class D extends a {
      constructor(t3) {
        super(), this.text = "", this.isFinal = false, n2.proto3.util.initPartial(t3, this);
      }
      static fromBinary(t3, e3) {
        return new D().fromBinary(t3, e3);
      }
      static fromJson(t3, e3) {
        return new D().fromJson(t3, e3);
      }
      static fromJsonString(t3, e3) {
        return new D().fromJsonString(t3, e3);
      }
      static equals(t3, e3) {
        return n2.proto3.util.equals(D, t3, e3);
      }
      static $() {
        return ["InferenceThinkingStreamPart|1 text 9|2 signature 9?|3 is_final 8|4 is_already_summarized 8?|5 model_name 9?|6 redacted_data 9?"];
      }
    }
    class U extends a {
      constructor(t3) {
        super(), this.toolCallId = "", this.toolName = "", this.args = "", this.isComplete = false, n2.proto3.util.initPartial(t3, this);
      }
      static fromBinary(t3, e3) {
        return new U().fromBinary(t3, e3);
      }
      static fromJson(t3, e3) {
        return new U().fromJson(t3, e3);
      }
      static fromJsonString(t3, e3) {
        return new U().fromJsonString(t3, e3);
      }
      static equals(t3, e3) {
        return n2.proto3.util.equals(U, t3, e3);
      }
      static $() {
        return ["InferenceToolCallStreamPart|1 tool_call_id 9|2 tool_name 9|3 args 9|4 is_complete 8|5 tool_index 5?"];
      }
    }
    class Q extends a {
      constructor(t3) {
        super(), this.promptTokens = 0, this.completionTokens = 0, n2.proto3.util.initPartial(t3, this);
      }
      static fromBinary(t3, e3) {
        return new Q().fromBinary(t3, e3);
      }
      static fromJson(t3, e3) {
        return new Q().fromJson(t3, e3);
      }
      static fromJsonString(t3, e3) {
        return new Q().fromJsonString(t3, e3);
      }
      static equals(t3, e3) {
        return n2.proto3.util.equals(Q, t3, e3);
      }
      static $() {
        return ["InferenceUsageInfo|1 prompt_tokens 5|2 completion_tokens 5|3 total_tokens 5?"];
      }
    }
    class M extends a {
      constructor(t3) {
        super(), this.inputTokens = 0, this.outputTokens = 0, this.cacheReadTokens = 0, this.cacheWriteTokens = 0, this.maxTokens = 0, n2.proto3.util.initPartial(t3, this);
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
        return ["InferenceExtendedUsageInfo|1 input_tokens 5|2 output_tokens 5|3 cache_read_tokens 5|4 cache_write_tokens 5|5 max_tokens 5|6 reasoning_tokens 5?"];
      }
    }
    class O extends a {
      constructor(t3) {
        super(), this.id = "", this.model = "", this.createdAt = n2.protoInt64.zero, this.messages = [], n2.proto3.util.initPartial(t3, this);
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
        return ["InferenceResponseInfo|1 id 9|2 model 9|3 created_at 3|4 messages #0*|5 error_message 9?|6 inference_extra_data #1?|7 supports_self_summary 8?|8 early_compaction_context_token_threshold 5?", F, G];
      }
    }
    class F extends a {
      constructor(t3) {
        super(), this.id = "", this.role = l.UNSPECIFIED, this.toolCalls = [], this.reasoningParts = [], this.assistantPartOrder = [], this.assistantTextParts = [], n2.proto3.util.initPartial(t3, this);
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
        return ["InferenceResponseMessage|1 id 9|2 role #0|3 content 9?|4 tool_calls #1*|5 tool_result #2?|6 reasoning_parts #3*|7 model_provider_message_id 9?|8 openai_phase 9?|9 openai_phase_null 8?|10 assistant_part_order #4*|11 assistant_text_parts 9*|12 anthropic_native_content 9?|13 lineage_tag 9?", l, I, L, y, c];
      }
    }
    class L extends a {
      constructor(t3) {
        super(), this.parts = [], n2.proto3.util.initPartial(t3, this);
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
        return ["InferenceToolResultContent|1 parts #0*", $];
      }
    }
    class $ extends a {
      constructor(t3) {
        super(), this.toolCallId = "", this.toolName = "", this.isError = false, this.experimentalContent = [], n2.proto3.util.initPartial(t3, this);
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
        return ["InferenceToolResultPart|1 tool_call_id 9|2 tool_name 9|3 result #0|4 is_error 8|5 experimental_content #1*|6 provider_options #2?|7 cursor_tool_call_is_error 8?", n2.Value, S, j];
      }
    }
    class G extends a {
      constructor(t3) {
        super(), this.tokenLogprobs = [], this.tokenIds = [], this.promptTokenIds = [], this.extraTokens = [], this.extraLogprobs = [], this.routingMatrix = [], n2.proto3.util.initPartial(t3, this);
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
        return ["InferenceExtraData|1 token_logprobs #0*|2 token_ids #1*|3 prompt_token_ids #1*|4 extra_tokens #1*|5 extra_logprobs #0*|6 routing_matrix #2*", H, K, V];
      }
    }
    class H extends a {
      constructor(t3) {
        super(), this.values = [], n2.proto3.util.initPartial(t3, this);
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
        return ["InferenceTokenLogprobs|1 values 1*"];
      }
    }
    class K extends a {
      constructor(t3) {
        super(), this.values = [], n2.proto3.util.initPartial(t3, this);
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
        return ["InferenceTokenIds|1 values 3*"];
      }
    }
    class V extends a {
      constructor(t3) {
        super(), this.values = [], n2.proto3.util.initPartial(t3, this);
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
        return ["InferenceRoutingRow|1 values 9*"];
      }
    }
    class z extends a {
      constructor(t3) {
        super(), n2.proto3.util.initPartial(t3, this);
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
        return ["InferenceProviderMetadataInfo|1 metadata #0", n2.Struct];
      }
    }
    class W extends a {
      constructor(t3) {
        super(), this.invocationId = "", n2.proto3.util.initPartial(t3, this);
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
        return ["InferenceInvocationIdInfo|1 invocation_id 9"];
      }
    }
    class Y extends a {
      constructor(t3) {
        super(), this.message = "", this.code = "", this.isInputTokenLimitError = false, this.isOutputTokenLimitError = false, this.errorType = m.UNSPECIFIED, n2.proto3.util.initPartial(t3, this);
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
        return ["InferenceStreamError|1 message 9|2 code 9|3 is_input_token_limit_error 8|4 is_output_token_limit_error 8|5 error_type #0", m];
      }
    }
    class j extends a {
      constructor(t3) {
        super(), n2.proto3.util.initPartial(t3, this);
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
        return ["InferenceProviderOptions|1 anthropic #0?|2 cursor #1?", Z, X];
      }
    }
    class X extends a {
      constructor(t3) {
        super(), this.imageDescriptions = {}, n2.proto3.util.initPartial(t3, this);
      }
      static fromBinary(t3, e3) {
        return new X().fromBinary(t3, e3);
      }
      static fromJson(t3, e3) {
        return new X().fromJson(t3, e3);
      }
      static fromJsonString(t3, e3) {
        return new X().fromJsonString(t3, e3);
      }
      static equals(t3, e3) {
        return n2.proto3.util.equals(X, t3, e3);
      }
      static $() {
        return ["InferenceCursorOptions|1 image_description 9?|2 image_descriptions 5,9|3 image_content_sha256 9?"];
      }
    }
    class Z extends a {
      constructor(t3) {
        super(), n2.proto3.util.initPartial(t3, this);
      }
      static fromBinary(t3, e3) {
        return new Z().fromBinary(t3, e3);
      }
      static fromJson(t3, e3) {
        return new Z().fromJson(t3, e3);
      }
      static fromJsonString(t3, e3) {
        return new Z().fromJsonString(t3, e3);
      }
      static equals(t3, e3) {
        return n2.proto3.util.equals(Z, t3, e3);
      }
      static $() {
        return ["InferenceAnthropicOptions|1 cache_control #0?", tt];
      }
    }
    class tt extends a {
      constructor(t3) {
        super(), this.type = "", n2.proto3.util.initPartial(t3, this);
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
        return ["InferenceCacheControl|1 type 9"];
      }
    }
    class et extends a {
      constructor(t3) {
        super(), this.requestId = "", this.replyingToRequestId = "", this.messages = [], this.messageRequestIds = [], n2.proto3.util.initPartial(t3, this);
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
        return ["AgentFollowupCategorizationRequest|1 request_id 9|2 replying_to_request_id 9|3 messages #0*|4 conversation_id 9?|5 agent_mode 9?|6 model_name 9?|7 served_model_name 9?|8 turn_agent_mode 9?|9 message_request_ids 9*", _];
      }
    }
    class rt extends a {
      constructor(t3) {
        super(), this.requestId = "", this.messages = [], this.externalSends = [], this.parentMessages = [], n2.proto3.util.initPartial(t3, this);
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
        return ["AgentPostTurnLabelingRequest|1 request_id 9|2 messages #0*|3 conversation_id 9?|4 agent_mode 9?|5 model_name 9?|6 external_sends #1*|7 external_send_only 8?|8 request_source 9?|9 is_subagent 8?|10 parent_messages #0*|11 external_send_reported 8?|12 turn_agent_mode 9?", _, nt];
      }
    }
    class nt extends a {
      constructor(t3) {
        super(), this.toolCallId = "", this.toolName = "", this.connector = "", this.humanApprovedCard = false, n2.proto3.util.initPartial(t3, this);
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
        return ["AgentPostTurnExternalSend|1 tool_call_id 9|2 tool_name 9|3 connector 9|4 human_approved_card 8"];
      }
    }
    class st extends a {
      constructor(t3) {
        super(), this.message = { case: void 0 }, n2.proto3.util.initPartial(t3, this);
      }
      static fromBinary(t3, e3) {
        return new st().fromBinary(t3, e3);
      }
      static fromJson(t3, e3) {
        return new st().fromJson(t3, e3);
      }
      static fromJsonString(t3, e3) {
        return new st().fromJsonString(t3, e3);
      }
      static equals(t3, e3) {
        return n2.proto3.util.equals(st, t3, e3);
      }
      static $() {
        return ["RunInferenceClientMessage|1 run_request #0 message|2 invoke_model #1 message|3 cancel_invocation #2 message|4 finish_run #3 message|5 client_heartbeat #4 message|6 agent_event #5 message|7 run_request_log #6 message|9 resolve_subagent_models #7 message", ct, pt, ht, gt, it, ut, ot, at];
      }
    }
    class it extends a {
      constructor(t3) {
        super(), n2.proto3.util.initPartial(t3, this);
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
        return ["RunInferenceClientHeartbeat"];
      }
    }
    class ot extends a {
      constructor(t3) {
        super(), this.agentRunRequest = new Uint8Array(0), n2.proto3.util.initPartial(t3, this);
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
        return ["RunInferenceRunRequestLog|1 agent_run_request 12"];
      }
    }
    class at extends a {
      constructor(t3) {
        super(), this.resolutionId = "", this.requestedModels = [], n2.proto3.util.initPartial(t3, this);
      }
      static fromBinary(t3, e3) {
        return new at().fromBinary(t3, e3);
      }
      static fromJson(t3, e3) {
        return new at().fromJson(t3, e3);
      }
      static fromJsonString(t3, e3) {
        return new at().fromJsonString(t3, e3);
      }
      static equals(t3, e3) {
        return n2.proto3.util.equals(at, t3, e3);
      }
      static $() {
        return ["RunInferenceResolveSubagentModels|1 resolution_id 9|2 requested_models 9*"];
      }
    }
    class ut extends a {
      constructor(t3) {
        super(), this.methodName = "", this.optionsJson = "", n2.proto3.util.initPartial(t3, this);
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
        return ["RunInferenceAgentEvent|1 method_name 9|2 options_json 9|3 client_reported_at_ms 3?"];
      }
    }
    class ct extends a {
      constructor(t3) {
        super(), this.conversationId = "", this.routingConversation = [], this.selectedSubagentModels = [], this.subagentModelOverrides = [], this.supportsLongReasoningReminder = false, this.supportsAgentLoopError = false, n2.proto3.util.initPartial(t3, this);
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
        return ["RunInferenceRunRequest|1 conversation_id 9|2 conversation_group_id 9?|3 requested_model #0|4 routing_conversation #1*|5 agent_mode 9?|6 subagent_type_name 9?|7 selected_subagent_models #0*|8 subagent_model_overrides #2*|9 is_summarize_action 8?|10 supports_long_reasoning_reminder 8|11 agent_module #3?|12 previous_request_id 9?|15 execute_plan #4?|16 turn_agent_mode 9?|17 supports_agent_loop_error 8", g, ft, dt, mt, lt];
      }
    }
    class lt extends a {
      constructor(t3) {
        super(), n2.proto3.util.initPartial(t3, this);
      }
      static fromBinary(t3, e3) {
        return new lt().fromBinary(t3, e3);
      }
      static fromJson(t3, e3) {
        return new lt().fromJson(t3, e3);
      }
      static fromJsonString(t3, e3) {
        return new lt().fromJsonString(t3, e3);
      }
      static equals(t3, e3) {
        return n2.proto3.util.equals(lt, t3, e3);
      }
      static $() {
        return ["RunInferenceExecutePlan|1 plan_file_uri 9?|2 plan_file_content 9?"];
      }
    }
    class mt extends a {
      constructor(t3) {
        super(), this.generation = "", this.source = d.UNSPECIFIED, this.channel = "", this.interfaceRevision = 0, this.promptVersions = [], n2.proto3.util.initPartial(t3, this);
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
        return ["RunInferenceAgentModule|1 generation 9|2 source #0|3 channel 9|4 commit 9?|5 interface_revision 13|6 prompt_versions 9*", d];
      }
    }
    class dt extends a {
      constructor(t3) {
        super(), this.subagentType = "", this.selection = { case: void 0 }, n2.proto3.util.initPartial(t3, this);
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
        return ["RunInferenceSubagentModelOverride|1 subagent_type 9|2 model #0 selection|3 inherit 8 selection|4 disabled 8 selection", g];
      }
    }
    class ft extends a {
      constructor(t3) {
        super(), this.role = f.UNSPECIFIED, this.text = "", n2.proto3.util.initPartial(t3, this);
      }
      static fromBinary(t3, e3) {
        return new ft().fromBinary(t3, e3);
      }
      static fromJson(t3, e3) {
        return new ft().fromJson(t3, e3);
      }
      static fromJsonString(t3, e3) {
        return new ft().fromJsonString(t3, e3);
      }
      static equals(t3, e3) {
        return n2.proto3.util.equals(ft, t3, e3);
      }
      static $() {
        return ["RunInferenceRoutingMessage|1 role #0|2 text 9", f];
      }
    }
    class pt extends a {
      constructor(t3) {
        super(), this.invocationId = "", this.purpose = p.UNSPECIFIED, n2.proto3.util.initPartial(t3, this);
      }
      static fromBinary(t3, e3) {
        return new pt().fromBinary(t3, e3);
      }
      static fromJson(t3, e3) {
        return new pt().fromJson(t3, e3);
      }
      static fromJsonString(t3, e3) {
        return new pt().fromJsonString(t3, e3);
      }
      static equals(t3, e3) {
        return n2.proto3.util.equals(pt, t3, e3);
      }
      static $() {
        return ["RunInferenceInvokeModel|1 invocation_id 9|2 request #0|3 purpose #1", h, p];
      }
    }
    class ht extends a {
      constructor(t3) {
        super(), this.invocationId = "", n2.proto3.util.initPartial(t3, this);
      }
      static fromBinary(t3, e3) {
        return new ht().fromBinary(t3, e3);
      }
      static fromJson(t3, e3) {
        return new ht().fromJson(t3, e3);
      }
      static fromJsonString(t3, e3) {
        return new ht().fromJsonString(t3, e3);
      }
      static equals(t3, e3) {
        return n2.proto3.util.equals(ht, t3, e3);
      }
      static $() {
        return ["RunInferenceCancelInvocation|1 invocation_id 9"];
      }
    }
    class gt extends a {
      constructor(t3) {
        super(), this.aborted = false, n2.proto3.util.initPartial(t3, this);
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
        return ["RunInferenceFinishRun|1 aborted 8|2 turn_completed 8?"];
      }
    }
    class At extends a {
      constructor(t3) {
        super(), this.message = { case: void 0 }, n2.proto3.util.initPartial(t3, this);
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
        return ["RunInferenceServerMessage|1 heartbeat #0 message|2 run_ready #1 message|3 invocation_response #2 message|4 invocation_end #3 message|5 subagent_models_resolved #4 message", _t, St, Nt, Dt, yt];
      }
    }
    class _t extends a {
      constructor(t3) {
        super(), n2.proto3.util.initPartial(t3, this);
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
        return ["RunInferenceHeartbeat"];
      }
    }
    class yt extends a {
      constructor(t3) {
        super(), this.resolutionId = "", this.models = [], n2.proto3.util.initPartial(t3, this);
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
        return ["RunInferenceSubagentModelsResolved|1 resolution_id 9|2 models #0*", wt];
      }
    }
    class wt extends a {
      constructor(t3) {
        super(), this.requested = "", n2.proto3.util.initPartial(t3, this);
      }
      static fromBinary(t3, e3) {
        return new wt().fromBinary(t3, e3);
      }
      static fromJson(t3, e3) {
        return new wt().fromJson(t3, e3);
      }
      static fromJsonString(t3, e3) {
        return new wt().fromJsonString(t3, e3);
      }
      static equals(t3, e3) {
        return n2.proto3.util.equals(wt, t3, e3);
      }
      static $() {
        return ["RunInferenceResolvedSubagentModel|1 requested 9|2 resolved_slug 9?"];
      }
    }
    class St extends a {
      constructor(t3) {
        super(), this.supportsSelfSummary = false, this.nonFileRules = [], this.acceptsClientHeartbeat = false, this.acceptsAgentEvents = false, this.agentRunRequestLogRequested = false, this.kvBlobTelemetryEnabled = false, this.acceptsAbortedFinish = false, this.metricLabels = {}, this.acceptsSubagentModelResolution = false, n2.proto3.util.initPartial(t3, this);
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
        return ["RunInferenceRunReady|1 resolved_model #0|2 supports_self_summary 8|3 routed_model_display_name 9?|4 prompt_model_metadata #1|5 summarization #2|6 non_file_rules #3*|7 accepts_client_heartbeat 8|8 accepts_agent_events 8|10 agent_run_request_log_requested 8|9 kv_blob_telemetry_enabled 8|13 accepts_aborted_finish 8|12 metric_labels 9,9|14 accepts_subagent_model_resolution 8", g, Et, Jt, s2.DX];
      }
    }
    class Jt extends a {
      constructor(t3) {
        super(), this.isFallbackToMainModel = false, this.maxPromptChars = 0, n2.proto3.util.initPartial(t3, this);
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
        return ["RunInferenceSummarizationConfig|1 model #0|2 is_fallback_to_main_model 8|3 max_prompt_chars 5|4 background #1", g, Bt];
      }
    }
    class Bt extends a {
      constructor(t3) {
        super(), this.requireTriggerThresholdForMidLoopPersist = false, this.discardOnError = false, n2.proto3.util.initPartial(t3, this);
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
        return ["RunInferenceBackgroundSummarizationConfig|1 unused_tokens_threshold_to_start 5?|2 unused_percent_tokens_threshold_to_start 1?|3 unused_tokens_threshold_to_persist 5?|4 unused_percent_tokens_threshold_to_persist 1?|5 require_trigger_threshold_for_mid_loop_persist 8|6 discard_on_error 8"];
      }
    }
    class Et extends a {
      constructor(t3) {
        super(), this.vendor = "", this.promptVersion = "", this.isSonnet45 = false, this.isGemini3 = false, this.isGpt51 = false, this.isGpt52 = false, this.isGpt5 = false, this.isGpt55 = false, this.isGpt56 = false, this.isSonnet4 = false, this.isCodexFamily = false, this.isGpt54 = false, this.isGpt52Codex = false, this.isGpt53Codex = false, this.isGpt53CodexSpark = false, this.isClaude4x = false, this.isOpus45 = false, this.isOpus46 = false, this.isOpus48 = false, this.isOpus5 = false, this.isOpus55 = false, this.isFable5 = false, this.isFable51 = false, this.isFruitcake = false, this.isGpt5Family = false, this.isComposer1 = false, this.isComposer15 = false, this.isComposer2 = false, this.isComposerMatterhorn = false, this.isGrok45ProductPrompt = false, this.isRawTrainingSlug = false, this.isGrok46ProductPrompt = false, this.useDsv3Harness = false, this.persona = "", this.featureFlags = {}, this.supportsAssistantMessagePrefill = false, this.enableLineNumbers = false, this.useSparseReadLineNumbers = false, this.selfIdentityName = "", this.agentModeConfigs = [], this.postToolReminders = [], n2.proto3.util.initPartial(t3, this);
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
        return ["RunInferencePromptModelMetadata|1 vendor 9|2 prompt_version 9|3 is_sonnet45 8|4 is_gemini3 8|5 is_gpt51 8|6 is_gpt52 8|7 is_gpt5 8|8 is_gpt55 8|9 is_gpt56 8|10 is_sonnet4 8|11 is_codex_family 8|12 is_gpt54 8|13 is_gpt52_codex 8|14 is_gpt53_codex 8|15 is_gpt53_codex_spark 8|16 is_claude_4x 8|17 is_opus45 8|18 is_opus46 8|19 is_opus48 8|20 is_opus5 8|50 is_opus55 8|21 is_fable5 8|43 is_fable51 8|22 is_fruitcake 8|23 is_gpt5_family 8|24 is_composer1 8|25 is_composer15 8|26 is_composer2 8|27 is_composer_matterhorn 8|28 is_grok45_product_prompt 8|29 is_raw_training_slug 8|34 is_grok46_product_prompt 8|30 reasoning_effort 9?|31 use_dsv3_harness 8|32 agent_token_limit 5?|33 estimated_cache_ttl_ms 5?|35 persona 9|36 feature_flags 9,#0|37 loop_nudge #1?|38 progress_reminder_threshold 5?|39 effort_level 9?|40 supports_assistant_message_prefill 8|41 enable_line_numbers 8|42 use_sparse_read_line_numbers 8|44 self_identity_name 9|45 dsv3_is_thinking 8?|46 agent_mode_configs #2*|47 use_new_plan_mode_prompts 8?|48 ask_question_config #3?|49 subagent_model_config #4?|51 post_tool_reminders #5*|52 enable_semantic_search 8?|53 long_reasoning_reminder #6?|54 smart_mode_classifier_mode 8?|55 smart_mode_classifier_shadow_mode 8?", Tt, xt, Rt, qt, bt, It, Ct];
      }
    }
    class It extends a {
      constructor(t3) {
        super(), this.id = "", n2.proto3.util.initPartial(t3, this);
      }
      static fromBinary(t3, e3) {
        return new It().fromBinary(t3, e3);
      }
      static fromJson(t3, e3) {
        return new It().fromJson(t3, e3);
      }
      static fromJsonString(t3, e3) {
        return new It().fromJsonString(t3, e3);
      }
      static equals(t3, e3) {
        return n2.proto3.util.equals(It, t3, e3);
      }
      static $() {
        return ["RunInferencePostToolReminder|1 id 9|2 interval_tool_calls 13?"];
      }
    }
    class Ct extends a {
      constructor(t3) {
        super(), this.arm = "", this.enabled = false, this.thresholdTokens = 0, this.delayCalls = 0, this.reminderText = "", n2.proto3.util.initPartial(t3, this);
      }
      static fromBinary(t3, e3) {
        return new Ct().fromBinary(t3, e3);
      }
      static fromJson(t3, e3) {
        return new Ct().fromJson(t3, e3);
      }
      static fromJsonString(t3, e3) {
        return new Ct().fromJsonString(t3, e3);
      }
      static equals(t3, e3) {
        return n2.proto3.util.equals(Ct, t3, e3);
      }
      static $() {
        return ["RunInferenceLongReasoningReminderConfig|1 arm 9|2 enabled 8|3 threshold_tokens 13|4 delay_calls 13|5 reminder_text 9"];
      }
    }
    class bt extends a {
      constructor(t3) {
        super(), this.forcePolicy = "", this.parentMaxMode = false, this.models = [], this.overrides = [], this.taskToolOmitted = false, this.parentRequestedModelName = "", n2.proto3.util.initPartial(t3, this);
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
        return ["RunInferenceSubagentModelConfig|1 force_policy 9|2 force_model_id 9?|3 parent_max_mode 8|4 models #0*|5 overrides #1*|6 task_tool_omitted 8|7 parent_requested_model_name 9", kt, vt];
      }
    }
    class kt extends a {
      constructor(t3) {
        super(), this.slug = "", this.advertised = false, this.valid = false, this.blocked = false, this.requiresMaxMode = false, this.representativeCostDollars = 0, this.legacyAliases = [], n2.proto3.util.initPartial(t3, this);
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
        return ["RunInferenceSubagentModelPolicy|1 slug 9|2 advertised 8|3 valid 8|4 blocked 8|5 requires_max_mode 8|6 representative_cost_dollars 1|7 legacy_aliases 9*"];
      }
    }
    class vt extends a {
      constructor(t3) {
        super(), this.subagentType = "", this.kind = "", n2.proto3.util.initPartial(t3, this);
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
        return ["RunInferenceResolvedSubagentModelOverride|1 subagent_type 9|2 kind 9|3 model_id 9?"];
      }
    }
    class qt extends a {
      constructor(t3) {
        super(), this.toolName = "", this.autoRejectFirst = false, n2.proto3.util.initPartial(t3, this);
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
        return ["RunInferenceAskQuestionConfig|1 tool_name 9|2 auto_reject_first 8"];
      }
    }
    class Rt extends a {
      constructor(t3) {
        super(), this.modeId = "", this.enableAskQuestionTool = false, n2.proto3.util.initPartial(t3, this);
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
        return ["RunInferenceAgentModeConfig|1 mode_id 9|2 enable_ask_question_tool 8|3 switch_mode_tool_config #0?", Pt];
      }
    }
    class Pt extends a {
      constructor(t3) {
        super(), this.targetModes = [], n2.proto3.util.initPartial(t3, this);
      }
      static fromBinary(t3, e3) {
        return new Pt().fromBinary(t3, e3);
      }
      static fromJson(t3, e3) {
        return new Pt().fromJson(t3, e3);
      }
      static fromJsonString(t3, e3) {
        return new Pt().fromJsonString(t3, e3);
      }
      static equals(t3, e3) {
        return n2.proto3.util.equals(Pt, t3, e3);
      }
      static $() {
        return ["RunInferenceSwitchModeToolConfig|1 target_modes 9*"];
      }
    }
    class Tt extends a {
      constructor(t3) {
        super(), this.value = { case: void 0 }, n2.proto3.util.initPartial(t3, this);
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
        return ["RunInferenceFlagValue|1 bool_value 8 value|2 number_value 1 value|3 string_value 9 value"];
      }
    }
    class xt extends a {
      constructor(t3) {
        super(), this.minRepetitions = 0, this.minMessageLength = 0, this.injectReminder = false, n2.proto3.util.initPartial(t3, this);
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
        return ["RunInferenceLoopNudgeConfig|1 min_repetitions 5|2 min_message_length 5|3 inject_reminder 8"];
      }
    }
    class Nt extends a {
      constructor(t3) {
        super(), this.invocationId = "", n2.proto3.util.initPartial(t3, this);
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
        return ["RunInferenceInvocationResponse|1 invocation_id 9|2 response #0", q];
      }
    }
    class Dt extends a {
      constructor(t3) {
        super(), this.invocationId = "", n2.proto3.util.initPartial(t3, this);
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
        return ["RunInferenceInvocationEnd|1 invocation_id 9|2 error #0?", Ut];
      }
    }
    class Ut extends a {
      constructor(t3) {
        super(), this.code = 0, this.message = "", this.details = [], n2.proto3.util.initPartial(t3, this);
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
        return ["RunInferenceInvocationError|1 code 5|2 message 9|3 details #0*", Qt];
      }
    }
    class Qt extends a {
      constructor(t3) {
        super(), this.type = "", this.value = new Uint8Array(0), n2.proto3.util.initPartial(t3, this);
      }
      static fromBinary(t3, e3) {
        return new Qt().fromBinary(t3, e3);
      }
      static fromJson(t3, e3) {
        return new Qt().fromJson(t3, e3);
      }
      static fromJsonString(t3, e3) {
        return new Qt().fromJsonString(t3, e3);
      }
      static equals(t3, e3) {
        return n2.proto3.util.equals(Qt, t3, e3);
      }
      static $() {
        return ["RunInferenceErrorDetail|1 type 9|2 value 12"];
      }
    }
  }